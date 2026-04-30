import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Login — Admin ORADO Jabar" };

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <Card className="w-full max-w-md p-8">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-[var(--orado-navy)] text-[var(--orado-gold)] font-bold">
            OJ
          </div>
          <h1 className="mt-4 font-display text-2xl font-bold text-[var(--orado-navy)]">
            Admin Panel
          </h1>
          <p className="mt-1 text-sm text-[var(--orado-charcoal)]/70">
            Masuk untuk mengelola Portal ORADO Jabar
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@orado-jabar.id" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" disabled />
          </div>
          <Button className="w-full bg-[var(--orado-emerald)] text-[var(--orado-ivory)] hover:bg-[var(--orado-navy)]" disabled>
            Login (Supabase Auth — sprint berikutnya)
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-[var(--orado-charcoal)]/50">
          Auth akan diaktifkan setelah Supabase project di-setup.
        </p>
      </Card>
    </div>
  );
}
