import Link from "next/link";
import { site, NAV_PUBLIC } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1280px] px-8 py-24">

        {/* Row 1 — Brand statement, large */}
        <div className="border-b border-[var(--orado-navy)]/10 pb-16">
          <Link href="/" className="font-display text-3xl font-bold tracking-tight text-[var(--orado-navy)] md:text-4xl">
            ORADO<span className="text-[var(--orado-gold)]">.</span>Jabar
          </Link>
          <p className="mt-6 max-w-2xl font-display text-2xl italic font-medium text-[var(--orado-charcoal)] md:text-3xl">
            "{site.tagline}"
          </p>
          <p className="mt-4 max-w-xl text-sm text-[var(--orado-charcoal)]/65">
            Pengurus Provinsi Olahraga Domino Indonesia — Jawa Barat. Mind sport profesional, setara catur.
          </p>
        </div>

        {/* Row 2 — Three groups: Halaman / Kontak / Afiliasi */}
        <div className="grid gap-12 border-b border-[var(--orado-navy)]/10 py-16 md:grid-cols-3">
          <div>
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--orado-charcoal)]/55">
              Halaman
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_PUBLIC.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[var(--orado-charcoal)]/80 transition hover:text-[var(--orado-navy)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--orado-charcoal)]/55">
              Kontak
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[var(--orado-charcoal)]/80">
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
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orado-navy)]">
                  WhatsApp +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--orado-charcoal)]/55">
              Afiliasi
            </div>
            <div className="mt-5">
              <a href="https://orado.co.id" target="_blank" rel="noopener noreferrer" className="font-display text-xl font-medium text-[var(--orado-navy)] transition hover:text-[var(--orado-emerald)]">
                PB ORADO
              </a>
              <p className="mt-2 text-sm text-[var(--orado-charcoal)]/65">
                Pengurus Besar Olahraga Domino Indonesia
              </p>
              <a href="https://orado.co.id" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs tracking-widest uppercase text-[var(--orado-gold)] hover:text-[var(--orado-emerald)]">
                orado.co.id →
              </a>
            </div>
          </div>
        </div>

        {/* Row 3 — Credit */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-8 text-xs text-[var(--orado-charcoal)]/55">
          <span>© {year} Pengprov ORADO Jawa Barat · Hak Cipta Dilindungi</span>
          <span>
            Dibangun oleh{" "}
            <a href="#" className="font-medium text-[var(--orado-charcoal)]/70 hover:text-[var(--orado-navy)]">
              Katalis Digital
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
