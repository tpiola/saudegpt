"use client";

import { HeroVideo } from "@/components/hero-video";
import { FadeUp } from "@/components/fade-up";
import { ScrollReveal, ContadorAnimado } from "@/components/animacoes";
import { MatriculaForm } from "@/components/matricula-form";
import { trilhas, totalAulas } from "@/content/curriculo";
import { Botao, Card } from "@/components/ui";
import type { Trilha } from "@/content/types";
import Image from "next/image";
import Link from "next/link";

/* ─── Tipografia inline ─── */
const h1 = "font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.0] tracking-[-0.04em]";
const h2 = "font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em]";
const h3 = "font-display text-[1.1rem] font-semibold tracking-[-0.01em]";

/* ─── Imagens de farmácia (relevantes ao conteúdo) ─── */
const IMG = {
  hero: "/hero/farmacia-atendimento.jpg",
  balcao: "/hero/equipe-farmacia.jpg",
  medicamentos: "/pharmacy/photo-1578496781985-452d4a934d50.jpg",
  perfumaria: "/pharmacy/photo-1596462502278-27bfdc403348.jpg",
  atendimento: "/hero/atendimento-humanizado.jpg",
  cuidado: "/hero/saude-cuidado.jpg",
  pressao: "/pharmacy/photo-1584982751601-97dcc096659c.jpg",
  diabetes: "/pharmacy/photo-1579154204601-01588f351e67.jpg",
  saude: "/hero/saude-bem-estar.jpg",
  farmacia: "/hero/farmacia-atendimento.jpg",
};

/* ─── Trilha icons ─── */
const ICONE_TRILHA: Record<string, string> = {
  perfumaria: "🧴", medicamentos: "💊", operacional: "📋", encantamento: "🤝",
};

