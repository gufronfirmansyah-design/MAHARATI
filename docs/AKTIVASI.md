# Aktivasi MAHARATI

Kode dan pengujian lokal sudah disiapkan. Tahapan ini menghubungkan layanan milik pengelola, bukan memindahkan akun aplikasi lama.

## 1. Supabase

1. Buat proyek Supabase khusus MAHARATI; simpan password database di pengelola kata sandi.
2. Buka SQL Editor, jalankan isi `supabase/migrations/202610030001_maharati.sql` sekali pada proyek baru, kemudian jalankan `supabase/migrations/202610030002_drive_settings.sql`. Jika migrasi pertama sudah diterapkan, cukup jalankan migrasi kedua sekali. Jangan jalankan pada database aplikasi lama. Migrasi tidak dirancang diulang pada tabel yang sudah ada.
3. Pastikan tabel aplikasi memiliki RLS aktif dan bucket `proofs` bersifat **private**. Jangan mengubahnya menjadi public.
4. Dari pengaturan API proyek, ambil **Project URL** dan **publishable key**. Keduanya boleh digunakan oleh website; kunci rahasia tidak boleh.
5. Simpan pada pengaturan build Cloudflare:

```text
VITE_SUPABASE_URL=https://PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=publishable-key-proyek
```

Jangan menempelkan rahasia ke GitHub, HTML, atau `.env.example`. [Penjelasan resmi jenis API key](https://supabase.com/docs/guides/getting-started/api-keys).

## 2. Google OAuth

1. Di Google Cloud / Google Auth Platform, buat proyek dan OAuth client bertipe **Web application** untuk MAHARATI.
2. Isi branding dan audience; scope cukup profil dasar/email/OpenID. Saat pengujian, daftarkan akun penguji.
3. Salin callback URL dari halaman provider Google di Supabase ke **Authorized redirect URIs** Google.
4. Masukkan Client ID dan Client Secret hanya pada konfigurasi provider Google di Supabase. Aktifkan provider.
5. Setelah alamat Cloudflare tersedia, atur Site URL Supabase ke alamat tersebut. Tambahkan redirect tepat `https://ALAMAT-WEBSITE/akun`; untuk pengembangan tambahkan `http://127.0.0.1:5173/akun`.
6. Tambahkan origin website pada konfigurasi OAuth Google. Untuk publik, periksa audience/publishing status agar guru di luar daftar penguji dapat masuk. [Panduan resmi Google melalui Supabase](https://supabase.com/docs/guides/auth/social-login/auth-google).

## 3. GitHub dan Cloudflare Pages

1. Buat repository GitHub milik pengelola, lalu unggah **isi folder MAHARATI-GITHUB**.
2. Di Cloudflare Pages, hubungkan repository tersebut menggunakan integrasi Git.
3. Gunakan pengaturan berikut:

| Pengaturan | Nilai |
|---|---|
| Production branch | `main` atau branch utama repository |
| Root directory | Kosong jika isi paket berada langsung di root |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 22 |

4. Tambahkan dua variabel Supabase sebelum build produksi. Jika website sudah terbit tanpa variabel, lakukan build/deploy ulang setelah mengisinya.
5. Pastikan `public/_redirects` dan `public/_headers` ikut diterbitkan. Uji pembukaan langsung `/prompt/prota` dan `/akun` setelah refresh.
6. Cocokkan URL callback dengan langkah Google/Supabase di atas. Jangan gunakan domain preview acak sebagai URL produksi.

Pengaturan build mengikuti [panduan Vite Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/). CSP pada paket mengizinkan endpoint standar `*.supabase.co`; jika nanti memakai domain API khusus, perbarui `connect-src` secara spesifik.

## 4. Admin dan rekening

1. Masuk ke MAHARATI memakai akun Google pengelola agar profil dibuat.
2. Di SQL Editor Supabase, jalankan `supabase/bootstrap-admin.sql` setelah mengganti placeholder dengan email Google pengelola. Tindakan ini dicatat dalam audit.
3. Muat ulang MAHARATI. Menu Admin akan muncul.
4. Buka **Admin → Pembayaran**, isi nomor dan nama penerima yang benar untuk DANA/GoPay/BRI/BSI, lalu aktifkan metode yang akan digunakan. Metode awal sengaja nonaktif karena rekening aktif belum dikonfirmasi.
5. Jangan mengaktifkan member dengan mengubah data browser. Gunakan alur verifikasi dukungan.

## 5. Pemeriksaan sebelum dibagikan

- Masuk menggunakan dua akun Google berbeda, termasuk akun di luar pengelola.
- Verifikasi satu dukungan pengujian dengan nominal benar, cek member dan akses proyek.
- Pastikan akun kedua tidak dapat membaca proyek atau bukti akun pertama melalui permintaan langsung.
- Coba dua penyimpanan bersamaan saat akun memiliki 99 proyek: jumlah akhir maksimal 100.
- Coba dua verifikasi bersamaan terhadap dukungan yang sama: hanya satu komisi tercatat.
- Pastikan bukti tidak dapat dibuka tanpa URL bertanda tangan; setelah URL kedaluwarsa, akses gagal.
- Uji koreksi dukungan dan pembayaran komisi; jangan gunakan transaksi sungguhan untuk percobaan pembatalan.
- Uji pencadangan dan pemulihan pada proyek terpisah sebelum menerima pengguna umum.

Nama domain khusus, akun hosting, konfigurasi OAuth, dan referensi kategori baru dapat ditambahkan setelah tersedia. Tautan Sites lama tidak diperbarui oleh paket ini.

## 6. Penyimpanan bukti Google Drive (pilihan)

Ikuti [DATABASE-DAN-DRIVE.md](DATABASE-DAN-DRIVE.md) sebelum mengubah Admin → Pengaturan → Penyimpanan bukti menjadi Drive. Mode awal adalah Supabase Storage agar penghubung yang belum terpasang tidak menerima unggahan. Google OAuth dan Apps Script merupakan dua konfigurasi yang berbeda.
