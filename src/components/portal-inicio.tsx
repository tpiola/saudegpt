"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trilhas, totalAulas } from "@/content/curriculo";
import { usePerfilAluno, type PerfilAluno } from "@/lib/aluno";
import { lerStatusLocal, salvarStatusLocal } from "@/lib/cadastro-client";
import { PainelAluno } from "./painel-aluno";
import { ContinuarBotao } from "./continuar";
import { Botao, Card, Etiqueta, TituloSecao } from "./ui";
import { Icon, type IconName } from "./icons";
import { ProgressoTrilhaBadge } from "./progresso-cliente";

type StatusMatricula = "verificando" | "pendente" | "rejeitado" | "aprovado";

export function PortalInicio() {
  const { perfil, carregado: perfilOk } = usePerfilAluno();

  // Enquanto não carregou, mostra hero + conteúdo para convidado (sem skeleton)
  if (!perfilOk) {
    return <PortalConvidadoHero />;
  }

  if (!perfil?.email) {
    return <PortalConvidadoHero />;
  }

  return <PortalMatriculadoFluxo perfil={perfil} />;
}

/** Hero + conteúdo para visitantes — mostra IMEDIATAMENTE, sem skeleton */
function PortalConvidadoHero() {
  return (
    <div>
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 dark:from-black dark:via-brand-950 dark:to-black">
        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-400/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-300">
                Formação completa · 57 microlições
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              <span className="block">A formação mais completa</span>
              <span className="block bg-gradient-to-r from-brand-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                para atendentes de farmácia
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-200/80 sm:text-lg">
              Do iniciante ao avançado — trilhas, simuladores de balcão, biblioteca
              regulatória e indicadores. Crieiro pelo Farmacêutico Thiago Piola, CRF/SP 58.519.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Botao
                href="/matriculas"
                tamanho="lg"
                iconeFim="arrow"
                className="w-full sm:w-auto"
              >
                Quero me matricular
              </Botao>
              <ContinuarBotao />
            </div>

            {/* Trust stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-400/10 pt-10">
              {[
                { value: `${totalAulas()}+`, label: "Microlições" },
                { value: "4", label: "Trilhas completas" },
                { value: "CRF/SP", label: "Criado por farmacêutico" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold text-white sm:text-2xl">{s.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CURSO EM DESTAQUE ═══ */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <Card className="overflow-hidden border-brand-200 dark:border-brand-800">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Etiqueta tom="brand">
                <Icon name="graduation" size={14} /> Plataforma EAD · Farmácia
              </Etiqueta>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Ambiente de estudos — Atendentes Premium
              </h2>
              <p className="mt-2 max-w-xl text-muted">
                {totalAulas()}+ microlições, simuladores de balcão, biblioteca regulatória e
                acompanhamento de progresso. Faça sua matrícula para salvar XP, notas e certificados
                internos.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <Botao href="/matriculas" tamanho="lg" iconeFim="arrow">
                Fazer matrícula
              </Botao>
              <ContinuarBotao />
            </div>
          </div>
        </Card>

        {/* ═══ TRILHAS ═══ */}
        <div className="mt-10">
          <TituloSecao
            sobre="Catálogo"
            icone="book"
            titulo="Trilhas do curso"
            descricao="Explore o currículo. Após a matrícula aprovada, seu progresso é salvo em cada aula."
          />
          <div className="mt-6 space-y-4">
            {trilhas.map((t) => (
              <Card key={t.id} className="overflow-hidden">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl gradient-brand text-white">
                      <Icon name={t.icone as IconName} size={22} />
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-brand-600">
                        Trilha {t.numero} · {t.subtitulo}
                      </span>
                      <h3 className="text-lg font-bold">{t.titulo}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted">{t.descricao}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ProgressoTrilhaBadge trilhaId={t.id} />
                    <Link
                      href={`/trilhas/${t.id}`}
                      className="inline-flex items-center gap-1 rounded-xl border border-border-strong px-4 py-2 text-sm font-semibold text-brand-600 hover:border-brand-400"
                    >
                      Estudar <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ═══ FEATURES ═══ */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              icone: "play" as IconName,
              titulo: "Aulas interativas",
              texto: "Vídeo, quiz e checklist em cada microlição.",
            },
            {
              icone: "target" as IconName,
              titulo: "Simuladores",
              texto: "Missões, jogos e OSCE de atendimento.",
            },
            {
              icone: "chart" as IconName,
              titulo: "Indicadores",
              texto: "Leitura de KPIs com foco em saúde.",
            },
          ].map((f) => (
            <Card key={f.titulo} className="p-5">
              <Icon name={f.icone} size={22} className="text-brand-600" />
              <h3 className="mt-3 font-bold">{f.titulo}</h3>
              <p className="mt-1 text-sm text-muted">{f.texto}</p>
            </Card>
          ))}
        </div>

        {/* ═══ CTA FINAL ═══ */}
        <div className="mt-12 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-white p-8 text-center dark:border-brand-800 dark:from-brand-950 dark:via-brand-900 dark:to-brand-950">
          <h2 className="text-2xl font-bold tracking-tight">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-muted">
            Matricule-se agora e comece sua jornada de aprendizado com conteúdo criado por
            um farmacêutico com 15+ anos de operação real.
          </p>
          <Botao href="/matriculas" tamanho="lg" iconeFim="arrow" className="mt-6">
            Quero me matricular
          </Botao>
        </div>
      </div>
    </div>
  );
}

/** Fluxo para usuário já logado */
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
