// Server only. SUPABASE_SERVICE_ROLE_KEY and DRIVE_BRIDGE_SECRET never enter Vite.
import { createClient } from "npm:@supabase/supabase-js@2";
import { fileMime, signPayload, validateBridgeReply } from "./protocol.mjs";
const env = (name: string) => {
  const value = Deno.env.get(name);
  if (!value) throw Error(`Konfigurasi server belum lengkap: ${name}.`);
  return value;
};
function headers(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowed = (Deno.env.get("ALLOWED_ORIGINS") || "")
    .split(",")
    .map((x) => x.trim());
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : "null",
    "Access-Control-Allow-Headers":
      "authorization, apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
    "Cache-Control": "no-store",
  };
}
async function bridge(payload: Record<string, unknown>) {
  const url = env("DRIVE_BRIDGE_URL");
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url))
    throw Error("URL Apps Script tidak valid.");
  const envelope = await signPayload(payload, env("DRIVE_BRIDGE_SECRET"));
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(envelope),
    signal: AbortSignal.timeout(50000),
  });
  if (!res.ok) throw Error("Penghubung Drive tidak merespons.");
  let result;
  try {
    result = await res.json();
  } catch {
    throw Error(
      "Apps Script tidak mengembalikan JSON. Periksa URL /exec dan akses Web App.",
    );
  }
  return validateBridgeReply(result);
}
Deno.serve(async (req) => {
  const response = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: headers(req) });
  if (req.method === "OPTIONS")
    return new Response(null, { status: 204, headers: headers(req) });
  if (req.method !== "POST")
    return response({ error: "Metode tidak didukung." }, 405);
  try {
    const url = env("SUPABASE_URL"),
      anon = env("SUPABASE_ANON_KEY");
    const token = req.headers.get("Authorization")?.replace(/^Bearer /i, "");
    if (!token) return response({ error: "Masuk terlebih dahulu." }, 401);
    const userClient = createClient(url, anon, {
      global: { headers: { Authorization: `Bearer ${token}` } },
      auth: { persistSession: false },
    });
    const {
      data: { user },
      error: authError,
    } = await userClient.auth.getUser(token);
    if (authError || !user)
      return response({ error: "Sesi tidak valid." }, 401);
    const raw = await req.text();
    if (raw.length > 7100000)
      return response({ error: "Berkas terlalu besar." }, 413);
    const body = JSON.parse(raw);
    if (body.action === "health") {
      const { data: profile } = await userClient
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .single();
      if (!profile?.is_admin)
        return response({ error: "Pemeriksaan hanya untuk admin." }, 403);
      env("SUPABASE_SERVICE_ROLE_KEY");
      const { error: tableError } = await userClient
        .from("proof_files")
        .select("id")
        .limit(1);
      if (tableError)
        throw Error("Tabel proof_files atau hak akses belum siap.");
      const result = await bridge({
        action: "health",
        request_id: crypto.randomUUID(),
      });
      if (result.bridge_version !== "2026-10-04")
        throw Error("Deploy versi Apps Script terbaru terlebih dahulu.");
      return response({ ok: true, bridge_version: result.bridge_version });
    }
    if (body.action === "read") {
      const { data: proof, error } = await userClient
        .from("proof_files")
        .select("*")
        .eq("proof_path", body.path)
        .eq("status", "ready")
        .single();
      if (error || !proof)
        return response({ error: "Bukti tidak tersedia untuk akun ini." }, 403);
      const result = await bridge({
        action: "read",
        request_id: proof.id,
        file_id: proof.drive_file_id,
      });
      if (result.mime !== proof.mime_type || result.size !== proof.byte_size)
        throw Error("Metadata bukti tidak cocok.");
      return response({ base64: result.base64, mime: result.mime });
    }
    if (body.action !== "upload")
      return response({ error: "Tindakan tidak didukung." }, 400);
    const { data: setting, error: settingError } = await userClient
      .from("app_settings")
      .select("setting_value")
      .eq("setting_key", "proof_provider")
      .single();
    if (settingError)
      throw Error("Pengaturan provider belum dapat dibaca di server.");
    if (setting?.setting_value !== "drive")
      throw Error("Penyimpanan Drive belum diaktifkan.");
    if (
      !/^[0-9a-f-]{36}$/i.test(body.request_id) ||
      !["donations", "payouts"].includes(body.kind) ||
      typeof body.base64 !== "string"
    )
      throw Error("Data unggahan tidak valid.");
    const binary = Uint8Array.from(atob(body.base64), (c) => c.charCodeAt(0));
    const mime = fileMime(binary);
    if (
      !mime ||
      mime !== body.mime ||
      binary.length < 1 ||
      binary.length > 5242880
    )
      throw Error("Pilih berkas JPG, PNG, atau PDF yang valid, maksimal 5 MB.");
    const service = createClient(url, env("SUPABASE_SERVICE_ROLE_KEY"), {
      auth: { persistSession: false },
    });
    const { data: reservation, error } = await service.rpc(
      "reserve_drive_proof",
      {
        p_id: body.request_id,
        p_owner: user.id,
        p_kind: body.kind,
        p_mime: mime,
        p_size: binary.length,
      },
    );
    if (error) throw Error("Reservasi proof_files gagal: " + error.message);
    const proof = Array.isArray(reservation) ? reservation[0] : reservation;
    if (!proof) throw Error("Reservasi unggahan gagal.");
    if (proof.status === "ready") return response({ path: proof.proof_path });
    const result = await bridge({
      action: "upload",
      request_id: proof.id,
      user_id: user.id,
      kind: body.kind,
      mime,
      base64: body.base64,
      size: binary.length,
    });
    if (
      typeof result.file_id !== "string" ||
      !/^[\w-]{10,200}$/.test(result.file_id) ||
      result.size !== binary.length ||
      result.mime !== mime
    )
      throw Error("Respons Drive tidak sesuai unggahan.");
    const { error: saveError } = await service
      .from("proof_files")
      .update({
        drive_file_id: result.file_id,
        drive_url:
          "https://drive.google.com/file/d/" + result.file_id + "/view",
        status: "ready",
      })
      .eq("id", proof.id);
    if (saveError)
      throw Error(
        "Bukti diterima Drive tetapi pencatatan belum selesai. Coba ulangi unggahan.",
      );
    return response({ path: proof.proof_path });
  } catch (e) {
    return response(
      { error: e instanceof Error ? e.message : "Unggahan gagal." },
      400,
    );
  }
});
