/**
 * Motif Mega Mendung — sentuhan kultural Sunda halus (BRD §9.5).
 * Digunakan sebagai divider/border accent. Stylized cloud arches.
 */

export function MegaMendungDivider({ className = "", color = "var(--orado-gold)" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 800 24"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block h-3 w-full ${className}`}
      aria-hidden="true"
    >
      {/* Repeating arches — Mega Mendung style cloud waves */}
      <g fill="none" stroke={color} strokeWidth="1.2">
        {Array.from({ length: 16 }).map((_, i) => {
          const x = i * 50;
          return (
            <g key={i}>
              <path d={`M ${x} 18 Q ${x + 12} 6, ${x + 25} 18`} />
              <path d={`M ${x + 5} 22 Q ${x + 17} 12, ${x + 30} 22`} opacity="0.5" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function MegaMendungCorner({ className = "", color = "var(--orado-gold)" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-20 w-20 ${className}`}
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeWidth="1.2">
        <path d="M 4 76 Q 16 44, 40 40 T 76 4" />
        <path d="M 12 76 Q 24 52, 48 48 T 76 12" opacity="0.5" />
        <path d="M 20 76 Q 32 60, 56 56 T 76 20" opacity="0.3" />
      </g>
    </svg>
  );
}
