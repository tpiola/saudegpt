import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Curiosidades · Setor Farmacêutico",
  description:
    "Atualizações, curiosidades científicas e diretrizes clínicas do setor farmacêutico — medicamentos, perfumaria, saúde, beleza e bem-estar.",
  openGraph: {
    title: "Curiosidades · Setor Farmacêutico",
    description:
      "Atualizações, curiosidades científicas e diretrizes clínicas — medicamentos, perfumaria, saúde, beleza e bem-estar.",
  },
};

const curiosidades = [
  {
    id: "inalatorios",
    titulo: "Dispositivos Inalatórios e a Fisiopatologia Respiratória",
    destaque: "A eficácia clínica está ligada à técnica de administração — não ao dispositivo.",
    cor: "from-green-500 to-green-600",
    badges: ["Medicamentos", "Inaloterapia", "Asma e DPOC"],
    topicos: [
      {
        titulo: "1.1 — A Falácia do Teste de Flutuação (Float Test)",
        subtitulo: "Por que colocar o inalador na água pode matar",
        texto: `Historicamente, pacientes eram instruídos a colocar o frasco de seus inaladores dosimetrados (MDI) em um recipiente com água para estimar o volume residual. A evidência atual condena categoricamente essa prática.

A transição dos propelentes CFC para os HFA (hidrofluoralcanos), impulsionada pelo Protocolo de Montreal, alterou drasticamente a densidade física, a formulação farmacêutica e a dinâmica termodinâmica dos frascos. Inaladores modernos apresentam padrões de flutuação erráticos: alguns flutuam mesmo cheios, outros afundam mesmo vazios.

Além da imprecisão, a imersão em água introduz umidade no micro-orifício da válvula dosadora, causando cristalização e obstrução irreversível. Isso resulta em subdosagem ou falha completa durante uma crise de broncoespasmo.

A diretriz clínica absoluta: utilize dispositivos com contadores de dose integrados ou registre manualmente o número de acionamentos.`,
        curiosidade: "O propelente HFA não apenas salvou a camada de ozônio, mas também permitiu que a nuvem de aerossol saísse do inalador de forma muito mais lenta e quente que o antigo CFC. Isso reduziu o 'efeito freon' — o susto do jato gelado que fazia o paciente parar de respirar no meio da dose.",
        imagem: "/pharmacy-hero.jpg",
      },
      {
        titulo: "1.2 — Imunossupressão Local: Corticosteroides e Higiene Oral",
        subtitulo: "O sapinho que vem do inalador",
        texto: `A deposição orofaríngea de corticosteroides inalatórios (fluticasona, budesonida, beclometasona) é inevitável, especialmente em MDIs sem espaçadores. Os corticosteroides inibem a transcrição de genes pró-inflamatórios e reduzem a atividade fagocitária dos macrófagos na mucosa oral.

Esta imunossupressão quebra a homeostase do microbioma oral, permitindo a proliferação do fungo Candida albicans — resultando em candidíase orofaríngea (sapinho) e disfonia (rouquidão severa) por miopatia reversível das cordas vocais.

Profilaxia mandatória: enxaguar a boca com água abundante, gargarejar e cuspir imediatamente após a inalação. A deglutição da água é contraindicada — promove absorção sistêmica do corticoide, aumentando riscos de supressão do eixo HPA.`,
        curiosidade: "O simples ato de enxaguar a boca após o uso reduz em até 70% a incidência de candidíase orofaríngea em pacientes que usam corticoide inalatório diariamente.",
        imagem: "/health-professional.jpg",
      },
      {
        titulo: "1.3 — DPI vs MDI vs Nebulização",
        subtitulo: "Cada dispositivo exige uma biomecânica respiratória específica",
        texto: `A arquitetura de engenharia do dispositivo dita o perfil respiratório exigido do paciente:

• MDI (Aerossol dosimetrado): Requer coordenação mão-respiração perfeita. A liberação do jato deve coincidir com o início de uma inspiração lenta e profunda (30L/min). O uso de espaçadores elimina a necessidade de coordenação e reduz a deposição orofaríngea em até 80%.

• DPI (Inalador de pó seco): Exige fluxo inspiratório turbulento e força de sucção para desagregar as partículas do fármaco do carrier de lactose. Fluxos abaixo de 30L/min resultam em falha terapêutica — comum em idosos com DPOC avançada.

• Nebulizadores: indicados para pacientes que não conseguem usar MDI ou DPI (crianças, idosos debilitados, crises agudas). A desvantagem é o tempo de administração (10-15 min) e a necessidade de manutenção rigorosa do equipamento.`,
        curiosidade: "Sabia que o tamanho ideal das partículas para atingir os bronquíolos é entre 1 e 5 micrômetros? Partículas maiores que 5µm ficam na garganta, e menores que 0.5µm são expiradas sem se depositar — literalmente 'vão com o vento'.",
        imagem: "/business-meeting.jpg",
      },
    ],
  },
  {
    id: "anvisa-novidades",
    titulo: "Atualizações Regulatórias ANVISA",
    destaque: "As novas regras que todo profissional de farmácia precisa conhecer.",
    cor: "from-orange-500 to-orange-600",
    badges: ["ANVISA", "Legislação", "Segurança Sanitária"],
    topicos: [
      {
        titulo: "Nova RDC de Antimicrobianos",
        subtitulo: "Controle reforçado na dispensação",
        texto: `A ANVISA publicou atualizações importantes para o controle de antimicrobianos no Brasil. As novas regras exigem:

• Receita digital validada por CRM/CRF
• Registro eletrônico obrigatório de cada dispensação
• Notificação imediata de suspeitas de resistência microbiana
• Validade máxima da receita: 5 dias corridos
• Quantidade limitada ao tratamento padrão (7-14 dias)

O farmacêutico é o gatekeeper — responsável por verificar a adequação da prescrição antes da dispensação.`,
        curiosidade: "O Brasil é um dos países que mais consome antimicrobianos no mundo, e a resistência bacteriana já é considerada uma das 10 maiores ameaças à saúde global pela OMS.",
        imagem: "/pharmacy-counter.jpg",
      },
    ],
  },
  {
    id: "perfumaria-saude",
    titulo: "Perfumaria, Beleza e Bem-Estar",
    destaque: "Cosmetologia clínica e o cuidado com a pele — muito além do perfume.",
    cor: "from-green-400 to-green-500",
    badges: ["Perfumaria", "Cosmetologia", "Bem-Estar"],
    topicos: [
      {
        titulo: "Fotoproteção: Muito Além do FPS",
        subtitulo: "Entendendo a proteção solar de verdade",
        texto: `O FPS (Fator de Proteção Solar) mede apenas a proteção contra radiação UVB — responsável por queimaduras. Mas os danos à pele vão muito além:

• UVA: penetra profundamente, causa fotoenvelhecimento e câncer
• Luz visível/azul: emitida por telas, contribui para hiperpigmentação
• Infravermelho: gera radicais livres e acelera o envelhecimento

Um bom protetor solar deve oferecer proteção de amplo espectro (UVA + UVB + luz visível). O PPD (Persistent Pigment Darkening) mede a proteção UVA — ideal acima de 16.

Curiosidade: protetores com cor oferecem proteção adicional contra luz visível e azul, sendo superiores aos incolores para prevenção de manchas.`,
        curiosidade: "O filtro solar foi inventado em 1938 pelo químico suíço Franz Greiter, após ele sofrer uma queimadura grave escalando o Monte Piz Buin. O nome 'Piz Buin' virou marca de protetor solar!",
        imagem: "/trilha-perfumaria.jpg",
      },
      {
        titulo: "A Ciência dos Ativos Cosméticos",
        subtitulo: "O que realmente funciona na pele",
        texto: `A cosmetologia clínica avançou muito nos últimos anos. Conheça os ativos com maior respaldo científico:

• Vitamina C (L-ácido ascórbico): Antioxidante potente, estimula colágeno, clareia manchas. Concentração ideal: 10-20%, pH < 3.5.
• Retinoides: Estimulam renovação celular e colágeno. Tretinoína é padrão ouro, mas retinaldeído é mais tolerável para peles sensíveis.
• Ácido Hialurônico: Hidratação profunda. Molécula de baixo peso molecular penetra mais, mas também causa mais inflamação.
• Niacinamida (Vitamina B3): Regula oleosidade, fortalece barreira, reduz poros. 2-5% é eficaz sem irritar.

Atenção: a ordem de aplicação importa — do mais líquido ao mais denso. E protetor solar é SEMPRE o último passo.`,
        curiosidade: "A pele é o maior órgão do corpo humano, pesando em média 4 kg em um adulto. Ela se renova completamente a cada 28 dias — o que significa que você literalmente 'troca de pele' uma vez por mês.",
        imagem: "/trilha-encantamento.jpg",
      },
    ],
  },
];

