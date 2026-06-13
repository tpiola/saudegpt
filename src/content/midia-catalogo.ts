import type { MarcaMidia, ProdutoMidia } from "./types";

/** Imagens públicas de alta qualidade (Unsplash — licença livre para uso). */
const _localImg: Record<string, string> = {
  "photo-1556228578-8c89e0a6d41f": "/imagens/trilha_perfumaria.webp",
  "photo-1584464491033-06628f3a6b7b": "/imagens/trilha_perfumaria.webp",
  "photo-1515488042361-ee00e616ede3": "/imagens/trilha_perfumaria.webp",
  "photo-1579683256318-48ea279b43d8": "/imagens/trilha_perfumaria.webp",
  "photo-1563636619-e9143da7973b": "/imagens/trilha_perfumaria.webp",
  "photo-1527799824074-22fd7014e2f7": "/imagens/trilha_perfumaria.webp",
  "photo-1596462502278-27bfdc403348e": "/imagens/trilha_perfumaria.webp",
  "photo-1612817288484-6f91600613a5": "/imagens/trilha_perfumaria.webp",
  "photo-1622372738946-62e02505fe3b": "/imagens/trilha_perfumaria.webp",
  "photo-1583947211879-46b31de8a573": "/imagens/trilha_perfumaria.webp",
  "photo-1621605815971-fbc98d665ca7": "/imagens/trilha_perfumaria.webp",
  "photo-1546552768-9e3a94b38a59": "/imagens/trilha_perfumaria.webp",
  "photo-1594035910387-fea47794261f": "/imagens/trilha_perfumaria.webp",
  "photo-1604654517306-89e72c9b9c3b": "/imagens/trilha_perfumaria.webp",
  "photo-1526947425960-945c6e72858f": "/imagens/trilha_perfumaria.webp",
  "photo-1560066984-138dadb4c035": "/imagens/trilha_perfumaria.webp",
  "photo-1606913084604-d42f4c2c1e6f": "/imagens/trilha_perfumaria.webp",
  "photo-1584820927496-c505053461b7": "/imagens/trilha_perfumaria.webp",
  "photo-1541643600914-78b084683601": "/imagens/trilha_perfumaria.webp",
  "photo-1576671081837-4900028a1b2f": "/imagens/bioimpedance_scale.webp",
  "photo-1593095948071-474c5cc2c1cf": "/imagens/bioimpedance_scale.webp",
  "photo-1544027993-37dbfc435a3a": "/imagens/bioimpedance_scale.webp",
  "photo-1606107557195-0e29a2b5ee4c": "/imagens/bioimpedance_scale.webp",
  "photo-1609050470947-f35aa6071497": "/imagens/trilha_perfumaria.webp",
  "photo-1542601906990-b4d3fb778b09": "/imagens/trilha_perfumaria.webp",
  "photo-1541781774459-bb2af2f05b55": "/imagens/sleep_quality.webp",
  "photo-1631049307264-da0ec9d70304": "/imagens/sleep_quality.webp",
  "photo-1507525428034-b723cf961d3e": "/imagens/hydration_water.webp",
  "photo-1567016526105-22da3c84e4e4": "/imagens/trilha_perfumaria.webp",
  "photo-1573883429746-084be9b5cfca": "/imagens/trilha_medicamentos.webp",
  "photo-1579154204601-01588f351e67": "/imagens/trilha_medicamentos.webp",
  "photo-1584308666744-19c4e5e9e0b1": "/imagens/trilha_medicamentos.webp",
  "photo-1581595219315-a1b0c2a3dc52": "/imagens/trilha_medicamentos.webp",
  "photo-1587854692152-cbe660dbde88": "/imagens/trilha_medicamentos.webp",
  "photo-1588776814546-1ffcf47267a5": "/imagens/trilha_medicamentos.webp",
  "photo-1576091358783-a212ec293ff3": "/imagens/trilha_medicamentos.webp",
  "photo-1550572017-edd951b55104": "/imagens/hero_pills.webp",
  "photo-1582750433443-6c0e3c7f15a0": "/imagens/hero_pills.webp",
  "photo-1584483766114-2cea6facdf57": "/imagens/trilha_medicamentos.webp",
  "photo-1559847844-5315695dadae": "/imagens/trilha_medicamentos.webp",
  "photo-1498746607408-1e56960e3bdd": "/imagens/trilha_medicamentos.webp",
  "photo-1631549916768-4119b2e5f926": "/imagens/trilha_medicamentos.webp",
  "photo-1450101499163-c8848c66ca85": "/imagens/trilha_medicamentos.webp",
  "photo-1551847633-314d50cd36e5": "/imagens/trilha_medicamentos.webp",
  "photo-1584515933487-779824d29309": "/imagens/trilha_operacional.webp",
  "photo-1559757175-5700dde675bc": "/imagens/trilha_medicamentos.webp",
  "photo-1584515979956-d9f6e5d09982": "/imagens/trilha_medicamentos.webp",
  "photo-1579684453375-5f0e9e3c8f4b": "/imagens/trilha_medicamentos.webp",
  "photo-1525081905268-fc0b46e9d786": "/imagens/consult_pharmacist.webp",
  "photo-1559839734-2b71ea197ec2": "/imagens/consult_pharmacist.webp",
  "photo-1551836022-d5d88e9218df": "/imagens/consult_pharmacist.webp",
  "photo-1573497019940-1c28c88b4f3e": "/imagens/consult_pharmacist.webp",
  "photo-1544717297-fa95b6eb9642": "/imagens/trilha_operacional.webp",
  "photo-1522071820081-009f0129c71c": "/imagens/trilha_encantamento.webp",
  "photo-1592494645549-b24c87c42151": "/imagens/hero_brain_model.webp",
  "photo-1586281380349-632531db7ed4": "/imagens/hero_brain_model.webp",
  "photo-1563453392212-326f5e854473": "/imagens/hero_brain_model.webp",
  "photo-1602928298849-325cec8771c9": "/imagens/trilha_encantamento.webp",
  "photo-1556228721-0ca6e7f6b4e1": "/imagens/trilha_encantamento.webp",
  "photo-1556742049-0cfed4f6a45d": "/imagens/consult_pharmacist.webp",
  "photo-1567894340315-735d7c361db7": "/imagens/trilha_perfumaria.webp",
  "photo-1592945403244-b3fbafd7f539": "/imagens/trilha_perfumaria.webp",
};

