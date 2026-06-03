import type { Metadata } from "next";
import { RankingBoard } from "@/components/ranking-board";
import { TituloSecao, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ranking de estudos",
  description: "Ranking opt-in por XP — saudável e voluntário.",
};

export default function RankingPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-500 to-green-600 p-8 sm:p-10 mb-8">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-orange-400/10 blur-2xl" />
        <div className="relative">
          <h1 className="text-2xl font-black text-white sm:text-3xl">🏆 Ranking de estudos</h1>
          <p className="mt-2 max-w-md text-white/70 text-sm leading-relaxed">
            Motivação sem humilhação: só apelidos e XP, com participação opcional.
            Dados salvos apenas no seu navegador.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
              🔒 Privacidade total
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
              🎮 Baseado em XP
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
              🌱 Saudável
            </div>
          </div>
        </div>
      </div>

      <RankingBoard />
    </div>
  );
}
