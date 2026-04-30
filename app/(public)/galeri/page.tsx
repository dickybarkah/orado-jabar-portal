import { PageHeader } from "@/components/public/PageHeader";

export const metadata = { title: "Galeri Foto & Video" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Galeri" title="Galeri Foto & Video" subtitle="Dokumentasi event & turnamen" />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-lg border border-dashed border-[var(--orado-navy)]/20 bg-white p-12 text-center">
          <p className="text-sm text-[var(--orado-charcoal)]/60">
            Halaman <strong>Galeri Foto & Video</strong> akan dibuild di sprint berikutnya.
          </p>
        </div>
      </section>
    </>
  );
}
