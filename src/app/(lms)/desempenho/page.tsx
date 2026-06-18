import type { Metadata } from "next";
import { ErrorBoundary } from "@/components/error-boundary";
import { DesempenhoClient } from "./client";

export const metadata: Metadata = {
  title: "Desempenho — Formação para Atendentes de Farmácia",
  description:
    "Dashboard avançado de desempenho do aluno — acertos por trilha, tópicos com erros, tempo de estudo, progressão e previsão de conclusão.",
};

export default function DesempenhoPage() {
  return (
    <ErrorBoundary mensagem="Não foi possível carregar seu dashboard de desempenho.">
      <DesempenhoClient />
    </ErrorBoundary>
  );
}
