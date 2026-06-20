import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HormoniosDiagram from "@/components/diagrams/HormoniosDiagram";

export const metadata: Metadata = {
  title: "Hormônios · Guia Fácil",
  description:
    "Tudo que você precisa saber sobre hormônios — tireoide, hormônios sexuais, insulina, cortisol e orientações para o atendente de farmácia.",
  openGraph: {
    title: "Hormônios · Guia Fácil para Atendentes",
    description:
      "Entenda os hormônios de um jeito simples: tireoide, hormônios sexuais, insulina, cortisol e como orientar clientes no balcão da farmácia.",
  },
};

const topicos = [
  {
    id: "o-que-sao",
    emoji: "🧬",
    titulo: "O que são hormônios?",
    texto: `Hormônios são mensageiros químicos produzidos pelas glândulas do sistema endócrino. Eles viajam pela corrente sanguínea e levam instruções para diferentes órgãos e tecidos do corpo.

Pense neles como carteiros biológicos: cada hormônio tem um destino específico e uma mensagem importante para entregar. Quando tudo funciona bem, o corpo trabalha em harmonia.

As principais glândulas do sistema endócrino são:
• Hipotálamo e hipófise (no cérebro) — comandam as outras glândulas
• Tireoide (no pescoço) — controla o metabolismo
• Pâncreas — regula a glicose no sangue
• Suprarrenais (rins) — produzem cortisol e adrenalina
• Ovários e testículos — hormônios sexuais

Quando algum hormônio está em excesso ou em falta, o corpo dá sinais. Reconhecer esses sinais é parte importante do trabalho no balcão da farmácia.`,
    imagem: "/imagens/trilha_medicamentos.webp",
  },
  {
    id: "tireoide",
    emoji: "🦋",
    titulo: "Hormônios da Tireoide",
    texto: `A tireoide é uma glândula em forma de borboleta localizada no pescoço. Ela produz dois hormônios principais: T3 (triiodotironina) e T4 (tiroxina), que controlam o metabolismo do corpo inteiro.

A produção desses hormônios é regulada pelo TSH, hormônio produzido pela hipófise no cérebro.

Hipotireoidismo (T3 e T4 baixos):
• Cansaço extremo, sonolência
• Ganho de peso sem motivo
• Pele seca, cabelos quebradiços
• Sensação de frio o tempo todo
• Depressão e falta de memória
• Tratamento: reposição com levotiroxina (T4 sintético)

Hipertireoidismo (T3 e T4 altos):
• Perda de peso mesmo comendo bem
• Ansiedade, irritabilidade, insônia
• Coração acelerado (taquicardia)
• Mãos trêmulas, suor excessivo
• Sensação de calor constante
• Tratamento: medicamentos antitireoidianos ou iodo radioativo

No balcão: pergunte se o cliente faz exames regulares de TSH. Muitos descobrem alterações na tireoide por acaso!`,
    imagem: "/imagens/hero_pills.webp",
  },
  {
    id: "hormonios-sexuais",
    emoji: "⚧️",
    titulo: "Hormônios Sexuais",
    texto: `Os hormônios sexuais são responsáveis pelo desenvolvimento das características sexuais, pela reprodução e por diversas funções no organismo.

Estrogênio — principal hormônio feminino:
• Regula o ciclo menstrual
• Mantém a saúde dos ossos
• Protege o coração e os vasos sanguíneos
• Na menopausa, sua queda causa ondas de calor, insônia e ressecamento

Progesterona — prepara o útero para a gravidez:
• Regula o ciclo menstrual
• Fundamental para manter a gestação
• Desequilíbrio pode causar sangramentos irregulares

Testosterona — principal hormônio masculino:
• Produzida nos testículos (e em menor quantidade nos ovários)
• Responsável pela libido, massa muscular e disposição
• Com o envelhecimento, seus níveis caem gradualmente
• Baixa testosterona causa cansaço, falta de libido e perda de massa muscular

O farmacêutico pode orientar sobre reposição hormonal, sempre lembrando que é necessário acompanhamento médico.`,
    imagem: "/imagens/trilha_medicamentos.webp",
  },
  {
    id: "insulina-glucagon",
    emoji: "🩸",
    titulo: "Insulina e Glucagon",
    texto: `Pâncreas é a fábrica de dois hormônios essenciais para o controle da glicose no sangue: insulina e glucagon. Eles trabalham como uma gangorra.

Insulina — o hormônio que abre a porta:
• Produzida quando a glicose sobe (depois de comer)
• Permite que a glicose entre nas células para ser usada como energia
• Quando falta ou não funciona bem, a glicose fica acumulada no sangue — é o diabetes

Glucagon — o hormônio que libera reserva:
• Produzido quando a glicose cai (em jejum ou durante exercício)
• Estimula o fígado a liberar glicose armazenada
• Funciona como o "puxadinho de emergência" de energia

No diabetes Tipo 1, o pâncreas não produz insulina. No Tipo 2, o corpo produz, mas as células não respondem bem (resistência insulínica). Entender essa diferença é essencial para orientar o cliente no balcão.`,
    imagem: "/imagens/hero_pills.webp",
  },
  {
    id: "cortisol-estresse",
    emoji: "😰",
    titulo: "Cortisol e Estresse",
    texto: `O cortisol é conhecido como o "hormônio do estresse". Produzido pelas glândulas suprarrenais, ele prepara o corpo para situações de perigo — é o famoso mecanismo de "luta ou fuga".

Quando o cortisol funciona bem:
• Ajuda a acordar pela manhã (seus níveis são mais altos ao amanhecer)
• Fornece energia rápida em situações de perigo
• Reduz inflamações no corpo
• Regula o metabolismo

Quando o cortisol fica alto por muito tempo (estresse crônico):
• Ganho de peso, especialmente na barriga
• Insônia e cansaço excessivo
• Ansiedade e irritabilidade
• Pressão alta
• Queda de imunidade (pega resfriados com frequência)
• Aumento do risco de diabetes e doenças cardíacas

Dicas para reduzir o cortisol naturalmente:
• Dormir bem (7 a 9 horas por noite)
• Praticar exercícios moderados (caminhada, yoga)
• Reduzir cafeína e açúcar
• Reservar momentos de lazer e descanso

No balcão: clientes que buscam remédios para ansiedade ou insônia podem estar sofrendo os efeitos do cortisol alto. Uma conversa atenciosa pode ajudar.`,
    imagem: "/imagens/sleep_quality.webp",
  },
];

