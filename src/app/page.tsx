"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Pill,
  Heart,
  GraduationCap,
  BookOpen,
  Apple,
  Activity,
  Brain,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Gamepad2,
  Clock,
  Users,
  Zap,
  Flame,
} from "lucide-react";
import {
  FarmaciaVector,
  NutricaoVector,
  ReabilitacaoVector,
  SaudeMentalVector,
  CuidadorVector,
} from "@/components/health-vectors";

/* ═══════════════════════════════════════════════════════════════
   DESIGN SYSTEM — Cyan + Coral + Purple (Gen Z neon dark)
   ═══════════════════════════════════════════════════════════════ */

/* ── Cursos (com nova paleta Gen Z) ── */
const CURSOS = [
  {
    id: "farmacia",
    titulo: "Farmácia",
    conselho: "CRF/SP 58.519",
    cor: "#06B6D4",       // cyan
    corTailwind: "cyan-500",
    modulos: 39,
    aulas: 159,
    trilhas: 7,
    jogos: 9,
    status: "disponivel" as const,
    icone: Pill,
    vector: FarmaciaVector,
    descricao:
      "Formação completa para atendentes de farmácia: medicamentos, interações, legislação ANVISA, prática no balcão e atendimento humanizado.",
  },
  {
    id: "nutricao",
    titulo: "Nutrição",
    conselho: "CRN",
    cor: "#F59E0B",       // amber
    corTailwind: "amber-500",
    status: "disponivel" as const,
    icone: Apple,
    vector: NutricaoVector,
    modulos: 17,
    aulas: 25,
    trilhas: 1,
    jogos: 0,
    descricao:
      "Fundamentos da nutrição clínica, avaliação nutricional, dietoterapia e suplementação baseada em evidências científicas.",
  },
  {
    id: "fisioterapia",
    titulo: "Orientação em Reabilitação",
    conselho: "CREFITO",
    cor: "#3B82F6",       // blue
    corTailwind: "blue-500",
    status: "disponivel" as const,
    icone: Activity,
    vector: ReabilitacaoVector,
    modulos: 12,
    aulas: 12,
    trilhas: 1,
    jogos: 0,
    descricao:
      "Orientação sobre produtos ortopédicos, órteses, próteses e auxiliares de reabilitação. Capacitação para venda consultiva e encaminhamento ético ao fisioterapeuta.",
  },
  {
    id: "psicologia",
    titulo: "Acolhimento e Saúde Mental",
    conselho: "CRP",
    cor: "#A855F7",       // purple
    corTailwind: "purple-500",
    status: "disponivel" as const,
    icone: Brain,
    vector: SaudeMentalVector,
    modulos: 12,
    aulas: 12,
    trilhas: 1,
    jogos: 0,
    descricao:
      "Acolhimento humanizado, identificação de sinais de sofrimento psíquico, orientação sobre adesão medicamentosa e encaminhamento à rede de saúde mental.",
  },
  {
    id: "cuidador-idosos",
    titulo: "Cuidador de Idosos",
    conselho: "SBGG",
    cor: "#FF6B6B",       // coral
    corTailwind: "coral",
    status: "disponivel" as const,
    icone: Heart,
    vector: CuidadorVector,
    modulos: 15,
    aulas: 15,
    trilhas: 1,
    jogos: 0,
    descricao:
      "Formação completa para cuidadores de idosos: saúde do idoso, cuidados diários, prevenção de quedas, nutrição geriátrica e apoio psicossocial.",
  },
];

/* ── Stats atualizados (Gen Z: rápido, direto, com streak) ── */
const STATS = [
  { value: "5", label: "Cursos disponíveis", suffix: "", icone: GraduationCap },
  { value: "95", label: "Módulos", suffix: "+", icone: BookOpen },
  { value: "0", label: "Investimento", suffix: "R$", icone: Sparkles },
  { value: "7", label: "Dias de streak", suffix: "", icone: Flame },
];

/* ── Marquee Keywords ── */
const MARQUEE_KEYWORDS = [
  "FARMÁCIA",
  "NUTRIÇÃO",
  "FISIOTERAPIA",
  "PSICOLOGIA",
  "SAÚDE",
  "BEM-ESTAR",
];

const MARQUEE_DUPLICATED = [...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS];

/* ═══════════════════════════════════════════════════════════════
   FADE-UP ANIMATION HELPER
   ═══════════════════════════════════════════════════════════════ */
