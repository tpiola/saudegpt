// Comando Diário — rotina operacional de balcão e formação.
// Estrutura alinhada à trilha Excelência Operacional; pode ser substituída por
// export Notion ou sync API (NOTION_TOKEN) em iteração futura.

export type CategoriaComando =
  | "abertura"
  | "balcao"
  | "estoque"
  | "dados"
  | "fechamento"
  | "formacao";

export interface ItemComando {
  id: string;
  texto: string;
  categoria: CategoriaComando;
  /** Link opcional para aprofundar na plataforma */
  aulaHref?: string;
}

export interface SecaoComando {
  id: string;
  titulo: string;
  descricao?: string;
  itens: ItemComando[];
}

export interface AtalhoComando {
  href: string;
  titulo: string;
  descricao: string;
}

export const comandoDiarioMeta = {
  titulo: "Comando Diário de Operação",
  subtitulo: "Rotina de excelência no balcão",
  descricao:
    "Checklist diário para acolher, orientar com segurança, organizar a loja e evoluir na formação — conectado à trilha de Excelência Operacional e aos recursos da plataforma.",
  fonteNotion:
    "Estrutura inspirada no Comando Diário Operação (Notion). Conteúdo pedagógico alinhado ao currículo publicado; atualize via export ou integração Notion quando disponível.",
};

export const atalhosComando: AtalhoComando[] = [
  {
    href: "/trilhas/operacional",
    titulo: "Trilha Operacional",
    descricao: "Aprofundar acolhimento, planograma e atendimento consultivo",
  },
  {
    href: "/missoes",
    titulo: "Missões de balcão",
    descricao: "Simular atendimentos e ganhar pontos",
  },
  {
    href: "/biblioteca",
    titulo: "Biblioteca regulatória",
    descricao: "Normas atualizadas para o balcão",
  },
  {
    href: "/indicadores",
    titulo: "Power BI",
    descricao: "Ler faturamento, ruptura, NPS e adesão",
  },
  {
    href: "/",
    titulo: "Meu painel",
    descricao: "Progresso, XP e continuar de onde parei",
  },
];

const rotuloCategoria: Record<CategoriaComando, string> = {
  abertura: "Abertura",
  balcao: "Balcão e atendimento",
  estoque: "Estoque e organização",
  dados: "Dados e impacto",
  fechamento: "Fechamento",
  formacao: "Formação contínua",
};

export function rotuloDaCategoria(cat: CategoriaComando): string {
  return rotuloCategoria[cat];
}

export const secoesComando: SecaoComando[] = [
  {
    id: "manha",
    titulo: "Início do turno",
    descricao: "Preparar o ponto de cuidado antes do fluxo de clientes.",
    itens: [
      {
        id: "ab-1",
        texto: "Conferir aparência da loja e do balcão (limpeza, organização, iluminação).",
        categoria: "abertura",
      },
      {
        id: "ab-2",
        texto: "Verificar validades em destaque (PVPS: primeiro a vencer, primeiro a sair).",
        categoria: "abertura",
        aulaHref: "/aula/operacional/rotina-organizacao",
      },
      {
        id: "ab-3",
        texto: "Confirmar que controlados e termolábeis estão em área adequada.",
        categoria: "abertura",
        aulaHref: "/aula/operacional/planograma",
      },
      {
        id: "ab-4",
        texto: "Alinhar com a equipe prioridades do dia (sazonalidade, campanhas, fila).",
        categoria: "abertura",
        aulaHref: "/aula/operacional/sazonalidade-equipe",
      },
    ],
  },
  {
    id: "balcao",
    titulo: "Durante o atendimento",
    descricao: "Padrão de encantamento ético em cada interação.",
    itens: [
      {
        id: "bc-1",
        texto: "Acolher com contato visual e disponibilidade genuína.",
        categoria: "balcao",
        aulaHref: "/aula/operacional/acolhimento",
      },
      {
        id: "bc-2",
        texto: "Escutar, fazer perguntas abertas e repetir a necessidade com clareza.",
        categoria: "balcao",
        aulaHref: "/aula/operacional/escuta-ativa",
      },
      {
        id: "bc-3",
        texto:
          "Orientar com segurança; encaminhar ao farmacêutico quando ultrapassar o autocuidado.",
        categoria: "balcao",
      },
      {
        id: "bc-4",
        texto: "Sugerir valor real (cross-sell ético) sem empurrar ou condicionar a venda.",
        categoria: "balcao",
        aulaHref: "/aula/operacional/cross-sell",
      },
      {
        id: "bc-5",
        texto: "Checar entendimento do cliente antes de encerrar o atendimento.",
        categoria: "balcao",
        aulaHref: "/aula/operacional/encantamento",
      },
    ],
  },
  {
    id: "estoque",
    titulo: "Organização e segurança sanitária",
    descricao: "Manter a loja pronta para autosserviço assistido.",
    itens: [
      {
        id: "es-1",
        texto: "Repor gôndolas sem expor controlados em autosserviço.",
        categoria: "estoque",
        aulaHref: "/aula/operacional/planograma",
      },
      {
        id: "es-2",
        texto: "Destacar itens sazonais (respiratórios no inverno, FPS/repelentes no verão).",
        categoria: "estoque",
        aulaHref: "/aula/operacional/sazonalidade-equipe",
      },
      {
        id: "es-3",
        texto: "Registrar rupturas ou itens em falta para reposição.",
        categoria: "estoque",
      },
    ],
  },
  {
    id: "dados",
    titulo: "Olhar para o resultado com foco em saúde",
    descricao: "Conectar operação, negócio e cuidado ao paciente.",
    itens: [
      {
        id: "dt-1",
        texto: "Observar ticket médio e conversão do turno (sem abandonar a ética).",
        categoria: "dados",
      },
      {
        id: "dt-2",
        texto: "Acompanhar recompra e adesão terapêutica na medida do possível.",
        categoria: "dados",
      },
      {
        id: "dt-3",
        texto: "Revisar indicadores no hub Power BI (ruptura, NPS, serviços).",
        categoria: "dados",
      },
    ],
  },
  {
    id: "formacao",
    titulo: "Formação do dia",
    descricao: "Evoluir como Atendente I e II.",
    itens: [
      {
        id: "fm-1",
        texto: "Concluir ou revisar pelo menos uma microlição (3–8 min).",
        categoria: "formacao",
      },
      {
        id: "fm-2",
        texto: "Praticar uma missão de balcão no simulador.",
        categoria: "formacao",
      },
      {
        id: "fm-3",
        texto: "Consultar atualização regulatória se houver dúvida no balcão.",
        categoria: "formacao",
      },
    ],
  },
  {
    id: "fechamento",
    titulo: "Encerramento do turno",
    descricao: "Fechar com disciplina e handoff para o próximo turno.",
    itens: [
      {
        id: "fc-1",
        texto: "Organizar balcão e área de espera para o próximo turno.",
        categoria: "fechamento",
      },
      {
        id: "fc-2",
        texto: "Passar pendências à equipe ou ao farmacêutico (receitas, reclamações, estoque).",
        categoria: "fechamento",
      },
      {
        id: "fc-3",
        texto: "Registrar aprendizado do dia (o que funcionou, o que melhorar).",
        categoria: "fechamento",
      },
    ],
  },
];

export function totalItensComando(): number {
  return secoesComando.reduce((n, s) => n + s.itens.length, 0);
}
