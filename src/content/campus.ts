import type { Nivel, Trilha } from "./types";
import { casosBalcao } from "./pratica-balcao";
export type Competencia = "escuta" | "clareza" | "seguranca" | "continuidade";
export interface EtapaCampus {
  cliente: string;
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
  fala: string;
  competencia: Competencia;
}
export interface CasoCampus {
  id: string;
  nivel: Nivel;
  tema: string;
  titulo: string;
  objetivo: string;
  minutos: number;
  etapas: EtapaCampus[];
  fechamento: string;
}
export const niveisCampus = [
  {
    id: "basico",
    nome: "Básico",
    titulo: "Comece pela pessoa",
    descricao:
      "Aprenda a acolher, fazer uma boa pergunta e reconhecer quando pedir apoio.",
    conquista: "Escuta atenta",
  },
  {
    id: "intermediario",
    nome: "Intermediário",
    titulo: "Conecte necessidade e cuidado",
    descricao:
      "Entenda barreiras ao tratamento e conduza conversas com mais clareza.",
    conquista: "Conexão com método",
  },
  {
    id: "avancado",
    nome: "Avançado",
    titulo: "Decida em situações complexas",
    descricao:
      "Treine prioridades, passagem de caso e postura profissional sob pressão.",
    conquista: "Cuidado responsável",
  },
] as const;
const etapa = (
  cliente: string,
  pergunta: string,
  opcoes: string[],
  correta: number,
  explicacao: string,
  fala: string,
  competencia: Competencia,
): EtapaCampus => ({
  cliente,
  pergunta,
  opcoes,
  correta,
  explicacao,
  fala,
  competencia,
});
export const casosCampus: CasoCampus[] = [
  ...casosBalcao.map((c, i) => ({
    id: c.id,
    nivel: "basico" as const,
    tema: c.tema,
    titulo: c.titulo,
    objetivo:
      "Reconhecer a necessidade e escolher uma conduta de atendimento segura.",
    minutos: 3,
    etapas: [
      etapa(
        c.cliente,
        "Qual é a melhor próxima atitude?",
        c.opcoes,
        c.correta,
        c.explicacao,
        c.acao,
        (["escuta", "seguranca", "continuidade", "seguranca"] as Competencia[])[
          i % 4
        ],
      ),
    ],
    fechamento:
      "Antes de encerrar, confira se a pessoa sabe qual será o próximo passo.",
  })),
  {
    id: "sono-sem-atalho",
    nivel: "intermediario",
    tema: "Sono e bem-estar",
    titulo: "Não dormir bem não se resolve no impulso",
    objetivo:
      "Investigar a necessidade sem transformar toda queixa em oferta de produto.",
    minutos: 5,
    etapas: [
      etapa(
        "Estou dormindo mal. Qual suplemento é mais forte?",
        "Como abrir a conversa?",
        [
          "Mostrar o produto com a maior dose.",
          "Perguntar há quanto tempo isso acontece e como afeta a rotina, sem diagnosticar.",
          "Garantir que um produto natural resolve.",
        ],
        1,
        "A queixa pode ter diferentes causas. Uma pergunta aberta permite entender o contexto antes de qualquer oferta.",
        "Há quanto tempo isso acontece? O que mais tem atrapalhado seu dia?",
        "escuta",
      ),
      etapa(
        "Acordo muito e já tomo remédios todos os dias.",
        "Qual informação muda o próximo passo?",
        [
          "A cor da embalagem que prefere.",
          "A quantidade de ofertas disponíveis.",
          "Os medicamentos em uso e a necessidade de avaliação farmacêutica.",
        ],
        2,
        "Uso concomitante de medicamentos e sintomas persistentes precisam de avaliação. O atendente não escolhe sedativo nem ajusta tratamento.",
        "Vou chamar o farmacêutico para avaliar seus medicamentos e essa dificuldade para dormir.",
        "seguranca",
      ),
      etapa(
        "Enquanto espero, posso fazer alguma coisa para organizar a rotina?",
        "Como ajudar sem prescrever?",
        [
          "Incentivar uma rotina regular de sono e levar as dúvidas ao farmacêutico, sem prometer que isso trata a causa.",
          "Dizer para suspender todos os remédios à noite.",
          "Recomendar dobrar o suplemento se não funcionar.",
        ],
        0,
        "Hábitos podem apoiar o bem-estar, mas não substituem investigação de uma queixa persistente. A orientação deve respeitar o contexto da pessoa.",
        "Você pode anotar os horários em que dorme e acorda para conversar com o profissional. Não mude seus medicamentos por conta própria.",
        "clareza",
      ),
    ],
    fechamento:
      "A boa oferta começa pela compreensão. Às vezes, o melhor próximo passo é uma conversa profissional.",
  },
  {
    id: "idoso-compreensao",
    nivel: "intermediario",
    tema: "Comunicação acessível",
    titulo: "Quando um sim não significa entendimento",
    objetivo: "Adaptar a conversa sem infantilizar a pessoa idosa.",
    minutos: 5,
    etapas: [
      etapa(
        "Minha filha organiza meus remédios. Eu não consigo ler essa letra pequena.",
        "Como responder?",
        [
          "Conversar apenas com a filha e ignorar a pessoa.",
          "Perguntar como prefere receber a informação e oferecer apoio do farmacêutico com linguagem acessível.",
          "Falar mais alto automaticamente.",
        ],
        1,
        "Dificuldade de leitura não significa incapacidade de decidir. Dirija-se à pessoa e pergunte qual apoio é útil.",
        "Como podemos deixar essa informação mais fácil para você? Quer que conversemos com o farmacêutico e sua filha?",
        "escuta",
      ),
      etapa(
        "O farmacêutico explicou, mas não sei se vou lembrar em casa.",
        "O que ajuda a identificar uma dúvida real?",
        [
          "Perguntar somente se entendeu.",
          "Repetir todas as informações de uma vez.",
          "Pedir que explique, com suas palavras, como seguirá a orientação.",
        ],
        2,
        "A confirmação de entendimento verifica a qualidade da explicação, sem testar ou constranger o cliente. Qualquer dúvida clínica volta ao farmacêutico.",
        "Só para saber se explicamos bem: como você vai organizar o uso quando chegar em casa?",
        "clareza",
      ),
      etapa(
        "Posso guardar tudo junto num potinho sem embalagem?",
        "Qual é a conduta?",
        [
          "Pedir que o farmacêutico avalie conservação, identificação e organização antes de retirar medicamentos das embalagens.",
          "Autorizar para todos os produtos.",
          "Misturar comprimidos parecidos para economizar espaço.",
        ],
        0,
        "A embalagem pode proteger e identificar o medicamento. A organização depende das características de cada produto.",
        "Vamos conferir com o farmacêutico a forma mais segura de organizar sem perder as informações.",
        "seguranca",
      ),
    ],
    fechamento:
      "Autonomia, informação acessível e confirmação de entendimento fazem parte do mesmo cuidado.",
  },
  {
    id: "receita-digital",
    nivel: "intermediario",
    tema: "Receita digital",
    titulo: "Uma foto não confirma uma receita digital",
    objetivo: "Reconhecer o que precisa ser verificado pelo farmacêutico.",
    minutos: 5,
    etapas: [
      etapa(
        "Tenho a foto de uma receita no celular. Pode separar?",
        "Como encaminhar?",
        [
          "Dispensar porque a imagem está legível.",
          "Explicar que o farmacêutico precisa verificar o tipo de documento e os requisitos vigentes.",
          "Recusar qualquer receita eletrônica sem avaliar.",
        ],
        1,
        "Foto de papel, documento eletrônico e assinatura verificável são coisas diferentes. A aceitação depende da categoria e da regulamentação vigente.",
        "Vou pedir ao farmacêutico que confira o documento e como validar a receita.",
        "seguranca",
      ),
      etapa(
        "Mas me disseram que qualquer assinatura na tela é válida.",
        "Qual explicação é mais precisa?",
        [
          "Uma imagem de assinatura sempre basta.",
          "Todas as receitas têm as mesmas regras.",
          "A validação deve seguir o tipo de receita e o canal oficial aplicável.",
        ],
        2,
        "As regras de receituários eletrônicos evoluem. Não reduza a conferência a aparência, carimbo ou captura de tela.",
        "O profissional vai verificar os requisitos desse tipo de receita e a possibilidade de validar o documento.",
        "clareza",
      ),
      etapa(
        "Posso mandar a foto no seu celular pessoal para agilizar?",
        "Como preservar a privacidade?",
        [
          "Usar somente o canal autorizado pela unidade e explicar a finalidade do envio.",
          "Aceitar e guardar na galeria pessoal.",
          "Encaminhar a receita para um grupo de colegas.",
        ],
        0,
        "Receitas contêm dados de saúde. A conveniência não justifica usar canais pessoais ou compartilhar além do necessário.",
        "Vamos usar o canal da unidade, com os cuidados de privacidade e a orientação da equipe responsável.",
        "continuidade",
      ),
    ],
    fechamento:
      "Conferir o documento é cuidar do cliente. Se houver dúvida, evite afirmar validade ou invalidade por conta própria.",
  },
  {
    id: "glp1-seguranca",
    nivel: "intermediario",
    tema: "Tratamento e acompanhamento",
    titulo: "Uma caneta não conta a história inteira",
    objetivo:
      "Acolher dúvidas sobre GLP-1 sem prescrever ou minimizar sinais de alerta.",
    minutos: 6,
    etapas: [
      etapa(
        "Quero uma caneta igual à de uma pessoa que emagreceu rápido.",
        "Qual é a melhor resposta?",
        [
          "Indicar a mesma marca e dose.",
          "Prometer o mesmo resultado.",
          "Explicar que é um medicamento sujeito a prescrição e avaliação individual; envolver o farmacêutico.",
        ],
        2,
        "A experiência de outra pessoa não determina indicação, dose nem segurança. Medicamentos agonistas de GLP-1 têm exigências de prescrição e retenção de receita.",
        "Vamos conversar com o farmacêutico sobre a prescrição e os cuidados necessários para o seu caso.",
        "seguranca",
      ),
      etapa(
        "Estou usando e apareceu uma dor abdominal muito forte que não passa.",
        "O que tem prioridade?",
        [
          "Oferecer um produto para esconder a dor.",
          "Acionar o farmacêutico e orientar busca imediata de atendimento médico, sem atrasar a assistência.",
          "Sugerir esperar até a próxima compra.",
        ],
        1,
        "Dor abdominal intensa e persistente durante o uso exige avaliação médica imediata. O atendente não diagnostica a causa nem define continuidade ou ajuste da dose.",
        "Essa dor precisa ser avaliada agora. Vou chamar o farmacêutico e ajudar a encaminhar para atendimento médico.",
        "seguranca",
      ),
      etapa(
        "Em outro atendimento, a pessoa chega com receita e dúvida sobre conservação.",
        "Como apoiar o tratamento?",
        [
          "Consultar a bula específica com o farmacêutico e conferir o que a pessoa entendeu; no uso contínuo, apresentar o Na Rotina com consentimento.",
          "Aplicar uma única regra de armazenamento a todas as canetas.",
          "Decidir a dose com base na embalagem anterior.",
        ],
        0,
        "Conservação e uso variam entre apresentações. Não generalize condições de temperatura ou tempo fora de refrigeração.",
        "Vamos conferir a orientação desse produto com o farmacêutico e ver como apoiar sua organização no dia a dia.",
        "continuidade",
      ),
    ],
    fechamento:
      "Apoiar o tratamento envolve acesso, uso correto, acompanhamento e reconhecimento de sinais que precisam de assistência.",
  },
  {
    id: "rotulo-sem-mito",
    nivel: "intermediario",
    tema: "Alimentação e informação",
    titulo: "Zero, diet e light: o rótulo pede contexto",
    objetivo:
      "Evitar conclusões automáticas e promessas sobre alimentos e suplementos.",
    minutos: 4,
    etapas: [
      etapa(
        "Tenho diabetes. Tudo que é zero pode à vontade?",
        "Como responder com clareza?",
        [
          "Sim, zero significa livre de qualquer limite.",
          "Não concluir pelo destaque da embalagem; orientar a leitura do rótulo e encaminhar dúvidas ao profissional.",
          "Proibir todos os alimentos com carboidrato.",
        ],
        1,
        "Um destaque no rótulo não descreve toda a composição nem define uma recomendação individual. Evite regras absolutas.",
        "Vamos conferir a composição. O destaque zero, sozinho, não diz como o produto se encaixa na sua alimentação.",
        "clareza",
      ),
      etapa(
        "Então me passe uma dieta para acompanhar meu tratamento.",
        "Qual é o limite do atendimento?",
        [
          "Montar uma dieta individual no balcão.",
          "Trocar o tratamento prescrito por suplemento.",
          "Acolher e encaminhar o plano alimentar ao nutricionista, com apoio do farmacêutico nas dúvidas sobre medicamentos.",
        ],
        2,
        "Cada profissão tem atribuições. Conhecer conceitos de alimentação ajuda a acolher, mas não autoriza prescrição de dieta pelo atendente.",
        "Posso ajudar com informações gerais e conectar você aos profissionais para um plano individual.",
        "seguranca",
      ),
      etapa(
        "A pessoa aceita conversar sobre uma dificuldade concreta da rotina.",
        "Qual pergunta é mais útil?",
        [
          "Qual mudança pequena e possível você gostaria de discutir com o profissional?",
          "Você promete mudar tudo de uma vez?",
          "Por que você não tem disciplina?",
        ],
        0,
        "A conversa fica mais útil quando parte das condições reais da pessoa e evita culpa, metas impostas ou julgamentos.",
        "Qual parte da rotina está mais difícil para você hoje?",
        "escuta",
      ),
    ],
    fechamento:
      "Explique o que se sabe, reconheça o limite da sua atuação e preserve a autonomia da pessoa.",
  },
  {
    id: "oferta-pertinente",
    nivel: "intermediario",
    tema: "Atendimento consultivo",
    titulo: "A melhor oferta tem uma razão clara",
    objetivo: "Relacionar necessidade, benefício e escolha sem pressão.",
    minutos: 4,
    etapas: [
      etapa(
        "A cliente pede um item de higiene e conta que tem dificuldade para usá-lo.",
        "Como ampliar o atendimento?",
        [
          "Adicionar outro item sem explicar.",
          "Perguntar o que dificulta o uso e pedir permissão para mostrar uma opção pertinente.",
          "Dizer que precisa levar o kit completo.",
        ],
        1,
        "Uma pergunta sobre a dificuldade pode revelar uma necessidade funcional. A oferta só faz sentido depois de entender o contexto.",
        "O que fica difícil no uso? Se você quiser, posso mostrar uma opção que facilite essa etapa.",
        "escuta",
      ),
      etapa(
        "A cliente pergunta por que a opção custa mais.",
        "Como explicar?",
        [
          "Dizer apenas que é premium.",
          "Inventar uma vantagem clínica.",
          "Apresentar a diferença verificável, o preço e uma alternativa adequada ao orçamento.",
        ],
        2,
        "O benefício deve ser real e compreensível. Transparência de preço e alternativas permite uma escolha informada.",
        "A diferença é esta característica. Esta é a opção mais simples e este é o valor de cada uma.",
        "clareza",
      ),
      etapa(
        "Obrigada, mas vou ficar só com o primeiro item.",
        "Como concluir?",
        [
          "Respeitar a decisão e confirmar se ainda há alguma dúvida.",
          "Insistir até aceitar.",
          "Retirar a atenção porque não comprou o adicional.",
        ],
        0,
        "O vínculo não depende de uma venda adicional. Respeitar a escolha protege a confiança.",
        "Claro. Vamos seguir com sua escolha. Ficou alguma dúvida sobre o uso?",
        "continuidade",
      ),
    ],
    fechamento:
      "Atendimento encantador combina pertinência, transparência e respeito à decisão.",
  },
  {
    id: "fila-com-confianca",
    nivel: "avancado",
    tema: "Conflito e acolhimento",
    titulo: "A fila está grande. A conversa ainda é humana",
    objetivo:
      "Gerenciar expectativa sem prometer o que a equipe não pode cumprir.",
    minutos: 5,
    etapas: [
      etapa(
        "Já esperei demais. Vocês não resolvem nada!",
        "Qual abertura reduz o atrito?",
        [
          "Responder que todo mundo está esperando.",
          "Reconhecer a espera e informar o próximo passo real, sem discutir.",
          "Prometer atendimento em um minuto sem verificar.",
        ],
        1,
        "Reconhecer a experiência não exige concordar com uma acusação. Uma informação verificável é mais útil do que uma promessa improvisada.",
        "Entendo que essa espera está sendo difícil. Vou verificar quem pode atender e retorno com uma informação concreta.",
        "escuta",
      ),
      etapa(
        "A pessoa exige pular uma conferência de receita para ir mais rápido.",
        "Como manter a segurança?",
        [
          "Aceitar a exceção para evitar reclamação.",
          "Pedir que outro colega dispense sem registrar.",
          "Explicar a necessidade da conferência e acionar o farmacêutico ou a liderança conforme o caso.",
        ],
        2,
        "Pressão de fila não elimina uma etapa de segurança. Mantenha tom respeitoso e envolva quem tem a atribuição de resolver.",
        "Quero ajudar a agilizar o que for possível, mantendo a conferência necessária para sua segurança.",
        "seguranca",
      ),
      etapa(
        "Você combinou retornar com uma atualização.",
        "Qual atitude fecha o combinado?",
        [
          "Voltar mesmo sem solução definitiva e informar o andamento real.",
          "Evitar contato até tudo se resolver.",
          "Dar uma estimativa inventada.",
        ],
        0,
        "O silêncio pode aumentar a incerteza. Atualizar o cliente demonstra compromisso e permite reorganizar a expectativa.",
        "Voltei para atualizar você: esta etapa já foi concluída e esta ainda depende da avaliação do profissional.",
        "continuidade",
      ),
    ],
    fechamento:
      "A confiança se sustenta no que a equipe consegue cumprir, comunicar e acompanhar.",
  },
  {
    id: "muitos-medicamentos",
    nivel: "avancado",
    tema: "Passagem de caso",
    titulo: "Muitos medicamentos, uma história para organizar",
    objetivo:
      "Preparar uma passagem de caso objetiva sem realizar avaliação clínica pelo atendente.",
    minutos: 6,
    etapas: [
      etapa(
        "Tomo vários remédios, um chá e uma vitamina. Estou meio perdido.",
        "Por onde começar?",
        [
          "Escolher um medicamento para suspender.",
          "Pedir permissão para organizar os nomes e as dúvidas e chamar o farmacêutico.",
          "Dizer que chá e vitamina não precisam ser informados.",
        ],
        1,
        "O conjunto de produtos importa. O atendente pode ajudar a organizar informações, sem decidir compatibilidade, necessidade ou dose.",
        "Se você concordar, vamos reunir o que usa e suas dúvidas para o farmacêutico avaliar com você.",
        "escuta",
      ),
      etapa(
        "O farmacêutico chega. Como transmitir o caso?",
        "Qual resumo é mais útil?",
        [
          "Afirmar que há uma interação confirmada.",
          "Contar comentários de outros clientes.",
          "Informar o motivo da dúvida, os produtos relatados e a dificuldade descrita, sem concluir a causa.",
        ],
        2,
        "Uma passagem de caso útil separa relato de conclusão. Evite rotular a pessoa ou antecipar um diagnóstico.",
        "A pessoa relata dificuldade para organizar estes produtos e quer conferir o uso conjunto. Ainda não foi feita avaliação clínica.",
        "clareza",
      ),
      etapa(
        "Depois da orientação, a pessoa pergunta como lembrar dos horários.",
        "Como dar continuidade?",
        [
          "Reforçar o plano orientado, confirmar entendimento e apresentar o Na Rotina com consentimento, seguindo o protocolo.",
          "Criar novos horários sem consultar a orientação.",
          "Garantir que o aplicativo elimina qualquer esquecimento.",
        ],
        0,
        "Ferramentas apoiam a organização, mas não substituem o acompanhamento ou garantem adesão. O plano precisa ser compreendido e viável.",
        "Como essa organização funciona no seu dia? Quer conhecer o apoio de lembretes disponível?",
        "continuidade",
      ),
    ],
    fechamento:
      "Acolher, organizar o relato, encaminhar e confirmar o próximo passo: o atendente participa sem ultrapassar sua função.",
  },
  {
    id: "urgencia-nao-e-venda",
    nivel: "avancado",
    tema: "Prioridade e segurança",
    titulo: "Quando a prioridade muda imediatamente",
    objetivo:
      "Reconhecer situações que não podem aguardar uma venda ou cadastro.",
    minutos: 4,
    etapas: [
      etapa(
        "Estou com dor no peito, falta de ar e suor frio. Acho que é ansiedade.",
        "Qual é a prioridade?",
        [
          "Oferecer um calmante para testar.",
          "Orientar a esperar para ver se passa.",
          "Acionar atendimento de urgência e o farmacêutico imediatamente, sem assumir que seja ansiedade.",
        ],
        2,
        "Esse conjunto de sinais pode indicar uma emergência. Não tente diferenciar a causa no balcão nem atrase o acesso ao atendimento.",
        "Precisamos buscar ajuda de urgência agora. Vou acionar o farmacêutico e o serviço de emergência.",
        "seguranca",
      ),
      etapa(
        "Há uma compra e um cadastro em andamento.",
        "O que a equipe faz?",
        [
          "Concluir a venda antes de ajudar.",
          "Priorizar a assistência e seguir o protocolo de emergência da unidade.",
          "Pedir para a pessoa procurar ajuda sozinha.",
        ],
        1,
        "Etapas comerciais não têm prioridade diante de uma possível emergência. A equipe precisa agir de forma coordenada.",
        "Vamos priorizar seu atendimento agora e seguir o procedimento de emergência da unidade.",
        "seguranca",
      ),
      etapa(
        "Um colega pergunta depois se você confirmou um infarto.",
        "Como relatar corretamente?",
        [
          "Dizer quais sinais foram relatados e quais medidas de encaminhamento foram tomadas, sem fechar diagnóstico.",
          "Confirmar o diagnóstico pela aparência.",
          "Divulgar o caso com nome e foto para explicar à equipe.",
        ],
        0,
        "Reconhecer sinais de alerta não equivale a diagnosticar. O relato também precisa respeitar a privacidade.",
        "Foram relatados estes sinais, e a equipe acionou assistência. O diagnóstico cabe à avaliação médica.",
        "clareza",
      ),
    ],
    fechamento:
      "A conduta profissional começa por reconhecer quando a pessoa precisa de assistência imediata.",
  },
  {
    id: "escolha-sem-pressao",
    nivel: "avancado",
    tema: "Autonomia e privacidade",
    titulo: "A pessoa pode dizer não e continuar bem atendida",
    objetivo:
      "Conciliar apoio ao uso contínuo, consentimento e liberdade de escolha.",
    minutos: 4,
    etapas: [
      etapa(
        "Não quero participar de programa nenhum. Só quero meu medicamento.",
        "Como responder?",
        [
          "Vincular o atendimento à participação.",
          "Respeitar a recusa e seguir com o atendimento e as orientações necessárias.",
          "Fazer o cadastro mesmo assim para ajudar.",
        ],
        1,
        "Apresentar o apoio é uma atitude de cuidado; aderir é uma escolha. A recusa não retira o direito a um atendimento respeitoso.",
        "Sem problema. Vamos seguir com seu atendimento e com as orientações do farmacêutico.",
        "escuta",
      ),
      etapa(
        "A pessoa pergunta para que servem os dados de um cadastro opcional.",
        "O que explicar?",
        [
          "Que não precisa saber disso.",
          "Que toda finalidade futura já está autorizada.",
          "A finalidade informada pelo canal oficial, o caráter opcional e onde consultar os termos aplicáveis.",
        ],
        2,
        "Consentimento não é uma formalidade. A pessoa precisa receber informação compreensível e ter sua decisão respeitada.",
        "Vamos conferir juntos a finalidade e os termos no canal oficial antes de você decidir.",
        "clareza",
      ),
      etapa(
        "Ela aceita conversar sobre uma dificuldade para manter o tratamento, mas mantém a recusa ao programa.",
        "Como ajudar?",
        [
          "Encaminhar a dificuldade ao farmacêutico e oferecer o apoio permitido, sem insistir no cadastro.",
          "Encerrar a conversa porque recusou o programa.",
          "Afirmar que sem cadastro não há como organizar o tratamento.",
        ],
        0,
        "Apoio ao tratamento não se resume a uma ferramenta. Escuta e orientação profissional continuam importantes.",
        "O programa é opcional. Sua dificuldade continua sendo importante, e podemos conversar com o farmacêutico sobre ela.",
        "continuidade",
      ),
    ],
    fechamento:
      "A experiência é melhor quando cuidado e liberdade de escolha caminham juntos.",
  },
  {
    id: "quase-erro",
    nivel: "avancado",
    tema: "Cultura de segurança",
    titulo: "Percebeu uma diferença antes da entrega? Pare",
    objetivo:
      "Agir diante de uma possível troca de apresentação sem ocultar o problema.",
    minutos: 5,
    etapas: [
      etapa(
        "Antes de entregar, você nota que a concentração da caixa é diferente da receita.",
        "Qual é o próximo passo?",
        [
          "Entregar e orientar a partir do nome da marca.",
          "Parar a entrega e acionar o farmacêutico para a conferência.",
          "Trocar por conta própria sem comunicar.",
        ],
        1,
        "Nome parecido não confirma produto, concentração ou apresentação. A entrega deve parar até a avaliação.",
        "Identifiquei uma diferença e vou pedir uma conferência antes de continuar.",
        "seguranca",
      ),
      etapa(
        "Um colega sugere esconder o ocorrido porque o produto ainda não foi entregue.",
        "Como agir?",
        [
          "Esconder para preservar a imagem da equipe.",
          "Culpar outra pessoa na frente do cliente.",
          "Seguir o processo de comunicação e registro de ocorrência da unidade, com foco na prevenção.",
        ],
        2,
        "Identificar uma falha antes de atingir o cliente é uma oportunidade de corrigir o processo. A comunicação deve ser objetiva e sem exposição desnecessária.",
        "Vamos comunicar e registrar conforme o procedimento para evitar que a situação se repita.",
        "clareza",
      ),
      etapa(
        "A conferência foi concluída. O cliente pergunta sobre a demora.",
        "Como explicar?",
        [
          "Informar com transparência que uma diferença foi conferida e corrigida pelo responsável, sem inventar uma causa ou expor colegas.",
          "Dizer que nada aconteceu mesmo se perguntado.",
          "Garantir que a equipe nunca comete erros.",
        ],
        0,
        "Transparência exige fatos e responsabilidade, sem promessas absolutas nem acusações.",
        "Conferimos uma diferença antes da entrega. O farmacêutico verificou o produto correto para seguirmos com segurança.",
        "continuidade",
      ),
    ],
    fechamento:
      "A prioridade é corrigir, comunicar e prevenir. Segurança depende de processo, não de promessa de perfeição.",
  },
  {
    id: "fechamento-combinado",
    nivel: "avancado",
    tema: "Compromisso com o cuidado",
    titulo: "Encaminhar não é deixar a pessoa sem resposta",
    objetivo:
      "Concluir uma conversa com responsável e próximo passo definidos.",
    minutos: 5,
    etapas: [
      etapa(
        "Você chamou o farmacêutico para uma dúvida e vai trocar de posto.",
        "Como garantir continuidade?",
        [
          "Sair sem avisar porque o pedido já foi feito.",
          "Combinar com quem ficará responsável, transmitir o relato necessário e informar o cliente.",
          "Pedir ao cliente que conte tudo novamente para cada colega.",
        ],
        1,
        "O encaminhamento precisa chegar a alguém. Um responsável definido reduz desencontro e repetição desnecessária da história.",
        "Minha colega vai acompanhar você enquanto o farmacêutico conclui esta avaliação. Já transmiti o motivo da sua dúvida.",
        "continuidade",
      ),
      etapa(
        "A pessoa recebeu várias informações e parece sobrecarregada.",
        "Como priorizar a explicação?",
        [
          "Repetir todo o conteúdo em termos técnicos.",
          "Entregar muitos folhetos e encerrar.",
          "Retomar o próximo passo essencial e confirmar o entendimento, recorrendo ao farmacêutico para as dúvidas clínicas.",
        ],
        2,
        "Clareza também é saber priorizar. Uma informação útil deve ser compreendida e executável.",
        "Qual é o próximo passo que você vai seguir ao sair daqui? Se ainda estiver confuso, vamos retomar com o farmacêutico.",
        "clareza",
      ),
      etapa(
        "Ao encerrar, você identifica uma dificuldade ainda sem resposta.",
        "Qual atitude demonstra compromisso?",
        [
          "Reconhecer o que falta e combinar um encaminhamento real, sem prometer resultado ou prazo não confirmado.",
          "Afirmar que está tudo resolvido.",
          "Prometer retorno por um canal pessoal não autorizado.",
        ],
        0,
        "Uma boa conclusão separa o que foi resolvido do que precisa de acompanhamento. Use apenas fluxos e canais autorizados.",
        "Este ponto ainda precisa de avaliação. Vamos combinar com a equipe responsável qual será o próximo passo.",
        "continuidade",
      ),
    ],
    fechamento:
      "Encantar é fazer a pessoa se sentir ouvida e saber o que acontece a seguir, inclusive quando ainda falta resolver algo.",
  },
];
export const memoriaCampus = [
  {
    id: "adesao",
    pergunta: "O que significa adesão ao tratamento?",
    resposta:
      "É conseguir seguir o tratamento combinado com a equipe de saúde. Envolve entender, ter acesso e encaixar o cuidado na vida real.",
  },
  {
    id: "teachback",
    pergunta: "Como conferir se a explicação ficou clara?",
    resposta:
      "Peça à pessoa para contar, com suas palavras, como fará em casa. Se houver dúvida clínica, retome com o farmacêutico.",
  },
  {
    id: "prescricao",
    pergunta: "Receita e bula fazem o mesmo papel?",
    resposta:
      "A receita expressa a prescrição para aquela pessoa. A bula traz informações do produto. Dúvidas ou divergências precisam do farmacêutico.",
  },
  {
    id: "natural",
    pergunta: "Natural significa sem risco?",
    resposta:
      "Não. Chás, suplementos e produtos naturais também precisam ser considerados na avaliação de segurança e interações.",
  },
  {
    id: "dose",
    pergunta: "Esqueceu uma dose: vale dobrar a próxima?",
    resposta:
      "Não use uma regra geral. A conduta depende do produto e do atraso; peça avaliação do farmacêutico.",
  },
  {
    id: "continuo",
    pergunta: "Qual apoio incluir no uso contínuo?",
    resposta:
      "Identificar dificuldades, envolver o farmacêutico e apresentar o Na Rotina. A adesão ao programa é opcional e depende das regras vigentes.",
  },
  {
    id: "limite",
    pergunta: "Quando o atendente chama o farmacêutico?",
    resposta:
      "Quando houver dúvida sobre prescrição, dose, interação, reação, conservação ou outra questão clínica.",
  },
  {
    id: "oferta",
    pergunta: "O que torna uma oferta pertinente?",
    resposta:
      "Uma necessidade real, benefício verificável, preço claro, permissão para apresentar e respeito à decisão da pessoa.",
  },
  {
    id: "privacidade",
    pergunta: "Pode guardar receita no celular pessoal?",
    resposta:
      "Use somente canais e sistemas autorizados. Receitas contêm dados de saúde e exigem proteção.",
  },
  {
    id: "digital",
    pergunta: "Uma foto confirma que a receita eletrônica é válida?",
    resposta:
      "Não. O farmacêutico verifica o tipo de documento e os requisitos de validação aplicáveis.",
  },
  {
    id: "urgencia",
    pergunta: "O que vem antes da venda em uma possível emergência?",
    resposta:
      "Acionar assistência imediatamente conforme o protocolo da unidade e envolver o farmacêutico. Não fechar diagnóstico no balcão.",
  },
  {
    id: "combinado",
    pergunta: "Como encerrar um atendimento com compromisso?",
    resposta:
      "Confirme o entendimento e deixe claro o próximo passo e quem ficará responsável pelo que ainda precisa de avaliação.",
  },
];
export const trilhaAtendimentoAvancado: Trilha = {
  id: "atendimento-profissional",
  numero: 13,
  titulo: "Atendimento profissional: da escuta à decisão",
  subtitulo: "Conversas que constroem confiança",
  descricao:
    "12 casos completos, com três decisões por conversa. Necessidades do dia a dia, perguntas melhores, segurança e continuidade do cuidado.",
  nivelFaixa: "Intermediário e avançado",
  icone: "message",
  modulos: niveisCampus
    .filter((n) => n.id !== "basico")
    .flatMap((n) =>
      [0, 1].map((grupo) => ({
        id: `${n.id}-${grupo + 1}`,
        titulo:
          n.id === "intermediario"
            ? grupo === 0
              ? "Entender antes de oferecer"
              : "Cuidado que cabe na rotina"
            : grupo === 0
              ? "Decisões sob pressão"
              : "Responsabilidade e continuidade",
        descricao:
          grupo === 0
            ? "Treine como ouvir, verificar e escolher o próximo passo."
            : "Pratique como explicar, respeitar a escolha e fechar um combinado.",
        aulas: casosCampus
          .filter((c) => c.nivel === n.id)
          .slice(grupo * 3, grupo * 3 + 3)
          .map((c) => ({
            id: c.id,
            titulo: c.titulo,
            duracaoMin: c.minutos,
            nivel: c.nivel,
            resumo: c.objetivo,
            resumoExecutivo: c.etapas.map((e) => e.explicacao),
            simulacao: {
              cliente: c.etapas[0].cliente,
              falaBoa: c.etapas[0].fala,
              falaEvitar: c.etapas[0].opcoes[(c.etapas[0].correta + 1) % 3],
            },
            checklist: c.etapas.map((e) => e.fala),
            quandoChamarFarmaceutico: [
              "Questões clínicas, avaliação da prescrição ou dúvida de segurança.",
              "Dificuldade para compreender ou manter o tratamento.",
            ],
            errosComuns: [
              "Presumir um diagnóstico a partir de um relato curto.",
              "Prometer benefício ou prazo sem confirmação.",
            ],
            quiz: c.etapas.map((e) => ({
              pergunta: e.cliente + " " + e.pergunta,
              opcoes: e.opcoes,
              correta: e.correta,
              explicacao: e.explicacao,
            })),
            xp: c.nivel === "avancado" ? 60 : 45,
          })),
      })),
    ),
};
