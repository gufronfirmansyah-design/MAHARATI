-- Additive migration: existing Supabase Storage proofs remain readable.
alter table public.donations drop constraint donations_amount_check;
alter table public.donations add constraint donations_amount_check check(amount between 1 and 100000000);

create table public.app_settings (
 setting_key text primary key,
 setting_value text not null,
 description text not null,
 updated_at timestamptz not null default now()
);
insert into public.app_settings values
 ('proof_provider','supabase','Penyimpanan bukti baru: supabase atau drive. Aktifkan Drive setelah penghubung siap.',now()),
 ('support_note','Dukungan sukarela membantu pengembangan MAHARATI.','Pesan pada halaman Traktir Kopi.',now());
alter table public.app_settings enable row level security;
create policy settings_read on public.app_settings for select to anon,authenticated using(true);
revoke all on public.app_settings from anon,authenticated;
grant select on public.app_settings to anon,authenticated;
create function public.save_app_setting(p_key text,p_value text) returns void language plpgsql security definer set search_path='' as $$
begin
 perform private.require_admin();
 if p_key='proof_provider' and p_value not in ('supabase','drive') then raise exception 'Provider tidak valid.'; end if;
 if p_key not in ('proof_provider','support_note') or length(trim(p_value)) not between 1 and 500 then raise exception 'Pengaturan tidak valid.'; end if;
 update public.app_settings set setting_value=p_value,updated_at=now() where setting_key=p_key;
 insert into public.audit_log(actor_id,action,details) values(auth.uid(),'setting.saved',jsonb_build_object('key',p_key,'value',p_value));
end $$;
revoke all on function public.save_app_setting(text,text) from public,anon;
grant execute on function public.save_app_setting(text,text) to authenticated;

create table public.proof_files (
 id uuid primary key,
 user_id uuid not null references public.profiles(id),
 kind text not null check(kind in ('donations','payouts')),
 proof_path text not null unique,
 mime_type text not null check(mime_type in ('image/jpeg','image/png','application/pdf')),
 byte_size integer not null check(byte_size between 1 and 5242880),
 status text not null default 'pending' check(status in ('pending','ready')),
 drive_file_id text unique,
 drive_url text,
 created_at timestamptz not null default now(),
 check(status<>'ready' or (drive_file_id is not null and drive_url is not null))
);
create index proof_files_owner on public.proof_files(user_id,created_at);
alter table public.proof_files enable row level security;
create policy proof_files_read on public.proof_files for select to authenticated using(private.can_read_proof(proof_path));
revoke all on public.proof_files from anon,authenticated;
grant select on public.proof_files to authenticated;
grant all on public.proof_files to service_role;

create function public.reserve_drive_proof(p_id uuid,p_owner uuid,p_kind text,p_mime text,p_size integer) returns public.proof_files language plpgsql security definer set search_path='' as $$
declare existing public.proof_files; ext text;
begin
 perform 1 from public.profiles where id=p_owner for update;
 if not found then raise exception 'Profil tidak ditemukan.'; end if;
 if p_kind='payouts' and not (select is_admin from public.profiles where id=p_owner) then raise exception 'Bukti komisi hanya untuk admin.'; end if;
 select * into existing from public.proof_files where id=p_id;
 if found then
  if existing.user_id<>p_owner or existing.kind<>p_kind or existing.mime_type<>p_mime or existing.byte_size<>p_size then raise exception 'ID unggahan tidak sesuai.'; end if;
  return existing;
 end if;
 if (select count(*) from public.proof_files where user_id=p_owner and created_at>now()-interval '1 day')>=20 then raise exception 'Batas 20 unggahan per hari tercapai.'; end if;
 ext=case p_mime when 'application/pdf' then 'pdf' when 'image/png' then 'png' else 'jpg' end;
 insert into public.proof_files(id,user_id,kind,proof_path,mime_type,byte_size) values(p_id,p_owner,p_kind,p_owner::text||'/'||p_kind||'/'||p_id::text||'.'||ext,p_mime,p_size) returning * into existing;
 return existing;
end $$;
revoke all on function public.reserve_drive_proof(uuid,uuid,text,text,integer) from public,anon,authenticated;
grant execute on function public.reserve_drive_proof(uuid,uuid,text,text,integer) to service_role;

create or replace function private.check_proof(p_path text,p_kind text) returns void language plpgsql security definer set search_path='' as $$
begin
 if p_path not like private.require_user()::text||'/'||p_kind||'/%' then raise exception 'Bukti bukan milik pengirim.'; end if;
 if exists(select 1 from public.proof_files where proof_path=p_path and user_id=auth.uid() and kind=p_kind and status='ready') then return; end if;
 if not exists(select 1 from storage.objects where bucket_id='proofs' and name=p_path
 and (metadata->>'size')::bigint between 1 and 5242880 and metadata->>'mimetype' in ('image/jpeg','image/png','application/pdf')) then raise exception 'Bukti tidak ditemukan atau belum selesai disimpan.'; end if;
end $$;
