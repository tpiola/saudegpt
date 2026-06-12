import type { Metadata } from "next";
import Image from "next/image";
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
      {/* Hero */}
      <div className="relative mb-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src="/imagens/hero_brain_model.png"
            alt="Balcão de farmácia com atendente organizando o expediente"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/85 via-midnight-900/60 to-transparent" />
        </div>
        <div className="relative px-6 py-14 sm:px-10 sm:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
            <Icon name="clock" size={12} /> Operação e formação
          </span>
          <h1 className="mt-4 max-w-xl text-2xl font-black text-white sm:text-3xl">
            {comandoDiarioMeta.titulo}
          </h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
            {comandoDiarioMeta.subtitulo}
          </p>
        </div>
      </div>

      <p className="mb-6 text-muted">{comandoDiarioMeta.descricao}</p>

      <Card className="mt-8 border-l-4 border-l-green-500">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
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
