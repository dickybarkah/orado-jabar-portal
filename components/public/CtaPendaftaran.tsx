import Link from "next/link";
import { MegaMendungDivider } from "./MegaMendung";

/**
 * CTA Pendaftaran — block-color asymmetric, NOT center hero clone.
 * Layered design: emerald slab + gold accent + offset text block.
 */
export function CtaPendaftaran() {
  return (
    <section className="bg-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="relative bg-[var(--orado-emerald)] text-[var(--orado-ivory)]">
          {/* Top Mega Mendung accent */}
          <div className="absolute left-0 right-0 top-0">
            <MegaMendungDivider color="var(--orado-gold)" />
          </div>

          {/* Decorative gold offset bar */}
          <div className="absolute -right-3 top-3 hidden h-[calc(100%-24px)] w-3 bg-[var(--orado-gold)] md:block" />

          <div className="grid gap-8 px-8 py-16 md:grid-cols-12 md:gap-12 md:px-14 md:py-20">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--orado-gold)]">
                <span aria-hidden="true" className="h-px w-8 bg-[var(--orado-gold)]" />
                Open Registration · Tahun 2026
              </span>

              <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] md:text-5xl lg:text-6xl">
                Bergabunglah dengan komunitas <em className="text-[var(--orado-gold)] not-italic font-medium">domino resmi</em> Jawa Barat.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--orado-ivory)]/85">
                Pendaftaran online (CROOT) terbuka untuk seluruh atlet domino se-Jawa Barat. Proses cepat, transparan, tercatat resmi di database Pengprov, dan tervalidasi langsung oleh Sekretariat & Ketua.
              </p>
            </div>

            <div className="flex flex-col items-start justify-end md:col-span-4 md:items-end md:justify-center">
              <Link
                href="/pendaftaran"
                className="group inline-flex items-center gap-3 bg-[var(--orado-ivory)] px-7 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--orado-navy)] transition hover:bg-[var(--orado-gold)]"
              >
                Mulai Pendaftaran
                <span aria-hidden="true" className="text-[var(--orado-emerald)] group-hover:text-[var(--orado-navy)]">
                  →
                </span>
              </Link>

              <div className="mt-4 max-w-[260px] text-right font-mono text-[10px] leading-relaxed uppercase tracking-[0.2em] text-[var(--orado-ivory)]/60">
                Persyaratan: KTP, foto formal, kategori atlet (junior/senior/master)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
