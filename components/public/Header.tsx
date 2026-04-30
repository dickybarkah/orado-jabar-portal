import Link from "next/link";
import { site, NAV_PUBLIC } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--orado-navy)]/10 bg-[var(--orado-ivory)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--orado-navy)] text-[var(--orado-gold)] font-display font-bold">
            OJ
          </div>
          <div className="leading-tight">
            <div className="font-bold text-[var(--orado-navy)]">{site.name}</div>
            <div className="text-xs text-[var(--orado-charcoal)]/70">Pengprov Jawa Barat</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_PUBLIC.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--orado-charcoal)] transition hover:text-[var(--orado-emerald)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/pendaftaran"
          className="inline-flex h-9 items-center justify-center rounded-md bg-[var(--orado-emerald)] px-4 text-sm font-semibold text-[var(--orado-ivory)] transition hover:bg-[var(--orado-navy)]"
        >
          Daftar Atlet
        </Link>
      </div>
    </header>
  );
}
