import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTrilha, trilhas } from "@/content/curriculo";
import { fotoTrilha } from "@/lib/ecossistema";
import { ProgressoTrilhaBadge } from "@/components/progresso-cliente";
import { TrilhaNivelFiltro } from "@/components/trilha-nivel-filtro";
import { ApoioTratamento } from "@/components/apoio-tratamento";
export function generateStaticParams() {
  return trilhas.map((t) => ({ trilhaId: t.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ trilhaId: string }>;
}): Promise<Metadata> {
  const { trilhaId } = await params;
  const t = getTrilha(trilhaId);
  return { title: t?.titulo || "Trilha", description: t?.descricao };
}
export default async function Page({
  params,
}: {
  params: Promise<{ trilhaId: string }>;
}) {
  const { trilhaId } = await params;
  const t = getTrilha(trilhaId);
  if (!t) notFound();
  return (
    <div className="eco-container eco-section">
      <Link className="eco-text-link" href="/trilhas">
        ← Todas as trilhas
      </Link>
      <div className="eco-track-hero">
        <div>
          <p className="eco-kicker">
            {t.modulos.length} módulos ·{" "}
            {t.modulos.reduce((s, m) => s + m.aulas.length, 0)} aulas
          </p>
          <h1 className="eco-title">{t.titulo}</h1>
          <p className="eco-lead">{t.descricao}</p>
          <ProgressoTrilhaBadge trilhaId={t.id} />
        </div>
        <div className="eco-track-photo">
          <Image
            src={fotoTrilha(t.id)}
            alt={`Tema da trilha: ${t.titulo}`}
            fill
            priority
            sizes="(max-width:800px) 100vw, 40vw"
          />
        </div>
      </div>
      <TrilhaNivelFiltro trilha={t} />
      <ApoioTratamento />
    </div>
  );
}
