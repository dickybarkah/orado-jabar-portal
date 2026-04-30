"use client";

import { useEffect, useRef } from "react";

/**
 * 3D Cascade Stage — interactive cursor parallax (H3).
 * Subtle tilt + light follow effect anticipating real 3D scene.
 */
export function Hero3DStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const light = lightRef.current;
    if (!stage || !light) return;

    function handleMove(e: MouseEvent) {
      if (!stage || !light) return;
      const rect = stage.getBoundingClientRect();
      const xR = (e.clientX - rect.left) / rect.width;
      const yR = (e.clientY - rect.top) / rect.height;
      // Tilt very subtle ±2deg
      const rotY = (xR - 0.5) * 4;
      const rotX = -(yR - 0.5) * 4;
      stage.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      // Light follow
      light.style.background = `radial-gradient(600px circle at ${xR * 100}% ${yR * 100}%, rgba(184,134,11,0.15), transparent 60%)`;
    }
    function handleLeave() {
      if (!stage || !light) return;
      stage.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
      light.style.background = "radial-gradient(600px circle at 50% 50%, rgba(184,134,11,0.05), transparent 60%)";
    }

    stage.addEventListener("mousemove", handleMove);
    stage.addEventListener("mouseleave", handleLeave);
    return () => {
      stage.removeEventListener("mousemove", handleMove);
      stage.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl bg-[var(--orado-navy)] transition-transform duration-300 ease-out will-change-transform"
    >
      {/* Light follower */}
      <div ref={lightRef} className="pointer-events-none absolute inset-0 transition-[background] duration-200" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--orado-ivory) 1px, transparent 1px), linear-gradient(to bottom, var(--orado-ivory) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Floating SVG dominos (anticipating 3D Cascade) */}
      <svg viewBox="0 0 1280 640" className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="xMidYMid slice">
        <g fill="var(--orado-gold)" stroke="var(--orado-gold)" strokeWidth="1">
          <Domino x={220} y={180} rot={-10} scale={1} />
          <Domino x={490} y={120} rot={4} scale={0.85} />
          <Domino x={780} y={210} rot={12} scale={1.1} />
          <Domino x={1050} y={140} rot={-8} scale={0.9} />
          <Domino x={350} y={460} rot={20} scale={0.8} />
          <Domino x={680} y={500} rot={-15} scale={1.05} />
          <Domino x={950} y={460} rot={6} scale={0.9} />
        </g>
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="font-display text-4xl font-medium italic text-[var(--orado-gold)]">
            Domino Cascade
          </div>
          <div className="mt-2 text-[11px] tracking-[0.3em] uppercase text-[var(--orado-ivory)]/45">
            Animasi 3D · Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}

function Domino({ x, y, rot, scale }: { x: number; y: number; rot: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <rect x={-26} y={-52} width={52} height={104} rx={6} fill="none" />
      <line x1={-26} y1={0} x2={26} y2={0} />
      <circle cx={-10} cy={-32} r={2.5} />
      <circle cx={10} cy={-32} r={2.5} />
      <circle cx={0} cy={28} r={2.5} />
    </g>
  );
}
