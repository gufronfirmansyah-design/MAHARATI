-- MAHARATI. Apply once to a dedicated Supabase project.
create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to anon, authenticated;

create table public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null default 'Guru' check(length(display_name) between 1 and 100),
 institution text not null default '' check(length(institution)<=200),
 is_member boolean not null default false, is_admin boolean not null default false,
 created_at timestamptz not null default now()
);
create function private.new_user() returns trigger language plpgsql security definer set search_path='' as $$
begin insert into public.profiles(id,display_name) values(new.id,coalesce(nullif(left(new.raw_user_meta_data->>'full_name',100),''),'Guru')); return new; end $$;
create trigger maharati_new_user after insert on auth.users for each row execute function private.new_user();
insert into public.profiles(id,display_name) select id,coalesce(nullif(left(raw_user_meta_data->>'full_name',100),''),'Guru') from auth.users on conflict do nothing;

create function private.is_admin() returns boolean language sql stable security definer set search_path='' as $$ select coalesce((select is_admin from public.profiles where id=auth.uid()),false) $$;
create function private.is_member() returns boolean language sql stable security definer set search_path='' as $$ select coalesce((select is_member from public.profiles where id=auth.uid()),false) $$;
create function private.require_admin() returns void language plpgsql security definer set search_path='' as $$ begin if not private.is_admin() then raise exception 'Akses admin diperlukan.'; end if; end $$;
create function private.require_user() returns uuid language plpgsql stable set search_path='' as $$ begin if auth.uid() is null then raise exception 'Masuk terlebih dahulu.'; end if; return auth.uid(); end $$;

create table public.projects (
 id uuid primary key default gen_random_uuid(), user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
 title text not null check(length(trim(title)) between 1 and 150),
 template_id text not null check(length(template_id) between 1 and 80), template_version integer not null check(template_version>0),
 profile jsonb not null default '{}' check(jsonb_typeof(profile)='object'),
 drafts jsonb not null default '{}' check(jsonb_typeof(drafts)='object'),
 outputs jsonb not null default '{}' check(jsonb_typeof(outputs)='object'),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 check(octet_length(profile::text)+octet_length(drafts::text)+octet_length(outputs::text)<=1048576)
);
create index projects_owner on public.projects(user_id,updated_at desc);
create function private.project_guard() returns trigger language plpgsql security definer set search_path='' as $$
begin
 if tg_op='UPDATE' then
  if new.user_id<>old.user_id or new.id<>old.id then raise exception 'Pemilik proyek tidak dapat diubah.'; end if;
  new.created_at=old.created_at;
 else
  perform 1 from public.profiles where id=new.user_id for update;
  if (select count(*) from public.projects where user_id=new.user_id)>=100 then raise exception 'Batas 100 proyek tercapai. Hapus proyek lama terlebih dahulu.'; end if;
 end if;
 new.updated_at=clock_timestamp(); return new;
end $$;
create trigger project_guard before insert or update on public.projects for each row execute function private.project_guard();

