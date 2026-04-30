import { PageHeader } from "@/components/public/PageHeader";

export const metadata = { title: "Struktur Organisasi" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Pengurus" title="Struktur Organisasi" subtitle="Daftar pengurus inti Pengprov ORADO Jabar" />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-lg border border-dashed border-[var(--orado-navy)]/20 bg-white p-12 text-center">
          <p className="text-sm text-[var(--orado-charcoal)]/60">
            Halaman <strong>Struktur Organisasi</strong> akan dibuild di sprint berikutnya.
          </p>
        </div>
      </section>
    </>
  );
}