export default function HormoniosPage() {
  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
         HERO — COM VÍDEO DE FUNDO
         ════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-navy-800">
        {/* Fundo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-navy-700/80 via-navy-600/50 to-gold-500/20" />
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 pt-20 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="badge-orange inline-flex mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Sistema endócrino
            </div>

            <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              <span className="text-white">Hormônios</span>
              <br />
              <span className="text-white/70 font-light">Guia Fácil para Atendentes</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              Tudo que você precisa saber para entender, orientar e cuidar de quem chega ao balcão com{" "}
              <span className="text-white/80 font-medium">dúvidas sobre hormônios e tireoide</span>.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: "5", label: "tópicos" },
                { value: "Sistema", label: "endócrino" },
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
                  {t.emoji} {t.titulo.replace(/ —.*$/, "").replace(/\?$/, "")}
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
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xl dark:bg-orange-900/30">
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
                {topico.id === "o-que-sao" ? (
                  <HormoniosDiagram />
                ) : (
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={topico.imagem}
                      alt={`Ilustração sobre hormônios: ${topico.titulo}`}
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
         SEÇÃO: ATENDIMENTO NO BALCÃO + CURIOSIDADES
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-surface overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Card: Atendimento */}
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 dark:from-orange-900/10 dark:to-navy-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 text-lg">
                  🧑‍⚕️
                </span>
                <h3 className="text-sm font-bold text-navy-700 dark:text-white">Atendimento no balcão</h3>
              </div>
              <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
                <p>✅ <strong>Pergunte sobre medicamentos</strong> — reposição hormonal, levotiroxina, anticoncepcionais</p>
                <p>✅ <strong>Reforce exames regulares</strong> — TSH, T4, glicemia em jejum</p>
                <p>✅ <strong>Não interromper tratamento</strong> sem orientação médica</p>
                <p>✅ <strong>Fique atento a sintomas</strong> — cansaço, alteração de peso, mudanças de humor</p>
              </div>
            </div>

            {/* Card: Sabia que? */}
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 dark:from-orange-900/10 dark:to-navy-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 text-lg">
                  💡
                </span>
                <h3 className="text-sm font-bold text-navy-700 dark:text-white">Sabia que?</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                O hormônio do crescimento (GH) é produzido principalmente durante o sono profundo. 
                <strong className="text-orange-600 dark:text-orange-400"> Dormir bem</strong> é essencial para o equilíbrio hormonal do corpo inteiro!
              </p>
            </div>

            {/* Card: Curiosidade */}
            <div className="rounded-2xl border border-gold-100 bg-gradient-to-br from-gold-50 to-white p-6 dark:from-gold-900/10 dark:to-navy-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 text-lg">
                  🌿
                </span>
                <h3 className="text-sm font-bold text-navy-700 dark:text-white">Você sabia?</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A tireoide é uma das glândulas mais sensíveis do corpo. 
                <strong className="text-gold-600 dark:text-gold-400"> Estresse, dieta e até o clima</strong> podem influenciar seu funcionamento. 
                Por isso os exames de rotina são tão importantes!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         SEÇÃO: DICAS PRÁTICAS
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-surface-2 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="badge-green inline-flex">
              🧬 Equilíbrio hormonal
            </span>
            <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-navy-700 dark:text-white">
              Dicas para manter os hormônios em equilíbrio
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              Pequenas mudanças no dia a dia que fazem diferença na saúde hormonal
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                emoji: "😴",
                titulo: "Durma bem",
                texto: "7 a 9 horas de sono regulam cortisol, GH, hormônios da fome e muito mais.",
              },
              {
                emoji: "🥗",
                titulo: "Alimentação equilibrada",
                texto: "Comer proteínas, gorduras boas e carboidratos integrais ajuda na produção hormonal.",
              },
              {
                emoji: "🏃",
                titulo: "Exercício moderado",
                texto: "Atividade física regula insulina, cortisol e hormônios do bem-estar (endorfina).",
              },
              {
                emoji: "🧘",
                titulo: "Gerencie o estresse",
                texto: "Meditação, yoga e momentos de lazer reduzem o cortisol e equilibram o sistema endócrino.",
              },
              {
                emoji: "💧",
                titulo: "Hidrate-se",
                texto: "A água é essencial para o transporte dos hormônios pelo sangue.",
              },
              {
                emoji: "🩺",
                titulo: "Check-up regular",
                texto: "Exames de sangue periódicos detectam desequilíbrios hormonais antes dos sintomas aparecerem.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-300/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 text-2xl dark:from-orange-900/20 dark:to-orange-900/10">
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
            Hormônios em equilíbrio é saúde
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
