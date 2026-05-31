import Link from "next/link";
import type { Metadata } from "next";
import { trilhas } from "@/content/curriculo";
import { Card, Etiqueta, TituloSecao } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { ProgressoTrilhaBadge } from "@/components/progresso-cliente";

export const metadata: Metadata = {
  title: "Trilhas",
  description:
    "Explore as quatro trilhas da formação, da perfumaria aos medicamentos e à carreira.",
};

export default function TrilhasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <TituloSecao
        sobre="Currículo"
        icone="book"
        titulo="Trilhas da formação"
        descricao="Perfumaria primeiro, medicamentos depois, excelência operacional e carreira. Estude em microlições, do básico ao avançado."
      />

      <div className="mt-10 space-y-6">
        {trilhas.map((t) => {
          const totalAulasTrilha = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
          return (
            <Card key={t.id} className="overflow-hidden">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="flex flex-1 gap-4">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl gradient-brand text-white">
                    <Icon name={t.icone as IconName} size={26} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-brand-600">
                        Trilha {t.numero}
                      </span>
                      <Etiqueta tom="neutral">{t.subtitulo}</Etiqueta>
                      <Etiqueta tom="neutral">{t.nivelFaixa}</Etiqueta>
                    </div>
                    <h3 className="mt-1 text-xl font-bold">{t.titulo}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-muted">{t.descricao}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-subtle">
                      <span className="flex items-center gap-1">
                        <Icon name="book" size={14} /> {t.modulos.length} módulos
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="play" size={14} /> {totalAulasTrilha} aulas
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                  <ProgressoTrilhaBadge trilhaId={t.id} />
                  <Link
                    href={`/trilhas/${t.id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl gradient-brand px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                  >
                    Abrir trilha <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
