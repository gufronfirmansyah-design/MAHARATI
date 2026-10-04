# TAHAP 4 — Perbarui website

Tujuan: website memakai perbaikan frontend dan tombol pemeriksaan yang baru.

1. Simpan cadangan repository/commit lama. Gunakan isi paket MAHARATI-SIAP-UPLOAD.zip atau folder MAHARATI-SIAP-UPLOAD untuk unggahan GitHub. Folder kerja MAHARATI-GITHUB berisi .env.local dan node_modules lokal; JANGAN mengunggah seluruh folder kerja mentah.
2. Unggah isi paket bersih ke root repository yang sama, lalu commit. Jangan menghapus variabel Supabase pada hosting. Login Google tidak perlu diatur ulang.
3. Jika Cloudflare Pages terhubung ke repository, tunggu deployment baru berhasil. Pengaturan tetap: npm run build, output dist. Jika tidak auto-deploy, jalankan deployment dari panel hosting yang selama ini dipakai.
4. Buka website dan muat ulang. Masuk sebagai admin → Admin → Pengaturan. Pastikan tombol Periksa koneksi Drive muncul. Kalau belum terlihat, website masih memakai build lama; jangan mengubah database untuk menutupi masalah build.

Untuk uji lokal dari folder kerja: npm run dev. Buka alamat yang dicetak terminal. .env.local tetap disimpan hanya di komputer.

## BERHASIL

Login Google dan menu Traktir Kopi tetap berfungsi; tombol pemeriksaan tersedia. Perubahan frontend, Edge Function, dan Apps Script memerlukan deployment masing-masing—ketiganya bukan satu deployment.

Lanjut: [TAHAP 5](05-AKTIFKAN-DAN-UJI.md).