export default function CuriosidadesPage() {
  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
         HERO — CINEMATOGRÁFICO COM VÍDEO DE FUNDO
         ════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-forest-500">
        {/* Background image with cinematic overlay */}
        <Image
          src="/hero-matricula.jpg"
          alt=""
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-forest-500/80 via-forest-600/50 to-green-500/20 animate-pulse-slow" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 pt-20 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="badge-orange inline-flex mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Conhecimento que transforma
            </div>

            <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              <span className="text-white">Curiosidades</span>
              <br />
              <span className="text-white/70 font-light">do Setor Farmacêutico</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              Atualizações clínicas, diretrizes baseadas em evidências e curiosidades científicas — 
              de medicamentos a perfumaria, saúde, beleza e{" "}
              <span className="text-white/80 font-medium">bem-estar</span>.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: curiosidades.length.toString(), label: "blocos" },
                { value: "3+", label: "temas" },
                { value: "Baseada", label: "em evidências" },
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">Explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
         CONTEÚDO CURIOSIDADES
         ════════════════════════════════════════════ */}
      {curiosidades.map((bloco, idx) => (
        <section
          key={bloco.id}
          id={bloco.id}
          className={`relative py-20 sm:py-28 ${idx % 2 === 0 ? "bg-surface" : "bg-surface-2"}`}
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            {/* Cabeçalho do bloco */}
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

            {/* Tópicos */}
            <div className="mt-12 space-y-16">
              {bloco.topicos.map((topico, tIdx) => (
                <article key={tIdx} className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-start">
                  {/* Texto — 3 colunas */}
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

                    {/* Card de curiosidade */}
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

                  {/* Imagem — 2 colunas */}
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
         CTA FINAL
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-forest-500 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-white">
            Acompanhe as novidades do setor
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/50">
            Novos conteúdos toda semana — de diretrizes ANVISA a cosmetologia clínica e bem-estar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-rd-white text-base px-8 py-3">
              Voltar ao início
            </Link>
            <Link href="/trilhas" className="btn-rd-outline text-base px-8 py-3">
              Ver trilhas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
