import type { Metadata } from "next";
import { OsceSimulador } from "@/components/osce-simulador";
import { TituloSecao } from "@/components/ui";

export const metadata: Metadata = {
  title: "OSCE digital",
  description: "Simulação estruturada de atendimento no balcão com rubrica de avaliação.",
};

export default function OscePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <TituloSecao
        sobre="Prova prática"
        icone="user"
        titulo="OSCE digital (simulação)"
        descricao="Escolha a melhor conduta em cenários de balcão. Versão simplificada com rubrica por critérios."
      />
      <div className="mt-10">
        <OsceSimulador />
      </div>
    </div>
  );
}
