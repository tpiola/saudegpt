import type { Metadata } from "next";
import { indicadores } from "@/content/missoes";
import { Card, Etiqueta, TituloSecao } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Power BI para atendentes",
  description: "Aprenda a interpretar os indicadores da farmácia sem abandonar o foco em saúde.",
};

const tendencia = {
  up: { tom: "success" as const, icone: "trending" as const, rotulo: "Em alta" },
  down: { tom: "success" as const, icone: "trending" as const, rotulo: "Reduzindo (bom)" },
  flat: { tom: "neutral" as const, icone: "chart" as const, rotulo: "Estável" },
};

export default function IndicadoresPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <TituloSecao
        sobre="Hub de dados"
        icone="chart"
        titulo="Power BI para atendentes"
        descricao="Entender o negócio sem abandonar o foco em saúde. Saiba o que cada indicador conta — e como sua atuação no balcão o influencia."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indicadores.map((ind) => {
          const t = tendencia[ind.tendencia];
          return (
            <Card key={ind.id} className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-muted">{ind.nome}</span>
                <Etiqueta tom={t.tom}>
                  <Icon name={t.icone} size={12} className={ind.tendencia === "down" ? "-scale-y-100" : ""} />
                </Etiqueta>
              </div>
              <div className="mt-2 text-2xl font-extrabold text-brand-600">{ind.valorDemo}</div>
              <p className="mt-2 text-xs text-muted">{ind.descricao}</p>
              <p className="mt-3 rounded-lg bg-surface-2 px-3 py-2 text-xs text-subtle">
                <strong className="text-foreground">Como ler:</strong> {ind.comoLer}
              </p>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8">
        <div className="flex items-center gap-2">
          <Icon name="sparkles" size={18} className="text-brand-600" />
          <h2 className="text-lg font-bold">Por que dados importam para quem cuida</h2>
        </div>
        <p className="mt-3 text-sm text-muted">
          Indicadores como faturamento, ticket médio, conversão, mix, sazonalidade, curva ABC, ruptura, NPS, serviços e
          aderência terapêutica ligam saúde, negócio e planeta. O atendente que entende esses números percebe onde o
          cuidado pode melhorar: menos ruptura significa não faltar o medicamento do paciente; maior aderência significa
          tratamento que de fato funciona.
        </p>
      </Card>
    </div>
  );
}
