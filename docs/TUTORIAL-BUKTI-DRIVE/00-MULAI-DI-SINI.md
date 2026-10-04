# MULAI DI SINI — perbaikan bukti MAHARATI

Tanggal paket: 4 Oktober 2026. Folder kerja yang diperbaiki: MAHARATI-GITHUB.

Login Google dan donasi sudah berjalan. Jangan membuat proyek Supabase baru, jangan mengulang migrasi pembuat tabel, dan jangan mengubah Google OAuth.

## Yang sudah diperbaiki dalam kode

- Provider hilang/salah tidak diam-diam dialihkan ke Storage.
- Admin memiliki tombol Periksa koneksi Drive. Saat menyimpan provider drive, koneksi diperiksa terlebih dahulu.
- Pemeriksaan server hanya untuk admin, melalui sesi Google yang sudah ada. Tidak menampilkan secret atau ID folder.
- Apps Script memeriksa akses umum folder dan spreadsheet harus PRIVATE/Restricted.
- Pesan kegagalan konfigurasi, respons Apps Script, dan reservasi bukti dibuat lebih jelas.
- Bukti tidak dihapus otomatis ketika respons pembuatan donasi/payout gagal.
- Bukti lama di Supabase masih dapat dibaca. Unggahan baru memakai provider yang dipilih.

## Cara membaca tutorial

Kerjakan satu file sampai bagian BERHASIL, baru buka berikutnya:

1. [01 — Periksa database](01-PERIKSA-DATABASE.md)
2. [02 — Perbarui Apps Script](02-APPS-SCRIPT.md)
3. [03 — Pasang Edge Function dan secrets](03-EDGE-FUNCTION.md)
4. [04 — Perbarui website](04-WEBSITE.md)
5. [05 — Aktifkan Drive dan uji](05-AKTIFKAN-DAN-UJI.md)
6. [06 — Cari penyebab error](06-JIKA-ERROR.md)

Jangan kirim BRIDGE_SECRET, service_role, access token, atau isi .env.local ke chat/GitHub. Nama pengaturan dan pesan error tanpa rahasia boleh dibagikan.

## Alur yang dipertahankan

Pilih bukti → Edge Function → proof_files pending → Apps Script → file Drive privat + arsip Sheet → proof_files ready → donations.

Supabase tetap database utama. Sheet hanya arsip metadata. donations.proof_path sama dengan proof_files.proof_path. Kedua tabel mempunyai id berbeda; itu normal.

## Batas hasil pekerjaan

Kode lokal diperbaiki dan diuji. Pengaturan produksi belum diubah otomatis. Bapak perlu memperbarui deployment milik Bapak mengikuti tutorial. Pemeriksaan koneksi hanya membuktikan autentikasi penghubung serta akses baca, bukan keberhasilan menulis file; satu unggahan uji tetap wajib.
