import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Users, Copy } from "lucide-react";
import { useAuth } from "../lib/Auth";
import { query, rpc, rupiah, date, proofUrl } from "../lib/supabase";
import { Notice, useAction } from "../components/UI";
export default function Partner() {
  const { user } = useAuth(),
    action = useAction(),
    [partner, setPartner] = useState<any>(null),
    [ledger, setLedger] = useState<any[]>([]),
    [payouts, setPayouts] = useState<any[]>([]),
    [reason, setReason] = useState(""),
    [method, setMethod] = useState(""),
    [number, setNumber] = useState(""),
    [name, setName] = useState("");
  async function load() {
    const [p, l, h] = await Promise.all([
      query("partners"),
      query("partner_ledger"),
      query("payouts"),
    ]);
    setPartner(p.find((x) => x.user_id === user?.id) || null);
    setLedger(l.filter((x) => x.partner_id === user?.id));
    setPayouts(h.filter((x) => x.partner_id === user?.id));
  }
  useEffect(() => {
    setPartner(null);
    setLedger([]);
    setPayouts([]);
    if (user) void action.run(load, "");
  }, [user?.id]);
  const unpaid = ledger
    .filter((x) => !x.payout_id)
    .reduce((n, x) => n + x.amount, 0);
  const months = ledger.reduce<Record<string, any[]>>((groups, x) => {
    const month = new Date(x.created_at).toLocaleDateString("id-ID", {
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta",
    });
    (groups[month] ??= []).push(x);
    return groups;
  }, {});
  return (
    <>
      <div className="eyebrow">BERSAMA MENJANGKAU LEBIH BANYAK GURU</div>
      <h1>Mitra MAHARATI</h1>
      <p className="lead">
        Bagikan manfaatnya. Dapatkan komisi 30% dari dukungan terverifikasi
        melalui referral Anda.
      </p>
      {action.message && <Notice>{action.message}</Notice>}
      {!user ? (
        <section className="empty">
          <Users size={44} />
          <h2>Mulai dari akun Anda.</h2>
          <Link className="button" to="/akun">
            Masuk untuk mengajukan
          </Link>
        </section>
      ) : partner?.status === "approved" ? (
        <>
          <div className="stats">
            <div className="panel">
              <small>Saldo belum dibayar</small>
              <h2>{rupiah(unpaid)}</h2>
            </div>
            <div className="panel">
              <small>Komisi dibayarkan</small>
              <h2>{rupiah(payouts.reduce((s, x) => s + x.amount, 0))}</h2>
            </div>
            <div className="panel">
              <small>Kode referral</small>
              <h2>{partner.referral_code}</h2>
            </div>
          </div>
          <section className="panel">
            <h2>Tautan referral Anda</h2>
            <input
              readOnly
              aria-label="Tautan referral"
              value={
                window.location.origin + "/kopi?ref=" + partner.referral_code
              }
              onFocus={(e) => e.target.select()}
            />
            <button
              className="button secondary"
              onClick={() =>
                void action.run(async () => {
                  try {
                    await navigator.clipboard.writeText(
                      window.location.origin +
                        "/kopi?ref=" +
                        partner.referral_code,
                    );
                  } catch {
                    throw Error(
                      "Pilih tautan di atas dan salin secara manual.",
                    );
                  }
                }, "Tautan tersalin.")
              }
            >
              <Copy size={16} />
              Salin tautan
            </button>
            <p>
              Referral diri sendiri tidak dihitung. Komisi dibayarkan manual
              oleh admin.
            </p>
            <button
              className="text-button"
              onClick={() => void action.run(load, "Rekap diperbarui.")}
            >
              Muat ulang rekap
            </button>
          </section>
          <section className="panel">
            <h2>Rekap komisi bulanan</h2>
            {Object.entries(months).map(([month, entries]) => (
              <div className="record" key={month}>
                <strong>{month}</strong>
                <p>
                  {rupiah((entries || []).reduce((s, x) => s + x.amount, 0))}
                </p>
                {entries?.map((x) => (
                  <p key={x.id}>
                    {date(x.created_at)} ·{" "}
                    {x.kind === "credit" ? "Komisi" : "Koreksi"} ·{" "}
                    {rupiah(x.amount)} ·{" "}
                    {x.payout_id ? "Dibayarkan" : "Belum dibayar"}
                  </p>
                ))}
              </div>
            ))}
            {!ledger.length && <p>Belum ada komisi tercatat.</p>}
          </section>
          <section className="panel">
            <h2>Riwayat pembayaran komisi</h2>
            {payouts.map((p) => (
              <div className="record" key={p.id}>
                <strong>{rupiah(p.amount)}</strong>
                <p>
                  {date(p.created_at)} · sampai periode {p.period}
                </p>
                <button
                  className="text-button"
                  onClick={() =>
                    void action.run(async () => {
                      window.open(
                        await proofUrl(p.proof_path),
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }, "")
                  }
                >
                  Lihat bukti pembayaran
                </button>
              </div>
            ))}
          </section>
        </>
      ) : (
        <section className="panel narrow">
          <h2>Permohonan mitra</h2>
          {partner && (
            <Notice>
              Status:{" "}
              {partner.status === "pending"
                ? "Menunggu pemeriksaan"
                : partner.status === "rejected"
                  ? "Ditolak"
                  : "Dinonaktifkan"}
              . {partner.review_note}
            </Notice>
          )}
          {(!partner || partner.status === "rejected") && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void action.run(async () => {
                  await rpc("apply_partner", {
                    p_reason: reason,
                    p_payment_method: method,
                    p_account_number: number,
                    p_account_name: name,
                  });
                  await load();
                }, "Permohonan mitra terkirim.");
              }}
            >
              <label className="field">
                Bagaimana Anda akan memperkenalkan MAHARATI?
                <textarea
                  required
                  maxLength={2000}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </label>
              <label className="field">
                Bank / e-wallet penerima komisi
                <input
                  required
                  maxLength={80}
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                />
              </label>
              <label className="field">
                Nomor rekening / e-wallet
                <input
                  required
                  maxLength={80}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </label>
              <label className="field">
                Nama pemilik rekening
                <input
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <p>
                Data rekening hanya dapat dilihat Anda dan admin. Nama tampilan
                dan kode referral akan tampil pada pilihan mitra setelah
                disetujui.
              </p>
              <button className="button" disabled={action.busy}>
                Ajukan kemitraan
              </button>
            </form>
          )}
          <button
            className="text-button"
            onClick={() => void action.run(load, "Status diperbarui.")}
          >
            Muat ulang status
          </button>
        </section>
      )}
    </>
  );
}
