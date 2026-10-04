# Operasional, cadangan, dan pemulihan

## Pemeriksaan rutin

- Tinjau pengajuan dukungan, usulan, dan mitra melalui Admin; periksa penerimaan dana di rekening sebelum menekan Verifikasi.
- Pantau kapasitas database, Storage, egress, kegagalan login, serta kesalahan API melalui dashboard layanan. Paket gratis bukan jaminan biaya operasional nol selamanya.
- Tinjau dependensi sebelum rilis, jalankan workflow pemeriksaan, dan simpan rilis kode yang berhasil agar website dapat dikembalikan ke versi sebelumnya.
- Perubahan metode pembayaran berlaku untuk pengajuan baru. Setiap pengajuan menyimpan label metode saat diajukan.
- Periksa saldo komisi per periode sebelum transfer. Masukkan nominal yang benar-benar ditransfer; jika rekap berubah, sistem menolak pencatatan yang tidak cocok.

## Pencadangan

Mulai dengan cadangan harian ketika sudah menerima dukungan. Simpan di tempat privat di luar repository, dengan akses hanya pengelola; cadangan memuat data pribadi dan bukti keuangan. Simpan tujuh cadangan harian dan empat mingguan, serta lakukan uji pemulihan bulanan.

Gunakan alur resmi [Backup and Restore Supabase](https://supabase.com/docs/guides/platform/migrating-within-supabase/backup-restore) untuk dump roles, schema, dan data melalui Supabase CLI. Ambil connection string dari dashboard dan simpan sebagai variabel lingkungan lokal, jangan menulis rahasia ke kode atau log. Simpan pula commit kode/migrasi yang sesuai.

Cadangan database saja tidak cukup untuk berkas bukti: unduh salinan bucket `proofs` melalui Storage API/S3 dengan nama path tetap, catat ukuran serta checksum, dan simpan manifest privat. Simpan konfigurasi OAuth/redirect/provider secara terpisah di pengelola rahasia. Jangan mengunggah salinan bukti ke GitHub.

## Uji pemulihan layanan asli

1. Siapkan proyek Supabase cadangan yang terpisah dari produksi.
2. Pulihkan roles, schema, dan data mengikuti prosedur CLI resmi yang sesuai versi layanan. Pertahankan ID akun; foreign key proyek, dukungan, dan mitra bergantung pada ID tersebut.
3. Pastikan fungsi pada schema `private` ikut dipulihkan. Periksa juga trigger `maharati_new_user` pada `auth.users` serta tiga policy `proof_insert`, `proof_read`, `proof_delete` pada `storage.objects`. Kustomisasi schema yang dikelola layanan perlu diperiksa terpisah. Gunakan definisi dari migrasi, jangan menjalankan ulang seluruh migrasi pada tabel yang sudah berisi data.
4. Pulihkan seluruh berkas bucket beserta path-nya melalui Storage API. Bucket tetap privat, batas 5 MB, MIME JPG/PNG/PDF. Cocokkan jumlah, ukuran, dan checksum dengan manifest.
5. Konfigurasi ulang provider/redirect pada proyek pengujian. Gunakan build website pengujian yang menunjuk ke proyek cadangan.
6. Cocokkan jumlah baris per tabel, total nominal dukungan terverifikasi, saldo ledger, total payout, serta jumlah bukti. Periksa sampel proyek dan bukti.
7. Jalankan pengujian dua akun: pemilik dapat membuka data sendiri; akun lain/anon tidak bisa. Uji akun admin dan mitra secara terpisah.
8. Catat tanggal, operator, sumber cadangan, jumlah data, dan hasil. Produksi tidak diarahkan ke hasil pemulihan sebelum semua pemeriksaan berhasil.

## Pemulihan kode

Cloudflare dapat menerbitkan kembali commit yang telah teruji. Pemulihan kode tidak memulihkan data dan tidak otomatis membatalkan migrasi SQL. Buat migrasi lanjutan untuk koreksi skema; jangan menghapus transaksi untuk menyamakan tampilan.

Saat ini pengujian backup/restore yang dilakukan adalah snapshot PostgreSQL lokal. Jadwal cadangan produksi dan uji pemulihan Supabase nyata belum dijalankan karena layanan pengelola belum tersambung.

## Arsip Drive

Cadangkan folder bukti privat, spreadsheet Uploads, dan tabel proof_files bersama agar pemetaan ID tetap utuh. Jangan mempublikasikan spreadsheet atau mengubah folder menjadi Anyone with the link. Akun mitra membaca bukti payout melalui aplikasi, bukan dengan membagikan seluruh folder.

Unggahan yang belum selesai berstatus pending dan tidak dapat diajukan sebagai bukti. Percobaan ulang file yang sama pada sesi halaman yang sama menggunakan ID yang sama. Bila browser dimuat ulang atau pengguna memilih file kembali, ID baru dapat dibuat. Periksa unggahan yatim/pending secara manual sebelum pembersihan; jangan hapus bukti yang terkait transaksi atau audit. Arsip Sheet bertanda stored hanya berarti file tersimpan, bukan dukungan disetujui atau member aktif.

Sebelum produksi uji gangguan setelah file tersimpan tetapi sebelum metadata Supabase selesai, kemudian ulangi unggahan. Pastikan satu request_id menunjuk satu file. Uji Drive dengan dua akun serta akses admin/mitra sesuai haknya. Apps Script dan paket gratis memiliki kuota; pantau kegagalan, penyimpanan, serta durasi pemrosesan.
