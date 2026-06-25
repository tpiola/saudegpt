"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
  useAnimationFrame,
  AnimatePresence,
  type SpringOptions,
} from "framer-motion";
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
  Users,
  FlaskConical,
  HeartHandshake,
  Star,
  Building2,
  Microscope,
  Stethoscope,
  BadgeCheck,
  Clock,
  Trophy,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN SYSTEM — Premium Navy + White + Subtle Gold
   Escola Profissional de Saúde de Elite

   bg:      #FFFFFF
   surface: #F8F9FB
   accent:  #0A2540 (navy premium)
   gold:    #C4A97D (subtle gold)
   text:    #1A1A2E (primary)
   textSec: #4A4A5E (secondary)
   muted:   #8A8A9E
   ═══════════════════════════════════════════════════════════════ */

const C = {
  bg: "#FFFFFF",
  surface: "#F8F9FB",
  surfaceAlt: "#F0F2F5",
  card: "#FFFFFF",
  accent: "#0A2540",
  accentLight: "rgba(10, 37, 64, 0.06)",
  accentBorder: "rgba(10, 37, 64, 0.12)",
  accentHover: "rgba(10, 37, 64, 0.10)",
  gold: "#C4A97D",
  goldLight: "rgba(196, 169, 125, 0.08)",
  goldBorder: "rgba(196, 169, 125, 0.25)",
  text: "#1A1A2E",
  textSec: "#4A4A5E",
  muted: "#8A8A9E",
} as const;

/* ── Spring Physics ── */
const SPRING: SpringOptions = { stiffness: 100, damping: 20, mass: 0.8 };

/* ── Unsplash Images (real healthcare, no text overlay) ── */
const IMG = {
  heroBg:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=80&auto=format&fit=crop",
  labModern:
    "https://images.unsplash.com/photo-1532187863486-ab48e6e5b8f6?w=1200&q=80&auto=format&fit=crop",
  farmaciaInterior:
    "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80&auto=format&fit=crop",
  healthStudents:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop",
  microscopio:
    "https://images.unsplash.com/photo-1583911860205-72f8ac8dee0e?w=1200&q=80&auto=format&fit=crop",
  farmaciaBranca:
    "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&q=80&auto=format&fit=crop",
  healthcarePro:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop",
};

/* ── Cursos ── */
const CURSOS = [
  {
    id: "farmacia",
    titulo: "Farmácia",
    conselho: "CRF/SP 58.519",
    modulos: 39,
    aulas: 159,
    trilhas: 7,
    icone: Pill,
    descricao:
      "Formação completa para atendentes de farmácia: medicamentos, interações, legislação ANVISA, prática no balcão e atendimento humanizado.",
  },
  {
    id: "nutricao",
    titulo: "Nutrição",
    conselho: "CRN",
    modulos: 17,
    aulas: 25,
    trilhas: 1,
    icone: Apple,
    descricao:
      "Fundamentos da nutrição clínica, avaliação nutricional, dietoterapia e suplementação baseada em evidências científicas.",
  },
  {
    id: "fisioterapia",
    titulo: "Orientação em Reabilitação",
    conselho: "CREFITO",
    modulos: 12,
    aulas: 12,
    trilhas: 1,
    icone: Activity,
    descricao:
      "Orientação sobre produtos ortopédicos, órteses, próteses e auxiliares de reabilitação. Capacitação para venda consultiva e encaminhamento ético.",
  },
  {
    id: "psicologia",
    titulo: "Acolhimento e Saúde Mental",
    conselho: "CRP",
    modulos: 12,
    aulas: 12,
    trilhas: 1,
    icone: Brain,
    descricao:
      "Acolhimento humanizado, identificação de sinais de sofrimento psíquico, orientação sobre adesão medicamentosa e encaminhamento à rede de saúde mental.",
  },
  {
    id: "cuidador-idosos",
    titulo: "Cuidador de Idosos",
    conselho: "SBGG",
    modulos: 15,
    aulas: 15,
    trilhas: 1,
    icone: Heart,
    descricao:
      "Formação completa para cuidadores de idosos: saúde do idoso, cuidados diários, prevenção de quedas, nutrição geriátrica e apoio psicossocial.",
  },
];

