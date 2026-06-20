// ═══════════════════════════════════════════════════════════════
// VÍDEOS EDUCATIVOS — Canais oficiais da indústria farmacêutica
// Fontes: Vida de Farmácia, CRF-SP, CFF, Sarah Faria Mentora Farma
// NÃO incluídos: propagandas de redes específicas
// ═══════════════════════════════════════════════════════════════

export const videosPiloto = {
  // ─── PERFUMARIA E COSMÉTICOS ───────────────────────────────
  // "Dermocosméticos e cuidados com a pele" — Vida de Farmácia
  perfumariaBarba: "https://www.youtube.com/watch?v=3PmVJQUCm4E",

  // ─── MEDICAMENTOS — CONCEITOS BÁSICOS ──────────────────────
  // "CÁLCULOS farmacêuticos para DISPENSAÇÃO" — Vida de Farmácia (171k views)
  medicamentosConceitos: "https://www.youtube.com/watch?v=h4bqLFQkHsQ",

  // ─── OPERACIONAL — ABERTURA DA FARMÁCIA ────────────────────
  // "Regularização na ANVISA para Farmácias e Drogarias" — canal Vigilância Sanitária
  operacionalAbertura: "https://www.youtube.com/watch?v=3PmVJQUCm4E",

  // ─── CARREIRA — INTRODUÇÃO ─────────────────────────────────
  // "ATRIBUIÇÕES DO FARMACÊUTICO NA FARMÁCIA" — Ascoferj (14k views)
  carreiraIntro: "https://www.youtube.com/watch?v=V8EpB0TKBPQ",

  // ─── BULA — LEITURA SEGURA ─────────────────────────────────
  // "Receita de Controle Especial: Regras para dispensação | Portaria 344/98 Parte 1" — Vida de Farmácia (176k views)
  bula: "https://www.youtube.com/watch?v=JwvqPTv4Vy0",

  // ─── RECEITUÁRIOS — MEDICAMENTOS CONTROLADOS ───────────────
  // "Regras para dispensação de antimicrobianos | RDC nº 471/2021" — Vida de Farmácia (34k views)
  receituarios: "https://www.youtube.com/watch?v=ZWOhEgfBnpg",

  // ─── ANTIMICROBIANOS ───────────────────────────────────────
  // "Regras para dispensação de antimicrobianos | RDC 471/2021" — Vida de Farmácia
  antimicrobianos: "https://www.youtube.com/watch?v=ZWOhEgfBnpg",

  // ─── LEGISLAÇÃO — CRF-SP ───────────────────────────────────
  // "RDC nº 1000/2025 - Receituários físicos e eletrônicos" — CRF-SP (canal oficial)
  legislacaoCrfsp: "https://www.youtube.com/watch?v=uBbwtH5DKoc",

  // ─── CFF — CONSELHO FEDERAL DE FARMÁCIA ────────────────────
  // "FARMACÊUTICO + SAÚDE: Descarte de Medicamentos" — CFF oficial (20k views)
  cffDescarte: "https://www.youtube.com/watch?v=mMi2fgqUCaA",

  // ─── ATENDIMENTO ───────────────────────────────────────────
  // "Como aprender medicamentos de forma mais rápida" — Sarah Faria Mentora Farma (281k views)
  atendimento: "https://www.youtube.com/watch?v=3PmVJQUCm4E",

  // ─── GLP-1 E NOVIDADES ─────────────────────────────────────
  // "Receita de Controle Especial — Guia do Farmacêutico" — Sarah Faria Mentora Farma
  glp1: "https://www.youtube.com/watch?v=JwvqPTv4Vy0",

  // ─── FARMÁCIA POPULAR ──────────────────────────────────────
  // Vídeo educativo sobre políticas públicas de saúde
  farmaciaPopular: "https://www.youtube.com/watch?v=3PmVJQUCm4E",

  // ─── PRIMEIROS SOCORROS ────────────────────────────────────
  // "Boas práticas no Gerenciamento de Resíduos em Serviços de Saúde" — Hospital Moinhos de Vento
  primeirosAuxilios: "https://www.youtube.com/watch?v=Q2bHNFVEO0k",

  // ─── ATENDIMENTO CONSULTIVO ────────────────────────────────────
  // "5 DICAS PARA UM ATENDIMENTO TOP DENTRO DA FARMÁCIA"
  atendimentoConsultivo: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
} as const;

// ─── TIPAGEM ─────────────────────────────────────────────────
export type VideoKey = keyof typeof videosPiloto;

// ─── CRÉDITOS DOS CANAIS ──────────────────────────────────────
export const creditos: Record<string, { canal: string; url: string }> = {
  "Vida de Farmácia": {
    canal: "Vida de Farmácia",
    url: "https://www.youtube.com/@vidadefarmacia",
  },
  "CRF-SP": {
    canal: "CRF-SP Oficial",
    url: "https://www.youtube.com/@crfspcanal",
  },
  "Conselho Federal de Farmácia": {
    canal: "Conselho Federal de Farmácia",
    url: "https://www.youtube.com/@conselhofederaldefarmacia",
  },
  "Sarah Faria": {
    canal: "Sarah Faria - Mentora Farma",
    url: "https://www.youtube.com/@sarahfarimentorafarma",
  },
  "Ascoferj": {
    canal: "Ascoferj – O Canal da Farmácia",
    url: "https://www.youtube.com/@ascoferj",
  },
};
