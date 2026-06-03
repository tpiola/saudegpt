"use client";

import { HeroVideo } from "@/components/hero-video";
import { FadeUp } from "@/components/fade-up";
import { MatriculaForm } from "@/components/matricula-form";
import { trilhas, totalAulas } from "@/content/curriculo";
import { Botao, Card, Etiqueta, NivelBadge } from "@/components/ui";
import type { Trilha } from "@/content/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── Tipografia inline ─── */
const h1Cls =
  "font-display text-[clamp(2.4rem,6.5vw,5rem)] font-extrabold leading-[1.0] tracking-[-0.03em]";
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

export default function HomePage() {
  const total = totalAulas();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* ══════════════════════════════════════════════
          HERO COM VÍDEO CINEMATOGRÁFICO
          ══════════════════════════════════════════════ */}
      <section className="hero-rd relative flex min-h-[90vh] items-center overflow-hidden">
        <HeroVideo videoId="4122" overlay="forest" />

        {/* Grid pattern overlay */}
        <div className="pattern-grid pointer-events-none absolute inset-0 z-[2] opacity-30" />

        {/* Gradient radial sutil no centro */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-green-400/8 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp>
            {/* Badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(76,161,93,0.6)] animate-pulse" />
              Formação completa para Atendentes
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            <h1 className={`${h1Cls} mt-4 max-w-4xl text-white`}>
              Atendentes de{" "}
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-forest-200 bg-clip-text text-transparent">
                Farmácia
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={240}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              A formação que transforma atendentes em profissionais de cuidado —
              com técnica, acolhimento e excelência no balcão da farmácia.
            </p>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={360}>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-sm text-orange-400">
                  4
                </span>
                <span className="text-sm text-white/50">Trilhas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-sm text-orange-400">
                  {total}+
                </span>
                <span className="text-sm text-white/50">Aulas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-sm text-green-400">
                  ∞
                </span>
                <span className="text-sm text-white/50">Do zero ao avançado</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-sm text-green-400">
                  ✓
                </span>
                <span className="text-sm text-white/50">100% online</span>
              </div>
            </div>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={480}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Botao
                href="#matricular"
                variante="primary"
                tamanho="xl"
                className="shadow-[0_8px_32px_rgba(214,110,15,0.35)] hover:shadow-[0_12px_40px_rgba(214,110,15,0.45)]"
              >
                Quero me matricular
              </Botao>
              <Botao href="#trilhas" variante="outline-white" tamanho="xl">
                Ver trilhas
              </Botao>
            </div>
          </FadeUp>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce sm:block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEÇÃO: POR QUE ESTA FORMAÇÃO?
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/20 to-background py-20 sm:py-28">
        {/* Elemento decorativo */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/3 blur-[120px]" />

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
              <Card
                variante="elevated"
                className="group p-6 sm:p-8 hover:-translate-y-1"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-3xl shadow-sm ring-1 ring-green-200/50 dark:from-green-900/20 dark:to-green-800/10 dark:ring-green-700/30">
                  🎓
                </span>
                <h3 className={h3Cls}>Conteúdo completo</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Perfumaria, medicamentos, leitura de receitas, legislação
                  ANVISA, portaria 344, atendimento humanizado e muito mais.
                </p>
              </Card>
            </FadeUp>

            <FadeUp delay={200}>
              <Card
                variante="elevated"
                className="group p-6 sm:p-8 hover:-translate-y-1"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-3xl shadow-sm ring-1 ring-green-200/50 dark:from-green-900/20 dark:to-green-800/10 dark:ring-green-700/30">
                  🧑‍⚕️
                </span>
                <h3 className={h3Cls}>Criado por farmacêutico</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Base científica, atualização regulatória e visão prática de
                  quem vive o balcão. Conteúdo que prepara para o mundo real.
                </p>
              </Card>
            </FadeUp>

            <FadeUp delay={300}>
              <Card
                variante="elevated"
                className="group p-6 sm:p-8 sm:col-span-2 lg:col-span-1 hover:-translate-y-1"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-3xl shadow-sm ring-1 ring-green-200/50 dark:from-green-900/20 dark:to-green-800/10 dark:ring-green-700/30">
                  🌟
                </span>
                <h3 className={h3Cls}>Atendimento que encanta</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Cuidado humanizado, empatia, acolhimento e comunicação ética —
                  o diferencial que transforma clientes em pacientes fiéis.
                </p>
              </Card>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEÇÃO: O QUE VOCÊ VAI APRENDER (4 TRILHAS)
          ══════════════════════════════════════════════ */}
      <section
        id="trilhas"
        className="relative overflow-hidden bg-forest-500 py-20 sm:py-28"
      >
        {/* Pattern + gradiente */}
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-green-400/3 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-sm">
                Grade curricular
              </span>
              <h2 className={`${h2Cls} text-white`}>
                O que você vai aprender
              </h2>
              <p className="mt-3 text-white/50 leading-relaxed">
                Quatro trilhas progressivas — do básico ao avançado — que
                cobrem tudo que um atendente de farmácia precisa dominar.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {trilhas.map((t: Trilha, i: number) => (
              <FadeUp key={t.id} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:p-8">
                  {/* Número decorativo */}
                  <span className="absolute -right-4 -top-4 select-none text-[5rem] font-black leading-none text-white/5">
                    {String(t.numero).padStart(2, "0")}
                  </span>

                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-400/20 to-green-500/10 text-2xl ring-1 ring-white/10">
                      {iconeTrilha[t.id] ?? "📚"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className={`${h3Cls} text-white`}>{t.titulo}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/50 line-clamp-2">
                        {t.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                    <span className="text-xs text-white/40">
                      {t.modulos.reduce((s, m) => s + m.aulas.length, 0)} aulas
                    </span>
                    <span className="text-[8px] text-white/20">•</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/60">
                      {t.nivelFaixa}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEÇÃO: CURIOSIDADES DO SETOR
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/10 to-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <FadeUp delay={100}>
              <Link
                href="/pressao-arterial"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 text-2xl dark:from-orange-900/20 dark:to-orange-800/10">
                  🩺
                </span>
                <div>
                  <h3 className="text-sm font-semibold">Pressão Arterial</h3>
                  <p className="mt-0.5 text-xs text-subtle">
                    Medição, cuidados e orientação
                  </p>
                </div>
                <span className="ml-auto text-muted transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </FadeUp>

            <FadeUp delay={200}>
              <Link
                href="/curiosidades"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 text-2xl dark:from-green-900/20 dark:to-green-800/10">
                  🥗
                </span>
                <div>
                  <h3 className="text-sm font-semibold">
                    Emagrecimento Saudável
                  </h3>
                  <p className="mt-0.5 text-xs text-subtle">
                    Fitoterápicos, suplementos e bem-estar
                  </p>
                </div>
                <span className="ml-auto text-muted transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </FadeUp>

            <FadeUp delay={300}>
              <Link
                href="/curiosidades"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-forest-50 to-forest-100 text-2xl dark:from-forest-900/20 dark:to-forest-800/10">
                  💡
                </span>
                <div>
                  <h3 className="text-sm font-semibold">
                    Mais Curiosidades
                  </h3>
                  <p className="mt-0.5 text-xs text-subtle">
                    Dicas, receitas e muito mais
                  </p>
                </div>
                <span className="ml-auto text-muted transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEÇÃO: DEPOIMENTO DO FARMACÊUTICO
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-600 via-forest-500 to-forest-700 py-20 sm:py-24">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-green-400/5 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-12">
              {/* Aspas decorativas */}
              <span className="absolute -left-4 -top-4 select-none text-[8rem] font-serif leading-none text-white/5">
                &ldquo;
              </span>

              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/20 to-orange-500/10 text-3xl ring-1 ring-white/10">
                  🧑‍⚕️
                </span>
                <div>
                  <h3 className={`${h3Cls} text-white`}>
                    Palavra do farmacêutico
                  </h3>
                  <p className="text-sm text-white/40">
                    Thiago B. G. Piola · CRF/SP 58.519
                  </p>
                </div>
              </div>

              <blockquote className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                &ldquo;Sempre consulte o(a) farmacêutico(a) para orientação
                personalizada. Solicite o segundo visto para prescrições e
                anote corretamente na etiqueta de posologia. O cuidado seguro
                começa com informação de qualidade.&rdquo;
              </blockquote>

              <div className="mt-6 h-px w-16 bg-gradient-to-r from-orange-400 to-transparent" />

              <p className="mt-4 text-sm text-white/40">
                Conteúdo educativo criado por farmacêutico — referência em
                treinamento de atendentes.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEÇÃO: GAMIFICAÇÃO
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-forest-50/10 to-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="badge-green mb-3">Gamificação</span>
              <h2 className={h2Cls}>Como funciona</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Estude, acumule pontos, suba no ranking e conquiste badges.
                Aprender nunca foi tão envolvente.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <FadeUp delay={100}>
              <Card className="group p-6 text-center sm:p-8 hover:shadow-md">
                <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 text-3xl shadow-sm ring-1 ring-orange-200/50 dark:from-orange-900/20 dark:to-orange-800/10 dark:ring-orange-700/30">
                  🎯
                </span>
                <h3 className={h3Cls}>Complete aulas</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Cada aula concluída rende XP. Quanto mais você estuda, mais
                    pontos acumula.
                </p>
              </Card>
            </FadeUp>

            <FadeUp delay={200}>
              <Card className="group p-6 text-center sm:p-8 hover:shadow-md">
                <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 text-3xl shadow-sm ring-1 ring-orange-200/50 dark:from-orange-900/20 dark:to-orange-800/10 dark:ring-orange-700/30">
                  🏆
                </span>
                <h3 className={h3Cls}>Suba no ranking</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Compare seu progresso com outros alunos e veja quem está
                  liderando o aprendizado.
                </p>
              </Card>
            </FadeUp>

            <FadeUp delay={300}>
              <Card className="group p-6 text-center sm:p-8 hover:shadow-md">
                <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 text-3xl shadow-sm ring-1 ring-orange-200/50 dark:from-orange-900/20 dark:to-orange-800/10 dark:ring-orange-700/30">
                  🎖️
                </span>
                <h3 className={h3Cls}>Desbloqueie badges</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Complete missões especiais, desbloqueie conquistas e mostre
                  seu nível de conhecimento.
                </p>
              </Card>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEÇÃO: MATRÍCULA
          ══════════════════════════════════════════════ */}
      <section
        id="matricular"
        className="relative overflow-hidden bg-gradient-to-br from-forest-600 via-forest-500 to-forest-700 py-20 sm:py-28"
      >
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Texto + Pilares */}
            <FadeUp>
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-sm">
                  Matrícula
                </span>
                <h2 className={`${h2Cls} text-white`}>Comece agora</h2>
                <p className="mt-4 max-w-md text-white/50 leading-relaxed">
                  Invista no seu futuro profissional. Acesso imediato a todo o
                  conteúdo, atualizações constantes e certificado ao finalizar.
                </p>

                {/* Pilares */}
                <div className="mt-8 space-y-4">
                  {[
                    {
                      icon: "📚",
                      title: "Aprendizado ativo",
                      desc: "Aulas com quiz, simulações e estudos de caso reais.",
                    },
                    {
                      icon: "🔬",
                      title: "Base científica",
                      desc: "Conteúdo atualizado com as normas da ANVISA e portarias vigentes.",
                    },
                    {
                      icon: "💛",
                      title: "Atendimento encantador",
                      desc: "O diferencial que faz o cliente voltar sempre.",
                    },
                  ].map((pilar, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl ring-1 ring-white/10">
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

            {/* Right: Formulário */}
            <FadeUp delay={200}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <div className="mb-6 text-center">
                  <h3 className={`${h3Cls} text-white`}>
                    Faça sua matrícula
                  </h3>
                  <p className="mt-1 text-sm text-white/40">
                    Preencha os dados abaixo para começar
                  </p>
                </div>
                <MatriculaForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER CTA
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-forest-700 py-16 sm:py-20">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeUp>
            <h2 className={`${h2Cls} text-white`}>
              Pronto para transformar seu atendimento?
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              Junte-se a centenas de atendentes que já estão elevando o padrão
              do cuidado em farmácias por todo o Brasil.
            </p>
            <div className="mt-8">
              <Botao
                href="#matricular"
                variante="primary"
                tamanho="xl"
                className="shadow-[0_8px_32px_rgba(214,110,15,0.35)] hover:shadow-[0_12px_40px_rgba(214,110,15,0.45)]"
              >
                Quero me matricular
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
                  href="#matricular"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-forest-700 transition-all hover:bg-white/90"
                >
                  Matricule-se
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
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Painel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Trilhas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curiosidades"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Curiosidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pressao-arterial"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Pressão Arterial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/comando-diario"
                    className="text-sm text-white/50 transition-colors hover:text-white"
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
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Perfumaria e Cosméticos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Capacitação em Medicamentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Receitas e Legislação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trilhas"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    Atendimento Humanizado
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curiosidades"
                    className="text-sm text-white/50 transition-colors hover:text-white"
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
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    thiagopiola.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reidasvendas.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-white"
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
                className="transition-colors hover:text-white/60"
              >
                Privacidade
              </Link>
              <Link
                href="/termos"
                className="transition-colors hover:text-white/60"
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
