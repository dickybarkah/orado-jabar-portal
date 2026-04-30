import { PageHeader } from "@/components/public/PageHeader";

export const metadata = { title: "Tentang Kami" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Profil" title="Tentang Kami" subtitle="Visi, misi, sejarah cabang Pengprov ORADO Jawa Barat" />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-lg border border-dashed border-[var(--orado-navy)]/20 bg-white p-12 text-center">
          <p className="text-sm text-[var(--orado-charcoal)]/60">
            Halaman <strong>Tentang Kami</strong> akan dibuild di sprint berikutnya.
          </p>
        </div>
      </section>
    </>
  );
}
