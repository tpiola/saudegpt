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
        className="flex items-center gap-2 rounded-xl border border-sovereign-gold/20 bg-gradient-to-r from-sovereign-surface-2 to-sovereign-surface px-3 py-1.5 shadow-lg shadow-sovereign-gold/5"
      >
        <span className="text-lg">{levelInfo.icone}</span>
        <div className="flex flex-col items-start">
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
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sovereign-gold/20 text-[10px]">
            {desbloqueadas.length}
          </span>
        )}
      </motion.button>
    );
  }

  return (
    <motion.div
      key={animKey}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="overflow-hidden rounded-2xl border border-sovereign-gold/15 bg-gradient-to-br from-sovereign-surface-2 to-sovereign-surface shadow-xl shadow-sovereign-gold/5"
    >
      {/* Header - Level */}
      <div className="relative p-5">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: levelInfo.cor }}
        />

        <div className="flex items-start gap-4">
          {/* Level icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 14 }}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-sovereign-gold/20 bg-gradient-to-br from-sovereign-surface-3 to-sovereign-surface shadow-lg"
          >
            <span className="text-2xl">{levelInfo.icone}</span>
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
              <span className="rounded-full bg-sovereign-gold/10 px-2 py-0.5 text-[10px] font-bold text-sovereign-gold">
                {progress.atual} XP
              </span>
            </div>
            <h3 className="mt-0.5 text-lg font-bold text-foreground">
              {levelInfo.icone} {levelInfo.nome}
            </h3>
            <p className="text-xs text-muted">{levelInfo.descricao}</p>

            {/* Progress bar */}
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
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${levelInfo.cor}88, ${levelInfo.cor})`,
                    boxShadow: `0 0 10px ${levelInfo.cor}44`,
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
                {badges.map((badge) => (
                  <motion.div
                    key={badge.id}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center gap-2 rounded-xl border p-2.5 transition-all ${
                      badge.desbloqueada
                        ? "border-sovereign-gold/20 bg-sovereign-gold/5"
                        : "border-border bg-surface-2 opacity-40"
                    }`}
                  >
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
