import type { Trilha } from "./types";
import { q } from "./_helpers";
import { imagensCategoria } from "./midia-catalogo";

// ─────────────────────────────────────────────────────────────
// TRILHA — Nutrição: Fundamentos e Ciência dos Alimentos
// Curso: Formação Completa para Auxiliar de Nutricionista
// Registro: CRN | Carga: 180h | 17 Módulos
// ─────────────────────────────────────────────────────────────
export const trilhaNutricaoFundamentos: Trilha = {
  id: "nutricao-fundamentos",
  numero: 1,
  titulo: "Fundamentos da Nutrição",
  subtitulo: "Auxiliar de Nutricionista — Módulo I",
  descricao:
    "Base científica da nutrição: definições, história, classificação dos alimentos, guias alimentares oficiais e segurança alimentar. O alicerce para atuar com excelência sob supervisão do nutricionista.",
  nivelFaixa: "Do iniciante ao básico",
  icone: "apple",
  modulos: [
    // ═══════════════════════════════════════════════════════
    // MÓDULO 1 — Fundamentos da Nutrição e Ciência dos Alimentos
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-fundamentos",
      titulo: "Fundamentos da Nutrição e Ciência dos Alimentos",
      descricao:
        "Conceitos fundamentais da nutrição como ciência, história da alimentação humana, classificação dos alimentos e princípios básicos da nutrição aplicada à saúde.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-definicao",
          titulo: "O que é Nutrição? Definições e Conceitos Fundamentais",
          duracaoMin: 8,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Entenda o que é nutrição como ciência, a diferença entre alimentação e nutrição, e os conceitos de macro e micronutrientes que sustentam a prática profissional.",
          resumoExecutivo: [
            "Nutrição é a ciência que estuda os alimentos, seus nutrientes e a interação com o organismo humano.",
            "Alimentação é o ato voluntário de escolher e consumir alimentos; nutrição é o processo involuntário de absorção e metabolismo.",
            "Macronutrientes (carboidratos, proteínas, lipídeos) fornecem energia; micronutrientes (vitaminas, minerais) regulam funções vitais.",
          ],
          checklist: [
            "Diferenciar alimentação de nutrição com clareza.",
            "Identificar os 3 macronutrientes e suas funções principais.",
            "Compreender o papel dos micronutrientes na saúde.",
            "Saber explicar ao cliente que nutrição vai além de 'comer bem'.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente pergunta sobre interação entre suplementos e medicamentos.",
            "Cliente relata sintomas gastrointestinais persistentes relacionados à dieta.",
          ],
          errosComuns: [
            "Confundir alimentação (ato voluntário) com nutrição (processo metabólico).",
            "Achar que 'nutricionista' e 'nutrólogo' são a mesma profissão.",
            "Recomendar dietas restritivas sem embasamento científico.",
          ],
          quiz: [
            q(
              "Qual a diferença fundamental entre alimentação e nutrição?",
              [
                "Não há diferença — são sinônimos.",
                "Alimentação é voluntária; nutrição é o processo metabólico involuntário.",
                "Nutrição é só sobre vitaminas; alimentação é sobre comida.",
                "Alimentação é o que se come em casa; nutrição é hospitalar.",
              ],
              1,
              "Alimentação é o ato consciente de ingerir alimentos. Nutrição é o que o corpo faz depois: digerir, absorver, metabolizar.",
            ),
            q(
              "Quais são os três macronutrientes?",
              [
                "Vitaminas, minerais e água.",
                "Carboidratos, proteínas e lipídeos.",
                "Fibras, antioxidantes e enzimas.",
                "Cálcio, ferro e zinco.",
              ],
              1,
              "Macronutrientes são nutrientes que precisamos em grandes quantidades: carboidratos, proteínas e lipídeos (gorduras).",
            ),
            q(
              "Qual a função principal dos micronutrientes?",
              [
                "Fornecer energia imediata ao corpo.",
                "Construir massa muscular.",
                "Regular funções vitais — metabolismo, imunidade, crescimento.",
                "Armazenar gordura para reserva energética.",
              ],
              2,
              "Micronutrientes (vitaminas e minerais) não fornecem energia, mas são essenciais para regular o metabolismo e manter a saúde.",
            ),
          ],
          xp: 40,
        },
        {
          id: "nutricao-historia",
          titulo: "História da Alimentação Humana e Evolução Nutricional",
          duracaoMin: 10,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.proteinas,
          resumo:
            "Da pré-história à era industrial: como a alimentação humana evoluiu e como essas mudanças impactam a saúde até hoje.",
          resumoExecutivo: [
            "Na pré-história, a dieta era baseada em caça, pesca e coleta — rica em proteínas e fibras, pobre em açúcares.",
            "A Revolução Agrícola (10.000 a.C.) trouxe grãos e laticínios, mas reduziu a diversidade alimentar.",
            "A Revolução Industrial introduziu alimentos ultraprocessados, aumentando doenças crônicas.",
          ],
          comparativo: {
            titulo: "Evolução da Dieta Humana",
            itens: [
              { nome: "Pré-história", quando: "Caça, pesca, frutos — dieta rica em proteínas e fibras, sem açúcar refinado." },
              { nome: "Revolução Agrícola", quando: "Grãos, laticínios — mais carboidratos, menos diversidade nutricional." },
              { nome: "Era Industrial", quando: "Alimentos ultraprocessados, aditivos químicos — aumento de obesidade e DCNTs." },
            ],
          },
          checklist: [
            "Compreender as 3 fases da evolução alimentar humana.",
            "Relacionar o aumento de ultraprocessados com doenças crônicas.",
            "Orientar clientes sobre a importância de alimentos in natura.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com múltiplas DCNTs (diabetes + hipertensão) busca orientação alimentar.",
          ],
          errosComuns: [
            "Romantizar dietas ancestrais sem contexto científico.",
            "Demonizar todos os alimentos processados igualmente.",
          ],
          quiz: [
            q(
              "Qual foi o principal impacto da Revolução Agrícola na dieta humana?",
              [
                "Aumento do consumo de proteína animal.",
                "Introdução de grãos e redução da diversidade alimentar.",
                "Invenção dos suplementos vitamínicos.",
                "Fim do consumo de frutas e vegetais.",
              ],
              1,
              "A Revolução Agrícola introduziu o cultivo de grãos, aumentando carboidratos na dieta e reduzindo a variedade de alimentos consumidos.",
            ),
          ],
          xp: 40,
        },
        {
          id: "nutricao-classificacao",
          titulo: "Classificação dos Alimentos",
          duracaoMin: 12,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Aprenda a classificar alimentos por origem, composição, função e processamento — ferramenta essencial para orientar clientes e apoiar o nutricionista.",
          resumoExecutivo: [
            "Classificação por origem: animal, vegetal, mineral e fungos.",
            "Classificação por função: energéticos, construtores, reguladores.",
            "Classificação NOVA (Guia Alimentar): in natura, minimamente processados, processados, ultraprocessados.",
          ],
          comparativo: {
            titulo: "Grupos Alimentares por Função",
            itens: [
              { nome: "Energéticos", quando: "Carboidratos e lipídeos — fornecem energia para o corpo (arroz, pão, óleos)." },
              { nome: "Construtores", quando: "Proteínas — constroem e reparam tecidos (carnes, ovos, leguminosas)." },
              { nome: "Reguladores", quando: "Vitaminas e minerais — regulam o metabolismo (frutas, verduras, legumes)." },
            ],
          },
          checklist: [
            "Classificar qualquer alimento por origem e função.",
            "Identificar ultraprocessados pela lista de ingredientes (5+ itens, aditivos).",
            "Explicar a diferença entre processado e ultraprocessado.",
            "Utilizar a classificação NOVA no dia a dia.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente quer substituir refeições completas por suplementos industrializados.",
          ],
          errosComuns: [
            "Achar que 'integral' sempre significa saudável (pode ser ultraprocessado integral).",
            "Confundir 'processado' (ex: legumes em conserva) com 'ultraprocessado' (ex: salgadinho de pacote).",
          ],
          quiz: [
            q(
              "Segundo a classificação NOVA, um pão de forma industrializado é:",
              [
                "Alimento in natura.",
                "Alimento minimamente processado.",
                "Alimento processado.",
                "Alimento ultraprocessado.",
              ],
              3,
              "Pães de forma industriais contêm múltiplos ingredientes e aditivos, sendo classificados como ultraprocessados pela NOVA.",
            ),
          ],
          xp: 50,
        },
        {
          id: "nutricao-guia-alimentar",
          titulo: "Pirâmide Alimentar Brasileira e Guia Alimentar para a População Brasileira",
          duracaoMin: 10,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Domine as duas principais ferramentas de orientação nutricional do Brasil: a pirâmide alimentar e o Guia Alimentar do Ministério da Saúde.",
          resumoExecutivo: [
            "A Pirâmide Alimentar Brasileira divide os alimentos em 4 níveis (base: cereais/energéticos; topo: açúcares/gorduras).",
            "O Guia Alimentar (2014) usa a regra de ouro: 'Prefira alimentos in natura ou minimamente processados'.",
            "Ambas as ferramentas recomendam limitar ultraprocessados e priorizar diversidade alimentar.",
          ],
          checklist: [
            "Explicar os 4 níveis da pirâmide alimentar.",
            "Recitar a regra de ouro do Guia Alimentar.",
            "Usar o Guia Alimentar como referência em conversas com clientes.",
            "Diferenciar as duas ferramentas: pirâmide (quantidades) vs guia (qualidade).",
          ],
          quandoChamarFarmaceutico: [
            "Cliente precisa de plano alimentar individualizado.",
            "Cliente com restrições alimentares severas (alergias múltiplas).",
          ],
          errosComuns: [
            "Usar a pirâmide como regra rígida, ignorando individualidades.",
            "Desconhecer que a pirâmide foi atualizada em 2013 (versão brasileira).",
          ],
          quiz: [
            q(
              "Qual é a regra de ouro do Guia Alimentar para a População Brasileira?",
              [
                "Comer de 3 em 3 horas.",
                "Prefira alimentos in natura ou minimamente processados.",
                "Evite totalmente gorduras.",
                "Consuma 2 litros de água por dia.",
              ],
              1,
              "A regra de ouro do Guia Alimentar (MS, 2014) é clara: 'Prefira alimentos in natura ou minimamente processados e preparações culinárias a alimentos ultraprocessados.'",
            ),
          ],
          xp: 40,
        },
        {
          id: "nutricao-seguranca-alimentar",
          titulo: "Segurança Alimentar e Nutricional",
          duracaoMin: 8,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Conceitos de segurança alimentar, legislação brasileira (LOSAN), higiene dos alimentos e o papel do auxiliar na garantia da qualidade nutricional.",
          resumoExecutivo: [
            "Segurança Alimentar e Nutricional (SAN) é o direito de todos ao acesso regular a alimentos de qualidade.",
            "A LOSAN (Lei 11.346/2006) criou o SISAN — Sistema Nacional de Segurança Alimentar.",
            "Higiene dos alimentos: contaminação física, química e biológica — prevenção no dia a dia.",
          ],
          simulacao: {
            cliente:
              "Maria, 35 anos: 'Quero cortar arroz, pão, macarrão... tudo! Li que carboidrato engorda e quero perder 10kg em um mês.'",
            falaBoa:
              "Maria, entendo sua vontade de alcançar seus objetivos. O Guia Alimentar do Ministério da Saúde recomenda que carboidratos representem 45-65% das calorias diárias. Cortá-los completamente pode causar fadiga, dor de cabeça e perda de massa muscular. O ideal é escolher carboidratos de melhor qualidade, como integrais, e ajustar as quantidades com orientação do nutricionista. Posso agendar uma consulta para você?",
            falaEvitar:
              "Isso mesmo! Corta tudo! Carboidrato é veneno. Toma esse termogênico aqui que você perde 10kg rapidinho.",
          },
          checklist: [
            "Compreender o conceito de SAN e sua importância legal.",
            "Conhecer a LOSAN como marco regulatório.",
            "Identificar os 3 tipos de contaminação alimentar.",
            "Orientar clientes sobre armazenamento seguro de alimentos.",
            "Saber quando encaminhar ao nutricionista (dietas restritivas).",
          ],
          quandoChamarFarmaceutico: [
            "Suspeita de contaminação alimentar com sintomas graves.",
            "Cliente em uso de medicamentos que interagem com alimentos.",
          ],
          errosComuns: [
            "Subestimar a importância da higiene na manipulação de alimentos.",
            "Achar que segurança alimentar é só 'não comer comida estragada'.",
          ],
          quiz: [
            q(
              "O que significa a sigla SAN?",
              [
                "Sistema Alimentar Nacional.",
                "Segurança Alimentar e Nutricional.",
                "Serviço de Atendimento Nutricional.",
                "Sociedade de Alimentação Natural.",
              ],
              1,
              "SAN significa Segurança Alimentar e Nutricional — direito de acesso a alimentos de qualidade, em quantidade suficiente, de modo permanente.",
            ),
          ],
          xp: 40,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 2 — Macronutrientes e Metabolismo Energético
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-macronutrientes",
      titulo: "Macronutrientes e Metabolismo Energético",
      descricao:
        "Carboidratos, proteínas e lipídeos em profundidade: digestão, absorção, necessidades diárias e fontes alimentares.",
      imagemHeroUrl: imagensCategoria.proteinas,
      aulas: [
        {
          id: "nutricao-carboidratos",
          titulo: "Carboidratos: Tipos, Funções e Fontes",
          duracaoMin: 15,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Carboidratos simples vs complexos, índice glicêmico, fibras e recomendações diárias.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
        {
          id: "nutricao-proteinas",
          titulo: "Proteínas: Estrutura, Função e Biodisponibilidade",
          duracaoMin: 15,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.proteinas,
          resumo: "Aminoácidos essenciais e não essenciais, fontes animais e vegetais, e o conceito de biodisponibilidade proteica.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
        {
          id: "nutricao-lipideos",
          titulo: "Lipídeos: Tipos, Funções e Impacto na Saúde",
          duracaoMin: 12,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Gorduras saturadas, insaturadas e trans, colesterol, ômega-3 e recomendações da OMS.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 3 — Micronutrientes: Vitaminas e Minerais
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-micronutrientes",
      titulo: "Micronutrientes: Vitaminas e Minerais",
      descricao:
        "Estudo detalhado das vitaminas lipossolúveis e hidrossolúveis, principais minerais e suas funções no organismo humano.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-vitaminas",
          titulo: "Vitaminas: Classificação, Funções e Deficiências",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Vitaminas A, D, E, K (lipossolúveis) e Complexo B, C (hidrossolúveis) — da teoria à prática.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
        {
          id: "nutricao-minerais",
          titulo: "Minerais Essenciais: Cálcio, Ferro, Zinco e Mais",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Principais minerais, suas funções, fontes alimentares e consequências da deficiência.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 4 — Avaliação Nutricional
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-avaliacao",
      titulo: "Avaliação Nutricional",
      descricao:
        "Técnicas e ferramentas de avaliação do estado nutricional: antropometria, anamnese alimentar, exames laboratoriais e triagem nutricional.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-antropometria",
          titulo: "Antropometria: Peso, Altura, IMC, Circunferências e Dobras Cutâneas",
          duracaoMin: 18,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Métodos de aferição, interpretação de medidas e limites de atuação do auxiliar de nutricionista.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
        {
          id: "nutricao-anamnese",
          titulo: "Anamnese Alimentar e Triagem Nutricional",
          duracaoMin: 15,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Recordatório 24h, questionário de frequência alimentar e ferramentas de triagem (MNA, NRS-2002).",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULOS 5 A 12 — Estrutura (conteúdo completo em desenvolvimento)
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-dietoterapia",
      titulo: "Dietoterapia Aplicada",
      descricao:
        "Princípios da dietoterapia nas principais condições clínicas: diabetes, hipertensão, dislipidemias, doenças renais e gastrointestinais.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-dietoterapia-intro",
          titulo: "Introdução à Dietoterapia",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas em breve.",
          resumoExecutivo: ["Conteúdo em desenvolvimento."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")],
          xp: 0,
        },
      ],
    },
    {
      id: "nutricao-ciclos-vida",
      titulo: "Nutrição nos Ciclos da Vida",
      descricao:
        "Necessidades nutricionais em cada fase: gestação, lactação, infância, adolescência, vida adulta e terceira idade.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-ciclos-intro",
          titulo: "Introdução à Nutrição nos Ciclos da Vida",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas em breve.",
          resumoExecutivo: ["Conteúdo em desenvolvimento."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")],
          xp: 0,
        },
      ],
    },
    {
      id: "nutricao-esportiva",
      titulo: "Nutrição Esportiva Básica",
      descricao:
        "Fundamentos da nutrição aplicada à atividade física: suplementação esportiva, hidratação e recomendações para diferentes modalidades.",
      imagemHeroUrl: imagensCategoria.proteinas,
      aulas: [
        {
          id: "nutricao-esportiva-intro",
          titulo: "Introdução à Nutrição Esportiva",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.proteinas,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas em breve.",
          resumoExecutivo: ["Conteúdo em desenvolvimento."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")],
          xp: 0,
        },
      ],
    },
    {
      id: "nutricao-suplementacao",
      titulo: "Suplementação Alimentar",
      descricao:
        "Guia prático sobre suplementos: proteicos, vitamínicos, termogênicos, antioxidantes — indicações, riscos e regulamentação ANVISA.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-suplementacao-intro",
          titulo: "Introdução à Suplementação Alimentar",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas em breve.",
          resumoExecutivo: ["Conteúdo em desenvolvimento."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")],
          xp: 0,
        },
      ],
    },
    {
      id: "nutricao-unidades-alimentacao",
      titulo: "Unidades de Alimentação e Nutrição (UAN)",
      descricao:
        "Funcionamento de UANs em hospitais, escolas e empresas: planejamento de cardápios, boas práticas de manipulação e controle higiênico-sanitário.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-uan-intro",
          titulo: "Introdução às UANs",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas em breve.",
          resumoExecutivo: ["Conteúdo em desenvolvimento."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")],
          xp: 0,
        },
      ],
    },
    {
      id: "nutricao-saude-coletiva",
      titulo: "Nutrição em Saúde Coletiva",
      descricao:
        "Políticas públicas de alimentação e nutrição (PNAN, PNAE), epidemiologia nutricional e atuação do auxiliar em programas de saúde pública.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-coletiva-intro",
          titulo: "Introdução à Nutrição em Saúde Coletiva",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas em breve.",
          resumoExecutivo: ["Conteúdo em desenvolvimento."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")],
          xp: 0,
        },
      ],
    },
    {
      id: "nutricao-etica",
      titulo: "Ética Profissional e Legislação do CRN",
      descricao:
        "Código de Ética do Nutricionista, limites da atuação do auxiliar, Lei 8.234/91 (regulamentação da profissão) e atribuições legais.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-etica-intro",
          titulo: "Ética e Legislação em Nutrição",
          duracaoMin: 15,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas em breve.",
          resumoExecutivo: ["Conteúdo em desenvolvimento."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")],
          xp: 0,
        },
      ],
    },
    {
      id: "nutricao-pratica-atendimento",
      titulo: "Prática de Atendimento ao Paciente",
      descricao:
        "Comunicação empática, protocolos de atendimento, encaminhamento ao nutricionista e boas práticas no consultório, clínica ou loja.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-pratica-intro",
          titulo: "Comunicação e Atendimento em Nutrição",
          duracaoMin: 15,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas em breve.",
          resumoExecutivo: ["Conteúdo em desenvolvimento."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 13 — Emagrecimento Saudável e Sustentável
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-emagrecimento",
      titulo: "Emagrecimento Saudável e Sustentável",
      descricao:
        "Desconstrução de mitos sobre dietas da moda e compreensão da fisiologia do emagrecimento baseada em evidências. Foco na reeducação alimentar, comportamento alimentar e prevenção do efeito sanfona, seguindo as diretrizes da ABESO.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-emagrecimento-aula",
          titulo: "Emagrecimento Baseado em Evidências: da Fisiologia à Prática",
          duracaoMin: 25,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Balanço energético, perigo das dietas restritivas, efeito sanfona, composição corporal, mindful eating e o papel do sono e cortisol no ganho de peso.",
          resumoExecutivo: [
            "O emagrecimento sustentável exige déficit calórico leve (não fome extrema) + qualidade nutricional.",
            "Dietas restritivas causam perda de água e massa muscular, não gordura — resultando no efeito sanfona.",
            "O estresse crônico e a privação de sono aumentam cortisol e grelina, favorecendo o acúmulo de gordura abdominal.",
            "Mindful eating (comer com atenção plena) ajuda a distinguir fome física de fome emocional.",
          ],
          simulacao: {
            cliente:
              "Juliana, 32 anos: 'Estou desesperada. Faço dietas malucas, perco 3kg numa semana, mas recupero 5kg na seguinte. Me indica o melhor detox para limpar o fígado e secar?'",
            falaBoa:
              "Juliana, entendo perfeitamente sua frustração, o efeito sanfona é exaustivo física e emocionalmente. Sobre o 'detox': o seu fígado e os seus rins já são máquinas perfeitas de desintoxicação; nenhum chá ou suco faz esse trabalho melhor que eles. O que acontece nas dietas malucas é que você perde água e massa muscular, não gordura. Quando volta a comer, o corpo estoca gordura como defesa. O emagrecimento real e sustentável exige um déficit calórico leve, comida de verdade e paciência (de 0,5kg a 1kg por semana). O ideal é montarmos um plano com a nutricionista para entender sua rotina e sua fome emocional, em vez de gastar com produtos que prometem milagres. Vamos agendar?",
            falaEvitar:
              "'Detox' é ótimo! Leva esse kit aqui de 30 dias, custa só R$299. Em uma semana você já perde 4kg.",
          },
          checklist: [
            "Explicar que 'detox' não tem evidência — fígado e rins fazem a desintoxicação naturalmente.",
            "Diferenciar perda de água/massa muscular de perda de gordura.",
            "Reconhecer os sinais do efeito sanfona (ciclagem de peso).",
            "Orientar sobre a importância do sono e controle do estresse no emagrecimento.",
            "Encaminhar ao nutricionista para plano individualizado.",
          ],
          quandoChamarFarmaceutico: [
            "Paciente quer comprar termogênicos para emagrecer sem mudar alimentação.",
            "Paciente relata compulsão alimentar ou relação emocional disfuncional com comida.",
          ],
          errosComuns: [
            "Achar que 'detox' ou sucos verdes emagrecem sozinhos.",
            "Recomendar jejuns prolongados ou dietas restritivas da moda.",
            "Vender termogênicos como solução para emagrecimento sem orientação.",
          ],
          quiz: [
            q(
              "O que é o 'efeito sanfona'?",
              ["Ganho de massa muscular rápido.", "Ciclos repetidos de perda e reganho de peso, geralmente com perda de massa magra e ganho de gordura.", "O efeito das fibras no intestino."],
              1,
              "O efeito sanfona (ciclagem de peso) ocorre quando há perda rápida de peso (água e músculo) seguida de reganho como gordura, piorando a composição corporal.",
            ),
            q(
              "Qual a perda de peso considerada segura e sustentável pela ABESO?",
              ["5kg por semana.", "0,5kg a 1kg por semana.", "O quanto o paciente aguentar."],
              1,
              "A ABESO recomenda perda de 0,5kg a 1kg por semana como meta segura e sustentável para preservar massa magra.",
            ),
            q(
              "Sobre os sucos 'detox', é correto afirmar:",
              ["Eles substituem o fígado na desintoxicação.", "Não possuem evidências científicas de que 'desintoxicam' o corpo; o fígado e rins fazem esse papel.", "Devem ser a base da alimentação para emagrecer."],
              1,
              "Produtos 'detox' não têm comprovação científica. O fígado e os rins são os órgãos naturalmente responsáveis pela desintoxicação do organismo.",
            ),
            q(
              "Como o estresse crônico e a privação de sono afetam o peso?",
              ["Aumentam o cortisol e a grelina (fome), dificultando o emagrecimento e favorecendo o acúmulo de gordura abdominal.", "Aceleram o metabolismo basal.", "Não têm nenhuma relação com o peso."],
              0,
              "O cortisol elevado (estresse) e a grelina aumentada (privação de sono) estimulam o apetite e favorecem o acúmulo de gordura abdominal.",
            ),
            q(
              "O paciente quer comprar um 'termogênico' para emagrecer sem mudar a dieta. O que dizer?",
              ["Tome antes de dormir para queimar mais.", "Termogênicos não fazem milagre. Sem reeducação alimentar e déficit calórico, o efeito é nulo e pode causar taquicardia. Consulte o nutricionista.", "Compre o mais caro, que funciona melhor."],
              1,
              "Termogênicos não substituem déficit calórico e reeducação alimentar. Podem causar efeitos adversos como taquicardia. A prescrição é do nutricionista ou médico.",
            ),
          ],
          xp: 60,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 14 — Nutrição no Pós-Tratamento com Análogos de GLP-1
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-glp1",
      titulo: "Nutrição no Pós-Tratamento com Análogos de GLP-1",
      descricao:
        "Acompanhamento de pacientes em uso ou desmame de medicamentos injetáveis para obesidade (Semaglutida, Liraglutida, Tirzepatida). Prevenção da sarcopenia, manejo de efeitos colaterais gastrointestinais e estratégias contra o efeito rebote.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-glp1-aula",
          titulo: "Análogos de GLP-1: o Papel do Auxiliar na Prevenção da Sarcopenia e do Efeito Rebote",
          duracaoMin: 25,
          nivel: "avancado",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Como funcionam Ozempic/Wegovy/Mounjaro, efeitos colaterais nutricionais, prevenção da sarcopenia e estratégias para manutenção do peso no pós-tratamento.",
          resumoExecutivo: [
            "Análogos de GLP-1 retardam o esvaziamento gástrico e reduzem o apetite centralmente — a perda de peso pode ser rápida.",
            "O principal risco é a sarcopenia (perda de massa muscular) se não houver ingestão proteica adequada e treino de força.",
            "Efeitos colaterais comuns: náuseas, vômitos, constipação — exigem adaptação alimentar (comer devagar, evitar gorduras).",
            "No desmame, sem mudança de hábitos, o efeito rebote é quase certo — o corpo recupera o peso, frequentemente como gordura.",
          ],
          simulacao: {
            cliente:
              "Roberto, 45 anos: 'A fome voltou absurda. Tenho medo de engordar tudo de novo. Me vende algo para tirar a fome, de preferência natural.'",
            falaBoa:
              "Roberto, o que você está sentindo é a resposta fisiológica normal do corpo. A caneta 'enganava' o cérebro e o estômago, retardando a digestão. Sem ela, o apetite volta. Não existem suplementos naturais que repliquem o efeito do remédio de forma segura e eficaz. O segredo para não ter o efeito rebote agora está em três pilares: 1) Comer proteínas em todas as refeições (elas dão saciedade natural); 2) Comer muitas fibras e vegetais (que ocupam volume no estômago); 3) Fazer musculação para proteger seus músculos. A transição sem o remédio exige reeducação alimentar rigorosa. Vou te encaminhar para a nutricionista fazer o 'plano de desmame' com você.",
            falaEvitar:
              "Toma esse inibidor de apetite natural aqui, é 100% eficaz e não tem contraindicação.",
          },
          checklist: [
            "Compreender o mecanismo de ação dos análogos de GLP-1 e GIP.",
            "Reconhecer sinais de sarcopenia (fraqueza, perda de massa muscular visível).",
            "Orientar sobre alimentação rica em proteínas e fibras para saciedade.",
            "Alertar sobre a importância do treino de força (musculação) durante e após o tratamento.",
            "Encaminhar ao nutricionista para plano de transição (desmame).",
          ],
          quandoChamarFarmaceutico: [
            "Paciente relata náuseas e vômitos severos que impedem a alimentação.",
            "Paciente quer suplementos que 'substituam' o efeito do medicamento.",
          ],
          errosComuns: [
            "Subestimar a perda de massa muscular — a balança desce, mas a composição corporal piora.",
            "Vender 'naturais' como substitutos dos análogos de GLP-1.",
            "Orientar jejum ou restrição severa junto com a medicação (risco de hipoglicemia).",
          ],
          quiz: [
            q(
              "Qual o principal risco nutricional do emagrecimento rápido com análogos de GLP-1 se não houver acompanhamento?",
              ["Ganho de massa óssea.", "Sarcopenia (perda severa de massa e força muscular).", "Aumento do metabolismo basal."],
              1,
              "A perda rápida de peso sem ingestão proteica adequada e sem exercício de força leva à sarcopenia — perda de massa muscular que compromete a saúde metabólica.",
            ),
            q(
              "Para manejar a constipação intestinal comum no uso dessas medicações, o auxiliar deve orientar (sob supervisão) o aumento de:",
              ["Proteínas isoladas.", "Água e fibras dietéticas.", "Gorduras saturadas."],
              1,
              "Água e fibras (frutas, vegetais, cereais integrais) são essenciais para combater a constipação causada pelo retardo do esvaziamento gástrico.",
            ),
            q(
              "Por que a mastigação lenta é vital para quem usa essas canetas?",
              ["Porque o esvaziamento gástrico está retardado; comer rápido causa náuseas severas e vômitos.", "Porque anula o efeito do remédio.", "Porque aumenta a absorção de açúcar."],
              0,
              "Com o esvaziamento gástrico retardado, comer rápido ou em grande volume pode causar náuseas, refluxo e vômitos.",
            ),
            q(
              "O paciente pergunta se pode tomar whey protein. Qual a melhor resposta?",
              ["Whey engorda, não tome.", "O whey protein é uma excelente fonte de proteína prática para ajudar a bater sua meta diária e proteger seus músculos, mas a nutricionista vai calcular a dose ideal para você.", "Tome 3 scoops por dia substituindo o jantar."],
              1,
              "Whey protein pode ser útil para atingir a meta proteica e proteger a massa muscular, mas a dose deve ser calculada pelo nutricionista conforme a necessidade individual.",
            ),
            q(
              "O que é o 'efeito rebote' no contexto dessas medicações?",
              ["Alergia ao medicamento.", "O reganho de peso (frequentemente como gordura) após a suspensão do fármaco sem mudança definitiva de hábitos.", "Aumento da massa muscular."],
              1,
              "O efeito rebote é o reganho de peso após a suspensão do medicamento, geralmente com piora da composição corporal (mais gordura, menos músculo), se não houver mudança de hábitos.",
            ),
          ],
          xp: 60,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 15 — Nutrição Infantil e Introdução Alimentar
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-infantil",
      titulo: "Nutrição Infantil e Introdução Alimentar",
      descricao:
        "Capacitação para orientar pais e cuidadores sobre as diretrizes do Ministério da Saúde e da Sociedade Brasileira de Pediatria (SBP) para crianças de 0 a 10 anos. Foco em aleitamento, introdução alimentar, prevenção de obesidade infantil e seletividade alimentar.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-infantil-aula",
          titulo: "Nutrição Infantil: do Aleitamento à Lancheira Saudável",
          duracaoMin: 25,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Aleitamento materno exclusivo, introdução alimentar aos 6 meses (método tradicional vs. BLW), vilões da infância e estratégias para seletividade alimentar sem traumas.",
          resumoExecutivo: [
            "Aleitamento materno exclusivo até os 6 meses — não existe 'leite fraco', é o alimento perfeito.",
            "Introdução alimentar aos 6 meses: método tradicional (papinhas) ou BLW (Baby-Led Weaning, pedaços seguros).",
            "Proibidos antes dos 2 anos: açúcar, mel (risco de botulismo), ultraprocessados.",
            "Seletividade alimentar é normal — oferecer o alimento 10-15 vezes, sem pressão, variando formas e cores.",
          ],
          simulacao: {
            cliente:
              "Mãe de bebê de 4 meses: 'Meu bebê não dorme, acho que meu leite é fraco. Quero uma farinha para engrossar o leite e um cházinho.'",
            falaBoa:
              "Mãe, entendo seu cansaço, os primeiros meses são exaustivos! Mas tenho uma ótima notícia: não existe 'leite fraco'. O choro e as cólicas são normais nessa fase de amadurecimento do intestino. A OMS e o Ministério da Saúde são claros: até os 6 meses, o bebê deve receber APENAS leite materno (ou fórmula, se prescrito pelo pediatra). Água, chás e farinhas engrossantes podem causar alergias, sobrecarregar os rins do bebê e tirar o espaço do leite, que é o alimento perfeito. O mel e o açúcar são proibidos antes dos 2 anos. Vamos agendar com a nutricionista materno-infantil para avaliar a pega da amamentação e te dar segurança?",
            falaEvitar:
              "É mesmo, tem muito leite fraco. Dá essa farinha aqui que o bebê dorme a noite toda.",
          },
          checklist: [
            "Reforçar que aleitamento materno exclusivo é recomendado até os 6 meses.",
            "Explicar que mel é proibido antes de 1 ano (risco de botulismo infantil).",
            "Orientar introdução alimentar aos 6 meses, não antes.",
            "Aconselhar paciência e repetição na seletividade alimentar (nunca forçar).",
            "Encaminhar ao pediatra ou nutricionista materno-infantil para orientação individualizada.",
          ],
          quandoChamarFarmaceutico: [
            "Bebê com dificuldade de ganho de peso ou alergias alimentares suspeitas.",
            "Mãe relata dor intensa na amamentação ou suspeita de mastite.",
          ],
          errosComuns: [
            "Recomendar chás, farinhas ou água para bebês menores de 6 meses.",
            "Dizer que 'leite fraco' existe — é mito, o leite materno sempre é adequado.",
            "Sugerir mel ou açúcar para crianças menores de 2 anos.",
          ],
          quiz: [
            q(
              "Por que o mel é contraindicado para menores de 1 ano?",
              ["Engorda muito.", "Risco de botulismo infantil (o intestino do bebê não consegue combater os esporos da bactéria).", "Causa diabetes tipo 1."],
              1,
              "O mel pode conter esporos de Clostridium botulinum. O intestino imaturo do bebê não consegue neutralizá-los, podendo causar botulismo infantil, uma condição grave.",
            ),
            q(
              "Qual a idade recomendada para iniciar a introdução alimentar (papinhas/frutas)?",
              ["3 meses.", "4 meses.", "6 meses."],
              2,
              "O Ministério da Saúde e a OMS recomendam introdução alimentar aos 6 meses, mantendo o aleitamento materno complementado até 2 anos ou mais.",
            ),
            q(
              "O que é o método BLW (Baby-Led Weaning)?",
              ["Dar apenas sopas batidas no liquidificador.", "Oferecer alimentos em pedaços seguros para o bebê pegar e levar à boca, estimulando a autonomia.", "Amamentar até os 2 anos sem dar comida."],
              1,
              "BLW é um método de introdução alimentar onde o bebê se alimenta sozinho com alimentos em pedaços seguros, desenvolvendo autonomia e coordenação motora.",
            ),
            q(
              "Sobre a seletividade alimentar, o auxiliar deve orientar os pais a:",
              ["Forçar a comer chorando.", "Esconder a comida ou substituir por suplementos sem indicação.", "Oferecer repetidamente (10 a 15 vezes), sem pressão, variando formas e cores, e servir de exemplo."],
              2,
              "A seletividade é comum na infância. A abordagem correta é oferecer o alimento repetidamente, sem pressão, com criatividade nas formas e cores, e os pais servindo de modelo.",
            ),
            q(
              "Qual alimento NÃO deve estar na lancheira de uma criança de 5 anos?",
              ["Fruta picada.", "Água.", "Refrigerante e biscoito recheado (ultraprocessados)."],
              2,
              "Alimentos ultraprocessados como refrigerantes e biscoitos recheados são ricos em açúcar, gorduras e aditivos, e não devem fazer parte da alimentação infantil regular.",
            ),
          ],
          xp: 60,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 16 — Nutrição no Envelhecimento (Geriatria)
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-geriatria",
      titulo: "Nutrição no Envelhecimento (Geriatria)",
      descricao:
        "Particularidades do idoso (acima de 60 anos). Prevenção da fragilidade, manejo da polifarmácia (interação remédio x comida), adaptação de texturas e o risco invisível da desidratação.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-geriatria-aula",
          titulo: "Nutrição no Idoso: Prevenindo Fragilidade, Sarcopenia e Desnutrição",
          duracaoMin: 25,
          nivel: "avancado",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Fisiologia do envelhecimento (perda de paladar, olfato, sede), sarcopenia e osteoporose, desidratação invisível, disfagia e adaptação de texturas, e interações medicamentosas com nutrientes.",
          resumoExecutivo: [
            "Com o envelhecimento, o mecanismo da sede fica menos sensível — idosos desidratam sem sentir sede.",
            "Sarcopenia + osteoporose formam o 'duo perigoso' — prevenção com proteína adequada + cálcio + vitamina D.",
            "Disfagia (dificuldade de engolir) exige adaptação de texturas — alimentos macios, úmidos e espessantes.",
            "Polifarmácia: múltiplos medicamentos podem interagir com nutrientes (ex: varfarina e vitamina K).",
          ],
          simulacao: {
            cliente:
              "Filha de senhor de 82 anos: 'Meu pai está sumindo, só come pão com manteiga e café. Quero o melhor multivitamínico para dar força a ele.'",
            falaBoa:
              "Compreendo sua angústia. A perda de peso e as quedas no idoso são sinais de alerta vermelhos, geralmente ligados à sarcopenia (perda de músculo) e desnutrição. O multivitamínico sozinho não vai resolver se ele não ingere proteínas e calorias suficientes. Se a dentadura machuca, precisamos adaptar a textura: ovos mexidos bem macios, peixes que desmancham, frango desfiado bem úmido, vitaminas com leite e aveia. Além disso, idosos perdem a sensação de sede, então a hidratação precisa ser 'oferecida' o dia todo. A nutricionista geriátrica precisa avaliar para criar um plano de comida adaptada e verificar se os remédios dele não estão tirando o apetite.",
            falaEvitar:
              "Toma esse polivitamínico aqui que resolve. É o mais completo do mercado.",
          },
          checklist: [
            "Reconhecer sinais de desnutrição e sarcopenia no idoso (perda de peso, fraqueza, quedas).",
            "Orientar sobre alimentos proteicos de fácil mastigação (ovos, peixes, frango desfiado).",
            "Alertar sobre a perda da sensação de sede — hidratação deve ser oferecida ativamente.",
            "Conhecer interações comuns: varfarina × vitamina K, estatinas × suco de toranja.",
            "Encaminhar ao nutricionista geriátrico e ao médico para revisão da polifarmácia.",
          ],
          quandoChamarFarmaceutico: [
            "Idoso com múltiplos medicamentos e perda de apetite — possível interação medicamentosa.",
            "Suspeita de disfagia com engasgos frequentes — risco de pneumonia aspirativa.",
          ],
          errosComuns: [
            "Achar que multivitamínico resolve desnutrição proteico-calórica.",
            "Ignorar o problema da mastigação/dentadura como causa de desnutrição.",
            "Recomendar suplementos sem verificar interações com medicamentos de uso contínuo.",
          ],
          quiz: [
            q(
              "Por que os idosos têm maior risco de desidratação?",
              ["Eles suam mais.", "O mecanismo de sede no cérebro fica menos sensível com a idade.", "Os rins retêm água em excesso."],
              1,
              "Com o envelhecimento, os osmorreceptores cerebrais que detectam a sede tornam-se menos sensíveis, fazendo com que o idoso não sinta sede mesmo quando desidratado.",
            ),
            q(
              "O que é Sarcopenia?",
              ["Perda de massa óssea.", "Perda progressiva de massa, força e função muscular associada ao envelhecimento.", "Acúmulo de gordura no fígado."],
              1,
              "Sarcopenia é a perda progressiva e generalizada de massa, força e função muscular, fortemente associada ao envelhecimento e à incapacidade funcional.",
            ),
            q(
              "Para um idoso com disfagia (risco de engasgo com líquidos ralos), qual a orientação correta?",
              ["Dar apenas água em pequenas gotas.", "Usar espessantes alimentares (sob orientação do fonoaudiólogo/nutricionista) para dar corpo aos líquidos.", "Proibir a ingestão de líquidos."],
              1,
              "Espessantes alimentares, prescritos por fonoaudiólogo ou nutricionista, alteram a viscosidade dos líquidos, tornando a deglutição mais segura para idosos com disfagia.",
            ),
            q(
              "Idosos que tomam anticoagulantes (como Varfarina) devem ter cuidado com:",
              ["Consumo excessivo e variável de vegetais verde-escuros ricos em Vitamina K (que interfere no remédio).", "Consumo de água.", "Consumo de proteínas."],
              0,
              "A vitamina K antagoniza o efeito da varfarina. O consumo deve ser consistente (nem excessivo, nem restrito), mantendo a mesma ingestão diária de vegetais verde-escuros.",
            ),
            q(
              "Qual nutriente é fundamental para a saúde óssea e prevenção de quedas, mas frequentemente falta no idoso por pouca exposição solar?",
              ["Vitamina C.", "Vitamina D.", "Vitamina A."],
              1,
              "A vitamina D é essencial para absorção de cálcio e saúde óssea. Idosos têm menor capacidade de síntese cutânea e frequentemente têm pouca exposição solar.",
            ),
          ],
          xp: 60,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 17 — Guia de Suplementos de A a Z
    // ═══════════════════════════════════════════════════════
    {
      id: "nutricao-suplementos-guia",
      titulo: "Guia de Suplementos de A a Z",
      descricao:
        "Guia prático sobre os suplementos mais vendidos e prescritos. O auxiliar aprenderá a diferenciar os tipos, entender as indicações gerais, conhecer as evidências científicas e saber os limites legais da recomendação no balcão ou recepção.",
      imagemHeroUrl: imagensCategoria.suplementos,
      aulas: [
        {
          id: "nutricao-suplementos-aula",
          titulo: "Suplementos na Prática: Evidências, Segurança e Limites Legais",
          duracaoMin: 30,
          nivel: "avancado",
          imagemHeroUrl: imagensCategoria.suplementos,
          resumo:
            "Colágeno, creatina, ômega-3, probióticos, vitaminas do complexo B, vitamina D, whey protein e legislação ANVISA (RDC 243/2018). Evidências científicas e o que o rótulo deve (e não deve) mostrar.",
          resumoExecutivo: [
            "Creatina é o suplemento com maior evidência científica — seguro para rins saudáveis, uso diário contínuo, não causa calvície.",
            "Colágeno (Verisol, peptídeos bioativos) precisa de vitamina C para síntese adequada.",
            "Ômega-3 (EPA e DHA): verificar pureza e concentração no rótulo. Benefícios cardiovasculares e anti-inflamatórios.",
            "Whey Isolado tem menos lactose e gordura que o Concentrado — ideal para intolerantes.",
            "Probióticos têm cepas específicas para fins específicos — não são todos iguais.",
            "RDC 243/2018 da ANVISA: suplemento NÃO pode prometer cura, tratamento ou prevenção de doenças.",
          ],
          simulacao: {
            cliente:
              "Jovem de 22 anos, frequentador de academia: 'Me vê o Whey Isolado mais caro, um pote de BCAA e Creatina. E me fala quanto tomar de cada um para ficar grande rápido.'",
            falaBoa:
              "Beleza, cara! Vejo que você treina sério. Sobre a creatina, a ciência mostra que ela é excelente para força e performance, e o uso é crônico (todo dia, mesmo sem treino). O Whey Isolado é ótimo se você tem intolerância à lactose ou quer uma absorção mais rápida. Agora, sobre o BCAA: os estudos mais recentes mostram que se você já bate a meta de proteínas com a dieta e o Whey, o BCAA extra é basicamente 'xixi caro', pois o Whey já é rico em BCAAs. Sobre as doses exatas (gramas por dia), isso depende do seu peso, dieta e objetivo, e por lei e ética, quem calcula isso é o seu nutricionista. Posso te mostrar as marcas com laudo de pureza aprovadas e você leva para ele ajustar?",
            falaEvitar:
              "Toma 5g de creatina, 3 scoops de whey e 10g de BCAA por dia. Em 3 meses você está gigante.",
          },
          checklist: [
            "Diferenciar Whey Concentrado, Isolado e Hidrolisado.",
            "Explicar que creatina é de uso diário contínuo, não só nos dias de treino.",
            "Saber que BCAA isolado tem pouca evidência quando a ingestão proteica já é adequada.",
            "Verificar selo de pureza e laudo de terceiros nos suplementos.",
            "Conhecer a RDC 243/2018 da ANVISA — o que o rótulo pode e não pode dizer.",
            "NUNCA prescrever doses — encaminhar ao nutricionista.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente quer comprar múltiplos suplementos sem orientação profissional.",
            "Cliente relata efeitos adversos após uso de suplementos (taquicardia, insônia, náuseas).",
          ],
          errosComuns: [
            "Prescrever doses ou protocolos de suplementação (ato privativo do nutricionista ou médico).",
            "Repetir mitos: 'creatina causa calvície', 'whey sobrecarrega rins saudáveis', 'BCAA é essencial'.",
            "Recomendar suplemento baseado em preço ou marca, não em evidência e necessidade.",
          ],
          quiz: [
            q(
              "Sobre a Creatina, é VERDADE que:",
              ["Só deve ser tomada nos dias de treino, logo antes do treino.", "Causa sobrecarga renal em pessoas saudáveis e calvície.", "Seu efeito é crônico (acumulativo), devendo ser tomada todos os dias, e é segura para rins saudáveis."],
              2,
              "A creatina age por saturação muscular — o uso diário contínuo mantém os estoques elevados. Não há evidências de que cause calvície ou sobrecarga renal em pessoas saudáveis.",
            ),
            q(
              "Qual a principal vantagem do Whey Protein ISOLADO em relação ao CONCENTRADO?",
              ["Tem mais gordura e é mais barato.", "Passa por maior filtragem, tendo menos (ou zero) lactose e gordura, ideal para intolerantes.", "Tem menos proteínas por dose."],
              1,
              "O Whey Isolado passa por processo adicional de filtragem, resultando em teor proteico mais alto (>90%) e menos lactose e gordura, sendo mais adequado para intolerantes.",
            ),
            q(
              "Para que o Colágeno tenha melhor síntese no corpo humano, ele deve ser consumido junto com:",
              ["Gorduras saturadas.", "Vitamina C.", "Cálcio."],
              1,
              "A vitamina C é cofator essencial para a síntese de colágeno. Sem ela, a hidroxilação da prolina e lisina (etapas cruciais) fica comprometida.",
            ),
            q(
              "Um paciente vegano estrito pergunta sobre Vitamina B12. O que o auxiliar deve saber?",
              ["Veganos não precisam de B12.", "A B12 é encontrada apenas em fontes animais, logo, veganos DEVEM suplementar B12 sob orientação para evitar anemias e danos neurológicos.", "A B12 está presente em todas as frutas."],
              1,
              "A vitamina B12 é produzida exclusivamente por microrganismos e está presente apenas em alimentos de origem animal. Veganos estritos precisam de suplementação para prevenir anemia megaloblástica e danos neurológicos irreversíveis.",
            ),
            q(
              "Segundo a ANVISA (RDC 243/2018), o que NÃO pode constar no rótulo de um suplemento alimentar?",
              ["A lista de ingredientes.", "A advertência 'Este produto não é um medicamento'.", "Promessas de cura, tratamento ou prevenção de doenças (ex: 'Cura a artrite')."],
              2,
              "A RDC 243/2018 proíbe que suplementos aleguem propriedades medicamentosas. Dizer que 'cura', 'trata' ou 'previne' doenças é exclusivo de medicamentos registrados como tal.",
            ),
          ],
          xp: 70,
        },
      ],
    },
  ],
};