const foto = (id: string, w = 1280) => _localImg[id] ?? _localImg["photo-1573883429746-084be9b5cfca"];

export const imagensCategoria = {
  protetorSolar: foto("photo-1556228578-8c89e0a6d41f"),
  fralda: foto("photo-1584464491033-06628f3a6b7b"),
  mamadeira: foto("photo-1515488042361-ee00e616ede3"),
  formula: foto("photo-1579683256318-48ea279b43d8"),
  leitePo: foto("photo-1563636619-e9143da7973b"),
  shampoo: foto("photo-1527799824074-22fd7014e2f7"),
  cosmeticos: foto("photo-1596462502278-27bfd403348e"),
  dermocosmetico: foto("photo-1612817288484-6f91600613a5"),
  higieneOral: foto("photo-1622372738946-62e02505fe3b"),
  absorvente: foto("photo-1583947211879-46b31de8a573"),
  barba: foto("photo-1621605815971-fbc98d665ca7"),
  sabonetes: foto("photo-1546552768-9e3a94b38a59"),
  desodorantes: foto("photo-1594035910387-fea47794261f"),
  unhas: foto("photo-1604654517306-89e72c9b9c3b"),
  cabelos: foto("photo-1526947425960-945c6e72858f"),
  coloracao: foto("photo-1560066984-138dadb4c035"),
  acessoriosBanho: foto("photo-1606913084604-d42f4c2c1e6f"),
  acessoriosInfantis: foto("photo-1584820927496-c505053461b7"),
  perfume: foto("photo-1541643600914-78b084683601"),
  suplementos: foto("photo-1576671081837-4900028a1b2f"),
  proteinas: foto("photo-1593095948071-474c5cc2c1cf"),
  pes: foto("photo-1544027993-37dbfc435a3a"),
  palmilhas: foto("photo-1606107557195-0e29a2b5ee4c"),
  cleanBeauty: foto("photo-1609050470947-f35aa6071497"),
  sustentabilidade: foto("photo-1542601906990-b4d3fb778b09"),
  sono: foto("photo-1541781774459-bb2af2f05b55"),
  travesseiro: foto("photo-1631049307264-da0ec9d70304"),
  verao: foto("photo-1507525428034-b723cf961d3e"),
  inverno: foto("photo-1567016526105-22da3c84e4e4"),
  // MEDICAMENTOS
  medicamentos: foto("photo-1573883429746-084be9b5cfca"),
  principioAtivo: foto("photo-1579154204601-01588f351e67"),
  formasFarmaceuticas: foto("photo-1584308666744-19c4e5e9e0b1"),
  viasAdmin: foto("photo-1581595219315-a1b0c2a3dc52"),
  tarjas: foto("photo-1587854692152-cbe660dbde88"),
  mip: foto("photo-1588776814546-1ffcf47267a5"),
  genericos: foto("photo-1576091358783-a212ec293ff3"),
  analgesicos: foto("photo-1550572017-edd951b55104"),
  antiinflamatorios: foto("photo-1582750433443-6c0e3c7f15a0"),
  gripe: foto("photo-1584483766114-2cea6facdf57"),
  gastro: foto("photo-1559847844-5315695dadae"),
  fungos: foto("photo-1498746607408-1e56960e3bdd"),
  antibioticos: foto("photo-1631549916768-4119b2e5f926"),
  receitas: foto("photo-1450101499163-c8848c66ca85"),
  farmaciaPopular: foto("photo-1551847633-314d50cd36e5"),
  primeirosSocorros: foto("photo-1584515933487-779824d29309"),
  glp1: foto("photo-1559757175-5700dde675bc"),
  injetaveis: foto("photo-1584515979956-d9f6e5d09982"),
  adesao: foto("photo-1579684453375-5f0e9e3c8f4b"),
  encaminhamento: foto("photo-1525081905268-fc0b46e9d786"),
  // ATENDIMENTO E RELACIONAMENTO
  atendimento: foto("photo-1559839734-2b71ea197ec2"),
  atendimentoAvancado: foto("photo-1551836022-d5d88e9218df"),
  comunicacao: foto("photo-1573497019940-1c28c88b4f3e"),
  organizacao: foto("photo-1544717297-fa95b6eb9642"),
  equipe: foto("photo-1522071820081-009f0129c71c"),
  // MÓDULOS — FUNDOS CINEMATOGRÁFICOS
  fundamentos: foto("photo-1588776814546-1ffcf47267a5"),
  bula: foto("photo-1592494645549-b24c87c42151"),
  classes: foto("photo-1584308666744-19c4e5e9e0b1"),
  receituarios: foto("photo-1586281380349-632531db7ed4"),
  seguranca: foto("photo-1563453392212-326f5e854473"),
  oferecimento: foto("photo-1602928298849-325cec8771c9"),
  comunicacaoPessoas: foto("photo-1556228721-0ca6e7f6b4e1"),
  apoio: foto("photo-1573497019940-1c28c88b4f3e"),
  atendimentoHumano: foto("photo-1556742049-0cfed4f6a45d"),
  operacionalLoja: foto("photo-1584515933487-779824d29309"),
  higieneProdutos: foto("photo-1576671081837-4900028a1b2f"),
  peleCuidados: foto("photo-1612817288484-6f91600613a5"),
  cabelosTratamento: foto("photo-1567894340315-735d7c361db7"),
  perfumesModulo: foto("photo-1592945403244-b3fbafd7f539"),
  infantilModulo: foto("photo-1515488042361-ee00e616ede3"),
} as const;

