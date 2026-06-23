import type { Trilha } from "./types";
import { q } from "./_helpers";
import { imagensCategoria } from "./midia-catalogo";

// ─────────────────────────────────────────────────────────────
// TRILHA — Psicologia e Saúde Mental no Balcão
// Curso: Formação Complementar para Atendente de Farmácia
// Carga: 60h | 12 Módulos
// ─────────────────────────────────────────────────────────────
export const trilhaPsicologiaSaudeMental: Trilha = {
  id: "psicologia-saude-mental",
  numero: 8,
  titulo: "Psicologia e Saúde Mental",
  subtitulo: "Atendente — Formação Complementar",
  descricao:
    "Fundamentos da saúde mental, psicopatologia básica e psicofarmacologia para o balcão de farmácia. Aprenda a reconhecer sinais de alerta, acolher com empatia e orientar com segurança, sempre respeitando os limites éticos e encaminhando ao farmacêutico ou profissional de saúde.",
  nivelFaixa: "Do iniciante ao intermediário",
  icone: "brain",
  modulos: [
    // ═══════════════════════════════════════════════════════
    // MÓDULO 1 — Fundamentos da Saúde Mental e Psicopatologia Básica
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-fundamentos",
      titulo: "Fundamentos da Saúde Mental e Psicopatologia Básica",
      descricao:
        "Conceitos fundamentais da saúde mental segundo a OMS, desconstrução do estigma, e introdução aos principais transtornos: ansiedade, humor, psicóticos e por uso de substâncias. Habilidades de acolhimento empático no balcão.",
      imagemHeroUrl: imagensCategoria.sono,
      aulas: [
        {
          id: "psicologia-fundamentos-aula",
          titulo: "Saúde Mental no Balcão: da Definição da OMS ao Acolhimento Empático",
          duracaoMin: 25,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.sono,
          resumo:
            "Definição de saúde mental pela OMS, diferença entre tristeza e depressão, ansiedade normal vs transtorno, espectro bipolar, psicoses e o impacto do estigma na adesão ao tratamento. Caso prático: cliente em uso de Sertralina.",
          resumoExecutivo: [
            "Saúde mental, segundo a OMS, é um estado de bem-estar no qual o indivíduo percebe suas próprias habilidades, pode lidar com o estresse normal da vida, trabalhar produtivamente e contribuir com sua comunidade — não é apenas 'ausência de doença'.",
            "O estigma é uma das principais barreiras para a busca de ajuda e adesão ao tratamento — o atendente deve usar linguagem não julgadora.",
            "Transtornos de ansiedade são os mais prevalentes no mundo. A ansiedade se torna patológica quando é desproporcional, persistente (>6 meses) e causa prejuízo funcional.",
            "Transtorno bipolar não é 'mudança de humor' — envolve episódios distintos de mania/hipomania e depressão.",
            "Esquizofrenia é um transtorno psicótico grave, não tem relação com 'dupla personalidade' (mito comum).",
          ],
          comparativo: {
            titulo: "Ansiedade normal × Transtorno de Ansiedade",
            itens: [
              { nome: "Ansiedade normal", quando: "Reação proporcional a um estressor real, passageira, não causa prejuízo funcional significativo. Ex: nervosismo antes de uma prova." },
              { nome: "Transtorno de Ansiedade", quando: "Preocupação excessiva e persistente (>6 meses), desproporcional ao estressor, com sintomas físicos (taquicardia, sudorese) e prejuízo nas atividades diárias." },
            ],
          },
          simulacao: {
            cliente:
              "Ana, 35 anos, retira Sertralina 50mg há 3 meses: 'Não sinto nada diferente. Esse remédio não funciona? Será que eu nem precisava disso? Queria parar.'",
            falaBoa:
              "Ana, entendo sua frustração, mas o que você está vivendo é esperado. Os ISRS, como a Sertralina, levam de 2 a 4 semanas para começar a fazer efeito, e o efeito pleno pode levar de 6 a 8 semanas. Parar abruptamente pode causar síndrome de descontinuação — tontura, náusea, choques elétricos na cabeça. Isso não significa que você é 'viciada', mas que o cérebro precisa de tempo para se readaptar. É essencial conversar com seu médico antes de qualquer mudança. Posso chamar o farmacêutico para revisar sua evolução e reforçar a importância da continuidade?",
            falaEvitar:
              "É assim mesmo, se não resolveu em 3 meses não vai resolver nunca. Pode parar que não dá nada.",
          },
          checklist: [
            "Saber recitar a definição de saúde mental da OMS.",
            "Diferenciar tristeza situacional de depressão.",
            "Diferenciar ansiedade normal de transtorno de ansiedade.",
            "Explicar que esquizofrenia não é dupla personalidade.",
            "Reconhecer o impacto do estigma na adesão ao tratamento.",
            "Usar linguagem acolhedora e não julgadora com clientes em sofrimento psíquico.",
            "Encaminhar ao farmacêutico sempre que houver dúvida clínica.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente deseja interromper medicação psiquiátrica por conta própria.",
            "Cliente relata ideação suicida ou autoagressão.",
            "Cliente relata efeitos colaterais graves de psicofármacos.",
            "Cliente demonstra confusão ou alteração aguda de comportamento.",
          ],
          errosComuns: [
            "Dizer que 'depressão é frescura' ou 'falta de Deus'.",
            "Confundir tristeza situacional (luto, perda de emprego) com depressão clínica.",
            "Afirmar que esquizofrenia é 'dupla personalidade'.",
            "Minimizar o sofrimento psíquico com frases como 'você precisa se distrair'.",
            "Incentivar a interrupção abrupta de psicofármacos.",
          ],
          quiz: [
            q(
              "Segundo a OMS, saúde mental é definida como:",
              [
                "Ausência de diagnóstico psiquiátrico.",
                "Um estado de bem-estar que permite ao indivíduo lidar com o estresse normal, trabalhar produtivamente e contribuir com a comunidade.",
                "Felicidade constante e ausência total de preocupações.",
                "Capacidade de nunca sentir tristeza ou ansiedade.",
              ],
              1,
              "A OMS define saúde mental como bem-estar biopsicossocial, não apenas ausência de doença mental.",
            ),
            q(
              "Quanto tempo, em média, um ISRS como a Sertralina leva para iniciar o efeito terapêutico?",
              [
                "Imediato — age em minutos.",
                "2 a 4 semanas para início de efeito; 6 a 8 semanas para efeito pleno.",
                "6 meses de uso contínuo.",
                "Nunca faz efeito — é placebo.",
              ],
              1,
              "Os ISRS precisam de semanas para promover a neuroplasticidade e dessensibilização dos autorreceptores. O efeito não é imediato.",
            ),
            q(
              "Qual a principal diferença entre ansiedade normal e transtorno de ansiedade?",
              [
                "Não há diferença — toda ansiedade é patológica.",
                "A ansiedade normal é sempre mais intensa.",
                "O transtorno de ansiedade é desproporcional ao estressor, persistente (>6 meses) e causa prejuízo funcional.",
                "A ansiedade normal só acontece em crianças.",
              ],
              2,
              "A ansiedade se torna patológica quando é excessiva, persistente e interfere significativamente na vida diária da pessoa.",
            ),
            q(
              "Sobre o transtorno bipolar, é correto afirmar:",
              [
                "É apenas 'mudança de humor' — todo mundo tem um pouco.",
                "Envolve episódios distintos de mania/hipomania e depressão, com períodos de eutimia entre eles.",
                "É sinônimo de depressão unipolar.",
                "Só afeta mulheres.",
              ],
              1,
              "O transtorno bipolar é caracterizado por episódios de mania/hipomania alternados com depressão, com fases de humor normal (eutimia) entre os episódios.",
            ),
            q(
              "Qual afirmação sobre esquizofrenia é VERDADEIRA?",
              [
                "Esquizofrenia é o mesmo que dupla personalidade.",
                "É um transtorno psicótico grave com sintomas como delírios, alucinações e discurso desorganizado — não é dupla personalidade.",
                "Pessoas com esquizofrenia são sempre violentas.",
                "Esquizofrenia é causada por 'mau-olhado'.",
              ],
              1,
              "Esquizofrenia é um transtorno psicótico que envolve delírios, alucinações, discurso e comportamento desorganizado. O mito da 'dupla personalidade' refere-se ao transtorno dissociativo de identidade, que é outra condição completamente diferente.",
            ),
          ],
          xp: 80,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 2 — Psicofarmacologia Básica
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-farmacos",
      titulo: "Psicofarmacologia Básica",
      descricao:
        "Principais classes de medicamentos psiquiátricos: ISRS, benzodiazepínicos, antipsicóticos e estabilizadores de humor. Mecanismos de ação, efeitos colaterais comuns e a importância da adesão ao tratamento para atendentes de farmácia.",
      imagemHeroUrl: imagensCategoria.dermocosmetico,
      aulas: [
        {
          id: "psicologia-farmacos-aula",
          titulo: "Psicofármacos no Balcão: Classes, Cuidados e o Papel do Atendente",
          duracaoMin: 25,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.dermocosmetico,
          resumo:
            "Visão geral das classes de psicofármacos: ISRS e ISRSN, benzodiazepínicos, antipsicóticos típicos e atípicos, estabilizadores de humor. Efeitos colaterais comuns, tempo de ação e alertas de segurança. Caso prático: idoso com Clonazepam e sonolência diurna.",
          resumoExecutivo: [
            "ISRS (ex: Sertralina, Fluoxetina, Escitalopram): primeira linha para depressão e ansiedade. Efeito em 2-4 semanas. Principais colaterais: náusea inicial, disfunção sexual, insônia ou sonolência.",
            "Benzodiazepínicos (ex: Clonazepam, Diazepam, Alprazolam): ansiolíticos e hipnóticos de ação rápida, mas com alto risco de dependência e tolerância. Uso ideal: curto prazo (máx. 4-6 semanas).",
            "Antipsicóticos atípicos (ex: Olanzapina, Risperidona, Quetiapina): usados em esquizofrenia, transtorno bipolar e, em doses baixas, como potencializadores. Principais colaterais: ganho de peso, sedação, síndrome metabólica.",
            "Estabilizadores de humor (ex: Lítio, Ácido Valproico, Lamotrigina): controle de episódios maníacos e preventivos no bipolar. Lítio exige monitoramento sérico regular (litemia) e cuidado com desidratação.",
          ],
          comparativo: {
            titulo: "Classes de Psicofármacos × Principais Características",
            itens: [
              { nome: "ISRS", quando: "Primeira linha para depressão/ansiedade. Efeito em 2-4 semanas. Ex: Sertralina, Fluoxetina. Não causam dependência química clássica, mas exigem desmame." },
              { nome: "Benzodiazepínicos", quando: "Ação rápida (minutos a horas). Alto risco de dependência e tolerância. Uso agudo e curto prazo. Ex: Clonazepam, Diazepam." },
              { nome: "Antipsicóticos", quando: "Tratamento de psicoses, mania e potencialização. Atípicos têm menos efeitos extrapiramidais, mas mais risco metabólico. Ex: Risperidona, Olanzapina." },
              { nome: "Estabilizadores de Humor", quando: "Prevenção de episódios maníacos e depressivos no transtorno bipolar. Ex: Lítio (monitorar litemia), Ácido Valproico." },
            ],
          },
          simulacao: {
            cliente:
              "Seu José, 75 anos, busca Clonazepam 2mg: 'Tomo isso há 5 anos para dormir, mas agora ando caindo e esquecendo as coisas. O médico do posto trocou o remédio, mas não entendi bem.'",
            falaBoa:
              "Seu José, o que o senhor está sentindo é um sinal de alerta importante. O Clonazepam é um benzodiazepínico de meia-vida longa e, no idoso, ele se acumula no corpo, podendo causar sonolência diurna, tontura, quedas e prejuízo de memória — exatamente o que o senhor relatou. Por isso, o uso em idosos é muito criterioso. O médico que trocou sua medicação provavelmente está fazendo o desmame para uma alternativa mais segura. Não pare abruptamente — o desmame de benzodiazepínico é gradual para evitar síndrome de abstinência. Vou chamar o farmacêutico para revisarmos a nova prescrição juntos e eu explicar certinho cada passo.",
            falaEvitar:
              "Ah, seu José, isso é normal da idade. Continua tomando o Clonazepam, que é o único jeito de dormir.",
          },
          checklist: [
            "Identificar as 4 principais classes de psicofármacos: ISRS, benzodiazepínicos, antipsicóticos, estabilizadores.",
            "Saber o tempo médio de início de ação dos ISRS (2-4 semanas).",
            "Reconhecer o risco de dependência e tolerância dos benzodiazepínicos.",
            "Alertar idosos sobre o risco de queda com benzodiazepínicos.",
            "Conhecer os principais efeitos colaterais: ganho de peso com antipsicóticos, síndrome de descontinuação com ISRS.",
            "Orientar que psicofármacos NUNCA devem ser interrompidos abruptamente.",
            "Encaminhar ao farmacêutico para dúvidas sobre interações e ajustes de dose.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente idoso com sonolência excessiva, quedas ou confusão usando benzodiazepínicos.",
            "Cliente deseja interromper psicofármaco por conta própria.",
            "Cliente com prescrição de múltiplos psicofármacos e dúvida sobre interações.",
            "Cliente em uso de Lítio com sinais de intoxicação (tremor grosseiro, confusão, vômitos).",
          ],
          errosComuns: [
            "Tratar benzodiazepínicos como 'remédio para dormir inofensivo' — ignorar risco de dependência.",
            "Dizer que 'antidepressivo vicia' — confundir dependência química com síndrome de descontinuação.",
            "Sugerir que o cliente pare o medicamento porque 'já está se sentindo bem'.",
            "Desconhecer que benzodiazepínicos em idosos aumentam o risco de quedas e fraturas.",
          ],
          quiz: [
            q(
              "Qual classe de medicamentos é considerada primeira linha para depressão e transtornos de ansiedade?",
              [
                "Benzodiazepínicos.",
                "ISRS (Inibidores Seletivos da Recaptação de Serotonina).",
                "Antipsicóticos típicos.",
                "Estabilizadores de humor.",
              ],
              1,
              "Os ISRS são a primeira linha de tratamento para depressão e ansiedade por sua eficácia, perfil de segurança e menor risco de dependência em comparação com benzodiazepínicos.",
            ),
            q(
              "Qual o principal risco do uso prolongado de benzodiazepínicos, especialmente em idosos?",
              [
                "Cárie dentária.",
                "Dependência, tolerância, sedação excessiva e risco aumentado de quedas e fraturas.",
                "Aumento da libido.",
                "Hipertensão arterial.",
              ],
              1,
              "Benzodiazepínicos causam tolerância (perda de efeito com o tempo) e dependência. Em idosos, a meia-vida prolongada e o metabolismo mais lento aumentam o risco de acúmulo, sedação, quedas e prejuízo cognitivo.",
            ),
            q(
              "Um cliente pergunta se pode parar a Sertralina de uma vez porque já se sente bem. Qual a orientação correta?",
              [
                "Pode parar de imediato, não há risco.",
                "A interrupção deve ser gradual (desmame), sob orientação médica, para evitar síndrome de descontinuação.",
                "Troque por um fitoterápico e pare.",
                "Aumente a dose antes de parar.",
              ],
              1,
              "ISRS podem causar síndrome de descontinuação (tontura, náusea, parestesias) se interrompidos abruptamente. O desmame gradual, supervisionado pelo médico, é essencial.",
            ),
            q(
              "Qual medicamento exige monitoramento sérico regular (exame de sangue) para segurança do paciente?",
              [
                "Fluoxetina.",
                "Clonazepam.",
                "Lítio (estabilizador de humor).",
                "Risperidona.",
              ],
              2,
              "O Lítio tem estreita janela terapêutica. A litemia deve ser monitorada regularmente para evitar intoxicação (que pode ser grave: tremor, confusão, convulsões).",
            ),
            q(
              "Qual efeito colateral metabólico é mais associado aos antipsicóticos atípicos (como Olanzapina e Quetiapina)?",
              [
                "Hipotensão e bradicardia.",
                "Ganho de peso significativo, aumento da glicemia e dislipidemia (síndrome metabólica).",
                "Hipertireoidismo.",
                "Anemia ferropriva.",
              ],
              1,
              "Antipsicóticos atípicos, especialmente Olanzapina e Clozapina, estão associados a ganho de peso, resistência à insulina e dislipidemia, exigindo monitoramento metabólico regular.",
            ),
          ],
          xp: 80,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 3 — Depressão e Transtornos do Humor
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-depressao",
      titulo: "Depressão e Transtornos do Humor",
      descricao:
        "Depressão maior, distimia, depressão pós-parto e transtorno afetivo sazonal. Sinais de alerta, ideação suicida e o papel do atendente na identificação precoce e encaminhamento responsável.",
      imagemHeroUrl: imagensCategoria.cosmeticos,
      aulas: [
        {
          id: "psicologia-depressao-intro",
          titulo: "Introdução aos Transtornos do Humor",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.cosmeticos,
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
    // MÓDULO 4 — Transtornos de Ansiedade
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-ansiedade",
      titulo: "Transtornos de Ansiedade",
      descricao:
        "Transtorno de ansiedade generalizada (TAG), síndrome do pânico, fobias, transtorno de ansiedade social e TOC. Abordagem no balcão e quando encaminhar.",
      imagemHeroUrl: imagensCategoria.cleanBeauty,
      aulas: [
        {
          id: "psicologia-ansiedade-intro",
          titulo: "Introdução aos Transtornos de Ansiedade",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.cleanBeauty,
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
    // MÓDULO 5 — Transtornos Psicóticos
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-psicoticos",
      titulo: "Transtornos Psicóticos",
      descricao:
        "Esquizofrenia, transtorno esquizoafetivo e psicose breve. Sinais precoces, manejo de crise no contexto da farmácia e importância da continuidade do tratamento antipsicótico.",
      imagemHeroUrl: imagensCategoria.sustentabilidade,
      aulas: [
        {
          id: "psicologia-psicoticos-intro",
          titulo: "Introdução aos Transtornos Psicóticos",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.sustentabilidade,
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
    // MÓDULO 6 — Transtornos por Uso de Substâncias
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-substancias",
      titulo: "Transtornos por Uso de Substâncias",
      descricao:
        "Álcool, tabaco, benzodiazepínicos, opioides e estimulantes. Dependência química, tolerância, abstinência e o papel da farmácia na dispensação responsável de medicamentos controlados.",
      imagemHeroUrl: imagensCategoria.pes,
      aulas: [
        {
          id: "psicologia-substancias-intro",
          titulo: "Introdução aos Transtornos por Uso de Substâncias",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.pes,
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
    // MÓDULO 7 — Saúde Mental na Infância e Adolescência
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-infantojuvenil",
      titulo: "Saúde Mental na Infância e Adolescência",
      descricao:
        "TDAH, transtorno do espectro autista (TEA), transtornos de conduta e os desafios da adolescência. Orientações para pais e cuidadores no balcão.",
      imagemHeroUrl: imagensCategoria.sono,
      aulas: [
        {
          id: "psicologia-infantojuvenil-intro",
          titulo: "Introdução à Saúde Mental Infantojuvenil",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.sono,
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
    // MÓDULO 8 — Psicofarmacologia Avançada
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-farmacologia-avancada",
      titulo: "Psicofarmacologia Avançada",
      descricao:
        "Aprofundamento em interações medicamentosas, polifarmácia psiquiátrica, síndrome serotoninérgica, síndrome neuroléptica maligna e farmacogenética básica.",
      imagemHeroUrl: imagensCategoria.dermocosmetico,
      aulas: [
        {
          id: "psicologia-farmacologia-avancada-intro",
          titulo: "Introdução à Psicofarmacologia Avançada",
          duracaoMin: 12,
          nivel: "avancado",
          imagemHeroUrl: imagensCategoria.dermocosmetico,
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
    // MÓDULO 9 — Comunicação Empática e Acolhimento
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-comunicacao",
      titulo: "Comunicação Empática e Acolhimento",
      descricao:
        "Técnicas de comunicação não violenta (CNV), escuta ativa, validação emocional e manejo de clientes em crise ou agitação no ambiente da farmácia.",
      imagemHeroUrl: imagensCategoria.cosmeticos,
      aulas: [
        {
          id: "psicologia-comunicacao-intro",
          titulo: "Introdução à Comunicação Empática",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.cosmeticos,
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
    // MÓDULO 10 — Prevenção do Suicídio
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-suicidio",
      titulo: "Prevenção do Suicídio",
      descricao:
        "Fatores de risco e proteção, sinais de alerta verbais e comportamentais, postura acolhedora, o que dizer e o que NÃO dizer, e como encaminhar com segurança.",
      imagemHeroUrl: imagensCategoria.cleanBeauty,
      aulas: [
        {
          id: "psicologia-suicidio-intro",
          titulo: "Introdução à Prevenção do Suicídio",
          duracaoMin: 12,
          nivel: "avancado",
          imagemHeroUrl: imagensCategoria.cleanBeauty,
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
    // MÓDULO 11 — Saúde Mental do Profissional de Farmácia
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-autocuidado",
      titulo: "Saúde Mental do Profissional de Farmácia",
      descricao:
        "Burnout, estresse ocupacional, fadiga por compaixão e estratégias de autocuidado. A importância de cuidar de si para cuidar do outro.",
      imagemHeroUrl: imagensCategoria.sustentabilidade,
      aulas: [
        {
          id: "psicologia-autocuidado-intro",
          titulo: "Introdução à Saúde Mental do Profissional",
          duracaoMin: 12,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.sustentabilidade,
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
    // MÓDULO 12 — Legislação e Ética em Saúde Mental
    // ═══════════════════════════════════════════════════════
    {
      id: "psicologia-legislacao",
      titulo: "Legislação e Ética em Saúde Mental",
      descricao:
        "Lei da Reforma Psiquiátrica (10.216/2001), Portaria 344/98 (controle de psicofármacos), direitos do paciente com transtorno mental e limites éticos do atendente.",
      imagemHeroUrl: imagensCategoria.pes,
      aulas: [
        {
          id: "psicologia-legislacao-intro",
          titulo: "Introdução à Legislação e Ética em Saúde Mental",
          duracaoMin: 12,
          nivel: "avancado",
          imagemHeroUrl: imagensCategoria.pes,
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
  ],
};
