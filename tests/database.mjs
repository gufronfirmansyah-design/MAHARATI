import { PGlite } from "@electric-sql/pglite";
import fs from "node:fs";
import assert from "node:assert/strict";
const db = new PGlite();
let checks = 0;
await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;create schema auth;create schema storage;
create table auth.users(id uuid primary key,raw_user_meta_data jsonb default '{}');
create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
grant usage on schema auth,storage to anon,authenticated;grant execute on function auth.uid() to anon,authenticated;
create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
create table storage.objects(id uuid default gen_random_uuid(),bucket_id text,name text,metadata jsonb,created_at timestamptz default now());
alter table storage.objects enable row level security;grant select,insert,delete on storage.objects to authenticated;`);
await db.exec(
  fs.readFileSync(
    new URL(
      "../supabase/migrations/202610030001_maharati.sql",
      import.meta.url,
    ),
    "utf8",
  ),
);
await db.exec(
  fs.readFileSync(
    new URL(
      "../supabase/migrations/202610030002_drive_settings.sql",
      import.meta.url,
    ),
    "utf8",
  ),
);
const ids = {
  admin: "00000000-0000-4000-8000-000000000001",
  a: "00000000-0000-4000-8000-000000000002",
  b: "00000000-0000-4000-8000-000000000003",
  partner: "00000000-0000-4000-8000-000000000004",
};
for (const [name, id] of Object.entries(ids))
  await db.query(
    "insert into auth.users(id,raw_user_meta_data) values($1,$2)",
    [id, JSON.stringify({ full_name: name, is_admin: true, is_member: true })],
  );
async function as(who, sql, args = []) {
  await db.exec("reset role");
  await db.query("select set_config('request.jwt.claim.sub',$1,false)", [
    ids[who] || "",
  ]);
  await db.exec("set role " + (who === "anon" ? "anon" : "authenticated"));
  try {
    return await db.query(sql, args);
  } finally {
    await db.exec("reset role");
  }
}
async function denied(who, sql, args = []) {
  await assert.rejects(() => as(who, sql, args));
  checks++;
}
function ok(value) {
  assert(value);
  checks++;
}
await db.query("update public.profiles set is_admin=true where id=$1", [
  ids.admin,
]);
ok(
  (await as("a", "select is_admin,is_member from profiles")).rows.every(
    (r) => !r.is_admin && !r.is_member,
  ),
);
await denied("a", "update profiles set is_admin=true");
await denied(
  "a",
  "select save_payment_method('dana','DANA','123','Pengelola',true)",
);
await denied("anon", "select update_profile('bad','bad')");
await as(
  "admin",
  "select save_payment_method('dana','DANA','123','Pengelola',true)",
);
ok((await as("anon", "select * from payment_methods")).rows.length === 1);
await denied("anon", "select * from profiles");
await denied("anon", "select * from donations");
await denied(
  "a",
  "insert into projects(title,template_id,template_version) values('uji','rpp',1)",
);
await as(
  "partner",
  "select apply_partner('Berbagi ke rekan guru','BRI','321','Mitra')",
);
await denied("a", "select review_partner($1,'approved','setuju')", [
  ids.partner,
]);
await as("admin", "select review_partner($1,'approved','setuju')", [
  ids.partner,
]);
const code = (await as("anon", "select * from public_partners")).rows[0]
  .referral_code;
const partnerColumns = Object.keys(
  (await as("anon", "select * from public_partners")).rows[0],
);
ok(
  !partnerColumns.includes("account_number") &&
    !partnerColumns.includes("user_id"),
);
async function proof(who, name, kind = "donations") {
  const path = `${ids[who]}/${kind}/${name}.png`;
  await as(
    who,
    'insert into storage.objects(bucket_id,name,metadata) values(\'proofs\',$1,\'{"size":120,"mimetype":"image/png"}\')',
    [path],
  );
  return path;
}
const aProof = await proof("a", "first");
await denied("b", "select submit_donation(25000,'dana',$1,'',false,null)", [
  aProof,
]);
await denied(
  "b",
  "insert into storage.objects(bucket_id,name,metadata) values('proofs',$1,'{}')",
  [ids.a + "/donations/spoof.png"],
);
await denied(
  "a",
  "insert into storage.objects(bucket_id,name,metadata) values('proofs',$1,'{}')",
  [ids.a + "/payouts/spoof.png"],
);
ok(
  (await as("b", "select * from storage.objects where name=$1", [aProof])).rows
    .length === 0,
);
await denied("partner", "select submit_donation(25000,'dana',$1,'',true,$2)", [
  await proof("partner", "self"),
  code,
]);
const donation = (
  await as(
    "a",
    "select submit_donation(25000,'dana',$1,'Terima kasih',true,$2)",
    [aProof, code],
  )
).rows[0].submit_donation;
await denied("a", "select review_donation($1,'verify','')", [donation]);
ok((await as("b", "select * from donations")).rows.length === 0);
await as("a", "delete from storage.objects where name=$1", [aProof]);
ok(
  (await as("a", "select * from storage.objects where name=$1", [aProof])).rows
    .length === 1,
);
await as("admin", "select review_donation($1,'verify','Dana diterima')", [
  donation,
]);
await as("admin", "select review_donation($1,'verify','ulang')", [donation]);
ok(
  (await as("a", "select is_member from profiles")).rows[0].is_member === true,
);
const ledger = (await as("partner", "select * from partner_ledger")).rows;
ok(ledger.length === 1 && ledger[0].amount === 7500);
ok((await as("partner", "select * from donations")).rows.length === 0);
const wall = (await as("anon", "select * from public_wall")).rows;
ok(wall.length === 1 && !("proof_path" in wall[0]) && !("user_id" in wall[0]));
await as("a", "select set_wall_consent($1,false)", [donation]);
ok((await as("anon", "select * from public_wall")).rows.length === 0);
await denied("b", "select set_wall_consent($1,true)", [donation]);
await as(
  "a",
  "insert into projects(title,template_id,template_version,profile,drafts,outputs) values('Proyek A','rpp',1,'{}','{}','{}')",
);
const project = (await as("a", "select * from projects")).rows[0];
ok((await as("b", "select * from projects")).rows.length === 0);
ok((await as("admin", "select * from projects")).rows.length === 0);
await as("b", "delete from projects where id=$1", [project.id]);
ok((await as("a", "select * from projects")).rows.length === 1);
await denied("a", "update projects set user_id=$1 where id=$2", [
  ids.b,
  project.id,
]);
await denied(
  "a",
  "insert into projects(user_id,title,template_id,template_version) values($1,'spoof','rpp',1)",
  [ids.b],
);
await as(
  "a",
  "insert into projects(title,template_id,template_version) select 'Proyek '||i,'rpp',1 from generate_series(2,100) i",
);
await denied(
  "a",
  "insert into projects(title,template_id,template_version) values('101','rpp',1)",
);
ok((await as("a", "select count(*)::int n from projects")).rows[0].n === 100);
await as("a", "update projects set title='Terbaru' where id=$1", [project.id]);
ok(
  (
    await as(
      "a",
      "update projects set title='Konflik' where id=$1 and updated_at=$2 returning id",
      [project.id, project.updated_at],
    )
  ).rows.length === 0,
);
await as("a", "delete from projects where id=$1", [project.id]);
await as(
  "a",
  "insert into projects(title,template_id,template_version) values('Pengganti','rpp',1)",
);
const feature = (
  await as("a", "select submit_feature('Usulan','Kebutuhan guru')")
).rows[0].submit_feature;
ok((await as("anon", "select * from public_features")).rows.length === 0);
await denied("a", "select review_feature($1,'Selesai',true)", [feature]);
await as("admin", "select review_feature($1,'Direncanakan',true)", [feature]);
ok((await as("anon", "select * from public_features")).rows.length === 1);
const payoutProof = await proof("admin", "paid", "payouts");
const period = new Date().toISOString().slice(0, 7) + "-01";
await denied("partner", "select record_payout($1,$2,$3,7500)", [
  ids.partner,
  period,
  payoutProof,
]);
await denied("admin", "select record_payout($1,$2,$3,7000)", [
  ids.partner,
  period,
  payoutProof,
]);
await as("admin", "select record_payout($1,$2,$3,7500)", [
  ids.partner,
  period,
  payoutProof,
]);
ok((await as("partner", "select * from payouts")).rows[0].amount === 7500);
ok(
  (
    await as("partner", "select * from storage.objects where name=$1", [
      payoutProof,
    ])
  ).rows.length === 1,
);
ok(
  (await as("a", "select * from storage.objects where name=$1", [payoutProof]))
    .rows.length === 0,
);
await denied("admin", "select record_payout($1,$2,$3,7500)", [
  ids.partner,
  period,
  payoutProof,
]);
await as("admin", "select review_donation($1,'reverse','Dana dibatalkan')", [
  donation,
]);
await as("admin", "select review_donation($1,'reverse','ulang')", [donation]);
ok(
  (await as("partner", "select * from partner_ledger where kind='reversal'"))
    .rows.length === 1,
);
ok(
  (await as("a", "select is_member from profiles")).rows[0].is_member === false,
);
ok((await as("anon", "select * from public_wall")).rows.length === 0);
ok((await as("a", "select count(*)::int n from projects")).rows[0].n === 100);
ok(
  (await as("a", "update projects set title='Tak berhak' returning id")).rows
    .length === 0,
);
const bProof = await proof("b", "next");
const bDonation = (
  await as("b", "select submit_donation(50000,'dana',$1,'',false,$2)", [
    bProof,
    code,
  ])
).rows[0].submit_donation;
await as("admin", "select review_donation($1,'verify','')", [bDonation]);
const payout2 = await proof("admin", "paid2", "payouts");
await as("admin", "select record_payout($1,$2,$3,7500)", [
  ids.partner,
  period,
  payout2,
]);
ok(
  (await as("partner", "select sum(amount)::int n from payouts")).rows[0].n ===
    15000,
);
const small = (
  await as("a", "select submit_donation(15000,'dana',$1,'',false,null)", [
    await proof("a", "small"),
  ])
).rows[0].submit_donation;
await as("admin", "select review_donation($1,'verify','')", [small]);
ok(
  (await as("a", "select is_member from profiles")).rows[0].is_member === false,
);
await denied("a", "update partner_ledger set amount=999999");
ok((await as("a", "select * from audit_log")).rows.length === 0);
ok((await as("admin", "select * from audit_log")).rows.length === 9);
await denied("a", "select save_app_setting('proof_provider','drive')");
await as("admin", "select save_app_setting('proof_provider','drive')");
ok(
  (
    await as(
      "anon",
      "select setting_value from app_settings where setting_key='proof_provider'",
    )
  ).rows[0].setting_value === "drive",
);
await denied(
  "admin",
  "select save_app_setting('service_role_key','must-not-store-here')",
);
const uploadId = "10000000-0000-4000-8000-000000000001";
await denied(
  "a",
  "select reserve_drive_proof($1,$2,'donations','image/png',100)",
  [uploadId, ids.a],
);
const reservation = (
  await db.query(
    "select * from reserve_drive_proof($1,$2,'donations','image/png',100)",
    [uploadId, ids.a],
  )
).rows[0];
await denied("a", "select submit_donation(1,'dana',$1,'',false,null)", [
  reservation.proof_path,
]);
await db.query(
  "update proof_files set status='ready',drive_file_id='file-test-1',drive_url='https://drive.google.com/file/d/file-test-1/view' where id=$1",
  [uploadId],
);
ok((await as("a", "select * from proof_files")).rows.length === 1);
ok((await as("b", "select * from proof_files")).rows.length === 0);
await denied("anon", "select * from proof_files");
await denied(
  "a",
  "update proof_files set drive_url='https://attacker.invalid'",
);
await denied("a", "select submit_donation(0,'dana',$1,'',false,null)", [
  reservation.proof_path,
]);
const tiny = (
  await as("a", "select submit_donation(1,'dana',$1,'',false,null)", [
    reservation.proof_path,
  ])
).rows[0].submit_donation;
ok(!!tiny);
const again = (
  await db.query(
    "select * from reserve_drive_proof($1,$2,'donations','image/png',100)",
    [uploadId, ids.a],
  )
).rows[0];
ok(again.proof_path === reservation.proof_path);
await assert.rejects(() =>
  db.query("select reserve_drive_proof($1,$2,'donations','image/png',100)", [
    uploadId,
    ids.b,
  ]),
);
checks++;
await assert.rejects(() =>
  db.query(
    "select reserve_drive_proof(gen_random_uuid(),$1,'payouts','image/png',100)",
    [ids.a],
  ),
);
checks++;
for (let i = 0; i < 20; i++)
  await db.query(
    "select reserve_drive_proof(gen_random_uuid(),$1,'donations','image/png',100)",
    [ids.b],
  );
await assert.rejects(() =>
  db.query(
    "select reserve_drive_proof(gen_random_uuid(),$1,'donations','image/png',100)",
    [ids.b],
  ),
);
checks++;
const snapshot = await db.dumpDataDir();
const restored = new PGlite({ loadDataDir: snapshot });
const restoredCount = (
  await restored.query("select count(*)::int n from projects")
).rows[0].n;
ok(restoredCount === 100);
ok(
  (await restored.query("select count(*)::int n from audit_log")).rows[0].n ===
    10,
);
await restored.close();
console.log(
  `${checks} pemeriksaan database lulus (PostgreSQL via PGlite). Auth/Storage Supabase disimulasikan; OAuth dan Storage HTTP produksi memerlukan smoke test layanan asli.`,
);
await db.close();
