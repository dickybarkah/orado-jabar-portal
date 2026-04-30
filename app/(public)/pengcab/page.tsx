import { createClient } from "@/lib/supabase/server";
import { MapPin } from "lucide-react";

export const metadata = { title: "Pengurus Cabang" };
export const revalidate = 60; // ISR — refresh tiap menit

type Pengcab = {
  id: string;
  nama: string;
  kota_kab: string;
  alamat: string | null;
  kontak: string | null;
  ketua_pengcab: string | null;
};

export default async function PengcabPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pengcab")
    .select("id, nama, kota_kab, alamat, kontak, ketua_pengcab")
    .order("kota_kab", { ascending: true });

  const pengcab = (data ?? []) as Pengcab[];
  const kotaCount = pengcab.filter((p) => p.kota_kab.startsWith("Kota")).length;
  const kabCount = pengcab.filter((p) => p.kota_kab.startsWith("Kabupaten")).length;

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--orado-ivory)]">
        <div className="mx-auto max-w-[1280px] px-8 pt-20 pb-12 md:pt-28">
          <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
            Pengurus Cabang
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-[var(--orado-navy)]">
            27 pengcab se-Jawa Barat,{" "}
            <span className="italic text-[var(--orado-gold)]">satu kekuatan kolektif.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--orado-charcoal)]/75">
            Daftar pengurus cabang ORADO di seluruh kota dan kabupaten Jawa Barat — pondasi pembinaan domino di tingkat daerah.
          </p>

          <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4">
            <Stat value={pengcab.length.toString()} label="Total Pengcab" />
            <Stat value={kotaCount.toString()} label="Kota" />
            <Stat value={kabCount.toString()} label="Kabupaten" />
          </div>
        </div>
      </section>

      {/* List */}
      <section className="bg-[var(--orado-ivory)] pb-32">
        <div className="mx-auto max-w-[1280px] px-8">
          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
              Gagal memuat data: {error.message}
            </div>
          )}

          {pengcab.length === 0 && !error && (
            <div className="rounded-2xl border border-dashed border-[var(--orado-navy)]/20 p-12 text-center">
              <p className="text-sm text-[var(--orado-charcoal)]/65">Belum ada data pengcab.</p>
            </div>
          )}

          {pengcab.length > 0 && (
            <div className="grid gap-px bg-[var(--orado-navy)]/10 md:grid-cols-2 lg:grid-cols-3">
              {pengcab.map((p) => (
                <article
                  key={p.id}
                  className="group flex flex-col gap-4 bg-[var(--orado-ivory)] p-6 transition hover:bg-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--orado-navy)]/5 text-[var(--orado-navy)] transition group-hover:bg-[var(--orado-navy)] group-hover:text-[var(--orado-gold)]">
                    <MapPin className="h-4 w-4" strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium leading-tight text-[var(--orado-navy)] transition group-hover:text-[var(--orado-emerald)]">
                      {p.nama}
                    </h3>
                    <div className="mt-1 text-xs tracking-wider uppercase text-[var(--orado-charcoal)]/55">
                      {p.kota_kab}
                    </div>
                  </div>

                  <dl className="mt-auto space-y-1.5 text-xs text-[var(--orado-charcoal)]/70">
                    {p.ketua_pengcab && (
                      <div className="flex gap-2">
                        <dt className="text-[var(--orado-charcoal)]/45">Ketua</dt>
                        <dd>{p.ketua_pengcab}</dd>
                      </div>
                    )}
                    {p.kontak && (
                      <div className="flex gap-2">
                        <dt className="text-[var(--orado-charcoal)]/45">Kontak</dt>
                        <dd>{p.kontak}</dd>
                      </div>
                    )}
                    {!p.ketua_pengcab && !p.kontak && (
                      <div className="text-[var(--orado-charcoal)]/40 italic">
                        Detail menyusul
                      </div>
                    )}
                  </dl>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-medium tabular-nums text-[var(--orado-navy)] md:text-5xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-[var(--orado-charcoal)]/55">{label}</div>
    </div>
  );
}
