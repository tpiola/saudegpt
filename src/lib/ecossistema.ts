export const fotosTrilhas: Record<string, string> = {
  "cuidado-no-balcao": "/imagens/hero_vendas.webp",
  perfumaria: "/imagens/trilha_perfumaria.webp",
  medicamentos: "/imagens/trilha_medicamentos.webp",
  operacional: "/imagens/trilha_operacional.webp",
  encantamento: "/imagens/hero_comunicacao.webp",
  vendas: "/imagens/trilha_encantamento.webp",
  fundamentos: "/imagens/hero_anatomia.webp",
  pratica: "/imagens/receitas.webp",
  "servicos-cuidado": "/imagens/hero_equipamentos.webp",
  "nutricao-fundamentos": "/imagens/card-nutricao.webp",
  "fisioterapia-reabilitacao": "/imagens/card-reabilitacao.webp",
  "psicologia-saude-mental": "/imagens/card-saude-mental.webp",
  "cuidador-idosos": "/imagens/card-cuidador-idosos.webp",
};
export function fotoTrilha(id: string) {
  return fotosTrilhas[id] ?? `/ilustracoes/trilha-${id}.svg`;
}
