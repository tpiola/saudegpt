import type { Metadata } from "next";
import { PainelAluno } from "@/components/painel-aluno";

export const metadata: Metadata = {
  title: "Meu painel",
  description: "Progresso, continuidade, recomendações, conquistas e notas do aluno.",
};

export default function DashboardPage() {
  return <PainelAluno />;
}
