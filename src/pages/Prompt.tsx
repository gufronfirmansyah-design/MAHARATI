import { useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Copy, Save, FileDown, Check, Info } from "lucide-react";
import { byId, categories } from "../templates";
import { useDrafts } from "../lib/Drafts";
import { useAuth } from "../lib/Auth";
import { supabase } from "../lib/supabase";
import {
  activeField,
  valuesFor,
  validate,
  renderPrompt,
  applyPreset,
} from "../lib/engine.js";
import { Modal, Notice, useAction } from "../components/UI";
import Combo from "../components/Combo";
import { choicesFor } from "../lib/engine.js";
import type { Field, Values, Project, Template } from "../types";
export default function Prompt() {
  const { id = "cp-bse" } = useParams();
  const [params, setParams] = useSearchParams();
  const t = byId(id === "promes" ? "prota" : id);
  const { state, setState } = useDrafts();
  const { profile, user } = useAuth();
  const action = useAction();
  const [errors, setErrors] = useState<{ id: string; message: string }[]>([]),
    [copied, setCopied] = useState(""),
    [save, setSave] = useState(false),
    [title, setTitle] = useState(""),
    [opened, setOpened] = useState<Project | null>(null),
    [manual, setManual] = useState<string | null>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const projectId = params.get("project");
  useEffect(() => {
    setErrors([]);
    setOpened(null);
    setCopied("");
    setTitle(t?.title || "");
  }, [id]);
  useEffect(() => {
    let active = true;
    setOpened(null);
    if (projectId && user && supabase) {
      void supabase
        .from("projects")
        .select("*")
        .eq("id", projectId)
        .single()
        .then(({ data, error }) => {
          if (!active) return;
          if (error) {
            action.setMessage(
              "Proyek tidak dapat dibuka. Periksa akun dan koneksi Anda.",
            );
            return;
          }
          if (data.template_id !== t?.id) {
            action.setMessage(
              "Jenis template proyek tidak sesuai halaman ini.",
            );
            return;
          }
          setOpened(data);
          setTitle(data.title);
          setState((s) => ({
            ...s,
            profile: { ...s.profile, ...data.profile },
            drafts: { ...s.drafts, ...data.drafts },
          }));
          if (data.template_version !== t?.version)
            action.setMessage(
              "Template telah diperbarui. Isian dimuat; hasil terakhir tersedia di Proyek Saya.",
            );
        });
    }
    return () => {
      active = false;
    };
  }, [projectId, user?.id, t?.id]);
  if (!t)
    return (
      <div className="empty">
        <h1>Prompt tidak ditemukan</h1>
        <Link to="/prompt">Kembali ke kumpulan prompt</Link>
      </div>
    );
  const outputs: Template[] = t.id === "prota" ? [t, byId("promes")!] : [t];
  const variants = outputs.flatMap(
    (x) =>
      x.stages?.map((s) => ({
        template: x,
        stage: s.id,
        title: s.title,
        key: x.id + ":" + s.id,
      })) || [{ template: x, stage: "", title: x.title, key: x.id }],
  );
  const fields = Array.from(
    new Map(outputs.flatMap((x) => x.fields).map((f) => [f.id, f])).values(),
  );
  const v = Object.assign(
    {},
    ...outputs.map((x) => valuesFor(x, state)),
  ) as Values;
  function change(f: Pick<Field, "id" | "shared">, value: string | string[]) {
    setErrors([]);
    setCopied("");
    setState((s) => {
      if (f.shared) return { ...s, profile: { ...s.profile, [f.id]: value } };
      let d = { ...s.drafts[t!.id], [f.id]: value };
      for (const dependent of t!.fields.filter((x) => x.dependsOn === f.id))
        d[dependent.id] = "";
      if (f.id === "cognitivePreset") d = applyPreset(d, value);
      if (["lots", "mots", "hots"].includes(f.id)) d.cognitivePreset = "Custom";
      return { ...s, drafts: { ...s.drafts, [t!.id]: d } };
    });
  }
  async function copy(template: Template, stage = "") {
    const values = valuesFor(template, state),
      es = validate(template, values);
    setErrors(es);
    if (es.length) {
      setTimeout(() => errorRef.current?.focus(), 0);
      return;
    }
    const text = renderPrompt(template, values, stage);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(template.id + (stage ? ":" + stage : ""));
    } catch {
      setManual(text);
    }
  }
  async function saveProject() {
    if (!supabase || !profile?.is_member)
      throw Error("Penyimpanan daring tersedia untuk member aktif.");
    if (!title.trim()) throw Error("Isi judul proyek.");
    const drafts = Object.fromEntries(
      outputs.map((x) => [x.id, state.drafts[x.id] || {}]),
    );
    const row = {
      title: title.trim(),
      template_id: t!.id,
      template_version: t!.version,
      profile: state.profile,
      drafts,
      outputs: Object.fromEntries(
        variants.map((x) => [
          x.key,
          renderPrompt(x.template, valuesFor(x.template, state), x.stage),
        ]),
      ),
    };
    const result = opened
      ? await supabase
          .from("projects")
          .update(row)
          .eq("id", opened.id)
          .eq("updated_at", opened.updated_at)
          .select()
          .single()
      : await supabase.from("projects").insert(row).select().single();
    if (result.error) {
      if (opened && result.error.code === "PGRST116")
        throw Error(
          "Proyek berubah di perangkat lain. Muat ulang proyek sebelum menyimpan kembali, atau simpan sebagai proyek baru.",
        );
      throw result.error;
    }
    setOpened(result.data);
    setParams({ project: result.data.id }, { replace: true });
    setSave(false);
  }
  function field(f: Field) {
    if (!activeField(f, v)) return null;
    const value = v[f.id] ?? "";
    if (f.type === "multiselect")
      return (
        <fieldset key={f.id} className="dimension-field">
          <legend>
            {f.label}
            {f.required ? " *" : ""}
          </legend>
          {choicesFor(f, v).map((o: string) => (
            <label className="checkbox" key={o}>
              <input
                type="checkbox"
                checked={Array.isArray(value) && value.includes(o)}
                onChange={(e) =>
                  change(
                    f,
                    e.target.checked
                      ? [...(Array.isArray(value) ? value : []), o]
                      : (Array.isArray(value) ? value : []).filter(
                          (x) => x !== o,
                        ),
                  )
                }
              />
              {o}
            </label>
          ))}
        </fieldset>
      );
    const common = {
      id: "f-" + f.id,
      "aria-invalid": errors.some((e) => e.id === f.id),
      "aria-describedby": f.help ? "help-" + f.id : undefined,
    };
    if (f.type === "dimensions")
      return (
        <fieldset className="dimension-field" key={f.id}>
          <legend>
            {f.label}
            {f.required ? " *" : " (opsional)"}
          </legend>
          {f.groups?.map((g) => (
            <details key={g.header}>
              <summary>{g.header}</summary>
              {g.items.map((item) => (
                <label className="checkbox" key={item.id}>
                  <input
                    type="checkbox"
                    checked={Array.isArray(value) && value.includes(item.id)}
                    onChange={(e) =>
                      change(
                        f,
                        e.target.checked
                          ? [...(Array.isArray(value) ? value : []), item.id]
                          : (Array.isArray(value) ? value : []).filter(
                              (x) => x !== item.id,
                            ),
                      )
                    }
                  />
                  <span>{item.text}</span>
                </label>
              ))}
            </details>
          ))}
        </fieldset>
      );
    return (
      <div className="field" key={f.id}>
        <label htmlFor={common.id}>
          {f.label} <small>{f.required ? "* wajib" : "opsional"}</small>
        </label>
        {f.type === "combo" ? (
          <Combo
            key={t!.id + f.id}
            id={common.id}
            invalid={common["aria-invalid"]}
            value={String(value)}
            options={choicesFor(f, v)}
            onChange={(value) => change(f, value)}
            placeholder={f.placeholder}
          />
        ) : ["select", "preset"].includes(f.type) ? (
          <select
            {...common}
            value={String(value)}
            onChange={(e) => change(f, e.target.value)}
          >
            <option value="">Pilih…</option>
            {choicesFor(f, v).map((o: string) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        ) : f.type === "textarea" ? (
          <textarea
            {...common}
            rows={4}
            value={String(value)}
            onChange={(e) => change(f, e.target.value)}
            placeholder={f.placeholder}
          />
        ) : (
          <input
            {...common}
            type={f.type === "number" ? "number" : "text"}
            min={f.min}
            max={f.max}
            step={f.decimal ? "any" : 1}
            value={String(value)}
            placeholder={f.placeholder}
            onChange={(e) => change(f, e.target.value)}
          />
        )}
        {f.help && <small id={"help-" + f.id}>{f.help}</small>}
      </div>
    );
  }
  return (
    <>
      <Link className="back-link" to="/prompt">
        <ArrowLeft size={16} />
        Kumpulan prompt
      </Link>
      <div className="eyebrow">
        {categories.find((c) => c.id === t.category)?.name.toUpperCase()} /{" "}
        {t.group.toUpperCase()}
      </div>
      <h1>{t.id === "prota" ? "Prota & Prosem" : t.title}</h1>
      <p className="lead">{t.description}</p>
      {t.externalLink && (
        <a
          className="button secondary"
          href={t.externalLink.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.externalLink.label} ↗
        </a>
      )}
      <div className="source-box">
        <Info size={20} />
        <div>
          <strong>Siapkan di percakapan AI Anda</strong>
          <ul>
            {Array.from(new Set(outputs.flatMap((x) => x.needs))).map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p>
            Gunakan prompt lanjutan dalam percakapan yang memiliki sumber
            sebelumnya. MAHARATI tidak membaca percakapan AI Anda.
          </p>
          {outputs.some(
            (x) =>
              x.id === "rpp" || x.needs.some((n) => n.includes("TEMPLATE RPP")),
          ) && (
            <a href="/assets/template-rpp.docx" download className="download">
              <FileDown size={16} />
              Unduh Template RPP
            </a>
          )}
        </div>
      </div>
      {t.note && <Notice>{t.note}</Notice>}
      {action.message && <Notice>{action.message}</Notice>}
      <div className="editor-grid">
        <section className="panel form-panel">
          <div className="panel-heading">
            <h2>Sesuaikan kebutuhan</h2>
            <span className="badge">Draf lokal</span>
          </div>
          {t.example && (
            <div className="example-box">
              <button
                className="button secondary"
                onClick={() => {
                  setState((s) => {
                    const profile = { ...s.profile },
                      draft = { ...s.drafts[t.id] };
                    for (const f of t.fields) {
                      if (t.example?.[f.id] !== undefined)
                        (f.shared ? profile : draft)[f.id] = t.example[f.id];
                    }
                    return {
                      ...s,
                      profile,
                      drafts: { ...s.drafts, [t.id]: draft },
                    };
                  });
                  setErrors([]);
                  action.setMessage(
                    "Contoh dimuat. Silakan ubah sesuai kebutuhan Anda.",
                  );
                }}
              >
                Gunakan contoh isian
              </button>
              <p className="muted">
                Mengganti isian formulir ini dengan contoh. Contoh bukan data
                awal untuk semua guru.
              </p>
            </div>
          )}
          {t.id === "rpp" && (
            <div className="segmented">
              <button
                className={v.mode === "form" ? "active" : ""}
                onClick={() => change({ id: "mode" }, "form")}
              >
                Isi formulir
              </button>
              <button
                className={v.mode === "paste" ? "active" : ""}
                onClick={() => change({ id: "mode" }, "paste")}
              >
                Tempel data kendali
              </button>
            </div>
          )}
          {t.id === "rpp" && v.mode === "paste" ? (
            <div className="field">
              <label htmlFor="kendali">Data kendali modul *</label>
              <textarea
                id="kendali"
                rows={15}
                value={String(v.kendali)}
                onChange={(e) => change({ id: "kendali" }, e.target.value)}
              />
            </div>
          ) : fields.length ? (
            fields.map(field)
          ) : (
            <div className="empty small">
              <Check />
              <h3>Prompt siap digunakan.</h3>
              <p>
                Tidak ada isian khusus. Pastikan dokumen sumber tersedia di
                layanan AI Anda.
              </p>
            </div>
          )}
          <p className="muted">
            Isian lokal tersimpan di browser ini dan tidak otomatis tersinkron.
            Data dapat hilang saat data browser dihapus.
          </p>
          <button
            className="button full"
            onClick={() => {
              if (!profile?.is_member) {
                action.setMessage(
                  "Masuk sebagai member untuk menyimpan proyek. Draf lokal Anda tetap tersedia.",
                );
                return;
              }
              setSave(true);
            }}
          >
            <Save size={17} />
            Simpan ke Akun
          </button>
          {!profile?.is_member && (
            <Link className="text-button" to="/kopi">
              Tentang akses member
            </Link>
          )}
        </section>
        <section className="preview-panel">
          <div className="panel-heading">
            <h2>Pratinjau prompt</h2>
            <span className="badge">Teks lengkap</span>
          </div>
          {errors.length > 0 && (
            <div className="errors" role="alert" tabIndex={-1} ref={errorRef}>
              <strong>Lengkapi isian berikut:</strong>
              <ul>
                {errors.map((e, i) => (
                  <li key={i}>{e.message}</li>
                ))}
              </ul>
            </div>
          )}
          {variants.map((x) => (
            <div className="output" key={x.key}>
              <div className="output-heading">
                <h3>{x.title}</h3>
                <button
                  className="button"
                  onClick={() => void copy(x.template, x.stage)}
                >
                  {copied === x.key ? <Check size={16} /> : <Copy size={16} />}{" "}
                  {copied === x.key ? "Tersalin" : "Salin Prompt"}
                </button>
              </div>
              <textarea
                aria-label={"Pratinjau " + x.title}
                readOnly
                value={renderPrompt(
                  x.template,
                  valuesFor(x.template, state),
                  x.stage,
                )}
              />
              <small>
                Sumber: {x.template.source} · Versi {x.template.version}
              </small>
            </div>
          ))}
        </section>
      </div>
      {save && (
        <Modal
          title={opened ? "Simpan perubahan proyek" : "Simpan proyek baru"}
          onClose={() => setSave(false)}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void action.run(saveProject, "Proyek tersimpan ke akun.");
            }}
          >
            <label className="field">
              Judul proyek
              <input
                autoFocus
                required
                maxLength={150}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <p>
              Isian saat ini dan hasil prompt disimpan ke akun. Maksimal 100
              proyek.
            </p>
            {action.message && <Notice>{action.message}</Notice>}
            <button className="button" disabled={action.busy}>
              Simpan
            </button>
            {opened && (
              <button
                type="button"
                className="button secondary"
                onClick={() => {
                  setOpened(null);
                  setParams({});
                }}
              >
                Simpan sebagai proyek baru
              </button>
            )}
          </form>
        </Modal>
      )}
      {manual !== null && (
        <Modal
          title="Salin prompt secara manual"
          onClose={() => setManual(null)}
        >
          <p>Clipboard tidak tersedia. Pilih teks berikut, lalu salin.</p>
          <textarea
            autoFocus
            rows={14}
            value={manual}
            readOnly
            onFocus={(e) => e.target.select()}
            aria-label="Teks untuk disalin manual"
          />
        </Modal>
      )}
    </>
  );
}
