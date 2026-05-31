import type { Trilha } from "./types";
import { q } from "./_helpers";

// Trilha 2 — preserva o manual técnico integralmente, com camada crítica de
// atualização regulatória (RDC 471/2021, GLP-1 IN 360/2025, Farmácia Popular 2025).
export const trilhaMedicamentos: Trilha = {
  id: "medicamentos",
  numero: 2,
  titulo: "Medicamentos, Balcão Seguro e Saúde Integral",
  subtitulo: "Atendente Premium II",
  descricao:
    "Leitura de receitas, triagem segura, OTC/MIP, classes terapêuticas, adesão ao tratamento e encaminhamento ao farmacêutico — sempre com foco no uso racional.",
  nivelFaixa: "Do intermediário ao avançado",
  icone: "pill",
  modulos: [
    {
      id: "fundamentos",
      titulo: "Fundamentos do Medicamento",
      descricao: "Conceitos, princípio ativo, formas farmacêuticas e vias de administração.",
      aulas: [
        {
          id: "conceitos",
          titulo: "Remédio x Medicamento: conceitos essenciais",
          duracaoMin: 6,
          nivel: "basico",
          resumo: "A diferença entre remédio, medicamento, droga e fármaco, e por que isso importa no balcão.",
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
          checklist: ["Localizar o princípio ativo na embalagem.", "Atenção a excipientes em alérgicos."],
          quandoChamarFarmaceutico: ["Cliente com alergia a excipientes ou dúvida sobre composição."],
          errosComuns: ["Confundir excipiente com princípio ativo."],
          quiz: [
            q(
              "O que produz o efeito terapêutico?",
              ["Excipiente", "Princípio ativo", "A embalagem", "O corante"],
              1,
              "O princípio ativo é responsável pelo efeito; o excipiente dá forma ao produto.",
            ),
          ],
          xp: 45,
        },
        {
          id: "formas-farmaceuticas",
          titulo: "Formas farmacêuticas",
          duracaoMin: 7,
          nivel: "basico",
          resumo: "Comprimidos, cápsulas, xaropes, suspensões, pomadas, supositórios, injetáveis e mais.",
          resumoExecutivo: [
            "A forma influencia velocidade de ação, sabor, dose e adesão.",
            "Suspensões precisam ser agitadas; efervescentes dissolvidos; sublinguais não engolidos.",
            "Crianças e idosos podem precisar de formas líquidas/orodispersíveis.",
          ],
          comparativo: {
            titulo: "Forma x Situação",
            itens: [
              { nome: "Líquido/suspensão", quando: "Crianças e quem tem dificuldade para engolir." },
              { nome: "Sublingual", quando: "Ação rápida; não engolir." },
              { nome: "Tópico (pomada/creme)", quando: "Ação local na pele." },
            ],
          },
          checklist: ["Explicar o modo de uso de cada forma.", "Adequar a forma ao perfil do cliente."],
          quandoChamarFarmaceutico: ["Dúvida sobre conversão de dose entre formas."],
          errosComuns: ["Orientar engolir um comprimido sublingual."],
          quiz: [
            q(
              "Comprimido sublingual deve ser:",
              ["Engolido com água", "Dissolvido embaixo da língua", "Mastigado sempre", "Diluído no suco"],
              1,
              "O sublingual age pela mucosa sob a língua e não deve ser engolido.",
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
          checklist: ["Identificar a via na prescrição/bula.", "Orientar cuidados específicos da via."],
          quandoChamarFarmaceutico: ["Aplicação de injetáveis e técnica de inalação com dúvidas."],
          errosComuns: ["Confundir via tópica com uso oral."],
          quiz: [
            q(
              "A via de administração influencia principalmente:",
              ["A cor do produto", "A rapidez e os cuidados de uso", "O preço sempre", "A marca"],
              1,
              "A via afeta velocidade de ação e cuidados (jejum, agitação, refrigeração, etc.).",
            ),
          ],
          xp: 45,
        },
      ],
    },
    {
      id: "bula-classificacao",
      titulo: "Bula, Tarjas e Classificação",
      descricao: "Leitura segura de bula, tarjas, MIP e a diferença entre genéricos, similares e referência.",
      aulas: [
        {
          id: "bula",
          titulo: "Bula e leitura segura (metodologia visual)",
          duracaoMin: 8,
          nivel: "intermediario",
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
              { nome: "Contraindicações/Interações", quando: "'O que não posso fazer?'" },
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
              { nome: "Tarja vermelha", quando: "Exige receita; pode ter retenção." },
              { nome: "Tarja preta", quando: "Controle especial, retenção obrigatória." },
            ],
          },
          checklist: ["Identificar a tarja na embalagem.", "Conferir receita quando exigida.", "Encaminhar controlados ao farmacêutico."],
          quandoChamarFarmaceutico: ["Toda dispensação de tarja preta/controlados e dúvidas de receita."],
          errosComuns: ["Vender tarja vermelha sem receita válida."],
          quiz: [
            q(
              "Medicamentos de tarja preta exigem:",
              ["Venda livre", "Apenas orientação verbal", "Retenção obrigatória de receita e maior controle", "Nada de especial"],
              2,
              "Tarja preta tem controle especial, com retenção obrigatória de receita.",
            ),
          ],
          xp: 60,
        },
        {
          id: "mip-otc",
          titulo: "MIP e autocuidado orientado",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "Medicamentos isentos de prescrição: o que pode ser orientado e os limites de segurança.",
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
          checklist: ["Fazer triagem de sinais de alerta.", "Orientar dose e tempo de uso do MIP.", "Encaminhar quando ultrapassar o autocuidado."],
          quandoChamarFarmaceutico: ["Sintomas persistentes, intensos, em grupos sensíveis ou com alerta."],
          errosComuns: ["Indicar dose acima da bula.", "Tratar sintoma de alerta como simples."],
          quiz: [
            q(
              "Dor de cabeça intensa por vários dias sem melhora é caso de:",
              ["Dobrar a dose do MIP", "Triagem e encaminhamento", "Ignorar", "Trocar de marca apenas"],
              1,
              "Sinais persistentes pedem triagem e encaminhamento, não aumento de dose.",
            ),
          ],
          xp: 60,
        },
        {
          id: "genericos",
          titulo: "Genéricos, similares e referência",
          duracaoMin: 6,
          nivel: "basico",
          resumo: "Diferenças, bioequivalência, intercambialidade e como explicar ao cliente com segurança.",
          resumoExecutivo: [
            "Referência: o original, com pesquisa clínica. Genérico: mesmo princípio ativo, bioequivalente, intercambiável, identificado pela tarja com 'G'.",
            "Similar: marca própria, hoje com exigências de equivalência; intercambialidade segue regras.",
            "A substituição por genérico, quando cabível, é atribuição do farmacêutico.",
          ],
          comparativo: {
            titulo: "Categoria x Característica",
            itens: [
              { nome: "Referência", quando: "Original, marca, pesquisa clínica." },
              { nome: "Genérico", quando: "Mesmo ativo, bioequivalente, intercambiável." },
              { nome: "Similar", quando: "Nome comercial próprio, com equivalência exigida." },
            ],
          },
          checklist: ["Explicar a diferença sem desvalorizar opções.", "Encaminhar a troca ao farmacêutico."],
          quandoChamarFarmaceutico: ["Substituição/intercambialidade de medicamento prescrito."],
          errosComuns: ["Dizer que genérico 'é mais fraco' — é bioequivalente."],
          quiz: [
            q(
              "Sobre genéricos, é correto dizer:",
              ["São mais fracos", "Têm o mesmo princípio ativo e são bioequivalentes ao referência", "Não têm registro", "São sempre piores"],
              1,
              "Genéricos têm o mesmo princípio ativo, comprovam bioequivalência e são intercambiáveis.",
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
      aulas: [
        {
          id: "analgesicos-antitermicos",
          titulo: "Analgésicos, antitérmicos e antissépticos",
          duracaoMin: 7,
          nivel: "intermediario",
          resumo: "Dor e febre leves, antissépticos de uso comum e limites do autocuidado.",
          resumoExecutivo: [
            "Paracetamol e dipirona são comuns para dor/febre; respeitar dose máxima diária.",
            "Antissépticos (ex.: clorexidina, PVPI) são para pele/ferimentos superficiais.",
            "Febre alta persistente ou dor intensa exigem avaliação.",
          ],
          checklist: ["Conferir dose máxima diária.", "Orientar tempo de uso.", "Triagem de sinais de alerta."],
          quandoChamarFarmaceutico: ["Febre alta prolongada, dor intensa, uso em crianças/gestantes."],
          errosComuns: ["Somar vários produtos com o mesmo princípio ativo (risco de superdose)."],
          quiz: [
            q(
              "Risco comum ao associar antigripais e analgésicos sem critério:",
              ["Nenhum", "Superdose do mesmo princípio ativo (ex.: paracetamol)", "Melhora garantida", "Validade maior"],
              1,
              "Vários produtos podem conter o mesmo ativo, levando à superdose — atenção e encaminhamento.",
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
          checklist: ["Verificar exigência de receita.", "Alertar sobre estômago e direção/sonolência."],
          quandoChamarFarmaceutico: ["Uso prolongado, gastrite, hipertensos, anticoagulados."],
          errosComuns: ["Indicar AINE para quem tem histórico gástrico sem avaliação."],
          quiz: [
            q(
              "AINEs (anti-inflamatórios) costumam exigir cautela com:",
              ["A cor da embalagem", "Estômago e interações", "O sabor", "A marca"],
              1,
              "AINEs podem irritar a mucosa gástrica e interagir com outros fármacos.",
            ),
          ],
          xp: 55,
        },
        {
          id: "gripe-alergia-tosse",
          titulo: "Antigripais, descongestionantes, antialérgicos e tosse",
          duracaoMin: 7,
          nivel: "intermediario",
          resumo: "Sintomáticos respiratórios, antitussígenos x expectorantes e cuidados em grupos sensíveis.",
          resumoExecutivo: [
            "Antitussígeno seca a tosse seca; expectorante ajuda a eliminar secreção (tosse produtiva) — não combinar sem critério.",
            "Descongestionantes nasais podem causar efeito rebote se usados além do tempo.",
            "Antialérgicos de 1ª geração dão sono; idosos e motoristas precisam de cautela.",
          ],
          comparativo: {
            titulo: "Tosse seca x produtiva",
            itens: [
              { nome: "Tosse seca", quando: "Antitussígeno (suprime o reflexo)." },
              { nome: "Tosse com catarro", quando: "Expectorante/mucolítico (fluidifica)." },
            ],
          },
          checklist: ["Diferenciar tipo de tosse.", "Alertar sobre rebote nasal e sonolência."],
          quandoChamarFarmaceutico: ["Tosse persistente (>2-3 semanas), falta de ar, sintomas em crianças."],
          errosComuns: ["Combinar antitussígeno com expectorante sem critério."],
          quiz: [
            q(
              "Para tosse com catarro (produtiva), o indicado geralmente é:",
              ["Antitussígeno", "Expectorante/mucolítico", "Descongestionante apenas", "Nada"],
              1,
              "Tosse produtiva pede expectorante; antitussígeno é para tosse seca.",
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
          quandoChamarFarmaceutico: ["Diarreia com sangue/febre, dor abdominal intensa, sintomas persistentes."],
          errosComuns: ["Focar só no antidiarreico e esquecer a hidratação."],
          quiz: [
            q(
              "Na diarreia aguda, a prioridade é:",
              ["Antibiótico sempre", "Hidratação (soro de reidratação)", "Laxativo", "Jejum total"],
              1,
              "Reidratação é prioridade; antidiarreicos têm limites e sinais de alerta exigem encaminhamento.",
            ),
          ],
          xp: 60,
        },
        {
          id: "antimicoticos-vitaminas",
          titulo: "Antimicóticos, vitaminas, orexígenos, pediculicidas e escabicidas",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "Antifúngicos tópicos, suplementação, estimulantes de apetite e tratamento de piolho/sarna.",
          resumoExecutivo: [
            "Antimicóticos tópicos para micoses superficiais; lesões extensas exigem avaliação.",
            "Vitaminas não substituem alimentação; orientar uso racional.",
            "Pediculicidas/escabicidas pedem orientação de aplicação e repetição correta.",
          ],
          checklist: ["Orientar aplicação correta e tempo.", "Reforçar uso racional de vitaminas."],
          quandoChamarFarmaceutico: ["Micoses extensas, suspeita de sarna disseminada, uso em crianças."],
          errosComuns: ["Indicar vitamina como 'cura' para tudo."],
          quiz: [
            q(
              "Sobre vitaminas, o correto é orientar que:",
              ["Substituem a alimentação", "Não substituem alimentação e exigem uso racional", "Quanto mais, melhor", "Curam qualquer doença"],
              1,
              "Vitaminas complementam, não substituem alimentação; uso deve ser racional.",
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
          checklist: ["Conferir validade e dados da receita.", "Reforçar uso completo do tratamento.", "Encaminhar ao farmacêutico."],
          quandoChamarFarmaceutico: ["Toda dispensação de antimicrobiano e dúvidas de receita."],
          errosComuns: ["Citar a RDC 20/2011 como regra vigente — foi substituída pela RDC 471/2021."],
          quiz: [
            q(
              "Qual norma é a referência atual para dispensação de antimicrobianos?",
              ["RDC 20/2011", "RDC 471/2021 (substituiu a RDC 20/2011)", "Portaria 344/1998 apenas", "Nenhuma norma"],
              1,
              "A RDC 471/2021 substituiu a RDC 20/2011 como referência para antimicrobianos.",
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
      aulas: [
        {
          id: "receituarios",
          titulo: "Receitas simples e controladas",
          duracaoMin: 7,
          nivel: "avancado",
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
              { nome: "Receita branca simples", quando: "Tarja vermelha sem retenção." },
              { nome: "Controle especial (2 vias)", quando: "Retém uma via; listas C." },
              { nome: "Notificação (A/B)", quando: "Entorpecentes/psicotrópicos; controle rígido." },
            ],
          },
          checklist: ["Conferir validade e dados.", "Reter via quando exigido.", "Encaminhar controlados ao farmacêutico."],
          quandoChamarFarmaceutico: ["Toda receita controlada e divergências na prescrição."],
          errosComuns: ["Aceitar receita controlada vencida ou incompleta."],
          quiz: [
            q(
              "A base legal das substâncias sob controle especial é:",
              ["Apenas a RDC 20/2011", "Portaria SVS/MS 344/1998, atualizada por RDCs posteriores", "Nenhuma", "Somente o Código Civil"],
              1,
              "A Portaria 344/1998 é a base, atualizada dinamicamente por RDCs (inclusive 2024).",
            ),
          ],
          xp: 80,
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
          simulacao: {
            cliente: "Cliente quer comprar uma caneta de GLP-1 'para emagrecer rápido', sem receita.",
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
          errosComuns: ["Dispensar GLP-1 sem retenção de receita.", "Tratar como produto de emagrecimento sem critério clínico."],
          quiz: [
            q(
              "Desde quando os GLP-1 da IN 360/2025 exigem retenção de receita?",
              ["Nunca exigiram", "Desde 23/06/2025, com validade de 90 dias", "Apenas em 2030", "Somente para genéricos"],
              1,
              "A IN 360/2025 instituiu a retenção a partir de 23/06/2025, receita válida por 90 dias e escrituração interna.",
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
          checklist: ["Orientar o cidadão sobre gratuidade e documentos.", "Conectar à adesão e ao impacto social."],
          quandoChamarFarmaceutico: ["Dúvidas de elegibilidade e dispensação pelo programa."],
          errosComuns: ["Informar copagamento desatualizado — hoje há gratuidade de 100% do elenco."],
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
          ],
          xp: 60,
        },
      ],
    },
    {
      id: "cuidado-seguranca",
      titulo: "Cuidado, Segurança e Adesão",
      descricao: "Primeiros socorros, injetáveis, sazonalidade, adesão ao tratamento e encaminhamento.",
      aulas: [
        {
          id: "primeiros-socorros",
          titulo: "Primeiros socorros no balcão",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "Condutas básicas, limites do atendente e quando acionar emergência (192).",
          resumoExecutivo: [
            "Saber estabilizar e orientar até ajuda especializada; conhecer os limites do papel.",
            "Em sinais graves (dor no peito, desmaio, falta de ar, sangramento intenso), acionar SAMU 192.",
          ],
          checklist: ["Manter a calma e a segurança.", "Acionar farmacêutico e 192 quando necessário."],
          quandoChamarFarmaceutico: ["Sempre que houver dúvida clínica ou sinais de gravidade."],
          errosComuns: ["Tentar resolver quadro grave sozinho, sem acionar emergência."],
          quiz: [
            q(
              "Diante de dor no peito intensa e falta de ar, a conduta é:",
              ["Vender um analgésico", "Acionar emergência (192) e o farmacêutico", "Mandar esperar em casa", "Ignorar"],
              1,
              "Sinais de gravidade exigem acionar emergência imediatamente.",
            ),
          ],
          xp: 55,
        },
        {
          id: "injetaveis",
          titulo: "Injetáveis e aplicação segura",
          duracaoMin: 7,
          nivel: "avancado",
          resumo: "Tipos de injetáveis, cadeia de frio, descarte e aplicação como ato do farmacêutico/enfermagem.",
          resumoExecutivo: [
            "Aplicação de injetáveis e vacinas segue normas (ex.: RDC 197/2017 para serviços de vacinação) e é ato técnico.",
            "Cadeia de frio e descarte de perfurocortantes são essenciais.",
            "Canetas (ex.: GLP-1) exigem orientação de armazenamento, técnica e descarte.",
          ],
          checklist: ["Garantir cadeia de frio.", "Orientar descarte correto.", "Encaminhar aplicação ao profissional habilitado."],
          quandoChamarFarmaceutico: ["Aplicação, técnica e dúvidas de armazenamento de injetáveis."],
          errosComuns: ["Orientar descarte de agulha no lixo comum."],
          quiz: [
            q(
              "Serviços de vacinação em farmácias têm requisitos mínimos na:",
              ["RDC 197/2017", "RDC 20/2011", "Lei do Inquilinato", "Nenhuma norma"],
              0,
              "A RDC 197/2017 define requisitos mínimos para serviços de vacinação em farmácias.",
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
          simulacao: {
            cliente: "Cliente esquece de tomar o remédio nos horários certos.",
            falaBoa:
              "Que tal montarmos uma rotina? Associe a doses a refeições, use um organizador semanal e lembretes no celular. Se esquecer uma dose, oriento como proceder conforme a bula — e o farmacêutico pode ajustar com você.",
            falaEvitar: "Toma quando lembrar, tanto faz.",
          },
          checklist: ["Sugerir rotina e lembretes.", "Orientar conduta em esquecimento de dose.", "Acompanhar a recompra com ética."],
          quandoChamarFarmaceutico: ["Reações adversas, ajustes e dúvidas de esquecimento de dose."],
          errosComuns: ["Banalizar horários ('toma quando lembrar')."],
          quiz: [
            q(
              "O que aumenta a adesão ao tratamento?",
              ["Não ter horários", "Rotina, lembretes e organização por dia/horário", "Parar quando melhorar", "Dobrar a dose esquecida sempre"],
              1,
              "Rotina, lembretes e organização cronológica ajudam o paciente a seguir o tratamento.",
            ),
          ],
          xp: 80,
        },
        {
          id: "encaminhamento",
          titulo: "Encaminhamento ao farmacêutico e sazonalidade",
          duracaoMin: 5,
          nivel: "intermediario",
          resumo: "Quando e como encaminhar, e como antecipar picos sazonais (gripe, alergia, calor).",
          resumoExecutivo: [
            "Encaminhar não é fraqueza: é segurança. O farmacêutico tem atribuições clínicas (orientação, uso racional, avaliação de adesão).",
            "Sazonalidade orienta estoque e abordagem (inverno: respiratórios; verão: fotoproteção, repelentes).",
          ],
          checklist: ["Encaminhar com clareza e acolhimento.", "Antecipar demandas sazonais."],
          quandoChamarFarmaceutico: ["Sempre que ultrapassar o autocuidado orientado."],
          errosComuns: ["Insistir em resolver sozinho para 'não perder a venda'."],
          quiz: [
            q(
              "Encaminhar ao farmacêutico significa:",
              ["Perder a venda", "Garantir segurança e uso racional", "Fraqueza do atendente", "Empurrar problema"],
              1,
              "O encaminhamento é parte do cuidado: garante segurança e uso racional.",
            ),
          ],
          xp: 50,
        },
      ],
    },
  ],
};
