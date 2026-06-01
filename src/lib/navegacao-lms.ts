import type { IconName } from "@/components/icons";

export type ItemNavLms = {
  href: string;
  label: string;
  icone: IconName;
};

export type SecaoNavLms = {
  titulo: string;
  itens: ItemNavLms[];
};

/** Navegação principal do ambiente de estudos (sidebar). */
export const secoesNavLms: SecaoNavLms[] = [
  {
    titulo: "Aprendizado",
    itens: [
      { href: "/", label: "Início", icone: "home" },
      { href: "/trilhas", label: "Trilhas e módulos", icone: "book" },
    ],
  },
  {
    titulo: "Prática no balcão",
    itens: [
      { href: "/comando-diario", label: "Comando diário", icone: "check" },
      { href: "/missoes", label: "Missões", icone: "target" },
      { href: "/jogos", label: "Simuladores", icone: "sparkles" },
      { href: "/osce", label: "OSCE prático", icone: "shield" },
    ],
  },
  {
    titulo: "Referência",
    itens: [
      { href: "/bulas-receitas", label: "Bulas e receitas", icone: "book" },
      { href: "/biblioteca", label: "Biblioteca regulatória", icone: "shield" },
    ],
  },
  {
    titulo: "Desempenho",
    itens: [
      { href: "/trilhas/vendas", label: "Vendas Consultivas", icone: "trending" },
      { href: "/ranking", label: "Ranking opt-in", icone: "award" },
    ],
  },
];

export const rotasSemSidebarCompacta: string[] = ["/matriculas", "/aguardando-aprovacao"];
