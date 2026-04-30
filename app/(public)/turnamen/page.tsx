import { PageHeader } from "@/components/public/PageHeader";

export const metadata = { title: "Jadwal Turnamen" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Turnamen" title="Jadwal Turnamen" subtitle="Turnamen mendatang dan arsip hasil pertandingan" />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-lg border border-dashed border-[var(--orado-navy)]/20 bg-white p-12 text-center">
          <p className="text-sm text-[var(--orado-charcoal)]/60">
            Halaman <strong>Jadwal Turnamen</strong> akan dibuild di sprint berikutnya.
          </p>
        </div>
      </section>
    </>
  );
}
