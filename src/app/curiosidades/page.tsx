import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Curiosidades · Saúde e Bem-Estar",
  description:
    "Curiosidades sobre saúde, alimentação, pressão arterial, emagrecimento saudável e bem-estar — tudo em linguagem fácil e direta para o dia a dia no balcão da farmácia.",
  openGraph: {
    title: "Curiosidades · Saúde e Bem-Estar",
    description:
      "Dicas e curiosidades sobre saúde, emagrecimento, pressão arterial e alimentação — em linguagem popular.",
  },
};

const curiosidades = [
  {
    id: "emagrecimento-saudavel",
    titulo: "Emagrecimento Saudável — Sem Milagres",
    destaque: "Não existe remédio milagroso. O segredo é constância e equilíbrio.",
    cor: "from-green-500 to-green-600",
    badges: ["Saúde", "Alimentação", "Bem-Estar"],
    topicos: [
      {
        titulo: "🥗 Por que dietas radicais não funcionam?",
        subtitulo: "O efeito sanfona é real e faz mal à saúde",
        texto: `Toda dieta muito restritiva funciona no começo — você perde peso rápido, fica feliz... até voltar a comer normal. Aí o peso volta, muitas vezes maior que antes. Isso é o famoso "efeito sanfona".

O problema é que dietas muito severas ensinam seu corpo a ter medo da falta de comida. Quando você volta a comer normalmente, seu metabolismo está mais lento e seu corpo guarda cada caloria como reserva.

O segredo de verdade? Mudanças pequenas e permanentes. Trocar refrigerante por água. Comer mais salada no almoço. Caminhar 20 minutos por dia. Não precisa ser perfeito — precisa ser constante.

O farmacêutico pode ajudar: muitas vezes quem busca emagrecimento rápido também busca remédios na farmácia. A melhor orientação é sempre acompanhamento com nutricionista e médico.`,
        curiosidade: "Sabia que pular o café da manhã pode atrapalhar o emagrecimento? Ficar muitas horas sem comer faz o corpo entrar em 'modo de economia' e desacelerar o metabolismo.",
        imagem: "/pharmacy-counter.jpg",
      },
      {
        titulo: "🍎 Comer de tudo um pouco é a melhor dieta",
        subtitulo: "Equilíbrio, não restrição",
        texto: `A nutricionista não vai te mandar parar de comer pão, macarrão ou doce. O que faz diferença é a quantidade e a frequência.

A regra de ouro é simples:
• Metade do prato: verduras e legumes
• Um quarto: proteínas (frango, peixe, ovo, feijão)
• Um quarto: carboidratos (arroz integral, batata, macarrão)

E não precisa passar fome! Comer de 3 em 3 horas mantém o metabolismo acelerado e evita aquela compulsão à noite.

No balcão da farmácia, muita gente pergunta sobre shakes, suplementos e termogênicos. A orientação certa: suplemento só com acompanhamento profissional. Nada substitui comida de verdade.`,
        curiosidade: "Comer devagar faz diferença! O cérebro leva cerca de 20 minutos para receber o sinal de saciedade. Quem come rápido acaba comendo mais do que precisa.",
        imagem: "/health-professional.jpg",
      },
    ],
  },
  {
    id: "pressao-arterial",
    titulo: "Pressão Arterial — O Que Você Precisa Saber",
    destaque: "Pressão alta não dói, mas faz estrago. Saiba como orientar seus clientes.",
    cor: "from-orange-500 to-orange-600",
    badges: ["Coração", "Pressão", "Cuidado"],
    topicos: [
      {
        titulo: "🩺 Hipertensão: a assassina silenciosa",
        subtitulo: "Por que você pode ter pressão alta e nem saber",
        texto: `A hipertensão é chamada de "assassina silenciosa" por um motivo simples: ela não dá sintomas. Você pode estar com a pressão nas alturas e se sentir perfeitamente bem.

O problema é que, enquanto você não sente nada, a pressão alta vai danificando seus vasos sanguíneos, coração, rins e cérebro. Aí, quando os sintomas aparecem (dor de cabeça forte, visão embaçada, falta de ar), o estrago já está feito.

A Sociedade Brasileira de Cardiologia atualizou os limites em 2026:
• ✅ Pressão normal: abaixo de 130/80 mmHg
• ⚠️ Atenção: entre 130/80 e 139/89
• 🔴 Hipertensão: 140/90 ou mais

No balcão: sempre que alguém comprar remédio para pressão, pergunte se está fazendo acompanhamento médico regular.`,
        curiosidade: "O estresse faz a pressão subir na hora, mas o efeito do sal é pior a longo prazo. Reduzir 1 colher de chá de sal por dia já diminui a pressão em média 5 mmHg!",
        imagem: "/hero-dashboard.jpg",
      },
      {
        titulo: "🧂 Os segredos do sódio escondido",
        subtitulo: "Não é só o saleiro que tem sal",
        texto: `Muita gente pensa que controlar o sal é só não usar o saleiro à mesa. Mas o sódio está escondido em quase tudo que é industrializado:

• 🥫 Molhos prontos e temperos industrializados
• 🍞 Pães e bisnaguinhas
• 🧀 Queijos amarelos
• 🥓 Presunto, salame, salsicha
• 🥤 Refrigerantes (sim, têm sódio!)
• 🥫 Sopas de pacote
• 🍿 Salgadinhos e snacks

Dica de ouro: ensine seus clientes a ler o rótulo. Um alimento é considerado ALTO em sódio quando tem mais de 400 mg de sódio a cada 100 g.

E o potássio é o melhor amigo de quem tem pressão alta! Banana, abacate, feijão, batata-doce e espinafre são ricos em potássio e ajudam a equilibrar o sódio no corpo.`,
        curiosidade: "O brasileiro consome em média 10g de sal por dia — o dobro do recomendado pela OMS, que é no máximo 5g (1 colher de chá).",
        imagem: "/pharmacy-counter.jpg",
      },
    ],
  },
  {
    id: "saude-coracao",
    titulo: "Saúde do Coração — Dicas que Salvam Vidas",
    destaque: "Pequenas mudanças no dia a dia protegem o coração por muitos anos.",
    cor: "from-green-400 to-green-500",
    badges: ["Coração", "Prevenção", "Estilo de Vida"],
    topicos: [
      {
        titulo: "🏃 30 minutos por dia mudam tudo",
        subtitulo: "O melhor remédio para o coração é o movimento",
        texto: `Não precisa virar atleta olímpico. Trinta minutos de caminhada por dia, cinco vezes por semana, reduzem em até 40% o risco de infarto.

O segredo é encontrar uma atividade que você goste:
• 🚶‍♂️ Caminhar no parque
• 🚴‍♂️ Andar de bicicleta
• 🏊‍♂️ Nadar
• 💃 Dançar
• 🧘‍♂️ Yoga ou alongamento

O importante é se mexer! O sedentarismo é um dos maiores fatores de risco para doenças do coração — tão grave quanto fumar.

No balcão: quando um cliente comprar remédio para colesterol ou pressão, pergunte se ele faz atividade física. Uma simples conversa pode motivar uma mudança de vida.`,
        curiosidade: "Ficar sentado por mais de 8 horas por dia aumenta o risco de doenças cardíacas em até 20%, mesmo para quem faz exercícios. Levante-se a cada hora!",
        imagem: "/health-professional.jpg",
      },
      {
        titulo: "🍔 Colesterol: os mitos e verdades",
        subtitulo: "Nem todo colesterol é vilão",
        texto: `Muita gente acha que colesterol é uma coisa só — e que é tudo ruim. Mas não é bem assim.

• ❤️ Colesterol bom (HDL): ajuda a limpar as artérias. Quanto mais alto, melhor.
• 💔 Colesterol ruim (LDL): entope as artérias. Quanto mais baixo, melhor.
• 🧈 Triglicérides: gordura no sangue, aumenta com excesso de açúcar e carboidratos.

O ovo, por exemplo, foi injustiçado por anos. Hoje a ciência sabe que o ovo não aumenta o colesterol ruim — desde que consumido com moderação (até 1 por dia está ótimo).

O que realmente faz mal: gordura trans (presente em bolachas recheadas, sorvetes, margarina) e excesso de açúcar.

Dica importante: colesterol alto, na maioria das vezes, não dá sintomas. Por isso os exames de rotina são tão importantes.`,
        curiosidade: "O ovo tem fama de vilão, mas é um dos alimentos mais completos: rico em proteínas, vitaminas e colesterol bom. Um ovo por dia não aumenta o risco cardíaco em pessoas saudáveis.",
        imagem: "/business-meeting.jpg",
      },
    ],
  },
];

