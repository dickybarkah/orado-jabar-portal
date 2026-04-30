const ITEMS = [
  { value: "27",  label: "Pengurus Cabang",     trend: "stable" as const, hint: "Aktif se-Jabar" },
  { value: "0",   label: "Atlet Terdaftar",     trend: "up" as const,     hint: "Mulai 2026" },
  { value: "0",   label: "Turnamen",            trend: "up" as const,     hint: "Tahun pertama" },
  { value: "0",   label: "Medali Nasional",     trend: "up" as const,     hint: "Target 2026" },
];

const TrendIcon = ({ t }: { t: "up" | "down" | "stable" }) => {
  if (t === "up")     return <span className="text-[var(--orado-emerald)]">↗</span>;
  if (t === "down")   return <span className="text-red-500">↘</span>;
  return <span className="text-[var(--orado-charcoal)]/45">→</span>;
};

export function Stats() {
  return (
    <section className="bg-[var(--orado-ivory)] pb-24 md:pb-32">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {ITEMS.map((it) => (
            <div key={it.label}>
              <div className="flex items-baseline gap-3">
                <div className="font-display text-6xl font-medium tracking-tight text-[var(--orado-navy)] tabular-nums md:text-7xl">
                  {it.value}
                </div>
                <div className="text-2xl">
                  <TrendIcon t={it.trend} />
                </div>
              </div>
              <div className="mt-3 text-sm font-medium text-[var(--orado-charcoal)]/85">
                {it.label}
              </div>
              <div className="mt-1 text-xs text-[var(--orado-charcoal)]/55">
                {it.hint}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
