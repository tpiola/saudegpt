"use client";

import { useEffect, useState, useCallback, useRef } from "react";
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

/* ─── Partículas de estrelas girando ao redor ─── */
function StarOrbit() {
  const estrelas = [
    { emoji: "⭐", atraso: 0 },
    { emoji: "✨", atraso: 0.3 },
    { emoji: "💫", atraso: 0.6 },
    { emoji: "🌟", atraso: 0.9 },
    { emoji: "🔥", atraso: 1.2 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {estrelas.map((s, i) => (
        <span
          key={i}
          className="absolute text-lg"
          style={{
            animation: `star-orbit 3s ${s.atraso}s ease-in-out infinite`,
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
}

/* ─── Partículas de brilho subindo (confete extra) ─── */
function GlowParticles() {
  const particles = useRef(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 1.5 + Math.random() * 1.5,
      size: 4 + Math.random() * 6,
      color: i % 2 === 0 ? "#34d399" : "#D4A843",
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
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `particle-rise ${p.duration}s ${p.delay}s ease-out infinite`,
          }}
        />
      ))}
    </div>
  );
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
 * Cheio de ALEGRIA — brilho, partículas, bounce e cores emerald+gold.
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

  // Fechar automaticamente após 7s se não houver interação
  useEffect(() => {
    if (!aberto) return;
    const timer = setTimeout(() => {
      onClose();
    }, 7000);
    return () => clearTimeout(timer);
  }, [aberto, onClose]);

  if (!aberto) return null;

  return (
    <>
      {/* Confete */}
      <Confetti ativo={aberto} duracao={duracaoConfete} />

      {/* Overlay com fade-in suave */}
      <div
        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        style={{ animation: "overlay-fade-in 0.3s ease-out forwards" }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Celebração"
      >
        {/* Card de celebração com glow pulsante emerald+gold */}
        <div
          className="relative mx-4 w-full max-w-sm rounded-3xl border-2 border-gold-400/40 bg-gradient-to-br from-navy-700 via-gold-800 to-navy-800 p-8 text-center shadow-2xl joy-glow"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: "bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, joy-glow 2s ease-in-out 0.6s infinite",
          }}
        >
          {/* Partículas de brilho subindo */}
          <GlowParticles />
          
          {/* Estrelas orbitando */}
          <StarOrbit />

          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Fechar"
          >
            <Icon name="close" size={16} />
          </button>

          {/* Emoji destaque com brilho de troféu */}
          <div
            className="mb-2 text-6xl mx-auto inline-flex rounded-full p-2 joy-trophy"
            style={{
              animation: "trophy-glow 2s ease-in-out infinite, bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both",
            }}
          >
            {nivel ? "🎉" : badge ? "🏅" : "🌟"}
          </div>

          {/* Frase de vitória com shimmer dourado */}
          <p
            className="mt-3 text-lg font-extrabold leading-snug joy-gold-shimmer"
            style={{
              animation: "xp-jump 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both, gold-shimmer 2s linear 1s infinite",
            }}
          >
            {fraseEscolhida}
          </p>

          {/* Sub-frase de alegria adicional */}
          <p
            className="mt-1 text-xs text-gold-300/70"
            style={{
              animation: "xp-jump 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both",
            }}
          >
            {nivel
              ? "✨ Você está voando alto! ✨"
              : badge
                ? "🏆 Conquista desbloqueada! 🏆"
                : "💪 Cada passo conta! 💪"}
          </p>

          {/* Novo nível — badge brilhante */}
          {nivel != null && (
            <div
              className="mt-4"
              style={{ animation: "xp-jump 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 px-4 py-1.5 text-sm font-bold text-emerald-300 ring-1 ring-emerald-400/30 joy-badge-pulse">
                <Icon name="zap" size={16} />
                NÍVEL {nivel} ALCANÇADO!
              </div>
            </div>
          )}

          {/* XP ganho — com efeito de brilho extra */}
          {xpGanho != null && xpGanho > 0 && (
            <div
              className="mt-3"
              style={{ animation: "xp-jump 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both" }}
            >
              <span
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-1.5 text-sm font-bold text-white shadow-lg"
                style={{
                  boxShadow: "0 0 20px rgba(0, 201, 167, 0.4), 0 0 40px rgba(0, 201, 167, 0.15)",
                }}
              >
                <Icon name="sparkles" size={16} />
                +{xpGanho} XP
              </span>
            </div>
          )}

          {/* Badge destravado */}
          {badge && (
            <div
              className="mt-3 text-sm font-semibold"
              style={{ animation: "xp-jump 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both" }}
            >
              <span className="text-white/80">
                🏆 Badge desbloqueado:{" "}
                <span className="text-emerald-300 font-bold">{badge}</span>
              </span>
            </div>
          )}

          {/* Botão continuar com glow */}
          <button
            onClick={onClose}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:from-emerald-400 hover:to-emerald-500 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-[0.97]"
            style={{ animation: "xp-jump 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both" }}
          >
            Continuar 🚀
          </button>
        </div>
      </div>
    </>
  );
}
