import Link from "next/link";
import { site, NAV_PUBLIC } from "@/lib/site";
import { MegaMendungDivider } from "./MegaMendung";

export function Header() {
  // ID date — formal masthead style
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 bg-[var(--orado-ivory)]">
      {/* Top metadata strip — date / location / affiliation (institutional masthead) */}
      <div className="bg-[var(--orado-navy)] text-[var(--orado-ivory)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-1.5 text-[11px] tracking-wider">
          <span className="font-mono uppercase opacity-80">{today}</span>
          <span className="hidden font-mono uppercase opacity-80 md:block">
            Tatar Sunda · Pengurus Provinsi Jawa Barat
          </span>
          <span className="font-mono uppercase opacity-80">
            <span className="hidden sm:inline">Affiliated with </span>PB ORADO
          </span>
        </div>
      </div>

      {/* Masthead — newspaper-style logotype */}
      <div className="border-b-[3px] border-[var(--orado-navy)] bg-[var(--orado-ivory)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
          <Link href="/" className="block">
            <div className="font-display text-[32px] font-black uppercase leading-none tracking-tight text-[var(--orado-navy)] md:text-[40px]">
              ORADO<span className="text-[var(--orado-gold)]">·</span>JABAR
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--orado-charcoal)]/70">
              Olahraga Domino Indonesia — Jawa Barat
            </div>
          </Link>

          <Link
            href="/pendaftaran"
            className="hidden items-center gap-2 border-2 border-[var(--orado-emerald)] bg-[var(--orado-emerald)] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[var(--orado-ivory)] transition hover:bg-[var(--orado-navy)] hover:border-[var(--orado-navy)] md:inline-flex"
          >
            <span className="font-mono text-[var(--orado-gold)]">→</span>
            Daftar Atlet
          </Link>
        </div>

        {/* Mega Mendung accent — sub-divider before nav */}
        <MegaMendungDivider color="var(--orado-gold)" className="opacity-50" />
      </div>

      {/* Nav — full-width institutional menu, NO standard menu dividers */}
      <nav className="bg-[var(--orado-ivory)]">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-1 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--orado-charcoal)]">
            {NAV_PUBLIC.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative inline-flex items-baseline gap-2 py-1 transition hover:text-[var(--orado-emerald)]"
              >
                <span className="font-mono text-[10px] text-[var(--orado-gold)] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-bold">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-px bg-[var(--orado-navy)]/15" />
      </nav>
    </header>
  );
}
