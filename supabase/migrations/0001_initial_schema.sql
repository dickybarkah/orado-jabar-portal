-- Portal ORADO Jabar — Initial Schema (BRD §10)
-- Apply via: Supabase Dashboard → SQL Editor → Run

-- =============== EXTENSIONS ===============
create extension if not exists pgcrypto;

-- =============== ENUMS ===============
create type role_name as enum (
  'super_admin', 'ketua', 'sekretaris', 'humas', 'pengcab', 'atlet'
);

create type user_status as enum ('active', 'inactive', 'suspended');

create type member_status as enum (
  'pending', 'verified', 'approved', 'active', 'inactive', 'suspended'
);

create type member_kategori as enum ('junior', 'senior', 'master');
create type gender as enum ('L', 'P');

create type berita_kategori as enum (
  'prestasi', 'kegiatan', 'edukasi', 'pengumuman'
);
create type berita_status as enum ('draft', 'pending', 'published', 'archived');

create type turnamen_status as enum ('upcoming', 'ongoing', 'completed', 'cancelled');

-- =============== PENGCAB (27 kota/kab Jabar) ===============
create table pengcab (
  id              uuid primary key default gen_random_uuid(),
  nama            text not null,            -- e.g. "ORADO Kota Bandung"
  kota_kab        text not null unique,
  alamat          text,
  kontak          text,
  ketua_pengcab   text,
  logo_url        text,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- =============== USERS (login accounts) ===============
-- Supabase auth.users handles auth; this table is profile/role layer
create table profiles (
  id              uuid primary key references auth.users(id) on delete cascade,
  email           text not null unique,
  full_name       text,
  role            role_name not null default 'atlet',
  pengcab_id      uuid references pengcab(id),       -- only for role = pengcab
  status          user_status not null default 'active',
  last_login_at   timestamptz,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

create index idx_profiles_role on profiles(role);
create index idx_profiles_pengcab on profiles(pengcab_id);

-- =============== ANGGOTA (atlet) ===============
create table anggota (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid references profiles(id) on delete set null,
  nomor_anggota       text unique,                    -- ORADO-JBR-YYYY-XXXX (auto-generated)
  nama_lengkap        text not null,
  nik                 text not null unique,           -- encrypted at-rest via Supabase Vault
  tempat_lahir        text,
  tanggal_lahir       date,
  jenis_kelamin       gender,
  alamat              text,
  kota_kab            text,
  provinsi            text default 'Jawa Barat',
  no_hp               text,
  email               text,
  kategori            member_kategori default 'junior',
  pengcab_id          uuid references pengcab(id),
  foto_url            text,
  ktp_url             text,
  status              member_status not null default 'pending',
  tanggal_bergabung   date,
  verified_by         uuid references profiles(id),
  approved_by         uuid references profiles(id),
  verified_at         timestamptz,
  approved_at         timestamptz,
  created_at          timestamptz default now(),
  updated_at          timestamptz default now(),
  deleted_at          timestamptz
);

create index idx_anggota_status   on anggota(status);
create index idx_anggota_pengcab  on anggota(pengcab_id);
create index idx_anggota_kategori on anggota(kategori);

-- =============== BERITA (CMS) ===============
create table berita (
  id                  uuid primary key default gen_random_uuid(),
  judul               text not null,
  slug                text not null unique,
  kategori            berita_kategori not null,
  konten              text,                           -- rich HTML
  excerpt             text,
  featured_image_url  text,
  author_id           uuid references profiles(id),
  status              berita_status not null default 'draft',
  is_pinned           boolean default false,
  published_at        timestamptz,
  created_at          timestamptz default now(),
  updated_at          timestamptz default now()
);

create index idx_berita_status   on berita(status);
create index idx_berita_kategori on berita(kategori);
create index idx_berita_pub      on berita(published_at desc);

-- =============== TURNAMEN ===============
create table turnamen (
  id                  uuid primary key default gen_random_uuid(),
  nama                text not null,
  slug                text not null unique,
  deskripsi           text,
  tanggal_mulai       date not null,
  tanggal_selesai     date,
  lokasi              text,
  kategori            text,
  biaya_pendaftaran   numeric(12,2) default 0,
  kuota               int,
  poster_url          text,
  status              turnamen_status not null default 'upcoming',
  hasil               jsonb,                          -- { juara_1: {...}, juara_2: {...}, ... }
  created_at          timestamptz default now(),
  updated_at          timestamptz default now()
);

create index idx_turnamen_status on turnamen(status);
create index idx_turnamen_tgl    on turnamen(tanggal_mulai desc);

-- =============== GALERI ===============
create table galeri_album (
  id              uuid primary key default gen_random_uuid(),
  judul           text not null,
  slug            text not null unique,
  deskripsi       text,
  cover_url       text,
  turnamen_id     uuid references turnamen(id) on delete set null,
  created_at      timestamptz default now()
);

create table galeri_media (
  id              uuid primary key default gen_random_uuid(),
  album_id        uuid not null references galeri_album(id) on delete cascade,
  tipe            text not null check (tipe in ('foto', 'video')),
  url             text not null,
  thumbnail_url   text,
  caption         text,
  urutan          int default 0,
  created_at      timestamptz default now()
);

create index idx_galeri_media_album on galeri_media(album_id, urutan);

-- =============== AUDIT LOG ===============
create table audit_log (
  id              bigserial primary key,
  user_id         uuid references profiles(id) on delete set null,
  aksi            text not null,                    -- create | update | delete | approve | login | logout
  entitas         text not null,                    -- anggota | berita | turnamen | ...
  entitas_id      text,
  data_lama       jsonb,
  data_baru       jsonb,
  ip_address      inet,
  user_agent      text,
  created_at      timestamptz default now()
);

create index idx_audit_user   on audit_log(user_id, created_at desc);
create index idx_audit_action on audit_log(aksi, created_at desc);

-- =============== HELPERS ===============

-- Auto-update updated_at
create or replace function set_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger trg_profiles_updated  before update on profiles  for each row execute function set_updated_at();
create trigger trg_anggota_updated   before update on anggota   for each row execute function set_updated_at();
create trigger trg_berita_updated    before update on berita    for each row execute function set_updated_at();
create trigger trg_turnamen_updated  before update on turnamen  for each row execute function set_updated_at();
create trigger trg_pengcab_updated   before update on pengcab   for each row execute function set_updated_at();

-- Auto nomor_anggota generator (ORADO-JBR-YYYY-XXXX)
create or replace function generate_nomor_anggota() returns trigger as $$
declare
  next_seq int;
  year_now text;
begin
  if new.nomor_anggota is not null then return new; end if;
  year_now := to_char(now(), 'YYYY');
  select coalesce(max(substring(nomor_anggota from 'ORADO-JBR-' || year_now || '-(\d+)')::int), 0) + 1
    into next_seq from anggota where nomor_anggota like 'ORADO-JBR-' || year_now || '-%';
  new.nomor_anggota := 'ORADO-JBR-' || year_now || '-' || lpad(next_seq::text, 4, '0');
  return new;
end;
$$ language plpgsql;

create trigger trg_nomor_anggota
  before insert on anggota
  for each row
  when (new.status in ('approved', 'active'))
  execute function generate_nomor_anggota();
