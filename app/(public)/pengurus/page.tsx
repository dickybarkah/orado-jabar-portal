import Image from "next/image";

export const metadata = { title: "Pengurus" };

const KETUA = {
  jabatan: "Ketua Pengprov",
  nama: "[Nama Ketua]",
  unit: "Periode 2024 – 2028",
  avatar: "https://i.pravatar.cc/600?img=68",
};

const INTI = [
  { jabatan: "Wakil Ketua",   nama: "[Nama Wakil]",      unit: "Bidang Pembinaan",   avatar: "https://i.pravatar.cc/400?img=12" },
  { jabatan: "Sekretaris",    nama: "[Nama Sekretaris]", unit: "Administrasi",        avatar: "https://i.pravatar.cc/400?img=33" },
  { jabatan: "Bendahara",     nama: "[Nama Bendahara]",  unit: "Keuangan",            avatar: "https://i.pravatar.cc/400?img=45" },
  { jabatan: "Humas / Media", nama: "[Nama Humas]",      unit: "Komunikasi Publik",   avatar: "https://i.pravatar.cc/400?img=20" },
];

const KOMISI = [
  { nama: "Komisi Pembinaan Atlet",     ketua: "[Nama]", deskripsi: "Pengembangan atlet junior, senior, master." },
  { nama: "Komisi Turnamen",            ketua: "[Nama]", deskripsi: "Penyelenggaraan & wasitan turnamen tingkat provinsi." },
  { nama: "Komisi Pengembangan Daerah", ketua: "[Nama]", deskripsi: "Koordinasi 27 pengcab kota/kab Jabar." },
  { nama: "Komisi Hukum & Etika",       ketua: "[Nama]", deskripsi: "Compliance regulasi & kode etik atlet." },
];

export default function PengurusPage() {
  return (
    <>
      <section className="bg-[var(--orado-ivory)]">
        <div className="mx-auto max-w-[1280px] px-8 pt-20 pb-16 md:pt-28">
          <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
            Struktur Organisasi
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-[var(--orado-navy)]">
            Pengurus Pengprov{" "}
            <span className="italic text-[var(--orado-gold)]">ORADO Jabar.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--orado-charcoal)]/75">
            Tim inti yang menggerakkan pembinaan, kompetisi, dan administrasi domino Jawa Barat.
          </p>
        </div>
      </section>

      {/* Ketua featured */}
      <section className="border-t border-[var(--orado-navy)]/10 bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-24 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-[var(--orado-navy)]/5">
              <Image src={KETUA.avatar} alt={KETUA.nama} fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover" unoptimized />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-gold)]">
              {KETUA.jabatan}
            </div>
            <h2 className="mt-4 font-display text-5xl font-medium leading-tight tracking-tight text-[var(--orado-navy)] md:text-6xl">
              {KETUA.nama}
            </h2>
            <div className="mt-3 text-sm text-[var(--orado-charcoal)]/65">{KETUA.unit}</div>
            <p className="mt-8 text-lg leading-relaxed text-[var(--orado-charcoal)]/80">
              Memimpin Pengprov ORADO Jawa Barat untuk mengangkat citra olahraga domino sebagai mind sport profesional, membina atlet dari junior hingga master, dan menjadikan Tatar Sunda sebagai pusat domino nasional.
            </p>
          </div>
        </div>
      </section>

      {/* Pengurus inti */}
      <section className="border-t border-[var(--orado-navy)]/10 bg-[var(--orado-ivory)]">
        <div className="mx-auto max-w-[1280px] px-8 py-24 md:py-32">
          <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
            Pengurus Inti
          </div>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-[var(--orado-navy)] md:text-5xl">
            Tim eksekutif harian.
          </h2>

          <div className="mt-16 grid gap-px bg-[var(--orado-navy)]/10 md:grid-cols-2 lg:grid-cols-4">
            {INTI.map((p) => (
              <article key={p.jabatan} className="flex flex-col gap-4 bg-[var(--orado-ivory)] p-6 transition hover:bg-white">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[var(--orado-navy)]/5">
                  <Image src={p.avatar} alt={p.nama} fill sizes="(max-width: 768px) 100vw, 280px" className="object-cover" unoptimized />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wider uppercase text-[var(--orado-gold)]">
                    {p.jabatan}
                  </div>
                  <div className="mt-2 font-display text-xl font-medium text-[var(--orado-navy)]">
                    {p.nama}
                  </div>
                  <div className="mt-1 text-xs text-[var(--orado-charcoal)]/60">{p.unit}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Komisi */}
      <section className="border-t border-[var(--orado-navy)]/10">
        <div className="mx-auto max-w-[1280px] px-8 py-24 md:py-32">
          <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
            Komisi
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-[var(--orado-navy)] md:text-5xl">
            Empat komisi yang menggerakkan ekosistem.
          </h2>

          <div className="mt-16 grid gap-px bg-[var(--orado-navy)]/10 md:grid-cols-2">
            {KOMISI.map((k, i) => (
              <article key={k.nama} className="bg-[var(--orado-ivory)] p-8 transition hover:bg-white">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl font-medium tabular-nums text-[var(--orado-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-[var(--orado-navy)]">
                    {k.nama}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[var(--orado-charcoal)]/75">
                  {k.deskripsi}
                </p>
                <div className="mt-6 text-xs uppercase tracking-wider text-[var(--orado-charcoal)]/50">
                  Ketua Komisi · <span className="text-[var(--orado-charcoal)]/80">{k.ketua}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