/** Logos via Wikimedia Commons (identificação educativa no balcão). */
const logoWiki = (path: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`;

export const marcasHigiene: MarcaMidia[] = [
  { nome: "Nivea", logoUrl: logoWiki("5/5a/Nivea_logo.svg/320px-Nivea_logo.svg.webp") },
  {
    nome: "Johnson's Baby",
    logoUrl: logoWiki("8/8a/Johnson%27s_Baby_logo.svg/320px-Johnson%27s_Baby_logo.svg.webp"),
  },
  { nome: "Pampers", logoUrl: logoWiki("6/6e/Pampers_logo.svg/320px-Pampers_logo.svg.webp") },
  { nome: "Huggies", logoUrl: logoWiki("4/4a/Huggies_logo.svg/320px-Huggies_logo.svg.webp") },
  {
    nome: "La Roche-Posay",
    logoUrl: logoWiki("1/1f/La_Roche-Posay_logo.svg/320px-La_Roche-Posay_logo.svg.webp"),
  },
  { nome: "Vichy", logoUrl: logoWiki("8/8e/Vichy_logo.svg/320px-Vichy_logo.svg.webp") },
];


export const marcasFarmaceuticas: MarcaMidia[] = [
  { nome: "EMS", logoUrl: logoWiki("7/72/EMS_logo.svg/320px-EMS_logo.svg.webp") },
  { nome: "Medley", logoUrl: logoWiki("5/5c/Medley_logo.svg/320px-Medley_logo.svg.webp") },
  { nome: "Neo Química", logoUrl: logoWiki("1/16/Neo_Qu%C3%ADmica_logo.svg/320px-Neo_Qu%C3%ADmica_logo.svg.webp") },
  { nome: "Eurofarma", logoUrl: logoWiki("1/1d/Eurofarma_logo.svg/320px-Eurofarma_logo.svg.webp") },
  { nome: "Aché", logoUrl: logoWiki("c/c6/Ach%C3%A9_logo.svg/320px-Ach%C3%A9_logo.svg.webp") },
];

export const produtosMIP: ProdutoMidia[] = [
  { nome: "Paracetamol 500mg", imagemUrl: imagensCategoria.mip, alt: "Paracetamol comprimidos", categoria: "MIP" },
  { nome: "Dipirona sódica", imagemUrl: imagensCategoria.mip, alt: "Dipirona gotas", categoria: "MIP" },
  { nome: "Ibuprofeno 600mg", imagemUrl: imagensCategoria.analgesicos, alt: "Ibuprofeno comprimidos", categoria: "MIP" },
  { nome: "Loratadina 10mg", imagemUrl: imagensCategoria.gripe, alt: "Loratadina antialérgico", categoria: "MIP" },
];

export const produtosGenericos: ProdutoMidia[] = [
  { nome: "Genérico Paracetamol", imagemUrl: imagensCategoria.genericos, alt: "Paracetamol genérico", categoria: "Genérico" },
  { nome: "Genérico Amoxicilina", imagemUrl: imagensCategoria.genericos, alt: "Amoxicilina genérica", categoria: "Genérico" },
  { nome: "Genérico Omeprazol", imagemUrl: imagensCategoria.genericos, alt: "Omeprazol genérico", categoria: "Genérico" },
];

export const produtosAntibioticos: ProdutoMidia[] = [
  { nome: "Amoxicilina 500mg", imagemUrl: imagensCategoria.antibioticos, alt: "Amoxicilina cápsulas", categoria: "Antibiótico" },
  { nome: "Azitromicina 500mg", imagemUrl: imagensCategoria.antibioticos, alt: "Azitromicina comprimidos", categoria: "Antibiótico" },
  { nome: "Cefalexina 500mg", imagemUrl: imagensCategoria.antibioticos, alt: "Cefalexina cápsulas", categoria: "Antibiótico" },
];

export const marcasNutricao: MarcaMidia[] = [
  { nome: "Nestlé Nutrition", logoUrl: logoWiki("4/4e/Nestl%C3%A9_logo.svg/320px-Nestl%C3%A9_logo.svg.webp") },
  { nome: "Danone", logoUrl: logoWiki("1/1e/Danone_logo.svg/320px-Danone_logo.svg.webp") },
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

    // FARMACÊUTICAS
    "mip-marcas": { marcas: marcasFarmaceuticas, produtos: produtosMIP },
    "genericos-marcas": { marcas: marcasFarmaceuticas.filter(m => ["EMS", "Medley", "Eurofarma"].includes(m.nome)), produtos: produtosGenericos },
    "antibioticos-marcas": { marcas: marcasFarmaceuticas.filter(m => ["EMS", "Eurofarma", "Aché"].includes(m.nome)), produtos: produtosAntibioticos },
  };
  return mapa[aulaId] ?? {};
}
