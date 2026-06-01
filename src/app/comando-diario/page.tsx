import type { Metadata } from "next";
import { comandoDiarioMeta } from "@/content/comando-diario";
import { ComandoDiarioChecklist } from "@/components/comando-diario-checklist";
import { Card, Etiqueta } from "@/components/ui";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Comando diário",
  description: comandoDiarioMeta.descricao,
};

export default function ComandoDiarioPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Etiqueta tom="brand">
        <Icon name="clock" size={14} /> Operação e formação
      </Etiqueta>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {comandoDiarioMeta.titulo}
      </h1>
      <p className="mt-2 text-lg text-muted">{comandoDiarioMeta.subtitulo}</p>
      <p className="mt-3 text-muted">{comandoDiarioMeta.descricao}</p>

      <Card className="mt-8 border-l-4 border-l-brand-500">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl gradient-brand text-white">
            <Icon name="star" size={20} />
          </span>
          <div className="text-sm text-muted">
            <strong className="text-foreground">Mandala em ação:</strong> cuidar de gente no balcão,
            executar com foco na rotina e construir o futuro com formação diária. Marque os itens ao
            longo do turno; o progresso é salvo neste dispositivo e reinicia a cada novo dia.
          </div>
        </div>
      </Card>

      <div className="mt-10">
        <ComandoDiarioChecklist />
      </div>

      <p className="mt-12 text-center text-xs text-subtle">{site.assinatura}</p>
    </div>
  );
}
