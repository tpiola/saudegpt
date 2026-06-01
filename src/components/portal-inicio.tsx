"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trilhas, totalAulas } from "@/content/curriculo";
import { usePerfilAluno, type PerfilAluno } from "@/lib/aluno";
import { lerStatusLocal, salvarStatusLocal } from "@/lib/cadastro-client";
import { PainelAluno } from "./painel-aluno";
import { ContinuarBotao } from "./continuar";
import { Botao, Card, Etiqueta, DividerGlow } from "./ui";
import { Icon, type IconName } from "./icons";
import { ProgressoTrilhaBadge } from "./progresso-cliente";

type StatusMatricula = "verificando" | "pendente" | "rejeitado" | "aprovado";

export function PortalInicio() {
  const { perfil, carregado: perfilOk } = usePerfilAluno();

  if (!perfilOk) {
    return <PortalConvidadoHero />;
  }

  if (!perfil?.email) {
    return <PortalConvidadoHero />;
  }

  return <PortalMatriculadoFluxo perfil={perfil} />;
}

function PortalConvidadoHero() {
  const totalAulasContagem = totalAulas();

  const modulosResumo = trilhas.flatMap((t) =>
    t.modulos.slice(0, 2).map((m) => ({
      trilhaId: t.id,
      trilhaNumero: t.numero,
      trilhaTitulo: t.titulo,
      moduloTitulo: m.titulo,
      moduloId: m.id,
      aulasCount: m.aulas.length,
    })),
  );

  return (
    <div>
      {/* ════════════════════════════════════════════
          HERO — limpo, direto, premium
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Fundo com gradiente sutil e grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-transparent to-transparent dark:from-brand-950/30" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl">
            {/* Indicador de credencial */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Criado por farmacêutico · CRF/SP 58.519
            </div>

            {/* Título */}
            <h1 className="text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-foreground">
              Formação para{" "}
              <span className="text-gradient">Atendentes Premium de Farmácia</span>
            </h1>

            {/* Descrição */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {totalAulasContagem} microlições em 4 trilhas — de perfumaria e medicamentos a
              operação de farmácia e desenvolvimento de carreira. Com vídeos, simuladores de
              balcão, quizzes e certificação interna.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Botao
                href="/matriculas"
                tamanho="xl"
                variante="premium"
                iconeFim="arrow"
                className="w-full sm:w-auto"
              >
                Quero me matricular
              </Botao>
              <ContinuarBotao />
            </div>

            {/* Números honestos */}
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted">
              <span className="flex items-center gap-2">
                <Icon name="book" size={16} className="text-brand-500" />
                <strong className="text-foreground">{totalAulasContagem}</strong> microlições
              </span>
              <span className="flex items-center gap-2">
                <Icon name="target" size={16} className="text-brand-500" />
                <strong className="text-foreground">4</strong> trilhas
              </span>
              <span className="flex items-center gap-2">
                <Icon name="award" size={16} className="text-brand-500" />
                <strong className="text-foreground">CRF/SP</strong> registro ativo
              </span>
              <span className="flex items-center gap-2">
                <Icon name="clock" size={16} className="text-brand-500" />
                <strong className="text-foreground">15+ anos</strong> em operação real
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          O QUE VOCÊ VAI ESTUDAR — módulos reais
          ════════════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
          <Icon name="book" size={14} /> Currículo
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          O que você vai estudar
        </h2>
        <p className="mt-2 max-w-xl text-muted">
          {totalAulasContagem} aulas distribuídas em 4 trilhas. Cada módulo tem videoaula,
          quiz de fixação e checklist prático.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {trilhas.map((t) => {
            const totalModAulas = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
            return (
              <Card key={t.id} variante="elevated" className="p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl gradient-brand text-white shadow-sm">
                    <Icon name={t.icone as IconName} size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-600">
                      Trilha {t.numero} · {t.subtitulo}
                    </div>
                    <h3 className="mt-0.5 text-lg font-bold">{t.titulo}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
                      {t.descricao}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-subtle">
                      <span>{t.modulos.length} módulos</span>
                      <span className="h-3 w-px bg-border" />
                      <span>{totalModAulas} aulas</span>
                      <span className="h-3 w-px bg-border" />
                      <span className="capitalize">{t.nivelFaixa}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/trilhas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            Ver currículo completo <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>

      <DividerGlow className="max-w-6xl mx-auto" />

      {/* ════════════════════════════════════════════
          COMO FUNCIONA — etapas reais
          ════════════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
          <Icon name="trending" size={14} /> Método
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Como funciona
        </h2>
        <p className="mt-2 max-w-xl text-muted">
          Matrícula gratuita. Estude no seu ritmo. Progresso salvo automaticamente.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
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
              texto: "Vídeos de 5 a 15 minutos com quiz e checklist. Complete no seu ritmo.",
              icone: "play" as IconName,
            },
            {
              passo: "03",
              titulo: "Acompanhe seu progresso",
              texto: "Dashboard com XP, nível, streak, notas e trilhas concluídas.",
              icone: "chart" as IconName,
            },
          ].map((p) => (
            <Card key={p.passo} className="p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/40">
                <Icon name={p.icone} size={20} />
              </span>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-mono text-xs font-bold tracking-wider text-brand-500">
                  {p.passo}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-2 font-bold">{p.titulo}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.texto}</p>
            </Card>
          ))}
        </div>
      </div>

      <DividerGlow className="max-w-6xl mx-auto" />

      {/* ════════════════════════════════════════════
          SOBRE O CRIADOR — credencial real
          ════════════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
          <Icon name="shield" size={14} /> Credencial
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Quem criou o curso
        </h2>
        <p className="mt-2 max-w-xl text-muted">
          Conteúdo produzido por farmacêutico com atuação real em drogarias e hospitais.
        </p>

        <Card className="mt-8 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl gradient-brand text-white text-xl font-bold shadow-md">
              TP
            </div>
            <div>
              <h3 className="text-xl font-bold">Thiago Biasoli Garcia Piola</h3>
              <p className="mt-1 text-sm font-semibold text-brand-600">
                Farmacêutico CRF/SP 58.519
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted max-w-2xl">
                Farmacêutico com mais de 15 anos de operação em drogarias, farmácia
                hospitalar e gestão. Pós-graduando em Engenharia de IA, Google GEAR.
                Founder da Rei das Vendas. Criou esta formação para resolver o que
                mais falta no balcão: atendimento qualificado com base técnica e
                humana.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Droga Raia", "Hospital Unimed", "CRF/SP Ativo", "Pós IA + Google GEAR"].map(
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

      <DividerGlow className="max-w-6xl mx-auto" />

      {/* ════════════════════════════════════════════
          CTA FINAL
          ════════════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <Card className="overflow-hidden border-2 border-brand-100 dark:border-brand-800">
          <div className="bg-gradient-to-br from-brand-50 via-white to-white p-8 text-center dark:from-brand-950 dark:via-brand-900 dark:to-brand-950 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Comece sua formação agora
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted">
              Matrícula gratuita. Conteúdo criado por farmacêutico. Acesso imediato
              após aprovação.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Botao
                href="/matriculas"
                tamanho="xl"
                variante="premium"
                iconeFim="arrow"
                className="w-full sm:w-auto"
              >
                Quero me matricular
              </Botao>
              <ContinuarBotao />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

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
