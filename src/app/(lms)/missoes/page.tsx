import type { Metadata } from "next";
import Image from "next/image";
import { Simulador } from "@/components/simulador";
import { TituloSecao, Card } from "@/components/ui";
import { MissoesSemanal } from "@/components/missoes-semanal";

export const metadata: Metadata = {
  title: "Missões e simulador de balcão",
  description:
    "Casos reais de atendimento pontuados por triagem, segurança, ética e encaminhamento.",
};

export default function MissoesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="relative mb-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src="/imagens/trilha_encantamento.webp"
            alt="Cliente sendo atendido no balcão da farmácia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/85 via-midnight-900/60 to-transparent" />
        </div>
        <div className="relative px-6 py-14 sm:px-10 sm:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
            Simulador de balcão
          </span>
          <h1 className="mt-4 max-w-xl text-2xl font-black text-white sm:text-3xl">
            Missões de atendimento
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
            Escolha a melhor conduta para cada cliente. A pontuação valoriza triagem, segurança, linguagem, ética, cross-sell útil e encaminhamento correto.
          </p>
        </div>
      </div>

      {/* Cards de progresso de missões */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card className="p-5 border-l-4 border-l-green-400">
          <div className="text-center">
            <span className="text-2xl">🎯</span>
            <h3 className="mt-2 text-sm font-bold">Missões disponíveis</h3>
            <p className="mt-1 text-2xl font-bold text-gold-600 dark:text-gold-400">8</p>
            <p className="text-xs text-subtle">casos reais de balcão</p>
          </div>
        </Card>
        <Card className="p-5 border-l-4 border-l-orange-400">
          <div className="text-center">
            <span className="text-2xl">⭐</span>
            <h3 className="mt-2 text-sm font-bold">Níveis de dificuldade</h3>
            <p className="mt-1 text-2xl font-bold text-orange-500">3</p>
            <p className="text-xs text-subtle">iniciante ao avançado</p>
          </div>
        </Card>
        <Card className="p-5 border-l-4 border-l-forest-400">
          <div className="text-center">
            <span className="text-2xl">💡</span>
            <h3 className="mt-2 text-sm font-bold">Feedback imediato</h3>
            <p className="mt-1 text-2xl font-bold text-navy-500">✓</p>
            <p className="text-xs text-subtle">aprenda com cada resposta</p>
          </div>
        </Card>
      </div>

      {/* Missão da semana */}
      <MissoesSemanal />

      <div className="mt-8">
        <Simulador />
      </div>
    </div>
  );
}
