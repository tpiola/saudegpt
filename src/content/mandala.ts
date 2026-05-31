// Mandala pedagógica de saúde integral: centro (pessoa) + 4 anéis.

export interface AnelMandala {
  nivel: number;
  titulo: string;
  itens: string[];
}

export const mandalaCentro = "A pessoa";

export const mandalaAneis: AnelMandala[] = [
  {
    nivel: 1,
    titulo: "Valores",
    itens: ["Cuidar de gente", "Executar com foco", "Construir o futuro"],
  },
  {
    nivel: 2,
    titulo: "Responsabilidades",
    itens: ["Pessoas mais saudáveis", "Negócio mais saudável", "Planeta mais saudável"],
  },
  {
    nivel: 3,
    titulo: "Pilares de autocuidado",
    itens: ["Alimentação", "Movimento", "Sono", "Equilíbrio", "Saúde"],
  },
  {
    nivel: 4,
    titulo: "Operação de loja",
    itens: ["Balcão", "Perfumaria", "Medicamentos", "Serviços", "Adesão", "Dados"],
  },
];
