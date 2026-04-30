/**
 * RBAC Permission Matrix — BRD §7.2
 * F = Full Access  R = Read Only  W = Write/Edit  A = Approve
 */

export type Role =
  | "super_admin"
  | "ketua"
  | "sekretaris"
  | "humas"
  | "pengcab"
  | "atlet";

export type Module =
  | "dashboard"
  | "berita"
  | "anggota"
  | "croot"
  | "turnamen"
  | "galeri"
  | "users"
  | "audit_log"
  | "profile";

export type Permission = "F" | "A" | "W" | "R" | "VERIFY" | "NONE";

export const PERMISSION_MATRIX: Record<Module, Record<Role, Permission>> = {
  dashboard:  { super_admin: "F", ketua: "F", sekretaris: "F", humas: "F", pengcab: "R",    atlet: "R"    },
  berita:     { super_admin: "F", ketua: "A", sekretaris: "W", humas: "F", pengcab: "R",    atlet: "R"    },
  anggota:    { super_admin: "F", ketua: "R", sekretaris: "W", humas: "NONE", pengcab: "R", atlet: "R"    },
  croot:      { super_admin: "F", ketua: "A", sekretaris: "VERIFY", humas: "NONE", pengcab: "NONE", atlet: "NONE" },
  turnamen:   { super_admin: "F", ketua: "A", sekretaris: "W", humas: "R", pengcab: "R",    atlet: "R"    },
  galeri:     { super_admin: "F", ketua: "R", sekretaris: "W", humas: "F", pengcab: "R",    atlet: "R"    },
  users:      { super_admin: "F", ketua: "R", sekretaris: "NONE", humas: "NONE", pengcab: "NONE", atlet: "NONE" },
  audit_log:  { super_admin: "F", ketua: "R", sekretaris: "NONE", humas: "NONE", pengcab: "NONE", atlet: "NONE" },
  profile:    { super_admin: "F", ketua: "F", sekretaris: "F", humas: "F", pengcab: "F",    atlet: "F"    },
};

export function can(role: Role, module: Module, action: "read" | "write" | "approve" | "verify" | "delete"): boolean {
  const perm = PERMISSION_MATRIX[module]?.[role];
  if (!perm || perm === "NONE") return false;

  switch (action) {
    case "read":    return perm === "F" || perm === "A" || perm === "W" || perm === "R" || perm === "VERIFY";
    case "write":   return perm === "F" || perm === "W";
    case "approve": return perm === "F" || perm === "A";
    case "verify":  return perm === "F" || perm === "VERIFY" || perm === "W";
    case "delete":  return perm === "F";
    default:        return false;
  }
}

export const ROLE_LABELS: Record<Role, string> = {
  super_admin: "Super Admin",
  ketua:       "Ketua Pengprov",
  sekretaris:  "Sekretaris",
  humas:       "Humas / Media",
  pengcab:     "Pengurus Pengcab",
  atlet:       "Atlet / Anggota",
};
