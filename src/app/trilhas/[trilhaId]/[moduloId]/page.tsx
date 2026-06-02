import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModulo, trilhas } from "@/content/curriculo";
import { Card, Etiqueta, NivelBadge } from "@/components/ui";
import { Icon } from "@/components/icons";
import { AulaStatusIcon, ProgressoTrilhaBadge } from "@/components/progresso-cliente";
import { Botao } from "@/components/ui";

export function generateStaticParams() {
  return trilhas.flatMap((t) => t.modulos.map((m) => ({ trilhaId: t.id, moduloId: m.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trilhaId: string; moduloId: string }>;
}): Promise<Metadata> {
  const { trilhaId, moduloId } = await params;
  const ctx = getModulo(trilhaId, moduloId);
  if (!ctx) return { title: "Módulo" };
  return { title: ctx.modulo.titulo, description: ctx.modulo.descricao };
}

export default async function ModuloPage({
  params,
}: {
  params: Promise<{ trilhaId: string; moduloId: string }>;
}) {
  const { trilhaId, moduloId } = await params;
  const ctx = getModulo(trilhaId, moduloId);
  if (!ctx) notFound();
  const { trilha, modulo } = ctx;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <Link
        href={`/trilhas/${trilha.id}`}
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-brand-600"
      >
        <Icon name="arrow" size={16} className="rotate-180" /> {trilha.titulo}
      </Link>

      <div className="mt-6 flex flex-col gap-4 sm:gap-6 md:gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">{modulo.titulo}</h1>
          <p className="mt-2 max-w-2xl text-muted">{modulo.descricao}</p>
          <p className="mt-2 text-sm text-subtle">{modulo.aulas.length} aulas neste módulo</p>
        </div>
        <ProgressoTrilhaBadge trilhaId={trilha.id} />
      </div>

      <div className="mt-6">
        <Botao href={`/prova/${trilha.id}/${modulo.id}`} variante="secondary" icone="award">
          Fazer prova do módulo
        </Botao>
      </div>

      <div className="mt-8 space-y-2">
        {modulo.aulas.map((aula) => (
          <Link key={aula.id} href={`/aula/${trilha.id}/${aula.id}`}>
            <Card className="flex items-center gap-4 p-4 transition-all hover:border-brand-400">
              <AulaStatusIcon trilhaId={trilha.id} aulaId={aula.id} />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold">{aula.titulo}</h3>
                <p className="truncate text-sm text-muted">{aula.resumo}</p>
              </div>
              <NivelBadge nivel={aula.nivel} />
              <Etiqueta tom="neutral">
                <Icon name="clock" size={12} /> {aula.duracaoMin} min
              </Etiqueta>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
