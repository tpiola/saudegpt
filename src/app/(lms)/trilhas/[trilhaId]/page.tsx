import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTrilha, trilhas } from "@/content/curriculo";
import { Card, Etiqueta, Botao } from "@/components/ui";
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

// Imagens para cada trilha
const trilhaHeroImgs: Record<string, string> = {
  perfumaria: "/imagens/trilha_perfumaria.png",
  medicamentos: "/imagens/trilha_medicamentos.png",
  operacional: "/imagens/trilha_operacional.png",
  encantamento: "/imagens/trilha_encantamento.png",
  fundamentos: "/imagens/hero_brain_model.png",
  pratica: "/imagens/trilha_medicamentos.png",
  "servicos-cuidado": "/imagens/consult_pharmacist.png",
};

// Cores para cada trilha
const coresBadge: Record<string, { bg: string; border: string; text: string }> = {
  perfumaria: { bg: "from-green-100 to-green-50", border: "border-green-300/50", text: "text-green-700 dark:text-green-300" },
  medicamentos: { bg: "from-orange-100 to-orange-50", border: "border-orange-300/50", text: "text-orange-700 dark:text-orange-300" },
  operacional: { bg: "from-forest-100 to-green-50", border: "border-forest-300/50", text: "text-forest-700 dark:text-forest-300" },
  encantamento: { bg: "from-orange-100 to-orange-50", border: "border-orange-300/50", text: "text-orange-700 dark:text-orange-300" },
  fundamentos: { bg: "from-green-100 to-green-50", border: "border-green-300/50", text: "text-green-700 dark:text-green-300" },
  pratica: { bg: "from-forest-100 to-green-50", border: "border-forest-300/50", text: "text-forest-700 dark:text-forest-300" },
  "servicos-cuidado": { bg: "from-green-100 to-orange-50", border: "border-green-300/50", text: "text-green-700 dark:text-green-300" },
};

// Mensagens de farmacêutico contextuais
const farmaMensagens: Record<string, string> = {
  perfumaria: "Lembre-se: sempre consulte o(a) farmacêutico(a) para orientação sobre reações alérgicas a cosméticos e perfumes.",
  medicamentos: "Solicite o segundo visto do farmacêutico(a) para qualquer prescrição de medicamentos — a segurança do paciente vem sempre em primeiro lugar.",
  operacional: "Anote corretamente todas as informações na etiqueta de posologia — o farmacêutico(a) é o responsável técnico pela verificação final.",
  encantamento: "O atendimento encantador inclui saber quando chamar o(a) farmacêutico(a) para orientações especializadas ao cliente.",
  fundamentos: "Conceitos de saúde orientam, mas não substituem avaliação profissional — na dúvida clínica, o(a) farmacêutico(a) é sempre o próximo passo.",
  pratica: "Nas simulações e no balcão real, a regra é a mesma: receita, sintoma persistente ou dúvida técnica = escalonar ao farmacêutico(a).",
  "servicos-cuidado": "Aferição, testes, vacinas e injetáveis são executados pelo(a) farmacêutico(a) — o atendente acolhe, agenda e prepara o cliente.",
};

// 💡 Sabia que? cards por trilha — saúde preventiva + 4Ps
const sabiaQuePorTrilha: Record<string, { emoji: string; titulo: string; texto: string }[]> = {
  perfumaria: [
    {
      emoji: "💧",
      titulo: "Hidratação e saúde da pele",
      texto: "Sabia que a pele reflete diretamente o nível de hidratação do corpo? Beber água suficiente melhora a elasticidade, reduz linhas finas e fortalece a barreira cutânea. Um bom hidratante + água = pele saudável!",
    },
    {
      emoji: "🌙",
      titulo: "Higienização do sono e beleza",
      texto: "Dormir bem é essencial para a regeneração da pele. Durante o sono profundo, a produção de colágeno aumenta e a pele se recupera dos danos do dia. Uma rotina de skincare noturna potencializa esse processo natural.",
    },
  ],
  medicamentos: [
    {
      emoji: "💤",
      titulo: "Sono e resposta a medicamentos",
      texto: "A qualidade do sono influencia diretamente a eficácia de diversos medicamentos. Dormir mal altera o metabolismo hepático e a resposta imune — por isso a higienização do sono é parte do cuidado com a saúde.",
    },
    {
      emoji: "📐",
      titulo: "Bioimpedância e composição corporal",
      texto: "A bioimpedância virou serviço farmacêutico essencial. Ela avalia massa magra, gordura e nível de hidratação — dados valiosos para ajustar tratamentos e suplementações. Pergunte ao farmacêutico sobre o serviço!",
    },
  ],
  operacional: [
    {
      emoji: "💧",
      titulo: "Hidratação e produtividade",
      texto: "Atendentes hidratados têm mais energia, foco e disposição para o atendimento. A desidratação leve já causa queda de concentração — mantenha uma garrafa de água sempre por perto no balcão!",
    },
    {
      emoji: "📊",
      titulo: "Os 4Ps na operação da farmácia",
      texto: "Produto (sortimento certo), Preço (política justa), Praça (exposição e fluxo), Promoção (comunicação no PDV). Esses 4 pilares sustentam uma operação de excelência — e você, atendente, é a conexão entre eles e o cliente.",
    },
  ],
  encantamento: [
    {
      emoji: "🧘",
      titulo: "Sleep hygiene para o atendente",
      texto: "Um atendente descansado atende melhor! Higienização do sono: desligue telas 1h antes de dormir, mantenha o quarto escuro e fresco, crie uma rotina noturna. Cliente percebe quando você está bem disposto.",
    },
    {
      emoji: "💧",
      titulo: "Hidratação e comunicação",
      texto: "A desidratação causa mau hálito, boca seca e cansaço — tudo que atrapalha um atendimento encantador. Beber água regularmente melhora a dicção, o hálito e a energia para acolher cada cliente com um sorriso.",
    },
  ],
  fundamentos: [
    {
      emoji: "🧬",
      titulo: "O corpo é o manual do balcão",
      texto: "Entender o básico de anatomia e fisiologia transforma o atendimento: quem sabe COMO o medicamento age no corpo orienta com mais segurança e responde dúvidas com confiança — sem nunca substituir o farmacêutico.",
    },
    {
      emoji: "🧼",
      titulo: "Biossegurança protege todo mundo",
      texto: "Lavar as mãos do jeito certo é a medida mais barata e eficaz contra infecções — na farmácia e na vida. Equipamentos de proteção e descarte correto de perfurocortantes completam o trio da segurança.",
    },
  ],
  pratica: [
    {
      emoji: "🎭",
      titulo: "Simular é treinar de verdade",
      texto: "O cérebro aprende fazendo: simulações de balcão criam memória prática para o atendimento real. Errar na simulação é grátis — errar com o cliente custa confiança. Por isso, repita os cenários sem medo!",
    },
    {
      emoji: "🏅",
      titulo: "Certificação que abre portas",
      texto: "Atendentes com formação estruturada se destacam em qualquer rede. Cada módulo concluído é um degrau na sua carreira — e o certificado comprova o que você sabe fazer na prática.",
    },
  ],
  "servicos-cuidado": [
    {
      emoji: "🩺",
      titulo: "A farmácia como hub de saúde",
      texto: "Aferição de pressão, glicemia, vacinas e testes rápidos transformam a farmácia no ponto de cuidado mais acessível do bairro. Quem acompanha a saúde todo mês cria vínculo — e previne de verdade.",
    },
    {
      emoji: "🧭",
      titulo: "Os 4 Ps da Saúde",
      texto: "Prevenção, Parâmetros, Problemas e Promoção: o roteiro mental que organiza qualquer conversa de saúde no balcão. Aprenda o método uma vez e use em todos os temas — do sono à glicemia.",
    },
  ],
};

