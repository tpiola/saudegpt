"use client";

import { listarAulas } from "@/content/curriculo";
import { useProgresso } from "@/lib/progress";
import { Botao } from "./ui";

// Botão dominante de continuidade: "Continuar de onde parei".
// Cai para "Começar agora" quando ainda não há progresso.
export function ContinuarBotao({
  tamanho = "lg",
  className = "",
}: {
  tamanho?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { ultima, carregado } = useProgresso();
  const todas = listarAulas();
  const primeira = todas[0];

  const alvo =
    ultima ?? (primeira ? { trilhaId: primeira.trilha.id, aulaId: primeira.aula.id } : null);
  if (!alvo) return null;

  const rotulo = carregado && ultima ? "Continuar de onde parei" : "Começar agora";

  return (
    <Botao
      href={`/aula/${alvo.trilhaId}/${alvo.aulaId}`}
      tamanho={tamanho}
      iconeFim="arrow"
      className={className}
    >
      {rotulo}
    </Botao>
  );
}
