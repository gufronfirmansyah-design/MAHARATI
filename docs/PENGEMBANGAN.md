# Mengubah dan menambah modul

## Template

`src/templates/perencanaan` berisi 13 JSON terpisah. Satu template menyimpan `id`, `version`, `category`, `title`, `group`, `order`, `source`, `original`, `fields`, `rules`, `needs`, dan catatan opsional. RPP juga memakai `pasteRule`; sumber potongan memakai `sourceRange`.

`original` adalah naskah sumber tetap. Setiap `rule` menyimpan indeks awal/akhir, teks lama, dan pengganti dengan placeholder `{{idIsian}}`. Jangan mengedit indeks secara coba-coba; periksa rentang terhadap naskah asli dan jalankan tes kesetiaan. Instruksi aplikasi ditempatkan di luar `original`.

Isian bersama menggunakan `shared: true`; isian lain hanya milik template tersebut. Jenis formulir saat ini: text, number, textarea, select, preset, dimensions, combo (pilihan atau isi sendiri), dan multiselect. `when` memakai format `id:nilai`. Validasi yang spesifik ditempatkan di mesin, tidak disalin ke semua halaman.

Naikkan `version` saat perilaku template berubah. Proyek lama menyimpan isian dan hasil terakhir. Saat versi berbeda, aplikasi memberi tahu pengguna; hasil terakhir tetap tersedia di Proyek Saya.

Generator baru berada di `src/templates/<kategori>/<generator>/template.json`. Gunakan `format: "authored"` dan `body` dengan placeholder `{{idIsian}}`, atau `stages` untuk beberapa hasil. `example` menyediakan contoh melalui tombol, tidak memaksakan contoh saat formulir pertama dibuka. `optionsBy` dan `dependsOn` mendefinisikan pilihan bertingkat; `instructionsBy` memasukkan mekanisme pilihan melalui `{{idIsianRules}}`. Kategori yang sudah tersedia tidak perlu didaftarkan ulang. Folder template dimuat otomatis; judul dan penyaringan kategori berasal dari katalog. Tambahkan renderer jenis isian hanya jika referensi baru memerlukan kontrol yang belum tersedia.

## Layanan data

Semua akses memakai JWT Supabase pengguna. `src/lib/supabase.ts` hanya memakai publishable key, termasuk untuk fungsi SQL. Tidak ada secret di aplikasi. Pembatasan di UI hanya membantu pengguna; kewenangan sesungguhnya berada di RLS/fungsi transaksi.

| Data/aksi | Antarmuka |
|---|---|
| Profil pengguna | SELECT `profiles`, RPC `update_profile` |
| Proyek milik sendiri | SELECT/INSERT/UPDATE/DELETE `projects`; kolom pemilik tidak boleh ditulis klien |
| Dukungan | RPC `submit_donation`, `set_wall_consent`, `review_donation` |
| Mitra | RPC `apply_partner`, `review_partner` |
| Pembayaran komisi | RPC `record_payout` dengan periode, bukti, dan nominal aktual |
| Usulan fitur | RPC `submit_feature`, `review_feature` |
| Metode pembayaran | RPC `save_payment_method` |
| Bukti | Bucket privat `proofs`; path pemilik/kategori/UUID; signed URL 60 detik |
| Data publik | View `public_wall`, `public_features`, `public_partners` dengan kolom terbatas |

Fungsi sensitif bersifat security-definer dengan search_path kosong dan pengecekan admin. Pengguna biasa tidak memperoleh hak tulis langsung terhadap peran, member, dukungan, ledger, payout, atau audit. Metadata Google hanya digunakan untuk nama tampilan, tidak untuk menentukan hak akses.

Kuota proyek memakai penguncian baris profil sebelum menghitung jumlah. Verifikasi mengunci pengajuan, profil, dan mitra; kredit/koreksi unik per pengajuan. Pembayaran mengunci mitra dan menghubungkan entri ledger ke payout. Nominal aktual wajib cocok dengan saldo transaksi, sehingga perbedaan rekap tidak dicatat diam-diam.

Referensi mitra ditentukan ketika pengajuan dikirim. Menonaktifkan mitra mencegah referral baru; dukungan yang sudah diajukan dengan referral sah tetap menghasilkan komisi setelah diverifikasi. Koreksi setelah komisi dibayar menjadi saldo negatif yang mengurangi pembayaran berikutnya. Aplikasi tidak menarik kembali uang secara otomatis.

## Build dan paket

`npm run check` memeriksa naskah, database, build produksi, browser, serta kontrak UI layanan. `npm run export:github` menyalin daftar berkas sumber yang diizinkan ke folder `MAHARATI-GITHUB`. ZIP dibuat dari folder bersih tersebut. Jangan menambahkan `.env` atau folder cadangan ke daftar ekspor.

## Perubahan sehari-hari melalui GitHub

Misalnya mengganti pilihan desain NotebookLM: buka `src/templates/media/notebook-rpp/template.json`, ubah `fields` atau `body` yang diperlukan, naikkan `version`, lalu commit. Umumnya hanya satu file yang diedit. Jalankan pengujian sebelum menerbitkan. Cloudflare Pages akan membangun ulang dari GitHub. File hasil build dapat berubah nama karena hash; tidak perlu mengunggahnya satu-satu. `index.html` tetap menjadi pintu masuk bersama.

Generator video mengadaptasi contoh Chain of Prompting pengguna; media interaktif mengadaptasi PromptLab pengguna; permainan kamera membedakan frame differencing, warna, dan pelacakan tangan MediaPipe. PIN yang tertanam dalam contoh tidak digunakan sebagai autentikasi. Prompt game dan kuis baru ditulis sesuai izin pengguna. Link Gem merupakan tautan ke layanan luar; isi Gem tidak diambil otomatis.

Seluruh prompt memang publik. Menyembunyikan JavaScript atau menonaktifkan Inspect bukan pengamanan. Tidak ada jaminan anti-bajak mutlak; hak akun, proyek, bukti, dan transaksi diperiksa pada layanan belakang aplikasi.
