"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Pill,
  GraduationCap,
  Award,
  Star,
  Clock,
  Apple,
  Activity,
  Brain,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN SYSTEM — Forest + Emerald + Gold (dark-only premium)
   ═══════════════════════════════════════════════════════════════ */

/* ── Cursos (dados reais do design system) ── */
const CURSOS = [
  {
    id: "farmacia",
    titulo: "Farmácia",
    conselho: "CRF/SP 58.519",
    cor: "#00C9A7",
    corTailwind: "emerald-500",
    modulos: 39,
    aulas: 159,
    trilhas: 7,
    jogos: 9,
    status: "disponivel" as const,
    icone: Pill,
    descricao:
      "Formação completa para atendentes de farmácia: medicamentos, interações, legislação ANVISA, prática no balcão e atendimento humanizado.",
  },
  {
    id: "nutricao",
    titulo: "Nutrição",
    conselho: "CRN",
    cor: "#F59E0B",
    corTailwind: "amber-500",
    status: "embreve" as const,
    icone: Apple,
    descricao:
      "Fundamentos da nutrição clínica, avaliação nutricional, dietoterapia e suplementação baseada em evidências científicas.",
  },
  {
    id: "fisioterapia",
    titulo: "Fisioterapia",
    conselho: "CREFITO",
    cor: "#3B82F6",
    corTailwind: "blue-500",
    status: "embreve" as const,
    icone: Activity,
    descricao:
      "Formação em fisioterapia: anatomia, cinesiologia, reabilitação motora, terapia manual e eletrotermofototerapia.",
  },
  {
    id: "psicologia",
    titulo: "Psicologia",
    conselho: "CRP",
    cor: "#A855F7",
    corTailwind: "purple-500",
    status: "embreve" as const,
    icone: Brain,
    descricao:
      "Psicologia clínica, terapia cognitivo-comportamental, psicopatologia e atendimento humanizado em saúde mental.",
  },
];

/* ── Stats ── */
const STATS = [
  { value: "2.847", label: "Alunos formados", suffix: "+", icone: GraduationCap },
  { value: "94", label: "Taxa de aprovação", suffix: "%", icone: Award },
  { value: "4.97", label: "Avaliação média", suffix: "/5", icone: Star },
  { value: "159", label: "Horas de conteúdo", suffix: "h", icone: Clock },
];

