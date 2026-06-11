"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingRewardProps {
  xp: number;
  streak?: number;
  onComplete?: () => void;
}

/* ── Moedas/estrelas que flutuam em espiral ── */
function ParticleExplosion({ count = 8 }: { count?: number }) {
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
            ease: "easeOut",
          }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}

/* ── Barra de progresso animada para próximo nível ── */
export function XpBar({ xp, xpProximoNivel }: { xp: number; xpProximoNivel: number }) {
  const porcento = Math.min((xp / (xpProximoNivel || 1)) * 100, 100);

  return (
    <div className="relative w-full">
      <div className="h-2 w-full overflow-hidden rounded-full bg-forest-100 dark:bg-forest-800/50">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-orange-400 to-emerald-400 bg-[length:200%_100%]"
          initial={{ width: 0 }}
          animate={{ width: `${porcento}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ animation: "gradient-shift 3s linear infinite" }}
        />
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false);
      onComplete?.();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

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

/* ── Contador animado de streak ── */
export function StreakFlame({ streak, size = "md" }: { streak: number; size?: "sm" | "md" | "lg" }) {
  const sizeMap = { sm: "text-lg", md: "text-2xl", lg: "text-4xl" };
  const flameSize = { sm: "h-8 w-8", md: "h-12 w-12", lg: "h-16 w-16" };

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
      className={`relative inline-flex ${flameSize[size]} items-center justify-center rounded-full bg-gradient-to-br ${flameColor} shadow-lg`}
      animate={
        streak >= 3
          ? {
              scale: [1, 1.08, 1],
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }
          : {}
      }
    >
      <span className={sizeMap[size]}>🔥</span>
      <motion.span
        className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-forest-700 shadow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
      >
        {streak}
      </motion.span>
    </motion.div>
  );
}
