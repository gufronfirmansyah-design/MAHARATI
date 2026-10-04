-- Run ONLY in the Supabase SQL Editor as the project owner.
-- First sign in to MAHARATI using Google, then replace the email below.
do $$
declare target uuid;
begin
 select id into target from auth.users
 where lower(email)=lower('GANTI_DENGAN_EMAIL_GOOGLE_ADMIN')
 and email_confirmed_at is not null;
 if target is null then raise exception 'Akun Google terverifikasi belum ditemukan. Periksa email dan login dahulu.'; end if;
 update public.profiles set is_admin=true where id=target;
 insert into public.audit_log(actor_id,action,details)
 values(target,'admin.bootstrap',jsonb_build_object('method','Supabase SQL Editor'));
end $$;
