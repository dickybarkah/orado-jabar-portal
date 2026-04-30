/**
 * Numbered section indicator — editorial / institutional document feel.
 * §01 — TENTANG
 *       Dengan garis ornamen di sampingnya.
 */

export function SectionLabel({
  number,
  title,
  align = "left",
}: {
  number: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-3 text-[var(--orado-gold)] ${align === "center" ? "justify-center" : ""}`}>
        <span aria-hidden="true" className="h-px w-10 bg-[var(--orado-gold)]" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase">§{number}</span>
        <span aria-hidden="true" className="h-px w-10 bg-[var(--orado-gold)]" />
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-[var(--orado-navy)] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
