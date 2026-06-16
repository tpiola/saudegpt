import type { Trilha } from "./types";
import { q } from "./_helpers";
import { imagensCategoria } from "./midia-catalogo";

// Trilha 7 — Serviços Farmacêuticos & Cuidado na Prática.
// Conteúdo adaptado do manual de operação da farmácia (4 Ps da Saúde,
// orientações de balcão e serviços farmacêuticos) — revisado para o
// formato da plataforma, sem cópia literal das fontes originais.
export const trilhaServicosCuidado: Trilha = {
  id: "servicos-cuidado",
  numero: 7,
  titulo: "Serviços Farmacêuticos & Cuidado na Prática",
  subtitulo: "Os 4 Ps da Saúde aplicados ao balcão",
  descricao:
    "O método dos 4 Ps (Proteção, Prevenção, Promoção e Primeira Atenção) + as orientações que todo cliente precisa ouvir: como usar suspensão oral, onde guardar o soro depois de aberto, como se preparar para exames e o que são os serviços farmacêuticos da farmácia.",
  nivelFaixa: "Todos os níveis",
  icone: "heart",
  modulos: [
    {
      id: "metodo-4ps",
      titulo: "Os 4 Ps da Saúde — Seu Método de Cuidado",
      descricao:
        "Um jeito simples de pensar qualquer atendimento: Proteção, Prevenção, Promoção e Primeira Atenção. Aprenda o método uma vez e use para sempre.",
      imagemHeroUrl: imagensCategoria.atendimento,
      aulas: [
        {
          id: "os-4ps-da-saude",
          titulo: "Os 4 Ps: o mapa mental que organiza qualquer atendimento",
          duracaoMin: 6,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.atendimento,
          imagemProduto: "/imagens/produtos/ems-omeprazol.webp",
          resumo:
            "Proteção, Prevenção, Promoção e Primeira Atenção: quatro pilares que transformam um atendimento comum em uma orientação profissional e segura.",
          resumoExecutivo: [
            "Os 4 Ps são um roteiro mental: em qualquer atendimento, pense em PROTEÇÃO, PREVENÇÃO, PROMOÇÃO e PRIMEIRA ATENÇÃO.",
            "PROTEÇÃO: proteger o cliente de riscos — reconhecer sinais de alerta e os seus limites, saber o que NÃO fazer e quando chamar o farmacêutico.",
            "PREVENÇÃO: o que a pessoa pode fazer hoje para evitar o problema amanhã (hábitos, proteção solar, vacinação, acompanhamento).",
            "PROMOÇÃO: promover mais saúde — educação, acompanhamento regular e, quando indicado pelo farmacêutico, suplementação e produtos de apoio.",
            "PRIMEIRA ATENÇÃO: a farmácia é o primeiro ponto de cuidado do bairro — acolher, escutar a real necessidade e dar o encaminhamento certo.",
            "Com o método, você nunca trava no balcão: sempre há um próximo passo claro e seguro para orientar.",
          ],
          comparativo: {
            titulo: "Atendimento com método vs. Atendimento improvisado",
            itens: [
              {
                nome: "Com os 4 Ps",
                quando:
                  "O atendente acolhe (primeira atenção), reconhece sinais de alerta (proteção), orienta hábitos (prevenção) e sugere o próximo passo de saúde com o farmacêutico (promoção).",
              },
              {
                nome: "Sem método",
                quando:
                  "A conversa pula de assunto, o cliente sai com dúvida e a oportunidade de cuidado se perde.",
              },
              {
                nome: "Exemplo — sono",
                quando:
                  "Primeira Atenção: escutar a queixa de cansaço. Proteção: insônia persistente é sinal de alerta para encaminhar. Prevenção: rotina noturna sem telas. Promoção: higiene do sono e orientação do farmacêutico sobre opções.",
              },
              {
                nome: "Exemplo — hidratação",
                quando:
                  "Primeira Atenção: perceber o cliente idoso com pouca ingestão de água. Proteção: sinais de desidratação pedem atenção médica. Prevenção: água ao longo do dia. Promoção: lembrar que a água melhora até a absorção de medicamentos.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Minha mãe é pré-diabética e eu não sei o que fazer para ajudar ela.'",
            falaBoa:
              '"Que bom que você quer ajudar! Deixa eu organizar com você: para prevenir a evolução, alimentação equilibrada e caminhada regular fazem muita diferença. O parâmetro que o médico acompanha é a glicemia de jejum — entre 100 e 125 é pré-diabetes. Se aparecer muita sede, muita urina ou cansaço fora do comum, é sinal de procurar o médico. E aqui na farmácia ela pode medir a glicemia e conversar com o farmacêutico, que orienta o acompanhamento certinho. Quer que eu chame ele?"',
            falaEvitar:
              '"Ah, pré-diabetes quase todo mundo tem, é só comer menos açúcar." (minimiza a condição, não orienta parâmetros nem encaminha)',
          },
          checklist: [
            "Memorizar os 4 Ps: Proteção, Prevenção, Promoção, Primeira Atenção.",
            "Aplicar o método em qualquer tema antes de responder ao cliente.",
            "Sempre fechar com um próximo passo: orientar, acompanhar ou falar com o farmacêutico.",
            "Nunca dar diagnóstico — o atendente orienta e acolhe; quem diagnostica é o médico.",
          ],
          quandoChamarFarmaceutico: [
            "Sempre que o cliente quiser interpretar resultados de exames.",
            "Quando houver sinais de alerta (o P de Proteção pede encaminhamento).",
            "Antes de sugerir qualquer suplemento ou produto de apoio à saúde.",
          ],
          errosComuns: [
            "Pular direto para o produto sem acolher e entender o contexto (faltou Primeira Atenção).",
            "Ignorar sinais de alerta que pedem encaminhamento (faltou Proteção).",
            "Encerrar na venda em vez de promover saúde e acompanhamento (faltou Promoção).",
          ],
          quiz: [
            q(
              "O que significam os 4 Ps da Saúde?",
              [
                "Preço, Produto, Praça e Promoção",
                "Proteção, Prevenção, Promoção e Primeira Atenção",
                "Pressa, Paciência, Postura e Presença",
                "Prescrição, Posologia, Princípio ativo e Padrão",
              ],
              1,
              "Os 4 Ps da Saúde organizam o cuidado: proteger o cliente, prevenir problemas, promover saúde e oferecer a primeira atenção. Não confunda com os 4 Ps do marketing!",
            ),
            q(
              "Um cliente comenta que a glicemia de jejum da esposa deu 110 mg/dL. Qual é a conduta correta do atendente?",
              [
                "Dizer que ela tem diabetes e precisa de medicamento",
                "Dizer que está tudo normal e não precisa se preocupar",
                "Explicar que esse valor merece acompanhamento e encaminhar ao farmacêutico ou médico",
                "Sugerir um chá natural para baixar o açúcar",
              ],
              2,
              "Entre 100 e 125 mg/dL em jejum é faixa de atenção (pré-diabetes). O atendente orienta o acompanhamento e encaminha — nunca diagnostica nem indica tratamento.",
            ),
            q(
              "No método dos 4 Ps, o que entra em 'Primeira Atenção'?",
              [
                "Ser o primeiro a oferecer um desconto",
                "Acolher, escutar a real necessidade e dar o encaminhamento certo — a farmácia como primeiro ponto de cuidado",
                "Atender o mais rápido possível, sem perguntas",
                "Indicar sempre o medicamento mais caro",
              ],
              1,
              "Primeira Atenção é o acolhimento inicial: a farmácia costuma ser o primeiro lugar que a pessoa procura. Escutar com cuidado e encaminhar bem faz toda a diferença.",
            ),
            q(
              "Por que os 4 Ps ajudam o atendente no dia a dia?",
              [
                "Porque substituem o farmacêutico",
                "Porque dão um roteiro claro e seguro para orientar sem improvisar",
                "Porque aceleram a venda de produtos",
                "Porque eliminam a necessidade de estudar",
              ],
              1,
              "O método dá estrutura: você sempre sabe o próximo passo da conversa — e o limite entre orientar e escalonar.",
            ),
          ],
          xp: 60,
        },
        {
          id: "4ps-em-acao",
          titulo: "4 Ps em ação: glicemia e saúde dos olhos",
          duracaoMin: 7,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.glp1,
          resumo:
            "Dois temas reais do balcão passados pelo filtro dos 4 Ps: controle de glicemia e cuidado com a visão.",
          resumoExecutivo: [
            "GLICEMIA — Prevenção: alimentação com carboidratos complexos, atividade física regular (150 minutos por semana) e controle de peso protegem o metabolismo.",
            "GLICEMIA — valores de referência: jejum de 70 a 99 mg/dL é normal; 100 a 125 é pré-diabetes; 126 ou mais pede confirmação médica. Abaixo de 70 é hipoglicemia: agir na hora.",
            "GLICEMIA — Proteção: muita sede, muita urina, fome excessiva, visão turva e cansaço são sinais de alerta de glicose alta; tremor, suor frio e confusão indicam glicose baixa — encaminhe.",
            "OLHOS — Prevenção: óculos de sol com proteção UV, não coçar os olhos com mãos sujas e a regra 20-20-20 nas telas (a cada 20 minutos, olhar algo a 6 metros por 20 segundos).",
            "OLHOS — Proteção: consulta oftalmológica anual detecta cedo catarata, glaucoma e alterações da retina — especialmente em quem tem diabetes ou hipertensão.",
            "PROMOÇÃO nos dois temas: hidratação, boa alimentação e, com orientação do farmacêutico, suplementos com evidência (como luteína e ômega-3 para os olhos). PRIMEIRA ATENÇÃO: acolher a queixa e encaminhar bem.",
          ],
          comparativo: {
            titulo: "Sinais que orientam a conversa no balcão",
            itens: [
              {
                nome: "Glicose alta (hiperglicemia)",
                quando:
                  "Sede intensa, urina em excesso, fome exagerada, cansaço e visão turva. Conduta: encaminhar para avaliação — nunca minimizar.",
              },
              {
                nome: "Glicose baixa (hipoglicemia)",
                quando:
                  "Tremores, suor frio, palpitação e confusão. Abaixo de 70 mg/dL é situação de ação imediata: avisar o farmacêutico na hora.",
              },
              {
                nome: "Fadiga visual de telas",
                quando:
                  "Olhos secos e cansaço ao fim do dia. Orientar pausas (20-20-20), piscar com frequência e avaliação se persistir.",
              },
              {
                nome: "Sinal de alerta ocular",
                quando:
                  "Dor ocular, perda súbita de visão ou halos de luz: encaminhamento médico imediato, sem testes na farmácia.",
              },
            ],
          },
          checklist: [
            "Saber de cor as faixas de glicemia de jejum: 70–99 / 100–125 / ≥126 mg/dL.",
            "Reconhecer hipoglicemia (abaixo de 70) como situação de ação imediata.",
            "Orientar a regra 20-20-20 para quem passa o dia nas telas.",
            "Reforçar que diabetes e hipertensão também afetam a visão — acompanhamento em dia.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com sintomas de glicose alta ou baixa neste momento.",
            "Dúvidas sobre suplementos para visão ou controle glicêmico.",
            "Cliente diabético com dúvida sobre medicamento ou insulina.",
          ],
          errosComuns: [
            "Decorar os números e esquecer o contexto: parâmetro orienta, não diagnostica.",
            "Tratar queixa ocular persistente como cansaço comum.",
            "Sugerir suplemento sem passar pelo farmacêutico.",
          ],
          quiz: [
            q(
              "Qual é a faixa NORMAL da glicemia de jejum?",
              ["50 a 69 mg/dL", "70 a 99 mg/dL", "100 a 125 mg/dL", "126 a 180 mg/dL"],
              1,
              "Jejum entre 70 e 99 mg/dL é a faixa normal. De 100 a 125 é pré-diabetes e 126 ou mais pede confirmação médica.",
            ),
            q(
              "Cliente mede a glicemia na farmácia e o resultado é 62 mg/dL, com tremor e suor frio. O que fazer?",
              [
                "Pedir para ele voltar amanhã em jejum",
                "Avisar o farmacêutico imediatamente — é hipoglicemia e exige ação na hora",
                "Oferecer um café para ele melhorar",
                "Anotar o valor e seguir o atendimento",
              ],
              1,
              "Abaixo de 70 mg/dL com sintomas é hipoglicemia: situação de ação imediata, conduzida pelo farmacêutico (correção rápida com carboidrato e reavaliação).",
            ),
            q(
              "O que diz a regra 20-20-20 para quem usa muito as telas?",
              [
                "20 minutos de tela, 20 piscadas, 20 gotas de colírio",
                "A cada 20 minutos, olhar para algo distante (cerca de 6 metros) por 20 segundos",
                "20 minutos de tela, 20 minutos de descanso, 20 vezes ao dia",
                "Usar a tela a 20 cm dos olhos por no máximo 20 minutos",
              ],
              1,
              "A regra 20-20-20 reduz a fadiga visual: a cada 20 minutos, desviar o olhar para algo a cerca de 6 metros (20 pés) por 20 segundos.",
            ),
            q(
              "Por que quem tem diabetes precisa cuidar ainda mais da visão?",
              [
                "Porque o açúcar deixa os olhos amarelados",
                "Porque a glicose alta sem controle pode danificar os vasos da retina (retinopatia diabética)",
                "Porque diabéticos não podem usar óculos",
                "Não há relação entre diabetes e visão",
              ],
              1,
              "A glicose elevada de forma crônica agride os pequenos vasos da retina. Por isso o acompanhamento oftalmológico regular é parte do cuidado com o diabetes.",
            ),
          ],
          xp: 70,
        },
      ],
    },
    {
      id: "orientacoes-balcao",
      titulo: "Orientações de Balcão que Mudam o Dia do Cliente",
      descricao:
        "Suspensão oral, soro fisiológico aberto e preparo para exames: as três dúvidas que aparecem toda semana — e que você vai responder com segurança.",
      imagemHeroUrl: imagensCategoria.antibioticos,
      aulas: [
        {
          id: "suspensao-oral",
          titulo: "Suspensão oral: o passo a passo que evita erro de dose",
          duracaoMin: 7,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.antibioticos,
          resumo:
            "Reconstituir, agitar, dosar e conservar: o roteiro completo para orientar o cliente que sai da farmácia com um antibiótico em suspensão.",
          resumoExecutivo: [
            "Suspensão é o medicamento em que o pó precisa ser misturado a um líquido — e as partículas se depositam no fundo. Por isso a regra número um: AGITAR BEM antes de TODA dose.",
            "Reconstituição: usar água filtrada ou fervida e já FRIA, adicionar em duas etapas até a marca indicada no frasco, fechando e agitando entre elas. Água quente pode degradar o medicamento.",
            "Dose certa: usar sempre o dosador que vem na embalagem (seringa ou copo medidor). Colher de cozinha não é medida — varia demais e compromete o tratamento.",
            "Validade muda depois de pronta: a suspensão reconstituída costuma valer de 7 a 14 dias, conforme a bula. A data da caixa vale só para o pó fechado.",
            "Conservação varia por medicamento: alguns vão à geladeira (nunca no congelador, nunca na porta), outros ficam em temperatura ambiente. A bula manda — e o farmacêutico confirma.",
            "Tratamento completo: antibiótico se toma até o fim, mesmo que os sintomas sumam antes. Parar no meio favorece a resistência bacteriana.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'O pediatra passou esse antibiótico em pó para minha filha. É só misturar com qualquer água?'",
            falaBoa:
              '"Quase isso! Use água filtrada ou fervida, mas já fria — a quente estraga o medicamento. Coloque até a marca do frasco em duas etapas, agitando bem entre elas. E o segredo: agite antes de TODA dose, porque o remédio assenta no fundo. Use sempre a seringa dosadora da caixa. Depois de pronta, ela tem validade própria — vou confirmar com o farmacêutico o prazo e se essa precisa de geladeira, combinado?"',
            falaEvitar:
              '"É, é só colocar água e dar uma colherada quando ela tiver febre." (água errada, medida errada, posologia errada — três riscos em uma frase)',
          },
          comparativo: {
            titulo: "Orientação completa vs. Orientação que gera risco",
            itens: [
              {
                nome: "Água para reconstituir",
                quando: "Certo: filtrada ou fervida e fria. Errado: água quente, da torneira ou suco.",
              },
              {
                nome: "Antes de cada dose",
                quando:
                  "Certo: agitar vigorosamente até ficar homogêneo. Errado: tirar a dose com o frasco parado — a concentração fica errada.",
              },
              {
                nome: "Medida da dose",
                quando:
                  "Certo: seringa ou copo dosador da embalagem. Errado: colher de sopa ou de chá da cozinha.",
              },
              {
                nome: "Depois de aberta",
                quando:
                  "Certo: respeitar a validade pós-reconstituição da bula (geralmente 7 a 14 dias) e a forma de conservação. Errado: guardar para a próxima gripe.",
              },
            ],
          },
          checklist: [
            "Orientar água filtrada ou fervida e fria, até a marca do frasco, em duas etapas.",
            "Reforçar: agitar bem antes de cada dose, sem exceção.",
            "Entregar apontando o dosador da embalagem e como usá-lo.",
            "Avisar que a validade depois de pronta é menor — conferir a bula.",
            "Confirmar com o farmacêutico se o medicamento vai à geladeira ou não.",
            "Reforçar o tratamento até o fim, mesmo com melhora dos sintomas.",
          ],
          quandoChamarFarmaceutico: [
            "Sempre na dispensação de antibióticos — a orientação final é dele.",
            "Dúvida sobre validade pós-reconstituição ou conservação do medicamento específico.",
            "Criança que vomitou a dose ou recusa o medicamento.",
            "Cliente que quer 'guardar o resto' para usar depois.",
          ],
          errosComuns: [
            "Não avisar que precisa agitar antes de cada dose.",
            "Deixar o cliente sair achando que a validade da caixa vale para a suspensão pronta.",
            "Aceitar a colher de cozinha como medida.",
            "Esquecer de orientar a conservação (geladeira vs. temperatura ambiente).",
          ],
          quiz: [
            q(
              "Por que é obrigatório agitar a suspensão antes de CADA dose?",
              [
                "Para o remédio ficar gelado",
                "Porque as partículas do medicamento assentam no fundo e a dose ficaria errada",
                "Para misturar o sabor",
                "É só um costume, não faz diferença",
              ],
              1,
              "Em uma suspensão, o ativo se deposita no fundo. Sem agitar, as primeiras doses saem fracas e as últimas, concentradas demais.",
            ),
            q(
              "Qual água é a correta para reconstituir um antibiótico em pó?",
              [
                "Água quente, para dissolver mais rápido",
                "Água filtrada ou fervida e já fria",
                "Água com gás",
                "Qualquer líquido, inclusive suco",
              ],
              1,
              "Água filtrada ou fervida e FRIA. Água quente pode degradar o princípio ativo e suco pode interferir no medicamento.",
            ),
            q(
              "A caixa do antibiótico diz validade 2027. Depois de reconstituído, ele vale até quando?",
              [
                "Até 2027, como diz a caixa",
                "Pelo prazo indicado na bula após a reconstituição — geralmente 7 a 14 dias",
                "Para sempre, se ficar na geladeira",
                "Apenas 24 horas em qualquer caso",
              ],
              1,
              "A validade da embalagem vale para o pó fechado. Depois de pronta, a suspensão tem prazo próprio definido na bula — normalmente entre 7 e 14 dias.",
            ),
            q(
              "O cliente diz que vai parar o antibiótico porque a filha já melhorou no terceiro dia. O que orientar?",
              [
                "Concordar — se melhorou, não precisa mais",
                "Orientar a completar todo o período prescrito e, se houver dúvida, falar com o farmacêutico",
                "Sugerir guardar o restante para a próxima infecção",
                "Indicar reduzir a dose pela metade",
              ],
              1,
              "Interromper antibiótico antes do prazo favorece a resistência bacteriana e o retorno da infecção. Tratamento completo, sempre.",
            ),
          ],
          xp: 70,
        },
        {
          id: "soro-fisiologico-aberto",
          titulo: "Soro fisiológico: onde guardar depois de aberto",
          duracaoMin: 6,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.primeirosSocorros,
          resumo:
            "Aberto, o soro deixa de ser estéril. Aprenda a orientar o destino certo do frasco para cada tipo de uso — e quando a resposta é simplesmente descartar.",
          resumoExecutivo: [
            "O soro fisiológico 0,9% sai da fábrica estéril — mas isso acaba no momento em que o frasco é aberto. Toda orientação parte daí.",
            "Uso que exige esterilidade (curativos, lavagem ocular, nebulização): usar na hora e descartar a sobra. Não existe 'guardar um pouquinho' para esses usos.",
            "Higiene nasal e limpezas simples: a prática segura é manter o frasco bem fechado, na geladeira, e descartar em até 24 a 48 horas — sempre conferindo a recomendação do fabricante na embalagem.",
            "Flaconetes (ampolas plásticas pequenas) são de uso único: abriu, usou, descartou. Essa é a opção mais prática para higiene nasal de bebês.",
            "Nunca usar soro que mudou de aspecto: turvo, com partículas ou cheiro estranho vai direto para o descarte.",
            "Dica de ouro no balcão: pergunte PARA QUE o cliente vai usar o soro antes de orientar — o destino do frasco aberto depende totalmente do uso.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'Abri um soro de 500 mL ontem para lavar o nariz do meu filho. Posso continuar usando?'",
            falaBoa:
              '"Para higiene nasal, o caminho é: frasco bem fechado, guardado na geladeira, e uso por no máximo um a dois dias — depois disso, descarte, porque ele perde a esterilidade ao abrir. Se aparecer qualquer mudança na cor ou partículas, descarte antes. Uma alternativa prática são os flaconetes pequenos de uso único: abre, usa e joga fora, sem sobra. Quer que eu te mostre?"',
            falaEvitar:
              '"Pode usar até acabar, soro não estraga." (errado: aberto, o soro contamina — e em uso nasal infantil o risco é ainda maior)',
          },
          comparativo: {
            titulo: "O destino do soro aberto depende do uso",
            itens: [
              {
                nome: "Curativo ou ferida",
                quando: "Exige esterilidade: usar imediatamente e descartar a sobra do frasco.",
              },
              {
                nome: "Lavagem ocular",
                quando: "Exige esterilidade: dose única, sem reaproveitamento. Sobrou? Descarta.",
              },
              {
                nome: "Higiene nasal",
                quando:
                  "Frasco fechado na geladeira por até 24–48h, conforme o fabricante. Flaconete de uso único é a opção mais segura.",
              },
              {
                nome: "Nebulização",
                quando:
                  "Usar volume novo a cada sessão. Soro parado no copinho do nebulizador também não se reaproveita.",
              },
            ],
          },
          checklist: [
            "Perguntar primeiro: 'para que você vai usar o soro?'",
            "Uso estéril (ferida, olho, nebulização): usar na hora, descartar a sobra.",
            "Higiene nasal: geladeira, bem fechado, no máximo 24–48 horas — conferindo a embalagem.",
            "Oferecer flaconetes de uso único quando fizer sentido para o cliente.",
            "Orientar descarte imediato se o líquido mudar de aspecto.",
          ],
          quandoChamarFarmaceutico: [
            "Uso do soro em recém-nascidos ou pós-cirúrgico.",
            "Cliente usando soro caseiro (água com sal) em ferida ou nos olhos.",
            "Dúvida sobre nebulização com medicamentos prescritos.",
          ],
          errosComuns: [
            "Dar uma resposta única sem perguntar o uso.",
            "Deixar o cliente reaproveitar soro em curativo ou nos olhos.",
            "Esquecer de citar o prazo curto após a abertura.",
            "Guardar o frasco aberto fora da geladeira, destampado ou com a tampa improvisada.",
          ],
          quiz: [
            q(
              "O que acontece com o soro fisiológico no momento em que o frasco é aberto?",
              [
                "Nada, ele continua estéril até a validade da embalagem",
                "Ele deixa de ser estéril e passa a ter prazo curto de uso, conforme o tipo de uso",
                "Ele vira água comum",
                "Ele só estraga se pegar sol",
              ],
              1,
              "Aberto, o soro perde a esterilidade. Para usos estéreis, descarta-se a sobra; para higiene nasal, prazo curto, fechado e refrigerado.",
            ),
            q(
              "Cliente quer guardar a sobra do soro usado em um curativo para usar de novo amanhã. Qual é a orientação?",
              [
                "Pode, se deixar na geladeira",
                "Pode, se ferver antes de usar",
                "Não: uso em ferida exige esterilidade — a sobra deve ser descartada",
                "Pode usar por até uma semana",
              ],
              2,
              "Curativos exigem soro estéril. Frasco aberto está contaminado para esse fim: usar na hora e descartar a sobra.",
            ),
            q(
              "Para higiene nasal diária de um bebê, qual é a opção mais prática e segura?",
              [
                "Um frasco grande aberto guardado no armário do banheiro",
                "Flaconetes de uso único: abriu, usou, descartou",
                "Soro caseiro de água com sal",
                "Qualquer soro vencido, já que é só para o nariz",
              ],
              1,
              "Flaconetes de uso único eliminam o risco da sobra contaminada. Soro caseiro não tem concentração controlada e não é recomendado.",
            ),
            q(
              "Onde deve ficar o frasco de soro aberto que será usado para higiene nasal nas próximas horas?",
              [
                "Em cima da pia do banheiro, destampado",
                "Bem fechado, na geladeira, por no máximo 24–48 horas conforme o fabricante",
                "No congelador, para conservar melhor",
                "Dentro do armário do quarto, por até um mês",
              ],
              1,
              "Bem fechado e refrigerado, por prazo curto (24–48h, conforme a embalagem). Congelar não é indicado e fora da geladeira a contaminação acelera.",
            ),
          ],
          xp: 70,
        },
        {
          id: "preparo-exames",
          titulo: "Preparo para exames: jejum, café e as dúvidas clássicas",
          duracaoMin: 7,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.glp1,
          resumo:
            "Quantas horas de jejum? Pode beber água? E o cafezinho? O guia para orientar o preparo dos exames mais comuns — sem inventar regra e sem contrariar o laboratório.",
          resumoExecutivo: [
            "Regra de ouro: quem define o preparo é o LABORATÓRIO e o pedido médico. O atendente orienta o padrão geral e sempre reforça: 'confirme com o laboratório'.",
            "Glicemia de jejum: jejum de 8 horas é o padrão. Água pura está liberada — e até ajuda na coleta. Café, chá, bala e chiclete quebram o jejum.",
            "Colesterol e triglicerídeos (perfil lipídico): muitos laboratórios já não exigem jejum de 12 horas, mas a palavra final é do pedido médico e do laboratório.",
            "Hemoglobina glicada (HbA1c): mostra a média da glicose dos últimos 3 meses e não exige jejum.",
            "Nas 24 horas antes da coleta: evitar álcool e exercício físico intenso, que alteram vários resultados. Dormir bem também conta.",
            "Medicamentos de uso contínuo: em geral NÃO se suspende por conta própria antes do exame — essa decisão é exclusiva do médico.",
            "Testes rápidos na farmácia: glicemia capilar pós-refeição se interpreta cerca de 2 horas depois de comer; pressão arterial pede 5 minutos de repouso e 30 minutos sem café, cigarro ou exercício.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'Vou fazer exame de sangue amanhã às 7h. Posso tomar meu remédio de pressão? E um cafezinho preto, pode?'",
            falaBoa:
              '"Ótimas perguntas! O café quebra o jejum — mesmo sem açúcar — então fica para depois da coleta. Água pura pode e deve. Sobre o remédio de pressão: nunca suspenda por conta própria; em geral os laboratórios orientam tomar com um pouco de água, mas confirme com o laboratório ou com o seu médico. Quer que o farmacêutico revise isso com você rapidinho?"',
            falaEvitar:
              '"Café preto pode, não tem caloria. E o remédio é melhor pular, para não atrapalhar o exame." (duas orientações erradas que podem comprometer o exame e a saúde do cliente)',
          },
          comparativo: {
            titulo: "Preparo padrão dos exames mais perguntados no balcão",
            itens: [
              {
                nome: "Glicemia de jejum",
                quando: "Jejum de 8 horas. Água pura liberada. Café, bala e chiclete quebram o jejum.",
              },
              {
                nome: "Colesterol / triglicerídeos",
                quando:
                  "Jejum nem sempre é exigido hoje em dia — seguir exatamente o que o laboratório e o médico pedirem.",
              },
              {
                nome: "Hemoglobina glicada (HbA1c)",
                quando: "Não exige jejum: reflete a média de glicose dos últimos 3 meses.",
              },
              {
                nome: "Aferição de pressão na farmácia",
                quando:
                  "5 minutos de repouso sentado, bexiga vazia, e 30 minutos sem café, cigarro ou exercício antes da medida.",
              },
            ],
          },
          checklist: [
            "Sempre fechar a orientação com: 'confirme o preparo com o seu laboratório'.",
            "Glicemia de jejum: 8 horas, água liberada.",
            "Avisar que café, chá, bala e chiclete quebram o jejum.",
            "Evitar álcool e exercício intenso nas 24h antes da coleta.",
            "Nunca orientar a suspensão de medicamento de uso contínuo — decisão médica.",
          ],
          quandoChamarFarmaceutico: [
            "Dúvida sobre tomar ou não um medicamento antes do exame.",
            "Cliente diabético com receio de jejum prolongado.",
            "Interpretação de qualquer resultado de exame.",
          ],
          errosComuns: [
            "Liberar o 'cafezinho preto' no jejum — ele interfere, sim.",
            "Inventar horas de jejum diferentes do que o laboratório pediu.",
            "Sugerir pausar medicamento contínuo 'para não alterar o exame'.",
            "Esquecer que exercício intenso na véspera também altera resultados.",
          ],
          quiz: [
            q(
              "Quantas horas de jejum são o padrão para a glicemia de jejum?",
              ["2 horas", "4 horas", "8 horas", "24 horas"],
              2,
              "O padrão é 8 horas de jejum, com água pura liberada. Sempre confirmando a orientação do laboratório.",
            ),
            q(
              "O cliente pergunta se café preto sem açúcar quebra o jejum do exame. Qual é a resposta correta?",
              [
                "Não quebra, porque não tem caloria",
                "Quebra: café interfere no jejum e fica para depois da coleta",
                "Só quebra se for com leite",
                "Depende da marca do café",
              ],
              1,
              "Mesmo sem açúcar, o café interfere e quebra o jejum. Apenas água pura está liberada.",
            ),
            q(
              "Cliente hipertenso vai colher sangue amanhã e pensa em pular o remédio de pressão. O que orientar?",
              [
                "Apoiar a ideia, para o exame sair mais limpo",
                "Orientar que medicamento contínuo não se suspende por conta própria — confirmar com o médico ou laboratório",
                "Sugerir tomar dose dobrada depois do exame",
                "Dizer que remédio de pressão não tem relação com exames",
              ],
              1,
              "Suspender medicamento contínuo por conta própria é risco real à saúde. A decisão é sempre do médico; o laboratório orienta como proceder no dia.",
            ),
            q(
              "Antes de aferir a pressão na farmácia, o ideal é que o cliente:",
              [
                "Tenha acabado de subir uma escada, para o coração aquecer",
                "Descanse 5 minutos sentado e esteja há 30 minutos sem café, cigarro ou exercício",
                "Tome um café para ficar alerta",
                "Fique em pé durante a medida",
              ],
              1,
              "Repouso de 5 minutos, bexiga vazia e 30 minutos sem café, cigarro ou exercício garantem uma medida confiável.",
            ),
          ],
          xp: 70,
        },
      ],
    },
    {
      id: "servicos-farmaceuticos",
      titulo: "Serviços Farmacêuticos: a Farmácia como Hub de Saúde",
      descricao:
        "Vacinas, testes rápidos, aferição de pressão, glicemia, aplicação de injetáveis e telessaúde: o que a farmácia oferece, como funciona e qual é o papel do atendente.",
      imagemHeroUrl: imagensCategoria.injetaveis,
      aulas: [
        {
          id: "panorama-servicos",
          titulo: "Panorama dos serviços farmacêuticos da farmácia",
          duracaoMin: 7,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.atendimentoAvancado,
          resumo:
            "A farmácia moderna vai muito além da prateleira: é um ponto de cuidado com serviços de saúde. Conheça o portfólio — como o divulgado pela Droga Raia — e o seu papel nele.",
          resumoExecutivo: [
            "Grandes redes, como a Droga Raia, oferecem um portfólio de serviços de saúde: vacinação, testes rápidos (como o de COVID-19), exames clínicos, serviços farmacêuticos como aferição de pressão e glicemia, aplicação de injetáveis, telessaúde e manipulação — a disponibilidade varia por farmácia.",
            "Base legal existe e é sólida: a RDC 197/2017 regula serviços como vacinação e aplicação de injetáveis; a RDC 978/2025 trata dos testes e exames; as Resoluções CFF 585 e 586 definem as atribuições clínicas do farmacêutico.",
            "Quem EXECUTA os serviços é o farmacêutico. O atendente é a porta de entrada: identifica a necessidade, apresenta o serviço, agenda e prepara o cliente.",
            "Serviço é cuidado contínuo: o cliente que afere a pressão todo mês cria vínculo com a farmácia — e tem a saúde acompanhada de verdade.",
            "A sala de serviços farmacêuticos é um ambiente exclusivo, limpo e com material adequado — apresentá-la ao cliente gera confiança.",
            "Oferecer serviço é oferecer saúde, nunca empurrar venda: a sugestão certa é a que nasce de uma necessidade real do cliente.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'Meu médico pediu para eu acompanhar a pressão toda semana, mas o aparelho de casa quebrou.'",
            falaBoa:
              '"Aqui mesmo a gente resolve! A farmácia tem o serviço de aferição de pressão, feito pelo farmacêutico em uma sala reservada. Você pode vir toda semana, e o resultado fica registrado para você mostrar ao médico. Quer que eu já veja um horário para hoje?"',
            falaEvitar:
              '"Então aproveita e leva um aparelho novo, está em promoção." (transforma uma necessidade de cuidado em pressão de venda — o serviço resolvia melhor)',
          },
          comparativo: {
            titulo: "Portfólio de serviços e o papel de cada um",
            itens: [
              {
                nome: "Vacinação",
                quando:
                  "Imunização de adultos e calendário sazonal (como gripe). Aplicada pelo farmacêutico habilitado em sala exclusiva.",
              },
              {
                nome: "Testes rápidos e exames clínicos",
                quando:
                  "COVID-19, glicemia, perfil lipídico e outros — resultados rápidos com aconselhamento e encaminhamento quando necessário.",
              },
              {
                nome: "Aferição de pressão e aplicação de injetáveis",
                quando:
                  "Serviços do dia a dia: acompanhamento da pressão e aplicação segura de medicamentos prescritos.",
              },
              {
                nome: "Telessaúde e manipulação",
                quando:
                  "Consulta a distância com profissional de saúde e fórmulas personalizadas sob prescrição — conforme disponibilidade da farmácia.",
              },
            ],
          },
          checklist: [
            "Conhecer a lista de serviços disponíveis NA SUA farmácia (varia por unidade).",
            "Saber apresentar cada serviço em uma frase simples e verdadeira.",
            "Identificar oportunidades de cuidado na conversa e oferecer o serviço certo.",
            "Encaminhar a execução sempre ao farmacêutico.",
            "Registrar e valorizar o retorno do cliente para acompanhamento.",
          ],
          quandoChamarFarmaceutico: [
            "Execução de qualquer serviço: vacina, teste, aferição, aplicação.",
            "Dúvida clínica sobre qual serviço atende a necessidade do cliente.",
            "Resultados alterados em qualquer teste realizado na farmácia.",
          ],
          errosComuns: [
            "Não conhecer os serviços da própria farmácia e perder a chance de cuidar.",
            "Prometer serviço que a unidade não oferece.",
            "Tratar o serviço como item de venda em vez de ato de cuidado.",
            "Tentar executar um serviço que é privativo do farmacêutico.",
          ],
          quiz: [
            q(
              "Quem executa os serviços farmacêuticos (vacinas, testes, aferição) na farmácia?",
              [
                "Qualquer funcionário treinado",
                "O farmacêutico habilitado",
                "O gerente da farmácia",
                "O próprio cliente, com supervisão",
              ],
              1,
              "A execução é do farmacêutico habilitado, em ambiente adequado. O atendente identifica a necessidade, apresenta e agenda.",
            ),
            q(
              "Qual norma regulamenta serviços como vacinação e aplicação de injetáveis em farmácias?",
              ["RDC 197/2017", "Portaria 344/1998", "RDC 67/2007", "Lei 8.078/1990"],
              0,
              "A RDC 197/2017 da Anvisa estabelece os requisitos para a prestação desses serviços em farmácias, incluindo estrutura e registro.",
            ),
            q(
              "Qual é o papel do ATENDENTE no portfólio de serviços farmacêuticos?",
              [
                "Aplicar as vacinas quando o farmacêutico estiver ocupado",
                "Identificar necessidades, apresentar os serviços, agendar e preparar o cliente",
                "Interpretar os resultados dos testes",
                "Nenhum — serviços não são assunto do atendente",
              ],
              1,
              "O atendente é a porta de entrada do cuidado: percebe a necessidade, apresenta o serviço com clareza e conecta o cliente ao farmacêutico.",
            ),
            q(
              "Cliente comenta que precisa acompanhar a pressão semanalmente. Qual é a melhor resposta?",
              [
                "Sugerir comprar um aparelho em promoção",
                "Apresentar o serviço de aferição da farmácia e oferecer o agendamento",
                "Dizer que pressão só se mede no hospital",
                "Ensinar o cliente a medir no pulso com o dedo",
              ],
              1,
              "A necessidade real é acompanhamento — e o serviço de aferição resolve com qualidade, cria vínculo e mantém o registro para o médico.",
            ),
          ],
          xp: 60,
        },
        {
          id: "aferir-pressao",
          titulo: "Aferição de pressão arterial: técnica e leitura dos valores",
          duracaoMin: 7,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.seguranca,
          resumo:
            "Uma medida de pressão malfeita gera susto à toa — ou falsa tranquilidade. Entenda a técnica correta e as faixas de valores para apoiar o serviço com segurança.",
          resumoExecutivo: [
            "Preparo correto: 5 minutos de repouso, sentado, pés no chão, costas apoiadas, bexiga vazia e 30 minutos sem café, cigarro ou exercício. Sem isso, a medida não vale.",
            "Posição: braço apoiado na altura do coração e manguito do tamanho certo para o braço — manguito errado é uma das maiores fontes de erro.",
            "Repetição: fazem-se 2 a 3 medidas com 1 minuto de intervalo; considera-se a média das últimas duas. Na primeira avaliação, mede-se nos dois braços.",
            "Leitura das faixas: até 120/80 é o cenário ideal; entre 120-139/80-89 é faixa de atenção com mudança de estilo de vida; 140/90 ou mais pede avaliação médica.",
            "Situação crítica: 180/110 ou mais COM sintomas (dor no peito, falta de ar, dor de cabeça intensa, visão turva) é emergência — encaminhamento imediato ao pronto-socorro.",
            "O atendente prepara e acolhe; o farmacêutico afere, interpreta e conduz. Essa dupla funciona.",
          ],
          comparativo: {
            titulo: "Faixas de pressão e a conduta esperada",
            itens: [
              {
                nome: "Até 120/80 mmHg",
                quando: "Faixa ideal: parabenizar e incentivar os bons hábitos que trouxeram até aqui.",
              },
              {
                nome: "120–139 / 80–89 mmHg",
                quando:
                  "Atenção: orientar estilo de vida (sal, atividade física, peso) e nova medida em algumas semanas.",
              },
              {
                nome: "140/90 mmHg ou mais",
                quando: "Avaliação médica: o farmacêutico orienta e encaminha para investigação.",
              },
              {
                nome: "180/110 mmHg ou mais com sintomas",
                quando:
                  "Emergência hipertensiva: pronto-socorro imediatamente. Sem sintomas, avaliação médica urgente em até 24 horas.",
              },
            ],
          },
          checklist: [
            "Garantir o preparo: repouso de 5 min, bexiga vazia, sem café/cigarro/exercício há 30 min.",
            "Braço apoiado na altura do coração, manguito adequado.",
            "Cliente em silêncio durante a medida (falar altera o resultado).",
            "2 a 3 medidas com intervalo de 1 minuto.",
            "Valores altos: manter a calma do cliente e acionar o farmacêutico na hora.",
          ],
          quandoChamarFarmaceutico: [
            "Toda aferição — o serviço é executado e interpretado por ele.",
            "Qualquer valor a partir de 140/90 mmHg.",
            "Valores muito altos ou cliente com sintomas: acionar imediatamente.",
          ],
          errosComuns: [
            "Medir com o cliente recém-chegado da rua, sem repouso.",
            "Conversar com o cliente durante a medida.",
            "Usar manguito pequeno em braço grande (superestima o valor).",
            "Dar 'diagnóstico de pressão alta' com base em uma única medida.",
          ],
          quiz: [
            q(
              "Quanto tempo de repouso o cliente precisa antes da aferição de pressão?",
              ["Nenhum, pode medir na hora", "1 minuto", "5 minutos sentado", "30 minutos deitado"],
              2,
              "São 5 minutos de repouso, sentado, com costas apoiadas e pés no chão — além de 30 minutos sem café, cigarro ou exercício.",
            ),
            q(
              "Por que o tamanho do manguito importa tanto?",
              [
                "É só questão de conforto",
                "Manguito inadequado distorce o resultado — pequeno demais superestima a pressão",
                "Manguito grande mede mais rápido",
                "Não importa, todos os manguitos são iguais",
              ],
              1,
              "O manguito precisa ser proporcional ao braço. Errar o tamanho é uma das principais causas de medidas falsamente altas ou baixas.",
            ),
            q(
              "Cliente afere 185/112 mmHg e relata dor de cabeça forte e visão turva. Qual é a conduta?",
              [
                "Pedir para voltar amanhã e repetir a medida",
                "Oferecer um chá calmante e medir de novo em 1 hora",
                "Encaminhamento imediato ao pronto-socorro — é uma emergência hipertensiva",
                "Vender um anti-hipertensivo sem receita",
              ],
              2,
              "Pressão a partir de 180/110 mmHg COM sintomas é emergência hipertensiva: o farmacêutico orienta o encaminhamento imediato ao pronto-socorro.",
            ),
            q(
              "Na primeira aferição de um cliente, a recomendação é:",
              [
                "Medir apenas no braço esquerdo, sempre",
                "Medir nos dois braços e considerar o maior valor",
                "Medir no pulso, que é mais prático",
                "Medir três vezes seguidas sem intervalo",
              ],
              1,
              "Na primeira avaliação mede-se nos dois braços (considerando o maior valor) e fazem-se 2 a 3 medidas com 1 minuto de intervalo.",
            ),
          ],
          xp: 70,
        },
        {
          id: "glicemia-capilar",
          titulo: "Glicemia capilar: o teste da pontinha do dedo, do jeito certo",
          duracaoMin: 6,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.glp1,
          resumo:
            "Furar o dedo parece simples — mas há técnica, interpretação e descarte seguro envolvidos. Entenda o procedimento para apoiar o serviço como profissional.",
          resumoExecutivo: [
            "Antes do teste: higienizar as mãos do cliente e o dedo escolhido. Resíduo de comida ou álcool ainda úmido no dedo altera o resultado.",
            "O furo certo é na LATERAL da ponta do dedo: dói menos e tem boa circulação. A primeira gota se despreza (pode vir contaminada); a leitura usa a segunda gota.",
            "Resultado em segundos: o aparelho lê a fita em 5 a 10 segundos. A lanceta usada vai direto para o coletor de perfurocortantes — nunca para o lixo comum.",
            "Interpretação em jejum: 70–99 normal; 100–125 atenção (pré-diabetes); 126 ou mais pede confirmação médica. Cerca de 2h após comer: abaixo de 140 é o esperado.",
            "Abaixo de 70 mg/dL é hipoglicemia: o farmacêutico age na hora com a 'regra dos 15' — 15 g de carboidrato rápido, esperar 15 minutos e medir de novo.",
            "O teste da farmácia é triagem e acompanhamento: ele orienta, mas o diagnóstico é sempre do médico, com exames de laboratório.",
          ],
          comparativo: {
            titulo: "Detalhes da técnica que mudam o resultado",
            itens: [
              {
                nome: "Local do furo",
                quando: "Lateral da ponta do dedo: menos dor e amostra de qualidade. Centro da polpa dói mais.",
              },
              {
                nome: "Primeira gota",
                quando: "Despreza-se: pode vir com resíduos e distorcer a leitura. Usa-se a segunda gota.",
              },
              {
                nome: "Mãos do cliente",
                quando:
                  "Higienizadas e secas. Açúcar de uma fruta manuseada antes do teste pode 'inventar' uma hiperglicemia.",
              },
              {
                nome: "Descarte",
                quando: "Lanceta e fita em coletor de perfurocortantes — segurança de todos, exigência sanitária.",
              },
            ],
          },
          checklist: [
            "Higienizar as mãos do cliente antes do teste.",
            "Furo na lateral da ponta do dedo.",
            "Desprezar a primeira gota; ler com a segunda.",
            "Descartar lanceta no coletor de perfurocortantes.",
            "Valores alterados: farmacêutico orienta e encaminha — sem alarde e sem diagnóstico.",
          ],
          quandoChamarFarmaceutico: [
            "Todo teste — execução e interpretação são dele.",
            "Resultado abaixo de 70 mg/dL (hipoglicemia): ação imediata.",
            "Resultado em jejum a partir de 126 mg/dL: orientação e encaminhamento.",
          ],
          errosComuns: [
            "Usar a primeira gota de sangue na fita.",
            "Furar o centro da polpa do dedo (dói mais).",
            "Descartar a lanceta no lixo comum.",
            "Anunciar 'você tem diabetes' com base em um teste capilar.",
          ],
          quiz: [
            q(
              "Por que a primeira gota de sangue é desprezada no teste de glicemia?",
              [
                "Porque é mais escura",
                "Porque pode vir contaminada e distorcer o resultado",
                "Para o cliente sentir menos dor",
                "Por superstição da rotina",
              ],
              1,
              "A primeira gota pode trazer resíduos da pele e fluidos que alteram a leitura. A segunda gota dá o resultado confiável.",
            ),
            q(
              "Qual é o local correto do furo para o teste de glicemia capilar?",
              [
                "O centro da polpa do dedo",
                "A lateral da ponta do dedo",
                "A palma da mão",
                "O lóbulo da orelha, sempre",
              ],
              1,
              "A lateral da ponta do dedo tem boa vascularização e menos terminações de dor — amostra boa com menos desconforto.",
            ),
            q(
              "Onde a lanceta usada deve ser descartada?",
              [
                "No lixo comum, bem embrulhada",
                "No lixo reciclável",
                "No coletor de perfurocortantes",
                "Na pia, com água corrente",
              ],
              2,
              "Material perfurocortante vai sempre para o coletor próprio — proteção da equipe, dos clientes e exigência sanitária.",
            ),
            q(
              "O que é a 'regra dos 15' usada na hipoglicemia?",
              [
                "Esperar 15 horas antes de comer",
                "15 g de carboidrato de ação rápida, aguardar 15 minutos e medir novamente",
                "Caminhar 15 minutos para gastar o açúcar",
                "Tomar 15 goles de água",
              ],
              1,
              "Na glicose abaixo de 70 mg/dL: 15 g de carboidrato rápido (suco, açúcar), esperar 15 minutos e repetir a medida — conduzido pelo farmacêutico.",
            ),
          ],
          xp: 70,
        },
        {
          id: "vacinacao-injetaveis",
          titulo: "Vacinação e injetáveis: cadeia do frio e cuidado pós-aplicação",
          duracaoMin: 7,
          nivel: "avancado",
          imagemHeroUrl: imagensCategoria.injetaveis,
          resumo:
            "Vacina é tecnologia sensível: do armazenamento entre 2 e 8 °C até os 20 minutos de observação após a aplicação, cada detalhe protege o cliente.",
          resumoExecutivo: [
            "Cadeia do frio é inegociável: vacinas vivem entre +2 °C e +8 °C, nunca congelam, e a temperatura da geladeira é registrada todos os dias — rotina que também aparece no checklist diário da farmácia.",
            "Estrutura exigida (RDC 197/2017): sala exclusiva, pia, materiais adequados e plano para emergências, incluindo medicação e procedimento para reação alérgica grave.",
            "Aplicação é ato do farmacêutico habilitado, com registro no sistema (como o Conecte SUS, no caso de vacinas) e no cartão do cliente.",
            "Depois da aplicação, o cliente permanece 20 minutos em observação na farmácia — a maioria das reações graves, embora raras, acontece nesse período.",
            "Orientações pós-vacina para o cliente: reações leves como dor local e febre baixa podem ocorrer; compressa fria ajuda no local; sintomas intensos pedem contato com o serviço de saúde.",
            "O atendente brilha aqui no acolhimento: organiza o fluxo, tranquiliza quem tem medo de agulha e garante que ninguém vá embora antes dos 20 minutos.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'Tomei a vacina da gripe aí com vocês e meu braço está dolorido. É normal?'",
            falaBoa:
              '"É uma reação comum e esperada, viu? Dor no local e até uma febre baixa podem acontecer nos primeiros dias. Uma compressa fria no braço ajuda bastante. Agora, se a dor aumentar muito, a febre passar de 38,5 °C ou aparecer qualquer sintoma forte, fale com a gente ou procure um serviço de saúde. Quer conversar com o farmacêutico para ele avaliar?"',
            falaEvitar:
              '"Vixe, vacina não era para doer. Toma um anti-inflamatório forte que passa." (minimiza, assusta e ainda indica medicamento — três erros em uma frase)',
          },
          comparativo: {
            titulo: "Cadeia do frio: o que protege a vacina",
            itens: [
              {
                nome: "Temperatura",
                quando: "Sempre entre +2 °C e +8 °C. Congelou? A vacina perde a validade — descarte e registro.",
              },
              {
                nome: "Monitoramento",
                quando: "Termômetro calibrado e registro diário da temperatura — sem exceção, inclusive fins de semana.",
              },
              {
                nome: "Transporte",
                quando: "Caixa térmica validada com monitoramento de temperatura do início ao fim.",
              },
              {
                nome: "Energia",
                quando: "Plano para queda de luz (como no-break) — a geladeira de vacinas não pode 'esperar a luz voltar'.",
              },
            ],
          },
          checklist: [
            "Conferir e registrar a temperatura da geladeira de vacinas diariamente.",
            "Manter a sala de aplicação organizada e abastecida.",
            "Acolher o cliente e explicar o fluxo: aplicação + 20 minutos de observação.",
            "Garantir o registro da dose no sistema e no cartão do cliente.",
            "Orientar reações esperadas e sinais que pedem atenção.",
          ],
          quandoChamarFarmaceutico: [
            "Toda aplicação — é ato privativo dele.",
            "Qualquer sinal de reação durante a observação: acionar imediatamente.",
            "Dúvidas sobre calendário vacinal, doses e intervalos.",
          ],
          errosComuns: [
            "Deixar o cliente ir embora logo após a aplicação, sem os 20 minutos de observação.",
            "Esquecer o registro diário de temperatura da geladeira.",
            "Guardar alimentos ou outros itens na geladeira de vacinas.",
            "Minimizar o medo de agulha em vez de acolher.",
          ],
          quiz: [
            q(
              "Qual é a faixa de temperatura correta para conservar vacinas?",
              ["0 °C a +2 °C", "+2 °C a +8 °C", "+8 °C a +15 °C", "-18 °C (congeladas)"],
              1,
              "Entre +2 °C e +8 °C, sem nunca congelar. Congelamento inutiliza a vacina, mesmo que ela 'pareça' normal depois.",
            ),
            q(
              "Por que o cliente deve aguardar 20 minutos na farmácia após a vacina?",
              [
                "Para preencher a pesquisa de satisfação",
                "Porque as reações graves, embora raras, costumam ocorrer nesse período inicial",
                "Para a vacina 'assentar' no braço",
                "Por exigência do plano de saúde",
              ],
              1,
              "A observação de 20 minutos permite resposta imediata da equipe em caso de reação alérgica grave — que é rara, mas acontece tipicamente logo após a aplicação.",
            ),
            q(
              "A energia da farmácia caiu durante a madrugada. Qual é a preocupação imediata com a geladeira de vacinas?",
              [
                "Nenhuma, vacina aguenta qualquer temperatura por um dia",
                "Verificar o registro de temperatura e acionar o plano de contingência — a cadeia do frio pode ter sido quebrada",
                "Recongelar as vacinas para compensar",
                "Apenas limpar a geladeira",
              ],
              1,
              "Queda de energia ameaça a faixa de +2 °C a +8 °C. Verifica-se o histórico de temperatura e o farmacêutico decide o destino das doses conforme o protocolo.",
            ),
            q(
              "Cliente vacinado ontem relata dor leve no braço. Qual é a orientação adequada?",
              [
                "Explicar que é reação comum, sugerir compressa fria e indicar atenção a sintomas intensos",
                "Dizer que houve erro na aplicação",
                "Indicar um antibiótico para prevenir infecção",
                "Recomendar nunca mais se vacinar",
              ],
              0,
              "Dor local e febre baixa são reações esperadas e passageiras. Compressa fria ajuda; sintomas intensos ou persistentes pedem avaliação profissional.",
            ),
          ],
          xp: 80,
        },
      ],
    },
  ],
};
