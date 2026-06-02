import type { Trilha } from "./types";
import { q } from "./_helpers";

// Trilha 4 — Vendas, Persuasão e Atendimento Consultivo no Balcão.
export const trilhaVendas: Trilha = {
  id: "encantamento",
  numero: 4,
  titulo: "Cuidado Humanizado e Atendimento que Encanta",
  subtitulo: "Do acolhimento ao cuidado contínuo",
  descricao:
    "Como atender com excelência, acolher com empatia, comunicar com clareza e fazer o cliente se sentir cuidado — porque cliente bem atendido volta naturalmente.",
  nivelFaixa: "Básico ao avançado",
  icone: "trending",
  modulos: [
    /* ════════════════════════════════════════════════
       MÓDULO 1 — Oferecimento e Persuasão Ética
       ════════════════════════════════════════════════ */
    {
      id: "oferecimento",
      titulo: "Atendimento Humanizado e Cuidado com o Paciente",
      descricao:
        "Atender é cuidar. O cliente que se sente acolhido, ouvido e respeitado confia — e confiança é a base de todo cuidado continuado.",
      aulas: [
        {
          id: "momento-certo",
          titulo: "O momento certo de acolher",
          duracaoMin: 6,
          nivel: "basico",
          videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
          resumo:
            "Antes de qualquer oferta, o cliente precisa se sentir acolhido. Como criar um ambiente de confiança desde o primeiro contato.",
          resumoExecutivo: [
            "Antes de qualquer oferta: ouça. O cliente precisa se sentir acolhido primeiro.",
            "O acolhimento genuíno é o que faz o cliente lembrar de você na próxima visita.",
            "Nunca ofereça antes de concluir a orientação inicial — o cliente percebe o oportunismo.",
            "Sinal verde: cliente relaxou, fez contato visual, concordou com a orientação inicial.",
            "Sinal vermelho: cliente com pressa, irritado, ou claramente sem recursos — respeite.",
          ],
          simulacao: {
            cliente: '"Sabe o que eu tô sentindo? Uma coceira no couro cabeludo, já usei vários xampus e nada resolve."',
            falaBoa: '"Entendo como é desconfortável. Antes de indicar, deixa eu te perguntar: você usa algum medicamento contínuo ou tem alguma alergia? Depois que eu entender melhor, vou te mostrar o que costuma funcionar bem pra esse caso."',
            falaEvitar: '"Temos um shampoo anticaspa excelente em promoção hoje, leva dois e ganha 10%."',
          },
          comparativo: {
            titulo: "Sinais verdes vs. Sinais vermelhos para sugerir",
            itens: [
              { nome: "Sinal verde — pode sugerir", quando: "Cliente relaxou, fez contato visual, concordou com a orientação inicial, fez perguntas sobre o produto." },
              { nome: "Sinal vermelho — não insista", quando: "Cliente com pressa, irritado, olhando o relógio, com expressão fechada ou claramente sem recursos." },
              { nome: "Sinal amarelo — investigue antes", quando: "Cliente hesitante, faz careta ao ouvir o preço, pergunta 'será que resolve?' sem convicção." },
            ],
          },
          checklist: [
            "Só sugerir depois de ouvir e entender a necessidade.",
            "Observar linguagem corporal do cliente antes de propor.",
            "Nunca sugerir antes de concluir a orientação inicial.",
          ],
          quandoChamarFarmaceutico: [
            "Quando o cliente demonstrar desconfiança depois de uma sugestão.",
            "Para validar se uma associação de produtos é segura.",
          ],
          errosComuns: [
            "Sugerir antes de ouvir — parece desespero e quebra o rapport.",
            "Usar o mesmo script para todo cliente sem adaptar.",
          ],
          quiz: [
            q(
              "Qual o melhor momento para sugerir um produto complementar?",
              [
                "Assim que o cliente entra na loja",
                "Depois de acolher, ouvir e orientar, durante a conversa",
                "Só na finalização do caixa",
                "Antes mesmo do cliente falar o que quer",
              ],
              1,
              "O cliente precisa se sentir ouvido primeiro. Sugerir antes disso é oportunismo.",
            ),
            q(
              "Qual é um sinal VERDE de que o cliente está aberto a uma sugestão?",
              [
                "Cliente cruza os braços e franze a testa",
                "Cliente faz perguntas sobre o produto e concorda com a orientação",
                "Cliente olha para o celular enquanto você fala",
                "Cliente diz 'só vou dar uma olhada' e vira as costas",
              ],
              1,
              "Cliente engajado que faz perguntas e concorda com a orientação está aberto a receber uma sugestão adicional.",
            ),
            q(
              "O que fazer quando o cliente demonstra sinais vermelhos (pressa, irritação)?",
              [
                "Ignorar e sugerir mesmo assim",
                "Respeitar o momento — agilizar o atendimento e não fazer sugestões adicionais",
                "Chamar o gerente",
                "Aumentar o tom de voz para chamar atenção",
              ],
              1,
              "Respeitar o estado emocional do cliente é a base do cuidado. Cliente irritado ou com pressa não está receptivo.",
            ),
            q(
              "Por que sugerir antes da orientação inicial é prejudicial?",
              [
                "Porque o cliente pode comprar mais",
                "Porque o cliente percebe oportunismo e perde a confiança no atendente",
                "Porque o produto pode estar em falta",
                "Porque o farmacêutico não autorizou",
              ],
              1,
              "Sugerir antes de orientar soa como 'quero vender' em vez de 'quero ajudar'. A confiança se perde em segundos.",
            ),
          ],
          xp: 60,
        },
        {
          id: "gatilhos-mentais",
          titulo: "Encantar com ética e informação",
          duracaoMin: 7,
          nivel: "intermediario",
          videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
          resumo:
            "Como usar gatilhos de urgência, prova social, reciprocidade e autoridade para informar e encantar com transparência — exemplos reais de como fortalecer a confiança no balcão.",
          resumoExecutivo: [
            "Gatilho da prova social: 'Muitos clientes com o mesmo problema usam esse e voltam pra comprar de novo.'",
            "Gatilho da autoridade: 'O farmacêutico sempre recomenda essa linha porque tem respaldo clínico.'",
            "Gatilho da urgência ética: 'A promoção vai até amanhã, mas o mais importante é você começar o tratamento logo.'",
            "Gatilho da reciprocidade: ao dar uma orientação valiosa de graça, o cliente naturalmente retribui com atenção e compra.",
            "Nunca fabricar escassez ou urgência falsa. Cliente percebe e a confiança vai embora.",
          ],
          simulacao: {
            cliente: '"Esse protetor solar é caro. Tem algum mais barato?"',
            falaBoa: '"Entendo. O preço realmente é mais alto, mas ele tem proteção contra luz visível e poluição — que são as maiores causas de mancha na pele. A maioria das clientes que experimentou não volta pro outro. Que tal começar com um menor pra testar?"',
            falaEvitar: '"Só hoje com 50% de desconto e brinde exclusivo. Últimas unidades!"',
          },
          comparativo: {
            titulo: "Gatilhos mentais éticos vs. Antiéticos",
            itens: [
              { nome: "Prova social ética", quando: "'Muitos clientes com o mesmo problema usam esse e voltam.' — informa sem pressionar." },
              { nome: "Prova social antiética", quando: "'Toda mulher compra isso, por que você nao compraria?' — apela, manipula, constrange." },
              { nome: "Urgencia etica", quando: "'A promocao vai ate amanha, mas o importante e comecar o tratamento.' — contextualiza." },
              { nome: "Urgencia falsa", quando: "'Ultimas unidades!' (com estoque cheio) — cliente descobre e nunca mais confia." },
              { nome: "Autoridade etica", quando: "'O farmaceutico recomenda essa linha porque tem respaldo clinico.' — fundamenta." },
            ],
          },
          checklist: [
            "Usar prova social como informação, não como pressão.",
            "Nunca criar urgência falsa — destruir a confiança é mais caro que perder um cliente.",
          ],
          quandoChamarFarmaceutico: [
            "Para respaldar tecnicamente sugestoes de maior valor.",
            "Quando o cliente mostra resistência e o farmacêutico pode agregar credibilidade.",
          ],
          errosComuns: [
            "Usar gatilhos de escassez falsos. Clientes sentem e não voltam.",
            "Aplicar o mesmo gatilho para todo perfil de cliente.",
          ],
          quiz: [
            q(
              "Qual desses usos do gatilho de prova social e etico no balcao?",
              [
                '"Só tem mais dois, depois acaba" (mesmo tendo estoque)',
                '"Muitos clientes com o mesmo problema usam esse produto"',
                '"Toda mulher compra isso, por que você nao compraria?"',
                '"O vizinho comprou, você tambem deveria"',
              ],
              1,
              "Prova social etica e informar que outros usam, nao pressionar com escassez falsa.",
            ),
            q(
              "Qual gatilho mental esta sendo usado em: 'O Dr. Carlos sempre recomenda essa linha'?",
              [
                "Escassez",
                "Autoridade",
                "Reciprocidade",
                "Novidade",
              ],
              1,
              "Citar a recomendacao do farmaceutico usa o gatilho da autoridade — desde que seja verdadeiro.",
            ),
            q(
              "Qual a diferenca entre urgencia etica e urgencia falsa?",
              [
                "Nao ha diferenca",
                "Urgencia etica baseia-se em fatos reais; a falsa inventa escassez para pressionar",
                "Urgencia falsa e mais eficaz",
                "Urgencia etica nao funciona",
              ],
              1,
              "Urgencia falsa e manipulacao. Cliente descobre e a confianca na farmacia inteira e perdida.",
            ),
            q(
              "Como aplicar o gatilho da reciprocidade no balcao?",
              [
                "Exigir compra em troca de orientacao",
                "Oferecer orientacao valiosa de graca — o cliente retribui com confianca",
                "Dar brindes para quem gasta mais",
                "Oferecer desconto na primeira compra",
              ],
              1,
              "Reciprocidade genuina: dar valor primeiro gera confianca e retorno natural do cliente.",
            ),
            q(
              "Qual NAO e uma aplicacao etica de gatilhos mentais?",
              [
                '"Esse probiotico e o mais recomendado por gastroenterologistas" (verdade)',
                '"So temos 3 unidades" (com dezenas no deposito)',
                '"No verao passado, esse repelente foi o mais vendido"',
                '"Quem comprou esse colageno voltou em 3 meses para comprar mais"',
              ],
              1,
              "Criar escassez falsa e antietico. Mentira destroi a credibilidade.",
            ),
          ],
          xp: 75,
        },
        {
          id: "como-oferecer",
          titulo: "Como sugerir com cuidado",
          duracaoMin: 6,
          nivel: "basico",
          videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
          resumo:
            "A arte de sugerir com cuidado: vocabulário, tom, timing e a diferença entre sugestão consultiva e abordagem invasiva.",
          resumoExecutivo: [
            "Nunca comece com 'Você quer levar também?' — isso soa automático e genérico.",
            "Ofereça contextualizando: 'Já que você está levando o antialérgico, esse soro fisiológico ajuda a complementar o tratamento.'",
            "Use a técnica do 'porque': sempre dê uma razão lógica para a oferta. 'Isso ajuda porque...'",
            "Se o cliente disser não, aceite na hora. Insistir quebra a relação.",
            "Ofereça opções, não produtos: 'Tem duas versões, uma mais completa e outra mais básica. Qual se encaixa melhor?'",
          ],
          simulacao: {
            cliente: '"Só vou levar esse xarope mesmo."',
            falaBoa: '"Claro. Só lembrando que o xarope funciona melhor se você beber bastante água durante o dia. Já que está aqui, esse soro fisiológico para lavagem nasal ajuda a descongestionar mais rápido. Quer levar um?"',
            falaEvitar: '"Não quer levar um antitérmico também? Tá em promoção."',
          },
          comparativo: {
            titulo: "Sugestão consultiva vs. Abordagem invasiva",
            itens: [
              { nome: "Sugestão consultiva", quando: "Contextualiza: 'Já que voce esta levando o antialergico, esse soro ajuda a complementar.' Mostra cuidado." },
              { nome: "Abordagem invasiva", quando: "Generica: 'Quer levar mais alguma coisa?' — parece robo, nao agrega valor." },
              { nome: "Uso do 'porque'", quando: "Consultivo: 'Isso ajuda porque...' (justifica). Invasivo: 'Leva que ta barato.' (apela ao preco)." },
              { nome: "Resposta ao 'nao'", quando: "Consultivo: aceita na hora. Invasivo: insiste, argumenta, faz o cliente se sentir mal." },
            ],
          },
          checklist: [
            "Oferecer contextualizando o produto à necessidade do cliente.",
            "Usar o 'porque' em toda oferta para justificar logicamente.",
            "Aceitar o 'não' sem insistir.",
          ],
          quandoChamarFarmaceutico: [
            "Para sugerir associações de produtos que exigem conhecimento técnico.",
          ],
          errosComuns: [
            "Oferecer sem contexto — parece que está empurrando produto.",
            "Usar 'quer levar também?' — a pergunta mais odiada do varejo.",
          ],
          quiz: [
            q(
              "Qual a melhor forma de oferecer um produto complementar?",
              [
                '"Quer levar mais alguma coisa?"',
                '"Já que você está levando o antialérgico, esse soro ajuda a complementar. Quer?"',
                '"Só hoje com desconto, leva!"',
                '"Todo mundo que compra isso leva também"',
              ],
              1,
              "Contextualizar a oferta mostra que você pensou no bem-estar do cliente, não na comissão.",
            ),
            q(
              "Qual a técnica do 'porque' no oferecimento?",
              [
                "Dizer 'porque sim'",
                "Sempre dar uma razao logica para a oferta: 'Isso ajuda porque...'",
                "Perguntar 'por que voce nao leva?'",
                "Falar o preco primeiro, depois o motivo",
              ],
              1,
              "A tecnica do 'porque' oferece uma justificativa logica, tornando a oferta consultiva em vez de predatoria.",
            ),
            q(
              "O que fazer quando o cliente diz 'nao' a uma oferta?",
              [
                "Insistir mostrando mais beneficios",
                "Aceitar na hora: 'Sem problemas, fica so com o que precisa!'",
                "Mostrar um produto mais barato",
                "Perguntar por que ele nao quer",
              ],
              1,
              "Aceitar o 'nao' graciosamente e essencial para manter o rapport. Insistir quebra a confianca.",
            ),
          ],
          xp: 60,
        },
        {
          id: "objecoes",
          titulo: "Lidar com objeções com empatia",
          duracaoMin: 8,
          nivel: "intermediario",
          videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
          resumo:
            "Não é resistência — é dúvida. Técnicas para ouvir a objeção, validar o sentimento e reposicionar o valor com empatia, sem pressionar.",
          resumoExecutivo: [
            "Objeção de preço quase nunca é sobre o valor. É sobre falta de entendimento do benefício.",
            'Nunca responda com desconto imediato. Primeiro entenda: "O que te faz pensar que é caro?"',
            'Reposicione pelo custo-benefício: "Entendo, ele é mais caro que o concorrente, mas rende o dobro porque é concentrado."',
            'Objeção de necessidade: "Não preciso disso." → "Entendo. Só pra entender melhor, você já tentou algum produto para isso antes?"',
            "O cliente que faz objeção está engajado. O perigoso é o que sai sem falar nada.",
          ],
          simulacao: {
            cliente: '"Nossa, esse colírio é caro. Só vou levar o mais barato."',
            falaBoa: '"Entendo, o preço realmente pesa. Esse é um colírio com ácido hialurônico, que dura mais horas de hidratação — acaba saindo mais barato por dose. Se quiser testar, temos uma versão menor. O que acha?"',
            falaEvitar: '"Posso dar 10% de desconto para você levar esse."',
          },
          comparativo: {
            titulo: "Tipos de objeção e como lidar",
            itens: [
              { nome: "Objecao de preco", quando: "Nao e sobre o valor — e sobre falta de entendimento do beneficio. Reposicione o custo-beneficio antes de negociar." },
              { nome: "Objecao de necessidade", quando: "'Nao preciso disso.' Investigue: 'Voce ja tentou algo para isso antes?' Muitas vezes o cliente subestima o problema." },
              { nome: "Objecao de confianca", quando: "'Nunca usei essa marca.' Ofereca amostra ou versao menor para teste. Use prova social e autoridade do farmaceutico." },
              { nome: "Objecao de urgência", quando: "'Vou pensar.' Ajude a decidir com fechamento-resumo, mas sem pressionar. 'Fica a vontade, estamos aqui.'" },
            ],
          },
          checklist: [
            "Nunca pular para desconto na primeira objeção.",
            "Entender se a objeção é de preço, necessidade ou confiança.",
            "Reposicionar o valor antes de negociar preço.",
          ],
          quandoChamarFarmaceutico: [
            "Objeção que envolve dúvida técnica sobre eficácia do produto.",
          ],
          errosComuns: [
            "Dar desconto na primeira objeção — cliente percebe que podia ter pago menos.",
            "Ignorar a objeção e continuar vendendo — cliente se sente ignorado.",
          ],
          quiz: [
            q(
              "Qual a melhor primeira reação a uma objeção de preço?",
              [
                "Oferecer desconto imediato para não perder a venda",
                "Entender o motivo e reposicionar o valor do produto",
                "Ignorar e mostrar outro produto mais barato",
                "Dizer que o preço é tabelado",
              ],
              1,
              "Antes de negociar preço, entenda a objeção e reposicione o valor. Muitas vezes o cliente só não entendeu o benefício.",
            ),
            q(
              "O que significa 'reposicionar o valor' diante de uma objeção de preço?",
              [
                "Baixar o preco na hora",
                "Explicar os beneficios e o custo-beneficio do produto antes de falar de desconto",
                "Mostrar um produto mais barato",
                "Ignorar a objeção",
              ],
              1,
              "Reposicionar o valor e explicar por que o produto vale o que custa, antes de qualquer negociacao de preco.",
            ),
            q(
              "Como identificar se a objeção é de necessidade e não de preço?",
              [
                "O cliente diz 'esta caro'",
                "O cliente diz 'nao sei se preciso disso' ou 'sera que resolve?'",
                "O cliente pergunta o preco",
                "O cliente sai da loja",
              ],
              1,
              'Objeção de necessidade aparece como duvida sobre a utilidade. "Sera que resolve?" e diferente de "esta caro".',
            ),
            q(
              "Qual o perigo de dar desconto na primeira objeção de preço?",
              [
                "Nao tem perigo, e a melhor estrategia",
                "O cliente percebe que o preco estava inflado e perde a confianca — e pode pedir mais desconto",
                "O farmaceutico nao autoriza",
                "O sistema nao aceita",
              ],
              1,
              "Desconto na primeira objeção ensina o cliente a sempre pedir desconto. E mostra que o primeiro preco nao era honesto.",
            ),
          ],
          xp: 80,
        },
        {
          id: "cross-sell-upsell",
          titulo: "Complementar com cuidado",
          duracaoMin: 7,
          nivel: "intermediario",
          videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
          resumo:
            "Como complementar o cuidado do cliente com sugestões que realmente agregam ao bem-estar dele — sem pressão, com propósito genuíno.",
          resumoExecutivo: [
            "Cross-sell é oferecer algo que complementa: protetor solar + pós-sol; antialérgico + soro fisiológico.",
            "Up-sell é oferecer uma versão melhor do mesmo produto: um xarope com mais princípios ativos, uma pomada com fórmula mais completa.",
            "Sempre justifique o up-sell com benefício real, não com 'o melhor da linha'.",
            "O cliente que compra um up-sell bem-feito sente que você se importa, não que você quer vender mais.",
            "Limite a 1-2 ofertas por atendimento. Mais que isso vira empurroterapia.",
          ],
          simulacao: {
            cliente: '"Vou levar esse protetor solar fator 30."',
            falaBoa: '"Ótima escolha. Já que você está começando a se proteger, esse fator 60 tem a mesma textura mas protege mais contra manchas — muitas clientes que têm pele oleosa como a sua preferem ele. A diferença de preço é pequena. Quer ver?"',
            falaEvitar: '"Tem o fator 60 também por R$ 30 a mais."',
          },
          comparativo: {
            titulo: "Complementar com cuidado vs. Simplesmente empurrar",
            itens: [
              { nome: "Complemento com propósito", quando: "Complemento: protetor solar + pos-sol; antialergico + soro fisiologico; xarope + mel." },
              { nome: "Upgrade consciente", quando: "Upgrade com beneficio real: fator 30 para fator 60; versao generica para versao com mais principios ativos." },
              { nome: "Limite recomendado", quando: "Maximo 2 sugestoes de complemento e 1 upgrade por atendimento." },
              { nome: "Quando evitar", quando: "Cliente com pressa, cliente irritado, cliente com orcamento limitado evidente." },
            ],
          },
          checklist: [
            "Cross-sell: oferecer sempre um complemento real, não aleatório.",
            "Up-sell: justificar com benefício concreto, nunca com status.",
            "Limitar a 1 ou 2 ofertas no máximo por atendimento.",
          ],
          quandoChamarFarmaceutico: [
            "Para validar up-sell de medicamentos que exigem critério técnico.",
          ],
          errosComuns: [
            "Fazer cross-sell de produtos sem relação — cliente percebe e perde a confiança.",
            "Fazer up-sell sem explicar o benefício real.",
          ],
          quiz: [
            q(
              "Qual é a diferença entre cross-sell e up-sell?",
              [
                "São a mesma coisa",
                "Cross-sell complementa, up-sell oferece versão melhor",
                "Cross-sell é mais caro que up-sell",
                "Up-sell é para cliente novo e cross-sell para cliente fiel",
              ],
              1,
              "Cross-sell = complemento. Up-sell = upgrade. Ambos precisam fazer sentido pro cliente.",
            ),
            q(
              "Qual exemplo representa um up-sell no balcão?",
              [
                "Oferecer soro fisiologico junto com o antialergico",
                "Oferecer a versao do xarope com mais principios ativos e melhor absorcao",
                "Oferecer um brinde na compra",
                "Oferecer desconto para comprar duas unidades",
              ],
              1,
              "Up-sell e oferecer uma versao superior do mesmo produto. O xarope com mais principios ativos e um upgrade real.",
            ),
            q(
              "Quantas ofertas de cross-sell/up-sell são recomendadas por atendimento?",
              [
                "Quantas o cliente aceitar",
                "No maximo 1 a 2 ofertas",
                "5 ofertas para garantir pelo menos uma aceitacao",
                "Nenhuma — nunca oferecer complementos",
              ],
              1,
              "Mais de 2 ofertas vira empurroterapia. O cliente se sente pressionado e perde a confianca.",
            ),
            q(
              "Por que o up-sell deve ser justificado com benefício concreto?",
              [
                "Para o cliente se sentir especial",
                "Para o cliente entender o valor agregado e sentir que a recomendacao e para o bem dele, nao para aumentar o ticket",
                "Para o gerente aprovar",
                "Para cumprir meta de vendas",
              ],
              1,
              "Up-sell sem justificativa soa como 'quero vender o mais caro'. Com beneficio concreto, soa como cuidado genuino.",
            ),
          ],
          xp: 70,
        },
        {
          id: "fechamento",
          titulo: "Concluir com confiança",
          duracaoMin: 6,
          nivel: "avancado",
          videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
          resumo:
            "Como conduzir o cliente até a decisão de cuidado sem pressão. Fechamento assumido, alternativo, resumo e silêncio.",
          resumoExecutivo: [
            "Fechamento assumido: agir como se a compra já estivesse decidida. 'Vou separar aqui pra você.'",
            "Fechamento alternativo: dar duas opções boas. 'Você prefere o de 30ml ou o de 60ml?'",
            "Fechamento resumo: recapitular os benefícios rapidamente. 'Então fica com o xarope e o soro pra complementar, certo?'",
            "Depois de fechar, cale a boca. Quem fala depois do fechamento perde a venda.",
            "Se o cliente hesitar, não pressione. 'Fica à vontade para pensar, vou ali e já volto.'",
          ],
          simulacao: {
            cliente: '"Acho que vou levar. Ou não, deixa pra semana que vem."',
            falaBoa: '"Entendo. Só pra lembrar, o desconto é válido até amanhã e esse produto costuma faltar em época de gripes. Mas se preferir esperar, tudo bem — você sabe onde a gente está."',
            falaEvitar: '"Amanhã pode não ter mais. Leva agora que eu garanto o desconto."',
          },
          comparativo: {
            titulo: "Técnicas de fechamento: qual usar em cada situação",
            itens: [
              { nome: "Fechamento assumido", quando: "Cliente ja demonstrou interesse forte. 'Vou separar aqui pra voce.' — age como se a decisao ja foi tomada." },
              { nome: "Fechamento alternativo", quando: "Cliente indeciso entre opcoes. 'Voce prefere o de 30ml ou 60ml?' — fecha sem perguntar 'sim ou nao'." },
              { nome: "Fechamento resumo", quando: "Cliente parece confuso com tantas informacoes. Recapitule: 'Entao fica com o xarope e o soro, certo?'" },
              { nome: "Fechamento com silencio", quando: "Depois de apresentar a oferta final. Cale a boca e espere. Quem fala depois de fechar perde a venda." },
            ],
          },
          checklist: [
            "Identificar sinais de abertura: tocar no produto, perguntar detalhes, concordar com a orientação.",
            "Escolher a técnica de conclusão certa para cada perfil.",
            "Depois de concluir, ficar em silêncio.",
          ],
          quandoChamarFarmaceutico: [
            "Conclusão de atendimentos de medicamentos que exigem validação técnica.",
          ],
          errosComuns: [
            "Falar depois de concluir — você tira o cliente da decisão.",
            "Conclusão agressiva: pressionar o cliente a decidir na hora.",
          ],
          quiz: [
            q(
              "Depois de fazer o fechamento, qual a melhor ação?",
              [
                "Continuar explicando os benefícios",
                "Ficar em silêncio e esperar a resposta do cliente",
                "Oferecer mais um produto para aumentar o ticket",
                "Chamar o farmacêutico para validar",
              ],
              1,
              "Depois do fechamento, o silêncio é a ferramenta mais poderosa. Quem continua falando perde a venda.",
            ),
            q(
              "Qual técnica de fechamento é mais adequada para um cliente claramente indeciso entre duas opções?",
              [
                "Fechamento assumido",
                "Fechamento alternativo: 'Voce prefere a versao de 30ml ou a de 60ml?'",
                "Fechamento com pressao",
                "Fechamento com desconto",
              ],
              1,
              "O fechamento alternativo remove o 'sim ou nao' e coloca o cliente escolhendo entre opcoes boas.",
            ),
            q(
              "O que é o fechamento assumido?",
              [
                "Perguntar 'você quer levar?'",
                "Agir como se a compra ja estivesse decidida: 'Vou separar aqui pra voce'",
                "Esperar o cliente decidir sozinho",
                "Chamar o gerente para fechar",
              ],
              1,
              "Fechamento assumido transmite confianca. O atendente age como se a decisao ja estivesse tomada, facilitando o 'sim'.",
            ),
            q(
              "O que fazer quando o cliente hesita após o fechamento?",
              [
                "Insistir com mais argumentos",
                "Dar espaco: 'Fica a vontade pra pensar, vou ali e ja volto'",
                "Baixar o preco na hora",
                "Mostrar um produto diferente",
              ],
              1,
              "Pressao no momento da hesitacao faz o cliente desistir. Dar espaco mostra respeito e confianca no produto.",
            ),
          ],
          xp: 80,
        },
      ],
    },
    /* ════════════════════════════════════════════════
       MÓDULO 2 — Comunicação que Vende
       ════════════════════════════════════════════════ */
    {
      id: "comunicacao",
      titulo: "Comunicação que Acolhe e Cura",
      descricao:
        "Cada palavra importa no cuidado. Do rapport inicial à linguagem de acolhimento — como a comunicação transforma um atendente em referência de cuidado.",
      aulas: [
        {
          id: "rapport",
          titulo: "Acolhimento na abertura: a primeira impressão que cuida",
          duracaoMin: 5,
          nivel: "basico",
          videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
          resumo:
            "Os primeiros 5 segundos definem o tom do atendimento. Como criar conexão instantânea com o cliente e mostrar que ele está em boas mãos.",
          resumoExecutivo: [
            "Sorriso genuíno e contato visual — não tem substituto. Cliente sente se é automático.",
            'Espelhar o tom do cliente: se ele fala baixo, baixe o tom. Se está apreensivo, seja calmo.',
            "Usar o nome do cliente uma ou duas vezes no atendimento cria intimidade sem ser invasivo.",
            "Evite 'Pois não?' ou 'Posso ajudar?' — soa robótico. Prefira 'Olá, seja bem-vindo! Como posso te ajudar hoje?'",
            "Clientes que se sentem bem acolhidos confiam mais — e confiança é a base do cuidado.",
          ],
          simulacao: {
            cliente: "Entra na farmácia com expressão fechada, olhando as prateleiras sem rumo.",
            falaBoa: '"Olá! Seja bem-vindo. Se precisar de ajuda para encontrar algo ou tiver alguma dúvida, é só me chamar. Pode ficar à vontade!" (tom aberto, sorriso, sem pressão)',
            falaEvitar: '"Posso ajudar?" (tom neutro, sem contato visual, já virando as costas antes da resposta)',
          },
          comparativo: {
            titulo: "Abertura que acolhe vs. Abertura que afasta",
            itens: [
              { nome: "Acolhedora", quando: "'Ola! Seja bem-vindo. Como posso te ajudar hoje?' — sorriso, contato visual, tom aberto." },
              { nome: "Que afasta", quando: "'Pois nao?' — tom mecanico, sem contato visual, corpo virado. O cliente se sente um incomodo." },
              { nome: "Com cliente ansioso", quando: "Acolhedora: tom calmo, pausado, aproximacao gradual. Que afasta: abordagem invasiva e rapida." },
              { nome: "Com cliente frequente", quando: "Acolhedora: reconhece o cliente. 'Bom dia, dona Maria! Tudo bem?' Que afasta: trata como se fosse a primeira vez." },
            ],
          },
          checklist: [
            "Fazer contato visual e sorrir antes de falar.",
            "Adaptar o tom ao perfil do cliente.",
            "Usar o nome do cliente com moderação (1-2 vezes).",
            "Nunca usar 'Pois não?' como abertura.",
          ],
          quandoChamarFarmaceutico: [
            "Quando o cliente demonstrar irritação ou desconfiança na abordagem inicial.",
          ],
          errosComuns: [
            "Abordar com pergunta fechada que leva a 'não'.",
            "Ignorar a linguagem corporal do cliente e usar abordagem genérica.",
          ],
          quiz: [
            q(
              "Qual a melhor forma de abrir um atendimento no balcão?",
              [
                '"Pois não, posso ajudar?"',
                '"Olá! Seja bem-vindo. O que te traz aqui hoje?"',
                '"Vai levar alguma coisa?"',
                '"Qual o seu problema?"',
              ],
              1,
              "Uma abertura acolhedora e aberta estabelece rapport. 'Posso ajudar?' soa como obrigação.",
            ),
            q(
              "Por que usar o nome do cliente durante o atendimento é eficaz?",
              [
                "Para o cliente se sentir importante e criar intimidade sem ser invasivo",
                "Para o gerente saber que voce conhece o cliente",
                "Para preencher o cadastro",
                "Nao e recomendado usar o nome do cliente",
              ],
              1,
              "Usar o nome do cliente 1-2 vezes durante o atendimento cria conexao pessoal. Usar demais vira desconfortavel.",
            ),
            q(
              "Como adaptar a abordagem para um cliente que entra claramente apressado?",
              [
                "Ignorar a pressa e fazer perguntas longas",
                "Ser direto e eficiente: 'Vi que voce esta com pressa. Me fala o que precisa que eu resolvo rapido.'",
                "Pedir para ele esperar sua vez",
                "Falar mais devagar para acalma-lo",
              ],
              1,
              "Reconhecer a pressa do cliente e adaptar a velocidade do atendimento mostra empatia e respeito pelo tempo dele.",
            ),
            q(
              "O que significa 'espelhar o tom do cliente'?",
              [
                "Falar exatamente as mesmas palavras que o cliente",
                "Adequar o tom de voz, ritmo e postura ao estado emocional do cliente",
                "Repetir tudo que o cliente fala",
                "Falar mais alto que o cliente",
              ],
              1,
              "Espelhar e adequar sua comunicacao a do cliente. Se ele esta calmo, fale calmo. Se esta preocupado, seja tranquilo e seguro.",
            ),
          ],
          xp: 55,
        },
        {
          id: "tom-voz-postura",
          titulo: "Tom de voz, postura e presença no balcão",
          duracaoMin: 6,
          nivel: "basico",
          videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
          resumo:
            "O corpo fala antes da boca. Postura aberta, tom confiante e presença que transmite segurança e credibilidade.",
          resumoExecutivo: [
            "Postura: ombros para trás, braços relaxados, nunca cruzados. Mãos à mostra passam confiança.",
            "Tom de voz: nem muito baixo (insegurança) nem muito alto (agressividade). Médio e pausado.",
            "Nunca atender sentado. Levante-se, posicione-se de frente, esteja presente.",
            "A velocidade da fala importa: clientes ansiosos = fala mais rápida; clientes idosos = fala mais lenta e pausada.",
            "Sorriso é o uniforme invisível do atendente. Mesmo no telefone, sorrir muda o tom da voz.",
          ],
          simulacao: {
            cliente: "Cliente idoso chega receoso, perguntando sobre um medicamento caro.",
            falaBoa: "Aproxima-se, abaixa levemente para ficar na altura do cliente (se ele for mais baixo), tom pausado e claro: 'Pois não, fique à vontade. Me conta o que você está precisando que eu vou te ajudar com calma.'",
            falaEvitar: "Responde rápido de longe, sem se aproximar, tom acelerado e genérico.",
          },
          comparativo: {
            titulo: "Postura ideal vs. Postura a evitar",
            itens: [
              { nome: "Postura ideal", quando: "Ombros relaxados, bracos descruzados, maos a mostra, contato visual, corpo voltado para o cliente." },
              { nome: "Postura a evitar", quando: "Bracos cruzados, maos nos bolsos, corpo virado, olhando para o computador ou prateleira." },
              { nome: "Tom de voz ideal", quando: "Medio, pausado, confiante. Adequa a velocidade ao perfil do cliente." },
              { nome: "Tom de voz a evitar", quando: "Muito baixo (inseguranca), muito alto (agressividade), muito rapido (ansiedade)." },
            ],
          },
          checklist: [
            "Manter postura aberta e braços descruzados.",
            "Adequar velocidade da fala ao perfil do cliente.",
            "Levantar-se para atender — nunca atender sentado com cliente em pé.",
          ],
          quandoChamarFarmaceutico: [
            "Quando a presença de um profissional de jaleco branco agrega credibilidade à recomendação.",
          ],
          errosComuns: [
            "Atender de braços cruzados ou mãos no bolso — passa desinteresse.",
            "Falar muito rápido com cliente idoso — ele se sente pressionado.",
          ],
          quiz: [
            q(
              "Qual a postura corporal ideal ao atender no balcão?",
              [
                "Braços cruzados, encostado no balcão",
                "Ombros relaxados, braços descruzados, contato visual",
                "Mãos nos bolsos, olhando a prateleira",
                "Sentado, digitando no computador",
              ],
              1,
              "Postura aberta e acolhedora transmite segurança e disponibilidade para o cliente.",
            ),
            q(
              "Qual deve ser a velocidade da fala ao atender um cliente idoso?",
              [
                "Rapida para nao perder tempo",
                "Mais lenta e pausada, com tom calmo e claro",
                "A mesma para todos os clientes",
                "Alta para parecer confiante",
              ],
              1,
              "Cliente idoso processa informacao em ritmo diferente. Falar devagar e com clareza mostra respeito e cuidado.",
            ),
            q(
              "Por que atender sentado com o cliente em pé é inadequado?",
              [
                "Porque e desconfortavel para o atendente",
                "Porque passa desinteresse e desrespeito — o cliente se sente menos importante",
                "Porque o computador fica muito alto",
                "Nao ha problema em atender sentado",
              ],
              1,
              "Atender sentado com o cliente em pe cria uma hierarquia visual negativa. Levantar-se iguala a posicao e transmite respeito.",
            ),
            q(
              "O que acontece com o tom de voz quando o atendente sorri enquanto fala?",
              [
                "Nada, o sorriso nao muda a voz",
                "O tom fica mais caloroso, aberto e confiavel — o cliente percebe mesmo sem ver o sorriso",
                "A voz fica mais fina",
                "O cliente nao percebe diferenca",
              ],
              1,
              "Sorrir enquanto fala muda a entonacao da voz, tornando-a mais calorosa e acolhedora. Funciona ate no telefone.",
            ),
          ],
          xp: 60,
        },
        {
          id: "perguntas-poderosas",
          titulo: "Perguntas poderosas que revelam a necessidade",
          duracaoMin: 7,
          nivel: "intermediario",
          videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
          resumo:
            "A qualidade da venda é determinada pela qualidade das perguntas. Como fazer perguntas abertas, investigativas e direcionadoras.",
          resumoExecutivo: [
            "Prefira perguntas abertas: 'O que você está sentindo?' em vez de 'Está com dor?'.",
            'Perguntas investigativas: "Desde quando? Já tentou algo? Teve alergia?" revelam o cenário completo.',
            "Perguntas direcionadoras: 'Você prefere comprimido ou xarope?' guiam a decisão sem impor.",
            'Evite perguntas que levam a "não". Em vez de "Quer levar?", diga "Vou separar aqui pra você."',
            "Cada pergunta deve ter um propósito. Não faça perguntas por fazer.",
          ],
          simulacao: {
            cliente: '"Estou com uma alergia na pele."',
            falaBoa: '"Entendi. Desde quando começou? Você já usou algum produto? Sabe o que desencadeou?" (perguntas abertas que mapeiam o caso)',
            falaEvitar: '"É alergia? Quer uma pomada? Essa aqui é boa." (sem investigar, já empurrando produto)',
          },
          comparativo: {
            titulo: "Perguntas abertas vs. Perguntas fechadas",
            itens: [
              { nome: "Pergunta aberta", quando: "'O que voce esta sentindo?' — permite que o cliente explique livremente, revelando mais informacoes." },
              { nome: "Pergunta fechada", quando: "'Esta com dor?' — limita a resposta a 'sim' ou 'nao', perdendo contexto importante." },
              { nome: "Pergunta investigativa", quando: "'Desde quando? Ja tentou algo? Teve alergia?' — mapeia o cenario completo antes de indicar." },
              { nome: "Pergunta direcionadora", quando: "'Voce prefere comprimido ou xarope?' — guia a decisao sem impor, dando opcoes." },
            ],
          },
          checklist: [
            "Começar com perguntas abertas para mapear a necessidade.",
            "Usar perguntas investigativas para detalhar o cenário.",
            "Nunca fazer pergunta que leva a 'não' antes de fechar.",
          ],
          quandoChamarFarmaceutico: [
            "Quando as respostas do cliente indicarem um quadro que foge do seu nível de atuação.",
          ],
          errosComuns: [
            "Pular a investigação e já indicar um produto.",
            "Fazer perguntas fechadas que limitam a informação do cliente.",
          ],
          quiz: [
            q(
              "Qual tipo de pergunta é mais eficaz no início do atendimento?",
              [
                '"Está com dor?"',
                '"O que você está sentindo?"',
                '"Vai levar o genérico?"',
                '"Tem alergia a algum remédio?"',
              ],
              1,
              "Perguntas abertas ('O que você está sentindo?') revelam mais informações que perguntas fechadas ('Está com dor?').",
            ),
            q(
              "Qual pergunta ajudaria a investigar melhor o problema do cliente?",
              [
                '"É alergia?"',
                '"Desde quando comecou? Ja usou algum produto para isso?"',
                '"Vai levar ou nao?"',
                '"Quer o mais caro?"',
              ],
              1,
              "Perguntas investigativas mapeiam o historico e evitam indicar o produto errado.",
            ),
            q(
              "O que e uma pergunta direcionadora?",
              [
                "Uma pergunta que leva o cliente a responder 'nao'",
                "Uma pergunta que oferece opcoes para guiar a decisao: 'Voce prefere em comprimido ou xarope?'",
                "Uma pergunta sobre o preco",
                "Uma pergunta que o cliente nao entende",
              ],
              1,
              "Pergunta direcionadora da opcoes ao cliente em vez de perguntar 'sim ou nao', facilitando a decisao.",
            ),
            q(
              "Por que evitar perguntas que levam a 'nao' antes do fechamento?",
              [
                "Porque o cliente pode ficar confuso",
                "Porque cada 'nao' reforca a resistencia do cliente e dificulta o fechamento",
                "Porque o farmaceutico nao gosta",
                "Porque demora mais",
              ],
              1,
              "Cada 'nao' que o cliente da torna mais dificil ele dizer 'sim' depois. Prefira afirmativas e opcoes.",
            ),
          ],
          xp: 70,
        },
        {
          id: "escuta-ativa",
          titulo: "Escuta ativa: o segredo do atendente nota 10",
          duracaoMin: 6,
          nivel: "intermediario",
          videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
          resumo:
            "Não é só ouvir. É demonstrar que você ouviu. Paráfrase, validação e resumo como ferramentas de venda.",
          resumoExecutivo: [
            "Paráfrase: repetir com suas palavras o que o cliente disse. 'Então, se eu entendi direito, você sente desconforto depois de comer.'",
            "Validação: reconhecer o sentimento do cliente. 'Com certeza, deve ser incômodo conviver com isso.'",
            'Resumo: recapitular no final. "Então fica assim: você vai levar o antialérgico para usar à noite e o soro fisiológico durante o dia.',
            "Cliente que se sente ouvido confia mais. Confiança é a base de toda venda consultiva.",
            "Nunca interrompa o cliente para oferecer algo. Deixe ele terminar o raciocínio.",
          ],
          simulacao: {
            cliente: '"Estou há dias com essa tosse seca, já tentei chá mas não resolve. E olha que eu bebo bastante água."',
            falaBoa: '"Então você já tentou alternativas caseiras e não resolveu, certo? E a tosse atrapalha seu sono também?" (paráfrase + pergunta investigativa)',
            falaEvitar: '"Temos um xarope excelente, é o mais vendido." (ignora completamente o que o cliente falou)',
          },
          comparativo: {
            titulo: "Escuta ativa vs. Escuta passiva",
            itens: [
              { nome: "Escuta ativa", quando: "Parafraseia: 'Entao, se eu entendi direito, voce sente desconforto depois de comer.' Valida: 'Deve ser incomodo mesmo.'" },
              { nome: "Escuta passiva", quando: "Apenas ouve sem reagir, ja pensando na resposta. 'Hum... entendi. Leva esse aqui.'" },
              { nome: "Interrupcao", quando: "Ativa: nunca interrompe. Passiva: corta o cliente no meio para oferecer algo." },
              { nome: "Resumo final", quando: "Ativa: recapitula ao final. 'Entao fica assim...' Passiva: entrega e ja chama o proximo." },
            ],
          },
          checklist: [
            "Parafrasear a queixa do cliente para mostrar que ouviu.",
            "Validar o sentimento antes de oferecer solução.",
            "Nunca interromper o cliente.",
          ],
          quandoChamarFarmaceutico: [
            "Quando a escuta ativa revelar um quadro que merece avaliação clínica.",
          ],
          errosComuns: [
            "Interromper o cliente para oferecer um produto.",
            "Ouvir só pela metade e já pensar na resposta.",
          ],
          quiz: [
            q(
              "O que é paráfrase no atendimento?",
              [
                "Repetir exatamente o que o cliente falou",
                "Reformular com suas palavras o que o cliente disse",
                "Falar mais alto que o cliente",
                "Concordar com tudo que o cliente fala",
              ],
              1,
              "Paráfrase é demonstrar compreensão reformulando a fala do cliente. Mostra que você ouviu de verdade.",
            ),
            q(
              "O que significa 'validar o sentimento' do cliente?",
              [
                "Dizer que o cliente esta errado",
                "Reconhecer a emocao do cliente como legitima: 'Deve ser incomodo conviver com isso'",
                "Ignorar o que o cliente sente",
                "Oferecer um desconto",
              ],
              1,
              "Validar o sentimento cria vinculo emocional. O cliente se sente compreendido, nao apenas atendido.",
            ),
            q(
              "Por que interromper o cliente durante a explicacao e prejudicial?",
              [
                "Nao e prejudicial, economiza tempo",
                "O cliente se sente desrespeitado e pode omitir informacoes importantes para a indicacao correta",
                "O gerente pode reclamar",
                "A farmacia perde dinheiro",
              ],
              1,
              "Interromper o cliente faz ele se sentir desvalorizado. E voce pode perder informacoes essenciais para a orientacao.",
            ),
            q(
              "Qual o beneficio de resumir ao final do atendimento?",
              [
                "Nenhum, o cliente ja sabe o que comprou",
                "Confirma o entendimento, evita erros e reforca a confianca do cliente na recomendacao",
                "Apenas para o atendente lembrar",
                "Para preencher o relatorio",
              ],
              1,
              "O resumo final alinha expectativas, confirma que o cliente entendeu e passa seguranca sobre a decisao.",
            ),
          ],
          xp: 70,
        },
        {
          id: "linguagem-positiva",
          titulo: "Linguagem positiva: o que dizer e o que evitar",
          duracaoMin: 5,
          nivel: "basico",
          videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
          resumo:
            "Palavras que vendem e palavras que afastam. Como transformar objeções em conversas e criar uma experiência positiva de compra.",
          resumoExecutivo: [
            'Evite "só" e "apenas" — desvalorizam o produto. Troque "são só R$ 50" por "são R$ 50 por um produto que dura 3 meses".',
            'Troque "Não temos" por "Deixa eu ver uma alternativa que funciona tão bem quanto."',
            'Troque "Isso é caro" por "Esse tem um investimento maior, mas rende mais."',
            "Nunca use 'Infelizmente' — o cliente não quer sua pena. 'Infelizmente não temos' vira 'Vou te mostrar uma opção parecida.'",
            "Linguagem positiva não é enganação. É escolher um framing que ajuda o cliente a decidir bem.",
          ],
          simulacao: {
            cliente: '"Vocês têm aquele xarope que vi na TV?"',
            falaBoa: '"Não temos essa marca específica, mas tenho um xarope com a mesma fórmula ativa — e com um preço mais em conta. Quer ver?"',
            falaEvitar: '"Infelizmente não temos esse. Só temos esse aqui."',
          },
          comparativo: {
            titulo: "Linguagem positiva vs. Linguagem negativa",
            itens: [
              { nome: "Produto indisponivel", quando: "Positivo: 'Vou te mostrar uma alternativa que funciona tao bem.' Negativo: 'Infelizmente nao temos.'" },
              { nome: "Falando de preco", quando: "Positivo: 'E um investimento de R$ 50 por um produto que dura 3 meses.' Negativo: 'E so R$ 50.'" },
              { nome: "Cliente com duvida", quando: "Positivo: 'Otima pergunta! Vou te explicar como funciona.' Negativo: 'Isso e simples, e so...'" },
              { nome: "Recusando oferta", quando: "Positivo: 'Sem problemas! Fica so com o que precisa mesmo.' Negativo: 'Tem certeza? O desconto e bom...'" },
            ],
          },
          checklist: [
            "Identificar palavras negativas no vocabulário e substituir.",
            "Nunca começar resposta com 'Infelizmente' ou 'Não' seco.",
            "Transformar 'não temos' em 'temos uma alternativa'.",
          ],
          quandoChamarFarmaceutico: [
            "Quando a alternativa ao produto indisponível depende de avaliação técnica.",
          ],
          errosComuns: [
            "Usar 'só' e 'apenas' que diminuem o valor do produto.",
            "Responder com 'não' seco sem oferecer alternativa.",
          ],
          quiz: [
            q(
              "Qual é a melhor forma de dizer que um produto está indisponível?",
              [
                '"Infelizmente não temos"',
                '"Não temos"',
                '"Vou te mostrar uma alternativa que funciona tão bem quanto"',
                '"Acabou, só amanhã"',
              ],
              2,
              "Sempre ofereça uma alternativa. 'Infelizmente' transmite impotência, não solução.",
            ),
            q(
              "Qual palavra desvaloriza o produto na hora de falar do preco?",
              [
                "Investimento",
                "So / apenas",
                "Valor",
                "Custo-beneficio",
              ],
              1,
              "'So' e 'apenas' diminuem o valor percebido. Troque por 'investimento' ou enquadre no contexto de duracao.",
            ),
            q(
              "Como transformar uma resposta negativa em positiva?",
              [
                "Nao e possivel transformar",
                "Em vez de dizer o que NAO pode, diga o que PODE fazer. 'Nao temos desconto' vira 'Posso incluir um brinde para voce'",
                "Mentir para o cliente",
                "Ignorar o pedido do cliente",
              ],
              1,
              "Linguagem positiva foca em solucoes, nao em limitacoes. Sempre que possivel, mostre o que PODE ser feito.",
            ),
            q(
              "Por que evitar a palavra 'infelizmente' no atendimento?",
              [
                "Porque e muito formal",
                "Porque transmite impotencia e faz o cliente sentir pena em vez de solucao",
                "Porque o cliente nao entende",
                "Porque e muito longa",
              ],
              1,
              "'Infelizmente' coloca o foco no problema, nao na solucao. Troque por acao: 'Vou ver uma alternativa para voce.'",
            ),
          ],
          xp: 55,
        },
        {
          id: "falar-de-preco",
          titulo: "Como falar de preço mantendo a confiança",
          duracaoMin: 6,
          nivel: "intermediario",
          videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
          resumo:
            "Preço é uma conversa sobre valor. Técnicas para apresentar preço com confiança e transformar objeção em diálogo produtivo, mantendo a relação de cuidado.",
          resumoExecutivo: [
            "Nunca fale o preço sem contexto. Antes do valor, entregue os benefícios.",
            "Âncora de preço: apresente a opção mais cara primeiro, depois a intermediária. A intermediária parece 'mais em conta'.",
            "Fracione o valor: 'São R$ 60, mas dividindo por mês dá R$ 5 por semana para cuidar da sua saúde.'",
            "Compare com o custo de não tratar: 'Uma pomada de R$ 40 evita uma consulta de R$ 200 depois.'",
            "Confiança ao falar de preço: tom firme, sem pedir desculpas. Se você vacila, o cliente desconfia.",
          ],
          simulacao: {
            cliente: '"Quanto custa esse colírio?"',
            falaBoa: '"Esse é um colírio com ácido hialurônico e vitamina A — muito usado para olho seco por quem passa muito tempo em tela. Ele custa R$ 58, mas cada frasco dura mais de um mês. Dá menos de R$ 2 por dia para ter conforto visual."',
            falaEvitar: '"É R$ 58. (silêncio)"',
          },
          comparativo: {
            titulo: "Apresentacao de preco: certa vs. Errada",
            itens: [
              { nome: "Apresentacao certa", quando: "Contexto + beneficio + preco + fracao. 'E um colirio com acido hialuronico que custa R$ 58, da menos de R$ 2 por dia.'" },
              { nome: "Apresentacao errada", quando: "Preco seco. 'E R$ 58.' Sem contexto, sem beneficio. O cliente so ve o numero." },
              { nome: "Ancora de preco", quando: "Certo: mostra a opcao mais cara primeiro. Errado: mostra a mais barata primeiro — cliente nunca sobe." },
              { nome: "Tom ao falar de preco", quando: "Certo: firme, confiante, sem se desculpar. Errado: tom de duvida ou pedindo desculpas." },
            ],
          },
          checklist: [
            "Sempre emoldurar o preço com o benefício.",
            "Usar frações para tornar o valor mais palatável.",
            "Nunca se desculpar pelo preço.",
          ],
          quandoChamarFarmaceutico: [
            "Quando o cliente questiona o valor de um medicamento e precisa de validação técnica da eficácia.",
          ],
          errosComuns: [
            "Falar o preço seco, sem contexto de valor.",
            "Se desculpar pelo preço — transmite que o produto não vale.",
            "Baixar o preço na primeira objeção.",
          ],
          quiz: [
            q(
              "Qual a melhor forma de apresentar um preço?",
              [
                '"Custa R$ 58, mas é caro mesmo"',
                '"Ele custa R$ 58, mas rende mais de 30 dias. Dá menos de R$ 2 por dia"',
                '"Tem mais barato ali"',
                '"Vou ver se consigo desconto pra você"',
              ],
              1,
              "Sempre emoldure o preço no contexto do valor entregue. Fracione o custo por dia sempre que possível.",
            ),
            q(
              "O que é a técnica da âncora de preço?",
              [
                "Mostrar o produto mais barato primeiro",
                "Apresentar a opção mais cara primeiro para que a intermediária pareça mais em conta",
                "Fixar o preço na prateleira",
                "Nunca mostrar o preço",
              ],
              1,
              "Ancora de preco: ao mostrar primeiro o mais caro, o precos seguintes parecem mais razoaveis por comparacao.",
            ),
            q(
              "Por que fracionar o valor do produto em custo por dia?",
              [
                "Para confundir o cliente",
                "Para tornar o valor mais palatavel: R$ 2 por dia soa muito menos que R$ 60 de uma vez",
                "Para o cliente se sentir inteligente",
                "Nao e recomendado fracionar",
              ],
              1,
              "Fracionar o valor em custo diario reduz o impacto psicologico do preco total e mostra o custo-beneficio real.",
            ),
            q(
              "Qual o impacto de se desculpar ao falar do preço?",
              [
                "Nenhum, e educado",
                "Transmite que o produto nao vale o que custa — o cliente desconfia e pede desconto",
                "O cliente se sente respeitado",
                "Ajuda a fechar a venda",
              ],
              1,
              "Pedir desculpas pelo preco e um sinal de fraqueza. Se o atendente vacila, o cliente desconfia do valor do produto.",
            ),
          ],
          xp: 70,
        },
      ],
    },
         /* ════════════════════════════════════════════════
       MÓDULO 3 — Apoio ao Tratamento e Cuidado Contínuo
       ════════════════════════════════════════════════ */
     {
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
           videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
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
          comparativo: {
            titulo: "Adesao vs. Nao adesao ao tratamento",
            itens: [
              { nome: "Adesao", quando: "Paciente toma o medicamento conforme prescrito, nos horarios e doses corretas. Resultado: tratamento eficaz." },
              { nome: "Nao adesao", quando: "Paciente abandona, esquece doses ou toma de forma irregular. Resultado: tratamento ineficaz, complicacoes." },
              { nome: "Principal causa", quando: "Adesao: compreensao e acompanhamento. Nao adesao: falta de orientacao e suporte." },
              { nome: "Papel da farmacia", quando: "Adesao: contato de acompanhamento 3-5 dias apos a compra. Nao adesao: nenhum contato — paciente abandonado." },
            ],
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
               [
                 "10%",
                 "70%",
                 "50%",
                 "30%",
               ],
               1,
               "70% dos pacientes abandonam o tratamento nos primeiros 30 dias. O acompanhamento da farmacia pode reduzir drasticamente esse numero.",
             ),
             q(
               "Qual o principal fator de nao adesao ao tratamento?",
               [
                 "Preco do medicamento",
                 "Falta de compreensao, esquecimento e efeitos colaterais — tudo que o acompanhamento pode mitigar",
                 "Marca do medicamento",
                 "Embalagem",
               ],
               1,
               "Os principais fatores de nao adesao sao comunicacao e suporte — exatamente o que o acompanhamento farmaceutico resolve.",
             ),
             q(
               "Em quantos dias apos a compra o contato de acompanhamento e mais eficaz?",
               [
                 "No dia seguinte",
                 "3 a 5 dias apos a compra",
                 "30 dias depois",
                 "So no fim do tratamento",
               ],
               1,
               "3-5 dias e o timing ideal: o paciente ja comecou o tratamento mas ainda esta na fase de adaptacao. O apoio nesse momento e decisivo.",
             ),
           ],
           xp: 70,
         },
         {
           id: "como-contatar",
           titulo: "Como contatar o paciente sem parecer telemarketing",
           duracaoMin: 5,
           nivel: "intermediario",
           videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
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
          comparativo: {
            titulo: "Contato de cuidado vs. Abordagem de telemarketing",
            itens: [
              { nome: "Identificacao", quando: "Cuidado: 'Aqui e da Farmacia [nome], tudo bem?' Telemarketing: 'E da central de relacionamento.'" },
              { nome: "Motivo", quando: "Cuidado: 'Estou ligando para saber como voce esta com o medicamento.' Telemarketing: 'So para lembrar de comprar.'" },
              { nome: "Pergunta", quando: "Cuidado: 'Como esta se sentindo? Teve alguma duvida?' Telemarketing: 'Ta tomando direitinho?'" },
              { nome: "Pos-venda", quando: "Cuidado: nunca vende na primeira ligacao. Telemarketing: ja comeca oferecendo produtos." },
            ],
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
               "O que diferencia um contato de cuidado de uma ligacao de telemarketing?",
               [
                 "Nada, e a mesma coisa",
                 "A intencao: cuidado genuino vs. venda. O tom, a abordagem e o timing revelam a intencao",
                 "O horario da ligacao",
                 "O produto oferecido",
               ],
               1,
               "A diferenca fundamental e a intencao. Cuidado genuino pergunta como o paciente esta. Telemarketing ja comeca vendendo.",
             ),
             q(
               "O que fazer se o paciente nao atender a ligacao de acompanhamento?",
               [
                 "Ligar 5 vezes seguidas ate ele atender",
                 "Deixar uma mensagem educada e tentar novamente em outro horario",
                 "Desistir do acompanhamento",
                 "Enviar uma cobranca por SMS",
               ],
               1,
               "Paciente pode estar ocupado. Deixe um recado educado e tente em outro horario. Persistencia e cuidado, nao invasao.",
             ),
             q(
               "Por que oferecer produtos na primeira ligacao de acompanhamento e prejudicial?",
               [
                 "Nao e prejudicial, e a hora certa",
                 "Porque o paciente percebe que a ligacao era uma desculpa para vender, perdendo a confianca",
                 "Porque o farmaceutico nao autoriza",
                 "Porque o paciente nunca compra por telefone",
               ],
               1,
               "Oferecer produtos na primeira ligacao revela a intencao real. O paciente se sente enganado e a confianca construida se perde.",
             ),
           ],
           xp: 60,
         },
         {
           id: "mensagem-apoio",
           titulo: "Mensagens de apoio: WhatsApp e SMS que encantam",
           duracaoMin: 5,
           nivel: "basico",
           videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
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
              cliente: "",
             falaBoa: '"Olá, João! 💙 Aqui é da Farmácia [nome]. Passamos para saber como você está se sentindo com o início do tratamento. Teve alguma dúvida ou dificuldade? Pode responder essa mensagem — estamos aqui para ajudar. Cuide-se!"',
             falaEvitar: '"Senhor João, seu medicamento está quase no fim. Já quer agendar a compra para não ficar sem?"',
           },
          comparativo: {
            titulo: "Mensagem de cuidado vs. Mensagem comercial",
            itens: [
              { nome: "Abertura", quando: "Cuidado: 'Ola Joao! Passamos para saber como voce esta.' Comercial: 'Seu remedio esta acabando, quer comprar?'" },
              { nome: "Tom", quando: "Cuidado: acolhedor, pessoal, com emoticon moderado. Comercial: frio, impessoal, sem identidade." },
              { nome: "Privacidade", quando: "Cuidado: nunca menciona o nome do medicamento. Comercial: detalha o produto na mensagem." },
              { nome: "Canal de resposta", quando: "Cuidado: 'Pode responder essa mensagem.' Comercial: 'Ligue para central.'" },
            ],
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
                 "Porque e muito longo para escrever",
                 "Por respeito a privacidade do paciente — outras pessoas podem ver a mensagem no celular dele",
                 "Porque o cliente pode esquecer",
                 "Nao ha problema em mencionar",
               ],
               1,
               "Mensagens podem ser vistas por terceiros. Mencionar o medicamento viola a privacidade do paciente.",
             ),
             q(
               "Qual o tom ideal para uma mensagem de apoio no WhatsApp?",
               [
                 "Formal e tecnico",
                 "Acolhedor, pessoal e com tom de cuidado genuíno — como se fosse uma mensagem de um amigo que se importa",
                 "Agressivo e urgente",
                 "Robótico e padronizado",
               ],
               1,
               "O tom acolhedor e pessoal faz o paciente se sentir cuidado, nao abordado por um robo de marketing.",
             ),
             q(
               "O que fazer quando o paciente responde a mensagem com uma duvida tecnica?",
               [
                 "Ignorar e seguir o script",
                 "Responder com atencao e, se necessario, encaminhar ao farmaceutico para orientacao completa",
                 "Pedir para ele ligar para a central",
                 "Enviar um link generico",
               ],
               1,
               "Toda resposta do paciente merece atencao. Duvidas tecnicas devem ser respondidas com cuidado ou encaminhadas ao farmaceutico.",
             ),
           ],
           xp: 60,
         },
         {
           id: "calendario-cuidado",
           titulo: "Calendário de cuidado: quando e como acompanhar",
           duracaoMin: 5,
           nivel: "intermediario",
           videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
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
              cliente: "",
             falaBoa: '"Dona Maria, na semana passada a senhora comprou o medicamento para diabetes. Como está sendo a adaptação? Aqui na farmácia temos um calendário de cuidado: em 15 dias entro em contato de novo para saber como está. Pode contar com a gente!"',
             falaEvitar: '"Já passou 15 dias, queria saber se vai comprar de novo o remédio."',
           },
          comparativo: {
            titulo: "Calendario de cuidado por tipo de tratamento",
            itens: [
              { nome: "Tratamento cronico (hipertensao, diabetes)", quando: "Acompanhamento mensal: dia 3-5, dia 15, dia 25-30. Contato continuo e regular." },
              { nome: "Tratamento agudo (antibiotico, anti-inflamatorio)", quando: "Um unico contato no meio do tratamento (dia 3-5). Nao precisa de sequencia." },
              { nome: "Paciente faltoso cronico", quando: "Contato de acolhimento, nunca de cobranca. 'Sentimos sua falta, esta tudo bem?'" },
              { nome: "Alta do tratamento", quando: "Contato de encerramento: 'Como voce esta? Se precisar, estamos aqui.' Mantem a porta aberta." },
            ],
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
               "3-5 dias é o timing ideal: o paciente já começou o tratamento mas ainda está na fase crítica de adaptação. Um apoio nesse momento faz toda a diferença na adesão.",
             ),
             q(
               "Qual a diferenca entre acompanhar um paciente cronico e um tratamento agudo?",
               [
                 "Nao ha diferenca",
                 "Cronico: acompanhamento mensal continuo. Agudo: um unico contato no meio do tratamento",
                 "Agudo precisa de mais contatos",
                 "Cronico nao precisa de acompanhamento",
               ],
               1,
               "Pacientes cronicos precisam de suporte continuo. Tratamentos agudos resolvem em dias e precisam de apenas um contato de verificacao.",
             ),
             q(
               "Como deve ser o contato com um paciente cronico que falta ao tratamento?",
               [
                 "Cobrar: 'O senhor nao veio comprar o remedio esse mes'",
                 "Acolher: 'Sentimos sua falta, esta tudo bem? Precisando de ajuda?'",
                 "Ignorar — problema do paciente",
                 "Cancelar o cadastro",
               ],
              1,
               "Pacientes cronicos que faltam podem estar com dificuldades financeiras, efeitos colaterais ou desmotivacao. Acolhimento, nao cobranca.",
             ),
             q(
               "Por que celebrar marcos de tratamento (3 meses, 6 meses) com o paciente?",
               [
                 "Nao e necessario",
                 "Reforca a motivacao do paciente e mostra que a farmacia se importa com a jornada dele",
                 "Apenas para vender mais",
                 "Para preencher o relatorio",
               ],
              1,
               "Celebrar marcos e um gesto de cuidado que reforca a adesao e fortalece o vinculo entre paciente e farmacia.",
             ),
           ],
           xp: 70,
         },
         {
           id: "familia-cuidadora",
           titulo: "Envolvendo a família no cuidado",
           duracaoMin: 5,
           nivel: "intermediario",
           videoUrl: "https://www.youtube.com/watch?v=3PmVJQUCm4E",
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
          comparativo: {
            titulo: "Com cuidador envolvido vs. Sem envolvimento do cuidador",
            itens: [
              { nome: "Adesao", quando: "Com cuidador envolvido: dobra a chance de adesao. Sem envolvimento: alta taxa de abandono." },
              { nome: "Orientacao", quando: "Com cuidador: orientacoes claras e material de apoio. Sem: orientacao apenas para o paciente, que pode esquecer." },
              { nome: "Acompanhamento", quando: "Com cuidador: inclui o cuidador nos contatos. Sem: contato apenas com o paciente." },
              { nome: "Resultado", quando: "Com cuidador: tratamento mais eficaz, paciente mais seguro. Sem: maior chance de erros e abandono." },
            ],
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
               "Como identificar quem e o cuidador do paciente?",
               [
                 "Nao e possivel identificar",
                 "Perguntar na dispensacao: 'Quem mais ajuda nos cuidados em casa?'",
                 "Apenas observar",
                 "Perguntar para o vizinho",
               ],
               1,
               "Perguntar diretamente ao paciente ou acompanhante e a forma mais simples e eficaz de identificar o cuidador.",
             ),
             q(
               "Qual o tipo de orientacao mais eficaz para o cuidador?",
               [
                 "Explicacao verbal longa e tecnica",
                 "Orientacoes claras, escritas e com horarios marcados — material de apoio que ele possa consultar",
                 "Apenas entregar a bula",
                 "Nao orientar, o cuidador ja sabe",
               ],
               1,
               "O cuidador precisa de orientacoes claras e acessiveis. Material escrito com horarios e instrucoes simples faz toda a diferenca.",
             ),
             q(
               "Por que incluir o cuidador no contato de acompanhamento?",
               [
                 "Nao e necessario incluir",
                 "Porque o cuidador e quem administra o medicamento e pode identificar problemas que o paciente nao percebe",
                 "Para vender mais produtos",
                 "Para preencher a agenda",
               ],
               1,
               "O cuidador esta na linha de frente. Ele percebe efeitos colaterais, dificuldades de administracao e mudancas no estado do paciente.",
             ),
           ],
           xp: 60,
         },
         {
           id: "indicadores-cuidado",
           titulo: "Indicadores de cuidado: como saber se está funcionando",
           duracaoMin: 6,
           nivel: "avancado",
           videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
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
          comparativo: {
            titulo: "Indicadores objetivos vs. Subjetivos de cuidado",
            itens: [
              { nome: "Taxa de contato", quando: "Objetivo: de 10 pacientes, 8 atenderam (80%). Mostra eficiencia da equipe." },
              { nome: "Taxa de resposta positiva", quando: "Objetivo: 18 de 20 relatam adesao (90%). Mostra impacto real do acompanhamento." },
              { nome: "Indice de retorno", quando: "Objetivo: 12 pacientes voltaram e pediram pelo atendente. Maior indicador de encantamento." },
              { nome: "Sensacao da equipe", quando: "Subjetivo: 'Acho que ta funcionando.' Sem dados, nao da para saber se esta realmente funcionando." },
            ],
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
                 "De cada 10 pacientes abordados, quantos atendem o contato — mede eficiencia da equipe",
                 "O faturamento da farmacia",
                 "Nada relevante",
               ],
               1,
               "Taxa de contato mede a eficiencia operacional: quantos pacientes a equipe consegue alcancar com o acompanhamento.",
             ),
             q(
               "Qual a ferramenta minima necessaria para acompanhar indicadores de cuidado?",
               [
                 "Um sistema de ERP caro",
                 "Um caderno ou planilha simples — o importante e registrar, nao a ferramenta",
                 "Nao e necessario registrar",
                 "Um aplicativo importado",
               ],
               1,
               "O mais importante e registrar. Um caderno ou planilha ja basta para comecar a medir e melhorar o cuidado.",
             ),
             q(
               "Por que revisar os indicadores semanalmente com a equipe?",
               [
                 "Para criticar quem nao atingiu a meta",
                 "Para celebrar resultados, ajustar rotas e motivar a equipe a manter o cuidado",
                 "Nao e necessario revisar",
                 "Apenas para o gerente",
               ],
               1,
               "Revisar semanalmente os indicadores permite celebrar acertos, ajustar o que nao funcionou e manter a equipe engajada no cuidado.",
             ),
           ],
           xp: 70,
         },
       ],
    },
  ],
};
