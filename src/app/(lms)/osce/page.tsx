import type { Metadata } from "next";
import { OsceSimulador } from "@/components/osce-simulador";
import { TituloSecao } from "@/components/ui";

export const metadata: Metadata = {
  title: "OSCE digital — Simulação de balcão",
  description:
    "Simulação estruturada de atendimento no balcão com 3 estações, timer de 2 min por estação e rubrica de avaliação por critérios.",
};

export default function OscePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <TituloSecao
        sobre="Prova prática"
        icone="user"
        titulo="OSCE digital (simulação)"
        descricao="Três estações com cenários reais de balcão. Você tem 2 minutos por estação para escolher a melhor conduta. Ao final, veja seu desempenho detalhado por critério de triagem, segurança, ética e encaminhamento."
      />
      <div className="mt-10">
        <OsceSimulador />
      </div>
    </div>
  );
}
