// Constantes institucionais do produto.

export const site = {
  nome: "SaúdeGPT",
  nomeCurto: "SaúdeGPT",
  assinatura: "Educação em farmácia com conteúdo revisado, trilhas práticas e foco em atendimento seguro e humanizado.",
  descricao:
    "Formação completa para atendentes de farmácia: aprenda atendimento humanizado, medicamentos, legislação ANVISA, dispensação segura e cuidado ao paciente. Plataforma EAD com trilhas curtas, simulações, quizzes e certificado. Desenvolvido pelo farmacêutico Thiago Piola — CRF/SP 58.519.",
  patrocinio: [
    { nome: "thiagopiola.com.br", url: "https://www.thiagopiola.com.br" },
    { nome: "reidasvendas.com.br", url: "https://www.reidasvendas.com.br" },
  ],
  social: [
    { nome: "Facebook", url: "https://www.facebook.com/saudegpt" },
    { nome: "Instagram", url: "https://www.instagram.com/saudegpt/" },
    { nome: "X", url: "https://x.com/saudegpt" },
    { nome: "LinkedIn", url: "https://www.linkedin.com/company/saudegpt" },
    { nome: "Reddit", url: "https://www.reddit.com/r/saudegpt" },
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
