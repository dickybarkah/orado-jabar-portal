-- =============== RLS POLICIES ===============
-- Public-readable tables: pengcab, berita (published only), turnamen, galeri
-- Auth-required: profiles, anggota, audit_log

-- ===== Pengcab (public read; admin write) =====
alter table pengcab enable row level security;

create policy "pengcab_public_read"
  on pengcab for select
  using (true);

create policy "pengcab_admin_write"
  on pengcab for all
  using (auth.uid() in (
    select id from profiles where role in ('super_admin', 'sekretaris')
  ));

-- ===== Berita (public can read published; humas/admin manage) =====
alter table berita enable row level security;

create policy "berita_public_read_published"
  on berita for select
  using (status = 'published');

create policy "berita_authors_read_own"
  on berita for select
  using (auth.uid() = author_id);

create policy "berita_humas_admin_write"
  on berita for all
  using (auth.uid() in (
    select id from profiles where role in ('super_admin', 'humas', 'ketua', 'sekretaris')
  ));

-- ===== Turnamen (public read; admin write) =====
alter table turnamen enable row level security;

create policy "turnamen_public_read"
  on turnamen for select
  using (true);

create policy "turnamen_admin_write"
  on turnamen for all
  using (auth.uid() in (
    select id from profiles where role in ('super_admin', 'sekretaris', 'ketua')
  ));

-- ===== Galeri (public read; admin write) =====
alter table galeri_album enable row level security;

create policy "galeri_album_public_read"
  on galeri_album for select
  using (true);

create policy "galeri_album_admin_write"
  on galeri_album for all
  using (auth.uid() in (
    select id from profiles where role in ('super_admin', 'humas', 'sekretaris')
  ));

alter table galeri_media enable row level security;

create policy "galeri_media_public_read"
  on galeri_media for select
  using (true);

create policy "galeri_media_admin_write"
  on galeri_media for all
  using (auth.uid() in (
    select id from profiles where role in ('super_admin', 'humas', 'sekretaris')
  ));

-- ===== Profiles (user manage own; admin manage all) =====
alter table profiles enable row level security;

create policy "profiles_read_own"
  on profiles for select
  using (auth.uid() = id);

create policy "profiles_update_own"
  on profiles for update
  using (auth.uid() = id);

create policy "profiles_admin_all"
  on profiles for all
  using (auth.uid() in (
    select id from profiles where role = 'super_admin'
  ));

-- ===== Anggota (CROOT public insert; auth-only read; admin manage) =====
alter table anggota enable row level security;

create policy "anggota_public_insert"
  on anggota for insert
  with check (status = 'pending');                  -- baru daftar = pending

create policy "anggota_self_read"
  on anggota for select
  using (auth.uid() = user_id);

create policy "anggota_admin_read"
  on anggota for select
  using (auth.uid() in (
    select id from profiles where role in ('super_admin', 'ketua', 'sekretaris', 'humas')
  ));

create policy "anggota_pengcab_read_own"
  on anggota for select
  using (
    auth.uid() in (
      select id from profiles
      where role = 'pengcab' and pengcab_id = anggota.pengcab_id
    )
  );

create policy "anggota_admin_manage"
  on anggota for update
  using (auth.uid() in (
    select id from profiles where role in ('super_admin', 'sekretaris', 'ketua')
  ));

-- ===== Audit log (admin read only; trigger writes) =====
alter table audit_log enable row level security;

create policy "audit_log_admin_read"
  on audit_log for select
  using (auth.uid() in (
    select id from profiles where role in ('super_admin', 'ketua')
  ));
