"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ReactLenis } from "lenis/react";

/* ═══════════════════════════════════════════════════════════════
   ÍCONES SVG (evita dependência de lucide no bundle inicial)
   ═══════════════════════════════════════════════════════════════ */

const Icon = ({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) => {
  const icons: Record<string, React.JSX.Element> = {
    pill: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c-3-3-7-4.5-7-9a7 7 0 0 1 14 0c0 4.5-4 6-7 9Z" /><path d="M12 12c0-3 1.5-5 4-6" /><path d="M12 12c0-3-1.5-5-4-6" />
      </svg>
    ),
    leaf: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    bone: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 10a3 3 0 0 1 0-6 3 3 0 0 1 0 6Z" /><path d="M7 14a3 3 0 0 1 0 6 3 3 0 0 1 0-6Z" /><path d="M10 17l4-4" /><path d="M14 7l-4 4" />
      </svg>
    ),
    brain: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.52-4.2A2.5 2.5 0 0 1 5 9.5 2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .52-4.2A2.5 2.5 0 0 0 19 9.5 2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
    book: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
    users: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    award: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    clock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    arrowRight: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
    graduation: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    play: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="m10 8 6 4-6 4Z" />
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  };
  return <span className={className}>{icons[name] || null}</span>;
};

/* ═══════════════════════════════════════════════════════════════
   COURSES DATA — Profissional, institucional
   ═══════════════════════════════════════════════════════════════ */

