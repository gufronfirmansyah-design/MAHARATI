import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FolderOpen, Copy, Pencil, Trash2, ArrowUpRight } from "lucide-react";
import { useAuth } from "../lib/Auth";
import { supabase, date } from "../lib/supabase";
import { Empty, Modal, Notice, useAction } from "../components/UI";
import type { Project } from "../types";
export default function Projects() {
  const { profile, user, loading } = useAuth(),
    [projects, setProjects] = useState<Project[]>([]),
    [target, setTarget] = useState<Project | null>(null),
    [mode, setMode] = useState(""),
    [title, setTitle] = useState(""),
    action = useAction();
  async function load() {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("updated_at", { ascending: false });
    if (error) throw error;
    setProjects(data || []);
  }
  useEffect(() => {
    setProjects([]);
    if (profile?.is_member) void action.run(load, "");
  }, [user?.id, profile?.is_member]);
  async function mutate() {
    if (!supabase || !target) return;
    let result;
    if (mode === "delete")
      result = await supabase.from("projects").delete().eq("id", target.id);
    else if (mode === "rename")
      result = await supabase
        .from("projects")
        .update({ title: title.trim() })
        .eq("id", target.id);
    else {
      const { template_id, template_version, profile, drafts, outputs } =
        target;
      result = await supabase.from("projects").insert({
        template_id,
        template_version,
        profile,
        drafts,
        outputs,
        title: ("Salinan " + target.title).slice(0, 150),
      });
    }
    if (result.error) throw result.error;
    setTarget(null);
    await load();
  }
  if (loading) return <p>Memuat akun…</p>;
  if (!profile?.is_member)
    return (
      <Empty title="Ruang untuk proyek Anda">
        <FolderOpen size={42} />
        <p>
          Member dapat menyimpan 100 proyek dan membukanya kembali dari
          perangkat lain.
        </p>
        <Link className="button" to="/kopi">
          Lihat akses member
        </Link>
        <Link className="button secondary" to="/akun">
          Masuk
        </Link>
      </Empty>
    );
  return (
    <>
      <div className="eyebrow">RUANG KERJA PRIBADI</div>
      <h1>Proyek Saya</h1>
      <p className="lead">
        Lanjutkan ide Anda, kapan saja. {projects.length} / 100 proyek
        tersimpan.
      </p>
      {action.message && <Notice>{action.message}</Notice>}
      <button
        className="button secondary"
        disabled={action.busy}
        onClick={() => void action.run(load, "Daftar diperbarui.")}
      >
        Muat ulang
      </button>
      {projects.length === 0 && (
        <Empty title="Belum ada proyek">
          <p>Buka prompt, isi kebutuhan, lalu pilih Simpan ke Akun.</p>
          <Link to="/prompt" className="button">
            Mulai proyek pertama
          </Link>
        </Empty>
      )}
      {projects.map((p) => (
        <article className="project-item panel" key={p.id}>
          <div>
            <h2>{p.title}</h2>
            <p>
              {p.template_id} · Diperbarui {date(p.updated_at)}
            </p>
          </div>
          <div className="actions">
            <Link
              className="button"
              to={"/prompt/" + p.template_id + "?project=" + p.id}
            >
              Buka <ArrowUpRight size={16} />
            </Link>
            {[
              ["rename", "Ganti nama", Pencil],
              ["duplicate", "Gandakan", Copy],
              ["delete", "Hapus", Trash2],
            ].map(([m, label, Icon]) => {
              const I = Icon as typeof Copy;
              return (
                <button
                  className="icon-button"
                  aria-label={label + " " + p.title}
                  title={String(label)}
                  key={String(m)}
                  onClick={() => {
                    setTarget(p);
                    setMode(String(m));
                    setTitle(p.title);
                  }}
                >
                  <I size={17} />
                </button>
              );
            })}
          </div>
          <details>
            <summary>Hasil prompt terakhir</summary>
            {Object.entries(p.outputs).map(([id, output]) => (
              <label className="field" key={id}>
                {id}
                <textarea readOnly rows={10} value={output} />
              </label>
            ))}
          </details>
        </article>
      ))}
      {target && (
        <Modal
          title={
            mode === "delete"
              ? "Hapus proyek?"
              : mode === "rename"
                ? "Ganti nama proyek"
                : "Gandakan proyek?"
          }
          onClose={() => setTarget(null)}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void action.run(mutate);
            }}
          >
            {mode === "rename" ? (
              <label className="field">
                Judul
                <input
                  required
                  maxLength={150}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
            ) : (
              <p>
                {target.title}
                {mode === "delete" ? " akan dihapus dari akun Anda." : ""}
              </p>
            )}
            <button className="button" disabled={action.busy}>
              Konfirmasi
            </button>
            <button
              type="button"
              className="button secondary"
              onClick={() => setTarget(null)}
            >
              Batal
            </button>
            {action.message && <Notice>{action.message}</Notice>}
          </form>
        </Modal>
      )}
    </>
  );
}
