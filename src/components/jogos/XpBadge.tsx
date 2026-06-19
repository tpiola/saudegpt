"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getLevelInfo,
  getLevelProgress,
  getAllBadgesWithStatus,
  getLevel,
  NIVEIS,
} from "@/lib/sov-xp";
import { Icon } from "@/components/icons";

/* ─── Props ─── */
interface XpBadgeProps {
  /** Se true, mostra versão compacta (apenas badge + nível) */
  compact?: boolean;
  /** Se true, mostra painel completo com badges */
  expanded?: boolean;
  /** Callback para alternar estado expanded */
  onToggle?: () => void;
}

/* ─── Sparkle particles para o badge quando ganha XP ─── */
function BadgeSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? "#34d399" : "#D4A843",
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            boxShadow: `0 0 6px ${i % 2 === 0 ? "#34d399" : "#D4A843"}`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -15],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── XpBadge Component ─── */
export function XpBadge({ compact = false, expanded = false, onToggle }: XpBadgeProps) {
  const [level, setLevel] = useState(0);
  const [levelInfo, setLevelInfo] = useState(getLevelInfo());
  const [progress, setProgress] = useState(getLevelProgress());
  const [badges, setBadges] = useState(getAllBadgesWithStatus());
  const [animKey, setAnimKey] = useState(0);

  // Refresh on mount and focus
  useEffect(() => {
    function refresh() {
      const l = getLevel();
      setLevel(l);
      setLevelInfo(getLevelInfo());
      setProgress(getLevelProgress());
      setBadges(getAllBadgesWithStatus());
      setAnimKey((k) => k + 1);
    }
    refresh();
    window.addEventListener("focus", refresh);
    // Custom event for XP updates
    window.addEventListener("sov-xp-update", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("sov-xp-update", refresh);
    };
  }, []);

  // Level info for gradient
  const nivelProximo = level < NIVEIS.length - 1 ? NIVEIS[level + 1] : null;
  const desbloqueadas = badges.filter((b) => b.desbloqueada);
  const bloqueadas = badges.filter((b) => !b.desbloqueada);

  if (compact) {
    return (
      <motion.button
        key={animKey}
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2 rounded-xl border border-sovereign-gold/20 bg-gradient-to-r from-sovereign-surface-2 to-sovereign-surface px-3 py-1.5 shadow-lg shadow-sovereign-gold/5"
        // Pulsa ao ganhar XP (animKey muda)
        animate={animKey > 0 ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <BadgeSparkles />
        <span className="text-lg relative z-10">{levelInfo.icone}</span>
        <div className="flex flex-col items-start relative z-10">
          <span
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: levelInfo.cor }}
          >
            {levelInfo.nome}
          </span>
          <span className="text-xs font-bold text-foreground">
            Nv.{level + 1}
          </span>
        </div>
        {desbloqueadas.length > 0 && (
          <motion.span
            key={desbloqueadas.length}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-sovereign-gold/20 text-[10px] relative z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {desbloqueadas.length}
          </motion.span>
        )}
      </motion.button>
    );
  }

  return (
    <motion.div
      key={animKey}
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        // Pulsa suavemente quando animKey muda (XP ganho)
        scale: animKey > 0 ? [1, 1.02, 1] : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
        scale: { duration: 0.6, ease: "easeInOut" },
      }}
      className="relative overflow-hidden rounded-2xl border border-sovereign-gold/15 bg-gradient-to-br from-sovereign-surface-2 to-sovereign-surface shadow-xl shadow-sovereign-gold/5"
    >
      {/* Sparkles quando XP é ganho */}
      <BadgeSparkles />

      {/* Header - Level */}
      <div className="relative p-5">
        {/* Background glow pulsante */}
        <motion.div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: levelInfo.cor }}
          animate={{
            opacity: [0.08, 0.15, 0.08],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="flex items-start gap-4">
          {/* Level icon - badge com pulse */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 14 }}
            className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-sovereign-gold/20 bg-gradient-to-br from-sovereign-surface-3 to-sovereign-surface shadow-lg"
            style={{ animation: animKey > 0 ? "badge-pulse-soft 2s ease-in-out infinite" : "none" }}
          >
            <span className="text-2xl relative z-10">{levelInfo.icone}</span>
          </motion.div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: levelInfo.cor }}
              >
                Nível {level + 1}
              </span>
              <motion.span
                key={progress.atual}
                className="rounded-full bg-sovereign-gold/10 px-2 py-0.5 text-[10px] font-bold text-sovereign-gold"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.4 }}
              >
                {progress.atual} XP
              </motion.span>
            </div>
            <h3 className="mt-0.5 text-lg font-bold text-foreground">
              {levelInfo.icone} {levelInfo.nome}
            </h3>
            <p className="text-xs text-muted">{levelInfo.descricao}</p>

            {/* Progress bar - glitter effect no fill */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-[10px] font-bold">
                <span style={{ color: levelInfo.cor }}>
                  Lv.{level + 1}
                </span>
                {nivelProximo ? (
                  <span className="text-muted">
                    {progress.xpNoNivel} / {progress.xpProximoNivel} XP
                  </span>
                ) : (
                  <span className="text-sovereign-gold">MÁXIMO</span>
                )}
              </div>
              <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-sovereign-surface-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress.progresso}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                  className="relative h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${levelInfo.cor}88, ${levelInfo.cor}, ${levelInfo.cor}88)`,
                    backgroundSize: "200% 100%",
                    boxShadow: `0 0 10px ${levelInfo.cor}44`,
                    animation: "gold-shimmer 3s linear infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges section (expandable) */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="border-t border-sovereign-gold/10"
          >
            <div className="p-5">
              <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
                <Icon name="award" size={14} />
                Badges ({desbloqueadas.length}/{badges.length})
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 18 }}
                    whileHover={{ scale: 1.02 }}
                    className={`relative flex items-center gap-2 rounded-xl border p-2.5 transition-all ${
                      badge.desbloqueada
                        ? "border-sovereign-gold/20 bg-sovereign-gold/5"
                        : "border-border bg-surface-2 opacity-40"
                    }`}
                  >
                    {badge.desbloqueada && (
                      <motion.div
                        className="pointer-events-none absolute inset-0 rounded-xl"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(212,168,67,0)",
                            "0 0 8px 2px rgba(212,168,67,0.1)",
                            "0 0 0 0 rgba(212,168,67,0)",
                          ],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      />
                    )}
                    <span className="text-lg">{badge.icone}</span>
                    <div className="min-w-0 flex-1">
                      <p className={`text-xs font-bold leading-tight ${badge.desbloqueada ? "text-foreground" : "text-muted"}`}>
                        {badge.nome}
                      </p>
                      <p className="text-[10px] leading-tight text-muted">
                        {badge.descricao}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
