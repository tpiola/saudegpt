"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setOnLevelUp, NIVEIS, type LevelUpEvent } from "@/lib/sov-xp";
import { Icon } from "@/components/icons";
import { Confetti } from "@/components/confetti";

/* ─── Partículas douradas orbitando o troféu ─── */
function TrophyOrbitParticles() {
  const particles = Array.from({ length: 6 }, (_, i) => {
    const angle = (360 / 6) * i;
    return { id: i, angle, delay: i * 0.15 };
  });

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-base"
          initial={false}
          animate={{
            rotate: [0, 360],
            scale: [0.5, 1.2, 0.5],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "center",
            // Orbita ao redor
            x: Math.cos((p.angle * Math.PI) / 180) * 45,
            y: Math.sin((p.angle * Math.PI) / 180) * 45,
          }}
        >
          {["⭐", "✨", "💫", "🌟", "🔥", "💥"][p.id]}
        </motion.span>
      ))}
    </div>
  );
}

/* ─── Sparkles de fundo ─── */
function BackgroundSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? "#34d399" : "#D4A843",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 6px ${i % 2 === 0 ? "#34d399" : "#D4A843"}`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 1.5 + Math.random() * 1.5,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── LevelUpModal ─── */
export function LevelUpModal() {
  const [event, setEvent] = useState<LevelUpEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setOnLevelUp((evt) => {
      setEvent(evt);
      setDismissed(false);
    });
    return () => {
      // Cleanup - set noop to avoid calling stale setState
      setOnLevelUp(() => {});
    };
  }, []);

  function handleDismiss() {
    setDismissed(true);
    setTimeout(() => setEvent(null), 300);
  }

  if (!event) return null;

  const nivelInfo = NIVEIS[event.nivelNovo];

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          key="levelup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleDismiss}
          style={{ animation: "overlay-fade-in 0.3s ease-out forwards" }}
        >
          <Confetti ativo={true} duracao={6000} />

          <motion.div
            key="levelup-card"
            initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              mass: 0.8,
            }}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-sovereign-gold/20 bg-gradient-to-b from-sovereign-surface-2 via-sovereign-surface to-sovereign-navy shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sparkles de fundo */}
            <BackgroundSparkles />

            {/* Top glow — mais intenso */}
            <div
              className="pointer-events-none absolute -inset-x-20 -top-20 h-60 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: nivelInfo.cor }}
            />

            {/* Glow secundário emerald */}
            <div className="pointer-events-none absolute -inset-x-10 -bottom-20 h-40 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#00C9A7" }}
            />

            <div className="relative z-10 flex flex-col items-center px-6 pb-8 pt-10 text-center">
              {/* Level up tag */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                className="mb-2 rounded-full border border-sovereign-gold/20 bg-sovereign-gold/10 px-4 py-1"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sovereign-gold">
                  ★ Level Up ★
                </span>
              </motion.div>

              {/* Icone troféu com partículas orbitando */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                }}
                className="relative flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-sovereign-gold/20 bg-gradient-to-br from-sovereign-surface-3 to-sovereign-surface shadow-xl shadow-sovereign-gold/10"
              >
                <TrophyOrbitParticles />
                <motion.span
                  className="text-4xl relative z-10"
                  animate={{
                    scale: [1, 1.15, 1],
                    filter: [
                      "drop-shadow(0 0 8px rgba(212,168,67,0.4))",
                      "drop-shadow(0 0 20px rgba(212,168,67,0.8)) drop-shadow(0 0 40px rgba(0,201,167,0.3))",
                      "drop-shadow(0 0 8px rgba(212,168,67,0.4))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {nivelInfo.icone}
                </motion.span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 180, damping: 16 }}
                className="mt-4 text-xl font-bold"
              >
                Você alcançou o nível
              </motion.h2>

              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 10 }}
                className="mt-2 text-2xl font-extrabold"
                style={{ color: nivelInfo.cor }}
              >
                {nivelInfo.icone} {nivelInfo.nome}
              </motion.span>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.4 }}
                className="mt-2 text-sm text-muted leading-relaxed max-w-xs"
              >
                {nivelInfo.descricao}
              </motion.p>

              {/* Stats comparison */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 150, damping: 16 }}
                className="mt-6 flex w-full items-center justify-center gap-4 rounded-2xl border border-sovereign-gold/10 bg-sovereign-surface-3/50 px-4 py-3"
              >
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    Anterior
                  </span>
                  <span className="text-lg font-bold text-muted">
                    {NIVEIS[event.nivelAntigo].icone}
                  </span>
                  <span className="text-xs font-semibold text-muted">
                    {event.nomeAntigo}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name="arrow-right" size={20} className="text-sovereign-gold" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sovereign-gold">
                    Agora
                  </span>
                  <span className="text-lg font-bold" style={{ color: nivelInfo.cor }}>
                    {nivelInfo.icone}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: nivelInfo.cor }}>
                    {event.nomeNovo}
                  </span>
                </div>
              </motion.div>

              {/* Dismiss button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleDismiss}
                className="mt-6 w-full rounded-xl border border-sovereign-gold/20 bg-gradient-to-r from-sovereign-gold/20 to-sovereign-gold/10 px-6 py-3 text-sm font-bold text-sovereign-gold shadow-lg shadow-sovereign-gold/10 transition-all hover:from-sovereign-gold/30 hover:to-sovereign-gold/20"
              >
                ✦ Continuar ✦
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
