import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModulo, questoesDoModulo, trilhas } from "@/content/curriculo";
import { ProvaModulo } from "@/components/prova-modulo";
import { Icon } from "@/components/icons";

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
  if (!ctx) return { title: "Prova" };
  return { title: `Prova · ${ctx.modulo.titulo}` };
}

export default async function ProvaPage({
  params,
}: {
  params: Promise<{ trilhaId: string; moduloId: string }>;
}) {
  const { trilhaId, moduloId } = await params;
  const ctx = getModulo(trilhaId, moduloId);
  if (!ctx) notFound();
  const questoes = questoesDoModulo(trilhaId, moduloId);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href={`/trilhas/${trilhaId}/${moduloId}`}
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-green-600"
      >
        <Icon name="arrow" size={16} className="rotate-180" /> Voltar ao módulo
      </Link>
      <ProvaModulo
        tituloModulo={ctx.modulo.titulo}
        questoes={questoes}
        trilhaId={trilhaId}
        moduloId={moduloId}
      />
    </div>
  );
}
