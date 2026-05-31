import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTrilha, trilhas } from "@/content/curriculo";
import { Card, Etiqueta, NivelBadge } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { AulaStatusIcon, ProgressoTrilhaBadge } from "@/components/progresso-cliente";

export function generateStaticParams() {
  return trilhas.map((t) => ({ trilhaId: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trilhaId: string }>;
}): Promise<Metadata> {
  const { trilhaId } = await params;
  const trilha = getTrilha(trilhaId);
  if (!trilha) return { title: "Trilha" };
  return { title: trilha.titulo, description: trilha.descricao };
}

export default async function TrilhaPage({ params }: { params: Promise<{ trilhaId: string }> }) {
  const { trilhaId } = await params;
  const trilha = getTrilha(trilhaId);
  if (!trilha) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/trilhas"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-brand-600"
      >
        <Icon name="arrow" size={16} className="rotate-180" /> Todas as trilhas
      </Link>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <span className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl gradient-brand text-white">
            <Icon name={trilha.icone as IconName} size={30} />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-brand-600">Trilha {trilha.numero}</span>
              <Etiqueta tom="neutral">{trilha.subtitulo}</Etiqueta>
            </div>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{trilha.titulo}</h1>
            <p className="mt-2 max-w-2xl text-muted">{trilha.descricao}</p>
          </div>
        </div>
        <ProgressoTrilhaBadge trilhaId={trilha.id} />
      </div>

      <div className="mt-10 space-y-8">
        {trilha.modulos.map((modulo, idx) => (
          <section key={modulo.id}>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
                {idx + 1}
              </span>
              <div>
                <h2 className="text-lg font-bold">{modulo.titulo}</h2>
                <p className="text-sm text-subtle">{modulo.descricao}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {modulo.aulas.map((aula) => (
                <Link key={aula.id} href={`/aula/${trilha.id}/${aula.id}`}>
                  <Card className="flex items-center gap-4 p-4 transition-all hover:border-brand-400 hover:bg-surface-2">
                    <AulaStatusIcon trilhaId={trilha.id} aulaId={aula.id} />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-semibold">{aula.titulo}</h3>
                      <p className="truncate text-sm text-muted">{aula.resumo}</p>
                    </div>
                    <div className="hidden flex-none items-center gap-2 sm:flex">
                      <NivelBadge nivel={aula.nivel} />
                      <Etiqueta tom="neutral">
                        <Icon name="clock" size={12} /> {aula.duracaoMin} min
                      </Etiqueta>
                    </div>
                    <Icon name="arrow" size={18} className="flex-none text-subtle" />
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
