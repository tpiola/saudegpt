import type { MarcaMidia, ProdutoMidia } from "./types";

/** Imagens locais (nunca quebram, ao contrário de Unsplash externo). */
const img = (name: string) => `/imagens/${name}.jpg`;

export const imagensCategoria = {
  // PERFUMARIA
  protetorSolar: img("protetor-solar"),
  fralda: img("fralda"),
  mamadeira: img("bebe"),
  formula: img("leite-po"),
  leitePo: img("leite-po"),
  shampoo: img("cabelos"),
  cosmeticos: img("cosmeticos"),
  dermocosmetico: img("skincare"),
  higieneOral: img("higiene"),
  absorvente: img("higiene"),
  barba: img("cabelos"), // barba -> cabelos masculinos
  sabonetes: img("sabonetes"),
  desodorantes: img("desodorantes"),
  unhas: img("cosmeticos"),
  cabelos: img("cabelos"),
  coloracao: img("coloracao"),
  acessoriosBanho: img("higiene"),
  acessoriosInfantis: img("bebe"),
  perfume: img("perfume"),
  suplementos: img("suplementos"),
  proteinas: img("suplementos"),
  pes: img("higiene"),
  palmilhas: img("higiene"),
  cleanBeauty: img("clean-beauty"),
  sustentabilidade: img("sustentabilidade"),
  sono: img("sono"),
  travesseiro: img("travesseiro"),
  verao: img("praia"),
  inverno: img("verao"),

  // MEDICAMENTOS
  medicamentos: img("medicamentos"),
  principioAtivo: img("principio-ativo"),
  formasFarmaceuticas: img("medicamentos"),
  viasAdmin: img("medicamentos"),
  tarjas: img("tarjas"),
  mip: img("farmacia-balcao"),
  genericos: img("genericos"),
  analgesicos: img("analgesicos"),
  antiinflamatorios: img("analgesicos"),
  gripe: img("gripe"),
  gastro: img("gastro"),
  fungos: img("fungos"),
  antibioticos: img("antibioticos"),
  receitas: img("receitas"),
  farmaciaPopular: img("farmacia-popular"),
  primeirosSocorros: img("primeiros-socorros"),
  glp1: img("glp1"),
  injetaveis: img("injetaveis"),
  adesao: img("medicamentos"),
  encaminhamento: img("encaminhamento"),
  bula: img("bula"),
  classes: img("medicamentos"),
  receituarios: img("receituarios"),
  seguranca: img("seguranca"),

  // ATENDIMENTO E RELACIONAMENTO
  atendimento: img("atendimento"),
  atendimentoAvancado: img("atendimento-avancado"),
  comunicacao: img("comunicacao"),
  organizacao: img("medicamento-prateleira"),
  equipe: img("equipe"),
  oferecimento: img("atendimento-avancado"),
  comunicacaoPessoas: img("comunicacao"),
  apoio: img("comunicacao"),
  atendimentoHumano: img("atendimento-humano"),
  operacionalLoja: img("medicamento-prateleira"),

  // MÓDULOS — FUNDOS CINEMATOGRÁFICOS
  fundamentos: img("farmacia-balcao"),
  higieneProdutos: img("higiene"),
  peleCuidados: img("skincare"),
  cabelosTratamento: img("cabelos-tratamento"),
  perfumesModulo: img("perfumes"),
  infantilModulo: img("bebe"),
} as const;

