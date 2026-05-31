"use client";

import { useProgresso } from "@/lib/progress";
import { AnelProgresso, Etiqueta } from "./ui";
import { Icon } from "./icons";

// Selo de progresso de uma trilha (anel + contagem).
export function ProgressoTrilhaBadge({ trilhaId }: { trilhaId: string }) {
  const { progressoTrilha, carregado } = useProgresso();
  const p = progressoTrilha(trilhaId);
  if (!carregado) {
    return <div className="h-[72px] w-[72px] animate-pulse rounded-full bg-surface-2" />;
  }
  return (
    <div className="flex items-center gap-3">
      <AnelProgresso pct={p.pct} tamanho={72} />
      <div className="text-xs text-subtle lg:hidden">
        {p.feitas}/{p.total} aulas
      </div>
    </div>
  );
}

// Ícone de status de uma aula (concluída x pendente).
export function AulaStatusIcon({ trilhaId, aulaId }: { trilhaId: string; aulaId: string }) {
  const { estaConcluida, carregado } = useProgresso();
  const feita = carregado && estaConcluida(trilhaId, aulaId);
  return (
    <span
      className={`flex h-9 w-9 flex-none items-center justify-center rounded-xl ${
        feita ? "gradient-brand text-white" : "bg-surface-2 text-subtle"
      }`}
    >
      <Icon name={feita ? "check" : "play"} size={16} />
    </span>
  );
}

// Etiqueta "Concluída" condicional.
export function ConcluidaTag({ trilhaId, aulaId }: { trilhaId: string; aulaId: string }) {
  const { estaConcluida, carregado } = useProgresso();
  if (!carregado || !estaConcluida(trilhaId, aulaId)) return null;
  return (
    <Etiqueta tom="success">
      <Icon name="check" size={12} /> Concluída
    </Etiqueta>
  );
}
