import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  initialState,
  valuesFor,
  validate,
  renderPrompt,
  choicesFor,
} from "../src/lib/engine.js";
const root = new URL("../src/templates/", import.meta.url);
const files = fs
  .readdirSync(root, { recursive: true })
  .filter((n) => n.endsWith("template.json"));
const templates = files.map((n) =>
  JSON.parse(fs.readFileSync(new URL(n.replaceAll("\\", "/"), root))),
);
test("11 new generators in separate folders; every example produces a valid complete prompt", () => {
  assert.equal(templates.length, 11);
  for (const t of templates) {
    const s = initialState();
    s.profile = t.example;
    s.drafts[t.id] = t.example;
    const v = valuesFor(t, s);
    assert.deepEqual(validate(t, v), [], t.id);
    for (const stage of t.stages || [{ id: "" }]) {
      const output = renderPrompt(t, v, stage.id);
      assert(output.length > 100, t.id);
      assert(!output.includes("⟦Isi"), t.id);
      assert(!output.match(/\{\{\w+\}\}/), t.id);
    }
    assert(validate(t, valuesFor(t, initialState())).length > 0);
  }
});
test("25 IFP choices, 36 adventures, 11 camera games and all TV rounds have distinct mechanics", () => {
  const get = (id) => templates.find((t) => t.id === id);
  const ifp = get("ifp-interaktif");
  assert.equal(ifp.fields.find((f) => f.id === "jenis").options.length, 25);
  assert.equal(
    get("misi-petualangan").fields.find((f) => f.id === "tema").options.length,
    36,
  );
  const camera = get("kamera-aksi");
  assert.equal(
    camera.fields.find((f) => f.id === "permainan").options.length,
    11,
  );
  for (const t of [ifp, camera, get("game-tv")]) {
    const f = t.fields.find((f) => f.instructionsBy);
    for (const o of f.options) {
      const v = { ...t.example, [f.id]: o };
      if (t.id === "game-tv")
        v.babak = choicesFor(
          t.fields.find((x) => x.id === "babak"),
          v,
        )[0];
      assert.deepEqual(validate(t, v), []);
      assert(renderPrompt(t, v).includes(f.instructionsBy[o]));
    }
  }
  const tv = get("game-tv");
  assert(
    validate(tv, { ...tv.example, format: "Famili 100" }).some(
      (x) => x.id === "babak",
    ),
  );
});
test("custom design and text survive rendering literally; multiselect rejects unknown items", () => {
  const t = templates.find((t) => t.id === "notebook-rpp"),
    v = {
      ...t.example,
      tema: "Gaya buatan guru {{literal}} <script>teks</script>",
    };
  assert.deepEqual(validate(t, v), []);
  assert(renderPrompt(t, v).includes(v.tema));
  const media = templates.find((t) => t.id === "media-interaktif");
  assert(
    validate(media, { ...media.example, modul: ["item palsu"] }).some(
      (x) => x.id === "modul",
    ),
  );
});
test("video produces four independently usable stages with chosen language and audio", () => {
  const t = templates.find((t) => t.id === "video-pembelajaran");
  assert.equal(t.stages.length, 4);
  const v = { ...t.example, bahasa: "Bahasa Jawa", audio: "Tanpa audio" };
  for (const stage of t.stages) {
    const text = renderPrompt(t, v, stage.id);
    assert(text.includes("Bahasa Jawa"));
    assert(text.includes("Tanpa audio"));
  }
});
