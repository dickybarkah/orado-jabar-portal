import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

/**
 * Indeks Halaman — table-of-contents / institutional index style.
 * Bukan 3-card-grid template. Pakai layout daftar isi resmi.
 */

const ENTRIES = [
  { num: "I",    href: "/tentang",     judul: "Profil Cabang",          deskripsi: "Visi, misi, sejarah & struktur organisasi Pengprov Jawa Barat." },
  { num: "II",   href: "/pengcab",     judul: "Pengurus Cabang",        deskripsi: "27 pengcab kota/kabupaten dengan kontak masing-masing." },
  { num: "III",  href: "/berita",      judul: "Berita & Pengumuman",    deskripsi: "Prestasi, kegiatan, edukasi, dan pengumuman resmi cabang." },
  { num: "IV",   href: "/turnamen",    judul: "Jadwal Turnamen",        deskripsi: "Turnamen mendatang, hasil, dan arsip pertandingan." },
  { num: "V",    href: "/galeri",      judul: "Galeri Foto & Video",    deskripsi: "Dokumentasi event, turnamen, dan kegiatan komunitas." },
  { num: "VI",   href: "/pendaftaran", judul: "Pendaftaran Atlet",      deskripsi: "Formulir CROOT — calon recruit atlet ORADO Jabar." },
];

export function Indeks() {
  return (
    <section className="bg-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <SectionLabel number="02" title="Indeks Halaman" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--orado-charcoal)]/75">
          Daftar isi portal resmi ORADO Jawa Barat — disusun dalam urutan editorial dari profil hingga pendaftaran atlet.
        </p>

        <ol className="mt-16 divide-y divide-[var(--orado-navy)]/15">
          {ENTRIES.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-8 gap-y-2 py-7 transition hover:bg-[var(--orado-gold)]/5 md:grid-cols-[80px_240px_1fr_auto]"
              >
                <span className="font-mono text-sm tracking-widest text-[var(--orado-gold)]">
                  {e.num}.
                </span>
                <h3 className="font-display text-2xl font-bold text-[var(--orado-navy)] transition group-hover:text-[var(--orado-emerald)] md:text-3xl">
                  {e.judul}
                </h3>
                <p className="col-span-3 max-w-2xl text-sm leading-relaxed text-[var(--orado-charcoal)]/75 md:col-span-1">
                  {e.deskripsi}
                </p>
                <span aria-hidden="true" className="font-mono text-base text-[var(--orado-navy)] transition group-hover:translate-x-1 group-hover:text-[var(--orado-emerald)]">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
