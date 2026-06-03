import type { Trilha } from "./types";
import { q } from "./_helpers";
import { videosPiloto } from "./videos-piloto";
import { imagensCategoria } from "./midia-catalogo";

// Trilha 2 — preserva o manual técnico integralmente, com camada crítica de
// atualização regulatória (RDC 471/2021, GLP-1 IN 360/2025, Farmácia Popular 2025).
export const trilhaMedicamentos: Trilha = {
  id: "medicamentos",
  numero: 2,
  titulo: "Medicamentos, Balcão Seguro e Saúde Integral",
  subtitulo: "Atendente II",
  descricao:
    "Leitura de receitas, triagem segura, OTC/MIP, classes terapêuticas, adesão ao tratamento e encaminhamento ao farmacêutico — sempre com foco no uso racional.",
  nivelFaixa: "Do intermediário ao avançado",
  icone: "pill",
  modulos: [
    {
      id: "fundamentos",
      titulo: "Fundamentos do Medicamento",
      descricao: "Conceitos, princípio ativo, formas farmacêuticas e vias de administração.",
      imagemHeroUrl: imagensCategoria.fundamentos,
      aulas: [
        {
          id: "conceitos",
          titulo: "Remédio x Medicamento: conceitos essenciais",
          duracaoMin: 6,
          nivel: "basico",
          videoUrl: videosPiloto.medicamentosConceitos,
          resumo:
            "A diferença entre remédio, medicamento, droga e fármaco, e por que isso importa no balcão.",
          resumoExecutivo: [
            "Remédio é qualquer recurso que alivia/cura (inclui não farmacológicos); medicamento é produto tecnicamente elaborado, com finalidade terapêutica e registro.",
            "Fármaco/princípio ativo é a substância responsável pelo efeito; droga é o termo genérico para a substância.",
            "O atendente trabalha com medicamentos registrados e deve respeitar os limites legais (MIP x prescrição).",
          ],
          checklist: [
            "Usar a terminologia correta ao orientar.",
            "Saber que medicamento é produto com registro e finalidade terapêutica.",
          ],
          quandoChamarFarmaceutico: ["Qualquer dúvida clínica que ultrapasse a orientação de MIP."],
          errosComuns: ["Tratar todo 'remédio' como se pudesse ser indicado livremente."],
          comparativo: {
            titulo: "Conceito x Significado no balcão",
            itens: [
              { nome: "Remédio", quando: "Qualquer recurso que alivia ou cura (chá, choro, massagem, medicamento)." },
              { nome: "Medicamento", quando: "Produto tecnicamente elaborado com registro Anvisa e finalidade terapêutica." },
              { nome: "Fármaco / Princípio ativo", quando: "Substância química responsável pelo efeito no organismo." },
            ],
          },
        simulacao: {
          cliente: "Cliente pergunta se cha de boldo e remedio de farmacia sao a mesma coisa.",
          falaBoa: "Medicamento e produto registrado na Anvisa com dose padronizada. Remedio caseiro nao tem controle de dose. Para sintomas especificos o medicamento e mais seguro.",
          falaEvitar: "Tudo e igual compra o mais barato.",
        },
          quiz: [
            q(
              "Qual afirmação é correta?",
              [
                "Remédio e medicamento são exatamente a mesma coisa.",
                "Medicamento é produto tecnicamente elaborado com finalidade terapêutica e registro.",
                "Princípio ativo é o excipiente.",
                "Toda droga é um medicamento.",
              ],
              1,
              "Medicamento é o produto com registro e finalidade terapêutica; remédio é conceito mais amplo.",
            ),
            q(
              "Qual destes NÃO é um medicamento?",
              [
                "Comprimido de paracetamol registrado na Anvisa",
                "Xarope industrializado com registro",
                "Chá de camomila colhido no jardim",
                "Pomada antisséptica com registro",
              ],
              2,
              "Chá caseiro não passa por controle de qualidade nem tem registro Anvisa — é um remédio, não um medicamento.",
            ),
            q(
              "No balcão, o atendente pode indicar livremente:",
              [
                "Qualquer medicamento que o cliente pedir",
                "Apenas MIP (medicamentos isentos de prescrição)",
                "Antibióticos sem receita",
                "Tarja preta com orientação verbal",
              ],
              1,
              "MIPs podem ser orientados pelo atendente; tarjas vermelha e preta exigem receita e/ou farmacêutico.",
            ),
            q(
              "Por que a terminologia correta importa no balcão?",
              [
                "Só importa para farmacêuticos",
                "Porque 'medicamento' tem respaldo legal (registro Anvisa), enquanto 'remédio' é um termo amplo que não garante segurança",
                "Para impressionar o cliente",
                "Não importa, o cliente entende qualquer termo",
              ],
              1,
              "Usar 'medicamento' corretamente reforça que o produto tem registro e segurança comprovados; 'remédio' pode induzir a falsa segurança.",
            ),
            q(
              "Um cliente pede 'um remédio bom para dor'. Qual a melhor abordagem?",
              [
                "Entregar o analgésico mais caro",
                "Perguntar o tipo de dor, duração, local e se já usou algo, para então oferecer um MIP adequado",
                "Dizer que todos são iguais",
                "Receitar um antibiótico",
              ],
              1,
              "A triagem da dor (tipo, duração, local) é essencial para orientar o MIP correto com segurança.",
            ),
          ],
          xp: 50,
        },
        {
          id: "principio-ativo",
          titulo: "Princípio ativo, excipientes e ação terapêutica",
          duracaoMin: 6,
          nivel: "basico",
          resumo: "O que faz efeito, o que dá forma ao produto e como a ação terapêutica acontece.",
          resumoExecutivo: [
            "Princípio ativo: substância que produz o efeito. Excipiente: dá forma, estabilidade e sabor, sem efeito terapêutico principal.",
            "Excipientes importam para alérgicos (ex.: lactose, corantes).",
            "Mesma ação terapêutica pode vir em apresentações diferentes.",
          ],
          checklist: [
            "Localizar o princípio ativo na embalagem.",
            "Atenção a excipientes em alérgicos.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com alergia a excipientes ou dúvida sobre composição.",
          ],
          errosComuns: ["Confundir excipiente com princípio ativo."],
          comparativo: {
            titulo: "Papel na formulação",
            itens: [
              { nome: "Princípio ativo", quando: "Responsável pelo efeito terapêutico." },
              { nome: "Excipiente", quando: "Veículo, conservante, aglutinante ou corante; não tem efeito principal." },
            ],
          },
        simulacao: {
          cliente: "Cliente com alergia a lactose quer saber se o generico tem lactose.",
          falaBoa: "Vamos olhar a bula na secao de composicao. Se tiver lactose aparece aqui. Posso chamar o farmaceutico para a melhor alternativa.",
          falaEvitar: "Nao tem nada disso pode comprar.",
        },
          quiz: [
            q(
              "O que produz o efeito terapêutico?",
              ["Excipiente", "Princípio ativo", "A embalagem", "O corante"],
              1,
              "O princípio ativo é responsável pelo efeito; o excipiente dá forma ao produto.",
            ),
            q(
              "Por que excipientes importam para clientes alérgicos?",
              [
                "Não importam, o princípio ativo é o único relevante",
                "Excipientes como lactose ou corantes podem desencadear reações alérgicas",
                "Apenas a embalagem importa",
                "Excipientes não entram na composição",
              ],
              1,
              "Lactose, corantes e conservantes são excipientes que podem causar reações em alérgicos.",
            ),
            q(
              "Qual a melhor conduta se o cliente pergunta se um genérico contém lactose?",
              [
                "Dizer que nenhum genérico tem lactose",
                "Consultar a bula na seção de composição e, se necessário, chamar o farmacêutico",
                "Indicar outro produto aleatoriamente",
                "Ignorar a pergunta",
              ],
              1,
              "A bula lista a composição completa; o farmacêutico pode recomendar alternativa segura.",
            ),
            q(
              "Dois produtos têm o mesmo princípio ativo. É correto afirmar que:",
              [
                "Um é sempre mais fraco que o outro",
                "Têm a mesma ação terapêutica esperada, desde que na mesma dose e forma farmacêutica",
                "Só o de marca funciona",
                "Um deles é falso",
              ],
              1,
              "Mesmo princípio ativo, mesma dose e forma = mesma ação terapêutica esperada (bioequivalente).",
            ),
            q(
              "Qual dos seguintes é um excipiente?",
              [
                "Dipirona sódica",
                "Lactose monoidratada",
                "Paracetamol",
                "Ibuprofeno",
              ],
              1,
              "Lactose é excipiente usado como diluente; os demais são princípios ativos.",
            ),
          ],
          xp: 45,
        },
        {
          id: "formas-farmaceuticas",
          titulo: "Formas farmacêuticas",
          duracaoMin: 7,
          nivel: "basico",
          resumo:
            "Comprimidos, cápsulas, xaropes, suspensões, pomadas, supositórios, injetáveis e mais.",
          resumoExecutivo: [
            "A forma influencia velocidade de ação, sabor, dose e adesão.",
            "Suspensões precisam ser agitadas; efervescentes dissolvidos; sublinguais não engolidos.",
            "Crianças e idosos podem precisar de formas líquidas/orodispersíveis.",
          ],
          comparativo: {
            titulo: "Forma x Situação",
            itens: [
              {
                nome: "Líquido/suspensão",
                quando: "Crianças e quem tem dificuldade para engolir.",
              },
              { nome: "Sublingual", quando: "Ação rápida; não engolir." },
              { nome: "Tópico (pomada/creme)", quando: "Ação local na pele." },
            ],
          },
          checklist: [
            "Explicar o modo de uso de cada forma.",
            "Adequar a forma ao perfil do cliente.",
          ],
          quandoChamarFarmaceutico: ["Dúvida sobre conversão de dose entre formas."],
          errosComuns: ["Orientar engolir um comprimido sublingual."],
        simulacao: {
          cliente: "Idosa com dificuldade para engolir comprimidos.",
          falaBoa: "Alguns medicamentos tem versao liquida ou orodispersivel. Nao recomendo quebrar sem verificar. Vou chamar o farmaceutico.",
          falaEvitar: "Pode quebrar no meio que da no mesmo.",
        },
          quiz: [
            q(
              "Comprimido sublingual deve ser:",
              [
                "Engolido com água",
                "Dissolvido embaixo da língua",
                "Mastigado sempre",
                "Diluído no suco",
              ],
              1,
              "O sublingual age pela mucosa sob a língua e não deve ser engolido.",
            ),
            q(
              "Suspensões orais exigem qual cuidado antes do uso?",
              [
                "Serem aquecidas no micro-ondas",
                "Serem agitadas para homogeneizar o princípio ativo",
                "Serem diluídas em leite sempre",
                "Nenhum cuidado especial",
              ],
              1,
              "Suspensões depositam o pó no fundo; agitar redistribui o princípio ativo uniformemente.",
            ),
            q(
              "Qual forma farmacêutica é mais indicada para crianças com dificuldade de engolir?",
              [
                "Comprimido revestido grande",
                "Cápsula dura",
                "Suspensão ou comprimido orodispersível",
                "Supositório sempre",
              ],
              2,
              "Líquidos, suspensões e orodispersíveis facilitam a administração pediátrica e em idosos.",
            ),
            q(
              "Qual forma farmacêutica tem ação mais rápida por via oral?",
              [
                "Comprimido revestido",
                "Solução oral (gotas)",
                "Cápsula gelatinosa dura",
                "Drágea",
              ],
              1,
              "Soluções orais (gotas) são absorvidas mais rapidamente porque o princípio ativo já está dissolvido.",
            ),
            q(
              "Comprimidos efervescentes devem ser:",
              [
                "Engolidos inteiros com pouca água",
                "Dissolvidos completamente em água antes de tomar",
                "Mastigados sem água",
                "Partidos ao meio",
              ],
              1,
              "Efervescentes precisam ser dissolvidos em água até completa dispersão para liberar o princípio ativo corretamente.",
            ),
          ],
          xp: 55,
        },
        {
          id: "vias-administracao",
          titulo: "Vias de administração",
          duracaoMin: 5,
          nivel: "basico",
          resumo: "Oral, tópica, inalatória, retal, parenteral: características e cuidados.",
          resumoExecutivo: [
            "A via define rapidez e cuidados de uso (ex.: jejum, agitar, refrigerar).",
            "Parenteral (injetável) tem regras próprias de aplicação e descarte.",
          ],
          checklist: [
            "Identificar a via na prescrição/bula.",
            "Orientar cuidados específicos da via.",
          ],
          quandoChamarFarmaceutico: ["Aplicação de injetáveis e técnica de inalação com dúvidas."],
          errosComuns: ["Confundir via tópica com uso oral."],
          comparativo: {
            titulo: "Via x Cuidado principal",
            itens: [
              { nome: "Via oral", quando: "Engolir com água; alguns exigem jejum." },
              { nome: "Via tópica", quando: "Aplicar na pele; não ingerir." },
              { nome: "Via inalatória", quando: "Agitar antes; técnica correta de inalação." },
              { nome: "Via sublingual", quando: "Dissolver sob a língua; não engolir." },
            ],
          },
        simulacao: {
          cliente: "Cliente comprou spray nasal e quer saber se pode usar por mais de 5 dias.",
          falaBoa: "Descongestionante nasal por mais de 5 dias pode causar efeito rebote, piorando a congestao. O ideal e usar no maximo 3 a 5 dias e buscar avaliacao medica se persistir.",
          falaEvitar: "Pode usar a vontade que nao da nada.",
        },
          quiz: [
            q(
              "A via de administração influencia principalmente:",
              ["A cor do produto", "A rapidez e os cuidados de uso", "O preço sempre", "A marca"],
              1,
              "A via afeta velocidade de ação e cuidados (jejum, agitação, refrigeração, etc.).",
            ),
            q(
              "Quem usa spray nasal descongestionante deve ser orientado a:",
              [
                "Usar quantas vezes quiser, não tem problema",
                "Limitar o uso a 3-5 dias para evitar efeito rebote",
                "Compartilhar com a família",
                "Usar somente à noite",
              ],
              1,
              "Uso prolongado de descongestionante nasal causa congestão rebote; máximo 3-5 dias.",
            ),
            q(
              "Sobre a via parenteral (injetável), é correto afirmar:",
              [
                "Pode ser aplicada por qualquer pessoa sem treinamento",
                "Exige técnica asséptica, descarte de perfurocortante e geralmente é ato do farmacêutico ou enfermeiro",
                "É sempre mais segura que a via oral",
                "Não precisa de receita",
              ],
              1,
              "Injetáveis exigem técnica, descarte adequado e profissional habilitado para aplicação.",
            ),
            q(
              "Qual via de administração evita a primeira passagem hepática?",
              [
                "Via oral",
                "Via sublingual",
                "Via tópica para unhas",
                "Via oral com alimentos",
              ],
              1,
              "A via sublingual drena diretamente para a circulação sistêmica, evitando o metabolismo de primeira passagem no fígado.",
            ),
            q(
              "Um medicamento de uso tópico NÃO deve ser:",
              [
                "Aplicado sobre a pele limpa",
                "Utilizado em quantidade suficiente para cobrir a área",
                "Ingerido ou aplicado em mucosas sem indicação na bula",
                "Armazenado em temperatura ambiente conforme bula",
              ],
              2,
              "Uso tópico é para aplicação externa; nunca ingerir ou usar em mucosas não indicadas.",
            ),
          ],
          xp: 45,
        },
      ],
    },
    {
      id: "bula-classificacao",
      titulo: "Bula, Tarjas e Classificação",
      descricao:
        "Leitura segura de bula, tarjas, MIP e a diferença entre genéricos, similares e referência.",
      imagemHeroUrl: imagensCategoria.bula,
      aulas: [
        {
          id: "bula",
          titulo: "Bula e leitura segura (metodologia visual)",
          duracaoMin: 8,
          nivel: "intermediario",
          videoUrl: videosPiloto.bula,
          resumo:
            "Transformar a bula em um roteiro: o que trata, como age, como usar, por quanto tempo, o que evitar e sinais de alerta.",
          resumoExecutivo: [
            "Roteiro de leitura: indicação, posologia, contraindicações, interações, reações adversas e superdosagem.",
            "Traduza para o cliente: 'o que o médico quer tratar', 'como usar', 'quanto tempo', 'sinais de alerta'.",
            "Composição e farmacocinética explicam por que respeitar horários e jejum.",
          ],
          comparativo: {
            titulo: "Seção da bula x Pergunta do cliente",
            itens: [
              { nome: "Indicações", quando: "'Para que serve?'" },
              { nome: "Posologia", quando: "'Quanto e quando tomar?'" },
              {
                nome: "Contraindicações/Interações",
                quando: "'O que não posso fazer?'",
              },
              { nome: "Reações adversas", quando: "'Quais sinais de alerta?'" },
            ],
          },
          simulacao: {
            cliente: "Cliente não entendeu a posologia escrita na bula.",
            falaBoa:
              "Vamos ler juntos: aqui diz 1 comprimido a cada 8 horas por 7 dias. Significa de manhã, à tarde e à noite. Evite parar antes do fim. Qualquer reação diferente, procure o médico — e posso chamar o farmacêutico para detalhar.",
            falaEvitar: "Está escrito na bula, é só ler.",
          },
          checklist: [
            "Localizar indicação, posologia e contraindicações.",
            "Traduzir em linguagem simples.",
            "Reforçar sinais de alerta e retorno ao médico.",
          ],
          quandoChamarFarmaceutico: [
            "Interações medicamentosas, ajuste de dose, dúvidas sobre superdosagem.",
            "Gestantes, lactantes, crianças e idosos.",
          ],
          errosComuns: ["Dizer 'está na bula' sem ajudar a interpretar."],
          quiz: [
            q(
              "Na metodologia visual de leitura de bula, 'posologia' responde:",
              ["Para que serve", "Quanto e quando tomar", "O que evitar", "Quais reações adversas"],
              1,
              "Posologia é a dose e a frequência: quanto e quando tomar.",
            ),
            q(
              "Qual seção da bula responde à pergunta do cliente: 'Isso faz mal com outros remédios?'",
              [
                "Indicações",
                "Contraindicações e Interações medicamentosas",
                "Posologia",
                "Composição",
              ],
              1,
              "A seção de contraindicações e interações alerta sobre combinações perigosas.",
            ),
            q(
              "O que o atendente deve fazer se a bula indica 'uso sob supervisão médica' e o cliente quer comprar sem receita?",
              [
                "Vender assim mesmo, é só orientação",
                "Exigir a prescrição e, se não houver, chamar o farmacêutico",
                "Trocar por outro similar",
                "Avisar que não precisa de receita",
              ],
              1,
              "'Uso sob supervisão médica' indica que o medicamento não é MIP — exige receita e/ou farmacêutico.",
            ),
            q(
              "Na bula, a seção 'O que fazer se alguém usar uma quantidade maior do que a indicada?' refere-se a:",
              ["Indicações", "Superdosagem", "Posologia", "Reações adversas"],
              1,
              "A seção de superdosagem orienta condutas em caso de uso excessivo acidental ou intencional.",
            ),
            q(
              "Qual informação da bula ajuda a entender por que um medicamento deve ser tomado em jejum?",
              [
                "Indicações",
                "Farmacocinética / Modo de usar",
                "Reações adversas",
                "Composição",
              ],
              1,
              "A farmacocinética e o modo de usar explicam se alimentos interferem na absorção do princípio ativo.",
            ),
          ],
          xp: 80,
        },
        {
          id: "tarjas",
          titulo: "Tarjas e classes de risco",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "Sem tarja (MIP), tarja vermelha e tarja preta: o que cada uma exige no balcão.",
          resumoExecutivo: [
            "Sem tarja: venda livre (MIP/OTC), com orientação responsável.",
            "Tarja vermelha: exige prescrição; alguns com retenção de receita.",
            "Tarja preta: maior controle, retenção obrigatória de receita.",
          ],
          comparativo: {
            titulo: "Tarja x Conduta",
            itens: [
              { nome: "Sem tarja (MIP)", quando: "Venda livre + orientação." },
              {
                nome: "Tarja vermelha",
                quando: "Exige receita; pode ter retenção.",
              },
              {
                nome: "Tarja preta",
                quando: "Controle especial, retenção obrigatória.",
              },
            ],
          },
          checklist: [
            "Identificar a tarja na embalagem.",
            "Conferir receita quando exigida.",
            "Encaminhar controlados ao farmacêutico.",
          ],
          quandoChamarFarmaceutico: [
            "Toda dispensação de tarja preta/controlados e dúvidas de receita.",
          ],
          errosComuns: ["Vender tarja vermelha sem receita válida."],
        simulacao: {
          cliente: "Traz receita tarja vermelha vencida para comprar so mais uma caixa.",
          falaBoa: "Receita vencida nao posso dispensar por seguranca. Sugiro ligar pro consultorio medico para renovar.",
          falaEvitar: "Receita vencida nao vale fazer o que.",
        },
          quiz: [
            q(
              "Medicamentos de tarja preta exigem:",
              [
                "Venda livre",
                "Apenas orientação verbal",
                "Retenção obrigatória de receita e maior controle",
                "Nada de especial",
              ],
              2,
              "Tarja preta tem controle especial, com retenção obrigatória de receita.",
            ),
            q(
              "Qual a diferença prática entre tarja vermelha COM e SEM retenção?",
              [
                "Nenhuma, é a mesma coisa",
                "Com retenção: uma via fica na farmácia. Sem retenção: só a apresentação da receita basta",
                "Sem retenção exige notificação especial",
                "Com retenção vale por 1 ano",
              ],
              1,
              "Retenção significa que a farmácia guarda uma via para escrituração; sem retenção, apenas a apresentação é suficiente.",
            ),
            q(
              "Um cliente apresenta receita de tarja vermelha vencida. O que fazer?",
              [
                "Dispensar normalmente, receita vencida é detalhe",
                "Não dispensar e orientar renovar com o médico",
                "Aceitar se o cliente disser que 'o médico autorizou'",
                "Vender sem receita, já que é só tarja vermelha",
              ],
              1,
              "Receita vencida perde a validade legal; a dispensação segura exige receita dentro do prazo.",
            ),
            q(
              "Medicamentos isentos de prescrição (MIP) são identificados na embalagem por:",
              [
                "Tarja preta",
                "Tarja vermelha com retenção",
                "Ausência de tarja (venda livre)",
                "Tarja amarela",
              ],
              2,
              "MIPs não têm tarja; a ausência indica que são de venda livre, mas sempre com orientação responsável.",
            ),
            q(
              "Um cliente pede um ansiolítico tarja preta sem receita. Qual a conduta?",
              [
                "Vender mediante cadastro",
                "Negar a venda e encaminhar ao farmacêutico, explicando que tarja preta exige receita com retenção obrigatória",
                "Vender meia cartela",
                "Trocar por um similar sem tarja",
              ],
              1,
              "Tarja preta tem controle rígido; sem receita válida não se pode dispensar — encaminhar ao farmacêutico.",
            ),
          ],
          xp: 60,
        },
        {
          id: "mip-otc",
          titulo: "MIP e autocuidado orientado",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo:
            "Medicamentos isentos de prescrição: o que pode ser orientado e os limites de segurança.",
          resumoExecutivo: [
            "MIP/OTC tratam sintomas leves e autolimitados; orientação responsável é dever do balcão.",
            "Triagem básica evita mascarar problema grave (ex.: dor de cabeça persistente, febre alta prolongada).",
            "A lista de MIP é atualizada pela Anvisa (alinhada à RDC 882/2024; atualização da LMIP prevista para 2026).",
          ],
          simulacao: {
            cliente: "Dor de cabeça há 3 dias, sem melhora com analgésico comum.",
            falaBoa:
              "Como já dura alguns dias e não melhorou, é melhor avaliarmos com mais cuidado. Vou chamar o farmacêutico, pois dor persistente pede atenção e talvez avaliação médica.",
            falaEvitar: "Toma o dobro que passa.",
          },
          checklist: [
            "Fazer triagem de sinais de alerta.",
            "Orientar dose e tempo de uso do MIP.",
            "Encaminhar quando ultrapassar o autocuidado.",
          ],
          quandoChamarFarmaceutico: [
            "Sintomas persistentes, intensos, em grupos sensíveis ou com alerta.",
          ],
          errosComuns: ["Indicar dose acima da bula.", "Tratar sintoma de alerta como simples."],
          comparativo: {
            titulo: "MIP x Prescrição",
            itens: [
              { nome: "MIP (OTC)", quando: "Sintomas leves e autolimitados; orientação do atendente." },
              { nome: "Tarja vermelha/preta", quando: "Exige prescrição; encaminhar ao farmacêutico." },
            ],
          },
          quiz: [
            q(
              "Dor de cabeça intensa por vários dias sem melhora é caso de:",
              [
                "Dobrar a dose do MIP",
                "Triagem e encaminhamento",
                "Ignorar",
                "Trocar de marca apenas",
              ],
              1,
              "Sinais persistentes pedem triagem e encaminhamento, não aumento de dose.",
            ),
            q(
              "O que caracteriza um MIP (medicamento isento de prescrição)?",
              [
                "Pode ser vendido sem receita por tratar sintomas leves e autolimitados",
                "Não precisa de registro na Anvisa",
                "Pode ser indicado para qualquer sintoma",
                "Só pode ser vendido pelo farmacêutico",
              ],
              0,
              "MIPs tratam condições leves e autolimitadas; têm registro Anvisa e dispensação livre com orientação.",
            ),
            q(
              "Cliente com febre alta (39,5°C) há 3 dias quer só um antitérmico. Qual a conduta?",
              [
                "Vender o antitérmico e encerrar",
                "Recomendar dobrar a dose para baixar mais rápido",
                "Orientar uso do MIP, reforçar hidratação e chamar o farmacêutico para avaliar a persistência",
                "Dizer que é só gripe e mandar para casa",
              ],
              2,
              "Febre alta persistente é sinal de alerta; o farmacêutico deve avaliar e orientar encaminhamento médico.",
            ),
            q(
              "Qual destes NÃO é um exemplo de situação para MIP?",
              [
                "Dor de cabeça leve ocasional",
                "Azia pontual após refeição",
                "Dor no peito com falta de ar",
                "Congestão nasal leve por resfriado",
              ],
              2,
              "Dor no peito com falta de ar é sinal de alerta grave que exige emergência, não MIP.",
            ),
            q(
              "O que é 'autocuidado orientado' no contexto de MIP?",
              [
                "O cliente se medica sem qualquer orientação",
                "O atendente orienta o uso correto do MIP dentro dos limites seguros e encaminha quando necessário",
                "O farmacêutico só observa",
                "É proibido orientar qualquer MIP",
              ],
              1,
              "Autocuidado orientado significa que o atendente orienta o uso racional do MIP, com triagem e encaminhamento se necessário.",
            ),
          ],
          xp: 60,
        },
        {
          id: "genericos",
          titulo: "Genéricos, similares e referência",
          duracaoMin: 6,
          nivel: "basico",
          resumo:
            "Diferenças, bioequivalência, intercambialidade e como explicar ao cliente com segurança.",
          resumoExecutivo: [
            "Referência: o original, com pesquisa clínica. Genérico: mesmo princípio ativo, bioequivalente, intercambiável, identificado pela tarja com 'G'.",
            "Similar: marca própria, hoje com exigências de equivalência; intercambialidade segue regras.",
            "A substituição por genérico, quando cabível, é atribuição do farmacêutico.",
          ],
          comparativo: {
            titulo: "Categoria x Característica",
            itens: [
              {
                nome: "Referência",
                quando: "Original, marca, pesquisa clínica.",
              },
              {
                nome: "Genérico",
                quando: "Mesmo ativo, bioequivalente, intercambiável.",
              },
              {
                nome: "Similar",
                quando: "Nome comercial próprio, com equivalência exigida.",
              },
            ],
          },
          checklist: [
            "Explicar a diferença sem desvalorizar opções.",
            "Encaminhar a troca ao farmacêutico.",
          ],
          quandoChamarFarmaceutico: ["Substituição/intercambialidade de medicamento prescrito."],
          errosComuns: ["Dizer que genérico 'é mais fraco' — é bioequivalente."],
        simulacao: {
          cliente: "Desconfiado de genérico acha que é mais fraco que o de marca.",
          falaBoa: "Genérico tem o mesmo princípio ativo na mesma dose. Passa por testes de bioequivalência aprovados pela Anvisa. A diferença é o preço mais acessível.",
          falaEvitar: "É tudo igual marca é caro por causa de propaganda.",
        },
          quiz: [
            q(
              "Sobre genéricos, é correto dizer:",
              [
                "São mais fracos",
                "Têm o mesmo princípio ativo e são bioequivalentes ao referência",
                "Não têm registro",
                "São sempre piores",
              ],
              1,
              "Genéricos têm o mesmo princípio ativo, comprovam bioequivalência e são intercambiáveis.",
            ),
            q(
              "Quem pode autorizar a substituição de um medicamento de referência por um genérico?",
              [
                "O atendente de balcão, sempre que o cliente pedir",
                "Apenas o farmacêutico, dentro dos critérios de intercambialidade",
                "O caixa da farmácia",
                "Qualquer funcionário",
              ],
              1,
              "A substituição de medicamentos é atribuição do farmacêutico, com base na legislação e critérios técnicos.",
            ),
            q(
              "Qual das afirmações sobre medicamento similar é verdadeira?",
              [
                "Não precisa de registro na Anvisa",
                "Tem nome comercial próprio e hoje precisa comprovar equivalência com o referência",
                "É idêntico ao genérico em tudo",
                "Não pode ser intercambiado em hipótese alguma",
              ],
              1,
              "Similar tem marca própria e, por força de regulação recente, deve comprovar equivalência farmacêutica.",
            ),
            q(
              "O que significa 'bioequivalência' de um medicamento genérico?",
              [
                "Que tem o mesmo preço do referência",
                "Que atinge a mesma concentração no sangue e o mesmo efeito que o medicamento referência",
                "Que é fabricado pela mesma empresa",
                "Que tem nome parecido",
              ],
              1,
              "Bioequivalência significa que o genérico tem a mesma velocidade e extensão de absorção que o referência.",
            ),
            q(
              "Um cliente traz receita de um medicamento de referência. O que o atendente pode fazer?",
              [
                "Substituir automaticamente por qualquer similar",
                "Informar que existe genérico disponível e encaminhar ao farmacêutico para avaliação da intercambialidade",
                "Trocar pelo mais barato sem consultar",
                "Recusar a venda",
              ],
              1,
              "O atendente pode informar sobre a existência do genérico, mas a substituição é ato do farmacêutico.",
            ),
          ],
          xp: 50,
        },
      ],
    },
    {
      id: "classes-terapeuticas",
      titulo: "Classes Terapêuticas",
      descricao:
        "Panorama das principais classes do balcão: analgésicos, anti-inflamatórios, antigripais, gastrointestinais, antimicrobianos e mais.",
      imagemHeroUrl: imagensCategoria.classes,
      aulas: [
        {
          id: "analgesicos-antitermicos",
          titulo: "Analgésicos, antitérmicos e antissépticos",
          duracaoMin: 7,
          nivel: "intermediario",
          videoUrl: "https://www.youtube.com/watch?v=G77tZACxZPQ",
          resumo: "Dor e febre leves, antissépticos de uso comum e limites do autocuidado.",
          resumoExecutivo: [
            "Paracetamol e dipirona são comuns para dor/febre; respeitar dose máxima diária.",
            "Antissépticos (ex.: clorexidina, PVPI) são para pele/ferimentos superficiais.",
            "Febre alta persistente ou dor intensa exigem avaliação.",
          ],
          checklist: [
            "Conferir dose máxima diária.",
            "Orientar tempo de uso.",
            "Triagem de sinais de alerta.",
          ],
          quandoChamarFarmaceutico: [
            "Febre alta prolongada, dor intensa, uso em crianças/gestantes.",
          ],
          errosComuns: ["Somar vários produtos com o mesmo princípio ativo (risco de superdose)."],
          comparativo: {
            titulo: "Analgésico x Indicação principal",
            itens: [
              { nome: "Paracetamol", quando: "Dor/febre leve a moderada; seguro para estômago vazio." },
              { nome: "Dipirona", quando: "Dor/febre moderada; cólicas; cuidado com pressão baixa." },
              { nome: "Ibuprofeno (AINE)", quando: "Dor com componente inflamatório; tomar com alimento." },
            ],
          },
        simulacao: {
          cliente: "Jovem com dor de cabeca e febre 38C ha 1 dia. Estomago vazio.",
          falaBoa: "Dipirona ou paracetamol sao melhores de estomago vazio que ibuprofeno que pode irritar. Se febre passar de 3 dias busque avaliacao medica.",
          falaEvitar: "Toma ibuprofeno que resolve jejum nao faz mal.",
        },
          quiz: [
            q(
              "Risco comum ao associar antigripais e analgésicos sem critério:",
              [
                "Nenhum",
                "Superdose do mesmo princípio ativo (ex.: paracetamol)",
                "Melhora garantida",
                "Validade maior",
              ],
              1,
              "Vários produtos podem conter o mesmo ativo, levando à superdose — atenção e encaminhamento.",
            ),
            q(
              "Qual analgésico é mais seguro para estômago vazio?",
              ["Ibuprofeno", "Cetoprofeno", "Paracetamol", "Aspirina"],
              2,
              "Paracetamol não irrita a mucosa gástrica; AINEs (ibuprofeno, cetoprofeno, aspirina) devem ser tomados com alimento.",
            ),
            q(
              "Cliente quer comprar 2 produtos diferentes que contêm paracetamol. O que fazer?",
              [
                "Vender ambos, o cliente sabe o que faz",
                "Alertar sobre o risco de superdose de paracetamol e verificar se realmente precisa dos dois",
                "Dobrar a dose de um só produto",
                "Falar para tomar os dois alternados",
              ],
              1,
              "Somar produtos com o mesmo princípio ativo pode levar a superdose hepática; orientar e chamar o farmacêutico.",
            ),
            q(
              "Qual a dose máxima diária segura de paracetamol para adultos?",
              [
                "1g (1000mg)",
                "4g (4000mg) — respeitando o intervalo entre doses",
                "10g (10000mg)",
                "Não há limite",
              ],
              1,
              "A dose máxima diária de paracetamol para adultos é de 4000mg; ultrapassar pode causar hepatotoxicidade.",
            ),
            q(
              "Dipirona tem qual contraindicação ou cuidado importante?",
              [
                "Não tem contraindicações",
                "Risco de agranulocitose (raro) e cuidado em pacientes com pressão baixa",
                "Pode ser usada em qualquer paciente sem restrição",
                "Causa dependência química",
              ],
              1,
              "Dipirona pode causar agranulocitose (reação rara) e pode agravar hipotensão — usar com cautela.",
            ),
          ],
          xp: 60,
        },
        {
          id: "anti-inflamatorios-miorrelaxantes",
          titulo: "Anti-inflamatórios e miorrelaxantes",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "AINEs, cuidados gástricos e relaxantes musculares — geralmente sob prescrição.",
          resumoExecutivo: [
            "AINEs podem irritar o estômago e interagir com outros medicamentos; muitos exigem receita.",
            "Miorrelaxantes podem causar sonolência; orientar com cautela.",
          ],
          checklist: [
            "Verificar exigência de receita.",
            "Alertar sobre estômago e direção/sonolência.",
          ],
          quandoChamarFarmaceutico: ["Uso prolongado, gastrite, hipertensos, anticoagulados."],
          errosComuns: ["Indicar AINE para quem tem histórico gástrico sem avaliação."],
          comparativo: {
            titulo: "AINE x Cuidado",
            itens: [
              { nome: "AINE seletivo (COX-2)", quando: "Menor irritação gástrica, mas ainda exige cautela." },
              { nome: "AINE não seletivo", quando: "Maior risco gástrico; tomar com alimento e avaliar interações." },
              { nome: "Miorrelaxante", quando: "Pode causar sonolência; não dirigir ou operar máquinas." },
            ],
          },
        simulacao: {
          cliente: "Senhor com dor nas costas ha 2 dias. Tem pressao alta controlada.",
          falaBoa: "Anti-inflamatorios podem interferir com medicacao de pressao. Vou chamar o farmaceutico para a combinacao mais segura.",
          falaEvitar: "Toma esse anti-inflamatorio forte que passa.",
        },
          quiz: [
            q(
              "AINEs (anti-inflamatórios) costumam exigir cautela com:",
              ["A cor da embalagem", "Estômago e interações", "O sabor", "A marca"],
              1,
              "AINEs podem irritar a mucosa gástrica e interagir com outros fármacos.",
            ),
            q(
              "Um cliente hipertenso controlado quer um anti-inflamatório para dor nas costas. Qual a conduta?",
              [
                "Vender qualquer AINE, não há problema",
                "Orientar que AINEs podem interferir com anti-hipertensivos e chamar o farmacêutico",
                "Dizer para parar o anti-hipertensivo enquanto tomar o AINE",
                "Indicar dose dupla do AINE para compensar",
              ],
              1,
              "AINEs podem reduzir a eficácia de anti-hipertensivos e aumentar risco renal; o farmacêutico deve avaliar.",
            ),
            q(
              "Miorrelaxantes costumam causar qual efeito colateral que exige alerta ao cliente?",
              [
                "Insônia",
                "Sonolência — não dirigir ou operar máquinas",
                "Aumento de apetite",
                "Nenhum efeito relevante",
              ],
              1,
              "Miorrelaxantes agem no SNC e causam sonolência; alerta sobre direção e atividades de risco.",
            ),
            q(
              "Além do estômago, que outro órgão merece atenção especial com uso prolongado de AINEs?",
              [
                "O coração",
                "Os rins — risco de lesão renal com uso crônico",
                "A pele",
                "O pulmão",
              ],
              1,
              "AINEs podem reduzir o fluxo sanguíneo renal e causar lesão renal, especialmente em idosos e desidratados.",
            ),
            q(
              "Qual orientação o atendente deve dar a um cliente que comprou miorrelaxante?",
              [
                "Pode dirigir normalmente após tomar",
                "Evitar dirigir e operar máquinas devido à sonolência; tomar conforme prescrição",
                "Tomar em dobro se a dor for forte",
                "Pode combinar com bebida alcoólica para potencializar",
              ],
              1,
              "Miorrelaxantes causam sonolência e comprometem a capacidade de dirigir; álcool potencializa o efeito sedativo.",
            ),
          ],
          xp: 55,
        },
        {
          id: "gripe-alergia-tosse",
          titulo: "Antigripais, descongestionantes, antialérgicos e tosse",
          duracaoMin: 7,
          nivel: "intermediario",
          resumo:
            "Sintomáticos respiratórios, antitussígenos x expectorantes e cuidados em grupos sensíveis.",
          resumoExecutivo: [
            "Antitussígeno seca a tosse seca; expectorante ajuda a eliminar secreção (tosse produtiva) — não combinar sem critério.",
            "Descongestionantes nasais podem causar efeito rebote se usados além do tempo.",
            "Antialérgicos de 1ª geração dão sono; idosos e motoristas precisam de cautela.",
          ],
          comparativo: {
            titulo: "Tosse seca x produtiva",
            itens: [
              {
                nome: "Tosse seca",
                quando: "Antitussígeno (suprime o reflexo).",
              },
              {
                nome: "Tosse com catarro",
                quando: "Expectorante/mucolítico (fluidifica).",
              },
            ],
          },
          checklist: ["Diferenciar tipo de tosse.", "Alertar sobre rebote nasal e sonolência."],
          quandoChamarFarmaceutico: [
            "Tosse persistente (>2-3 semanas), falta de ar, sintomas em crianças.",
          ],
          errosComuns: ["Combinar antitussígeno com expectorante sem critério."],
        simulacao: {
          cliente: "Mae com filho de 4 anos tossindo muito a noite.",
          falaBoa: "Se tosse seca com espirros pode ser alergia. Se tem secrecao ou febre e resfriado. Criancas pequenas leve ao pediatra se nao melhorar.",
          falaEvitar: "Compra xarope que para tosse na hora.",
        },
          quiz: [
            q(
              "Para tosse com catarro (produtiva), o indicado geralmente é:",
              ["Antitussígeno", "Expectorante/mucolítico", "Descongestionante apenas", "Nada"],
              1,
              "Tosse produtiva pede expectorante; antitussígeno é para tosse seca.",
            ),
            q(
              "Qual o risco do uso prolongado (>5 dias) de descongestionante nasal?",
              [
                "Efeito rebote — piora da congestão nasal",
                "Dependência química grave",
                "Perda do paladar",
                "Nenhum risco",
              ],
              0,
              "Descongestionantes nasais tópicos causam congestão rebote se usados por mais de 3-5 dias.",
            ),
            q(
              "Antialérgicos de primeira geração (ex.: maleato de dexclorfeniramina) exigem qual alerta?",
              [
                "Podem causar insônia grave",
                "Causam sonolência — cuidado ao dirigir",
                "Aumentam a pressão arterial",
                "Não têm efeitos colaterais",
              ],
              1,
              "Anti-histamínicos de 1ª geração atravessam a barreira hematoencefálica e causam sonolência significativa.",
            ),
            q(
              "O que diferencia um antitussígeno de um expectorante?",
              [
                "Não há diferença, são sinônimos",
                "Antitussígeno suprime o reflexo da tosse (tosse seca); expectorante fluidifica a secreção (tosse produtiva)",
                "Expectorante para a tosse imediatamente",
                "Ambos tratam apenas coriza",
              ],
              1,
              "Antitussígenos agem no centro da tosse no cérebro; expectorantes aumentam a fluidez do muco para eliminação.",
            ),
            q(
              "Um cliente com rinite alérgica pergunta sobre antialérgico. O que considerar?",
              [
                "Todos causam o mesmo nível de sonolência",
                "Antialérgicos de 2ª geração (ex.: loratadina, cetirizina) causam menos sonolência que os de 1ª geração",
                "Antialérgicos não funcionam para rinite",
                "Só existe versão injetável",
              ],
              1,
              "Anti-histamínicos de 2ª geração têm menor penetração no SNC e causam menos sonolência, sendo preferíveis para motoristas.",
            ),
          ],
          xp: 65,
        },
        {
          id: "gastrointestinais",
          titulo: "Gastrointestinais: antiácidos, laxativos, antidiarreicos e afins",
          duracaoMin: 7,
          nivel: "intermediario",
          resumo:
            "Antiácidos, hepatoprotetores, reguladores intestinais, laxativos/purgativos, antidiarreicos e antiflatulentos.",
          resumoExecutivo: [
            "Antiácidos aliviam azia pontual; uso frequente investiga causa.",
            "Diarreia: priorizar hidratação (soro de reidratação); antidiarreico tem limites.",
            "Laxativos não devem virar rotina sem avaliação.",
          ],
          checklist: ["Reforçar hidratação na diarreia.", "Orientar uso pontual, não crônico."],
          quandoChamarFarmaceutico: [
            "Diarreia com sangue/febre, dor abdominal intensa, sintomas persistentes.",
          ],
          errosComuns: ["Focar só no antidiarreico e esquecer a hidratação."],
          comparativo: {
            titulo: "Sintoma x Abordagem",
            itens: [
              { nome: "Azia pontual", quando: "Antiácido ou bloqueador H2; se frequente, investigar." },
              { nome: "Diarreia aguda", quando: "Hidratação (soro) primeiro; antidiarreico com cautela." },
              { nome: "Prisão de ventre", quando: "Laxativo pontual; não virar rotina sem avaliação." },
            ],
          },
        simulacao: {
          cliente: "Moca com azia frequente toda semana.",
          falaBoa: "Azia semanal merece investigacao. Antiacido alivia mas pode mascarar refluxo. Sugiro conversar com o farmaceutico.",
          falaEvitar: "Toma inibidor de bomba que e mais forte.",
        },
          quiz: [
            q(
              "Na diarreia aguda, a prioridade é:",
              ["Antibiótico sempre", "Hidratação (soro de reidratação)", "Laxativo", "Jejum total"],
              1,
              "Reidratação é prioridade; antidiarreicos têm limites e sinais de alerta exigem encaminhamento.",
            ),
            q(
              "Qual sinal de alerta na diarreia exige encaminhamento imediato?",
              [
                "Diarreia com fezes pastosas",
                "Presença de sangue nas fezes ou febre alta",
                "Diarreia há apenas 1 dia",
                "Melhora com hidratação oral",
              ],
              1,
              "Sangue nas fezes, febre alta, dor abdominal intensa ou desidratação grave são sinais de alerta na diarreia.",
            ),
            q(
              "Laxativos estimulantes devem ser usados:",
              [
                "Diariamente como rotina",
                "Apenas de forma pontual e sob orientação; uso crônico pode causar dependência intestinal",
                "Em dobro para efeito mais rápido",
                "Somente por via injetável",
              ],
              1,
              "Laxativos estimulantes podem causar dependência intestinal e desequilíbrio hidroeletrolítico se usados cronicamente.",
            ),
            q(
              "Qual a melhor orientação para um cliente com constipação leve?",
              [
                "Tomar laxativo todos os dias",
                "Aumentar ingestão de fibras, água e atividade física antes de recorrer a laxativos",
                "Usar supositório toda semana",
                "Fazer jejum",
              ],
              1,
              "Medidas não farmacológicas (fibras, água, exercício) são a primeira linha; laxativos são pontuais.",
            ),
          ],
          xp: 60,
        },
        {
          id: "antimicoticos-vitaminas",
          titulo: "Antimicóticos, vitaminas, orexígenos, pediculicidas e escabicidas",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo:
            "Antifúngicos tópicos, suplementação, estimulantes de apetite e tratamento de piolho/sarna.",
          resumoExecutivo: [
            "Antimicóticos tópicos para micoses superficiais; lesões extensas exigem avaliação.",
            "Vitaminas não substituem alimentação; orientar uso racional.",
            "Pediculicidas/escabicidas pedem orientação de aplicação e repetição correta.",
          ],
          checklist: ["Orientar aplicação correta e tempo.", "Reforçar uso racional de vitaminas."],
          quandoChamarFarmaceutico: [
            "Micoses extensas, suspeita de sarna disseminada, uso em crianças.",
          ],
          errosComuns: ["Indicar vitamina como 'cura' para tudo."],
          comparativo: {
            titulo: "Situação x Produto indicado",
            itens: [
              { nome: "Micose superficial (pé de atleta)", quando: "Antimicótico tópico (cetoconazol, terbinafina)." },
              { nome: "Deficiência nutricional", quando: "Suplemento vitamínico após orientação profissional." },
              { nome: "Queda de apetite", quando: "Orexígeno (ex.: complexo B, cipro-heptadina) com avaliação." },
            ],
          },
        simulacao: {
          cliente: "Senhora com unha amarelada e grossa.",
          falaBoa: "Pode ser micose mas o diagnostico ideal e do farmaceutico ou dermatologista. Tratamento e longo meses.",
          falaEvitar: "Passa esmalte antimicotico que some em 2 semanas.",
        },
          quiz: [
            q(
              "Sobre vitaminas, o correto é orientar que:",
              [
                "Substituem a alimentação",
                "Não substituem alimentação e exigem uso racional",
                "Quanto mais, melhor",
                "Curam qualquer doença",
              ],
              1,
              "Vitaminas complementam, não substituem alimentação; uso deve ser racional.",
            ),
            q(
              "Qual a duração típica do tratamento tópico para micose de unha?",
              [
                "3 dias",
                "1 a 2 semanas",
                "Meses (pode levar 6-12 meses até a unha saudável crescer)",
                "Apenas 1 aplicação",
              ],
              2,
              "Micose de unha exige tratamento prolongado (meses) porque o antifúngico precisa agir conforme a unha cresce.",
            ),
            q(
              "Um cliente quer comprar vitamina 'para dar energia'. Qual a orientação correta?",
              [
                "Vender a mais cara que é a melhor",
                "Perguntar sobre alimentação e hábitos; orientar que vitaminas complementam e não substituem uma dieta equilibrada",
                "Falar que todas são iguais",
                "Receitar um complexo B",
              ],
              1,
              "Orientar uso racional de vitaminas: complementam alimentação, não a substituem; cansaço prolongado pode ter outras causas.",
            ),
            q(
              "Antimicóticos tópicos são indicados para:",
              [
                "Infecções bacterianas profundas",
                "Micoses superficiais da pele (candidíase, tinha, pé de atleta)",
                "Infecções virais",
                "Queimaduras de 3º grau",
              ],
              1,
              "Antimicóticos tópicos tratam fungos na camada superficial da pele; infecções extensas ou profundas exigem avaliação.",
            ),
          ],
          xp: 55,
        },
        {
          id: "antissepticos-topicos",
          titulo: "Antissépticos tópicos e desinfecção de pequenos ferimentos",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo:
            "Quando orientar antisséptico tópico, diferença para desinfetante de ambiente e limites do autocuidado.",
          resumoExecutivo: [
            "Antisséptico tópico é para pele íntegra ou ferimento superficial — não confundir com produtos de superfície.",
            "Orientar limpeza com água/sabão antes; evitar uso crônico sem critério.",
            "Ferimentos profundos, com pus ou sinais de infecção exigem encaminhamento.",
          ],
          checklist: [
            "Confirmar tipo de lesão e tempo de evolução.",
            "Diferenciar antisséptico tópico de desinfetante doméstico.",
          ],
          quandoChamarFarmaceutico: [
            "Ferimento extenso, diabético, imunossuprimido, sinais de infecção.",
          ],
          errosComuns: ["Indicar desinfetante de chão para ferimento."],
          comparativo: {
            titulo: "Produto x Indicação",
            itens: [
              { nome: "Clorexidina aquosa", quando: "Antisséptico para ferimentos superficiais; seguro para pele aberta." },
              { nome: "PVPI (iodo povidona)", quando: "Antisséptico para pele íntegra antes de procedimentos; cuidado com alergia a iodo." },
              { nome: "Álcool 70%", quando: "Antisséptico para pele íntegra (ex.: antes de injeção); não usar em ferida aberta (arde e lesa tecido)." },
              { nome: "Desinfetante doméstico", quando: "Para superfícies e ambientes; NUNCA usar em pele ou ferimentos." },
            ],
          },
        simulacao: {
          cliente: "Mae com filho que caiu e ralou o joelho.",
          falaBoa: "Lavar com agua e sabao neutro primeiro. Depois clorexidina aquosa. Alcool 70 nao e indicado para ferida aberta.",
          falaEvitar: "Passa alcool que arde mas limpa.",
        },
          quiz: [
            q(
              "Antisséptico tópico no balcão deve ser orientado para:",
              [
                "Limpar bancadas",
                "Pequenos ferimentos superficiais com triagem",
                "Substituir antibiótico oral",
                "Uso interno",
              ],
              1,
              "Uso tópico em ferimento superficial com triagem; não substitui avaliação médica quando necessário.",
            ),
            q(
              "Qual a diferença entre antisséptico e desinfetante?",
              [
                "São a mesma coisa",
                "Antisséptico é para tecidos vivos (pele); desinfetante é para superfícies e objetos inanimados",
                "Desinfetante é mais suave que antisséptico",
                "Antisséptico só existe em spray",
              ],
              1,
              "Antissépticos são formulados para uso em tecidos vivos; desinfetantes são para objetos e superfícies, podendo ser tóxicos para a pele.",
            ),
            q(
              "Em um ferimento superficial, qual a sequência correta de orientação?",
              [
                "Aplicar antisséptico direto sem limpar",
                "Lavar com água e sabão neutro, aplicar antisséptico adequado e cobrir se necessário",
                "Passar álcool 70% direto na ferida",
                "Colocar manteiga ou pasta de dente",
              ],
              1,
              "Limpeza prévia remove sujeira; antisséptico reduz carga microbiana; cobertura protege a ferida.",
            ),
            q(
              "Cliente diabético com ferimento no pé. Qual a conduta?",
              [
                "Orientar antisséptico e enfaixar",
                "Encaminhar ao farmacêutico/médico — pé diabético exige cuidado especial devido ao risco de infecção grave",
                "Passar álcool e mandar para casa",
                "Dizer que não é nada",
              ],
              1,
              "Diabéticos têm risco elevado de infecção e má cicatrização; qualquer ferimento no pé requer avaliação profissional.",
            ),
          ],
          xp: 50,
        },
        {
          id: "pediculicidas-escabicidas-foco",
          titulo: "Pediculicidas e escabicidas — protocolo de balcão",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo:
            "Aplicação, repetição de dose, tratamento de contactantes e higiene do ambiente — foco pedagógico separado.",
          resumoExecutivo: [
            "Piolho: tratar contactantes, pentear fino, repetir produto conforme bula.",
            "Sarna: aplicar em todo o corpo (incluindo couro cabeludo conforme produto), lavar roupas/roupa de cama.",
            "Nunca tratar suspeita grave sem farmacêutico.",
          ],
          checklist: ["Ler modo de uso e repetição.", "Orientar tratamento de contactantes."],
          quandoChamarFarmaceutico: ["Crianças, gestantes, lesões extensas ou dúvida diagnóstica."],
          errosComuns: ["Tratar só uma pessoa da casa no caso de piolho."],
          comparativo: {
            titulo: "Situação x Abordagem",
            itens: [
              { nome: "Piolho (pediculose)", quando: "Produto tópico pediculicida + pente fino + repetir em 7 dias + tratar contactantes." },
              { nome: "Sarna (escabiose)", quando: "Aplicação em todo o corpo (couro cabeludo incluso) + lavar roupas/cama em água quente." },
              { nome: "Caso grave/dúvida", quando: "Encaminhar ao farmacêutico para diagnóstico e tratamento adequados." },
            ],
          },
        simulacao: {
          cliente: "Mae filho voltou da escola com piolho. Volta depois de uma semana.",
          falaBoa: "Lozao pediculicida mata piolhos mas ovos podem sobreviver. Repetir apos 7 dias. Pente fino. Lavar roupas em agua quente.",
          falaEvitar: "Passa inseticida de barata.",
        },
          quiz: [
            q(
              "No piolho, além do produto, é essencial orientar:",
              [
                "Só uma lavagem de cabelo",
                "Tratar contactantes e pentear fino",
                "Antibiótico oral",
                "Nada além do xampu",
              ],
              1,
              "Contactantes e remoção mecânica de lêndeas fazem parte do protocolo.",
            ),
            q(
              "Por que o tratamento de piolho deve ser repetido após 7-10 dias?",
              [
                "Porque o produto vence rápido",
                "Porque os ovos (lêndeas) não são eliminados pelo primeiro tratamento e eclodem após alguns dias",
                "Porque o piolho fica resistente",
                "Não precisa repetir",
              ],
              1,
              "O pediculicida mata os piolhos adultos, mas nem sempre elimina todos os ovos; a repetição elimina os que eclodem depois.",
            ),
            q(
              "No tratamento da sarna (escabiose), além do medicamento, o que mais é necessário?",
              [
                "Nada, só aplicar o produto",
                "Lavar roupas, lençóis e toalhas em água quente; tratar contactantes",
                "Apenas arejar o ambiente",
                "Passar inseticida na casa",
              ],
              1,
              "O ácaro da sarna sobrevive em roupas e roupas de cama; lavar em água quente elimina o parasita do ambiente.",
            ),
            q(
              "Criança com suspeita de sarna. Produto vendido sem receita é suficiente?",
              [
                "Sim, qualquer produto resolve",
                "Necessário encaminhar ao farmacêutico — o diagnóstico correto é essencial, especialmente em crianças",
                "Pode usar o mesmo produto de piolho",
                "Só passar pomada hidratante",
              ],
              1,
              "Sarna em crianças merece confirmação e prescrição adequada; o farmacêutico avalia o caso.",
            ),
          ],
          xp: 55,
        },
        {
          id: "antibioticos",
          titulo: "Antibióticos e o uso racional",
          duracaoMin: 7,
          nivel: "avancado",
          resumo:
            "Antibióticos só com receita, retenção e atenção à resistência bacteriana. Regra de referência atual: RDC 471/2021.",
          resumoExecutivo: [
            "Antibióticos exigem prescrição e retenção/registro; nunca venda livre.",
            "A regra de referência atual para antimicrobianos é a RDC 471/2021, que substituiu a antiga RDC 20/2011.",
            "Reforçar adesão (não parar antes do fim) para evitar resistência bacteriana.",
          ],
          checklist: [
            "Conferir validade e dados da receita.",
            "Reforçar uso completo do tratamento.",
            "Encaminhar ao farmacêutico.",
          ],
          quandoChamarFarmaceutico: ["Toda dispensação de antimicrobiano e dúvidas de receita."],
          errosComuns: [
            "Citar a RDC 20/2011 como regra vigente — foi substituída pela RDC 471/2021.",
          ],
          comparativo: {
            titulo: "Antibiótico x Cuidado no balcão",
            itens: [
              { nome: "Com receita válida", quando: "Conferir dados, reter receita, registrar, reforçar adesão e encaminhar ao farmacêutico." },
              { nome: "Sem receita", quando: "NUNCA dispensar. Orientar sobre risco de automedicação e resistência bacteriana." },
              { nome: "Receita vencida/incompleta", quando: "Não dispensar; orientar retorno ao médico para renovação." },
            ],
          },
        simulacao: {
          cliente: "Quer comprar amoxicilina para dor de garganta. Nao tem receita.",
          falaBoa: "Antibiotico sem receita e proibido por lei. Dor de garganta pode ser viral. Precisa de avaliacao medica.",
          falaEvitar: "Nao vendo sem receita.",
        },
          quiz: [
            q(
              "Qual norma é a referência atual para dispensação de antimicrobianos?",
              [
                "RDC 20/2011",
                "RDC 471/2021 (substituiu a RDC 20/2011)",
                "Portaria 344/1998 apenas",
                "Nenhuma norma",
              ],
              1,
              "A RDC 471/2021 substituiu a RDC 20/2011 como referência para antimicrobianos.",
            ),
            q(
              "Por que não se deve parar o antibiótico antes do fim do tratamento mesmo melhorando?",
              [
                "Para gastar todo o medicamento",
                "Porque as bactérias mais resistentes podem sobreviver e se multiplicar, gerando resistência bacteriana",
                "Porque o médico mandou",
                "Não tem problema parar antes",
              ],
              1,
              "Interromper o tratamento precocemente seleciona bactérias resistentes, comprometendo a eficácia futura do antibiótico.",
            ),
            q(
              "Uma receita de antibiótico deve conter obrigatoriamente:",
              [
                "Apenas o nome do medicamento",
                "Prescritor, paciente, medicamento, dose, duração, data e validade — tudo legível",
                "Só o carimbo do médico",
                "O preço do medicamento",
              ],
              1,
              "A receita de antimicrobiano deve ser completa e legível; qualquer divergência exige esclarecimento com o farmacêutico.",
            ),
            q(
              "Cliente diz que 'só vai tomar antibiótico por 3 dias porque já melhorou'. Qual a orientação?",
              [
                "Está certo, pode parar",
                "Explicar que o tratamento deve ser completo conforme prescrição para evitar resistência bacteriana",
                "Dizer para tomar o dobro nos 3 dias",
                "Não falar nada",
              ],
              1,
              "A adesão ao tempo completo de tratamento é essencial para erradicar a infecção e prevenir resistência.",
            ),
          ],
          xp: 80,
        },
      ],
    },
    {
      id: "receituarios-programas",
      titulo: "Receituários, Controlados e Programas Públicos",
      descricao: "Tipos de receita, controle especial, atualização de GLP-1 e Farmácia Popular.",
      imagemHeroUrl: imagensCategoria.receituarios,
      aulas: [
        {
          id: "receituarios",
          titulo: "Receitas simples e controladas",
          duracaoMin: 7,
          nivel: "avancado",
          videoUrl: videosPiloto.receituarios,
          resumo:
            "Receita comum, controle especial e a base legal: Portaria SVS/MS 344/1998 atualizada por RDCs posteriores.",
          resumoExecutivo: [
            "Receita simples (branca) para tarja vermelha sem retenção; receita de controle especial (2 vias) e notificação para listas controladas.",
            "A lista de substâncias controladas tem base na Portaria SVS/MS 344/1998, atualizada dinamicamente por RDCs (inclusive 2024).",
            "Conferir dados do prescritor, paciente, validade e legibilidade.",
          ],
          comparativo: {
            titulo: "Receita x Uso",
            itens: [
              {
                nome: "Receita branca simples",
                quando: "Tarja vermelha sem retenção.",
              },
              {
                nome: "Controle especial (2 vias)",
                quando: "Retém uma via; listas C.",
              },
              {
                nome: "Notificação (A/B)",
                quando: "Entorpecentes/psicotrópicos; controle rígido.",
              },
            ],
          },
          checklist: [
            "Conferir validade e dados.",
            "Reter via quando exigido.",
            "Encaminhar controlados ao farmacêutico.",
          ],
          quandoChamarFarmaceutico: ["Toda receita controlada e divergências na prescrição."],
          errosComuns: ["Aceitar receita controlada vencida ou incompleta."],
          simulacao: {
            cliente: "Cliente quer comprar Rivotril (clonazepam) tarja preta com receita de outro estado.",
            falaBoa: "Receitas de controle especial de outros estados sao aceitas, mas vou chamar o farmaceutico para conferir a validade e os dados. Medicamento tarja preta exige retencao.",
            falaEvitar: "Receita de outro estado nao vale nada.",
          },
          quiz: [
            q(
              "A base legal das substâncias sob controle especial é:",
              [
                "Apenas a RDC 20/2011",
                "Portaria SVS/MS 344/1998, atualizada por RDCs posteriores",
                "Nenhuma",
                "Somente o Código Civil",
              ],
              1,
              "A Portaria 344/1998 é a base, atualizada dinamicamente por RDCs (inclusive 2024).",
            ),
            q(
              "Qual a validade padrão de uma receita de controle especial (lista C)?",
              [
                "30 dias",
                "Válida por 90 dias a partir da data de emissão",
                "1 ano",
                "Não tem validade",
              ],
              1,
              "Receitas de controle especial (lista C) têm validade de 90 dias, salvo prazo menor indicado pelo prescritor.",
            ),
            q(
              "Receita de notificação A (entorpecente) geralmente tem validade de:",
              [
                "30 dias a partir da emissão",
                "90 dias",
                "6 meses",
                "1 ano",
              ],
              0,
              "Notificações de receita A (entorpecentes) têm validade de 30 dias, com quantidade limitada ao tratamento.",
            ),
            q(
              "Se uma receita controlada estiver ilegível no nome do medicamento, o atendente deve:",
              [
                "Adivinhar pelo nome do paciente",
                "Não dispensar e encaminhar ao farmacêutico para esclarecimento",
                "Dispensar o genérico do medicamento mais comum",
                "Pedir para o cliente ligar para o médico na hora",
              ],
              1,
              "Ilegibilidade impede a dispensação segura; o farmacêutico deve esclarecer com o prescritor.",
            ),
          ],
          xp: 80,
        },
        {
          id: "leitura-receitas-casos",
          titulo: "Leitura de receitas — casos visuais no balcão",
          duracaoMin: 8,
          nivel: "avancado",
          resumo:
            "Prática guiada: conferir prescrição, validade, retenção e encaminhamento com exemplos do dia a dia.",
          resumoExecutivo: [
            "Sempre conferir prescritor, paciente, data e legibilidade antes de qualquer dispensação.",
            "Antimicrobianos e GLP-1: retenção e registro conforme norma vigente.",
            "Divergência entre receita e pedido do cliente → farmacêutico.",
          ],
          comparativo: {
            titulo: "Divergência na receita x Conduta",
            itens: [
              { nome: "Nome do paciente ilegível", quando: "Não dispensar; chamar o farmacêutico para esclarecer." },
              { nome: "Receita sem data", quando: "Considerar inválida; orientar retorno ao prescritor." },
              { nome: "Medicamento diferente do pedido", quando: "Seguir a receita; se cliente questionar, chamar o farmacêutico." },
              { nome: "Dose ou posologia incompleta", quando: "Não dispensar; encaminhar ao farmacêutico para esclarecimento." },
            ],
          },
          simulacao: {
            cliente:
              "Cliente apressado entrega receita amassada e pede 'o mais barato' de antibiótico.",
            falaBoa:
              "Vou conferir sua receita com calma e chamar o farmacêutico para garantir que está tudo certo com o medicamento prescrito.",
            falaEvitar: "Dispensar rápido sem ler a receita.",
          },
          checklist: [
            "Ler prescrição completa.",
            "Verificar validade e retenção.",
            "Não trocar por outro princípio sem autorização.",
          ],
          quandoChamarFarmaceutico: ["Toda receita com dúvida, controlado ou antimicrobiano."],
          errosComuns: ["Priorizar preço em detrimento da prescrição."],
          quiz: [
            q(
              "Receita ilegível no nome do paciente. Conduta:",
              [
                "Adivinhar",
                "Não dispensar até esclarecer com farmacêutico",
                "Copiar de outra receita",
                "Dispensar se o cliente insistir",
              ],
              1,
              "Ilegibilidade exige esclarecimento — não dispensar no escuro.",
            ),
            q(
              "O que fazer se a receita pede amoxicilina 500mg e o cliente quer amoxicilina 875mg 'porque é mais forte'?",
              [
                "Vender a de 875mg, o cliente sabe o que precisa",
                "Explicar que a dose prescrita deve ser seguida e chamar o farmacêutico se o cliente insistir na troca",
                "Trocar sem questionar",
                "Vender as duas",
              ],
              1,
              "A dose prescrita pelo médico deve ser respeitada; qualquer alteração requer avaliação do farmacêutico.",
            ),
            q(
              "Receita de antibiótico com validade de 15 dias. Hoje é o 16º dia. O que fazer?",
              [
                "Dispensar normalmente, 1 dia não faz diferença",
                "Não dispensar — receita vencida perde a validade legal",
                "Dispensar metade do tratamento",
                "Pode dispensar se o cliente jurar que o médico autorizou",
              ],
              1,
              "Receita vencida não tem validade legal para dispensação; orientar renovação com o prescritor.",
            ),
            q(
              "Na leitura de receitas, por que conferir o carimbo e a assinatura do prescritor?",
              [
                "Para saber o preço do consultório",
                "Para confirmar a identidade e a habilitação legal do profissional que prescreveu",
                "Para decorar o nome do médico",
                "Não precisa conferir",
              ],
              1,
              "Carimbo e assinatura garantem que a prescrição foi emitida por profissional habilitado e responsável.",
            ),
          ],
          xp: 75,
        },
        {
          id: "glp1",
          titulo: "GLP-1 atualizado: retenção de receita (IN 360/2025)",
          duracaoMin: 7,
          nivel: "avancado",
          resumo:
            "Agonistas de GLP-1 passaram a exigir retenção de receita; ensine a operação de forma responsável e sem glamour de emagrecimento.",
          resumoExecutivo: [
            "Desde 23/06/2025, os agonistas do receptor de GLP-1 listados pela IN 360/2025 passaram a ser dispensados com retenção de receita.",
            "Receita com validade de 90 dias; possível prescrição eletrônica com assinatura avançada; escrituração interna obrigatória e integração com o SNGPC conforme cronograma da Anvisa.",
            "Exemplos: semaglutida, liraglutida, dulaglutida e tirzepatida. Foco em uso racional, nunca em 'glamour' de emagrecimento.",
          ],
          comparativo: {
            titulo: "GLP-1 antes x depois da IN 360/2025",
            itens: [
              { nome: "Antes de 23/06/2025", quando: "Dispensação sem retenção de receita; registro comum." },
              { nome: "Após 23/06/2025", quando: "Retenção obrigatória de receita; validade 90 dias; escrituração interna." },
              { nome: "Exigências adicionais", quando: "Integração futura com SNGPC; prescrição eletrônica com assinatura avançada permitida." },
            ],
          },
          simulacao: {
            cliente:
              "Cliente quer comprar uma caneta de GLP-1 'para emagrecer rápido', sem receita.",
            falaBoa:
              "Esse medicamento passou a exigir retenção de receita. Sem a prescrição válida não posso dispensar. Vou chamar o farmacêutico para te orientar com segurança sobre o uso correto.",
            falaEvitar: "Posso dar um jeito sem receita.",
          },
          checklist: [
            "Exigir e reter a receita (validade 90 dias).",
            "Registrar a escrituração interna.",
            "Encaminhar ao farmacêutico e focar uso racional.",
          ],
          quandoChamarFarmaceutico: ["Toda dispensação de GLP-1 e orientações de uso/efeitos."],
          errosComuns: [
            "Dispensar GLP-1 sem retenção de receita.",
            "Tratar como produto de emagrecimento sem critério clínico.",
          ],
          quiz: [
            q(
              "Desde quando os GLP-1 da IN 360/2025 exigem retenção de receita?",
              [
                "Nunca exigiram",
                "Desde 23/06/2025, com validade de 90 dias",
                "Apenas em 2030",
                "Somente para genéricos",
              ],
              1,
              "A IN 360/2025 instituiu a retenção a partir de 23/06/2025, receita válida por 90 dias e escrituração interna.",
            ),
            q(
              "Qual destes é um exemplo de agonista GLP-1?",
              [
                "Paracetamol",
                "Semaglutida",
                "Dipirona",
                "Amoxicilina",
              ],
              1,
              "Semaglutida é um agonista do receptor de GLP-1; os demais são analgésicos e antibiótico.",
            ),
            q(
              "Por que o uso de GLP-1 para emagrecimento deve ser tratado com responsabilidade no balcão?",
              [
                "Porque é um medicamento seguro e sem efeitos colaterais",
                "Porque o uso sem critério clínico pode trazer riscos à saúde; o atendente deve focar no uso racional e na necessidade de prescrição",
                "Porque é muito caro",
                "Porque não funciona para emagrecer",
              ],
              1,
              "GLP-1 são medicamentos com indicações específicas e efeitos colaterais; uso indiscriminado para estética é preocupação de saúde pública.",
            ),
            q(
              "Qual o prazo de validade da receita para dispensação de GLP-1 conforme IN 360/2025?",
              [
                "30 dias",
                "60 dias",
                "90 dias",
                "180 dias",
              ],
              2,
              "A receita para GLP-1 tem validade de 90 dias, conforme estabelecido na IN 360/2025.",
            ),
          ],
          xp: 90,
        },
        {
          id: "farmacia-popular",
          titulo: "Farmácia Popular atualizado (2025)",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo:
            "O programa mudou: hoje oferece gratuidade ampliada e novos itens. Conecte balcão, orientação e impacto público.",
          resumoExecutivo: [
            "Desde 14/02/2025, o programa passou a disponibilizar gratuitamente 100% dos medicamentos e insumos do elenco.",
            "Cobertura de 12 indicações de saúde; inclui também fraldas geriátricas.",
            "Absorventes higiênicos para beneficiárias do Programa Dignidade Menstrual.",
          ],
          checklist: [
            "Orientar o cidadão sobre gratuidade e documentos.",
            "Conectar à adesão e ao impacto social.",
          ],
          quandoChamarFarmaceutico: ["Dúvidas de elegibilidade e dispensação pelo programa."],
          errosComuns: [
            "Informar copagamento desatualizado — hoje há gratuidade de 100% do elenco.",
          ],
          comparativo: {
            titulo: "Farmácia Popular antes x depois de 14/02/2025",
            itens: [
              { nome: "Antes de 14/02/2025", quando: "Copagamento (paciente pagava parte); elenco restrito." },
              { nome: "Após 14/02/2025", quando: "100% gratuito; 12 indicações de saúde; fraldas geriátricas incluídas." },
              { nome: "Dignidade Menstrual", quando: "Absorventes higiênicos gratuitos para beneficiárias do programa." },
            ],
          },
        simulacao: {
          cliente: "Idoso nao consegue mais comprar remedio pelo programa.",
          falaBoa: "Farmacia Popular cobre alguns medicamentos. Vou verificar o CPF. Sugiro conversar com o medico sobre alternativas.",
          falaEvitar: "Programa mudou paga do bolso.",
        },
          quiz: [
            q(
              "O que mudou no Farmácia Popular a partir de 14/02/2025?",
              [
                "Acabou o programa",
                "Passou a oferecer gratuitamente 100% do elenco, com 12 indicações, fraldas geriátricas e absorventes (Dignidade Menstrual)",
                "Só atende particulares",
                "Subiu o copagamento",
              ],
              1,
              "Desde 14/02/2025 há gratuidade de 100% do elenco, 12 indicações, fraldas geriátricas e absorventes.",
            ),
            q(
              "O Farmácia Popular cobre medicamentos para quantas indicações de saúde?",
              [
                "5 indicações",
                "12 indicações",
                "Apenas 1 (diabetes)",
                "Todos os medicamentos",
              ],
              1,
              "O programa cobre medicamentos para 12 indicações de saúde, incluindo asma, diabetes, hipertensão e osteoporose.",
            ),
            q(
              "Além de medicamentos, quais itens o Farmácia Popular passou a oferecer em 2025?",
              [
                "Artigos de perfumaria",
                "Fraldas geriátricas e absorventes higiênicos (Dignidade Menstrual)",
                "Suplementos alimentares",
                "Cosméticos",
              ],
              1,
              "Fraldas geriátricas e absorventes higiênicos foram incorporados ao programa em 2025.",
            ),
            q(
              "Um cliente diz que 'o Farmácia Popular agora é tudo pago'. Como o atendente deve orientar?",
              [
                "Confirmar que realmente acabou a gratuidade",
                "Corrigir a informação: desde 14/02/2025 o programa oferece gratuidade de 100% do elenco para as indicações cobertas",
                "Falar que não sabe",
                "Dizer que só vale para idosos",
              ],
              1,
              "Houve desinformação; na verdade o programa ampliou a gratuidade para 100% do elenco. O atendente deve corrigir com segurança.",
            ),
          ],
          xp: 60,
        },
      ],
    },
    {
      id: "cuidado-seguranca",
      titulo: "Cuidado, Segurança e Adesão",
      descricao:
        "Primeiros socorros, injetáveis, sazonalidade, adesão ao tratamento e encaminhamento.",
      imagemHeroUrl: imagensCategoria.seguranca,
      aulas: [
        {
          id: "primeiros-socorros",
          titulo: "Primeiros socorros no balcão",
          duracaoMin: 6,
          nivel: "intermediario",
          videoUrl: "https://www.youtube.com/watch?v=Q2bHNFVEO0k",
          resumo: "Condutas básicas, limites do atendente e quando acionar emergência (192).",
          resumoExecutivo: [
            "Saber estabilizar e orientar até ajuda especializada; conhecer os limites do papel.",
            "Em sinais graves (dor no peito, desmaio, falta de ar, sangramento intenso), acionar SAMU 192.",
          ],
          comparativo: {
            titulo: "Situação x Conduta no balcão",
            itens: [
              { nome: "Desmaio/desmaio iminente", quando: "Deitar a pessoa, elevar pernas, afrouxar roupas, acionar farmacêutico e 192 se não recuperar." },
              { nome: "Sangramento intenso", quando: "Comprimir o local com gaze/tecido limpo, elevar membro, acionar emergência." },
              { nome: "Engasgo", quando: "Manobra de Heimlich se consciente; se inconsciente, acionar 192 imediatamente." },
              { nome: "Dor no peito + falta de ar", quando: "Não dar nada por via oral. Acionar SAMU 192 e farmacêutico. Manter calmo." },
            ],
          },
          checklist: [
            "Manter a calma e a segurança.",
            "Acionar farmacêutico e 192 quando necessário.",
          ],
          quandoChamarFarmaceutico: ["Sempre que houver dúvida clínica ou sinais de gravidade."],
          errosComuns: ["Tentar resolver quadro grave sozinho, sem acionar emergência."],
          simulacao: {
            cliente: "Cliente passa mal no balcao com dor no peito e suor frio.",
            falaBoa: "Sente aqui. Vou chamar o SAMU 192 e o farmaceutico agora. Nao se mova. Respire devagar.",
            falaEvitar: "E so ansiedade. Toma um calmante.",
          },
          quiz: [
            q(
              "Diante de dor no peito intensa e falta de ar, a conduta é:",
              [
                "Vender um analgésico",
                "Acionar emergência (192) e o farmacêutico",
                "Mandar esperar em casa",
                "Ignorar",
              ],
              1,
              "Sinais de gravidade exigem acionar emergência imediatamente.",
            ),
            q(
              "Em caso de engasgo com pessoa consciente, a manobra indicada é:",
              [
                "Bater nas costas com força",
                "Manobra de Heimlich (compressão abdominal)",
                "Dar água para descer",
                "Colocar o dedo na garganta",
              ],
              1,
              "A manobra de Heimlich é a técnica recomendada para desobstrução das vias aéreas em adultos conscientes engasgados.",
            ),
            q(
              "Uma criança caiu e bateu a cabeça. Está confusa. O que fazer?",
              [
                "Passar gelo e mandar para casa",
                "Não movimentar o pescoço; acionar emergência 192 imediatamente",
                "Dar um analgésico e observar",
                "Deitar e esperar melhorar",
              ],
              1,
              "Trauma craniano com confusão mental sugere lesão neurológica; não movimentar a coluna cervical e acionar emergência.",
            ),
            q(
              "Qual o número de emergência do SAMU?",
              ["190", "192", "193", "199"],
              1,
              "SAMU (Serviço de Atendimento Móvel de Urgência) é acionado pelo 192; 190 é Polícia, 193 é Bombeiros.",
            ),
          ],
          xp: 55,
        },
        {
          id: "injetaveis",
          titulo: "Injetáveis e aplicação segura",
          duracaoMin: 7,
          nivel: "avancado",
          resumo:
            "Tipos de injetáveis, cadeia de frio, descarte e aplicação como ato do farmacêutico/enfermagem.",
          resumoExecutivo: [
            "Aplicação de injetáveis e vacinas segue normas (ex.: RDC 197/2017 para serviços de vacinação) e é ato técnico.",
            "Cadeia de frio e descarte de perfurocortantes são essenciais.",
            "Canetas (ex.: GLP-1) exigem orientação de armazenamento, técnica e descarte.",
          ],
          checklist: [
            "Garantir cadeia de frio.",
            "Orientar descarte correto.",
            "Encaminhar aplicação ao profissional habilitado.",
          ],
          quandoChamarFarmaceutico: [
            "Aplicação, técnica e dúvidas de armazenamento de injetáveis.",
          ],
          errosComuns: ["Orientar descarte de agulha no lixo comum."],
          comparativo: {
            titulo: "Injetável x Cuidado específico",
            itens: [
              { nome: "IM (intramuscular)", quando: "Aplicar em região de grande massa muscular (glúteo, deltoide); agulha mais longa." },
              { nome: "SC (subcutânea)", quando: "Aplicar no tecido subcutâneo (abdômen, coxa); agulha curta; canetas GLP-1 são SC." },
              { nome: "IV (intravenosa)", quando: "Aplicação direta na veia; exclusiva do farmacêutico/enfermeiro; maior risco." },
            ],
          },
        simulacao: {
          cliente: "Comprou injecao de vitamina B12 para aplicar em casa.",
          falaBoa: "Injecao intramuscular exige tecnica. Agulha esteril e descarte seguro. O ideal e profissional de saude.",
          falaEvitar: "E facil so espetar no braco.",
        },
          quiz: [
            q(
              "Serviços de vacinação em farmácias têm requisitos mínimos na:",
              ["RDC 197/2017", "RDC 20/2011", "Lei do Inquilinato", "Nenhuma norma"],
              0,
              "A RDC 197/2017 define requisitos mínimos para serviços de vacinação em farmácias.",
            ),
            q(
              "Onde deve ser descartada uma agulha usada?",
              [
                "No lixo comum",
                "Em recipiente específico para perfurocortantes (descarpack)",
                "No vaso sanitário",
                "Embrulhada em jornal e jogada no lixo",
              ],
              1,
              "Perfurocortantes exigem descarte em recipiente rígido específico (descarpack) para evitar acidentes e contaminação.",
            ),
            q(
              "Canetas de GLP-1 (ex.: semaglutida) são aplicadas por qual via?",
              [
                "Intramuscular (IM)",
                "Subcutânea (SC)",
                "Intravenosa (IV)",
                "Via oral",
              ],
              1,
              "GLP-1 injetáveis são administrados por via subcutânea (SC), geralmente no abdômen, coxa ou braço.",
            ),
            q(
              "O que é cadeia de frio e por que é importante para injetáveis?",
              [
                "É refrigerar o cliente após a aplicação",
                "É a manutenção da temperatura adequada (2-8°C) desde a fabricação até o uso, essencial para vacinas e insulinas",
                "É o tempo que a agulha leva para esfriar",
                "É opcional para medicamentos injetáveis",
              ],
              1,
              "Muitos injetáveis (vacinas, insulinas, GLP-1) perdem a eficácia se a refrigeração for interrompida; a cadeia de frio garante a potência.",
            ),
          ],
          xp: 80,
        },
        {
          id: "adesao",
          titulo: "Adesão ao tratamento",
          duracaoMin: 7,
          nivel: "avancado",
          resumo:
            "Como apoiar o cliente a seguir o tratamento: rotina, lembretes, esquecimento de dose e efeitos iniciais.",
          resumoExecutivo: [
            "Adesão é seguir o tratamento como prescrito; organização por dia/horário aumenta a continuidade.",
            "Orientar sobre armazenamento, descarte, o que fazer em esquecimento de dose e efeitos gastrointestinais iniciais (ex.: canetas injetáveis).",
            "Recompra no tempo certo é sinal de adesão — acompanhe com cuidado e ética.",
          ],
          comparativo: {
            titulo: "Situação x Conduta na adesão",
            itens: [
              { nome: "Esqueceu uma dose", quando: "Orientar o que diz a bula: geralmente tomar assim que lembrar, se não estiver perto da próxima; nunca dobrar." },
              { nome: "Efeitos colaterais iniciais", quando: "Orientar que alguns efeitos (náusea, tontura) podem passar; encaminhar ao farmacêutico se persistirem." },
              { nome: "Dificuldade com horários", quando: "Sugerir rotina (associar a refeições), alarme no celular e organizador semanal." },
            ],
          },
          simulacao: {
            cliente: "Cliente esquece de tomar o remédio nos horários certos.",
            falaBoa:
              "Que tal montarmos uma rotina? Associe a doses a refeições, use um organizador semanal e lembretes no celular. Se esquecer uma dose, oriento como proceder conforme a bula — e o farmacêutico pode ajustar com você.",
            falaEvitar: "Toma quando lembrar, tanto faz.",
          },
          checklist: [
            "Sugerir rotina e lembretes.",
            "Orientar conduta em esquecimento de dose.",
            "Acompanhar a recompra com ética.",
          ],
          quandoChamarFarmaceutico: [
            "Reações adversas, ajustes e dúvidas de esquecimento de dose.",
          ],
          errosComuns: ["Banalizar horários ('toma quando lembrar')."],
          quiz: [
            q(
              "O que aumenta a adesão ao tratamento?",
              [
                "Não ter horários",
                "Rotina, lembretes e organização por dia/horário",
                "Parar quando melhorar",
                "Dobrar a dose esquecida sempre",
              ],
              1,
              "Rotina, lembretes e organização cronológica ajudam o paciente a seguir o tratamento.",
            ),
            q(
              "Se o cliente esqueceu de tomar uma dose e está perto do horário da próxima, a conduta é:",
              [
                "Tomar as duas doses juntas",
                "Pular a dose esquecida e tomar a próxima no horário normal",
                "Tomar a dose agora e a próxima 1 hora depois",
                "Parar o tratamento",
              ],
              1,
              "Pular a dose esquecida evita superdose; dobrar doses pode ser perigoso. Sempre seguir a orientação da bula.",
            ),
            q(
              "Por que a recompra no tempo certo é um indicador de adesão?",
              [
                "Porque o cliente está gastando dinheiro",
                "Porque sugere que o cliente está usando o medicamento regularmente conforme prescrito",
                "Porque a farmácia fatura mais",
                "Não significa nada",
              ],
              1,
              "Recompra no prazo esperado indica que o tratamento está sendo seguido; atrasos podem sinalizar baixa adesão.",
            ),
            q(
              "Cliente relata náusea nos primeiros dias com uma caneta GLP-1. Qual a orientação?",
              [
                "Parar imediatamente o tratamento",
                "Orientar que náusea inicial é comum e tende a melhorar; encaminhar ao farmacêutico se persistir ou for intensa",
                "Dobrar a dose para 'acostumar'",
                "Trocar por outro medicamento sem consultar",
              ],
              1,
              "Efeitos gastrointestinais iniciais são comuns com GLP-1; orientar que geralmente melhoram, mas encaminhar se persistirem.",
            ),
          ],
          xp: 80,
        },
        {
          id: "encaminhamento",
          titulo: "Encaminhamento ao farmacêutico e sazonalidade",
          duracaoMin: 5,
          nivel: "intermediario",
          resumo:
            "Quando e como encaminhar, e como antecipar picos sazonais (gripe, alergia, calor).",
          resumoExecutivo: [
            "Encaminhar não é fraqueza: é segurança. O farmacêutico tem atribuições clínicas (orientação, uso racional, avaliação de adesão).",
            "Sazonalidade orienta estoque e abordagem (inverno: respiratórios; verão: fotoproteção, repelentes).",
          ],
          comparativo: {
            titulo: "Época do ano x Demanda típica",
            itens: [
              { nome: "Inverno (maio-agosto)", quando: "Antigripais, descongestionantes, xaropes, vitaminas C, lenços." },
              { nome: "Verão (dezembro-março)", quando: "Fotoprotetores, repelentes, antialérgicos, soro de reidratação." },
              { nome: "Primavera (setembro-novembro)", quando: "Antialérgicos (polinização), descongestionantes nasais." },
            ],
          },
          checklist: ["Encaminhar com clareza e acolhimento.", "Antecipar demandas sazonais."],
          quandoChamarFarmaceutico: ["Sempre que ultrapassar o autocuidado orientado."],
          errosComuns: ["Insistir em resolver sozinho para 'não perder a venda'."],
        simulacao: {
          cliente: "Tosse persistente ha mais de 3 semanas.",
          falaBoa: "Tosse por 3 semanas merece investigacao. Pode ser alergia refluxo ou asma. Vou chamar o farmaceutico.",
          falaEvitar: "Tosse demora compra outro xarope.",
        },
          quiz: [
            q(
              "Encaminhar ao farmacêutico significa:",
              [
                "Perder a venda",
                "Garantir segurança e uso racional",
                "Fraqueza do atendente",
                "Empurrar problema",
              ],
              1,
              "O encaminhamento é parte do cuidado: garante segurança e uso racional.",
            ),
            q(
              "Qual grupo de medicamentos tem maior demanda no inverno?",
              [
                "Fotoprotetores e repelentes",
                "Antigripais, descongestionantes e xaropes",
                "Antialérgicos para pólen",
                "Soros de reidratação",
              ],
              1,
              "No inverno aumentam os casos de gripes e resfriados, elevando a procura por sintomáticos respiratórios.",
            ),
            q(
              "Quais sintomas em uma criança pequena justificam encaminhamento ao farmacêutico?",
              [
                "Coriza leve por 1 dia",
                "Febre acima de 39°C, prostração ou recusa alimentar",
                "Espirros isolados",
                "Tosse seca há 2 dias sem febre",
              ],
              1,
              "Febre alta, prostração e recusa alimentar em crianças são sinais de alerta que exigem avaliação do farmacêutico.",
            ),
            q(
              "No verão, picos de demanda por fotoprotetores e repelentes. Como o atendente pode se preparar?",
              [
                "Ignorar a sazonalidade",
                "Antecipar estoque e se informar sobre os produtos para orientar corretamente os clientes",
                "Só vender o que tem",
                "Recomendar qualquer protetor solar sem orientação",
              ],
              1,
              "Antecipar a demanda sazonal permite melhor atendimento: estoque adequado e conhecimento técnico sobre os produtos.",
            ),
          ],
          xp: 50,
        },
      ],
    },
  ],
};
