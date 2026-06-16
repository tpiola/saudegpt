import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimacaoInsulina from "@/components/animacao-insulina";

export const metadata: Metadata = {
  title: "Diabetes · Guia Fácil",
  description:
    "Tudo que você precisa saber sobre diabetes — tipo 1, tipo 2, pré-diabetes, medicamentos, insulinas e orientações para o atendente de farmácia.",
  openGraph: {
    title: "Diabetes · Guia Fácil para Atendentes",
    description:
      "Entenda o diabetes de um jeito simples: tipos, sinais de alerta, medicamentos e orientações que todo atendente de farmácia precisa saber.",
  },
};

const topicos = [
  {
    id: "o-que-e",
    emoji: "🩸",
    titulo: "O que é Diabetes?",
    texto: `Diabetes é uma condição em que o corpo não consegue usar a glicose (açúcar) do sangue de forma adequada. Isso acontece por dois motivos principais: o pâncreas não produz insulina suficiente, ou as células do corpo não respondem bem à insulina que é produzida.

Existem três tipos principais:

• Diabetes Tipo 1 — o sistema imunológico ataca as células do pâncreas que produzem insulina. Geralmente aparece na infância ou adolescência. A pessoa precisa de insulina todos os dias para viver.

• Diabetes Tipo 2 — o corpo produz insulina, mas as células não respondem bem a ela (resistência insulínica). É o tipo mais comum, geralmente associado a sobrepeso, sedentarismo e alimentação inadequada.

• Pré-diabetes — a glicose no sangue está mais alta que o normal, mas ainda não é diabetes. É um alerta! Com mudanças no estilo de vida, é possível reverter.`,
    imagem: "/imagens/hero_pills.webp",
  },
  {
    id: "sinais-alerta",
    emoji: "⚠️",
    titulo: "Sinais de alerta",
    texto: `Reconhecer os sintomas do diabetes pode fazer toda diferença no atendimento. Muitas pessoas descobrem a condição por acaso, ao medir a glicose na farmácia.

Os sinais clássicos são:
• Sede excessiva (polidipsia)
• Vontade de urinar toda hora (poliúria)
• Fome exagerada (polifagia)
• Perda de peso sem motivo aparente
• Visão embaçada
• Feridas que demoram para cicatrizar
• Formigamento nas mãos ou pés
• Cansaço extremo

No Tipo 1 os sintomas aparecem de repente. No Tipo 2, vêm aos poucos — por isso muita gente demora a perceber.`,
    imagem: "/imagens/trilha_medicamentos.webp",
  },
  {
    id: "medicamentos-insulinas",
    emoji: "💊",
    titulo: "Medicamentos e Insulinas",
    texto: `O tratamento do diabetes envolve medicamentos orais, insulinas ou ambos, dependendo do tipo e do estágio.

Medicamentos orais (mais comuns no Tipo 2):
• Metformina — o mais prescrito, reduz a produção de glicose no fígado
• Sulfonilureias — estimulam o pâncreas a liberar mais insulina
• Inibidores de DPP-4 — ajudam a controlar a glicose após as refeições
• Inibidores de SGLT2 — eliminam glicose pela urina

Insulinas (essenciais no Tipo 1 e em alguns casos de Tipo 2):
• Insulina de ação rápida (antes das refeições)
• Insulina de ação intermediária (NPH)
• Insulina de ação lenta (basal, uma ou duas vezes ao dia)
• Insulinas pré-misturadas

Importante: insulinas devem ser armazenadas na geladeira (não no congelador!) e não podem ser agitadas com força.`,
    imagem: "/imagens/trilha_medicamentos.webp",
  },
  {
    id: "cuidados-balao",
    emoji: "🧑‍⚕️",
    titulo: "Cuidados no balcão",
    texto: `Quando um cliente com diabetes chega ao balcão, sua orientação pode fazer a diferença. Aqui estão os pontos mais importantes:

• Sempre pergunte se ele está em acompanhamento médico regular
• Reforce que o tratamento não pode ser interrompido sem orientação
• Alerte sobre o uso de medicamentos que podem interferir na glicemia (como corticoides)
• Oriente sobre a importância de medir a glicemia regularmente
• Pergunte sobre a alimentação — muitos clientes têm dúvidas sobre o que podem comer
• Lembre da hidratação: beber água ajuda a controlar a glicose
• Fique atento a sinais de hipoglicemia (tontura, suor frio, tremor, confusão) — isso é uma emergência!`,
    imagem: "/imagens/consult_pharmacist.webp",
  },
  {
    id: "dieta-estilo-vida",
    emoji: "🥗",
    titulo: "Dieta e estilo de vida",
    texto: `Quem tem diabetes não precisa cortar tudo que é gostoso. O segredo é equilíbrio e escolhas inteligentes.

Alimentos liberados (com moderação):
• Verduras e legumes à vontade
• Frutas com casca (prefira as menos doces)
• Carboidratos integrais (arroz integral, aveia, quinoa)
• Proteínas magras (frango, peixe, ovo, tofu)
• Gorduras boas (abacate, azeite, castanhas)

Alimentos para evitar:
• Açúcar refinado, doces, refrigerantes
• Farinha branca (pão francês, bolachas, massas)
• Sucos de caixinha e bebidas açucaradas
• Alimentos ultraprocessados

Exercícios físicos regulares (30 minutos por dia) melhoram a sensibilidade à insulina e ajudam a controlar a glicose. A caminhada é uma excelente opção!`,
    imagem: "/imagens/trilha_perfumaria.webp",
  },
];

