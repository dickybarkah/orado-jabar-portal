import Link from "next/link";
import { Card } from "@/components/ui/card";

const btnPrimary =
  "inline-flex h-11 items-center justify-center rounded-lg bg-[var(--orado-emerald)] px-6 text-sm font-semibold text-[var(--orado-ivory)] transition hover:bg-[var(--orado-gold)] hover:text-[var(--orado-navy)]";
const btnOutline =
  "inline-flex h-11 items-center justify-center rounded-lg border border-[var(--orado-ivory)]/30 bg-transparent px-6 text-sm font-semibold text-[var(--orado-ivory)] transition hover:bg-[var(--orado-ivory)] hover:text-[var(--orado-navy)]";
const btnGold =
  "inline-flex h-11 items-center justify-center rounded-lg bg-[var(--orado-gold)] px-6 text-sm font-semibold text-[var(--orado-navy)] transition hover:bg-[var(--orado-ivory)]";
import { site } from "@/lib/site";
import { Trophy, Users, MapPin, Award } from "lucide-react";

const STATS = [
  { label: "Atlet Terdaftar",  value: "0",    icon: Users },
  { label: "Pengcab Aktif",    value: "27",   icon: MapPin },
  { label: "Turnamen Selenggarakan", value: "0", icon: Trophy },
  { label: "Medali Nasional",  value: "0",    icon: Award },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--orado-navy)] to-[#0a2a3f] py-24 md:py-32">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, var(--orado-gold) 0%, transparent 60%)"
        }} />

        <div className="relative mx-auto max-w-7xl px-6 text-center text-[var(--orado-ivory)]">
          <span className="inline-block rounded-full border border-[var(--orado-gold)]/40 bg-[var(--orado-gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--orado-gold)]">
            Mind Sport Profesional
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            ORADO Jawa Barat
          </h1>
          <p className="mt-4 font-display text-xl italic text-[var(--orado-gold)] md:text-2xl">
            "{site.tagline}"
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base opacity-85 md:text-lg">
            Pusat pembinaan & pengembangan olahraga domino di Jawa Barat. Setara catur, dengan kelas sebagai mind sport.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/pendaftaran" className={btnPrimary}>Daftar Atlet</Link>
            <Link href="/turnamen" className={btnOutline}>Lihat Turnamen</Link>
          </div>

          {/* 3D placeholder note */}
          <p className="mt-12 text-xs opacity-50">
            * Animasi 3D &ldquo;Domino Cascade&rdquo; akan ditambahkan di sprint berikutnya
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[var(--orado-ivory)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <Card key={s.label} className="border-[var(--orado-navy)]/10 p-6 text-center">
                <s.icon className="mx-auto h-8 w-8 text-[var(--orado-emerald)]" />
                <div className="mt-3 font-display text-4xl font-bold text-[var(--orado-navy)]">{s.value}</div>
                <div className="mt-1 text-sm text-[var(--orado-charcoal)]/70">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SAMBUTAN */}
      <section className="border-y border-[var(--orado-navy)]/10 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--orado-emerald)]">
            Sambutan Ketua Pengprov
          </span>
          <blockquote className="mt-4 font-display text-2xl italic leading-relaxed text-[var(--orado-charcoal)] md:text-3xl">
            &ldquo;Domino bukan sekadar permainan. Ini adalah seni berstrategi, latihan ketelitian, dan kebanggaan komunitas. Mari kita bawa Jawa Barat menjadi pusat domino Indonesia.&rdquo;
          </blockquote>
          <div className="mt-6 font-semibold text-[var(--orado-navy)]">
            — Ketua Pengprov ORADO Jabar
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="bg-[var(--orado-ivory)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl font-bold text-[var(--orado-navy)] md:text-4xl">
            Jelajahi Portal
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Card className="border-[var(--orado-navy)]/10 p-8 transition hover:shadow-lg">
              <h3 className="font-display text-xl font-bold text-[var(--orado-navy)]">Berita & Pengumuman</h3>
              <p className="mt-2 text-sm text-[var(--orado-charcoal)]/70">
                Update prestasi, kegiatan, edukasi, pengumuman resmi cabang.
              </p>
              <Link href="/berita" className="mt-4 inline-block text-sm font-semibold text-[var(--orado-emerald)] hover:text-[var(--orado-gold)]">
                Lihat Berita →
              </Link>
            </Card>
            <Card className="border-[var(--orado-navy)]/10 p-8 transition hover:shadow-lg">
              <h3 className="font-display text-xl font-bold text-[var(--orado-navy)]">Jadwal Turnamen</h3>
              <p className="mt-2 text-sm text-[var(--orado-charcoal)]/70">
                Turnamen mendatang & arsip hasil pertandingan.
              </p>
              <Link href="/turnamen" className="mt-4 inline-block text-sm font-semibold text-[var(--orado-emerald)] hover:text-[var(--orado-gold)]">
                Lihat Turnamen →
              </Link>
            </Card>
            <Card className="border-[var(--orado-navy)]/10 p-8 transition hover:shadow-lg">
              <h3 className="font-display text-xl font-bold text-[var(--orado-navy)]">Daftar Atlet (CROOT)</h3>
              <p className="mt-2 text-sm text-[var(--orado-charcoal)]/70">
                Daftar online sebagai atlet ORADO Jabar.
              </p>
              <Link href="/pendaftaran" className="mt-4 inline-block text-sm font-semibold text-[var(--orado-emerald)] hover:text-[var(--orado-gold)]">
                Mulai Pendaftaran →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--orado-emerald)] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-[var(--orado-ivory)]">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Bergabunglah dengan Komunitas Domino Resmi Jawa Barat
          </h2>
          <p className="mt-4 text-base opacity-90">
            Pendaftaran terbuka untuk atlet domino se-Jawa Barat. Proses cepat, transparan, & tercatat resmi.
          </p>
          <Link href="/pendaftaran" className={`${btnGold} mt-8`}>Daftar Sekarang</Link>
        </div>
      </section>
    </>
  );
}
