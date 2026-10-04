import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, LogIn } from "lucide-react";
import { useAuth } from "../lib/Auth";
import { useDrafts } from "../lib/Drafts";
import { configured, rpc } from "../lib/supabase";
import { Modal, Notice, useAction } from "../components/UI";
export default function Account() {
  const { user, profile, login, logout, loading, error, refresh } = useAuth(),
    { reset } = useDrafts(),
    [confirm, setConfirm] = useState(false),
    [name, setName] = useState(""),
    [school, setSchool] = useState(""),
    action = useAction();
  useEffect(() => {
    setName(profile?.display_name || "");
    setSchool(profile?.institution || "");
  }, [profile?.id]);
  return (
    <>
      <div className="eyebrow">AKUN MAHARATI</div>
      <h1>Ruang Anda, di mana saja.</h1>
      <p className="lead">
        Satu akun Google untuk profil, proyek, dukungan, dan kemitraan.
      </p>
      {!configured && (
        <Notice>
          Mode lokal aktif. Semua prompt gratis tersedia. Login dan penyimpanan
          daring akan aktif setelah pengelola menghubungkan Supabase serta
          Google.
        </Notice>
      )}
      {(error || action.message) && <Notice>{error || action.message}</Notice>}
      <div className="two-col">
        <section className="panel">
          <ShieldCheck className="big-icon" />
          <h2>{profile?.display_name || "Selamat datang, Guru."}</h2>
          {loading ? (
            <p>Memuat akun…</p>
          ) : user ? (
            <>
              <p>{user.email}</p>
              <span className="badge">
                {profile?.is_member ? "Member seumur hidup" : "Akun gratis"}
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void action.run(async () => {
                    await rpc("update_profile", {
                      p_name: name,
                      p_institution: school,
                    });
                    await refresh();
                  });
                }}
              >
                <label className="field">
                  Nama tampilan
                  <input
                    value={name}
                    required
                    maxLength={100}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="field">
                  Sekolah / instansi
                  <input
                    value={school}
                    maxLength={200}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </label>
                <button className="button" disabled={action.busy}>
                  Simpan profil
                </button>
              </form>
              <button
                className="text-button"
                onClick={() =>
                  void action.run(
                    logout,
                    "Anda telah keluar. Draf lokal tetap tersimpan di perangkat ini.",
                  )
                }
              >
                Keluar dari akun
              </button>
            </>
          ) : (
            <>
              <p>
                Masuk tanpa membuat kata sandi baru. Semua prompt tetap dapat
                digunakan tanpa akun.
              </p>
              <button
                className="button"
                disabled={!configured || action.busy}
                onClick={() => void action.run(login, "")}
              >
                <LogIn size={18} />
                Masuk dengan Google
              </button>
            </>
          )}
        </section>
        <section className="panel">
          <h2>Data dan privasi</h2>
          <p>
            Draf gratis hanya berada di browser ini. Data tidak otomatis pindah
            ke akun saat Anda masuk.
          </p>
          <p>
            Gunakan <strong>Simpan ke Akun</strong> untuk menyimpan proyek
            sebagai member. Jangan masukkan data pribadi murid ke isian prompt.
          </p>
          <p>
            Bukti dukungan hanya dapat diakses pemilik pengajuan dan admin. Nama
            pada Wall of Thanks hanya tampil atas persetujuan Anda.
          </p>
          <button className="button danger" onClick={() => setConfirm(true)}>
            Hapus Semua Isian Lokal
          </button>
          <p className="muted">
            Proyek di akun tidak ikut dihapus. Kelola melalui Proyek Saya.
          </p>
          <Link to="/kopi">Dukungan dan akses member →</Link>
        </section>
      </div>
      {confirm && (
        <Modal
          title="Hapus semua isian lokal?"
          onClose={() => setConfirm(false)}
        >
          <p>
            Identitas dan draf prompt di browser ini akan dikosongkan. Tindakan
            ini tidak menghapus proyek di akun.
          </p>
          <button
            className="button danger"
            onClick={() => {
              reset();
              setConfirm(false);
              action.setMessage("Isian lokal telah dikosongkan.");
            }}
          >
            Hapus isian
          </button>
          <button
            className="button secondary"
            onClick={() => setConfirm(false)}
          >
            Batal
          </button>
        </Modal>
      )}
    </>
  );
}
