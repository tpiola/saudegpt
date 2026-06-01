import type { Metadata } from "next";
import { CadastroGuard } from "@/components/cadastro-guard";
import { PainelAluno } from "@/components/painel-aluno";

export const metadata: Metadata = {
  title: "Meu painel",
  description: "Progresso, continuidade, recomendações, conquistas e notas do aluno.",
};

export default function DashboardPage() {
  return (
    <CadastroGuard>
      <PainelAluno />
    </CadastroGuard>
  );
}
