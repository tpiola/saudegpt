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

// Mapa de imagens de módulo baseado nas imagens disponíveis
const moduloImagens = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1280&q=85",
  "https://images.unsplash.com/photo-1576091358783-a212ec293ff3?auto=format&fit=crop&w=1280&q=85",
  "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=1280&q=85",
  "https://images.unsplash.com/photo-1584308666744-19c4e5e9e0b1?auto=format&fit=crop&w=1280&q=85",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1280&q=85",
  "https://images.unsplash.com/photo-1576671081837-4900028a1b2f?auto=format&fit=crop&w=1280&q=85",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1280&q=85",
  "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1280&q=85",
];

function moduloImagem(moduloId: string, idx: number): string {
  // Tenta usar imagemHeroUrl do módulo se existir, senão usa o array
  return moduloImagens[idx % moduloImagens.length];
}

// 💡 Sabia que? por tema de módulo
const dicasBemEstar: Record<string, { emoji: string; titulo: string; texto: string }[]> = {
  cuidados: [
    { emoji: "💧", titulo: "Hidratação diária", texto: "A pele é o maior órgão do corpo. Beber água suficiente (2L/dia) melhora a elasticidade e a aparência — e potencializa os efeitos dos hidratantes tópicos." },
    { emoji: "🌙", titulo: "Sono reparador", texto: "Durante o sono, a pele se regenera e produz colágeno. Dormir 7-8h por noite é o melhor skincare que existe — e não tem custo!" },
  ],
  medicamentos: [
    { emoji: "📐", titulo: "Bioimpedância na prática", texto: "A bioimpedância é um exame rápido que mostra composição corporal. Muitas farmácias já oferecem o serviço — um ótimo diferencial para fidelizar clientes (Produto + Serviço)." },
    { emoji: "💤", titulo: "Sono e medicamentos", texto: "A privação de sono altera o metabolismo de fármacos no fígado. Clientes que dormem mal podem ter respostas diferentes a medicamentos — fique atento!" },
  ],
  operacional: [
    { emoji: "📊", titulo: "Os 4Ps na operação", texto: "Produto certo, Preço justo, Praça organizada, Promoção educativa. Esses pilares transformam a farmácia em um centro de saúde — e você é peça-chave nessa engrenagem." },
    { emoji: "💧", titulo: "Hidratação no trabalho", texto: "Atendentes hidratados rendem mais. Tenha sempre água por perto no balcão — a desidratação leve já compromete a concentração e o bom humor." },
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

  // Gradiente dinâmico para o breadcrumb baseado na trilha
  const gradColors: Record<string, string> = {
    perfumaria: "from-green-500 to-green-600",
    medicamentos: "from-orange-500 to-orange-600",
    operacional: "from-forest-500 to-green-500",
    encantamento: "from-orange-500 to-orange-600",
  };
  const grad = gradColors[trilha.id] || "from-green-500 to-green-600";

  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
          HEADER — Breadcrumb + Ícone + Título
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-forest-500 py-12 sm:py-16">
        {/* Hero image background */}
        <Image
          src={moduloImagem(modulo.id, modulo.aulas.length)}
          alt=""
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />

        {/* Glow decorativo */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
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

          {/* Ícone grande + info */}
          <div className="flex items-start gap-5">
            <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-lg`}>
              <Icon name={trilha.icone as IconName} size={30} />
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

              <h1 className="text-2xl font-bold sm:text-3xl text-white font-display">
                {modulo.titulo}
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/50">
                {modulo.descricao}
              </p>
            </div>
          </div>

          {/* 🧑‍⚕️ Mensagem do farmacêutico */}
          <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-sm">
                🧑‍⚕️
              </span>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Sempre consulte o(a) farmacêutico(a) para orientação personalizada sobre este conteúdo. 
                Para prescrições e orientações clínicas, solicite o segundo visto do profissional farmacêutico(a).
              </p>
            </div>
          </div>

          {/* 💡 Sabia que? — Saúde preventiva contextual */}
          {dicas && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dicas.map((dica) => (
                <div
                  key={dica.titulo}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{dica.emoji}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-300">
                        💡 Sabia que?
                      </p>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">
                      {dica.texto.replace("— e é gratuito!", "— e não tem custo!")}
                    </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          LISTA DE AULAS
          ════════════════════════════════════════════ */}
      <div className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          {/* Botão prova */}
          <div className="mb-8">
            <Botao
              href={`/prova/${trilha.id}/${modulo.id}`}
              variante="primary"
              tamanho="lg"
              icone="award"
            >
              Fazer prova do módulo
            </Botao>
          </div>

          <div className="space-y-3">
            {modulo.aulas.map((aula, idx) => (
              <Link
                key={aula.id}
                href={`/aula/${trilha.id}/${aula.id}`}
                className="block group"
              >
                <Card className="flex items-center gap-4 p-4 sm:p-5 transition-all duration-300 hover:border-orange-400 hover:shadow-md hover:-translate-y-0.5">
                  {/* Ícone de status */}
                  <AulaStatusIcon trilhaId={trilha.id} aulaId={aula.id} />

                  {/* Número da aula */}
                  <span className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-xs font-bold text-subtle group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                    {idx + 1}
                  </span>

                  {/* Conteúdo */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm sm:text-base group-hover:text-green-600 transition-colors">
                        {aula.titulo}
                      </h3>
                    </div>
                    <p className="mt-0.5 text-xs sm:text-sm text-muted truncate line-clamp-1">
                      {aula.resumo}
                    </p>
                  </div>

                  {/* Badges */}
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

          {/* 🏆 Troféu — módulo completo */}
          <ModuloProgress
            trilhaId={trilha.id}
            moduloId={modulo.id}
            aulasIds={modulo.aulas.map((a) => a.id)}
          />

          {/* 💊 Mensagem final — farmacêutico + posologia */}
          <div className="mt-10 rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50 to-white p-5 dark:from-orange-900/10 dark:to-forest-800">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg dark:bg-orange-900/30">
                📝
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-orange-600 dark:text-orange-400">
                  Importante: Anote corretamente na etiqueta de posologia
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Ao final de cada atendimento, certifique-se de que todas as informações de uso, 
                  dosagem e horários estejam claras na etiqueta de posologia. 
                  O(a) farmacêutico(a) é o profissional responsável pela verificação final da 
                  dispensação. Sempre solicite o segundo visto para prescrições e orientações clínicas.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    ✅ Sempre consulte o(a) farmacêutico(a)
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-0.5 text-[10px] font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                    📋 Solicite o segundo visto
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    🏷️ Anote na etiqueta de posologia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          CTA — Voltar
          ════════════════════════════════════════════ */}
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
