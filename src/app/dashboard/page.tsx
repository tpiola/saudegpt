import type { Metadata } from "next";
import { DashboardAluno } from "@/components/dashboard-aluno";
import { JsonLdCourse } from "@/components/json-ld-course";

export const metadata: Metadata = {
  title: "Dashboard — Formação para Atendentes de Farmácia",
  description:
    "Dashboard do aluno — progresso, badges, evolução semanal e estatísticas da Formação para Atendentes de Farmácia.",
};

export default function DashboardPage() {
  return (
    <>
      <JsonLdCourse />
      <DashboardAluno />
    </>
  );
}
