-- =============== FIX RLS RECURSION ===============
-- Issue: policies that query profiles table from within profiles policy → infinite recursion.
-- Fix: use SECURITY DEFINER function to fetch role bypassing RLS.

-- 1. Helper function: get current user's role (bypasses RLS via SECURITY DEFINER)
create or replace function public.current_user_role() returns text
  language sql
  security definer
  set search_path = public
  stable
as $$
  select role::text from profiles where id = auth.uid()
$$;

create or replace function public.current_user_pengcab_id() returns uuid
  language sql
  security definer
  set search_path = public
  stable
as $$
  select pengcab_id from profiles where id = auth.uid()
$$;

-- 2. Drop ALL existing policies & recreate using helper functions
drop policy if exists "pengcab_admin_write"           on pengcab;
drop policy if exists "berita_humas_admin_write"      on berita;
drop policy if exists "berita_authors_read_own"       on berita;
drop policy if exists "turnamen_admin_write"          on turnamen;
drop policy if exists "galeri_album_admin_write"      on galeri_album;
drop policy if exists "galeri_media_admin_write"      on galeri_media;
drop policy if exists "profiles_admin_all"            on profiles;
drop policy if exists "anggota_admin_read"            on anggota;
drop policy if exists "anggota_pengcab_read_own"      on anggota;
drop policy if exists "anggota_admin_manage"          on anggota;
drop policy if exists "audit_log_admin_read"          on audit_log;

-- 3. Recreate using helper function (no recursion)
create policy "pengcab_admin_write"
  on pengcab for all
  using (current_user_role() in ('super_admin', 'sekretaris'));

create policy "berita_humas_admin_write"
  on berita for all
  using (current_user_role() in ('super_admin', 'humas', 'ketua', 'sekretaris'));

create policy "berita_authors_read_own"
  on berita for select
  using (auth.uid() = author_id);

create policy "turnamen_admin_write"
  on turnamen for all
  using (current_user_role() in ('super_admin', 'sekretaris', 'ketua'));

create policy "galeri_album_admin_write"
  on galeri_album for all
  using (current_user_role() in ('super_admin', 'humas', 'sekretaris'));

create policy "galeri_media_admin_write"
  on galeri_media for all
  using (current_user_role() in ('super_admin', 'humas', 'sekretaris'));

create policy "profiles_admin_all"
  on profiles for all
  using (current_user_role() = 'super_admin');

create policy "anggota_admin_read"
  on anggota for select
  using (current_user_role() in ('super_admin', 'ketua', 'sekretaris', 'humas'));

create policy "anggota_pengcab_read_own"
  on anggota for select
  using (
    current_user_role() = 'pengcab'
    and current_user_pengcab_id() = anggota.pengcab_id
  );

create policy "anggota_admin_manage"
  on anggota for update
  using (current_user_role() in ('super_admin', 'sekretaris', 'ketua'));

create policy "audit_log_admin_read"
  on audit_log for select
  using (current_user_role() in ('super_admin', 'ketua'));
