# Catatan pengujian

Lingkungan: Windows, Node.js 24, Microsoft Edge headless. Paket juga menyediakan workflow GitHub Actions dengan Node.js 22 dan Chromium.

## Dilakukan lokal

- **33 tes mesin/protokol:** semua 13 naskah cocok dengan sumber, hanya rentang isian berubah, validasi wajib/JP/komposisi/kognitif, preset, Prota–Prosem, draf bersama, penyimpanan rusak/tidak tersedia.
- **68 pemeriksaan PostgreSQL/PGlite:** migrasi dapat dijalankan; metadata registrasi tidak memberi admin/member; RLS akun A/B; penolakan menulis peran; hak minimum; kuota 100; konflik perubahan; bukti privat; persetujuan Wall; moderasi; komisi 30%; verifikasi berulang; koreksi sesudah payout; nominal payout; snapshot dan pemulihan database lokal.
- **50 pemeriksaan browser gratis:** semua halaman prompt, dua keluaran Prota–Prosem, preset dan Custom, pemulihan draf, penyalinan diblokir untuk isian kosong, teks HTML tidak dijalankan, lampiran, reset dengan konfirmasi, HP, navigasi, dialog Escape, fallback clipboard/storage.
- **13 pemeriksaan kontrak UI member/admin:** sesi simulasi, tanpa popup member, proyek baru/gandakan/ganti nama/hapus, kegagalan simpan tidak menghilangkan isian, unggah dukungan, parameter pembayaran komisi.
- Build TypeScript dan Vite berhasil. Tampilan desktop/HP diperiksa melalui tangkapan layar dalam `test-results`.

## Batas bukti

PGlite menjalankan SQL PostgreSQL, tetapi fungsi identitas Auth dan tabel metadata Storage dibuat sebagai stub pengujian. Pengujian HTTP UI memakai respons simulasi. **Tidak ada klaim bahwa login Google, email Google di luar akun penguji, upload Storage nyata, atau hosting Cloudflare sudah diuji produksi.**

Uji transaksi lokal memeriksa efek idempotensi dan batas kuota; PGlite satu koneksi tidak membuktikan perlombaan antarkoneksi PostgreSQL produksi. Jalankan skenario bersamaan pada panduan aktivasi setelah Supabase tersedia.

Snapshot/pemulihan lokal telah diperiksa, tetapi belum menggantikan pemulihan dump Supabase serta berkas bucket pada proyek cadangan. Selesaikan langkah operasional sebelum peluncuran member berbayar.

## Penambahan generator dan Drive

Semua 11 generator baru diuji dengan contoh isian dan penyalinan, video empat tahap, pilihan 25 IFP/36 petualangan/11 kamera, babak TV bertingkat, multiselect, serta pilihan desain kustom setelah reload. Protokol HMAC Node/Web Crypto diuji terhadap fungsi verifikasi Apps Script di sandbox lokal, termasuk tanda tangan palsu dan kedaluwarsa. Database memeriksa reservasi Drive, batas unggahan, pengaturan admin, nominal bebas, akses metadata pemilik, dan idempotensi. Kontrak UI menguji gangguan Drive lalu ulang unggahan dengan request_id sama, nominal Rp7.000, serta pembacaan blob bukti.

**Google Drive/Sheets dan Edge Function belum di-deploy atau diuji pada layanan asli.** Tes protokol lokal tidak membuktikan izin OAuth Apps Script, batas runtime, atau integrasi jaringan produksi. Jalankan langkah aktivasi dan uji lintas akun sebelum menerima bukti sungguhan.

## Perbaikan 4 Oktober 2026

Pemeriksaan health Edge Function diuji dengan permintaan tanpa pengguna, pengguna non-admin, admin sah, dan versi bridge lama. Tes ini mengeksekusi handler TypeScript hasil transpile dengan layanan simulasi; bukan deployment Deno sungguhan. UI admin menguji tombol Periksa koneksi Drive dan aktivasi provider. Server uji akun menggunakan konfigurasi terpisah dari .env.local dan port 5278. Tidak ada secret produksi atau perubahan login yang digunakan tes akun.
