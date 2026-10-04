# TAHAP 1 — Periksa database tanpa mengubah data

Tujuan: memastikan tabel dan fungsi yang sudah ada cukup. Jangan menjalankan ulang 202610030001 atau 202610030002 pada database aktif.

1. Buka Supabase Dashboard dan pilih proyek yang dipakai MAHARATI.
2. Buka SQL Editor → New query.
3. Salin isi file [PERIKSA-DATABASE.sql](PERIKSA-DATABASE.sql), lalu Run. Seluruh perintah hanya SELECT.
4. Lihat hasil. Salin/catat hasilnya tanpa data pribadi.

## BERHASIL

- proof_provider muncul. Nilai supabase adalah kondisi lama, belum perlu diubah sekarang.
- donations, proof_files, app_settings ada dan RLS aktif.
- reserve_drive_proof, submit_donation, save_app_setting, private.check_proof ditemukan.
- Daftar kolom donations mencakup status, created_at, partner_id selain kolom yang pernah Bapak catat.

Jika ada fungsi/tabel hilang: berhenti pada tahap ini dan kirim hasil pemeriksaan. Jangan membuat tabel duplikat. SQL perbaikan harus disesuaikan dengan hasil tersebut, bukan menjalankan ulang semua migrasi.

Lanjut: [TAHAP 2](02-APPS-SCRIPT.md).
