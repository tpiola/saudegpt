import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAula, listarAulas, proximaAula } from "@/content/curriculo";
import { Card, Etiqueta, NivelBadge } from "@/components/ui";
import { Icon } from "@/components/icons";
import { AulaInterativa } from "@/components/aula-interativa";
import { VideoPlayer, VideoPlaceholder } from "@/components/video-player";
import { imagemAula } from "@/lib/aula-imagens";
import { ProdutoShowcase } from "@/components/produto-showcase";
import { AnimarEntrada } from "@/components/animar-entrada";
import { midiaPadraoPorAulaId } from "@/content/midia-catalogo";

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

function Bloco({
  icone,
  titulo,
  children,
  tom = "neutral",
}: {
  icone: Parameters<typeof Icon>[0]["name"];
  titulo: string;
  children: React.ReactNode;
  tom?: "neutral" | "danger" | "brand";
}) {
  const cores = {
    neutral: "bg-brand-50 text-brand-600 dark:bg-brand-900/40",
    danger: "bg-rose-50 text-rose-600 dark:bg-rose-900/30",
    brand: "bg-brand-50 text-brand-600 dark:bg-brand-900/40",
  };
  return (
    <Card>
      <div className="flex items-center gap-2">
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${cores[tom]}`}>
          <Icon name={icone} size={18} />
        </span>
        <h2 className="text-lg font-bold">{titulo}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </Card>
  );
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
  const midiaExtra = midiaPadraoPorAulaId(aula.id);
  const heroSrc = aula.imagemHeroUrl ?? midiaExtra.imagemHeroUrl ?? imagemAula(trilha.id);
  const produtos = aula.produtos ?? midiaExtra.produtos;
  const marcas = aula.marcas ?? midiaExtra.marcas;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Trilha de migalhas */}
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-subtle">
        <Link href="/trilhas" className="hover:text-brand-600">
          Trilhas
        </Link>
        <Icon name="arrow" size={14} />
        <Link href={`/trilhas/${trilha.id}`} className="hover:text-brand-600">
          {trilha.titulo}
        </Link>
        <Icon name="arrow" size={14} />
        <span className="text-muted">{modulo.titulo}</span>
      </nav>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <NivelBadge nivel={aula.nivel} />
        <Etiqueta tom="neutral">
          <Icon name="clock" size={12} /> {aula.duracaoMin} min
        </Etiqueta>
        <Etiqueta tom="brand">
          <Icon name="sparkles" size={12} /> +{aula.xp} XP
        </Etiqueta>
      </div>

      <h1 className="mt-3 text-3xl font-extrabold tracking-tight">{aula.titulo}</h1>
      <p className="mt-2 text-lg text-muted">{aula.resumo}</p>

      <AnimarEntrada>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-card">
          <Image
            src={heroSrc}
            alt={`Referência visual: ${aula.titulo}`}
            width={1280}
            height={640}
            className="h-52 w-full object-cover sm:h-64"
            priority
          />
        </div>
      </AnimarEntrada>

      <div className="mt-8">
        <ProdutoShowcase produtos={produtos} marcas={marcas} />
      </div>

      <div className="mt-6">
        {aula.videoUrl ? (
          <VideoPlayer url={aula.videoUrl} titulo={aula.titulo} />
        ) : (
          <VideoPlaceholder duracaoMin={aula.duracaoMin} />
        )}
      </div>

      <div className="mt-8 space-y-6">
        <Bloco icone="book" titulo="Resumo executivo">
          <ul className="space-y-2.5">
            {aula.resumoExecutivo.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40">
                  <Icon name="check" size={13} />
                </span>
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Bloco>

        {aula.comparativo && (
          <Bloco icone="chart" titulo={aula.comparativo.titulo}>
            <div className="grid gap-3 sm:grid-cols-2">
              {aula.comparativo.itens.map((it) => (
                <div key={it.nome} className="rounded-xl bg-surface-2 p-4">
                  <div className="text-sm font-bold text-brand-600">{it.nome}</div>
                  <div className="mt-1 text-sm text-muted">{it.quando}</div>
                </div>
              ))}
            </div>
          </Bloco>
        )}

        {aula.simulacao && (
          <Bloco icone="user" titulo="Simulação de atendimento">
            <p className="text-sm font-medium">{aula.simulacao.cliente}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20">
                <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  <Icon name="check" size={15} /> Conduta recomendada
                </div>
                <p className="mt-2 text-sm text-muted">{aula.simulacao.falaBoa}</p>
              </div>
              <div className="rounded-xl border border-rose-300 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-900/20">
                <div className="flex items-center gap-1.5 text-sm font-bold text-rose-700 dark:text-rose-300">
                  <Icon name="close" size={15} /> Evite
                </div>
                <p className="mt-2 text-sm text-muted">{aula.simulacao.falaEvitar}</p>
              </div>
            </div>
          </Bloco>
        )}

        <Bloco icone="check" titulo="Checklist de bolso">
          <ul className="grid gap-2 sm:grid-cols-2">
            {aula.checklist.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 rounded-lg bg-surface-2 px-3 py-2 text-sm"
              >
                <Icon name="check" size={15} className="mt-0.5 flex-none text-brand-600" /> {c}
              </li>
            ))}
          </ul>
        </Bloco>

        <div className="grid gap-6 sm:grid-cols-2">
          <Bloco icone="shield" titulo="Quando chamar o farmacêutico" tom="brand">
            <ul className="space-y-2">
              {aula.quandoChamarFarmaceutico.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted">
                  <Icon name="arrow" size={14} className="mt-1 flex-none text-brand-600" /> {c}
                </li>
              ))}
            </ul>
          </Bloco>
          <Bloco icone="close" titulo="Erros que não posso cometer" tom="danger">
            <ul className="space-y-2">
              {aula.errosComuns.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted">
                  <Icon name="close" size={14} className="mt-1 flex-none text-rose-500" /> {c}
                </li>
              ))}
            </ul>
          </Bloco>
        </div>

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
    </div>
  );
}
