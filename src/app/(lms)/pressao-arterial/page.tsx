import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pressão Arterial · Guia Fácil",
  description:
    "Tudo que você precisa saber sobre pressão arterial — o que é, por que sobe, por que desce, e como o farmacêutico pode ajudar no cuidado. Linguagem simples e direta.",
  openGraph: {
    title: "Pressão Arterial · Guia Fácil para Atendentes",
    description:
      "Entenda a pressão arterial de um jeito simples: causas, sintomas, dieta DASH e orientações que todo atendente de farmácia precisa saber.",
  },
};

const topicos = [
  {
    id: "o-que-e",
    emoji: "❤️",
    titulo: "O que é pressão arterial?",
    texto:
      "Pressão arterial é a força que o sangue faz nas paredes das artérias quando o coração bombeia. Pense numa mangueira de jardim: quando você aperta a saída, a água sai com mais força. É mais ou menos isso que acontece dentro do seu corpo.",
    imagem: "/pharmacy-counter.jpg",
  },
  {
    id: "por-que-sobe",
    emoji: "📈",
    titulo: "Por que a pressão sobe?",
    texto:
      "A pressão sobe quando o coração precisa fazer mais força para bombear o sangue. Os principais motivos são:",
    bullets: [
      "🥵 Estresse e ansiedade do dia a dia",
      "🧂 Sal em excesso na comida",
      "🛋️ Sedentarismo (falta de movimento)",
      "⚖️ Obesidade e sobrepeso",
      "🧬 Genética (histórico na família)",
      "🚬 Tabagismo e excesso de álcool",
    ],
    imagem: "/design-agency.jpg",
  },
  {
    id: "por-que-desce",
    emoji: "📉",
    titulo: "Por que a pressão desce?",
    texto:
      "Pressão baixa (hipotensão) acontece quando o sangue não chega com força suficiente nos órgãos. Os principais culpados:",
    bullets: [
      "💧 Desidratação (pouca água no corpo)",
      "☀️ Calor excessivo",
      "💊 Efeito de alguns medicamentos",
      "🩸 Anemia (falta de ferro no sangue)",
      "🍽️ Ficar muito tempo sem comer",
    ],
    imagem: "/health-professional.jpg",
  },
  {
    id: "sistolica-diastolica",
    emoji: "📊",
    titulo: "Pressão máxima e mínima — qual a diferença?",
    texto: `Quando o médico fala "12 por 8", ele está dizendo dois números:

• O primeiro (maior) é a pressão SISTÓLICA — é a força quando o coração BATE e empurra o sangue.
• O segundo (menor) é a pressão DIASTÓLICA — é a força quando o coração DESCANSA entre uma batida e outra.

Os dois são importantes! Um coração saudável precisa dos dois números dentro do limite.`,
    imagem: "/hero-dashboard.jpg",
  },
  {
    id: "limite-sbc",
    emoji: "🩺",
    titulo: "Novo limite SBC 2026 — o que mudou?",
    texto: `A Sociedade Brasileira de Cardiologia (SBC) atualizou as diretrizes em 2026. Agora:

✅ Pressão NORMAL: abaixo de 130/80 mmHg
⚠️ Atenção: entre 130/80 e 139/89
🔴 Hipertensão: acima de 140/90

Antes o limite era 140/90. Agora é 130/80. Isso significa que mais pessoas precisam de cuidado e acompanhamento — e o farmacêutico tem um papel fundamental nisso!`,
    imagem: "/hero-matricula.jpg",
  },
];

