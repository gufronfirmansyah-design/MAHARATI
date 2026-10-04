import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  COGNITIVE_PRESETS,
  applyPreset,
  initialState,
  valuesFor,
  renderPrompt,
  validate,
} from "../src/lib/engine.js";
const catalog = fs
  .readdirSync(new URL("../src/templates/perencanaan/", import.meta.url))
  .filter((n) => n.endsWith(".json"))
  .map((n) =>
    JSON.parse(
      fs.readFileSync(
        new URL("../src/templates/perencanaan/" + n, import.meta.url),
      ),
    ),
  );
test("three requested LOTS/MOTS/HOTS presets produce exact values in both source sections", () => {
  const t = catalog.find((t) => t.id === "blueprint");
  for (const [name, triplet] of [
    ["Rendah", ["60", "35", "5"]],
    ["Sedang", ["50", "40", "10"]],
    ["Tinggi", ["40", "35", "25"]],
  ]) {
    assert.deepEqual(Object.values(COGNITIVE_PRESETS[name]), triplet);
    const state = initialState();
    state.drafts.blueprint = applyPreset({}, name);
    const v = valuesFor(t, state),
      prompt = renderPrompt(t, v);
    for (const key of ["lots", "mots", "hots"])
      assert.equal(
        prompt.split(key.toUpperCase() + ": " + v[key] + " %").length - 1,
        2,
      );
    assert(!validate(t, v).some((e) => e.id === "lots"));
  }
});
test("Custom preserves edited percentages and old drafts default to Custom", () => {
  const t = catalog.find((t) => t.id === "blueprint"),
    state = initialState();
  state.drafts.blueprint = { lots: "50", mots: "30", hots: "20" };
  assert.equal(valuesFor(t, state).cognitivePreset, "Custom");
  assert.deepEqual(applyPreset(state.drafts.blueprint, "Custom"), {
    lots: "50",
    mots: "30",
    hots: "20",
    cognitivePreset: "Custom",
  });
});
test("program outputs share identity but only Prosem requires semester", () => {
  const state = initialState();
  state.profile = {
    mapel: "Matematika",
    sekolah: "SMP Contoh",
    kelas: "VII",
    fase: "D",
    tahun: "2026/2027",
    jp: "5",
  };
  const prota = catalog.find((t) => t.id === "prota"),
    prosem = catalog.find((t) => t.id === "promes");
  assert.deepEqual(validate(prota, valuesFor(prota, state)), []);
  assert.deepEqual(
    validate(prosem, valuesFor(prosem, state)).map((e) => e.id),
    ["semester"],
  );
  state.profile.semester = "2";
  for (const t of [prota, prosem]) {
    assert.deepEqual(validate(t, valuesFor(t, state)), []);
    assert(
      renderPrompt(t, valuesFor(t, state)).includes(
        "Mata Pelajaran: Matematika",
      ),
    );
  }
});
test("media templates are absent from exported catalog", () => {
  assert.equal(catalog.length, 13);
  assert(
    !catalog.some(
      (t) =>
        ["slide-rpp", "slide-buku", "video"].includes(t.id) ||
        t.group.includes("Media"),
    ),
  );
});
