import Link from "next/link";

export function CtaPendaftaran() {
  return (
    <section className="bg-[var(--orado-ivory)]">
      <div className="mx-auto max-w-[1280px] px-8 pb-32">
        <div className="rounded-3xl bg-[var(--orado-navy)] px-10 py-20 text-center text-[var(--orado-ivory)] md:px-20 md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Siap menjadi bagian dari komunitas{" "}
            <span className="italic font-medium text-[var(--orado-gold)]">domino resmi</span>{" "}
            Jawa Barat?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-[var(--orado-ivory)]/70">
            Pendaftaran online, transparan, tervalidasi langsung oleh Pengprov.
          </p>
          <Link
            href="/pendaftaran"
            className="mt-10 inline-flex h-12 items-center rounded-full bg-[var(--orado-gold)] px-8 text-sm font-medium text-[var(--orado-navy)] transition hover:bg-[var(--orado-ivory)]"
          >
            Mulai pendaftaran
          </Link>
        </div>
      </div>
    </section>
  );
}
