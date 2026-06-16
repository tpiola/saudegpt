import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModulo, trilhas } from "@/content/curriculo";
import { Card, Etiqueta, NivelBadge, Botao } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { AulaStatusIcon } from "@/components/progresso-cliente";
import { ModuloProgress } from "@/components/modulo-progress";

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

const moduloImagens = [
  "/imagens/hero_pills.webp",
  "/imagens/trilha_medicamentos.webp",
  "/imagens/hero_brain_model.webp",
  "/imagens/hero_pills.webp",
  "/imagens/trilha_operacional.webp",
  "/imagens/bioimpedance_scale.webp",
  "/imagens/consult_pharmacist.webp",
  "/imagens/sleep_quality.webp",
];

function moduloImagem(moduloId: string, idx: number): string {
  return moduloImagens[idx % moduloImagens.length];
}

/* ─── Sabia que? — dados sem emojis ─── */
const dicasBemEstar: Record<string, { icone: IconName; cor: string; titulo: string; texto: string }[]> = {
  cuidados: [
    { icone: "droplet", cor: "text-blue-500", titulo: "Hidratacao diaria", texto: "A pele e o maior orgao do corpo. Beber agua suficiente (2L/dia) melhora a elasticidade e a aparencia — e potencializa os efeitos dos hidratantes topicos." },
    { icone: "moon", cor: "text-purple-500", titulo: "Sono reparador", texto: "Durante o sono, a pele se regenera e produz colageno. Dormir 7-8h por noite e o melhor skincare que existe — e nao tem custo!" },
  ],
  medicamentos: [
    { icone: "ruler", cor: "text-blue-500", titulo: "Bioimpedancia na pratica", texto: "A bioimpedancia e um exame rapido que mostra composicao corporal. Muitas farmacias ja oferecem o servico — um otimo diferencial para fidelizar clientes (Produto + Servico)." },
    { icone: "moon", cor: "text-purple-500", titulo: "Sono e medicamentos", texto: "A privacao de sono altera o metabolismo de farmacos no figado. Clientes que dormem mal podem ter respostas diferentes a medicamentos — fique atento!" },
  ],
  operacional: [
    { icone: "chart", cor: "text-emerald-500", titulo: "Os 4Ps na operacao", texto: "Produto certo, Preco justo, Praca organizada, Promocao educativa. Esses pilares transformam a farmacia em um centro de saude — e voce e peca-chave nessa engrenagem." },
    { icone: "droplet", cor: "text-blue-500", titulo: "Hidratacao no trabalho", texto: "Atendentes hidratados rendem mais. Tenha sempre agua por perto no balcao — a desidratacao leve ja compromete a concentracao e o bom humor." },
  ],
};

