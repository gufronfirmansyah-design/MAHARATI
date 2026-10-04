# TAHAP 3 — Pasang proof-drive dan secrets

Tujuan: menghubungkan Supabase ke Apps Script. Mengunggah kode ke GitHub saja tidak memperbarui Edge Function.

## A. Isi tiga secrets di Supabase

Buka proyek yang sama → Edge Functions → Secrets (nama menu dapat sedikit berbeda). Tambahkan/perbarui:

| Nama persis | Isi |
|---|---|
| DRIVE_BRIDGE_URL | URL Apps Script /exec aktif dari tahap 2 |
| DRIVE_BRIDGE_SECRET | Nilai yang SAMA PERSIS dengan BRIDGE_SECRET di Script Properties Apps Script; minimal 32 karakter |
| ALLOWED_ORIGINS | Origin website, contoh https://maharati.pages.dev; tanpa slash akhir dan tanpa /akun |

Jika menguji komputer lokal juga: contoh https://maharati.pages.dev,http://127.0.0.1:5173. Ganti domain contoh dengan domain milik Bapak. Jangan memakai *.

SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY memakai variabel runtime bawaan Edge Functions Supabase. Jangan masukkan service_role ke VITE_ atau GitHub. Secret Apps Script bernama BRIDGE_SECRET, sedangkan secret Edge Function bernama DRIVE_BRIDGE_SECRET; nilainya sama, namanya memang berbeda.

## B. Deploy lewat terminal — jalur yang disarankan

Buka PowerShell di komputer. Node.js yang digunakan untuk menjalankan MAHARATI harus sudah tersedia. Jalankan satu baris setiap kali:

~~~powershell
cd 'D:\Documents\Dokumen Gufron\APLIKASI\PROMPT GENERATOR\MAHARATI-GITHUB'
npx supabase login
~~~

Jika npx meminta memasang Supabase CLI, setujui. Login browser dengan akun Supabase pengelola; jangan menyalin token ke chat.

Di Dashboard Supabase cari Project ID/Reference ID pada pengaturan proyek. Ganti PROJECT_REF_ANDA di bawah dengan ID tersebut (bukan nama aplikasi atau URL lengkap):

~~~powershell
npx supabase functions deploy proof-drive --project-ref PROJECT_REF_ANDA --no-verify-jwt --use-api
~~~

--use-api menggunakan bundler server sehingga tidak memerlukan Docker lokal. --no-verify-jwt menonaktifkan pemeriksaan gateway; kode proof-drive tetap wajib memeriksa sesi melalui auth.getUser. Pengguna tanpa sesi ditolak, dan pemeriksaan health hanya untuk admin. Jangan menghapus pemeriksaan tersebut.

Folder functions/proof-drive berisi DUA file: index.ts dan protocol.mjs. CLI mengirim keduanya. Jika memakai editor Dashboard, keduanya harus tersedia pada folder fungsi yang sama; jangan hanya menempel index.ts.

## BERHASIL

Terminal menyatakan deployment proof-drive berhasil pada proyek yang benar. Fungsi terlihat dalam Edge Functions. Membuka URL fungsi langsung di browser bukan uji upload: permintaan tersebut tidak membawa sesi/form yang diperlukan.

Referensi: [Deployment Supabase](https://supabase.com/docs/guides/functions/deploy), [Secrets](https://supabase.com/docs/guides/functions/secrets).

Lanjut: [TAHAP 4](04-WEBSITE.md).
