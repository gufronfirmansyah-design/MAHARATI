import { chromium } from "playwright";
import assert from "node:assert/strict";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
const base = process.env.TEST_URL || "http://127.0.0.1:5173";
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL || "msedge",
  headless: true,
});
fs.mkdirSync(new URL("../test-results/", import.meta.url), { recursive: true });
let checks = 0;
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(base);
  await page.getByRole("dialog").waitFor();
  await page
    .getByRole("button", { name: "Lanjut Gratis", exact: true })
    .click();
  checks++;
  await page.reload();
  assert.equal(await page.getByRole("dialog").count(), 0);
  checks++;
  await page.screenshot({
    path: fileURLToPath(
      new URL("../test-results/desktop.png", import.meta.url),
    ),
    fullPage: true,
  });
  await page.getByRole("button", { name: /Media 3 prompt tersedia/ }).click();
  assert.equal(await page.locator(".prompt-card").count(), 3);
  checks++;
  await page.goto(base + "/prompt");
  await page.getByRole("textbox", { name: "Cari prompt" }).fill("Prota");
  assert.equal(await page.locator(".prompt-card").count(), 1);
  checks++;
  await page.locator(".prompt-card").click();
  assert.equal(await page.locator(".output").count(), 2);
  checks++;
  await page
    .locator(".output")
    .first()
    .getByRole("button", { name: "Salin Prompt" })
    .click();
  await page.getByRole("alert").waitFor();
  checks++;
  await page.locator("#f-mapel").fill("Matematika");
  await page.locator("#f-sekolah").fill("SMP Contoh");
  await page.locator("#f-kelas").fill("VII");
  await page.locator("#f-fase").selectOption("D");
  await page.locator("#f-tahun").fill("2026/2027");
  await page.locator("#f-jp").fill("5");
  await page
    .locator(".output")
    .first()
    .getByRole("button", { name: "Salin Prompt" })
    .click();
  assert.equal(await page.getByRole("alert").count(), 0);
  if (await page.getByRole("dialog").count())
    await page.getByRole("button", { name: "Tutup", exact: true }).click();
  checks++;
  await page
    .locator(".output")
    .nth(1)
    .getByRole("button", { name: "Salin Prompt" })
    .click();
  await page.getByRole("alert").waitFor();
  assert.match(await page.getByRole("alert").innerText(), /Semester/);
  checks++;
  await page.goto(base + "/prompt/blueprint");
  assert.equal(await page.locator("#f-mapel").inputValue(), "Matematika");
  checks++;
  for (const [preset, values] of [
    ["Rendah", ["60", "35", "5"]],
    ["Sedang", ["50", "40", "10"]],
    ["Tinggi", ["40", "35", "25"]],
  ]) {
    await page.locator("#f-cognitivePreset").selectOption(preset);
    assert.deepEqual(
      await Promise.all(
        ["lots", "mots", "hots"].map((k) =>
          page.locator("#f-" + k).inputValue(),
        ),
      ),
      values,
    );
    checks++;
  }
  await page.locator("#f-lots").fill("42");
  assert.equal(await page.locator("#f-cognitivePreset").inputValue(), "Custom");
  await page.reload();
  assert.equal(await page.locator("#f-lots").inputValue(), "42");
  checks++;
  await page.goto(base + "/prompt/rpp");
  await page.getByRole("button", { name: "Tempel data kendali" }).click();
  await page
    .locator("#kendali")
    .fill("<script>window.hacked=true</script>\nData kendali saya");
  assert.equal(await page.evaluate(() => window.hacked), undefined);
  assert.match(
    await page.locator(".output textarea").inputValue(),
    /Data kendali saya/,
  );
  checks++;
  const response = await context.request.get(
    base + "/assets/template-rpp.docx",
  );
  assert.equal(response.status(), 200);
  assert((await response.body()).length > 1000000);
  checks++;
  for (const name of [
    "cp-bse",
    "cp-ai",
    "waktu",
    "aktivitas",
    "gambaran-asesmen",
    "asesmen-rpp",
    "lkpd",
    "soal",
    "analisis",
  ]) {
    await page.goto(base + "/prompt/" + name);
    assert((await page.locator(".output textarea").inputValue()).length > 100);
    checks++;
  }
  for (const name of [
    "notebook-rpp",
    "notebook-buku",
    "notebook-video",
    "video-pembelajaran",
    "media-interaktif",
    "kuis-interaktif",
    "ifp-interaktif",
    "misi-petualangan",
    "game-tv",
    "kamera-aksi",
    "aplikasi-website",
  ]) {
    await page.goto(base + "/prompt/" + name);
    await page.getByRole("button", { name: "Gunakan contoh isian" }).click();
    const outputs = page.locator(".output");
    assert.equal(await outputs.count(), name === "video-pembelajaran" ? 4 : 1);
    for (let i = 0; i < (await outputs.count()); i++) {
      assert.doesNotMatch(
        await outputs.nth(i).locator("textarea").inputValue(),
        /⟦Isi|\{\{/,
      );
      await outputs
        .nth(i)
        .getByRole("button", { name: "Salin Prompt" })
        .click();
      assert.equal(await page.getByRole("alert").count(), 0);
      if (await page.getByRole("dialog").count())
        await page.getByRole("button", { name: "Tutup", exact: true }).click();
    }
    checks++;
  }
  await page.goto(base + "/prompt/notebook-rpp");
  await page.locator("#f-tema").selectOption("__custom__");
  await page
    .getByRole("textbox", { name: "Isian sendiri", exact: true })
    .fill("Ilustrasi batik lokal");
  await page.reload();
  assert.match(
    await page.locator(".output textarea").inputValue(),
    /Ilustrasi batik lokal/,
  );
  checks++;
  await page.goto(base + "/akun");
  const profileBeforeCancel = await page.evaluate(
    () =>
      JSON.parse(localStorage.getItem("prompt-generator-guru:v1")).profile
        .mapel,
  );
  await page.getByRole("button", { name: "Hapus Semua Isian Lokal" }).click();
  await page.getByRole("button", { name: "Batal", exact: true }).click();
  assert.equal(
    await page.evaluate(
      () =>
        JSON.parse(localStorage.getItem("prompt-generator-guru:v1")).profile
          .mapel,
    ),
    profileBeforeCancel,
  );
  checks++;
  await page.getByRole("button", { name: "Hapus Semua Isian Lokal" }).click();
  await page.getByRole("button", { name: "Hapus isian", exact: true }).click();
  assert.deepEqual(
    await page.evaluate(
      () =>
        JSON.parse(localStorage.getItem("prompt-generator-guru:v1")).profile,
    ),
    {},
  );
  checks++;
  await page.goto(base + "/admin");
  await page
    .getByRole("heading", { name: "Halaman khusus pengelola" })
    .waitFor();
  checks++;
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await page.screenshot({
    path: fileURLToPath(new URL("../test-results/mobile.png", import.meta.url)),
    fullPage: true,
  });
  assert(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  );
  checks++;
  await page.getByRole("button", { name: "Buka navigasi" }).click();
  await page
    .locator(".sidebar nav")
    .getByRole("link", { name: "Traktir Kopi", exact: true })
    .click();
  assert(
    await page
      .locator(".sidebar")
      .evaluate((el) => !el.classList.contains("open")),
  );
  checks++;
  for (const route of [
    "/prompt/blueprint",
    "/prompt/prota",
    "/kopi",
    "/mitra",
    "/akun",
    "/proyek",
  ]) {
    await page.goto(base + route);
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      route,
    );
    checks++;
  }
  const fallback = await browser.newContext({
    viewport: { width: 390, height: 844 },
  });
  await fallback.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("blocked");
      },
    });
    Object.defineProperty(navigator, "clipboard", { value: undefined });
  });
  const fp = await fallback.newPage();
  await fp.goto(base + "/prompt/cp-bse");
  await fp.getByRole("button", { name: "Lanjut Gratis", exact: true }).click();
  await fp.getByRole("button", { name: "Salin Prompt" }).click();
  await fp
    .getByRole("heading", { name: "Salin prompt secara manual" })
    .waitFor();
  checks++;
  await fp.keyboard.press("Escape");
  assert.equal(await fp.getByRole("dialog").count(), 0);
  checks++;
  assert.deepEqual(errors, []);
  checks++;
  console.log(
    `${checks} pemeriksaan browser lulus: desktop, HP, seluruh template, penyimpanan, fallback, dialog, dan navigasi.`,
  );
  await context.close();
  await fallback.close();
} finally {
  await browser.close();
}
