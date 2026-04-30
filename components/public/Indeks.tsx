import Link from "next/link";

const ENTRIES = [
  { href: "/tentang",     judul: "Profil Cabang",          sub: "Visi, misi, sejarah, struktur organisasi." },
  { href: "/pengcab",     judul: "Pengurus Cabang",        sub: "27 pengcab kota & kabupaten Jawa Barat." },
  { href: "/berita",      judul: "Berita & Pengumuman",    sub: "Prestasi, kegiatan, edukasi, pengumuman resmi." },
  { href: "/turnamen",    judul: "Jadwal Turnamen",        sub: "Turnamen mendatang, hasil, arsip pertandingan." },
  { href: "/galeri",      judul: "Galeri",                 sub: "Dokumentasi event & kegiatan komunitas." },
  { href: "/pendaftaran", judul: "Pendaftaran Atlet",      sub: "Formulir CROOT — calon recruit baru." },
];

export function Indeks() {
  return (
    <section className="bg-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1280px] px-8 py-32 md:py-40">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
          Jelajahi
        </div>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-[var(--orado-navy)] md:text-5xl">
          Apa yang ingin kamu lihat?
        </h2>

        <div className="mt-16 grid gap-px bg-[var(--orado-navy)]/10 md:grid-cols-2">
          {ENTRIES.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="group flex items-baseline justify-between gap-6 bg-[var(--orado-ivory)] px-6 py-8 transition hover:bg-white"
            >
              <div>
                <div className="font-display text-2xl font-medium text-[var(--orado-navy)] transition group-hover:text-[var(--orado-emerald)]">
                  {e.judul}
                </div>
                <div className="mt-2 text-sm text-[var(--orado-charcoal)]/60">
                  {e.sub}
                </div>
              </div>
              <span aria-hidden="true" className="text-xl text-[var(--orado-charcoal)]/40 transition group-hover:translate-x-1 group-hover:text-[var(--orado-emerald)]">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
