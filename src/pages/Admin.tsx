import { useEffect, useState } from "react";
import { useAuth } from "../lib/Auth";
import {
  query,
  rpc,
  rupiah,
  date,
  proofUrl,
  uploadProof,
  checkDrive,
} from "../lib/supabase";
import { Empty, Modal, Notice, useAction } from "../components/UI";
export default function Admin() {
  const { profile, loading } = useAuth(),
    action = useAction(),
    [tab, setTab] = useState("donations"),
    [data, setData] = useState<Record<string, any[]>>({}),
    [target, setTarget] = useState<any>(null),
    [operation, setOperation] = useState(""),
    [note, setNote] = useState(""),
    [status, setStatus] = useState("Diajukan"),
    [published, setPublished] = useState(false),
    [file, setFile] = useState<File | null>(null),
    [period, setPeriod] = useState(new Date().toISOString().slice(0, 7)),
    [paidAmount, setPaidAmount] = useState(0),
    [pay, setPay] = useState({
      id: "",
      label: "",
      account_number: "",
      account_name: "",
      active: true,
    });
  async function load() {
    const names = [
      "donations",
      "partners",
      "profiles",
      "payment_methods",
      "feature_requests",
      "partner_ledger",
      "payouts",
      "audit_log",
      "app_settings",
    ];
    const results = await Promise.all(names.map(query));
    setData(Object.fromEntries(names.map((n, i) => [n, results[i]])));
  }
  useEffect(() => {
    setData({});
    if (profile?.is_admin) void action.run(load, "");
  }, [profile?.id, profile?.is_admin]);
  function choose(row: any, op: string) {
    setTarget(row);
    setOperation(op);
    setNote("");
    setFile(null);
    setPaidAmount(0);
    if (op === "feature") {
      setStatus(row.status);
      setPublished(row.is_public);
    }
    if (op === "method") setPay(row);
  }
  async function perform() {
    if (
      operation === "verify" ||
      operation === "reject" ||
      operation === "reverse"
    )
      await rpc("review_donation", {
        p_id: target.id,
        p_action: operation,
        p_note: note,
      });
    else if (
      ["approve-partner", "reject-partner", "disable-partner"].includes(
        operation,
      )
    )
      await rpc("review_partner", {
        p_user: target.user_id,
        p_status:
          operation === "approve-partner"
            ? "approved"
            : operation === "reject-partner"
              ? "rejected"
              : "disabled",
        p_note: note,
      });
    else if (operation === "feature")
      await rpc("review_feature", {
        p_id: target.id,
        p_status: status,
        p_public: published,
      });
    else if (operation === "method")
      await rpc("save_payment_method", {
        p_id: pay.id,
        p_label: pay.label,
        p_number: pay.account_number,
        p_name: pay.account_name,
        p_active: pay.active,
      });
    else if (operation === "payout") {
      if (!file) throw Error("Pilih bukti pembayaran komisi.");
      const path = await uploadProof(file, "payouts");
      try {
        await rpc("record_payout", {
          p_partner: target.user_id,
          p_period: period + "-01",
          p_proof: path,
          p_amount: paidAmount,
        });
      } catch (e) {
        // Keep uploaded evidence: a lost RPC response may still mean it was saved.
        throw e;
      }
    }
    setTarget(null);
    await load();
  }
  const person = (id: string) =>
    data.profiles?.find((p) => p.id === id)?.display_name || id;
  if (loading) return <p>Memuat hak akses…</p>;
  if (!profile?.is_admin)
    return (
      <Empty title="Halaman khusus pengelola">
        <p>Akun Anda tidak memiliki akses admin.</p>
      </Empty>
    );
  return (
    <>
      <div className="eyebrow">PENGELOLA MAHARATI</div>
      <h1>Panel Admin</h1>
      <p className="lead">Periksa dukungan, kelola mitra, dan rawat layanan.</p>
      <div className="segmented tabs">
        {[
          ["donations", "Dukungan"],
          ["partners", "Mitra & Komisi"],
          ["payment_methods", "Pembayaran"],
          ["feature_requests", "Usulan Fitur"],
          ["profiles", "Member"],
          ["audit_log", "Aktivitas Admin"],
          ["app_settings", "Pengaturan"],
        ].map(([id, label]) => (
          <button
            className={tab === id ? "active" : ""}
            key={id}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        className="text-button"
        disabled={action.busy}
        onClick={() => void action.run(load, "Data diperbarui.")}
      >
        Muat ulang data
      </button>
      {action.message && <Notice>{action.message}</Notice>}
      {tab === "donations" &&
        (data.donations || [])
          .sort((a, b) => b.created_at.localeCompare(a.created_at))
          .map((d) => (
            <article className="panel record" key={d.id}>
              <div className="section-heading">
                <h2>{person(d.user_id)}</h2>
                <span className="badge">{d.status}</span>
              </div>
              <strong>{rupiah(d.amount)}</strong>
              <p>
                {d.payment_label} · {date(d.created_at)}
              </p>
              <p>{d.message}</p>
              <p>Referral: {d.referral_code || "Tanpa referral"}</p>
              {d.review_note && <p>Catatan: {d.review_note}</p>}
              <div className="actions">
                <button
                  className="button secondary"
                  onClick={() =>
                    void action.run(async () => {
                      window.open(
                        await proofUrl(d.proof_path),
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }, "")
                  }
                >
                  Periksa bukti
                </button>
                {d.status === "pending" && (
                  <>
                    <button
                      className="button"
                      onClick={() => choose(d, "verify")}
                    >
                      Verifikasi
                    </button>
                    <button
                      className="button danger"
                      onClick={() => choose(d, "reject")}
                    >
                      Tolak
                    </button>
                  </>
                )}
                {d.status === "verified" && (
                  <button
                    className="button danger"
                    onClick={() => choose(d, "reverse")}
                  >
                    Batalkan & catat koreksi
                  </button>
                )}
              </div>
            </article>
          ))}
      {tab === "partners" &&
        (data.partners || []).map((p) => (
          <article className="panel record" key={p.user_id}>
            <div className="section-heading">
              <h2>{person(p.user_id)}</h2>
              <span className="badge">{p.status}</span>
            </div>
            <p>{p.reason}</p>
            <p>
              {p.payment_method} · {p.account_number} · {p.account_name}
            </p>
            <p>
              Kode: {p.referral_code || "Belum aktif"} · Saldo belum dibayar:{" "}
              {rupiah(
                (data.partner_ledger || [])
                  .filter((x) => x.partner_id === p.user_id && !x.payout_id)
                  .reduce((s, x) => s + x.amount, 0),
              )}
            </p>
            <div className="actions">
              {p.status === "pending" && (
                <>
                  <button
                    className="button"
                    onClick={() => choose(p, "approve-partner")}
                  >
                    Setujui
                  </button>
                  <button
                    className="button danger"
                    onClick={() => choose(p, "reject-partner")}
                  >
                    Tolak
                  </button>
                </>
              )}
              {p.status === "approved" && (
                <button
                  className="button danger"
                  onClick={() => choose(p, "disable-partner")}
                >
                  Nonaktifkan referral
                </button>
              )}
              {["approved", "disabled"].includes(p.status) && (
                <button
                  className="button secondary"
                  onClick={() => choose(p, "payout")}
                >
                  Catat pembayaran komisi
                </button>
              )}
            </div>
            {(data.payouts || [])
              .filter((x) => x.partner_id === p.user_id)
              .map((x) => (
                <p key={x.id}>
                  Dibayar {rupiah(x.amount)} · {date(x.created_at)}{" "}
                  <button
                    className="text-button"
                    onClick={() =>
                      void action.run(async () => {
                        window.open(
                          await proofUrl(x.proof_path),
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }, "")
                    }
                  >
                    Bukti
                  </button>
                </p>
              ))}
          </article>
        ))}
      {tab === "app_settings" && (
        <section className="panel">
          <h2>Pengaturan aplikasi</h2>
          <p>
            Rahasia penghubung Drive disimpan pada server, bukan di sini.
            Pemeriksaan ini tidak mengunggah file; uji unggahan tetap
            diperlukan.
          </p>
          <button
            className="button secondary"
            disabled={action.busy}
            onClick={() =>
              void action.run(async () => {
                await checkDrive();
              }, "Koneksi Drive dan arsip dapat dibaca. Lanjutkan dengan satu unggahan uji.")
            }
          >
            Periksa koneksi Drive
          </button>
          {(data.app_settings || []).map((s) => (
            <form
              className="record"
              key={s.setting_key}
              onSubmit={(e) => {
                e.preventDefault();
                const value = new FormData(e.currentTarget).get("value");
                void action.run(async () => {
                  if (s.setting_key === "proof_provider" && value === "drive")
                    await checkDrive();
                  await rpc("save_app_setting", {
                    p_key: s.setting_key,
                    p_value: value,
                  });
                  await load();
                });
              }}
            >
              <label className="field">
                {s.description}
                {s.setting_key === "proof_provider" ? (
                  <select name="value" defaultValue={s.setting_value}>
                    <option value="supabase">Supabase Storage</option>
                    <option value="drive">Google Drive + arsip Sheets</option>
                  </select>
                ) : (
                  <input
                    name="value"
                    required
                    maxLength={500}
                    defaultValue={s.setting_value}
                  />
                )}
              </label>
              <button className="button secondary" disabled={action.busy}>
                Simpan pengaturan
              </button>
            </form>
          ))}
        </section>
      )}
      {tab === "payment_methods" && (
        <>
          <button
            className="button"
            onClick={() =>
              choose(
                {
                  id: "",
                  label: "",
                  account_name: "",
                  account_number: "",
                  active: false,
                },
                "method",
              )
            }
          >
            Tambah metode pembayaran
          </button>
          {(data.payment_methods || []).map((m) => (
            <article className="panel record" key={m.id}>
              <h2>{m.label}</h2>
              <p>
                {m.account_number || "Belum diisi"} ·{" "}
                {m.account_name || "Belum diisi"} ·{" "}
                {m.active ? "Aktif" : "Nonaktif"}
              </p>
              <button
                className="button secondary"
                onClick={() => choose(m, "method")}
              >
                Ubah
              </button>
            </article>
          ))}
        </>
      )}
      {tab === "feature_requests" &&
        (data.feature_requests || []).map((f) => (
          <article className="panel record" key={f.id}>
            <span className="badge">{f.status}</span>
            <h2>{f.title}</h2>
            <p>{f.details}</p>
            <p>
              {person(f.user_id)} · {f.is_public ? "Publik" : "Privat"}
            </p>
            <button
              className="button secondary"
              onClick={() => choose(f, "feature")}
            >
              Moderasi
            </button>
          </article>
        ))}
      {tab === "profiles" &&
        (data.profiles || []).map((p) => (
          <article className="panel record" key={p.id}>
            <h2>{p.display_name}</h2>
            <p>
              {p.institution} · {p.is_member ? "Member seumur hidup" : "Gratis"}
              {p.is_admin ? " · Admin" : ""}
            </p>
            <small>{p.id}</small>
          </article>
        ))}
      {tab === "audit_log" &&
        (data.audit_log || [])
          .sort((a, b) => b.created_at.localeCompare(a.created_at))
          .map((log) => (
            <div className="record panel" key={log.id}>
              <strong>{log.action}</strong>
              <p>
                {date(log.created_at)} · {person(log.actor_id)}
              </p>
              <code>{JSON.stringify(log.details)}</code>
            </div>
          ))}
      {target && (
        <Modal
          title={
            operation === "method"
              ? "Metode pembayaran"
              : operation === "payout"
                ? "Catat pembayaran komisi"
                : "Konfirmasi tindakan admin"
          }
          onClose={() => setTarget(null)}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void action.run(perform);
            }}
          >
            {operation === "method" ? (
              <>
                {[
                  ["id", "Kode metode"],
                  ["label", "Nama metode"],
                  ["account_number", "Nomor rekening / e-wallet"],
                  ["account_name", "Nama penerima"],
                ].map(([key, label]) => (
                  <label className="field" key={key}>
                    {label}
                    <input
                      required
                      value={(pay as any)[key]}
                      maxLength={100}
                      disabled={key === "id" && !!target.id}
                      onChange={(e) =>
                        setPay({ ...pay, [key]: e.target.value })
                      }
                    />
                  </label>
                ))}
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={pay.active}
                    onChange={(e) =>
                      setPay({ ...pay, active: e.target.checked })
                    }
                  />
                  Aktif
                </label>
              </>
            ) : operation === "feature" ? (
              <>
                <label className="field">
                  Status
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    {[
                      "Diajukan",
                      "Direncanakan",
                      "Dikerjakan",
                      "Selesai",
                      "Tidak Dilanjutkan",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                  />
                  Publikasikan judul dan isi usulan
                </label>
              </>
            ) : operation === "payout" ? (
              <>
                <p>
                  Transfer manual terlebih dahulu. Sistem menjumlahkan seluruh
                  komisi belum dibayar sampai akhir bulan terpilih, termasuk
                  koreksi.
                </p>
                <label className="field">
                  Sampai bulan
                  <input
                    type="month"
                    value={period}
                    required
                    onChange={(e) => setPeriod(e.target.value)}
                  />
                </label>
                <label className="field">
                  Bukti transfer komisi
                  <input
                    required
                    type="file"
                    accept="image/jpeg,image/png,application/pdf"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </label>
                <p>
                  Saldo periode terpilih:{" "}
                  <strong>
                    {rupiah(
                      (data.partner_ledger || [])
                        .filter(
                          (x) =>
                            x.partner_id === target.user_id &&
                            !x.payout_id &&
                            new Date(x.created_at)
                              .toLocaleDateString("sv-SE", {
                                timeZone: "Asia/Jakarta",
                              })
                              .slice(0, 7) <= period,
                        )
                        .reduce((sum, x) => sum + x.amount, 0),
                    )}
                  </strong>
                </p>
                <label className="field">
                  Nominal yang benar-benar ditransfer (Rp)
                  <input
                    type="number"
                    min={1}
                    step={1}
                    required
                    value={paidAmount || ""}
                    onChange={(e) => setPaidAmount(Number(e.target.value))}
                  />
                </label>
              </>
            ) : (
              <>
                <p>
                  {operation === "verify"
                    ? `Verifikasi ${rupiah(target.amount)}. Pastikan dana benar-benar sudah diterima.`
                    : operation === "reverse"
                      ? "Pembatalan akan mencatat koreksi komisi dan menghitung ulang kelayakan member."
                      : "Tindakan ini akan dicatat dalam riwayat admin."}
                </p>
                <label className="field">
                  Catatan {operation === "verify" ? "(opsional)" : "(wajib)"}
                  <textarea
                    value={note}
                    required={operation !== "verify"}
                    maxLength={1000}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </label>
              </>
            )}
            {action.message && <Notice>{action.message}</Notice>}
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
          </form>
        </Modal>
      )}
    </>
  );
}