function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — HERO (Gen Z neon)
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C14] via-[#0D1520] to-[#080C14]" />

      {/* ── Grid Pattern Overlay ── */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[length:24px_24px]" />

      {/* ── Blur Orbs: Cyan ── */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
      />
      {/* ── Blur Orbs: Coral ── */}
      <motion.div
        style={{ y: yBg }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF6B6B]/8 blur-[100px]"
      />
      {/* ── Blur Orbs: Purple (bottom) ── */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -bottom-40 right-1/3 w-[450px] h-[450px] rounded-full bg-purple-500/6 blur-[130px]"
      />

      {/* ── Animated Accent Lines ── */}
      <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-50" />
      <div className="absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-[#FF6B6B]/20 to-transparent opacity-40" />

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 px-6 text-center max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-[#FF6B6B]/20 bg-[#FF6B6B]/8 backdrop-blur-sm"
        >
          <span className="text-base">🔥</span>
          <span className="text-[#FF6B6B] text-xs tracking-[4px] font-semibold uppercase">
            MATRÍCULAS ABERTAS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-[42px] sm:text-[56px] md:text-[72px] lg:text-[86px] leading-[0.95] tracking-[-3px] text-[#F0F4F8] mb-6"
        >
          Saúde que vicia.
          <br />
          Aprenda jogando.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-[#FF6B6B]">
            100% grátis
          </span>{" "}
          🔥
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-[640px] mx-auto text-lg sm:text-xl text-[#94A3B8] leading-relaxed font-body"
        >
          Microaulas + jogos por curso. Certificado na hora. Up sua carreira.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <Link
            href="/trilhas"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-10 text-base font-semibold text-[#080C14] hover:bg-cyan-400 active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(6,182,212,0.25)]"
          >
            Jogar agora em 2 min
            <Zap className="w-4 h-4" />
          </Link>
          <Link
            href="#cursos"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-500/25 px-8 text-base text-[#F0F4F8] hover:bg-cyan-500/5 transition-all"
          >
            Ver cursos
            <ChevronDown className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 text-xs text-[#64748B] tracking-[2px] uppercase"
        >
          Acesso gratuito • Conteúdo profissional • Certificado digital
        </motion.p>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748B] text-[10px] tracking-[4px] uppercase"
      >
        Role para explorar
        <div className="w-px h-6 bg-gradient-to-b from-cyan-500/40 to-transparent" />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — MARQUEE TICKER
   ═══════════════════════════════════════════════════════════════ */
function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden border-y border-cyan-500/10 bg-[#0D1520]/50">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0D1520] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0D1520] to-transparent pointer-events-none" />

      <div className="flex py-5">
        <div className="marquee-track flex gap-12">
          {MARQUEE_DUPLICATED.map((word, i) => (
            <span
              key={i}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-[#FF6B6B] text-sm sm:text-base font-display font-bold tracking-[3px] whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </div>
        {/* Second copy for seamless loop */}
        <div className="marquee-track flex gap-12" aria-hidden="true">
          {MARQUEE_DUPLICATED.map((word, i) => (
            <span
              key={`dup-${i}`}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-[#FF6B6B] text-sm sm:text-base font-display font-bold tracking-[3px] whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — STATS BAR (atualizado)
   ═══════════════════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <section className="py-16 sm:py-20 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cyan-500/5 rounded-2xl overflow-hidden border border-cyan-500/10">
          {STATS.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1} className="h-full">
              <div className="group bg-[#0D1520]/80 backdrop-blur-sm p-8 lg:p-10 h-full transition-all hover:bg-[#0D1520]">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${stat.icone === Flame ? "bg-[#FF6B6B]/10 text-[#FF6B6B]" : "bg-cyan-500/10 text-cyan-400"}`}>
                    <stat.icone className={`w-5 h-5 ${stat.icone === Flame ? "joy-flame" : ""}`} />
                  </div>
                </div>
                <div className="font-display text-[42px] sm:text-[52px] leading-none tracking-[-2.5px] text-[#F0F4F8] tabular-nums">
                  {stat.value}
                  <span className="text-cyan-400 text-2xl sm:text-3xl align-super ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                <div className="mt-2 text-sm text-[#94A3B8] font-body">{stat.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4 — CURSOS (com nova paleta por card)
   ═══════════════════════════════════════════════════════════════ */
function CursosSection() {
  return (
    <section id="cursos" className="py-20 sm:py-28 bg-[#080C14]/70">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-cyan-500/10 bg-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-400 text-xs tracking-[3px] font-semibold uppercase">
              Nossos Cursos
            </span>
          </div>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-2px] text-[#F0F4F8]">
            Formação de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#FF6B6B]">
              excelência
            </span>
          </h2>
          <p className="mt-3 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Cursos criados por profissionais registrados nos conselhos de classe
          </p>
        </FadeUp>

        {/* Cursos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CURSOS.map((curso, i) => (
            <FadeUp key={curso.id} delay={i * 0.1}>
              <div className="group relative bg-[#0D1520]/80 border border-cyan-500/8 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/25 hover:shadow-[0_12px_40px_-8px_rgba(6,182,212,0.08)] h-full flex flex-col overflow-hidden">
                {/* Top accent line — usa a cor do curso */}
                <div
                  className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${curso.cor}40, transparent)`,
                  }}
                />

                {/* Vector Illustration */}
                <div className="relative w-full h-28 mb-4 rounded-xl overflow-hidden flex items-center justify-center"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${curso.cor}10 0%, transparent 70%)` }}
                >
                  <curso.vector className="w-full h-full max-w-[180px] mx-auto" />
                </div>

                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${curso.cor}18` }}
                  >
                    <curso.icone
                      className="w-6 h-6"
                      style={{ color: curso.cor }}
                    />
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase ${
                      curso.status === "disponivel"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-[#0D1520] text-[#64748B]"
                    }`}
                  >
                    {curso.status === "disponivel" ? "Disponível" : "Em breve"}
                  </span>
                </div>

                {/* Titulo */}
                <h3 className="font-display text-[26px] leading-tight tracking-[-1px] text-[#F0F4F8] group-hover:text-cyan-400 transition-colors duration-300">
                  {curso.titulo}
                </h3>

                {/* Conselho */}
                <p className="mt-1 text-xs text-[#64748B] tracking-wide uppercase font-medium">
                  {curso.conselho}
                </p>

                {/* Descrição */}
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed line-clamp-3 flex-1">
                  {curso.descricao}
                </p>

                {/* Stats */}
                {curso.status === "disponivel" && curso.modulos && (
                  <div className="mt-5 pt-4 border-t border-cyan-500/8 grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400/70" />
                      <span className="text-[#F0F4F8] font-semibold">{curso.modulos}</span> módulos
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400/70" />
                      <span className="text-[#F0F4F8] font-semibold">{curso.aulas}</span> aulas
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                      <ChevronDown className="w-3.5 h-3.5 text-cyan-400/70" />
                      <span className="text-[#F0F4F8] font-semibold">{curso.trilhas}</span> trilhas
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                      <Activity className="w-3.5 h-3.5 text-cyan-400/70" />
                      <span className="text-[#F0F4F8] font-semibold">{curso.jogos}</span> jogos
                    </div>
                  </div>
                )}

                {/* CTA — cor por curso */}
                <div className="mt-5">
                  {curso.status === "disponivel" ? (
                    <Link
                      href="/trilhas"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white hover:brightness-110 active:scale-[0.98] transition-all"
                      style={{ backgroundColor: curso.cor }}
                    >
                      Matricular agora
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/15 bg-[#0D1520]/50 py-3 text-sm text-[#64748B] cursor-not-allowed"
                    >
                      Lista de espera
                    </button>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 5 — POR QUE BOMBA (nova seção Gen Z)
   ═══════════════════════════════════════════════════════════════ */
function PorQueBombaSection() {
  const cards = [
    {
      titulo: "Profissionais registrados",
      descricao:
        "Conteúdo criado por especialistas com registro ativo nos conselhos de classe. Qualidade técnica e científica comprovada.",
      icone: ShieldCheck,
      cor: "#06B6D4", // cyan
    },
    {
      titulo: "Jogos reais",
      descricao:
        "Quizzes, simulações clínicas e desafios interativos que viciam. Aprenda na prática com gameplays que testam seu conhecimento.",
      icone: Gamepad2,
      cor: "#A855F7", // purple
    },
    {
      titulo: "Micro wins 5-15min",
      descricao:
        "Aulas curtas e diretas. Dá pra upar sua carreira no intervalo do café. Progresso visível a cada sessão.",
      icone: Clock,
      cor: "#FF6B6B", // coral
    },
    {
      titulo: "Comunidade",
      descricao:
        "Troque experiências com outros alunos, compartilhe streaks e conquistas. Sua tribo da saúde te espera.",
      icone: Users,
      cor: "#3B82F6", // blue
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0D1520]/60">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#FF6B6B]/15 bg-[#FF6B6B]/5">
            <Zap className="w-3.5 h-3.5 text-[#FF6B6B]" />
            <span className="text-[#FF6B6B] text-xs tracking-[3px] font-semibold uppercase">
              Por que bomba
            </span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-2px] text-[#F0F4F8]">
            A plataforma que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-[#FF6B6B]">
              todo mundo quer
            </span>
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Educação em saúde do jeito que a nova geração aprende: rápido, divertido e direto ao ponto.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className="group relative bg-[#0D1520]/80 border border-cyan-500/8 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/25 hover:shadow-[0_12px_40px_-8px_rgba(6,182,212,0.08)] h-full flex flex-col">
                {/* Top accent */}
                <div
                  className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.cor}40, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="p-3.5 rounded-xl transition-all duration-300 group-hover:scale-110 mb-5 self-start"
                  style={{ backgroundColor: `${card.cor}15` }}
                >
                  <card.icone className="w-6 h-6" style={{ color: card.cor }} />
                </div>

                {/* Title */}
                <h3 className="font-display text-[20px] leading-tight tracking-[-0.5px] text-[#F0F4F8] mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {card.titulo}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed flex-1">
                  {card.descricao}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION — COMO FUNCIONA (Mockup visual)
   ═══════════════════════════════════════════════════════════════ */
function ComoFuncionaSection() {
  const steps = [
    {
      step: "01",
      titulo: "Escolha seu curso",
      desc: "5 cursos disponíveis em saúde. Comece pelo que mais combina com você. Todos 100% gratuitos.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="8" y="6" width="24" height="28" rx="3" />
          <path d="M14 16h12M14 22h8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      step: "02",
      titulo: "Aprenda jogando",
      desc: "Microaulas de 5-15 min com quizzes, simulações e desafios. Ganhe XP e suba no ranking.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 26V14l12 6-12 6Z" fill="currentColor" fillOpacity="0.3" />
          <circle cx="30" cy="12" r="4" />
        </svg>
      ),
    },
    {
      step: "03",
      titulo: "Ganhe certificado",
      desc: "Complete os módulos e conquiste seu certificado digital. Compartilhe no LinkedIn e impulsione sua carreira.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M10 34V12l10-8 10 8v22" />
          <path d="M16 28h8M16 22h8" strokeLinecap="round" />
          <circle cx="20" cy="20" r="8" opacity="0.3" />
        </svg>
      ),
    },
    {
      step: "04",
      titulo: "Upe sua carreira",
      desc: "Conhecimento prático que faz diferença no dia a dia. Destaque-se no mercado de trabalho em saúde.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M20 6l4 8 8 1-5.5 5.5L28 28l-8-4-8 4 1.5-7.5L8 15l8-1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/70 via-[#0D1520] to-[#080C14]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[length:20px_20px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-purple-500/15 bg-purple-500/5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-purple-400 text-xs tracking-[3px] font-semibold uppercase">
              Como Funciona
            </span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-2px] text-[#F0F4F8]">
            Do zero ao certificado em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-[#FF6B6B]">
              4 passos
            </span>
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Simples, rápido e gamificado. Sua jornada de aprendizado começa aqui.
          </p>
        </FadeUp>

        {/* ── Steps Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className="group relative bg-[#0D1520]/80 border border-cyan-500/8 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-500/20 hover:shadow-[0_16px_48px_-8px_rgba(6,182,212,0.06)] h-full">
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-cyan-500/10">
                    {s.icon}
                  </div>
                  <span className="font-display text-[40px] leading-none tracking-[-3px] text-[#F0F4F8]/5 font-bold select-none">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-display text-[18px] leading-tight tracking-[-0.5px] text-[#F0F4F8] mb-2 group-hover:text-cyan-400 transition-colors">
                  {s.titulo}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ── Mockup Device Frame ── */}
        <FadeUp delay={0.5} className="mt-14">
          <div className="mx-auto max-w-md">
            <div className="relative rounded-[28px] border-2 border-cyan-500/15 bg-gradient-to-b from-[#0D1520] to-[#080C14] p-3 shadow-[0_0_80px_rgba(6,182,212,0.06)]">
              {/* Notch */}
              <div className="mx-auto mb-3 h-1.5 w-24 rounded-full bg-[#F0F4F8]/10" />
              {/* Screen content */}
              <div className="aspect-[9/16] rounded-2xl bg-[#020508] overflow-hidden border border-cyan-500/5">
                <div className="h-full flex flex-col items-center justify-center gap-4 p-6">
                  {/* Mini course preview */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-[#020508]" />
                  </div>
                  <div className="w-3/4 h-2 rounded-full bg-[#F0F4F8]/15" />
                  <div className="w-1/2 h-2 rounded-full bg-[#F0F4F8]/10" />
                  {/* XP bar */}
                  <div className="w-3/4 mt-4">
                    <div className="flex justify-between text-[9px] text-[#64748B] mb-1">
                      <span>Progresso</span>
                      <span>68%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#F0F4F8]/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "68%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  {/* Mini CTA */}
                  <div className="w-2/3 h-8 rounded-xl bg-cyan-500/80 flex items-center justify-center mt-2">
                    <span className="text-[10px] font-bold text-[#020508]">Continuar</span>
                  </div>
                </div>
              </div>
              {/* Home indicator */}
              <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-[#F0F4F8]/15" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 6 — CTA FINAL
   ═══════════════════════════════════════════════════════════════ */
function CtaFinalSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C14] via-[#0D1520] to-[#080C14]" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/6 blur-[150px]" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-[#FF6B6B]/6 blur-[100px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(6,182,212,0.04)_1px,transparent_1px)] bg-[length:20px_20px]" />

      <FadeUp className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-[#FF6B6B]/20 bg-[#FF6B6B]/5">
          <Zap className="w-3.5 h-3.5 text-[#FF6B6B]" />
          <span className="text-[#FF6B6B] text-xs tracking-[4px] font-semibold uppercase">
            Comece sua jornada
          </span>
        </div>

        <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.05] tracking-[-2.5px] text-[#F0F4F8] mb-6">
          Pronto para dar
          <br />
          um{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-[#FF6B6B]">
            up na carreira
          </span>
          ?
        </h2>

        <p className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto leading-relaxed">
          Jogue, aprenda e conquiste seu certificado. A saúde precisa de gente como você — preparada, rápida e conectada.
        </p>

        <Link
          href="/trilhas"
          className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-12 text-lg font-bold text-[#080C14] hover:bg-cyan-400 active:scale-[0.98] transition-all shadow-[0_0_60px_rgba(6,182,212,0.25)]"
        >
          Jogar agora em 2 min
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="mt-6 text-xs text-[#64748B] tracking-wide">
          Acesso gratuito • Conteúdo profissional • Certificado digital
        </p>
      </FadeUp>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function SaudegptHome() {
  return (
    <div id="conteudo-principal" className="bg-[#080C14] overflow-x-hidden font-body">
      <HeroSection />
      <MarqueeTicker />
      <StatsBar />
      <CursosSection />
      <PorQueBombaSection />

      {/* ── COMO FUNCIONA — Mockup visual do fluxo de aprendizado ── */}
      <ComoFuncionaSection />

      <CtaFinalSection />

      {/* Footer com disclaimer legal */}
      <footer className="border-t border-cyan-500/10 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm text-cyan-400 font-display font-medium tracking-wide">
            SaúdeGPT — Plataforma de Formação para Profissionais da Saúde
          </p>
          <p className="text-xs text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Conteúdo criado pelo farmacêutico <strong className="text-[#F0F4F8]/70">Thiago Piola — CRF/SP 58.519</strong>.
            Este material é educativo e não substitui orientação profissional presencial.
            Consulte sempre o(a) farmacêutico(a) para recomendações individualizadas.
          </p>
          <div className="flex items-center justify-center gap-6 text-[10px] text-[#64748B]/60 tracking-wider uppercase">
            <a href="/termos" className="hover:text-cyan-400 transition-colors no-underline">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-cyan-400 transition-colors no-underline">Privacidade</a>
            <a href="/contato" className="hover:text-cyan-400 transition-colors no-underline">Contato</a>
          </div>
          <p className="text-[10px] text-[#64748B]/40 tracking-[2px] uppercase pt-2">
            © {new Date().getFullYear()} SaúdeGPT • Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