export default function CuriosidadesPage() {
  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
         HERO
         ════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-forest-500">
        <Image
          src="/hero-matricula.jpg"
          alt=""
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-forest-500/80 via-forest-600/50 to-green-500/20 animate-pulse-slow" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="badge-orange inline-flex mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Conhecimento que transforma
            </div>

            <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              <span className="text-white">Curiosidades</span>
              <br />
              <span className="text-white/70 font-light">que fazem diferença</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              Dicas de saúde, alimentação, pressão arterial e bem-estar — tudo em{" "}
              <span className="text-white/80 font-medium">linguagem simples</span>
              {" "}para você usar no dia a dia do balcão.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: "3", label: "blocos" },
                { value: "Saúde", label: "em foco" },
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

            <div className="mt-10 flex flex-wrap gap-3">
              {curiosidades.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all"
                >
                  {c.titulo.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">Explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
         CONTEÚDO
         ════════════════════════════════════════════ */}
      {curiosidades.map((bloco, idx) => (
        <section
          key={bloco.id}
          id={bloco.id}
          className={`relative py-20 sm:py-28 ${idx % 2 === 0 ? "bg-surface" : "bg-surface-2"}`}
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {bloco.badges.map((b) => (
                  <span key={b} className="badge-green">{b}</span>
                ))}
              </div>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-forest-700 dark:text-white">
                {bloco.titulo}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-orange-600 font-medium dark:text-orange-400">
                {bloco.destaque}
              </p>
              <div className="divider-orange mt-5" />
            </div>

            <div className="mt-12 space-y-16">
              {bloco.topicos.map((topico, tIdx) => (
                <article key={tIdx} className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-start">
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold text-forest-700 dark:text-white/90">
                      {topico.titulo}
                    </h3>
                    <p className="text-sm text-subtle mt-1 mb-5">{topico.subtitulo}</p>

                    <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted">
                      {topico.texto.split("\n\n").map((par, pIdx) => (
                        <p key={pIdx}>{par}</p>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50 to-white p-5 dark:from-orange-900/10 dark:to-forest-800">
                      <div className="flex gap-3">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[16px] dark:bg-orange-900/30">
                          💡
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-orange-500 mb-1">
                            Sabia que?
                          </p>
                          <p className="text-sm leading-relaxed text-muted dark:text-white/70">
                            {topico.curiosidade}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
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
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ════════════════════════════════════════════
         SEÇÃO O FARMACÊUTICO RECOMENDA
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-surface overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 dark:from-green-900/10 dark:to-forest-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 text-lg">
                  🧑‍⚕️
                </span>
                <h3 className="text-sm font-bold text-forest-700 dark:text-white">O farmacêutico recomenda</h3>
              </div>
              <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
                <p>✅ <strong>Nunca automedique</strong> — remédio errado pode mascarar sintomas e piorar o problema</p>
                <p>✅ <strong>Mude um hábito por vez</strong> — comece trocando refrigerante por água, depois inclua uma caminhada</p>
                <p>✅ <strong>Leia os rótulos</strong> — o sódio, o açúcar e a gordura estão escondidos nos industrializados</p>
                <p>✅ <strong>Consulte regularmente</strong> — check-ups anuais salvam vidas</p>
              </div>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 dark:from-orange-900/10 dark:to-forest-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 text-lg">
                  💡
                </span>
                <h3 className="text-sm font-bold text-forest-700 dark:text-white">Sabia que?</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Dormir bem é tão importante quanto comer bem para a saúde do coração. 
                <strong className="text-orange-600 dark:text-orange-400"> 7 a 9 horas de sono</strong> por noite regulam 
                hormônios, controlam a pressão e ajudam a manter o peso.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 dark:from-green-900/10 dark:to-forest-500">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 text-lg">
                  🌿
                </span>
                <h3 className="text-sm font-bold text-forest-700 dark:text-white">Cuidado que transforma</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                No balcão da farmácia, você é a primeira pessoa que o cliente encontra. 
                Um atendente bem informado pode fazer a diferença entre um cliente que passa 
                despercebido e um que <strong className="text-green-600">recebe o cuidado que merece</strong>.
              </p>
            </div>
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
            Conhecimento que salva vidas
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/50">
            Novos conteúdos toda semana — saúde, bem-estar e dicas práticas para o dia a dia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-rd-white text-base px-8 py-3">
              Voltar ao início
            </Link>
            <Link href="/pressao-arterial" className="btn-rd-outline text-base px-8 py-3">
              Guia de Pressão Arterial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
