import type { Metadata } from "next";
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
      <TituloSecao
        sobre="Simulador de balcão"
        icone="target"
        titulo="Missões de atendimento"
        descricao="Escolha a melhor conduta para cada cliente. A pontuação valoriza triagem, segurança, linguagem, ética, cross-sell útil e encaminhamento correto."
      />

      {/* Cards de progresso de missões */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card className="p-5 border-l-4 border-l-green-400">
          <div className="text-center">
            <span className="text-2xl">🎯</span>
            <h3 className="mt-2 text-sm font-bold">Missões disponíveis</h3>
            <p className="mt-1 text-2xl font-bold text-green-600 dark:text-green-400">8</p>
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
            <p className="mt-1 text-2xl font-bold text-forest-500">✓</p>
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
