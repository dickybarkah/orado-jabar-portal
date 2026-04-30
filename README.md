# Portal ORADO Jabar

Portal Resmi Pengurus Provinsi Olahraga Domino Indonesia – Jawa Barat.
Tagline: **"Memintarkan Jawa Barat, Mendunia dari Tatar Sunda"**

## Tech Stack

- **Frontend + Backend:** Next.js 16 (App Router) — full-stack
- **Database + Auth + Storage:** Supabase (PostgreSQL + Row Level Security)
- **Styling:** Tailwind CSS + shadcn/ui
- **Hosting:** Vercel
- **3D animation (planned):** Spline / Three.js

## Quick Start

```bash
npm install
cp .env.example .env.local        # isi dengan credentials Supabase
npm run dev                        # http://localhost:3000
```

## Project Structure

```
app/
├── (public)/         # Public site
│   ├── page.tsx              # Homepage
│   ├── tentang/              # Tentang Kami
│   ├── pengurus/             # Struktur organisasi
│   ├── pengcab/              # Daftar 27 pengcab
│   ├── berita/               # CMS berita
│   ├── turnamen/             # Jadwal turnamen
│   ├── galeri/               # Galeri foto/video
│   ├── pendaftaran/          # CROOT form
│   └── kontak/               # Kontak
└── (admin)/admin/    # Admin panel
    ├── login/                # Auth
    ├── dashboard/            # Per-role dashboard
    ├── croot/                # Approval workflow
    ├── anggota/              # Member management
    ├── berita/               # CMS
    ├── turnamen/             # Tournament CRUD
    ├── galeri/               # Album/media
    ├── users/                # User & role
    └── audit-log/            # Activity log

components/public/       # Public site components
components/admin/        # Admin panel components
components/ui/           # shadcn/ui

lib/
├── site.ts              # Site config & nav
├── supabase/            # Supabase clients (browser + server)
└── auth/permissions.ts  # RBAC matrix (BRD §7.2)

supabase/migrations/     # SQL schema files
```

## Roles (BRD §7.1)

| Role           | Description                                                |
|----------------|------------------------------------------------------------|
| super_admin    | Full system access                                         |
| ketua          | Approval final, lihat semua data                           |
| sekretaris     | Verifikasi CROOT, kelola anggota                           |
| humas          | Publish berita, kelola galeri                              |
| pengcab        | Akses terbatas data anggota pengcab masing-masing          |
| atlet          | Login, edit profil sendiri                                 |

## Sprint Progress

- [x] **Sprint 1 — Foundation** (Project setup, layout, public/admin skeleton)
- [ ] Sprint 2 — Public pages content + responsive
- [ ] Sprint 3 — Supabase auth + RBAC enforcement
- [ ] Sprint 4 — CMS Berita + WYSIWYG
- [ ] Sprint 5 — CROOT form + workflow approval
- [ ] Sprint 6 — Manajemen Anggota + nomor_anggota auto-gen
- [ ] Sprint 7 — Turnamen + Galeri
- [ ] Sprint 8 — 3D animation Domino Cascade
- [ ] Sprint 9 — Polish, mobile, SEO, UAT

## Deployment

Auto-deploy to Vercel on push to `main`.

```bash
git push origin main   # → Vercel webhook → auto build & deploy
```
