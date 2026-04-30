export function Sambutan() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gold-tint background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fbf8f0] via-[#f5efde] to-[#fbf8f0]" />
      {/* Subtle decorative quote mark */}
      <div className="pointer-events-none absolute -left-12 top-12 select-none font-display text-[280px] font-medium leading-none text-[var(--orado-gold)]/8 md:text-[400px]">
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-3xl px-8 py-32 text-center md:py-40">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
          Sambutan Ketua
        </div>

        <blockquote className="mt-10 font-display text-[28px] font-medium leading-relaxed tracking-tight text-[var(--orado-navy)] md:text-[36px] md:leading-[1.4]">
          Domino bukan sekadar permainan. Ia adalah seni berstrategi, latihan ketelitian, dan kebanggaan komunitas — sebagaimana <em className="text-[var(--orado-gold)] not-italic font-medium">catur</em> di mata dunia.
        </blockquote>

        <div className="mt-12 inline-flex items-center gap-3 text-sm text-[var(--orado-charcoal)]/65">
          <span className="h-px w-8 bg-[var(--orado-gold)]" />
          [Nama Ketua] · Ketua Pengprov ORADO Jabar
          <span className="h-px w-8 bg-[var(--orado-gold)]" />
        </div>
      </div>
    </section>
  );
}