/* ── Marquee Keywords (duplicadas para scroll infinito) ── */
const MARQUEE_KEYWORDS = [
  "CIDADE DOS MÉDICOS",
  "MEDICAMENTOS",
  "SAÚDE",
  "BEM-ESTAR",
  "FARMÁCIA",
  "ATENDIMENTO HUMANIZADO",
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
   SECTION 1 — HERO
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
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />

      {/* ── Grid Pattern Overlay ── */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,201,167,0.06)_1px,transparent_1px)] bg-[length:24px_24px]" />

      {/* ── Blur Orbs: Emerald ── */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/8 blur-[120px]"
      />
      {/* ── Blur Orbs: Gold ── */}
      <motion.div
        style={{ y: yBg }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-400/6 blur-[100px]"
      />
      {/* ── Blur Orbs: Emerald (bottom) ── */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -bottom-40 right-1/3 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[130px]"
      />

      {/* ── Animated Accent Lines ── */}
      <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-50" />
      <div className="absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent opacity-40" />

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 px-6 text-center max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-emerald-500/15 bg-emerald-500/5 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400 text-xs tracking-[4px] font-semibold uppercase">
            Plataforma Premium de Saúde
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-[48px] sm:text-[64px] md:text-[80px] lg:text-[92px] leading-[0.95] tracking-[-3.5px] text-emerald-50 mb-6"
        >
          Transforme sua carreira
          <br />
          na área da{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold-400">
            saúde
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-[640px] mx-auto text-lg sm:text-xl text-muted leading-relaxed font-body"
        >
          Formação premium com conteúdo criado por especialistas registrados.
          Aulas em vídeo, simulações práticas, jogos interativos e certificado
          reconhecido.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <Link
            href="/login"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-10 text-base font-semibold text-forest-950 hover:bg-emerald-400 active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(0,201,167,0.15)]"
          >
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#cursos"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-emerald-500/25 px-8 text-base text-emerald-50 hover:bg-emerald-500/5 transition-all"
          >
            Ver trilhas
            <ChevronDown className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 text-xs text-subtle tracking-[2px] uppercase"
        >
          Matrículas abertas • Acesso imediato • 7 dias de garantia
        </motion.p>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-subtle text-[10px] tracking-[4px] uppercase"
      >
        Role para explorar
        <div className="w-px h-6 bg-gradient-to-b from-emerald-500/40 to-transparent" />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — MARQUEE TICKER
   ═══════════════════════════════════════════════════════════════ */
function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden border-y border-emerald-500/10 bg-forest-950/50">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-forest-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-forest-950 to-transparent pointer-events-none" />

      <div className="flex py-5">
        <div className="marquee-track flex gap-12">
          {MARQUEE_DUPLICATED.map((word, i) => (
            <span
              key={i}
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold-400 text-sm sm:text-base font-display font-bold tracking-[3px] whitespace-nowrap"
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
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold-400 text-sm sm:text-base font-display font-bold tracking-[3px] whitespace-nowrap"
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
   SECTION 3 — STATS BAR
   ═══════════════════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <section className="py-16 sm:py-20 bg-forest-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-emerald-500/5 rounded-2xl overflow-hidden border border-emerald-500/10">
          {STATS.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1} className="h-full">
              <div className="group bg-forest-900/80 backdrop-blur-sm p-8 lg:p-10 h-full transition-all hover:bg-forest-900">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <stat.icone className="w-5 h-5" />
                  </div>
                </div>
                <div className="font-display text-[42px] sm:text-[52px] leading-none tracking-[-2.5px] text-emerald-50 tabular-nums">
                  {stat.value}
                  <span className="text-emerald-400 text-2xl sm:text-3xl align-super ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted font-body">{stat.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4 — CURSOS
   ═══════════════════════════════════════════════════════════════ */
function CursosSection() {
  return (
    <section id="cursos" className="py-20 sm:py-28 bg-forest-950/70">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 text-xs tracking-[3px] font-semibold uppercase">
              Nossos Cursos
            </span>
          </div>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-2px] text-emerald-50">
            Formação de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-gold-400">
              excelência
            </span>
          </h2>
          <p className="mt-3 text-muted text-base sm:text-lg max-w-xl mx-auto">
            Cursos criados por profissionais registrados nos conselhos de classe
          </p>
        </FadeUp>

        {/* Cursos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CURSOS.map((curso, i) => (
            <FadeUp key={curso.id} delay={i * 0.1}>
              <div className="group relative bg-forest-900/80 border border-emerald-500/8 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/25 hover:shadow-[0_12px_40px_-8px_rgba(0,201,167,0.08)] h-full flex flex-col">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${curso.cor}40, transparent)`,
                  }}
                />

                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${curso.cor}12` }}
                  >
                    <curso.icone
                      className="w-6 h-6"
                      style={{ color: curso.cor }}
                    />
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase ${
                      curso.status === "disponivel"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-forest-800 text-subtle"
                    }`}
                  >
                    {curso.status === "disponivel" ? "Disponível" : "Em breve"}
                  </span>
                </div>

                {/* Titulo */}
                <h3 className="font-display text-[26px] leading-tight tracking-[-1px] text-emerald-50 group-hover:text-emerald-400 transition-colors duration-300">
                  {curso.titulo}
                </h3>

                {/* Conselho */}
                <p className="mt-1 text-xs text-subtle tracking-wide uppercase font-medium">
                  {curso.conselho}
                </p>

                {/* Descrição */}
                <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3 flex-1">
                  {curso.descricao}
                </p>

                {/* Stats (only for Farmácia) */}
                {curso.status === "disponivel" && curso.modulos && (
                  <div className="mt-5 pt-4 border-t border-emerald-500/8 grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400/70" />
                      <span className="text-emerald-50 font-semibold">{curso.modulos}</span> módulos
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400/70" />
                      <span className="text-emerald-50 font-semibold">{curso.aulas}</span> aulas
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <ChevronDown className="w-3.5 h-3.5 text-emerald-400/70" />
                      <span className="text-emerald-50 font-semibold">{curso.trilhas}</span> trilhas
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Activity className="w-3.5 h-3.5 text-emerald-400/70" />
                      <span className="text-emerald-50 font-semibold">{curso.jogos}</span> jogos
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-5">
                  {curso.status === "disponivel" ? (
                    <Link
                      href="/login"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-forest-950 hover:bg-emerald-400 active:scale-[0.98] transition-all"
                    >
                      Matricular agora
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/15 bg-forest-800/50 py-3 text-sm text-subtle cursor-not-allowed"
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
   SECTION 5 — DIFERENCIAIS
   ═══════════════════════════════════════════════════════════════ */
function DiferenciaisSection() {
  const diferenciais = [
    {
      titulo: "Conteúdo Registrado",
      descricao:
        "Todo o conteúdo é produzido por profissionais com registro ativo nos conselhos de classe (CRF, CRN, CREFITO, CRP). Qualidade técnica e científica comprovada.",
      icone: ShieldCheck,
    },
    {
      titulo: "Metodologia Ativa",
      descricao:
        "Aprendizado baseado em casos clínicos reais, simulações práticas, quizzes gamificados e avaliações formativas. Você aprende fazendo, não apenas assistindo.",
      icone: BookOpen,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-forest-900/60">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-2px] text-emerald-50">
            Por que escolher o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-gold-400">
              SaúdeGPT
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {diferenciais.map((diff, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div className="group bg-forest-900/80 border border-emerald-500/8 rounded-2xl p-8 sm:p-10 transition-all duration-500 hover:border-emerald-500/20 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(0,201,167,0.06)]">
                <div className="flex items-start gap-5">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <diff.icone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-[24px] leading-tight tracking-[-1px] text-emerald-50 mb-3">
                      {diff.titulo}
                    </h3>
                    <p className="text-muted leading-relaxed">{diff.descricao}</p>
                  </div>
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
   SECTION 6 — CTA FINAL
   ═══════════════════════════════════════════════════════════════ */
function CtaFinalSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[150px]" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-gold-400/5 blur-[100px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,201,167,0.04)_1px,transparent_1px)] bg-[length:20px_20px]" />

      <FadeUp className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-gold-400/20 bg-gold-400/5">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-gold-400 text-xs tracking-[4px] font-semibold uppercase">
            Comece sua jornada
          </span>
        </div>

        <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.05] tracking-[-2.5px] text-emerald-50 mb-6">
          Pronto para transformar
          <br />
          sua{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold-400">
            carreira na saúde
          </span>
          ?
        </h2>

        <p className="text-lg text-muted mb-10 max-w-xl mx-auto leading-relaxed">
          Junte-se a mais de 2.800 alunos que já estão transformando suas carreiras com
          conteúdo de qualidade criado por especialistas.
        </p>

        <Link
          href="/login"
          className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-gold-400 px-12 text-lg font-bold text-forest-950 hover:bg-gold-500 active:scale-[0.98] transition-all shadow-[0_0_60px_rgba(212,168,67,0.15)]"
        >
          Matricular agora
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="mt-6 text-xs text-subtle tracking-wide">
          Acesso imediato • 7 dias de garantia • Cancele quando quiser
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
    <div id="conteudo-principal" className="bg-forest-950 overflow-x-hidden font-body">
      <HeroSection />
      <MarqueeTicker />
      <StatsBar />
      <CursosSection />
      <DiferenciaisSection />
      <CtaFinalSection />

      {/* Footer com disclaimer legal */}
      <footer className="border-t border-emerald-500/10 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm text-emerald-400 font-display font-medium tracking-wide">
            SaúdeGPT — Plataforma de Formação para Profissionais da Saúde
          </p>
          <p className="text-xs text-subtle leading-relaxed max-w-xl mx-auto">
            Conteúdo criado pelo farmacêutico <strong className="text-emerald-50/70">Thiago Piola — CRF/SP 58.519</strong>.
            Este material é educativo e não substitui orientação profissional presencial.
            Consulte sempre o(a) farmacêutico(a) para recomendações individualizadas.
          </p>
          <div className="flex items-center justify-center gap-6 text-[10px] text-subtle/60 tracking-wider uppercase">
            <a href="/termos" className="hover:text-emerald-400 transition-colors no-underline">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-emerald-400 transition-colors no-underline">Privacidade</a>
            <a href="/contato" className="hover:text-emerald-400 transition-colors no-underline">Contato</a>
          </div>
          <p className="text-[10px] text-subtle/40 tracking-[2px] uppercase pt-2">
            © {new Date().getFullYear()} SaúdeGPT • Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
