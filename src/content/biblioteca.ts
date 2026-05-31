// Biblioteca regulatória "viva": núcleo mínimo de normas para o balcão,
// com destaque para as atualizações críticas mais recentes.

export interface NormaRegulatoria {
  id: string;
  titulo: string;
  norma: string;
  orgao: string;
  resumo: string;
  pontosChave: string[];
  atualizado: boolean;
  categoria: "Boas Práticas" | "Dispensação" | "Atribuições" | "Acesso" | "Controle";
}

export const bibliotecaRegulatoria: NormaRegulatoria[] = [
  {
    id: "rdc-471-2021",
    titulo: "Antimicrobianos — referência atual",
    norma: "RDC 471/2021",
    orgao: "Anvisa",
    categoria: "Dispensação",
    atualizado: true,
    resumo:
      "A RDC 471/2021 substituiu a antiga RDC 20/2011 como referência para o controle de antimicrobianos. O curso deve abandonar a RDC 20/2011 como regra vigente.",
    pontosChave: [
      "Antimicrobianos exigem prescrição e retenção/registro.",
      "A RDC 471/2021 é a referência atual (substituiu a RDC 20/2011).",
      "Reforçar adesão completa para evitar resistência bacteriana.",
    ],
  },
  {
    id: "in-360-2025-glp1",
    titulo: "Agonistas de GLP-1 — retenção de receita",
    norma: "IN 360/2025",
    orgao: "Anvisa",
    categoria: "Controle",
    atualizado: true,
    resumo:
      "Desde 23/06/2025, os agonistas do receptor de GLP-1 listados pela IN 360/2025 passaram a ser dispensados com retenção de receita.",
    pontosChave: [
      "Retenção de receita a partir de 23/06/2025; validade da receita de 90 dias.",
      "Prescrição eletrônica com assinatura avançada admitida; escrituração interna obrigatória.",
      "Integração com o SNGPC conforme cronograma da Anvisa.",
      "Exemplos: semaglutida, liraglutida, dulaglutida, tirzepatida. Foco no uso racional.",
    ],
  },
  {
    id: "farmacia-popular-2025",
    titulo: "Farmácia Popular — gratuidade ampliada",
    norma: "Programa Farmácia Popular (2025)",
    orgao: "Ministério da Saúde",
    categoria: "Acesso",
    atualizado: true,
    resumo:
      "Desde 14/02/2025, o programa passou a disponibilizar gratuitamente 100% dos medicamentos e insumos do elenco.",
    pontosChave: [
      "Gratuidade de 100% do elenco desde 14/02/2025.",
      "Cobertura de 12 indicações de saúde.",
      "Inclui fraldas geriátricas.",
      "Absorventes higiênicos para beneficiárias do Programa Dignidade Menstrual.",
    ],
  },
  {
    id: "rdc-44-2009",
    titulo: "Boas Práticas Farmacêuticas",
    norma: "RDC 44/2009 (e alterações)",
    orgao: "Anvisa",
    categoria: "Boas Práticas",
    atualizado: false,
    resumo:
      "Define boas práticas farmacêuticas para o controle sanitário do funcionamento, dispensação e comercialização em farmácias e drogarias.",
    pontosChave: [
      "Organização, armazenamento e dispensação seguros.",
      "Base para a rotina operacional do balcão.",
    ],
  },
  {
    id: "rdc-197-2017",
    titulo: "Serviços de vacinação em farmácias",
    norma: "RDC 197/2017",
    orgao: "Anvisa",
    categoria: "Boas Práticas",
    atualizado: false,
    resumo: "Estabelece requisitos mínimos para o funcionamento dos serviços de vacinação humana em farmácias.",
    pontosChave: [
      "Requisitos mínimos de estrutura e segurança para vacinação.",
      "Cadeia de frio e descarte adequados.",
    ],
  },
  {
    id: "rdc-882-2024-mip",
    titulo: "MIP e a Lista de Medicamentos Isentos de Prescrição",
    norma: "RDC 882/2024 / LMIP",
    orgao: "Anvisa",
    categoria: "Dispensação",
    atualizado: true,
    resumo:
      "Os MIP seguem a RDC 882/2024; a atualização expressa da LMIP está prevista para 2026. Orientação responsável continua sendo dever do balcão.",
    pontosChave: [
      "MIP/OTC tratam sintomas leves e autolimitados, com orientação.",
      "A lista é atualizada pela Anvisa (alinhada à RDC 882/2024).",
      "Triagem evita mascarar quadros graves.",
    ],
  },
  {
    id: "rdc-768-2022",
    titulo: "Rotulagem e venda sob prescrição",
    norma: "RDC 768/2022",
    orgao: "Anvisa",
    categoria: "Dispensação",
    atualizado: false,
    resumo: "Trata de rotulagem e da distinção da venda de medicamentos sob prescrição.",
    pontosChave: ["Identificação de tarjas e exigência de receita.", "Clareza na rotulagem."],
  },
  {
    id: "portaria-344-1998",
    titulo: "Substâncias sob controle especial",
    norma: "Portaria SVS/MS 344/1998",
    orgao: "Anvisa / MS",
    categoria: "Controle",
    atualizado: true,
    resumo:
      "Base das substâncias sujeitas a controle especial, atualizada dinamicamente por RDCs posteriores (inclusive 2024). É conteúdo de 'hub ao vivo', não de consulta estática.",
    pontosChave: [
      "Lista base de controlados, com listas A e B (notificação) e C (controle especial).",
      "Atualizada por RDCs posteriores — acompanhar a consolidação oficial.",
    ],
  },
  {
    id: "cff-585-2013",
    titulo: "Atribuições clínicas do farmacêutico",
    norma: "Resolução CFF 585/2013",
    orgao: "Conselho Federal de Farmácia",
    categoria: "Atribuições",
    atualizado: false,
    resumo:
      "Regulamenta as atribuições clínicas do farmacêutico: cuidado ao paciente, orientação, uso racional, apoio ao autocuidado, avaliação de adesão e encaminhamento.",
    pontosChave: [
      "Define o que é ato do farmacêutico — e o que orienta os limites da equipe de balcão.",
      "Cuidado, comunicação e uso racional como pilares.",
    ],
  },
  {
    id: "cff-586-2013",
    titulo: "Prescrição farmacêutica",
    norma: "Resolução CFF 586/2013",
    orgao: "Conselho Federal de Farmácia",
    categoria: "Atribuições",
    atualizado: false,
    resumo: "Regula a prescrição farmacêutica dentro das competências do profissional.",
    pontosChave: ["Limites e competências da prescrição farmacêutica.", "Atuação dentro do escopo legal."],
  },
];

export const categoriasRegulatorias = [
  "Boas Práticas",
  "Dispensação",
  "Atribuições",
  "Acesso",
  "Controle",
] as const;
