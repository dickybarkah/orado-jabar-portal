import Link from "next/link";
import { Check } from "lucide-react";

const BENEFITS = [
  "Tercatat resmi di database Pengprov",
  "Akses turnamen tingkat provinsi & nasional",
  "Penomoran anggota: ORADO-JBR-YYYY-XXXX",
  "Validasi oleh Sekretariat & Ketua",
];

export function CtaPendaftaran() {
  return (
    <section className="bg-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1280px] px-8 pb-32">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-[var(--orado-navy)]/15 md:grid-cols-12">
          {/* Left — heading + benefits */}
          <div className="bg-[var(--orado-navy)] px-10 py-16 text-[var(--orado-ivory)] md:col-span-7 md:px-14 md:py-20">
            <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-gold)]">
              Open Registration · 2026
            </div>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Bergabunglah dengan komunitas{" "}
              <span className="italic text-[var(--orado-gold)]">domino resmi</span>{" "}
              Jawa Barat.
            </h2>

            <ul className="mt-10 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base text-[var(--orado-ivory)]/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--orado-gold)]" strokeWidth={2.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — CTA action */}
          <div className="flex flex-col justify-center gap-8 bg-[#0c2f48] p-10 text-[var(--orado-ivory)] md:col-span-5 md:p-14">
            <p className="text-base leading-relaxed text-[var(--orado-ivory)]/75">
              Pendaftaran online untuk atlet domino se-Jawa Barat — proses verifikasi langsung oleh Sekretariat &amp; Ketua Pengprov.
            </p>

            <div>
              <Link
                href="/pendaftaran"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--orado-gold)] px-8 text-sm font-medium text-[var(--orado-navy)] transition hover:bg-[var(--orado-ivory)]"
              >
                Mulai pendaftaran →
              </Link>
              <div className="mt-3 text-center text-xs text-[var(--orado-ivory)]/55">
                Gratis · Estimasi 3 menit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
