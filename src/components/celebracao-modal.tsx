"use client";

import { useEffect, useState, useCallback } from "react";
import { Confetti } from "./confetti";
import { Icon } from "./icons";

/* ─── Frases de vitória em PT-BR estilo Gen Z ─── */
const FRASES_VITORIA = [
  "🚀 NAAAOOO... VOCÊ É MONSTRO!",
  "🔥 TA PEGANDO FOGO!",
  "⚡ RAIOS TE PARTAM — INCRÍVEL!",
  "👑 REI/RAINA DO ATENDIMENTO",
  "🌟 VOCÊ BRILHA DEMAIS!",
  "🎯 ACERTOU EM CHEIO!",
  "💪 MANDOU MUITO!",
  "🏆 MASTER DO CUIDADO!",
];

function fraseAleatoria(): string {
  return FRASES_VITORIA[Math.floor(Math.random() * FRASES_VITORIA.length)];
}

/* ─── Props ─── */
interface CelebracaoModalProps {
  /** Controla a abertura/fechamento do modal */
  aberto: boolean;
  /** Callback ao fechar */
  onClose: () => void;
  /** Frase personalizada (se não informada, sorteia uma) */
  frase?: string;
  /** Quantidade de XP ganho */
  xpGanho?: number;
  /** Novo nível alcançado */
  nivel?: number;
  /** Nome do badge/item destravado */
  badge?: string;
  /** Duração do confete em ms (default: 4000) */
  duracaoConfete?: number;
}

/**
 * Modal de celebração gamificada.
 * Mostra confete, frase de vitória, XP ganho e/ou novo nível.
 * Usa CSS puro + React state (sem framer-motion).
 */
export function CelebracaoModal({
  aberto,
  onClose,
  frase,
  xpGanho,
  nivel,
  badge,
  duracaoConfete = 4000,
}: CelebracaoModalProps) {
  const [fraseEscolhida, setFraseEscolhida] = useState("");
  const [apareceu, setApareceu] = useState(false);

  useEffect(() => {
    if (aberto) {
      setFraseEscolhida(frase || fraseAleatoria());
      // Pequeno delay pra animação de entrada
      const t = setTimeout(() => setApareceu(true), 50);
      return () => clearTimeout(t);
    } else {
      setApareceu(false);
    }
  }, [aberto, frase]);

  // Fechar com Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && aberto) onClose();
    },
    [aberto, onClose],
  );

  useEffect(() => {
    if (aberto) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [aberto, handleKeyDown]);

  // Fechar automaticamente após 6s se não houver interação
  useEffect(() => {
    if (!aberto) return;
    const timer = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [aberto, onClose]);

  if (!aberto) return null;

  return (
    <>
      {/* Confete */}
      <Confetti ativo={aberto} duracao={duracaoConfete} />

      {/* Overlay */}
      <div
        className="animate-overlay-in fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Celebração"
      >
        {/* Card de celebração */}
        <div
          className="animate-celebration-in relative mx-4 w-full max-w-sm rounded-3xl border-2 border-green-400/40 bg-gradient-to-br from-forest-700 via-green-800 to-forest-800 p-8 text-center shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{
            boxShadow:
              "0 0 60px rgba(76,161,93,0.25), 0 0 120px rgba(76,161,93,0.1)",
          }}
        >
          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Fechar"
          >
            <Icon name="close" size={16} />
          </button>

          {/* Emoji destaque */}
          <div className="mb-2 text-6xl animate-nivel-shine mx-auto inline-flex rounded-full p-2">
            {nivel ? "🎉" : badge ? "🏅" : "🌟"}
          </div>

          {/* Frase de vitória */}
          <p className="animate-victory-phrase mt-3 text-lg font-extrabold leading-snug text-white">
            {fraseEscolhida}
          </p>

          {/* Novo nível */}
          {nivel != null && (
            <div className="animate-xp-celebration mt-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-green-300">
                <Icon name="zap" size={16} />
                NÍVEL {nivel} ALCANÇADO!
              </div>
            </div>
          )}

          {/* XP ganho */}
          {xpGanho != null && xpGanho > 0 && (
            <div className="animate-xp-celebration mt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                <Icon name="sparkles" size={16} />
                +{xpGanho} XP
              </span>
            </div>
          )}

          {/* Badge destravado */}
          {badge && (
            <div className="animate-xp-celebration mt-3 text-sm font-semibold text-white/80">
              🏆 Badge desbloqueado: <span className="text-orange-300">{badge}</span>
            </div>
          )}

          {/* Botão continuar */}
          <button
            onClick={onClose}
            className="animate-xp-celebration mt-6 w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:from-green-600 hover:to-green-700 hover:shadow-xl active:scale-[0.97]"
          >
            Continuar 🚀
          </button>
        </div>
      </div>
    </>
  );
}