export default function HomePage() {
  const total = totalAulas();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* ═══ HERO — COMPACT 60vh ═══ */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#020617]">
        <HeroVideo />
        <div className="pointer-events-none absolute inset-0 z-30 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-green-400/8 via-transparent to-transparent" />

        <div className="relative z-40 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-green-300 backdrop-blur-md shadow-[0_0_24px_rgba(76,161,93,0.12)]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(76,161,93,0.7)]" />
              Formação completa para Atendentes
            </div>
            <h1 className={`${h1} text-white`}>
              Atendentes de{" "}
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-200 bg-clip-text text-transparent">Farmácia</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
              A formação que transforma atendentes em profissionais de cuidado — com técnica, acolhimento e excelência.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#feed" className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_40px_rgba(76,161,93,0.35)] transition-all duration-300 hover:bg-green-600 hover:scale-[1.03] active:scale-[0.97]">
                Explorar conteúdo
              </a>
              <a href="#ser-aluno" className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-[0.97]">
                Ser Aluno
              </a>
            </div>
            {/* Stats compact */}
            <div className="mt-8 flex gap-6 sm:gap-10">
              {[
                { v: 6, suffix: "", label: "trilhas" },
                { v: total, suffix: "+", label: "aulas" },
                { v: "∞", label: "grátis" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-green-400 tabular-nums">
                    {typeof s.v === "number" ? <ContadorAnimado valor={s.v} sufixo={s.suffix} duracao={1500} /> : s.v}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEED — SOCIAL MEDIA STYLE ═══ */}
      <div id="feed" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        {/* ─── Stories (pill navigation) ─── */}
        <FadeUp>
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              <span className="h-3 w-3 rounded-full bg-green-400" />
              Trilhas
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
              {trilhas.slice(0, 6).map((t) => (
                <Link key={t.id} href={`/trilhas/${t.id}`}
                  className="group snap-start flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-border/60 bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:shadow-md hover:shadow-green-500/10 w-[120px]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-400/10 text-2xl ring-2 ring-green-400/20 group-hover:ring-green-400/40">
                    {ICONE_TRILHA[t.id] ?? "📚"}
                  </span>
                  <span className="text-[11px] font-semibold text-center leading-tight text-foreground/80">{t.titulo.split(" ")[0]}</span>
                </Link>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ─── Feed — cards like social media posts ─── */}
        <div className="space-y-8">

          {/* POST 1: Simulação de Balcão */}
          <FadeUp>
            <div className="rounded-3xl border border-border/60 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 sm:h-56 overflow-hidden bg-forest-900">
                <Image src={IMG.balcao} alt="" fill className="object-cover opacity-60" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="rounded-full bg-green-500/20 border border-green-400/30 px-3 py-1 text-[11px] font-semibold text-green-300">🧑‍⚕️ Atendimento real</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2 text-xs text-muted">
                  <span className="font-semibold text-foreground">Simulação de Balcão</span>
                  <span>·</span>
                  <span>2 min de leitura</span>
                </div>
                <h3 className={h3}>Antes e depois do atendimento</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
                  Veja como uma abordagem consultiva transforma a experiência do paciente na farmácia.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-emerald-200/50 bg-emerald-50/50 dark:bg-emerald-950/20 p-4">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-2">✅ Abordagem consultiva</div>
                    <p className="text-xs leading-relaxed text-foreground/80">
                      <span className="font-medium">Cliente:</span> "Bom dia! Estou com uma dor de cabeça forte..."<br />
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">Atendente:</span> "Antes de indicar, você tem alergia a algum medicamento?"
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                      <span>👍</span> Paciente acolhida e segura
                    </div>
                  </div>
                  <div className="rounded-xl border border-rose-200/50 bg-rose-50/50 dark:bg-rose-950/20 p-4">
                    <div className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400 text-xs font-semibold mb-2">❌ O que evitar</div>
                    <p className="text-xs leading-relaxed text-foreground/80">
                      <span className="font-medium">Atendente:</span> "Toma dipirona? É o mais forte que tem."
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-rose-500">
                      <span>👎</span> Cliente sai insatisfeita
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* POST 2: Grade Curricular como feed */}
          <FadeUp delay={100}>
            <div className="rounded-3xl border border-border/60 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 sm:h-56 overflow-hidden bg-forest-900">
                <Image src={IMG.medicamentos} alt="" fill className="object-cover opacity-60" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="rounded-full bg-orange-500/20 border border-orange-400/30 px-3 py-1 text-[11px] font-semibold text-orange-300">📚 Grade curricular</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className={h3}>O que você vai aprender</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">
                  6 trilhas do básico ao avançado — {total}+ aulas para dominar o balcão.
                </p>
                <div className="mt-4 space-y-2">
                  {trilhas.map((t: Trilha, i: number) => (
                    <Link key={t.id} href={`/trilhas/${t.id}`}
                      className="flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-muted/30 group">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/10 text-lg ring-1 ring-green-400/15">
                        {ICONE_TRILHA[t.id] ?? "📚"}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-foreground/80">{t.titulo}</span>
                          <span className="text-[10px] text-muted bg-muted/30 px-1.5 py-0.5 rounded-full">{t.modulos.reduce((s, m) => s + m.aulas.length, 0)} aulas</span>
                        </div>
                        <p className="text-xs text-muted truncate mt-0.5">{t.descricao}</p>
                      </div>
                      <span className="text-muted group-hover:translate-x-1 transition-transform text-sm">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* POST 3: Gamificação — progresso e streak */}
          <FadeUp delay={200}>
            <div className="rounded-3xl border border-border/60 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-forest-600 via-forest-500 to-forest-700">
                <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="rounded-full bg-green-500/20 border border-green-400/30 px-3 py-1 text-[11px] font-semibold text-green-300">🎮 Gamificação</span>
                    <div className="mt-2 flex items-center gap-3 text-white">
                      <span className="text-2xl">🔥</span>
                      <div>
                        <div className="text-lg font-bold leading-none">3 dias</div>
                        <div className="text-[10px] text-white/60">de streak</div>
                      </div>
                      <div className="w-px h-8 bg-white/20" />
                      <div>
                        <div className="text-lg font-bold leading-none">620</div>
                        <div className="text-[10px] text-white/60">XP acumulados</div>
                      </div>
                    </div>
                  </div>
                  <Link href="/ranking" className="text-xs text-white/70 hover:text-white transition-colors">
                    Ver ranking →
                  </Link>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="grid grid-cols-3 gap-3">
                  <Link href="/missoes" className="flex flex-col items-center gap-2 rounded-xl bg-muted/30 p-4 transition-all hover:bg-muted/50 hover:-translate-y-0.5">
                    <span className="text-2xl">🎯</span>
                    <span className="text-[11px] font-medium text-center text-foreground/80">Quizzes</span>
                    <span className="text-[10px] text-muted">+10 XP</span>
                  </Link>
                  <Link href="/missoes" className="flex flex-col items-center gap-2 rounded-xl bg-muted/30 p-4 transition-all hover:bg-muted/50 hover:-translate-y-0.5">
                    <span className="text-2xl">🏅</span>
                    <span className="text-[11px] font-medium text-center text-foreground/80">Badges</span>
                    <span className="text-[10px] text-muted">8 disponíveis</span>
                  </Link>
                  <Link href="/ranking" className="flex flex-col items-center gap-2 rounded-xl bg-muted/30 p-4 transition-all hover:bg-muted/50 hover:-translate-y-0.5">
                    <span className="text-2xl">🏆</span>
                    <span className="text-[11px] font-medium text-center text-foreground/80">Ranking</span>
                    <span className="text-[10px] text-muted">Top 3</span>
                  </Link>
                </div>
                {/* XP Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted mb-1">
                    <span>Progresso</span>
                    <span>Lv. 3 · 620 / 1000 XP</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted/40 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400 transition-all" style={{ width: "62%" }} />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* POST 4: Conteúdos gratuitos — 3 cards compact */}
          <FadeUp delay={300}>
            <div className="rounded-3xl border border-border/60 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={h3}>Conteúdos gratuitos</h3>
                  <Link href="/curiosidades" className="text-xs font-medium text-green-600 dark:text-green-400 hover:underline">Ver todos →</Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { href: "/pressao-arterial", icon: "🩺", title: "Pressão Arterial", img: IMG.pressao },
                    { href: "/diabetes", icon: "🩸", title: "Diabetes", img: IMG.diabetes },
                    { href: "/hormonios", icon: "🧬", title: "Hormônios", img: "/pharmacy/photo-1559757175-5700dde675bc.jpg" },
                  ].map((item) => (
                    <Link key={item.title} href={item.href}
                      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20 transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="relative h-28 overflow-hidden">
                        <Image src={item.img} alt="" fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="absolute bottom-2 left-3 text-white text-lg">{item.icon}</span>
                      </div>
                      <div className="p-3">
                        <span className="text-sm font-semibold">{item.title}</span>
                        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted">
                          <span>Gratuito</span>
                          <span>·</span>
                          <span className="text-green-600 dark:text-green-400">Ler artigo →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* ═══ CTA — SER ALUNO ═══ */}
      <section id="ser-aluno" className="relative overflow-hidden bg-gradient-to-br from-forest-600 via-forest-500 to-forest-700 py-16">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeUp>
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm">
                  Matrícula
                </span>
                <h2 className={`${h2} text-white`}>Comece agora</h2>
                <p className="mt-3 max-w-md text-white/50 leading-relaxed text-sm">
                  Acesso imediato a todo o conteúdo, atualizações e certificado. Tudo gratuito.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    { icon: "🎓", text: "Acesso completo — 6 trilhas, 81+ aulas" },
                    { icon: "🏆", text: "Gamificação — XP, ranking, badges, missões" },
                    { icon: "📜", text: "Certificado ao finalizar a formação" },
                  ].map((b) => (
                    <div key={b.text} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-base ring-1 ring-white/10">{b.icon}</span>
                      <span className="text-sm text-white/70">{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <h3 className="font-display text-lg font-semibold text-white text-center mb-1">Torne-se Aluno</h3>
                <p className="text-xs text-white/40 text-center mb-5">Preencha e comece a estudar</p>
                <MatriculaForm />
                <p className="mt-3 text-center text-[11px] text-white/40">*Solicitação confirmada por e-mail em até 24h</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER COMPACT ═══ */}
      <footer className="border-t border-forest-600/20 bg-forest-500 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-forest-500 text-white shadow-md ring-1 ring-white/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-4 9 4-9 4-9-4Z" /><path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" />
                </svg>
              </span>
              <span className="text-xs font-bold text-white/80">Atendentes de Farmácia</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/50">
              <Link href="/trilhas" className="hover:text-white transition-colors">Trilhas</Link>
              <Link href="/ranking" className="hover:text-white transition-colors">Ranking</Link>
              <Link href="/curiosidades" className="hover:text-white transition-colors">Artigos</Link>
              <Link href="#ser-aluno" className="hover:text-white transition-colors">Matrícula</Link>
            </div>
          </div>
          <div className="mt-6 border-t border-white/10 pt-4 text-center text-[11px] text-white/40">
            Formação para Atendentes Premium de Farmácia · Criado e revisado pelo Farmacêutico Thiago B. G. Piola, CRF/SP 58.519
          </div>
        </div>
      </footer>
    </div>
  );
}
