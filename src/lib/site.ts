// Constantes institucionais do produto.

export const site = {
  nome: "SaúdeGPT",
  nomeCurto: "SaúdeGPT",
  assinatura: "Criado pelo Farmacêutico Thiago Biasoli Garcia Piola — CRF/SP 58.519",
  descricao:
    "Formação completa para atendentes de farmácia: aprenda atendimento humanizado, medicamentos, legislação ANVISA, dispensação segura e cuidado ao paciente. Plataforma EAD com trilhas curtas, simulações e quizzes educativos. Desenvolvido pelo farmacêutico Thiago Piola — CRF/SP 58.519.",
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
