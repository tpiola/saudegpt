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
       MÓDULO 3 — Fidelização e Retenção
       ════════════════════════════════════════════════ */
    {
      id: "fidelizacao",
      titulo: "Encantamento e Cuidado Contínuo",
      descricao:
        "O cliente volta não porque foi 'fidelizado' — volta porque foi bem cuidado. Como construir relacionamento duradouro baseado em confiança e cuidado genuíno.",
      aulas: [
        {
          id: "pos-venda",
          titulo: "Pós-atendimento: o momento mais esquecido do cuidado",
          duracaoMin: 5,
          nivel: "basico",
          resumo:
            "O cuidado só termina quando o cliente sai satisfeito. Como encerrar o atendimento de forma que ele queira voltar.",
          resumoExecutivo: [
            "Nunca encerre o atendimento com 'Tchau' seco. Recapitule como usar, agradeça e convide a voltar.",
            'Use o fechamento de relacionamento: "Foi um prazer te atender. Se tiver qualquer dúvida sobre o produto, pode voltar que eu mesma te ajudo."',
            "Anote o nome do cliente (se possível) e use na despedida. 'Tchau, Maria, melhoras!'",
            "Pós-venda não precisa de sistema caro. Um 'Volte sempre' genuíno vale mais que SMS automático.",
            "Cliente que se sente importante no pós-venda volta 3x mais que cliente tratado como número.",
          ],
          simulacao: {
            cliente: "Cliente comprando pela primeira vez na farmácia.",
            falaBoa: '"Prontinho, Maria. Esse xarope você toma 3x ao dia, depois das refeições. Melhoras hein! E qualquer coisa, pode voltar que a gente ajuda. Vai ser um prazer te atender de novo!"',
            falaEvitar: '"Pronto, R$ 48,50. (entrega a nota e já vira para o próximo cliente)"',
          },
          checklist: [
            "Recapitular brevemente como usar o produto.",
            "Personalizar a despedida com o nome do cliente.",
            "Convidar a voltar de forma genuína.",
          ],
          quandoChamarFarmaceutico: [
            "Quando o produto exige um acompanhamento que o farmacêutico deve fazer.",
          ],
          errosComuns: [
            "Encerrar o atendimento de forma automática, como se o cliente já não importasse.",
            "Entregar o produto e virar as costas sem despedida.",
          ],
          quiz: [
            q(
              "Como encerrar um atendimento de forma que o cliente queira voltar?",
              [
                '"Tchau, obrigado"',
                '"Prontinho, aqui está" (entrega e vira)',
                '"Foi um prazer te atender. Se precisar de ajuda com o produto, pode voltar que eu ajudo"',
                '"Espero que melhore" (sem contato visual)',
              ],
              2,
              "Um pós-venda personalizado e genuíno é o que faz o cliente lembrar de você na próxima visita.",
            ),
          ],
          xp: 40,
        },
        {
          id: "cliente-recorrente",
          titulo: "Como transformar cliente ocasional em recorrente",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo:
            "Estratégias práticas para criar o hábito de compra: lembretes, constância, diferenciação e o poder de ser o atendente de referência.",
          resumoExecutivo: [
            "Clientes de medicamentos contínuos (hipertensão, diabetes) são os mais fáceis de fidelizar — marque a data de retorno.",
            'Diferencial que cria hábito: "Daqui a 30 dias eu vou estar aqui de novo. Quando seu remédio acabar, passa aqui que eu já sei o que você usa."',
            "Conheça o cliente pelo nome e pelo produto. Nada fideliza mais que ser reconhecido.",
            "Pequenas gentilezas criam grandes vínculos: segurar a receita, perguntar como foi o tratamento, lembrar de uma queixa passada.",
            "Cliente recorrente não é fiel ao produto — é fiel a quem atende bem.",
          ],
          simulacao: {
            cliente: "Cliente de medicamento contínuo (hipertenso) na 2ª compra.",
            falaBoa: '"Oi, João! De novo o losartana, certo? Essa caixa dura mais 30 dias. No mês que vem, passa aqui que eu já separo pra você. Se precisar antes, é só aparecer."',
            falaEvitar: '"O mesmo de sempre?" (digitando no computador sem olhar)',
          },
          checklist: [
            "Identificar clientes de medicamentos contínuos e marcar retorno.",
            "Usar o nome do cliente e lembrar do produto que ele usa.",
            "Convidar pro retorno de forma personalizada.",
          ],
          quandoChamarFarmaceutico: [
            "Para reforçar a adesão ao tratamento com clientes de medicamentos contínuos.",
          ],
          errosComuns: [
            "Tratar todo cliente como anônimo mesmo na 5ª compra.",
            "Não aproveitar o histórico para personalizar o atendimento.",
          ],
          quiz: [
            q(
              "Qual a principal razão que faz um cliente voltar à mesma farmácia?",
              [
                "O preço mais baixo",
                "Ser atendido por quem o conhece e lembra do seu nome",
                "O estacionamento",
                "A propaganda na TV",
              ],
              1,
              "Preço atrai uma vez. Ser reconhecido e bem atendido faz o cliente voltar sempre.",
            ),
          ],
          xp: 60,
        },
        {
          id: "programa-fidelidade",
          titulo: "Programa de fidelidade que funciona (sem app caro)",
          duracaoMin: 5,
          nivel: "basico",
          resumo:
            "Fidelidade não precisa de sistema caro. Técnicas de papel e caneta que criam vínculo real com o cliente.",
          resumoExecutivo: [
            'O melhor programa de fidelidade é o atendente que lembra do cliente. Sistema nenhum substitui "Oi, Maria! Veio buscar o remédio do joelho?"',
            'Cartão de fidelidade físico: "A cada 5 compras, ganhe um brinde" funciona e custa centavos.',
            "Cliente que participa de programa de fidelidade gasta em média 20% mais por visita.",
            "O segredo não é o desconto — é o reconhecimento. Cliente quer se sentir especial, não só ter preço baixo.",
            "Aniversário do cliente: um parabéns genuíno na data certa vale mais que qualquer desconto.",
          ],
          simulacao: {
            cliente: "Cliente fazendo a 4ª compra no mês.",
            falaBoa: '"João, olha só: com essa compra você completa o cartão fidelidade. Mais uma e ganha um brinde. Quer levar mais alguma coisa para completar hoje?"',
            falaEvitar: '"Tem cartão fidelidade? Não? Quer fazer?"',
          },
          checklist: [
            "Oferecer o programa de fidelidade como benefício, não como burocracia.",
            "Usar o cartão físico como ferramenta de relacionamento, não de desconto.",
          ],
          quandoChamarFarmaceutico: [
            "Para sugerir brindes educativos relacionados à saúde do cliente.",
          ],
          errosComuns: [
            "Tratar fidelidade como burocracia em vez de relacionamento.",
            "Empurrar cartão sem explicar o benefício real.",
          ],
          quiz: [
            q(
              "O que mais fideliza o cliente em uma farmácia?",
              [
                "Preço baixo sempre",
                "Ser reconhecido e bem atendido pelo nome e histórico",
                "Estacionamento gratuito",
                "App com cashback",
              ],
              1,
              "Reconhecimento pessoal vale mais que preço baixo ou app. Cliente fiel é fiel a pessoas, não a descontos.",
            ),
          ],
          xp: 40,
        },
        {
          id: "ser-referencia",
          titulo: "Como virar a atendente de referência na farmácia",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo:
            "O atendente que o cliente pede pelo nome. Como construir reputação, autoridade e confiança para ser a primeira pessoa que o cliente procura.",
          resumoExecutivo: [
            "Clientes que pedem pelo nome são responsáveis por 40% do faturamento dos melhores atendentes.",
            "Para ser referência: seja consistente, presente e interessada. Cliente precisa saber que você estará lá.",
            "Conhecimento técnico é pré-requisito. Conhecimento do cliente é diferencial.",
"Anote preferências dos clientes recorrentes (mentalmente ou no caderno) - saber o que cada um prefere é o maior diferencial.",
            "Seja proativa: se o cliente está com gripe e você sabe que no mês passado ele comprou xarope, pergunte como foi.",
          ],
          simulacao: {
            cliente: "Cliente antigo chega e outra atendente vai atendê-lo.",
            falaBoa: 'Atendente A se aproxima: "Dona Maria! A senhora veio buscar o óleo de fígado de bacalhau de novo? A senhora achou bom mesmo?" Cliente: "Nossa, você lembrou! Que memória!"',
            falaEvitar: '"Bom dia. Vai levar o quê?" (como se nunca tivesse visto a cliente antes, mesmo sendo a 10ª vez)',
          },
          checklist: [
            "Lembrar preferências e histórico dos clientes frequentes.",
            "Ser consistente na presença e qualidade do atendimento.",
            "Construir conhecimento técnico para ser autoridade.",
          ],
          quandoChamarFarmaceutico: [
            "Para reforçar a credibilidade com o cliente quando necessário.",
          ],
          errosComuns: [
            "Tratar cliente antigo como novo a cada visita.",
            "Fingir que lembra quando não lembra — cliente percebe.",
          ],
          quiz: [
            q(
              "O que mais contribui para um atendente virar referência na farmácia?",
              [
                "Conhecer todos os preços de cor",
                "Lembrar dos clientes, suas preferências e seu histórico",
                "Ser a mais rápida no caixa",
                "Usar jaleco branco",
              ],
              1,
              "Conhecimento do cliente + consistência + memória = atendente de referência que o cliente pede pelo nome.",
            ),
          ],
          xp: 60,
        },
        {
          id: "indicador-sucesso",
          titulo: "Indicadores de sucesso no atendimento (sem Power BI)",
          duracaoMin: 5,
          nivel: "intermediario",
          resumo:
            "Não precisa de dashboard. Os indicadores que realmente importam no dia a dia do balcão e como acompanhá-los de cabeça ou no caderno.",
          resumoExecutivo: [
            "Ticket médio do próprio atendimento: quanto cada cliente gasta quando você atende vs. a média da loja.",
            "Índice de volta: quantos clientes voltam e pedem por você. Anote nomes numa agenda.",
            "Taxa de oferta aceita: de cada 10 ofertas que você faz, quantas o cliente aceita? Isso mede sua comunicação.",
            "Cliente que sai satisfeito não é métrica — é missão. Mas você percebe pela despedida: 'Volto mais vezes agora.'",
            "O melhor indicador de sucesso é o cliente que entra, te vê e sorri. Nenhum dashboard captura isso.",
          ],
          simulacao: {
            cliente: "Gerente perguntando como está o atendimento.",
            falaBoa: '"Atendi 30 clientes hoje. Em 20 eu consegui oferecer um complemento, 12 aceitaram. E 3 clientes novos perguntaram meu nome. Foi um bom dia!"',
            falaEvitar: '"Atendi bastante, acho que foi bem."',
          },
          checklist: [
            "Acompanhar mentalmente quantas ofertas são aceitas por dia.",
            "Anotar nomes de clientes novos que voltam.",
            "Observar seu ticket médio pessoal comparado à média da loja.",
          ],
          quandoChamarFarmaceutico: [
            "Para comparar indicadores com o desempenho geral da farmácia.",
          ],
          errosComuns: [
            "Achar que indicador é coisa de gerente — todo atendente que quer crescer precisa saber seus números.",
            "Medir só quantidade de vendas, ignorando qualidade do atendimento.",
          ],
          quiz: [
            q(
              "Qual indicador pessoal um atendente pode acompanhar sem sistema?",
              [
                "Margem de lucro da loja",
                "Número de ofertas aceitas por dia (de cada 10, quantas viram venda)",
                "Faturamento total da farmácia",
                "Curva ABC de produtos",
              ],
              1,
              "A taxa de oferta aceita mede sua eficiência em comunicação e persuasão. E você pode contar na mão.",
            ),
          ],
          xp: 50,
        },
        {
          id: "ser-lembrado",
          titulo: "Como ser lembrado: o atendente que o cliente não esquece",
          duracaoMin: 5,
          nivel: "basico",
          resumo:
            "No final, não importa o produto — importa como o cliente se sentiu. Os pequenos gestos que transformam um atendimento em experiência memorável.",
          resumoExecutivo: [
            'Clientes esquecem o que você vendeu. Lembram como você os fez sentir. Essa é a regra número 1.',
            "Gestos que marcam: lembrar de um detalhe pessoal, perguntar pela família, dar uma informação útil além da venda.",
            "A alta temporada de fidelização é quando o cliente está vulnerável (doente, inseguro). Um atendimento humano nessa hora cria vínculo vitalício.",
            "Cliente memorável não é o que mais gasta. É o que confia. E confiança se constrói em pequenos momentos.",
            'Seu maior marketing é o cliente que sai e diz: "Fui muito bem atendido, vou voltar lá."',
          ],
          simulacao: {
            cliente: "Cliente que comprou um remédio para dor nas costas na semana passada e voltou hoje.",
            falaBoa: '"Oi, Carlos! E aí, melhorou das costas? Aquele anti-inflamatório fez efeito?" (mostrando que lembra e se importa)',
            falaEvitar: '"Bom dia, o que vai levar hoje?" (como se nunca tivesse visto)',
          },
          checklist: [
            "Lembrar de detalhes da vida do cliente (profissão, família, queixa anterior).",
            "Perguntar como foi o resultado do produto recomendado antes.",
            "Transformar cada atendimento em uma experiência humana, não transacional.",
          ],
          quandoChamarFarmaceutico: [
            "Para envolver o farmacêutico em casos onde o acompanhamento clínico fortalece o vínculo.",
          ],
          errosComuns: [
            "Tratar venda como transação: entrega, cobra, tchau.",
            "Não lembrar do cliente no retorno — ele se sente invisível.",
          ],
          quiz: [
            q(
              "O que o cliente mais lembra depois de um atendimento?",
              [
                "O preço que pagou",
                "O nome do produto que comprou",
                "Como ele se sentiu durante o atendimento",
                "A marca do produto",
              ],
              2,
              "Cliente pode esquecer o que comprou, mas nunca esquece como foi tratado.",
            ),
          ],
          xp: 50,
        },
      ],
    },
  ],
};
