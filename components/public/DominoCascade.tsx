"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * 3D Domino Cascade — BRD §9.4
 * Dominoes fall from above, form a stylized arrangement, gentle idle rotation,
 * and respond to mouse movement (parallax).
 */
export function DominoCascade() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-[var(--orado-navy)]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--orado-ivory) 1px, transparent 1px), linear-gradient(to bottom, var(--orado-ivory) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Canvas
        camera={{ position: [0, 2.5, 8], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Ambient warm light */}
        <ambientLight intensity={0.45} color="#f8f5ee" />
        {/* Key light from above-right (gold) */}
        <directionalLight position={[6, 10, 6]} intensity={1.2} color="#b8860b" castShadow />
        {/* Fill from left (cool) */}
        <directionalLight position={[-5, 4, 3]} intensity={0.4} color="#0f6e56" />

        <Scene />

        <Environment preset="city" environmentIntensity={0.15} />
      </Canvas>

      {/* Caption overlay */}
      <div className="pointer-events-none absolute bottom-6 left-6">
        <div className="font-display text-2xl font-medium italic text-[var(--orado-gold)]">
          Domino Cascade
        </div>
        <div className="mt-1 text-[10px] tracking-[0.3em] uppercase text-[var(--orado-ivory)]/45">
          Animasi 3D · Mind Sport ORADO Jabar
        </div>
      </div>
    </div>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const [showFallen, setShowFallen] = useState(false);

  // Trigger after mount: dominoes "settle" after fall animation
  useEffect(() => {
    const t = setTimeout(() => setShowFallen(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Cursor parallax: rotate group slightly
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const targetY = mouse.x * 0.25;
    const targetX = -mouse.y * 0.15;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
  });

  // Build domino arrangement — line forming an arc / curve (suggests cascade)
  const dominos = useMemo(() => {
    const items: { pos: [number, number, number]; rot: [number, number, number]; delay: number }[] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      // Slight arc: x from -3.5 to +3.5, y curved
      const x = (t - 0.5) * 7;
      const y = Math.sin(t * Math.PI) * 0.3 - 0.5;
      const z = Math.cos(t * Math.PI) * 0.4;
      // Each tilted slightly more than previous (cascade look)
      const tilt = (i - count / 2) * 0.04;
      items.push({
        pos: [x, y, z],
        rot: [tilt, tilt * 0.5, tilt * 1.2],
        delay: i * 0.08,
      });
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      {dominos.map((d, i) => (
        <FallingDomino key={i} {...d} index={i} settled={showFallen} />
      ))}

      {/* Subtle ground reflection */}
      <mesh position={[0, -0.85, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial color="#0a2638" transparent opacity={0.4} roughness={0.8} />
      </mesh>
    </group>
  );
}

function FallingDomino({
  pos,
  rot,
  delay,
  index,
  settled,
}: {
  pos: [number, number, number];
  rot: [number, number, number];
  delay: number;
  index: number;
  settled: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  const start = useRef<number | null>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime - delay;
    if (start.current === null && t > 0) start.current = state.clock.elapsedTime;

    if (t < 0) {
      // Hidden above
      ref.current.position.set(pos[0], 6, pos[2]);
      ref.current.rotation.set(0, 0, 0);
      return;
    }

    // Fall + settle: ease-out from 6 to target
    const fallDuration = 0.9;
    const k = Math.min(t / fallDuration, 1);
    const eased = 1 - Math.pow(1 - k, 3);

    ref.current.position.x = pos[0];
    ref.current.position.y = 6 + (pos[1] - 6) * eased;
    ref.current.position.z = pos[2];

    ref.current.rotation.x = (rot[0] * 4) * (1 - eased) + rot[0] * eased;
    ref.current.rotation.y = rot[1] * eased;
    ref.current.rotation.z = rot[2] * eased;

    // Idle gentle sway after settled
    if (settled && k >= 1) {
      const wobble = Math.sin(state.clock.elapsedTime * 0.6 + index * 0.7) * 0.02;
      ref.current.rotation.z = rot[2] + wobble;
    }
  });

  return (
    <group ref={ref}>
      <Domino />
    </group>
  );
}

function Domino() {
  // Standard domino card 1:2 ratio
  const w = 0.5;
  const h = 1.0;
  const d = 0.12;

  return (
    <group>
      {/* Body — ivory with rounded edges via Box */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color="#f8f5ee" roughness={0.4} metalness={0.05} />
      </mesh>

      {/* Center divider (gold line) */}
      <mesh position={[0, 0, d / 2 + 0.001]}>
        <planeGeometry args={[w * 0.85, 0.015]} />
        <meshBasicMaterial color="#b8860b" />
      </mesh>

      {/* Pips top half (3 pips) */}
      <Pip x={-w * 0.25} y={h * 0.32} d={d} />
      <Pip x={w * 0.25} y={h * 0.32} d={d} />
      <Pip x={0} y={h * 0.18} d={d} />

      {/* Pips bottom half (2 pips) */}
      <Pip x={-w * 0.25} y={-h * 0.18} d={d} />
      <Pip x={w * 0.25} y={-h * 0.32} d={d} />
    </group>
  );
}

function Pip({ x, y, d }: { x: number; y: number; d: number }) {
  return (
    <mesh position={[x, y, d / 2 + 0.001]}>
      <circleGeometry args={[0.038, 16]} />
      <meshBasicMaterial color="#0f3d5c" />
    </mesh>
  );
}
