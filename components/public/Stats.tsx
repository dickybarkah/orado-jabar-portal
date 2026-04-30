/**
 * Stats — minimal modern. No card, no shadow. Just numbers + labels in a row.
 */

const ITEMS = [
  { value: "27",  label: "Pengurus Cabang" },
  { value: "0",   label: "Atlet Terdaftar" },
  { value: "0",   label: "Turnamen" },
  { value: "0",   label: "Medali Nasional" },
];

export function Stats() {
  return (
    <section className="bg-[var(--orado-ivory)] pb-24 md:pb-32">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {ITEMS.map((it) => (
            <div key={it.label}>
              <div className="font-display text-6xl font-medium tracking-tight text-[var(--orado-navy)] tabular-nums md:text-7xl">
                {it.value}
              </div>
              <div className="mt-3 text-sm text-[var(--orado-charcoal)]/65">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
