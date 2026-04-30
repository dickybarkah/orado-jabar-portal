/**
 * Sambutan — pure quote, minimal. Big serif text-centered.
 */
export function Sambutan() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-8 py-32 text-center md:py-40">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
          Sambutan Ketua
        </div>

        <blockquote className="mt-10 font-display text-2xl font-medium leading-relaxed tracking-tight text-[var(--orado-navy)] md:text-[32px] md:leading-[1.4]">
          Domino bukan sekadar permainan. Ia adalah seni berstrategi, latihan ketelitian, dan kebanggaan komunitas — sebagaimana catur di mata dunia.
        </blockquote>

        <div className="mt-12 text-sm text-[var(--orado-charcoal)]/65">
          [Nama Ketua] · Ketua Pengprov ORADO Jabar
        </div>
      </div>
    </section>
  );
}