create table public.payment_methods (
 id text primary key check(id ~ '^[a-zA-Z0-9_-]{1,50}$'), label text not null check(length(label) between 1 and 100),
 account_number text not null default '' check(length(account_number)<=100), account_name text not null default '' check(length(account_name)<=100),
 active boolean not null default false,
 check(not active or (length(trim(account_number))>0 and length(trim(account_name))>0))
);
-- Deliberately inactive until the owner confirms current payment details.
insert into public.payment_methods(id,label) values ('dana','DANA'),('gopay','GoPay'),('bri','BRI'),('bsi','BSI');
create table public.partners (
 user_id uuid primary key references public.profiles(id),
 status text not null default 'pending' check(status in ('pending','approved','rejected','disabled')),
 reason text not null check(length(reason) between 1 and 2000),
 payment_method text not null check(length(payment_method) between 1 and 80),
 account_number text not null check(length(account_number) between 1 and 80), account_name text not null check(length(account_name) between 1 and 100),
 referral_code text unique, review_note text not null default '', created_at timestamptz not null default now()
);
create table public.donations (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id),
 amount integer not null check(amount between 1000 and 100000000), method_id text not null references public.payment_methods(id),
 payment_label text not null, proof_path text not null unique,
 message text not null default '' check(length(message)<=500), wall_consent boolean not null default false,
 display_name text not null, referral_code text, partner_id uuid references public.partners(user_id),
 status text not null default 'pending' check(status in ('pending','verified','rejected','reversed')),
 review_note text not null default '' check(length(review_note)<=1000),
 reviewed_by uuid references public.profiles(id), created_at timestamptz not null default now(), reviewed_at timestamptz
);
create index donations_owner on public.donations(user_id);
create table public.payouts (
 id uuid primary key default gen_random_uuid(), partner_id uuid not null references public.partners(user_id),
 amount integer not null check(amount>0), period date not null, proof_path text not null unique,
 created_by uuid not null references public.profiles(id), created_at timestamptz not null default now()
);
create table public.partner_ledger (
 id uuid primary key default gen_random_uuid(), partner_id uuid not null references public.partners(user_id),
 donation_id uuid not null references public.donations(id), kind text not null check(kind in ('credit','reversal')),
 amount integer not null, payout_id uuid references public.payouts(id), created_at timestamptz not null default now(),
 unique(donation_id,kind), check((kind='credit' and amount>0) or (kind='reversal' and amount<0))
);
create index ledger_partner on public.partner_ledger(partner_id);
create table public.feature_requests (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id),
 title text not null check(length(trim(title)) between 1 and 150), details text not null check(length(trim(details)) between 1 and 2000),
 status text not null default 'Diajukan' check(status in ('Diajukan','Direncanakan','Dikerjakan','Selesai','Tidak Dilanjutkan')),
 is_public boolean not null default false, created_at timestamptz not null default now()
);
create table public.audit_log (
 id uuid primary key default gen_random_uuid(), actor_id uuid not null references public.profiles(id),
 action text not null, details jsonb not null default '{}', created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.payment_methods enable row level security;
alter table public.partners enable row level security;
alter table public.donations enable row level security;
alter table public.payouts enable row level security;
alter table public.partner_ledger enable row level security;
alter table public.feature_requests enable row level security;
alter table public.audit_log enable row level security;

create policy profile_read on public.profiles for select to authenticated using(id=auth.uid() or private.is_admin());
create policy project_read on public.projects for select to authenticated using(user_id=auth.uid());
create policy project_insert on public.projects for insert to authenticated with check(user_id=auth.uid() and private.is_member());
create policy project_update on public.projects for update to authenticated using(user_id=auth.uid() and private.is_member()) with check(user_id=auth.uid() and private.is_member());
create policy project_delete on public.projects for delete to authenticated using(user_id=auth.uid());
create policy methods_read on public.payment_methods for select to anon,authenticated using(active or private.is_admin());
create policy partners_read on public.partners for select to authenticated using(user_id=auth.uid() or private.is_admin());
create policy donations_read on public.donations for select to authenticated using(user_id=auth.uid() or private.is_admin());
create policy payouts_read on public.payouts for select to authenticated using(partner_id=auth.uid() or private.is_admin());
create policy ledger_read on public.partner_ledger for select to authenticated using(partner_id=auth.uid() or private.is_admin());
create policy features_read on public.feature_requests for select to authenticated using(user_id=auth.uid() or private.is_admin());
create policy audit_read on public.audit_log for select to authenticated using(private.is_admin());

-- These intentional public projections expose only opted-in / approved fields.
-- Owner-executed views are required so anonymous users do not receive base-table access.
create view public.public_wall with (security_barrier=true) as select display_name,amount,message,created_at from public.donations where status='verified' and wall_consent;
create view public.public_features with (security_barrier=true) as select title,details,status,created_at from public.feature_requests where is_public;
create view public.public_partners with (security_barrier=true) as select p.referral_code,u.display_name from public.partners p join public.profiles u on u.id=p.user_id where p.status='approved';

create function public.update_profile(p_name text,p_institution text) returns void language plpgsql security definer set search_path='' as $$
begin update public.profiles set display_name=trim(p_name),institution=trim(p_institution) where id=private.require_user(); end $$;

create function private.check_proof(p_path text,p_kind text) returns void language plpgsql security definer set search_path='' as $$
begin
 if p_path not like private.require_user()::text||'/'||p_kind||'/%' then raise exception 'Bukti bukan milik pengirim.'; end if;
 if not exists(select 1 from storage.objects where bucket_id='proofs' and name=p_path
   and (metadata->>'size')::bigint between 1 and 5242880
   and metadata->>'mimetype' in ('image/jpeg','image/png','application/pdf')) then raise exception 'Bukti tidak ditemukan atau format/ukurannya tidak sesuai.'; end if;
end $$;
create function public.submit_donation(p_amount integer,p_method text,p_proof text,p_message text,p_consent boolean,p_referral text default null) returns uuid language plpgsql security definer set search_path='' as $$
declare uid uuid:=private.require_user(); pid uuid; ref text; label text; result uuid;
begin
 perform 1 from public.profiles where id=uid for update;
 if (select count(*) from public.donations where user_id=uid and created_at>now()-interval '1 day')>=10 then raise exception 'Maksimal 10 pengajuan per hari.'; end if;
 perform private.check_proof(p_proof,'donations');
 select m.label into label from public.payment_methods m where m.id=p_method and active;
 if label is null then raise exception 'Metode pembayaran tidak aktif.'; end if;
 if nullif(trim(p_referral),'') is not null then
  select user_id,referral_code into pid,ref from public.partners where referral_code=upper(trim(p_referral)) and status='approved';
  if pid is null then raise exception 'Kode mitra tidak aktif atau tidak ditemukan.'; end if;
  if pid=uid then raise exception 'Referral diri sendiri tidak diperbolehkan.'; end if;
 end if;
 insert into public.donations(user_id,amount,method_id,payment_label,proof_path,message,wall_consent,display_name,partner_id,referral_code)
 values(uid,p_amount,p_method,label,p_proof,coalesce(p_message,''),p_consent,(select display_name from public.profiles where id=uid),pid,ref) returning id into result;
 return result;
end $$;
create function public.set_wall_consent(p_id uuid,p_consent boolean) returns void language plpgsql security definer set search_path='' as $$
begin update public.donations set wall_consent=p_consent where id=p_id and user_id=private.require_user(); if not found then raise exception 'Pengajuan tidak ditemukan.'; end if; end $$;

create function public.review_donation(p_id uuid,p_action text,p_note text default '') returns void language plpgsql security definer set search_path='' as $$
declare d public.donations; credit integer;
begin
 perform private.require_admin();
 if p_action not in ('verify','reject','reverse') or p_action is null then raise exception 'Tindakan tidak valid.'; end if;
 select * into d from public.donations where id=p_id for update;
 if not found then raise exception 'Pengajuan tidak ditemukan.'; end if;
 if (p_action='verify' and d.status='verified') or (p_action='reject' and d.status='rejected') or (p_action='reverse' and d.status='reversed') then return; end if;
 if (p_action in ('verify','reject') and d.status<>'pending') or (p_action='reverse' and d.status<>'verified') then raise exception 'Status pengajuan sudah berubah. Muat ulang data.'; end if;
 if p_action<>'verify' and length(trim(coalesce(p_note,'')))=0 then raise exception 'Catatan wajib diisi.'; end if;
 perform 1 from public.profiles where id=d.user_id for update;
 if d.partner_id is not null then perform 1 from public.partners where user_id=d.partner_id for update; end if;
 update public.donations set status=case p_action when 'verify' then 'verified' when 'reject' then 'rejected' else 'reversed' end,review_note=coalesce(p_note,''),reviewed_by=auth.uid(),reviewed_at=now() where id=p_id;
 if p_action='verify' and d.partner_id is not null and d.partner_id<>d.user_id then
  insert into public.partner_ledger(partner_id,donation_id,kind,amount) values(d.partner_id,d.id,'credit',floor(d.amount::numeric*0.30)::integer) on conflict(donation_id,kind) do nothing;
 elsif p_action='reverse' then
  select amount into credit from public.partner_ledger where donation_id=d.id and kind='credit';
  if credit is not null then insert into public.partner_ledger(partner_id,donation_id,kind,amount) values(d.partner_id,d.id,'reversal',-credit) on conflict(donation_id,kind) do nothing; end if;
 end if;
 update public.profiles set is_member=exists(select 1 from public.donations where user_id=d.user_id and status='verified' and amount>=25000) where id=d.user_id;
 insert into public.audit_log(actor_id,action,details) values(auth.uid(),'donation.'||p_action,jsonb_build_object('id',d.id,'note',p_note));
end $$;

create function public.apply_partner(p_reason text,p_payment_method text,p_account_number text,p_account_name text) returns void language plpgsql security definer set search_path='' as $$
declare uid uuid:=private.require_user();
begin
 perform 1 from public.profiles where id=uid for update;
 if exists(select 1 from public.partners where user_id=uid and status<>'rejected') then raise exception 'Permohonan sudah ada. Periksa status Anda.'; end if;
 insert into public.partners(user_id,reason,payment_method,account_number,account_name) values(uid,trim(p_reason),trim(p_payment_method),trim(p_account_number),trim(p_account_name))
 on conflict(user_id) do update set reason=excluded.reason,payment_method=excluded.payment_method,account_number=excluded.account_number,account_name=excluded.account_name,status='pending',review_note='';
end $$;
create function public.review_partner(p_user uuid,p_status text,p_note text) returns void language plpgsql security definer set search_path='' as $$
declare current_status text;
begin
 perform private.require_admin();
 select status into current_status from public.partners where user_id=p_user for update;
 if not found then raise exception 'Mitra tidak ditemukan.'; end if;
 if p_status is null or not ((current_status='pending' and p_status in ('approved','rejected')) or (current_status='approved' and p_status='disabled')) then raise exception 'Perubahan status tidak valid.'; end if;
 if length(trim(coalesce(p_note,'')))=0 or length(p_note)>1000 then raise exception 'Isi catatan 1–1000 karakter.'; end if;
 update public.partners set status=p_status,review_note=p_note,referral_code=case when p_status='approved' then coalesce(referral_code,upper(substr(replace(gen_random_uuid()::text,'-',''),1,12))) else referral_code end where user_id=p_user;
 insert into public.audit_log(actor_id,action,details) values(auth.uid(),'partner.'||p_status,jsonb_build_object('user_id',p_user,'note',p_note));
end $$;

create function public.record_payout(p_partner uuid,p_period date,p_proof text,p_amount integer) returns uuid language plpgsql security definer set search_path='' as $$
declare total bigint; result uuid; cutoff timestamptz;
begin
 perform private.require_admin();perform private.check_proof(p_proof,'payouts');
 if p_period is null or extract(day from p_period)<>1 or p_period>date_trunc('month',now() at time zone 'Asia/Jakarta')::date then raise exception 'Pilih bulan berjalan atau sebelumnya.'; end if;
 perform 1 from public.partners where user_id=p_partner and status in ('approved','disabled') for update;
 if not found then raise exception 'Mitra tidak valid.'; end if;
 cutoff=(p_period+interval '1 month') at time zone 'Asia/Jakarta';
 select coalesce(sum(amount),0) into total from public.partner_ledger where partner_id=p_partner and payout_id is null and created_at<cutoff;
 if total<=0 then raise exception 'Tidak ada saldo positif yang dapat dibayarkan pada periode ini.'; end if;
 if p_amount is null or total<>p_amount then raise exception 'Nominal transfer tidak sama dengan saldo periode. Muat ulang rekap sebelum melanjutkan.'; end if;
 insert into public.payouts(partner_id,amount,period,proof_path,created_by) values(p_partner,total,p_period,p_proof,auth.uid()) returning id into result;
 update public.partner_ledger set payout_id=result where partner_id=p_partner and payout_id is null and created_at<cutoff;
 insert into public.audit_log(actor_id,action,details) values(auth.uid(),'payout.recorded',jsonb_build_object('id',result,'partner_id',p_partner,'amount',total));return result;
end $$;

create function public.submit_feature(p_title text,p_details text) returns uuid language plpgsql security definer set search_path='' as $$
declare uid uuid:=private.require_user(); result uuid;
begin
 perform 1 from public.profiles where id=uid for update;
 if (select count(*) from public.feature_requests where user_id=uid and created_at>now()-interval '1 day')>=10 then raise exception 'Maksimal 10 usulan per hari.'; end if;
 insert into public.feature_requests(user_id,title,details) values(uid,trim(p_title),trim(p_details)) returning id into result;return result;
end $$;
create function public.review_feature(p_id uuid,p_status text,p_public boolean) returns void language plpgsql security definer set search_path='' as $$
begin
 perform private.require_admin();update public.feature_requests set status=p_status,is_public=p_public where id=p_id;
 if not found then raise exception 'Usulan tidak ditemukan.'; end if;
 insert into public.audit_log(actor_id,action,details) values(auth.uid(),'feature.reviewed',jsonb_build_object('id',p_id,'status',p_status,'public',p_public));
end $$;
create function public.save_payment_method(p_id text,p_label text,p_number text,p_name text,p_active boolean) returns void language plpgsql security definer set search_path='' as $$
begin
 perform private.require_admin();
 insert into public.payment_methods(id,label,account_number,account_name,active) values(trim(p_id),trim(p_label),trim(p_number),trim(p_name),p_active)
 on conflict(id) do update set label=excluded.label,account_number=excluded.account_number,account_name=excluded.account_name,active=excluded.active;
 insert into public.audit_log(actor_id,action,details) values(auth.uid(),'payment_method.saved',jsonb_build_object('id',p_id,'active',p_active));
end $$;

-- Storage is private. Restrict read to submitter/admin or the partner of a payout.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('proofs','proofs',false,5242880,array['image/jpeg','image/png','application/pdf']) on conflict(id) do nothing;
create function private.can_read_proof(p_path text) returns boolean language sql stable security definer set search_path='' as $$
 select auth.uid() is not null and (private.is_admin() or split_part(p_path,'/',1)=auth.uid()::text or exists(select 1 from public.payouts where proof_path=p_path and partner_id=auth.uid()))
$$;
create function private.can_remove_proof(p_path text) returns boolean language sql stable security definer set search_path='' as $$
 select auth.uid() is not null and split_part(p_path,'/',1)=auth.uid()::text and not exists(select 1 from public.donations where proof_path=p_path) and not exists(select 1 from public.payouts where proof_path=p_path)
$$;
create policy proof_insert on storage.objects for insert to authenticated with check(bucket_id='proofs' and split_part(name,'/',1)=auth.uid()::text and (split_part(name,'/',2)='donations' or (split_part(name,'/',2)='payouts' and private.is_admin())));
create policy proof_read on storage.objects for select to authenticated using(bucket_id='proofs' and private.can_read_proof(name));
create policy proof_delete on storage.objects for delete to authenticated using(bucket_id='proofs' and private.can_remove_proof(name));

-- No direct writes to entitlement, financial, role, or audit tables from clients.
revoke all on public.profiles,public.projects,public.payment_methods,public.partners,public.donations,public.payouts,public.partner_ledger,public.feature_requests,public.audit_log from anon,authenticated;
grant select on public.profiles,public.projects,public.payment_methods,public.partners,public.donations,public.payouts,public.partner_ledger,public.feature_requests,public.audit_log to authenticated;
grant select on public.payment_methods to anon;
grant select on public.public_wall,public.public_features,public.public_partners to anon,authenticated;
grant insert(title,template_id,template_version,profile,drafts,outputs),update(title,template_id,template_version,profile,drafts,outputs),delete on public.projects to authenticated;
revoke all on all functions in schema private from public;
grant execute on function private.is_admin(),private.is_member(),private.can_read_proof(text),private.can_remove_proof(text) to anon,authenticated;
do $$ declare signature text; begin
 foreach signature in array array[
 'update_profile(text,text)','submit_donation(integer,text,text,text,boolean,text)','set_wall_consent(uuid,boolean)',
 'review_donation(uuid,text,text)','apply_partner(text,text,text,text)','review_partner(uuid,text,text)',
 'record_payout(uuid,date,text,integer)','submit_feature(text,text)','review_feature(uuid,text,boolean)',
 'save_payment_method(text,text,text,text,boolean)'
 ] loop
 execute 'revoke all on function public.'||signature||' from public, anon';
 execute 'grant execute on function public.'||signature||' to authenticated';
 end loop;
end $$;
