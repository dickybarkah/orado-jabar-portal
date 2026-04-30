export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-[var(--orado-navy)] py-16 text-[var(--orado-ivory)]">
      <div className="mx-auto max-w-7xl px-6">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--orado-gold)]">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl opacity-85">{subtitle}</p>}
      </div>
    </section>
  );
}
