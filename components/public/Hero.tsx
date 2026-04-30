import Link from "next/link";
import { DominoCascade } from "./DominoCascade";

export function Hero() {
  return (
    <section className="relative bg-[var(--orado-ivory)]">
      {/* A3 — Edition badge top-right */}
      <div className="absolute right-8 top-8 hidden md:block">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[var(--orado-charcoal)]/55">
          <span className="h-px w-8 bg-[var(--orado-gold)]" />
          Edisi 2026 · Vol. 01
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
          Pengprov ORADO · Jawa Barat
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6.2vw,6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--orado-navy)]">
          Memintarkan Jawa Barat,{" "}
          <span className="font-display italic font-medium text-[var(--orado-gold)]">
            mendunia dari Tatar Sunda.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--orado-charcoal)]/75 md:text-xl">
          Domino sebagai mind sport profesional — setara catur, dibina dengan standar tinggi.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/pendaftaran"
            className="inline-flex h-12 items-center rounded-full bg-[var(--orado-navy)] px-7 text-sm font-medium text-[var(--orado-ivory)] transition hover:bg-[var(--orado-emerald)]"
          >
            Daftar atlet
          </Link>
          <Link
            href="/turnamen"
            className="inline-flex h-12 items-center px-2 text-sm font-medium text-[var(--orado-navy)] transition hover:text-[var(--orado-emerald)]"
          >
            Lihat turnamen →
          </Link>
        </div>

        <div className="mt-20 md:mt-28">
          <DominoCascade />
        </div>
      </div>
    </section>
  );
}
