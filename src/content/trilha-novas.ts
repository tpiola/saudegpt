import type { Trilha } from "./types";
import { q } from "./_helpers";

// ─────────────────────────────────────────────────────────────
// TRILHA 5 — Fundamentos da Farmácia (32 aulas)
// ─────────────────────────────────────────────────────────────
export const trilhaFundamentos: Trilha = {
  id: "fundamentos",
  numero: 5,
  titulo: "Fundamentos da Farmácia",
  subtitulo: "Atendente III",
  descricao:
    "Base histórica, ética e científica da profissão farmacêutica. Anatomia, fisiologia, microbiologia, comunicação em saúde e biossegurança — os alicerces do atendimento de excelência.",
  nivelFaixa: "Do iniciante ao intermediário",
  icone: "book",
  modulos: [
    // ── Módulo 1: História da Profissão (6 aulas) ──
    {
      id: "historia-profissao",
      titulo: "História da Profissão Farmacêutica",
      descricao:
        "Das boticas coloniais ao sistema de saúde moderno: evolução, regulamentação e responsabilidades do profissional farmacêutico.",
      aulas: [
        {
          id: "historia-farmacia",
          titulo: "História da Farmácia no Brasil e no Mundo",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Das boticas artesanais do século XVII às farmácias modernas do século XXI — conheça a trajetória da profissão farmacêutica no Brasil e no mundo.",
          resumoExecutivo: [
            "A farmácia nasceu com as boticas portuguesas; a primeira do Brasil foi fundada em Salvador (1640) pelos jesuítas.",
            "O farmacêutico evoluiu de preparador artesanal a gatekeeper da saúde, com atribuições clínicas e regulatórias.",
            "A legislação brasileira (Lei 5.991/73, RDCs da Anvisa) define o que é privativo do farmacêutico e o papel do atendente.",
          ],
          comparativo: {
            titulo: "Botica x Farmácia Moderna",
            itens: [
              {
                nome: "Botica (séc. XVII-XIX)",
                quando:
                  "Preparo artesanal, sem padronização, venda de ervas e poções com base empírica.",
              },
              {
                nome: "Farmácia comercial (séc. XX)",
                quando:
                  "Industrialização, medicamentos sintéticos, surgimento do balconista como figura de venda.",
              },
              {
                nome: "Farmácia clínica (séc. XXI)",
                quando:
                  "Atendimento consultivo, cuidado farmacêutico, rastreamento de saúde e prevenção.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente diz: 'Antigamente o farmacêutico fazia o remédio na hora, né? Agora é tudo industrializado.'",
            falaBoa:
              "Isso mesmo, a farmácia mudou muito! Hoje os medicamentos passam por rigoroso controle de qualidade industrial. O farmacêutico continua essencial, mas agora cuidando do uso seguro e orientando você sobre cada medicamento.",
            falaEvitar:
              "É, antigamente era melhor, hoje é tudo caça-níquel.",
          },
          checklist: [
            "Saber que a farmácia brasileira começou com as boticas jesuítas.",
            "Entender que o farmacêutico atual é um profissional clínico, não só um dispensador.",
            "Conhecer as principais leis que regulam o exercício farmacêutico.",
            "Valorizar a evolução da profissão ao conversar com clientes.",
            "Diferenciar preparação artesanal (magistral) de industrialização.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente questiona a qualidade do medicamento industrializado vs. manipulado.",
            "Cliente faz afirmações incorretas sobre a legislação sanitária.",
          ],
          errosComuns: [
            "Tratar a história da farmácia como irrelevante para o atendimento de balcão.",
            "Desvalorizar o papel do farmacêutico perante o cliente.",
            "Confundir farmácia de manipulação com farmácia comercial.",
          ],
          quiz: [
            q(
              "Onde foi fundada a primeira botica no Brasil?",
              [
                "Rio de Janeiro, em 1565.",
                "Salvador, em 1640.",
                "São Paulo, em 1720.",
                "Recife, em 1500.",
              ],
              1,
              "A primeira botica brasileira foi fundada em Salvador (1640) pelos jesuítas.",
            ),
            q(
              "Qual a principal mudança da farmácia no século XX?",
              [
                "O farmacêutico passou a preparar remédios na hora.",
                "A industrialização substituiu o preparo artesanal em larga escala.",
                "As boticas foram proibidas.",
                "Os medicamentos perderam registro.",
              ],
              1,
              "A industrialização trouxe medicamentos produzidos em larga escala com controle de qualidade.",
            ),
            q(
              "Hoje, o farmacêutico atua principalmente como:",
              [
                "Apenas vendedor de medicamentos.",
                "Gatekeeper da saúde, orientando e promovendo o uso racional.",
                "Preparador de poções e remédios caseiros.",
                "Caixa de supermercado.",
              ],
              1,
              "O farmacêutico moderno é um profissional clínico que promove o uso racional de medicamentos.",
            ),
          ],
          xp: 50,
        },
        {
          id: "profissional-farmaceutico",
          titulo: "O Profissional Farmacêutico e Suas Atribuições",
          duracaoMin: 12,
          nivel: "basico",
          resumo:
            "Entenda as responsabilidades legais e clínicas do farmacêutico, as áreas de atuação e como o atendente de farmácia se insere na equipe de saúde.",
          resumoExecutivo: [
            "O farmacêutico é o responsável técnico (RT) perante o CRF e a Vigilância Sanitária, respondendo legalmente por tudo que ocorre na farmácia.",
            "Suas atribuições incluem dispensação, atenção farmacêutica, gerenciamento de resíduos, treinamento de equipe e notificação de reações adversas.",
            "O atendente atua sob supervisão do farmacêutico e deve saber seus limites legais — jamais indicar medicamentos tarjados.",
          ],
          comparativo: {
            titulo: "Atribuições: Farmacêutico x Atendente",
            itens: [
              {
                nome: "Farmacêutico",
                quando:
                  "Dispensa medicamentos sob prescrição, realiza atenção farmacêutica, é o RT legal.",
              },
              {
                nome: "Atendente de farmácia",
                quando:
                  "Atende o cliente, organiza expositores, indica MIPs (com treinamento), reporta ao farmacêutico.",
              },
              {
                nome: "Técnico de farmácia",
                quando:
                  "Auxilia na dispensação sob supervisão do farmacêutico, realiza procedimentos administrativos.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente pergunta: 'Você pode me vender esse antibiótico sem receita? O farmacêutico nem está aqui.'",
            falaBoa:
              "Entendo sua necessidade, mas antibióticos só podem ser vendidos com receita médica, é lei. Posso chamar o farmacêutico por telefone para conversar com você, ou sugiro voltar com a receita.",
            falaEvitar:
              "Pode pegar sim, o farmacêutico não vai saber.",
          },
          checklist: [
            "Saber que antibióticos e tarjados exigem receita médica.",
            "Nunca dispensar medicamento sem autorização do farmacêutico.",
            "Conhecer o nome e o horário do farmacêutico responsável.",
            "Entender que o atendente responde administrativamente à farmácia, o RT responde ao CRF.",
            "Reportar imediatamente qualquer intercorrência ao farmacêutico.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente insiste em comprar medicamento controlado sem receita.",
            "Dúvida sobre interação medicamentosa ou contraindicação.",
            "Situação de emergência na farmácia (suspeita de intoxicação, reação alérgica).",
          ],
          errosComuns: [
            "Achar que pode vender qualquer medicamento se 'o cliente sabe o que toma'.",
            "Ignorar a presença obrigatória do farmacêutico no horário de funcionamento.",
            "Substituir o farmacêutico em orientações clínicas complexas.",
          ],
          quiz: [
            q(
              "Quem responde legalmente pela farmácia perante o CRF?",
              [
                "O proprietário do estabelecimento.",
                "O farmacêutico Responsável Técnico (RT).",
                "O atendente mais antigo.",
                "O gerente da loja.",
              ],
              1,
              "O RT é o profissional que responde técnica e legalmente pela farmácia junto ao CRF e Vigilância Sanitária.",
            ),
            q(
              "O atendente de farmácia pode dispensar um antibiótico sem receita se o farmacêutico não estiver?",
              [
                "Sim, se o cliente já conhece o medicamento.",
                "Não, antibióticos exigem receita e presença/ autorização do farmacêutico.",
                "Sim, desde que anote o nome do cliente.",
                "Sim, se for um antibiótico tópico.",
              ],
              1,
              "Antibióticos são medicamentos tarjados e exigem receita médica, dispensados sob supervisão farmacêutica.",
            ),
            q(
              "Qual destas é uma atribuição EXCLUSIVA do farmacêutico?",
              [
                "Organizar a prateleira de xampus.",
                "Realizar atenção farmacêutica e dispensação de tarjados.",
                "Vender balas e doces.",
                "Limpar o balcão de atendimento.",
              ],
              1,
              "A atenção farmacêutica e a dispensação de medicamentos sob prescrição são atribuições privativas do farmacêutico.",
            ),
          ],
          xp: 55,
        },
        {
          id: "etica-farmaceutica",
          titulo: "Ética Farmacêutica e Sigilo Profissional",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Princípios éticos que regem a profissão farmacêutica, a importância do sigilo profissional e a postura adequada no atendimento ao público.",
          resumoExecutivo: [
            "O sigilo farmacêutico protege informações de saúde do paciente; violá-lo é infração ética e legal (Código de Ética Farmacêutica, art. 8º).",
            "A equipe da farmácia deve tratar toda informação do cliente com discrição, especialmente sobre medicamentos de uso contínuo e condições de saúde.",
            "A ética no balcão inclui não julgar o cliente, não expor seu tratamento e não fazer indicações que extrapolem sua competência.",
          ],
          comparativo: {
            titulo: "Postura Ética x Antiética no Balcão",
            itens: [
              {
                nome: "Postura ética",
                quando:
                  "Fala em voz baixa sobre medicamentos, pergunta em local reservado, não comenta com outros clientes.",
              },
              {
                nome: "Postura antiética",
                quando:
                  "Comenta em voz alta sobre medicamento de cliente, faz piadas sobre diagnóstico, expõe condição de saúde.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente pergunta baixinho: 'Moça, você tem remédio pra impotência? Meu marido...' e outra pessoa está perto.",
            falaBoa:
              "Vou te atender com discrição aqui do lado. Sim, temos opções — mas esses medicamentos exigem prescrição e avaliação do farmacêutico. Vou chamá-lo para conversarmos com calma.",
            falaEvitar:
              "(Em voz alta) Impotência? Olha aqui na gôndola, temos tadalafila, viagra...",
          },
          checklist: [
            "Manter tom de voz baixo ao falar sobre medicamentos.",
            "Nunca comentar sobre clientes com outros clientes.",
            "Não fazer piadas ou comentários sobre diagnósticos.",
            "Encaminhar para local mais reservado se o assunto for sensível.",
            "Não expor o uso de medicamentos de terceiros.",
            "Registrar ocorrências apenas nos canais oficiais da farmácia.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente precisa de orientação sobre medicamentos de prescrição em situação constrangedora.",
            "Há dúvida sobre a conduta ética adequada em um caso específico.",
            "Cliente solicita falar em particular sobre sua condição de saúde.",
          ],
          errosComuns: [
            "Falar em voz alta sobre medicamentos íntimos ou diagnósticos.",
            "Fazer brincadeiras sobre condições de saúde dos clientes.",
            "Compartilhar informações de clientes com outros colegas sem necessidade.",
          ],
          quiz: [
            q(
              "O que o Código de Ética Farmacêutica diz sobre o sigilo profissional?",
              [
                "Pode ser quebrado se o atendente achar interessante.",
                "É obrigação do profissional farmacêutico e da equipe; violá-lo é infração ética.",
                "Só vale para médicos, não para farmacêuticos.",
                "Pode ser compartilhado nas redes sociais sem identificação.",
              ],
              1,
              "O sigilo profissional é obrigação ética e legal de toda a equipe da farmácia.",
            ),
            q(
              "Um cliente compra medicamento para HIV. Qual a conduta correta?",
              [
                "Comentar com outro cliente que está em tratamento.",
                "Postar nas redes sociais alertando sobre o caso.",
                "Atender com discrição total, sem comentar com ninguém.",
                "Perguntar em voz alta por que ele precisa do remédio.",
              ],
              2,
              "O sigilo sobre condições de saúde como HIV é absoluto — atenda com discrição total.",
            ),
            q(
              "Se um cliente pede orientação sobre disfunção erétil, o atendente deve:",
              [
                "Falar em voz alta para todo mundo ouvir.",
                "Chamar o farmacêutico e atender em local reservado.",
                "Dar risada e fazer piada.",
                "Falar que isso não se resolve com remédio.",
              ],
              1,
              "Assuntos sensíveis exigem atendimento discreto e encaminhamento ao farmacêutico.",
            ),
          ],
          xp: 50,
        },
        {
          id: "atuacao-atendente",
          titulo: "Atuação do Atendente de Farmácia",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "O papel do atendente no ecossistema da farmácia: atribuições, limites legais, postura profissional e responsabilidades diárias.",
          resumoExecutivo: [
            "O atendente é o primeiro contato do cliente; sua postura define a percepção de qualidade da farmácia.",
            "Suas funções incluem acolhimento, organização de expositores, reposição, indicação de MIPs e perfumaria, e direcionamento ao farmacêutico.",
            "O atendente NÃO pode prescrever, alterar receitas, dispensar tarjados sem supervisão ou dar diagnósticos.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'Estou com uma dor aqui no peito, acho que é gases. O que você me recomenda?'",
            falaBoa:
              "Dor no peito pode ter várias causas. Preciso chamar o farmacêutico para avaliar — e se for uma emergência, sugiro procurar o pronto-socorro imediatamente.",
            falaEvitar:
              "Toma um Luftal que passa. Pode ser só indigestão.",
          },
          checklist: [
            "Recepcionar o cliente com cordialidade e atenção.",
            "Identificar rapidamente se a solicitação requer farmacêutico.",
            "Conhecer os produtos da loja (MIPs, perfumaria, correlatos).",
            "Manter expositores organizados e precificados.",
            "Nunca opinar sobre diagnósticos ou trocar medicamentos prescritos.",
            "Registrar sugestões e reclamações no canal adequado.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com sintomas que podem indicar emergência (dor no peito, falta de ar).",
            "Dúvida sobre medicamento prescrito ou interação medicamentosa.",
            "Cliente solicita falar diretamente com o farmacêutico.",
          ],
          errosComuns: [
            "Achar que pode diagnosticar e tratar qualquer sintoma simples.",
            "Ignorar sinais de alerta (sintomas de emergência) para não 'perder a venda'.",
            "Tratar mal clientes com dúvidas repetitivas.",
          ],
          quiz: [
            q(
              "Qual a principal função do atendente de farmácia?",
              [
                "Substituir o farmacêutico quando ele não está.",
                "Acolher o cliente, organizar a loja e indicar MIPs/ perfumaria dentro dos limites legais.",
                "Prescrever medicamentos para sintomas comuns.",
                "Alterar receitas médicas a pedido do cliente.",
              ],
              1,
              "O atendente acolhe, organiza, indica MIPs e perfumaria, sempre dentro dos limites legais e sob supervisão do farmacêutico.",
            ),
            q(
              "O que o atendente NUNCA deve fazer?",
              [
                "Ouvir a queixa do cliente.",
                "Encaminhar ao farmacêutico.",
                "Opinar sobre um diagnóstico médico ou alterar receita.",
                "Organizar os produtos na prateleira.",
              ],
              2,
              "Opinar sobre diagnóstico ou alterar receita extrapola as atribuições legais do atendente.",
            ),
            q(
              "Cliente com dor no peito. Qual a melhor conduta?",
              [
                "Indicar o melhor analgésico do estoque.",
                "Encaminhar ao farmacêutico e sugerir avaliação médica de emergência.",
                "Ignorar e atender o próximo.",
                "Dar um copo d'água e mandar esperar.",
              ],
              1,
              "Dor no peito pode indicar emergência cardíaca. Deve-se chamar o farmacêutico e sugerir pronto-socorro.",
            ),
          ],
          xp: 50,
        },
        {
          id: "regulacao-saude",
          titulo: "Regulação em Saúde: Anvisa, CRF e Vigilância Sanitária",
          duracaoMin: 12,
          nivel: "basico",
          resumo:
            "Entenda o papel dos órgãos reguladores: Anvisa, CRF, Vigilância Sanitária e como suas normas impactam o dia a dia da farmácia.",
          resumoExecutivo: [
            "A Anvisa regula medicamentos, cosméticos e saneantes; aprova registros e emite RDCs que a farmácia deve cumprir.",
            "O CRF fiscaliza o exercício profissional do farmacêutico e exige o cumprimento do Código de Ética.",
            "A Vigilância Sanitária municipal fiscaliza o estabelecimento: validade, armazenamento, limpeza, descarte e documentação.",
          ],
          comparativo: {
            titulo: "Órgãos Reguladores e Suas Funções",
            itens: [
              {
                nome: "Anvisa",
                quando:
                  "Regula e fiscaliza medicamentos, cosméticos, alimentos; concede registro de produtos em âmbito nacional.",
              },
              {
                nome: "CRF (Conselho Regional de Farmácia)",
                quando:
                  "Fiscaliza o exercício profissional do farmacêutico; exige inscrição ativa e cumprimento do Código de Ética.",
              },
              {
                nome: "Vigilância Sanitária Municipal",
                quando:
                  "Fiscaliza o estabelecimento no município: condições sanitárias, validade, armazenamento e descarte.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Esse xarope está com o lacre violado. O que vocês vão fazer?'",
            falaBoa:
              "Vou recolher o produto imediatamente e registrar a ocorrência para a farmacêutica. Anote o lote e a validade — vamos acionar o fornecedor e reportar à Anvisa se necessário. Aqui está um vale para retirar outro lacrado.",
            falaEvitar:
              "Ah, isso é normal, pode levar assim mesmo.",
          },
          checklist: [
            "Conhecer as principais RDCs que afetam o balcão (RDC 471/2021, 44/2009).",
            "Saber que medicamentos vencidos ou com lacre violado não podem ser vendidos.",
            "Manter a documentação da farmácia organizada para fiscalização.",
            "Comunicar ao farmacêutico qualquer irregularidade no produto.",
            "Registrar corretamente a entrada e saída de medicamentos controlados.",
          ],
          quandoChamarFarmaceutico: [
            "Produto com suspeita de adulteração ou violação de lacre.",
            "Fiscalização sanitária no estabelecimento.",
            "Dúvida sobre documentação ou procedimento regulatório.",
          ],
          errosComuns: [
            "Ignorar prazos de validade na reposição de gôndola.",
            "Vender produto com lacre violado 'para não perder a venda'.",
            "Desconhecer a diferença entre as atribuições de Anvisa, CRF e Vigilância Sanitária.",
          ],
          quiz: [
            q(
              "Qual órgão é responsável por registrar medicamentos no Brasil?",
              [
                "CRF",
                "Anvisa",
                "Ministério da Saúde",
                "Vigilância Sanitária Municipal",
              ],
              1,
              "A Anvisa é a agência reguladora responsável pelo registro de medicamentos em âmbito nacional.",
            ),
            q(
              "O que fazer se um cliente devolve um medicamento com lacre violado?",
              [
                "Vender com desconto.",
                "Recolher, registrar ocorrência e não vender.",
                "Ignorar e colocar de volta na prateleira.",
                "Jogar no lixo comum.",
              ],
              1,
              "Produto violado deve ser recolhido, registrado e jamais vendido — pode representar risco à saúde.",
            ),
            q(
              "Qual órgão fiscaliza o exercício profissional do farmacêutico?",
              [
                "Anvisa",
                "CRF",
                "Polícia Federal",
                "Procon",
              ],
              1,
              "O CRF (Conselho Regional de Farmácia) é responsável pela fiscalização ética e profissional do farmacêutico.",
            ),
          ],
          xp: 55,
        },
        {
          id: "farmacia-tipos",
          titulo: "Tipos de Farmácia e Seus Segmentos",
          duracaoMin: 8,
          nivel: "basico",
          resumo:
            "Conheça os diferentes tipos de estabelecimentos farmacêuticos: farmácias comerciais, de manipulação, drogarias, redes e seus respectivos públicos.",
          resumoExecutivo: [
            "Farmácia comercial/drogaria vende medicamentos industrializados, perfumaria e correlatos; é o modelo mais comum.",
            "Farmácia de manipulação prepara fórmulas personalizadas sob prescrição; exige estrutura laboratorial.",
            "Farmácia hospitalar atende pacientes internados; farmácia pública distribui medicamentos do SUS gratuitamente.",
          ],
          comparativo: {
            titulo: "Tipos de Estabelecimento Farmacêutico",
            itens: [
              {
                nome: "Farmácia / Drogaria",
                quando:
                  "Venda de medicamentos industrializados, perfumaria, correlatos; foco no balcão e atendimento ao público.",
              },
              {
                nome: "Farmácia de Manipulação",
                quando:
                  "Preparo individualizado de fórmulas (cápsulas, pomadas) sob prescrição; atende necessidades específicas.",
              },
              {
                nome: "Farmácia Hospitalar",
                quando:
                  "Atende pacientes internados; gestão de estoque clínico, dose unitária e nutrição parenteral.",
              },
              {
                nome: "Farmácia Pública / SUS",
                quando:
                  "Distribuição gratuita de medicamentos essenciais; atende a programas de saúde pública.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Vocês fazem manipulação? Preciso de uma fórmula que a farmácia da esquina não faz mais.'",
            falaBoa:
              "Aqui somos uma drogaria, trabalhamos com medicamentos industrializados e perfumaria. Posso verificar se temos o princípio ativo em versão industrial, ou indicar uma farmácia de manipulação próxima que possa atender você.",
            falaEvitar:
              "Não, aqui não fazemos isso. (e vira as costas)",
          },
          checklist: [
            "Saber o tipo de farmácia onde trabalha (drogaria, manipulação, etc.).",
            "Conhecer o diferencial competitivo do seu estabelecimento.",
            "Saber indicar farmácias de outros segmentos quando necessário.",
            "Entender as limitações do seu estabelecimento.",
            "Comunicar claramente ao cliente o que seu estabelecimento oferece.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente pergunta sobre fórmula manipulada específica que a farmácia não tem.",
            "Indicação de estabelecimento concorrente de outro segmento.",
            "Dúvida sobre a viabilidade de substituir medicamento manipulado por industrializado.",
          ],
          errosComuns: [
            "Falar mal de outros estabelecimentos farmacêuticos para o cliente.",
            "Prometer serviço que a farmácia não oferece.",
            "Desconhecer o próprio segmento e seus diferenciais.",
          ],
          quiz: [
            q(
              "Qual a diferença entre farmácia e drogaria segundo a lei?",
              [
                "Não há diferença, são sinônimos.",
                "Farmácia pode manipular; drogaria comercializa apenas industrializados.",
                "Drogaria vende apenas perfumaria.",
                "Farmácia vende apenas medicamentos genéricos.",
              ],
              1,
              "Segundo a Lei 5.991/73, farmácia pode manipular; drogaria comercializa apenas produtos industrializados.",
            ),
            q(
              "Um cliente precisa de uma fórmula manipulada. O que fazer?",
              [
                "Tentar convencê-lo a comprar um industrializado qualquer.",
                "Informar que seu estabelecimento não oferece o serviço e indicar uma manipulação.",
                "Dizer que manipulação é coisa do passado.",
                "Vender qualquer coisa para não perder o cliente.",
              ],
              1,
              "Se o estabelecimento não oferece manipulação, indique uma farmácia que ofereça o serviço.",
            ),
            q(
              "Farmácia pública (SUS) tem como objetivo:",
              [
                "Vender medicamentos com lucro.",
                "Distribuir gratuitamente medicamentos essenciais à população.",
                "Atender apenas pacientes particulares.",
                "Manipular fórmulas estéticas.",
              ],
              1,
              "Farmácias públicas distribuem medicamentos essenciais gratuitamente como parte das políticas de saúde pública.",
            ),
          ],
          xp: 45,
        },
      ],
    },
    // ── Módulo 2: Anatomia e Fisiologia (6 aulas) ──
    {
      id: "anatomia-fisiologia",
      titulo: "Anatomia e Fisiologia Humana",
      descricao:
        "Visão geral do corpo humano: principais sistemas, seus órgãos e funções — o conhecimento básico que todo atendente de farmácia precisa dominar.",
      aulas: [
        {
          id: "introducao-corpo",
          titulo: "Introdução ao Corpo Humano: Células, Tecidos e Homeostase",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Conceitos fundamentais de anatomia e fisiologia: organização do corpo, tipos de tecidos e o princípio da homeostase.",
          resumoExecutivo: [
            "O corpo é organizado em níveis: células → tecidos → órgãos → sistemas → organismo completo.",
            "Existem 4 tipos básicos de tecido: epitelial, conjuntivo, muscular e nervoso — cada um com função específica.",
            "Homeostase é o equilíbrio interno que o corpo mantém constantemente; desequilíbrios geram doenças e sintomas.",
          ],
          comparativo: {
            titulo: "Os 4 Tipos de Tecido",
            itens: [
              {
                nome: "Tecido epitelial",
                quando:
                  "Reveste superfícies (pele, mucosas); proteção e absorção.",
              },
              {
                nome: "Tecido conjuntivo",
                quando:
                  "Sustenta e conecta (ossos, cartilagens, sangue, gordura).",
              },
              {
                nome: "Tecido muscular",
                quando:
                  "Promove movimento (músculos esqueléticos, cardíaco, liso).",
              },
              {
                nome: "Tecido nervoso",
                quando:
                  "Transmite sinais elétricos (cérebro, medula, nervos).",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'O médico disse que meu corpo está desregulado. O que significa isso?'",
            falaBoa:
              "Geralmente o médico se refere à homeostase — o equilíbrio interno do corpo. Pode ser algo hormonal, metabólico ou imunológico. O ideal é conversar com nosso farmacêutico, que pode ajudar a entender melhor a orientação médica.",
            falaEvitar:
              "Ah, é normal, todo mundo tem um desregulozinho.",
          },
          checklist: [
            "Entender a hierarquia de organização do corpo humano.",
            "Identificar os 4 tipos de tecido e suas funções.",
            "Explicar homeostase em linguagem simples para o cliente.",
            "Relacionar quebras de homeostase com sintomas comuns.",
            "Saber que o conhecimento de anatomia ajuda a entender medicamentos.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente pergunta sobre disfunção orgânica que exige avaliação clínica.",
            "Dúvida sobre como um medicamento age no organismo (mecanismo de ação).",
          ],
          errosComuns: [
            "Achar que anatomia é conhecimento desnecessário para atendente.",
            "Usar termos técnicos que confundem o cliente.",
            "Dar explicações imprecisas sobre o funcionamento do corpo.",
          ],
          quiz: [
            q(
              "Qual a sequência correta de organização do corpo humano?",
              [
                "Órgão → célula → tecido → sistema.",
                "Célula → tecido → órgão → sistema.",
                "Sistema → órgão → tecido → célula.",
                "Tecido → célula → sistema → órgão.",
              ],
              1,
              "A organização vai do menor ao maior: célula → tecido → órgão → sistema.",
            ),
            q(
              "O que é homeostase?",
              [
                "Um tipo de tecido.",
                "O equilíbrio interno que o corpo mantém constantemente.",
                "Uma doença inflamatória.",
                "Um órgão do sistema digestório.",
              ],
              1,
              "Homeostase é a capacidade do corpo de manter o equilíbrio interno apesar das mudanças externas.",
            ),
            q(
              "Qual tecido é responsável pela transmissão de sinais elétricos?",
              [
                "Epitelial",
                "Conjuntivo",
                "Nervoso",
                "Muscular",
              ],
              2,
              "O tecido nervoso (cérebro, medula, nervos) transmite impulsos elétricos por todo o corpo.",
            ),
          ],
          xp: 50,
        },
        {
          id: "sistema-digestorio",
          titulo: "Sistema Digestório: Como o Corpo Processa os Alimentos",
          duracaoMin: 12,
          nivel: "basico",
          resumo:
            "Órgãos do sistema digestório, processo de digestão e absorção, e os principais sintomas que levam clientes à farmácia.",
          resumoExecutivo: [
            "O sistema digestório vai da boca ao ânus: boca, esôfago, estômago, intestinos delgado e grosso, fígado e pâncreas.",
            "A digestão começa na boca (enzimas salivares) e termina no intestino delgado, onde os nutrientes são absorvidos.",
            "Os sintomas mais comuns no balcão são: azia, má digestão, constipação, diarreia e gases — todos relacionados ao sistema digestório.",
          ],
          comparativo: {
            titulo: "Principais Sintomas Digestivos",
            itens: [
              {
                nome: "Azia / queimação",
                quando:
                  "Refluxo ácido do estômago para o esôfago; pode ser esporádica ou crônica (DRGE).",
              },
              {
                nome: "Má digestão (dispepsia)",
                quando:
                  "Sensação de estômago pesado, plenitude após comer; causas variadas (alimentação, estresse, gastrite).",
              },
              {
                nome: "Constipação (prisão de ventre)",
                quando:
                  "Menos de 3 evacuações por semana; fezes ressecadas; comum por baixa ingestão de fibras e água.",
              },
              {
                nome: "Diarreia",
                quando:
                  "Fezes líquidas ou pastosas mais de 3x ao dia; pode ser viral, bacteriana ou por intoxicação alimentar.",
              },
              {
                nome: "Gases / flatulência",
                quando:
                  "Acúmulo de ar no trato digestivo; pode vir com distensão abdominal e cólicas.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Estou com azia toda vez que como. Já tomei bicarbonato mas não resolve.'",
            falaBoa:
              "Azia frequente pode ser refluxo ou gastrite. O bicarbonato alivia na hora, mas pode piorar a longo prazo. Posso indicar um antiácido moderno como MIP, mas se for recorrente, sugiro conversar com o farmacêutico e buscar avaliação médica.",
            falaEvitar:
              "Continua tomando bicarbonato que uma hora passa.",
          },
          checklist: [
            "Conhecer a sequência dos órgãos digestivos.",
            "Diferenciar MIPs para azia, má digestão, gases e diarreia.",
            "Perguntar sobre frequência e duração dos sintomas.",
            "Identificar sinais de alarme (sangue nas fezes, perda de peso, dor intensa).",
            "Indicar mudanças na alimentação como complemento ao tratamento.",
            "Encaminhar ao farmacêutico casos recorrentes ou com sinais de alerta.",
          ],
          quandoChamarFarmaceutico: [
            "Azia ou dor abdominal persistente por mais de 2 semanas.",
            "Presença de sangue nas fezes ou vômito.",
            "Cliente com diarreia intensa, desidratação ou febre alta.",
            "Cliente em uso de múltiplos medicamentos que podem interagir com antiácidos.",
          ],
          errosComuns: [
            "Recomendar antiácido sem perguntar sobre outros medicamentos (antiácidos interferem na absorção).",
            "Tratar toda dor abdominal como 'má digestão'.",
            "Indicar laxantes para constipação sem avaliar hábitos alimentares.",
          ],
          quiz: [
            q(
              "Qual órgão é responsável pela maior parte da absorção de nutrientes?",
              [
                "Estômago",
                "Intestino delgado",
                "Intestino grosso",
                "Pâncreas",
              ],
              1,
              "O intestino delgado é onde ocorre a maior parte da absorção de nutrientes.",
            ),
            q(
              "O que é DRGE?",
              [
                "Uma infecção intestinal.",
                "Doença do Refluxo Gastroesofágico — azia crônica que pode danificar o esôfago.",
                "Um tipo de diarreia.",
                "Uma alergia alimentar rara.",
              ],
              1,
              "DRGE é a Doença do Refluxo Gastroesofágico, condição crônica que exige acompanhamento médico.",
            ),
            q(
              "Qual sinal de alarme em sintomas digestivos NÃO pode ser ignorado pelo atendente?",
              [
                "Azia depois de comida apimentada.",
                "Presença de sangue nas fezes.",
                "Gases após feijão.",
                "Constipação de 2 dias.",
              ],
              1,
              "Sangue nas fezes é sinal de alarme que requer encaminhamento imediato ao médico.",
            ),
            q(
              "Por que o atendente deve perguntar sobre outros medicamentos antes de indicar um antiácido?",
              [
                "Por curiosidade do atendente.",
                "Porque antiácidos podem interferir na absorção de outros medicamentos.",
                "Porque antiácidos são sempre perigosos.",
                "Não precisa perguntar.",
              ],
              1,
              "Antiácidos alteram o pH gástrico e podem reduzir a absorção de vários medicamentos.",
            ),
          ],
          xp: 55,
        },
        {
          id: "sistema-cardiovascular",
          titulo: "Sistema Cardiovascular: Coração e Circulação",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Anatomia e fisiologia do sistema cardiovascular: coração, vasos sanguíneos, circulação e os medicamentos mais comuns no balcão.",
          resumoExecutivo: [
            "O coração bombeia sangue através de artérias (levam sangue do coração) e veias (trazem sangue ao coração).",
            "Pressão arterial é a força do sangue contra as paredes das artérias; hipertensão é o principal fator de risco cardiovascular.",
            "Medicamentos cardiovasculares comuns: anti-hipertensivos, estatinas, antiagregantes e anticoagulantes — todos exigem prescrição.",
          ],
          comparativo: {
            titulo: "Principais Condições Cardiovasculares",
            itens: [
              {
                nome: "Hipertensão arterial",
                quando:
                  "Pressão acima de 140/90 mmHg; principal fator de risco para AVC e infarto.",
              },
              {
                nome: "Aterosclerose",
                quando:
                  "Acúmulo de placas de gordura nas artérias; reduz fluxo sanguíneo e pode causar infarto.",
              },
              {
                nome: "Insuficiência cardíaca",
                quando:
                  "Coração não bombeia sangue eficientemente; causa cansaço, inchaço e falta de ar.",
              },
              {
                nome: "Arritmia cardíaca",
                quando:
                  "Batimentos irregulares; pode ser benigna ou exigir tratamento com anticoagulantes.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente idoso: 'Meu médico passou esse remédio para pressão mas estou com tontura. Será que é normal?'",
            falaBoa:
              "Tontura pode ser efeito colateral comum no início do tratamento anti-hipertensivo, mas preciso chamar o farmacêutico para avaliar. Não pare o medicamento por conta própria — isso pode ser perigoso.",
            falaEvitar:
              "Ah, então para de tomar que resolve.",
          },
          checklist: [
            "Saber que medicamentos cardiovasculares são tarjados e exigem prescrição.",
            "Entender a diferença entre artérias e veias.",
            "Identificar sintomas que podem indicar emergência cardiovascular (dor no peito, falta de ar).",
            "Conhecer os nomes comuns de anti-hipertensivos e estatinas.",
            "Reforçar a importância da adesão ao tratamento para clientes cardíacos.",
            "Encaminhar ao farmacêutico qualquer relato de efeito colateral.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente relata efeitos colaterais de medicação cardiovascular.",
            "Suspeita de emergência cardíaca (dor no peito, falta de ar, palidez súbita).",
            "Dúvida sobre interação entre medicamentos cardiovasculares e MIPs.",
            "Cliente quer parar o tratamento por conta própria.",
          ],
          errosComuns: [
            "Dizer ao cliente para parar a medicação por causa de efeito colateral.",
            "Indicar qualquer MIP sem verificar interação com medicamentos cardíacos.",
            "Ignorar sintomas de emergência cardiovascular no balcão.",
          ],
          quiz: [
            q(
              "Qual a diferença entre artérias e veias?",
              [
                "Não há diferença.",
                "Artérias levam sangue do coração; veias trazem sangue ao coração.",
                "Veias levam sangue do coração; artérias trazem sangue ao coração.",
                "Ambas fazem a mesma coisa.",
              ],
              1,
              "Artérias conduzem sangue do coração para o corpo; veias retornam o sangue ao coração.",
            ),
            q(
              "O que é considerado hipertensão arterial?",
              [
                "Pressão acima de 120/80 mmHg.",
                "Pressão acima de 140/90 mmHg sustentada.",
                "Pressão abaixo de 100/60 mmHg.",
                "Apenas quando a pressão máxima está acima de 200.",
              ],
              1,
              "Hipertensão é definida como pressão arterial sustentada acima de 140/90 mmHg.",
            ),
            q(
              "Um cliente com hipertensão relata tontura com o novo remédio. Qual a conduta?",
              [
                "Dizer para parar de tomar imediatamente.",
                "Chamar o farmacêutico — tontura pode ser efeito colateral, mas não se deve interromper tratamento sem avaliação.",
                "Aumentar a dose.",
                "Ignorar a queixa.",
              ],
              1,
              "Efeitos colaterais devem ser avaliados pelo farmacêutico; jamais oriente interrupção de tratamento.",
            ),
          ],
          xp: 60,
        },
        {
          id: "sistema-respiratorio",
          titulo: "Sistema Respiratório: Respiração e Principais Afecções",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Como funciona a respiração, os órgãos do sistema respiratório e as condições mais comuns que levam clientes à farmácia: gripes, resfriados, alergias e asma.",
          resumoExecutivo: [
            "O sistema respiratório inclui nariz, faringe, laringe, traqueia, brônquios e pulmões; a troca gasosa ocorre nos alvéolos.",
            "As queixas respiratórias mais comuns no balcão são: coriza, tosse, congestão nasal, espirros e falta de ar.",
            "MIPs respiratórios incluem descongestionantes, antialérgicos, expectorantes e antitussígenos — mas é preciso diferenciar sintomas.",
          ],
          comparativo: {
            titulo: "Gripe x Resfriado x Alergia",
            itens: [
              {
                nome: "Gripe (Influenza)",
                quando:
                  "Febre alta, dor no corpo, cansaço intenso, tosse seca; início súbito. Requer repouso e, em grupos de risco, antiviral.",
              },
              {
                nome: "Resfriado comum",
                quando:
                  "Coriza, espirros, congestão nasal, mal-estar leve; febre baixa ou ausente. Autolimitado, MIPs aliviam sintomas.",
              },
              {
                nome: "Rinite alérgica",
                quando:
                  "Espirros em salva, coriza clara, coceira no nariz e olhos; gatilhos alérgicos (pólen, poeira, ácaro). Antialérgicos MIP ajudam.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Estou com tosse há 3 dias, mas não estou com febre. O que tomar?'",
            falaBoa:
              "Vamos entender melhor sua tosse: ela é seca ou com catarro? Há outros sintomas como congestão ou dor no corpo? Se for tosse seca irritativa, temos antitussígenos MIP. Se houver catarro, melhor um expectorante. Se persistir por mais de uma semana, é bom conversar com o farmacêutico.",
            falaEvitar:
              "Toma esse xarope que é bom pra tudo.",
          },
          checklist: [
            "Perguntar se há febre — diferença crucial entre gripe e resfriado.",
            "Diferenciar tosse seca de tosse produtiva (com catarro).",
            "Perguntar sobre duração dos sintomas.",
            "Saber que descongestionantes nasais não devem ser usados por mais de 5 dias.",
            "Identificar sinais de alarme: falta de ar, febre alta persistente, chiado no peito.",
            "Orientar hidratação e repouso para quadros respiratórios virais.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com falta de ar, chiado ou cansaço aos esforços mínimos.",
            "Tosse persistente por mais de 2 semanas.",
            "Febre alta (>39°C) que não cede com antitérmicos.",
            "Cliente com asma ou DPOC solicitando orientação.",
          ],
          errosComuns: [
            "Indicar antitussígeno para tosse produtiva (com catarro) — pode reter secreção.",
            "Vender descongestionante nasal sem alertar sobre o limite de 5 dias.",
            "Confundir alergia respiratória com gripe.",
          ],
          quiz: [
            q(
              "Qual a diferença entre a tosse seca e a tosse produtiva no tratamento?",
              [
                "Não há diferença, ambas tratam igual.",
                "Tosse seca: antitussígeno. Tosse produtiva: expectorante/mucolítico.",
                "Tosse seca precisa de antibiótico.",
                "Tosse produtiva precisa de antitussígeno.",
              ],
              1,
              "Antitussígenos inibem o reflexo da tosse (tosse seca); expectorantes fluidificam o catarro (tosse produtiva).",
            ),
            q(
              "Por quanto tempo um cliente pode usar descongestionante nasal?",
              [
                "Até 5 dias; uso prolongado pode causar congestão rebote (rinite medicamentosa).",
                "Indefinidamente, não há risco.",
                "No máximo 30 dias.",
                "Apenas 1 dia.",
              ],
              0,
              "Descongestionantes nasais por mais de 5 dias podem causar efeito rebote e dependência.",
            ),
            q(
              "Qual sintoma sugere gripe (influenza) e não resfriado?",
              [
                "Apenas coriza.",
                "Febre alta e dor no corpo intensos de início súbito.",
                "Espirros isolados.",
                "Coceira no nariz.",
              ],
              1,
              "Gripe se caracteriza por febre alta, dores no corpo e cansaço intenso de início súbito.",
            ),
          ],
          xp: 55,
        },
        {
          id: "sistema-nervoso",
          titulo: "Sistema Nervoso: Dor, Emoções e Medicamentos",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Anatomia do sistema nervoso, tipos de dor, neurotransmissores e as classes de medicamentos que atuam no sistema nervoso.",
          resumoExecutivo: [
            "O sistema nervoso divide-se em central (SNC: cérebro e medula) e periférico (SNP: nervos pelo corpo).",
            "A dor pode ser nociceptiva (tecido lesionado), neuropática (nervo) ou inflamatória; cada tipo responde a medicamentos diferentes.",
            "No balcão, os MIPs mais comuns para o sistema nervoso são analgésicos (paracetamol, dipirona, ibuprofeno) — mas jamais para dor crônica sem avaliação.",
          ],
          comparativo: {
            titulo: "Tipos de Dor e Analgésicos Indicados",
            itens: [
              {
                nome: "Dor nociceptiva (muscular/óssea)",
                quando:
                  "Lesão tecidual. Responde a analgésicos comuns (paracetamol, dipirona, AINEs como ibuprofeno).",
              },
              {
                nome: "Dor neuropática",
                quando:
                  "Lesão/degeneração nervosa (ex.: hérnia, diabetes). Não responde bem a analgésicos comuns; exige medicamentos específicos (gabapentina, amitriptilina) sob prescrição.",
              },
              {
                nome: "Dor inflamatória",
                quando:
                  "Artrite, tendinite, pós-operatório. AINEs (ibuprofeno, diclofenaco) são mais eficazes que paracetamol isolado.",
              },
              {
                nome: "Dor crônica (>3 meses)",
                quando:
                  "Sempre exige avaliação médica; não basta 'matar a dor', precisa tratar a causa.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Estou com uma dor que não passa, uma queimação nas costas há meses. Tomo dipirona mas não resolve.'",
            falaBoa:
              "Dor que não passa com analgésicos comuns pode ser neuropática (relacionada aos nervos). Esse tipo de dor precisa de medicamentos específicos com prescrição. Sugiro conversar com o farmacêutico e buscar avaliação médica.",
            falaEvitar:
              "Toma um mais forte que resolve.",
          },
          checklist: [
            "Perguntar sobre tipo, localização e duração da dor.",
            "Saber que dor crônica (>3 meses) exige avaliação médica.",
            "Conhecer os limites dos analgésicos MIP (dose máxima, tempo de uso).",
            "Identificar sinais de alarme: dor intensa súbita, dor com febre, dor noturna persistente.",
            "Nunca sugerir medicamentos controlados para dor (opiáceos, tramadol) — só com prescrição.",
            "Encaminhar ao farmacêutico dores que não respondem a analgésicos comuns.",
          ],
          quandoChamarFarmaceutico: [
            "Dor que não melhora com analgésicos comuns (suspeita de dor neuropática).",
            "Cliente com dor crônica sem acompanhamento médico.",
            "Solicitação de medicamento controlado para dor sem receita.",
            "Suspeita de uso abusivo de analgésicos.",
          ],
          errosComuns: [
            "Indicar analgésico sem perguntar sobre a causa da dor.",
            "Sugerir 'analgésico mais forte' para dor que não responde ao tratamento.",
            "Achar que toda dor crônica pode ser resolvida no balcão.",
          ],
          quiz: [
            q(
              "Qual tipo de dor NÃO responde bem a analgésicos comuns como dipirona?",
              [
                "Dor de cabeça tensional.",
                "Dor neuropática (queimação, choque, formigamento).",
                "Dor muscular pós-treino.",
                "Cólica menstrual.",
              ],
              1,
              "Dor neuropática, caracterizada por queimação ou choque, não responde bem a analgésicos comuns.",
            ),
            q(
              "Por que um cliente não deve tomar analgésico para dor crônica por meses sem avaliação?",
              [
                "Porque o analgésico perde o efeito com o tempo.",
                "Porque a dor crônica tem causa subjacente que precisa ser tratada, não apenas mascarada.",
                "Porque analgésicos viciam em qualquer tempo de uso.",
                "Não há problema, pode continuar tomando.",
              ],
              1,
              "Dor crônica exige diagnóstico da causa; mascarar com analgésicos pode retardar o tratamento adequado.",
            ),
            q(
              "Dor neuropática costuma ser descrita como:",
              [
                "Pontada localizada.",
                "Queimação, formigamento ou choque.",
                "Peso nas pernas.",
                "Câimbra.",
              ],
              1,
              "Neuropatia é descrita como queimação, formigamento ou sensação de choque — diferente da dor nociceptiva.",
            ),
          ],
          xp: 60,
        },
        {
          id: "sistema-endocrino",
          titulo: "Sistema Endócrino: Hormônios e o Balcão da Farmácia",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Glândulas endócrinas, hormônios e as condições mais relevantes para o balcão: diabetes, tireoide e medicamentos hormonais.",
          resumoExecutivo: [
            "O sistema endócrino regula funções do corpo através de hormônios liberados por glândulas (hipófise, tireoide, pâncreas, adrenais, gônadas).",
            "Diabetes (pâncreas/insulina) e disfunções da tireoide (hipo/hipertireoidismo) são as condições endócrinas mais comuns no balcão.",
            "Medicamentos hormonais (anticoncepcionais, insulinas, levotiroxina) exigem prescrição e orientação sobre horários e interações.",
          ],
          comparativo: {
            titulo: "Diabetes Tipo 1 x Tipo 2",
            itens: [
              {
                nome: "Diabetes Tipo 1",
                quando:
                  "Autoimune; pâncreas não produz insulina. Início na infância/adolescência. Dependente de insulina exógena.",
              },
              {
                nome: "Diabetes Tipo 2",
                quando:
                  "Resistência à insulina; produção insuficiente. Mais comum em adultos, associado à obesidade. Tratamento com hipoglicemiantes orais e/ou insulina.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente diabético: 'Senti tontura e fome de repente. Pode ser o remédio para diabetes?'",
            falaBoa:
              "Isso pode ser hipoglicemia (açúcar baixo). Você comeu hoje? Tem glicosímetro? Vou chamar o farmacêutico para avaliar — se for hipoglicemia, precisa ingerir carboidrato rápido (suco, açúcar).",
            falaEvitar:
              "Não, não é nada. Toma água que passa.",
          },
          checklist: [
            "Saber que diabetes é uma condição que exige monitoramento contínuo.",
            "Conhecer os sinais de hipoglicemia (tontura, fome, suor frio, confusão) e hiperglicemia (sede excessiva, urina frequente).",
            "Saber que anticoncepcionais orais podem interagir com antibióticos e fitoterápicos (ex.: erva-de-são-joão).",
            "Orientar clientes sobre horários corretos dos medicamentos hormonais.",
            "Encaminhar ao farmacêutico dúvidas sobre ajuste de dose de insulina ou hormônios.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com sinais de hipoglicemia severa (confusão, desmaio).",
            "Dúvida sobre interação de anticoncepcional com outros medicamentos.",
            "Cliente que iniciou tratamento para diabetes ou tireoide e tem dúvidas.",
            "Cliente que perdeu dose de insulina e não sabe como proceder.",
          ],
          errosComuns: [
            "Confundir hipoglicemia com hiperglicemia.",
            "Dar orientações sobre insulina sem conhecimento completo.",
            "Indicar suplementos ou fitoterápicos para diabéticos sem verificar interações.",
          ],
          quiz: [
            q(
              "O que caracteriza o Diabetes Tipo 1?",
              [
                "O pâncreas produz insulina insuficiente por obesidade.",
                "O pâncreas não produz insulina por destruição autoimune das células beta.",
                "O corpo não responde à insulina (resistência).",
                "É sempre adquirido na vida adulta.",
              ],
              1,
              "DM1 é autoimune: o pâncreas não produz insulina, exigindo reposição exógena.",
            ),
            q(
              "Sinais de hipoglicemia (açúcar baixo) incluem:",
              [
                "Sede intensa e urina frequente.",
                "Tontura, fome súbita, suor frio e confusão.",
                "Febre e dor no corpo.",
                "Coceira e espirros.",
              ],
              1,
              "Hipoglicemia se manifesta com tontura, fome, sudorese fria e alteração do nível de consciência.",
            ),
            q(
              "Um cliente quer comprar anticoncepcional sem receita. O atendente deve:",
              [
                "Vender, pois é MIP.",
                "Exigir receita médica — anticoncepcionais são medicamentos tarjados.",
                "Vender só se a cliente for maior de idade.",
                "Indicar outro medicamento qualquer.",
              ],
              1,
              "Anticoncepcionais orais são medicamentos tarjados e exigem prescrição médica.",
            ),
          ],
          xp: 60,
        },
      ],
    },
    // ── Módulo 3: Microbiologia e Saúde (6 aulas) ──
    {
      id: "microbiologia-saude",
      titulo: "Microbiologia e Saúde Pública",
      descricao:
        "Microrganismos, sistema imunológico, principais doenças infecciosas e conceitos de saúde pública essenciais para o atendente.",
      aulas: [
        {
          id: "micro-organismos",
          titulo: "Microrganismos: Bactérias, Vírus, Fungos e Parasitas",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Conheça os principais grupos de microrganismos, suas características e como eles afetam a saúde humana.",
          resumoExecutivo: [
            "Bactérias: seres unicelulares que podem causar infecções (amigdalite, pneumonia); tratadas com antibióticos específicos.",
            "Vírus: menores que bactérias, precisam de células para se reproduzir (gripe, COVID-19, herpes); antibióticos não funcionam.",
            "Fungos: causam micoses (candidíase, pé de atleta); tratados com antifúngicos.",
            "Parasitas: protozoários e helmintos (giardíase, verminoses); tratados com antiparasitários.",
          ],
          comparativo: {
            titulo: "Bactéria x Vírus x Fungo",
            itens: [
              {
                nome: "Bactéria",
                quando:
                  "Ser vivo completo, reproduz-se sozinho. Ex.: garganta inflamada (Streptococcus), infecção urinária (E. coli). Tratamento: antibióticos.",
              },
              {
                nome: "Vírus",
                quando:
                  "Não é célula, precisa infectar uma célula para se reproduzir. Ex.: gripe, resfriado, COVID-19. Tratamento: antivirais específicos ou sintomáticos.",
              },
              {
                nome: "Fungo",
                quando:
                  "Organismo eucarioto, causa micoses. Ex.: candidíase, tinha. Tratamento: antifúngicos.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Toda vez que tenho garganta inflamada tomo amoxicilina e resolve. Pode vender?'",
            falaBoa:
              "Entendo que funciona para você, mas amoxicilina é antibiótico e só pode ser vendido com receita médica. Além disso, nem toda dor de garganta é bacteriana — muitas são virais e antibiótico não faz efeito, só causa resistência.",
            falaEvitar:
              "Pode vender sim, é a mesma coisa de sempre.",
          },
          checklist: [
            "Saber que antibióticos não tratam infecções virais.",
            "Nunca vender antibiótico sem receita.",
            "Explicar ao cliente a diferença entre infecção viral e bacteriana.",
            "Citar exemplos comuns de cada tipo de microrganismo.",
            "Alertar sobre o risco de resistência bacteriana por uso inadequado de antibióticos.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente insiste em comprar antibiótico sem receita.",
            "Cliente pergunta se pode usar 'sobra de antibiótico' de outro tratamento.",
            "Cliente com sintomas de infecção grave (febre alta, pus, prostração).",
          ],
          errosComuns: [
            "Achar que antibiótico serve para qualquer infecção.",
            "Sugerir 'sobra de antibiótico' para sintomas atuais.",
            "Confundir micose de pele com alergia.",
          ],
          quiz: [
            q(
              "Antibióticos funcionam contra:",
              [
                "Vírus (gripe, resfriado).",
                "Bactérias (amigdalite bacteriana, infecção urinária).",
                "Fungos (candidíase).",
                "Todos os tipos de infecção.",
              ],
              1,
              "Antibióticos atuam exclusivamente contra bactérias. Vírus e fungos requerem outros medicamentos.",
            ),
            q(
              "O que é resistência bacteriana?",
              [
                "Quando a bactéria morre mais rápido.",
                "Quando a bactéria se torna resistente ao antibiótico por uso inadequado.",
                "Quando o paciente não sente efeito colateral.",
                "Quando o antibiótico é muito forte.",
              ],
              1,
              "O uso inadequado de antibióticos seleciona bactérias resistentes, que não respondem mais ao tratamento.",
            ),
            q(
              "Qual destas infecções é tipicamente causada por FUNGO?",
              [
                "Amigdalite purulenta.",
                "Micose de unha (onicomicose).",
                "Pneumonia bacteriana.",
                "Gripe.",
              ],
              1,
              "Micose de unha é causada por fungos dermatófitos, tratada com antifúngicos específicos.",
            ),
          ],
          xp: 50,
        },
        {
          id: "sistema-imunologico",
          titulo: "Sistema Imunológico: Como o Corpo se Defende",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Funcionamento do sistema imunológico, tipos de imunidade, vacinação e como o atendente pode orientar sobre prevenção.",
          resumoExecutivo: [
            "A imunidade inata é a primeira barreira (pele, mucosas, células de defesa inespecíficas); a imunidade adaptativa é específica para cada agente (anticorpos).",
            "As vacinas estimulam a imunidade adaptativa a produzir anticorpos sem causar a doença — é por isso que são a melhor forma de prevenção.",
            "Imunossupressores (corticoides, quimioterápicos) reduzem a defesa do corpo; clientes em uso destes medicamentos requerem cuidados especiais.",
          ],
          comparativo: {
            titulo: "Imunidade Inata x Adaptativa",
            itens: [
              {
                nome: "Inata (natural)",
                quando:
                  "Barreiras físicas (pele), células fagocitárias, resposta imediata e inespecífica. Presente desde o nascimento.",
              },
              {
                nome: "Adaptativa (adquirida)",
                quando:
                  "Produção de anticorpos específicos após exposição ao agente. Resposta mais lenta, mas com memória imunológica. Base das vacinas.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Não acredito em vacina, prefiro pegar a doença para criar imunidade natural.'",
            falaBoa:
              "Entendo sua preocupação, mas as vacinas são seguras e testadas. A imunidade natural exige que você passe pela doença, correndo risco de complicações graves. A vacina oferece a mesma proteção sem os riscos da doença. O farmacêutico pode explicar melhor se você quiser.",
            falaEvitar:
              "Você está errado, vacina é obrigatória.",
          },
          checklist: [
            "Saber que vacinas são a forma mais segura de adquirir imunidade.",
            "Entender a diferença entre imunidade inata e adaptativa.",
            "Conhecer o calendário vacinal básico do adulto.",
            "Identificar clientes que podem precisar de vacinação (idosos, gestantes, crônicos).",
            "Orientar sobre a importância da caderneta de vacinação atualizada.",
            "Encaminhar ao farmacêutico dúvidas sobre vacinas e imunidade.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com dúvidas sobre vacinação (contraindicações, esquemas).",
            "Cliente em uso de imunossupressores com dúvidas sobre vacinação.",
            "Cliente que quer recusar vacinação — abordagem educativa requer profissional de saúde.",
          ],
          errosComuns: [
            "Espalhar desinformação sobre vacinas.",
            "Achar que 'imunidade natural' é sempre melhor que vacinação.",
            "Não saber orientar sobre o calendário vacinal básico.",
          ],
          quiz: [
            q(
              "Qual a principal vantagem da vacinação sobre a imunidade natural?",
              [
                "É mais barata.",
                "Oferece proteção sem os riscos de contrair a doença.",
                "Dá imunidade para sempre.",
                "Não precisa de reforço.",
              ],
              1,
              "A vacina estimula a produção de anticorpos sem expor a pessoa aos riscos da doença.",
            ),
            q(
              "Imunidade adaptativa é caracterizada por:",
              [
                "Resposta imediata e inespecífica.",
                "Produção de anticorpos específicos e memória imunológica.",
                "Barreiras físicas como a pele.",
                "Ausência de resposta a novos patógenos.",
              ],
              1,
              "A imunidade adaptativa produz anticorpos específicos e mantém células de memória para resposta futura.",
            ),
            q(
              "Clientes em uso de corticoides prolongados devem:",
              [
                "Tomar doses extras de vitamina C.",
                "Tomar cuidado redobrado com infecções, pois estão imunossuprimidos.",
                "Parar o corticoide imediatamente.",
                "Não precisam de cuidados especiais.",
              ],
              1,
              "Corticoides prolongados são imunossupressores; estes clientes têm maior risco de infecções.",
            ),
          ],
          xp: 55,
        },
        {
          id: "doencas-infecciosas",
          titulo: "Doenças Infecciosas Comuns no Balcão",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Principais doenças infecciosas que chegam ao balcão da farmácia: sintomas, transmissão, prevenção e orientações seguras.",
          resumoExecutivo: [
            "Infecções respiratórias (gripe, resfriado, COVID-19, pneumonia) são as mais frequentes; atente para sinais de gravidade como falta de ar.",
            "Infecções urinárias (cistite) são comuns em mulheres; sintomas: dor ao urinar, urgência, urina turva. Requerem avaliação médica.",
            "Infecções de pele (celulite, erisipela, micose) e DSTs são frequentes — o atendente deve encaminhar ao farmacêutico e jamais tentar diagnosticar.",
          ],
          comparativo: {
            titulo: "Sinais de Alarme em Infecções",
            itens: [
              {
                nome: "Febre alta (>39°C)",
                quando:
                  "Pode indicar infecção bacteriana severa; requer avaliação médica.",
              },
              {
                nome: "Falta de ar / cansaço",
                quando:
                  "Sinal de alerta em infecções respiratórias (pneumonia, COVID-19 grave). Encaminhe ao pronto-socorro.",
              },
              {
                nome: "Pus / secreção purulenta",
                quando:
                  "Indica infecção bacteriana ativa; requer antibiótico sob prescrição.",
              },
              {
                nome: "Manchas vermelhas na pele com febre",
                quando:
                  "Pode ser meningite, dengue, sarampo — exige avaliação médica urgente.",
              },
              {
                nome: "Rebaixamento do nível de consciência",
                quando:
                  "Emergência absoluta — chame o farmacêutico e oriente o SAMU (192).",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Estou com febre alta e manchas vermelhas pelo corpo. O que pode ser?'",
            falaBoa:
              "Febre alta com manchas na pele pode ser sinal de doenças que exigem avaliação médica urgente, como dengue ou meningite. Sugiro que vá ao pronto-socorro imediatamente. Vou chamar o farmacêutico para conversar com você enquanto isso.",
            falaEvitar:
              "Ah, deve ser alergia. Toma um antialérgico.",
          },
          checklist: [
            "Reconhecer sinais de alarme em infecções (febre alta, falta de ar, manchas, confusão).",
            "Saber que infecção urinária não se trata com MIP — requer prescrição.",
            "Diferenciar sintomas de gripe, resfriado e alergia.",
            "Nunca sugerir antibiótico para infecção sem receita.",
            "Orientar medidas de prevenção (lavagem de mãos, vacinação, máscara).",
            "Encaminhar ao farmacêutico qualquer caso com sinais de gravidade.",
          ],
          quandoChamarFarmaceutico: [
            "Febre alta associada a manchas na pele, rigidez de nuca ou confusão mental.",
            "Cliente com suspeita de infecção urinária (dor ao urinar, febre).",
            "Qualquer infecção com sinais de gravidade ou que não melhora com MIPs.",
            "Cliente com DST suspeita — abordagem requer sigilo e profissional de saúde.",
          ],
          errosComuns: [
            "Tentar diagnosticar infecções no balcão.",
            "Indicar antibiótico 'de sobra' de tratamento anterior.",
            "Subestimar sintomas como febre alta + manchas na pele.",
          ],
          quiz: [
            q(
              "Qual conduta para cliente com febre alta E manchas vermelhas no corpo?",
              [
                "Indicar antialérgico e antitérmico.",
                "Encaminhar ao pronto-socorro imediatamente (suspeita de meningite, dengue).",
                "Dizer para esperar mais alguns dias.",
                "Passar pomada de corticóide nas manchas.",
              ],
              1,
              "Febre + manchas (exantema) pode indicar meningite, dengue ou sarampo — exige avaliação médica urgente.",
            ),
            q(
              "Infecção urinária (cistite) deve ser tratada com:",
              [
                "Anti-inflamatório MIP.",
                "Antibiótico prescrito por médico após avaliação.",
                "Chá de camomila.",
                "Analgésico e esperar passar.",
              ],
              1,
              "Infecção urinária é bacteriana e requer antibiótico específico prescrito por médico.",
            ),
            q(
              "Cliente com tosse, febre e falta de ar. Qual a conduta?",
              [
                "Indicar xarope e mandar para casa.",
                "Encaminhar ao pronto-socorro — falta de ar é sinal de gravidade.",
                "Dizer que é só gripe forte.",
                "Vender antitérmico e esperar.",
              ],
              1,
              "Falta de ar associada a infecção respiratória é sinal de alarme que requer atendimento de emergência.",
            ),
          ],
          xp: 60,
        },
        {
          id: "saude-publica",
          titulo: "Saúde Pública: SUS, Programas e o Papel da Farmácia",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Estrutura do Sistema Único de Saúde (SUS), programas de saúde pública e como a farmácia se insere na rede de atenção à saúde.",
          resumoExecutivo: [
            "O SUS é um sistema universal, gratuito e hierarquizado: atenção primária (UBS), secundária (especialidades) e terciária (hospitais).",
            "Programas como Farmácia Popular, Programa Nacional de Imunizações (PNI) e Hiperdia distribuem medicamentos e insumos gratuitamente.",
            "A farmácia privada é a porta de entrada mais acessada pela população — o que dá ao atendente uma enorme responsabilidade no acolhimento.",
          ],
          comparativo: {
            titulo: "Níveis de Atenção à Saúde",
            itens: [
              {
                nome: "Atenção Primária (UBS)",
                quando:
                  "Porta de entrada do SUS: prevenção, vacinas, pré-natal, hipertensão, diabetes. Clínico geral e enfermeiro.",
              },
              {
                nome: "Atenção Secundária",
                quando:
                  "Especialidades médicas, exames mais complexos. Acesso via encaminhamento da UBS.",
              },
              {
                nome: "Atenção Terciária (Hospitais)",
                quando:
                  "Alta complexidade: cirurgias, UTI, tratamentos oncológicos. Emergências.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'O médico do posto me deu essa receita. O Farmácia Popular cobre?'",
            falaBoa:
              "Vou verificar se o medicamento está na lista do Farmácia Popular. Medicamentos para hipertensão, diabetes e asma têm cobertura. Se não estiver, temos o genérico com preço acessível ou posso ver se há programa municipal que cubra.",
            falaEvitar:
              "Farmácia Popular não cobre nada, é melhor comprar aqui.",
          },
          checklist: [
            "Conhecer os programas do SUS (Farmácia Popular, PNI, Hiperdia).",
            "Saber quais medicamentos são cobertos pelo Farmácia Popular.",
            "Orientar o cliente sobre onde buscar atendimento gratuito.",
            "Não desestimular o cliente a usar o SUS.",
            "Saber o endereço da UBS mais próxima.",
            "Conhecer o fluxo de referência e contrarreferência do SUS.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com dúvida sobre cobertura do Farmácia Popular.",
            "Cliente insatisfeito com o atendimento no SUS — abordagem educativa.",
            "Dúvida sobre como acessar medicamentos de alto custo pelo SUS.",
          ],
          errosComuns: [
            "Falar mal do SUS para o cliente.",
            "Desconhecer os programas de saúde pública disponíveis.",
            "Tentar convencer o cliente a não buscar atendimento público.",
          ],
          quiz: [
            q(
              "O SUS é baseado em quais princípios?",
              [
                "Universalidade, integralidade e equidade.",
                "Privacidade, lucratividade e seletividade.",
                "Exclusividade, hierarquia e cobrança.",
                "Regionalização, filantropia e doação.",
              ],
              0,
              "O SUS é universal (todos têm direito), integral (atende todas as necessidades) e equitativo (trata desigualmente os desiguais).",
            ),
            q(
              "Qual programa distribui medicamentos gratuitos para hipertensão e diabetes?",
              [
                "Programa Bolsa Família.",
                "Farmácia Popular do Brasil.",
                "Programa de Saúde da Família.",
                "Brasil Sorridente.",
              ],
              1,
              "O programa Farmácia Popular distribui medicamentos gratuitos para HAS e DM, entre outros.",
            ),
            q(
              "A atenção primária à saúde no SUS é feita principalmente:",
              [
                "Nos hospitais de grande porte.",
                "Nas Unidades Básicas de Saúde (UBS) / Postos de Saúde.",
                "Nas farmácias privadas.",
                "Nos laboratórios de análise clínica.",
              ],
              1,
              "As UBS são a porta de entrada e o centro da atenção primária do SUS.",
            ),
          ],
          xp: 50,
        },
        {
          id: "epidemiologia",
          titulo: "Noções de Epidemiologia: Doenças na População",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Conceitos básicos de epidemiologia: incidência, prevalência, surto, epidemia, pandemia e o papel da farmácia na vigilância em saúde.",
          resumoExecutivo: [
            "Incidência é o número de casos NOVOS de uma doença em um período; prevalência é o total de casos existentes (novos + antigos).",
            "Surto: aumento localizado de casos. Epidemia: aumento em larga escala. Pandemia: epidemia que atinge vários países/continentes.",
            "A farmácia pode atuar na vigilância: notificando reações adversas, identificando surtos locais e orientando a população.",
          ],
          comparativo: {
            titulo: "Surto x Epidemia x Pandemia",
            itens: [
              {
                nome: "Surto",
                quando:
                  "Aumento de casos em área restrita (ex.: surto de diarreia em um bairro).",
              },
              {
                nome: "Epidemia",
                quando:
                  "Aumento significativo de casos em uma região ou país (ex.: epidemia de dengue).",
              },
              {
                nome: "Pandemia",
                quando:
                  "Epidemia que se espalha por vários continentes (ex.: COVID-19, Gripe Espanhola).",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Minha vizinha inteira está com diarreia. Será que é a água?'",
            falaBoa:
              "Várias pessoas com o mesmo sintoma pode indicar um surto. É importante notificar a Vigilância Sanitária do município. Enquanto isso, oriente todos a ferver a água, lavar bem os alimentos e procurar a UBS se os sintomas forem intensos.",
            falaEvitar:
              "Deve ser virose mesmo, não é nada demais.",
          },
          checklist: [
            "Entender os conceitos de incidência, prevalência, surto, epidemia e pandemia.",
            "Reconhecer quando um padrão de vendas pode indicar um surto (muitos clientes com o mesmo sintoma).",
            "Saber que a farmácia faz parte da vigilância epidemiológica.",
            "Notificar o farmacêutico sobre padrões incomuns de sintomas.",
            "Orientar a população sobre medidas preventivas em situações de surto.",
          ],
          quandoChamarFarmaceutico: [
            "Vários clientes com os mesmos sintomas em curto período (possível surto).",
            "Notificação de reação adversa a medicamento.",
            "Dúvida sobre a gravidade de um cenário epidemiológico local.",
          ],
          errosComuns: [
            "Ignorar padrões de compra que podem indicar surto.",
            "Não saber a diferença entre surto, epidemia e pandemia.",
            "Subnotificar reações adversas à Anvisa.",
          ],
          quiz: [
            q(
              "Qual a diferença entre incidência e prevalência?",
              [
                "São sinônimos.",
                "Incidência: casos NOVOS. Prevalência: casos totais (novos + antigos).",
                "Incidência: casos totais. Prevalência: casos novos.",
                "Incidência mede mortalidade; prevalência mede cura.",
              ],
              1,
              "Incidência conta casos novos; prevalência conta todos os casos existentes num determinado momento.",
            ),
            q(
              "COVID-19 foi classificada como:",
              [
                "Surto local.",
                "Pandemia (atingiu vários continentes).",
                "Endemia.",
                "Doença erradicada.",
              ],
              1,
              "A COVID-19 foi declarada pandemia pela OMS em 2020 por atingir todos os continentes.",
            ),
            q(
              "Se vários clientes da mesma região compram medicamentos para diarreia no mesmo dia, isso pode indicar:",
              [
                "Nada relevante.",
                "Possível surto de doença transmitida por água ou alimentos.",
                "Apenas coincidência.",
                "Problema no estoque da farmácia.",
              ],
              1,
              "Múltiplos casos do mesmo sintoma em curto período e localização podem indicar surto — avise o farmacêutico.",
            ),
          ],
          xp: 55,
        },
        {
          id: "saude-preventiva",
          titulo: "Saúde Preventiva: Estilo de Vida e Prevenção",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "O papel da farmácia na promoção da saúde preventiva: alimentação, atividade física, vacinação e rastreamento de doenças crônicas.",
          resumoExecutivo: [
            "A prevenção primária evita o surgimento de doenças (vacinas, alimentação saudável, exercícios).",
            "A prevenção secundária detecta doenças precocemente (aferição de pressão, glicemia capilar, exames de rotina).",
            "A farmácia pode ser um centro de prevenção: aferindo pressão, medindo glicemia, orientando sobre vacinação e hábitos saudáveis.",
          ],
          comparativo: {
            titulo: "Níveis de Prevenção",
            itens: [
              {
                nome: "Prevenção Primária",
                quando:
                  "Evita o aparecimento da doença: vacinação, alimentação, exercícios, não fumar.",
              },
              {
                nome: "Prevenção Secundária",
                quando:
                  "Detecta a doença precocemente: exames de rotina, aferição de pressão, mamografia, glicemia capilar.",
              },
              {
                nome: "Prevenção Terciária",
                quando:
                  "Reabilita e evita complicações de doenças já instaladas: adesão ao tratamento, fisioterapia, acompanhamento.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Estou cansado, sem energia. O médico disse que meu colesterol está alto mas não passei no exame de sangue ainda.'",
            falaBoa:
              "Fadiga pode ter várias causas, inclusive colesterol alto. Sugiro que você faça o exame de sangue e busque avaliação médica. Enquanto isso, pequenas mudanças como reduzir gordura saturada, aumentar fibras e fazer 30 minutos de caminhada diária já ajudam.",
            falaEvitar:
              "Compra esse suplemento que resolve.",
          },
          checklist: [
            "Oferecer serviços de aferição de pressão e glicemia (quando disponíveis).",
            "Orientar sobre hábitos saudáveis: alimentação, exercícios, sono.",
            "Saber o calendário vacinal do adulto e do idoso.",
            "Alertar sobre os riscos do tabagismo e do consumo excessivo de álcool.",
            "Incentivar a realização de exames de rotina.",
            "Encaminhar ao farmacêutico para orientação preventiva personalizada.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com fatores de risco múltiplos (hipertenso, diabético, obeso, sedentário).",
            "Cliente querendo parar de fumar — existem protocolos e medicamentos.",
            "Aferição de pressão ou glicemia alterada na farmácia.",
            "Cliente interessado em suplementação ou vitaminas.",
          ],
          errosComuns: [
            "Indicar suplementos vitamínicos sem necessidade real.",
            "Focar apenas na venda de medicamentos em vez de orientar prevenção.",
            "Desestimular a busca por atendimento médico para prevenção.",
          ],
          quiz: [
            q(
              "A prevenção primária visa:",
              [
                "Detectar doenças precocemente.",
                "Evitar o surgimento da doença.",
                "Reabilitar pacientes com doenças crônicas.",
                "Reduzir custos hospitalares.",
              ],
              1,
              "Prevenção primária atua antes da doença surgir, com vacinas, alimentação e hábitos saudáveis.",
            ),
            q(
              "Qual serviço a farmácia pode oferecer na prevenção secundária?",
              [
                "Venda de medicamentos controlados.",
                "Aferição de pressão arterial e glicemia capilar.",
                "Cirurgia de catarata.",
                "Ressonância magnética.",
              ],
              1,
              "Aferição de PA e glicemia são serviços que farmácias habilitadas podem oferecer para detecção precoce.",
            ),
            q(
              "Além de medicamentos, o que o atendente pode oferecer na orientação preventiva?",
              [
                "Nada, só vender o que o cliente pede.",
                "Dicas de alimentação saudável, atividade física e vacinação.",
                "Diagnóstico de doenças crônicas.",
                "Prescrição de dietas.",
              ],
              1,
              "O atendente pode e deve orientar sobre hábitos saudáveis, sem jamais prescrever dietas ou diagnósticos.",
            ),
          ],
          xp: 50,
        },
      ],
    },
    // ── Módulo 4: Comunicação em Saúde (6 aulas) ──
    {
      id: "comunicacao-saude",
      titulo: "Comunicação em Saúde",
      descricao:
        "Técnicas de comunicação aplicadas ao balcão da farmácia: escuta ativa, linguagem adequada, manejo de objeções e trabalho em equipe multidisciplinar.",
      aulas: [
        {
          id: "comunicacao-saude",
          titulo: "Comunicação em Saúde: Fundamentos",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Princípios da comunicação em saúde: linguagem clara, empatia, respeito à diversidade e adaptação da mensagem ao perfil do cliente.",
          resumoExecutivo: [
            "Comunicação em saúde não é apenas passar informação — é criar vínculo, confiança e adesão ao tratamento.",
            "Use linguagem simples, evite jargões técnicos, pergunte se o cliente entendeu antes de encerrar.",
            "Respeite as crenças, cultura e nível de letramento do cliente; adapte sua fala sem ser paternalista.",
          ],
          comparativo: {
            titulo: "Linguagem Técnica x Linguagem Acessível",
            itens: [
              {
                nome: "Linguagem técnica (evitar)",
                quando:
                  "Ex.: 'Este AINE é um inibidor seletivo da COX-2 com meia-vida prolongada.'",
              },
              {
                nome: "Linguagem acessível (usar)",
                quando:
                  "Ex.: 'Este é um anti-inflamatório que age por mais tempo, tomado uma vez ao dia.'",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente idoso: 'Doutor, o médico falou pra tomar esse remedinho depois do almoço. É só abrir e tomar?'",
            falaBoa:
              "Vou explicar bem devagar: você toma UM comprimido após o almoço, com um copo de água. Não pode mastigar. Se esquecer, toma assim que lembrar, mas se já estiver perto do próximo horário, pula a dose esquecida. Pode repetir para eu ver se entendeu?",
            falaEvitar:
              "É só ler a bula.",
          },
          checklist: [
            "Usar linguagem simples e clara, adaptada ao cliente.",
            "Perguntar se o cliente entendeu antes de encerrar o atendimento.",
            "Evitar jargões técnicos desnecessários.",
            "Demonstrar empatia e paciência, especialmente com idosos.",
            "Verificar se o cliente tem dificuldade de visão ou audição.",
            "Oferecer material de apoio quando disponível (folder explicativo).",
          ],
          quandoChamarFarmaceutico: [
            "Cliente demonstra não entender a orientação mesmo após repetidas explicações.",
            "Cliente pede explicação mais aprofundada sobre mecanismo de ação do medicamento.",
            "Barreira de idioma que impede a comunicação eficaz.",
          ],
          errosComuns: [
            "Usar termos técnicos que o cliente não entende.",
            "Falar rápido demais ou com impaciência.",
            "Presumir que o cliente entendeu sem confirmar.",
          ],
          quiz: [
            q(
              "Qual a melhor forma de explicar um medicamento para um cliente idoso?",
              [
                "Falar rápido para não perder tempo.",
                "Usar linguagem simples, repetir se necessário e pedir confirmação.",
                "Entregar a bula e dizer 'leia em casa'.",
                "Usar termos técnicos para impressionar.",
              ],
              1,
              "Comunicação eficaz em saúde usa linguagem acessível, paciência e confirmação do entendimento.",
            ),
            q(
              "Por que evitar jargões técnicos no balcão?",
              [
                "Porque o cliente pode achar o atendente arrogante.",
                "Porque o cliente pode não entender e sair sem a orientação correta.",
                "Porque é proibido por lei.",
                "Porque mostra falta de conhecimento.",
              ],
              1,
              "Jargões técnicos dificultam a compreensão e podem comprometer o uso correto do medicamento.",
            ),
            q(
              "Comunicação em saúde eficaz contribui para:",
              [
                "Maior rotatividade no atendimento.",
                "Maior adesão ao tratamento e satisfação do cliente.",
                "Menos perguntas dos clientes.",
                "Aumento de reclamações.",
              ],
              1,
              "Boa comunicação gera confiança, adesão ao tratamento e satisfação do cliente.",
            ),
          ],
          xp: 50,
        },
        {
          id: "escuta-ativa",
          titulo: "Escuta Ativa e Empatia no Atendimento",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Técnicas de escuta ativa: como ouvir verdadeiramente o cliente, demonstrar empatia e identificar necessidades não ditas.",
          resumoExecutivo: [
            "Escuta ativa é ouvir para entender, não apenas para responder. Envolve contato visual, acenos, parafrasear o que o cliente diz.",
            "Empatia é se colocar no lugar do cliente sem assumir seus problemas; valide os sentimentos antes de oferecer soluções.",
            "Clientes não compram apenas produtos — compram alívio para um desconforto físico ou emocional. Entender isso melhora o atendimento.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'Ninguém me explica direito. O médico passou isso mas eu não entendi bulhufadas.'",
            falaBoa:
              "Sinto muito que você não teve uma explicação clara. Vou te ajudar com calma. Me conta o que o médico disse sobre o seu problema, e eu explico cada passo do tratamento do jeito mais simples possível, combinado?",
            falaEvitar:
              "É simples, qualquer um entende. Olha aqui na bula...",
          },
          checklist: [
            "Manter contato visual durante o atendimento.",
            "Não interromper o cliente enquanto ele fala.",
            "Parafrasear a queixa do cliente para confirmar o entendimento.",
            "Validar os sentimentos do cliente ('Entendo como é frustrante...').",
            "Fazer perguntas abertas (como, o que, por que) em vez de fechadas.",
            "Demonstrar que você está presente, não apenas esperando sua vez de falar.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente visivelmente angustiado, frustrado ou com muitas dúvidas.",
            "Cliente que não consegue expressar claramente o que sente.",
            "Situação em que o atendente percebe que a orientação vai além de suas atribuições.",
          ],
          errosComuns: [
            "Interromper o cliente antes de ele terminar de falar.",
            "Responder mecanicamente sem demonstrar compreensão.",
            "Ignorar sinais não-verbais (tristeza, irritação, ansiedade) do cliente.",
          ],
          quiz: [
            q(
              "O que é escuta ativa?",
              [
                "Falar mais que o cliente.",
                "Ouvir atentamente, parafrasear e demonstrar compreensão.",
                "Anotar tudo que o cliente diz sem responder.",
                "Concordar com tudo que o cliente fala.",
              ],
              1,
              "Escuta ativa é ouvir com atenção plena, parafrasear e validar o cliente.",
            ),
            q(
              "Por que fazer perguntas abertas no atendimento?",
              [
                "Para o cliente falar menos.",
                "Para entender melhor a real necessidade do cliente.",
                "Para ganhar tempo.",
                "Para confundir o cliente.",
              ],
              1,
              "Perguntas abertas ('Como começou?', 'O que sente?') ajudam a entender a necessidade real do cliente.",
            ),
            q(
              "Como demonstrar empatia no balcão?",
              [
                "Dizendo 'eu sei exatamente como você se sente' mesmo sem saber.",
                "Validando os sentimentos do cliente e oferecendo ajuda genuína.",
                "Ignorando as emoções e focando só na venda.",
                "Contando uma história pessoal mais triste que a do cliente.",
              ],
              1,
              "Empatia genuína envolve validar o sentimento e oferecer ajuda, não competir ou fingir compreensão total.",
            ),
          ],
          xp: 50,
        },
        {
          id: "linguagem-cliente",
          titulo: "Linguagem do Cliente: Como Adaptar a Comunicação",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Adapte sua comunicação ao perfil do cliente: faixa etária, nível de letramento, condição emocional e contexto cultural.",
          resumoExecutivo: [
            "Para idosos: fale pausadamente, repita informações, verifique a compreensão, seja paciente.",
            "Para jovens: seja direto, use linguagem atual, confirme se precisam de mais detalhes.",
            "Para clientes ansiosos: acalme primeiro, ouça com atenção, depois oriente com segurança.",
          ],
          comparativo: {
            titulo: "Abordagem por Perfil de Cliente",
            itens: [
              {
                nome: "Idoso (60+)",
                quando:
                  "Fale pausado, repita se necessário, verifique compreensão, evite pressa.",
              },
              {
                nome: "Jovem adulto",
                quando:
                  "Seja direto e objetivo, mas ofereça detalhes adicionais se necessário.",
              },
              {
                nome: "Cliente ansioso/estressado",
                quando:
                  "Acolha a ansiedade, ouça sem interromper, transmita calma e segurança.",
              },
              {
                nome: "Cliente com criança",
                quando:
                  "Inclua a criança na conversa de forma educativa, mas foque no adulto responsável.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente jovem: 'Tô com uma puta dor de cabeça, o que resolve rápido?'",
            falaBoa:
              "Entendo, dor de cabeça atrapalha mesmo. Vamos ver: quando começou? É latejando ou constante? Toma algum medicamento regularmente? Dependendo da causa, tenho opções que agem rápido como dipirona ou paracetamol.",
            falaEvitar:
              "Depende de cada caso, é complicado.",
          },
          checklist: [
            "Identificar rapidamente o perfil do cliente (idade, humor, urgência).",
            "Adaptar o tom de voz e vocabulário ao perfil identificado.",
            "Perguntar se o cliente prefere mais detalhes ou uma orientação resumida.",
            "Usar exemplos práticos e analogias do dia a dia.",
            "Evitar pressa que transmite desinteresse.",
            "Confirmar se a orientação foi compreendida.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com barreira de idioma (estrangeiro, surdo) sem comunicação eficaz.",
            "Cliente em crise de ansiedade que não consegue se comunicar claramente.",
            "Cliente que insiste em não entender ou questiona a orientação de forma agressiva.",
          ],
          errosComuns: [
            "Tratar todos os clientes da mesma forma, sem adaptação.",
            "Falar com idosos de forma infantilizada (elderspeak).",
            "Usar gírias ou linguagem informal em excesso com clientes formais.",
          ],
          quiz: [
            q(
              "Como adaptar a comunicação para um cliente idoso com dificuldade de audição?",
              [
                "Falar mais alto e rápido.",
                "Falar pausadamente, de frente para o cliente, verificar compreensão.",
                "Entregar a bula e encerrar o atendimento.",
                "Chamar um colega mais novo para atender.",
              ],
              1,
              "Fale pausado, de frente para o idoso (para leitura labial), e verifique se entendeu.",
            ),
            q(
              "O que é 'elderspeak' e por que evitá-lo?",
              [
                "Falar baixinho com idosos; é gentil.",
                "Falar de forma infantilizada com idosos; é paternalista e desrespeitoso.",
                "Usar termos técnicos com idosos; mostra conhecimento.",
                "Ignorar o idoso; é eficiente.",
              ],
              1,
              "Elderspeak é tratar idosos como crianças — evite, pois desrespeita a autonomia do cliente.",
            ),
            q(
              "Para um cliente jovem e apressado, a melhor abordagem é:",
              [
                "Ignorar a pressa e fazer todo o protocolo lentamente.",
                "Ser direto, oferecer a informação essencial e perguntar se quer mais detalhes.",
                "Falar de forma técnica para impressionar.",
                "Dar preferência a clientes mais tranquilos.",
              ],
              1,
              "Clientes apressados apreciam objetividade, mas é crucial confirmar se a orientação básica foi suficiente.",
            ),
          ],
          xp: 55,
        },
        {
          id: "objecoes",
          titulo: "Objeções e Conflitos no Atendimento",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Como lidar com objeções, reclamações e conflitos no balcão da farmácia: técnicas de comunicação não violenta e resolução de problemas.",
          resumoExecutivo: [
            "Objeções comuns: 'Está muito caro', 'Não confio em genérico', 'No outro lugar é mais barato'. Cada uma exige abordagem específica.",
            "Técnica LAER (Ouvir, Reconhecer, Explorar, Responder): acolha a objeção, reconheça o sentimento, explore a causa, responda com solução.",
            "Em conflitos, mantenha a calma, não leve para o pessoal e saiba quando chamar o farmacêutico ou gerente.",
          ],
          comparativo: {
            titulo: "Objeção x Abordagem",
            itens: [
              {
                nome: '"Está muito caro"',
                quando:
                  "Explique o valor agregado, compare benefícios, ofereça opções de menor custo (genérico, menor embalagem).",
              },
              {
                nome: '"Não confio em genérico"',
                quando:
                  "Explique que genéricos têm o mesmo princípio ativo e passam por testes de bioequivalência pela Anvisa.",
              },
              {
                nome: '"No outro lugar é mais barato"',
                quando:
                  "Não critique o concorrente. Destaque seus diferenciais (atendimento, proximidade, programa de fidelidade).",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Esse remédio está o olho da cara! No mercadinho da esquina é a metade do preço.'",
            falaBoa:
              "Entendo que o preço é importante. Aqui na nossa farmácia trabalhamos com produtos originais e com garantia de procedência. Além disso, temos o programa de fidelidade que dá desconto na próxima compra. Se preferir, o genérico tem o mesmo princípio ativo e é mais em conta.",
            falaEvitar:
              "Lá deve ser falsificado então. Compra aqui que é melhor.",
          },
          checklist: [
            "Manter a calma diante de reclamações.",
            "Usar a técnica LAER (Ouvir, Reconhecer, Explorar, Responder).",
            "Nunca discutir com o cliente ou levar para o pessoal.",
            "Oferecer soluções, não justificativas.",
            "Conhecer os diferenciais competitivos da farmácia.",
            "Saber quando escalar para o farmacêutico ou gerente.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente agressivo ou alterado que não se acalma com o atendente.",
            "Reclamação sobre erro de dispensação ou qualidade do medicamento.",
            "Cliente que exige falar com o responsável técnico.",
            "Situação que envolve questão legal ou regulatória.",
          ],
          errosComuns: [
            "Levar a objeção para o lado pessoal e se irritar.",
            "Falar mal do concorrente para o cliente.",
            "Dar descontos ou benefícios sem autorização.",
          ],
          quiz: [
            q(
              "Qual a primeira etapa da técnica LAER para lidar com objeções?",
              [
                "Responder imediatamente.",
                "Ouvir atentamente o cliente sem interromper.",
                "Oferecer desconto.",
                "Chamar o gerente.",
              ],
              1,
              "LAER: Listen (Ouvir) → Acknowledge (Reconhecer) → Explore (Explorar) → Respond (Responder).",
            ),
            q(
              "Um cliente reclama que o concorrente vende mais barato. Como responder?",
              [
                "'Então compra lá.'",
                "'Lá deve ser falsificado.'",
                "'Entendo. Temos garantia de procedência e nosso programa de fidelidade oferece vantagens. Posso ver se temos uma opção com melhor custo-benefício.'",
                "Ignorar e atender o próximo.",
              ],
              2,
              "Nunca critique concorrentes; destaque seus diferenciais e ofereça alternativas.",
            ),
            q(
              "Se um cliente fica agressivo, a melhor conduta é:",
              [
                "Responder com agressividade também.",
                "Chamar o farmacêutico ou gerente para mediar a situação.",
                "Expulsar o cliente da loja.",
                "Ignorar o cliente até ele se acalmar.",
              ],
              1,
              "Em caso de agressividade, chame o superior; sua segurança e a boa imagem da farmácia vêm primeiro.",
            ),
          ],
          xp: 60,
        },
        {
          id: "situacoes-dificeis",
          titulo: "Situações Difíceis: Luto, Crise e Urgência",
          duracaoMin: 12,
          nivel: "avancado",
          resumo:
            "Como o atendente deve agir em situações emocionalmente delicadas: cliente em luto, crise de ansiedade, emergências de saúde e violência no balcão.",
          resumoExecutivo: [
            "Cliente em luto ou crise: acolha com silêncio respeitoso, ofereça Privacidade e pergunte como pode ajudar — não tente 'consertar' a dor.",
            "Emergência de saúde no balcão: mantenha a calma, chame o farmacêutico, acione o SAMU (192) se necessário, não movimente a pessoa.",
            "Violência ou assalto: priorize sua segurança, não reaja, memorize características para o boletim de ocorrência.",
          ],
          comparativo: {
            titulo: "Situações Delicadas: O Que Fazer",
            itens: [
              {
                nome: "Cliente em luto (perda recente)",
                quando:
                  "Ofereça pêsames sinceros, seja breve, ofereça privacidade. Evite clichês como 'ele está em lugar melhor'.",
              },
              {
                nome: "Crise de ansiedade/pânico",
                quando:
                  "Mantenha ambiente calmo, ofereça água, chame o farmacêutico. Não dê sedativos sem prescrição.",
              },
              {
                nome: "Desmaio / mal súbito",
                quando:
                  "Deite a pessoa, levante pernas, chame o farmacêutico e SAMU se não recuperar consciência rapidamente.",
              },
              {
                nome: "Assalto / violência",
                quando:
                  "Não reaja, não entre em confronto, obedeça às instruções, acione a polícia depois.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente chega visivelmente abalado: 'Minha mãe faleceu ontem, preciso de... desculpa, não consigo...'",
            falaBoa:
              "Sinto muito pela sua perda. Não precisa se apressar. Quando estiver pronto, me diga como posso ajudar. Se quiser, podemos ir para um lugar mais reservado.",
            falaEvitar:
              "Fica tranquilo, a vida é assim mesmo. O que você precisa comprar?",
          },
          checklist: [
            "Manter a calma em situações de emergência.",
            "Priorizar a segurança própria e do cliente.",
            "Chamar o farmacêutico imediatamente em emergências de saúde.",
            "Saber o número do SAMU (192) e polícia (190).",
            "Oferecer privacidade e discrição em situações emocionais.",
            "Não dar diagnósticos ou tratamentos em emergências.",
          ],
          quandoChamarFarmaceutico: [
            "Sempre em emergências de saúde no balcão.",
            "Cliente em crise emocional intensa (luto recente, crise de pânico).",
            "Conflito grave ou situação de risco (violência, assalto).",
            "Dúvida sobre como proceder em situação atípica.",
          ],
          errosComuns: [
            "Dar conselhos clichês para quem está de luto ('Deus sabe o que faz').",
            "Tentar socorrer sem chamar ajuda profissional.",
            "Reagir a assalto ou violência, colocando a vida em risco.",
            "Ignorar sinais de emergência médica.",
          ],
          quiz: [
            q(
              "Qual a melhor abordagem para um cliente em luto recente?",
              [
                "'Deus sabe o que faz, tenha fé.'",
                "Oferecer pêsames sinceros, dar espaço e disponibilidade para ajudar.",
                "'Você precisa superar isso logo.'",
                "Agir como se nada tivesse acontecido.",
              ],
              1,
              "Acolhimento respeitoso com pêsames sinceros e espaço para o cliente se expressar é a melhor abordagem.",
            ),
            q(
              "Um cliente desmaia no balcão. Qual a primeira ação?",
              [
                "Jogar água no rosto.",
                "Deitar a pessoa, levantar pernas e chamar o farmacêutico.",
                "Dar tapinhas no rosto para acordar.",
                "Colocar a pessoa sentada.",
              ],
              1,
              "Em desmaio, deite a pessoa e eleve as pernas para facilitar o retorno sanguíneo ao cérebro; chame ajuda.",
            ),
            q(
              "Durante um assalto à farmácia, o atendente deve:",
              [
                "Tentar confrontar o assaltante.",
                "Obeder às instruções sem reagir, priorizando a segurança.",
                "Apertar o alarme escondido imediatamente.",
                "Gritar por ajuda.",
              ],
              1,
              "Em assalto, priorize sua segurança: obedeça, não reaja e só acione a polícia quando não houver mais risco.",
            ),
          ],
          xp: 70,
        },
        {
          id: "equipe-multidisciplinar",
          titulo: "Trabalho em Equipe Multidisciplinar",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Como o atendente de farmácia se insere na equipe de saúde: médicos, enfermeiros, nutricionistas e farmacêuticos — e por que a colaboração é essencial.",
          resumoExecutivo: [
            "A farmácia faz parte da rede de atenção à saúde; o atendente trabalha em conjunto com farmacêuticos, médicos, enfermeiros e nutricionistas.",
            "Uma boa relação com os prescritores da região melhora o atendimento: o cliente é orientado de forma coerente em todos os pontos de cuidado.",
            "Respeite o trabalho de cada profissional — não critique prescrições médicas ou orientações de outros profissionais na frente do cliente.",
          ],
          comparativo: {
            titulo: "Profissionais da Equipe de Saúde",
            itens: [
              {
                nome: "Médico",
                quando:
                  "Diagnostica e prescreve tratamentos. O atendente respeita a prescrição e não a altera.",
              },
              {
                nome: "Farmacêutico",
                quando:
                  "Dispensa, orienta e monitora o uso de medicamentos. Supervisor direto do atendente.",
              },
              {
                nome: "Enfermeiro",
                quando:
                  "Realiza procedimentos (curativos, vacinas, aferições). O atendente pode complementar orientações de cuidados.",
              },
              {
                nome: "Nutricionista",
                quando:
                  "Orienta alimentação. Deve ser consultado quando a queixa do cliente está relacionada à dieta.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'O médico passou esse remédio mas acho que não vai adiantar. Minha vizinha disse que é melhor outro.'",
            falaBoa:
              "Entendo sua preocupação, mas o médico avaliou seu caso e receitou o mais adequado para você. O que funciona para sua vizinha pode não funcionar para você. Se tiver dúvidas, podemos conversar com o farmacêutico ou voltar ao médico para esclarecer.",
            falaEvitar:
              "É, esse médico não é bom. Melhor ouvir sua vizinha.",
          },
          checklist: [
            "Nunca criticar prescrições médicas na frente do cliente.",
            "Manter boa relação com os prescritores da região.",
            "Saber que o farmacêutico é seu supervisor técnico direto.",
            "Encaminhar dúvidas sobre prescrições ao farmacêutico.",
            "Respeitar as orientações de todos os profissionais de saúde.",
            "Colaborar com a equipe para um atendimento integrado ao cliente.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente questiona a prescrição médica e pede a opinião do farmacêutico.",
            "Dúvida sobre interação entre medicamentos prescritos por diferentes profissionais.",
            "Cliente relata orientação conflitante entre médico e nutricionista/farmacêutico.",
          ],
          errosComuns: [
            "Criticar ou duvidar da prescrição médica com o cliente.",
            "Agir como se o atendente soubesse mais que o médico.",
            "Ignorar orientações de outros profissionais de saúde.",
          ],
          quiz: [
            q(
              "Um cliente critica a prescrição médica no balcão. Como o atendente deve agir?",
              [
                "Concordar e criticar o médico junto com o cliente.",
                "Ouvir, mas respeitar a prescrição e sugerir conversar com o farmacêutico ou retornar ao médico.",
                "Alterar a receita conforme a vontade do cliente.",
                "Dizer que o médico é incompetente.",
              ],
              1,
              "Nunca critique prescrições; oriente o cliente a esclarecer dúvidas com o farmacêutico ou médico.",
            ),
            q(
              "Qual profissional é o supervisor técnico direto do atendente de farmácia?",
              [
                "O médico da UBS.",
                "O farmacêutico responsável técnico.",
                "O enfermeiro chefe.",
                "O nutricionista.",
              ],
              1,
              "O farmacêutico RT é o supervisor técnico direto do atendente no ambiente da farmácia.",
            ),
            q(
              "Trabalhar em equipe multidisciplinar significa:",
              [
                "Cada profissional trabalha isoladamente.",
                "Há colaboração entre diferentes profissionais para o cuidado integral do paciente.",
                "O atendente deve saber fazer o trabalho de todos.",
                "Apenas médicos e enfermeiros trabalham em equipe.",
              ],
              1,
              "Equipe multidisciplinar significa colaboração entre diferentes profissionais de saúde para o melhor cuidado do paciente.",
            ),
          ],
          xp: 55,
        },
      ],
    },
    // ── Módulo 5: Biossegurança (8 aulas) ──
    {
      id: "biosseguranca",
      titulo: "Biossegurança e Prevenção de Acidentes",
      descricao:
        "Normas de biossegurança na farmácia: higienização, descarte, controle de infecções, primeiros socorros e prevenção de acidentes.",
      aulas: [
        {
          id: "biosseguranca",
          titulo: "Introdução à Biossegurança na Farmácia",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Conceitos fundamentais de biossegurança aplicados ao ambiente farmacêutico: riscos, normas e condutas seguras.",
          resumoExecutivo: [
            "Biossegurança é o conjunto de medidas para prevenir, controlar e minimizar riscos à saúde do trabalhador, do cliente e do meio ambiente.",
            "Os principais riscos na farmácia são: biológicos (sangue, secreções), químicos (medicamentos, saneantes), físicos (cortes, quedas) e ergonômicos (postura inadequada).",
            "Toda farmácia deve ter um Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) e seguir as RDCs da Anvisa.",
          ],
          comparativo: {
            titulo: "Tipos de Risco no Ambiente da Farmácia",
            itens: [
              {
                nome: "Risco biológico",
                quando:
                  "Exposição a sangue, secreções, agulhas, lixo contaminado. Ex.: curativo em cliente, acidente com perfurocortante.",
              },
              {
                nome: "Risco químico",
                quando:
                  "Manuseio de medicamentos citotóxicos, saneantes, pós de manipulação. Ex.: inalação de pó na manipulação.",
              },
              {
                nome: "Risco físico",
                quando:
                  "Cortes com vidro quebrado, quedas em piso molhado, queimaduras. Ex.: lâmpada quebrada no estoque.",
              },
              {
                nome: "Risco ergonômico",
                quando:
                  "Postura inadequada ao atender, levantar peso, movimentos repetitivos. Ex.: dor nas costas por ficar muito tempo em pé.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Vocês têm luvas? Meu filho se cortou e trouxe ele aqui para fazer curativo.'",
            falaBoa:
              "Vou verificar se temos o material para curativo. Mas primeiro, preciso chamar nosso farmacêutico para avaliar o ferimento. Se for superficial, ele pode fazer o curativo com segurança seguindo os protocolos de biossegurança.",
            falaEvitar:
              "Dá pra fazer sim, não precisa de luvas não.",
          },
          checklist: [
            "Conhecer os tipos de risco no ambiente de trabalho.",
            "Seguir as normas de biossegurança da farmácia.",
            "Usar EPIs adequados para cada atividade.",
            "Saber onde fica o kit de primeiros socorros.",
            "Participar dos treinamentos de biossegurança.",
            "Reportar ao farmacêutico qualquer situação de risco.",
          ],
          quandoChamarFarmaceutico: [
            "Acidente com exposição a material biológico (sangue, agulha).",
            "Derramamento de medicamento ou produto químico perigoso.",
            "Dúvida sobre o procedimento de biossegurança adequado.",
          ],
          errosComuns: [
            "Subestimar a importância da biossegurança no dia a dia.",
            "Realizar procedimentos sem os EPIs adequados.",
            "Ignorar pequenos acidentes (cortes, respingos) sem reportar.",
          ],
          quiz: [
            q(
              "O que é biossegurança?",
              [
                "Conjunto de medidas para aumentar a produtividade da farmácia.",
                "Medidas para prevenir, controlar e minimizar riscos à saúde e ao meio ambiente.",
                "Apenas o uso de luvas e máscaras.",
                "Normas exclusivas para hospitais.",
              ],
              1,
              "Biossegurança abrange todas as medidas para prevenir riscos à saúde do trabalhador, cliente e meio ambiente.",
            ),
            q(
              "Qual destes NÃO é um tipo de risco no ambiente da farmácia?",
              [
                "Biológico (sangue, secreções).",
                "Digital (hackers, senhas).",
                "Químico (medicamentos, saneantes).",
                "Físico (cortes, quedas).",
              ],
              1,
              "Risco digital não está entre as categorias clássicas de biossegurança no ambiente farmacêutico.",
            ),
            q(
              "O que o atendente deve fazer ao se cortar com vidro no estoque?",
              [
                "Lavar o corte com água e continuar trabalhando.",
                "Parar a atividade, lavar o ferimento, usar EPI e reportar ao farmacêutico.",
                "Ignorar o corte se for pequeno.",
                "Colocar um curativo e seguir normalmente.",
              ],
              1,
              "Qualquer acidente deve ser reportado e tratado com os devidos cuidados de biossegurança.",
            ),
          ],
          xp: 50,
        },
        {
          id: "higienizacao-maos",
          titulo: "Higienização das Mãos: A Medida Mais Simples e Eficaz",
          duracaoMin: 8,
          nivel: "basico",
          resumo:
            "Técnica correta de higienização das mãos — a medida mais eficaz para prevenir infecções no ambiente da farmácia.",
          resumoExecutivo: [
            "Lavar as mãos corretamente remove microrganismos transitórios (adquiridos por contato) e reduz a carga microbiana residente.",
            "Os 5 momentos da higienização: antes e após contato com cliente, antes de procedimento, após risco biológico, após tocar superfícies.",
            "Álcool em gel 70% é eficaz para mãos visivelmente limpas; água e sabão são necessários quando há sujidade visível.",
          ],
          comparativo: {
            titulo: "Álcool Gel x Água e Sabão",
            itens: [
              {
                nome: "Álcool gel 70%",
                quando:
                  "Mãos visivelmente limpas; rápida aplicação; eficaz contra a maioria dos microrganismos.",
              },
              {
                nome: "Água e sabão",
                quando:
                  "Mãos sujas ou com resíduos; após uso do banheiro; contato com material biológico; superior contra esporos.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Você lavou a mão depois de atender aquele outro cliente? Não quero pegar doença.'",
            falaBoa:
              "Sim, higienizo as mãos entre cada atendimento. Usei álcool gel 70% agora mesmo. Se quiser, posso higienizar na sua frente para sua tranquilidade. A segurança dos nossos clientes é prioridade.",
            falaEvitar:
              "Está limpa, não precisa disso tudo.",
          },
          checklist: [
            "Higienizar as mãos antes e após cada atendimento.",
            "Usar álcool gel 70% entre atendimentos sem sujidade visível.",
            "Lavar com água e sabão após contato com sangue/secreções.",
            "Seguir a técnica correta: palma, dorso, dedos, unhas, punhos (mínimo 20 segundos).",
            "Disponibilizar álcool gel para clientes na entrada da farmácia.",
            "Manter as unhas curtas e limpas, sem esmalte descascado.",
          ],
          quandoChamarFarmaceutico: [
            "Não se aplica — higienização é rotina do atendente.",
            "Apenas se houver dúvida sobre protocolo em situação específica.",
          ],
          errosComuns: [
            "Lavar as mãos apenas quando o cliente pede.",
            "Não higienizar entre atendimentos consecutivos.",
            "Usar água e sabão sem secar adequadamente (mãos úmidas propagam microrganismos).",
          ],
          quiz: [
            q(
              "Qual o tempo mínimo recomendado para lavagem das mãos com água e sabão?",
              [
                "5 segundos.",
                "20 segundos.",
                "1 minuto.",
                "2 minutos.",
              ],
              1,
              "A OMS recomenda lavar as mãos por, no mínimo, 20 segundos com água e sabão.",
            ),
            q(
              "Quando usar água e sabão em vez de álcool gel?",
              [
                "Sempre, álcool gel é inferior.",
                "Quando as mãos estão visivelmente sujas ou após contato com material biológico.",
                "Nunca, álcool gel substitui completamente.",
                "Apenas no início do expediente.",
              ],
              1,
              "Água e sabão são necessários quando há sujidade visível; álcool gel é suficiente para mãos limpas.",
            ),
            q(
              "Quantos são os momentos recomendados para higienização das mãos?",
              [
                "3 momentos.",
                "5 momentos (antes/após contato, antes de procedimento, após risco, após superfícies).",
                "Apenas 1 (antes de manipular medicamentos).",
                "10 momentos.",
              ],
              1,
              "A OMS define 5 momentos para higienização das mãos nos serviços de saúde.",
            ),
          ],
          xp: 40,
        },
        {
          id: "descarte-residuos",
          titulo: "Descarte de Resíduos na Farmácia",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Classificação e descarte correto dos resíduos de serviços de saúde (RSS) gerados na farmácia: comum, infectante, perfurocortante e químico.",
          resumoExecutivo: [
            "Resíduo comum (papel, plástico não contaminado): lixo comum ou reciclagem. Resíduo infectante (seringas, gazes com sangue): descarte especial.",
            "Perfurocortantes (agulhas, ampolas, vidro quebrado) vão em descarpack rígido — nunca no lixo comum.",
            "Medicamentos vencidos ou avariados devem ser coletados pela logística reversa ou farmácia, nunca descartados no lixo comum ou pia.",
          ],
          comparativo: {
            titulo: "Classificação de Resíduos (RDC 222/2018)",
            itens: [
              {
                nome: "Grupo A (Infectante)",
                quando:
                  "Resíduos com sangue, secreções, culturas de microrganismos. Ex.: gaze com sangue, luva contaminada.",
              },
              {
                nome: "Grupo B (Químico)",
                quando:
                  "Medicamentos vencidos, reagentes, saneantes concentrados. Ex.: comprimidos vencidos, ampolas.",
              },
              {
                nome: "Grupo E (Perfurocortante)",
                quando:
                  "Materiais perfurantes ou cortantes. Ex.: agulhas, ampolas quebradas, lâminas de bisturi.",
              },
              {
                nome: "Grupo D (Comum)",
                quando:
                  "Resíduos sem risco biológico/químico. Ex.: embalagens não contaminadas, papel de escritório.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Tenho um monte de remédio vencido em casa. O que faço?'",
            falaBoa:
              "A farmácia tem programa de descarte correto de medicamentos! Pode trazer que a gente recebe e destina adequadamente. Nunca jogue no lixo comum ou no vaso sanitário — isso contamina o meio ambiente.",
            falaEvitar:
              "Joga no lixo comum mesmo, ninguém vai saber.",
          },
          checklist: [
            "Conhecer a classificação dos resíduos (Grupos A, B, D, E).",
            "Saber onde ficam os descartes específicos (descarpack, lixeira infectante).",
            "Nunca descartar medicamento vencido no lixo comum.",
            "Orientar clientes a trazerem medicamentos vencidos para descarte na farmácia.",
            "Usar EPI adequado ao manusear resíduos infectantes.",
            "Comunicar ao farmacêutico qualquer irregularidade no descarte.",
          ],
          quandoChamarFarmaceutico: [
            "Grande volume de medicamentos vencidos para descarte.",
            "Resíduo infectante produzido por acidente (sangue no chão, etc.).",
            "Empresa de coleta de resíduos no estabelecimento.",
            "Dúvida sobre classificação de resíduo específico.",
          ],
          errosComuns: [
            "Jogar agulha/ampola quebrada no lixo comum.",
            "Descartar medicamento vencido na pia ou vaso sanitário.",
            "Misturar resíduo comum com infectante.",
          ],
          quiz: [
            q(
              "Onde devem ser descartadas agulhas usadas na farmácia?",
              [
                "Lixo comum.",
                "Descarpack (coletor rígido para perfurocortantes).",
                "Saco plástico preto.",
                "Lixeira de papel.",
              ],
              1,
              "Perfurocortantes (agulhas, ampolas) devem ser descartados em descarpack rígido específico.",
            ),
            q(
              "Qual a orientação correta para cliente com medicamentos vencidos?",
              [
                "Jogar no lixo comum.",
                "Jogar no vaso sanitário.",
                "Trazer para a farmácia, que faz o descarte correto.",
                "Queimar em casa.",
              ],
              2,
              "A farmácia deve receber medicamentos vencidos para descarte adequado (logística reversa).",
            ),
            q(
              "Gaze com sangue de um curativo é classificado como:",
              [
                "Resíduo comum (D).",
                "Resíduo infectante (A).",
                "Resíduo químico (B).",
                "Resíduo perfurocortante (E).",
              ],
              1,
              "Material com sangue/secreções é classificado como resíduo infectante (Grupo A).",
            ),
          ],
          xp: 55,
        },
        {
          id: "limpeza-ambiente",
          titulo: "Limpeza e Desinfecção do Ambiente",
          duracaoMin: 8,
          nivel: "basico",
          resumo:
            "Protocolos de limpeza concorrente e terminal, desinfecção de superfícies e cuidados com a higiene do ambiente da farmácia.",
          resumoExecutivo: [
            "Limpeza concorrente (diária): remover sujidade e desinfetar superfícies de contato (balcão, maçanetas, gavetas).",
            "Limpeza terminal (semanal/mensal): limpeza profunda de todas as áreas, incluindo azulejos, rodapés e cantos.",
            "Produtos saneantes devem ser registrados na Anvisa e usados conforme diluição e tempo de contato recomendados.",
          ],
          comparativo: {
            titulo: "Limpeza Concorrente x Terminal",
            itens: [
              {
                nome: "Limpeza concorrente (diária)",
                quando:
                  "Limpeza de superfícies de contato, balcão, piso aparente. Remove sujidade e faz desinfecção rápida.",
              },
              {
                nome: "Limpeza terminal (periódica)",
                quando:
                  "Limpeza completa de todas as áreas, incluindo cantos, rodapés, estantes altas. Remove sujidade acumulada.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Derramei café no balcão de vocês, desculpa.'",
            falaBoa:
              "Sem problema! Vou limpar rapidinho com nosso produto desinfetante. Isso mantém o ambiente seguro para todos. Só um momento que já volto a atender você.",
            falaEvitar:
              "Deixa aí, depois a gente limpa.",
          },
          checklist: [
            "Limpar o balcão de atendimento entre cada cliente.",
            "Desinfetar maçanetas, corrimãos e superfícies de alto contato regularmente.",
            "Usar produtos saneantes registrados na Anvisa.",
            "Seguir diluição e tempo de contato indicados pelo fabricante.",
            "Manter piso livre de sujidade e derramamentos.",
            "Utilizar luvas ao manusear produtos de limpeza.",
          ],
          quandoChamarFarmaceutico: [
            "Respingo de produto químico perigoso no ambiente.",
            "Dúvida sobre qual produto de limpeza usar em área específica.",
            "Situação de contaminação que exige limpeza especializada.",
          ],
          errosComuns: [
            "Usar pano sujo para limpar o balcão (só espalha microrganismos).",
            "Misturar produtos de limpeza (pode gerar gases tóxicos).",
            "Não respeitar o tempo de ação do desinfetante.",
          ],
          quiz: [
            q(
              "Qual a diferença entre limpeza concorrente e terminal?",
              [
                "Concorrente usa água; terminal usa álcool.",
                "Concorrente é diária/superficial; terminal é periódica/profunda.",
                "Concorrente é feita pelo atendente; terminal por empresa terceirizada.",
                "Não há diferença, são sinônimos.",
              ],
              1,
              "Limpeza concorrente é a rotina diária; terminal é a limpeza completa periódica.",
            ),
            q(
              "O que NÃO se deve fazer ao limpar a farmácia?",
              [
                "Usar luvas de proteção.",
                "Misturar água sanitária com amoníaco.",
                "Seguir a diluição indicada no rótulo.",
                "Desinfetar maçanetas diariamente.",
              ],
              1,
              "Misturar produtos de limpeza pode gerar gases tóxicos — nunca misture saneantes.",
            ),
            q(
              "Após derramar café no balcão de atendimento, deve-se:",
              [
                "Passar um pano seco e pronto.",
                "Limpar com água e sabão e depois desinfetar com produto adequado.",
                "Deixar secar naturalmente.",
                "Passar apenas álcool.",
              ],
              1,
              "Primeiro remova a sujidade (água e sabão), depois desinfete a superfície.",
            ),
          ],
          xp: 40,
        },
        {
          id: "contaminacao-cruzada",
          titulo: "Contaminação Cruzada: Prevenção na Farmácia",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "O que é contaminação cruzada, como ocorre no ambiente da farmácia e as medidas para preveni-la no balcão e no estoque.",
          resumoExecutivo: [
            "Contaminação cruzada é a transferência de microrganismos de uma superfície/pessoa para outra — a principal causa de infecções associadas ao cuidado.",
            "No balcão: ocorre quando o atendente toca dinheiro, depois o medicamento, ou atende sem higienizar as mãos entre clientes.",
            "No estoque: ocorre quando medicamentos são armazenados próximos a produtos de limpeza, alimentos ou fora da temperatura adequada.",
          ],
          comparativo: {
            titulo: "Vias de Contaminação Cruzada",
            itens: [
              {
                nome: "Mão do atendente → cliente",
                quando:
                  "Atendente não higieniza as mãos entre clientes; toca no medicamento e entrega ao cliente.",
              },
              {
                nome: "Dinheiro → superfície → medicamento",
                quando:
                  "Atendente recebe dinheiro, depois pega o medicamento no balcão sem higienizar as mãos.",
              },
              {
                nome: "Produto vencido → estoque",
                quando:
                  "Medicamento vencido não é separado; contamina produtos próximos visualmente.",
              },
              {
                nome: "Alimento → medicamento (estoque)",
                quando:
                  "Armazenar alimentos junto com medicamentos; atrai pragas e contamina embalagens.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Pega esse xarope pra mim... mas você atendeu aquele outro cliente, lavou a mão?'",
            falaBoa:
              "Sim, higienizei as mãos entre os atendimentos — é nosso protocolo. Mas entendo sua preocupação! Posso higienizar novamente na sua frente se preferir.",
            falaEvitar:
              "Está limpa sim, não precisa disso.",
          },
          checklist: [
            "Higienizar as mãos entre cada atendimento.",
            "Não atender clientes enquanto manipula medicamentos ou alimentos.",
            "Manter dinheiro separado da área de dispensação de medicamentos.",
            "Armazenar medicamentos longe de produtos de limpeza e alimentos.",
            "Separar imediatamente medicamentos vencidos ou avariados do estoque.",
            "Manter o balcão livre de它ens não essenciais (canetas, copos, papéis).",
          ],
          quandoChamarFarmaceutico: [
            "Produto vencido encontrado misturado ao estoque.",
            "Suspeita de contaminação de lote de medicamento.",
            "Infestação de pragas no estoque da farmácia.",
          ],
          errosComuns: [
            "Manusear dinheiro e medicamento sem higienizar as mãos.",
            "Armazenar medicamentos em local com temperatura inadequada.",
            "Deixar produtos vencidos na prateleira.",
          ],
          quiz: [
            q(
              "O que é contaminação cruzada?",
              [
                "Contaminação por cruzamento de medicamentos.",
                "Transferência de microrganismos de uma superfície/pessoa para outra.",
                "Mistura de diferentes tipos de resíduos.",
                "Uso de medicamento fora da validade.",
              ],
              1,
              "Contaminação cruzada é a transferência de agentes infecciosos entre superfícies, pessoas ou produtos.",
            ),
            q(
              "Qual prática abaixo ajuda a prevenir contaminação cruzada no balcão?",
              [
                "Manter dinheiro e medicamentos no mesmo balcão.",
                "Higienizar as mãos entre cada atendimento.",
                "Atender comendo um lanche.",
                "Usar a mesma caneta para todos os clientes.",
              ],
              1,
              "Higienizar as mãos entre atendimentos é a principal medida contra contaminação cruzada.",
            ),
            q(
              "No estoque, medicamentos devem ser armazenados:",
              [
                "Junto com produtos de limpeza e alimentos.",
                "Separados de alimentos e produtos químicos, em temperatura controlada.",
                "No chão, para facilitar o acesso.",
                "Próximos a fontes de calor.",
              ],
              1,
              "Medicamentos exigem armazenamento separado de alimentos e químicos, com temperatura controlada.",
            ),
          ],
          xp: 55,
        },
        {
          id: "primeiros-socorros",
          titulo: "Noções de Primeiros Socorros na Farmácia",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Conceitos básicos de primeiros socorros: avaliação inicial, desmaio, convulsão, ferimentos, queimaduras e o papel do atendente.",
          resumoExecutivo: [
            "Avaliação primária (XABCDE): verificar hemorragia grave, vias aéreas, respiração, circulação, nível de consciência e exposição.",
            "Desmaio: deitar, elevar pernas 30 cm, verificar consciência, chamar farmacêutico. Se não recuperar em 1-2 min, acionar SAMU.",
            "Convulsão: proteger a pessoa de bater em móveis, não colocar nada na boca, cronometrar. Chamar SAMU se durar mais de 5 minutos.",
          ],
          comparativo: {
            titulo: "Emergência x Urgência na Farmácia",
            itens: [
              {
                nome: "Emergência (risco iminente de morte)",
                quando:
                  "PCR, obstrução grave de vias aéreas, hemorragia incontrolável, convulsão prolongada. Acione SAMU imediatamente.",
              },
              {
                nome: "Urgência (sem risco iminente)",
                quando:
                  "Corte superficial, queimadura leve, desmaio breve, crise alérgica leve. Chame farmacêutico, avalie, oriente.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente desmaia subitamente no balcão da farmácia.",
            falaBoa:
              "Alguém chame o farmacêutico! (Para outro colega) E peça para ligar para o SAMU. Vou deitar a cliente e elevar as pernas. (Para a cliente) Senhora, a senhora está me ouvindo? Fique tranquila, estamos cuidando da senhora.",
            falaEvitar:
              "Gente, o que faço? Não sei o que fazer! (entra em pânico)",
          },
          checklist: [
            "Manter a calma em situações de emergência.",
            "Conhecer o número do SAMU (192) e Bombeiros (193).",
            "Saber avaliar rapidamente: a pessoa está consciente? Respirando?",
            "Saber a posição lateral de segurança (PLS) para inconsciente.",
            "Nunca oferecer nada por via oral a pessoa inconsciente.",
            "Saber onde fica o kit de primeiros socorros da farmácia.",
            "Chamar o farmacêutico imediatamente.",
          ],
          quandoChamarFarmaceutico: [
            "Sempre que houver emergência ou urgência na farmácia.",
            "Antes de iniciar qualquer procedimento de primeiros socorros.",
            "Após acionar o SAMU, para dar suporte até a chegada.",
          ],
          errosComuns: [
            "Entrar em pânico e não conseguir agir.",
            "Colocar colher ou objeto na boca de alguém em convulsão.",
            "Oferecer água ou remédio a pessoa inconsciente.",
            "Movimentar pessoa com suspeita de fratura na coluna.",
          ],
          quiz: [
            q(
              "O que fazer quando alguém desmaia na farmácia?",
              [
                "Jogar água no rosto.",
                "Deitar a pessoa, elevar pernas e chamar o farmacêutico.",
                "Dar tapinhas no rosto.",
                "Oferecer água para beber.",
              ],
              1,
              "Em desmaio, deite a pessoa e eleve as pernas para facilitar o retorno venoso ao cérebro.",
            ),
            q(
              "Durante uma convulsão, o que NÃO se deve fazer?",
              [
                "Proteger a cabeça da pessoa de impactos.",
                "Colocar um objeto na boca para evitar morder a língua.",
                "Afastar móveis e objetos perigosos.",
                "Cronometrar a duração da convulsão.",
              ],
              1,
              "Nunca coloque nada na boca de alguém em convulsão — a pessoa não vai engolir a língua e objetos podem causar asfixia.",
            ),
            q(
              "Qual o número do SAMU (serviço de emergência)?",
              [
                "190",
                "192",
                "193",
                "199",
              ],
              1,
              "SAMU (Serviço de Atendimento Móvel de Urgência): 192.",
            ),
          ],
          xp: 65,
        },
        {
          id: "emergencias-farmacia",
          titulo: "Emergências na Farmácia: Protocolos e Condutas",
          duracaoMin: 12,
          nivel: "avancado",
          resumo:
            "Protocolos específicos para emergências na farmácia: parada cardiorrespiratória, reação alérgica grave, intoxicação e hemorragia.",
          resumoExecutivo: [
            "PCR (Parada Cardiorrespiratória): pessoa inconsciente + não respira. Inicie RCP (compressões torácicas 100-120/min), chame SAMU, use DEA se disponível.",
            "Anafilaxia (reação alérgica grave): urticária + dificuldade respiratória. Chame SAMU imediatamente, veja se cliente tem autoinjetor de adrenalina.",
            "Intoxicação: leve embalagem ao SAMU, não induza vômito sem orientação (pode piorar dependendo da substância).",
          ],
          comparativo: {
            titulo: "Emergências Comuns na Farmácia",
            itens: [
              {
                nome: "PCR (Parada Cardiorrespiratória)",
                quando:
                  "Inconsciente + não respira. Iniciar RCP imediatamente, chamar SAMU, usar DEA se houver. A cada minuto sem RCP, chances caem 10%.",
              },
              {
                nome: "Anafilaxia (choque alérgico)",
                quando:
                  "Urticária + edema de lábios/língua + dificuldade respiratória. Chamar SAMU, posicionar sentado, verificar autoinjetor de adrenalina.",
              },
              {
                nome: "Intoxicação/Envenenamento",
                quando:
                  "Identificar substância (levar embalagem ao hospital). Não induzir vômito sem orientação. Chamar farmacêutico e SAMU.",
              },
              {
                nome: "Hemorragia grave",
                quando:
                  "Comprimir ferimento com gaze/tecido limpo, elevar membro, chamar SAMU. Não retirar gaze encharcada — colocar mais por cima.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Minha filha tomou esse xarope e o lábio inchou! Ela está com dificuldade para respirar!'",
            falaBoa:
              "Isso é uma emergência! (Para colega) Chame o SAMU urgente! (Para a mãe) Sente sua filha. Ela tem algum medicamento para alergia grave? A calma — a ajuda está chegando. O farmacêutico já está vindo.",
            falaEvitar:
              "Deve ser alergia leve. Dá um antialérgico para ela.",
          },
          checklist: [
            "Saber identificar sinais de PCR (inconsciência + sem respiração).",
            "Saber a técnica de RCP: compressões no centro do tórax, 100-120/min, 5-6 cm de profundidade.",
            "Reconhecer sinais de anafilaxia: inchaço de lábios/língua, chiado, dificuldade respiratória.",
            "Saber onde fica o DEA (desfibrilador externo automático) da farmácia, se houver.",
            "Nunca induzir vômito em caso de intoxicação sem orientação do SAMU.",
            "Manter a calma e delegar tarefas (chamar SAMU, pegar kit, avisar farmacêutico).",
          ],
          quandoChamarFarmaceutico: [
            "Sempre em qualquer emergência — o farmacêutico é o profissional de saúde presente.",
            "Para coordenar o atendimento até a chegada do SAMU.",
            "Para decidir sobre administração de medicamento de emergência.",
          ],
          errosComuns: [
            "Entrar em pânico e não agir.",
            "Dar medicamento por via oral para alguém com dificuldade respiratória.",
            "Induzir vômito em intoxicação (pode causar aspiração ou queimar novamente o esôfago).",
            "Parar a RCP antes da chegada do SAMU (a não ser que a pessoa recupere consciência).",
          ],
          quiz: [
            q(
              "Qual a frequência correta das compressões torácicas na RCP?",
              [
                "60-80 compressões por minuto.",
                "100-120 compressões por minuto.",
                "150-180 compressões por minuto.",
                "O mais rápido possível.",
              ],
              1,
              "A RCP deve ser realizada a 100-120 compressões por minuto, com profundidade de 5-6 cm.",
            ),
            q(
              "Sinais de anafilaxia (reação alérgica grave) incluem:",
              [
                "Apenas coceira localizada.",
                "Urticária generalizada + inchaço de lábios/língua + dificuldade respiratória.",
                "Dor de cabeça e tontura.",
                "Febre e calafrios.",
              ],
              1,
              "Anafilaxia envolve múltiplos sistemas: pele, vias aéreas e circulação; requer emergência.",
            ),
            q(
              "Em caso de intoxicação por medicamento, a conduta correta é:",
              [
                "Induzir vômito imediatamente.",
                "Chamar o SAMU, identificar a substância e NÃO induzir vômito sem orientação.",
                "Dar leite para neutralizar.",
                "Fazer a pessoa correr para acelerar o metabolismo.",
              ],
              1,
              "Nunca induza vômito sem orientação do SAMU/CIATox — alguns produtos causam mais dano ao serem vomitados.",
            ),
          ],
          xp: 75,
        },
        {
          id: "prevencao-acidentes",
          titulo: "Prevenção de Acidentes no Ambiente de Trabalho",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Medidas para prevenir acidentes de trabalho na farmácia: organização do ambiente, postura correta, uso de EPIs e cultura de segurança.",
          resumoExecutivo: [
            "A maioria dos acidentes de trabalho é evitável com medidas simples: piso seco, boa iluminação, organização do estoque e uso de EPIs.",
            "Postura correta ao levantar peso: dobrar os joelhos, manter a coluna ereta, não torcer o tronco.",
            "Todo acidente, por menor que seja, deve ser registrado e reportado ao farmacêutico — isso ajuda a prevenir futuros incidentes.",
          ],
          comparativo: {
            titulo: "Acidentes Comuns x Prevenção",
            itens: [
              {
                nome: "Queda (piso molhado, degrau)",
                quando:
                  "Sinalizar piso molhado, usar calçado antiderrapante, manter passagem livre de caixas.",
              },
              {
                nome: "Corte (vidro, lâmina, ampola)",
                quando:
                  "Usar luvas ao abrir ampolas, descartar vidro no descarpack, inspecionar o material.",
              },
              {
                nome: "Lesão por esforço repetitivo (LER)",
                quando:
                  "Alternar tarefas, usar apoio para o pulso, fazer pausas, ajustar altura do balcão.",
              },
              {
                nome: "Lesão na coluna (levantar peso)",
                quando:
                  "Usar técnica correta (joelhos dobrados, coluna ereta), pedir ajuda para cargas pesadas.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Atendente: 'Preciso pegar aquela caixa pesada no estoque alto. Será que dá sozinho?'",
            falaBoa:
              "Melhor pedir ajuda para o colega. Pegar caixa pesada sozinho ou usar escada inadequada pode causar acidente. Vamos usar o carrinho e a escada própria para estoque.",
            falaEvitar:
              "Dá pra pegar sozinho sim, é rapidinho.",
          },
          checklist: [
            "Manter o piso seco e livre de obstáculos.",
            "Usar calçado fechado e antiderrapante.",
            "Usar EPIs adequados (luvas, calçado, uniforme).",
            "Não subir em prateleiras ou cadeiras — usar escada própria.",
            "Pedir ajuda para cargas pesadas ou volumosas.",
            "Reportar e registrar qualquer acidente, mesmo pequeno.",
            "Participar das inspeções de segurança e treinamentos.",
          ],
          quandoChamarFarmaceutico: [
            "Acidente de trabalho com lesão (corte, queda, queimadura).",
            "Condição insegura identificada no ambiente (fio solto, piso danificado, prateleira instável).",
            "Para preenchimento da CAT (Comunicação de Acidente de Trabalho), se aplicável.",
          ],
          errosComuns: [
            "Achar que 'não vai acontecer comigo' e ignorar medidas de segurança.",
            "Usar cadeira no lugar de escada para alcançar prateleiras altas.",
            "Não usar EPIs por 'preguiça' ou pressa.",
            "Não reportar condições inseguras ou acidentes pequenos.",
          ],
          quiz: [
            q(
              "Qual a postura correta ao levantar uma caixa pesada do chão?",
              [
                "Curvar as costas e esticar as pernas.",
                "Dobrar os joelhos, manter a coluna ereta e levantar com a força das pernas.",
                "Torcer o tronco enquanto levanta.",
                "Levantar rapidamente com impulso.",
              ],
              1,
              "Use os joelhos (não a coluna) para levantar peso; mantenha as costas retas e o peso próximo ao corpo.",
            ),
            q(
              "Para alcançar uma prateleira alta no estoque, o correto é:",
              [
                "Subir na prateleira.",
                "Usar uma cadeira.",
                "Usar uma escada própria para estoque.",
                "Pular para alcançar.",
              ],
              2,
              "Use sempre escada ou banco próprio para acesso a prateleiras altas — nunca suba em prateleiras ou cadeiras.",
            ),
            q(
              "Por que todo acidente, mesmo pequeno, deve ser reportado?",
              [
                "Para gerar burocracia desnecessária.",
                "Para identificar causas e prevenir acidentes futuros.",
                "Para punir o funcionário.",
                "Não precisa reportar acidentes pequenos.",
              ],
              1,
              "Registrar acidentes permite investigar as causas e implementar medidas preventivas.",
            ),
          ],
          xp: 50,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// TRILHA 6 — Prática Supervisionada (16 aulas)
// ─────────────────────────────────────────────────────────────
export const trilhaPratica: Trilha = {
  id: "pratica",
  numero: 6,
  titulo: "Prática Supervisionada",
  subtitulo: "Atendente IV",
  descricao:
    "Simulações realísticas de balcão, estágio virtual e projetos práticos de certificação. O cliente entra, o atendente resolve — aprenda na prática, sem riscos.",
  nivelFaixa: "Intermediário ao avançado",
  icone: "user-check",
  modulos: [
    // ── Módulo 1: Estágio Virtual (6 aulas) ──
    {
      id: "estagio-virtual",
      titulo: "Estágio Virtual na Farmácia",
      descricao:
        "Simulação completa da rotina de uma farmácia: da triagem ao fechamento do atendimento, com foco em segurança e qualidade.",
      aulas: [
        {
          id: "rotina-balcao",
          titulo: "Rotina do Balcão: Do Acolhimento ao Fechamento",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Simulação completa da rotina de balcão: como recepcionar, triar, atender e finalizar o atendimento de forma profissional.",
          resumoExecutivo: [
            "Acolhimento: cumprimente, pergunte como pode ajudar, observe sinais não-verbais (dor, pressa, constrangimento).",
            "Triagem: faça perguntas para entender a real necessidade (sintomas, tempo, medicamentos em uso).",
            "Solução e fechamento: ofereça a melhor opção, oriente o uso, confirme o entendimento e agradeça.",
          ],
          simulacao: {
            cliente:
              "Cliente chega com expressão de dor e segurando a cabeça.",
            falaBoa:
              "Bom dia! Vejo que está incomodado — como posso ajudar? (Escuta) Então, essa dor de cabeça começou quando? É latejando ou constante? Toma algum medicamento regularmente?",
            falaEvitar:
              "O que você quer? (sem olhar para o cliente)",
          },
          checklist: [
            "Recepcionar com sorriso e contato visual.",
            "Observar a linguagem corporal do cliente.",
            "Fazer perguntas abertas para entender a necessidade.",
            "Oferecer solução adequada, não a mais cara.",
            "Orientar o uso do produto claramente.",
            "Confirmar se o cliente entendeu a orientação.",
            "Agradecer e convidar a voltar.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com sintomas que o atendente não se sente seguro para orientar.",
            "Necessidade de medicamento tarjado.",
            "Cliente insatisfeito com a orientação recebida.",
          ],
          errosComuns: [
            "Atender sem olhar para o cliente (digitando, arrumando prateleira).",
            "Ir direto à sugestão sem ouvir o cliente.",
            "Encerrar o atendimento sem confirmar se o cliente entendeu.",
          ],
          quiz: [
            q(
              "Qual a primeira etapa de um atendimento de balcão?",
              [
                "Sugerir o produto mais caro.",
                "Acolher o cliente com cordialidade.",
                "Perguntar se tem dinheiro.",
                "Anotar o nome do cliente.",
              ],
              1,
              "O acolhimento cordial é a base de um bom atendimento e cria vínculo com o cliente.",
            ),
            q(
              "O que são perguntas abertas e por que são importantes?",
              [
                "Perguntas que só aceitam sim/não; agilizam o atendimento.",
                "Perguntas que permitem explorar a necessidade real do cliente (ex.: 'Como começou?').",
                "Perguntas sobre o preço que o cliente quer pagar.",
                "Perguntas sobre a vida pessoal do cliente.",
              ],
              1,
              "Perguntas abertas ('Como?', 'O quê?', 'Quando?') ajudam a entender a real necessidade do cliente.",
            ),
            q(
              "Como finalizar um atendimento de balcão?",
              [
                "Entregar o produto e virar as costas.",
                "Orientar o uso, confirmar entendimento e agradecer.",
                "Perguntar se quer levar mais alguma coisa.",
                "Já pegar o próximo chamado.",
              ],
              1,
              "Um bom fechamento inclui orientação, confirmação de entendimento e agradecimento.",
            ),
          ],
          xp: 55,
        },
        {
          id: "triagem-cliente",
          titulo: "Triagem de Clientes na Farmácia",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Técnicas de triagem rápida para identificar a necessidade do cliente, avaliar urgência e direcionar corretamente.",
          resumoExecutivo: [
            "Triagem rápida: O QUÊ (sintoma principal), DESDE QUANDO (início), INTENSIDADE (leve/moderada/grave), MEDICAÇÕES (em uso), TENTATIVAS (já tentou algo?).",
            "Clientes com sinais de alarme (dor no peito, falta de ar, febre alta + manchas, confusão mental) devem ser direcionados ao farmacêutico e/ou emergência.",
            "Clientes com sintomas leves e MIP- elegíveis podem ser orientados pelo atendente dentro dos limites legais.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'Estou com uma dor aqui do lado direito, na barriga. Não é forte, mas não passa.'",
            falaBoa:
              "Entendi. Vou fazer algumas perguntas rápidas: a dor começou quando? Tem febre? Já teve isso antes? Toma algum medicamento? Como a dor não passa e é localizada, acho importante chamar o farmacêutico para avaliar.",
            falaEvitar:
              "Deve ser gases. Toma um Luftal.",
          },
          checklist: [
            "Usar o método OQIM (O quê, desde Quando, Intensidade, Medicações).",
            "Identificar rapidamente sinais de alarme (red flags).",
            "Diferenciar o que o atendente pode resolver do que exige farmacêutico.",
            "Não fazer diagnóstico — apenas triar e direcionar.",
            "Ser rápido mas completo na triagem.",
            "Documentar quando necessário.",
          ],
          quandoChamarFarmaceutico: [
            "Sinais de alarme identificados na triagem.",
            "Sintomas que persistem por mais de 7 dias.",
            "Cliente com múltiplas comorbidades ou polifarmácia.",
            "Qualquer dúvida sobre a gravidade do quadro.",
          ],
          errosComuns: [
            "Pular a triagem e ir direto à sugestão.",
            "Ignorar queixas do cliente por achar 'pouca coisa'.",
            "Fazer diagnóstico no lugar de triar e direcionar.",
          ],
          quiz: [
            q(
              "Qual das siglas abaixo representa uma boa técnica de triagem?",
              [
                "OQIM (O quê, Quando, Intensidade, Medicações).",
                "PDCA (Planejar, Fazer, Checar, Agir).",
                "5W2H (O quê, Por quê, Onde, Quando, Quem, Como, Quanto).",
                "SMART (Específico, Mensurável, Atingível, Relevante, Temporal).",
              ],
              0,
              "OQIM é uma técnica simples e eficaz para triagem rápida no balcão.",
            ),
            q(
              "Um cliente com dor abdominal localizada e persistente deve ser:",
              [
                "Orientado com MIP para cólica.",
                "Triado e encaminhado ao farmacêutico para avaliação.",
                "Liberado com analgésico.",
                "Ignorado, pois não parece grave.",
              ],
              1,
              "Dor localizada e persistente merece avaliação farmacêutica para descartar causas que exigem atendimento médico.",
            ),
            q(
              "Qual a diferença entre triar e diagnosticar?",
              [
                "São sinônimos.",
                "Triar é avaliar a urgência e direcionar; diagnosticar é identificar a doença (atribuição médica).",
                "Triar é mais complexo que diagnosticar.",
                "Triar é função do atendente; diagnosticar é do farmacêutico.",
              ],
              1,
              "O atendente tria (avalia urgência e direciona); o médico diagnostica (identifica a doença).",
            ),
          ],
          xp: 55,
        },
        {
          id: "dispensacao-segura",
          titulo: "Dispensação Segura de Medicamentos",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Protocolo de dispensação segura: os 5 certos, verificação de receita, checagem de validade e orientação ao paciente.",
          resumoExecutivo: [
            "Os 5 certos da dispensação: medicamento certo, dose certa, paciente certo, via certa, horário certo.",
            "Ao dispensar: confira o nome do medicamento na receita, a dose prescrita, a validade, e oriente sobre horários e interações.",
            "Sempre pergunte se o cliente tem dúvidas sobre como usar o medicamento — não presuma que ele sabe.",
          ],
          comparativo: {
            titulo: "Os 5 Certos da Dispensação",
            itens: [
              {
                nome: "1. Medicamento certo",
                quando:
                  "Confira se o nome do medicamento na receita corresponde ao que está sendo dispensado.",
              },
              {
                nome: "2. Dose certa",
                quando:
                  "Verifique a concentração e quantidade prescrita; confira com o estoque disponível.",
              },
              {
                nome: "3. Paciente certo",
                quando:
                  "Confirme o nome completo do paciente na receita.",
              },
              {
                nome: "4. Via certa",
                quando:
                  "Verifique a via de administração prescrita (oral, tópica, etc.).",
              },
              {
                nome: "5. Horário certo",
                quando:
                  "Oriente claramente os horários e intervalo entre as doses.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Minha receita tem dipirona, mas minha pressão está muito alta hoje. Pode me dar também um remédio para baixar a pressão?'",
            falaBoa:
              "Medicamento para pressão só pode ser dispensado com receita médica específica. Se sua pressão está alta hoje, sugiro procurar atendimento médico. Vou chamar o farmacêutico para conversar com você.",
            falaEvitar:
              "Toma esse captopril que resolve.",
          },
          checklist: [
            "Seguir os 5 certos da dispensação.",
            "Verificar a validade do medicamento antes de entregar.",
            "Checar se a receita está legível e dentro do prazo de validade.",
            "Orientar sobre horários, dose e cuidados (com ou sem alimentos).",
            "Alertar sobre possíveis efeitos colaterais comuns.",
            "Perguntar se o cliente tem alergia a medicamentos.",
            "Nunca dispensar medicamento tarjado sem receita.",
          ],
          quandoChamarFarmaceutico: [
            "Receita com dose/posologia que parece incorreta.",
            "Cliente relata alergia ou reação adversa ao medicamento.",
            "Dispensação de medicamento de alto risco (anticoagulantes, insulinas, quimioterápicos).",
            "Dúvida sobre interação entre medicamentos.",
          ],
          errosComuns: [
            "Entregar medicamento sem conferir a receita.",
            "Não orientar o cliente sobre como usar o medicamento.",
            "Ignorar prazos de validade na dispensação.",
            "Confundir medicamentos com nomes parecidos.",
          ],
          quiz: [
            q(
              "Quais são os 5 certos da dispensação?",
              [
                "Medicamento, dose, paciente, via e horário certos.",
                "Preço, marca, validade, quantidade e sabor.",
                "Cor, tamanho, formato, nome e fabricante.",
                "Atendente, balcão, estoque, caixa e cliente.",
              ],
              0,
              "Os 5 certos são: medicamento, dose, paciente, via e horário corretos.",
            ),
            q(
              "Ao dispensar um medicamento, o que o atendente DEVE fazer?",
              [
                "Entregar rapidamente para atender o próximo.",
                "Conferir a receita, validade e orientar o cliente sobre o uso.",
                "Perguntar se o cliente quer levar mais algum produto.",
                "Anotar o nome do cliente para o cadastro.",
              ],
              1,
              "A dispensação segura exige conferência da receita, validade e orientação ao paciente.",
            ),
            q(
              "Um cliente pede um medicamento tarjado sem receita. O atendente deve:",
              [
                "Vender, pois o cliente já conhece o remédio.",
                "Recusar a venda e orientar sobre a necessidade de receita.",
                "Vender se for para dor de cabeça.",
                "Vender metade da cartela para não precisar de receita.",
              ],
              1,
              "Medicamentos tarjados exigem receita — recuse educadamente e oriente o cliente.",
            ),
          ],
          xp: 60,
        },
        {
          id: "receituario-pratica",
          titulo: "Prática de Receituário: Interpretando Prescrições",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Como ler e interpretar receitas médicas: partes da prescrição, abreviações comuns, prazos de validade e tipos de receituário.",
          resumoExecutivo: [
            "Partes da receita: cabeçalho (médico/CRM), identificação do paciente, medicamento (concentração, forma), posologia (dose, horário, duração), data e assinatura.",
            "Abreviaturas comuns: 1cp (1 comprimido), VO (via oral), 8/8h (de 8 em 8 horas), SOS (se necessário), Ad (até).",
            "Receita branca (comum): 30 dias de validade. Receita azul (controlados B1): 30 dias. Receita amarela (entalhada, A3): 30 dias, uso restrito.",
          ],
          comparativo: {
            titulo: "Tipos de Receituário",
            itens: [
              {
                nome: "Receita branca (comum)",
                quando:
                  "Medicamentos de tarja vermelha (sem retenção). Validade: 30 dias. Ex.: amoxicilina, omeprazol.",
              },
              {
                nome: "Receita azul (B1/B2)",
                quando:
                  "Medicamentos controlados (benzodiazepínicos, codeína). Validade: 30 dias. Ex.: clonazepam, tramadol.",
              },
              {
                nome: "Receita amarela (A3)",
                quando:
                  "Medicamentos entorpecentes (morfina, metadona). Validade: 30 dias. Retida na farmácia.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'O médico escreveu 1cp VO 8/8h por 7 dias. O que significa isso?'",
            falaBoa:
              "Vou traduzir: um comprimido por via oral de 8 em 8 horas durante 7 dias. Isso significa que você toma um comprimido três vezes ao dia: por exemplo, café da manhã, almoço e jantar, sempre no mesmo horário. Ficou claro?",
            falaEvitar:
              "Ué, você não sabe ler? Tá escrito aí.",
          },
          checklist: [
            "Saber identificar as partes de uma receita.",
            "Conhecer as abreviaturas mais comuns (VO, 8/8h, 12/12h, SOS, 1cp, SC, IM).",
            "Verificar validade da receita (30 dias para a maioria).",
            "Diferenciar receita branca, azul e amarela.",
            "Garantir que o medicamento dispensado corresponde exatamente à prescrição.",
            "Encaminhar ao farmacêutico receitas ilegíveis ou com posologia suspeita.",
          ],
          quandoChamarFarmaceutico: [
            "Receita ilegível (não é possível ler a dose/medicamento).",
            "Receita que parece falsificada (rasuras, assinatura suspeita).",
            "Dose prescrita parece incorreta ou inadequada.",
            "Receita vencida — decisão sobre renovação cabe ao farmacêutico.",
          ],
          errosComuns: [
            "Dispensar medicamento diferente do prescrito com 'é a mesma coisa'.",
            "Ignorar a validade da receita.",
            "Não saber ler abreviaturas básicas de prescrição.",
            "Confundir receita azul com branca.",
          ],
          quiz: [
            q(
              "O que significa '2cp VO 12/12h por 10 dias'?",
              [
                "Dois comprimidos por via oral a cada 12 horas por 10 dias.",
                "Duas cápsulas via oral a cada 2 horas por 10 dias.",
                "Dois comprimidos via vaginal a cada 12 horas.",
                "Duas colheres via oral a cada 12 horas.",
              ],
              0,
              "2cp VO 12/12h = dois comprimidos por via oral a cada 12 horas (manhã e noite).",
            ),
            q(
              "Qual a validade padrão de uma receita branca (comum)?",
              [
                "7 dias.",
                "30 dias.",
                "60 dias.",
                "90 dias.",
              ],
              1,
              "Receitas brancas comuns têm validade de 30 dias a partir da data de emissão.",
            ),
            q(
              "Receita para clonazepam (Rivotril) é do tipo:",
              [
                "Branca (comum).",
                "Azul (controlado B1).",
                "Amarela (entalhada A3).",
                "Verde (receita veterinária).",
              ],
              1,
              "Benzodiazepínicos como clonazepam exigem receita azul (controle especial B1).",
            ),
          ],
          xp: 60,
        },
        {
          id: "perfumaria-pratica",
          titulo: "Perfumaria na Prática: Orientação ao Cliente",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Como orientar clientes na seção de perfumaria e cosméticos: tipos de pele, necessidades capilares, proteção solar e tendências.",
          resumoExecutivo: [
            "Tipos de pele: normal, seca, oleosa, mista e sensível — cada uma requer produtos específicos (hidratantes, sabonetes, protetor solar).",
            "Proteção solar: FPS 30+ é o mínimo recomendado; reaplicar a cada 2 horas; usar quantidade suficiente (espalhar bem no rosto e corpo).",
            "Cross-sell ético: se o cliente compra protetor solar, sugira um pós-sol ou hidratante; se compra xampu anticaspa, sugira o condicionador da mesma linha.",
          ],
          comparativo: {
            titulo: "Tipos de Pele e Cuidados",
            itens: [
              {
                nome: "Pele oleosa",
                quando:
                  "Brilho intenso, poros dilatados, tendência a acne. Produtos oil-free, gel, não comedogênicos.",
              },
              {
                nome: "Pele seca",
                quando:
                  "Repuxamento, descamação, aspecto opaco. Hidratantes ricos (ceramidas, ureia), sabonetes suaves.",
              },
              {
                nome: "Pele sensível",
                quando:
                  "Vermelhidão, ardência, reações. Produtos hipoalergênicos, sem fragrância, calmantes.",
              },
              {
                nome: "Pele mista",
                quando:
                  "Zona T oleosa (testa, nariz, queixo) e bochechas secas. Hidratação equilibrada, produtos específicos.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Minha pele é muito oleosa e cheia de espinhas. O que você recomenda?'",
            falaBoa:
              "Para pele oleosa com acne, sugiro começar com um sabonete específico para pele oleosa (com ácido salicílico ou enxofre), um hidratante oil-free e protetor solar em gel. Se a acne for inflamatória, é importante conversar com o farmacêutico — alguns tratamentos exigem prescrição.",
            falaEvitar:
              "Passa esse creme que é bom.",
          },
          checklist: [
            "Saber identificar os tipos de pele e necessidades capilares.",
            "Conhecer os produtos de proteção solar (FPS, PPD, reaplicação).",
            "Fazer cross-sell ético: sugerir itens complementares sem forçar.",
            "Orientar sobre rotina de skincare: limpar, hidratar, proteger.",
            "Respeitar o orçamento do cliente e oferecer alternativas.",
            "Encaminhar ao farmacêutico casos de alergia ou acne severa.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com acne inflamatória severa (cistos, nódulos).",
            "Reação alérgica a cosmético ou protetor solar.",
            "Cliente buscando tratamento para queda de cabelo acentuada.",
            "Dúvida sobre interação entre cosméticos e medicamentos tópicos.",
          ],
          errosComuns: [
            "Recomendar produtos sem perguntar sobre o tipo de pele.",
            "Empurrar o produto mais caro sem avaliar a necessidade.",
            "Falar que protetor solar é desnecessário em dias nublados.",
          ],
          quiz: [
            q(
              "Qual o FPS mínimo recomendado para proteção solar diária?",
              [
                "FPS 15.",
                "FPS 30.",
                "FPS 50.",
                "FPS 8.",
              ],
              1,
              "A Sociedade Brasileira de Dermatologia recomenda FPS 30+ para uso diário.",
            ),
            q(
              "Para pele oleosa, qual textura de hidratante é mais adequada?",
              [
                "Creme denso (frio).",
                "Gel ou loção oil-free.",
                "Óleo vegetal.",
                "Pomada.",
              ],
              1,
              "Peles oleosas preferem texturas leves como gel ou loção oil-free, não comedogênicos.",
            ),
            q(
              "Cross-sell ético na perfumaria significa:",
              [
                "Sempre sugerir o produto mais caro da loja.",
                "Oferecer produtos complementares relevantes (ex.: protetor + pós-sol) sem pressionar.",
                "Vender produtos vencidos com desconto.",
                "Trocar a marca indicada pelo cliente sem perguntar.",
              ],
              1,
              "Cross-sell ético oferece complementos relevantes sem pressionar o cliente.",
            ),
          ],
          xp: 55,
        },
        {
          id: "medicamentos-pratica",
          titulo: "Medicamentos na Prática: MIPs e Orientações",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Revisão prática dos MIPs mais comuns: analgésicos, antitérmicos, anti-inflamatórios, antialérgicos e quando cada um é indicado.",
          resumoExecutivo: [
            "Analgésicos/antitérmicos: paracetamol (fígado), dipirona (cólica, dor), ibuprofeno (inflamação, dor muscular). Conhecer diferenças e contraindicações.",
            "Anti-inflamatórios MIP: ibuprofeno, diclofenaco potássico (MIP em baixa dose), naproxeno. Cuidado com gastrite, úlcera e interação com anticoagulantes.",
            "Antialérgicos MIP: loratadina (não sonolento), cetirizina (pode dar sono leve), dexclorfeniramina (sonolento). Adequar ao perfil do cliente.",
          ],
          comparativo: {
            titulo: "Comparativo de Analgésicos MIP",
            itens: [
              {
                nome: "Paracetamol 500/750mg",
                quando:
                  "Dor leve/moderada, febre. Seguro para gástricos. Máximo 3g/dia (4g/dia em adultos). Cuidado: hepatotóxico em overdose.",
              },
              {
                nome: "Dipirona 500mg",
                quando:
                  "Dor leve/moderada, cólica, febre. Contraindicado em anemia aplástica/agranulocitose. Máximo 4x/dia.",
              },
              {
                nome: "Ibuprofeno 200/400mg (MIP)",
                quando:
                  "Dor muscular, inflamação, febre. Precaução em gástricos, cardíacos e renais. Tomar com alimentos.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Estou com febre e dor no corpo. O que tomar?'",
            falaBoa:
              "Febre com dor no corpo pode ser viral. Sugiro paracetamol 750mg de 6/6h ou dipirona de 6/6h — os dois são seguros para a maioria das pessoas. Tem alergia a algum desses? Tem problema de fígado? Se a febre persistir por mais de 3 dias, é bom buscar avaliação médica.",
            falaEvitar:
              "Toma um de cada que resolve mais rápido.",
          },
          checklist: [
            "Conhecer os principais MIPs: indicações, doses e contraindicações.",
            "Perguntar sobre alergias e condições de saúde antes de indicar.",
            "Respeitar a dose máxima diária de cada medicamento.",
            "Saber que anti-inflamatórios não devem ser usados por mais de 5 dias sem avaliação.",
            "Orientar sobre horários e administração (com/sem alimentos).",
            "Encaminhar ao farmacêutico para avaliação de quadros mais complexos.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com contraindicação para todos os MIPs disponíveis.",
            "Febre alta que não responde a antitérmicos.",
            "Dor intensa que não melhora com MIPs.",
            "Cliente em uso de anticoagulantes ou corticoides (risco de interação).",
          ],
          errosComuns: [
            "Indicar ibuprofeno para cliente com gastrite sem perguntar.",
            "Sugerir 'tomar dois juntos' para potencializar o efeito.",
            "Não perguntar sobre outros medicamentos antes de indicar MIP.",
            "Indicar paracetamol sem perguntar sobre consumo de álcool (risco hepático).",
          ],
          quiz: [
            q(
              "Qual analgésico MIP exige cuidado especial com o fígado?",
              [
                "Dipirona.",
                "Paracetamol (risco de hepatotoxicidade em altas doses).",
                "Ibuprofeno.",
                "Loratadina.",
              ],
              1,
              "Paracetamol em altas doses ou associado a álcool pode causar lesão hepática grave.",
            ),
            q(
              "Qual MIP é contraindicado para clientes com gastrite ou úlcera?",
              [
                "Paracetamol.",
                "Ibuprofeno e outros AINEs (anti-inflamatórios).",
                "Loratadina.",
                "Dipirona.",
              ],
              1,
              "AINEs como ibuprofeno podem irritar a mucosa gástrica e agravar gastrites e úlceras.",
            ),
            q(
              "Por que perguntar sobre alergias antes de indicar um MIP?",
              [
                "Curiosidade do atendente.",
                "Para evitar reações alérgicas graves (ex.: dipirona pode causar choque anafilático em alérgicos).",
                "Para anotar na ficha do cliente.",
                "Não é necessário perguntar.",
              ],
              1,
              "Alergias a medicamentos podem causar reações graves; sempre pergunte antes de indicar.",
            ),
          ],
          xp: 65,
        },
      ],
    },
    // ── Módulo 2: Simulação de Balcão (5 aulas) ──
    {
      id: "simulacao-balcao",
      titulo: "Simulação de Balcão",
      descricao:
        "Casos práticos de atendimento: clientes difíceis, emergências no balcão, prescrições irregulares e cross-sell ético com responsabilidade.",
      aulas: [
        {
          id: "atendimento-completo",
          titulo: "Simulação de Atendimento Completo",
          duracaoMin: 12,
          nivel: "avancado",
          resumo:
            "Simulação passo a passo de um atendimento completo no balcão: da recepção ao encaminhamento, com tomada de decisões.",
          resumoExecutivo: [
            "Cenário: Cliente chega com tosse seca há 5 dias, sem febre, sem outros sintomas. Já tentou xarope caseiro sem melhora.",
            "Atendente deve: acolher, triar (perguntar sobre febre, alergias, medicamentos), ofertar antitussígeno MIP adequado, orientar uso e sinais de alerta.",
            "Se a tosse persistir por mais de 7 dias ou surgir febre, o cliente deve retornar ou buscar avaliação médica.",
          ],
          simulacao: {
            cliente:
              "Cliente: 'Estou com tosse seca há 5 dias. Já tomei mel com limão mas não resolveu. O que tem de bom?'",
            falaBoa:
              "Vou te ajudar! Tosse seca por 5 dias sem febre pode ser alergia ou pós-viral. Temos antitussígenos como dropropizina ou levodropropizina em xarope. Toma 10ml a cada 8 horas. Se surgir febre ou a tosse passar de 7 dias, é bom consultar um médico. Tá claro?",
            falaEvitar:
              "Toma esse xarope aí que é o melhor.",
          },
          checklist: [
            "Acolher o cliente com cordialidade.",
            "Triar: o quê, desde quando, tentativas, medicações, alergias.",
            "Oferecer a opção mais adequada com explicação.",
            "Orientar posologia e cuidados.",
            "Definir sinais de alerta para retorno.",
            "Confirmar se o cliente entendeu.",
            "Agradecer.",
          ],
          quandoChamarFarmaceutico: [
            "Tosse com febre, falta de ar, chiado ou catarro purulento.",
            "Cliente com tosse crônica (>3 semanas).",
            "Cliente com múltiplas comorbidades ou imunossuprimido.",
          ],
          errosComuns: [
            "Indicar antitussígeno sem perguntar se a tosse é seca ou produtiva.",
            "Não estabelecer prazo e sinais de alerta para retorno.",
            "Não perguntar sobre alergias.",
          ],
          quiz: [
            q(
              "Qual antitussígeno agiria na tosse seca?",
              [
                "Antibiótico.",
                "Dropropizina (antitussígeno).",
                "Ibuprofeno (anti-inflamatório).",
                "Paracetamol (analgésico).",
              ],
              1,
              "Dropropizina é um antitussígeno indicado para tosse seca irritativa.",
            ),
            q(
              "O que o atendente deve orientar sobre a duração do tratamento?",
              [
                "Usar até acabar o frasco.",
                "Se a tosse ultrapassar 7 dias ou surgir febre, buscar avaliação médica.",
                "Usar para sempre.",
                "Parar assim que melhorar.",
              ],
              1,
              "Orientar claramente os sinais de alerta para retorno é parte essencial do atendimento.",
            ),
            q(
              "Qual a primeira pergunta sobre a tosse antes de indicar medicação?",
              [
                "Qual a marca que prefere?",
                "A tosse é seca ou com catarro?",
                "Quanto custa o remédio?",
                "Já tomou antibiótico?",
              ],
              1,
              "Diferenciar tosse seca de produtiva é crucial para escolher o antitussígeno ou expectorante adequado.",
            ),
          ],
          xp: 65,
        },
        {
          id: "cliente-dificil",
          titulo: "Como Lidar com Clientes Difíceis",
          duracaoMin: 12,
          nivel: "avancado",
          resumo:
            "Técnicas para lidar com clientes agressivos, insatisfeitos ou excessivamente exigentes sem perder a profissionalismo e a venda.",
          resumoExecutivo: [
            "Cliente agressivo: mantenha a calma, não revide, use tom de voz baixo e firme, ofereça soluções. Saiba quando se retirar e chamar o gerente.",
            "Cliente insatisfeito: ouça ativamente, peça desculpas (mesmo sem culpa), resolva o problema dentro das suas atribuições ou escalone.",
            "Cliente indeciso: ajude com perguntas direcionadas, ofereça 2-3 opções claras, não pressione pela decisão.",
          ],
          comparativo: {
            titulo: "Perfis de Clientes Difíceis e Abordagens",
            itens: [
              {
                nome: "Cliente agressivo/grosseiro",
                quando:
                  "Não revide. Use voz calma e firme. 'Entendo sua frustração. Vou fazer o possível para resolver.' Se não acalmar, chame o gerente.",
              },
              {
                nome: "Cliente indeciso",
                quando:
                  "Ajude com perguntas objetivas. Ofereça 2 opções. 'Entre A e B, qual te atende mais?' Não pressione.",
              },
              {
                nome: "Cliente que sabe tudo",
                quando:
                  "Valide o conhecimento, mas corrija educadamente se estiver errado. 'Sim, o senhor tem razão sobre isso. Só complementando...'",
              },
              {
                nome: "Cliente apressado",
                quando:
                  "Seja direto e eficiente. Informações essenciais primeiro. 'Vou direto ao ponto, senhor(a).'",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'ISSO É UM ABSURDO! Paguei caro nesse remédio e veio com o lacre violado. VOCÊS SÃO UMA VERGONHA!'",
            falaBoa:
              "Entendo perfeitamente sua indignação, e lamento pelo ocorrido. Vou resolver isso agora. Qual é o produto? (Confere) Realmente veio com o lacre violado. Vou trocar imediatamente por um novo e registrar a ocorrência para o fornecedor. Mais uma vez, minhas desculpas pelo transtorno.",
            falaEvitar:
              "Calma, não foi eu que violei. (tom irritado)",
          },
          checklist: [
            "Manter a calma em qualquer situação.",
            "Não levar para o pessoal — o cliente está insatisfeito com a situação, não com você.",
            "Ouvir sem interromper.",
            "Reconhecer o sentimento do cliente ('Entendo sua frustração').",
            "Oferecer solução dentro das suas possibilidades.",
            "Saber quando escalar para o farmacêutico ou gerente.",
            "Não prometer o que não pode cumprir.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente agressivo que não se acalma.",
            "Reclamação sobre erro de dispensação ou qualidade de medicamento.",
            "Cliente ameaçando processo ou chamando a polícia.",
            "Situação que excede a autoridade do atendente para resolver.",
          ],
          errosComuns: [
            "Responder agressividade com agressividade.",
            "Levar a reclamação como ofensa pessoal.",
            "Ignorar a reclamação e tentar seguir com a venda.",
            "Prometer solução que não pode cumprir.",
          ],
          quiz: [
            q(
              "Qual a primeira atitude ao lidar com um cliente agressivo?",
              [
                "Responder com o mesmo tom para mostrar autoridade.",
                "Manter a calma, ouvir e reconhecer a insatisfação.",
                "Chamar o gerente imediatamente.",
                "Ignorar e atender outro cliente.",
              ],
              1,
              "Mantenha a calma, ouça sem interromper e reconheça o sentimento do cliente antes de oferecer solução.",
            ),
            q(
              "Se um cliente está claramente errado sobre um produto, como abordar?",
              [
                "'O senhor está completamente errado.'",
                "'Entendo seu ponto, mas vamos verificar juntos a informação?'",
                "Ignorar e vender o que ele quer.",
                "Rir da situação.",
              ],
              1,
              "Corrija educadamente, oferecendo verificar a informação juntos, sem humilhar o cliente.",
            ),
            q(
              "Quando o atendente deve chamar o farmacêutico ou gerente?",
              [
                "Em qualquer reclamação.",
                "Quando a situação excede sua autoridade ou o cliente não se acalma.",
                "Nunca, o atendente resolve tudo.",
                "Apenas se o cliente pedir.",
              ],
              1,
              "Saiba seus limites — escalone quando a situação exigir autoridade superior.",
            ),
          ],
          xp: 70,
        },
        {
          id: "emergencia-balcao",
          titulo: "Emergência no Balcão: Simulação Realística",
          duracaoMin: 12,
          nivel: "avancado",
          resumo:
            "Simulação de emergências reais no balcão: PCR, desmaio, convulsão, reação alérgica. Como agir rápido e com segurança.",
          resumoExecutivo: [
            "Cenário 1 (desmaio): Cliente sente tontura e desmaia. Conduta: deitar, elevar pernas, chamar farmacêutico, checar consciência, se não recuperar em 1 minuto chamar SAMU.",
            "Cenário 2 (convulsão): Cliente cai e começa a convulsionar. Conduta: afastar objetos, proteger cabeça, não conter movimentos, não colocar nada na boca, cronometrar. Chamar SAMU se >5 min.",
            "Cenário 3 (PCR): Pessoa inconsciente + sem respiração. Conduta: checar responsividade + respiração por 10s, iniciar RCP (30 compressões x 2 ventilações), chamar SAMU, usar DEA se disponível.",
          ],
          simulacao: {
            cliente:
              "Cliente de meia-idade: 'Estou me sentindo estranho, tontura...' (começa a desmaiar no balcão)",
            falaBoa:
              "Segura aqui na cadeira! (Para colega) Chama o farmacêutico e o SAMU! (Para a cliente) A senhora está me ouvindo? Vou deitar a senhora e levantar suas pernas. Fique tranquila, estamos aqui. (Inicia protocolo de desmaio)",
            falaEvitar:
              "Gente, o que tá acontecendo? (entra em pânico e não faz nada)",
          },
          checklist: [
            "Manter a calma — o pânico contamina a equipe.",
            "Chamar o farmacêutico imediatamente.",
            "Avaliar: a pessoa está consciente? Respirando?",
            "Iniciar conduta adequada: PLS (inconsciente respirando), RCP (inconsciente e sem respirar).",
            "Acionar SAMU (192) se necessário.",
            "Designar tarefas (quem chama ajuda, quem pega o kit, quem fica com a pessoa).",
            "Nunca oferecer nada por via oral a pessoa inconsciente.",
          ],
          quandoChamarFarmaceutico: [
            "Sempre — o farmacêutico é líder da equipe em emergências.",
            "Para coordenar o atendimento até a chegada do SAMU.",
            "Para autorizar uso de medicamento de emergência na farmácia.",
          ],
          errosComuns: [
            "Entrar em pânico e paralisar.",
            "Oferecer água ou remédio a pessoa inconsciente.",
            "Colocar a mão ou objetos na boca de alguém em convulsão.",
            "Não chamar o SAMU por achar que 'vai passar'.",
          ],
          quiz: [
            q(
              "Qual a sequência correta ao presenciar um desmaio?",
              [
                "Jogar água, chamar SAMU, dar tapinhas.",
                "Deitar, elevar pernas, chamar farmacêutico, checar consciência, SAMU se necessário.",
                "Sentar a pessoa e dar café.",
                "Ignorar, pois desmaio é sempre benigno.",
              ],
              1,
              "Deite a pessoa e eleve pernas > chame farmacêutico > cheque consciência > SAMU se não recuperar.",
            ),
            q(
              "O que NÃO se deve fazer durante uma convulsão?",
              [
                "Proteger a cabeça.",
                "Colocar um objeto na boca para evitar morder a língua.",
                "Afastar objetos perigosos.",
                "Cronometrar a duração.",
              ],
              1,
              "Nunca coloque nada na boca durante convulsão — a pessoa não engole a língua e objetos podem causar asfixia.",
            ),
            q(
              "Quando acionar o SAMU em caso de convulsão?",
              [
                "Imediatamente, sempre.",
                "Se a convulsão durar mais de 5 minutos ou a pessoa não recuperar consciência depois.",
                "Apenas se a pessoa se machucar.",
                "Não precisa chamar, convulsão passa sozinha.",
              ],
              1,
              "Convulsão prolongada (>5 min) ou sem recuperação da consciência exige SAMU.",
            ),
          ],
          xp: 80,
        },
        {
          id: "prescricao-irregular",
          titulo: "Prescrição Irregular: Como Agir",
          duracaoMin: 10,
          nivel: "avancado",
          resumo:
            "Como identificar prescrições irregulares ou suspeitas: rasuras, receitas vencidas, assinaturas suspeitas e a conduta correta.",
          resumoExecutivo: [
            "Sinais de irregularidade: rasuras não rubricadas, data de validade vencida, assinatura diferente do padrão, CRM inexistente, medicamento não compatível com a especialidade do prescritor.",
            "Conduta: educadamente recuse a dispensação, explique o motivo, oriente o cliente a retornar ao médico para corrigir a receita, encaminhe ao farmacêutico.",
            "A farmácia tem obrigação legal de verificar a autenticidade da receita para medicamentos controlados — se houver suspeita, não dispense.",
          ],
          comparativo: {
            titulo: "Tipos de Irregularidades em Receitas",
            itens: [
              {
                nome: "Receita vencida",
                quando:
                  "Data de emissão há mais de 30 dias (branca/azul). O farmacêutico pode decidir se aceita com base no tipo de medicamento.",
              },
              {
                nome: "Rasuras não rubricadas",
                quando:
                  "Correções no texto da receita sem rubrica do médico. Receita inválida — não dispense.",
              },
              {
                nome: "CRM inexistente ou suspeito",
                quando:
                  "CRM não existe no sistema do Conselho Regional. Suspeita de falsificação — não dispense, avise farmacêutico.",
              },
              {
                nome: "Medicamento incompatível com a especialidade",
                quando:
                  "Ex.: psiquiatra prescrevendo antibiótico para infecção urinária. Pode ser legítimo, mas merece verificação.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Olha, meu médico me deu essa receita de antibiótico mas a data está de 45 dias atrás. Dá pra vender mesmo assim?'",
            falaBoa:
              "Entendo, mas a receita tem validade de 30 dias. Como está vencida, não posso dispensar. Sugiro que você volte ao médico para pedir uma nova receita. Se quiser, nosso farmacêutico pode conversar com você sobre alternativas MIP para aliviar os sintomas enquanto isso.",
            falaEvitar:
              "Ah, 45 dias... pode ser, não faz diferença. (vende mesmo assim)",
          },
          checklist: [
            "Verificar a data de validade da receita.",
            "Checar se há rasuras não rubricadas.",
            "Confirmar a assinatura e o carimbo do médico.",
            "Verificar se o CRM está visível e legível.",
            "Para receitas azuis/amarelas, verificar se estão dentro do talonário padrão.",
            "Nunca dispensar receita suspeita de falsificação.",
            "Encaminhar ao farmacêutico qualquer irregularidade.",
          ],
          quandoChamarFarmaceutico: [
            "Qualquer irregularidade em receita controlada (azul, amarela).",
            "Suspeita de falsificação de receita.",
            "Receita vencida — o farmacêutico decide sobre a dispensação excepcional.",
            "Receita com dose que parece incorreta ou perigosa.",
          ],
          errosComuns: [
            "Ignorar a data de validade da receita.",
            "Aceitar rasuras não rubricadas.",
            "Achar que pode decidir sozinho sobre a validade da receita.",
            "Dispensar receita com nome de paciente ilegível.",
          ],
          quiz: [
            q(
              "Qual a validade padrão de receitas de controle especial (azul)?",
              [
                "15 dias.",
                "30 dias.",
                "60 dias.",
                "90 dias.",
              ],
              1,
              "Receitas de controle especial (azuis e brancas comuns) têm validade de 30 dias.",
            ),
            q(
              "Uma receita com rasura não rubricada pelo médico é:",
              [
                "Válida normalmente.",
                "Inválida — não pode ser dispensada.",
                "Válida se a farmácia rubricar.",
                "Válida apenas para medicamentos MIP.",
              ],
              1,
              "Rasuras não rubricadas invalidam a receita — o médico precisa rubricar qualquer correção.",
            ),
            q(
              "Suspeitando de falsificação de receita, o atendente deve:",
              [
                "Dispensar mesmo assim para não perder o cliente.",
                "Recusar a dispensação e comunicar o farmacêutico.",
                "Ignorar a suspeita e vender.",
                "Apenas anotar o nome do cliente.",
              ],
              1,
              "Suspeita de falsificação exige recusa da dispensação e comunicação ao farmacêutico/CRF.",
            ),
          ],
          xp: 70,
        },
        {
          id: "cross-sell-etico",
          titulo: "Cross-Sell Ético e Fidelização",
          duracaoMin: 10,
          nivel: "intermediario",
          resumo:
            "Técnicas de cross-sell ético (venda cruzada baseada em necessidade real) e fidelização de clientes na farmácia.",
          resumoExecutivo: [
            "Cross-sell ético: oferecer produtos complementares que atendam a uma necessidade REAL do cliente, não apenas para aumentar o ticket.",
            "Exemplos: cliente compra antialérgico → sugira lenços umedecidos; compra protetor solar → sugira hidratante pós-sol; compra MIP para dor → sugira curativo ou gel antisséptico se for ferimento.",
            "Fidelização: trate o cliente pelo nome (quando possível), lembre de suas preferências, ofereça o programa de fidelidade, faça o cliente se sentir especial.",
          ],
          comparativo: {
            titulo: "Cross-Sell Ético x Antiético",
            itens: [
              {
                nome: "Cross-sell ético",
                quando:
                  "Cliente compra antialérgico. 'Temos lenços umedecidos que ajudam com a coriza.' — Atende necessidade real.",
              },
              {
                nome: "Cross-sell antiético",
                quando:
                  "Cliente compra antialérgico. 'Quer levar também esse perfume importado?' — Não tem relação com a necessidade.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente: 'Vou levar esse antialérgico para minha rinite.'",
            falaBoa:
              "Ótimo, a loratadina é excelente para rinite. Já que está com rinite, talvez um soro fisiológico para lavagem nasal ajude a aliviar mais rápido. Também temos lenços umedecidos com aloe vera que não agridem o nariz. Quer ver?",
            falaEvitar:
              "Quer levar um perfume também? Tá em promoção.",
          },
          checklist: [
            "Oferecer produtos complementares apenas quando fizer sentido para o cliente.",
            "Explicar o benefício do item complementar.",
            "Não forçar — aceitar o 'não' do cliente.",
            "Conhecer o portfólio de produtos para fazer sugestões relevantes.",
            "Usar o programa de fidelidade como ferramenta de retenção.",
            "Tratar o cliente pelo nome e lembrar de preferências.",
            "Agradecer sempre e convidar a voltar.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente que precisa de um produto mais específico (dermocosmético, suplemento).",
            "Oportunidade de indicar serviço farmacêutico (aferição de pressão, aplicação de injetável).",
            "Dúvida sobre qual produto complementar é mais adequado.",
          ],
          errosComuns: [
            "Oferecer produtos sem relação com a necessidade do cliente.",
            "Forçar a venda quando o cliente diz não.",
            "Ignorar o programa de fidelidade.",
            "Não conhecer os produtos da loja para fazer boas sugestões.",
          ],
          quiz: [
            q(
              "O que caracteriza o cross-sell ético?",
              [
                "Sempre oferecer o produto mais caro.",
                "Oferecer produtos complementares que atendam a uma necessidade real do cliente.",
                "Vender qualquer coisa para aumentar o ticket.",
                "Trocar o produto pedido pelo cliente.",
              ],
              1,
              "Cross-sell ético agrega valor ao cliente ao oferecer itens que realmente complementam sua compra.",
            ),
            q(
              "Cliente compra protetor solar. Qual sugestão de cross-sell ético?",
              [
                "Um perfume importado.",
                "Um hidratante pós-sol ou um sabonete específico para usar antes do protetor.",
                "Um analgésico.",
                "Um xampu anticaspa.",
              ],
              1,
              "Pós-sol ou sabonete específico complementam a rotina de proteção solar de forma relevante.",
            ),
            q(
              "Como fidelizar um cliente na farmácia?",
              [
                "Ignorá-lo após a venda.",
                "Tratar pelo nome, lembrar preferências, oferecer programa de fidelidade.",
                "Dar descontos apenas na primeira compra.",
                "Falar mal dos concorrentes.",
              ],
              1,
              "Reconhecimento e atenção personalizada são as melhores ferramentas de fidelização.",
            ),
          ],
          xp: 55,
        },
      ],
    },
    // ── Módulo 3: Projetos e Certificação (5 aulas) ──
    {
      id: "projetos-certificacao",
      titulo: "Projetos e Certificação",
      descricao:
        "Preparação para a certificação final: portfólio de projetos, estudo de caso, revisão geral, simulado e cerimônia de certificação.",
      aulas: [
        {
          id: "portfolio-projetos",
          titulo: "Portfólio de Projetos: Seu Legado Profissional",
          duracaoMin: 10,
          nivel: "avancado",
          resumo:
            "Como construir um portfólio profissional com os casos e aprendizados acumulados ao longo das trilhas — seu legado como atendente de farmácia.",
          resumoExecutivo: [
            "Um portfólio reúne seus melhores casos, projetos e aprendizados; é a sua carta de apresentação para o mercado.",
            "Inclua: casos de atendimento marcantes, projetos de melhoria na farmácia (ex.: organização de expositores), certificados e feedbacks.",
            "Mantenha atualizado e use em entrevistas de emprego e avaliações de desempenho.",
          ],
          simulacao: {
            cliente:
              "Gestor da farmácia: 'Estamos contratando. Por que eu contrataria você?'",
            falaBoa:
              "Tenho formação completa na trilha de atendente de farmácia, incluindo Fundamentos e Prática Supervisionada. Meu portfólio inclui casos reais de atendimento, projetos de organização de expositores que aumentaram as vendas em 15%, e feedbacks positivos de clientes. Sou comprometido com a ética e o atendimento de qualidade.",
            falaEvitar:
              "Porque eu preciso do emprego.",
          },
          checklist: [
            "Reunir certificados de todas as trilhas concluídas.",
            "Documentar 3-5 casos de atendimento marcantes (positivos).",
            "Incluir projetos de melhoria na farmácia, se houver.",
            "Adicionar feedbacks de clientes e farmacêuticos.",
            "Manter o portfólio em formato digital e impresso.",
            "Atualizar periodicamente com novos aprendizados.",
          ],
          quandoChamarFarmaceutico: [
            "Para validar casos e projetos incluídos no portfólio.",
            "Para fornecer carta de recomendação, se aplicável.",
          ],
          errosComuns: [
            "Não ter portfólio organizado.",
            "Incluir apenas informações básicas sem diferenciais.",
            "Não atualizar o portfólio com o tempo.",
          ],
          quiz: [
            q(
              "O que é um portfólio profissional?",
              [
                "Um documento que lista os preços dos produtos.",
                "Uma coleção organizada de trabalhos, casos e certificados que demonstram suas competências.",
                "Um currículo comum.",
                "Uma carta de demissão.",
              ],
              1,
              "Portfólio é uma vitrine do seu trabalho e aprendizado — vai além do currículo tradicional.",
            ),
            q(
              "Qual elemento NÃO é recomendado incluir em um portfólio de atendente?",
              [
                "Casos de atendimento marcantes.",
                "Certificados de conclusão de cursos.",
                "Informações pessoais como CPF e RG.",
                "Projetos de melhoria realizados.",
              ],
              2,
              "Dados pessoais sensíveis não devem constar no portfólio; foque em competências e realizações.",
            ),
            q(
              "Como um portfólio pode ajudar na carreira do atendente?",
              [
                "Não ajuda, é só enfeite.",
                "Serve como diferencial em processos seletivos e avaliações.",
                "Substitui a necessidade de entrevista.",
                "Garante aumento salarial automático.",
              ],
              1,
              "Um bom portfólio demonstra proatividade e competência, diferenciando o profissional no mercado.",
            ),
          ],
          xp: 60,
        },
        {
          id: "estudo-caso",
          titulo: "Estudo de Caso: Atendimento Completo",
          duracaoMin: 12,
          nivel: "avancado",
          resumo:
            "Estudo de caso completo integrando todos os conhecimentos das trilhas: cliente com múltiplas queixas, decisões complexas e encaminhamentos.",
          resumoExecutivo: [
            "Caso: Cliente (65 anos, hipertenso e diabético) chega com tontura, tosse seca e ferida no pé que não cicatriza.",
            "Desafios: múltiplas comorbidades, polifarmácia (anti-hipertensivo, metformina), sintomas que podem ser de várias causas.",
            "Conduta: ideal é chamar o farmacêutico imediatamente. Tontura pode ser efeito de medicação. Ferida no pé em diabético é sinal de alarme. Tosse precisa ser avaliada com cuidado devido às comorbidades.",
          ],
          simulacao: {
            cliente:
              "Cliente idoso: 'Moça, estou tonto há uns dias, e essa tosse não quer passar. Ah, e esse machucado no pé não sara. O senhor farmacêutico pode dar uma olhada?'",
            falaBoa:
              "Com certeza, vou chamar o farmacêutico agora. O senhor é hipertenso e diabético, correto? Todas essas queixas merecem atenção especial. Enquanto espera, sente-se aqui que vou avisar o farmacêutico. (Chama farmacêutico e relata: tontura + tosse + ferida pé não cicatrizante em paciente HAS + DM)",
            falaEvitar:
              "Tontura é normal da idade. A tosse, toma esse xarope. O machucado, passa essa pomada. (dispensa sem chamar farmacêutico)",
          },
          checklist: [
            "Identificar rapidamente a complexidade do caso (idade, comorbidades, polifarmácia).",
            "Nunca tentar resolver caso complexo sozinho.",
            "Chamar o farmacêutico com um briefing completo dos sintomas.",
            "Oferecer acolhimento e conforto enquanto o farmacêutico não chega.",
            "Documentar as queixas para repasse ao farmacêutico.",
            "Saber que ferida em pé de diabético que não cicatriza é emergência potencial.",
          ],
          quandoChamarFarmaceutico: [
            "SEMPRE em caso de cliente com múltiplas comorbidades e queixas complexas.",
            "Cliente com ferida que não cicatriza + diabetes (risco de pé diabético).",
            "Tontura em idoso polimedicado (pode ser hipotensão postural, efeito colateral, AVC).",
            "Qualquer queixa em cliente que gere dúvida ou insegurança no atendente.",
          ],
          errosComuns: [
            "Tentar resolver caso complexo com 'achismo' para não 'incomodar' o farmacêutico.",
            "Subestimar a gravidade de ferida em pé de diabético.",
            "Dar orientações superficiais sobre múltiplos sintomas sem visão sistêmica.",
          ],
          quiz: [
            q(
              "Um cliente diabético com ferida no pé que não cicatriza deve ser:",
              [
                "Orientado a passar pomada antibiótica e esperar.",
                "Encaminhado ao farmacêutico e idealmente ao médico (risco de pé diabético).",
                "Liberado com curativo simples.",
                "Ignorado, pois feridas em diabéticos são comuns.",
              ],
              1,
              "Ferida não cicatrizante em diabético pode indicar neuropatia/vasculopatia e requer avaliação urgente.",
            ),
            q(
              "Qual a conduta diante de um idoso polimedicado com tontura?",
              [
                "'É normal da idade.'",
                "Chamar o farmacêutico — tontura pode ser hipotensão postural, efeito colateral ou AVC.",
                "'Para de tomar um dos remédios.'",
                "'Toma um Dramin.'",
              ],
              1,
              "Tontura em idoso polimedicado tem múltiplas causas possíveis e exige avaliação farmacêutica cuidadosa.",
            ),
            q(
              "Por que o atendente não deve tentar resolver casos complexos sozinho?",
              [
                "Porque é mais rápido chamar o farmacêutico.",
                "Porque pode cometer erros que colocam a saúde do cliente em risco.",
                "Porque o cliente não confia no atendente.",
                "Porque é proibido conversar com o cliente sobre sintomas.",
              ],
              1,
              "Atender casos complexos além da sua competência pode levar a erros graves de orientação.",
            ),
          ],
          xp: 80,
        },
        {
          id: "revisao-geral",
          titulo: "Revisão Geral: Tudo que Você Aprendeu",
          duracaoMin: 12,
          nivel: "avancado",
          resumo:
            "Revisão integrada de todos os conhecimentos das trilhas: legislação, saúde, comunicação, biossegurança e prática de balcão.",
          resumoExecutivo: [
            "Legislação: farmacêutico RT, receitas (branca/azul/amarela), validade 30 dias, proibição de vender tarjado sem receita.",
            "Saúde: sistemas do corpo (digestório, cardiovascular, respiratório, nervoso, endócrino), MIPs mais comuns, sinais de alarme.",
            "Biossegurança: higienização das mãos, EPIs, descarte correto, primeiros socorros, RCP, emergências.",
            "Comunicação e prática: escuta ativa, ética, cross-sell ético, triagem, dispensação segura.",
          ],
          comparativo: {
            titulo: "Pilares da Formação do Atendente",
            itens: [
              {
                nome: "Conhecimento técnico",
                quando:
                  "Medicamentos, MIPs, saúde, anatomia, microbiologia. Base científica para orientar clientes.",
              },
              {
                nome: "Habilidade prática",
                quando:
                  "Triagem, dispensação, receituário, simulação de balcão. O 'como fazer' no dia a dia.",
              },
              {
                nome: "Atitude profissional",
                quando:
                  "Ética, comunicação, biossegurança, trabalho em equipe. A postura que diferencia o atendente.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Gestor: 'Se eu te perguntar agora: qual o papel do atendente na farmácia, o que você responde?'",
            falaBoa:
              "O atendente é o primeiro e muitas vezes o último contato do cliente com a farmácia. Meu papel é acolher, ouvir, triar, orientar dentro dos limites legais, indicar MIPs e perfumaria, e saber quando chamar o farmacêutico — sempre com ética, sigilo e biossegurança.",
            falaEvitar:
              "Vender remédio e perfumaria.",
          },
          checklist: [
            "Revisar os tipos de receita e suas validades.",
            "Revisar os 5 certos da dispensação.",
            "Revisar os sinais de alarme para emergências.",
            "Revisar os principais MIPs e suas indicações.",
            "Revisar os protocolos de biossegurança.",
            "Revisar as técnicas de comunicação e abordagem.",
            "Refletir sobre seu crescimento profissional.",
          ],
          quandoChamarFarmaceutico: [
            "Dúvida persistente sobre algum tema revisado.",
            "Caso real que mistura vários tópicos da revisão.",
          ],
          errosComuns: [
            "Achar que já sabe tudo e não se dedicar à revisão.",
            "Focar apenas em teoria e não nos aspectos práticos.",
            "Não identificar lacunas no próprio conhecimento.",
          ],
          quiz: [
            q(
              "Receitas brancas e azuis têm validade de quantos dias?",
              [
                "15 dias.",
                "30 dias.",
                "60 dias.",
                "90 dias.",
              ],
              1,
              "Ambas têm validade de 30 dias a partir da emissão (exceções: medicamentos de uso contínuo podem ter prazo estendido pelo médico).",
            ),
            q(
              "Os 5 certos da dispensação são:",
              [
                "Preço, marca, validade, quantidade e sabor.",
                "Medicamento, dose, paciente, via e horário.",
                "Cor, tamanho, forma, peso e aroma.",
                "Nome, endereço, telefone, CPF e RG.",
              ],
              1,
              "Medicamento certo, dose certa, paciente certo, via certa, horário certo.",
            ),
            q(
              "Qual o pilar mais importante da atuação do atendente?",
              [
                "Vender o produto mais caro.",
                "Saber a hora de chamar o farmacêutico.",
                "Falar bem de todos os medicamentos.",
                "Atender o maior número de clientes por hora.",
              ],
              1,
              "Reconhecer seus limites e saber quando escalar ao farmacêutico é a atitude mais importante para a segurança do cliente.",
            ),
          ],
          xp: 70,
        },
        {
          id: "simulado-final",
          titulo: "Simulado Final de Certificação",
          duracaoMin: 15,
          nivel: "avancado",
          resumo:
            "Simulado completo com questões integradoras de todas as trilhas, simulando a prova de certificação final.",
          resumoExecutivo: [
            "O simulado final abrange todas as áreas do conhecimento: fundamentos, legislação, saúde, comunicação, biossegurança e prática.",
            "Serão 10 questões de múltipla escolha cobrindo cenários reais de balcão, com foco em tomada de decisão segura.",
            "O objetivo não é apenas testar conhecimento, mas desenvolver a capacidade de integração e julgamento clínico no nível do atendente.",
          ],
          simulacao: {
            cliente:
              "O simulado começa agora. Responda cada questão pensando no que você faria no balcão real.",
            falaBoa:
              "Vou ler cada questão com atenção. Lembrar das aulas de fundamentos, legislação, biossegurança e comunicação. A resposta certa é a que prioriza a segurança do cliente acima de tudo.",
            falaEvitar:
              "Chutar rápido para terminar logo.",
          },
          checklist: [
            "Responder com calma e atenção.",
            "Ler cada questão duas vezes antes de responder.",
            "Priorizar a segurança do cliente em todas as respostas.",
            "Lembrar os limites legais do atendente.",
            "Identificar sinais de alarme em cada cenário.",
            "Ao final, revisar as respostas marcadas.",
          ],
          quandoChamarFarmaceutico: [
            "Em toda questão que envolve medicamento tarjado, suspeita de emergência ou caso complexo.",
            "A resposta correta sempre será 'chamar o farmacêutico' quando houver dúvida sobre a conduta.",
          ],
          errosComuns: [
            "Responder com base no 'achismo' em vez do protocolo.",
            "Escolher a opção mais rápida em vez da mais segura.",
            "Não ler atentamente as alternativas antes de marcar.",
          ],
          quiz: [
            q(
              "Cliente com 70 anos, em uso de losartana e metformina, chega com tontura e dor no peito. Qual a conduta?",
              [
                "'É normal da idade, toma um analgésico.'",
                "Chamar o farmacêutico imediatamente — pode ser emergência cardiovascular.",
                "'Para de tomar os remédios.'",
                "'Toma um Dramin para a tontura.'",
              ],
              1,
              "Dor no peito + tontura em idoso com comorbidades é potencial emergência; chame o farmacêutico e considere SAMU.",
            ),
            q(
              "Cliente pede amoxicilina sem receita 'porque sempre resolve'. Qual a conduta?",
              [
                "Vender, pois ele já conhece o medicamento.",
                "Recusar a venda e explicar que antibiótico exige receita.",
                "Vender metade da cartela.",
                "Vender um genérico mais barato.",
              ],
              1,
              "Antibiótico exige receita médica — recuse educadamente, explique os riscos da automedicação com antibióticos.",
            ),
            q(
              "Cliente desmaia no balcão, recupera consciência em 30 segundos. Qual a conduta?",
              [
                "Oferecer água e liberar.",
                "Chamar o farmacêutico para avaliar e orientar.",
                "Ignorar, já que recuperou.",
                "Dar um café para reanimar.",
              ],
              1,
              "Mesmo que recupere rápido, o episódio precisa ser avaliado pelo farmacêutico para identificar a causa.",
            ),
            q(
              "Qual NÃO é atribuição do atendente de farmácia?",
              [
                "Organizar expositores de perfumaria.",
                "Indicar MIP para sintomas leves.",
                "Alterar a dose de um medicamento prescrito.",
                "Recepcionar e acolher clientes.",
              ],
              2,
              "O atendente NUNCA altera doses prescritas — isso é atribuição do médico ou, em alguns casos, do farmacêutico.",
            ),
            q(
              "Como fazer cross-sell ético para um cliente comprando protetor solar?",
              [
                "'Quer levar uma cerveja também?'",
                "'Temos um hidratante pós-sol que complementa o uso do protetor.'",
                "'Leve dois protetores que sai mais barato.'",
                "'Esse protetor é o mais caro, leva ele.'",
              ],
              1,
              "Hidratante pós-sol é complemento relevante para a rotina de proteção solar.",
            ),
            q(
              "Cliente com febre alta (39,5°C), manchas vermelhas no corpo e dor de cabeça. Conduta:",
              [
                "'Deve ser alergia, toma antialérgico.'",
                "'Isso pode ser dengue ou meningite — procure o pronto-socorro.'",
                "'Toma antitérmico e espera mais um dia.'",
                "'Passa pomada de corticóide nas manchas.'",
              ],
              1,
              "Febre alta + manchas + cefaleia são sinais de alerta para dengue, meningite ou outras doenças graves.",
            ),
          ],
          xp: 100,
        },
        {
          id: "certificacao",
          titulo: "Certificação Final: A Jornada Continua",
          duracaoMin: 10,
          nivel: "avancado",
          resumo:
            "Cerimônia simbólica de certificação e orientações para a continuidade da jornada profissional após a conclusão das trilhas.",
          resumoExecutivo: [
            "Parabéns! Você completou as 6 trilhas do appfarmacia. Isso representa um marco na sua formação como atendente de farmácia.",
            "Lembre-se: o aprendizado nunca termina. Continue estudando, se atualizando sobre novos medicamentos, RDCs e técnicas de atendimento.",
            "Seu próximo passo: aplicar no balcão tudo que aprendeu, sempre com ética e seguranc,a, e buscar novos conhecimentos na prática diária.",
          ],
          simulacao: {
            cliente:
              "Farmacêutico RT: 'Parabéns pela certificacão! O que esse aprendizado significa para você e para seus clientes?'",
            falaBoa:
              "Obrigado! Esse aprendizado significa que posso atender com mais seguranca e responsabilidade. Sei meus limites, sei quando chamar o farmacêutico e sei que meu papel vai além de vender — é cuidar das pessoas com respeito e conhecimento. Meus clientes podem confiar que terão um atendimento qualificado e ético.",
            falaEvitar:
              "Significa que agora posso dar mais opiniões sobre remédios.",
          },
          checklist: [
            "Celebrar a conquista — você merece!",
            "Compartilhar o certificado com gestores e colegas.",
            "Atualizar o curriculo e portfólio com a certificação.",
            "Manter o hábito de revisar periodicamente os conteúdos.",
            "Buscar novos cursos e especializações.",
            "Aplicar no dia a dia os aprendizados de todas as trilhas.",
            "Ser um exemplo de ética e profissionalismo na farmácia.",
          ],
          quandoChamarFarmaceutico: [
            "Sempre que estiver em dúvida — o farmacêutico é seu aliado, não seu concorrente.",
            "Para discutir casos complexos e continuar aprendendo.",
            "Para ser mentor na sua evolução profissional.",
          ],
          errosComuns: [
            "Achar que o certificado é o fim e não o começo da jornada.",
            "Relaxar nos protocolos após a certificação.",
            "Não continuar se atualizando.",
          ],
          quiz: [
            q(
              "Após a certificação, o atendente deve:",
              [
                "Parar de estudar, já sabe tudo.",
                "Continuar aprendendo e se atualizando na prática diária.",
                "Focar apenas em vendas, sem tempo para estudos.",
                "Ignorar os protocolos aprendidos.",
              ],
              1,
              "A certificação é o começo de uma jornada de aprendizado contínuo na farmácia.",
            ),
            q(
              "Qual o maior legado das trilhas para o atendente?",
              [
                "Saber vender qualquer produto.",
                "Atender com seguranca, ética e responsabilidade, sabendo seus limites.",
                "Poder substituir o farmacêutico.",
                "Ter respostas prontas para todas as situações.",
              ],
              1,
              "O maior aprendizado é atender com responsabilidade, reconhecendo seus limites e priorizando a segurança do cliente.",
            ),
            q(
              "O que fazer quando surgir uma dúvida no balcão após a certificação?",
              [
                "Tentar resolver sozinho para não parecer que não aprendeu.",
                "Consultar o farmacêutico — a dúvida é parte do aprendizado contínuo.",
                "Ignorar a dúvida e seguir em frente.",
                "Pesquisar no Google na frente do cliente.",
              ],
              1,
              "Tirar dúvidas com o farmacêutico demonstra profissionalismo e compromisso com a segurança do cliente.",
            ),
          ],
          xp: 80,
        },
      ],
    },
  ],
};
