import Link from "next/link";
import type { Metadata } from "next";
import { trilhas, totalAulas } from "@/content/curriculo";
import { Botao, Card, Etiqueta, TituloSecao, DividerGlow } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { ProgressoTrilhaBadge } from "@/components/progresso-cliente";

export const metadata: Metadata = {
  title: "Trilhas",
  description:
    "Explore as quatro trilhas da formação, da perfumaria aos medicamentos e à carreira.",
};

// Paleta de gradientes laterais — uma cor distinta por trilha
const accentGradients = [
  "bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600",
  "bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600",
  "bg-gradient-to-b from-amber-400 via-orange-500 to-rose-600",
  "bg-gradient-to-b from-violet-400 via-purple-500 to-fuchsia-600",
];

export default function TrilhasPage() {
  const totalGeral = totalAulas();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <TituloSecao
        sobre="Currículo"
        icone="book"
        titulo="Trilhas da formação"
        descricao="Perfumaria primeiro, medicamentos depois, excelência operacional e carreira. Estude em microlições, do básico ao avançado."
      />

      {/* Contagem geral premium */}
      <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 rounded-2xl border border-border-strong/50 bg-surface-2/50 px-5 py-3 backdrop-blur-sm">
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand text-white shadow-sm">
            <Icon name="book" size={16} />
          </span>
          <span>{trilhas.length} {trilhas.length === 1 ? "trilha" : "trilhas"}</span>
        </span>
        <span className="hidden h-5 w-px bg-border-strong sm:block" />
        <span className="flex items-center gap-2 text-sm text-muted">
          <Icon name="play" size={16} className="text-subtle" />
          {totalGeral} {totalGeral === 1 ? "aula" : "aulas"}
        </span>
      </div>

      <DividerGlow className="my-8" />

      <div className="space-y-6">
        {trilhas.map((t, idx) => {
          const totalAulasTrilha = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
          const accent = accentGradients[idx % accentGradients.length];

          return (
            <Card
              key={t.id}
              variante="elevated"
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Faixa gradiente vertical na lateral esquerda */}
              <div
                className={`absolute left-0 top-0 h-full w-1.5 rounded-l-xl ${accent} opacity-80 group-hover:opacity-100 transition-opacity`}
                aria-hidden
              />

              <div className="flex flex-col gap-6 pl-5 md:flex-row md:items-center lg:flex-row lg:items-center">
                {/* Ícone e informações principais */}
                <div className="flex flex-1 gap-5">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl gradient-brand text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Icon name={t.icone as IconName} size={26} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
                        Trilha {t.numero}
                      </span>
                      <Etiqueta tom="neutral">{t.subtitulo}</Etiqueta>
                      <Etiqueta tom="neutral">{t.nivelFaixa}</Etiqueta>
                    </div>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {t.titulo}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {t.descricao}
                    </p>

                    {/* Badges de módulos e aulas */}
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-subtle ring-1 ring-border-strong/30">
                        <Icon name="book" size={14} />
                        {t.modulos.length} {t.modulos.length === 1 ? "módulo" : "módulos"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-subtle ring-1 ring-border-strong/30">
                        <Icon name="play" size={14} />
                        {totalAulasTrilha} {totalAulasTrilha === 1 ? "aula" : "aulas"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progresso e ação */}
                <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-3 lg:flex-col lg:items-end lg:gap-3">
                  <ProgressoTrilhaBadge trilhaId={t.id} />
                  <Botao
                    href={`/trilhas/${t.id}`}
                    variante="premium"
                    tamanho="md"
                    iconeFim="arrow"
                  >
                    Abrir trilha
                  </Botao>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
