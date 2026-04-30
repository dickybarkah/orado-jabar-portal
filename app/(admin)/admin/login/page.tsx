import { LoginForm } from "./LoginForm";

export const metadata = { title: "Login — Admin ORADO Jabar" };

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_1px_60px_-15px_rgba(15,61,92,0.15)]">
        <div className="text-center">
          <div className="mx-auto inline-block font-display text-2xl font-bold tracking-tight text-[var(--orado-navy)]">
            ORADO<span className="text-[var(--orado-gold)]">.</span>Jabar
          </div>
          <div className="mt-2 text-xs font-medium tracking-[0.18em] uppercase text-[var(--orado-charcoal)]/55">
            Admin Panel
          </div>
        </div>

        <div className="mt-8">
          <LoginForm />
        </div>

        <p className="mt-8 text-center text-xs text-[var(--orado-charcoal)]/55">
          Akun diberikan oleh Sekretariat Pengprov.
        </p>
      </div>
    </div>
  );
}
