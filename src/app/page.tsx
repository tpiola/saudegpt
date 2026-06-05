"use client";

import { HeroVideo } from "@/components/hero-video";
import { FadeUp } from "@/components/fade-up";
import { trilhas, totalAulas } from "@/content/curriculo";
import { Botao } from "@/components/ui";
import type { Trilha } from "@/content/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

/* ─── Tipografia inline ─── */
const h2Cls =
  "font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.02em]";
const h3Cls = "font-display text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold tracking-[-0.01em]";

/* ─── Mapa de ícone para cada trilha ─── */
const iconeTrilha: Record<string, string> = {
  perfumaria: "🧴",
  medicamentos: "💊",
  operacional: "📋",
  encantamento: "🤝",
};

/* ─── Helper para fotos Unsplash ─── */
const foto = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

/* ─── Unique gradient colors for each trilha card ─── */
const trilhaColors: Record<string, { from: string; to: string; accent: string }> = {
  perfumaria: { from: "from-pink-500/25", to: "to-rose-400/10", accent: "text-pink-600 dark:text-pink-300" },
  medicamentos: { from: "from-sky-500/25", to: "to-cyan-400/10", accent: "text-sky-600 dark:text-sky-300" },
  operacional: { from: "from-amber-500/25", to: "to-yellow-400/10", accent: "text-amber-600 dark:text-amber-300" },
  encantamento: { from: "from-orange-500/25", to: "to-orange-400/10", accent: "text-orange-600 dark:text-orange-300" },
  fundamentos: { from: "from-emerald-500/25", to: "to-green-400/10", accent: "text-emerald-600 dark:text-emerald-300" },
  pratica: { from: "from-violet-500/25", to: "to-purple-400/10", accent: "text-violet-600 dark:text-violet-300" },
};

/* ─── Animated Counter — IntersectionObserver com ease-out ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !animated.current) {
          animated.current = true;
          obs.disconnect();
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── SVG Wave Divider ─── */
function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-16 sm:h-24 w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
          className="fill-background dark:fill-[#020e0c]"
        />
      </svg>
    </div>
  );
}

