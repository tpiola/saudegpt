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
  };
  return mapa[aulaId] ?? {};
}
