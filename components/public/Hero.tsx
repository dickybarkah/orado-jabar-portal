import Link from "next/link";

/**
 * Hero — minimal modern. Reserve clean stage for 3D Domino Cascade (BRD §9.4).
 * No clutter. Eyes go to: tagline → 3D area → single CTA.
 */
export function Hero() {
  return (
    <section className="bg-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1280px] px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Eyebrow */}
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
          Pengprov ORADO · Jawa Barat
        </div>

        {/* Big headline */}
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.5vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.02em] text-[var(--orado-navy)]">
          Memintarkan Jawa Barat,{" "}
          <span className="font-display italic font-medium text-[var(--orado-gold)]">
            mendunia dari Tatar Sunda.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--orado-charcoal)]/75 md:text-xl">
          Domino sebagai mind sport profesional — setara catur, dibina dengan standar tinggi.
        </p>

        {/* CTA */}
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

        {/* 3D stage placeholder — large clean canvas reserved for Domino Cascade */}
        <div className="mt-20 md:mt-28">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl bg-[var(--orado-navy)]">
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--orado-ivory) 1px, transparent 1px), linear-gradient(to bottom, var(--orado-ivory) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-3xl font-medium italic text-[var(--orado-gold)]">
                  Domino Cascade
                </div>
                <div className="mt-2 text-xs tracking-[0.25em] uppercase text-[var(--orado-ivory)]/45">
                  Animasi 3D · Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
