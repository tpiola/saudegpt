import type { Trilha } from "./types";
import { q } from "./_helpers";
import { imagensCategoria } from "./midia-catalogo";

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
      imagemHeroUrl: imagensCategoria.medicamentos,
      aulas: [
        {
          id: "historia-farmacia",
          titulo: "História da Farmácia no Brasil e no Mundo",
          duracaoMin: 8,
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
          duracaoMin: 8,
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
          xp: 50,
        },
        {
          id: "etica-farmaceutica",
          titulo: "Ética Farmacêutica e Sigilo Profissional",
          duracaoMin: 10,
          nivel: "intermediario",
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
          xp: 60,
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
          xp: 55,
        },
        {
          id: "regulacao-saude",
          titulo: "Regulação em Saúde: Anvisa, CRF e Vigilância Sanitária",
          duracaoMin: 12,
          nivel: "intermediario",
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
          xp: 65,
        },
        {
          id: "farmacia-tipos",
          titulo: "Tipos de Farmácia e Seus Segmentos",
          duracaoMin: 10,
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
          xp: 55,
        },
      ],
    },
    // ── Módulo 2: Anatomia e Fisiologia (6 aulas) ──
    {
      id: "anatomia-fisiologia",
      titulo: "Anatomia e Fisiologia Humana",
      descricao:
        "Visão geral do corpo humano: principais sistemas, seus órgãos e funções — o conhecimento básico que todo atendente de farmácia precisa dominar.",
      imagemHeroUrl: imagensCategoria.principioAtivo,
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
          nivel: "intermediario",
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
          xp: 60,
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
          xp: 65,
        },
        {
          id: "sistema-respiratorio",
          titulo: "Sistema Respiratório: Respiração e Principais Afecções",
          duracaoMin: 10,
          nivel: "intermediario",
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
          xp: 60,
        },
        {
          id: "sistema-nervoso",
          titulo: "Sistema Nervoso: Dor, Emoções e Medicamentos",
          duracaoMin: 15,
          nivel: "avancado",
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
          xp: 75,
        },
        {
          id: "sistema-endocrino",
          titulo: "Sistema Endócrino: Hormônios e o Balcão da Farmácia",
          duracaoMin: 15,
          nivel: "avancado",
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
          xp: 80,
        },
      ],
    },
    // ── Módulo 3: Microbiologia e Saúde (6 aulas) ──
    {
      id: "microbiologia-saude",
      titulo: "Microbiologia e Saúde Pública",
      descricao:
        "Microrganismos, sistema imunológico, principais doenças infecciosas e conceitos de saúde pública essenciais para o atendente.",
      imagemHeroUrl: imagensCategoria.glp1,
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
          xp: 55,
        },
        {
          id: "sistema-imunologico",
          titulo: "Sistema Imunológico: Como o Corpo se Defende",
          duracaoMin: 12,
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
          xp: 65,
        },
        {
          id: "doencas-infecciosas",
          titulo: "Doenças Infecciosas Comuns no Balcão",
          duracaoMin: 15,
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
          xp: 70,
        },
        {
          id: "saude-publica",
          titulo: "Saúde Pública: SUS, Programas e o Papel da Farmácia",
          duracaoMin: 12,
          nivel: "intermediario",
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
          xp: 60,
        },
        {
          id: "epidemiologia",
          titulo: "Noções de Epidemiologia: Doenças na População",
          duracaoMin: 12,
          nivel: "avancado",
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
          xp: 65,
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
          xp: 55,
        },
      ],
    },
    // ── Módulo 4: Comunicação em Saúde (6 aulas) ──
    {
      id: "comunicacao-saude",
      titulo: "Comunicação em Saúde",
      descricao:
        "Técnicas de comunicação aplicadas ao balcão da farmácia: escuta ativa, linguagem adequada, manejo de objeções e trabalho em equipe multidisciplinar.",
      imagemHeroUrl: imagensCategoria.comunicacao,
      aulas: [
        {
          id: "comunicacao-saude",
          titulo: "Comunicação em Saúde: Fundamentos",
          duracaoMin: 8,
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
          nivel: "intermediario",
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
          xp: 60,
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
          xp: 60,
        },
        {
          id: "objecoes",
          titulo: "Objeções e Conflitos no Atendimento",
          duracaoMin: 12,
          nivel: "avancado",
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
          xp: 70,
        },
        {
          id: "situacoes-dificeis",
          titulo: "Situações Difíceis: Luto, Crise e Urgência",
          duracaoMin: 15,
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
          xp: 80,
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
      imagemHeroUrl: imagensCategoria.seguranca,
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
          xp: 55,
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
          xp: 45,
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
          xp: 45,
        },
        {
          id: "contaminacao-cruzada",
          titulo: "Contaminação Cruzada: Prevenção na Farmácia",
          duracaoMin: 12,
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
          xp: 60,
        },
        {
          id: "primeiros-socorros",
          titulo: "Noções de Primeiros Socorros na Farmácia",
          duracaoMin: 15,
          nivel: "avancado",
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
          xp: 80,
        },
        {
          id: "emergencias-farmacia",
          titulo: "Emergências na Farmácia: Protocolos e Condutas",
          duracaoMin: 15,
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
          xp: 85,
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
