import { Compass, Target, History } from "lucide-react";

export const metadata = { title: "Tentang Kami" };

const MISI = [
  "Membina atlet domino Jabar dari junior, senior, hingga master level — terstruktur & terdokumentasi.",
  "Menyelenggarakan turnamen reguler tingkat provinsi dengan standar profesional.",
  "Mengangkat citra olahraga domino sebagai mind sport — setara catur, bukan permainan kasual.",
  "Membangun database anggota terpusat yang akurat, transparan, dan dapat dipertanggungjawabkan.",
  "Bekerjasama dengan PB ORADO Pusat dalam pelaporan dan sinkronisasi data nasional.",
];

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--orado-ivory)]">
        <div className="mx-auto max-w-[1280px] px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
            Profil Cabang
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,5.5vw,5rem)] font-medium leading-[1.04] tracking-tight text-[var(--orado-navy)]">
            Pengurus Provinsi Olahraga Domino Indonesia,{" "}
            <span className="italic text-[var(--orado-gold)]">Jawa Barat.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--orado-charcoal)]/75 md:text-xl">
            Cabang Jawa Barat dari PB ORADO — federasi resmi olahraga domino Indonesia. Kami membina atlet, menyelenggarakan turnamen, dan menjadikan Tatar Sunda sebagai pusat domino nasional.
          </p>
        </div>
      </section>

      {/* Visi */}
      <section className="border-t border-[var(--orado-navy)]/10">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <Compass className="h-7 w-7 text-[var(--orado-gold)]" strokeWidth={1.6} />
            <div className="mt-5 text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
              Visi
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-[var(--orado-navy)] md:text-4xl">
              Memintarkan Jawa Barat melalui olahraga domino sebagai mind sport profesional, dan membawa Tatar Sunda mendunia melalui prestasi atlet domino tingkat nasional dan internasional.
            </p>
          </div>
        </div>
      </section>

      {/* Misi */}
      <section className="border-t border-[var(--orado-navy)]/10 bg-[var(--orado-ivory)]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <Target className="h-7 w-7 text-[var(--orado-gold)]" strokeWidth={1.6} />
            <div className="mt-5 text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
              Misi
            </div>
          </div>
          <div className="md:col-span-8">
            <ol className="space-y-6 text-lg leading-relaxed text-[var(--orado-charcoal)]/85 md:text-xl">
              {MISI.map((m, i) => (
                <li key={i} className="flex gap-6">
                  <span className="font-display text-2xl font-medium tabular-nums text-[var(--orado-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section className="border-t border-[var(--orado-navy)]/10">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <History className="h-7 w-7 text-[var(--orado-gold)]" strokeWidth={1.6} />
            <div className="mt-5 text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
              Sejarah Singkat
            </div>
          </div>
          <div className="md:col-span-8 space-y-6 text-base leading-relaxed text-[var(--orado-charcoal)]/85 md:text-lg">
            <p>
              Pengprov ORADO Jawa Barat berdiri sebagai cabang resmi PB ORADO untuk mengkoordinir dan membina kegiatan domino di seluruh provinsi Jawa Barat. Sebagai salah satu provinsi dengan basis pemain domino terbesar di Indonesia, Jabar memegang peran strategis dalam pembinaan domino nasional.
            </p>
            <p>
              Dengan dukungan 27 pengurus cabang yang tersebar di seluruh kota dan kabupaten Jabar, ORADO Jabar berkomitmen menyatukan komunitas domino dalam satu wadah resmi yang profesional, transparan, dan dapat dipertanggungjawabkan.
            </p>
            <p className="font-display italic text-[var(--orado-gold)]">
              "Bukan citra warung kopi — tetapi mind sport setara catur."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
