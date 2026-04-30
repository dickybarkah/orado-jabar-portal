import { Card } from "@/components/ui/card";

export const metadata = { title: "Manajemen Anggota — Admin" };

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-[var(--orado-navy)]">Manajemen Anggota</h1>
        <p className="text-sm text-[var(--orado-charcoal)]/70">Daftar dan kelola data anggota / atlet</p>
      </div>
      <Card className="p-12 text-center">
        <p className="text-sm text-[var(--orado-charcoal)]/60">
          Modul <strong>Manajemen Anggota</strong> akan dibuild di sprint berikutnya.
        </p>
      </Card>
    </div>
  );
}