export default function DiabetesPage() {
  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
         HERO — COM VÍDEO DE FUNDO
         ════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-navy-800">
        {/* Fundo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-navy-700/80 via-navy-600/50 to-red-500/20" />
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 pt-20 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="badge-orange inline-flex mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Saúde e cuidado
            </div>

            <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              <span className="text-white">Diabetes</span>
              <br />
              <span className="text-white/70 font-light">Guia Fácil para Atendentes</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              Tudo que você precisa saber para entender, orientar e cuidar de quem chega ao balcão com{" "}
              <span className="text-white/80 font-medium">dúvidas sobre diabetes e glicemia</span>.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: "5", label: "tópicos" },
                { value: "Tipo 1 e 2", label: "entenda" },
                { value: "Fácil", label: "de entender" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-orange-400 tabular-nums">
                    {s.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-white/40 font-medium">
                    {s.label}
                  </span>
                  <span className="hidden sm:block w-px h-4 bg-white/10 last:hidden" />
                </div>
              ))}
            </div>

            {/* Navegação rápida */}
            <div className="mt-10 flex flex-wrap gap-3">
              {topicos.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all"
                >
                  {t.emoji} {t.titulo.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">Explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
         CONTEÚDO PRINCIPAL
         ════════════════════════════════════════════ */}
      {topicos.map((topico, idx) => (
        <section
          key={topico.id}
          id={topico.id}
          className={`relative py-20 sm:py-28 ${idx % 2 === 0 ? "bg-surface" : "bg-surface-2"}`}
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-14 items-center">
              {/* Texto — 3 colunas */}
              <div className={`lg:col-span-3 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-xl dark:bg-red-900/30">
                    {topico.emoji}
                  </span>
                  <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] text-navy-700 dark:text-white">
                    {topico.titulo}
                  </h2>
                </div>

                <div className="text-sm sm:text-base leading-relaxed text-muted space-y-4">
                  {topico.texto.split("\n\n").map((par, pIdx) => (
                    <p key={pIdx}>{par}</p>
                  ))}
                </div>
              </div>

              {/* Imagem — 2 colunas */}
              <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {topico.id === "o-que-e" ? (
                  <AnimacaoInsulina />
                ) : (
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={topico.imagem}
                      alt={`Ilustração sobre diabetes: ${topico.titulo}`}
                      width={600}
                      height={450}
                      className="w-full h-auto aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ════════════════════════════════════════════
         SEÇÃO: CURIOSIDADES SOBRE DIABETES
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-navy-800 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="badge-orange inline-flex mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Sabia que?
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] text-white">
              💡 Curiosidades sobre Diabetes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Informações que fazem diferença no atendimento e no cuidado com o cliente.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-orange-400 mb-3">🌍 No mundo</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span>📊</span> Diabetes afeta mais de 530 milhões de pessoas no mundo
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🇧🇷</span> O Brasil está entre os 5 países com mais casos
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🧬</span> 1 em cada 2 pessoas com diabetes não sabe que tem
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-orange-400 mb-3">🩺 No balcão</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span>🩸</span> Faça sempre o teste rápido de glicemia com autorização
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📝</span> Oriente o cliente a anotar os resultados
                  </li>
                  <li className="flex items-center gap-2">
                    <span>💉</span> Ofereça algodão e seringas apropriadas
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-orange-200/30 bg-gradient-to-br from-orange-500/10 to-transparent p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-[16px]">
                  💡
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-orange-400 mb-1">
                    Você sabia?
                  </p>
                  <p className="text-sm leading-relaxed text-white/70">
                    A canela pode ajudar a controlar a glicemia? Estudos mostram que o consumo regular
                    ajuda a melhorar a sensibilidade à insulina. Mas atenção: não substitui o tratamento
                    médico!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         SEÇÃO: ORIENTAÇÕES PRÁTICAS NO BALCÃO
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-surface overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="badge-green inline-flex">
              🩺 O que fazer no balcão
            </span>
            <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-navy-700 dark:text-white">
              Como orientar o cliente com diabetes
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              Atitudes simples que fazem toda diferença na vida de quem convive com diabetes
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                emoji: "📋",
                titulo: "Pergunte sobre o tratamento",
                texto: "Há quanto tempo tem diabetes? Toma quais medicamentos? Já foi ao médico este ano?",
              },
              {
                emoji: "🩸",
                titulo: "Ofereça medição de glicemia",
                texto: "Muitas farmácias oferecem teste rápido. Se possível, ofereça e oriente sobre os valores de referência.",
              },
              {
                emoji: "🥗",
                titulo: "Dicas de alimentação",
                texto: "Reforce a importância de comer de 3 em 3 horas e evitar alimentos com açúcar refinado.",
              },
              {
                emoji: "💧",
                titulo: "Hidratação é essencial",
                texto: "Beber água ajuda a eliminar o excesso de glicose pela urina e mantém o organismo equilibrado.",
              },
              {
                emoji: "🚶",
                titulo: "Incentive atividade física",
                texto: "30 minutos de caminhada por dia melhoram a sensibilidade à insulina e controlam a glicemia.",
              },
              {
                emoji: "⚠️",
                titulo: "Fique atento à hipoglicemia",
                texto: "Tontura, tremor, suor frio e confusão podem ser hipoglicemia. Ofereça açúcar imediatamente e encaminhe ao médico.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-300/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-2xl dark:from-red-900/20 dark:to-red-900/10">
                  {card.emoji}
                </span>
                <h3 className="mt-4 text-sm font-bold text-navy-700 dark:text-white">{card.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         CTA FINAL
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-navy-800 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-white">
            Conhecimento que transforma vidas
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/50">
            Compartilhe esse conhecimento com seus clientes. Um atendente informado salva vidas!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-rd-white text-base px-8 py-3">
              Voltar ao início
            </Link>
            <Link href="/curiosidades" className="btn-rd-outline text-base px-8 py-3">
              Mais curiosidades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
