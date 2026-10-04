# TAHAP 5 — Aktifkan Drive dan lakukan SATU unggahan uji

1. Masuk sebagai admin → Admin → Pengaturan → Periksa koneksi Drive. Harus muncul pesan koneksi dan arsip dapat dibaca. Jika gagal, buka tahap 6; jangan memaksa mengubah provider lewat SQL.
2. Pada penyimpanan bukti pilih Google Drive + arsip Sheets → Simpan pengaturan. Sistem memeriksa penghubung sebelum menyimpan. Nilai database sekarang harus drive.
3. Buka Traktir Kopi. Gunakan gambar JPG/PNG/PDF uji tanpa data sensitif, maksimal 5 MB. Isi metode dan nominal, lalu kirim. Tidak perlu mentransfer uang sungguhan untuk pengujian teknis ini. Jangan verifikasi pengajuan uji sebagai dukungan sungguhan.
4. Periksa empat tempat: Drive ada file privat; tab Uploads ada satu baris; proof_files berstatus ready dengan drive_file_id dan drive_url; donations berisi proof_path yang sama.
5. Buka bukti dari aplikasi sebagai pengirim/admin. Dengan akun biasa lain yang bukan pemilik, bukti tidak boleh dapat dibaca. Membuka drive_url di akun tanpa akses Drive harus ditolak. Hak akses Drive pemilik folder berbeda dari hak akses anggota aplikasi; anggota melihat bukti melalui server aplikasi.

## BERHASIL

Satu unggahan baru tersambung ke empat tempat tanpa membuat file publik. proof_files.id sama dengan request_id pada Sheet, bukan donations.id. archive_status stored hanya berarti file diarsipkan, bukan donasi sudah diverifikasi.

## Bukti lama

Donasi yang sebelumnya memakai Storage tidak otomatis dibuatkan proof_files dan tidak otomatis dipindahkan ke Drive. Itu normal. Jangan menghapus bucket lama karena masih memuat bukti lama. Pemindahan arsip lama merupakan pekerjaan terpisah dengan pengecekan setiap file.

## Jika respons pengajuan gagal

Periksa Status Saya terlebih dahulu; server mungkin sudah menyimpan donasi meski respons terputus. Bila belum tercatat, coba ulangi tanpa memilih ulang file/refresh agar request_id Drive sama. Jika sudah tercatat, jangan mengirim ulang. Aplikasi tidak menghapus bukti otomatis pada kegagalan ambigu.