function getDicasModulo(moduloId: string) {
  for (const [key, dicas] of Object.entries(dicasBemEstar)) {
    if (moduloId.includes(key)) return dicas;
  }
  return null;
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

  const dicas = getDicasModulo(modulo.id);

  const gradColors: Record<string, string> = {
    perfumaria: "from-gold-500 to-gold-600",
    medicamentos: "from-orange-500 to-orange-600",
    operacional: "from-navy-600 to-gold-500",
    encantamento: "from-orange-500 to-orange-600",
  };
  const grad = gradColors[trilha.id] || "from-gold-500 to-gold-600";

  return (
    <div className="relative">
      {/* ═══ HEADER ═══ */}
      <section className="relative overflow-hidden bg-navy-800 py-12 sm:py-16">
        <Image
          src={moduloImagem(modulo.id, modulo.aulas.length)}
          alt={`Imagem de fundo do modulo ${modulo.titulo}`}
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/trilhas"
              className="text-white/40 hover:text-orange-400 transition-colors"
            >
              Trilhas
            </Link>
            <span className="text-white/20">/</span>
            <Link
              href={`/trilhas/${trilha.id}`}
              className="text-white/40 hover:text-orange-400 transition-colors truncate max-w-[200px]"
            >
              {trilha.titulo}
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/70 truncate max-w-[200px] font-medium">
              {modulo.titulo}
            </span>
          </nav>

          {/* Info */}
          <div className="flex items-start gap-4 sm:gap-5">
            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-lg sm:h-16 sm:w-16`}>
              <Icon name={trilha.icone as IconName} size={26} />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-0.5 text-[10px] font-semibold text-orange-300 uppercase tracking-wider backdrop-blur-sm">
                  {trilha.titulo.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-white/50 backdrop-blur-sm">
                  <Icon name="play" size={12} />
                  {modulo.aulas.length} {modulo.aulas.length === 1 ? "aula" : "aulas"}
                </span>
              </div>
              <h1 className="text-xl font-bold sm:text-3xl text-white sm:leading-tight">
                {modulo.titulo}
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/50">
                {modulo.descricao}
              </p>
            </div>
          </div>

          {/* Mensagem do farmacêutico — sem emojis */}
          <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20">
                <Icon name="shield" size={14} className="text-orange-400" />
              </span>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Sempre consulte o(a) farmacêutico(a) para orientação personalizada sobre este conteudo. 
                Para prescricoes e orientacoes clinicas, solicite o segundo visto do profissional farmaceutico(a).
              </p>
            </div>
          </div>

          {/* Sabia que? — sem emojis */}
          {dicas && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dicas.map((dica) => (
                <div
                  key={dica.titulo}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 ${dica.cor}`}>
                      <Icon name={dica.icone} size={14} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-300">
                        Sabia que?
                      </p>
                      <p className="mt-1 text-xs text-white/60 leading-relaxed">
                        {dica.texto}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══ LISTA DE AULAS ═══ */}
      <div className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          {/* Botao prova */}
          <div className="mb-8">
            <Botao
              href={`/prova/${trilha.id}/${modulo.id}`}
              variante="primary"
              tamanho="lg"
              icone="award"
            >
              Fazer prova do modulo
            </Botao>
          </div>

          <div className="space-y-3">
            {modulo.aulas.map((aula, idx) => (
              <Link
                key={aula.id}
                href={`/aula/${trilha.id}/${aula.id}`}
                className="block group"
              >
                <Card className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 transition-all duration-300 hover:border-orange-400 hover:shadow-md hover:-translate-y-0.5">
                  <AulaStatusIcon trilhaId={trilha.id} aulaId={aula.id} />
                  <span className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-xs font-bold text-subtle group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base group-hover:text-gold-600 transition-colors">
                      {aula.titulo}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-muted line-clamp-1">
                      {aula.resumo}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <NivelBadge nivel={aula.nivel} />
                    <Etiqueta tom="neutral">
                      <Icon name="clock" size={12} /> {aula.duracaoMin} min
                    </Etiqueta>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                      <Icon name="arrow" size={16} />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <ModuloProgress
            trilhaId={trilha.id}
            moduloId={modulo.id}
            aulasIds={modulo.aulas.map((a) => a.id)}
          />

          {/* Mensagem final — sem emojis */}
          <div className="mt-10 rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50 to-white p-5 dark:from-orange-900/10 dark:to-navy-800">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                <Icon name="clipboard" size={18} className="text-orange-600 dark:text-orange-400" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-orange-600 dark:text-orange-400">
                  Importante: Anote corretamente na etiqueta de posologia
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Ao final de cada atendimento, certifique-se de que todas as informacoes de uso, 
                  dosagem e horarios estejam claras na etiqueta de posologia. 
                  O(a) farmaceutico(a) e o profissional responsavel pela verificacao final da 
                  dispensacao. Sempre solicite o segundo visto para prescricoes e orientacoes clinicas.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] font-medium text-gold-700 dark:bg-gold-900/30 dark:text-gold-300">
                    <Icon name="check" size={10} /> Sempre consulte o(a) farmaceutico(a)
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-0.5 text-[10px] font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                    <Icon name="clipboard" size={10} /> Solicite o segundo visto
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] font-medium text-gold-700 dark:bg-gold-900/30 dark:text-gold-300">
                    <Icon name="book" size={10} /> Anote na etiqueta de posologia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <section className="relative py-12 sm:py-16 bg-surface-2 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center">
          <Link
            href={`/trilhas/${trilha.id}`}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-orange-600 transition-colors"
          >
            <Icon name="arrow" size={16} className="rotate-180" />
            Voltar para {trilha.titulo}
          </Link>
        </div>
      </section>
    </div>
  );
}
