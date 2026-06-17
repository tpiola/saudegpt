// ═══════════════════════════════════════════════════════════════
// Conteúdo dos mini-jogos educativos do balcão de farmácia
// Base: ANVISA, OMS, Ministério da Saúde, RDC's vigentes
// ═══════════════════════════════════════════════════════════════

import type { IconName } from "@/components/icons";

/* ─── Interfaces base ─── */

export interface QuestaoJogo {
  id: string;
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
}

export interface QuestaoVerdadeiroFalso {
  id: string;
  pergunta: string;
  correta: boolean; // true = Verdadeiro, false = Falso
  explicacao: string;
}

export interface EscolhaCenario {
  texto: string;
  /** true indica a escolha mais segura/recomendada */
  recomendada: boolean;
  feedback: string;
  /** ID do próximo passo. Se omitido, encerra o cenário. */
  proximoId?: string;
}

export interface PassoCenario {
  id: string;
  situacao: string;
  escolhas: EscolhaCenario[];
}

export interface CenarioBalcao {
  id: string;
  titulo: string;
  descricao: string;
  passos: PassoCenario[];
}

/* ═══════════════════════════════════════════════════════════════
   1. TARJAS + RECEITAS  (40 questões)
   ═══════════════════════════════════════════════════════════════ */

export const jogoTarjasReceitas: QuestaoJogo[] = [
  // ── Tarjas e classificação (1-15) ──
  {
    id: "tr01",
    pergunta: "Medicamento de tarja preta (faixa preta) exige:",
    opcoes: [
      "Venda livre — não precisa de receita",
      "Retenção obrigatória da receita no ato da dispensação",
      "Apenas orientação farmacêutica verbal",
      "Receita simples sem retenção",
    ],
    correta: 1,
    explicacao:
      "Tarja preta = medicamento de controle especial (Portaria 344/98). A receita deve ser retida pela farmácia e enviada à vigilância sanitária.",
  },
  {
    id: "tr02",
    pergunta: "Medicamento tarja vermelha com retenção de receita se aplica a:",
    opcoes: [
      "Antimicrobianos (RDC 20/2011 e atualizações)",
      "Protetor solar",
      "Suplemento vitamínico",
      "Solução fisiológica",
    ],
    correta: 0,
    explicacao:
      "Antimicrobianos (RDC 471/2021) exigem receita de controle especial (2 vias) com retenção da 1ª via. A venda sem receita é infração sanitária grave.",
  },
  {
    id: "tr03",
    pergunta: "Tarja vermelha 'sem retenção' significa que:",
    opcoes: [
      "Não precisa de receita — é venda livre",
      "Exige receita, mas a farmácia não precisa reter a via",
      "Só pode ser vendido com notificação de receita",
      "É proibida a venda ao público",
    ],
    correta: 1,
    explicacao:
      "Tarja vermelha sem retenção: medicamento sob prescrição, mas o paciente leva a receita. Ex.: anti-hipertensivos, anticoncepcionais.",
  },
  {
    id: "tr04",
    pergunta: "Qual cor de tarja identifica medicamentos de venda sob prescrição médica?",
    opcoes: [
      "Tarja preta",
      "Tarja vermelha",
      "Tarja amarela",
      "Tarja verde",
    ],
    correta: 1,
    explicacao:
      "Tarja vermelha = venda sob prescrição médica. Tarja preta = controle especial. Tarja verde = uso contínuo (genérico). Amarela não existe na classificação brasileira.",
  },
  {
    id: "tr05",
    pergunta: "MIP (Medicamento Isento de Prescrição) é identificado por:",
    opcoes: [
      "Faixa preta na embalagem",
      "Ausência de tarja e texto 'Medicamento Isento de Prescrição'",
      "Tarja vermelha dupla",
      "Tarja azul",
    ],
    correta: 1,
    explicacao:
      "MIPs (RDC 98/2016) não têm tarja. A embalagem traz 'Medicamento Isento de Prescrição' e a lista oficial da ANVISA define quais são.",
  },
  {
    id: "tr06",
    pergunta: "Receituário de controle especial (tarja preta) tem validade de quantos dias a partir da emissão?",
    opcoes: [
      "7 dias",
      "30 dias",
      "90 dias",
      "180 dias",
    ],
    correta: 1,
    explicacao:
      "A receita de controle especial (Portaria 344/98) vale 30 dias. Após esse prazo, não pode ser dispensada.",
  },
  {
    id: "tr07",
    pergunta: "Notificação de Receita 'A' (amarela) para entorpecentes tem validade de:",
    opcoes: [
      "7 dias",
      "15 dias",
      "30 dias",
      "60 dias",
    ],
    correta: 0,
    explicacao:
      "Notificação de Receita 'A' (entorpecentes como morfina, metadona) vale apenas 7 dias. É o prazo mais restrito da Portaria 344/98.",
  },
  {
    id: "tr08",
    pergunta: "Receita de antimicrobiano sem data de emissão. A conduta correta é:",
    opcoes: [
      "Dispensar normalmente",
      "Não dispensar — dados obrigatórios ausentes",
      "Datacarimbar você mesmo",
      "Vender só se o cliente jurar que é recente",
    ],
    correta: 1,
    explicacao:
      "Receita sem data é inválida. A data de emissão é item obrigatório (RDC 471/2021). Dispensar sem data pode configurar infração sanitária.",
  },
  {
    id: "tr09",
    pergunta: "A receita de medicamento tarja vermelha sem retenção pode ser aviada em até:",
    opcoes: [
      "30 dias da emissão",
      "60 dias da emissão",
      "90 dias da emissão",
      "180 dias da emissão",
    ],
    correta: 0,
    explicacao:
      "Receitas de tarja vermelha simples (sem retenção) têm validade de 30 dias. Para medicamentos de uso contínuo, vale até 90 dias se houver essa indicação médica.",
  },
  {
    id: "tr10",
    pergunta: "São informações OBRIGATÓRIAS em qualquer receita médica, EXCETO:",
    opcoes: [
      "Nome completo do paciente",
      "Nome do medicamento, concentração e forma farmacêutica",
      "CPF do paciente",
      "Assinatura e carimbo do prescritor com nº do CRM",
    ],
    correta: 2,
    explicacao:
      "CPF do paciente não é obrigatório em receitas comuns (só em notificações de receita 'A' ou 'B'). Nome do paciente, dados do medicamento e identificação do prescritor são itens obrigatórios.",
  },
  {
    id: "tr11",
    pergunta: "Qual a principal diferença entre Notificação de Receita 'A' e 'B'?",
    opcoes: [
      "'A' é para vermelhos, 'B' para pretos",
      "'A' é para entorpecentes; 'B' para psicotrópicos",
      "'A' é retida; 'B' não precisa reter",
      "'A' vale 15 dias; 'B' vale 30 dias",
    ],
    correta: 1,
    explicacao:
      "'A' (amarela) = entorpecentes (morfina, codeína, metadona). 'B' (azul) = psicotrópicos (diazepam, clonazepam, ritalina). Ambas exigem retenção.",
  },
  {
    id: "tr12",
    pergunta: "Medicamento genérico pode substituir o referência na dispensação quando:",
    opcoes: [
      "Sempre, sem restrições",
      "Desde que haja autorização do prescritor ou o paciente concorde e não haja impedimento na receita",
      "Nunca — só o referência pode ser vendido",
      "Só se o médico escrever 'genérico' na receita",
    ],
    correta: 1,
    explicacao:
      "A Lei dos Genéricos (9.787/99) e RDC 47/2009 permitem a substituição salvo se o prescritor escrever 'não substituir' ou similar. O farmacêutico deve informar o paciente.",
  },
  {
    id: "tr13",
    pergunta: "A RDC 471/2021 (antimicrobianos) determina que a receita deve ser dispensada em até:",
    opcoes: [
      "5 dias da emissão",
      "10 dias da emissão",
      "15 dias da emissão",
      "30 dias da emissão",
    ],
    correta: 1,
    explicacao:
      "Receitas de antimicrobianos têm validade de 10 dias corridos a partir da emissão. Após esse prazo, não podem ser aviadas (RDC 471/2021, art. 10).",
  },
  {
    id: "tr14",
    pergunta: "Paciente apresenta receita de controle especial sem a quantidade em extenso. A conduta é:",
    opcoes: [
      "Dispensar, pois número já basta",
      "Não dispensar — quantidade por extenso é obrigatória",
      "Completar você mesmo",
      "Ignorar o erro",
    ],
    correta: 1,
    explicacao:
      "A Portaria 344/98 exige que a quantidade seja escrita por extenso e em algarismos arábicos. Falta de extenso torna a receita inválida.",
  },
  {
    id: "tr15",
    pergunta: "Paciente traz receita de anticoncepcional com data de 45 dias atrás. A farmácia pode aviar?",
    opcoes: [
      "Sim, se for uso contínuo e o médico justificar",
      "Não — receita vencida",
      "Sim — anticoncepcional não tem prazo",
      "Sim — o paciente pode revalidar sozinho",
    ],
    correta: 1,
    explicacao:
      "Mesmo para uso contínuo, a validade padrão é 30 dias. Alguns estados permitem 90 dias para uso contínuo, mas 45 dias já ultrapassam o limite padrão.",
  },

  // ── Receitas e erros comuns (16-30) ──
  {
    id: "tr16",
    pergunta: "Cliente quer comprar antibiótico com receita vencida. O atendente deve:",
    opcoes: [
      "Vender porque o cliente já tomou antes",
      "Recusar e orientar nova consulta médica",
      "Vender metade do tratamento",
      "Trocar por outro antibiótico sem receita",
    ],
    correta: 1,
    explicacao:
      "Receita vencida não autoriza dispensação. Orientar retorno ao médico para nova prescrição (RDC 471/2021).",
  },
  {
    id: "tr17",
    pergunta: "Qual destes medicamentos NÃO pode ser vendido sem receita de retenção (antimicrobiano)?",
    opcoes: [
      "Paracetamol 750 mg",
      "Dipirona sódica 500 mg",
      "Amoxicilina 500 mg",
      "Ibuprofeno 600 mg",
    ],
    correta: 2,
    explicacao:
      "Amoxicilina é antimicrobiano (RDC 471/2021), exige receita de controle especial com retenção. Os demais podem ser MIP (paracetamol, dipirona) ou tarja vermelha sem retenção (ibuprofeno 600 mg).",
  },
  {
    id: "tr18",
    pergunta: "Receita com rasura no nome do paciente. Pode ser aviada?",
    opcoes: [
      "Sim, se der para entender",
      "Não — rasura invalida o documento",
      "Sim, com carimbo da farmácia",
      "Sim, se o paciente assinar",
    ],
    correta: 1,
    explicacao:
      "Qualquer rasura em dados essenciais (nome, medicamento, dose) invalida a receita. O correto é solicitar nova receita ao prescritor.",
  },
  {
    id: "tr19",
    pergunta: "O farmacêutico pode recusar dispensar mesmo com receita válida se:",
    opcoes: [
      "O farmacêutico pode recusar por objeção de consciência ou risco ao paciente",
      "Nunca pode recusar se a receita estiver correta",
      "Só se o gerente autorizar",
      "Não pode — o paciente tem direito ao medicamento",
    ],
    correta: 0,
    explicacao:
      "O Código de Ética Farmacêutica (Resolução CFF 724/2022) permite recusa por objeção de consciência ou quando houver risco à saúde do paciente, desde que justificado e documentado.",
  },
  {
    id: "tr20",
    pergunta: "Paciente traz receita de controle especial com 3 medicamentos. Quantas receitas são necessárias?",
    opcoes: [
      "Uma receita para todos",
      "Uma receita para cada medicamento",
      "Duas receitas no máximo",
      "Só precisa de notificação de receita",
    ],
    correta: 1,
    explicacao:
      "Cada medicamento de controle especial exige receita própria (Portaria 344/98). Não é permitido agrupar substâncias diferentes na mesma receita.",
  },
  {
    id: "tr21",
    pergunta: "Notificação de Receita 'A' pode ser aviada quantas vezes?",
    opcoes: [
      "Uma única vez, com retenção do documento",
      "Até 3 vezes dentro da validade",
      "Ilimitado dentro de 7 dias",
      "Duas vezes, com carimbo de cada aviamento",
    ],
    correta: 0,
    explicacao:
      "Notificação de Receita 'A' (entorpecentes) é aviada uma única vez e retida na farmácia. Não há reutilização.",
  },
  {
    id: "tr22",
    pergunta: "O que significa 'Dispensação excepcional' no contexto de medicamentos controlados?",
    opcoes: [
      "Venda livre para qualquer paciente",
      "Dispensação em caráter de urgência, documentada, quando não há receita disponível",
      "Entrega de amostra grátis",
      "Desconto especial em medicamento tarja preta",
    ],
    correta: 1,
    explicacao:
      "A dispensação excepcional (Resolução CFF 357/2001) permite ao farmacêutico dispensar em emergência, com registro detalhado e comunicação posterior à vigilância. É uso restrito e documentado.",
  },
  {
    id: "tr23",
    pergunta: "Medicamentos sujeitos a controle especial exigem a escrituração em:",
    opcoes: [
      "Livro de caixa",
      "Sistema de controle ou livro de registro específico (SNGPC ou equivalente)",
      "Caderno de notas",
      "Planilha de Excel simples",
    ],
    correta: 1,
    explicacao:
      "A escrituração de controlados deve ser feita no SNGPC (Sistema Nacional de Gerenciamento de Produtos Controlados) ou sistema equivalente aprovado pela ANVISA.",
  },
  {
    id: "tr24",
    pergunta: "Qual documento substitui a receita comum para medicamentos de uso contínuo por até 90 dias?",
    opcoes: [
      "Nenhum -- não existe prazo estendido",
      "Receita de uso contínuo (2 vias, com validade de 90 dias)",
      "Declaração do paciente",
      "Notificação de Receita 'C'",
    ],
    correta: 1,
    explicacao:
      "A receita de uso contínuo permite o aviamento por até 90 dias para medicamentos de doenças crônicas (hipertensão, diabetes), desde que o médico especifique o tempo de tratamento.",
  },
  {
    id: "tr25",
    pergunta: "O que é a 'Lista de Substâncias Sujeitas a Controle Especial' da ANVISA?",
    opcoes: [
      "Lista de medicamentos proibidos no Brasil",
      "Relação oficial (Listas A1, A2, B1, B2, C1, etc.) que define o regime de controle de cada substância",
      "Lista de preços máximos de medicamentos",
      "Catálogo de medicamentos isentos de prescrição",
    ],
    correta: 1,
    explicacao:
      "A Portaria 344/98 (atualizada periodicamente) organiza as substâncias em listas: A (entorpecentes), B (psicotrópicos), C (outros controlados), D (anabolizantes), E (plantas). Cada lista tem regras próprias.",
  },
  {
    id: "tr26",
    pergunta: "Paciente traz receita de controle especial com nome do médico mas sem número do CRM. Deve:",
    opcoes: [
      "Dispensar normalmente",
      "Não dispensar — CRM é obrigatório",
      "Completar com dados de outro médico",
      "Aceitar se o paciente confirmar o nome",
    ],
    correta: 1,
    explicacao:
      "CRM é obrigatório para validar a receita. Sem ele, não é possível confirmar a autoria da prescrição. A dispensação é irregular.",
  },
  {
    id: "tr27",
    pergunta: "Cliente pede 'dipirona injetável sem receita' para dor forte. Conduta:",
    opcoes: [
      "Vender — dipirona é MIP oral",
      "Não vender — injetável exige receita médica e administração por profissional",
      "Vender e ensinar a aplicar",
      "Trocar por comprimido e vender igual",
    ],
    correta: 1,
    explicacao:
      "Dipirona injetável exige receita (não é MIP na forma injetável). Além disso, medicamentos injetáveis devem ser administrados por profissional habilitado.",
  },
  {
    id: "tr28",
    pergunta: "Receita de orlistate (tarja vermelha sem retenção) pode ser aviada se a receita tiver 60 dias?",
    opcoes: [
      "Sim — vale 90 dias para emagrecedores",
      "Não — venceu em 30 dias",
      "Sim — orlistate não tem controle",
      "Não — precisa de notificação especial",
    ],
    correta: 1,
    explicacao:
      "Orlistate é tarja vermelha sem retenção. A validade padrão é 30 dias. Não se enquadra como 'uso contínuo' para prazo estendido.",
  },
  {
    id: "tr29",
    pergunta: "Cliente traz receita com medicamento que a farmácia não tem em estoque. Pode sugerir similar?",
    opcoes: [
      "Sim, farmacêutico pode sugerir intercambialidade por genérico ou similar, desde que autorizado",
      "Não — só o que está na receita",
      "Sim, qualquer funcionário pode sugerir",
      "Não — encaminha para outra farmácia sem orientação",
    ],
    correta: 0,
    explicacao:
      "O farmacêutico pode sugerir genérico (LC 87/99) ou similar intercambiável. Deve informar o paciente e registrar a orientação. Nunca substituir sem critério técnico.",
  },
  {
    id: "tr30",
    pergunta: "Prescrição de medicamento controlado deve conter, além do padrão:",
    opcoes: [
      "Nome do fabricante",
      "Endereço completo do paciente",
      "Nome do paciente, via de administração, quantidade em extenso, posologia e duração",
      "Preço sugerido",
    ],
    correta: 2,
    explicacao:
      "Receitas de controlados exigem dados adicionais: endereço do paciente, quantidade por extenso, posologia detalhada. A ausência invalida a dispensação (Portaria 344/98).",
  },

  // ── Casos específicos e atualizações (31-40) ──
  {
    id: "tr31",
    pergunta: "A RDC 360/2020 trata de:",
    opcoes: [
      "Controle de antimicrobianos",
      "Dispensação de medicamentos sem prescrição em farmácias",
      "Medicamentos genéricos",
      "Publicidade de medicamentos",
    ],
    correta: 1,
    explicacao:
      "RDC 360/2020 estabelece critérios para a dispensação de MIPs, reforçando a triagem farmacêutica e os limites do autocuidado apoiado.",
  },
  {
    id: "tr32",
    pergunta: "Receita digital de controle especial é válida quando:",
    opcoes: [
      "Sempre, sem restrições",
      "Com assinatura eletrônica qualificada (ICP-Brasil) ou certificado digital conforme legislação",
      "Só vale se impressa",
      "Não existe receita digital para controlados",
    ],
    correta: 1,
    explicacao:
      "A RDC 634/2022 regulamenta a prescrição digital de controlados, exigindo assinatura com certificado ICP-Brasil ou sistema autorizado pela ANVISA.",
  },
  {
    id: "tr33",
    pergunta: "Paciente com 17 anos traz receita de anticoncepcional. Pode aviar sem acompanhante?",
    opcoes: [
      "Não — menor de 18 precisa de responsável",
      "Sim — anticoncepcional pode ser dispensado a adolescentes sem acompanhante, conforme direito à saúde",
      "Só com autorização judicial",
      "Só se o médico autorizar na receita",
    ],
    correta: 1,
    explicacao:
      "O Estatuto da Criança e do Adolescente (ECA) e a Política de Atenção Integral à Saúde do Adolescente garantem autonomia para acesso a métodos contraceptivos.",
  },
  {
    id: "tr34",
    pergunta: "Quantas caixas de antibiótico podem ser aviadas em uma única receita de 10 dias?",
    opcoes: [
      "Quantas o paciente quiser",
      "A quantidade correspondente ao tratamento completo descrito na receita",
      "No máximo 1 caixa",
      "Até 3 caixas independentemente da posologia",
    ],
    correta: 1,
    explicacao:
      "A quantidade deve corresponder exatamente ao tratamento descrito na receita. Dispensar quantidade superior ao prescrito é infração (RDC 471/2021).",
  },
  {
    id: "tr35",
    pergunta: "Medicamento 'Similar' em relação ao 'Referência':",
    opcoes: [
      "É exatamente igual em tudo",
      "Contém o mesmo princípio ativo, mas pode ter diferenças de excipientes; exige estudo de bioequivalência",
      "É mais fraco que o referência",
      "Não precisa de receita",
    ],
    correta: 1,
    explicacao:
      "Similar tem mesmo princípio ativo, concentração e forma, mas excipientes podem diferir. Desde a RDC 134/2003, similares precisam de bioequivalência comprovada.",
  },
  {
    id: "tr36",
    pergunta: "A balconista pode aviar receita de controle especial sem a presença do farmacêutico?",
    opcoes: [
      "Sim — qualquer funcionário pode",
      "Não — a dispensação de controlados é ato farmacêutico privativo",
      "Sim, se o gerente autorizar",
      "Sim, depois do horário comercial",
    ],
    correta: 1,
    explicacao:
      "Medicamentos controlados exigem avaliação e liberação do farmacêutico. Atendente não pode aviar controlados sem supervisão direta do farmacêutico (Lei 13.021/2014).",
  },
  {
    id: "tr37",
    pergunta: "Receita de controle especial emitida em outro estado pode ser aviada?",
    opcoes: [
      "Não — vale só no estado de emissão",
      "Sim — a receita tem validade nacional",
      "Só se cadastrada no SNGPC antes",
      "Sim, mas com autorização do CRF local",
    ],
    correta: 1,
    explicacao:
      "Receitas de controle especial têm validade em todo o território nacional (Portaria 344/98). A farmácia deve verificar a autenticidade dos dados.",
  },
  {
    id: "tr38",
    pergunta: "A anotação de 'uso contínuo' na receita permite aviar por até:",
    opcoes: [
      "30 dias",
      "60 dias",
      "90 dias",
      "180 dias",
    ],
    correta: 2,
    explicacao:
      "Quando o médico prescreve 'uso contínuo', a receita de medicamento não controlado pode ser aviada por até 90 dias (Resolução CFM 1.977/2011 e RDC 20/2011 para antimicrobianos não se aplica).",
  },
  {
    id: "tr39",
    pergunta: "Cliente solicita 'kit emagrecimento' com anfepramona, femproporex e mazindol. Esses medicamentos:",
    opcoes: [
      "São MIP — venda livre",
      "São anorexígenos controlados (tarja preta), hoje com restrições severas da ANVISA",
      "São suplementos alimentares",
      "São vitaminas",
    ],
    correta: 1,
    explicacao:
      "Anfepramona, femproporex e mazindol são anorexígenos de controle especial (Lista B2). A ANVISA restringiu drasticamente seu uso (RDC 50/2014), não sendo mais recomendados para emagrecimento.",
  },
  {
    id: "tr40",
    pergunta: "Ao identificar falsificação de receita, o atendente deve:",
    opcoes: [
      "Ignorar e vender",
      "Reter o documento, não dispensar e comunicar à vigilância sanitária e ao CRF",
      "Devolver ao cliente",
      "Vender e depois avisar",
    ],
    correta: 1,
    explicacao:
      "Falsificação de receita é crime (Art. 298 CP). A farmácia deve reter o documento, recusar a dispensação e informar as autoridades sanitárias e policiais.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   2. SINTOMA → CONDUTA  (30 questões)
   ═══════════════════════════════════════════════════════════════ */

export const jogoSintomaConduta: QuestaoJogo[] = [
  // ── Sintomas comuns e encaminhamento (1-15) ──
  {
    id: "sc01",
    pergunta: "Cliente com cefaleia tensional leve, sem outros sintomas, já conhece o quadro. Conduta:",
    opcoes: [
      "Encaminhar ao hospital imediatamente",
      "Orientar analgésico MIP (paracetamol, dipirona), repouso e retorno se piorar",
      "Vender codeína sem receita",
      "Ignorar a queixa",
    ],
    correta: 1,
    explicacao:
      "Cefaleia tensional leve é queixa comum e elegível para autocuidado apoiado. Analgésico MIP + medidas não farmacológicas. Se persistir ou piorar → médico.",
  },
  {
    id: "sc02",
    pergunta: "Idoso com dor no peito ao esforço pede 'um remédio forte para dor no braço':",
    opcoes: [
      "Vender analgésico comum e mandar descansar",
      "Encaminhamento URGENTE ao médico (IAM suspeito)",
      "Oferecer pomada anti-inflamatória",
      "Dizer que é normal na idade",
    ],
    correta: 1,
    explicacao:
      "Dor torácica + irradiação para braço esquerdo + esforço = sinais clássicos de IAM. Atraso no atendimento pode ser fatal. Encaminhamento imediato.",
  },
  {
    id: "sc03",
    pergunta: "Mãe busca antitérmico para bebê de 2 meses com febre (38,5 °C). Conduta:",
    opcoes: [
      "Paracetamol gotas, dose ajustada",
      "Não medicar sem avaliação médica — encaminhar ao pediatra",
      "Dipirona gotas 1 gota/kg",
      "Ibuprofeno suspensão",
    ],
    correta: 1,
    explicacao:
      "Febre em menores de 3 meses é sinal de alerta (sepse, infecção grave). Exige avaliação médica urgente. Automedicação pode mascarar quadro grave.",
  },
  {
    id: "sc04",
    pergunta: "Cliente com tosse produtiva (catarro amarelo-esverdeado) há 4 dias, sem febre:",
    opcoes: [
      "Antibiótico de venda livre",
      "Expectorante/mucolítico + orientação: procurar médico se não melhorar em 72h",
      "Antitussígeno para secar a tosse",
      "Nada — mandar esperar",
    ],
    correta: 1,
    explicacao:
      "Tosse produtiva pede expectorante e triagem. Escarro purulento sugere infecção bacteriana, mas antibiótico é prescrição médica. Orientar retorno se piora.",
  },
  {
    id: "sc05",
    pergunta: "Paciente com diarreia aguda (3 episódios em 6h), sem sangue, bem hidratado:",
    opcoes: [
      "Antidiarreico (loperamida) imediatamente",
      "Hidratação oral + probiótico + orientação de sinais de alarme",
      "Antibiótico para infecção intestinal",
      "Jejum total por 24h",
    ],
    correta: 1,
    explicacao:
      "Diarreia aguda sem sinais de alarme: priorizar hidratação (soro caseiro/ORS da OMS). Loperamida só com orientação e sem contraindicações. Procurar médico com sangue, febre ou desidratação.",
  },
  {
    id: "sc06",
    pergunta: "Cliente com crise alérgica leve (urticária localizada, coceira) após comer camarão:",
    opcoes: [
      "Adrenalina auto-injetável",
      "Anti-histamínico oral MIP (loratadina, cetirizina, ebastina) + orientar sinais de anafilaxia",
      "Corticóide oral sem receita",
      "Passar pomada de corticóide e ignorar",
    ],
    correta: 1,
    explicacao:
      "Urticária leve sem comprometimento respiratório: anti-histamínico oral MIP + observação. Orientar sinais de anafilaxia (falta de ar, edema glótico) e busca de emergência.",
  },
  {
    id: "sc07",
    pergunta: "Senhora com disúria (ardor ao urinar), sem febre, sem sangramento:",
    opcoes: [
      "Antibiótico para infecção urinária sem receita",
      "Aumentar hidratação, suco de cranberry (prevenção) e orientar consulta médica para antibiótico",
      "Analgésico e esperar passar",
      "Anti-inflamatório e chá de boldo",
    ],
    correta: 1,
    explicacao:
      "Disúria sugere infecção urinária (IVU), que exige antibiótico prescrito após cultura ou avaliação médica. Não se trata sem receita. Hidratação alivia, mas não cura.",
  },
  {
    id: "sc08",
    pergunta: "Cliente com dor de dente latejante há 2 dias, com edema na face:",
    opcoes: [
      "Analgésico e esperar",
      "Analgésico + encaminhamento URGENTE ao dentista (provável abscesso)",
      "Antibiótico de venda livre",
      "Compressa fria e bochecho com água morna",
    ],
    correta: 1,
    explicacao:
      "Dor latejante + edema facial = abscesso dentário. Precisa de drenagem e antibiótico prescrito por dentista. Urgência para evitar disseminação.",
  },
  {
    id: "sc09",
    pergunta: "Jovem com dor de garganta forte, placas purulentas e febre de 38,5 °C:",
    opcoes: [
      "Anti-inflamatório MIP + gargarejo com água morna e sal",
      "Orientar que provável faringite estreptocócica exige avaliação médica para antibiótico",
      "Amoxicilina sem receita — já teve antes",
      "Analgésico e chá de limão",
    ],
    correta: 1,
    explicacao:
      "Placas purulentas + febre = faringoamigdalite bacteriana (Streptococcus pyogenes). Exige antibiótico prescrito (penicilina, amoxicilina). Automedicação pode gerar resistência.",
  },
  {
    id: "sc10",
    pergunta: "Paciente com dor lombar aguda após esforço, sem irradiação para pernas:",
    opcoes: [
      "Repouso absoluto por 1 semana",
      "Analgésico/anti-inflamatório MIP + calor local + movimentação leve + médico se não melhorar em 7 dias",
      "Relaxante muscular de venda livre",
      "Corticóide oral",
    ],
    correta: 1,
    explicacao:
      "Lombalgia mecânica aguda: MIPs para dor + calor local + manter atividades leves. Repouso prolongado piora o prognóstico. Buscar médico com irradiação ou déficit neurológico.",
  },
  {
    id: "sc11",
    pergunta: "Cliente com queimadura superficial (1º grau) no antebraço, pequena área:",
    opcoes: [
      "Passar manteiga ou pasta de dente",
      "Água corrente fria por 10 min + hidratante ou aloe vera + não estourar bolhas",
      "Corticoide tópico",
      "Bandagem compressiva",
    ],
    correta: 1,
    explicacao:
      "Queimadura 1º grau: resfriar com água corrente por 10 min. Não passar substâncias caseiras (manteiga, pasta de dente). Hidratante suave. Bolhas intactas = proteção natural.",
  },
  {
    id: "sc12",
    pergunta: "Gestante no 1º trimestre com náuseas matinais busca MIP para alívio:",
    opcoes: [
      "Dimenidrinato (Dramin) sem preocupação",
      "Orientar medidas não farmacológicas (gengibre, refeições fracionadas) e, se necessário, consultar obstetra",
      "Metoclopramida sem receita",
      "Não dar nada — aguentar",
    ],
    correta: 1,
    explicacao:
      "Náuseas gestacionais: primeira linha são medidas não farmacológicas. Dimenidrinato é opção segura, mas deve ser orientado pelo farmacêutico. Exames de pré-natal em dia.",
  },
  {
    id: "sc13",
    pergunta: "Paciente com constipação crônica (4 dias sem evacuar), sem dor abdominal severa:",
    opcoes: [
      "Laxante estimulante imediato (bisacodil)",
      "Orientar fibras, hidratação, atividade física + laxante osmótico (lactulose) se necessário",
      "Enema caseiro com água morna",
      "Laxante todos os dias",
    ],
    correta: 1,
    explicacao:
      "Constipação simples: medidas comportamentais primeiro. Laxante osmótico (lactulose, PEG) é mais seguro que estimulantes. Se > 7 dias ou dor intensa → médico.",
  },
  {
    id: "sc14",
    pergunta: "Cliente com cefaleia súbita e intensa (pior da vida) chega à farmácia:",
    opcoes: [
      "Analgésico comum e repouso",
      "Encaminhamento URGENTE (suspeita de hemorragia subaracnóidea ou AVC)",
      "Cafeína + ergotamina",
      "Massagem na cabeça",
    ],
    correta: 1,
    explicacao:
      "Cefaleia 'em trovoada' (pior da vida) é emergência neurológica. Suspeitar de hemorragia subaracnóidea. Não medicar — encaminhamento ao pronto-socorro.",
  },
  {
    id: "sc15",
    pergunta: "Paciente com febre 39 °C há 2 dias, sem outros sintomas, adulto saudável:",
    opcoes: [
      "Antibiótico de amplo espectro",
      "Antitérmico MIP + hidratação + repouso, retornar se não melhorar em 72h ou surgirem novos sintomas",
      "Corticóide oral",
      "Dipirona injetável IM na farmácia",
    ],
    correta: 1,
    explicacao:
      "Febre é mecanismo de defesa. Antitérmico MIP (paracetamol, dipirona, ibuprofeno) + hidratação. Se persistir > 72h ou surgirem sinais de alarme → médico.",
  },

  // ── Condutas específicas (16-30) ──
  {
    id: "sc16",
    pergunta: "Cliente com crise de enxaqueca (aura visual + dor unilateral latejante + fotofobia):",
    opcoes: [
      "Analgésico simples e repouso",
      "Orientar que necessita de medicação específica (triptanos) com prescrição médica; analgésico MIP como paliativo",
      "Vender sumatriptano sem receita",
      "Cafeína e compressa quente",
    ],
    correta: 1,
    explicacao:
      "Enxaqueca com aura exige diagnóstico médico. Triptanos são tarja vermelha (não MIP). Analgésico MIP pode aliviar, mas acompanhamento médico é essencial.",
  },
  {
    id: "sc17",
    pergunta: "Mãe diz que filho (5 anos) engoliu objeto pequeno e está tossindo:",
    opcoes: [
      "Dar água para empurrar",
      "Encaminhamento URGENTE (risco de aspiração de corpo estranho)",
      "Bater nas costas",
      "Pedir para vomitar",
    ],
    correta: 1,
    explicacao:
      "Tosse após aspiração de corpo estranho indica obstrução de via aérea. Pode evoluir para asfixia. Emergência pediátrica.",
  },
  {
    id: "sc18",
    pergunta: "Cliente com ferimento cortante superficial (corte pequeno, limpo):",
    opcoes: [
      "Suturar com supercola",
      "Limpeza com água e sabão + antisséptico + curativo + verificar vacina antitetânica",
      "Passar álcool puro",
      "Deixar aberto para secar",
    ],
    correta: 1,
    explicacao:
      "Ferimentos superficiais: limpeza (água e sabão), antisséptico (PVPI, clorexidina, água oxigenada), curativo oclusivo. Verificar vacina antitetânica (a cada 10 anos).",
  },
  {
    id: "sc19",
    pergunta: "Cliente com olho vermelho + secreção purulenta + coceira leve:",
    opcoes: [
      "Colírio antibiótico sem receita",
      "Higiene ocular + compressa fria + orientar consulta (provável conjuntivite bacteriana). Não usar colírio sem diagnóstico",
      "Colírio anestésico",
      "Lavagem com chá de camomila",
    ],
    correta: 1,
    explicacao:
      "Conjuntivite purulenta sugere etiologia bacteriana, mas o diagnóstico é médico. Colírio anestésico é contraindicado (mascara lesões). Nunca compartilhar colírios.",
  },
  {
    id: "sc20",
    pergunta: "Paciente que sofreu picada de abelha, sem histórico de alergia:",
    opcoes: [
      "Tomar anti-histamínico oral MIP + remover ferrão (raspando) + gelo local",
      "Torniquete no membro",
      "Chupar o veneno",
      "Passar amônia tópica",
    ],
    correta: 0,
    explicacao:
      "Picada de abelha sem alergia: remover ferrão por raspagem (não pinça, para não espremer veneno), gelo, anti-histamínico oral. Sinais de anafilaxia → emergência.",
  },
  {
    id: "sc21",
    pergunta: "Cliente com dor muscular difusa após treino intenso (DOMS) há 24h:",
    opcoes: [
      "AINE tópico ou oral se tolerado + movimentação leve + hidratação",
      "Imobilização total",
      "Corticóide oral",
      "Relaxante muscular tarja preta",
    ],
    correta: 0,
    explicacao:
      "Dor muscular tardia (DOMS) é fisiológica. AINE tópico ou oral MIP + movimentação leve + alongamento. Melhora espontânea em 3-5 dias.",
  },
  {
    id: "sc22",
    pergunta: "Paciente com candidíase vaginal recorrente (corrimento branco, grumoso, coceira):",
    opcoes: [
      "Antibiótico oral",
      "Antifúngico tópico (clotrimazol, miconazol MIP) + orientar consulta ginecológica se recorrente",
      "Ducha vaginal com vinagre",
      "Anti-inflamatório oral",
    ],
    correta: 1,
    explicacao:
      "Candidíase vaginal não complicada: antifúngico tópico MIP. Se recorrente (>4x/ano), gestante ou sintomas atípicos → ginecologista. Ducha vaginal é contraindicada.",
  },
  {
    id: "sc23",
    pergunta: "Idosa com tontura ao levantar-se rapidamente (suspeita de hipotensão ortostática):",
    opcoes: [
      "Medicação para labirintite",
      "Orientar hidratação, levantar devagar, medir PA sentada e em pé. Encaminhar ao médico se persistir",
      "Repouso absoluto no leito",
      "Betahistina MIP",
    ],
    correta: 1,
    explicacao:
      "Hipotensão ortostática: comum em idosos, pode ser efeito de medicamentos (anti-hipertensivos). Medidas posturais + hidratação. Investigar causa com clínico.",
  },
  {
    id: "sc24",
    pergunta: "Cliente com herpes labial recorrente (vesículas no lábio):",
    opcoes: [
      "Antibiótico tópico",
      "Antiviral tópico (aciclovir, penciclovir) no início dos sintomas + evitar contato",
      "Corticoide tópico",
      "Pomada cicatrizante",
    ],
    correta: 1,
    explicacao:
      "Herpes labial: antiviral tópico reduz duração se iniciado no pródromo. Não compartilhar objetos. Se > 6 episódios/ano → tratamento supressivo com médico.",
  },
  {
    id: "sc25",
    pergunta: "Paciente com dor abdominal intensa + vômitos + parada de eliminação de gases:",
    opcoes: [
      "Laxante e antiespasmódico",
      "Encaminhamento URGENTE (suspeita de obstrução intestinal)",
      "Analgésico e chá",
      "Soro caseiro",
    ],
    correta: 1,
    explicacao:
      "Dor abdominal + distensão + parada de eliminação = obstrução intestinal. Emergência cirúrgica. Não administrar laxantes ou analgésicos.",
  },
  {
    id: "sc26",
    pergunta: "Cliente com insônia de conciliação (dificuldade para pegar no sono) sem causa aparente:",
    opcoes: [
      "Zolpidem sem receita",
      "Higiene do sono + melatonina (MIP) + evitar telas 2h antes + médico se > 4 semanas",
      "Álcool antes de dormir",
      "Ansiolítico tarja preta de prateleira",
    ],
    correta: 1,
    explicacao:
      "Insônia aguda: higiene do sono é primeira linha. Melatonina MIP em dose baixa (0,3-3 mg) pode auxiliar. Zolpidem e benzodiazepínicos exigem receita de controle especial.",
  },
  {
    id: "sc27",
    pergunta: "Criança de 3 anos com febre 38,2 °C + manchas vermelhas na pele + coriza:",
    opcoes: [
      "Antitérmico + suspeita de exantema viral — orientar observação e médico se piora",
      "Antibiótico imediato",
      "Corticóide oral",
      "Repouso absoluto sem medicação",
    ],
    correta: 0,
    explicacao:
      "Pré-escolar com febre + exantema + coriza → suspeitar de doença viral exantemática (sarampo, rubéola, roséola). Acompanhamento pediátrico + notificação compulsória.",
  },
  {
    id: "sc28",
    pergunta: "Cliente com hematúria visível (urina vermelha) sem dor, após exercício:",
    opcoes: [
      "Aumentar água + vitamina C",
      "Encaminhamento ao médico (pode ser hematúria de origem glomerular, infecciosa ou tumoral)",
      "Antibiótico empírico",
      "Anti-inflamatório e aguardar",
    ],
    correta: 1,
    explicacao:
      "Hematúria macroscópica exige investigação (nefrologista/urologista). Pode indicar glomerulonefrite, litíase, infecção ou neoplasia. Causa benigna só após exclusão.",
  },
  {
    id: "sc29",
    pergunta: "Paciente em uso de varfarina chega com sangramento gengival ao escovar dentes:",
    opcoes: [
      "Aplicar ácido tranexâmico tópico + sem necessidade de emergência",
      "Verificar INR recente e orientar retorno ao médico se sangramento persistir ou INR > 4",
      "Suspender varfarina por conta própria",
      "Tomar vitamina K por conta própria",
    ],
    correta: 1,
    explicacao:
      "Sangramento leve em anticoagulado: orientar verificar INR. Se INR dentro do alvo, conduta expectante. Nunca ajustar anticoagulação sem o médico (risco de tromboembolismo).",
  },
  {
    id: "sc30",
    pergunta: "Cliente com crise de ansiedade súbita (taquicardia, sudorese, sensação de morte iminente):",
    opcoes: [
      "Diazepam sem receita — precisa de controle",
      "Acolhimento + técnicas respiratórias + orientar que não é emergência médica se já diagnosticado. Buscar atendimento se primeira crise",
      "Tomar café para acalmar",
      "Ignorar — é frescura",
    ],
    correta: 1,
    explicacao:
      "Crise de pânico/ansiedade: acolhimento e técnicas de respiração. Se 1ª crise → emergência para descartar causas cardíacas. Benzodiazepínicos exigem receita de controle especial.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   3. VERDADEIRO / FALSO  (30 questões)
   ═══════════════════════════════════════════════════════════════ */

export const jogoVerdadeiroFalso: QuestaoVerdadeiroFalso[] = [
  {
    id: "vf01",
    pergunta: "Medicamento tarja preta pode ser dispensado apenas com orientação farmacêutica, sem receita.",
    correta: false,
    explicacao:
      "FALSO. Todo medicamento de tarja preta exige receita de controle especial (Portaria 344/98). A orientação farmacêutica complementa, mas não substitui a receita.",
  },
  {
    id: "vf02",
    pergunta: "Dipirona sódica 500 mg comprimido é um MIP (Medicamento Isento de Prescrição).",
    correta: true,
    explicacao:
      "VERDADEIRO. Dipirona comprimido 500 mg consta no Anexo I da RDC 98/2016 como MIP, podendo ser dispensada sem receita mediante orientação farmacêutica.",
  },
  {
    id: "vf03",
    pergunta: "Receita de antimicrobiano pode ser aviada mesmo sem o nome completo do paciente, se o medicamento for de uso comum.",
    correta: false,
    explicacao:
      "FALSO. O nome completo do paciente é item obrigatório (RDC 471/2021). A ausência invalida a receita para fins de dispensação.",
  },
  {
    id: "vf04",
    pergunta: "A farmácia pode vender medicamento de tarja vermelha sem reter a receita, desde que o cliente apresente o documento.",
    correta: true,
    explicacao:
      "VERDADEIRO. Tarja vermelha sem retenção exige apresentação de receita, mas o documento não fica retido na farmácia.",
  },
  {
    id: "vf05",
    pergunta: "Antibiótico pode ser dispensado sem receita em situação de calamidade pública declarada.",
    correta: false,
    explicacao:
      "FALSO. Mesmo em calamidade, antimicrobianos exigem prescrição médica. A ANVISA pode flexibilizar regras de registro, mas não a exigência de prescrição.",
  },
  {
    id: "vf06",
    pergunta: "O farmacêutico pode substituir o medicamento prescrito por um genérico, salvo se o prescritor indicar 'não substituir'.",
    correta: true,
    explicacao:
      "VERDADEIRO. Lei 9.787/99 e RDC 47/2009 autorizam a substituição por genérico. Se o médico escrever 'não substituir', a troca é vedada.",
  },
  {
    id: "vf07",
    pergunta: "Psicotrópicos (como diazepam) podem ser vendidos em quantidade ilimitada dentro do prazo da receita.",
    correta: false,
    explicacao:
      "FALSO. A quantidade máxima por receita de psicotrópico é limitada ao tratamento para até 60 dias (Portaria 344/98).",
  },
  {
    id: "vf08",
    pergunta: "A dispensação de medicamentos controlados é ato privativo do farmacêutico.",
    correta: true,
    explicacao:
      "VERDADEIRO. Lei 13.021/2014 e Código de Ética Farmacêutica estabelecem que a dispensação de medicamentos sujeitos a controle especial é ato farmacêutico exclusivo.",
  },
  {
    id: "vf09",
    pergunta: "Paciente pode comprar codeína (xarope para tosse) sem receita porque é vendido em gotas.",
    correta: false,
    explicacao:
      "FALSO. Codeína é substância entorpecente (Lista A1/A2 da Portaria 344/98), independentemente da forma farmacêutica. Exige Notificação de Receita 'A'.",
  },
  {
    id: "vf10",
    pergunta: "O uso de medicamento vencido (prazo de validade expirado) é seguro se armazenado corretamente.",
    correta: false,
    explicacao:
      "FALSO. Medicamento vencido perde eficácia e pode formar produtos de degradação tóxicos. A dispensação de produto vencido é infração sanitária grave (Lei 6.437/77).",
  },
  {
    id: "vf11",
    pergunta: "A prescrição de medicamentos por enfermeiros é permitida em programas de saúde pública, dentro de protocolos.",
    correta: true,
    explicacao:
      "VERDADEIRO. O COFEN autoriza prescrição de medicamentos por enfermeiros em programas de saúde pública (Lei 7.498/86, Decreto 94.406/87), dentro de protocolos institucionais.",
  },
  {
    id: "vf12",
    pergunta: "O mesmo medicamento genérico pode ter preço maior que o medicamento de referência.",
    correta: false,
    explicacao:
      "FALSO. Por lei (9.787/99), o genérico deve custar no mínimo 35% menos que o preço de referência. Esta é uma regra básica da política de genéricos.",
  },
  {
    id: "vf13",
    pergunta: "Sibutramina é um medicamento de tarja vermelha sem retenção.",
    correta: false,
    explicacao:
      "FALSO. Sibutramina é medicamento de controle especial (tarja preta, Lista B2 da Portaria 344/98), com retenção obrigatória de receita.",
  },
  {
    id: "vf14",
    pergunta: "A farmácia deve manter os medicamentos controlados em local separado e sob chave ou controle de acesso.",
    correta: true,
    explicacao:
      "VERDADEIRO. A Portaria 344/98 exige que medicamentos controlados fiquem em armário fechado ou área de acesso restrito, separados dos demais produtos.",
  },
  {
    id: "vf15",
    pergunta: "Álcool 70% líquido pode ser vendido livremente em qualquer quantidade.",
    correta: false,
    explicacao:
      "FALSO. A RDC 691/2022 restringe a venda de álcool 70% líquido por seu potencial de uso indevido (queimaduras, ingestão). A venda é controlada e permitida apenas em frascos de até 1 litro.",
  },
  {
    id: "vf16",
    pergunta: "A lista de MIPs da ANVISA inclui ibuprofeno 600 mg comprimido.",
    correta: false,
    explicacao:
      "FALSO. Ibuprofeno 600 mg é tarja vermelha sem retenção. Ibuprofeno 200 mg e 400 mg são MIPs (RDC 98/2016). A concentração determina a classificação.",
  },
  {
    id: "vf17",
    pergunta: "Gestantes podem usar qualquer MIP, pois são medicamentos seguros.",
    correta: false,
    explicacao:
      "FALSO. Nem todo MIP é seguro na gestação. Ex.: AAS, ibuprofeno (evitar no 3º trimestre). A orientação farmacêutica deve considerar o trimestre e o perfil de risco.",
  },
  {
    id: "vf18",
    pergunta: "A dispensação de medicamentos em farmácia pública (SUS) segue as mesmas regras de prescrição da rede privada.",
    correta: true,
    explicacao:
      "VERDADEIRO. As regras de prescrição e dispensação (anexos da Portaria 344/98, RDC 471/2021) valem para todo o território nacional, incluindo farmácias públicas e privadas.",
  },
  {
    id: "vf19",
    pergunta: "O farmacêutico pode aviar receita de controle especial prescrita por dentista ou veterinário.",
    correta: true,
    explicacao:
      "VERDADEIRO. Dentistas e veterinários podem prescrever medicamentos controlados dentro de sua área de atuação, desde que a receita contenha seus dados de registro profissional.",
  },
  {
    id: "vf20",
    pergunta: "Medicamentos similares não precisam de receita médica.",
    correta: false,
    explicacao:
      "FALSO. A classificação tarja/retenção depende do princípio ativo e concentração, não da categoria (referência, genérico ou similar). Um similar de amoxicilina exige receita como qualquer outro.",
  },
  {
    id: "vf21",
    pergunta: "O paciente pode recusar a troca por genérico mesmo quando a lei permite.",
    correta: true,
    explicacao:
      "VERDADEIRO. O paciente tem o direito de escolher o medicamento de referência, mesmo que o genérico seja intercambiável. A decisão deve ser informada e voluntária.",
  },
  {
    id: "vf22",
    pergunta: "Notificação de Receita 'B' (azul) é utilizada para substâncias entorpecentes.",
    correta: false,
    explicacao:
      "FALSO. Notificação 'A' (amarela) = entorpecentes. Notificação 'B' (azul) = psicotrópicos (benzodiazepínicos, metilfenidato, etc.).",
  },
  {
    id: "vf23",
    pergunta: "A farmácia pode realizar a permuta de medicamentos controlados entre estabelecimentos sem autorização.",
    correta: false,
    explicacao:
      "FALSO. Transferência de controlados entre estabelecimentos exige autorização da ANVISA/Vigilância Sanitária e registro documental no SNGPC.",
  },
  {
    id: "vf24",
    pergunta: "O paracetamol é seguro em qualquer dose, pois é um MIP.",
    correta: false,
    explicacao:
      "FALSO. Paracetamol tem janela terapêutica estreita. Doses > 4 g/dia causam hepatotoxicidade grave. É a principal causa de insuficiência hepática aguda por medicamento.",
  },
  {
    id: "vf25",
    pergunta: "Anticoncepcionais hormonais combinados exigem prescrição médica (tarja vermelha sem retenção).",
    correta: true,
    explicacao:
      "VERDADEIRO. Anticoncepcionais hormonais são tarja vermelha sem retenção. Exigem prescrição médica, mas a receita não é retida pela farmácia.",
  },
  {
    id: "vf26",
    pergunta: "Pomadas dermatológicas com corticoides de baixa potência (hidrocortisona 1%) são MIP.",
    correta: true,
    explicacao:
      "VERDADEIRO. Hidrocortisona 1% creme consta na lista de MIPs (RDC 98/2016). Corticoides de média/alta potência exigem prescrição.",
  },
  {
    id: "vf27",
    pergunta: "A fotocópia da receita de controle especial tem o mesmo valor legal do original.",
    correta: false,
    explicacao:
      "FALSO. Para medicamentos controlados, o documento original deve ser apresentado e retido. Cópias não têm valor legal para fins de dispensação.",
  },
  {
    id: "vf28",
    pergunta: "O farmacêutico pode realizar testes rápidos (glicemia, colesterol, HIV) na farmácia.",
    correta: true,
    explicacao:
      "VERDADEIRO. A RDC 786/2023 e a Lei 13.021/2014 permitem a realização de testes rápidos em farmácias, como parte dos serviços farmacêuticos clínicos.",
  },
  {
    id: "vf29",
    pergunta: "A anvisa proíbe a venda de medicamentos pela internet no Brasil.",
    correta: false,
    explicacao:
      "FALSO. A venda de MIPs pela internet é permitida desde que a farmácia tenha autorização da ANVISA (RDC 358/2020). Medicamentos sob prescrição não podem ser vendidos online.",
  },
  {
    id: "vf30",
    pergunta: "Todos os analgésicos (como paracetamol, dipirona e ibuprofeno) podem ser misturados para potencializar o efeito.",
    correta: false,
    explicacao:
      "FALSO. A associação de analgésicos sem critério médico pode causar danos hepáticos (paracetamol + álcool), renais (AINEs) ou hemorrágicos (AAS). A polifarmácia deve ser evitada sem orientação.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   4. CENÁRIOS DE BALCÃO  (15 cenários com branching)
   ═══════════════════════════════════════════════════════════════ */

export const cenarioBalcao: CenarioBalcao[] = [
  // ── Cenário 1: Dor de garganta ──
  {
    id: "cb01",
    titulo: "Cliente com dor de garganta",
    descricao:
      "Uma senhora de 35 anos chega ao balcão dizendo que está com dor de garganta há 2 dias, dificuldade para engolir e sentiu 'febre' ontem à noite. Pergunta o que a senhora toma para isso.",
    passos: [
      {
        id: "cb01-p1",
        situacao:
          "Você pergunta se ela mediu a febre, se tem placas na garganta, se tossi e se já teve isso antes.",
        escolhas: [
          {
            texto: "Perguntar detalhes: febre medida? Placas? Tosse? Já tomou antibiótico recente?",
            recomendada: true,
            feedback:
              "Excelente triagem! Perguntas abertas ajudam a classificar o risco. Ela diz que não mediu a febre, 'só sentiu calor'. Não consegue olhar a garganta.",
            proximoId: "cb01-p2",
          },
          {
            texto: "Vender logo um anti-inflamatório e gargarejo sem fazer perguntas",
            recomendada: false,
            feedback:
              "A pressa pode mascarar um quadro bacteriano. Sem triagem, você perde a chance de orientar corretamente e pode induzir automedicação de risco.",
          },
        ],
      },
      {
        id: "cb01-p2",
        situacao:
          "Ela relata que já tomou amoxicilina 'sem receita' em outra farmácia há 3 meses para o mesmo sintoma e melhorou. Pede para comprar novamente.",
        escolhas: [
          {
            texto: "Explicar que antibiótico sem receita é proibido e orientar consulta médica para prescrição adequada",
            recomendada: true,
            feedback:
              "Perfeito! Antibiótico sem receita é infração sanitária e contribui para resistência bacteriana. Orientar que o tratamento anterior pode não ser adequado agora (cultura?).",
            proximoId: "cb01-p3",
          },
          {
            texto: "Oferecer amoxicilina 'por baixo dos panos' já que ela melhorou antes",
            recomendada: false,
            feedback:
              "Venda ilegal de antibiótico. Riscos: resistência bacteriana, reação alérgica (sem saber se é o mesmo agente), infração sanitária (RDC 471/2021) com multas pesadas.",
          },
        ],
      },
      {
        id: "cb01-p3",
        situacao:
          "A cliente diz que não pode ir ao médico porque está cheia de trabalho. Quer 'pelo menos um anti-inflamatório forte' para aguentar.",
        escolhas: [
          {
            texto: "Oferecer anti-inflamatório MIP (ibuprofeno 400 mg ou similar) com orientação de dose, sinais de alarme e prazo máximo de 3 dias sem melhora",
            recomendada: true,
            feedback:
              "Ótima conduta! O anti-inflamatório pode aliviar os sintomas enquanto ela agenda a consulta. Deixar claro que é paliativo e que, se houver placas ou febre > 38 °C, precisa de antibiótico.",
          },
          {
            texto: "Vender ibuprofeno 600 mg e pedir para voltar se não passar",
            recomendada: false,
            feedback:
              "Ibuprofeno 600 mg é tarja vermelha — exige receita. Além disso, a dose alta sem prescrição pode causar gastrite e lesão renal. O correto é orientar MIP na dose padrão.",
          },
        ],
      },
    ],
  },

  // ── Cenário 2: Jovem com crise de asma ──
  {
    id: "cb02",
    titulo: "Jovem com falta de ar",
    descricao:
      "Um rapaz de 22 anos entra ofegante na farmácia. Diz que 'está com o peito chiando' e precisa de uma 'bombinha' porque acabou a que tinha em casa.",
    passos: [
      {
        id: "cb02-p1",
        situacao:
          "Ele está com dificuldade para falar frases completas, usa musculatura acessória e tem sibilo audível. Já teve asma na infância mas não acompanha há anos.",
        escolhas: [
          {
            texto: "Reconhecer sinais de crise asmática moderada/grave e acionar emergência (SAMU 192) enquanto oferece o broncodilatador de resgate (se disponível na farmácia)",
            recomendada: true,
            feedback:
              "Excelente! Sibilo + fala entrecortada + uso de musculatura acessória = crise moderada-grave. Broncodilatador (salbutamol spray) + oxigênio se disponível + SAMU. A crise pode evoluir para parada respiratória.",
            proximoId: "cb02-p2",
          },
          {
            texto: "Vender salbutamol spray e mandar ele usar em casa",
            recomendada: false,
            feedback:
              "Muito perigoso! Crise asmática moderada-grave não tratada adequadamente pode ser fatal. Salbutamol spray é medicamento sob prescrição e a situação é emergencial.",
          },
        ],
      },
      {
        id: "cb02-p2",
        situacao:
          "O SAMU foi acionado e está a caminho. Enquanto isso, o rapaz usou o salbutamol spray (2 jatos) e melhorou parcialmente. A frequência respiratória ainda está elevada.",
        escolhas: [
          {
            texto: "Manter o paciente sentado, tranquilo, monitorar sinais vitais, repetir salbutamol (mais 2 jatos) se necessário e aguardar o SAMU",
            recomendada: true,
            feedback:
              "Conduta correta! Posicionamento (sentado), manter calma, broncodilatador a cada 20 min se necessário. Nunca deitar paciente com dispneia. Passar todas as informações à equipe do SAMU.",
          },
          {
            texto: "Mandá-lo deitar e descansar até a ambulância chegar",
            recomendada: false,
            feedback:
              "Paciente com crise asmática não deve deitar — piora a mecânica respiratória. Posição sentada com apoio para os braços (posição de tripé) é a ideal.",
          },
        ],
      },
    ],
  },

  // ── Cenário 3: Mãe com bebê febril ──
  {
    id: "cb03",
    titulo: "Mãe com bebê de 8 meses febril",
    descricao:
      "Uma mãe chega com o bebê no colo, visivelmente preocupada. Diz que o bebê está com 38,8 °C, irritado e recusando o peito há algumas horas.",
    passos: [
      {
        id: "cb03-p1",
        situacao:
          "Ao conversar, a mãe revela que o bebê está assim desde ontem à noite, não aceita bem líquidos e a fração urinária diminuiu (menos fraldas molhadas).",
        escolhas: [
          {
            texto: "Orientar sinais de alarme: buscar pronto-socorro pediátrico porque há sinais de desidratação (recusa alimentar + oligúria) e febre persistente",
            recomendada: true,
            feedback:
              "Ótima decisão! Bebê com febre + recusa alimentar + oligúria = risco de desidratação. A avaliação pediátrica é necessária para causa da febre e hidratação.",
            proximoId: "cb03-p2",
          },
          {
            texto: "Vender paracetamol gotas e pedir para dar bastante água",
            recomendada: false,
            feedback:
              "A medicação alivia a febre, mas não trata a causa. Em bebês, recusa alimentar + oligúria são sinais de alerta que exigem avaliação médica, não apenas antitérmico em casa.",
          },
        ],
      },
      {
        id: "cb03-p2",
        situacao:
          "A mãe pergunta: 'Se eu for ao PS, posso dar o antitérmico antes ou deixo sem? Dói ver ele assim...'",
        escolhas: [
          {
            texto: "Orientar que pode administrar paracetamol (dose correta para peso) antes de sair para alívio do desconforto, mas que não substitui a consulta",
            recomendada: true,
            feedback:
              "Excelente! O antitérmico é para conforto, não para tratar a causa. Calcular dose: paracetamol gotas 200 mg/mL, 1 gota/kg/dose, max 6/6h. Orientar a mãe a informar ao pediatra que medicou.",
          },
          {
            texto: "Não dar nada — a febre é importante para o diagnóstico",
            recomendada: false,
            feedback:
              "Embora a febre seja um sinal clínico, o conforto da criança também importa. A dose correta de antitérmico não mascara os sinais de gravidade (prostração, rigidez de nuca, sinais meníngeos).",
          },
        ],
      },
    ],
  },

  // ── Cenário 4: Idoso com diabetes descompensado ──
  {
    id: "cb04",
    titulo: "Idoso com tontura e mal-estar",
    descricao:
      "Um senhor de 72 anos, diabético, chega à farmácia dizendo que está 'tonto e fraco' desde o almoço. Anda com dificuldade e está pálido.",
    passos: [
      {
        id: "cb04-p1",
        situacao:
          "Ele diz que 'pulou o almoço' porque não estava com fome, mas já tomou a insulina NPH de sempre pela manhã. Agora está suado frio e com tremor.",
        escolhas: [
          {
            texto: "Suspeitar de hipoglicemia e oferecer açúcar imediato: água com açúcar, suco ou glicose oral. Medir glicemia capilar se disponível",
            recomendada: true,
            feedback:
              "Diagnóstico correto! Hipoglicemia (glicemia < 70 mg/dL) é emergência: sudorese fria, tremor, taquicardia, confusão. Tratamento imediato com carboidrato de absorção rápida (15-20 g de glicose).",
            proximoId: "cb04-p2",
          },
          {
            texto: "Medir pressão arterial (suspeita de hipertensão)",
            recomendada: false,
            feedback:
              "Embora PA seja importante, os sintomas (tremor, sudorese fria, jejum + insulina) clássicos de hipoglicemia precisam de tratamento imediato. Açúcar primeiro, depois avalie.",
          },
        ],
      },
      {
        id: "cb04-p2",
        situacao:
          "Você deu suco de laranja (copo de 200 mL). Ele melhorou em 15 minutos. A glicemia capilar era 52 mg/dL antes e agora está 95 mg/dL.",
        escolhas: [
          {
            texto: "Orientar comer um lanche com carboidrato complexo (pão, bolacha) para manter a glicemia. Explicar regra dos 15-15 e contatar o médico para ajuste de dose",
            recomendada: true,
            feedback:
              "Conduta completa! Após hipoglicemia: 15-20 g de carboidrato simples, reavaliar em 15 min, depois carboidrato complexo para manter. Encaminhar ao médico para reavaliar dose de insulina.",
          },
          {
            texto: "Mandá-lo para casa, já que está bem agora",
            recomendada: false,
            feedback:
              "Paciente idoso com hipoglicemia grave tem risco de recorrência. Sem orientação e sem ajuste de dose, pode ter novo episódio. Além disso, precisa de acompanhamento para evitar danos neurológicos.",
          },
        ],
      },
    ],
  },

  // ── Cenário 5: Cliente pedindo 'emagrecedor' ──
  {
    id: "cb05",
    titulo: "Cliente quer emagrecer rápido",
    descricao:
      "Uma moça de 28 anos chega pedindo 'aquele remédio para emagrecer que vende sem receita'. Diz que tem uma festa daqui 2 semanas e quer 'secar'.",
    passos: [
      {
        id: "cb05-p1",
        situacao:
          "Ela menciona que já tomou sibutramina há 2 anos (comprou 'sem receita' em outra farmácia) e quer de novo. Não tem acompanhamento médico.",
        escolhas: [
          {
            texto: "Explicar que sibutramina é tarja preta (controle especial) exige receita retida, tem contraindicações e efeitos colaterais. Orientar reeducação alimentar e consulta com nutricionista/endocrinologista",
            recomendada: true,
            feedback:
              "Perfeito! Sibutramina exige prescrição médica com retenção (Portaria 344/98, Lista B2). Riscos: hipertensão arterial, taquicardia, ansiedade, risco cardiovascular. Jamais vender sem receita.",
            proximoId: "cb05-p2",
          },
          {
            texto: "Vender sibutramina 'discretamente' pois ela já tomou antes",
            recomendada: false,
            feedback:
              "Venda ilegal de substância controlada! Sibutramina é tarja preta com alto risco cardiovascular. A venda sem receita é crime e coloca a paciente em risco de AVC, arritmia e morte súbita.",
          },
        ],
      },
      {
        id: "cb05-p2",
        situacao:
          "Ela se frustra e pergunta: 'Mas então o que você pode me dar? Tem algum chá ou suplemento que acelere?'",
        escolhas: [
          {
            texto: "Oferecer opções seguras: fibras (psyllium, glucomanana) para saciedade, termogênicos naturais (chá verde, café) com orientação de limites, e reforçar que resultado saudável leva tempo",
            recomendada: true,
            feedback:
              "Ótima abordagem! Suplementos seguros + orientação nutricional é o caminho correto. Chá verde (cafeína + catequinas) pode auxiliar modestamente o metabolismo, mas não faz milagre. Sempre respeitar contraindicações.",
          },
          {
            texto: "Vender um combo de 'termogênico turbo' com cafeína, sinefrina e iodo (produto sem registro ANVISA)",
            recomendada: false,
            feedback:
              "Produtos sem registro ANVISA são irregulares e perigosos. Sinefrina pode causar arritmias, iodo em excesso causa tireotoxicose. O correto é recomendar apenas produtos com registro no MS/ANVISA.",
          },
        ],
      },
    ],
  },

  // ── Cenário 6: Antibiótico para criança ──
  {
    id: "cb06",
    titulo: "Pai pedindo antibiótico para o filho",
    descricao:
      "Um pai chega com receita de amoxicilina suspensão para o filho de 4 anos. A receita tem data de 25 dias atrás e o tratamento prescrito é de 10 dias.",
    passos: [
      {
        id: "cb06-p1",
        situacao:
          "A receita está com data de 25 dias. A RDC 471/2021 determina validade de 10 dias para antimicrobianos.",
        escolhas: [
          {
            texto: "Explicar que a receita está vencida (validade 10 dias para antibiótico) e não pode ser aviada. Orientar retorno ao pediatra para nova prescrição",
            recomendada: true,
            feedback:
              "Correto! Receita de antimicrobiano vence em 10 dias corridos (RDC 471/2021). Dispensar receita vencida é infração. A criança pode precisar de reavaliação para garantir o antibiótico correto.",
            proximoId: "cb06-p2",
          },
          {
            texto: "Aviar assim mesmo — é só um detalhe de prazo",
            recomendada: false,
            feedback:
              "Infração sanitária grave! A validade de 10 dias para antibióticos existe porque a infecção pode ter mudado ou se resolvido. A criança precisa de reavaliação.",
          },
        ],
      },
      {
        id: "cb06-p2",
        situacao:
          "O pai fica impaciente: 'Mas o remédio é o mesmo, ele ainda está com catarro e febre. Não posso esperar consulta.'",
        escolhas: [
          {
            texto: "Manter a recusa educadamente, orientar os riscos da automedicação e sugerir consulta online ou UBS mais próxima para reavaliação rápida",
            recomendada: true,
            feedback:
              "Excelente! Acolher a preocupação sem ceder. Oferecer alternativas (telemedicina, UBS, pronto-atendimento pediátrico). Nunca dispensar antibiótico vencido — o tratamento incompleto gera resistência bacteriana.",
          },
          {
            texto: "Ceder e aviar — o pai está visivelmente estressado",
            recomendada: false,
            feedback:
              "Ceder à pressão do cliente é erro profissional. O farmacêutico responde civil, penal e eticamente pela dispensação irregular. A saúde da criança vem em primeiro lugar.",
          },
        ],
      },
    ],
  },

  // ── Cenário 7: Reação alérgica a medicamento ──
  {
    id: "cb07",
    titulo: "Cliente com suspeita de alergia",
    descricao:
      "Uma cliente de 45 anos comprou ibuprofeno 400 mg há 2 dias. Volta hoje com manchas avermelhadas pelo tronco e coceira intensa, que começaram após a 3ª dose.",
    passos: [
      {
        id: "cb07-p1",
        situacao:
          "Ela está preocupada, com urticária generalizada mas sem dificuldade respiratória, sem edema de lábios ou língua. PA normal, sem taquicardia.",
        escolhas: [
          {
            texto: "Reconhecer reação alérgica (urticária) ao AINE. Suspender ibuprofeno imediatamente e oferecer anti-histamínico oral (loratadina/cetirizina). Orientar sinais de anafilaxia e buscar médico se piorar",
            recomendada: true,
            feedback:
              "Ótima conduta! Urticária por AINE é efeito adverso conhecido (intolerância a AINEs). Suspender o causador + anti-histamínico. Anotar na ficha do paciente: alergia a AINEs.",
            proximoId: "cb07-p2",
          },
          {
            texto: "Dizer que não é do remédio e vender corticóide tópico",
            recomendada: false,
            feedback:
              "Ignorar a relação temporal (3ª dose → rash) é negligência. Corticóide tópico não trata reação sistêmica. A paciente precisa suspender o AINE e usar anti-histamínico oral.",
          },
        ],
      },
      {
        id: "cb07-p2",
        situacao:
          "Ela tomou a loratadina e melhorou 60% em 1 hora. Pergunta: 'E para a dor que eu estava tratando, o que posso tomar no lugar?'",
        escolhas: [
          {
            texto: "Orientar que deve evitar AINEs (ibuprofeno, diclofenaco, nimesulida, AAS) e pode usar dipirona ou paracetamol (MIP) como alternativa. Recomendar consulta médica para investigar alergia",
            recomendada: true,
            feedback:
              "Correto! Dipirona e paracetamol têm baixo risco cruzado com alergia a AINEs. Importante orientar sobre a necessidade de notificar alergia a AINEs em prontuários médicos.",
          },
          {
            texto: "Trocar por nimesulida — é mais forte e não dá alergia",
            recomendada: false,
            feedback:
              "Nimesulida também é AINE e tem alto potencial de reação cruzada. Além disso, nimesulida tem risco hepatotóxico e não é MIP. Alternativa inadequada.",
          },
        ],
      },
    ],
  },

  // ── Cenário 8: Cliente com hipertensão descontrolada ──
  {
    id: "cb08",
    titulo: "Senhor com pressão alta e dor",
    descricao:
      "Um senhor de 60 anos, hipertenso, chega com dor no joelho. Pede 'um anti-inflamatório forte' porque o joelho está inchado e dolorido.",
    passos: [
      {
        id: "cb08-p1",
        situacao:
          "Ele relata que faz uso de losartana 50 mg e hidroclorotiazida 25 mg diariamente. Não mede a pressão há meses.",
        escolhas: [
          {
            texto: "Oferecer paracetamol ou dipirona para dor (menor risco cardiovascular). Medir PA antes de qualquer recomendação. Se PA descontrolada, orientar retorno ao cardiologista",
            recomendada: true,
            feedback:
              "Excelente! AINEs (ibuprofeno, diclofenaco, nimesulida) podem aumentar PA e interagir com anti-hipertensivos. Paracetamol/dipirona são mais seguros para hipertensos. Medir PA é essencial.",
            proximoId: "cb08-p2",
          },
          {
            texto: "Vender diclofenaco potássico que é mais forte para o joelho",
            recomendada: false,
            feedback:
              "Diclofenaco + losartana + HCTZ: risco de aumento da PA, redução do efeito anti-hipertensivo e lesão renal aguda. Contraindicado sem avaliação médica.",
          },
        ],
      },
      {
        id: "cb08-p2",
        situacao:
          "PA medida: 165 x 100 mmHg. Ele diz que 'às vezes esquece de tomar o remédio' e não voltou ao médico desde a última consulta há 8 meses.",
        escolhas: [
          {
            texto: "Explicar que a PA está descontrolada (hipertensão estágio 2). Orientar retorno URGENTE ao cardiologista, não pular doses, e não usar anti-inflamatório até avaliação. Analgésico MIP para dor",
            recomendada: true,
            feedback:
              "Conduta correta! PA 165x100 é risco cardiovascular elevado. Não aderir ao tratamento é a principal causa de descontrole. Orientar sobre a importância da adesão e encaminhar ao médico.",
          },
          {
            texto: "Vender o anti-inflamatório por 3 dias e depois medir PA de novo",
            recomendada: false,
            feedback:
              "3 dias de AINE com PA descontrolada pode precipitar crise hipertensiva, AVC ou lesão renal. Não é aceitável. O paciente precisa de reavaliação médica antes de qualquer AINE.",
          },
        ],
      },
    ],
  },

  // ── Cenário 9: Troca de genérico ──
  {
    id: "cb09",
    titulo: "Paciente desconfiado do genérico",
    descricao:
      "Uma cliente idosa chega com receita de atorvastatina 20 mg (referência: Lipitor). O médico não escreveu 'não substituir'. Ela sempre comprou o referência, mas está mais caro.",
    passos: [
      {
        id: "cb09-p1",
        situacao:
          "Ela pergunta se o genérico 'faz o mesmo efeito' e se pode confiar. Diz que ouviu de uma vizinha que 'genérico não funciona igual'.",
        escolhas: [
          {
            texto: "Explicar com paciência que o genérico tem o mesmo princípio ativo, mesma dose, mesma eficácia comprovada por bioequivalência (ANVISA). Mostrar a embalagem e a tarja verde. Orientar economia sem perda de qualidade",
            recomendada: true,
            feedback:
              "Perfeito! Acolher a dúvida com informação técnica acessível. O genérico brasileiro tem um dos controles de qualidade mais rigorosos do mundo (RDC 58/2014). Bioequivalência garante mesma absorção e efeito.",
            proximoId: "cb09-p2",
          },
          {
            texto: "Falar que 'é a mesma coisa' sem explicação e vender o genérico",
            recomendada: false,
            feedback:
              "A confiança do paciente é construída com informação. Dizer 'é a mesma coisa' sem embasamento gera desconfiança. Explique os testes de bioequivalência e a regulação da ANVISA.",
          },
        ],
      },
      {
        id: "cb09-p2",
        situacao:
          "Ela decide levar o genérico, mas pergunta: 'E se eu sentir alguma diferença, posso voltar para o de referência?'",
        escolhas: [
          {
            texto: "Sim, pode. Se houver qualquer reação diferente, orientar retorno ao médico e relatar ao farmacêutico. Em termos farmacocinéticos, a bioequivalência garante mesma exposição, mas cada organismo pode responder de forma peculiar",
            recomendada: true,
            feedback:
              "Excelente! Respeitar a individualidade do paciente. Reações idiossincráticas são raras mas possíveis com qualquer medicamento. Manter canal aberto para dúvidas e orientações.",
          },
          {
            texto: "Não — genérico é igual, não pode sentir diferença",
            recomendada: false,
            feedback:
              "Generalizar desconsidera a experiência do paciente. Embora a bioequivalência garanta equivalência, reações individuais podem ocorrer. Frustrar a paciente quebra a confiança.",
          },
        ],
      },
    ],
  },

  // ── Cenário 10: Suspeita de dengue ──
  {
    id: "cb10",
    titulo: "Cliente com suspeita de dengue",
    descricao:
      "Uma jovem de 25 anos chega com febre alta (39 °C) há 3 dias, dor atrás dos olhos, dor no corpo intensa e manchas avermelhadas na pele.",
    passos: [
      {
        id: "cb10-p1",
        situacao:
          "Ela está em área endêmica para dengue (verão, bairro com casos confirmados). Relata que está 'mole' e com náusea.",
        escolhas: [
          {
            texto: "Suspeitar clinicamente de dengue. Orientar HIDRATAÇÃO vigorosa, repouso, NÃO usar AINEs/AAS (risco de sangramento). Paracetamol ou dipirona para febre/dor. Encaminhar para exame sorológico e acompanhamento médico",
            recomendada: true,
            feedback:
              "Perfeito! Dengue clássica: febre + dor retro-orbitária + mialgia + exantema. Contraindicado: AINEs e AAS (risco de hemorragia na dengue). Paracetamol/dipirona são seguros. Hidratação é a base do tratamento.",
            proximoId: "cb10-p2",
          },
          {
            texto: "Vender ibuprofeno para dor e febre e mandar descansar",
            recomendada: false,
            feedback:
              "Perigoso! Ibuprofeno e AINEs são contraindicados na suspeita de dengue (risco de sangramento gastrointestinal e agravamento do quadro hemorrágico). Pode evoluir para dengue grave.",
          },
        ],
      },
      {
        id: "cb10-p2",
        situacao:
          "Ela pergunta: 'Posso tomar soro caseiro? Não estou conseguindo comer nem beber muita água.'",
        escolhas: [
          {
            texto: "Sim! Soro caseiro (OMS) é essencial. Orientar 50-100 mL/kg/dia fracionados. Se não tolerar via oral ou surgirem sinais de alarme (vômitos incoercíveis, dor abdominal intensa, hipotensão postural, sangramento) → emergência URGENTE",
            recomendada: true,
            feedback:
              "Excelente! Soro caseiro: 1 litro água filtrada + 1 colher sopa açúcar + 1 colher café sal. Sinais de alarme na dengue: vômitos persistentes, dor abdominal, hemorragias, letargia — indicam necessidade de internação.",
          },
          {
            texto: "Não precisa de soro, só água filtrada é suficiente",
            recomendada: false,
            feedback:
              "A hidratação na dengue precisa de eletrólitos, não só água. O soro caseiro (ou soro de reidratação oral industrializado) repõe sódio, potássio e glicose, essenciais para prevenir complicações.",
          },
        ],
      },
    ],
  },

  // ── Cenário 11: Medicamento controlado para idoso ──
  {
    id: "cb11",
    titulo: "Filha buscando remédio controlado para o pai",
    descricao:
      "Uma moça de 30 anos chega com receita de clonazepam 2 mg (tarja preta) para o pai de 78 anos. A receita está no nome do pai mas sem data.",
    passos: [
      {
        id: "cb11-p1",
        situacao:
          "A receita de controle especial (para clonazepam, lista B1) não tem data de emissão. A moça está com pressa e diz que 'o médico esqueceu de datar'.",
        escolhas: [
          {
            texto: "Explicar que a data é item obrigatório (Portaria 344/98). Sem data, a receita não pode ser aviada. Sugerir retorno ao médico ou contato telefônico para regularização",
            recomendada: true,
            feedback:
              "Perfeito! Receita de controlado sem data é inválida. Oferecer soluções: a filha pode ligar para o médico e pedir que ele envie uma foto da receita datada ou nova receita.",
            proximoId: "cb11-p2",
          },
          {
            texto: "Colocar a data de hoje e aviar — é só um detalhe",
            recomendada: false,
            feedback:
              "Falsificação de documento! Colocar data é crime (Art. 298 CP — falsificação de documento público/particular). Além disso, a receita sem data não permite verificar a validade de 30 dias.",
          },
        ],
      },
      {
        id: "cb11-p2",
        situacao:
          "A filha conseguiu contato com o médico por WhatsApp. Ele enviou uma nova receita digital com assinatura. A receita parece legítima.",
        escolhas: [
          {
            texto: "Verificar a assinatura digital (certificado ICP-Brasil ou sistema autorizado). Se válida, aviar normal. Orientar sobre cuidados com clonazepam em idosos (risco de queda, sedação diurna)",
            recomendada: true,
            feedback:
              "Excelente! A RDC 634/2022 permite prescrição digital de controlados com certificação adequada. Orientação extra: benzodiazepínicos em idosos aumentam risco de quedas e declínio cognitivo — uso deve ser monitorado.",
          },
          {
            texto: "Aviar sem verificar a assinatura — veio do médico mesmo",
            recomendada: false,
            feedback:
              "O farmacêutico deve verificar a autenticidade da prescrição digital. Dispensar sem conferência é negligência. O WhatsApp não garante que a receita seja do médico.",
          },
        ],
      },
    ],
  },

  // ── Cenário 12: Cliente com diarreia do viajante ──
  {
    id: "cb12",
    titulo: "Turista com diarreia",
    descricao:
      "Um homem de 35 anos, voltando de uma viagem ao Nordeste, chega com diarreia aquosa há 2 dias, cólicas abdominais, sem febre, sem sangue nas fezes.",
    passos: [
      {
        id: "cb12-p1",
        situacao:
          "Ele está hidratado, sem sinais de desidratação. Fez 5 evacuações hoje. Não tem doenças crônicas.",
        escolhas: [
          {
            texto: "Orientar hidratação oral vigorosa (soro caseiro), probiótico (Lactobacillus casei, Saccharomyces boulardii) para recuperação da flora. Loperamida 2 mg após cada evacuação (max 8 mg/dia) se necessário para conforto",
            recomendada: true,
            feedback:
              "Ótimo! Diarreia do viajante (geralmente E. coli enterotoxigênica) é autolimitada. Hidratação + probióticos. Loperamida com cautela (sem febre/sangue). Se piorar ou surgir febre → médico (possível disenteria bacteriana).",
            proximoId: "cb12-p2",
          },
          {
            texto: "Vender antibiótico (azitromicina) para 'cortar logo'",
            recomendada: false,
            feedback:
              "Antibiótico empírico sem indicação clara contribui para resistência bacteriana e pode piorar o quadro. Azitromicina exige receita. Diarreia do viajante é autolimitada na maioria dos casos.",
          },
        ],
      },
      {
        id: "cb12-p2",
        situacao:
          "Ele comprou loperamida e soro. No dia seguinte volta dizendo que a diarreia parou, mas agora está com constipação e cólicas.",
        escolhas: [
          {
            texto: "Orientar que a constipação pós-diarreia é comum, especialmente após loperamida. Hidratação, fibras solúveis (pectina, banana) e evitar laxantes. A motilidade intestinal normaliza em 1-2 dias",
            recomendada: true,
            feedback:
              "Correto! Loperamida retarda o trânsito intestinal e pode causar constipação temporária. Não usar laxantes. A conduta é expectante: hidratação + fibras solúveis + tempo.",
          },
          {
            texto: "Vender bisacodil (laxante estimulante) para resolver",
            recomendada: false,
            feedback:
              "Laxante estimulante após loperamida + diarreia pode causar desarranjo do ritmo intestinal, cólicas severas e desidratação. Totalmente contraindicado nesse contexto.",
          },
        ],
      },
    ],
  },

  // ── Cenário 13: Receita de antimicrobiano com posologia divergente ──
  {
    id: "cb13",
    titulo: "Receita com dose incorreta",
    descricao:
      "Paciente traz receita de cefalexina 500 mg para infecção de pele. A receita diz: 'tomar 1 comprimido de 12/12h por 5 dias'. Mas o padrão para cefalexina é 6/6h.",
    passos: [
      {
        id: "cb13-p1",
        situacao:
          "A posologia prescrita (12/12h) está diferente da bula (6/6h para infecções de pele). O paciente já está com a receita há 8 dias (válida ainda, 10 dias).",
        escolhas: [
          {
            texto: "Não dispensar e contactar o prescritor para esclarecer a posologia. Pode ser erro de prescrição. Sem contato, não aviar",
            recomendada: true,
            feedback:
              "Perfeito! O farmacêutico tem o dever de verificar a prescrição. Dose subótima pode gerar resistência bacteriana e falha terapêutica. Contatar o médico é obrigação ética e técnica (Código de Ética Farmacêutica).",
            proximoId: "cb13-p2",
          },
          {
            texto: "Aviar do jeito que está — médico sabe o que faz",
            recomendada: false,
            feedback:
              "Nem sempre. Erros de prescrição acontecem. Cefalexina 12/12h para cefalexina (meia-vida curta) resulta em nível sérico subterapêutico por horas, favorecendo resistência bacteriana. Omissão do farmacêutico é negligência.",
          },
        ],
      },
      {
        id: "cb13-p2",
        situacao:
          "Você conseguiu contato com o médico que confirmou: 'foi erro meu, o correto é 6/6h por 7 dias'. O médico enviou nova receita corrigida por WhatsApp com foto.",
        escolhas: [
          {
            texto: "Aceitar a correção formal por receita digital ou pedir que o paciente busque nova receita física com a correção oficial. Se a foto tiver nº CRM e assinatura visíveis, pode aviar com registro",
            recomendada: true,
            feedback:
              "Correto! A correção deve ser documentada. Se o farmacêutico tiver segurança da autoria (confirmou por telefone + CRM), pode aviar anexando o registro ao livro de controlados. Em caso de dúvida, solicitar nova receita física.",
          },
          {
            texto: "Ignorar a correção — 'o combinado não sai caro', aviar com 6/6h mesmo sem nova receita",
            recomendada: false,
            feedback:
              "A dispensação deve corresponder a uma prescrição válida por escrito. Alterar posologia sem documento formal de correção é irregular. O farmacêutico precisa de respaldo documental para qualquer alteração.",
          },
        ],
      },
    ],
  },

  // ── Cenário 14: Cliente com crise de labirintite ──
  {
    id: "cb14",
    titulo: "Crise de labirintite",
    descricao:
      "Uma senhora de 55 anos chega tonta, segurando no balcão. Diz que 'o mundo está rodando' e está com náusea. Relata crises anteriores de labirintite.",
    passos: [
      {
        id: "cb14-p1",
        situacao:
          "Ela está pálida, com nistagmo horizontal, e vomitou na calçada. Não tem febre, não tem cefaleia intensa, não tem fraqueza em membros. PA: 120x80 mmHg.",
        escolhas: [
          {
            texto: "Suspeitar de vertigem periférica (labirintite/neurite vestibular). Oferecer local para sentar, dimenidrinato 50 mg (Dramin) ou betaistina (se disponível). Orientar repouso e médico se não melhorar em 48h",
            recomendada: true,
            feedback:
              "Ótima conduta! Vertigem posicional/periférica tem bom prognóstico. Dimenidrinato (MIP) ou betaistina (MIP) aliviam. Sinais de alerta para vertigem central (AVC): diplopia, disartria, fraqueza, cefaleia occipital súbita.",
            proximoId: "cb14-p2",
          },
          {
            texto: "Vender dimenidrinato injetável e aplicar na farmácia",
            recomendada: false,
            feedback:
              "Dimenidrinato injetável exige receita médica e administração por profissional habilitado. Via oral é suficiente e segura. Injeção desnecessária aumenta riscos (reação no local, erro de dose).",
          },
        ],
      },
      {
        id: "cb14-p2",
        situacao:
          "Ela melhorou após repouso + dimenidrinato oral. Mas pergunta: 'Isso é normal? Acontece toda semana. Tem algum remédio contínuo?'",
        escolhas: [
          {
            texto: "Vertigem recorrente precisa de investigação (otorrino/neurologista). Betaistina 16-24 mg 3x/dia pode ser usada como profilaxia (MIP), mas o ideal é diagnóstico etiológico. Encaminhar para especialista",
            recomendada: true,
            feedback:
              "Excelente! Vertigem semanal não é normal. Pode ser doença de Ménière, vertigem posicional paroxística benigna (VPPB) ou outra. Betaistina é MIP para tratamento, mas a causa precisa ser investigada por especialista.",
          },
          {
            texto: "Comprar betaistina para usar todo dia e resolve",
            recomendada: false,
            feedback:
              "Betaistina sem investigação diagnostica é tratamento sintomático empírico. Pode mascarar doença de Ménière ou outra condição. O paciente precisa de avaliação otorrinolaringológica.",
          },
        ],
      },
    ],
  },

  // ── Cenário 15: Cliente comprando para terceiros ──
  {
    id: "cb15",
    titulo: "Cliente comprando para outra pessoa",
    descricao:
      "Um rapaz de 20 anos quer comprar anticoncepcional oral (tarja vermelha sem retenção) para a namorada, que está em casa e 'não pode vir porque está com cólica'. A receita está no nome da namorada.",
    passos: [
      {
        id: "cb15-p1",
        situacao:
          "A receita está no nome da namorada, com data de 15 dias, e o medicamento é anticoncepcional combinado (etinilestradiol + levonorgestrel).",
        escolhas: [
          {
            texto: "Pode aviar — receita no nome da paciente, dentro da validade, e o rapaz está autorizado a comprar. Orientar sobre a importância do uso correto e consulta ginecológica",
            recomendada: true,
            feedback:
              "Correto! A receita é para a paciente, o medicamento não é controlado (tarja vermelha sem retenção), e terceiros podem comprar. O farmacêutico deve orientar sobre uso contínuo, horário e efeitos colaterais.",
            proximoId: "cb15-p2",
          },
          {
            texto: "Não vender — só o próprio paciente pode comprar medicamento de tarja vermelha",
            recomendada: false,
            feedback:
              "Não há restrição legal para terceiros comprarem medicamentos de tarja vermelha sem retenção. A receita é o que importa. Recusar sem motivo pode gerar constrangimento e perda da confiança.",
          },
        ],
      },
      {
        id: "cb15-p2",
        situacao:
          "O rapaz pergunta também: 'Ela está com muita cólica, o que pode tomar junto?' e 'Precisa de receita para cólica?'",
        escolhas: [
          {
            texto: "Anticoncepcional + analgésico/antiespasmódico MIP (ibuprofeno, dipirona, escopolamina) não tem interação. Orientar que cólicas intensas podem indicar endometriose ou mioma — sugerir consulta ginecológica",
            recomendada: true,
            feedback:
              "Perfeito! Anticoncepcional hormonal + AINE/dipirona/escopolamina são seguros em associação. Escopolamina (Buscopan) é MIP para cólicas. Mas cólica incapacitante merece investigação — orientar a namorada a consultar ginecologista.",
          },
          {
            texto: "Vender codeína + anticoncepcional — resolve a cólica",
            recomendada: false,
            feedback:
              "Codeína é entorpecente (Notificação A)! Exige receita própria e retenção. Vender codeína sem receita é crime. Cólica menstrual leve-moderada é tratada com MIPs (AINEs, antiespasmódicos).",
          },
        ],
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   Metadados da coleção
   ═══════════════════════════════════════════════════════════════ */

export const jogosMeta = {
  titulo: "Jogos de balcão",
  descricao:
    "Pratique leitura de tarjas, conferência de receitas, associação sintoma → conduta segura, verdadeiro ou falso e simulações realísticas de atendimento no balcão da farmácia.",
  categorias: [
    { id: "tarjas", label: "Tarjas + Receitas", total: 40 },
    { id: "sintomas", label: "Sintoma → Conduta", total: 30 },
    { id: "verdadeiroFalso", label: "Verdadeiro ou Falso", total: 30 },
    { id: "cenarios", label: "Cenários de Balcão", total: 15 },
  ],
  totalQuestoes: 115,
} as const;

/* ═══════════════════════════════════════════════════════════════
   Tipos e exports de compatibilidade (legado)
   Usados pela página /jogos e componentes antigos
   ═══════════════════════════════════════════════════════════════ */

export interface JogoCatalogo {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  gradient: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
  questoes: number;
  recorde?: string;
  componente: string;
}
/** Catálogo dos jogos disponíveis — usado na página /jogos */
export const jogosCatalogo: JogoCatalogo[] = [
  {
    id: "tarjas",
    titulo: "Tarjas + Receitas",
    descricao: "Domine a leitura de tarjas, prazos de validade e regras de dispensação de cada tipo de receita.",
    icone: "shield",
    gradient: "from-gold-500 to-gold-600",
    nivel: "Básico",
    questoes: 20,
    recorde: "—",
    componente: "quiz",
  },
  {
    id: "receitas",
    titulo: "Receitas e Erros Comuns",
    descricao: "Identifique erros em receitas, aprenda as regras de retenção e evite infrações sanitárias.",
    icone: "book",
    gradient: "from-amber-500 to-orange-600",
    nivel: "Intermediário",
    questoes: 20,
    recorde: "—",
    componente: "quiz",
  },
  {
    id: "sintomas",
    titulo: "Sintoma → Conduta",
    descricao: "Associe sintomas à conduta correta no balcão: quando orientar MIP, quando encaminhar ao médico.",
    icone: "heart",
    gradient: "from-emerald-500 to-teal-600",
    nivel: "Intermediário",
    questoes: 30,
    recorde: "—",
    componente: "quiz",
  },
  {
    id: "velocidade",
    titulo: "Desafio Relâmpago",
    descricao: "Responda o máximo de perguntas contra o relógio. Quanto mais rápido e preciso, mais pontos!",
    icone: "zap",
    gradient: "from-violet-500 to-purple-600",
    nivel: "Avançado",
    questoes: 10,
    recorde: "—",
    componente: "speed",
  },
  {
    id: "fato-ou-fake",
    titulo: "Fato ou Fake",
    descricao: "Separe os fatos científicos das fake news sobre medicamentos e saúde.",
    icone: "sparkles",
    gradient: "from-sky-500 to-cyan-600",
    nivel: "Básico",
    questoes: 30,
    recorde: "—",
    componente: "fato-ou-fake",
  },
  {
    id: "sobrevivencia",
    titulo: "Modo Sobrevivência",
    descricao: "3 vidas. Errou? Perdeu uma vida. Sem vidas? Game Over. Cuide de cada atendimento.",
    icone: "flame",
    gradient: "from-red-500 to-rose-600",
    nivel: "Avançado",
    questoes: 15,
    recorde: "—",
    componente: "sobrevivencia",
  },
  {
    id: "cenario",
    titulo: "Cenários de Balcão",
    descricao: "Simulações realísticas com situações do dia a dia na farmácia. Cada escolha faz diferença.",
    icone: "users",
    gradient: "from-cyan-500 to-sky-600",
    nivel: "Intermediário",
    questoes: 15,
    recorde: "—",
    componente: "cenario",
  },
];

/* ─── Aliases de compatibilidade ─── */

/** Primeiras 20 questões de tarjas+receitas (legado: jogoTarjas) */
export const jogoTarjas: QuestaoJogo[] = jogoTarjasReceitas.slice(0, 20);

/** Últimas 20 questões de tarjas+receitas (legado: jogoReceita) */
export const jogoReceita: QuestaoJogo[] = jogoTarjasReceitas.slice(20);

/** Alias para jogoSintomaConduta (legado: jogoSintomaCategoria) */
export const jogoSintomaCategoria: QuestaoJogo[] = jogoSintomaConduta;

/** 10 questões para o modo SpeedChallenge (velocidade) */
export const jogoVelocidade: QuestaoJogo[] = [
  {
    id: "vl01",
    pergunta: "Qual o prazo de validade de uma receita de antimicrobiano?",
    opcoes: ["5 dias", "10 dias", "15 dias", "30 dias"],
    correta: 1,
    explicacao: "RDC 471/2021: receitas de antimicrobianos valem 10 dias corridos.",
  },
  {
    id: "vl02",
    pergunta: "Tarja preta = ?",
    opcoes: ["Venda livre", "Controle especial com retenção", "Sem restrição", "Uso veterinário"],
    correta: 1,
    explicacao: "Tarja preta = controle especial (Portaria 344/98).",
  },
  {
    id: "vl03",
    pergunta: "O que significa MIP?",
    opcoes: ["Medicamento de Indicação Popular", "Medicamento Isento de Prescrição", "Marca Industrial Padrão", "Molécula Inovadora e Patenteada"],
    correta: 1,
    explicacao: "MIP = Medicamento Isento de Prescrição (RDC 98/2016).",
  },
  {
    id: "vl04",
    pergunta: "Notificação de Receita 'A' vale quantos dias?",
    opcoes: ["7 dias", "15 dias", "30 dias", "60 dias"],
    correta: 0,
    explicacao: "Entorpecentes (Receita A) valem 7 dias.",
  },
  {
    id: "vl05",
    pergunta: "Qual desses é MIP?",
    opcoes: ["Amoxicilina 500 mg", "Paracetamol 750 mg", "Diazepam 10 mg", "Sibutramina 15 mg"],
    correta: 1,
    explicacao: "Paracetamol 750 mg é MIP. Amoxicilina é antimicrobiano, diazepam e sibutramina são controlados.",
  },
  {
    id: "vl06",
    pergunta: "Paciente com febre 39 °C há 2 dias. Conduta inicial:",
    opcoes: ["Antibiótico imediato", "Antitérmico MIP + hidratação + médico se >72h", "Corticóide oral", "Esperar passar sozinho"],
    correta: 1,
    explicacao: "Antitérmico MIP + hidratação. Se persistir >72h → médico.",
  },
  {
    id: "vl07",
    pergunta: "Idoso com dor no peito + irradiação para braço:",
    opcoes: ["Analgésico MIP", "Encaminhamento URGENTE (IAM suspeito)", "Anti-inflamatório", "Repouso em casa"],
    correta: 1,
    explicacao: "Sinais clássicos de IAM. Emergência médica.",
  },
  {
    id: "vl08",
    pergunta: "Receita de controle especial sem quantidade por extenso:",
    opcoes: ["Válida — número basta", "Inválida — extenso obrigatório", "Válida com carimbo", "Pode completar na farmácia"],
    correta: 1,
    explicacao: "Portaria 344/98 exige quantidade por extenso.",
  },
  {
    id: "vl09",
    pergunta: "Bebê <3 meses com febre. Conduta:",
    opcoes: ["Antitérmico em casa", "Avaliação médica URGENTE", "Antibiótico empírico", "Banho frio"],
    correta: 1,
    explicacao: "Febre em <3 meses = sinal de alerta. Exige avaliação imediata.",
  },
  {
    id: "vl10",
    pergunta: "O farmacêutico pode recusar dispensar por objeção de consciência?",
    opcoes: ["Sim, amparado pelo Código de Ética", "Não, nunca", "Só com autorização do CRF", "Só para medicamentos controlados"],
    correta: 0,
    explicacao: "Resolução CFF 724/2022 permite objeção de consciência, desde que justificada e documentada.",
  },
];

/** Conversão dos 30 verdadeiro/falso para o formato QuestaoJogo (FatoOuFake) */
export const jogoFatoOuFake: QuestaoJogo[] = jogoVerdadeiroFalso.map((q) => ({
  id: q.id,
  pergunta: q.pergunta,
  opcoes: ["Verdadeiro", "Falso"],
  correta: q.correta ? 0 : 1,
  explicacao: q.explicacao,
}));

/** Conversão dos cenários de balcão (branching) para QuestaoJogo[] linear (CenarioBalcao e ModoSobrevivencia) */
export const jogoCenarioBalcao: QuestaoJogo[] = cenarioBalcao.flatMap((c) =>
  c.passos.map((p, pi) => ({
    id: `${c.id}-p${pi + 1}`,
    pergunta: `${c.titulo}: ${p.situacao}`,
    opcoes: p.escolhas.map((e) => e.texto),
    correta: p.escolhas.findIndex((e) => e.recomendada),
    explicacao: p.escolhas.find((e) => e.recomendada)?.feedback ?? "",
  })),
);
