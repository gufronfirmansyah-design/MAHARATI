import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Coffee, Heart, CheckCircle2 } from "lucide-react";
import { useAuth } from "../lib/Auth";
import {
  configured,
  query,
  rpc,
  uploadProof,
  proofUrl,
  rupiah,
  date,
} from "../lib/supabase";
import { Notice, useAction, Empty } from "../components/UI";
export default function Support() {
  const { user, profile } = useAuth(),
    [params] = useSearchParams(),
    action = useAction();
  const [tab, setTab] = useState("dukungan"),
    [methods, setMethods] = useState<any[]>([]),
    [donations, setDonations] = useState<any[]>([]),
    [wall, setWall] = useState<any[]>([]),
    [features, setFeatures] = useState<any[]>([]),
    [ownFeatures, setOwnFeatures] = useState<any[]>([]),
    [partners, setPartners] = useState<any[]>([]);
  const [amount, setAmount] = useState(25000),
    [method, setMethod] = useState(""),
    [file, setFile] = useState<File | null>(null),
    [message, setMessage] = useState(""),
    [visible, setVisible] = useState(false),
    [referral, setReferral] = useState(params.get("ref") || ""),
    [feature, setFeature] = useState(""),
    [details, setDetails] = useState("");
  const selected = methods.find((m) => m.id === method);
  const [supportNote, setSupportNote] = useState("");
  async function load() {
    const results = await Promise.all([
      query("payment_methods"),
      query("public_wall"),
      query("public_features"),
      query("public_partners"),
      user ? query("donations") : [],
      user ? query("feature_requests") : [],
      query("app_settings"),
    ]);
    setMethods(results[0].filter((x) => x.active));
    setSupportNote(
      results[6].find((x) => x.setting_key === "support_note")?.setting_value ||
        "",
    );
    setWall(results[1]);
    setFeatures(results[2]);
    setPartners(results[3]);
    setDonations(
      results[4]
        .filter((x) => x.user_id === user?.id)
        .sort((a, b) => b.created_at.localeCompare(a.created_at)),
    );
    setOwnFeatures(results[5].filter((x) => x.user_id === user?.id));
  }
  useEffect(() => {
    setDonations([]);
    setOwnFeatures([]);
    void action.run(load, "");
  }, [user?.id]);
  async function submit() {
    if (!file) throw Error("Pilih bukti transfer terlebih dahulu.");
    const path = await uploadProof(file, "donations");
    try {
      await rpc("submit_donation", {
        p_amount: amount,
        p_method: method,
        p_proof: path,
        p_message: message,
        p_consent: visible,
        p_referral: referral.trim().toUpperCase() || null,
      });
    } catch (e) {
      // Keep uploaded evidence: a lost RPC response may still mean it was saved.
      throw e;
    }
    setFile(null);
    setMessage("");
    setTab("status");
    await load();
  }
  return (
    <>
      <div className="eyebrow amber-text">TUMBUH BERSAMA</div>
      <section className="support-hero">
        <div>
          <h1>
            Traktir kopi.
            <br />
            <em>Rawat ruang berbagi.</em>
          </h1>
          <p>
            Setiap dukungan membantu MAHARATI tetap menjadi ruang inspirasi bagi
            guru.
          </p>
        </div>
        <Coffee size={90} />
      </section>
      <div className="segmented tabs">
        {[
          ["dukungan", "Dukungan"],
          ["status", "Status Saya"],
          ["wall", "Wall of Thanks"],
          ["fitur", "Usulan & Status Fitur"],
        ].map(([id, label]) => (
          <button
            key={id}
            className={tab === id ? "active" : ""}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {!configured && (
        <Notice>
          Pengajuan dukungan belum dibuka. Pengelola perlu mengaktifkan layanan
          akun dan metode pembayaran terlebih dahulu.
        </Notice>
      )}
      {action.message && <Notice>{action.message}</Notice>}
      {supportNote && <p className="muted">{supportNote}</p>}
      {tab === "dukungan" && (
        <div className="two-col">
          <section className="panel">
            <h2>Berikan dukungan</h2>
            <div className="support-options">
              {[
                [
                  15000,
                  "☕",
                  "Secangkir Semangat",
                  "Satu tegukan semangat untuk terus berkarya.",
                ],
                [
                  25000,
                  "📚",
                  "Teman Belajar",
                  "Mendukung pengembangan fitur untuk guru.",
                ],
                [
                  50000,
                  "✏️",
                  "Pendukung Fitur",
                  "Membantu pemeliharaan server secara optimal.",
                ],
                [
                  100000,
                  "🚀",
                  "Sahabat Maharati",
                  "Mendukung penuh hadirnya inovasi & fitur baru.",
                ],
              ].map(([value, emoji, title, description]) => (
                <button
                  type="button"
                  className={
                    "support-option " + (amount === value ? "selected" : "")
                  }
                  aria-pressed={amount === value}
                  key={String(value)}
                  onClick={() => setAmount(Number(value))}
                >
                  <span>{emoji}</span>
                  <strong>{rupiah(Number(value))}</strong>
                  <b>{title}</b>
                  <small>{description}</small>
                </button>
              ))}
            </div>
            <p className="muted">
              Dukungan bersifat sukarela. Pilih paket atau isi nominal sendiri,
              berapa pun mulai Rp1. Akses member aktif setelah satu dukungan
              minimal Rp25.000 diverifikasi.
            </p>
            {!user ? (
              <Empty title="Masuk untuk mengirim dukungan">
                <p>
                  Akun digunakan untuk melacak pengajuan dan mengaktifkan
                  keanggotaan.
                </p>
                <Link className="button" to="/akun">
                  Masuk dengan Google
                </Link>
              </Empty>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void action.run(
                    submit,
                    "Pengajuan terkirim. Tunggu verifikasi admin.",
                  );
                }}
              >
                <label className="field">
                  Nominal dukungan (Rp)
                  <input
                    type="number"
                    min={1}
                    max={100000000}
                    step={1}
                    required
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </label>
                <label className="field">
                  Metode pembayaran
                  <select
                    required
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                  >
                    <option value="">Pilih metode</option>
                    {methods.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                </label>
                {!methods.length && (
                  <p>
                    Belum ada metode pembayaran aktif. Jangan mengirim
                    pembayaran sebelum informasi tersedia.
                  </p>
                )}
                {selected && (
                  <div className="payment-info">
                    <small>Transfer ke {selected.label}</small>
                    <strong>{selected.account_number}</strong>
                    <span>{selected.account_name}</span>
                  </div>
                )}
                <label className="field">
                  Bukti transfer · JPG, PNG, PDF · maksimal 5 MB
                  <input
                    type="file"
                    required
                    accept="image/jpeg,image/png,application/pdf"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </label>
                <label className="field">
                  Kode mitra (opsional)
                  <input
                    list="partners"
                    value={referral}
                    maxLength={30}
                    onChange={(e) => setReferral(e.target.value)}
                  />
                  <datalist id="partners">
                    {partners.map((p) => (
                      <option value={p.referral_code} key={p.referral_code}>
                        {p.display_name}
                      </option>
                    ))}
                  </datalist>
                </label>
                <label className="field">
                  Pesan dukungan (opsional)
                  <textarea
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={visible}
                    onChange={(e) => setVisible(e.target.checked)}
                  />
                  <span>
                    Tampilkan nama, nominal, dan pesan saya di Wall of Thanks
                    setelah diverifikasi.
                  </span>
                </label>
                <button
                  className="button amber"
                  disabled={action.busy || !methods.length}
                >
                  Kirim bukti dukungan
                </button>
              </form>
            )}
          </section>
          <section className="panel member-panel">
            <Heart size={34} />
            <h2>
              {profile?.is_member
                ? "Terima kasih, Sahabat MAHARATI."
                : "Menjadi Sahabat MAHARATI"}
            </h2>
            <div className="price">
              Rp25.000<small>dukungan minimum, sekali</small>
            </div>
            <p>
              Akses member seumur hidup selama layanan MAHARATI beroperasi,
              setelah dukungan diverifikasi.
            </p>
            {[
              "Simpan hingga 100 proyek",
              "Buka isian dari perangkat lain",
              "Kelola dan gandakan proyek",
              "Bebas pop-up Traktir Kopi",
            ].map((s) => (
              <p className="benefit" key={s}>
                <CheckCircle2 size={18} />
                {s}
              </p>
            ))}
            <p className="muted">
              Seluruh prompt tetap gratis. Dukungan di bawah Rp25.000 tidak
              mengaktifkan member. Pengajuan menggunakan satu transaksi, bukan
              akumulasi.
            </p>
          </section>
        </div>
      )}
      {tab === "status" && (
        <section className="panel">
          <h2>Riwayat dukungan</h2>
          {!user ? (
            <Link to="/akun">Masuk untuk melihat status</Link>
          ) : (
            <>
              <button
                className="button secondary"
                disabled={action.busy}
                onClick={() => void action.run(load, "Status diperbarui.")}
              >
                Muat ulang status
              </button>
              {!donations.length && <p>Belum ada pengajuan.</p>}
              {donations.map((d) => (
                <article className="record" key={d.id}>
                  <div className="section-heading">
                    <strong>{rupiah(d.amount)}</strong>
                    <span className="badge">
                      {
                        (
                          {
                            pending: "Menunggu",
                            verified: "Terverifikasi",
                            rejected: "Ditolak",
                            reversed: "Dibatalkan",
                          } as any
                        )[d.status]
                      }
                    </span>
                  </div>
                  <p>
                    {date(d.created_at)} · {d.payment_label}
                  </p>
                  {d.review_note && <Notice>{d.review_note}</Notice>}
                  <button
                    className="text-button"
                    onClick={() =>
                      void action.run(async () => {
                        const url = await proofUrl(d.proof_path);
                        window.open(url, "_blank", "noopener,noreferrer");
                      }, "")
                    }
                  >
                    Lihat bukti saya
                  </button>
                  {d.status === "rejected" && (
                    <button
                      className="button secondary"
                      onClick={() => {
                        setAmount(d.amount);
                        setMethod(d.method_id);
                        setTab("dukungan");
                      }}
                    >
                      Ajukan ulang
                    </button>
                  )}
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      checked={d.wall_consent}
                      disabled={action.busy}
                      onChange={(e) =>
                        void action.run(async () => {
                          await rpc("set_wall_consent", {
                            p_id: d.id,
                            p_consent: e.target.checked,
                          });
                          await load();
                        })
                      }
                    />
                    <span>Izinkan tampil di Wall of Thanks</span>
                  </label>
                </article>
              ))}
            </>
          )}
        </section>
      )}
      {tab === "wall" && (
        <>
          <div className="section-heading">
            <h2>Terima kasih sudah ikut merawat MAHARATI.</h2>
            <Heart size={24} />
          </div>
          <div className="prompt-grid">
            {wall.map((w, i) => (
              <article className="panel thanks-card" key={i}>
                <Heart />
                <h3>{w.display_name}</h3>
                <strong>{rupiah(w.amount)}</strong>
                <p>{w.message || "Mendukung ruang ide guru."}</p>
              </article>
            ))}
          </div>
          {!wall.length && (
            <Empty title="Ruang apresiasi untuk para pendukung">
              <p>
                Dukungan terverifikasi akan tampil di sini jika pemberi dukungan
                menyetujuinya.
              </p>
            </Empty>
          )}
        </>
      )}
      {tab === "fitur" && (
        <div className="two-col">
          <section className="panel">
            <h2>Apa yang ingin Anda lihat berikutnya?</h2>
            {user ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void action.run(async () => {
                    await rpc("submit_feature", {
                      p_title: feature,
                      p_details: details,
                    });
                    setFeature("");
                    setDetails("");
                    await load();
                  }, "Usulan dikirim untuk ditinjau admin.");
                }}
              >
                <label className="field">
                  Judul usulan
                  <input
                    required
                    maxLength={150}
                    value={feature}
                    onChange={(e) => setFeature(e.target.value)}
                  />
                </label>
                <label className="field">
                  Ceritakan kebutuhan Anda
                  <textarea
                    required
                    maxLength={2000}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </label>
                <button className="button" disabled={action.busy}>
                  Kirim usulan
                </button>
              </form>
            ) : (
              <Link to="/akun">Masuk untuk mengirim usulan</Link>
            )}
            {ownFeatures.length > 0 && (
              <>
                <h3>Usulan saya</h3>
                {ownFeatures.map((f) => (
                  <div className="record" key={f.id}>
                    <strong>{f.title}</strong>
                    <p>
                      {f.status} ·{" "}
                      {f.is_public ? "Dipublikasikan" : "Belum dipublikasikan"}
                    </p>
                  </div>
                ))}
              </>
            )}
          </section>
          <section className="panel">
            <h2>Status pengembangan</h2>
            {!features.length && <p>Belum ada usulan yang dipublikasikan.</p>}
            {features.map((f, i) => (
              <div className="record" key={i}>
                <span className="badge">{f.status}</span>
                <h3>{f.title}</h3>
                <p>{f.details}</p>
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
}
