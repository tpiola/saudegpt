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
   DESIGN SYSTEM — Premium White + Olive Green + Subtle Gold
   bg:   #FAFAFA (premium white)
   card: #FFFFFF (pure white) + subtle shadows
   accent: #3D6B4F (dark olive green)
   gold:  #C4A97D (subtle gold)
   text:  #1A1A1A (primary) · #555555 (secondary) · #888888 (muted)
   ═══════════════════════════════════════════════════════════════ */

const COLORS = {
  bg: "#FAFAFA",
  card: "#FFFFFF",
  accent: "#3D6B4F",
  accentLight: "rgba(61,107,79,0.08)",
  accentBorder: "rgba(61,107,79,0.18)",
  gold: "#C4A97D",
  goldLight: "rgba(196,169,125,0.10)",
  text: "#1A1A1A",
  textSecondary: "#555555",
  textMuted: "#888888",
} as const;

/* ── Spring Physics (Jack Roberts / Gravity Claw style) ── */
const SPRING: SpringOptions = { stiffness: 100, damping: 20, mass: 0.8 };

/* ── Cursos ── */
const CURSOS = [
  {
    id: "farmacia",
    titulo: "Farmácia",
    conselho: "CRF/SP 58.519",
    cor: "#3D6B4F",
    corBg: "rgba(61,107,79,0.07)",
    corBorder: "rgba(61,107,79,0.25)",
    corHover: "rgba(61,107,79,0.10)",
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
    cor: "#3D6B4F",
    corBg: "rgba(61,107,79,0.07)",
    corBorder: "rgba(61,107,79,0.25)",
    corHover: "rgba(61,107,79,0.10)",
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
    cor: "#3D6B4F",
    corBg: "rgba(61,107,79,0.07)",
    corBorder: "rgba(61,107,79,0.25)",
    corHover: "rgba(61,107,79,0.10)",
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
    cor: "#3D6B4F",
    corBg: "rgba(61,107,79,0.07)",
    corBorder: "rgba(61,107,79,0.25)",
    corHover: "rgba(61,107,79,0.10)",
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
    cor: "#3D6B4F",
    corBg: "rgba(61,107,79,0.07)",
    corBorder: "rgba(61,107,79,0.25)",
    corHover: "rgba(61,107,79,0.10)",
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
  { value: 5, label: "Cursos disponíveis", suffix: "", icone: GraduationCap },
  { value: 95, label: "Módulos", suffix: "+", icone: BookOpen },
  { value: 0, label: "Investimento", suffix: "R$", icone: Sparkles, prefix: true },
  { value: 0, label: "Conselhos de classe", suffix: "", icone: ShieldCheck, displayText: "Multi" },
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

/* ── Unsplash Image URLs ── */
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
   REUSABLE ANIMATION COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

/* ── Animated Counter ── */
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
    if (isInView) {
      motionVal.set(to);
    }
  }, [isInView, to, motionVal]);

  useAnimationFrame(() => {
    if (ref.current && isInView) {
      const val = springVal.get();
      if (displayText !== undefined) {
        ref.current!.textContent = displayText;
      } else {
        ref.current!.textContent = `${prefix}${Math.round(val)}${suffix}`;
      }
    }
  });

  if (!isInView && displayText === undefined) {
    return (
      <span ref={ref as React.RefObject<HTMLSpanElement>}>
        {prefix}0{suffix}
      </span>
    );
  }

  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{prefix}0{suffix}</span>;
}

