import type { Trilha } from "./types";
import { q } from "./_helpers";

// Trilha 4 — Vendas, Persuasão e Atendimento Consultivo no Balcão.
export const trilhaVendas: Trilha = {
  id: "vendas",
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
          checklist: [
            "Só oferecer depois de ouvir e entender a necessidade.",
            "Observar linguagem corporal do cliente antes de propor.",
            "Nunca oferecer antes de concluir a orientação inicial.",
          ],
          quandoChamarFarmaceutico: [
            "Quando o cliente demonstrar desconfiança depois de uma oferta.",
            "Para validar se uma associação de produtos é segura.",
          ],
          errosComuns: [
            "Oferecer antes de ouvir — parece desespero e quebra o rapport.",
            "Usar o mesmo script para todo cliente sem adaptar.",
          ],
          quiz: [
            q(
              "Qual o melhor momento para oferecer um produto complementar?",
              [
                "Assim que o cliente entra na loja",
                "Depois de acolher, ouvir e orientar, durante a conversa",
                "Só na finalização do caixa",
                "Antes mesmo do cliente falar o que quer",
              ],
              1,
              "O cliente precisa se sentir ouvido primeiro. Oferecer antes disso é oportunismo.",
            ),
          ],
          xp: 50,
        },
        {
          id: "gatilhos-mentais",
          titulo: "Gatilhos mentais éticos na farmácia",
          duracaoMin: 7,
          nivel: "intermediario",
          resumo:
            "Como usar gatilhos de urgência, prova social, reciprocidade e autoridade sem apelar — com exemplos reais de balcão.",
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
          checklist: [
            "Usar prova social como informação, não como pressão.",
            "Nunca criar urgência falsa — destruir a confiança é mais caro que perder uma venda.",
          ],
          quandoChamarFarmaceutico: [
            "Para respaldar tecnicamente ofertas de maior valor.",
            "Quando o cliente mostra resistência e o farmacêutico pode agregar credibilidade.",
          ],
          errosComuns: [
            "Usar gatilhos de escassez falsos. Clientes sentem e não voltam.",
            "Aplicar o mesmo gatilho para todo perfil de cliente.",
          ],
          quiz: [
            q(
              "Qual desses usos do gatilho de prova social é ético no balcão?",
              [
                '"Só tem mais dois, depois acaba" (mesmo tendo estoque)',
                '"Muitos clientes com o mesmo problema usam esse produto"',
                '"Toda mulher compra isso, por que você não compraria?"',
                '"O vizinho comprou, você também deveria"',
              ],
              1,
              "Prova social ética é informar que outros usam, não pressionar com escassez falsa.",
            ),
          ],
          xp: 60,
        },
        {
          id: "como-oferecer",
          titulo: "Como oferecer sem ser invasivo",
          duracaoMin: 6,
          nivel: "basico",
          resumo:
            "A arte de sugerir sem empurrar: vocabulário, tom, timing e a diferença entre oferta consultiva e oferta predatória.",
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
          ],
          xp: 50,
        },
        {
          id: "objecoes",
          titulo: "Como lidar com objeções de preço e necessidade",
          duracaoMin: 8,
          nivel: "intermediario",
          resumo:
            "Não é resistência — é dúvida. Técnicas para ouvir a objeção, validar o sentimento e reposicionar o valor sem pressionar.",
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
          ],
          xp: 70,
        },
        {
          id: "cross-sell-upsell",
          titulo: "Cross-sell e up-sell no balcão da farmácia",
          duracaoMin: 7,
          nivel: "intermediario",
          resumo:
            "Como aumentar o ticket médio oferecendo complementos e upgrades que realmente agregam ao tratamento do cliente.",
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
          ],
          xp: 60,
        },
        {
          id: "fechamento",
          titulo: "Técnicas de fechamento que funcionam",
          duracaoMin: 6,
          nivel: "avancado",
          resumo:
            "Como conduzir o cliente até a decisão de compra sem pressão. Fechamento assumido, alternativo, resumo e silêncio.",
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
          checklist: [
            "Identificar sinais de compra: tocar no produto, perguntar detalhes, concordar com a orientação.",
            "Escolher a técnica de fechamento certa para cada perfil.",
            "Depois do fechamento, ficar em silêncio.",
          ],
          quandoChamarFarmaceutico: [
            "Fechamento de vendas de medicamentos que exigem validação técnica.",
          ],
          errosComuns: [
            "Falar depois de fechar a venda — você tira o cliente da decisão.",
            "Fechamento agressivo: pressionar o cliente a decidir na hora.",
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
          ],
          xp: 70,
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
          ],
          xp: 40,
        },
        {
          id: "tom-voz-postura",
          titulo: "Tom de voz, postura e presença no balcão",
          duracaoMin: 6,
          nivel: "basico",
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
          ],
          xp: 50,
        },
        {
          id: "perguntas-poderosas",
          titulo: "Perguntas poderosas que revelam a necessidade",
          duracaoMin: 7,
          nivel: "intermediario",
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
          ],
          xp: 60,
        },
        {
          id: "escuta-ativa",
          titulo: "Escuta ativa: o segredo do atendente nota 10",
          duracaoMin: 6,
          nivel: "intermediario",
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
          ],
          xp: 60,
        },
        {
          id: "linguagem-positiva",
          titulo: "Linguagem positiva: o que dizer e o que evitar",
          duracaoMin: 5,
          nivel: "basico",
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
          ],
          xp: 40,
        },
        {
          id: "falar-de-preco",
          titulo: "Como falar de preço sem perder a venda",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo:
            "Preço é uma conversa sobre valor. Técnicas para apresentar preço com confiança e transformar objeção de preço em decisão de compra.",
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
          ],
          xp: 60,
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
              cliente: "",
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
              cliente: "",
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
               "3-5 dias é o timing ideal: o paciente já começou o tratamento mas ainda está na fase crítica de adaptação. Um apoio nesse momento faz toda a diferença na adesão.",
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
           ],
           xp: 60,
         },
       ],
    },
  ],
};
