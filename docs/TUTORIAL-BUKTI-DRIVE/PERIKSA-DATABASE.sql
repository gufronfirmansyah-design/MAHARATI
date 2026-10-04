-- BACA SAJA. Tidak mengubah atau menghapus data. Jalankan setiap SELECT jika editor hanya menampilkan hasil terakhir.
select setting_key,setting_value from public.app_settings where setting_key='proof_provider';
select c.relname as tabel,c.relrowsecurity as rls_aktif from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname in ('donations','proof_files','app_settings');
select n.nspname as schema,p.proname as fungsi,pg_get_function_identity_arguments(p.oid) as parameter from pg_proc p join pg_namespace n on n.oid=p.pronamespace where (n.nspname='public' and p.proname in ('reserve_drive_proof','submit_donation','save_app_setting')) or (n.nspname='private' and p.proname='check_proof');
select table_name,column_name,data_type from information_schema.columns where table_schema='public' and table_name in ('donations','proof_files') order by table_name,ordinal_position;
