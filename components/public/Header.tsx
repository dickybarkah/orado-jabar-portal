import Link from "next/link";
import { NAV_PUBLIC } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--orado-ivory)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-8 py-5">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-[var(--orado-navy)]">
          ORADO<span className="text-[var(--orado-gold)]">.</span>Jabar
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_PUBLIC.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--orado-charcoal)]/75 transition hover:text-[var(--orado-navy)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/pendaftaran"
          className="inline-flex h-9 items-center rounded-full bg-[var(--orado-navy)] px-5 text-sm font-medium text-[var(--orado-ivory)] transition hover:bg-[var(--orado-emerald)]"
        >
          Daftar
        </Link>
      </div>
    </header>
  );
}
