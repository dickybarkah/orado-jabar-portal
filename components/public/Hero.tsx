import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Hero — placeholder for 3D Domino Cascade (BRD §9.4).
 * While the 3D scene is in development, render a CREDIBLE static composition:
 * SVG domino cards that visually anticipate the cascade — not a generic gradient.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--orado-navy)] text-[var(--orado-ivory)]">
      {/* SVG decorative dominoes — anticipating the 3D Cascade */}
      <DominoBackdrop />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
        {/* LEFT — title, tagline, CTA */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--orado-gold)]">
            <span aria-hidden="true" className="h-px w-12 bg-[var(--orado-gold)]" />
            Mind Sport · Sejak Dini
          </div>

          <h1 className="mt-6 font-display text-[44px] font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            Memintarkan
            <br />
            <span className="italic font-medium text-[var(--orado-gold)]">Jawa Barat,</span>
            <br />
            Mendunia dari
            <br />
            <span className="text-[var(--orado-emerald)]">Tatar Sunda.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--orado-ivory)]/80 md:text-lg">
            Pengurus Provinsi Olahraga Domino Indonesia — Jawa Barat. Pusat pembinaan, kompetisi, dan pengembangan domino sebagai mind sport profesional, setara catur.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/pendaftaran"
              className="group inline-flex items-center gap-3 bg-[var(--orado-emerald)] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--orado-ivory)] transition hover:bg-[var(--orado-gold)] hover:text-[var(--orado-navy)]"
            >
              <span className="text-[var(--orado-gold)] transition group-hover:text-[var(--orado-navy)]">§</span>
              Daftar Atlet (CROOT)
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/turnamen"
              className="inline-flex items-center gap-3 border-b border-[var(--orado-gold)]/40 px-1 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--orado-gold)] transition hover:text-[var(--orado-ivory)] hover:border-[var(--orado-ivory)]"
            >
              Lihat Turnamen
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT — credentials block, scoreboard-like */}
        <aside className="lg:col-span-5">
          <div className="border border-[var(--orado-gold)]/30 bg-[var(--orado-navy)]/40 backdrop-blur-sm">
            <div className="border-b border-[var(--orado-gold)]/20 bg-[var(--orado-navy)] px-6 py-3">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-gold)]">
                <span>Profil Cabang</span>
                <span>Edisi MMXXVI</span>
              </div>
            </div>

            <dl className="divide-y divide-[var(--orado-gold)]/15 px-6 py-2">
              <DataRow label="Pendirian" value="2024" />
              <DataRow label="Pengurus Cabang" value="27 Kota / Kabupaten" />
              <DataRow label="Kategori" value="Junior · Senior · Master" />
              <DataRow label="Sekretariat" value="Kota Bandung" />
              <DataRow label="Status" value="Aktif" valueClass="text-[var(--orado-emerald)]" />
            </dl>

            <div className="border-t border-[var(--orado-gold)]/20 bg-[var(--orado-navy)] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-ivory)]/60">
              "{site.tagline}"
            </div>
          </div>

          {/* Footnote with PB ORADO affiliation */}
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--orado-ivory)]/50">
            * Animasi Domino Cascade akan dimuat di sprint berikutnya
          </p>
        </aside>
      </div>
    </section>
  );
}

function DataRow({ label, value, valueClass = "" }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="grid grid-cols-[max-content_1fr] items-baseline gap-6 py-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--orado-ivory)]/60">{label}</dt>
      <dd className={`text-right font-display text-base font-medium ${valueClass || "text-[var(--orado-ivory)]"}`}>
        {value}
      </dd>
    </div>
  );
}

/**
 * Static SVG dominoes scattered as background — placeholder for the 3D cascade.
 * Looks intentional, not generic gradient.
 */
function DominoBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]">
      <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <g fill="var(--orado-gold)">
          {/* Group of dominoes scattered, varying sizes & rotations */}
          <Domino x={150} y={150} rot={-12} scale={1} />
          <Domino x={350} y={80} rot={8} scale={0.9} />
          <Domino x={920} y={120} rot={-25} scale={1.1} />
          <Domino x={1080} y={300} rot={15} scale={0.8} />
          <Domino x={1000} y={550} rot={-8} scale={1.2} />
          <Domino x={840} y={650} rot={22} scale={0.95} />
          <Domino x={200} y={620} rot={-18} scale={1.05} />
          <Domino x={60} y={440} rot={5} scale={0.85} />
          <Domino x={520} y={680} rot={-30} scale={0.9} />
        </g>
      </svg>
    </div>
  );
}

function Domino({ x, y, rot, scale }: { x: number; y: number; rot: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      {/* Outer body */}
      <rect x={-30} y={-60} width={60} height={120} rx={6} stroke="var(--orado-gold)" strokeWidth={1.5} fill="none" />
      {/* Center divider */}
      <line x1={-30} y1={0} x2={30} y2={0} stroke="var(--orado-gold)" strokeWidth={1.5} />
      {/* Pips top half */}
      <circle cx={-12} cy={-40} r={3} />
      <circle cx={12} cy={-40} r={3} />
      <circle cx={-12} cy={-20} r={3} />
      <circle cx={12} cy={-20} r={3} />
      {/* Pips bottom half */}
      <circle cx={0} cy={20} r={3} />
      <circle cx={-12} cy={40} r={3} />
      <circle cx={12} cy={40} r={3} />
    </g>
  );
}
