import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  initialState,
  loadState,
  saveState,
  clearState,
  valuesFor,
  validate,
  renderPrompt,
  substitutions,
  patternJP,
  STORAGE_KEY,
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
const sources = JSON.parse(
  fs.readFileSync(new URL("./fixtures/sources.json", import.meta.url)),
);
function valid(t) {
  const v = valuesFor(t, initialState());
  for (const f of t.fields) {
    if (f.type === "dimensions") v[f.id] = [f.groups[0].items[0].id];
    else if (["select", "preset"].includes(f.type)) v[f.id] = f.options[0];
    else if (f.type === "number") v[f.id] = "1";
    else v[f.id] = "Contoh isian guru";
  }
  if (t.id === "waktu")
    Object.assign(v, { jp: "5", pola: "1 × 3 JP dan 1 × 2 JP" });
  if (t.id === "blueprint")
    Object.assign(v, {
      jumlah: "40",
      pg: "35",
      isian: "5",
      uraian: "0",
      lots: "50",
      mots: "30",
      hots: "20",
    });
  return v;
}
test("all 13 templates retain exact source text and valid, non-overlapping replacement spans", () => {
  assert.equal(catalog.length, 13);
  assert.equal(new Set(catalog.map((t) => t.id)).size, 13);
  for (const t of catalog) {
    const source = sources.find((s) => s.name === t.source);
    assert.equal(
      t.original,
      t.sourceRange
        ? source.paragraphs
            .slice(t.sourceRange.start, t.sourceRange.end)
            .join("\n")
        : source.text,
    );
    let end = 0;
    for (const r of t.rules) {
      assert(r.start >= end);
      assert.equal(t.original.slice(r.start, r.end), r.old);
      end = r.end;
    }
  }
});
for (const t of catalog)
  test(`${t.id}: valid output changes only mapped source spans`, () => {
    const v = valid(t);
    assert.deepEqual(validate(t, v), []);
    const result = renderPrompt(t, v),
      data = substitutions(t, v);
    let oldPos = 0,
      newPos = 0;
    for (const r of t.rules) {
      const unchanged = t.original.slice(oldPos, r.start);
      assert.equal(result.slice(newPos, newPos + unchanged.length), unchanged);
      newPos += unchanged.length;
      const changed = r.value.replace(/\{\{(\w+)\}\}/g, (_, k) =>
        String(data[k] ?? "").trim(),
      );
      assert.equal(result.slice(newPos, newPos + changed.length), changed);
      newPos += changed.length;
      oldPos = r.end;
    }
    assert.equal(result.slice(newPos), t.original.slice(oldPos));
    assert(!result.includes("⟦Isi"));
    assert(!result.includes("{{"));
    if (t.fields.some((f) => f.required))
      assert(validate(t, valuesFor(t, initialState())).length > 0);
  });
test("JP pattern and weekly total must agree", () => {
  assert.equal(patternJP("1 × 3 JP dan 1 x 2 JP"), 5);
  assert.equal(patternJP("2 x 2 + 1 x 1"), 5);
  assert.equal(patternJP("1 x 3 junk"), null);
  assert.equal(patternJP("0 x 3"), null);
  const t = catalog.find((t) => t.id === "waktu"),
    v = valid(t);
  v.jp = "4";
  assert(validate(t, v).some((e) => e.id === "pola"));
  v.jp = "5";
  v.minggu1 = "1.5";
  assert(validate(t, v).some((e) => e.id === "minggu1"));
});
test("sumative composition and optional cognitive distribution validation", () => {
  const t = catalog.find((t) => t.id === "blueprint"),
    v = valid(t);
  v.pg = "36";
  assert(validate(t, v).some((e) => e.id === "jumlah"));
  v.pg = "35";
  v.hots = "19";
  assert(validate(t, v).some((e) => e.id === "lots"));
  v.lots = v.mots = v.hots = "";
  assert.deepEqual(validate(t, v), []);
  assert(renderPrompt(t, v).includes("LOTS: tidak ditentukan"));
  v.lots = "50";
  assert(validate(t, v).some((e) => e.id === "lots"));
});
test("RPP pasted control data replaces only its input block", () => {
  const t = catalog.find((t) => t.id === "rpp"),
    v = {
      mode: "paste",
      kendali:
        "Mata Pelajaran: Seni\nTP1 — Murid membuat karya.\nLiteral {{input}} <script>teks</script>",
    };
  assert.deepEqual(validate(t, v), []);
  assert.equal(
    renderPrompt(t, v),
    t.original.slice(0, t.pasteRule.start) +
      v.kendali +
      t.original.slice(t.pasteRule.end),
  );
  assert(validate(t, { mode: "paste", kendali: "  " }).length);
});
test("personal examples are absent from mapped RPP and media input blocks", () => {
  for (const id of ["rpp"]) {
    const t = catalog.find((t) => t.id === id);
    const output = renderPrompt(t, valid(t));
    assert(!output.includes("Pemahaman Puisi Rakyat (Pantun)"));
    assert(!output.includes("BAB 2 Belajar Berpantun"));
    assert(!output.includes("Seragam Pemda warna Khaki"));
  }
});
test("shared profile reused while template drafts remain separate", () => {
  const s = initialState();
  s.profile.mapel = "Fisika";
  s.drafts.rpp = { modul: "Gerak" };
  s.drafts["slide-buku"] = { materi: "Energi" };
  assert.equal(
    valuesFor(
      catalog.find((t) => t.id === "blueprint"),
      s,
    ).mapel,
    "Fisika",
  );
  assert.equal(
    valuesFor(
      catalog.find((t) => t.id === "rpp"),
      s,
    ).modul,
    "Gerak",
  );
  assert.equal(
    valuesFor(
      catalog.find((t) => t.id === "analisis"),
      s,
    ).materi ?? "",
    "",
  );
});
test("storage round trip, deletion, corruption and unavailable storage", () => {
  const map = new Map(),
    storage = {
      getItem: (k) => map.get(k),
      setItem: (k, v) => map.set(k, v),
      removeItem: (k) => map.delete(k),
    };
  const state = initialState();
  state.profile.mapel = "Seni";
  assert(saveState(storage, state));
  assert.deepEqual(loadState(storage).state, state);
  assert(clearState(storage));
  assert(!map.has(STORAGE_KEY));
  map.set(STORAGE_KEY, "not json");
  assert(loadState(storage).warning);
  assert(!saveState(undefined, state));
  assert(loadState(undefined).warning);
  assert(!clearState(undefined));
});
