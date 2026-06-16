/** Categorias do Fórum da Farmácia. */

export interface ForumCategoria {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  cor: string; // tailwind color class
  ordem: number;
}

export interface ForumPost {
  id: string;
  categoriaId: string;
  titulo: string;
  conteudo: string;
  autorNome: string;
  autorId: string;
  criadoEm: string; // ISO
  curtidas: number;
  curtidoPor: string[]; // userIds
  denuncias: number;
  removido: boolean;
  replies: ForumReply[];
  repliesCount: number;
}

export interface ForumReply {
  id: string;
  postId: string;
  conteudo: string;
  autorNome: string;
  autorId: string;
  criadoEm: string;
  curtidas: number;
  curtidoPor: string[];
  denuncias: number;
  removido: boolean;
}

/** 11 categorias reais do universo farmacêutico. */
export const categoriasForum: ForumCategoria[] = [
  {
    id: "bem-vindo",
    nome: "Bem-vindo e Apresentações",
    descricao: "Apresente-se para a comunidade! Conte um pouco sobre sua trajetória na farmácia.",
    icone: "smile",
    cor: "text-green-500",
    ordem: 1,
  },
  {
    id: "duvidas-medicamentos",
    nome: "Dúvidas sobre Medicamentos",
    descricao: "Mecanismo de ação, posologia, interações, reações adversas e muito mais.",
    icone: "pill",
    cor: "text-blue-500",
    ordem: 2,
  },
  {
    id: "atendimento-cliente",
    nome: "Atendimento ao Cliente",
    descricao: "Técnicas de abordagem, escuta ativa, objeções e fidelização no balcão.",
    icone: "message",
    cor: "text-orange-500",
    ordem: 3,
  },
  {
    id: "legislacao-anvisa",
    nome: "Legislação e ANVISA",
    descricao: "RDCs, portarias, fiscalização, documentação obrigatória e boas práticas.",
    icone: "shield",
    cor: "text-red-500",
    ordem: 4,
  },
  {
    id: "casos-clinicos",
    nome: "Casos Clínicos e OSCE",
    descricao: "Compartilhe e discuta casos reais, simulações OSCE e protocolos clínicos.",
    icone: "heart",
    cor: "text-pink-500",
    ordem: 5,
  },
  {
    id: "dermocosmeticos",
    nome: "Dermocosméticos e Perfumaria",
    descricao: "Ativos cosméticos, rotinas de skincare, perfumaria e tendências do mercado.",
    icone: "sparkles",
    cor: "text-purple-500",
    ordem: 6,
  },
  {
    id: "receitas-controlados",
    nome: "Receitas e Controlados",
    descricao: "Medicamentos controlados, receituário azul/amarelo, antimicrobianos e psicotrópicos.",
    icone: "lock",
    cor: "text-yellow-600",
    ordem: 7,
  },
  {
    id: "carreira",
    nome: "Carreira em Farmácia",
    descricao: "Oportunidades, salários, especializações, concursos e empreendedorismo farmacêutico.",
    icone: "trending",
    cor: "text-cyan-500",
    ordem: 8,
  },
  {
    id: "dicas-estudo",
    nome: "Dicas e Materiais de Estudo",
    descricao: "Resumos, flashcards, mapas mentais, apps e técnicas de estudo para farmácia.",
    icone: "book",
    cor: "text-indigo-500",
    ordem: 9,
  },
  {
    id: "tecnologia-inovacao",
    nome: "Tecnologia e Inovação",
    descricao: "Farmácia digital, sistemas de gestão, telefarmácia, IA e automação.",
    icone: "zap",
    cor: "text-amber-500",
    ordem: 10,
  },
  {
    id: "off-topic",
    nome: "Off-Topic",
    descricao: "Assuntos gerais, descontração e conversas fora do expediente.",
    icone: "globe",
    cor: "text-gray-500",
    ordem: 11,
  },
];

/** Seed data vazio — o fórum começa sem posts fictícios.
 *  Quando vazio, a UI exibe "Seja o primeiro a postar!" */
export const seedPosts: ForumPost[] = [];
