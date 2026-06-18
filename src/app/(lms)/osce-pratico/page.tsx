import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSCE Prático — Simulação de Exame Clínico",
  description:
    "Simulação de OSCE (Exame Clínico Objetivo Estruturado) para atendentes de farmácia. Pratique estações com cenários reais de balcão e receba feedback detalhado.",
};

export default function OscePraticoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-xs font-medium text-gold-600 dark:text-gold-400">
          Prova prática
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          OSCE Prático
        </h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Simulação completa de Exame Clínico Objetivo Estruturado (OSCE) para
          atendentes de farmácia. Teste suas habilidades em estações com
          cenários reais de balcão, receba feedback por critério e acompanhe sua
          evolução.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">O que é OSCE?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            OSCE (Exame Clínico Objetivo Estruturado) é um método de avaliação
            no qual o aluno passa por estações com cenários padronizados,
            demonstrando habilidades clínicas, de comunicação e de tomada de
            decisão.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">Para quem é?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ideal para atendentes de farmácia que desejam se preparar para
            situações reais de balcão, desde o acolhimento inicial até o
            encaminhamento ao farmacêutico.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">Como funciona?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cada estação apresenta um cenário com tempo limite. Você escolhe a
            melhor conduta entre as opções apresentadas. Ao final, recebe um
            relatório detalhado com notas por critério.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">Critérios avaliados</h2>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>✅ Triagem e acolhimento</li>
            <li>✅ Segurança na dispensação</li>
            <li>✅ Ética e sigilo profissional</li>
            <li>✅ Encaminhamento adequado</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-gold-50 to-white p-6 border border-gold-200/50 dark:from-gold-900/10 dark:to-navy-800">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Acesse a simulação completa na{" "}
          <a
            href="/osce"
            className="font-medium text-gold-600 hover:text-gold-700 dark:text-gold-400"
          >
            página do OSCE digital
          </a>{" "}
          e pratique com três estações reais de balcão.
        </p>
      </div>
    </div>
  );
}
