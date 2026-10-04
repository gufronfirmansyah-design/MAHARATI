# TAHAP 6 — Jika terjadi error

Jangan membuat ulang tabel atau mengubah login Google. Cocokkan gejalanya:

| Gejala | Yang diperiksa |
|---|---|
| Periksa koneksi Drive tidak ada | Deployment frontend masih lama; tahap 4 |
| Penghubung belum dapat dihubungi | Deployment proof-drive, domain ALLOWED_ORIGINS, dan koneksi; tahap 3 |
| Invalid JWT / 401 | Login ulang; pastikan deploy --no-verify-jwt dan pemeriksaan auth.getUser tetap ada |
| Pemeriksaan hanya untuk admin | Gunakan akun admin yang sudah ditetapkan; jangan mengubah localStorage |
| Konfigurasi server belum lengkap | Nama secret yang disebut pesan; nilai tidak boleh kosong |
| Apps Script tidak mengembalikan JSON | URL /exec benar, deployment versi baru, akses Web App benar |
| Tanda tangan tidak valid / Otentikasi penghubung gagal | DRIVE_BRIDGE_SECRET dan BRIDGE_SECRET sama persis, minimal 32 karakter |
| Deploy versi Apps Script terbaru | Tahap 2: pilih New version, bukan hanya Save kode |
| Folder dan spreadsheet harus Restricted | Perbaiki akses umum di Drive, jangan membuatnya publik |
| Jalankan setupMaharati dahulu | Tab Uploads belum ada; tahap 2 |
| Reservasi proof_files gagal | Hasil pemeriksaan SQL tahap 1; fungsi, profil, izin service_role, atau batas 20 unggahan/hari |
| proof_files pending, file tidak ada | Bridge/izin Drive gagal setelah reservasi; lihat pesan dan Apps Script Executions |
| File/Sheet sudah ada, proof_files pending | Balasan/pembaruan Supabase gagal; ulangi dengan file yang masih dipilih, jangan hapus arsip |
| proof_files ready, donations kosong | Upload berhasil, submit_donation gagal; periksa metode aktif, referral, dan pesan aplikasi |
| donations ada, proof_files kosong untuk unggahan BARU | Pastikan provider drive dan website memakai proyek Supabase yang sama; jangan menilai dari donasi lama |
| Tabel ada tetapi kolom/fungsi tidak cocok | Jangan jalankan ulang semua migrasi; kirim hasil SELECT pemeriksaan untuk perbaikan terarah |

## Informasi yang berguna saat meminta bantuan

Sebutkan tahap, waktu kejadian, pesan error persis, apakah proof_files kosong/pending/ready, dan apakah file muncul di Drive. Edge Functions → proof-drive → Logs dan Apps Script → Executions membantu menemukan kegagalan. Samarkan email, nomor rekening, isi bukti, token, dan semua secret sebelum membagikan tangkapan layar.

## Pemulihan sementara

Jika layanan Drive bermasalah saat pengguna aktif, admin boleh memilih kembali Supabase Storage untuk menjaga layanan sementara. Ini menyimpan unggahan baru di Supabase, sehingga hanya dipakai jika Bapak menerima perubahan sementara itu. Jika Drive wajib tanpa pengecualian, jangan pindah provider; hentikan pengajuan baru sampai koneksi pulih. Bukti lama pada kedua tempat tetap dapat dibaca sesuai hak akses.
