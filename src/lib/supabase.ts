import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const configured = !!(url && key);
export const supabase = configured ? createClient(url, key) : null;
const requests = new WeakMap<File, Map<string, string>>();
async function invokeDrive(body: Record<string, unknown>) {
  if (!supabase) throw Error("Layanan belum tersedia.");
  const { data, error } = await supabase.functions.invoke("proof-drive", {
    body,
  });
  if (error) {
    let message =
      "Penghubung bukti belum dapat dihubungi. Periksa deployment proof-drive dan ALLOWED_ORIGINS, lalu coba lagi.";
    try {
      message = (await error.context?.json())?.error || message;
    } catch {}
    throw Error(message);
  }
  if (data?.error) throw Error(data.error);
  return data;
}
export async function rpc(name: string, args: Record<string, unknown> = {}) {
  if (!supabase)
    throw new Error(
      "Layanan akun belum dikonfigurasi. Prompt gratis tetap dapat digunakan.",
    );
  const { data, error } = await supabase.rpc(name, args);
  if (error) throw error;
  return data;
}
export async function uploadProof(file: File, kind: "donations" | "payouts") {
  if (!supabase) throw Error("Layanan belum tersedia.");
  if (
    !["image/jpeg", "image/png", "application/pdf"].includes(file.type) ||
    file.size > 5 * 1024 * 1024 ||
    !file.size
  )
    throw Error("Pilih JPG, PNG, atau PDF maksimal 5 MB.");
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw Error("Masuk terlebih dahulu.");
  const { data: setting, error: settingsError } = await supabase
    .from("app_settings")
    .select("setting_value")
    .eq("setting_key", "proof_provider")
    .maybeSingle();
  if (settingsError)
    throw Error(
      "Pengaturan unggahan belum siap. Pengelola perlu menerapkan migrasi terbaru.",
    );
  if (!setting || !["drive", "supabase"].includes(setting.setting_value))
    throw Error(
      "Provider bukti tidak ditemukan atau tidak valid. Hubungi pengelola; file belum diunggah.",
    );
  if (setting.setting_value === "drive") {
    let map = requests.get(file);
    if (!map) {
      map = new Map();
      requests.set(file, map);
    }
    if (!map.has(kind)) map.set(kind, crypto.randomUUID());
    const bytes = new Uint8Array(await file.arrayBuffer());
    let binary = "";
    for (let n = 0; n < bytes.length; n += 8192)
      binary += String.fromCharCode(...bytes.slice(n, n + 8192));
    const data = await invokeDrive({
      action: "upload",
      request_id: map.get(kind),
      kind,
      mime: file.type,
      base64: btoa(binary),
    });
    if (
      typeof data?.path !== "string" ||
      !data.path.startsWith(`${user.id}/${kind}/`)
    )
      throw Error(
        "Respons penghubung bukti tidak valid. Donasi belum diajukan.",
      );
    return data.path as string;
  }
  const ext =
    file.type === "application/pdf"
      ? "pdf"
      : file.type === "image/png"
        ? "png"
        : "jpg";
  const path = `${user.id}/${kind}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from("proofs")
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw error;
  return path;
}
export async function proofUrl(path: string) {
  if (!supabase) throw Error("Layanan belum tersedia.");
  const { data: drive, error: lookupError } = await supabase
    .from("proof_files")
    .select("id")
    .eq("proof_path", path)
    .maybeSingle();
  if (lookupError) throw Error("Metadata bukti tidak dapat diperiksa.");
  if (drive) {
    const data = await invokeDrive({ action: "read", path });
    const bytes = Uint8Array.from(atob(data.base64), (c) => c.charCodeAt(0));
    const url = URL.createObjectURL(new Blob([bytes], { type: data.mime }));
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    return url;
  }
  const { data, error } = await supabase.storage
    .from("proofs")
    .createSignedUrl(path, 60);
  if (error) throw error;
  return data.signedUrl;
}
export async function query(table: string) {
  if (!supabase) return [];
  const sort =
    table === "app_settings"
      ? "setting_key"
      : table === "partners"
        ? "user_id"
        : table === "public_partners"
          ? "referral_code"
          : table.startsWith("public_")
            ? "created_at"
            : "id";
  const rows: any[] = [];
  for (let start = 0; ; start += 500) {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .order(sort)
      .range(start, start + 499);
    if (error) throw error;
    rows.push(...(data || []));
    if (!data || data.length < 500) return rows;
  }
}
export const rupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
export const date = (value: string) =>
  new Date(value).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });

export async function checkDrive() {
  const data = await invokeDrive({ action: "health" });
  if (data?.ok !== true || data?.bridge_version !== "2026-10-04")
    throw Error(
      "Versi penghubung belum cocok. Deploy ulang proof-drive dan Apps Script terbaru.",
    );
  return data;
}
