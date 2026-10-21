import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModulo, trilhas } from "@/content/curriculo";
import { AulaStatusIcon } from "@/components/progresso-cliente";
import { ModuloProgress } from "@/components/modulo-progress";
import { ApoioTratamento } from "@/components/apoio-tratamento";
export function generateStaticParams() {
  return trilhas.flatMap((t) =>
    t.modulos.map((m) => ({ trilhaId: t.id, moduloId: m.id })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ trilhaId: string; moduloId: string }>;
}): Promise<Metadata> {
  const { trilhaId, moduloId } = await params;
  const ctx = getModulo(trilhaId, moduloId);
  return {
    title: ctx?.modulo.titulo || "Módulo",
    description: ctx?.modulo.descricao,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ trilhaId: string; moduloId: string }>;
}) {
  const { trilhaId, moduloId } = await params;
  const ctx = getModulo(trilhaId, moduloId);
  if (!ctx) notFound();
  const { trilha, modulo } = ctx;
  return (
    <div className="eco-container eco-section">
      <Link className="eco-text-link" href={`/trilhas/${trilha.id}`}>
        ← {trilha.titulo}
      </Link>
      <p className="eco-kicker" style={{ marginTop: 24 }}>
        {modulo.aulas.length} aulas ·{" "}
        {modulo.aulas.reduce((s, a) => s + a.duracaoMin, 0)} min de estudo
      </p>
      <h1 className="eco-title">{modulo.titulo}</h1>
      <p className="eco-lead">{modulo.descricao}</p>
      <article className="eco-module">
        <h2>Seu caminho neste módulo</h2>
        <ol>
          {modulo.aulas.map((a) => (
            <li key={a.id}>
              <Link href={`/aula/${trilha.id}/${a.id}`}>
                <AulaStatusIcon trilhaId={trilha.id} aulaId={a.id} />
                <span>
                  {a.titulo}
                  <small>
                    {a.duracaoMin} min · +{a.xp} XP
                  </small>
                </span>
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>
        <Link href={`/prova/${trilha.id}/${modulo.id}`} className="eco-button">
          Praticar o módulo →
        </Link>
      </article>
      <ModuloProgress
        trilhaId={trilha.id}
        moduloId={modulo.id}
        aulasIds={modulo.aulas.map((a) => a.id)}
      />
      <ApoioTratamento />
    </div>
  );
}
