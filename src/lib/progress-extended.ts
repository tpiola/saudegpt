// Utilitários de streak e revisão (usados pelo ProgressProvider).

export function hojeISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export function calcularStreak(diasEstudo: string[]): { streak: number; estudouHoje: boolean } {
  const hoje = hojeISO();
  const set = new Set(diasEstudo);
  const estudouHoje = set.has(hoje);

  let streak = 0;
  const d = new Date();
  if (!estudouHoje) {
    d.setDate(d.getDate() - 1);
  }
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (!set.has(key)) break;
    streak += 1;
    d.setDate(d.getDate() - 1);
  }
  return { streak, estudouHoje };
}
