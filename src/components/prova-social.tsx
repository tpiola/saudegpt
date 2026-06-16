"use client";

import { FadeUp } from "./fade-up";

// ─── Métrica honesta ──────────────────────────────────────────
function Metrica({
  valor,
  prefixo,
  sufixo,
  label,
}: {
  valor: number;
  prefixo?: string;
  sufixo?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10">
      <div className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl">
        {prefixo}{valor}{sufixo}
      </div>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
        {label}
      </p>
    </div>
  );
}

// ─── ProvaSocial (apenas métricas reais, sem depoimentos falsos) ──
export function ProvaSocial() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Nossa{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                plataforma
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Conteúdo completo criado pelo farmacêutico Thiago Piola — CRF/SP 58.519.
            </p>
          </div>
        </FadeUp>

        {/* ── Métricas reais da plataforma ── */}
        <div className="mt-6 sm:mt-10">
          <FadeUp delay={100}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
              <Metrica valor={39} sufixo="+" label="módulos de aprendizado" />
              <Metrica valor={159} sufixo="+" label="aulas práticas" />
              <Metrica valor={7} sufixo="" label="trilhas completas" />
              <Metrica valor={71} sufixo="+" label="microaulas de ética e vendas" />
            </div>
          </FadeUp>
        </div>

        {/* ── Aviso honesto ── */}
        <FadeUp delay={200}>
          <div className="mt-10 text-center">
            <div className="mx-auto inline-block rounded-xl border border-dashed border-white/10 px-6 py-4 text-sm text-muted-foreground">
              Depoimentos de alunos serão publicados em breve após validação.
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
