import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulas — Consulta de Bulas de Medicamentos",
  description:
    "Consulte bulas de medicamentos de forma rápida e prática. Tire dúvidas sobre indicações, contraindicações, posologia e reações adversas diretamente na plataforma SaúdeGPT.",
};

export default function BulasPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-600 dark:text-green-400">
          Consulta rápida
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Bulas de Medicamentos
        </h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Consulte bulas de medicamentos diretamente na plataforma. Informações
          baseadas em fontes oficiais (ANVISA, bula original do fabricante) para
          apoiar sua prática diária no balcão da farmácia.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">📋 O que você encontra</h2>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Indicações e contraindicações</li>
            <li>Posologia e modo de usar</li>
            <li>Reações adversas comuns</li>
            <li>Interações medicamentosas</li>
            <li>Grupos de risco (gestantes, idosos, crianças)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">🔍 Como usar</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Digite o nome do medicamento desejado e consulte a bula completa.
            Use o assistente inteligente para tirar dúvidas sobre interações e
            orientações ao paciente.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-green-50 to-white p-6 border border-green-200/50 dark:from-green-900/10 dark:to-navy-800">
        <h2 className="text-base font-bold">⚠️ Importante</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          A consulta a bulas é uma ferramenta de apoio. A dispensação segura
          deve sempre considerar a avaliação do farmacêutico responsável. Em
          caso de dúvida, consulte o profissional farmacêutico.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Acesse também a{" "}
          <a
            href="/bulas-receitas"
            className="font-medium text-green-600 hover:text-green-700 dark:text-green-400"
          >
            página completa de bulas e receitas
          </a>{" "}
          na área do aluno.
        </p>
      </div>
    </div>
  );
}
