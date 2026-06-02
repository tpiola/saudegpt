import type { MarcaMidia, ProdutoMidia } from "./types";

/** Imagens públicas de alta qualidade (Unsplash — licença livre para uso). */
const foto = (id: string, w = 1280) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

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
  sabonetes: foto("photo-1556228578-8c89e0a6d41f"),
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
  };
  return mapa[aulaId] ?? {};
}
