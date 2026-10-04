# TAHAP 2 — Perbarui Apps Script yang sudah ada

Tujuan: memakai bridge terbaru tanpa mengganti folder atau spreadsheet.

1. Buka proyek Apps Script Bapak yang sudah dipakai. Simpan salinan kode lama di komputer sebagai cadangan.
2. Buka Code.gs. Ganti isinya dengan seluruh isi file google-apps-script/Code.gs dari paket terbaru. Simpan. Jangan mengganti BRIDGE_SECRET, DRIVE_FOLDER_ID, atau SPREADSHEET_ID yang sudah benar.
3. Periksa spreadsheet mempunyai tab bernama Uploads dengan header sesuai bagian bawah. Jika belum ada, pilih fungsi setupMaharati pada editor lalu Run; karena ID sudah terisi, fungsi memakai folder/spreadsheet tersebut, bukan membuat yang baru. Setujui izin Google hanya untuk proyek milik Bapak.
4. Di Drive, buka folder bukti dan spreadsheet → Share/Bagikan → General access/Akses umum: Restricted/Dibatasi. Jangan gunakan folder bersama publik. Periksa juga daftar orang yang diberi akses; hanya pengelola yang berhak. PRIVATE tidak menghapus akses individual yang sebelumnya diberikan.
5. Pilih Deploy → Manage deployments → pilih Web App aktif → Edit (pensil) → Version: New version → Deploy. Jalankan sebagai akun pengelola (Execute as: Me), akses Anyone agar server dapat memanggilnya. Endpoint tetap memerlukan tanda tangan rahasia untuk operasi file. Jika kebijakan organisasi melarang Anyone, jangan mencoba melewati kebijakan tersebut.

URL yang terakhir Bapak berikan:

https://script.google.com/macros/s/AKfycbweANQnJfbzyh9Lnj4bgTiKMIawAUkP0UQipenccRTO3Y1OJTQ9PFXQQYmBVzQqd6bRRQ/exec

Mengedit deployment yang sama biasanya mempertahankan URL. Jika membuat deployment baru, gunakan URL baru yang benar pada tahap 3. Jangan gunakan /dev.

Header tab Uploads (urutan harus sama):

request_id | user_id | kind | proof_path | file_name | drive_file_id | drive_url | mime_type | byte_size | created_at | archive_status

## BERHASIL

URL /exec menampilkan JSON ok: true. Ini hanya tanda endpoint hidup; keberhasilan koneksi rahasia diperiksa setelah Edge Function diperbarui.

Referensi: [Web Apps Google](https://developers.google.com/apps-script/guides/web).

Lanjut: [TAHAP 3](03-EDGE-FUNCTION.md).
