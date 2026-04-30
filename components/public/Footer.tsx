import Link from "next/link";
import { site, NAV_PUBLIC } from "@/lib/site";
import { MegaMendungDivider } from "./MegaMendung";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--orado-navy)] text-[var(--orado-ivory)]">
      {/* Top Mega Mendung divider */}
      <MegaMendungDivider color="var(--orado-gold)" className="opacity-50" />

      {/* Masthead — repeating header style for footer (newspaper convention) */}
      <div className="border-b border-[var(--orado-gold)]/15">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-6 px-6 py-12">
          <div>
            <div className="font-display text-3xl font-black uppercase leading-none tracking-tight md:text-4xl">
              ORADO<span className="text-[var(--orado-gold)]">·</span>JABAR
            </div>
            <div className="mt-2 max-w-md font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--orado-ivory)]/70">
              Pengurus Provinsi Olahraga Domino Indonesia — Jawa Barat
            </div>
          </div>

          <div className="text-right">
            <div className="font-display italic text-2xl text-[var(--orado-gold)]">
              "{site.tagline}"
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-ivory)]/55">
              Edisi MMXXVI · Tatar Sunda
            </div>
          </div>
        </div>
      </div>

      {/* Body — 12-col asymmetric grid: Sekretariat (5) | Indeks (4) | Afiliasi (3) */}
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-gold)]">
            Sekretariat Pengprov
          </h4>
          <address className="mt-5 not-italic">
            <div className="font-display text-base font-bold text-[var(--orado-ivory)]">
              {site.alamat}
            </div>
            <div className="mt-3 font-mono text-xs leading-relaxed uppercase tracking-[0.15em] text-[var(--orado-ivory)]/65">
              <div>Email · <a href={`mailto:${site.email}`} className="hover:text-[var(--orado-gold)]">{site.email}</a></div>
              <div className="mt-1">WhatsApp · <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orado-gold)]">+62 812-3456-7890</a></div>
              <div className="mt-1">Instagram · <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orado-gold)]">@orado.jabar</a></div>
            </div>
          </address>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-gold)]">
            Indeks Halaman
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {NAV_PUBLIC.map((item, i) => (
              <li key={item.href} className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] tabular-nums text-[var(--orado-gold)]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link href={item.href} className="text-[var(--orado-ivory)]/85 transition hover:text-[var(--orado-gold)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-gold)]">
            Afiliasi
          </h4>
          <div className="mt-5 border-l-2 border-[var(--orado-gold)]/40 pl-4">
            <div className="font-display text-base font-bold">PB ORADO</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--orado-ivory)]/60">
              Pengurus Besar Olahraga Domino Indonesia
            </div>
            <a href="https://orado.co.id" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--orado-gold)] hover:text-[var(--orado-ivory)]">
              orado.co.id →
            </a>
          </div>
        </div>
      </div>

      {/* Footer credit */}
      <div className="border-t border-[var(--orado-gold)]/15">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--orado-ivory)]/50">
          <span>© {year} Pengprov ORADO Jawa Barat · Hak Cipta Dilindungi</span>
          <span>Dibangun oleh Katalis Digital</span>
        </div>
      </div>
    </footer>
  );
}
