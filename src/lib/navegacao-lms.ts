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
      { href: "/dashboard", label: "Painel", icone: "home" },
      { href: "/trilhas", label: "Trilhas e módulos", icone: "book" },
      { href: "/pressao-arterial", label: "Pressão Arterial", icone: "heart" },
      { href: "/diabetes", label: "Diabetes", icone: "droplet" },
      { href: "/hormonios", label: "Hormônios", icone: "zap" },
      { href: "/saude-mental", label: "Saúde Mental", icone: "smile" },
      { href: "/literacia-digital", label: "Literacia Digital", icone: "globe" },
    ],
  },
  {
    titulo: "Prática no balcão",
    itens: [
      { href: "/comando-diario", label: "Comando diário", icone: "check" },
      { href: "/curiosidades", label: "Curiosidades", icone: "compass" },
      { href: "/missoes", label: "Missões", icone: "target" },
      { href: "/jogos", label: "Jogos", icone: "zap" },
      { href: "/osce", label: "OSCE prático", icone: "shield" },
    ],
  },
  {
    titulo: "Referência",
    itens: [
      { href: "/medicamentos-guia", label: "Guia de Medicamentos", icone: "pill" },
      { href: "/bulas-receitas", label: "Bulas e receitas", icone: "clipboard" },
      { href: "/biblioteca", label: "Biblioteca regulatória", icone: "search" },
    ],
  },
  {
    titulo: "Comunidade",
    itens: [
      { href: "/forum", label: "Fórum", icone: "message" },
    ],
  },
  {
    titulo: "Desempenho",
    itens: [
      { href: "/trilhas/encantamento", label: "Cuidado Humanizado", icone: "heart" },
      { href: "/ranking", label: "Ranking opt-in", icone: "award" },
    ],
  },
  {
    titulo: "Ajuda",
    itens: [
      { href: "/suporte", label: "Suporte", icone: "alert" },
    ],
  },
];

export const rotasSemSidebarCompacta: string[] = ["/", "/aguardando-aprovacao"];
