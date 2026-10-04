export const STORAGE_KEY = "prompt-generator-guru:v1";
export const COGNITIVE_PRESETS = {
  Rendah: { lots: "60", mots: "35", hots: "5" },
  Sedang: { lots: "50", mots: "40", hots: "10" },
  Tinggi: { lots: "40", mots: "35", hots: "25" },
};
export function applyPreset(draft, preset) {
  return {
    ...draft,
    cognitivePreset: preset,
    ...(COGNITIVE_PRESETS[preset] || {}),
  };
}
export function initialState() {
  return {
    version: 1,
    profile: {},
    drafts: {},
    selected: "cp-bse",
    view: "menu",
  };
}
export function loadState(storage) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return { state: initialState() };
    const x = JSON.parse(raw);
    if (
      x.version !== 1 ||
      !x.profile ||
      typeof x.profile !== "object" ||
      Array.isArray(x.profile) ||
      !x.drafts ||
      typeof x.drafts !== "object" ||
      Array.isArray(x.drafts)
    )
      throw Error();
    return { state: { ...initialState(), ...x } };
  } catch {
    return {
      state: initialState(),
      warning:
        "Isian tersimpan tidak dapat dibaca. Anda tetap dapat menggunakan aplikasi; isian baru hanya tersimpan jika browser mengizinkannya.",
    };
  }
}
export function saveState(storage, state) {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
export function clearState(storage) {
  try {
    storage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
export function activeField(f, v) {
  return !f.when || v[f.when.split(":")[0]] === f.when.split(":")[1];
}
export function valuesFor(t, state) {
  const draft = state.drafts[t.id] || {};
  const values = {};
  for (const f of t.fields) {
    const input = f.shared ? state.profile[f.id] : draft[f.id];
    values[f.id] =
      input ??
      f.default ??
      (["dimensions", "multiselect"].includes(f.type) ? [] : "");
  }
  values.mode = draft.mode || "form";
  values.kendali = draft.kendali || "";
  if (t.id === "blueprint" && COGNITIVE_PRESETS[values.cognitivePreset])
    Object.assign(values, COGNITIVE_PRESETS[values.cognitivePreset]);
  return values;
}
export function patternJP(value) {
  const parts = String(value)
    .trim()
    .split(/\s*(?:dan|\+)\s*/i);
  if (!parts.length) return null;
  let sum = 0;
  for (const part of parts) {
    const m = part.match(/^(\d+)\s*[x×]\s*(\d+)\s*(?:JP)?$/i);
    if (!m || +m[1] < 1 || +m[2] < 1) return null;
    sum += +m[1] * +m[2];
  }
  return sum;
}
export function validate(t, v) {
  if (t.id === "rpp" && v.mode === "paste")
    return String(v.kendali).trim()
      ? []
      : [
          {
            id: "kendali",
            message: "Tempel data kendali modul terlebih dahulu.",
          },
        ];
  const errors = [];
  for (const f of t.fields) {
    if (!activeField(f, v)) continue;
    const raw = v[f.id] ?? "";
    const empty = Array.isArray(raw)
      ? raw.length === 0
      : String(raw).trim() === "";
    if (empty) {
      if (f.required || f.id === "jenisLain")
        errors.push({ id: f.id, message: `${f.label} perlu diisi.` });
      continue;
    }
    if (
      f.type === "multiselect" &&
      (!Array.isArray(raw) || raw.some((x) => !choicesFor(f, v).includes(x)))
    )
      errors.push({
        id: f.id,
        message: "Pilih " + f.label + " dari pilihan yang tersedia.",
      });
    if (f.type === "number") {
      const n = Number(raw);
      if (
        !Number.isFinite(n) ||
        (!f.decimal && !Number.isInteger(n)) ||
        n < (f.min ?? 0) ||
        (f.max !== undefined && n > f.max)
      )
        errors.push({
          id: f.id,
          message: `${f.label}: masukkan ${f.decimal ? "angka" : "bilangan bulat"} ${f.min ?? 0}${f.max !== undefined ? "–" + f.max : " atau lebih"}.`,
        });
    }
    if (
      ["select", "preset"].includes(f.type) &&
      !choicesFor(f, v).includes(raw)
    )
      errors.push({
        id: f.id,
        message: `Pilih ${f.label.toLowerCase()} yang tersedia.`,
      });
    if (
      f.type === "dimensions" &&
      (!Array.isArray(raw) ||
        raw.some(
          (id) => !f.groups.some((g) => g.items.some((i) => i.id === id)),
        ))
    )
      errors.push({
        id: f.id,
        message: "Pilih subdimensi dari daftar referensi.",
      });
  }
  if (t.id === "waktu" && v.pola) {
    const total = patternJP(v.pola);
    if (total === null)
      errors.push({
        id: "pola",
        message: "Gunakan pola seperti 1 × 3 JP dan 1 × 2 JP.",
      });
    else if (v.jp && total !== Number(v.jp))
      errors.push({
        id: "pola",
        message: `Pola pertemuan berjumlah ${total} JP, tetapi JP per minggu diisi ${v.jp}.`,
      });
  }
  if (t.id === "blueprint") {
    if (
      ["jumlah", "pg", "isian", "uraian"].every(
        (k) => String(v[k]).trim() !== "",
      )
    ) {
      const sum = Number(v.pg) + Number(v.isian) + Number(v.uraian);
      if (sum !== Number(v.jumlah))
        errors.push({
          id: "jumlah",
          message: `Komposisi berjumlah ${sum} soal; harus sama dengan jumlah soal (${v.jumlah}).`,
        });
    }
    const cognitive = ["lots", "mots", "hots"];
    const filled = cognitive.filter((k) => String(v[k] ?? "").trim() !== "");
    if (filled.length && filled.length !== 3)
      errors.push({
        id: "lots",
        message: "Isi ketiga persentase kognitif, atau kosongkan semuanya.",
      });
    else if (
      filled.length &&
      Math.abs(cognitive.reduce((n, k) => n + Number(v[k]), 0) - 100) > 0.000001
    )
      errors.push({
        id: "lots",
        message: "Jumlah LOTS, MOTS, dan HOTS harus 100%.",
      });
  }
  return errors;
}
export function substitutions(t, v) {
  const result = { ...v };
  for (const f of t.fields) {
    if (f.instructionsBy)
      result[f.id + "Rules"] = f.instructionsBy[v[f.id]] || "";
    if (f.type === "multiselect") {
      result[f.id] = Array.isArray(v[f.id]) ? v[f.id].join("; ") : "";
    } else if (f.type === "dimensions") {
      const ids = Array.isArray(v[f.id]) ? v[f.id] : [];
      result[f.id] = f.groups
        .map((g) => {
          const selected = g.items.filter((i) => ids.includes(i.id));
          return selected.length
            ? g.header + "\n" + selected.map((i) => i.text).join("\n")
            : "";
        })
        .filter(Boolean)
        .join("\n\n");
    } else if (!String(result[f.id] ?? "").trim() && !f.required)
      result[f.id] = f.fallback ?? "";
  }
  result.jenisOutput = v.jenis === "Lainnya" ? v.jenisLain : v.jenis;
  result.komposisi = [
    ["pg", "pilihan ganda"],
    ["isian", "isian singkat"],
    ["uraian", "uraian"],
  ]
    .filter(([key]) => Number(v[key]) > 0)
    .map(([key, label]) => `${v[key]} ${label}`)
    .join(" + ");
  for (const k of ["lots", "mots", "hots"])
    result[k + "Output"] = String(v[k] ?? "").trim()
      ? v[k] + " %"
      : "tidak ditentukan";
  return result;
}
export function choicesFor(f, v) {
  return f.dependsOn ? f.optionsBy?.[v[f.dependsOn]] || [] : f.options || [];
}
export function renderPrompt(t, v, stageId = "") {
  const data = substitutions(t, v);
  if (t.format === "authored") {
    const body = stageId
      ? t.stages?.find((s) => s.id === stageId)?.body
      : t.body || t.stages?.map((s) => s.body).join("\n\n");
    return String(body || "").replace(
      /\{\{(\w+)\}\}/g,
      (_, key) =>
        String(data[key] ?? "").trim() ||
        (t.fields.find((f) => f.id === key)?.required
          ? `⟦Isi ${t.fields.find((f) => f.id === key).label}⟧`
          : "Tidak ditentukan"),
    );
  }
  const rules = t.id === "rpp" && v.mode === "paste" ? [t.pasteRule] : t.rules;
  let text = "",
    cursor = 0;
  for (const r of rules) {
    text += t.original.slice(cursor, r.start);
    text += r.value.replace(
      /\{\{(\w+)\}\}/g,
      (_, key) =>
        String(data[key] ?? "").trim() ||
        `⟦Isi ${t.fields.find((f) => f.id === key)?.label || key}⟧`,
    );
    cursor = r.end;
  }
  return text + t.original.slice(cursor);
}
