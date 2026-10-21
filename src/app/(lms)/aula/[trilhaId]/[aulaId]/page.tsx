import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAula, listarAulas, proximaAula } from "@/content/curriculo";
import { Etiqueta, NivelBadge } from "@/components/ui";
import { Icon } from "@/components/icons";
import { AulaInterativa } from "@/components/aula-interativa";
import { ApoioTratamento } from "@/components/apoio-tratamento";
import { fontesPratica } from "@/content/pratica-balcao";

import { AnimarEntrada } from "@/components/animar-entrada";

import {
  InfograficoResumo,
  InfograficoComparativo,
  InfograficoSimulacao,
  InfograficoChecklist,
  InfograficoChamarFarmaceutico,
  InfograficoErros,
  InfograficoDica4Ps,
  InfograficoMensagemFarmaceutico,
} from "@/components/aula-infograficos";

export function generateStaticParams() {
  return listarAulas().map((i) => ({
    trilhaId: i.trilha.id,
    aulaId: i.aula.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trilhaId: string; aulaId: string }>;
}): Promise<Metadata> {
  const { trilhaId, aulaId } = await params;
  const loc = getAula(trilhaId, aulaId);
  if (!loc) return { title: "Aula" };
  return { title: loc.aula.titulo, description: loc.aula.resumo };
}

export default async function AulaPage({
  params,
}: {
  params: Promise<{ trilhaId: string; aulaId: string }>;
}) {
  const { trilhaId, aulaId } = await params;
  const loc = getAula(trilhaId, aulaId);
  if (!loc) notFound();
  const { aula, modulo, trilha } = loc;
  const prox = proximaAula(trilhaId, aulaId);
  const heroSrc = `/ilustracoes/${trilha.id}-${aula.id}.svg`;

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      {/* ── Trilha de migalhas ── */}
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-subtle">
        <Link href="/trilhas" className="hover:text-gold-600 transition-colors">
          Trilhas
        </Link>
        <Icon name="arrow" size={14} />
        <Link
          href={`/trilhas/${trilha.id}`}
          className="hover:text-gold-600 transition-colors truncate max-w-[160px] sm:max-w-[240px]"
        >
          {trilha.titulo}
        </Link>
        <Icon name="arrow" size={14} />
        <Link
          href={`/trilhas/${trilha.id}/${modulo.id}`}
          className="text-muted hover:text-gold-600 transition-colors truncate max-w-[120px] sm:max-w-[200px]"
        >
          {modulo.titulo}
        </Link>
      </nav>

      {/* ── Badges (nível, duração, XP) ── */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <NivelBadge nivel={aula.nivel} />
        <Etiqueta tom="neutral">
          <Icon name="clock" size={12} /> {aula.duracaoMin} min
        </Etiqueta>
        <Etiqueta tom="green">
          <Icon name="sparkles" size={12} /> +{aula.xp} XP
        </Etiqueta>
      </div>

      {/* ── Título + Resumo ── */}
      <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl leading-tight">
        {aula.titulo}
      </h1>
      <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg">
        {aula.resumo}
      </p>

      {/* ── Imagem Hero ── */}
      <AnimarEntrada>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-card">
          <Image
            src={heroSrc}
            alt={`Referência visual: ${aula.titulo}`}
            width={1280}
            height={640}
            className="h-auto w-full"
            unoptimized
            priority
          />
        </div>
      </AnimarEntrada>

      {/* ── Dica 4 Ps ── */}
      <div className="mt-6">
        <InfograficoDica4Ps semente={aula.id} />
      </div>

      <ApoioTratamento />

      {/* ── Blocos de Conteúdo ── */}
      <div className="mt-8 space-y-6">
        {/* Resumo Executivo */}
        {aula.resumoExecutivo.length > 0 && (
          <InfograficoResumo itens={aula.resumoExecutivo} />
        )}

        {/* Comparativo */}
        {aula.comparativo && (
          <InfograficoComparativo
            titulo={aula.comparativo.titulo}
            itens={aula.comparativo.itens}
          />
        )}

        {/* Simulação */}
        {aula.simulacao && (
          <InfograficoSimulacao
            cliente={aula.simulacao.cliente}
            falaBoa={aula.simulacao.falaBoa}
            falaEvitar={aula.simulacao.falaEvitar}
          />
        )}

        {/* Checklist */}
        {aula.checklist.length > 0 && (
          <InfograficoChecklist itens={aula.checklist} />
        )}

        {/* Grid: Chamar farmacêutico + Erros */}
        <div className="grid gap-6 sm:grid-cols-2">
          {aula.quandoChamarFarmaceutico.length > 0 && (
            <InfograficoChamarFarmaceutico
              itens={aula.quandoChamarFarmaceutico}
            />
          )}
          {aula.errosComuns.length > 0 && (
            <InfograficoErros itens={aula.errosComuns} />
          )}
        </div>

        {/* Quiz Interativo */}
        <AulaInterativa
          trilhaId={trilha.id}
          aulaId={aula.id}
          xp={aula.xp}
          quiz={aula.quiz}
          proxima={
            prox
              ? {
                  trilhaId: prox.trilha.id,
                  aulaId: prox.aula.id,
                  titulo: prox.aula.titulo,
                }
              : null
          }
        />
      </div>

      <section className="eco-sources">
        <h2>Conferir antes de orientar</h2>
        <p>
          Material educativo. A prescrição, a bula vigente e o protocolo da
          unidade devem ser avaliados pelo farmacêutico. As fontes abaixo apoiam
          a consulta; não substituem a avaliação individual.
        </p>
        {fontesPratica
          .slice(0, trilha.id === "cuidado-no-balcao" ? 3 : 2)
          .map((f) => (
            <a
              key={f.url}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {f.nome} ↗
            </a>
          ))}
      </section>
      {/* ── Mensagem do farmacêutico ── */}
      <div className="mt-8">
        <InfograficoMensagemFarmaceutico />
      </div>
    </div>
  );
}
