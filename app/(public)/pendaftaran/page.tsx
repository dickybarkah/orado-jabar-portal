import { createClient } from "@/lib/supabase/server";
import { CrootForm } from "./CrootForm";
import { CheckCircle2, Clock, ShieldCheck, FileText } from "lucide-react";

export const metadata = { title: "Pendaftaran Atlet (CROOT)" };
export const revalidate = 300;

export default async function PendaftaranPage() {
  const supabase = await createClient();
  const { data: pengcab } = await supabase
    .from("pengcab")
    .select("id, nama, kota_kab")
    .order("kota_kab", { ascending: true });

  return (
    <>
      <section className="bg-[var(--orado-ivory)]">
        <div className="mx-auto max-w-[1280px] px-8 pt-20 pb-16 md:pt-28">
          <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
            CROOT · Calon Recruit
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-[var(--orado-navy)]">
            Pendaftaran atlet{" "}
            <span className="italic text-[var(--orado-gold)]">domino resmi.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--orado-charcoal)]/75">
            Formulir online untuk bergabung sebagai atlet ORADO Jawa Barat. Estimasi 3 menit. Verifikasi langsung oleh Sekretariat & Ketua Pengprov.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-16 md:grid-cols-12 md:py-24">
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-gold)]">
                  Alur Verifikasi
                </div>
                <ul className="mt-5 space-y-4 text-sm text-[var(--orado-charcoal)]/85">
                  <Step icon={FileText} title="Data Diri Lengkap" desc="Nama sesuai KTP, NIK 16 digit, alamat, kontak aktif." />
                  <Step icon={ShieldCheck} title="Validasi Sekretariat" desc="Pengecekan duplikasi & kelengkapan dokumen." />
                  <Step icon={CheckCircle2} title="Approval Ketua" desc="Persetujuan final & penomoran resmi." />
                  <Step icon={Clock} title="Estimasi Proses" desc="3–7 hari kerja sejak submit." />
                </ul>
              </div>

              <div className="rounded-2xl bg-[var(--orado-ivory)] p-6">
                <div className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--orado-charcoal)]/55">
                  Setelah Approve
                </div>
                <div className="mt-3 font-display text-lg font-medium leading-tight text-[var(--orado-navy)]">
                  Nomor Anggota Resmi
                </div>
                <div className="mt-2 font-mono text-sm tracking-tight text-[var(--orado-emerald)]">
                  ORADO-JBR-2026-XXXX
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[var(--orado-charcoal)]/65">
                  Penomoran otomatis berdasarkan urutan registrasi tahun bergabung.
                </p>
              </div>
            </div>
          </aside>

          <div className="md:col-span-8">
            <CrootForm pengcab={pengcab ?? []} />
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--orado-emerald)]" strokeWidth={1.6} />
      <div>
        <div className="font-medium text-[var(--orado-navy)]">{title}</div>
        <div className="mt-0.5 text-xs text-[var(--orado-charcoal)]/65">{desc}</div>
      </div>
    </li>
  );
}
