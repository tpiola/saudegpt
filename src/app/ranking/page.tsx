import type { Metadata } from "next";
import { RankingBoard } from "@/components/ranking-board";
import { TituloSecao } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ranking",
  description: "Ranking opt-in por XP — saudável e voluntário.",
};

export default function RankingPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 lg:px-8">
      <TituloSecao
        centralizado
        sobre="Gamificação"
        icone="award"
        titulo="Ranking de estudos"
        descricao="Motivação sem humilhação: só apelidos e XP, com participação opcional."
      />
      <div className="mt-10">
        <RankingBoard />
      </div>
    </div>
  );
}
