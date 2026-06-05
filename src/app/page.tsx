"use client";

import { useState, useEffect, useRef } from "react";
import { HeroVideo } from "@/components/hero-video";
import { FadeUp } from "@/components/fade-up";
import { ScrollReveal, ScrollRevealStagger, ContadorAnimado, Typewriter, Parallax } from "@/components/animacoes";
import { MatriculaForm } from "@/components/matricula-form";
import { trilhas, totalAulas, xpTotalDisponivel } from "@/content/curriculo";
import { Icon } from "@/components/icons";
import type { Trilha } from "@/content/types";
import Image from "next/image";
import Link from "next/link";

/* ─── Typography ─── */
const h1 = "font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.0] tracking-[-0.04em]";
const h2 = "font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-[-0.03em]";
const h3 = "font-display text-[1.15rem] font-semibold tracking-[-0.01em]";

/* ─── Images ─── */
const IMG = {
  balcao: "/hero/equipe-farmacia.jpg",
  medicamentos: "/pharmacy/photo-1578496781985-452d4a934d50.jpg",
  farmacia: "/hero/farmacia-atendimento.jpg",
  saude: "/hero/saude-bem-estar.jpg",
  cuidado: "/hero/saude-cuidado.jpg",
  pressao: "/pharmacy/photo-1584982751601-97dcc096659c.jpg",
  diabetes: "/pharmacy/photo-1579154204601-01588f351e67.jpg",
  hormonios: "/pharmacy/photo-1559757175-5700dde675bc.jpg",
  atendimento: "/hero/atendimento-humanizado.jpg",
};

const TRILHA_EMOJI: Record<string, string> = {
  perfumaria: "🧴", medicamentos: "💊", operacional: "📋", encantamento: "🤝",
};

/* ─── Inline keyframes (injected once) ─── */
const KEYFRAMES = `
@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes float-x {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(74, 222, 128, 0.15); }
  50% { box-shadow: 0 0 40px rgba(74, 222, 128, 0.35); }
}
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes shimmer-glow {
  0% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 0.5; transform: scale(1) rotate(180deg); }
  100% { opacity: 0; transform: scale(0) rotate(360deg); }
}
@keyframes confetti-fall {
  0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
}
.float-y { animation: float-y 6s ease-in-out infinite; }
.float-x { animation: float-x 4s ease-in-out infinite; }
.pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
.gradient-shift { background-size: 200% 200%; animation: gradient-shift 4s ease infinite; }
.shimmer-particle { animation: shimmer-glow 4s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .float-y, .float-x, .pulse-glow, .gradient-shift, .shimmer-particle,
  .confetti-piece { animation: none !important; }
}
`;

/* ─── Confetti pieces ─── */
const CONFETTI = [
  { color: "bg-green-400", delay: "0s", left: "10%", size: "w-2 h-2" },
  { color: "bg-yellow-400", delay: "0.5s", left: "30%", size: "w-2.5 h-2.5" },
  { color: "bg-emerald-400", delay: "1s", left: "55%", size: "w-2 h-3" },
  { color: "bg-orange-300", delay: "1.5s", left: "75%", size: "w-3 h-2" },
  { color: "bg-green-300", delay: "2s", left: "90%", size: "w-2 h-2.5" },
  { color: "bg-yellow-300", delay: "2.5s", left: "45%", size: "w-2.5 h-2" },
];

/* ─── Jornada steps ─── */
const JORNADA = [
  { icon: "smile" as const, title: "Acolhimento", desc: "Aprenda a receber cada cliente com empatia e técnica." },
  { icon: "book" as const, title: "Conhecimento", desc: "Domine medicamentos, legislação e saúde integral." },
  { icon: "zap" as const, title: "Prática", desc: "Simulações reais de balcão que preparam para o dia a dia." },
  { icon: "graduation" as const, title: "Certificação", desc: "Conclua e receba seu certificado de formação completa." },
];

/* ─── Valores emocionais ─── */
const VALORES_EMOCIONAIS = [
  { icon: "heart" as const, value: "1.200+", label: "vidas impactadas", color: "text-rose-400" },
  { icon: "users" as const, value: "6", label: "trilhas completas", color: "text-green-400" },
  { icon: "star" as const, value: "∞", label: "gratuito para todos", color: "text-yellow-400" },
];

