"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  jogosCatalogo, jogoTarjas, jogoReceita, jogoSintomaCategoria,
  jogoVelocidade, jogoFatoOuFake, jogoCenarioBalcao,
} from "@/content/jogos";
import type { JogoCatalogo, QuestaoJogo } from "@/content/jogos";
import { JogoQuiz } from "@/components/jogo-quiz";
import { SpeedChallenge } from "@/components/jogos/SpeedChallenge";
import { FatoOuFake } from "@/components/jogos/FatoOuFake";
import { ModoSobrevivencia } from "@/components/jogos/ModoSobrevivencia";
import { CenarioBalcao } from "@/components/jogos/CenarioBalcao";
import { StopFarma } from "@/components/jogos/StopFarma";
import { ForcaFarma } from "@/components/jogos/ForcaFarma";
import { Icon } from "@/components/icons";
import { Botao } from "@/components/ui";

/* ─── Variantes de animação ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 14 },
  },
};

/* ─── Mapa: cada jogo → componente com dados corretos ─── */
const DADOS_JOGOS: Record<string, QuestaoJogo[]> = {
  tarjas: jogoTarjas,
  receitas: jogoReceita,
  sintomas: jogoSintomaCategoria,
  velocidade: jogoVelocidade,
  "fato-ou-fake": jogoFatoOuFake,
  sobrevivencia: jogoCenarioBalcao,
  cenario: jogoCenarioBalcao,
};

function renderizarJogo(id: string, titulo: string) {
  const questoes = DADOS_JOGOS[id];
  if (!questoes) return null;
  switch (id) {
    case "velocidade":
      return <SpeedChallenge titulo={titulo} questoes={questoes} />;
    case "fato-ou-fake":
      return <FatoOuFake titulo={titulo} questoes={questoes} />;
    case "sobrevivencia":
      return <ModoSobrevivencia titulo={titulo} questoes={questoes} />;
    case "cenario":
      return <CenarioBalcao titulo={titulo} questoes={questoes} />;
    case "stop":
      return <StopFarma />;
    case "forca":
      return <ForcaFarma onVoltar={() => window.history.back()} />;
    default:
      return <JogoQuiz titulo={titulo} questoes={questoes} />;
  }
}

/* ─── Badge de dificuldade ─── */
function NivelBadge({ nivel }: { nivel: JogoCatalogo["nivel"] }) {
  const map: Record<string, string> = {
    Básico: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    Intermediário: "bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300",
    Avançado: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${map[nivel] || map.Básico}`}>
      {nivel}
    </span>
  );
}

/* ─── Card individual do jogo ─── */
function JogoCard({ jogo, index, onJogar }: { jogo: JogoCatalogo; index: number; onJogar: (id: string) => void }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:border-gold-400/30 hover:shadow-[0_0_40px_-8px_rgba(212,168,67,0.25)] dark:bg-navy-900/60 dark:hover:border-gold-400/30 dark:hover:shadow-[0_0_40px_-8px_rgba(212,168,67,0.15)]"
    >
      {/* Glow hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/5 via-transparent to-gold-400/5" />
      </div>

      {/* Faixa decorativa */}
      <div className={`h-1.5 w-full shrink-0 bg-gradient-to-r ${jogo.gradient}`} />

      <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${jogo.gradient} shadow-lg`}>
            <Icon name={jogo.icone} size={22} className="text-white" />
          </div>
          <NivelBadge nivel={jogo.nivel} />
        </div>

        <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{jogo.titulo}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">{jogo.descricao}</p>

        {/* Stats */}
        <div className="mt-auto flex items-center gap-4 border-t border-border/60 pt-3">
          <div className="flex items-center gap-1.5 text-xs text-subtle">
            <Icon name="hash" size={13} />
            <span className="font-semibold">{jogo.questoes}</span>
            <span>questões</span>
          </div>
          {jogo.recorde && (
            <div className="flex items-center gap-1.5 text-xs text-subtle">
              <Icon name="award" size={13} className="text-gold-500" />
              <span className="font-semibold text-gold-600 dark:text-gold-400">{jogo.recorde}</span>
              <span>recorde</span>
            </div>
          )}
        </div>

        <Botao
          className="mt-4 w-full"
          onClick={() => onJogar(jogo.id)}
          iconeFim="arrow"
          tamanho="md"
          variante="glass"
        >
          Jogar agora
        </Botao>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ══════════════════════════════════════════════════════════ */
export default function JogosPage() {
  const [jogoAtivo, setJogoAtivo] = useState<string | null>(null);
  const jogo = jogosCatalogo.find((j) => j.id === jogoAtivo);
  const totalQuestoes = jogosCatalogo.reduce((acc, j) => acc + j.questoes, 0);

  // Tela de jogo ativo
  if (jogoAtivo && jogo) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setJogoAtivo(null)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <Icon name="arrow" size={16} className="rotate-180" />
          Voltar para jogos
        </motion.button>

        <motion.div
          key={jogoAtivo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
        >
          {renderizarJogo(jogoAtivo, jogo.titulo)}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ════════════════════════════════════════════ */}
      {/* HERO                                      */}
      {/* ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-850 to-navy-800 pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-navy-700/30 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" aria-hidden>
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur-sm">
              <Icon name="sparkles" size={12} />
              Modo treinamento gamificado
            </div>

            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Jogos de{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 bg-clip-text text-transparent">
                balcão
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
              Pratique tarjas, receitas, sintomas e condutas com jogos interativos.
              Cada desafio simula situações reais do dia a dia na farmácia.
            </p>
          </motion.div>

          {/* Stats hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <Icon name="hash" size={16} className="text-gold-400" />
              <div>
                <span className="text-lg font-bold text-white">{jogosCatalogo.length}</span>
                <span className="ml-1.5 text-xs text-navy-300">jogos</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <Icon name="clipboard" size={16} className="text-gold-400" />
              <div>
                <span className="text-lg font-bold text-white">{totalQuestoes}</span>
                <span className="ml-1.5 text-xs text-navy-300">questões</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <Icon name="zap" size={16} className="text-gold-400" />
              <div>
                <span className="text-lg font-bold text-white">4</span>
                <span className="ml-1.5 text-xs text-navy-300">modalidades</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* GRID DE JOGOS                              */}
      {/* ════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative -mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {jogosCatalogo.map((jogo, i) => (
              <JogoCard key={jogo.id} jogo={jogo} index={i} onJogar={setJogoAtivo} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-xs text-muted"
        >
          Novos jogos adicionados regularmente. Continue treinando para evoluir no balcão! 🎯
        </motion.p>
      </section>
    </div>
  );
}
