import type { Trilha } from "./types";
import { q } from "./_helpers";

// Módulo 3 da Trilha 4 — Apoio ao Tratamento e Cuidado Contínuo
export const moduloApoioTratamento = {
  id: "apoio-tratamento",
  titulo: "Apoio ao Tratamento e Cuidado Contínuo",
  descricao:
    "O atendimento não termina quando o cliente sai da farmácia. Acompanhar a adesão, ligar ou enviar mensagem para saber como o paciente está — isso é cuidado de verdade. Cliente acompanhado adere mais, volta mais e confia mais.",
  aulas: [
    {
      id: "adesao-terapeutica",
      titulo: "Adesão ao tratamento: o que é e por que importa",
      duracaoMin: 6,
      nivel: "intermediario",
      resumo:
        "70% dos pacientes abandonam o tratamento nos primeiros 30 dias. O farmacêutico e a equipe têm um papel crucial na adesão — e isso começa com um simples contato de acompanhamento.",
      resumoExecutivo: [
        "Adesão é o paciente tomar o medicamento conforme prescrito, no horário, na dose e pelo tempo certo.",
        "As principais causas de não adesão: esquecimento, efeitos colaterais, falta de compreensão e custo.",
        "Um telefonema ou mensagem 3-5 dias após a compra pode aumentar a adesão em até 40%.",
        "Paciente que adere ao tratamento tem melhor qualidade de vida e menor risco de complicações.",
      ],
      simulacao: {
        cliente: "Paciente hipertenso que comprou o medicamento há 5 dias.",
        falaBoa: '"Bom dia, João! Aqui é da Farmácia. O senhor começou o remédio para pressão? Queria saber se está tendo algum efeito ou se precisa de ajuda. Seu tratamento é importante e estamos aqui para apoiar."',
        falaEvitar: '"Oi, só lembrando de comprar o remédio de novo."',
      },
      checklist: [
        "Anotar contato do paciente e medicamento comprado.",
        "Agendar contato de acompanhamento em 3-5 dias.",
        "Perguntar sobre efeitos colaterais e dificuldades.",
        "Orientar e encaminhar ao farmacêutico se necessário.",
      ],
      quandoChamarFarmaceutico: [
        "Paciente relata efeitos colaterais importantes.",
        "Dúvida sobre interação medicamentosa.",
        "Suspeita de erro na prescrição ou posologia.",
      ],
      errosComuns: [
        "Ligar apenas para 'vender' mais — paciente percebe e perde a confiança.",
        "Não se apresentar adequadamente — parece telemarketing.",
        "Ignorar sinais de alerta relatados pelo paciente.",
      ],
      quiz: [
        q(
          "Qual o principal objetivo do contato de acompanhamento?",
          [
            "Oferecer mais produtos",
            "Apoiar a adesão e verificar como o paciente está",
            "Avaliar a satisfação com o preço",
            "Confirmar dados cadastrais",
          ],
          1,
          "O acompanhamento é para CUIDAR do paciente — verificar adesão, efeitos e oferecer suporte. A confiança gerada naturalmente faz o paciente voltar.",
        ),
        q(
          "Qual a taxa de abandono de tratamento nos primeiros 30 dias?",
          ["10%", "70%", "50%", "30%"],
          1,
          "Cerca de 70% dos pacientes abandonam o tratamento no primeiro mês. O acompanhamento atento reduz esse índice.",
        ),
        q(
          "Qual o principal fator de não adesão ao tratamento?",
          [
            "Preço do medicamento",
            "Falta de compreensão, esquecimento e efeitos colaterais",
            "Marca do medicamento",
            "Embalagem",
          ],
          1,
          "Os principais fatores de não adesão são comunicacionais — exatamente o que o acompanhamento farmacêutico resolve.",
        ),
        q(
          "Em quantos dias após a compra o contato de acompanhamento é mais eficaz?",
          ["No dia seguinte", "3 a 5 dias após a compra", "30 dias depois", "Só no fim do tratamento"],
          1,
          "3-5 dias é o timing ideal: o paciente já começou o tratamento mas ainda está na fase de adaptação.",
        ),
      ],
      xp: 60,
    },
    {
      id: "como-contatar",
      titulo: "Como contatar o paciente sem parecer telemarketing",
      duracaoMin: 5,
      nivel: "intermediario",
      resumo:
        "A diferença entre um contato de cuidado e uma ligação de telemarketing é a INTENÇÃO. O tom, a abordagem e o timing transformam um simples telefonema em um gesto de cuidado que o paciente nunca esquece.",
      resumoExecutivo: [
        "Sempre se identifique: 'Aqui é da Farmácia [nome], tudo bem?' — nunca 'É da central de relacionamento'.",
        "Explique o motivo genuíno: 'Estou ligando para saber como você está com o novo medicamento'.",
        "Perguntas abertas: 'Como está se sentindo?', 'Teve alguma dúvida?' — não 'Tá tomando direitinho?'.",
        "Nunca tente vender nada na primeira ligação de acompanhamento. O momento é de CUIDADO.",
        "Se o paciente não atender, envie uma mensagem educada: 'Passamos para saber como você está. Retornaremos em breve.'",
      ],
      simulacao: {
        cliente: "Paciente diabético que começou a usar insulina.",
        falaBoa: '"Olá, dona Maria! Aqui é da Farmácia [nome]. A senhora começou a usar a insulina nova na semana passada. Como está sendo a adaptação? Teve dificuldade com as aplicações ou sentiu algo diferente?"',
        falaEvitar: '"Bom dia, é da farmácia. A senhora precisa de mais insulina?"',
      },
      checklist: [
        "Ligar em horário comercial, evitando horário de almoço.",
        "Tom amigável e preocupado, nunca script decorado.",
        "Se não atender, deixar recado educado e tentar novamente em outro horário.",
        "Registrar o resultado do contato para o farmacêutico.",
      ],
      quandoChamarFarmaceutico: [
        "Paciente relata dificuldade com o uso do medicamento.",
        "Dúvidas sobre efeitos adversos ou interações.",
      ],
      errosComuns: [
        "Ler script — parece robô e perde a humanidade do cuidado.",
        "Falar rápido demais — paciente se sente pressionado.",
        "Não ouvir a resposta — fazer pergunta e não dar tempo de responder.",
      ],
      quiz: [
        q(
          "Qual a melhor forma de iniciar um contato de acompanhamento com o paciente?",
          [
            '"É da central de relacionamento, preciso confirmar seus dados"',
            '"Aqui é da Farmácia [nome], tudo bem? Estou ligando para saber como você está se adaptando ao medicamento"',
            '"Sua receita está quase vencendo, quer agendar a compra?"',
            '"O senhor precisa de mais algum produto hoje?"',
          ],
          1,
          "A identificação clara e o motivo genuíno de cuidado fazem o paciente se sentir valorizado, não abordado.",
        ),
        q(
          "O que diferencia um contato de cuidado de uma ligação de telemarketing?",
          [
            "Nada, é a mesma coisa",
            "A intenção: cuidado genuíno pergunta como o paciente está; telemarketing já começa vendendo",
            "O horário da ligação",
            "O produto oferecido",
          ],
          1,
          "A diferença fundamental é a intenção. Cuidado genuíno pergunta como o paciente está.",
        ),
        q(
          "O que fazer se o paciente não atender a ligação de acompanhamento?",
          [
            "Ligar 5 vezes seguidas até ele atender",
            "Deixar uma mensagem educada e tentar novamente em outro horário",
            "Desistir do acompanhamento",
            "Enviar uma cobrança por SMS",
          ],
          1,
          "Paciente pode estar ocupado. Deixe um recado educado e tente em outro horário.",
        ),
        q(
          "Por que oferecer produtos na primeira ligação de acompanhamento é prejudicial?",
          [
            "Não é prejudicial, é a hora certa",
            "Porque o paciente percebe que a ligação era uma desculpa para vender, perdendo a confiança",
            "Porque o farmacêutico não autoriza",
            "Porque o paciente nunca compra por telefone",
          ],
          1,
          "Oferecer produtos na primeira ligação revela a intenção real. O paciente se sente enganado.",
        ),
      ],
      xp: 50,
    },
    {
      id: "mensagem-apoio",
      titulo: "Mensagens de apoio: WhatsApp e SMS que encantam",
      duracaoMin: 5,
      nivel: "basico",
      resumo:
        "Nem todo paciente quer ou quer falar ao telefone. Uma mensagem de WhatsApp ou SMS bem escrita pode ser um gesto de cuidado ainda mais bem recebido.",
      resumoExecutivo: [
        "Mensagem inicial: 'Olá, [nome]! Aqui é da Farmácia [nome]. Passamos para saber como você está com o tratamento. Se precisar de qualquer ajuda, é só nos chamar. Estamos aqui por você! 💙'",
        "Anexar material educativo: dica de cuidado, guia de uso do medicamento.",
        "Respeitar a privacidade: nunca mencionar o nome do medicamento na mensagem.",
        "Oferecer canal de contato direto: 'Se tiver dúvidas, pode responder essa mensagem que a gente ajuda.'",
        "Agendar próximo contato: 'Em 15 dias entramos em contato novamente para saber como está.'",
      ],
      simulacao: {
        cliente: null,
        falaBoa: '"Olá, João! 💙 Aqui é da Farmácia [nome]. Passamos para saber como você está se sentindo com o início do tratamento. Teve alguma dúvida ou dificuldade? Pode responder essa mensagem — estamos aqui para ajudar. Cuide-se!"',
        falaEvitar: '"Senhor João, seu medicamento está quase no fim. Já quer agendar a compra para não ficar sem?"',
      },
      checklist: [
        "Personalizar a mensagem com o nome do paciente.",
        "Oferecer ajuda genuína, não oferta de produtos.",
        "Usar tom acolhedor e emoticons com moderação.",
        "Sempre se identificar e dar um canal de resposta.",
      ],
      quandoChamarFarmaceutico: [
        "Paciente responde com dúvida técnica sobre o medicamento.",
      ],
      errosComuns: [
        "Mensagem genérica que parece automática/disparada.",
        "Já começar oferecendo produto em vez de perguntar como o paciente está.",
        "Não dar a opção de não responder — paciente se sente obrigado.",
      ],
      quiz: [
        q(
          "Em uma mensagem de apoio ao tratamento, o mais importante é:",
          [
            "Oferecer um desconto no próximo produto",
            "Demonstrar cuidado genuíno e oferecer canal de ajuda",
            "Lembrar o paciente de comprar o remédio",
            "Confirmar endereço e dados cadastrais",
          ],
          1,
          "A mensagem de apoio existe para CUIDAR, não para vender. O cuidado genuíno gera confiança — e confiança faz o paciente voltar.",
        ),
        q(
          "Por que nunca mencionar o nome do medicamento em mensagens de WhatsApp/SMS?",
          [
            "Porque é muito longo para escrever",
            "Por respeito à privacidade do paciente — outras pessoas podem ver a mensagem no celular dele",
            "Porque o cliente pode esquecer",
            "Não há problema em mencionar",
          ],
          1,
          "Mensagens podem ser vistas por terceiros. Mencionar o medicamento viola a privacidade do paciente.",
        ),
        q(
          "Qual o tom ideal para uma mensagem de apoio no WhatsApp?",
          [
            "Formal e técnico",
            "Acolhedor, pessoal e com tom de cuidado genuíno",
            "Agressivo e urgente",
            "Robótico e padronizado",
          ],
          1,
          "O tom acolhedor e pessoal faz o paciente se sentir cuidado, não abordado por um robô de marketing.",
        ),
        q(
          "O que fazer quando o paciente responde à mensagem com uma dúvida técnica?",
          [
            "Ignorar e seguir o script",
            "Responder com atenção e, se necessário, encaminhar ao farmacêutico",
            "Pedir para ele ligar para a central",
            "Enviar um link genérico",
          ],
          1,
          "Toda resposta do paciente merece atenção. Dúvidas técnicas devem ser respondidas com cuidado ou encaminhadas ao farmacêutico.",
        ),
      ],
      xp: 50,
    },
    {
      id: "calendario-cuidado",
      titulo: "Calendário de cuidado: quando e como acompanhar",
      duracaoMin: 5,
      nivel: "intermediario",
      resumo:
        "Acompanhamento não é um evento único. É um processo. Um calendário simples de papel ou planilha já basta para transformar o atendimento em cuidado contínuo.",
      resumoExecutivo: [
        "Dia 3-5 após a compra: contato inicial para verificar adesão e efeitos.",
        "Dia 15: segunda verificação, reforçar a importância do tratamento.",
        "Dia 25-30: antes do fim do medicamento, oferecer suporte para continuidade.",
        "Medicamentos contínuos (hipertensão, diabetes, colesterol): acompanhamento mensal.",
        "Tratamentos agudos (antibióticos, anti-inflamatórios): um único contato no meio do tratamento.",
        "Pacientes crônicos que faltam: contato de acolhimento, nunca de cobrança.",
      ],
      simulacao: {
        cliente: null,
        falaBoa: '"Dona Maria, na semana passada a senhora comprou o medicamento para diabetes. Como está sendo a adaptação? Aqui na farmácia temos um calendário de cuidado: em 15 dias entro em contato de novo para saber como está. Pode contar com a gente!"',
        falaEvitar: '"Já passou 15 dias, queria saber se vai comprar de novo o remédio."',
      },
      checklist: [
        "Anotar data da compra e tipo de tratamento na agenda de cuidado.",
        "Agendar contatos futuros com lembretes no celular.",
        "Manter discrição (nunca deixar anotações visíveis para outros clientes).",
        "Celebrar marcos: 'Parabéns, 3 meses de tratamento! Como está se sentindo?'",
      ],
      quandoChamarFarmaceutico: [
        "Paciente com múltiplos medicamentos que precisa de reconciliação.",
      ],
      errosComuns: [
        "Acompanhar para cobrar, não para cuidar.",
        "Ser invasivo ou insistente — paciente precisa sentir que pode recusar.",
        "Não registrar os contatos — perde o histórico do cuidado.",
      ],
      quiz: [
        q(
          "Quando deve ser feito o primeiro contato de acompanhamento pós-compra?",
          [
            "No dia seguinte",
            "Entre o 3º e 5º dia após a compra",
            "Só no fim do tratamento",
            "Nunca — o paciente que deve procurar a farmácia",
          ],
          1,
          "3-5 dias é o timing ideal: o paciente já começou o tratamento mas ainda está na fase crítica de adaptação.",
        ),
        q(
          "Qual a diferença entre acompanhar um paciente crônico e um tratamento agudo?",
          [
            "Não há diferença",
            "Crônico: acompanhamento mensal contínuo. Agudo: um único contato no meio do tratamento",
            "Agudo precisa de mais contatos",
            "Crônico não precisa de acompanhamento",
          ],
          1,
          "Pacientes crônicos precisam de suporte contínuo. Tratamentos agudos resolvem em dias e precisam de apenas um contato.",
        ),
        q(
          "Como deve ser o contato com um paciente crônico que falta ao tratamento?",
          [
            "Cobrar: 'O senhor não veio comprar o remédio esse mês'",
            "Acolher: 'Sentimos sua falta, está tudo bem? Precisando de ajuda?'",
            "Ignorar — problema do paciente",
            "Cancelar o cadastro",
          ],
          1,
          "Pacientes crônicos que faltam podem estar com dificuldades financeiras, efeitos colaterais ou desmotivação. Acolhimento, não cobrança.",
        ),
      ],
      xp: 60,
    },
    {
      id: "familia-cuidadora",
      titulo: "Envolvendo a família no cuidado",
      duracaoMin: 5,
      nivel: "intermediario",
      resumo:
        "Pacientes idosos, crianças e pessoas com condições crônicas geralmente têm um cuidador. Envolver essa pessoa no acompanhamento dobra a chance de adesão ao tratamento.",
      resumoExecutivo: [
        'Ao dispensar, pergunte: "Quem mais ajuda nos cuidados em casa?"',
        "Se houver cuidador, inclua essa pessoa no contato de acompanhamento.",
        "Orientações claras para o cuidador: como administrar, horários, sinais de alerta.",
        "Cuidador bem informado é o maior aliado da adesão ao tratamento.",
        "Disponibilizar material de apoio impresso ou digital para o cuidador.",
      ],
      simulacao: {
        cliente: "Filho que compra medicamento para a mãe idosa.",
        falaBoa: '"Oi, tudo bem? Lembra que você levou o remédio para sua mãe na semana passada? Como ela está? E você, está conseguindo dar os horários certinhos? Se precisar de qualquer ajuda, pode contar com a gente."',
        falaEvitar: '"Oi, só pra saber se sua mãe já terminou o remédio."',
      },
      checklist: [
        "Identificar cuidadores no primeiro atendimento.",
        "Anotar contato do cuidador na agenda de cuidado.",
        "Incluir o cuidador nos contatos de acompanhamento.",
        "Fornecer orientações escritas quando possível.",
      ],
      quandoChamarFarmaceutico: [
        "Cuidador relata dificuldade com a administração do medicamento.",
        "Paciente com regime terapêutico complexo (múltiplos medicamentos).",
      ],
      errosComuns: [
        "Ignorar o cuidador — ele é a pessoa que mais influencia a adesão.",
        "Dar orientações complexas demais para o cuidador.",
        "Não verificar se o cuidador entendeu as instruções.",
      ],
      quiz: [
        q(
          "Qual o papel do cuidador na adesão ao tratamento?",
          [
            "Não tem papel relevante",
            "Apenas comprar o medicamento quando acabar",
            "É o maior aliado — cuidadores bem orientados aumentam a adesão significativamente",
            "Deve ser ignorado nos contatos de acompanhamento",
          ],
          2,
          "O cuidador é peça-chave na adesão. Envolvê-lo e orientá-lo é um dos gestos de cuidado mais eficazes que a farmácia pode fazer.",
        ),
        q(
          "Como identificar quem é o cuidador do paciente?",
          [
            "Não é possível identificar",
            "Perguntar na dispensação: 'Quem mais ajuda nos cuidados em casa?'",
            "Apenas observar",
            "Perguntar para o vizinho",
          ],
          1,
          "Perguntar diretamente ao paciente ou acompanhante é a forma mais simples e eficaz de identificar o cuidador.",
        ),
        q(
          "Qual o tipo de orientação mais eficaz para o cuidador?",
          [
            "Explicação verbal longa e técnica",
            "Orientações claras, escritas e com horários marcados",
            "Apenas entregar a bula",
            "Não orientar, o cuidador já sabe",
          ],
          1,
          "O cuidador precisa de orientações claras e acessíveis. Material escrito com horários e instruções simples faz toda a diferença.",
        ),
        q(
          "Por que incluir o cuidador no contato de acompanhamento?",
          [
            "Não é necessário incluir",
            "Porque o cuidador é quem administra o medicamento e pode identificar problemas que o paciente não percebe",
            "Para vender mais produtos",
            "Para preencher a agenda",
          ],
          1,
          "O cuidador está na linha de frente. Ele percebe efeitos colaterais, dificuldades e mudanças no estado do paciente.",
        ),
      ],
      xp: 50,
    },
    {
      id: "indicadores-cuidado",
      titulo: "Indicadores de cuidado: como saber se está funcionando",
      duracaoMin: 6,
      nivel: "avancado",
      resumo:
        "Não precisa de dashboard caro. Um caderno ou planilha simples já permite acompanhar o impacto do seu cuidado na vida dos pacientes.",
      resumoExecutivo: [
        "Taxa de contato: de cada 10 pacientes, quantos você consegue contactar? Serve de medida de eficiência.",
        "Taxa de resposta positiva: quantos pacientes relatam estar bem e aderindo ao tratamento? Isso mede seu impacto.",
        "Índice de retorno: quantos pacientes voltam e pedem por você depois do acompanhamento? Esse é o maior indicador de encantamento.",
        "Aderência percebida: o paciente confirma que está tomando o medicamento corretamente?",
        "O melhor indicador: o paciente que diz 'obrigado por se importar'.",
      ],
      simulacao: {
        cliente: "Gestor da farmácia perguntando sobre o programa de acompanhamento.",
        falaBoa: '"Nos últimos 30 dias, contactamos 25 pacientes. 20 atenderam, 18 relataram estar bem com o tratamento, e 12 já voltaram para a segunda compra. Três pacientes foram encaminhados ao farmacêutico com dúvidas — todos resolvidos. Está funcionando."',
        falaEvitar: '"Acho que tá funcionando, os pacientes gostam."',
      },
      checklist: [
        "Manter registro simples dos contatos realizados.",
        "Anotar o resultado de cada contato (positivo, dúvida, encaminhado).",
        "Revisar semanalmente o número de contatos e resultados.",
        "Compartilhar os resultados com a equipe para celebrar o cuidado.",
      ],
      quandoChamarFarmaceutico: [
        "Revisão mensal dos indicadores de cuidado com a equipe.",
      ],
      errosComuns: [
        "Não registrar — perde a chance de mostrar o valor do cuidado.",
        "Focar só em números, esquecendo da qualidade do contato.",
        "Desanimar se um paciente não responder — persistência é cuidado.",
      ],
      quiz: [
        q(
          "Qual o melhor indicador de que o cuidado está gerando encantamento no paciente?",
          [
            "O paciente compra mais caro",
            "O paciente volta e pede pelo nome do atendente",
            "O paciente gasta menos",
            "O paciente não reclama",
          ],
          1,
          "Paciente que volta e pede pelo atendente porque confia e se sente cuidado — esse é o verdadeiro indicador de encantamento.",
        ),
        q(
          "O que a taxa de contato mede no programa de acompanhamento?",
          [
            "Quantos produtos foram vendidos",
            "De cada 10 pacientes abordados, quantos atendem o contato — mede eficiência da equipe",
            "O faturamento da farmácia",
            "Nada relevante",
          ],
          1,
          "Taxa de contato mede a eficiência operacional: quantos pacientes a equipe consegue alcançar.",
        ),
        q(
          "Qual a ferramenta mínima necessária para acompanhar indicadores de cuidado?",
          [
            "Um sistema de ERP caro",
            "Um caderno ou planilha simples — o importante é registrar, não a ferramenta",
            "Não é necessário registrar",
            "Um aplicativo importado",
          ],
          1,
          "O mais importante é registrar. Um caderno ou planilha já basta para começar a medir e melhorar o cuidado.",
        ),
        q(
          "Por que revisar os indicadores semanalmente com a equipe?",
          [
            "Para criticar quem não atingiu a meta",
            "Para celebrar resultados, ajustar rotas e motivar a equipe a manter o cuidado",
            "Não é necessário revisar",
            "Apenas para o gerente",
          ],
          1,
          "Revisar semanalmente permite celebrar acertos, ajustar o que não funcionou e manter a equipe engajada.",
        ),
      ],
      xp: 60,
    },
  ],
};
