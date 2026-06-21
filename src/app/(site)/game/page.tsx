"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StopFarma } from "@/components/jogos/StopFarma";
import { ForcaFarma } from "@/components/jogos/ForcaFarma";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

/* ─── Tipos ─── */
interface JogoInfo {
  id: string;
  titulo: string;
  descricao: string;
  emoji: string;
  gradient: string;
  disponivel: boolean;
}

/* ─── Catálogo ─── */
const CATALOGO: JogoInfo[] = [
  {
    id: "stop",
    titulo: "StopFarma",
    descricao:
      "Jogo similar a Stop! com categorias farmacêuticas. Preencha campos como medicamento, princípio ativo, indicações e efeitos colaterais contra o tempo.",
    emoji: "🛑",
    gradient: "from-gold-500/20 via-amber-500/10 to-gold-500/20",
    disponivel: true,
  },
  {
    id: "forca",
    titulo: "ForcaFarma",
    descricao:
      "Jogo da forca com temas farmacêuticos. Descubra palavras como amoxicilina, paracetamol e ibuprofeno com dicas profissionais.",
    emoji: "🎯",
    gradient: "from-emerald-500/20 via-teal-500/10 to-emerald-500/20",
    disponivel: true,
  },
  {
    id: "quiz",
    titulo: "Quiz Rápido",
    descricao:
      "Perguntas de múltipla escolha sobre tarjas, receitas, interações medicamentosas e legislação ANVISA para testar seus conhecimentos.",
    emoji: "🧠",
    gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/20",
    disponivel: false,
  },
  {
    id: "relampago",
    titulo: "Desafio Relâmpago",
    descricao:
      "Perguntas contra o tempo! Responda o máximo de questões farmacêuticas possível antes do cronômetro zerar.",
    emoji: "⚡",
    gradient: "from-purple-500/20 via-violet-500/10 to-purple-500/20",
    disponivel: false,
  },
];

