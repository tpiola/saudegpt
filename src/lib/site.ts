     1|// Constantes institucionais do produto.
     2|
     3|export const site = {
     4|  nome: "Formação para Atendentes Premium de Farmácia",
     5|  nomeCurto: "Atendentes Premium",
     6|  assinatura: "Criado pelo Farmacêutico Thiago B. G. Piola, CRF/SP 58.519",
     7|  descricao:
     8|    "A formação mais completa do Brasil para atendentes de drogaria e perfumaria — do iniciante ao avançado, com foco em saúde integral, atendimento humanizado e segurança sanitária.",
     9|  patrocinio: [
    10|    { nome: "thiagopiola.com.br", url: "https://www.thiagopiola.com.br" },
    11|    { nome: "reidasvendas.com.br", url: "https://www.reidasvendas.com.br" },
    12|  ],
    13|};
    14|
    15|/** Legado — navegação principal está em `navegacao-lms.ts` (sidebar). */
    16|export const navPrincipal = [
    17|<<<<<<< HEAD
    18|  { href: "/", label: "Home" },
    19|=======
    20|  { href: "/dashboard", label: "Painel" },
    21|>>>>>>> 04633e0 (feat: matrícula vira raiz (/) e Portal do Aluno vai para /dashboard)
    22|  { href: "/trilhas", label: "Trilhas" },
    23|  { href: "/comando-diario", label: "Comando diário" },
    24|  { href: "/bulas-receitas", label: "Bulas e receitas" },
    25|  { href: "/missoes", label: "Missões" },
    26|  { href: "/jogos", label: "Jogos" },
    27|  { href: "/biblioteca", label: "Biblioteca regulatória" },
    28|  { href: "/indicadores", label: "Power BI" },
    29|  { href: "/ranking", label: "Ranking" },
    30|];
    31|
    32|export const linksLegais = [
    33|  { href: "/privacidade", label: "Privacidade" },
    34|  { href: "/termos", label: "Termos de uso" },
    35|];
    36|