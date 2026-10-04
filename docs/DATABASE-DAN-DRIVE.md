# Akun Google, database, dan Google Drive

Guru cukup menekan **Masuk dengan Google**, memilih akun, dan menyetujui akses profil dasar. Pengelola perlu menyiapkan Google OAuth dan Supabase sekali sesuai AKTIVASI.md. Tidak ada password Google yang disimpan aplikasi, dan tidak perlu kolom `password_hash` pada Sheets.

## Pembagian data

Supabase menggunakan tabel database, bukan sheet. Hindari dua tempat yang sama-sama menentukan status member.

| Kebutuhan | Tempat utama |
|---|---|
| Identitas login | Supabase Auth (`auth.users`) |
| Nama, peran, status member | `profiles`, dengan hak tulis terbatas |
| Pengaturan publik dan metode pembayaran | `app_settings` dan `payment_methods`, diperbarui admin |
| Isi prompt, isian, pilihan, contoh | File per generator di GitHub |
| Riwayat/proyek dan isian yang dapat dibuka kembali | `projects`, maksimal 100 per member |
| Pengajuan dukungan dan verifikasi | `donations` |
| Pemetaan bukti Drive privat | `proof_files` |
| Mitra, komisi, pembayaran dan jejak tindakan | Tabel partner, ledger, payout, audit pada migrasi |
| File bukti | Google Drive privat atau bucket Supabase privat |
| Arsip metadata file Drive | Google Sheets, tab `Uploads` |

Sheet Uploads berisi `request_id`, `user_id`, `kind`, `proof_path`, `file_name`, `drive_file_id`, `drive_url`, `mime_type`, `byte_size`, `created_at`, dan `archive_status`. Tidak berisi password, email, seluruh proyek guru, atau otoritas aktivasi member. Mengubah Sheet tidak memberikan akses member. Jangan membagikannya sebagai CSV publik.

## Alur bukti

Browser mengirim bukti ke Supabase Edge Function menggunakan sesi login. Fungsi memeriksa identitas dan hak akses, membuat reservasi, lalu mengirim permintaan bertanda tangan ke Apps Script. Apps Script menyimpan file privat dan arsip Sheet. Supabase menerima ID serta tautan Drive, dan menandai metadata siap dipakai.

Tautan Drive yang tersimpan tidak diubah menjadi tautan publik. Saat melihat bukti melalui aplikasi, server kembali memeriksa hak pemilik/admin/mitra terkait payout. File dikirim ke browser peminta yang berhak. JPG, PNG, atau PDF maksimal 5 MB; header file diperiksa. Pembatasan ini bukan pemindai malware.

## Aktivasi penghubung

1. Terapkan kedua migrasi sesuai urutan dalam AKTIVASI.md. Mode awal `supabase` tetap berfungsi tanpa Apps Script.
2. Buat proyek di Google Apps Script menggunakan akun pengelola. Salin `google-apps-script/Code.gs` dan manifest `appsscript.json` yang disediakan.
3. Di **Project Settings → Script Properties**, buat `BRIDGE_SECRET` berupa rahasia acak kuat minimal 32 karakter. Gunakan pengelola password untuk membuatnya. Jangan letakkan di Sheet, GitHub, atau variabel `VITE_`.
4. Jalankan `setupMaharati` secara manual dan setujui akses Drive/Sheets. Fungsi membuat folder serta spreadsheet baru dan menyimpan `DRIVE_FOLDER_ID` serta `SPREADSHEET_ID` dalam Script Properties. Gunakan folder baru khusus MAHARATI pada My Drive; jangan gunakan Shared Drive atau folder yang dibagikan. Pastikan akses umum **Restricted** pada folder dan spreadsheet.
5. Deploy sebagai **Web app**, jalankan sebagai akun pengelola, dengan akses **Anyone** agar server Supabase dapat memanggilnya. Endpoint tidak menerima unggahan tanpa tanda tangan rahasia yang valid; akses Anyone pada endpoint tidak membuat file Drive publik. Jika kebijakan Workspace melarang deployment ini, tetap gunakan Supabase Storage.
6. Salin URL deployment berakhiran `/exec`. Setelah kode Apps Script berubah, buat versi deployment baru.
7. Pasang Supabase CLI pada komputer pengelola atau gunakan alur deployment Edge Function Supabase. Deploy folder `supabase/functions/proof-drive`. Fungsi ini melakukan pemeriksaan JWT sendiri lewat `auth.getUser` pada setiap permintaan; contoh CLI:

   ```sh
   supabase functions deploy proof-drive --project-ref PROJECT_REF --no-verify-jwt
   ```

   Opsi tersebut menonaktifkan pemeriksaan JWT pada gateway agar fungsi menangani sesi sendiri. Jangan menghapus pemeriksaan `getUser` dari fungsi. Request tanpa sesi tetap ditolak dengan 401.

8. Di pengaturan secrets Edge Functions, isi:

   | Secret | Nilai |
   |---|---|
   | `DRIVE_BRIDGE_URL` | URL `/exec` Apps Script |
   | `DRIVE_BRIDGE_SECRET` | Sama persis dengan Script Property `BRIDGE_SECRET` |
   | `ALLOWED_ORIGINS` | Origin website tanpa slash akhir; pisahkan koma bila lebih dari satu |

   `SUPABASE_URL`, `SUPABASE_ANON_KEY`, dan `SUPABASE_SERVICE_ROLE_KEY` menggunakan variabel runtime server Supabase. Service role tidak boleh masuk ke frontend. Saat pengembangan, tambahkan `http://127.0.0.1:5173` pada allowed origins jika diperlukan.
9. Masuk sebagai admin → **Pengaturan** → pilih **Google Drive** sebagai penyimpanan bukti. Simpan. Pengaturan ini berlaku untuk unggahan baru; bukti lama di Supabase tetap dibaca dari tempat asalnya.
10. Uji unggahan, lihat bukti, penolakan akses akun lain, percobaan ulang saat koneksi gagal, dukungan, serta payout. Periksa satu request_id hanya menghasilkan satu entri/file. Baru gunakan untuk transaksi sungguhan setelah tes layanan asli berhasil.

Penghubung memiliki batas 20 reservasi unggahan baru per akun per hari. Apps Script juga memiliki kuota dan batas eksekusi; tersedia pada [dokumentasi kuota Google](https://developers.google.com/apps-script/guides/services/quotas). Ini bukan janji operasional tanpa biaya selamanya.

## Keamanan dan perubahan

Semua prompt tetap gratis sesuai keputusan produk. Member mendapat simpan proyek lintas perangkat dan bebas popup. Satu dukungan terverifikasi minimal Rp25.000 memberikan member tanpa kedaluwarsa otomatis selama layanan berjalan. Nominal di bawah itu tetap diterima sebagai dukungan.

Kode publik dapat diperiksa; keamanan akun tidak bergantung pada menyembunyikan kode. GitHub dapat dibuat privat untuk membatasi akses sumber lengkap, tetapi prompt gratis yang sudah tampil tetap dapat disalin. Tidak ada jaminan anti-bajak mutlak.

Referensi resmi: [Google OAuth Supabase](https://supabase.com/docs/guides/auth/social-login/auth-google), [autentikasi Edge Functions](https://supabase.com/docs/guides/functions/auth), dan [deployment Apps Script](https://developers.google.com/apps-script/guides/web).
