"use client";

import { HeroVideo } from "@/components/hero-video";
import { FadeUp } from "@/components/fade-up";
import { ScrollReveal } from "@/components/animacoes";
import { MatriculaForm } from "@/components/matricula-form";
import { trilhas, totalAulas } from "@/content/curriculo";
import { Botao, Card } from "@/components/ui";
import type { Trilha } from "@/content/types";
import { Icon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ─── Tipografia inline ─── */
const h1Cls =
  "font-display text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold leading-[1.0] tracking-[-0.04em]";
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

export default function HomePage() {
  const total = totalAulas();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
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

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: "6", label: "TRILHAS" },
                { value: `${total}+`, label: "AULAS" },
                { value: "∞", label: "DO ZERO AO AVANÇADO" },
                { value: "100%", label: "GRATUITO" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-green-400 tabular-nums">
                    {stat.value}
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

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave" />

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

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave divider-wave-flip" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: COMO ESTUDAR (3 PASSOS)
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/20 to-background py-20 sm:py-28 bg-noise">
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

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: POR QUE ESTA FORMAÇÃO?
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/20 to-background py-20 sm:py-28 bg-noise">
        {/* Elementos decorativos */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/4 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange-500/3 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Por que escolher</span>
              <h2 className={h2Cls}>
                Formação completa para o balcão da farmácia
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Conteúdo criado por farmacêutico, com base na rotina real da
                drogaria. Aprendizado que vai da teoria à prática do atendimento.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeUp delay={100}>
              <div className="glass-premium group relative overflow-hidden flex flex-col p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full gradient-border-wrap">
                <Image
                  src={foto("photo-1544717297-fa95b6eb9642")}
                  alt=""
                  fill
                  className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-green-400/10 text-3xl ring-1 ring-green-400/20 group-hover:ring-green-400/40 group-hover:shadow-[0_0_30px_rgba(76,161,93,0.15)] transition-all duration-300">
                  🎓
                </span>
                <h3 className={h3Cls}>Conteúdo completo</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  Perfumaria, medicamentos, leitura de receitas, legislação
                  ANVISA, portaria 344, atendimento humanizado e muito mais.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="glass-premium group relative overflow-hidden flex flex-col p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full gradient-border-wrap">
                <Image
                  src={foto("photo-1559839734-2b71ea197ec2")}
                  alt=""
                  fill
                  className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 text-3xl ring-1 ring-orange-400/20 group-hover:ring-orange-400/40 group-hover:shadow-[0_0_30px_rgba(214,110,15,0.15)] transition-all duration-300">
                  🧑‍⚕️
                </span>
                <h3 className={h3Cls}>Criado por farmacêutico</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  Base científica, atualização regulatória e visão prática de
                  quem vive o balcão. Conteúdo que prepara para o mundo real.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="glass-premium group relative overflow-hidden flex flex-col p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full gradient-border-wrap sm:col-span-2 lg:col-span-1">
                <Image
                  src={foto("photo-1573497019940-1c28c88b4f3e")}
                  alt=""
                  fill
                  className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-orange-400/10 text-3xl ring-1 ring-green-400/20 group-hover:ring-orange-400/40 group-hover:shadow-[0_0_30px_rgba(76,161,93,0.15)] transition-all duration-300">
                  🌟
                </span>
                <h3 className={h3Cls}>Atendimento que encanta</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  Cuidado humanizado, empatia, acolhimento e comunicação ética —
                  o diferencial que transforma clientes em pacientes fiéis.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave divider-wave-flip" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: SIMULAÇÕES DE BALCÃO
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/20 to-background py-20 sm:py-28 bg-noise">
        {/* Elementos decorativos */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/4 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange-500/3 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Simulações de Balcão</span>
              <h2 className={h2Cls}>
                Antes e depois do atendimento
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Veja na prática como uma abordagem consultiva transforma a
                experiência do cliente na farmácia.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Card: Abordagem consultiva ✅ */}
            <FadeUp delay={100}>
              <div className="glass-premium group relative overflow-hidden flex flex-col p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full gradient-border-wrap border border-emerald-200/50">
                {/* Badge */}
                <div className="relative z-10 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                    Abordagem consultiva ✅
                  </span>
                </div>
                <h3 className={`${h3Cls}`}>O que falar</h3>

                {/* Diálogo realista */}
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">👩‍🦰</span>
                    <div>
                      <span className="text-xs font-semibold text-muted">Cliente</span>
                      <p className="text-foreground/80">
                        "Bom dia! Estou com uma dor de cabeça forte desde
                        ontem. O que a senhora me recomenda?"
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">👩‍⚕️</span>
                    <div>
                      <span className="text-xs font-semibold text-emerald-400">Atendente</span>
                      <p className="text-foreground/80">
                        "Bom dia! Vou ajudar você. Antes de indicar, posso
                        perguntar: você tem alguma alergia a medicamentos?
                        Toma algum remédio contínuo?"
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">👩‍🦰</span>
                    <div>
                      <span className="text-xs font-semibold text-muted">Cliente</span>
                      <p className="text-foreground/80">
                        "Não, não tenho alergias. Só tomo anticoncepcional."
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">👩‍⚕️</span>
                    <div>
                      <span className="text-xs font-semibold text-emerald-400">Atendente</span>
                      <p className="text-foreground/80">
                        "Perfeito! O paracetamol 750mg é uma ótima opção —
                        não interage com seu anticoncepcional. Vou separar
                        para você. Lembre-se de tomar com água e não
                        ultrapassar 3 comprimidos ao dia. Melhoras! 💚"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resultado */}
                <div className="mt-5 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
                  <span>✅</span>
                  <span>Cliente se sente acolhida e segura para voltar</span>
                </div>
              </div>
            </FadeUp>

            {/* Card: O que evitar ❌ */}
            <FadeUp delay={200}>
              <div className="glass-premium group relative overflow-hidden flex flex-col p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full gradient-border-wrap border border-rose-200/50">
                {/* Badge */}
                <div className="relative z-10 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/30 bg-rose-500/15 px-3 py-1 text-xs font-medium text-rose-300 backdrop-blur-sm shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                    O que evitar ❌
                  </span>
                </div>
                <h3 className={`${h3Cls}`}>O que evitar</h3>

                {/* Diálogo realista */}
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">👩‍🦰</span>
                    <div>
                      <span className="text-xs font-semibold text-muted">Cliente</span>
                      <p className="text-foreground/80">
                        "Bom dia! Estou com uma dor de cabeça forte desde
                        ontem. O que a senhora me recomenda?"
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">🧑‍💼</span>
                    <div>
                      <span className="text-xs font-semibold text-rose-400">Atendente</span>
                      <p className="text-foreground/80">
                        "Toma dipirona? É o mais forte que tem."
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">👩‍🦰</span>
                    <div>
                      <span className="text-xs font-semibold text-muted">Cliente</span>
                      <p className="text-foreground/80">
                        "Hum… não sei. Tomei uma vez e passei mal. Tem outra
                        opção?"
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">🧑‍💼</span>
                    <div>
                      <span className="text-xs font-semibold text-rose-400">Atendente</span>
                      <p className="text-foreground/80">
                        "Só tenho esse. Se quiser, leva. Ou passa no médico."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resultado */}
                <div className="mt-5 flex items-center gap-2 rounded-lg bg-rose-500/10 px-4 py-2 text-xs font-medium text-rose-300">
                  <span>❌</span>
                  <span>Cliente sai insatisfeita e não volta mais</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave divider-wave-flip" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: MANDALA DOS 5 PILARES
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-2 py-20 sm:py-28">
        {/* Pattern grid */}
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-green-400/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Mandala dos 5 Pilares</span>
              <h2 className={h2Cls}>
                Como encantar no balcão
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                5 pilares que transformam atendentes em cuidadores
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              {
                icon: "🫂",
                title: "Acolhimento",
                desc: "Receber cada paciente com respeito, atenção e um sorriso genuíno — criando um ambiente seguro e confiável desde o primeiro contato.",
                from: "from-green-500/20",
                to: "to-green-400/10",
                ring: "ring-green-400/20",
                ringHover: "ring-green-400/40",
                shadow: "rgba(76,161,93,0.15)",
              },
              {
                icon: "🔬",
                title: "Cuidado Técnico",
                desc: "Conhecimento profundo de medicamentos, posologias, interações e legislação — a base técnica que sustenta um atendimento seguro e de qualidade.",
                from: "from-cyan-500/20",
                to: "to-cyan-400/10",
                ring: "ring-cyan-400/20",
                ringHover: "ring-cyan-400/40",
                shadow: "rgba(6,182,212,0.15)",
              },
              {
                icon: "💬",
                title: "Comunicação Empática",
                desc: "Saber ouvir, explicar com clareza e validar as preocupações do paciente — transformando cada interação em um momento de cuidado real.",
                from: "from-violet-500/20",
                to: "to-violet-400/10",
                ring: "ring-violet-400/20",
                ringHover: "ring-violet-400/40",
                shadow: "rgba(139,92,246,0.15)",
              },
              {
                icon: "✨",
                title: "Encantamento",
                desc: "Surpreender positivamente com pequenos gestos, atenção aos detalhes e um atendimento que vai além da expectativa — fidelizando pela experiência.",
                from: "from-orange-500/20",
                to: "to-orange-400/10",
                ring: "ring-orange-400/20",
                ringHover: "ring-orange-400/40",
                shadow: "rgba(214,110,15,0.15)",
              },
              {
                icon: "🤲",
                title: "Apoio ao Tratamento",
                desc: "Acompanhar, orientar e motivar o paciente na adesão ao tratamento — com dicas práticas, reforço positivo e cuidado contínuo.",
                from: "from-rose-500/20",
                to: "to-rose-400/10",
                ring: "ring-rose-400/20",
                ringHover: "ring-rose-400/40",
                shadow: "rgba(244,63,94,0.15)",
              },
            ].map((pilar, i) => (
              <ScrollReveal key={pilar.title} delay={i * 100} direction="up">
                <div className="glass-premium group relative overflow-hidden flex flex-col items-center p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full">
                  {/* Ícone grande */}
                  <span
                    className={`relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${pilar.from} ${pilar.to} text-4xl ring-1 ${pilar.ring} group-hover:${pilar.ringHover} group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_30px_${pilar.shadow}]`}
                  >
                    {pilar.icon}
                  </span>
                  <h3 className={h3Cls}>{pilar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {pilar.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: O QUE VOCÊ VAI APRENDER (6 TRILHAS)
          ══════════════════════════════════════════════ */}
      <section
        id="trilhas"
        className="relative overflow-hidden bg-forest-500 py-20 sm:py-28"
      >
        {/* Pattern + gradiente */}
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm shadow-[0_0_15px_rgba(76,161,93,0.1)]">
                Grade curricular
              </span>
              <h2 className={`${h2Cls} text-white`}>
                O que você vai aprender
              </h2>
              <p className="mt-3 text-white/50 leading-relaxed">
                Seis trilhas progressivas — do básico ao avançado — que
                cobrem tudo que um atendente de farmácia precisa dominar.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {trilhas.map((t: Trilha, i: number) => (
              <FadeUp key={t.id} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-400 hover:border-orange-400/30 hover:bg-white/[0.07] hover:scale-[1.015] hover:shadow-[0_12px_48px_rgba(0,0,0,0.25)] sm:p-8">
                  {/* Número decorativo GRANDE */}
                  <span className="absolute -right-4 -top-4 select-none text-[6rem] font-black leading-none text-white/[0.06] group-hover:text-white/[0.09] transition-all duration-500">
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
                    className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.07]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="relative z-10 flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-400/25 to-green-500/15 text-2xl ring-1 ring-white/10 group-hover:ring-orange-400/30 group-hover:scale-110 transition-all duration-300">
                      {iconeTrilha[t.id] ?? "📚"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className={`${h3Cls} text-white group-hover:text-glow transition-colors duration-300`}>
                        {t.titulo}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/50 line-clamp-2 group-hover:text-white/60 transition-colors duration-300">
                        {t.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                    <span className="text-xs text-white/40 group-hover:text-white/50 transition-colors duration-300">
                      {t.modulos.reduce((s, m) => s + m.aulas.length, 0)} aulas
                    </span>
                    <span className="text-[8px] text-white/20">•</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/60 group-hover:border-orange-400/20 group-hover:bg-orange-500/10 group-hover:text-orange-300 transition-all duration-300">
                      {t.nivelFaixa}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: CURIOSIDADES DO SETOR (BLOG CARDS)
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/10 to-background py-20 sm:py-24">
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

            {/* ─── Card 4: Diabetes ─── */}
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

            {/* ─── Card 5: Hormônios ─── */}
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

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave divider-wave-flip" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: GAMIFICAÇÃO (VISUAL DE GAME)
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/10 to-background py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/3 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Gamificação</span>
              <h2 className={h2Cls}>Como funciona</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Estude, acumule XP, suba de nível no ranking e conquiste badges.
                Aprender nunca foi tão envolvente.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <FadeUp delay={100}>
              <div className="glass-premium group relative overflow-hidden flex flex-col p-7 sm:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full">
                <Image
                  src={foto("photo-1567427017947-545c5f8d16ad")}
                  alt=""
                  fill
                  className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.07]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 text-3xl ring-1 ring-orange-400/20 group-hover:ring-orange-400/40 group-hover:scale-110 transition-all duration-300">
                  🎯
                </span>
                <h3 className={h3Cls}>Complete aulas</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Cada aula concluída rende XP. Quanto mais você estuda, mais
                  pontos acumula.
                </p>
                {/* XP Bar visual aprimorada */}
                <div className="mt-5 w-full max-w-[220px] mx-auto">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                      <Icon name="sparkles" size={12} /> XP
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-muted">
                      <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
                      <span>Nível atual</span>
                    </div>
                  </div>
                  <div className="xp-bar">
                    <div className="xp-bar-fill" style={{ width: "62%" }} />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-muted">
                    <span className="flex items-center gap-1">
                      🎮 Lv. 3
                    </span>
                    <span className="font-semibold text-foreground">620 / 1000 XP</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <Link href="/ranking" className="block group h-full">
                <div className="glass-premium relative overflow-hidden flex flex-col p-7 sm:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full cursor-pointer">
                  <Image
                    src={foto("photo-1559136555-9303baea8ebd")}
                    alt=""
                    fill
                    className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.07]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-green-400/10 text-3xl ring-1 ring-green-400/20 group-hover:ring-green-400/40 group-hover:scale-110 transition-all duration-300">
                    🏆
                  </span>
                  <h3 className={h3Cls}>Suba no ranking</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Compare seu progresso com outros alunos e veja quem está
                    liderando o aprendizado.
                  </p>
                  {/* Podium visual aprimorado */}
                  <div className="mt-5 game-podium-compact">
                    <div className="game-podium-bar bar-3" />
                    <div className="game-podium-bar bar-1" />
                    <div className="game-podium-bar bar-2" />
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-4 text-[11px] text-muted">
                    <span>🥉 3º</span>
                    <span className="font-semibold text-orange-500">🥇 1º</span>
                    <span>🥈 2º</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 group-hover:gap-2 transition-all">
                    Ver ranking completo →
                  </div>
                </div>
              </Link>
            </FadeUp>

            <FadeUp delay={300}>
              <Link href="/missoes" className="block group h-full">
                <div className="glass-premium relative overflow-hidden flex flex-col p-7 sm:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full cursor-pointer">
                  <Image
                    src={foto("photo-1600269452121-4f2416e55c28")}
                    alt=""
                    fill
                    className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.07]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-green-400/10 text-3xl ring-1 ring-orange-400/20 group-hover:ring-green-400/40 group-hover:scale-110 transition-all duration-300">
                    🎖️
                  </span>
                  <h3 className={h3Cls}>Desbloqueie badges</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Complete missões especiais, desbloqueie conquistas e mostre
                    seu nível de conhecimento.
                  </p>
                  {/* Badges visual */}
                  <div className="mt-5 badge-visual">
                    <span className="badge-medal gold">🏅</span>
                    <span className="badge-medal silver">🏅</span>
                    <span className="badge-medal bronze">🏅</span>
                    <span className="badge-medal" style={{ background: "linear-gradient(135deg, #4ca15d, #66b59a)", color: "white" }}>🏅</span>
                    <span className="badge-medal" style={{ background: "linear-gradient(135deg, #f49b44, #f8b773)", color: "white" }}>🏅</span>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-muted">
                    <span className="font-semibold text-foreground">8 badges</span>
                    <span className="w-px h-3 bg-border/50" />
                    <span>disponíveis</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 group-hover:gap-2 transition-all">
                    Ver missões de balcão →
                  </div>
                </div>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave divider-wave-flip" />

      {/* ══════════════════════════════════════════════
          YOUTUBE: PERFIL 51%
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background to-forest-50/10 py-16 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/3 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeUp>
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-sm shadow-[0_0_15px_rgba(214,110,15,0.1)]">
              🎬 Perfil 51%
            </span>
            <h2 className={h2Cls}>
              O conceito <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">Perfil 51%</span> explicado
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Assista ao vídeo e entenda como o método Perfil 51% transforma
              atendentes em profissionais de excelência.
            </p>
            <div className="mt-8">
              <a
                href="https://www.youtube.com/watch?v=SL74T15d82Y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_40px_rgba(220,38,38,0.35)] transition-all duration-300 hover:bg-red-500 hover:scale-[1.03] hover:shadow-[0_12px_50px_rgba(220,38,38,0.5)] active:scale-[0.97]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                </svg>
                Assistir no YouTube
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: MATRÍCULA / SER ALUNO
          ══════════════════════════════════════════════ */}
      <section
        id="ser-aluno"
        className="relative overflow-hidden bg-gradient-to-br from-forest-600 via-forest-500 to-forest-700 py-20 sm:py-28"
      >
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-green-400/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Texto + Pilares */}
            <FadeUp>
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm shadow-[0_0_15px_rgba(76,161,93,0.1)]">
                  Matrícula
                </span>
                <h2 className={`${h2Cls} text-white`}>Comece agora</h2>
                <p className="mt-4 max-w-md text-white/50 leading-relaxed">
                  Acesso imediato a todo o conteúdo, atualizações constantes e
                  certificado ao finalizar. Tudo gratuito.
                </p>

                {/* Pilares com ícones maiores e imagens de fundo */}
                <div className="mt-8 space-y-5">
                  {[
                    {
                      icon: "📚",
                      title: "Aprendizado ativo",
                      desc: "Aulas com quiz, simulações e estudos de caso reais.",
                      img: "photo-1524178232363-1fb2b075b655",
                    },
                    {
                      icon: "🔬",
                      title: "Base científica",
                      desc: "Conteúdo atualizado com as normas da ANVISA e portarias vigentes.",
                      img: "photo-1576086213369-97bcbbb1b2b1",
                    },
                    {
                      icon: "💛",
                      title: "Atendimento encantador",
                      desc: "O diferencial que faz o cliente voltar sempre.",
                      img: "photo-1551836022-d5d88e9218df",
                    },
                  ].map((pilar, i) => (
                    <div key={i} className="group relative overflow-hidden flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.03]">
                      <Image
                        src={foto(pilar.img)}
                        alt=""
                        fill
                        className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.06]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl ring-1 ring-white/10 group-hover:ring-orange-400/30 group-hover:bg-white/10 transition-all duration-300">
                        {pilar.icon}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {pilar.title}
                        </h4>
                        <p className="text-xs text-white/40">{pilar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Right: Formulário premium */}
            <FadeUp delay={200}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8 glass-premium">
                <div className="mb-6 text-center">
                  <h3 className={`${h3Cls} text-white`}>
                    Torne-se Aluno
                  </h3>
                  <p className="mt-1 text-sm text-white/40">
                    Preencha os dados abaixo para começar
                  </p>
                </div>
                <MatriculaForm />
                <p className="mt-4 text-center text-xs text-white/40">
                  *Sua solicitação será analisada e confirmada por e-mail em até 24h
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave" />

      {/* ══════════════════════════════════════════════
          DICAS POR FAIXA ETÁRIA
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/20 to-background py-20 sm:py-28 bg-noise">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/4 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange-500/3 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Dicas por faixa etária</span>
              <h2 className={h2Cls}>
                Cada idade, um cuidado diferente
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                A abordagem ideal muda conforme a faixa etária. Veja como
                adaptar seu atendimento no balcão da farmácia.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <FadeUp delay={100}>
              <div className="glass-premium group relative overflow-hidden flex flex-col items-center p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full">
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-green-400/10 text-4xl ring-1 ring-green-400/20 group-hover:ring-green-400/40 group-hover:scale-110 transition-all duration-300">
                  🧒
                </div>
                <h3 className={h3Cls}>Adolescentes</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Abordagem discreta e acolhedora para questões de pele,
                  acne e saúde sexual. Rapidez no atendimento e linguagem
                  simples fazem toda a diferença.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-green-400/15 bg-green-500/8 px-2.5 py-0.5 text-[11px] font-medium text-green-600 dark:text-green-400">🌱 Acne</span>
                  <span className="rounded-full border border-green-400/15 bg-green-500/8 px-2.5 py-0.5 text-[11px] font-medium text-green-600 dark:text-green-400">🤫 Discrição</span>
                  <span className="rounded-full border border-green-400/15 bg-green-500/8 px-2.5 py-0.5 text-[11px] font-medium text-green-600 dark:text-green-400">⚡ Rapidez</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="glass-premium group relative overflow-hidden flex flex-col items-center p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full">
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 text-4xl ring-1 ring-orange-400/20 group-hover:ring-orange-400/40 group-hover:scale-110 transition-all duration-300">
                  🧑‍💼
                </div>
                <h3 className={h3Cls}>Adultos</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Escuta ativa para identificar sintomas e orientar sobre
                  automedicação responsável. Respeito à rotina corrida e
                  sugestões práticas de cuidados diários.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-orange-400/15 bg-orange-500/8 px-2.5 py-0.5 text-[11px] font-medium text-orange-600 dark:text-orange-400">👂 Escuta</span>
                  <span className="rounded-full border border-orange-400/15 bg-orange-500/8 px-2.5 py-0.5 text-[11px] font-medium text-orange-600 dark:text-orange-400">💊 Automedicação</span>
                  <span className="rounded-full border border-orange-400/15 bg-orange-500/8 px-2.5 py-0.5 text-[11px] font-medium text-orange-600 dark:text-orange-400">📅 Rotina</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="glass-premium group relative overflow-hidden flex flex-col items-center p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored h-full">
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-orange-400/10 text-4xl ring-1 ring-green-400/20 group-hover:ring-orange-400/40 group-hover:scale-110 transition-all duration-300">
                  👴
                </div>
                <h3 className={h3Cls}>Idosos</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Paciência e clareza na comunicação para explicar
                  polifarmácia e interações medicamentosas. Acompanhamento
                  contínuo e reforço positivo no uso correto dos remédios.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-green-400/15 bg-green-500/8 px-2.5 py-0.5 text-[11px] font-medium text-green-600 dark:text-green-400">🧘 Paciência</span>
                  <span className="rounded-full border border-green-400/15 bg-green-500/8 px-2.5 py-0.5 text-[11px] font-medium text-green-600 dark:text-green-400">💊 Polifarmácia</span>
                  <span className="rounded-full border border-green-400/15 bg-green-500/8 px-2.5 py-0.5 text-[11px] font-medium text-green-600 dark:text-green-400">📋 Acompanhamento</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave" />

      {/* ══════════════════════════════════════════════
          FOOTER CTA
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-forest-700 py-16 sm:py-20">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/8 blur-[150px]" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeUp>
            <h2 className={`${h2Cls} text-white text-glow-orange`}>
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
      <footer className="border-t border-forest-600/20 bg-forest-500 text-white bg-noise">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-500 text-white shadow-md ring-1 ring-white/20 animate-pulse-soft">
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
              <h5
                className="text-sm font-semibold"
                style={{ color: "#fffec7" }}
              >
                Navegação
              </h5>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Painel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Trilhas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ranking"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Ranking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/missoes"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Missões
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curiosidades"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Curiosidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pressao-arterial"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Pressão Arterial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/comando-diario"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Comando Diário
                  </Link>
                </li>
              </ul>
            </div>

            {/* Aprendizado */}
            <div>
              <h5
                className="text-sm font-semibold"
                style={{ color: "#fffec7" }}
              >
                Aprendizado
              </h5>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Perfumaria e Cosméticos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Capacitação em Medicamentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Receitas e Legislação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Atendimento Humanizado
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curiosidades"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    Curiosidades do Setor
                  </Link>
                </li>
              </ul>
            </div>

            {/* Patrocínio */}
            <div>
              <h5
                className="text-sm font-semibold"
                style={{ color: "#fffec7" }}
              >
                Patrocínio
              </h5>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="https://www.thiagopiola.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    thiagopiola.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reidasvendas.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-white link-underline"
                  >
                    reidasvendas.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/40">
              Criado pelo Farmacêutico Thiago B. G. Piola, CRF/SP 58.519
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/30">
              <Link
                href="/privacidade"
                className="transition-colors hover:text-white/60 link-underline"
              >
                Privacidade
              </Link>
              <Link
                href="/termos"
                className="transition-colors hover:text-white/60 link-underline"
              >
                Termos de uso
              </Link>
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
