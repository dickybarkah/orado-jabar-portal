import Link from "next/link";
import { site, NAV_PUBLIC } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1280px] px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight text-[var(--orado-navy)]">
              ORADO<span className="text-[var(--orado-gold)]">.</span>Jabar
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--orado-charcoal)]/70">
              Pengurus Provinsi Olahraga Domino Indonesia — Jawa Barat. Mind sport profesional, setara catur.
            </p>
            <p className="mt-3 font-display italic text-sm text-[var(--orado-gold)]">
              "{site.tagline}"
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--orado-charcoal)]/55">
              Halaman
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_PUBLIC.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[var(--orado-charcoal)]/75 transition hover:text-[var(--orado-navy)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--orado-charcoal)]/55">
              Kontak
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--orado-charcoal)]/75">
              <li>{site.alamat}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[var(--orado-navy)]">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orado-navy)]">
                  Instagram @orado.jabar
                </a>
              </li>
              <li>
                <a href="https://orado.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orado-navy)]">
                  Afiliasi: PB ORADO
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--orado-charcoal)]/55">
          <span>© {year} Pengprov ORADO Jawa Barat</span>
          <span>Dibangun oleh Katalis Digital</span>
        </div>
      </div>
    </footer>
  );
}