/* ── Scroll-Driven Stagger Reveal Container ── */
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
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 32, scale: 0.97 }
            }
            transition={{
              ...SPRING,
              delay: i * staggerDelay,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Fade-Up (single element, spring) ── */
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
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.97 }
      }
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── 3D Tilt Card Wrapper ── */
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(cx);
      y.set(cy);
    },
    [x, y]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    scale.set(1.02);
  }, [scale]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  }, [x, y, scale]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Gradient Text Reveal ── */
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
        background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.gold} 50%, ${COLORS.accent} 100%)`,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline",
      }}
    >
      <motion.span
        style={{ display: "inline" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PARALLAX IMAGE BANNER
   ═══════════════════════════════════════════════════════════════ */
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        style={{ y, scale }}
      />
      {/* Overlay gradients blending into bg */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent pointer-events-none"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-transparent pointer-events-none"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — HERO (Premium, with gradient text reveal)
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Background Image with parallax + scale */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0">
        <img
          src={UNSPLASH.heroBg}
          alt="Farmácia e medicamentos"
          className="w-full h-full object-cover opacity-[0.10]"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${COLORS.bg}99, ${COLORS.bg}66, ${COLORS.bg}f2)`,
        }}
      />

      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(61,107,79,0.04) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle orbs */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 60]),
          backgroundColor: "rgba(196,169,125,0.06)",
        }}
        className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 80]),
          backgroundColor: "rgba(61,107,79,0.05)",
        }}
        className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
      />

      {/* Hero Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 px-6 text-center max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...SPRING, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border"
          style={{
            borderColor: COLORS.accentBorder,
            backgroundColor: COLORS.accentLight,
          }}
        >
          <Leaf className="w-4 h-4" style={{ color: COLORS.accent }} />
          <span
            className="text-xs tracking-[3px] font-semibold uppercase"
            style={{ color: COLORS.accent }}
          >
            MATRÍCULAS ABERTAS
          </span>
        </motion.div>

        {/* Headline with gradient text reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
          className="font-display text-[38px] sm:text-[52px] md:text-[64px] lg:text-[78px] leading-[1.02] tracking-[-2.5px] mb-6"
          style={{ color: COLORS.text }}
        >
          Estude saúde com
          <br />
          tranquilidade.{" "}
          <GradientText as="span">
            Seu futuro
          </GradientText>
          <br />
          começa aqui.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.4 }}
          className="max-w-[580px] mx-auto text-base sm:text-lg leading-relaxed font-body"
          style={{ color: COLORS.textSecondary }}
        >
          Cursos 100% gratuitos com certificado digital. Conteúdo criado por profissionais registrados nos conselhos de classe. Estude no seu ritmo, com calma e qualidade.
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
            className="inline-flex h-14 min-h-[44px] items-center justify-center gap-2 rounded-2xl px-10 text-base font-semibold text-white active:scale-[0.98] transition-transform"
            style={{
              backgroundColor: COLORS.accent,
              boxShadow: "0 4px 24px rgba(61,107,79,0.25)",
            }}
          >
            Começar a estudar
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#cursos"
            className="inline-flex h-14 min-h-[44px] items-center justify-center gap-2 rounded-2xl border px-8 text-base transition-all active:scale-[0.98]"
            style={{
              borderColor: COLORS.accentBorder,
              color: COLORS.text,
              backgroundColor: "transparent",
            }}
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
          className="mt-8 text-xs tracking-[2px] uppercase"
          style={{ color: COLORS.textMuted }}
        >
          Acesso gratuito · Conteúdo profissional · Certificado digital
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[4px] uppercase"
        style={{ color: COLORS.textMuted }}
      >
        Role para explorar
        <div
          className="w-px h-6 bg-gradient-to-b to-transparent"
          style={{ backgroundImage: `linear-gradient(to bottom, ${COLORS.accent}4D, transparent)` }}
        />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MARQUEE TICKER
   ═══════════════════════════════════════════════════════════════ */
function MarqueeTicker() {
  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        borderColor: "rgba(61,107,79,0.08)",
        backgroundColor: "#F5F5F0",
      }}
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #F5F5F0, transparent)" }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F5F5F0, transparent)" }}
      />

      <div className="flex py-4">
        <div className="marquee-track flex gap-10">
          {MARQUEE_DUPLICATED.map((word, i) => (
            <span
              key={i}
              className="text-sm sm:text-base font-display font-semibold tracking-[2px] whitespace-nowrap"
              style={{ color: COLORS.accent }}
            >
              {word}
            </span>
          ))}
        </div>
        <div className="marquee-track flex gap-10" aria-hidden="true">
          {MARQUEE_DUPLICATED.map((word, i) => (
            <span
              key={`dup-${i}`}
              className="text-sm sm:text-base font-display font-semibold tracking-[2px] whitespace-nowrap"
              style={{ color: COLORS.accent }}
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
   SECTION 2 — STATS BAR (with animated counters)
   ═══════════════════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <section id="stats" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-5xl mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 sm:p-8 h-full transition-shadow duration-500 border"
              style={{
                backgroundColor: COLORS.card,
                borderColor: "rgba(0,0,0,0.06)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(61,107,79,0.10)";
                e.currentTarget.style.borderColor = "rgba(61,107,79,0.20)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{ backgroundColor: COLORS.accentLight, color: COLORS.accent }}
                >
                  <stat.icone className="w-5 h-5" />
                </div>
              </div>
              <div
                className="font-display text-[36px] sm:text-[44px] leading-none tracking-[-2px] tabular-nums"
                style={{ color: COLORS.text }}
              >
                {stat.displayText ? (
                  stat.displayText
                ) : (
                  <>
                    {stat.prefix ? stat.suffix : ""}
                    <AnimatedCounter
                      from={0}
                      to={stat.value}
                      duration={1.8}
                      suffix={stat.prefix ? "" : stat.suffix}
                      prefix={stat.prefix ? stat.suffix : ""}
                    />
                  </>
                )}
                {stat.suffix && !stat.prefix && !stat.displayText && (
                  <span className="text-xl sm:text-2xl align-super ml-0.5" style={{ color: COLORS.accent }}>
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="mt-2 text-sm font-body" style={{ color: COLORS.textSecondary }}>
                {stat.label}
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — CURSOS (5 cards with 3D tilt)
   ═══════════════════════════════════════════════════════════════ */
function CursosSection() {
  return (
    <section id="cursos" className="py-20 sm:py-28" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeUp className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border"
            style={{
              borderColor: COLORS.accentBorder,
              backgroundColor: COLORS.accentLight,
            }}
          >
            <BookOpen className="w-3.5 h-3.5" style={{ color: COLORS.accent }} />
            <span
              className="text-xs tracking-[3px] font-semibold uppercase"
              style={{ color: COLORS.accent }}
            >
              Nossos Cursos
            </span>
          </div>
          <h2
            className="font-display text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-1.5px]"
            style={{ color: COLORS.text }}
          >
            Formação de{" "}
            <GradientText as="span">
              excelência
            </GradientText>
          </h2>
          <p
            className="mt-3 text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: COLORS.textSecondary }}
          >
            Cursos criados por profissionais registrados nos conselhos de classe
          </p>
        </FadeUp>

        {/* Cursos Grid with 3D Tilt */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.06}
        >
          {CURSOS.map((curso, i) => (
            <TiltCard key={curso.id} tiltAmount={5}>
              <div
                className="group relative rounded-2xl p-6 transition-shadow duration-500 h-full flex flex-col overflow-hidden border"
                style={{
                  backgroundColor: COLORS.card,
                  borderColor: "rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px -8px rgba(61,107,79,0.15)";
                  e.currentTarget.style.borderColor = curso.corBorder;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${COLORS.gold}99, transparent)`,
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
                    className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-105 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    style={{ backgroundColor: curso.corBg }}
                  >
                    <curso.icone className="w-6 h-6" style={{ color: curso.cor }} />
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
                <h3
                  className="font-display text-[22px] leading-tight tracking-[-0.5px] transition-colors duration-300"
                  style={{ color: COLORS.text }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLORS.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = COLORS.text;
                  }}
                >
                  {curso.titulo}
                </h3>

                {/* Conselho */}
                <p
                  className="mt-1 text-xs tracking-wide uppercase font-medium"
                  style={{ color: COLORS.textMuted }}
                >
                  {curso.conselho}
                </p>

                {/* Descrição */}
                <p
                  className="mt-3 text-sm leading-relaxed line-clamp-3 flex-1"
                  style={{ color: COLORS.textSecondary }}
                >
                  {curso.descricao}
                </p>

                {/* Stats */}
                {curso.status === "disponivel" && curso.modulos && (
                  <div
                    className="mt-4 pt-4 grid grid-cols-2 gap-x-4 gap-y-2"
                    style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: COLORS.textSecondary }}>
                      <BookOpen className="w-3.5 h-3.5" style={{ color: `${curso.cor}99` }} />
                      <span className="font-semibold" style={{ color: COLORS.text }}>
                        {curso.modulos}
                      </span>{" "}
                      módulos
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: COLORS.textSecondary }}>
                      <Sparkles className="w-3.5 h-3.5" style={{ color: `${curso.cor}99` }} />
                      <span className="font-semibold" style={{ color: COLORS.text }}>
                        {curso.aulas}
                      </span>{" "}
                      aulas
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: COLORS.textSecondary }}>
                      <Leaf className="w-3.5 h-3.5" style={{ color: `${curso.cor}99` }} />
                      <span className="font-semibold" style={{ color: COLORS.text }}>
                        {curso.trilhas}
                      </span>{" "}
                      trilhas
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: COLORS.textSecondary }}>
                      <Gamepad2 className="w-3.5 h-3.5" style={{ color: `${curso.cor}99` }} />
                      <span className="font-semibold" style={{ color: COLORS.text }}>
                        {curso.jogos}
                      </span>{" "}
                      jogos
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-5">
                  {curso.status === "disponivel" ? (
                    <Link
                      href="/trilhas"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 min-h-[44px] text-sm font-semibold text-white active:scale-[0.98] transition-transform"
                      style={{
                        backgroundColor: COLORS.accent,
                        boxShadow: "0 2px 12px rgba(61,107,79,0.15)",
                      }}
                    >
                      Matricular agora
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border py-3 min-h-[44px] text-sm cursor-not-allowed"
                      style={{
                        borderColor: "rgba(0,0,0,0.08)",
                        backgroundColor: "#F5F5F0",
                        color: COLORS.textMuted,
                      }}
                    >
                      Lista de espera
                    </button>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </StaggerContainer>
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
      cor: COLORS.accent,
    },
    {
      titulo: "Aprendizado interativo",
      descricao:
        "Quizzes, simulações e desafios que tornam o estudo leve e envolvente. Aprenda com tranquilidade e retenha mais.",
      icone: Gamepad2,
      cor: COLORS.gold,
    },
    {
      titulo: "Estudos de 5-15 min",
      descricao:
        "Aulas curtas e objetivas. Encaixe o estudo na sua rotina sem pressa. Progresso visível a cada sessão.",
      icone: Clock,
      cor: COLORS.accent,
    },
    {
      titulo: "Comunidade acolhedora",
      descricao:
        "Troque experiências com outros alunos, compartilhe conquistas. Um ambiente de apoio mútuo para sua jornada.",
      icone: Users,
      cor: COLORS.gold,
    },
  ];

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#F5F5F0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(196,169,125,0.30)",
              backgroundColor: COLORS.goldLight,
            }}
          >
            <HeartHandshake className="w-3.5 h-3.5" style={{ color: COLORS.gold }} />
            <span
              className="text-xs tracking-[3px] font-semibold uppercase"
              style={{ color: "#9B7E5A" }}
            >
              Por que estudar aqui
            </span>
          </div>
          <h2
            className="font-display text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.12] tracking-[-1.5px]"
            style={{ color: COLORS.text }}
          >
            Uma plataforma que{" "}
            <GradientText as="span">
              respeita seu tempo
            </GradientText>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: COLORS.textSecondary }}
          >
            Educação em saúde pensada para quem busca qualidade com calma e profundidade.
          </p>
        </FadeUp>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.08}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-7 transition-all duration-500 h-full flex flex-col border"
              style={{
                backgroundColor: COLORS.card,
                borderColor: "rgba(0,0,0,0.06)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(61,107,79,0.08)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(61,107,79,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.cor}66, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="p-3.5 rounded-xl transition-transform duration-300 group-hover:scale-105 mb-5 self-start min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{ backgroundColor: `${card.cor}14` }}
              >
                <card.icone className="w-6 h-6" style={{ color: card.cor }} />
              </div>

              {/* Title */}
              <h3
                className="font-display text-[18px] leading-tight tracking-[-0.5px] mb-3 transition-colors duration-300"
                style={{ color: COLORS.text }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.text;
                }}
              >
                {card.titulo}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: COLORS.textSecondary }}>
                {card.descricao}
              </p>
            </div>
          ))}
        </StaggerContainer>
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
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(196,169,125,0.05) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(196,169,125,0.30)",
              backgroundColor: COLORS.goldLight,
            }}
          >
            <Star className="w-3.5 h-3.5" style={{ color: COLORS.gold }} />
            <span
              className="text-xs tracking-[3px] font-semibold uppercase"
              style={{ color: "#9B7E5A" }}
            >
              Como Funciona
            </span>
          </div>
          <h2
            className="font-display text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.12] tracking-[-1.5px]"
            style={{ color: COLORS.text }}
          >
            Do zero ao certificado em{" "}
            <GradientText as="span">
              4 passos
            </GradientText>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: COLORS.textSecondary }}
          >
            Simples, tranquilo e acolhedor. Sua jornada de aprendizado começa aqui.
          </p>
        </FadeUp>

        {/* Steps Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.08}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-7 transition-all duration-500 h-full border"
              style={{
                backgroundColor: COLORS.card,
                borderColor: "rgba(0,0,0,0.06)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 36px -8px rgba(61,107,79,0.10)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(61,107,79,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="p-3 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center"
                  style={{ backgroundColor: COLORS.accentLight, color: COLORS.accent }}
                >
                  {s.icon}
                </div>
                <span
                  className="font-display text-[36px] leading-none tracking-[-2px] font-bold select-none"
                  style={{ color: "rgba(0,0,0,0.04)" }}
                >
                  {s.step}
                </span>
              </div>

              <h3
                className="font-display text-[18px] leading-tight tracking-[-0.5px] mb-2 transition-colors"
                style={{ color: COLORS.text }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.text;
                }}
              >
                {s.titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
                {s.desc}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 6 — CTA FINAL
   ═══════════════════════════════════════════════════════════════ */
function CtaFinalSection() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Background decorative */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${COLORS.bg}, #F5F5F0, ${COLORS.bg})`,
        }}
      />

      {/* Subtle orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: COLORS.goldLight }}
      />
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none"
        style={{ backgroundColor: "rgba(61,107,79,0.04)" }}
      />

      <FadeUp className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border"
          style={{
            borderColor: COLORS.accentBorder,
            backgroundColor: COLORS.accentLight,
          }}
        >
          <Leaf className="w-3.5 h-3.5" style={{ color: COLORS.accent }} />
          <span
            className="text-xs tracking-[4px] font-semibold uppercase"
            style={{ color: COLORS.accent }}
          >
            Comece sua jornada
          </span>
        </div>

        <h2
          className="font-display text-[32px] sm:text-[44px] lg:text-[54px] leading-[1.08] tracking-[-2px] mb-6"
          style={{ color: COLORS.text }}
        >
          Pronto para cuidar
          <br />
          da sua{" "}
          <GradientText as="span">
            carreira na saúde
          </GradientText>
          ?
        </h2>

        <p
          className="text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: COLORS.textSecondary }}
        >
          Estude com tranquilidade, conquiste seu certificado. A saúde precisa de profissionais preparados e humanos como você.
        </p>

        <Link
          href="/trilhas"
          className="inline-flex h-16 min-h-[44px] items-center justify-center gap-3 rounded-2xl px-12 text-lg font-semibold text-white active:scale-[0.98] transition-transform"
          style={{
            backgroundColor: COLORS.accent,
            boxShadow: "0 4px 28px rgba(61,107,79,0.25)",
          }}
        >
          Começar a estudar agora
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="mt-6 text-xs tracking-wide" style={{ color: COLORS.textMuted }}>
          Acesso gratuito · Conteúdo profissional · Certificado digital
        </p>
      </FadeUp>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HOME PAGE (with AnimatePresence for smooth transitions)
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
        style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
      >
        {/* Hero */}
        <HeroSection />

        {/* Marquee */}
        <MarqueeTicker />

        {/* Imagem: Natureza calmante */}
        <ImageBanner
          src={UNSPLASH.natureza1}
          alt="Natureza tranquila para inspirar seus estudos"
        />

        {/* Stats */}
        <StatsBar />

        {/* Imagem: Laboratório */}
        <ImageBanner
          src={UNSPLASH.laboratorio}
          alt="Laboratório científico de saúde"
        />

        {/* Cursos */}
        <CursosSection />

        {/* Imagem: Farmácia interior */}
        <ImageBanner
          src={UNSPLASH.farmaciaInterior}
          alt="Interior de farmácia"
        />

        {/* Por que estudar aqui */}
        <PorQueEstudarSection />

        {/* Imagem: Natureza calmante 2 */}
        <ImageBanner
          src={UNSPLASH.natureza2}
          alt="Floresta tranquila para acalmar"
        />

        {/* Como Funciona */}
        <ComoFuncionaSection />

        {/* CTA Final */}
        <CtaFinalSection />

        {/* Footer */}
        <footer
          className="border-t py-12 px-6"
          style={{
            borderColor: "rgba(61,107,79,0.08)",
            backgroundColor: "#F5F5F0",
          }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p
              className="text-sm font-display font-medium tracking-wide"
              style={{ color: COLORS.accent }}
            >
              SaúdeGPT — Plataforma de Formação para Profissionais da Saúde
            </p>
            <p
              className="text-xs leading-relaxed max-w-xl mx-auto"
              style={{ color: COLORS.textSecondary }}
            >
              Conteúdo criado pelo farmacêutico{" "}
              <strong style={{ color: COLORS.text }}>Thiago Piola — CRF/SP 58.519</strong>.
              {" "}Este material é educativo e não substitui orientação profissional presencial.
              Consulte sempre o(a) farmacêutico(a) para recomendações individualizadas.
            </p>
            <div
              className="flex items-center justify-center gap-6 text-[10px] tracking-wider uppercase pt-2"
              style={{ color: COLORS.textMuted }}
            >
              <a
                href="/termos"
                className="transition-colors no-underline"
                style={{ color: COLORS.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.textMuted;
                }}
              >
                Termos de Uso
              </a>
              <a
                href="/privacidade"
                className="transition-colors no-underline"
                style={{ color: COLORS.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.textMuted;
                }}
              >
                Privacidade
              </a>
              <a
                href="/contato"
                className="transition-colors no-underline"
                style={{ color: COLORS.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.textMuted;
                }}
              >
                Contato
              </a>
            </div>
            <p
              className="text-[10px] tracking-[2px] uppercase pt-2"
              style={{ color: "rgba(0,0,0,0.25)" }}
            >
              © {new Date().getFullYear()} SaúdeGPT · Todos os direitos reservados
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
