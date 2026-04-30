import { Card } from "@/components/ui/card";

export const metadata = { title: "Audit Log — Admin" };

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-[var(--orado-navy)]">Audit Log</h1>
        <p className="text-sm text-[var(--orado-charcoal)]/70">Log aktivitas user</p>
      </div>
      <Card className="p-12 text-center">
        <p className="text-sm text-[var(--orado-charcoal)]/60">
          Modul <strong>Audit Log</strong> akan dibuild di sprint berikutnya.
        </p>
      </Card>
    </div>
  );
}
