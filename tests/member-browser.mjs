// Contract/UI tests with mocked Supabase HTTP. Not a production OAuth test.
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
const root = fileURLToPath(new URL("../", import.meta.url));
const server = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "--host",
    "127.0.0.1",
    "--port",
    "5278",
    "--strictPort",
    "--config",
    "tests/vite.mock.ts",
  ],
  {
    cwd: root,
    env: {
      ...process.env,
      VITE_SUPABASE_URL: "https://maharati-test.supabase.co",
      VITE_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_mock_for_local_tests_only",
    },
    stdio: "pipe",
  },
);
let serverOutput = "";
server.stdout.on("data", (x) => (serverOutput += x));
server.stderr.on("data", (x) => (serverOutput += x));
let browser;
let checks = 0;
try {
  for (let i = 0; i < 80; i++) {
    if (server.exitCode !== null)
      throw Error(serverOutput || "Test server exited");
    try {
      const r = await fetch("http://127.0.0.1:5278");
      if (r.ok) break;
    } catch {}
    if (i === 79) throw Error(serverOutput || "Test server failed");
    await new Promise((r) => setTimeout(r, 250));
  }
  browser = await chromium.launch({
    channel: process.env.PLAYWRIGHT_CHANNEL || "msedge",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1366, height: 900 },
  });
  const uid = "00000000-0000-4000-8000-000000000001";
  const user = {
    id: uid,
    email: "guru@example.invalid",
    aud: "authenticated",
    role: "authenticated",
    app_metadata: { provider: "google", providers: ["google"] },
    user_metadata: { full_name: "Guru Uji" },
    identities: [],
    created_at: new Date().toISOString(),
  };
  const profile = {
    id: uid,
    display_name: "Guru Uji",
    institution: "SMP Uji",
    is_member: true,
    is_admin: false,
  };
  const b64 = (v) => Buffer.from(JSON.stringify(v)).toString("base64url");
  const token =
    b64({ alg: "HS256", typ: "JWT" }) +
    "." +
    b64({
      sub: uid,
      role: "authenticated",
      exp: Math.floor(Date.now() / 1000) + 3600,
    }) +
    ".test-signature";
  const session = {
    access_token: token,
    refresh_token: "test-only",
    expires_at: Math.floor(Date.now() / 1000) + 3600,
    expires_in: 3600,
    token_type: "bearer",
    user,
  };
  await context.addInitScript(
    (session) =>
      localStorage.setItem(
        "sb-maharati-test-auth-token",
        JSON.stringify(session),
      ),
    session,
  );
  let projects = [],
    donations = [],
    failSave = false,
    counter = 0;
  const rpcCalls = [];
  let driveEnabled = false,
    driveFail = true;
  const driveCalls = [];
  await context.route("https://maharati-test.supabase.co/**", async (route) => {
    const req = route.request(),
      url = new URL(req.url()),
      method = req.method();
    const respond = (body, status = 200) =>
      route.fulfill({
        status,
        contentType: "application/json",
        body: JSON.stringify(body),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Expose-Headers": "Content-Range",
          "Content-Range": `0-0/1`,
        },
      });
    if (url.pathname === "/auth/v1/user") return respond(user);
    if (url.pathname === "/functions/v1/proof-drive") {
      const body = req.postDataJSON();
      driveCalls.push(body);
      if (body.action === "health")
        return respond({ ok: true, bridge_version: "2026-10-04" });
      if (body.action === "read")
        return respond({ base64: "iVBORw0KGgo=", mime: "image/png" });
      if (driveFail) {
        driveFail = false;
        return respond({ error: "Gangguan Drive uji. Coba ulangi." }, 503);
      }
      return respond({ path: uid + "/donations/" + body.request_id + ".png" });
    }
    if (url.pathname.includes("/auth/v1/logout")) return respond({});
    if (url.pathname.includes("/storage/v1/object/"))
      return respond({ Key: "proofs/test" });
    const table = url.pathname.split("/").at(-1),
      single = (req.headers().accept || "").includes("vnd.pgrst.object");
    if (table === "app_settings") {
      const row = {
        setting_key: "proof_provider",
        setting_value: driveEnabled ? "drive" : "supabase",
      };
      return respond(single ? row : [row]);
    }
    if (table === "proof_files")
      return respond(single ? { id: "drive-test" } : [{ id: "drive-test" }]);
    if (url.pathname.includes("/rpc/")) {
      const body = req.postDataJSON();
      rpcCalls.push({ name: table, body });
      if (table === "submit_donation")
        donations.push({
          id: "d1",
          user_id: uid,
          amount: body.p_amount,
          payment_label: "DANA",
          status: "pending",
          created_at: new Date().toISOString(),
          wall_consent: body.p_consent,
          proof_path: body.p_proof,
        });
      return respond(null);
    }
    if (table === "profiles") return respond(single ? profile : [profile]);
    if (table === "projects") {
      const id = url.searchParams.get("id")?.replace("eq.", "");
      if (method === "POST") {
        const body = req.postDataJSON();
        assert(!("user_id" in body));
        assert(!("created_at" in body));
        if (failSave)
          return respond(
            { message: "Koneksi uji terputus", code: "TEST" },
            503,
          );
        const row = {
          ...body,
          id: "00000000-0000-4000-9000-" + String(++counter).padStart(12, "0"),
          user_id: uid,
          updated_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
        };
        projects.push(row);
        return respond(single ? row : [row], 201);
      }
      if (method === "PATCH") {
        if (failSave)
          return respond(
            { message: "Koneksi uji terputus", code: "TEST" },
            503,
          );
        const row = projects.find((p) => p.id === id);
        Object.assign(row, req.postDataJSON(), {
          updated_at: new Date().toISOString(),
        });
        return respond(single ? row : [row]);
      }
      if (method === "DELETE") {
        projects = projects.filter((p) => p.id !== id);
        return respond(null);
      }
      const result = id ? projects.filter((p) => p.id === id) : projects;
      return respond(single ? result[0] : result);
    }
    if (table === "payment_methods")
      return respond([
        {
          id: "dana",
          label: "DANA",
          account_number: "123456",
          account_name: "Pengelola Uji",
          active: true,
        },
      ]);
    if (table === "donations") return respond(donations);
    if (table === "partners")
      return respond(
        profile.is_admin
          ? [
              {
                user_id: "partner-id",
                status: "approved",
                reason: "Berbagi",
                payment_method: "BRI",
                account_number: "123",
                account_name: "Mitra",
                referral_code: "MITRA",
              },
            ]
          : [],
      );
    if (table === "partner_ledger")
      return respond(
        profile.is_admin
          ? [
              {
                id: "l1",
                partner_id: "partner-id",
                amount: 7500,
                payout_id: null,
                created_at: new Date().toISOString(),
              },
            ]
          : [],
      );
    return respond([]);
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://127.0.0.1:5278/prompt/cp-bse");
  await page.getByText("Member seumur hidup", { exact: true }).waitFor();
  assert.equal(await page.getByRole("dialog").count(), 0);
  checks++;
  await page.getByRole("button", { name: "Simpan ke Akun" }).click();
  await page.getByLabel("Judul proyek").fill("Proyek Guru");
  await page.getByRole("button", { name: "Simpan", exact: true }).click();
  await page.getByText("Proyek tersimpan ke akun.", { exact: true }).waitFor();
  assert.equal(projects.length, 1);
  checks++;
  await page.goto("http://127.0.0.1:5278/proyek");
  await page
    .getByRole("heading", { name: "Proyek Guru", exact: true })
    .waitFor();
  await page
    .getByRole("button", { name: "Gandakan Proyek Guru", exact: true })
    .click();
  await page.getByRole("button", { name: "Konfirmasi", exact: true }).click();
  await page
    .getByRole("heading", { name: "Salinan Proyek Guru", exact: true })
    .waitFor();
  assert.equal(projects.length, 2);
  checks++;
  await page
    .getByRole("button", { name: "Ganti nama Proyek Guru", exact: true })
    .click();
  await page.getByLabel("Judul", { exact: true }).fill("Proyek Revisi");
  await page.getByRole("button", { name: "Konfirmasi", exact: true }).click();
  await page
    .getByRole("heading", { name: "Proyek Revisi", exact: true })
    .waitFor();
  checks++;
  await page
    .getByRole("button", { name: "Hapus Salinan Proyek Guru", exact: true })
    .click();
  await page.getByRole("button", { name: "Konfirmasi", exact: true }).click();
  await page
    .getByRole("heading", { name: "Salinan Proyek Guru", exact: true })
    .waitFor({ state: "detached" });
  assert.equal(projects.length, 1);
  checks++;
  await page.getByRole("link", { name: "Buka", exact: true }).click();
  await page.getByRole("button", { name: "Simpan ke Akun" }).click();
  await page.getByLabel("Judul proyek").fill("Draf tidak hilang");
  failSave = true;
  await page.getByRole("button", { name: "Simpan", exact: true }).click();
  await page
    .getByRole("dialog")
    .getByText("Koneksi uji terputus", { exact: true })
    .waitFor();
  assert.equal(
    await page.getByLabel("Judul proyek").inputValue(),
    "Draf tidak hilang",
  );
  checks++;
  failSave = false;
  await page.goto("http://127.0.0.1:5278/kopi");
  await page.getByLabel("Metode pembayaran").selectOption("dana");
  await page.locator("input[type=file]").setInputFiles({
    name: "bukti.png",
    mimeType: "image/png",
    buffer: Buffer.from(
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6gZcAAAAASUVORK5CYII=",
      "base64",
    ),
  });
  await page.getByRole("button", { name: "Kirim bukti dukungan" }).click();
  await page.getByRole("heading", { name: "Riwayat dukungan" }).waitFor();
  assert.equal(
    rpcCalls.find((x) => x.name === "submit_donation").body.p_amount,
    25000,
  );
  checks++;
  driveEnabled = true;
  await page.goto("http://127.0.0.1:5278/kopi");
  await page.getByLabel("Metode pembayaran").selectOption("dana");
  await page.locator("input[type=number]").fill("7000");
  await page.locator("input[type=file]").setInputFiles({
    name: "drive.png",
    mimeType: "image/png",
    buffer: Buffer.from("iVBORw0KGgo=", "base64"),
  });
  await page.getByRole("button", { name: "Kirim bukti dukungan" }).click();
  await page
    .getByText("Gangguan Drive uji. Coba ulangi.", { exact: true })
    .waitFor();
  await page.getByRole("button", { name: "Kirim bukti dukungan" }).click();
  await page.getByRole("heading", { name: "Riwayat dukungan" }).waitFor();
  assert.equal(driveCalls[0].request_id, driveCalls[1].request_id);
  assert.equal(
    rpcCalls.filter((x) => x.name === "submit_donation").at(-1).body.p_amount,
    7000,
  );
  checks++;
  const blob = await page.evaluate(async (path) => {
    const lib = await import("/src/lib/supabase.ts");
    const url = await lib.proofUrl(path);
    return { url, type: (await (await fetch(url)).blob()).type };
  }, donations.at(-1).proof_path);
  assert.match(blob.url, /^blob:/);
  assert.equal(blob.type, "image/png");
  checks++;
  driveEnabled = false;
  profile.is_admin = true;
  await page.goto("http://127.0.0.1:5278/admin");
  await page.getByRole("heading", { name: "Panel Admin" }).waitFor();
  await page
    .getByRole("button", { name: "Mitra & Komisi", exact: true })
    .click();
  await page.getByRole("button", { name: "Catat pembayaran komisi" }).click();
  await page
    .getByLabel("Nominal yang benar-benar ditransfer (Rp)")
    .fill("7500");
  await page.getByLabel("Bukti transfer komisi").setInputFiles({
    name: "komisi.png",
    mimeType: "image/png",
    buffer: Buffer.from("proof"),
  });
  await page.getByRole("button", { name: "Konfirmasi", exact: true }).click();
  await page.getByRole("dialog").waitFor({ state: "detached" });
  assert.equal(
    rpcCalls.find((x) => x.name === "record_payout").body.p_amount,
    7500,
  );
  checks++;
  await page.getByRole("button", { name: "Pengaturan", exact: true }).click();
  await page.getByRole("button", { name: "Periksa koneksi Drive" }).click();
  await page
    .getByText(
      "Koneksi Drive dan arsip dapat dibaca. Lanjutkan dengan satu unggahan uji.",
      { exact: true },
    )
    .waitFor();
  checks++;
  await page.locator("select[name=value]").selectOption("drive");
  await page.getByRole("button", { name: "Simpan pengaturan" }).click();
  await page.waitForFunction(
    () => !document.querySelector("button.button.secondary[disabled]"),
  );
  assert.equal(
    rpcCalls.filter((x) => x.name === "save_app_setting").at(-1).body.p_value,
    "drive",
  );
  checks++;
  assert.deepEqual(errors, []);
  checks++;
  console.log(
    `${checks} pemeriksaan kontrak UI member/admin lulus dengan HTTP Supabase simulasi.`,
  );
  await context.close();
} finally {
  await browser?.close();
  server.kill();
}
