# MAHARATI — Ruang Ide Guru

Aplikasi React + TypeScript + Vite untuk kumpulan prompt guru, dengan Supabase sebagai layanan akun, proyek, dukungan, dan mitra.

## Folder mana yang diunggah ke GitHub?

**Unggah isi folder bersih `MAHARATI-SIAP-UPLOAD` ke root repository.** Alternatif: ekstrak `MAHARATI-SIAP-UPLOAD.zip`, lalu unggah isinya. Folder kerja `MAHARATI-GITHUB` sekarang memuat konfigurasi lokal; jangan unggah folder kerja mentah. File `package.json`, `index.html`, serta folder `src`, `public`, dan `supabase` berada langsung di root repository.

Folder pengembangan `MAHARATI` juga memuat dependensi lokal. Jangan mengunggah `node_modules`, `.npm-cache`, `.env`, `test-results`, atau cadangan data. Paket `MAHARATI-SIAP-UPLOAD` sudah memisahkan berkas-berkas tersebut. `.env.example` aman disertakan karena tidak berisi kredensial.

**Website diterbitkan melalui Cloudflare Pages, bukan dengan membuka index.html langsung atau GitHub Pages.** GitHub menyimpan kode sumber; Cloudflare membangun dan menerbitkan website.

## Status hasil implementasi

- 13 prompt Perencanaan dalam 12 halaman, termasuk Prota–Prosem bersama.
- Naskah sumber dan bagian penggantian dipertahankan; tiap template berada dalam file JSON sendiri.
- Total 24 template dalam 23 halaman pada enam kategori: Perencanaan, Media, Kuis, Game, Aplikasi/Website, dan Video.
- NotebookLM, video empat tahap, media interaktif, kuis, 25 pilihan IFP, 36 tema petualangan, delapan format TV, dan 11 permainan kamera.
- Pilihan dukungan Rp15.000, Rp25.000, Rp50.000, Rp100.000 serta nominal bebas.
- Penghubung Google Drive privat dan arsip Google Sheets tersedia sebagai alternatif penyimpanan bukti; perlu aktivasi terpisah.
- Tampilan responsif, pencarian, pratinjau lengkap, salin manual, preset blueprint, dan lampiran RPP.
- Draf lokal memakai kunci lama `prompt-generator-guru:v1` pada origin yang sama. Pindah domain tidak memindahkan localStorage.
- UI login Google, 100 proyek member, dukungan terverifikasi, Wall of Thanks, usulan fitur, mitra/referral, dan admin.
- SQL untuk hak akses, kuota proyek, transaksi verifikasi/komisi, koreksi, pencatatan pembayaran, dan audit.

**Belum dihubungkan ke layanan produksi.** Supabase, Google OAuth, rekening aktif, admin pertama, dan penerbitan Cloudflare perlu dikonfigurasi mengikuti [panduan aktivasi](docs/AKTIVASI.md). Tanpa konfigurasi, semua prompt gratis tetap berfungsi dan aplikasi menjelaskan bahwa fitur daring belum tersedia. Tidak ada login/member palsu.

## Jalankan di komputer

Pasang Node.js 22 LTS atau versi yang didukung Vite 7. Dari folder proyek:

```sh
npm ci
npm run dev
```

Buka alamat yang ditampilkan. Untuk fitur daring, salin `.env.example` menjadi `.env` dan isi URL serta publishable key Supabase. **Tidak boleh memasukkan Google Client Secret, service_role, atau secret key ke variabel `VITE_`.** Semua variabel Vite dikirim ke browser.

## Susunan modul

| Lokasi | Kegunaan |
|---|---|
| `src/templates/perencanaan/*.json` | Satu file per prompt: naskah asli, isian, kebutuhan sumber, pemetaan penggantian, versi |
| `src/templates/<kategori>/<generator>/template.json` | Satu folder per generator baru; teks, isian, contoh, pilihan, dan versi |
| `src/templates/index.ts` | Katalog kategori dan penggabungan menu Prota–Prosem |
| `src/lib/engine.js` | Validasi dan pengisian teks prompt |
| `src/pages/` | Halaman Beranda, Prompt, Proyek, Akun, Kopi, Mitra, Admin |
| `src/components/` | Tata letak dan komponen antarmuka bersama |
| `src/lib/` | Klien Supabase, sesi akun, dan draf lokal |
| `supabase/migrations/` | Skema database, RLS, fungsi transaksi dan akses bukti |
| `public/assets/` | Berkas pendukung yang boleh diunduh |
| `tests/` | Pengujian naskah, database, browser, dan kontrak UI daring |

Mengubah satu prompt cukup mengedit file template terkait. Perubahan diterbitkan melalui build aplikasi, tanpa mengedit semua halaman. Lihat [panduan pengembangan](docs/PENGEMBANGAN.md).

## Pengujian

```sh
npm run check
```

Pengujian browser menggunakan Microsoft Edge yang terpasang pada Windows. Untuk perangkat lain, pasang Chromium melalui `npx playwright install chromium` dan set `PLAYWRIGHT_CHANNEL=chromium`.

- Tes naskah membandingkan seluruh teks terhadap sumber tetap dan memastikan penggantian hanya pada rentang yang dipetakan.
- Tes database menjalankan migrasi di PostgreSQL melalui PGlite, dengan skema Auth/Storage simulasi, termasuk pencadangan dan pemulihan lokal.
- Tes browser gratis menguji build produksi, HP/desktop, semua template, draf, dialog, dan fallback clipboard/storage.
- Tes member/admin memakai HTTP Supabase simulasi untuk memeriksa kontrak UI. Ini tidak membuktikan Google OAuth atau Storage HTTP produksi sudah aktif.

Lihat [hasil dan batas pengujian](docs/PENGUJIAN.md). Sebelum menerima dukungan sungguhan, lakukan smoke test layanan asli dan uji pemulihan sesuai [panduan operasional](docs/OPERASIONAL.md).

## Aturan produk

Semua prompt publik. Dukungan satu transaksi minimal Rp25.000 yang diverifikasi admin memberikan akses member tanpa kedaluwarsa otomatis selama layanan berjalan. Member memiliki maksimal 100 proyek. Pengajuan di bawah minimum tidak dijumlahkan untuk aktivasi. Komisi referral 30%, dibulatkan ke bawah ke rupiah penuh, hanya untuk dukungan terverifikasi; referral diri sendiri ditolak.

Popup gratis muncul maksimal sekali sehari per browser. Tanpa izin penyimpanan browser, pembatasan antarkunjungan tidak dapat dipertahankan. Buku dan data nilai murid tidak diunggah ke aplikasi; hanya isian proyek serta bukti dukungan/komisi yang disimpan.

## Google Drive dan susunan data

Baca [panduan database dan Drive](docs/DATABASE-DAN-DRIVE.md). Supabase menjadi sumber kebenaran akun, hak akses, transaksi, dan proyek. Google Sheets hanya arsip metadata unggahan. Login Google tidak memakai kolom password_hash buatan sendiri.

## Perbaikan bukti Drive — 4 Oktober 2026

Mulai dari [tutorial pemula bertahap](docs/TUTORIAL-BUKTI-DRIVE/00-MULAI-DI-SINI.md). Folder kerja saat ini MAHARATI-GITHUB; hasil ekspor bersih terbaru MAHARATI-SIAP-UPLOAD. Jangan mengunggah .env.local atau node_modules.
