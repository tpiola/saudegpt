import type { Metadata } from "next";
import { JsonLdCourse } from "@/components/json-ld-course";
import { DashboardAlunoLazy } from "@/components/dashboard-aluno-lazy";
import { ErrorBoundary } from "@/components/error-boundary";
import { DashboardExtraSections } from "./dashboard-extra";

export const metadata: Metadata = {
  title: "Dashboard — Formação para Atendentes de Farmácia",
  description:
    "Dashboard do aluno — progresso, badges, evolução semanal, tópicos com dificuldade, recomendações de estudo e previsão de conclusão.",
};

export default function DashboardPage() {
  return (
    <>
      <JsonLdCourse />
      <ErrorBoundary mensagem="Não foi possível carregar seu painel.">
        <DashboardAlunoLazy />
      </ErrorBoundary>
      <ErrorBoundary mensagem="Não foi possível carregar métricas avançadas.">
        <DashboardExtraSections />
      </ErrorBoundary>
    </>
  );
}