export default function PressaoArterialPage() {
  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
         HERO — COM VÍDEO DE FUNDO
         ════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-forest-500">
        {/* Vídeo de fundo */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-40"
            poster="/hero-dashboard.jpg"
          >
            <source
              src="https://assets.mixkit.co/videos/6562/6562-720.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-forest-500/80 via-forest-600/50 to-orange-500/20" />
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 pt-20 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="badge-orange inline-flex mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Saúde do coração
            </div>

            <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              <span className="text-white">Pressão Arterial</span>
              <br />
              <span className="text-white/70 font-light">Guia Fácil para Atendentes</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              Tudo que você precisa saber para entender, orientar e cuidar de quem chega ao balcão com{" "}
              <span className="text-white/80 font-medium">dúvidas sobre pressão alta ou baixa</span>.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: "5", label: "tópicos" },
                { value: "130/80", label: "novo limite SBC" },
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
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xl dark:bg-orange-900/30">
                    {topico.emoji}
                  </span>
                  <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] text-forest-700 dark:text-white">
                    {topico.titulo}
                  </h2>
                </div>

                <div className="text-sm sm:text-base leading-relaxed text-muted space-y-4">
                  {topico.texto.split("\n\n").map((par, pIdx) => (
                    <p key={pIdx}>{par}</p>
                  ))}
                </div>

                {topico.bullets && (
                  <div className="mt-5 space-y-2.5">
                    {topico.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-base shrink-0">{b.slice(0, 2)}</span>
                        <span className="text-sm sm:text-base leading-relaxed text-muted">
                          {b.slice(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Imagem — 2 colunas */}
              <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={topico.imagem}
                    alt=""
                    width={600}
                    height={450}
                    className="w-full h-auto aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ════════════════════════════════════════════
         SEÇÃO: DIETA DASH
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-forest-500 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="badge-orange inline-flex mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Alimentação que cura
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] text-white">
              🥗 Dieta DASH — o cardápio do coração
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              A dieta DASH (Approaches to Stop Hypertension) foi criada especialmente para quem
              tem pressão alta. Não é uma dieta da moda — é um estilo de vida com respaldo
              científico!
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-orange-400 mb-3">✅ Comer à vontade</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span>🥦</span> Verduras e legumes
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🍎</span> Frutas frescas
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🌾</span> Grãos integrais (aveia, quinoa, arroz integral)
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🥜</span> Castanhas e sementes
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🐟</span> Peixes e frango grelhado
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-orange-400 mb-3">❌ Evitar ao máximo</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span>🧂</span> Sal e alimentos industrializados
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🥓</span> Embutidos (linguiça, salsicha, presunto)
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🥤</span> Refrigerantes e bebidas açucaradas
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🍟</span> Frituras e fast-food
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🍺</span> Bebida alcoólica em excesso
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
                    Sabia que?
                  </p>
                  <p className="text-sm leading-relaxed text-white/70">
                    Reduzir o consumo de sal de 10g para 5g por dia pode diminuir a pressão
                    arterial em até 5 mmHg! Isso equivale a tirar uma colher de chá de sal da
                    sua alimentação diária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         SEÇÃO: O FARMACÊUTICO RECOMENDA + CURIOSIDADES
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-surface overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Card: Sabia que? */}
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 dark:from-orange-900/10 dark:to-forest-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 text-lg">
                  💡
                </span>
                <h3 className="text-sm font-bold text-forest-700 dark:text-white">Sabia que?</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A hipertensão é conhecida como <strong className="text-orange-600 dark:text-orange-400">"assassina silenciosa"</strong>{" "}
                porque muitas vezes não dá sintomas. Por isso medir a pressão regularmente é tão
                importante — mesmo quando você se sente bem!
              </p>
            </div>

            {/* Card: Farmacêutico */}
            <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 dark:from-green-900/10 dark:to-forest-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 text-lg">
                  🧑‍⚕️
                </span>
                <h3 className="text-sm font-bold text-forest-700 dark:text-white">O farmacêutico recomenda</h3>
              </div>
              <div className="mt-3 space-y-2">
                <p className="text-sm leading-relaxed text-muted">
                  <strong>⏰ Tomar o remédio sempre no mesmo horário</strong> — crie uma rotina!
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  <strong>🚫 Nunca parar o tratamento</strong> sem orientação médica
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  <strong>🍷 Evitar álcool e cafeína</strong> em excesso
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  <strong>🚶‍♂️ Praticar atividade física</strong> regular (30 min por dia)
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  <strong>📝 Medir a pressão em casa</strong> e anotar num diário
                </p>
              </div>
            </div>

            {/* Card: Curiosidade */}
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 dark:from-orange-900/10 dark:to-forest-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 text-lg">
                  🧠
                </span>
                <h3 className="text-sm font-bold text-forest-700 dark:text-white">Você sabia?</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                O potássio ajuda a equilibrar os efeitos do sódio no corpo. Comer alimentos ricos
                em potássio como <strong className="text-orange-600 dark:text-orange-400">banana, abacate, feijão e batata-doce</strong>{" "}
                pode ajudar a controlar a pressão naturalmente!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         SEÇÃO: ORIENTAÇÕES PRÁTICAS
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-surface-2 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="badge-green inline-flex">
              🩺 O que fazer no balcão
            </span>
            <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-forest-700 dark:text-white">
              Como o atendente pode ajudar
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              Pequenas atitudes que fazem toda diferença na vida de quem tem pressão alta
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                emoji: "📋",
                titulo: "Pergunte sobre medicamentos",
                texto: "O cliente está tomando remédio para pressão? Há quanto tempo? Já foi ao médico este ano?",
              },
              {
                emoji: "🧂",
                titulo: "Alerta sobre o sódio",
                texto: "Muitos clientes não sabem que temperos prontos e molhos industrializados têm sódio escondido.",
              },
              {
                emoji: "📝",
                titulo: "Incentive o diário da pressão",
                texto: "Anotar a pressão todos os dias ajuda o médico a ajustar o tratamento com mais precisão.",
              },
              {
                emoji: "💧",
                titulo: "Hidratação é tudo",
                texto: "Lembre: água ajuda a manter a pressão equilibrada. Incentive beber água ao longo do dia.",
              },
              {
                emoji: "🏃",
                titulo: "Movimento é remédio",
                texto: "30 minutinhos de caminhada por dia já fazem diferença na pressão arterial.",
              },
              {
                emoji: "🩺",
                titulo: "Oriente a voltar ao médico",
                texto: "Pressão controlada exige acompanhamento regular. Reforce a importância das consultas.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-green-300/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-2xl dark:from-green-900/20 dark:to-green-900/10">
                  {card.emoji}
                </span>
                <h3 className="mt-4 text-sm font-bold text-forest-700 dark:text-white">{card.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         CTA FINAL
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-forest-500 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-white">
            Cuidar da pressão é cuidar da vida
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