/** Logos via Wikimedia Commons (identificação educativa no balcão). */
const logoWiki = (path: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`;

export const marcasHigiene: MarcaMidia[] = [
  { nome: "Nivea", logoUrl: logoWiki("5/5a/Nivea_logo.svg/320px-Nivea_logo.svg.png") },
  {
    nome: "Johnson's Baby",
    logoUrl: logoWiki("8/8a/Johnson%27s_Baby_logo.svg/320px-Johnson%27s_Baby_logo.svg.png"),
  },
  { nome: "Pampers", logoUrl: logoWiki("6/6e/Pampers_logo.svg/320px-Pampers_logo.svg.png") },
  { nome: "Huggies", logoUrl: logoWiki("4/4a/Huggies_logo.svg/320px-Huggies_logo.svg.png") },
  {
    nome: "La Roche-Posay",
    logoUrl: logoWiki("1/1f/La_Roche-Posay_logo.svg/320px-La_Roche-Posay_logo.svg.png"),
  },
  { nome: "Vichy", logoUrl: logoWiki("8/8e/Vichy_logo.svg/320px-Vichy_logo.svg.png") },
];

export const marcasNutricao: MarcaMidia[] = [
  { nome: "Nestlé Nutrition", logoUrl: logoWiki("4/4e/Nestl%C3%A9_logo.svg/320px-Nestl%C3%A9_logo.svg.png") },
  { nome: "Danone", logoUrl: logoWiki("1/1e/Danone_logo.svg/320px-Danone_logo.svg.png") },
];

export const produtosProtetorSolar: ProdutoMidia[] = [
  {
    nome: "Protetor solar",
    imagemUrl: imagensCategoria.protetorSolar,
    alt: "Frascos de protetor solar",
    categoria: "Fotoproteção",
  },
  {
    nome: "Skincare facial",
    imagemUrl: imagensCategoria.dermocosmetico,
    alt: "Produtos para rosto",
    categoria: "Dermocosmético",
  },
];

export const produtosFraldas: ProdutoMidia[] = [
  {
    nome: "Fraldas",
    imagemUrl: imagensCategoria.fralda,
    alt: "Fraldas infantis",
    categoria: "Infantil",
  },
];

export const produtosFormula: ProdutoMidia[] = [
  {
    nome: "Fórmula infantil",
    imagemUrl: imagensCategoria.formula,
    alt: "Nutrição infantil",
    categoria: "Fórmula",
  },
  {
    nome: "Mamadeira",
    imagemUrl: imagensCategoria.mamadeira,
    alt: "Mamadeira",
    categoria: "Acessório",
  },
];

export const produtosLeiteAdulto: ProdutoMidia[] = [
  {
    nome: "Suplemento adulto",
    imagemUrl: imagensCategoria.leitePo,
    alt: "Leite em pó ou suplemento",
    categoria: "Nutrição",
  },
];

export const produtosDermocosmetico: ProdutoMidia[] = [
  {
    nome: "Dermocosméticos",
    imagemUrl: imagensCategoria.dermocosmetico,
    alt: "Linha de skincare",
    categoria: "Dermocosmético",
  },
  {
    nome: "Cosméticos",
    imagemUrl: imagensCategoria.cosmeticos,
    alt: "Maquiagem e beleza",
    categoria: "Cosméticos",
  },
];

export function midiaPadraoPorAulaId(aulaId: string): {
  imagemHeroUrl?: string;
  produtos?: ProdutoMidia[];
  marcas?: MarcaMidia[];
} {
  const mapa: Record<
    string,
    { imagemHeroUrl?: string; produtos?: ProdutoMidia[]; marcas?: MarcaMidia[] }
  > = {
    "pele-fotoprotecao": {
      imagemHeroUrl: imagensCategoria.protetorSolar,
      produtos: produtosProtetorSolar,
      marcas: marcasHigiene.filter((m) =>
        ["La Roche-Posay", "Vichy", "Nivea"].includes(m.nome),
      ),
    },
    dermocosmeticos: {
      imagemHeroUrl: imagensCategoria.dermocosmetico,
      produtos: produtosDermocosmetico,
      marcas: marcasHigiene.filter((m) =>
        ["La Roche-Posay", "Vichy", "Nivea"].includes(m.nome),
      ),
    },
    maquiagem: {
      imagemHeroUrl: imagensCategoria.cosmeticos,
      produtos: produtosDermocosmetico,
    },
    "higiene-infantil": {
      imagemHeroUrl: imagensCategoria.fralda,
      produtos: produtosFraldas,
      marcas: marcasHigiene.filter((m) => ["Pampers", "Huggies"].includes(m.nome)),
    },
    "linha-infantil": {
      imagemHeroUrl: imagensCategoria.mamadeira,
      produtos: produtosFormula,
      marcas: marcasHigiene.filter((m) =>
        ["Johnson's Baby", "Pampers"].includes(m.nome),
      ),
    },
    "leite-infantil": {
      imagemHeroUrl: imagensCategoria.formula,
      produtos: produtosFormula,
      marcas: marcasNutricao,
    },
    "leite-adulto": {
      imagemHeroUrl: imagensCategoria.leitePo,
      produtos: produtosLeiteAdulto,
      marcas: marcasNutricao,
    },
    fraldas: {
      imagemHeroUrl: imagensCategoria.fralda,
      produtos: produtosFraldas,
      marcas: marcasHigiene.filter((m) => ["Pampers", "Huggies"].includes(m.nome)),
    },
    "higiene-oral": { imagemHeroUrl: imagensCategoria.higieneOral },
    barba: { imagemHeroUrl: imagensCategoria.barba, marcas: marcasHigiene },
    sabonetes: { imagemHeroUrl: imagensCategoria.sabonetes },
    desodorantes: { imagemHeroUrl: imagensCategoria.desodorantes },
    unhas: { imagemHeroUrl: imagensCategoria.unhas },
    coloracao: { imagemHeroUrl: imagensCategoria.coloracao },
    perfumes: { imagemHeroUrl: imagensCategoria.perfume },
    "acessorios-banho": { imagemHeroUrl: imagensCategoria.acessoriosBanho },
    "acessorios-infantis": { imagemHeroUrl: imagensCategoria.acessoriosInfantis },
    "higiene-pessoal": { imagemHeroUrl: imagensCategoria.absorvente },
    "rotina-pele-balcao": {
      imagemHeroUrl: imagensCategoria.dermocosmetico,
      produtos: produtosDermocosmetico,
      marcas: marcasHigiene,
    },
    "cosmeticos-corporais": {
      imagemHeroUrl: imagensCategoria.cosmeticos,
      produtos: produtosDermocosmetico,
    },
    cabelos: { imagemHeroUrl: imagensCategoria.shampoo },
    // MEDICAMENTOS
    "conceitos": { imagemHeroUrl: imagensCategoria.medicamentos },
    "principio-ativo": { imagemHeroUrl: imagensCategoria.principioAtivo },
    "formas-farmaceuticas": { imagemHeroUrl: imagensCategoria.formasFarmaceuticas },
    "vias-administracao": { imagemHeroUrl: imagensCategoria.viasAdmin },
    tarjas: { imagemHeroUrl: imagensCategoria.tarjas },
    "mip-otc": { imagemHeroUrl: imagensCategoria.mip },
    genericos: { imagemHeroUrl: imagensCategoria.genericos },
    "analgesicos-antitermicos": { imagemHeroUrl: imagensCategoria.analgesicos },
    "anti-inflamatorios-miorrelaxantes": { imagemHeroUrl: imagensCategoria.antiinflamatorios },
    "gripe-alergia-tosse": { imagemHeroUrl: imagensCategoria.gripe },
    gastrointestinais: { imagemHeroUrl: imagensCategoria.gastro },
    "antimicoticos-vitaminas": { imagemHeroUrl: imagensCategoria.fungos },
    "antissepticos-topicos": { imagemHeroUrl: imagensCategoria.medicamentos },
    "pediculicidas-escabicidas-foco": { imagemHeroUrl: imagensCategoria.medicamentos },
    antibioticos: { imagemHeroUrl: imagensCategoria.antibioticos },
    receituarios: { imagemHeroUrl: imagensCategoria.receitas },
    "leitura-receitas-casos": { imagemHeroUrl: imagensCategoria.receitas },
    glp1: { imagemHeroUrl: imagensCategoria.glp1 },
    "farmacia-popular": { imagemHeroUrl: imagensCategoria.farmaciaPopular },
    "primeiros-socorros": { imagemHeroUrl: imagensCategoria.primeirosSocorros },
    injetaveis: { imagemHeroUrl: imagensCategoria.injetaveis },
    adesao: { imagemHeroUrl: imagensCategoria.adesao },
    encaminhamento: { imagemHeroUrl: imagensCategoria.encaminhamento },
    // NOVOS MÓDULOS
    "vitaminas-minerais": {
      imagemHeroUrl: imagensCategoria.suplementos,
      produtos: [
        { nome: "Polivitamínicos", imagemUrl: imagensCategoria.suplementos, alt: "Vitaminas e minerais", categoria: "Suplementos" },
        { nome: "Vitamina D", imagemUrl: imagensCategoria.suplementos, alt: "Vitamina D", categoria: "Suplementos" },
      ],
    },
    "suplementos-proteina": {
      imagemHeroUrl: imagensCategoria.proteinas,
      produtos: [
        { nome: "Whey protein", imagemUrl: imagensCategoria.proteinas, alt: "Suplemento proteico", categoria: "Suplementos" },
        { nome: "Colágeno hidrolisado", imagemUrl: imagensCategoria.proteinas, alt: "Colágeno", categoria: "Suplementos" },
      ],
    },
    "pes-hidratacao-calos": { imagemHeroUrl: imagensCategoria.pes },
    "calcados-palmilhas": { imagemHeroUrl: imagensCategoria.palmilhas },
    "cosmeticos-naturais": { imagemHeroUrl: imagensCategoria.cleanBeauty },
    "sustentabilidade-beleza": { imagemHeroUrl: imagensCategoria.sustentabilidade },
    "higiene-sono": { imagemHeroUrl: imagensCategoria.sono },
    "travesseiros-acessorios-sono": { imagemHeroUrl: imagensCategoria.travesseiro },
    "sazonal-verao": { imagemHeroUrl: imagensCategoria.verao },
    "sazonal-inverno": { imagemHeroUrl: imagensCategoria.inverno },
    // AULAS FALTANTES
    bula: { imagemHeroUrl: imagensCategoria.medicamentos },
    acolhimento: { imagemHeroUrl: imagensCategoria.atendimento },
    "momento-certo": { imagemHeroUrl: imagensCategoria.atendimentoAvancado },
    "como-oferecer": { imagemHeroUrl: imagensCategoria.atendimentoAvancado },
    objecoes: { imagemHeroUrl: imagensCategoria.atendimentoAvancado },
    "cross-sell-upsell": { imagemHeroUrl: imagensCategoria.atendimentoAvancado },
    fechamento: { imagemHeroUrl: imagensCategoria.atendimentoAvancado },
    "gatilhos-mentais": { imagemHeroUrl: imagensCategoria.comunicacao },
    rapport: { imagemHeroUrl: imagensCategoria.comunicacao },
    "tom-voz-postura": { imagemHeroUrl: imagensCategoria.comunicacao },
    "perguntas-poderosas": { imagemHeroUrl: imagensCategoria.comunicacao },
    "escuta-ativa": { imagemHeroUrl: imagensCategoria.comunicacao },
    "linguagem-positiva": { imagemHeroUrl: imagensCategoria.comunicacao },
    "falar-de-preco": { imagemHeroUrl: imagensCategoria.comunicacao },
    encantamento: { imagemHeroUrl: imagensCategoria.atendimento },
    "cross-sell": { imagemHeroUrl: imagensCategoria.atendimentoAvancado },
    planograma: { imagemHeroUrl: imagensCategoria.organizacao },
    "rotina-organizacao": { imagemHeroUrl: imagensCategoria.organizacao },
    "sazonalidade-equipe": { imagemHeroUrl: imagensCategoria.equipe },
  };
  return mapa[aulaId] ?? {};
}
