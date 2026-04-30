/**
 * Statistik Cabang — scoreboard style (BRD §6.1 FR-PUB-001).
 * Format ranking turnamen catur: monospace tabular numbers, no shadow cards.
 */

const ITEMS = [
  { label: "Atlet Terdaftar",            value: "0",   unit: "orang",       sub: "data per hari ini" },
  { label: "Pengurus Cabang Aktif",      value: "27",  unit: "kota / kab",  sub: "se-Jawa Barat" },
  { label: "Turnamen Diselenggarakan",   value: "0",   unit: "event",       sub: "sejak 2024" },
  { label: "Medali Tingkat Nasional",    value: "0",   unit: "medali",      sub: "akan diisi" },
];

export function Stats() {
  return (
    <section className="border-y-[3px] border-[var(--orado-navy)] bg-[var(--orado-navy)] text-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-14">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-gold)]">
            ↳ Scoreboard Cabang
          </span>
          <span className="h-px flex-1 bg-[var(--orado-gold)]/30" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-ivory)]/50">
            Per {new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })}
          </span>
        </div>

        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <div key={it.label} className="grid grid-cols-[auto_1fr] gap-4">
              <div className="font-mono text-xs tabular-nums text-[var(--orado-gold)]/80">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[56px] font-black leading-none tabular-nums">
                    {it.value}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--orado-gold)]/80">
                    {it.unit}
                  </span>
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--orado-ivory)]">
                  {it.label}
                </div>
                <div className="mt-1 text-xs text-[var(--orado-ivory)]/55">
                  {it.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
