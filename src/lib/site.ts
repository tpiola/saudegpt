// Constantes institucionais do produto.

export const site = {
  nome: "SaúdeGPT",
  nomeCurto: "SaúdeGPT",
  assinatura: "Curadoria do Farmacêutico Thiago Biasoli Garcia Piola — CRF/SP 58.519",
  descricao:
    "Marketplace de cursos em saúde: Farmácia, Nutrição, Fisioterapia e Psicologia. Conteúdo criado por profissionais registrados nos conselhos de classe. Formação de qualidade com certificado digital.",
  patrocinadores: [
    {
      nome: "Thiago Piola",
      url: "https://www.thiagopiola.com.br",
      descricao: "Apoio estratégico em tecnologia, produto digital e estruturação de plataformas.",
    },
  ],
  // Mantido apenas para o sameAs do JSON-LD (Organization). Não exibido no rodapé.
  social: [
    { nome: "thiagopiola.com.br", url: "https://www.thiagopiola.com.br" },
  ],
};

/** Legado — navegação principal está em `navegacao-lms.ts` (sidebar). */
export const navPrincipal = [
  { href: "/dashboard", label: "Painel" },
  { href: "/trilhas", label: "Trilhas" },
  { href: "/curiosidades", label: "Curiosidades" },
  { href: "/pressao-arterial", label: "Pressão Arterial" },
  { href: "/comando-diario", label: "Comando diário" },
  { href: "/bulas-receitas", label: "Bulas e receitas" },
  { href: "/missoes", label: "Missões" },
  { href: "/jogos", label: "Jogos" },
  { href: "/biblioteca", label: "Biblioteca regulatória" },
  { href: "/ranking", label: "Ranking" },
];

export const linksLegais = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos de uso" },
];
