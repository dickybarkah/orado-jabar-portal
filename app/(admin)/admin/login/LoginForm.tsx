"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr("");

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email"));
    const password = String(fd.get("password"));

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErr(error.message);
      setBusy(false);
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block">
        <span className="text-sm font-medium text-[var(--orado-navy)]">Email</span>
        <input
          name="email"
          type="email"
          required
          placeholder="email@orado-jabar.id"
          className="mt-2 block w-full rounded-xl border border-[var(--orado-navy)]/20 bg-white px-4 py-3 text-sm focus:border-[var(--orado-emerald)] focus:outline-none focus:ring-2 focus:ring-[var(--orado-emerald)]/20"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-[var(--orado-navy)]">Password</span>
        <input
          name="password"
          type="password"
          required
          placeholder="••••••••"
          className="mt-2 block w-full rounded-xl border border-[var(--orado-navy)]/20 bg-white px-4 py-3 text-sm focus:border-[var(--orado-emerald)] focus:outline-none focus:ring-2 focus:ring-[var(--orado-emerald)]/20"
        />
      </label>

      {err && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {err}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--orado-navy)] px-6 text-sm font-medium text-[var(--orado-ivory)] transition hover:bg-[var(--orado-emerald)] disabled:opacity-60"
      >
        {busy && <Loader2 className="h-4 w-4 animate-spin" />}
        {busy ? "Memproses..." : "Masuk"}
      </button>
    </form>
  );
}