/* ─── Variantes de animação ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 14 },
  },
};

/* ─── Game content wrapper ─── */
function GameContent({ jogo, onVoltar }: { jogo: JogoInfo; onVoltar: () => void }) {
  if (jogo.id === "stop") {
    return (
      <div className="mx-auto max-w-4xl">
        <StopFarma />
        <div className="mt-6 flex justify-center">
          <button
            onClick={onVoltar}
            className="inline-flex items-center gap-2 rounded-xl border border-gold-500/30 bg-[#0D1A15] px-6 py-3 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-500/10 hover:border-gold-500/50"
          >
            ← Voltar para jogos
          </button>
        </div>
      </div>
    );
  }

  if (jogo.id === "forca") {
    return (
      <div className="mx-auto max-w-4xl">
        <ForcaFarma onVoltar={onVoltar} />
      </div>
    );
  }

  // Fallback / indisponível
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto max-w-lg text-center"
    >
      <div className="rounded-2xl border border-gold-500/20 bg-navy-800/60 p-10 backdrop-blur-lg">
        <span className="text-6xl">{jogo.emoji}</span>
        <h2 className="mt-4 text-2xl font-bold text-white">{jogo.titulo}</h2>
        <p className="mt-2 text-navy-300 leading-relaxed">{jogo.descricao}</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-2 text-xs font-semibold text-gold-400">
          🚧 Em breve
        </div>
        <div className="mt-6">
          <button
            onClick={onVoltar}
            className="inline-flex items-center gap-2 rounded-xl border border-gold-500/30 bg-[#0D1A15] px-6 py-3 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-500/10 hover:border-gold-500/50"
          >
            ← Voltar para jogos
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   PÁGINA PÚBLICA DE JOGOS
   ══════════════════════════════════════════════════════════ */
export default function GamePage() {
  const [jogoAtivo, setJogoAtivo] = useState<JogoInfo | null>(null);

  // Ajusta document title quando client-side
  useEffect(() => {
    document.title = jogoAtivo
      ? `${jogoAtivo.titulo} · Jogos · SaúdeGPT`
      : "Jogos Interativos · SaúdeGPT";
  }, [jogoAtivo]);

  /* ─── Tela de jogo ativo ─── */
  if (jogoAtivo) {
    return (
      <div className="min-h-dvh bg-[#050F0D] text-foreground">
        <Header />
        <main className="px-4 py-12 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={jogoAtivo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <GameContent
                jogo={jogoAtivo}
                onVoltar={() => setJogoAtivo(null)}
              />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    );
  }

  /* ════════════════════════════════════════════ */
  /* CATÁLOGO                                    */
  /* ════════════════════════════════════════════ */
  return (
    <div className="min-h-dvh bg-[#050F0D] text-foreground">
      <Header />

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1A15] via-[#080F0D] to-[#050F0D] pb-16 pt-12 sm:pb-20 sm:pt-16">
        {/* Glows decorativos */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-gold-400/8 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full opacity-30 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" aria-hidden>
            <defs>
              <pattern id="game-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#game-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur-sm">
              <span>🎮</span>
              Treinamento gamificado
            </div>

            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Jogos{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 bg-clip-text text-transparent">
                educativos
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
              Aprenda farmacologia, tarjas, receitas e atendimento de balcão de
              forma divertida com nossos jogos interativos gratuitos.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2 rounded-xl border border-gold-500/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <span className="text-gold-400 text-lg">🎮</span>
              <div>
                <span className="text-lg font-bold text-white">
                  {CATALOGO.length}
                </span>
                <span className="ml-1.5 text-xs text-navy-300">jogos</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-gold-500/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <span className="text-gold-400 text-lg">✅</span>
              <div>
                <span className="text-lg font-bold text-white">
                  {CATALOGO.filter((j) => j.disponivel).length}
                </span>
                <span className="ml-1.5 text-xs text-navy-300">disponíveis</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-gold-500/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <span className="text-gold-400 text-lg">🚧</span>
              <div>
                <span className="text-lg font-bold text-white">
                  {CATALOGO.filter((j) => !j.disponivel).length}
                </span>
                <span className="ml-1.5 text-xs text-navy-300">em breve</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-t from-[#050F0D] to-transparent" />
      </section>

      {/* ══════════ GRID DE JOGOS ══════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative -mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {CATALOGO.map((jogo) => (
              <motion.div
                key={jogo.id}
                variants={cardVariants}
                layout
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-800/50 backdrop-blur-xl transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_0_40px_-8px_rgba(212,168,67,0.25)]"
              >
                {/* Glow hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5" />
                </div>

                {/* Faixa decorativa */}
                <div
                  className={`h-1.5 w-full shrink-0 bg-gradient-to-r ${jogo.gradient}`}
                />

                <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${jogo.gradient} shadow-lg text-xl`}
                    >
                      {jogo.emoji}
                    </div>
                    {!jogo.disponivel && (
                      <span className="rounded-full border border-gold-500/20 bg-gold-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-400">
                        Em breve
                      </span>
                    )}
                    {jogo.disponivel && (
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        Disponível
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-bold tracking-tight text-white">
                    {jogo.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-200 line-clamp-3">
                    {jogo.descricao}
                  </p>

                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => jogo.disponivel && setJogoAtivo(jogo)}
                      disabled={!jogo.disponivel}
                      className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                        jogo.disponivel
                          ? "border border-gold-500/30 bg-[#0D1A15] text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/50"
                          : "cursor-not-allowed border border-white/5 bg-navy-800/30 text-navy-500"
                      }`}
                    >
                      {jogo.disponivel ? "Jogar agora →" : "Indisponível"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-xs text-navy-400"
        >
          Novos jogos adicionados regularmente. Treine gratuitamente e evolua
          seus conhecimentos farmacêuticos! 🎯
        </motion.p>
      </section>

      <Footer />
    </div>
  );
}
