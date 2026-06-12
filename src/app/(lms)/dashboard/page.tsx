import type { Metadata } from "next";
import { JsonLdCourse } from "@/components/json-ld-course";
import { DashboardAlunoLazy } from "@/components/dashboard-aluno-lazy";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Dashboard — Formação para Atendentes de Farmácia",
  description:
    "Dashboard do aluno — progresso, badges, evolução semanal e estatísticas da Formação para Atendentes de Farmácia.",
};

export default function DashboardPage() {
  return (
    <>
      <JsonLdCourse />
      <ErrorBoundary mensagem="Não foi possível carregar seu painel.">
        <DashboardAlunoLazy />
      </ErrorBoundary>
    </>
  );
}
