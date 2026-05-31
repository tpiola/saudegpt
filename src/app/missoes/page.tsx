import type { Metadata } from "next";
import { Simulador } from "@/components/simulador";
import { TituloSecao } from "@/components/ui";

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
      <div className="mt-8">
        <Simulador />
      </div>
    </div>
  );
}
