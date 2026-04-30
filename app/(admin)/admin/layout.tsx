import type { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, FileText, Trophy, Image as ImageIcon, ShieldCheck, ScrollText, UserCog } from "lucide-react";

const ADMIN_NAV = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/croot",     label: "CROOT",     icon: ShieldCheck },
  { href: "/admin/anggota",   label: "Anggota",   icon: Users },
  { href: "/admin/berita",    label: "Berita",    icon: FileText },
  { href: "/admin/turnamen",  label: "Turnamen",  icon: Trophy },
  { href: "/admin/galeri",    label: "Galeri",    icon: ImageIcon },
  { href: "/admin/users",     label: "Users",     icon: UserCog },
  { href: "/admin/audit-log", label: "Audit Log", icon: ScrollText },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f5f5f4]">
      <aside className="hidden w-64 shrink-0 border-r border-[var(--orado-navy)]/10 bg-[var(--orado-navy)] text-[var(--orado-ivory)] lg:block">
        <div className="border-b border-[var(--orado-ivory)]/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[var(--orado-gold)] text-[var(--orado-navy)] font-bold text-xs">
              OJ
            </div>
            <div>
              <div className="text-sm font-bold">ORADO Jabar</div>
              <div className="text-xs opacity-60">Admin Panel</div>
            </div>
          </div>
        </div>

        <nav className="px-3 py-4">
          {ADMIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition hover:bg-[var(--orado-ivory)]/10 hover:text-[var(--orado-gold)]"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-[var(--orado-navy)]/10 bg-white px-6">
          <h2 className="font-semibold text-[var(--orado-navy)]">Admin Panel</h2>
          <Link href="/admin/login" className="text-sm text-[var(--orado-charcoal)]/70 hover:text-[var(--orado-emerald)]">
            Login
          </Link>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
