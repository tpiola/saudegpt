import type { Metadata } from "next";
import { RankingBoard } from "@/components/ranking-board";
import { GamificacaoRanking } from "@/components/gamificacao-ranking";
import { FadeUp } from "@/components/fade-up";
import { Icon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ranking de estudos",
  description: "Ranking opt-in por XP — saudável e voluntário.",
};

export default function RankingPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <FadeUp>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-500 to-green-600 p-8 sm:p-10 mb-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-orange-400/10 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg">
                <Icon name="award" size={24} className="text-white" />
              </span>
              <div>
                <h1 className="text-2xl font-black text-white sm:text-3xl">Ranking de estudos</h1>
              </div>
            </div>
            <p className="max-w-md text-white/70 text-sm leading-relaxed">
              Motivação sem humilhação: só apelidos e XP, com participação opcional.
              Dados salvos apenas no seu navegador.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
                <Icon name="lock" size={12} className="text-white/80" />
                Privacidade total
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
                <Icon name="star" size={12} className="text-white/80" />
                Baseado em XP
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
                <Icon name="sparkles" size={12} className="text-white/80" />
                Saudável
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Estatísticas */}
      <FadeUp delay={80}>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="rounded-xl bg-surface-2 p-3 text-center">
            <div className="text-lg font-extrabold text-emerald-600">🏆</div>
            <div className="mt-0.5 text-[10px] text-subtle">Jogadores</div>
          </div>
          <div className="rounded-xl bg-surface-2 p-3 text-center">
            <div className="text-lg font-extrabold text-orange-500">⭐</div>
            <div className="mt-0.5 text-[10px] text-subtle">Níveis</div>
          </div>
          <div className="rounded-xl bg-surface-2 p-3 text-center">
            <div className="text-lg font-extrabold text-forest-500">🔥</div>
            <div className="mt-0.5 text-[10px] text-subtle">Streaks</div>
          </div>
        </div>
      </FadeUp>

      {/* Gamificação */}
      <FadeUp delay={120}>
        <GamificacaoRanking />
      </FadeUp>

      <FadeUp delay={160}>
        <RankingBoard />
      </FadeUp>
    </div>
  );
}
