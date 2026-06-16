"use client";

export function RankingBoard() {
  return (
    <div className="space-y-8">
      {/* 🏆 Ranking Board — Em breve */}
      <div className="card-gradient-warm p-8 sm:p-10 text-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-orange-400/10 blur-2xl" />

        <div className="relative">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl shadow-orange-500/20">
            <span className="text-4xl">👑</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ranking em desenvolvimento
          </h3>
          <p className="mx-auto max-w-lg text-sm text-muted leading-relaxed">
            Estamos criando um ranking de estudos saudável, opt-in e 
            baseado em XP acumulado nas trilhas. 
            Participe por apelido — sem expor seus dados.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <span className="text-2xl">🔒</span>
              <p className="mt-2 text-xs font-semibold">Privacidade total</p>
              <p className="text-[11px] text-muted">Só apelidos e XP</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <span className="text-2xl">📊</span>
              <p className="mt-2 text-xs font-semibold">Períodos</p>
              <p className="text-[11px] text-muted">Semanal, mensal, total</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <span className="text-2xl">🎯</span>
              <p className="mt-2 text-xs font-semibold">Gamificação</p>
              <p className="text-[11px] text-muted">Badges e conquistas</p>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500/20 to-green-600/10 px-4 py-2 text-xs font-medium text-gold-600 dark:text-gold-400">
            <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
            Em breve — notificaremos você
          </div>
        </div>
      </div>
    </div>
  );
}