/* ─── Hero floating elements ─── */
const FLOATING = [
  { icon: "heart" as const, top: "15%", left: "8%", delay: "0s", size: 20 },
  { icon: "sparkles" as const, top: "70%", left: "92%", delay: "1s", size: 18 },
  { icon: "smile" as const, top: "80%", left: "5%", delay: "2s", size: 16 },
  { icon: "star" as const, top: "25%", left: "94%", delay: "0.5s", size: 14 },
];

export default function HomePage() {
  const total = totalAulas();
  const totalXp = xpTotalDisponivel();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <style>{KEYFRAMES}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — CINEMATIC + EMOTIONAL
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#020617]">
        <HeroVideo />

        {/* Floating decorative elements */}
        {mounted && FLOATING.map((f, i) => (
          <div
            key={i}
            className="absolute z-30 text-white/15 float-y pointer-events-none"
            style={{ top: f.top, left: f.left, animationDelay: f.delay }}
          >
            <Icon name={f.icon} size={f.size} />
          </div>
        ))}

        {/* Radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-green-400/10 via-emerald-400/5 to-transparent" />
        <div className="pointer-events-none absolute left-[30%] top-[60%] z-20 h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-yellow-400/6 via-transparent to-transparent" />

        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-40 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Badge animado */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-green-300 backdrop-blur-md pulse-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
              <Icon name="heart" size={12} />
              <span className="ml-1">Formação gratuita para quem quer cuidar</span>
            </div>

            {/* Título */}
            <h1 className={`${h1} text-white`}>
              Seja a pessoa que{" "}
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-200 bg-clip-text text-transparent gradient-shift">
                leva saúde
              </span>
              {" "}a quem precisa
            </h1>

            {/* Subtítulo typewriter */}
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/50 sm:text-xl">
              {mounted ? (
                <Typewriter
                  texto="Você é a primeira mão que um cliente estende quando busca cuidado. Aprenda a técnica, o acolhimento e a excelência para transformar cada balcão em um ponto de saúde."
                  velocidade={25}
                  delay={800}
                />
              ) : (
                "Você é a primeira mão que um cliente estende quando busca cuidado. Aprenda a técnica, o acolhimento e a excelência para transformar cada balcão em um ponto de saúde."
              )}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#feed"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_rgba(76,161,93,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_12px_50px_rgba(76,161,93,0.5)] active:scale-[0.97]"
              >
                <Icon name="zap" size={16} />
                Começar agora — é gratuito
                <Icon name="arrow" size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#ser-aluno"
                className="group inline-flex items-center gap-2.5 rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:bg-white/10 active:scale-[0.97]"
              >
                <Icon name="smile" size={16} />
                Quero ser aluno
              </Link>
            </div>

            {/* Stats emocionais */}
            <div className="mt-10 flex gap-8 sm:gap-14">
              {VALORES_EMOCIONAIS.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className={`text-2xl font-bold ${s.color} tabular-nums`}>
                    {s.value === "∞" ? "∞" : typeof s.value === "string" && s.value.includes("+") ? (
                      <ContadorAnimado valor={parseInt(s.value)} sufixo="+" duracao={2000} />
                    ) : (
                      s.value
                    )}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/35 flex items-center gap-1">
                    <Icon name={s.icon} size={10} className={s.color} />
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MISSÃO — EMOTIONAL CONNECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <ScrollReveal direction="none" duration={800}>
        <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-emerald-950 to-forest-950 py-20">
          {/* Confetti */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {CONFETTI.map((c, i) => (
              <div
                key={i}
                className={`absolute ${c.color} ${c.size} rounded-sm opacity-30`}
                style={{
                  left: c.left,
                  top: "-5%",
                  animation: `confetti-fall ${6 + i * 0.5}s ${c.delay} linear infinite`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal direction="up" duration={700}>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-1.5 text-xs font-medium text-yellow-300 backdrop-blur-sm mb-6">
                <Icon name="star" size={12} />
                Sua jornada importa
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} duration={700}>
              <h2 className={`${h2} text-white max-w-3xl mx-auto`}>
                Cada atendimento é uma chance de{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 bg-clip-text text-transparent">
                  transformar um dia
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={700}>
              <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-white/60 sm:text-lg">
                Um cliente entra na farmácia com dor, dúvida ou medo. Você pode ser 
                a pessoa que ouve, orienta e acolhe. Não é só vender um remédio — 
                é cuidar de alguém que confiou em você.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} duration={700}>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  { icon: "heart" as const, title: "Empatia que cura", desc: "Entender a dor do outro é o primeiro passo para aliviá-la." },
                  { icon: "compass" as const, title: "Técnica que orienta", desc: "Conhecimento sólido para recomendar com segurança." },
                  { icon: "globe" as const, title: "Saúde que alcança", desc: "Cada pessoa bem atendida leva saúde para toda a família." },
                ].map((item) => (
                  <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-green-400/30">
                    <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-400/10 text-green-400 ring-1 ring-green-400/20 group-hover:ring-green-400/40 transition-all">
                      <Icon name={item.icon} size={22} />
                    </span>
                    <h4 className="text-base font-semibold text-white">{item.title}</h4>
                    <p className="mt-1.5 text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════════════
          JORNADA DE APRENDIZADO
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface py-20">
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-green-500/5 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-yellow-500/5 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400 backdrop-blur-sm mb-4">
                <Icon name="compass" size={12} />
                Sua evolução em 4 passos
              </div>
              <h2 className={`${h2}`}>
                Como você vai{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                  transformar vidas
                </span>
              </h2>
              <p className="mt-3 max-w-lg mx-auto text-sm text-muted">
                Do acolhimento ao certificado — cada etapa foi desenhada para formar profissionais completos.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute left-[30px] top-0 bottom-0 w-px bg-gradient-to-b from-green-400/40 via-green-500/30 to-transparent hidden sm:block" style={{ left: "50%", marginLeft: "-0.5px" }} />

            <div className="space-y-10">
              {JORNADA.map((passo, i) => (
                <ScrollReveal key={passo.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 150}>
                  <div className={`relative flex items-center gap-6 sm:gap-10 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    {/* Número */}
                    <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                      <div className={`inline-block ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-green-500 mb-1">
                          <Icon name="zap" size={10} />
                          Passo {i + 1}
                        </span>
                        <h3 className={`${h3} mt-1`}>{passo.title}</h3>
                        <p className="mt-1.5 text-sm text-muted max-w-sm">{passo.desc}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 pulse-glow">
                      <Icon name={passo.icon} size={22} />
                    </div>

                    {/* Espaço do outro lado */}
                    <div className="flex-1 hidden sm:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TRILHAS + FEED
          ═══════════════════════════════════════════════════════════════════ */}
      <div id="feed" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Trilhas como cards vibrantes */}
        <ScrollReveal direction="none">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400 backdrop-blur-sm mb-4">
              <Icon name="book" size={12} />
              O conteúdo mais completo
            </div>
            <h2 className={`${h2}`}>
              Tudo o que você precisa{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                em um só lugar
              </span>
            </h2>
            <p className="mt-3 max-w-lg mx-auto text-sm text-muted">
              {total} aulas organizadas em 6 trilhas — do básico ao avançado.
            </p>
          </div>
        </ScrollReveal>

        {/* Stories — cards maiores e mais coloridos */}
        <ScrollReveal direction="none" delay={100}>
          <div className="mb-12">
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none">
              <ScrollRevealStagger baseDelay={50} staggerDelay={80} direction="up" wrapperClassName="snap-start shrink-0">
                {trilhas.slice(0, 6).map((t) => (
                  <Link
                    key={t.id}
                    href={`/trilhas/${t.id}`}
                    className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-gradient-to-b from-surface to-muted/10 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-xl hover:shadow-green-500/10 w-[130px]"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-400/10 text-3xl ring-2 ring-green-400/20 group-hover:ring-green-400/40 group-hover:scale-110 transition-all duration-300">
                      {TRILHA_EMOJI[t.id] ?? "📚"}
                    </span>
                    <span className="text-xs font-semibold text-center leading-tight text-foreground/80">{t.titulo}</span>
                    <span className="text-[10px] text-muted">
                      {t.modulos.reduce((s, m) => s + m.aulas.length, 0)} aulas
                    </span>
                    {/* Glow no hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-green-500/5 to-transparent" />
                  </Link>
                ))}
              </ScrollRevealStagger>
            </div>
          </div>
        </ScrollReveal>

        {/* Feed cards — 3 cards de conteúdo vibrante */}
        <div className="space-y-8">

          {/* CARD 1 — Transformação real */}
          <FadeUp>
            <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-surface to-muted/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative h-52 sm:h-64 overflow-hidden bg-forest-900">
                <Image src={IMG.balcao} alt="" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-6 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
                    <Icon name="zap" size={16} className="text-white" />
                  </span>
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white">
                    🧑‍⚕️ Atendimento que transforma
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2.5 mb-3 text-xs">
                  <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-green-600 dark:text-green-400 font-medium">
                    <Icon name="play" size={12} />
                    Simulação de Balcão
                  </span>
                  <span className="text-muted">·</span>
                  <span className="text-muted flex items-center gap-1">
                    <Icon name="clock" size={12} />
                    2 min
                  </span>
                </div>
                <h3 className={`${h3} text-foreground`}>O antes e depois de um atendimento</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Uma senhora chega com dor de cabeça. O que parece simples pode esconder algo maior. 
                  Veja como uma escuta atenta transforma o cuidado.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-emerald-200/50 bg-gradient-to-br from-emerald-50/80 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/10 p-4 hover:border-emerald-400/50 transition-colors">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-2">
                      <Icon name="check" size={12} />
                      Abordagem consultiva
                    </div>
                    <p className="text-xs leading-relaxed text-foreground/80">
                      <span className="font-medium">Cliente:</span> &ldquo;Bom dia! Estou com uma dor de cabeça forte...&rdquo;<br />
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">Atendente:</span> &ldquo;Antes de indicar, você tem alergia a algum medicamento?&rdquo;
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                      <Icon name="smile" size={12} />
                      Paciente acolhida e segura
                    </div>
                  </div>
                  <div className="rounded-xl border border-rose-200/50 bg-gradient-to-br from-rose-50/80 to-red-50/50 dark:from-rose-950/20 dark:to-red-950/10 p-4 hover:border-rose-400/50 transition-colors">
                    <div className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400 text-xs font-semibold mb-2">
                      <Icon name="close" size={12} />
                      O que evitar
                    </div>
                    <p className="text-xs leading-relaxed text-foreground/80">
                      <span className="font-medium">Atendente:</span> &ldquo;Toma dipirona? É o que resolve.&rdquo;
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-500">
                      <Icon name="trending" size={12} className="rotate-180" />
                      Cliente sai sem confiança
                    </div>
                  </div>
                </div>

                <Link href="/trilhas/medicamentos" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400 hover:underline group/link">
                  Explorar trilha de medicamentos
                  <Icon name="arrow" size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* CARD 2 — Grade Curricular com Gradientes */}
          <FadeUp delay={100}>
            <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-surface to-muted/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative h-36 sm:h-44 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-green-700">
                <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-6 flex items-center gap-2">
                  <Icon name="book" size={16} className="text-yellow-300" />
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white">
                    📚 {total} aulas · {totalXp}+ XP
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className={`${h3} text-foreground`}>Grade curricular completa</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">
                  6 trilhas que formam profissionais completos — do acolhimento à técnica avançada.
                </p>

                <div className="mt-5 space-y-1.5">
                  <ScrollRevealStagger baseDelay={0} staggerDelay={80} direction="up" duration={400}>
                    {trilhas.map((t: Trilha) => {
                      const aulas = t.modulos.reduce((s, m) => s + m.aulas.length, 0);
                      const pct = Math.min(100, Math.round((aulas / total) * 100));
                      return (
                        <Link
                          key={t.id}
                          href={`/trilhas/${t.id}`}
                          className="flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-green-500/5 hover:to-transparent group/item"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-400/10 text-lg ring-1 ring-green-400/15 group-hover:ring-green-400/30 transition-all">
                            {TRILHA_EMOJI[t.id] ?? "📚"}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-foreground/90">{t.titulo}</span>
                              <span className="text-xs text-muted bg-muted/30 px-2 py-0.5 rounded-full">{aulas} aulas</span>
                            </div>
                            <p className="text-xs text-muted truncate mt-0.5">{t.descricao}</p>
                            {/* Barra de progresso pedagógica */}
                            <div className="mt-1.5 h-1 rounded-full bg-muted/30 overflow-hidden">
                              <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                          <Icon name="arrow" size={14} className="text-muted group-hover/item:translate-x-1 transition-transform shrink-0" />
                        </Link>
                      );
                    })}
                  </ScrollRevealStagger>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* CARD 3 — Gamificação vibrante + Conteúdos Gratuitos */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Gamificação */}
            <FadeUp delay={150}>
              <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-surface to-muted/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="relative h-40 sm:h-44 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-forest-700">
                  <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Confetti decorativo */}
                  {mounted && [0,1,2].map((j) => (
                    <div
                      key={j}
                      className="absolute w-2 h-2 rounded-full bg-yellow-300/40 shimmer-particle"
                      style={{ left: `${20 + j * 25}%`, top: `${15 + j * 20}%`, animationDelay: `${j * 1.5}s` }}
                    />
                  ))}

                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                    <div>
                      <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white flex items-center gap-1.5 w-fit">
                        <Icon name="star" size={10} />
                        Gamificação
                      </span>
                      <div className="mt-3 flex items-center gap-4 text-white">
                        <span className="text-3xl">🔥</span>
                        <div>
                          <div className="text-lg font-bold leading-none">3 dias</div>
                          <div className="text-[10px] text-white/60 flex items-center gap-1">
                            <Icon name="trending" size={10} />
                            de streak
                          </div>
                        </div>
                        <div className="w-px h-8 bg-white/20" />
                        <div>
                          <div className="text-lg font-bold leading-none">
                            <ContadorAnimado valor={620} sufixo="" duracao={2000} />
                          </div>
                          <div className="text-[10px] text-white/60 flex items-center gap-1">
                            <Icon name="sparkles" size={10} />
                            XP acumulados
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/ranking" className="hidden sm:flex items-center gap-1 text-xs text-white/70 hover:text-white transition-colors">
                      Ver ranking
                      <Icon name="arrow" size={12} />
                    </Link>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="grid grid-cols-3 gap-3">
                    <Link href="/missoes" className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-b from-green-500/5 to-transparent p-4 transition-all hover:bg-green-500/10 hover:-translate-y-0.5 border border-green-400/10">
                      <Icon name="sparkles" size={22} className="text-green-500" />
                      <span className="text-xs font-semibold text-foreground/80">Quizzes</span>
                      <span className="text-[10px] text-green-500 flex items-center gap-1 font-medium">
                        <Icon name="trending" size={10} />
                        +10 XP
                      </span>
                    </Link>
                    <Link href="/missoes" className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-b from-orange-500/5 to-transparent p-4 transition-all hover:bg-orange-500/10 hover:-translate-y-0.5 border border-orange-400/10">
                      <Icon name="star" size={22} className="text-orange-500" />
                      <span className="text-xs font-semibold text-foreground/80">Badges</span>
                      <span className="text-[10px] text-muted">8 disponíveis</span>
                    </Link>
                    <Link href="/ranking" className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-b from-yellow-500/5 to-transparent p-4 transition-all hover:bg-yellow-500/10 hover:-translate-y-0.5 border border-yellow-400/10">
                      <Icon name="trending" size={22} className="text-yellow-500" />
                      <span className="text-xs font-semibold text-foreground/80">Ranking</span>
                      <span className="text-[10px] text-muted">Top 3</span>
                    </Link>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-muted mb-1.5">
                      <span className="flex items-center gap-1 font-medium">
                        <Icon name="trending" size={12} />
                        Progresso
                      </span>
                      <span className="font-semibold text-foreground/80">Lv. 3 · 620 / 1.000 XP</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-muted/40 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 gradient-shift transition-all" style={{ width: "62%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Conteúdos gratuitos */}
            <FadeUp delay={200}>
              <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-surface to-muted/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 backdrop-blur-sm mb-2">
                        <Icon name="gift" size={12} />
                        100% gratuito
                      </span>
                      <h3 className={`${h3} text-foreground mt-2`}>Conteúdos que salvam vidas</h3>
                    </div>
                    <Link href="/curiosidades" className="hidden sm:flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 hover:underline shrink-0">
                      Ver todos
                      <Icon name="arrow" size={12} />
                    </Link>
                  </div>

                  <div className="grid gap-3">
                    <ScrollRevealStagger baseDelay={0} staggerDelay={80} direction="up" duration={400}>
                      {[
                        { href: "/pressao-arterial", icon: "🩺", title: "Pressão Arterial", desc: "Entenda como medir, orientar e acolher pacientes hipertensos.", img: IMG.pressao },
                        { href: "/diabetes", icon: "🩸", title: "Diabetes", desc: "O guia completo para atender quem vive com diabetes.", img: IMG.diabetes },
                        { href: "/hormonios", icon: "🧬", title: "Hormônios", desc: "Saúde hormonal na farmácia — um campo que poucos dominam.", img: IMG.hormonios },
                      ].map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group/item flex items-center gap-3 rounded-xl border border-border/40 bg-muted/10 p-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-green-500/5 hover:to-transparent hover:border-green-400/30"
                        >
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                            <Image src={item.img} alt="" fill className="object-cover group-hover/item:scale-105 transition-transform duration-500" sizes="64px" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span>{item.icon}</span>
                              <span className="text-sm font-semibold text-foreground/90">{item.title}</span>
                            </div>
                            <p className="text-xs text-muted mt-0.5 line-clamp-1">{item.desc}</p>
                            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-green-600 dark:text-green-400 font-medium">
                              <Icon name="lock" size={10} />
                              <span>Abrir conteúdo gratuito</span>
                              <Icon name="arrow" size={10} className="group-hover/item:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </ScrollRevealStagger>
                  </div>

                  <Link href="/curiosidades" className="sm:hidden mt-4 flex items-center justify-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                    Ver todos os conteúdos
                    <Icon name="arrow" size={12} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SER ALUNO — CTA FINAL
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="ser-aluno" className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-forest-900 py-20">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/5 blur-[120px]" />
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-yellow-400/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left" duration={700}>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-1.5 text-xs font-medium text-yellow-300 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
                  <Icon name="gift" size={12} />
                  Tudo gratuito — sem mensalidades
                </div>
                <h2 className={`${h2} text-white`}>
                  Sua jornada começa{" "}
                  <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-200 bg-clip-text text-transparent">
                    agora
                  </span>
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
                  Acesso imediato a todas as {total} aulas, {6} trilhas completas, simuladores, 
                  missões, quizzes e certificado de formação. Sem pegadinhas.
                </p>

                <div className="mt-8 space-y-4">
                  <ScrollRevealStagger baseDelay={0} staggerDelay={100} direction="up" duration={500}>
                    {[
                      { icon: "smile" as const, text: "6 trilhas completas — do básico ao avançado" },
                      { icon: "zap" as const, text: `${total}+ aulas com vídeos, textos e simuladores` },
                      { icon: "star" as const, text: "Gamificação — XP, badges, ranking e missões" },
                      { icon: "check" as const, text: "Certificado ao finalizar a formação" },
                    ].map((b) => (
                      <div key={b.text} className="flex items-center gap-3.5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                          <Icon name={b.icon} size={18} className="text-green-400" />
                        </span>
                        <span className="text-sm text-white/70">{b.text}</span>
                      </div>
                    ))}
                  </ScrollRevealStagger>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150} duration={700}>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-md sm:p-8 shadow-2xl shadow-green-500/5">
                <div className="text-center mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 border border-green-400/30 px-3 py-1 text-xs font-semibold text-green-300 mb-3">
                    <Icon name="smile" size={12} />
                    Matrícula gratuita
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">Torne-se Aluno</h3>
                  <p className="text-xs text-white/40 mt-1">Preencha abaixo e comece a estudar hoje</p>
                </div>
                <MatriculaForm />
                <p className="mt-4 text-center text-[11px] text-white/30">
                  Seus dados estão seguros. Confirmamos sua matrícula por e-mail em até 24h.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════════ */}
      <footer className="relative overflow-hidden border-t border-green-800/30 bg-green-950 py-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20">
                <Icon name="heart" size={16} />
              </span>
              <span className="text-sm font-bold text-white/80">Atendentes de Farmácia</span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/40">
              <Link href="/trilhas" className="hover:text-green-400 transition-colors">Trilhas</Link>
              <Link href="/ranking" className="hover:text-green-400 transition-colors">Ranking</Link>
              <Link href="/curiosidades" className="hover:text-green-400 transition-colors">Artigos</Link>
              <Link href="#ser-aluno" className="hover:text-green-400 transition-colors">Matrícula</Link>
            </div>
          </div>
          <div className="mt-6 border-t border-green-800/20 pt-5 text-center text-xs text-white/30">
            <p>Formação para Atendentes Premium de Farmácia</p>
            <p className="mt-1">Criado e revisado pelo Farmacêutico Thiago B. G. Piola, CRF/SP 58.519</p>
            <p className="mt-2">Conteúdo educativo — não substitui orientação do farmacêutico ou médico.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