/* ── Stats ── */
const STATS = [
  { value: 5, label: "Cursos disponíveis", suffix: "", icone: GraduationCap },
  { value: 95, label: "Módulos completos", suffix: "+", icone: BookOpen },
  { value: 0, label: "Investimento", prefix: "R$", icone: Sparkles, displayText: "R$0" },
  { value: 5, label: "Conselhos de classe", suffix: "", icone: ShieldCheck, displayText: "Multi" },
];

/* ── Marquee ── */
const MARQUEE_WORDS = [
  "FARMÁCIA", "NUTRIÇÃO", "REABILITAÇÃO", "SAÚDE MENTAL",
  "CUIDADOS", "BEM-ESTAR", "EDUCAÇÃO", "EXCELÊNCIA",
];
const MARQUEE = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

/* ═══════════════════════════════════════════════════════════════
   REUSABLE ANIMATION COMPONENTS (preserved from original)
   ═══════════════════════════════════════════════════════════════ */

function AnimatedCounter({
  from = 0,
  to,
  duration = 2.0,
  suffix = "",
  prefix = "",
  displayText,
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  displayText?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(from);
  const springVal = useSpring(motionVal, { stiffness: 60, damping: 15 });

  useEffect(() => {
    if (isInView) motionVal.set(to);
  }, [isInView, to, motionVal]);

  useAnimationFrame(() => {
    if (ref.current && isInView) {
      const val = springVal.get();
      ref.current!.textContent =
        displayText !== undefined ? displayText : `${prefix}${Math.round(val)}${suffix}`;
    }
  });

  if (!isInView && displayText === undefined) {
    return <span ref={ref as React.RefObject<HTMLSpanElement>}>{prefix}0{suffix}</span>;
  }
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{prefix}0{suffix}</span>;
}

function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;
        return (
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.97 }}
            transition={{ ...SPRING, delay: i * staggerDelay }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

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
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.97 }}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({
  children,
  className,
  tiltAmount = 6,
}: {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), SPRING);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), SPRING);
  const scale = useSpring(1, SPRING);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [x, y]
  );
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => scale.set(1.02)}
      onMouseLeave={() => { x.set(0); y.set(0); scale.set(1); }}
      style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GradientText({
  children,
  className,
  as: Tag = "h1",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}) {
  return (
    <Tag
      className={className}
      style={{
        background: `linear-gradient(135deg, ${C.accent} 0%, ${C.gold} 50%, ${C.accent} 100%)`,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline",
      }}
    >
      {children}
    </Tag>
  );
}

