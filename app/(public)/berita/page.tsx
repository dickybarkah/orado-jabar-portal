import { PageHeader } from "@/components/public/PageHeader";

export const metadata = { title: "Berita & Pengumuman" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Berita" title="Berita & Pengumuman" subtitle="Update prestasi, kegiatan, edukasi, dan pengumuman resmi" />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-lg border border-dashed border-[var(--orado-navy)]/20 bg-white p-12 text-center">
          <p className="text-sm text-[var(--orado-charcoal)]/60">
            Halaman <strong>Berita & Pengumuman</strong> akan dibuild di sprint berikutnya.
          </p>
        </div>
      </section>
    </>
  );
}
