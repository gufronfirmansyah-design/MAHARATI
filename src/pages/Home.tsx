import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowUpRight,
  BookOpen,
  Image,
  Gamepad2,
  Code2,
  Video,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { categories, menuTemplates, templates } from "../templates";
import { useAuth } from "../lib/Auth";
import { supabase, date } from "../lib/supabase";
import type { Project } from "../types";
const icons = {
  book: BookOpen,
  image: Image,
  game: Gamepad2,
  code: Code2,
  video: Video,
};
export function Catalog({ home = false }: { home?: boolean }) {
  const [search, setSearch] = useState(""),
    [category, setCategory] = useState("perencanaan");
  const { profile, user } = useAuth();
  const [recent, setRecent] = useState<Project[]>([]),
    [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    setRecent([]);
    if (home && profile?.is_member && supabase)
      supabase
        .from("projects")
        .select("*")
        .order("updated_at", { ascending: false })
        .limit(3)
        .then(({ data, error }) => {
          if (active) {
            setRecent(data || []);
            setError(error ? "Proyek terakhir belum dapat dimuat." : "");
          }
        });
    return () => {
      active = false;
    };
  }, [home, profile?.is_member, user?.id]);
  const selected = categories.find((c) => c.id === category)!;
  const items = menuTemplates.filter(
    (t) =>
      t.category === category &&
      (t.title + " " + t.description)
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  return (
    <>
      <div className="eyebrow">
        {home ? "SELAMAT DATANG DI MAHARATI" : "PERPUSTAKAAN PROMPT"}
      </div>
      {home ? (
        <section className="hero">
          <div>
            <div className="hero-tag">
              <Sparkles size={15} /> Dari ide menjadi pembelajaran
            </div>
            <h1>
              Lebih banyak inspirasi.
              <br />
              <em>Lebih mudah berkarya.</em>
            </h1>
            <p>
              Temukan prompt yang Anda perlukan. Isi sesuai kebutuhan, salin,
              lalu gunakan di layanan AI pilihan Anda.
            </p>
            <Link className="button" to="/prompt">
              Jelajahi prompt <ArrowRight size={18} />
            </Link>
            <span className="hero-note">Gratis untuk semua guru</span>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit one" />
            <div className="orbit two" />
            <div className="art-card top">
              <BookOpen />
              <span>Rencana yang terarah</span>
            </div>
            <div className="art-main">
              <Sparkles size={44} />
              <strong>
                Ruang untuk
                <br />
                ide hebat Anda.
              </strong>
              <div className="art-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="art-card bottom">
              <span className="green-dot" />
              Siap menginspirasi kelas
            </div>
          </div>
        </section>
      ) : (
        <>
          <h1>Prompt untuk setiap ide.</h1>
          <p className="lead">
            Pilih kebutuhan Anda. Semua prompt dapat diakses langsung.
          </p>
        </>
      )}
      <div className="section-heading">
        <div>
          <h2>Mulai dari kebutuhan Anda</h2>
          <p>Satu ruang, beragam kemungkinan.</p>
        </div>
        <span className="badge">{categories.length} kategori</span>
      </div>
      <div className="category-grid">
        {categories.map((c) => {
          const Icon = icons[c.icon as keyof typeof icons];
          return (
            <button
              className={`category-card ${category === c.id ? "selected" : ""}`}
              key={c.id}
              onClick={() => {
                setCategory(c.id);
                setSearch("");
              }}
              aria-pressed={category === c.id}
            >
              <span className={`category-icon ${c.id}`}>
                <Icon size={24} />
              </span>
              <strong>{c.short}</strong>
              <small>
                {c.ready
                  ? `${templates.filter((t) => t.category === c.id).length} prompt tersedia`
                  : "Segera Hadir"}
              </small>
            </button>
          );
        })}
      </div>
      <section className="catalog-section">
        <div className="section-heading">
          <div>
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
          </div>
          {selected.ready && (
            <label className="search">
              <Search size={18} />
              <input
                aria-label="Cari prompt"
                placeholder="Cari prompt…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          )}
        </div>
        {selected.ready ? (
          <>
            {selected.id === "perencanaan" && (
              <details className="guide">
                <summary>Panduan bertahap — mulai dari mana?</summary>
                <p>
                  Siapkan sumber di percakapan AI yang sama. Setiap langkah
                  dapat dibuka langsung.
                </p>
                {[
                  ["cp-bse", "waktu", "prota"],
                  [
                    "waktu",
                    "aktivitas",
                    "gambaran-asesmen",
                    "rpp",
                    "asesmen-rpp",
                    "lkpd",
                  ],
                  ["cp-bse", "blueprint", "soal", "analisis"],
                ].map((path, i) => (
                  <div className="guide-path" key={i}>
                    {path.map((id, j) => (
                      <span key={id}>
                        {j > 0 && " → "}
                        <Link to={"/prompt/" + id}>
                          {menuTemplates.find((t) => t.id === id)?.title}
                        </Link>
                      </span>
                    ))}
                  </div>
                ))}
                <p>
                  Alternatif TP dengan AI merupakan langkah pilihan setelah
                  analisis BSE. Panduan tidak mengambil hasil percakapan AI
                  secara otomatis.
                </p>
              </details>
            )}
            <div className="prompt-grid">
              {items.map((t, i) => (
                <Link className="prompt-card" to={"/prompt/" + t.id} key={t.id}>
                  <div className="card-top">
                    <span className="badge">{t.group}</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <span className="card-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{t.title}</h3>
                  <p>{t.description}</p>
                  <div className="card-bottom">
                    {t.fields.length
                      ? "Isi sesuai kebutuhan"
                      : "Langsung salin"}
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
            {!items.length && (
              <p>Tidak ada prompt yang cocok. Coba kata lain.</p>
            )}
          </>
        ) : (
          <div className="coming-soon">
            <Sparkles size={32} />
            <h3>Ide berikutnya sedang disiapkan.</h3>
            <p>
              Prompt kategori ini akan tersedia setelah referensinya selesai
              ditinjau.
            </p>
            <button
              className="button secondary"
              onClick={() => setCategory("perencanaan")}
            >
              Buka Perencanaan Pembelajaran
            </button>
          </div>
        )}
      </section>
      {home && profile?.is_member && (
        <section>
          <div className="section-heading">
            <h2>Proyek terakhir</h2>
            <Link to="/proyek">Lihat semua →</Link>
          </div>
          {error && <p role="status">{error}</p>}
          {recent.map((p) => (
            <Link
              className="project-row"
              to={"/prompt/" + p.template_id + "?project=" + p.id}
              key={p.id}
            >
              <strong>{p.title}</strong>
              <span>{date(p.updated_at)}</span>
              <ArrowUpRight size={18} />
            </Link>
          ))}
          {!recent.length && !error && (
            <p>Proyek yang Anda simpan ke akun akan muncul di sini.</p>
          )}
        </section>
      )}
    </>
  );
}
