"use client";

import React, { useRef } from "react";
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
  Leaf,
  FlaskConical,
  HeartHandshake,
  Star,
} from "lucide-react";
import {
  FarmaciaVector,
  NutricaoVector,
  ReabilitacaoVector,
  SaudeMentalVector,
  CuidadorVector,
} from "@/components/health-vectors";

/* ═══════════════════════════════════════════════════════════════
   DESIGN SYSTEM — Cream Calmo & Acolhedor
   Paleta: bg #FAFAFA · texto #1A1A1A · accent #3D6B4F · bege #C4A97D
   ═══════════════════════════════════════════════════════════════ */

/* ── Cursos ── */
const CURSOS = [
  {
    id: "farmacia",
    titulo: "Farmácia",
    conselho: "CRF/SP 58.519",
    cor: "#3D6B4F",
    corBg: "rgba(91,140,90,0.08)",
    corBorder: "rgba(91,140,90,0.2)",
    corHover: "rgba(91,140,90,0.12)",
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
    cor: "#C67B5C",
    corBg: "rgba(198,123,92,0.08)",
    corBorder: "rgba(198,123,92,0.2)",
    corHover: "rgba(198,123,92,0.12)",
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
    cor: "#6B9AC4",
    corBg: "rgba(107,154,196,0.08)",
    corBorder: "rgba(107,154,196,0.2)",
    corHover: "rgba(107,154,196,0.12)",
    status: "disponivel" as const,
    icone: Activity,
    vector: ReabilitacaoVector,
    modulos: 12,
    aulas: 12,
    trilhas: 1,
    jogos: 0,
    descricao:
      "Orientação sobre produtos ortopédicos, órteses, próteses e auxiliares de reabilitação. Capacitação para venda consultiva e encaminhamento ético.",
  },
  {
    id: "psicologia",
    titulo: "Acolhimento e Saúde Mental",
    conselho: "CRP",
    cor: "#9B8EC4",
    corBg: "rgba(155,142,196,0.08)",
    corBorder: "rgba(155,142,196,0.2)",
    corHover: "rgba(155,142,196,0.12)",
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
    cor: "#C4A97D",
    corBg: "rgba(212,165,116,0.08)",
    corBorder: "rgba(212,165,116,0.2)",
    corHover: "rgba(212,165,116,0.12)",
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

/* ── Stats ── */
const STATS = [
  { value: "5", label: "Cursos disponíveis", suffix: "", icone: GraduationCap },
  { value: "95", label: "Módulos", suffix: "+", icone: BookOpen },
  { value: "0", label: "Investimento", suffix: "R$", icone: Sparkles },
  { value: "Multi", label: "Conselhos de classe", suffix: "", icone: ShieldCheck },
];

/* ── Marquee Keywords ── */
const MARQUEE_KEYWORDS = [
  "FARMÁCIA",
  "NUTRIÇÃO",
  "REABILITAÇÃO",
  "SAÚDE MENTAL",
  "CUIDADOS",
  "BEM-ESTAR",
];
const MARQUEE_DUPLICATED = [...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS];

/* ── Unsplash Image URLs (reais, sem IA) ── */
const UNSPLASH = {
  heroBg:
    "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&q=80&auto=format&fit=crop",
  natureza1:
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80&auto=format&fit=crop",
  laboratorio:
    "https://images.unsplash.com/photo-1532187863486-ab48e6e5b8f6?w=1200&q=80&auto=format&fit=crop",
  farmaciaInterior:
    "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80&auto=format&fit=crop",
  natureza2:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
  folhas:
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80&auto=format&fit=crop",
};

/* ═══════════════════════════════════════════════════════════════
   FADE-UP ANIMATION HELPER (sutil, nada agressivo)
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
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BANNER DE IMAGEM ENTRE SEÇÕES
   ═══════════════════════════════════════════════════════════════ */
function ImageBanner({ src, alt, height = "h-48 sm:h-64" }: { src: string; alt: string; height?: string }) {
  return (
    <div className={`relative ${height} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {/* Overlay suave para integração com o fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — HERO (Calmo, Acolhedor)
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#FAFAFA]"
    >
      {/* ── Background Image (Farmácia/Laboratório) ── */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <img
          src={UNSPLASH.heroBg}
          alt="Farmácia e medicamentos"
          className="w-full h-full object-cover opacity-[0.12]"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* ── Overlay gradiente suave ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/60 via-[#FAFAFA]/40 to-[#FAFAFA]/90" />

      {/* ── Decorative leaf pattern ── */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(91,140,90,0.04)_1px,transparent_1px)] bg-[length:28px_28px]" />

      {/* ── Subtle warm orb ── */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-[#C4A97D]/6 blur-[100px]"
      />
      <motion.div
        style={{ y: yBg }}
        className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full bg-[#3D6B4F]/5 blur-[80px]"
      />

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 px-6 text-center max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-[#3D6B4F]/20 bg-[#3D6B4F]/6"
        >
          <Leaf className="w-4 h-4 text-[#3D6B4F]" />
          <span className="text-[#3D6B4F] text-xs tracking-[3px] font-semibold uppercase">
            MATRÍCULAS ABERTAS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-[38px] sm:text-[52px] md:text-[64px] lg:text-[78px] leading-[1.02] tracking-[-2.5px] text-[#1A1A1A] mb-6"
        >
          Estude saúde com
          <br />
          tranquilidade.{" "}
          <span className="text-[#3D6B4F]">
            Seu futuro
          </span>
          <br />
          começa aqui.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-[580px] mx-auto text-base sm:text-lg text-[#6B5D5F] leading-relaxed font-body"
        >
          Cursos 100% gratuitos com certificado digital. Conteúdo criado por profissionais registrados nos conselhos de classe. Estude no seu ritmo, com calma e qualidade.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <Link
            href="/trilhas"
            className="inline-flex h-14 min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-[#3D6B4F] px-10 text-base font-semibold text-white hover:bg-[#4A7A49] active:scale-[0.98] transition-all shadow-[0_4px_24px_rgba(91,140,90,0.2)]"
          >
            Começar a estudar
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#cursos"
            className="inline-flex h-14 min-h-[44px] items-center justify-center gap-2 rounded-2xl border border-[#3D6B4F]/20 px-8 text-base text-[#1A1A1A] hover:bg-[#3D6B4F]/5 transition-all"
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
          className="mt-8 text-xs text-[#777777] tracking-[2px] uppercase"
        >
          Acesso gratuito · Conteúdo profissional · Certificado digital
        </motion.p>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#777777] text-[10px] tracking-[4px] uppercase"
      >
        Role para explorar
        <div className="w-px h-6 bg-gradient-to-b from-[#3D6B4F]/30 to-transparent" />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MARQUEE TICKER (Entre Hero e Stats)
   ═══════════════════════════════════════════════════════════════ */
function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden border-y border-[#3D6B4F]/8 bg-[#F5F5F5]">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#F5F5F5] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#F5F5F5] to-transparent pointer-events-none" />

      <div className="flex py-4">
        <div className="marquee-track flex gap-10">
          {MARQUEE_DUPLICATED.map((word, i) => (
            <span
              key={i}
              className="text-[#3D6B4F] text-sm sm:text-base font-display font-semibold tracking-[2px] whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </div>
        <div className="marquee-track flex gap-10" aria-hidden="true">
          {MARQUEE_DUPLICATED.map((word, i) => (
            <span
              key={`dup-${i}`}
              className="text-[#3D6B4F] text-sm sm:text-base font-display font-semibold tracking-[2px] whitespace-nowrap"
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
   SECTION 2 — STATS BAR
   ═══════════════════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <section id="stats" className="py-16 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.08} className="h-full">
              <div className="group bg-white border border-[#1A1A1A]/6 rounded-2xl p-6 sm:p-8 h-full transition-all hover:shadow-[0_8px_30px_rgba(91,140,90,0.08)] hover:border-[#3D6B4F]/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#3D6B4F]/8 text-[#3D6B4F]">
                    <stat.icone className="w-5 h-5" />
                  </div>
                </div>
                <div className="font-display text-[36px] sm:text-[44px] leading-none tracking-[-2px] text-[#1A1A1A] tabular-nums">
                  {stat.value}
                  <span className="text-[#3D6B4F] text-xl sm:text-2xl align-super ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                <div className="mt-2 text-sm text-[#6B5D5F] font-body">{stat.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — CURSOS (5 cards)
   ═══════════════════════════════════════════════════════════════ */
function CursosSection() {
  return (
    <section id="cursos" className="py-20 sm:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#3D6B4F]/15 bg-[#3D6B4F]/5">
            <BookOpen className="w-3.5 h-3.5 text-[#3D6B4F]" />
            <span className="text-[#3D6B4F] text-xs tracking-[3px] font-semibold uppercase">
              Nossos Cursos
            </span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-1.5px] text-[#1A1A1A]">
            Formação de{" "}
            <span className="text-[#3D6B4F]">
              excelência
            </span>
          </h2>
          <p className="mt-3 text-[#6B5D5F] text-base sm:text-lg max-w-xl mx-auto">
            Cursos criados por profissionais registrados nos conselhos de classe
          </p>
        </FadeUp>

        {/* Cursos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CURSOS.map((curso, i) => (
            <FadeUp key={curso.id} delay={i * 0.08}>
              <div
                className="group relative bg-white border border-[#1A1A1A]/6 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(91,140,90,0.1)] h-full flex flex-col overflow-hidden"
                style={{ borderColor: "rgba(61,44,46,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = curso.corBorder;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(61,44,46,0.06)";
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${curso.cor}60, transparent)`,
                  }}
                />

                {/* Vector Illustration */}
                <div
                  className="relative w-full h-28 mb-4 rounded-xl overflow-hidden flex items-center justify-center"
                  style={{ background: curso.corBg }}
                >
                  <curso.vector className="w-full h-full max-w-[160px] mx-auto" />
                </div>

                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-105 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    style={{ backgroundColor: curso.corBg }}
                  >
                    <curso.icone
                      className="w-6 h-6"
                      style={{ color: curso.cor }}
                    />
                  </div>
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase"
                    style={{
                      backgroundColor: curso.corBg,
                      color: curso.cor,
                    }}
                  >
                    Disponível
                  </span>
                </div>

                {/* Titulo */}
                <h3 className="font-display text-[22px] leading-tight tracking-[-0.5px] text-[#1A1A1A] group-hover:text-[#3D6B4F] transition-colors duration-300">
                  {curso.titulo}
                </h3>

                {/* Conselho */}
                <p className="mt-1 text-xs text-[#777777] tracking-wide uppercase font-medium">
                  {curso.conselho}
                </p>

                {/* Descrição */}
                <p className="mt-3 text-sm text-[#6B5D5F] leading-relaxed line-clamp-3 flex-1">
                  {curso.descricao}
                </p>

                {/* Stats */}
                {curso.status === "disponivel" && curso.modulos && (
                  <div className="mt-4 pt-4 border-t border-[#1A1A1A]/6 grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#6B5D5F]">
                      <BookOpen className="w-3.5 h-3.5" style={{ color: `${curso.cor}99` }} />
                      <span className="text-[#1A1A1A] font-semibold">{curso.modulos}</span> módulos
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#6B5D5F]">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: `${curso.cor}99` }} />
                      <span className="text-[#1A1A1A] font-semibold">{curso.aulas}</span> aulas
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#6B5D5F]">
                      <Leaf className="w-3.5 h-3.5" style={{ color: `${curso.cor}99` }} />
                      <span className="text-[#1A1A1A] font-semibold">{curso.trilhas}</span> trilhas
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#6B5D5F]">
                      <Gamepad2 className="w-3.5 h-3.5" style={{ color: `${curso.cor}99` }} />
                      <span className="text-[#1A1A1A] font-semibold">{curso.jogos}</span> jogos
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-5">
                  {curso.status === "disponivel" ? (
                    <Link
                      href="/trilhas"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 min-h-[44px] text-sm font-semibold text-white hover:brightness-105 active:scale-[0.98] transition-all"
                      style={{ backgroundColor: curso.cor }}
                    >
                      Matricular agora
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#1A1A1A]/10 bg-[#F5F5F5] py-3 min-h-[44px] text-sm text-[#777777] cursor-not-allowed"
                    >
                      Lista de espera
                    </button>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
          {/* Card de benefício extra (5 cards total, um "Why" integrado) */}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4 — POR QUE ESTUDAR AQUI
   ═══════════════════════════════════════════════════════════════ */
function PorQueEstudarSection() {
  const cards = [
    {
      titulo: "Profissionais registrados",
      descricao:
        "Conteúdo criado por especialistas com registro ativo nos conselhos de classe. Qualidade técnica e científica comprovada.",
      icone: ShieldCheck,
      cor: "#3D6B4F",
    },
    {
      titulo: "Aprendizado interativo",
      descricao:
        "Quizzes, simulações e desafios que tornam o estudo leve e envolvente. Aprenda com tranquilidade e retenha mais.",
      icone: Gamepad2,
      cor: "#9B8EC4",
    },
    {
      titulo: "Estudos de 5-15 min",
      descricao:
        "Aulas curtas e objetivas. Encaixe o estudo na sua rotina sem pressa. Progresso visível a cada sessão.",
      icone: Clock,
      cor: "#C67B5C",
    },
    {
      titulo: "Comunidade acolhedora",
      descricao:
        "Troque experiências com outros alunos, compartilhe conquistas. Um ambiente de apoio mútuo para sua jornada.",
      icone: Users,
      cor: "#6B9AC4",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#C4A97D]/25 bg-[#C4A97D]/8">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C4A97D]" />
            <span className="text-[#B0854A] text-xs tracking-[3px] font-semibold uppercase">
              Por que estudar aqui
            </span>
          </div>
          <h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.12] tracking-[-1.5px] text-[#1A1A1A]">
            Uma plataforma que{" "}
            <span className="text-[#3D6B4F]">
              respeita seu tempo
            </span>
          </h2>
          <p className="mt-4 text-[#6B5D5F] text-base sm:text-lg max-w-xl mx-auto">
            Educação em saúde pensada para quem busca qualidade com calma e profundidade.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group relative bg-white border border-[#1A1A1A]/6 rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(91,140,90,0.06)] h-full flex flex-col">
                {/* Top accent */}
                <div
                  className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.cor}40, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="p-3.5 rounded-xl transition-all duration-300 group-hover:scale-105 mb-5 self-start min-h-[44px] min-w-[44px] flex items-center justify-center"
                  style={{ backgroundColor: `${card.cor}12` }}
                >
                  <card.icone className="w-6 h-6" style={{ color: card.cor }} />
                </div>

                {/* Title */}
                <h3 className="font-display text-[18px] leading-tight tracking-[-0.5px] text-[#1A1A1A] mb-3 group-hover:text-[#3D6B4F] transition-colors duration-300">
                  {card.titulo}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B5D5F] leading-relaxed flex-1">
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
   SECTION 5 — COMO FUNCIONA (4 passos)
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
      titulo: "Aprenda com calma",
      desc: "Microaulas de 5-15 min com quizzes e simulações. Estude no seu ritmo, sem pressão.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 26V14l12 6-12 6Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="30" cy="12" r="4" />
        </svg>
      ),
    },
    {
      step: "03",
      titulo: "Ganhe certificado",
      desc: "Complete os módulos e conquiste seu certificado digital. Compartilhe e valorize sua carreira.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M10 34V12l10-8 10 8v22" />
          <path d="M16 28h8M16 22h8" strokeLinecap="round" />
          <circle cx="20" cy="20" r="8" opacity="0.2" />
        </svg>
      ),
    },
    {
      step: "04",
      titulo: "Transforme sua carreira",
      desc: "Conhecimento prático que faz diferença no dia a dia. Destaque-se no mercado de trabalho em saúde.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M20 6l4 8 8 1-5.5 5.5L28 28l-8-4-8 4 1.5-7.5L8 15l8-1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#FAFAFA] overflow-hidden">
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,165,116,0.05)_1px,transparent_1px)] bg-[length:22px_22px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#C4A97D]/25 bg-[#C4A97D]/8">
            <Star className="w-3.5 h-3.5 text-[#C4A97D]" />
            <span className="text-[#B0854A] text-xs tracking-[3px] font-semibold uppercase">
              Como Funciona
            </span>
          </div>
          <h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.12] tracking-[-1.5px] text-[#1A1A1A]">
            Do zero ao certificado em{" "}
            <span className="text-[#3D6B4F]">
              4 passos
            </span>
          </h2>
          <p className="mt-4 text-[#6B5D5F] text-base sm:text-lg max-w-xl mx-auto">
            Simples, tranquilo e acolhedor. Sua jornada de aprendizado começa aqui.
          </p>
        </FadeUp>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group relative bg-white border border-[#1A1A1A]/6 rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_-8px_rgba(91,140,90,0.08)] h-full">
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#3D6B4F]/8 text-[#3D6B4F] min-h-[44px] min-w-[44px] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="font-display text-[36px] leading-none tracking-[-2px] text-[#1A1A1A]/5 font-bold select-none">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-display text-[18px] leading-tight tracking-[-0.5px] text-[#1A1A1A] mb-2 group-hover:text-[#3D6B4F] transition-colors">
                  {s.titulo}
                </h3>
                <p className="text-sm text-[#6B5D5F] leading-relaxed">
                  {s.desc}
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
   SECTION 6 — CTA FINAL
   ═══════════════════════════════════════════════════════════════ */
function CtaFinalSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#FAFAFA]">
      {/* Background decorative */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-[#F5F5F5]/50 to-[#FAFAFA]" />

      {/* Subtle warm orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C4A97D]/6 blur-[120px]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#3D6B4F]/4 blur-[80px]" />

      <FadeUp className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-[#3D6B4F]/20 bg-[#3D6B4F]/6">
          <Leaf className="w-3.5 h-3.5 text-[#3D6B4F]" />
          <span className="text-[#3D6B4F] text-xs tracking-[4px] font-semibold uppercase">
            Comece sua jornada
          </span>
        </div>

        <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[54px] leading-[1.08] tracking-[-2px] text-[#1A1A1A] mb-6">
          Pronto para cuidar
          <br />
          da sua{" "}
          <span className="text-[#3D6B4F]">
            carreira na saúde
          </span>
          ?
        </h2>

        <p className="text-lg text-[#6B5D5F] mb-10 max-w-xl mx-auto leading-relaxed">
          Estude com tranquilidade, conquiste seu certificado. A saúde precisa de profissionais preparados e humanos como você.
        </p>

        <Link
          href="/trilhas"
          className="inline-flex h-16 min-h-[44px] items-center justify-center gap-3 rounded-2xl bg-[#3D6B4F] px-12 text-lg font-semibold text-white hover:bg-[#4A7A49] active:scale-[0.98] transition-all shadow-[0_4px_28px_rgba(91,140,90,0.2)]"
        >
          Começar a estudar agora
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="mt-6 text-xs text-[#777777] tracking-wide">
          Acesso gratuito · Conteúdo profissional · Certificado digital
        </p>
      </FadeUp>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   Estrutura: Hero → Marquee → Natureza Img → Stats → Lab Img → Cursos → Farmácia Img → Por que → Natureza Img → Como Funciona → CTA → Footer
   ═══════════════════════════════════════════════════════════════ */
export default function SaudegptHome() {
  return (
    <div id="conteudo-principal" className="bg-[#FAFAFA] overflow-x-hidden font-body text-[#1A1A1A]">
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Marquee ── */}
      <MarqueeTicker />

      {/* ── Imagem: Natureza calmante ── */}
      <ImageBanner
        src={UNSPLASH.natureza1}
        alt="Natureza tranquila para inspirar seus estudos"
      />

      {/* ── Stats ── */}
      <StatsBar />

      {/* ── Imagem: Laboratório ── */}
      <ImageBanner
        src={UNSPLASH.laboratorio}
        alt="Laboratório científico de saúde"
      />

      {/* ── Cursos ── */}
      <CursosSection />

      {/* ── Imagem: Farmácia interior ── */}
      <ImageBanner
        src={UNSPLASH.farmaciaInterior}
        alt="Interior de farmácia"
      />

      {/* ── Por que estudar aqui ── */}
      <PorQueEstudarSection />

      {/* ── Imagem: Natureza calmante 2 ── */}
      <ImageBanner
        src={UNSPLASH.natureza2}
        alt="Floresta tranquila para acalmar"
      />

      {/* ── Como Funciona ── */}
      <ComoFuncionaSection />

      {/* ── CTA Final ── */}
      <CtaFinalSection />

      {/* ── Footer ── */}
      <footer className="border-t border-[#3D6B4F]/8 bg-[#F5F5F5] py-12 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm text-[#3D6B4F] font-display font-medium tracking-wide">
            SaúdeGPT — Plataforma de Formação para Profissionais da Saúde
          </p>
          <p className="text-xs text-[#6B5D5F] leading-relaxed max-w-xl mx-auto">
            Conteúdo criado pelo farmacêutico{" "}
            <strong className="text-[#1A1A1A]">Thiago Piola — CRF/SP 58.519</strong>.
            {" "}Este material é educativo e não substitui orientação profissional presencial.
            Consulte sempre o(a) farmacêutico(a) para recomendações individualizadas.
          </p>
          <div className="flex items-center justify-center gap-6 text-[10px] text-[#777777] tracking-wider uppercase pt-2">
            <a href="/termos" className="hover:text-[#3D6B4F] transition-colors no-underline">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-[#3D6B4F] transition-colors no-underline">Privacidade</a>
            <a href="/contato" className="hover:text-[#3D6B4F] transition-colors no-underline">Contato</a>
          </div>
          <p className="text-[10px] text-[#777777]/50 tracking-[2px] uppercase pt-2">
            © {new Date().getFullYear()} SaúdeGPT · Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
