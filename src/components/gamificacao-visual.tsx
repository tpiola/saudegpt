"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

interface FloatingRewardProps {
  xp: number;
  streak?: number;
  onComplete?: () => void;
}

/* ── Moedas/estrelas que flutuam em espiral ── */
function ParticleExplosion({ count = 8 }: { count?: number }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;
  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (360 / count) * i;
    const distance = 60 + Math.random() * 40;
    const rad = (angle * Math.PI) / 180;
    return {
      id: i,
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
      size: 6 + Math.random() * 8,
      delay: Math.random() * 0.15,
      emoji: ["⭐", "✨", "💫", "🌟", "🔥"][Math.floor(Math.random() * 5)],
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-lg"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: [1, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 0.8,
            delay: p.delay,
            ease: [0.25, 0.1, 0.25, 1] as const,
          }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}

/* ── Glitter particles para a barra de XP ── */
function GlitterSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      {Array.from({ length: 5 }, (_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${10 + Math.random() * 80}%`,
            backgroundColor: i % 2 === 0 ? "#34d399" : "#D4A843",
            boxShadow: `0 0 4px ${i % 2 === 0 ? "#34d399" : "#D4A843"}`,
            animation: "glitter-sparkle 2s ease-in-out infinite",
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Barra de progresso animada para próximo nível ── */
export function XpBar({ xp, xpProximoNivel }: { xp: number; xpProximoNivel: number }) {
  const porcento = Math.min((xp / (xpProximoNivel || 1)) * 100, 100);
  const [animKey, setAnimKey] = useState(0);
  const prevXp = useRef(xp);

  // Detecta quando XP aumenta para animar glitter
  useEffect(() => {
    if (xp > prevXp.current) {
      setAnimKey((k) => k + 1);
    }
    prevXp.current = xp;
  }, [xp]);

  return (
    <div className="relative w-full">
      <div className="h-2 w-full overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800/50">
        <div className="relative h-full w-full">
          <motion.div
            key={animKey}
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-gold-400 bg-[length:200%_100%]"
            initial={{ width: 0 }}
            animate={{
              width: `${porcento}%`,
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
            style={{
              animation: "gold-shimmer 2s linear infinite",
              boxShadow: animKey > 0 ? "0 0 12px rgba(0, 201, 167, 0.4)" : "none",
            }}
          />
          {/* Glitter na barra quando ganha XP */}
          {animKey > 0 && <GlitterSparkles />}
        </div>
      </div>
      <div className="mt-1 flex items-center justify-between text-[10px] text-subtle">
        <span>{xp.toLocaleString()} XP</span>
        <span>{xpProximoNivel.toLocaleString()} XP</span>
      </div>
    </div>
  );
}

/* ── Toast de XP com moedas ── */
export function XpRewardToast({ xp, streak, onComplete }: FloatingRewardProps) {
  const [visivel, setVisivel] = useState(true);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false);
      onComplete?.();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (reduced) {
    if (!visivel) return null;
    return (
      <div className="fixed inset-x-0 top-1/4 z-[100] flex items-center justify-center pointer-events-none">
        <div className="rounded-2xl bg-gradient-to-b from-forest-600 to-forest-700 px-8 py-6 text-center shadow-2xl border border-forest-400/30">
          <div className="relative z-10">
            <span className="text-4xl">🎉</span>
          </div>
          <p className="relative z-10 mt-2 text-lg font-bold text-white">+{xp} XP</p>
          {streak && streak > 0 && (
            <p className="relative z-10 mt-1 text-sm text-orange-300">🔥 Streak de {streak} dias!</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          className="fixed inset-x-0 top-1/4 z-[100] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.5, y: -40 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative rounded-2xl bg-gradient-to-b from-forest-600 to-forest-700 px-8 py-6 text-center shadow-2xl border border-forest-400/30">
            <ParticleExplosion count={10} />
            <motion.div
              className="relative z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
            >
              <span className="text-4xl">🎉</span>
            </motion.div>
            <motion.p
              className="relative z-10 mt-2 text-lg font-bold text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              +{xp} XP
            </motion.p>
            {streak && streak > 0 && (
              <motion.p
                className="relative z-10 mt-1 text-sm text-orange-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                🔥 Streak de {streak} dias!
              </motion.p>
            )}
            <motion.div
              className="relative z-10 mt-3"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="mx-auto h-0.5 w-3/4 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Chama realista para o streak (fogo com animação CSS) ── */
function RealisticFlame({ size }: { size: number }) {
  return (
    <div className="relative pointer-events-none" style={{ width: size, height: size * 1.4 }}>
      {/* Chama principal */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: size * 0.6,
          height: size * 1.1,
          background: "radial-gradient(ellipse at 50% 80%, #ff6b35 0%, #ff4500 40%, #ff8c00 70%, transparent 100%)",
          filter: "blur(2px)",
          animation: "flame-dance 1.5s ease-in-out infinite",
        }}
      />
      {/* Chama interna (mais clara) */}
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: size * 0.3,
          height: size * 0.7,
          background: "radial-gradient(ellipse at 50% 80%, #fff5e6 0%, #ffdd00 40%, #ff8c00 70%, transparent 100%)",
          filter: "blur(1px)",
          animation: "flame-dance 1.2s ease-in-out infinite",
          animationDelay: "-0.3s",
        }}
      />
      {/* Brilho ao redor */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: size * 0.8,
          height: size * 0.4,
          background: "radial-gradient(ellipse, rgba(255, 107, 53, 0.4) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}

/* ── Contador animado de streak com chama realista ── */
export function StreakFlame({ streak, size = "md" }: { streak: number; size?: "sm" | "md" | "lg" }) {
  const sizeMap = { sm: "text-lg", md: "text-2xl", lg: "text-4xl" };
  const flameSize = {
    sm: 24,
    md: 36,
    lg: 52,
  };

  const flameColor =
    streak === 0
      ? "from-gray-400 to-gray-500"
      : streak < 3
      ? "from-orange-400 to-orange-500"
      : streak < 7
      ? "from-orange-500 to-red-500"
      : "from-orange-400 via-red-500 to-purple-600";

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center`}
      animate={!usePrefersReducedMotion() && streak >= 3
          ? {
              scale: [1, 1.08, 1],
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }
          : {}}
    >
      {/* Chama realista CSS */}
      {streak > 0 && (
        <div className="absolute -inset-2 flex items-center justify-center">
          <RealisticFlame size={flameSize[size]} />
        </div>
      )}

      {/* Ícone fire sobre a chama */}
      <span
        className={`relative z-10 ${sizeMap[size]}`}
        style={{
          filter: streak >= 3 ? "drop-shadow(0 0 6px rgba(255, 107, 53, 0.6))" : "none",
        }}
      >
        🔥
      </span>

      {/* Badge do contador */}
      {streak > 0 && (
        <motion.span
          key={streak}
          className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-navy-700 shadow z-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
        >
          {streak}
        </motion.span>
      )}
    </motion.div>
  );
}
