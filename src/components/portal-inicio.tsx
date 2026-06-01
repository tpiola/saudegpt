"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { trilhas, totalAulas } from "@/content/curriculo";
import { usePerfilAluno, type PerfilAluno } from "@/lib/aluno";
import { lerStatusLocal, salvarStatusLocal } from "@/lib/cadastro-client";
import { PainelAluno } from "./painel-aluno";
import { ContinuarBotao } from "./continuar";
import { Botao, Card, DividerGlow } from "./ui";
import { Icon, type IconName } from "./icons";

type StatusMatricula = "verificando" | "pendente" | "rejeitado" | "aprovado";

export function PortalInicio() {
  const { perfil, carregado: perfilOk } = usePerfilAluno();

  if (!perfilOk) return <PortalConvidadoHero />;
  if (!perfil?.email) return <PortalConvidadoHero />;

  return <PortalMatriculadoFluxo perfil={perfil} />;
}

/* ═══════════════════════════════════════════════
   HERO — Visitante (não logado)
   ═══════════════════════════════════════════════ */
function PortalConvidadoHero() {
  const totalAulasContagem = totalAulas();

  const modulosVendas = trilhas
    .find((t) => t.id === "vendas")
    ?.modulos.slice(0, 3)
    .map((m) => ({
      id: m.id,
      titulo: m.titulo,
      descricao: m.descricao,
      aulasCount: m.aulas.length,
    })) ?? [];

  return (
    <div>
      {/* ════════════════════════════════════════════
          HERO — Imagem + Gradiente + Conteúdo
          ════════════════════════════════════════════ */}
      <section className="hero-image-gradient relative overflow-hidden">
        {/* Imagem de fundo */}
        <Image
          src="/sales-consulting.jpg"
          alt="Atendimento consultivo no balcão da farmácia"
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />

        {/* Grid sutil por cima */}
        <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-30" />

        {/* Orbs ambientes */}
        <div className="pointer-events-none absolute -left-32 -top-32 z-0 h-96 w-96 orb bg-brand-500/20" />
        <div className="pointer-events-none absolute -bottom-40 -right-32 z-0 h-80 w-80 orb bg-accent-cyan/15" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl">
            {/* Credencial badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              Criado por farmacêutico · CRF/SP 58.519
            </div>

            {/* Título principal */}
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
              <span className="text-gradient-premium">
                Venda mais no balcão
              </span>
              <br />
              <span className="text-white">
                sem perder a ética
              </span>
            </h1>

            {/* Descrição */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {totalAulasContagem} microlições em 4 trilhas — de perfumaria e medicamentos a{" "}
              <strong className="text-white/90">vendas consultivas, persuasão ética e fidelização</strong>.
              O curso que ensina o atendente a oferecer com confiança e atender como referência.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Botao
                href="/matriculas"
                tamanho="xl"
                variante="premium"
                iconeFim="arrow"
                className="w-full sm:w-auto shadow-glow"
              >
                Quero me matricular
              </Botao>
              <ContinuarBotao />
            </div>

            {/* Stats honestas */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Icon name="book" size={16} className="text-accent-cyan" />
                <strong className="text-white">{totalAulasContagem}</strong> microlições
              </span>
              <span className="flex items-center gap-2">
                <Icon name="target" size={16} className="text-accent-cyan" />
                <strong className="text-white">4</strong> trilhas
              </span>
              <span className="flex items-center gap-2">
                <Icon name="trending" size={16} className="text-accent-cyan" />
                <strong className="text-white">18</strong> aulas de vendas
              </span>
              <span className="flex items-center gap-2">
                <Icon name="award" size={16} className="text-accent-cyan" />
                <strong className="text-white">CRF/SP</strong> registro ativo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          O QUE VOCÊ VAI APRENDER — foco em vendas
          ════════════════════════════════════════════ */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
              <Icon name="sparkles" size={14} />
              Habilidades que você vai dominar
            </div>
            <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
              Do{" "}
              <span className="text-gradient">acolhimento ao fechamento</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted">
              Não é só farmácia. É como atender, oferecer, persuadir e fidelizar. 
              Habilidades que transformam um atendente em referência no balcão.
            </p>
          </div>

          {/* Grid de 4 cards: as 4 habilidades centrais */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icone: "sparkles" as IconName,
                titulo: "Oferecer com confiança",
                descricao: "Cross-sell, up-sell e fechamento. Como oferecer sem ser invasivo — e o cliente agradecer.",
                cor: "from-emerald-400 to-emerald-600",
              },
              {
                icone: "trending" as IconName,
                titulo: "Persuadir com ética",
                descricao: "Gatilhos mentais reais, objeções de preço e reposicionamento de valor sem apelar.",
                cor: "from-brand-400 to-accent-cyan",
              },
              {
                icone: "heart" as IconName,
                titulo: "Comunicar que vende",
                descricao: "Rapport, escuta ativa, perguntas poderosas e linguagem positiva no balcão.",
                cor: "from-violet-400 to-fuchsia-500",
              },
              {
                icone: "shield" as IconName,
                titulo: "Fidelizar clientes",
                descricao: "Pós-venda, cliente recorrente, como ser o atendente que o cliente pede pelo nome.",
                cor: "from-amber-400 to-rose-500",
              },
            ].map((item) => (
              <Card key={item.titulo} variante="elevated" className="group p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.cor} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <Icon name={item.icone} size={24} />
                </span>
                <h3 className="text-base font-bold">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TRILHA DE VENDAS — Preview do currículo
          ════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-surface/50 to-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
              <Icon name="book" size={14} />
              Currículo de vendas
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold tracking-tight">
              O que você vai estudar em{" "}
              <span className="text-gradient">Vendas Consultivas</span>
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-muted">
              {modulosVendas.length} módulos com {modulosVendas.reduce((s, m) => s + m.aulasCount, 0)} aulas práticas — 
              situações reais de balcão com o que falar e o que evitar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {modulosVendas.map((mod, idx) => (
              <Card key={mod.id} className="group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Faixa decorativa no topo */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b ${
                    idx === 0 ? "from-emerald-400 to-emerald-600" :
                    idx === 1 ? "from-brand-400 to-accent-cyan" :
                    "from-amber-400 to-rose-500"
                  } opacity-60 group-hover:opacity-100 transition-opacity`}
                />
                <div className="pl-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-500">
                    Módulo {idx + 1}
                  </span>
                  <h3 className="mt-1.5 text-lg font-bold leading-snug">{mod.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">{mod.descricao}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-subtle">
                    <span className="inline-flex items-center gap-1">
                      <Icon name="play" size={12} />
                      {mod.aulasCount} {mod.aulasCount === 1 ? "aula" : "aulas"}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/trilhas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Ver todas as trilhas <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <DividerGlow className="mx-auto max-w-6xl" />

      {/* ════════════════════════════════════════════
          PARA QUEM É
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
              <Icon name="target" size={14} />
              Público
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold tracking-tight">
              Para quem é essa{" "}
              <span className="text-gradient">formação</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icone: "user" as IconName,
                titulo: "Atendentes de farmácia",
                desc: "Que querem vender mais sem perder a ética e o respeito pelo cliente.",
              },
              {
                icone: "trending" as IconName,
                titulo: "Balconistas em início",
                desc: "Que precisam aprender na prática como oferecer, persuadir e fechar.",
              },
              {
                icone: "star" as IconName,
                titulo: "Atendentes experientes",
                desc: "Que já dominam a técnica mas querem virar referência na loja.",
              },
              {
                icone: "graduation" as IconName,
                titulo: "Quem quer cursar Farmácia",
                desc: "E precisa de base sólida em atendimento e comunicação com o paciente.",
              },
            ].map((item) => (
              <Card key={item.titulo} className="p-5 text-center transition-all duration-200 hover:shadow-lg">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/40">
                  <Icon name={item.icone} size={20} />
                </span>
                <h3 className="text-sm font-bold">{item.titulo}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          COMO FUNCIONA
          ════════════════════════════════════════════ */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
              <Icon name="trending" size={14} />
              Método
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold tracking-tight">
              Como funciona
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-muted">
              Matrícula gratuita. Estude no seu ritmo. Progresso salvo automaticamente.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                passo: "01",
                titulo: "Matricule-se",
                texto: "Preencha seus dados. O acesso é liberado após aprovação da coordenação.",
                icone: "user" as IconName,
              },
              {
                passo: "02",
                titulo: "Estude em microlições",
                texto: "Vídeos de 5 a 15 minutos com situações reais de balcão, o que falar e o que evitar.",
                icone: "play" as IconName,
              },
              {
                passo: "03",
                titulo: "Pratique no simulador",
                texto: "Missões com falas reais de clientes. Você escolhe a abordagem e recebe feedback.",
                icone: "target" as IconName,
              },
            ].map((p) => (
              <Card key={p.passo} className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600 dark:from-brand-900/50 dark:to-brand-800/30 transition-transform duration-300 group-hover:scale-105">
                  <Icon name={p.icone} size={22} />
                </span>
                <div className="mt-5 flex items-center gap-2">
                  <span className="font-mono text-xs font-bold tracking-wider text-brand-500">
                    {p.passo}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>
                <h3 className="mt-2.5 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.texto}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          EXEMPLO REAL — Simulação de balcão
          ════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-surface/30 to-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
              <Icon name="sparkles" size={14} />
              Na prática
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold tracking-tight">
              Exemplo real de aula
            </h2>
            <p className="mt-3 text-muted">
              Cada aula de vendas tem uma simulação com o que falar e o que evitar no balcão.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* O que falar */}
            <Card className="overflow-hidden border-emerald-200/50 dark:border-emerald-800/30">
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 px-5 py-3 dark:from-emerald-950/40 dark:to-emerald-900/20">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    Abordagem consultiva
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 text-xs font-semibold text-subtle uppercase tracking-wider">
                  Cliente: &ldquo;Só vou levar esse xarope mesmo.&rdquo;
                </div>
                <p className="text-sm leading-relaxed text-foreground italic">
                  &ldquo;Claro. Só lembrando que o xarope funciona melhor se você beber bastante água. 
                  Já que está aqui, esse soro fisiológico para lavagem nasal ajuda a descongestionar 
                  mais rápido. Quer levar um?&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                  <Icon name="trending" size={12} />
                  <span>Oferecimento contextualizado com &ldquo;porque&rdquo;</span>
                </div>
              </div>
            </Card>

            {/* O que evitar */}
            <Card className="overflow-hidden border-rose-200/50 dark:border-rose-800/30">
              <div className="bg-gradient-to-r from-rose-50 to-rose-100/50 px-5 py-3 dark:from-rose-950/40 dark:to-rose-900/20">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-white">
                    <Icon name="close" size={14} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                    O que evitar
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 text-xs font-semibold text-subtle uppercase tracking-wider">
                  Cliente: &ldquo;Só vou levar esse xarope mesmo.&rdquo;
                </div>
                <p className="text-sm leading-relaxed text-muted italic line-through">
                  &ldquo;Não quer levar um antitérmico também? Tá em promoção.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-rose-500">
                  <Icon name="close" size={12} />
                  <span>Oferecimento sem contexto — empurroterapia</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Botao href="/trilhas" variante="ghost" iconeFim="arrow">
              Ver mais exemplos nas trilhas
            </Botao>
          </div>
        </div>
      </section>

      <DividerGlow className="mx-auto max-w-6xl" />

      {/* ════════════════════════════════════════════
          SOBRE O CRIADOR
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/5 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
              <Icon name="shield" size={14} />
              Credencial
            </div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold tracking-tight">
              Quem criou o curso
            </h2>
            <p className="mt-3 text-muted">
              Conteúdo produzido por farmacêutico com atuação real em drogarias, hospitais e gestão.
            </p>
          </div>

          <Card className="relative mt-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-accent-cyan/5 pointer-events-none" />
            <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
              <div className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl gradient-brand text-white text-2xl font-bold shadow-xl shadow-brand-500/25">
                TP
              </div>
              <div>
                <h3 className="text-xl font-bold">Thiago Biasoli Garcia Piola</h3>
                <p className="mt-1 text-sm font-semibold text-brand-600">
                  Farmacêutico CRF/SP 58.519
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted max-w-2xl">
                  Farmacêutico com mais de 15 anos de operação em drogarias, farmácia hospitalar e gestão. 
                  Pós-graduando em Engenharia de IA, Google GEAR. Founder da Rei das Vendas. 
                  Criou esta formação para resolver o que mais falta no balcão: atendimento qualificado 
                  com base técnica, humana — e agora, com habilidade de vendas consultivas.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Droga Raia", "Hospital Unimed", "CRF/SP Ativo", "Pós IA + Google GEAR", "Rei das Vendas"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-2 px-3 py-1 text-[11px] font-semibold text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA FINAL — IMPACTANTE
          ════════════════════════════════════════════ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-brand-950/5 to-surface" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-28">
          <Card className="relative overflow-hidden border-2 border-brand-200/50 dark:border-brand-800/40">
            {/* Fundo decorativo */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50/50 dark:from-brand-950 dark:via-brand-900/50 dark:to-brand-950" />
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full orb bg-brand-400/10 dark:bg-brand-300/5" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full orb bg-accent-cyan/10" />

            <div className="relative px-8 py-12 text-center sm:px-12 sm:py-16">
              <div className="mx-auto max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                  <Icon name="sparkles" size={14} />
                  Matrícula gratuita
                </div>
                <h2 className="text-[clamp(1.6rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">
                  Comece sua formação em{" "}
                  <span className="text-gradient">vendas consultivas</span> agora
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-muted">
                  {totalAulasContagem} aulas. 4 trilhas. Simulador de balcão com feedback. Criado por farmacêutico com 15+ anos de balcão.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Botao
                    href="/matriculas"
                    tamanho="xl"
                    variante="premium"
                    iconeFim="arrow"
                    className="w-full sm:w-auto shadow-glow-strong"
                  >
                    Quero me matricular
                  </Botao>
                  <ContinuarBotao />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   FLUXO — Aluno matriculado
   ═══════════════════════════════════════════════ */
function PortalMatriculadoFluxo({ perfil }: { perfil: PerfilAluno }) {
  const router = useRouter();
  const [status, setStatus] = useState<StatusMatricula>(() => {
    if (typeof window === "undefined") return "verificando";
    const local = lerStatusLocal();
    if (local === "aprovado") return "aprovado";
    if (local === "rejeitado") return "rejeitado";
    if (local === "pendente") return "pendente";
    return "verificando";
  });

  useEffect(() => {
    if (status === "aprovado" || status === "rejeitado") return;
    if (status === "pendente") {
      router.replace("/aguardando-aprovacao");
      return;
    }

    fetch(`/api/cadastros/status?email=${encodeURIComponent(perfil.email)}`)
      .then((r) => r.json())
      .then((j: { status?: string }) => {
        if (j.status === "aprovado") {
          salvarStatusLocal("aprovado");
          setStatus("aprovado");
        } else if (j.status === "rejeitado") setStatus("rejeitado");
        else if (j.status === "pendente") router.replace("/aguardando-aprovacao");
        else router.replace("/matriculas");
      })
      .catch(() => router.replace("/matriculas"));
  }, [perfil.email, router, status]);

  if (status === "verificando") {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="h-48 animate-pulse rounded-2xl bg-surface-2" />
      </div>
    );
  }

  if (status === "rejeitado") {
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <Card className="text-center">
          <Icon name="shield" size={40} className="mx-auto text-rose-500" />
          <h2 className="mt-4 text-xl font-bold">Matrícula não aprovada</h2>
          <p className="mt-2 text-sm text-muted">
            Entre em contato com a coordenação do curso para mais informações.
          </p>
        </Card>
      </div>
    );
  }

  return <PainelAluno />;
}
