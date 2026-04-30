import { Card } from "@/components/ui/card";
import { Users, ShieldCheck, FileText, Trophy } from "lucide-react";

const STATS = [
  { label: "Total Anggota",        value: 0, icon: Users },
  { label: "CROOT Pending",        value: 0, icon: ShieldCheck },
  { label: "Berita Published",     value: 0, icon: FileText },
  { label: "Turnamen Mendatang",   value: 0, icon: Trophy },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-[var(--orado-navy)]">Dashboard</h1>
        <p className="text-sm text-[var(--orado-charcoal)]/70">Ringkasan aktivitas portal ORADO Jabar.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <Card key={s.label} className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--orado-charcoal)]/70">{s.label}</span>
              <s.icon className="h-5 w-5 text-[var(--orado-emerald)]" />
            </div>
            <div className="mt-3 text-3xl font-bold text-[var(--orado-navy)]">{s.value}</div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="font-semibold text-[var(--orado-navy)]">Aktivitas Terbaru</h3>
        <p className="mt-2 text-sm text-[var(--orado-charcoal)]/70">Belum ada aktivitas.</p>
      </Card>
    </div>
  );
}