export default async function TrilhaPage({ params }: { params: Promise<{ trilhaId: string }> }) {
  const { trilhaId } = await params;
  const trilha = getTrilha(trilhaId);
  if (!trilha) notFound();

  const heroImg = trilhaHeroImgs[trilha.id] || "/imagens/trilha_medicamentos.png";
  const cores = coresBadge[trilha.id] || coresBadge.perfumaria;
  const farmaMsg = farmaMensagens[trilha.id] || "Sempre consulte o(a) farmacêutico(a) para orientação personalizada.";
  const sabiaQue = sabiaQuePorTrilha[trilha.id] || [];

  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
          HERO MINIMALISTA — Imagem + Badge + Título
          ════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-forest-500">
        <Image
          src={heroImg}
          alt={`Imagem de fundo da trilha ${trilha.titulo}`}
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
          <Link
            href="/trilhas"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-orange-400 transition-colors mb-8"
          >
            <Icon name="arrow" size={16} className="rotate-180" /> Todas as trilhas
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-orange-300 backdrop-blur-sm">
                Trilha {trilha.numero}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
                {trilha.subtitulo}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
                {trilha.nivelFaixa}
              </span>
            </div>

            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
              {trilha.titulo}
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              {trilha.descricao}
            </p>

            {/* Progresso */}
            <div className="mt-6">
              <ProgressoTrilhaBadge trilhaId={trilha.id} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MENSAGEM DO FARMACÊUTICO
          ════════════════════════════════════════════ */}
      <div className="bg-surface-2 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm dark:bg-orange-900/30">
              🧑‍⚕️
            </span>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {farmaMsg}
            </p>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          COMANDO DIÁRIO (se operacional)
          ════════════════════════════════════════════ */}
      {trilha.id === "operacional" && (
        <div className="bg-surface-2 border-b border-border">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-4">
            <Link href="/comando-diario">
              <Card className="flex items-center gap-4 border-green-300 bg-green-50/50 transition-all hover:border-green-400 dark:bg-green-900/20">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <Icon name="clock" size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-bold">Comando diário de operação</div>
                  <p className="text-sm text-muted">
                    Checklist do turno conectado a esta trilha — marque itens e aprofunde nas aulas.
                  </p>
                </div>
                <Icon name="arrow" size={20} className="flex-none text-green-600" />
              </Card>
            </Link>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════
          FILTRO + MÓDULOS
          ════════════════════════════════════════════ */}
      <div className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <TrilhaNivelFiltro trilha={trilha} />
        </div>
      </div>

      {/* ════════════════════════════════════════════
          💡 SABIA QUE? — Saúde preventiva contextual
          ════════════════════════════════════════════ */}
      {sabiaQue.length > 0 && (
        <section className="relative py-12 sm:py-16 bg-surface-2">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="text-center fade-in-up">
              <span className="badge-green inline-flex">💡 Sabia que?</span>
              <h2 className="mt-3 text-lg font-bold text-forest-700 dark:text-white">Saúde e cuidado no seu dia a dia</h2>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {sabiaQue.map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:shadow-md hover:border-orange-300/40"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="mt-3 text-sm font-bold text-foreground font-display">{item.titulo}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-subtle">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════
          CTA — Acessar conteúdo
          ════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 bg-forest-500 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-white">
            {trilha.titulo.split(" ").slice(0, 2).join(" ")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/50">
            Aprenda no seu ritmo com aulas curtas, quizzes e simulações reais de balcão.
          </p>
          <div className="mt-6">
            <Link href="/" className="btn-rd-white text-base px-8 py-3">
              Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
