"use client";

import { useEffect, useState, useRef } from "react";
import { Icon } from "./icons";

/* Partículas douradas e verdes que sobem */
function XpParticles() {
  const particles = useRef(
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      delay: Math.random() * 0.5,
      color: i % 2 === 0 ? "#34d399" : "#D4A843",
      size: 4 + Math.random() * 5,
    })),
  ).current;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animation: `particle-rise ${1.2 + Math.random() * 0.8}s ${p.delay}s ease-out forwards`,
          }}
        />
      ))}
    </div>
  );
}

/** Feedback visual ao ganhar XP (gamificação) com ALEGRIA extra. */
export function CelebracaoXp({ xp, ativo }: { xp: number; ativo: boolean }) {
  const [mostrar, setMostrar] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (ativo) {
      setMostrar(true);
      setAnimKey((k) => k + 1);
      const timer = setTimeout(() => setMostrar(false), 2500);
      return () => clearTimeout(timer);
    } else {
      setMostrar(false);
    }
  }, [ativo]);

  if (!mostrar) return null;

  return (
    <div
      key={animKey}
      className="pointer-events-none fixed inset-x-0 top-20 z-50 flex justify-center px-4"
      role="status"
      aria-live="polite"
    >
      <div
        className="relative flex items-center gap-2 rounded-2xl px-6 py-4 text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, #059669, #D4A843, #047857)",
          backgroundSize: "200% 100%",
          animation: "gold-shimmer 3s linear infinite, bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          boxShadow: "0 0 30px rgba(0, 201, 167, 0.4), 0 0 60px rgba(212, 168, 67, 0.2)",
        }}
      >
        {/* Partículas subindo */}
        <XpParticles />

        {/* Ícone com brilho pulsante */}
        <span
          className="relative z-10"
          style={{
            animation: "trophy-glow 1.5s ease-in-out infinite",
          }}
        >
          <Icon name="sparkles" size={24} />
        </span>

        {/* Número XP saltando */}
        <span
          className="relative z-10 font-extrabold text-lg"
          style={{
            animation: "xp-jump 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          }}
        >
          +{xp} XP conquistados!
        </span>
      </div>
    </div>
  );
}
