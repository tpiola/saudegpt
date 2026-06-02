import type { Aula, Trilha } from "./types";
import { q } from "./_helpers";
import { modulosBemEstarExtra } from "./modulos-bem-estar-extra";
import { midiaPadraoPorAulaId } from "./midia-catalogo";
import { videosEducativos } from "./videos-educativos";

function comMidia(aula: Aula): Aula {
  const m = midiaPadraoPorAulaId(aula.id);
  return {
    ...aula,
    imagemHeroUrl: aula.imagemHeroUrl ?? m.imagemHeroUrl,
    produtos: aula.produtos ?? m.produtos,
    marcas: aula.marcas ?? m.marcas,
  };
}

// Trilha 1 — preserva integralmente o manual de perfumaria, reorganizado em
// microlições com camada contemporânea (jornada do cliente, cross-sell ético).
export const trilhaPerfumaria: Trilha = {
  id: "perfumaria",
  numero: 1,
  titulo: "Perfumaria, Bem-Estar e Saúde do Dia a Dia",
  subtitulo: "Atendente Premium I",
  descricao:
    "Acolhimento, repertório de balcão e autocuidado. Aprenda a entender a necessidade do cliente — não apenas a prateleira — em higiene, beleza, linha infantil e dermocosméticos.",
  nivelFaixa: "Do iniciante ao intermediário",
  icone: "spa",
  modulos: [
    {
      id: "cuidados-higiene",
      titulo: "Cuidados Masculinos e Higiene Diária",
      descricao: "Barba, higiene oral, banho e proteção do dia a dia.",
      aulas: [
        {
          id: "barba",
          titulo: "Barba e cuidados masculinos",
          duracaoMin: 6,
          nivel: "basico",
          videoUrl: videosEducativos.barba,
          resumo:
            "Como orientar o cliente que faz a barba, evitando irritação, foliculite e pelos encravados.",
          resumoExecutivo: [
            "Pele sensível pede produtos sem álcool e lâmina de boa qualidade; o atrito é o maior causador de irritação.",
            "A sequência ideal é amolecer o pelo (água morna/gel), barbear no sentido do fio e hidratar depois.",
            "Pós-barba calmante reduz ardência; barba longa pede óleo/balm para maciez e disciplina do fio.",
          ],
          comparativo: {
            titulo: "Espuma x Gel x Óleo de barbear",
            itens: [
              { nome: "Espuma", quando: "Barba rápida, boa para iniciantes." },
              {
                nome: "Gel transparente",
                quando: "Quem desenha contornos e precisa enxergar a pele.",
              },
              {
                nome: "Óleo de barbear",
                quando: "Pele seca/sensível, maior deslize da lâmina.",
              },
            ],
          },
          simulacao: {
            cliente: "Homem com vermelhidão e ardência após barbear.",
            falaBoa:
              "Posso te perguntar como você faz a barba hoje? Vermelhidão costuma ser atrito. Sugiro lâmina nova, gel sem álcool e um pós-barba calmante. Se a irritação persistir, vale avaliação dermatológica.",
            falaEvitar: "Leva esse aqui que é o mais vendido.",
          },
          checklist: [
            "Perguntar sobre sensibilidade e produtos atuais.",
            "Indicar preparo da pele + pós-barba.",
            "Reforçar troca regular da lâmina.",
          ],
          quandoChamarFarmaceutico: [
            "Lesões com pus, dor intensa ou que não cicatrizam.",
            "Suspeita de infecção (foliculite extensa).",
          ],
          errosComuns: [
            "Indicar produto com álcool para pele já irritada.",
            "Empurrar o item mais caro sem entender a necessidade.",
          ],
          quiz: [
            q(
              "Cliente relata ardência forte após barbear. Qual a melhor conduta inicial?",
              [
                "Indicar o aftershave mais perfumado.",
                "Investigar a rotina e sugerir gel sem álcool + pós-barba calmante.",
                "Dizer que é normal e não fazer nada.",
                "Recomendar antibiótico oral.",
              ],
              1,
              "Vermelhidão costuma ser atrito; investiga-se a rotina e oferece-se produto calmante, encaminhando ao farmacêutico se houver sinais de infecção.",
            ),
          ],
          xp: 50,
        },
        {
          id: "higiene-oral",
          titulo: "Higiene oral",
          duracaoMin: 6,
          nivel: "basico",
          videoUrl: videosEducativos.higieneOral,
          resumo:
            "Escovas, cremes dentais, fio, enxaguantes e quando indicar cada item conforme a necessidade.",
          resumoExecutivo: [
            "Creme com flúor é o padrão para prevenção de cárie; concentração importa, sobretudo em crianças.",
            "Escova de cerdas macias protege a gengiva; média/dura podem causar retração.",
            "Enxaguante com álcool não é para uso contínuo em todos; sensibilidade pede creme específico.",
          ],
          comparativo: {
            titulo: "Necessidade x Produto",
            itens: [
              {
                nome: "Sensibilidade",
                quando: "Creme dessensibilizante, escova macia.",
              },
              {
                nome: "Gengiva inflamada",
                quando: "Enxaguante com clorexidina (orientar tempo de uso).",
              },
              {
                nome: "Aparelho ortodôntico",
                quando: "Escova interdental e fio próprio.",
              },
            ],
          },
          checklist: [
            "Perguntar sobre sensibilidade, gengiva e aparelho.",
            "Reforçar escovação + fio diário.",
            "Orientar uso correto de enxaguantes.",
          ],
          quandoChamarFarmaceutico: [
            "Dor de dente intensa, sangramento gengival persistente.",
            "Aftas que não cicatrizam em duas semanas.",
          ],
          errosComuns: [
            "Indicar enxaguante com álcool para uso contínuo sem critério.",
            "Sugerir escova dura por achar que 'limpa mais'.",
          ],
          quiz: [
            q(
              "O que protege melhor a gengiva no dia a dia?",
              [
                "Escova de cerdas duras",
                "Escova de cerdas macias",
                "Não usar fio dental",
                "Enxaguante com álcool sempre",
              ],
              1,
              "Cerdas macias limpam bem e reduzem o risco de retração gengival.",
            ),
          ],
          xp: 50,
        },
        {
          id: "sabonetes",
          titulo: "Sabonetes",
          duracaoMin: 5,
          nivel: "basico",
          videoUrl: videosEducativos.higieneMaos,
          resumo: "Barra, líquido, glicerinado, antibacteriano e esfoliante: para quem é cada um.",
          resumoExecutivo: [
            "Pele seca se beneficia de sabonete hidratante/glicerinado; antibacteriano não é para uso diário em todo corpo.",
            "Sabonete íntimo tem pH específico — orientar e não substituir por sabonete comum.",
            "Esfoliantes são para uso pontual, não diário.",
          ],
          checklist: [
            "Identificar tipo de pele e objetivo.",
            "Orientar frequência de uso.",
            "Diferenciar sabonete íntimo de comum.",
          ],
          quandoChamarFarmaceutico: ["Lesões de pele, coceira intensa ou alergias recorrentes."],
          errosComuns: ["Indicar antibacteriano para uso diário no corpo todo."],
          quiz: [
            q(
              "Para pele seca, qual a melhor escolha?",
              [
                "Antibacteriano diário",
                "Esfoliante diário",
                "Sabonete hidratante/glicerinado",
                "Sabonete íntimo",
              ],
              2,
              "Pele seca pede sabonete hidratante; antibacteriano e esfoliante diários ressecam.",
            ),
          ],
          xp: 40,
        },
        {
          id: "acessorios-banho",
          titulo: "Acessórios para banho",
          duracaoMin: 4,
          nivel: "basico",
          videoUrl: videosEducativos.higieneMaos,
          resumo: "Esponjas, buchas, escovas corporais e higienização correta dos acessórios.",
          resumoExecutivo: [
            "Buchas e esponjas acumulam microrganismos — orientar troca e secagem.",
            "Escovas de cabo ajudam idosos e gestantes a alcançar as costas e pés.",
          ],
          checklist: [
            "Sugerir item conforme mobilidade do cliente.",
            "Reforçar higiene e troca do acessório.",
          ],
          quandoChamarFarmaceutico: ["Lesões que pioram com uso de buchas/esfoliação."],
          errosComuns: ["Esquecer de orientar a higienização do acessório."],
          quiz: [
            q(
              "Por que orientar a troca de buchas e esponjas?",
              [
                "Por estética",
                "Porque acumulam microrganismos",
                "Para vender mais",
                "Não é necessário",
              ],
              1,
              "Acessórios úmidos acumulam microrganismos; troca e secagem são importantes.",
            ),
          ],
          xp: 35,
        },
        {
          id: "higiene-pessoal",
          titulo: "Higiene pessoal",
          duracaoMin: 5,
          nivel: "basico",
          videoUrl: videosEducativos.higieneMaos,
          resumo:
            "Cuidados gerais, absorventes, lenços, antissépticos de uso doméstico e bem-estar.",
          resumoExecutivo: [
            "Atendimento sensível: respeito e discrição em itens íntimos.",
            "Saber posicionar opções (absorvente, coletor, calcinha absorvente) sem julgamento.",
          ],
          checklist: ["Atender com discrição.", "Oferecer alternativas sem impor."],
          quandoChamarFarmaceutico: ["Sintomas de infecção, odor forte, coceira persistente."],
          errosComuns: ["Tratar itens íntimos com constrangimento ou pressa."],
          quiz: [
            q(
              "Qual postura ideal em itens de higiene íntima?",
              [
                "Pressa e constrangimento",
                "Discrição e respeito",
                "Insistir no mais caro",
                "Ignorar dúvidas",
              ],
              1,
              "Discrição e respeito constroem confiança e fidelizam o cliente.",
            ),
          ],
          xp: 35,
        },
        {
          id: "desodorantes",
          titulo: "Desodorantes e antitranspirantes",
          duracaoMin: 5,
          nivel: "basico",
          videoUrl: videosEducativos.higieneMaos,
          resumo: "Diferença entre desodorante e antitranspirante, formatos e pele sensível.",
          resumoExecutivo: [
            "Desodorante combate odor; antitranspirante reduz o suor (sais de alumínio).",
            "Pele sensível e axila irritada pedem versões sem álcool/sem perfume.",
            "Roll-on, aerossol, creme e stick atendem preferências diferentes.",
          ],
          comparativo: {
            titulo: "Desodorante x Antitranspirante",
            itens: [
              {
                nome: "Desodorante",
                quando: "Foco em odor, sem reduzir suor.",
              },
              {
                nome: "Antitranspirante",
                quando: "Suor excessivo; reduz transpiração.",
              },
            ],
          },
          checklist: [
            "Diferenciar odor x suor.",
            "Oferecer versão para pele sensível quando indicado.",
          ],
          quandoChamarFarmaceutico: [
            "Suor excessivo incapacitante (hiperidrose) ou irritação persistente.",
          ],
          errosComuns: ["Tratar desodorante e antitranspirante como sinônimos."],
          quiz: [
            q(
              "Qual reduz a transpiração?",
              ["Desodorante comum", "Antitranspirante", "Perfume", "Sabonete"],
              1,
              "Antitranspirantes contêm sais de alumínio que reduzem o suor.",
            ),
          ],
          xp: 40,
        },
      ],
    },
    {
      id: "pele-beleza",
      titulo: "Pele, Beleza e Dermocosméticos",
      descricao: "Fotoproteção, maquiagem, unhas e a camada técnica dos dermocosméticos.",
      aulas: [
        {
          id: "pele-fotoprotecao",
          titulo: "Pele e fotoproteção",
          duracaoMin: 7,
          nivel: "intermediario",
          videoUrl: videosEducativos.fotoprotecao,
          resumo: "Tipos de pele, limpeza, hidratação e o papel central do protetor solar.",
          resumoExecutivo: [
            "Rotina base: limpar, hidratar e proteger; fotoproteção é diária, mesmo em dias nublados.",
            "FPS mínimo 30 para o dia a dia; reaplicar a cada 2h em exposição.",
            "Pele oleosa pede toque seco/oil-free; pele seca pede textura mais rica.",
          ],
          comparativo: {
            titulo: "Tipo de pele x Textura do protetor",
            itens: [
              { nome: "Oleosa/acneica", quando: "Gel, oil-free, toque seco." },
              { nome: "Seca", quando: "Creme, com hidratação extra." },
              {
                nome: "Com manchas",
                quando: "Com cor/antioxidantes (orientar dermocosmético).",
              },
            ],
          },
          simulacao: {
            cliente: "Cliente quer 'um creme bom para o rosto', pele oleosa.",
            falaBoa:
              "Pela pele oleosa, sugiro protetor oil-free com toque seco e um hidratante leve. Posso te mostrar como usar de manhã e reaplicar ao longo do dia?",
            falaEvitar: "Esse creme aqui é o mais caro, então é o melhor.",
          },
          checklist: [
            "Identificar tipo de pele.",
            "Reforçar FPS diário e reaplicação.",
            "Sugerir rotina simples (3 passos).",
          ],
          quandoChamarFarmaceutico: [
            "Lesões suspeitas, manchas que mudam de cor/tamanho.",
            "Acne intensa/dolorosa, dúvida sobre interação com tratamento médico.",
          ],
          errosComuns: [
            "Indicar FPS baixo para o dia a dia.",
            "Ignorar o tipo de pele ao recomendar textura.",
          ],
          quiz: [
            q(
              "Qual a recomendação geral de fotoproteção diária?",
              [
                "FPS só na praia",
                "FPS 30+ todos os dias com reaplicação",
                "Não precisa em dia nublado",
                "Apenas hidratante",
              ],
              1,
              "A fotoproteção é diária; FPS 30+ com reaplicação a cada 2h em exposição.",
            ),
          ],
          xp: 60,
        },
        {
          id: "maquiagem",
          titulo: "Maquiagem",
          duracaoMin: 6,
          nivel: "basico",
          videoUrl: videosEducativos.skincareBasico,
          resumo: "Base, corretivo, pó, tons de pele e produtos para pele sensível/acneica.",
          resumoExecutivo: [
            "Identificar subtom (quente/frio/neutro) ajuda a acertar a base.",
            "Produtos não comedogênicos para pele acneica; remover sempre antes de dormir.",
          ],
          checklist: ["Ajudar na escolha do tom.", "Reforçar remoção e higiene de pincéis."],
          quandoChamarFarmaceutico: ["Reações alérgicas a cosméticos."],
          errosComuns: ["Indicar base muito clara/escura sem testar na mandíbula."],
          quiz: [
            q(
              "Para pele acneica, prefira produtos:",
              ["Comedogênicos", "Não comedogênicos", "Sem validade", "Mais perfumados"],
              1,
              "Não comedogênicos não obstruem os poros, reduzindo o agravamento da acne.",
            ),
          ],
          xp: 40,
        },
        {
          id: "unhas",
          titulo: "Unhas",
          duracaoMin: 5,
          nivel: "basico",
          videoUrl: videosEducativos.skincareBasico,
          resumo: "Esmaltes, bases fortalecedoras, removedores e cuidados com cutícula.",
          resumoExecutivo: [
            "Bases tratamento ajudam unhas fracas/quebradiças.",
            "Removedor sem acetona resseca menos; orientar hidratação das cutículas.",
          ],
          checklist: [
            "Identificar queixa (fraqueza, descamação).",
            "Sugerir base tratamento + hidratação.",
          ],
          quandoChamarFarmaceutico: ["Alteração de cor/forma, suspeita de micose ungueal."],
          errosComuns: ["Ignorar sinais de micose e tratar só estética."],
          quiz: [
            q(
              "Unhas fracas e quebradiças se beneficiam de:",
              [
                "Removedor com acetona diário",
                "Base tratamento fortalecedora",
                "Não usar nada",
                "Mais camadas de esmalte escuro",
              ],
              1,
              "Bases tratamento fortalecem; deve-se observar sinais de micose para encaminhamento.",
            ),
          ],
          xp: 35,
        },
        {
          id: "dermocosmeticos",
          titulo: "Dermocosméticos",
          duracaoMin: 8,
          nivel: "avancado",
          videoUrl: videosEducativos.skincareAtivos,
          resumo:
            "Ativos como ácido hialurônico, vitamina C, niacinamida e retinóides — leitura técnica e indicação responsável.",
          resumoExecutivo: [
            "Dermocosmético tem ativos em concentração eficaz; exige orientação de uso e tolerância.",
            "Vitamina C de manhã (antioxidante), retinóide à noite (não usar na gravidez sem avaliação).",
            "Introduzir ativos gradualmente para evitar irritação.",
          ],
          comparativo: {
            titulo: "Ativo x Objetivo",
            itens: [
              { nome: "Ácido hialurônico", quando: "Hidratação e viço." },
              {
                nome: "Vitamina C",
                quando: "Antioxidante, uniformiza o tom (manhã).",
              },
              {
                nome: "Niacinamida",
                quando: "Controle de oleosidade e manchas.",
              },
              {
                nome: "Retinóide",
                quando: "Renovação (noite); evitar na gestação sem avaliação.",
              },
            ],
          },
          simulacao: {
            cliente: "Cliente quer 'começar a usar ácido' no rosto.",
            falaBoa:
              "Ótimo! Como é seu primeiro ativo, sugiro introduzir aos poucos, à noite, com protetor de dia. Está grávida ou amamentando? Pergunto porque alguns ativos pedem avaliação. Vou chamar o farmacêutico para alinhar a melhor combinação.",
            falaEvitar: "Pode passar tudo junto todo dia que age mais rápido.",
          },
          checklist: [
            "Perguntar sobre gestação/amamentação e medicamentos.",
            "Orientar introdução gradual e fotoproteção.",
            "Encaminhar ao farmacêutico em dúvidas de combinação.",
          ],
          quandoChamarFarmaceutico: [
            "Gestantes/lactantes, uso de retinóides ou ácidos.",
            "Cliente em tratamento dermatológico ou com pele muito reativa.",
          ],
          errosComuns: [
            "Indicar vários ativos potentes de uma vez.",
            "Recomendar retinóide na gravidez sem avaliação.",
          ],
          quiz: [
            q(
              "Cliente gestante pede um retinóide para manchas. O que fazer?",
              [
                "Vender normalmente.",
                "Encaminhar ao farmacêutico, pois retinóides exigem avaliação na gestação.",
                "Indicar dose dobrada.",
                "Dizer que não existe esse produto.",
              ],
              1,
              "Retinóides exigem cautela na gestação; o atendente deve encaminhar ao farmacêutico.",
            ),
          ],
          xp: 80,
        },
      ],
    },
    {
      id: "cabelos",
      titulo: "Cabelos e Coloração",
      descricao: "Diagnóstico capilar simples, linha de tratamento e coloração com segurança.",
      aulas: [
        {
          id: "cabelos",
          titulo: "Cabelos",
          duracaoMin: 6,
          nivel: "basico",
          videoUrl: videosEducativos.cabelos,
          resumo: "Tipos de fio, couro cabeludo, shampoo/condicionador e tratamentos.",
          resumoExecutivo: [
            "Identificar tipo de fio e couro cabeludo (oleoso, seco, com caspa) guia a indicação.",
            "Anticaspa é para o couro cabeludo, com frequência orientada.",
            "Reconstrução, nutrição e hidratação têm objetivos diferentes.",
          ],
          comparativo: {
            titulo: "Necessidade do fio",
            itens: [
              {
                nome: "Ressecado/quebradiço",
                quando: "Reconstrução (proteínas).",
              },
              { nome: "Sem brilho/maciez", quando: "Nutrição (óleos)." },
              {
                nome: "Sem corpo/elasticidade",
                quando: "Hidratação (água/umectantes).",
              },
            ],
          },
          checklist: [
            "Diagnóstico do fio e couro.",
            "Indicar linha coerente (sh+cond+tratamento).",
          ],
          quandoChamarFarmaceutico: ["Queda intensa, descamação severa, lesões no couro."],
          errosComuns: ["Indicar anticaspa para o comprimento do fio."],
          quiz: [
            q(
              "Cabelo quebradiço normalmente precisa de:",
              ["Hidratação apenas", "Reconstrução (proteínas)", "Mais shampoo", "Coloração"],
              1,
              "Quebra costuma indicar falta de massa/proteína: reconstrução.",
            ),
          ],
          xp: 45,
        },
        {
          id: "coloracao",
          titulo: "Coloração",
          duracaoMin: 6,
          nivel: "intermediario",
          videoUrl: videosEducativos.cabelos,
          resumo: "Tons, oxidantes, teste de mecha/toque e cuidados com alergia.",
          resumoExecutivo: [
            "Teste de toque (alergia) 48h antes é recomendado, sobretudo em tinturas com PPD.",
            "Volume da água oxigenada define clareamento; orientar com cuidado.",
            "Pós-coloração pede linha para cabelos coloridos.",
          ],
          checklist: [
            "Orientar teste de alergia.",
            "Explicar oxidante/volume.",
            "Sugerir manutenção pós-cor.",
          ],
          quandoChamarFarmaceutico: ["Histórico de alergia a tinturas, reações no couro cabeludo."],
          errosComuns: ["Não orientar teste de toque para alergia."],
          quiz: [
            q(
              "Antes de uma coloração, é prudente orientar:",
              [
                "Lavar com água quente",
                "Teste de toque para alergia 48h antes",
                "Usar mais produto",
                "Não molhar por uma semana",
              ],
              1,
              "O teste de toque reduz risco de reações alérgicas, especialmente com PPD.",
            ),
          ],
          xp: 50,
        },
      ],
    },
    {
      id: "perfumes",
      titulo: "Perfumes",
      descricao: "Famílias olfativas, fixação e venda consultiva de fragrâncias.",
      aulas: [
        {
          id: "perfumes",
          titulo: "Perfumes e fragrâncias",
          duracaoMin: 6,
          nivel: "intermediario",
          videoUrl: videosEducativos.perfumes,
          resumo: "Eau de parfum x toilette, famílias olfativas, ocasião e fixação.",
          resumoExecutivo: [
            "Maior concentração (parfum/EDP) = maior fixação e preço.",
            "Famílias: amadeirado, floral, cítrico, oriental — alinhar à ocasião e gosto.",
            "Sugerir prova na pele, não só no papel.",
          ],
          comparativo: {
            titulo: "Concentração",
            itens: [
              {
                nome: "Eau de Cologne",
                quando: "Leve, refrescante, dura pouco.",
              },
              { nome: "Eau de Toilette", quando: "Dia a dia, fixação média." },
              {
                nome: "Eau de Parfum",
                quando: "Maior fixação, ocasiões marcantes.",
              },
            ],
          },
          checklist: ["Perguntar ocasião e preferência.", "Oferecer prova na pele."],
          quandoChamarFarmaceutico: ["Reações alérgicas a fragrâncias."],
          errosComuns: ["Vaporizar perfume direto no cliente sem permissão."],
          quiz: [
            q(
              "Qual tende a fixar mais?",
              ["Eau de Cologne", "Eau de Toilette", "Eau de Parfum", "Água perfumada"],
              2,
              "Eau de Parfum tem maior concentração e, em geral, maior fixação.",
            ),
          ],
          xp: 50,
        },
      ],
    },
    {
      id: "infantil",
      titulo: "Universo Infantil",
      descricao: "Linha infantil, acessórios e higiene do bebê com segurança.",
      aulas: [
        {
          id: "linha-infantil",
          titulo: "Linha infantil",
          duracaoMin: 5,
          nivel: "basico",
          videoUrl: videosEducativos.cuidadosBebe,
          resumo: "Produtos suaves, sem álcool, hipoalergênicos e adequados à idade.",
          resumoExecutivo: [
            "Pele do bebê é mais fina e sensível: produtos específicos, sem álcool e com pH adequado.",
            "Sempre observar faixa etária indicada na embalagem.",
          ],
          checklist: ["Conferir faixa etária.", "Priorizar hipoalergênicos."],
          quandoChamarFarmaceutico: ["Assaduras que não melhoram, lesões, febre no bebê."],
          errosComuns: ["Indicar produto adulto perfumado para bebê."],
          quiz: [
            q(
              "Produtos para bebês devem ser, preferencialmente:",
              ["Bem perfumados", "Hipoalergênicos e sem álcool", "Os mais baratos", "De adulto"],
              1,
              "A pele do bebê é sensível: hipoalergênicos e sem álcool são mais seguros.",
            ),
          ],
          xp: 40,
        },
        {
          id: "acessorios-infantis",
          titulo: "Acessórios infantis",
          duracaoMin: 4,
          nivel: "basico",
          videoUrl: videosEducativos.cuidadosBebe,
          resumo: "Mamadeiras, chupetas, bicos, termômetros e higienizadores.",
          resumoExecutivo: [
            "Bicos e mamadeiras têm fases por idade; orientar esterilização.",
            "Termômetro digital é prático; ensinar leitura correta.",
          ],
          checklist: ["Conferir fase/idade do item.", "Orientar higienização/esterilização."],
          quandoChamarFarmaceutico: ["Dúvidas sobre febre e uso de antitérmicos infantis."],
          errosComuns: ["Indicar bico de fase errada para a idade."],
          quiz: [
            q(
              "Bicos e mamadeiras são escolhidos principalmente por:",
              ["Cor", "Fase/idade do bebê", "Marca mais cara", "Tamanho da embalagem"],
              1,
              "A escolha segue a fase/idade, garantindo fluxo e segurança adequados.",
            ),
          ],
          xp: 35,
        },
        {
          id: "higiene-infantil",
          titulo: "Higiene infantil",
          duracaoMin: 5,
          nivel: "basico",
          videoUrl: videosEducativos.higieneBebe,
          resumo: "Fraldas, lenços umedecidos, pomadas para assadura e banho do bebê.",
          resumoExecutivo: [
            "Pomada de assadura com barreira (óxido de zinco) ajuda na prevenção.",
            "Lenços sem álcool e sem perfume são preferíveis para a pele do bebê.",
          ],
          checklist: ["Indicar tamanho de fralda por peso.", "Sugerir barreira preventiva."],
          quandoChamarFarmaceutico: ["Assadura intensa, com bolhas, sangramento ou febre."],
          errosComuns: ["Indicar lenço com álcool para o bebê."],
          quiz: [
            q(
              "Qual ajuda a prevenir assaduras?",
              [
                "Lenço com álcool",
                "Pomada de barreira (óxido de zinco)",
                "Talco perfumado em excesso",
                "Banho muito quente",
              ],
              1,
              "Pomadas de barreira protegem a pele contra umidade e atrito.",
            ),
          ],
          xp: 40,
        },
      ],
    },
    ...modulosBemEstarExtra,
  ],
};

// Enriquece todas as aulas com mídia padrão (imagens e logos).
trilhaPerfumaria.modulos = trilhaPerfumaria.modulos.map((mod) => ({
  ...mod,
  aulas: mod.aulas.map((a) => comMidia(a)),
}));