function ImageBanner({
  src,
  alt,
  height = "h-48 sm:h-64",
}: {
  src: string;
  alt: string;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.img
        src={src} alt={alt} className="w-full h-full object-cover"
        loading="lazy" decoding="async" style={{ y, scale }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — HERO
   Full-viewport, lab image, dark overlay, bold headline
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <div ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0">
        <img src={IMG.heroBg} alt="Laboratório moderno de saúde" className="w-full h-full object-cover" loading="eager" decoding="async" />
      </motion.div>

      {/* Overlay — navy dark but not opaque */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 via-[#0A2540]/70 to-[#0A2540]/60" />

      {/* Decorative grid pattern — very subtle */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Gold accent line at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C4A97D]/60 to-transparent" />

      {/* Content */}
      <motion.div style={{ y: yContent, opacity }} className="relative z-10 px-6 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...SPRING, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm"
        >
          <Building2 className="w-4 h-4 text-[#C4A97D]" />
          <span className="text-xs tracking-[3px] font-semibold uppercase text-white/90">
            Escola Profissional de Saúde
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
          className="font-display text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.04] tracking-[-2px] mb-6 text-white"
        >
          A nova geração da
          <br />
          <span className="relative inline-block">
            educação&nbsp;
            <span
              style={{
                background: "linear-gradient(135deg, #C4A97D, #E8D5A3, #C4A97D)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              em saúde
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.4 }}
          className="max-w-[620px] mx-auto text-base sm:text-lg leading-relaxed font-body text-white/80"
        >
          Cursos 100% gratuitos com certificado digital. Conteúdo criado por profissionais
          registrados nos conselhos de classe. Excelência em formação profissional na área da saúde.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <Link
            href="/trilhas"
            className="inline-flex h-14 min-h-[44px] items-center justify-center gap-2 rounded-xl px-10 text-base font-semibold text-[#0A2540] bg-white hover:bg-white/95 active:scale-[0.98] transition-all shadow-lg shadow-white/10"
          >
            Comece agora — 100% gratuito
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#cursos"
            className="inline-flex h-14 min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/20 px-8 text-base text-white/90 hover:bg-white/10 active:scale-[0.98] transition-all"
          >
            Explorar cursos
            <ChevronDown className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 text-xs tracking-[3px] uppercase text-white/50"
        >
          Excelência · Profissionalismo · Gratuidade
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[4px] uppercase text-white/40"
      >
        Role para explorar
        <div className="w-px h-6 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MARQUEE TICKER
   ═══════════════════════════════════════════════════════════════ */
function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden border-b border-black/5 bg-[#F8F9FB]">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F8F9FB] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-[#F8F9FB] to-transparent" />
      <div className="flex py-3">
        <div className="marquee-track flex gap-8">
          {MARQUEE.map((word, i) => (
            <span key={i} className="text-xs sm:text-sm font-display font-semibold tracking-[3px] whitespace-nowrap text-[#0A2540]/70">
              {word}
            </span>
          ))}
        </div>
        <div className="marquee-track flex gap-8" aria-hidden="true">
          {MARQUEE.map((word, i) => (
            <span key={`dup-${i}`} className="text-xs sm:text-sm font-display font-semibold tracking-[3px] whitespace-nowrap text-[#0A2540]/70">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — STATS (animated counters)
   ═══════════════════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="group relative rounded-xl p-6 sm:p-7 border border-black/5 bg-white hover:border-[#0A2540]/15 transition-all duration-500"
              style={{ boxShadow: "0 1px 3px rgba(10,37,64,0.04)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(10,37,64,0.10)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(10,37,64,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Top gold accent */}
              <div className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, #C4A97D80, transparent)" }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl" style={{ backgroundColor: C.accentLight, color: C.accent }}>
                  <stat.icone className="w-5 h-5" />
                </div>
              </div>
              <div className="font-display text-[32px] sm:text-[40px] leading-none tracking-[-2px] tabular-nums text-[#0A2540]">
                {stat.displayText ? (
                  stat.displayText
                ) : (
                  <>
                    {stat.prefix ? stat.prefix : ""}
                    <AnimatedCounter from={0} to={stat.value} duration={1.8} suffix={stat.prefix ? "" : stat.suffix} prefix={stat.prefix ? stat.suffix : ""} />
                  </>
                )}
              </div>
              <div className="mt-2 text-sm font-medium text-[#4A4A5E]">{stat.label}</div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — CURSOS (5 premium cards with 3D tilt)
   ═══════════════════════════════════════════════════════════════ */
function CursosSection() {
  return (
    <section id="cursos" className="py-20 sm:py-28" style={{ backgroundColor: C.surface }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#0A2540]/10 bg-[#0A2540]/04">
            <BookOpen className="w-3.5 h-3.5 text-[#0A2540]" />
            <span className="text-xs tracking-[3px] font-semibold uppercase text-[#0A2540]">Nossos Cursos</span>
          </div>
          <h2 className="font-display text-[30px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-1.5px] text-[#1A1A2E]">
            Formação de&nbsp;
            <GradientText as="span">excelência</GradientText>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-[#4A4A5E]">
            Cursos criados por profissionais registrados nos conselhos de classe.
            Conteúdo técnico com certificado digital gratuito.
          </p>
        </FadeUp>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.06}>
          {CURSOS.map((curso) => (
            <TiltCard key={curso.id} tiltAmount={4}>
              <div
                className="group relative rounded-2xl p-6 bg-white border border-black/5 h-full flex flex-col overflow-hidden transition-all duration-500"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 16px 48px -8px rgba(10,37,64,0.15)";
                  e.currentTarget.style.borderColor = "rgba(10,37,64,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)";
                }}
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, #C4A97D99, transparent)" }}
                />

                {/* Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#0A2540]/06 text-[#0A2540] transition-transform duration-300 group-hover:scale-105 min-h-[44px] min-w-[44px] flex items-center justify-center">
                    <curso.icone className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#0A2540]/06 text-[#0A2540]">
                    Disponível
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[20px] leading-tight tracking-[-0.5px] text-[#1A1A2E] group-hover:text-[#0A2540] transition-colors duration-300">
                  {curso.titulo}
                </h3>

                {/* Conselho */}
                <p className="mt-1 text-xs tracking-wide uppercase font-medium text-[#8A8A9E]">{curso.conselho}</p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#4A4A5E] line-clamp-3 flex-1">{curso.descricao}</p>

                {/* Stats row */}
                <div className="mt-5 pt-4 flex items-center justify-between gap-3 border-t border-black/05">
                  <div className="flex items-center gap-1.5 text-xs text-[#4A4A5E]">
                    <BookOpen className="w-3.5 h-3.5 text-[#0A2540]/60" />
                    <span className="font-semibold text-[#1A1A2E]">{curso.modulos}</span> módulos
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#4A4A5E]">
                    <Sparkles className="w-3.5 h-3.5 text-[#0A2540]/60" />
                    <span className="font-semibold text-[#1A1A2E]">{curso.aulas}</span> aulas
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/trilhas"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 min-h-[44px] text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#0A2540]/90 active:scale-[0.98] transition-all shadow-md shadow-[#0A2540]/15"
                >
                  Matricular agora
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </TiltCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4 — DIFERENCIAIS (big icons, no generic text)
   ═══════════════════════════════════════════════════════════════ */
function DiferenciaisSection() {
  const cards = [
    {
      titulo: "Profissionais Registrados",
      descricao:
        "Conteúdo validado por especialistas com registro ativo nos conselhos de classe. Qualidade técnica e científica comprovada por fontes oficiais.",
      icone: ShieldCheck,
    },
    {
      titulo: "Metodologia Própria",
      descricao:
        "Microaulas de 5 a 15 minutos com quizzes, simulações e estudos de caso. Aprendizado ativo e contextualizado para o dia a dia profissional.",
      icone: FlaskConical,
    },
    {
      titulo: "Certificado Digital",
      descricao:
        "Certificado ao concluir cada trilha. Conteúdo supervisionado pelo farmacêutico Thiago Piola (CRF/SP 58.519). Valorize sua carreira.",
      icone: BadgeCheck,
    },
    {
      titulo: "100% Gratuito",
      descricao:
        "Todos os cursos disponíveis sem custo. Acreditamos que a educação profissional em saúde deve ser acessível a todos. Sem mensalidades, sem taxas escondidas.",
      icone: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#C4A97D]/25 bg-[#C4A97D]/06">
            <Star className="w-3.5 h-3.5 text-[#C4A97D]" />
            <span className="text-xs tracking-[3px] font-semibold uppercase text-[#8A7A5E]">Diferenciais</span>
          </div>
          <h2 className="font-display text-[30px] sm:text-[42px] lg:text-[48px] leading-[1.12] tracking-[-1.5px] text-[#1A1A2E]">
            Uma instituição que&nbsp;
            <GradientText as="span">eleva o padrão</GradientText>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-[#4A4A5E]">
            Não somos apenas mais uma plataforma. Somos uma escola profissional
            comprometida com a excelência na formação em saúde.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-7 border border-black/5 bg-white h-full flex flex-col transition-all duration-500"
              style={{ boxShadow: "0 1px 3px rgba(10,37,64,0.04)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 40px -8px rgba(10,37,64,0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(10,37,64,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(10,37,64,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)";
              }}
            >
              {/* Gold accent */}
              <div className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, #C4A97D66, transparent)" }}
              />
              <div className="p-3.5 rounded-xl bg-[#0A2540]/06 text-[#0A2540] mb-5 self-start transition-transform duration-300 group-hover:scale-105 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <card.icone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-[18px] leading-tight tracking-[-0.5px] mb-3 text-[#1A1A2E] group-hover:text-[#0A2540] transition-colors duration-300">
                {card.titulo}
              </h3>
              <p className="text-sm leading-relaxed flex-1 text-[#4A4A5E]">{card.descricao}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 5 — PROVA SOCIAL (real data, verifiable sources)
   ═══════════════════════════════════════════════════════════════ */
function ProvaSocialSection() {
  const items = [
    {
      titulo: "Supervisão Farmacêutica",
      descricao: "Todo o conteúdo é supervisionado pelo farmacêutico Thiago Piola, registrado no CRF/SP sob nº 58.519, garantindo conformidade com as diretrizes da ANVISA e do Ministério da Saúde.",
      icone: Stethoscope,
      destaque: "CRF/SP 58.519",
    },
    {
      titulo: "Referências Oficiais",
      descricao: "Utilizamos exclusivamente fontes verificáveis: ANVISA, Ministério da Saúde, OMS, PubMed e Cochrane. Cada módulo cita suas referências bibliográficas.",
      icone: Microscope,
      destaque: "Fontes verificáveis",
    },
    {
      titulo: "Registro nos Conselhos",
      descricao: "Nossos cursos abrangem conteúdos alinhados às diretrizes de múltiplos conselhos profissionais: CRF, CRN, CREFITO, CRP e SBGG.",
      icone: ShieldCheck,
      destaque: "Multi Conselhos",
    },
  ];

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: C.surface }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#0A2540]/10 bg-[#0A2540]/04">
            <BadgeCheck className="w-3.5 h-3.5 text-[#0A2540]" />
            <span className="text-xs tracking-[3px] font-semibold uppercase text-[#0A2540]">Credibilidade</span>
          </div>
          <h2 className="font-display text-[30px] sm:text-[42px] lg:text-[48px] leading-[1.12] tracking-[-1.5px] text-[#1A1A2E]">
            Construído sobre&nbsp;
            <GradientText as="span">evidências</GradientText>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-[#4A4A5E]">
            Transparência e rigor científico. Cada informação é respaldada por fontes oficiais
            e supervisionada por profissionais registrados.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-7 bg-white border border-black/5 h-full flex flex-col transition-all duration-500"
              style={{ boxShadow: "0 1px 3px rgba(10,37,64,0.04)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 40px -8px rgba(10,37,64,0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(10,37,64,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(10,37,64,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)";
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-[#0A2540]/06 text-[#0A2540] min-h-[48px] min-w-[48px] flex items-center justify-center">
                  <item.icone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-[18px] leading-tight tracking-[-0.5px] text-[#1A1A2E]">
                    {item.titulo}
                  </h3>
                  <span className="text-xs tracking-wide uppercase font-semibold text-[#C4A97D]">{item.destaque}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed flex-1 text-[#4A4A5E]">{item.descricao}</p>
            </div>
          ))}
        </StaggerContainer>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 py-6 border border-black/05 rounded-2xl bg-white">
          {["CRF/SP", "CRN", "CREFITO", "CRP", "SBGG"].map((label) => (
            <div key={label} className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#4A4A5E]">
              <ShieldCheck className="w-4 h-4 text-[#C4A97D]" />
              {label}
            </div>
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
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Subtle pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(10,37,64,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      {/* Subtle orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-[#C4A97D]/08" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none bg-[#0A2540]/04" />

      <FadeUp className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-[#0A2540]/10 bg-[#0A2540]/04">
          <GraduationCap className="w-3.5 h-3.5 text-[#0A2540]" />
          <span className="text-xs tracking-[4px] font-semibold uppercase text-[#0A2540]">Comece sua jornada</span>
        </div>

        <h2 className="font-display text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.08] tracking-[-2px] mb-6 text-[#1A1A2E]">
          Pronto para transformar
          <br />
          sua&nbsp;
          <GradientText as="span">carreira na saúde</GradientText>
          ?
        </h2>

        <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed text-[#4A4A5E]">
          A saúde precisa de profissionais qualificados e humanos como você.
          Comece agora, estude no seu ritmo e conquiste seu certificado digital gratuito.
        </p>

        <Link
          href="/trilhas"
          className="inline-flex h-16 min-h-[44px] items-center justify-center gap-3 rounded-xl px-12 text-lg font-semibold text-white bg-[#0A2540] hover:bg-[#0A2540]/90 active:scale-[0.98] transition-all shadow-xl shadow-[#0A2540]/20"
        >
          Começar a estudar agora
          <ArrowRight className="w-5 h-5" />
        </Link>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs tracking-wide text-[#8A8A9E]">
          <span className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-[#C4A97D]" /> Acesso gratuito</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#C4A97D]" /> Conteúdo profissional</span>
          <span className="flex items-center gap-1.5"><Trophy className="w-3.5 h-3.5 text-[#C4A97D]" /> Certificado digital</span>
        </div>
      </FadeUp>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function SaudegptHome() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        id="conteudo-principal"
        className="overflow-x-hidden font-body"
        style={{ backgroundColor: C.bg, color: C.text }}
      >
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Marquee */}
        <MarqueeTicker />

        {/* 3. Stats */}
        <StatsBar />

        {/* Image: Modern Laboratory */}
        <ImageBanner src={IMG.labModern} alt="Laboratório científico moderno" />

        {/* 4. Cursos */}
        <CursosSection />

        {/* Image: Pharmacy Interior */}
        <ImageBanner src={IMG.farmaciaInterior} alt="Interior de farmácia profissional" />

        {/* 5. Diferenciais */}
        <DiferenciaisSection />

        {/* Image: Healthcare Students */}
        <ImageBanner src={IMG.healthStudents} alt="Estudantes de saúde em laboratório" />

        {/* 6. Prova Social */}
        <ProvaSocialSection />

        {/* Image: Microscope */}
        <ImageBanner src={IMG.microscopio} alt="Microscópio em laboratório de análises" />

        {/* 7. CTA Final */}
        <CtaFinalSection />

        {/* Footer */}
        <footer className="border-t border-black/05 py-12 px-6 bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-display font-medium tracking-wide text-[#0A2540]">
              SaúdeGPT — Escola Profissional de Saúde
            </p>
            <p className="text-xs leading-relaxed max-w-xl mx-auto text-[#4A4A5E]">
              Conteúdo criado pelo farmacêutico{" "}
              <strong className="text-[#1A1A2E]">Thiago Piola — CRF/SP 58.519</strong>.
              {" "}Este material é educativo e não substitui orientação profissional presencial.
              Consulte sempre o(a) farmacêutico(a) para recomendações individualizadas.
            </p>
            <div className="flex items-center justify-center gap-6 text-[10px] tracking-wider uppercase pt-2 text-[#8A8A9E]">
              <Link href="/termos" className="transition-colors hover:text-[#0A2540]">Termos de Uso</Link>
              <Link href="/privacidade" className="transition-colors hover:text-[#0A2540]">Privacidade</Link>
              <Link href="/contato" className="transition-colors hover:text-[#0A2540]">Contato</Link>
            </div>
            <p className="text-[10px] tracking-[2px] uppercase pt-2 text-black/20">
              © {new Date().getFullYear()} SaúdeGPT · Todos os direitos reservados
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