const COURSES = [
  {
    id: "farmacia",
    title: "Farmácia",
    subtitle: "Formação para Atendentes de Farmácia",
    description: "Domine medicamentos, legislação ANVISA, dispensação segura e atendimento humanizado. Curso completo do básico ao avançado.",
    icon: "pill",
    color: "#00C9A7",
    bgGradient: "from-emerald-600/20 via-emerald-600/5 to-transparent",
    borderColor: "rgba(0,201,167,0.25)",
    hoverBorder: "rgba(0,201,167,0.5)",
    href: "/trilhas",
    modules: 39,
    classes: 159,
    games: 9,
    status: "disponivel",
    badge: "CRF/SP 58.519",
    badgeColor: "#00C9A7",
  },
  {
    id: "nutricao",
    title: "Nutrição",
    subtitle: "Para Nutricionistas e Entusiastas",
    description: "Alimentos, dietas, nutrição clínica e funcional. Conteúdo baseado nas diretrizes do CRN e na ciência mais atualizada.",
    icon: "leaf",
    color: "#F59E0B",
    bgGradient: "from-amber-600/20 via-amber-600/5 to-transparent",
    borderColor: "rgba(245,158,11,0.25)",
    hoverBorder: "rgba(245,158,11,0.5)",
    href: "https://github.com/tpiola/saudegpt-nutricao",
    modules: 0,
    classes: 0,
    games: 0,
    status: "em-breve",
    badge: "CRN",
    badgeColor: "#F59E0B",
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    subtitle: "Para Fisioterapeutas e Profissionais",
    description: "Reabilitação, traumato-ortopédica, neurológica e respiratória. Formação baseada nas diretrizes do CREFITO.",
    icon: "bone",
    color: "#3B82F6",
    bgGradient: "from-blue-600/20 via-blue-600/5 to-transparent",
    borderColor: "rgba(59,130,246,0.25)",
    hoverBorder: "rgba(59,130,246,0.5)",
    href: "https://github.com/tpiola/saudegpt-fisioterapia",
    modules: 0,
    classes: 0,
    games: 0,
    status: "em-breve",
    badge: "CREFITO",
    badgeColor: "#3B82F6",
  },
  {
    id: "psicologia",
    title: "Psicologia",
    subtitle: "Para Psicólogos e Estudantes",
    description: "Abordagens clínicas, avaliação psicológica, ética profissional e saúde mental. Conteúdo alinhado às diretrizes do CRP.",
    icon: "brain",
    color: "#A855F7",
    bgGradient: "from-purple-600/20 via-purple-600/5 to-transparent",
    borderColor: "rgba(168,85,247,0.25)",
    hoverBorder: "rgba(168,85,247,0.5)",
    href: "https://github.com/tpiola/saudegpt-psicologia",
    modules: 0,
    classes: 0,
    games: 0,
    status: "em-breve",
    badge: "CRP",
    badgeColor: "#A855F7",
  },
];

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════════ */
function AnimatedCounter({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
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

  return <span ref={ref} className="tabular-nums">{count.toFixed(decimals)}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL PROGRESS
   ═══════════════════════════════════════════════════════════════ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] origin-left"
      style={{ scaleX, background: "linear-gradient(90deg, #042F29, #00C9A7, #D4A843)" }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   REVEAL
   ═══════════════════════════════════════════════════════════════ */
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Institucional, limpo, profissional
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background sutil — gradiente + grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/3 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-500/3 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/15 bg-emerald-500/8 px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Plataforma de Formação em Saúde
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white font-['Clash_Display',system-ui,sans-serif]">
              Formação completa para{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 bg-clip-text text-transparent">
                profissionais da saúde
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-4 text-base sm:text-lg text-emerald-50/60 max-w-xl leading-relaxed">
              Cursos online para Farmácia, Nutrição, Fisioterapia e Psicologia. 
              Conteúdo desenvolvido por profissionais registrados, com gamificação, 
              simulações práticas e certificado.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/trilhas"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Icon name="graduation" size={18} />
                Ver cursos disponíveis
                <Icon name="arrowRight" size={16} />
              </Link>
              <Link
                href="/diretor"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6 text-sm font-medium text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <Icon name="shield" size={16} />
                Conheça o diretor
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Métricas institucionais */}
        <FadeUp delay={0.2}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl bg-white/[0.02] border border-white/[0.04] rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
            {[
              { icon: "graduation", value: 7, label: "Cursos", suffix: "" },
              { icon: "book", value: 159, label: "Aulas", suffix: "+" },
              { icon: "clock", value: 240, label: "Horas de conteúdo", suffix: "+" },
              { icon: "award", value: 4.9, label: "Avaliação", suffix: "", decimals: 1 },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-1.5 text-emerald-400/60">
                  <Icon name={m.icon} size={18} />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  <AnimatedCounter target={m.value} suffix={m.suffix} decimals={m.decimals || 0} />
                </div>
                <div className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-emerald-50/45 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COURSE CARD — Profissional, clean, CRM-style
   ═══════════════════════════════════════════════════════════════ */
function CourseCard({ course, index }: { course: typeof COURSES[0]; index: number }) {
  const isLeft = index % 2 === 0;
  const isAvailable = course.status === "disponivel";

  return (
    <FadeUp delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -3 }}
        className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl"
        style={{
          borderColor: course.borderColor,
          background: `linear-gradient(135deg, rgba(5,13,26,0.95) 0%, rgba(10,22,40,0.9) 100%)`,
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px 200px at 50% 0%, ${course.color}08, transparent 70%)`,
          }}
        />

        <div className="relative z-10 p-5 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            {/* Ícone grande */}
            <div
              className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: `${course.color}15`,
                border: `1px solid ${course.color}30`,
                color: course.color,
              }}
            >
              <Icon name={course.icon} size={28} />
            </div>

            <div className="flex-1 min-w-0">
              {/* Badge + Status */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                  style={{ background: `${course.badgeColor}15`, color: course.badgeColor, border: `1px solid ${course.badgeColor}25` }}
                >
                  {course.badge}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-md ${
                  isAvailable ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                  {isAvailable ? "Disponível" : "Em breve"}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Clash_Display',system-ui,sans-serif]">
                {course.title}
              </h3>
              <p className="text-sm font-medium mt-0.5" style={{ color: course.color }}>
                {course.subtitle}
              </p>
              <p className="text-sm text-emerald-50/60 mt-2 leading-relaxed max-w-xl">
                {course.description}
              </p>

              {/* Métricas do curso — estilo CRM */}
              {isAvailable && (
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-50/55">
                    <Icon name="book" size={14} />
                    <span><strong className="text-white/70">{course.modules}</strong> módulos</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-50/55">
                    <Icon name="play" size={14} />
                    <span><strong className="text-white/70">{course.classes}</strong> aulas</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-50/55">
                    <Icon name="award" size={14} />
                    <span><strong className="text-white/70">{course.games}</strong> jogos</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 self-start sm:self-center">
              <Link
                href={course.href}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:gap-3 ${
                  isAvailable
                    ? "text-navy-900 shadow-lg hover:shadow-xl"
                    : "text-emerald-50/60 border border-white/10 hover:border-white/20"
                }`}
                style={{
                  background: isAvailable ? `linear-gradient(135deg, ${course.color}, ${course.color}DD)` : "transparent",
                  boxShadow: isAvailable ? `0 4px 15px ${course.color}30` : "none",
                }}
              >
                {isAvailable ? (
                  <>
                    Acessar plataforma
                    <Icon name="arrowRight" size={16} />
                  </>
                ) : (
                  "Aguardar"
                )}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INSTITUTIONAL TRUST SECTION
   ═══════════════════════════════════════════════════════════════ */
const TRUST_ITEMS = [
  { icon: "award", title: "Conteúdo Registrado", desc: "Cursos baseados nas diretrizes dos conselhos profissionais (CRF, CRN, CREFITO, CRP)" },
  { icon: "shield", title: "Certificado de Conclusão", desc: "Ao finalizar, você recebe um certificado reconhecido para comprovar sua formação" },
  { icon: "users", title: "Suporte Pedagógico", desc: "Acompanhamento de profissionais atuantes — tire dúvidas direto com quem entende da prática" },
  { icon: "play", title: "Metodologia Ativa", desc: "Trilhas curtas, quizzes, simulações de balcão, jogos e prática supervisionada" },
];

function TrustSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Clash_Display',system-ui,sans-serif]">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">
                SaúdeGPT
              </span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 transition-all duration-200 hover:border-emerald-500/15 hover:bg-emerald-500/[0.02]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{
                  background: "linear-gradient(135deg, rgba(0,201,167,0.12), rgba(0,201,167,0.05))",
                  color: "#00C9A7",
                }}>
                  <Icon name={item.icon} size={20} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-emerald-50/55 leading-relaxed">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS — Professional
   ═══════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    text: "O curso transformou minha forma de atender no balcão. Hoje me sinto segura para orientar os pacientes com confiança e técnica.",
    author: "Camila R.",
    role: "Atendente de Farmácia — SP",
    rating: 5,
  },
  {
    text: "Didática incrível. Conteúdos complexos explicados de forma simples. Os jogos e quizzes fixam o aprendizado de verdade.",
    author: "Lucas M.",
    role: "Balconista — MG",
    rating: 5,
  },
  {
    text: "Finalmente uma formação que prepara de verdade para o dia a dia na farmácia. Recomendo para toda a equipe técnica.",
    author: "Dra. Ana C.",
    role: "Farmacêutica Responsável — RJ",
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Clash_Display',system-ui,sans-serif]">
              O que dizem nossos{" "}
              <span className="bg-gradient-to-r from-gold-400 to-emerald-400 bg-clip-text text-transparent">alunos</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6 h-full transition-all duration-200 hover:border-gold-500/15">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Icon key={j} name="star" size={13} className="text-gold-500" />
                  ))}
                </div>
                <p className="text-sm text-emerald-50/70 leading-relaxed italic mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-3 border-t border-white/[0.04]">
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-emerald-50/50">{t.role}</p>
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
   FINAL CTA — Institutional
   ═══════════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20 border-t border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/15 bg-gold-500/8 px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">Comece agora</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Clash_Display',system-ui,sans-serif]">
            Pronto para transformar sua{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">carreira na saúde</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-50/60 max-w-lg mx-auto">
            Junte-se a centenas de alunos que já estão se preparando para oferecer 
            um atendimento de excelência. Acesso imediato ao conteúdo completo.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/trilhas"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 text-sm font-bold text-navy-900 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Icon name="graduation" size={18} />
              Acessar plataforma
              <Icon name="arrowRight" size={16} />
            </Link>
            <Link
              href="/diretor"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6 text-sm font-medium text-emerald-50/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
            >
              Falar conosco
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TICKER BANNER — Rolagem infinita
   ═══════════════════════════════════════════════════════════════ */

const TICKER_ITEMS = [
  "CIDADE DOS MÉDICOS",
  "•",
  "MEDICAMENTOS",
  "•",
  "SAÚDE",
  "•",
  "BEM-ESTAR",
  "•",
  "FARMÁCIA",
  "•",
  "ATENDIMENTO HUMANIZADO",
  "•",
  "CIDADE DOS MÉDICOS",
  "•",
  "MEDICAMENTOS",
  "•",
  "SAÚDE",
  "•",
  "BEM-ESTAR",
  "•",
  "FARMÁCIA",
  "•",
  "ATENDIMENTO HUMANIZADO",
  "•",
];

function TickerBanner() {
  return (
    <div className="relative w-full overflow-hidden border-t border-b border-emerald-500/10 bg-gradient-to-r from-emerald-500/5 via-forest-900 to-emerald-500/5 py-3">
      <div className="marquee-track">
        {TICKER_ITEMS.map((item, i) => (
          <span
            key={i}
            className={`mx-3 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] ${
              item === "•"
                ? "text-emerald-500/40"
                : "bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COURSE CATALOG SECTION
   ═══════════════════════════════════════════════════════════════ */
function CourseCatalog() {
  return (
    <section id="cursos" className="py-16 sm:py-20 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/8 px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
                Catálogo de cursos
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Clash_Display',system-ui,sans-serif]">
              Escolha sua{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 bg-clip-text text-transparent">
                especialidade
              </span>
            </h2>
            <p className="mt-2 text-sm text-emerald-50/55 max-w-xl">
              Cada curso é desenvolvido com base nas diretrizes dos conselhos profissionais 
              e adaptado para a realidade do profissional de saúde brasileiro.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-4 sm:space-y-5">
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <ReactLenis root options={{ lerp: 0.06, wheelMultiplier: 1.1 }}>
      <ScrollProgress />
      <HeroSection />
      <TickerBanner />
      <CourseCatalog />
      <TrustSection />
      <TestimonialsSection />
      <FinalCTA />
    </ReactLenis>
  );
}
