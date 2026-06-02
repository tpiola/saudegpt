import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTrilha, trilhas } from "@/content/curriculo";
import { Card, Etiqueta } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { ProgressoTrilhaBadge } from "@/components/progresso-cliente";
import { TrilhaNivelFiltro } from "@/components/trilha-nivel-filtro";

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
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <Link
        href="/trilhas"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-brand-600"
      >
        <Icon name="arrow" size={16} className="rotate-180" /> Todas as trilhas
      </Link>

      <div className="mt-6 flex flex-col gap-4 sm:gap-6 md:gap-8 sm:flex-row sm:items-start sm:justify-between">
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

      {trilha.id === "operacional" && (
        <Link href="/comando-diario" className="mt-6 block">
          <Card className="flex items-center gap-4 border-brand-300 bg-brand-50/50 transition-all hover:border-brand-400 dark:bg-brand-900/20">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl gradient-brand text-white">
              <Icon name="clock" size={22} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="font-bold">Comando diário de operação</div>
              <p className="text-sm text-muted">
                Checklist do turno conectado a esta trilha — marque itens e aprofunde nas aulas.
              </p>
            </div>
            <Icon name="arrow" size={20} className="flex-none text-brand-600" />
          </Card>
        </Link>
      )}

      <TrilhaNivelFiltro trilha={trilha} />
    </div>
  );
}