export default function HomePage() {
  const total = totalAulas();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* ══════════════════════════════════════════════
          HERO — CINEMATOGRÁFICO 100vh
          ══════════════════════════════════════════════ */}
      <section className="relative flex h-screen items-center overflow-hidden bg-[#020617]">
        <HeroVideo />

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Brilho radial central */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-green-400/8 via-transparent to-transparent" />

        {/* ── CONTEÚDO PRINCIPAL ── */}
        <div className="relative z-40 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-green-300 backdrop-blur-md shadow-[0_0_24px_rgba(76,161,93,0.12)]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(76,161,93,0.7)]" />
              Formação completa para Atendentes
            </div>

            {/* Headline principal */}
            <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.0] tracking-[-0.04em] text-white">
              Atendentes de{" "}
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-200 bg-clip-text text-transparent">
                Farmácia
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="mt-5 max-w-xl text-lg leading-relaxed tracking-wide text-white/50 sm:text-xl">
              A formação que transforma atendentes em profissionais de cuidado
              — com técnica, acolhimento e excelência no balcão da farmácia.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#cadastro-gratuito"
                className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_40px_rgba(76,161,93,0.35)] transition-all duration-300 hover:bg-green-600 hover:scale-[1.03] hover:shadow-[0_12px_50px_rgba(76,161,93,0.5)] active:scale-[0.97]"
              >
                Começar Grátis
              </a>
              <a
                href="#trilhas"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.97]"
              >
                Ver trilhas
              </a>
            </div>

            {/* Stats animados com IntersectionObserver */}
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: 6, label: "TRILHAS", suffix: "" },
                { value: total, label: "AULAS", suffix: "+" },
                { value: 0, label: "DO ZERO AO AVANÇADO", suffix: "", custom: "∞" },
                { value: 100, label: "GRATUITO", suffix: "%" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-green-400 tabular-nums">
                    {stat.custom ?? <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/35">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-50 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/25">
            Explore
          </span>
          <svg className="h-4 w-4 animate-bounce text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── WAVE DIVIDER ─── */}
      <WaveDivider />

      {/* ══════════════════════════════════════════════
          SEÇÃO: O PROBLEMA — fundo escuro, cards laranja
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-midnight-800 py-20 sm:py-28">
        {/* Gradientes decorativos */}
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-red-500/4 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-sm shadow-[0_0_15px_rgba(214,110,15,0.1)]">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                A realidade do balcão
              </span>
              <h2 className={`${h2Cls} text-white`}>
                O atendente sem{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  preparo
                </span>
              </h2>
              <p className="mt-3 text-white/50 leading-relaxed">
                Milhares de atendentes entram no mercado sem qualquer formação
                específica. O resultado? Insegurança, erros e oportunidades perdidas.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "😰",
                title: "Insegurança no atendimento",
                desc: "Sem conhecer os medicamentos, o atendente hesita, passa insegurança e perde a confiança do cliente.",
              },
              {
                icon: "🚫",
                title: "Erros na dispensação",
                desc: "Troca de medicamentos, dosagens incorretas e falta de orientação sobre interações medicamentosas perigosas.",
              },
              {
                icon: "📉",
                title: "Baixa performance em vendas",
                desc: "Sem técnica de aconselhamento, as oportunidades de venda consultiva são perdidas — e o faturamento sofre.",
              },
              {
                icon: "⚖️",
                title: "Riscos legais e sanitários",
                desc: "Desconhecimento da portaria 344, ANVISA e legislação vigente expõe a farmácia a multas e processos.",
              },
              {
                icon: "😤",
                title: "Frustração profissional",
                desc: "Sem perspectiva de crescimento, o atendente se desmotiva, a rotatividade aumenta e o talento é desperdiçado.",
              },
              {
                icon: "💔",
                title: "Cliente insatisfeito",
                desc: "Um atendimento ruim gera reclamações, avaliações negativas e clientes que não voltam — prejudicando a reputação.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-400 hover:border-orange-500/40 hover:bg-white/[0.06] hover:scale-[1.015] hover:shadow-[0_12px_48px_rgba(214,110,15,0.12)] sm:p-8">
                  <span className="absolute -right-4 -top-4 select-none text-[6rem] font-black leading-none text-white/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 text-2xl ring-1 ring-orange-400/20 group-hover:ring-orange-400/40 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </span>
                  <h3 className={`${h3Cls} text-white`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WAVE DIVIDER (FLIP) ─── */}
      <WaveDivider flip />

      {/* ══════════════════════════════════════════════
          SEÇÃO: A SOLUÇÃO — 6 trilhas como cards c/ gradiente
          ══════════════════════════════════════════════ */}
      <section
        id="trilhas"
        className="relative overflow-hidden bg-background py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/3 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Grade curricular</span>
              <h2 className={h2Cls}>
                A{" "}
                <span className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
                  solução
                </span>{" "}
                completa em 6 trilhas
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Seis trilhas progressivas — do básico ao avançado — que
                cobrem tudo que um atendente de farmácia precisa dominar.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {trilhas.map((t: Trilha, i: number) => {
              const cor = trilhaColors[t.id] ?? trilhaColors.fundamentos;
              return (
                <FadeUp key={t.id} delay={i * 100}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm transition-all duration-400 hover:scale-[1.015] hover:shadow-lg sm:p-8">
                    {/* Número decorativo GRANDE */}
                    <span className="absolute -right-4 -top-4 select-none text-[6rem] font-black leading-none text-foreground/[0.04]">
                      {String(t.numero).padStart(2, "0")}
                    </span>

                    {/* Background image por trilha */}
                    <Image
                      src={foto(
                        t.id === "perfumaria"
                          ? "photo-1596462502278-27bfd403348e"
                          : t.id === "medicamentos"
                            ? "photo-1573883429746-084be9b5cfca"
                            : t.id === "operacional"
                              ? "photo-1544717297-fa95b6eb9642"
                              : "photo-1559839734-2b71ea197ec2"
                      )}
                      alt=""
                      fill
                      className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.05]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="relative z-10 flex items-start gap-5">
                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cor.from} ${cor.to} text-2xl ring-1 ring-white/10 group-hover:ring-white/25 group-hover:scale-110 transition-all duration-300`}
                      >
                        {iconeTrilha[t.id] ?? "📚"}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className={`${h3Cls}`}>{t.titulo}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
                          {t.descricao}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                      <span className="text-xs text-subtle">
                        {t.modulos.reduce((s, m) => s + m.aulas.length, 0)} aulas
                      </span>
                      <span className="text-[8px] text-subtle">•</span>
                      <span
                        className={`rounded-full border border-border bg-surface-2 px-2.5 py-0.5 text-[11px] font-medium ${cor.accent}`}
                      >
                        {t.nivelFaixa}
                      </span>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WAVE DIVIDER ─── */}
      <WaveDivider />

      {/* ══════════════════════════════════════════════
          SEÇÃO: A TRANSFORMAÇÃO — verde/menta
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-emerald-50/30 to-green-50 py-20 sm:py-28">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 backdrop-blur-sm shadow-[0_0_15px_rgba(76,161,93,0.1)]">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                A Transformação
              </span>
              <h2 className={h2Cls}>
                O que você se torna após o{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  curso
                </span>
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Mais do que conhecimento — uma mudança real na sua carreira e na
                forma como você enxerga o atendimento.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🛡️",
                title: "Profissional confiante",
                desc: "Domina os medicamentos, as normas e o atendimento. Toma decisões seguras e transmite confiança em cada interação.",
              },
              {
                icon: "💎",
                title: "Consultor de saúde",
                desc: "Vai além do balcão — aconselha, orienta e educa o cliente sobre saúde, bem-estar e uso correto dos medicamentos.",
              },
              {
                icon: "📈",
                title: "Alta performance em vendas",
                desc: "Domina a venda consultiva. Cada atendimento se torna uma oportunidade de gerar valor e aumentar o ticket médio.",
              },
              {
                icon: "🏅",
                title: "Destaque na equipe",
                desc: "O profissional que todo farmacêutico quer ter ao lado. Referência em conhecimento, postura e resultados.",
              },
              {
                icon: "🚀",
                title: "Carreira em ascensão",
                desc: "Abre portas para promoções, melhores oportunidades e reconhecimento no mercado farmacêutico.",
              },
              {
                icon: "💚",
                title: "Agente de saúde pública",
                desc: "Contribui ativamente para o uso racional de medicamentos, prevenção de doenças e promoção da saúde na comunidade.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-green-200/60 bg-white p-6 transition-all duration-400 hover:border-green-400/40 hover:shadow-[0_12px_40px_rgba(76,161,93,0.12)] hover:-translate-y-1 sm:p-8">
                  <span className="absolute -right-4 -top-4 select-none text-[6rem] font-black leading-none text-green-500/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-400/10 text-2xl ring-1 ring-green-400/20 group-hover:ring-green-400/40 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </span>
                  <h3 className={`${h3Cls}`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={400}>
            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-green-500/10 border border-green-400/20 px-6 py-4 backdrop-blur-sm">
                <span className="text-2xl">🎯</span>
                <p className="text-sm font-medium text-green-700">
                  Do atendente inseguro ao profissional completo — essa é a sua transformação.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── WAVE DIVIDER (FLIP) ─── */}
      <WaveDivider flip />

      {/* ══════════════════════════════════════════════
          SEÇÃO: COMO ESTUDAR (3 PASSOS)
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-2 py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/4 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange-500/3 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Como estudar</span>
              <h2 className={h2Cls}>
                Aprendizado em 3 passos simples
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Nosso método foi pensado para a sua rotina. Estude no seu
                ritmo, de onde estiver.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <FadeUp delay={100}>
              <div className="glass-premium group relative overflow-hidden flex flex-col items-center p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full">
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-green-400/10 text-4xl ring-1 ring-green-400/20 group-hover:ring-green-400/40 group-hover:scale-110 transition-all duration-300">
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-lg">
                    1
                  </span>
                  📺
                </div>
                <h3 className={`${h3Cls}`}>Assista às aulas</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Conteúdo em vídeo e material didático completo, organizado em
                  trilhas progressivas do básico ao avançado.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="glass-premium group relative overflow-hidden flex flex-col items-center p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full">
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 text-4xl ring-1 ring-orange-400/20 group-hover:ring-orange-400/40 group-hover:scale-110 transition-all duration-300">
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-lg">
                    2
                  </span>
                  🧪
                </div>
                <h3 className={`${h3Cls}`}>Pratique com quizzes</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Teste seus conhecimentos com quizzes interativos, simulados e
                  estudos de caso reais do balcão da farmácia.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="glass-premium group relative overflow-hidden flex flex-col items-center p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full">
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-orange-400/10 text-4xl ring-1 ring-green-400/20 group-hover:ring-orange-400/40 group-hover:scale-110 transition-all duration-300">
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-lg">
                    3
                  </span>
                  🏆
                </div>
                <h3 className={`${h3Cls}`}>Ganhe XP e certificado</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Acumule experiência, suba no ranking, desbloqueie badges e
                  receba seu certificado ao concluir a formação.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── WAVE DIVIDER ─── */}
      <WaveDivider />

      {/* ══════════════════════════════════════════════
          SEÇÃO: CURIOSIDADES DO SETOR (BLOG CARDS)
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-green-500/3 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Saiba mais</span>
              <h2 className={h2Cls}>Curiosidades do setor</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Conteúdos gratuitos para você se aprofundar em temas essenciais
                do dia a dia da farmácia.
              </p>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeUp delay={100}>
              <Link href="/pressao-arterial" className="blog-card group relative overflow-hidden">
                <div className="blog-card-content">
                  <Image
                    src={foto("photo-1584982751601-97dcc096659c")}
                    alt=""
                    fill
                    className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 text-2xl ring-1 ring-orange-400/15 group-hover:ring-orange-400/30 transition-all duration-300">
                    🩺
                  </span>
                  <h3 className="text-base font-semibold group-hover:text-orange-500 transition-colors duration-300">
                    Pressão Arterial
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    Medição, cuidados e orientação — tudo que o atendente precisa
                    saber sobre o tema.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="blog-card-arrow">→</span>
                    <span className="text-xs font-medium text-muted group-hover:text-orange-500 transition-colors duration-300 link-underline">
                      Ler artigo
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>

            <FadeUp delay={200}>
              <Link href="/curiosidades" className="blog-card group relative overflow-hidden">
                <div className="blog-card-content">
                  <Image
                    src={foto("photo-1512621776951-a57141f2eefd")}
                    alt=""
                    fill
                    className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/10 text-2xl ring-1 ring-green-400/15 group-hover:ring-green-400/30 transition-all duration-300">
                    🥗
                  </span>
                  <h3 className="text-base font-semibold group-hover:text-green-500 transition-colors duration-300">
                    Emagrecimento Saudável
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    Fitoterápicos, suplementos e bem-estar — orientações para
                    um aconselhamento seguro.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="blog-card-arrow">→</span>
                    <span className="text-xs font-medium text-muted group-hover:text-green-500 transition-colors duration-300 link-underline">
                      Ler artigo
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>

            <FadeUp delay={300}>
              <Link href="/curiosidades" className="blog-card group relative overflow-hidden">
                <div className="blog-card-content">
                  <Image
                    src={foto("photo-1524995997946-a1c2e315a42f")}
                    alt=""
                    fill
                    className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-forest-400/20 to-forest-500/10 text-2xl ring-1 ring-forest-400/15 group-hover:ring-forest-400/30 transition-all duration-300">
                    💡
                  </span>
                  <h3 className="text-base font-semibold group-hover:text-forest-400 transition-colors duration-300">
                    Mais Curiosidades
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    Dicas, receitas e muito mais para ampliar seu conhecimento
                    no dia a dia da farmácia.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="blog-card-arrow">→</span>
                    <span className="text-xs font-medium text-muted group-hover:text-forest-400 transition-colors duration-300 link-underline">
                      Ler artigo
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>

            <FadeUp delay={400}>
              <Link href="/diabetes" className="blog-card group relative overflow-hidden">
                <div className="blog-card-content">
                  <Image
                    src={foto("photo-1579154204601-01588f351e67")}
                    alt=""
                    fill
                    className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-red-400/10 text-2xl ring-1 ring-red-400/15 group-hover:ring-red-400/30 transition-all duration-300">
                    🩸
                  </span>
                  <h3 className="text-base font-semibold group-hover:text-red-500 transition-colors duration-300">
                    Diabetes
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    Tipos, sintomas, medicamentos e orientações essenciais
                    para atender quem tem diabetes no balcão.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="blog-card-arrow">→</span>
                    <span className="text-xs font-medium text-muted group-hover:text-red-500 transition-colors duration-300 link-underline">
                      Ler artigo
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>

            <FadeUp delay={500}>
              <Link href="/hormonios" className="blog-card group relative overflow-hidden">
                <div className="blog-card-content">
                  <Image
                    src={foto("photo-1559757175-5700dde675bc")}
                    alt=""
                    fill
                    className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/10 text-2xl ring-1 ring-purple-400/15 group-hover:ring-purple-400/30 transition-all duration-300">
                    🧬
                  </span>
                  <h3 className="text-base font-semibold group-hover:text-purple-500 transition-colors duration-300">
                    Hormônios
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    Tireoide, hormônios sexuais, insulina e cortisol —
                    tudo que o atendente precisa saber.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="blog-card-arrow">→</span>
                    <span className="text-xs font-medium text-muted group-hover:text-purple-500 transition-colors duration-300 link-underline">
                      Ler artigo
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── WAVE DIVIDER (FLIP) ─── */}
      <WaveDivider flip />

      {/* ══════════════════════════════════════════════
          SEÇÃO: CADASTRO GRATUITO
          ══════════════════════════════════════════════ */}
      <section
        id="cadastro-gratuito"
        className="relative overflow-hidden bg-forest-600 py-20 sm:py-28"
      >
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-green-400/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Texto + Benefícios */}
            <FadeUp>
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm shadow-[0_0_15px_rgba(76,161,93,0.1)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  100% Gratuito
                </span>
                <h2 className={`${h2Cls} text-white`}>
                  Comece agora — sem custo
                </h2>
                <p className="mt-3 max-w-md text-white/50 leading-relaxed">
                  Faça seu cadastro e tenha acesso imediato a todas as trilhas,
                  aulas, quizzes e simulados. Sem compromisso, sem mensalidade.
                </p>

                {/* Benefícios */}
                <div className="mt-8 space-y-5">
                  {[
                    {
                      icon: "🎓",
                      title: "Acesso completo",
                      desc: "Todas as 6 trilhas e 100% do conteúdo liberado.",
                    },
                    {
                      icon: "🏆",
                      title: "Gamificação inclusa",
                      desc: "XP, ranking, badges e missões semanais para motivar seu estudo.",
                    },
                    {
                      icon: "📜",
                      title: "Certificado ao finalizar",
                      desc: "Receba seu certificado de conclusão reconhecido.",
                    },
                  ].map((beneficio, i) => (
                    <div
                      key={i}
                      className="group relative flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.03]"
                    >
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl ring-1 ring-white/10 group-hover:ring-orange-400/30 group-hover:bg-white/10 transition-all duration-300">
                        {beneficio.icon}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {beneficio.title}
                        </h4>
                        <p className="text-xs text-white/40">
                          {beneficio.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Right: Formulário de cadastro gratuito */}
            <FadeUp delay={200}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8 glass-premium">
                <div className="mb-6 text-center">
                  <h3 className={`${h3Cls} text-white`}>
                    Cadastro Gratuito
                  </h3>
                  <p className="mt-1 text-sm text-white/40">
                    Preencha e comece a estudar agora mesmo
                  </p>
                </div>
                <CadastroGratuitoForm />
                <p className="mt-4 text-center text-xs text-white/40">
                  ✅ Seus dados estão seguros. Não enviamos spam.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── WAVE DIVIDER ─── */}
      <WaveDivider />

      {/* ══════════════════════════════════════════════
          FOOTER CTA
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-forest-700 py-16 sm:py-20">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/8 blur-[150px]" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeUp>
            <h2 className={`${h2Cls} text-white`}>
              Pronto para transformar seu atendimento?
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              Junte-se a centenas de atendentes que já estão elevando o padrão
              do cuidado em farmácias por todo o Brasil.
            </p>
            <div className="mt-10">
              <Botao
                href="#cadastro-gratuito"
                variante="primary"
                tamanho="xl"
                className="shadow-[0_8px_40px_rgba(214,110,15,0.45)] hover:shadow-[0_12px_60px_rgba(214,110,15,0.65)] hover:scale-[1.04] transition-all duration-300"
              >
                Começar Grátis
              </Botao>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER INSTITUCIONAL
          ══════════════════════════════════════════════ */}
      <footer className="border-t border-forest-600/20 bg-forest-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-500 text-white shadow-md ring-1 ring-white/20">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-4 9 4-9 4-9-4Z" />
                    <path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" />
                  </svg>
                </span>
                <span className="text-sm font-bold text-white/90">
                  Atendentes de Farmácia
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                A formação mais completa do Brasil para atendentes de drogaria
                e perfumaria — do iniciante ao avançado, com foco em saúde
                integral, atendimento humanizado e segurança sanitária.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#cadastro-gratuito"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-forest-700 transition-all hover:bg-white/90 hover:scale-105"
                >
                  Começar Grátis
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h5 className="text-sm font-semibold" style={{ color: "#fffec7" }}>
                Navegação
              </h5>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/dashboard" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Painel</Link></li>
                <li><Link href="/trilhas" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Trilhas</Link></li>
                <li><Link href="/ranking" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Ranking</Link></li>
                <li><Link href="/missoes" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Missões</Link></li>
                <li><Link href="/curiosidades" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Curiosidades</Link></li>
                <li><Link href="/pressao-arterial" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Pressão Arterial</Link></li>
                <li><Link href="/comando-diario" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Comando Diário</Link></li>
              </ul>
            </div>

            {/* Aprendizado */}
            <div>
              <h5 className="text-sm font-semibold" style={{ color: "#fffec7" }}>
                Aprendizado
              </h5>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/trilhas" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Perfumaria e Cosméticos</Link></li>
                <li><Link href="/trilhas" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Capacitação em Medicamentos</Link></li>
                <li><Link href="/trilhas" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Receitas e Legislação</Link></li>
                <li><Link href="/trilhas" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Atendimento Humanizado</Link></li>
                <li><Link href="/curiosidades" className="text-sm text-white/50 transition-colors hover:text-white link-underline">Curiosidades do Setor</Link></li>
              </ul>
            </div>

            {/* Patrocínio */}
            <div>
              <h5 className="text-sm font-semibold" style={{ color: "#fffec7" }}>
                Patrocínio
              </h5>
              <ul className="mt-4 space-y-2.5">
                <li><a href="https://www.thiagopiola.com.br" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white link-underline">thiagopiola.com.br</a></li>
                <li><a href="https://www.reidasvendas.com.br" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white link-underline">reidasvendas.com.br</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/40">
              Criado pelo Farmacêutico Thiago B. G. Piola, CRF/SP 58.519
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/30">
              <Link href="/privacidade" className="transition-colors hover:text-white/60 link-underline">Privacidade</Link>
              <Link href="/termos" className="transition-colors hover:text-white/60 link-underline">Termos de uso</Link>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-white/25">
            Conteúdo educativo criado por farmacêutico. Não substitui a
            orientação do farmacêutico ou do médico. As decisões clínicas e a
            dispensação de medicamentos controlados são atos do profissional
            habilitado.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Componente de formulário de cadastro gratuito ─── */
function CadastroGratuitoForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [enviando, setEnviando] = useState(false);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setEnviando(true);

    try {
      const res = await fetch("/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, whatsapp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro ?? "Erro ao cadastrar. Tente novamente.");
        setEnviando(false);
        return;
      }

      setSucesso(true);
      setEnviando(false);
    } catch {
      setErro("Erro de conexão. Verifique sua internet e tente novamente.");
      setEnviando(false);
    }
  }

  if (sucesso) {
    return (
      <div className="text-center py-8">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-4xl mb-4 ring-1 ring-green-400/30">
          ✅
        </span>
        <h4 className="text-lg font-semibold text-white">Cadastro realizado!</h4>
        <p className="mt-2 text-sm text-white/50 leading-relaxed">
          Seus dados foram enviados com sucesso. Em breve você receberá
          instruções de acesso no e-mail informado.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={enviar}>
      <div>
        <label htmlFor="nome-gratis" className="text-sm font-medium text-white/70">
          Nome completo
        </label>
        <input
          id="nome-gratis"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20"
          placeholder="Seu nome completo"
        />
      </div>
      <div>
        <label htmlFor="email-gratis" className="text-sm font-medium text-white/70">
          E-mail
        </label>
        <input
          id="email-gratis"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20"
          placeholder="voce@email.com"
        />
      </div>
      <div>
        <label htmlFor="whatsapp-gratis" className="text-sm font-medium text-white/70">
          WhatsApp
        </label>
        <input
          id="whatsapp-gratis"
          type="tel"
          required
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20"
          placeholder="(11) 99999-8888"
        />
      </div>
      {erro && (
        <p className="text-sm text-orange-400 bg-orange-500/10 rounded-lg px-3 py-2">
          {erro}
        </p>
      )}
      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-sm font-bold text-white shadow-[0_4px_24px_rgba(214,110,15,0.3)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(214,110,15,0.45)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {enviando ? "Enviando..." : "Quero Estudar Grátis"}
      </button>
      <p className="text-center text-[11px] text-white/30">
        ✅ Seus dados estão seguros. Ao cadastrar, você concorda com nossos
        termos de uso.
      </p>
    </form>
  );
}
