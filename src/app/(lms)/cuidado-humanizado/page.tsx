import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuidado Humanizado — Atendimento com Empatia",
  description:
    "Aprenda sobre cuidado humanizado no atendimento de farmácia: escuta ativa, empatia, acolhimento e comunicação não-violenta aplicados ao dia a dia do balcão.",
};

export default function CuidadoHumanizadoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1.5 text-xs font-medium text-pink-600 dark:text-pink-400">
          Gente que cuida de gente
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Cuidado Humanizado
        </h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          O cuidado humanizado é o coração da profissão farmacêutica. Mais do
          que entregar medicamentos, o atendente de farmácia acolhe, orienta e
          cuida de pessoas em momentos de vulnerabilidade.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">🤝 Escuta ativa</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ouvir com atenção é o primeiro passo para um atendimento de
            qualidade. A escuta ativa permite identificar as reais necessidades
            do cliente e oferecer a melhor orientação.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">💚 Empatia no balcão</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Colocar-se no lugar do outro transforma a experiência do cliente.
            Um atendente empático cria vínculos de confiança e fideliza o
            paciente à farmácia.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">🗣️ Comunicação não-violenta</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A forma como nos comunicamos faz toda diferença. Use linguagem
            clara, respeitosa e acolhedora — especialmente com clientes
            ansiosos, idosos ou em situação de dor.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">🌟 Acolhimento</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Um sorriso, um olhar nos olhos, uma palavra de conforto. O
            acolhimento é o que diferencia uma farmácia comum de uma farmácia
            que cuida de verdade.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white p-6 border border-pink-200/50 dark:from-pink-900/10 dark:to-navy-800">
        <h2 className="text-base font-bold">📖 Na prática</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          O cuidado humanizado está presente em todas as trilhas da SaúdeGPT.
          Da perfumaria aos medicamentos, passando pela excelência operacional
          e pelo encantamento do cliente — cada módulo reforça a importância de
          tratar cada pessoa com dignidade e respeito.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Explore as{" "}
          <a
            href="/trilhas"
            className="font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400"
          >
            trilhas de formação
          </a>{" "}
          e descubra como o cuidado humanizado transforma carreiras.
        </p>
      </div>
    </div>
  );
}
