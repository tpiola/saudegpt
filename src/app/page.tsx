"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ReactLenis } from "lenis/react";

/* ═══════════════════════════════════════════════════════════════
   COURSES DATA
   ═══════════════════════════════════════════════════════════════ */

const COURSES = [
  {
    id: "farmacia",
    title: "Farmácia",
    subtitle: "Atendentes de Farmácia",
    description: "Formação completa para atendentes de farmácia: medicamentos, legislação ANVISA, dispensação segura, atendimento humanizado e cuidado ao paciente.",
    icon: "💊",
    color: "#00C9A7",
    gradient: "from-emerald-500 to-teal-600",
    href: "/",
    stats: "7 trilhas · 39 módulos · 159+ aulas · 9 jogos",
    org: "CRF/SP 58.519",
    features: ["Medicamentos & Balcão Seguro", "Perfumaria & Bem-Estar", "Cuidado Humanizado", "Prática Supervisionada"],
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
  },
  {
    id: "nutricao",
    title: "Nutrição",
    subtitle: "Nutricionistas e Entusiastas",
    description: "Aprenda sobre alimentos, dietas, nutrição clínica, esportiva e funcional. Conteúdo baseado nas diretrizes do CRN e ciência atualizada.",
    icon: "🥗",
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-600",
    href: "https://github.com/tpiola/saudegpt-nutricao",
    stats: "Em breve",
    org: "CRN",
    features: ["Nutrição Clínica", "Alimentos & Dietas", "Avaliação Nutricional", "Prescrição Dietética"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    subtitle: "Fisioterapeutas e Profissionais",
    description: "Formação em fisioterapia baseada nas diretrizes do CREFITO. Reabilitação, traumato-ortopédica, neurológica, respiratória e mais.",
    icon: "🦵",
    color: "#3B82F6",
    gradient: "from-blue-500 to-indigo-600",
    href: "https://github.com/tpiola/saudegpt-fisioterapia",
    stats: "Em breve",
    org: "CREFITO",
    features: ["Traumato-Ortopédica", "Neurológica", "Respiratória", "Desportiva"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    id: "psicologia",
    title: "Psicologia",
    subtitle: "Psicólogos e Estudantes",
    description: "Formação em psicologia baseada nas diretrizes do CRP. Abordagens clínicas, avaliação psicológica, ética profissional e saúde mental.",
    icon: "🧠",
    color: "#A855F7",
    gradient: "from-purple-500 to-pink-600",
    href: "https://github.com/tpiola/saudegpt-psicologia",
    stats: "Em breve",
    org: "CRP",
    features: ["Abordagens Clínicas", "Avaliação Psicológica", "Ética Profissional", "Saúde Mental"],
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=800&q=80",
  },
];

const STATS = [
  { value: 7, label: "Trilhas", suffix: "" },
  { value: 39, label: "Módulos", suffix: "+" },
  { value: 159, label: "Aulas", suffix: "+" },
  { value: 9, label: "Jogos", suffix: "" },
];

/* ═══════════════════════════════════════════════════════════════
   CANVAS PARTICLES — Gold/Teal luxury particles
   ═══════════════════════════════════════════════════════════════ */
function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; life: number; maxLife: number }[] = [];
    const COUNT = 50;
    const COLOR = "0,201,167";
    const PREFERS_REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.05,
        size: Math.random() * 2 + 0.5,
        life: 0,
        maxLife: Math.random() * 600 + 300,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        const fade = p.life < 40 ? p.life / 40 : p.life > p.maxLife - 40 ? (p.maxLife - p.life) / 40 : 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR},${0.5 * fade})`;
        ctx.fill();

        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${COLOR},${0.06 * fade})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        if (p.life > p.maxLife) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.life = 0;
          p.maxLife = Math.random() * 600 + 300;
        }
      });

      if (!PREFERS_REDUCED) animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════════ */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!inView) return;
    setCount(0);
    let current = 0;
    const increment = target / (1500 / 16);
    const timer = setInterval(() => {
      current += increment;
      setCount(current >= target ? target : Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════════════════════ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #0A2540, #00C9A7, #C9A227, #00C9A7)",
        backgroundSize: "200% 100%",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   COURSE CARD — 3D tilt + cinematic reveal
   ═══════════════════════════════════════════════════════════════ */
function CourseCard({ course, index }: { course: (typeof COURSES)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px 0px -80px 0px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateX: isEven ? -5 : 5 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-[1200px]"
      style={{ perspective: "1200px" }}
    >
      <Link
        href={course.href === "/" ? "/trilhas" : course.href}
        className={`group block relative overflow-hidden rounded-3xl border transition-all duration-700 ${
          isHovered ? "shadow-2xl shadow-[${course.color}30] scale-[1.02]" : "shadow-lg"
        }`}
        style={{
          borderColor: isHovered ? `${course.color}50` : "rgba(255,255,255,0.08)",
          transform: isHovered
            ? `perspective(1200px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`
            : "perspective(1200px) rotateY(0deg) rotateX(0deg)",
          transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s, box-shadow 0.3s",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: 0, y: 0 });
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: `url(${course.image})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(5,13,26,0.92) 0%, rgba(5,13,26,0.7) 40%, rgba(5,13,26,0.85) 100%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${course.color}15 0%, transparent 60%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-10 min-h-[320px] sm:min-h-[360px] flex flex-col justify-between">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4"
              style={{
                background: `${course.color}20`,
                border: `1px solid ${course.color}40`,
                color: course.color,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: course.color }} />
              {course.org}
            </motion.div>

            {/* Icon + Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              <span className="text-4xl sm:text-5xl mb-3 block">{course.icon}</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1 font-['Clash_Display',system-ui,sans-serif]">
                {course.title}
              </h3>
              <p className="text-sm sm:text-base font-medium mb-3" style={{ color: course.color }}>
                {course.subtitle}
              </p>
              <p className="text-sm text-white/60 leading-relaxed max-w-lg">{course.description}</p>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.5 }}
            className="mt-6"
          >
            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {course.features.map((f) => (
                <span
                  key={f}
                  className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: `${course.color}12`,
                    border: `1px solid ${course.color}25`,
                    color: `${course.color}CC`,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>

            {/* Stats + CTA */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-white/40">{course.stats}</span>
              <span
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all duration-300 group-hover:gap-3"
                style={{
                  background: `linear-gradient(135deg, ${course.color}, ${course.color}DD)`,
                  color: "#050D1A",
                }}
              >
                {course.stats === "Em breve" ? "Aguardar" : "Acessar curso"}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Glow border on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 30px ${course.color}20, 0 0 60px ${course.color}10`,
          }}
        />
      </Link>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VIDEO HERO BACKGROUND
   ═══════════════════════════════════════════════════════════════ */
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background — Fallback to gradient if video fails */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/imagens/hero_pills.webp"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: "brightness(0.3) saturate(1.2)" }}
        >
          <source src="https://assets.mixkit.co/videos/40858/40858-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/80 to-forest-950/95" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[100px]" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PARALLAX SECTION WRAPPER
   ═══════════════════════════════════════════════════════════════ */
function ParallaxSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    text: "O curso transformou minha forma de atender no balcão. Hoje me sinto segura para orientar os pacientes com confiança.",
    author: "Camila R.",
    role: "Atendente de Farmácia · 3 meses",
    rating: 5,
  },
  {
    text: "A didática é incrível — conteúdos complexos explicados de forma simples. Os jogos e quizzes fixam o aprendizado.",
    author: "Lucas M.",
    role: "Balconista · 6 meses",
    rating: 5,
  },
  {
    text: "Finalmente uma formação que prepara de verdade para o dia a dia na farmácia. Recomendo para toda equipe.",
    author: "Ana C.",
    role: "Farmacêutica Responsável",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A227" stroke="#C9A227" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REVEAL WRAPPER
   ═══════════════════════════════════════════════════════════════ */
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STAGGER CONTAINER
   ═══════════════════════════════════════════════════════════════ */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Cinematic Course Showcase
   ═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [videoReady, setVideoReady] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <ReactLenis root options={{ lerp: 0.06, wheelMultiplier: 1.1 }}>
      <ScrollProgress />
      <CanvasParticles />

      {/* ══════════════════════════════════════════════════════════
          HERO — Video, Particles, Typography, CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
        <HeroVideo />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-300">Plataforma de Formação em Saúde</span>
            </motion.div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight text-white font-['Clash_Display',system-ui,sans-serif]">
              Transforme-se em um
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradientShift_4s_ease_infinite]">
                Profissional da Saúde
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              Cursos completos para Farmácia, Nutrição, Fisioterapia e Psicologia. 
              Conteúdo baseado em órgãos profissionais, com gamificação, IA e prática real.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <motion.a
                href="#cursos"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex h-14 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 text-base font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <span className="relative z-10">Explorar cursos</span>
                <svg className="relative z-10 transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </motion.a>

              <motion.a
                href="/diretor"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-14 items-center gap-2 rounded-2xl border border-white/20 px-8 text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Conheça o diretor
              </motion.a>
            </div>
          </FadeUp>

          {/* Stats Bar */}
          <FadeUp delay={0.4}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto"
            >
              {STATS.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/40 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </FadeUp>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Role para explorar</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COURSES SECTION — The 4 professions
          ══════════════════════════════════════════════════════════ */}
      <ParallaxSection className="relative z-10 py-20 sm:py-28 lg:py-36">
        <section id="cursos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 mb-4 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-xs font-medium text-gold-300">Escolha sua área</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Clash_Display',system-ui,sans-serif]">
                Cursos para{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 bg-clip-text text-transparent">
                  profissionais da saúde
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-white/50">
                Cada curso é desenvolvido com base nas diretrizes dos órgãos profissionais, 
                combinando teoria, prática, gamificação e inteligência artificial.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {COURSES.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </section>
      </ParallaxSection>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS
          ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Clash_Display',system-ui,sans-serif]">
                O que dizem nossos{" "}
                <span className="bg-gradient-to-r from-gold-400 to-emerald-400 bg-clip-text text-transparent">
                  alunos
                </span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:border-gold-500/20 hover:shadow-xl hover:shadow-gold-500/5"
                >
                  <Stars count={t.rating} />
                  <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-[150px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D1A] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white font-['Clash_Display',system-ui,sans-serif] leading-tight">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 bg-clip-text text-transparent">
                transformar sua carreira
              </span>
              ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/50">
              Junte-se a centenas de alunos que já estão se preparando para oferecer 
              um atendimento de excelência na área da saúde.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/trilhas"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex h-14 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 px-8 text-base font-bold text-navy-900 shadow-xl shadow-gold-500/25 transition-all hover:shadow-gold-500/40"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <span className="relative z-10">Começar agora</span>
                <svg className="relative z-10 transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </motion.a>

              <motion.a
                href="/diretor"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-14 items-center gap-2 rounded-2xl border border-white/20 px-8 text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
              >
                Fale conosco
              </motion.a>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* Style for the gradient shift animation */}
      <style jsx global>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .perspective-\\[1200px\\] {
          perspective: 1200px;
        }
      `}</style>
    </ReactLenis>
  );
}
