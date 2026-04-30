import { SectionLabel } from "./SectionLabel";

/**
 * Sambutan Ketua — editorial layout with portrait placeholder + quote + signature.
 * Asymmetric grid (2:3 ratio), institutional opening letter feel.
 */
export function Sambutan() {
  return (
    <section className="relative bg-[var(--orado-ivory)]">
      {/* Decorative side rule */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--orado-navy)]/10 lg:block" />

      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <SectionLabel number="01" title="Sambutan Ketua Pengprov" />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — Portrait placeholder + meta */}
          <aside className="lg:col-span-4">
            <div className="relative">
              {/* Portrait placeholder — bukan circle avatar default */}
              <div className="relative aspect-[3/4] w-full max-w-[320px] bg-[var(--orado-navy)]">
                <div className="absolute inset-2 border border-[var(--orado-gold)]/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-7xl font-black text-[var(--orado-gold)]/80">K</div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--orado-ivory)]/60">
                      Foto Ketua
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 max-w-[320px]">
                <div className="font-display text-lg font-bold text-[var(--orado-navy)]">
                  [Nama Ketua]
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--orado-charcoal)]/70">
                  Ketua Pengprov ORADO Jabar · Periode 2024–2028
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT — Quote */}
          <div className="lg:col-span-8">
            {/* Pull-quote opening mark */}
            <div className="font-display text-[120px] font-black leading-[0.6] text-[var(--orado-gold)]/30 select-none">
              &ldquo;
            </div>

            <blockquote className="-mt-12 font-display text-2xl leading-relaxed text-[var(--orado-charcoal)] md:text-3xl md:leading-[1.4]">
              Domino bukan sekadar permainan. Ia adalah <em className="text-[var(--orado-emerald)] not-italic font-medium">seni berstrategi</em>, latihan ketelitian, dan kebanggaan komunitas — sebagaimana catur di mata dunia. Dengan dukungan 27 pengurus cabang se-Jawa Barat, kami berkomitmen menjadikan domino sebagai mind sport profesional yang membawa nama harum Tatar Sunda hingga ke kancah nasional dan internasional.
            </blockquote>

            <div className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-[var(--orado-navy)]/20" />
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--orado-charcoal)]/70">
                Bandung, {new Date().toLocaleDateString("id-ID", { month: "long", year: "numeric" })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
