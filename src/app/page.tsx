"use client";

import { HeroVideo } from "@/components/hero-video";
import { FadeUp } from "@/components/fade-up";
import { MatriculaForm } from "@/components/matricula-form";
import { trilhas, totalAulas } from "@/content/curriculo";
import { Botao, Card, BarraProgresso } from "@/components/ui";
import type { Trilha } from "@/content/types";
import { Icon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
          HERO — 100vh CINEMATOGRÁFICO PREMIUM
          ══════════════════════════════════════════════ */}
      <section className="hero-rd relative flex h-screen items-center overflow-hidden">
        <HeroVideo />

        {/* Grid pattern overlay */}
        <div className="pattern-grid pointer-events-none absolute inset-0 z-[2] opacity-30" />

        {/* Brilho radial central */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-green-400/10 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp>
            {/* Badge com glow verde */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-green-300 backdrop-blur-sm shadow-[0_0_20px_rgba(76,161,93,0.15)]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(76,161,93,0.8)] animate-pulse-soft" />
              Formação completa para Atendentes
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            <h1 className={`${h1Cls} mt-6 max-w-4xl text-white text-glow-green`}>
              Atendentes de{" "}
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-200 bg-clip-text text-transparent">
                Farmácia
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={240}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed tracking-wide text-white/60 sm:text-xl sm:tracking-wider">
              A formação que transforma atendentes em profissionais de cuidado —
              com técnica, acolhimento e excelência no balcão da farmácia.
            </p>
          </FadeUp>

          {/* Stats GRANDES */}
          <FadeUp delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="stat-hero">
                <span className="stat-hero-icon">
                  <span className="stat-hero-icon-bg bg-orange-500" />
                  <span className="relative">4</span>
                </span>
                <div>
                  <span className="stat-hero-number text-orange-400">4</span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                    Trilhas
                  </span>
                </div>
              </div>

              <div className="stat-hero">
                <span className="stat-hero-icon">
                  <span className="stat-hero-icon-bg bg-orange-500" />
                  <span className="relative">📚</span>
                </span>
                <div>
                  <span className="stat-hero-number text-orange-400">{total}+</span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                    Aulas
                  </span>
                </div>
              </div>

              <div className="stat-hero">
                <span className="stat-hero-icon">
                  <span className="stat-hero-icon-bg bg-green-500" />
                  <span className="relative">∞</span>
                </span>
                <div>
                  <span className="stat-hero-number text-green-400">∞</span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                    Do zero ao avançado
                  </span>
                </div>
              </div>

              <div className="stat-hero">
                <span className="stat-hero-icon">
                  <span className="stat-hero-icon-bg bg-green-500" />
                  <span className="relative">✓</span>
                </span>
                <div>
                  <span className="stat-hero-number text-green-400">100%</span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                    Online
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={480}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Botao
                href="#matricular"
                variante="primary"
                tamanho="xl"
                className="shadow-[0_8px_40px_rgba(214,110,15,0.4)] hover:shadow-[0_12px_50px_rgba(214,110,15,0.55)] hover:scale-[1.03] transition-all duration-300"
              >
                Quero me matricular
              </Botao>
              <Botao href="#trilhas" variante="outline-white" tamanho="xl">
                Ver trilhas
              </Botao>
            </div>
          </FadeUp>
        </div>

        {/* Scroll indicator elegante */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:flex">
          <span className="scroll-indicator-mouse" />
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30">
            Explore
          </span>
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
          SEÇÃO: O QUE VOCÊ VAI APRENDER (4 TRILHAS)
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
                Quatro trilhas progressivas — do básico ao avançado — que
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

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
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
          </div>
        </div>
      </section>

      {/* ─── DIVIDER WAVE ─── */}
      <div className="divider-wave divider-wave-flip" />

      {/* ══════════════════════════════════════════════
          SEÇÃO: GAMIFICAÇÃO (VISUAL DE GAME) — MELHORADA
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
                  {/* Badges visual aprimorado */}
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
          SEÇÃO: MATRÍCULA
          ══════════════════════════════════════════════ */}
      <section
        id="matricular"
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
                  Invista no seu futuro profissional. Acesso imediato a todo o
                  conteúdo, atualizações constantes e certificado ao finalizar.
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
                    Faça sua matrícula
                  </h3>
                  <p className="mt-1 text-sm text-white/40">
                    Preencha os dados abaixo para começar
                  </p>
                </div>
                {/* Envolvemos o form para usar input-premium no MatriculaForm */}
                <MatriculaForm />
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
                href="#matricular"
                variante="primary"
                tamanho="xl"
                className="shadow-[0_8px_40px_rgba(214,110,15,0.45)] hover:shadow-[0_12px_60px_rgba(214,110,15,0.65)] hover:scale-[1.04] transition-all duration-300"
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
                  href="#matricular"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-forest-700 transition-all hover:bg-white/90 hover:scale-105"
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
