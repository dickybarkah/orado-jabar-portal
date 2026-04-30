import Link from "next/link";
import { site, NAV_PUBLIC } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--orado-navy)] text-[var(--orado-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--orado-gold)] text-[var(--orado-navy)] font-display font-bold">
                OJ
              </div>
              <div>
                <div className="font-bold">{site.name}</div>
                <div className="text-xs opacity-70">{site.fullName}</div>
              </div>
            </div>
            <p className="mt-4 max-w-md font-display italic text-[var(--orado-gold)]">
              "{site.tagline}"
            </p>
            <p className="mt-4 max-w-md text-sm opacity-80">{site.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--orado-gold)]">
              Navigasi
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_PUBLIC.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="opacity-80 hover:opacity-100 hover:text-[var(--orado-gold)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--orado-gold)]">
              Kontak
            </h4>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li>{site.alamat}</li>
              <li><a href={`mailto:${site.email}`} className="hover:text-[var(--orado-gold)]">{site.email}</a></li>
              <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orado-gold)]">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--orado-ivory)]/15 pt-6 text-center text-xs opacity-70">
          &copy; {year} {site.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
