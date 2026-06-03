const fs = require("fs");
const path = require("path");

const fp = path.resolve(__dirname, "../content/modulos-bem-estar-extra.ts");
let c = fs.readFileSync(fp, "utf-8");

const q = (pergunta, opcoes, correta, explicacao) => {
  return `          q(\n            "${pergunta}",\n            [\n${opcoes.map(o => `              "${o}",`).join("\n")}\n            ],\n            ${correta},\n            "${explicacao}",\n          ),`;
};

// For leite-adulto
c = c.replace(
  `          ),
        ],
        xp: 65,
      },
    ],
  },
  {
    id: "fraldas-absorventes",`,
  `          ),
${q("Para idoso convalescente, qual suplemento e mais indicado?", ["Whey protein isolado", "Suplemento hipercalorico e proteico com vitaminas", "Apenas polivitaminico", "Leite integral comum"], 1, "Suplemento hipercalorico-proteico com vitaminas atende as necessidades aumentadas na convalescenca.")}
${q("Cliente com intolerancia a lactose busca leite em po. Qual orientar?", ["Leite integral comum, que tem pouca lactose", "Leite zero lactose ou vegetal (soja, amendoas)", "Leite condensado", "Nao existe alternativa para intolerantes"], 1, "Leites zero lactose e vegetais sao alternativas seguras para intolerantes.")}
${q("Por que suplementos nao devem substituir refeicoes completas sem orientacao?", ["Porque sao mais caros", "Porque nao fornecem todos os nutrientes de uma refeicao equilibrada e podem causar desequilibrio", "Porque sao menos saborosos", "Nao ha problema em substituir"], 1, "Suplementos complementam, nao substituem. Refeicoes completas fornecem fibras, fitonutrientes e saciedade que suplementos isolados nao oferecem.")}
        ],
        xp: 65,
      },
    ],
  },
  {
    id: "fraldas-absorventes",`
);

// For fraldas
c = c.replace(
  `          ),
        ],
        xp: 60,
      },
      {
        id: "absorventes-cuidado",`,
  `          ),
${q("Qual o principal componente da pomada de barreira para prevencao de assadura?", ["Acido salicilico", "Oxido de zinco", "Hidrocortisona", "Alcool"], 1, "Oxido de zinco forma barreira protetora contra umidade e atrito.")}
${q("Quando usar fralda pants em vez de fralda aberta?", ["Sempre, e mais pratica", "Na fase de desfralde ou bebe muito ativo", "So a noite", "Nunca, fralda aberta e melhor"], 1, "Pants sao ideais na fase de desfralde porque a crianca puxa para baixo como uma calcinha.")}
${q("Qual sinal de assadura exige encaminhamento ao farmaceutico?", ["Vermelhidao leve que melhora com pomada", "Assadura com ferida, bolhas ou sangue, sem melhora em 48h", "Assadura que aparece so no verao", "Qualquer assadura em bebe de 3 meses"], 1, "Feridas, bolhas ou sangramento podem indicar infeccao e exigem avaliacao profissional.")}
        ],
        xp: 60,
      },
      {
        id: "absorventes-cuidado",`
);

// For absorventes-cuidado
c = c.replace(
  `          ),
        ],
        xp: 55,
      },
    ],
  },
  {
    id: "vitrine-dermo-cosmetica",`,
  `          ),
${q("Cliente com fluxo intenso e colica forte. Qual a conduta?", ["Indicar absorvente noturno e encerrar", "Oferecer absorvente de alta absorcao e orientar avaliacao medica se os sintomas forem frequentes", "Dizer que e normal e nao fazer nada", "Receitar um anti-inflamatorio"], 1, "Fluxo intenso com colica forte merece orientacao de produto adequado e avaliacao medica se persistente.")}
${q("Qual alternativa ao absorvente descartavel tem maior capacidade e ecologica?", ["Absorvente noturno com abas", "Coletor menstrual", "Protetor diario", "Calcinha de algodao"], 1, "Coletor menstrual tem capacidade maior que absorventes e e reutilizavel, reduzindo residuos.")}
${q("Ao atender uma cliente em busca de absorventes, qual postura e inadequada?", ["Falar em tom discreto e respeitoso", "Fazer perguntas sobre o fluxo em voz alta para a fila ouvir", "Mostrar opcoes disponiveis na prateleira", "Responder duvidas sobre o produto com naturalidade"], 1, "Discricao e essencial em itens intimos; abordagem constrangedora afasta a cliente.")}
        ],
        xp: 55,
      },
    ],
  },
  {
    id: "vitrine-dermo-cosmetica",`
);

// For rotina-pele-balcao
c = c.replace(
  `          ),
        ],
        xp: 75,
      },
      {
        id: "cosmeticos-corporais",`,
  `          ),
${q("Qual a ordem recomendada da rotina de skincare pela manha?", ["Protetor -> hidratante -> limpeza", "Limpeza -> vitamina C (antioxidante) -> protetor solar", "Hidratante -> protetor -> limpeza", "So protetor solar, sem limpeza"], 1, "A rotina matinal ideal: limpar, aplicar antioxidante (vitamina C) e finalizar com protetor solar.")}
${q("Pele oleosa pede qual textura de hidratante?", ["Creme rico com manteiga de karite", "Gel ou locao oil-free", "Oleo corporal", "Vaselina pura"], 1, "Texturas oil-free/gel nao obstruem poros e controlam a oleosidade.")}
${q("Por que nao se deve indicar acidos fortes para um iniciante em skincare?", ["Porque sao muito caros", "Porque podem causar irritacao, vermelhidao e descamacao sem preparo da pele", "Porque nao funcionam", "Porque o protetor solar anula o efeito"], 1, "Acidos potentes exigem adaptacao da pele; iniciantes devem comecar com produtos suaves e introduzir ativos gradualmente.")}
        ],
        xp: 75,
      },
      {
        id: "cosmeticos-corporais",`
);

// For cosmeticos-corporais
c = c.replace(
  `          ),
        ],
        xp: 55,
      },
    ],
  },
  {
    id: "suplementos-vitaminas",`,
  `          ),
${q("Por que nao se deve aplicar perfume sobre pele irritada?", ["Porque o perfume dura menos", "Porque o alcool e as fragrancias podem agravar a irritacao e causar ardencia", "Porque o perfume muda o cheiro", "Nao ha problema, perfume e suave"], 1, "Alcool e fragrancias em pele irritada causam ardencia e pioram a inflamacao.")}
${q("Cliente com coceira intensa na pele a noite. Qual a conduta?", ["Indicar apenas hidratante", "Orientar hidratante e encaminhar ao farmaceutico para investigar possivel dermatite", "Dizer que e normal no inverno", "Passar alcool para aliviar"], 1, "Coceira noturna intensa pode indicar dermatite ou outra condicao; o farmaceutico deve avaliar.")}
        ],
        xp: 55,
      },
    ],
  },
  {
    id: "suplementos-vitaminas",`
);

// For vitaminas-minerais
c = c.replace(
  `          ),
        ],
        xp: 60,
      },
      {
        id: "suplementos-proteina",`,
  `          ),
${q("Qual vitamina e lipossoluvel e seu excesso pode ser toxico?", ["Vitamina C", "Vitamina D", "Complexo B", "Ferro"], 1, "Vitaminas lipossoluveis (A, D, E, K) sao armazenadas no tecido adiposo; excesso pode causar toxicidade.")}
${q("Cliente quer vitamina para dar energia. Qual a melhor abordagem?", ["Vender a megadose de vitamina C", "Perguntar sobre alimentacao, sono e estresse; orientar que cansaco prolongado pode ter outras causas", "Indicar um termogenico", "Falar que nao existe vitamina para energia"], 1, "Cansaco tem multiplas causas — investigar antes de suplementar e conduta responsavel.")}
${q("Qual mineral e essencial para a saude ossea e deve ser suplementado junto com vitamina D?", ["Ferro", "Calcio", "Zinco", "Magnetismo"], 1, "Calcio e vitamina D atuam juntos na mineralizacao ossea; idosos e menopausa sao publico-chave.")}
${q("Por que suplementos nao substituem uma alimentacao equilibrada?", ["Porque sao mais caros que alimentos", "Porque nao fornecem fibras, fitoquimicos e a complexidade nutricional dos alimentos integrais", "Porque o corpo nao absorve vitaminas sinteticas", "Podem substituir sim, sem problemas"], 1, "Alimentos fornecem matriz nutricional complexa que suplementos isolados nao replicam.")}
        ],
        xp: 60,
      },
      {
        id: "suplementos-proteina",`
);

// For suplementos-proteina
c = c.replace(
  `          ),
        ],
        xp: 60,
      },
    ],
  },
  {
    id: "cuidados-pes",`,
  `          ),
${q("Qual suplemento proteico e alternativa ao whey para intolerantes a lactose?", ["BCAA", "Albumina", "Creatina", "Termogenico"], 1, "Albumina (clara de ovo) e proteina sem lactose, alternativa ao whey para intolerantes.")}
${q("Hipertenso que busca termogenico com cafeina deve ser orientado a:", ["Comprar o termogenico mais forte", "Evitar termogenicos com cafeina e consultar o farmaceutico antes", "Tomar metade da dose recomendada", "Nao ha restricao para hipertensos"], 1, "Termogenicos com cafeina podem elevar a pressao arterial; hipertensos devem evitar sem avaliacao.")}
${q("Whey protein e indicado principalmente para:", ["Emagrecimento rapido sem dieta", "Suplementacao proteica pos-treino ou para idosos com sarcopenia", "Substituir todas as refeicoes", "Aumentar a imunidade"], 1, "Whey e complemento proteico; associado a exercicio ou para idosos com perda muscular.")}
${q("BCAA e mais indicado para qual publico?", ["Iniciantes em musculacao", "Treino de resistencia; evidencia cientifica controversa para uso generalizado", "Pessoas sedentarias", "Criancas em fase de crescimento"], 1, "BCAA tem evidencia controversa na literatura recente.")}
        ],
        xp: 60,
      },
    ],
  },
  {
    id: "cuidados-pes",`
);

// For pes-hidratacao-calos
c = c.replace(
  `          ),
        ],
        xp: 45,
      },
      {
        id: "calcados-palmilhas",`,
  `          ),
${q("Qual ativo hidratante e mais indicado para pes ressecados e rachados?", ["Alcool", "Ureia", "Acido salicilico", "Perfume"], 1, "Ureia e umectante e esfoliante suave, eficaz para hidratar pes ressecados e rachados.")}
${q("Por que calos nao devem ser removidos com lamina em diabeticos?", ["Porque doi muito", "Porque qualquer ferimento pode evoluir para ulcera e infeccao grave no pe diabetico", "Porque a lamina nao corta calo", "Nao ha problema em usar lamina"], 1, "Diabeticos tem cicatrizacao prejudicada; pequenos cortes podem evoluir para complicacoes serias.")}
${q("Alem de hidratacao, qual cuidado complementar ajuda pes ressecados?", ["Esfoliacao semanal + hidratacao noturna com meia de algodao", "Passar alcool todos os dias", "Deixar os pes de molho em agua quente por 1h", "Nao precisa de cuidado complementar"], 0, "Esfoliacao suave semanal seguida de hidratacao noturna com meia de algodao potencializa o tratamento.")}
        ],
        xp: 45,
      },
      {
        id: "calcados-palmilhas",`
);

// For calcados-palmilhas
c = c.replace(
  `          ),
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "clean-beauty",`,
  `          ),
${q("Qual tipo de palmilha e indicado para alivio imediato do cansaco nos pes?", ["Palmilha ortopedica sob medida", "Palmilha de gel ou silicone", "Palmilha de cortica", "Nenhuma, palmilha nao alivia cansaco"], 1, "Palmilhas de gel/silicone absorvem impacto e aliviam o cansaco de quem passa o dia em pe.")}
${q("Quando encaminhar ao farmaceutico um cliente com dores nos pes?", ["Nunca, e so cansaco", "Quando a dor persistir mesmo com palmilha adequada ou houver inchaco e suspeita de problemas circulatorios", "So se o cliente pedir", "Apenas se houver ferimento visivel"], 1, "Dores persistentes, inchaco ou suspeita de trombose/varizes exigem avaliacao profissional.")}
${q("Para quem passa o dia em pe, qual acessorio e mais indicado?", ["Sapatos de salto alto", "Palmilha de gel para absorcao de impacto", "Meia de compressao grau III sem receita", "Nada, e normal sentir dor"], 1, "Palmilha de gel absorve o impacto de ficar em pe por longos periodos, aliviando cansaco e dores.")}
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "clean-beauty",`
);

// For cosmeticos-naturais
c = c.replace(
  `          ),
        ],
        xp: 50,
      },
      {
        id: "sustentabilidade-beleza",`,
  `          ),
${q("Vegano e hipoalergenico sao sinonimos?", ["Sim, significam a mesma coisa", "Nao, vegano refere-se a ingredientes de origem animal; hipoalergenico significa baixo potencial alergico", "Sim, ambos significam natural", "Nao, hipoalergenico e mais restritivo"], 1, "Ingredientes naturais e veganos tambem podem causar alergia; hipoalergenico e uma classificacao separada.")}
${q("Qual alegacao em cosmeticos significa que a materia-prima foi cultivada sem agrotoxicos?", ["Natural", "Vegano", "Organico (com certificacao)", "Cruelty-free"], 2, "Organico exige certificacao que garante cultivo sem agrotoxicos; natural e vegano nao garantem isso.")}
${q("Cliente busca produto sem sulfato. Qual o beneficio dessa escolha?", ["Limpa mais profundamente", "Limpeza mais suave que preserva a oleosidade natural do cabelo", "Faz mais espuma", "E mais barato"], 1, "Sulfatos sao detergentes fortes; versoes sem sulfato limpam suavemente e sao ideais para cabelos cacheados, crespos ou quimicamente tratados.")}
${q("O que significa um produto ser sem parabenos?", ["Nao tem conservantes e estraga rapido", "Nao contem parabenos como conservantes; pode usar outros conservantes", "E natural e organico", "E vegano e cruelty-free"], 1, "Sem parabenos significa que o produto usa outros tipos de conservantes.")}
        ],
        xp: 50,
      },
      {
        id: "sustentabilidade-beleza",`
);

// For sustentabilidade-beleza
c = c.replace(
  `          ),
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "bem-estar-sono",`,
  `          ),
${q("Shampoo solido espuma menos que o liquido porque:", ["E de qualidade inferior", "Nao tem agua e tem menos agentes espumantes — a tecnica de uso e diferente", "Esta vencido", "So funciona em cabelos oleosos"], 1, "Shampoo solido e concentrado e sem agua; a espuma e diferente mas a limpeza e igualmente eficaz.")}
${q("Qual desses NAO e um beneficio dos produtos de beleza sustentaveis?", ["Reducao de residuos plasticos", "Menor impacto ambiental", "Garantia de nao causar alergia", "Estimulo ao consumo consciente"], 2, "Sustentabilidade nao garante hipoalergenicidade; ingredientes naturais tambem podem causar reacoes.")}
${q("Como orientar o uso de shampoo solido para um cliente iniciante?", ["Usar como sabonete liquido", "Esfregar a barra entre as maos molhadas ou diretamente no cabelo molhado, massagear o couro cabeludo", "Dissolver em agua antes de usar", "Apenas passar seco no cabelo"], 1, "Shampoo solido precisa ser esfregado entre as maos ou no cabelo molhado para ativar a limpeza.")}
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "bem-estar-sono",`
);

// For higiene-sono
c = c.replace(
  `          ),
        ],
        xp: 55,
      },
      {
        id: "travesseiros-acessorios-sono",`,
  `          ),
${q("Qual e a recomendacao de higiene do sono para melhorar o descanso?", ["Usar celular na cama ate pegar no sono", "Desligar telas 1h antes, manter horario fixo e ambiente escuro/fresco", "Tomar cafe a noite para relaxar", "Dormir em horarios diferentes cada dia"], 1, "Higiene do sono inclui rotina fixa, ausencia de telas antes de dormir e ambiente propicio.")}
${q("Melatonina e classificada como:", ["Medicamento tarja preta", "Suplemento alimentar para regulacao do sono", "Antidepressivo", "Ansiolitico controlado"], 1, "Melatonina e suplemento, nao medicamento; auxilia na regulacao do ciclo sono-vigilia.")}
${q("Quando encaminhar ao farmaceutico um cliente com queixa de insonia?", ["Nunca, insonia e normal", "Quando a insonia persiste por mais de 2 semanas ou ha suspeita de apneia", "So se o cliente pedir", "Apenas se o cliente estiver tomando melatonina"], 1, "Insomia cronica merece investigacao; apneia do sono e outras condicoes exigem diagnostico profissional.")}
${q("Qual a dosagem inicial recomendada de melatonina?", ["10 mg, dose unica", "0,21 a 3 mg, 30-60 min antes de deitar", "20 mg, dividida em duas doses", "Melatonina nao tem dosagem recomendada"], 1, "Doses baixas de melatonina (0,21-3 mg) sao suficientes para regular o ciclo.")}
        ],
        xp: 55,
      },
      {
        id: "travesseiros-acessorios-sono",`
);

// For travesseiros-acessorios-sono
c = c.replace(
  `          ),
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "produtos-sazonais",`,
  `          ),
${q("Cobertor ponderado (weighted blanket) deve pesar aproximadamente:", ["20% do peso corporal", "10% do peso corporal", "50% do peso corporal", "O mais pesado possivel"], 1, "O peso sugerido para cobertores ponderados e cerca de 10% do peso corporal para seguranca e eficacia.")}
${q("Mascara noturna com bloqueio total de luz ajuda porque:", ["Aquece os olhos", "Bloqueia a luz que interfere na producao de melatonina, melhorando a qualidade do sono", "Massageia os olhos", "Nao tem beneficio comprovado"], 1, "A exposicao a luz inibe a melatonina; bloquear a luz totalmente melhora a qualidade do sono.")}
${q("Dor cervical persistente mesmo com travesseiro adequado exige:", ["Trocar de travesseiro toda semana", "Encaminhamento ao farmaceutico para avaliacao", "Dormir sem travesseiro", "Apenas alongamento"], 1, "Dor cervical persistente pode indicar problema na coluna que precisa de avaliacao profissional.")}
${q("Quem dorme de lado precisa de um travesseiro:", ["Baixo e macio", "Mais alto e firme para preencher o espaco entre ombro e cabeca", "Nao precisa de travesseiro", "Dois travesseiros empilhados"], 1, "Dormir de lado exige travesseiro mais alto para manter a coluna alinhada.")}
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "produtos-sazonais",`
);

// For sazonal-verao
c = c.replace(
  `          ),
        ],
        xp: 50,
      },
      {
        id: "sazonal-inverno",`,
  `          ),
${q("Qual FPS e recomendado para exposicao direta ao sol na praia?", ["FPS 15", "FPS 30", "FPS 50+", "Qualquer FPS serve"], 2, "Para exposicao direta e prolongada, FPS 50+ oferece protecao mais adequada.")}
${q("Com que frequencia o protetor solar deve ser reaplicado?", ["Uma vez ao dia", "A cada 2 horas ou apos mergulhar/suar muito", "So na hora do almoco", "Nao precisa reaplicar se for a prova d agua"], 1, "Mesmo protetores resistentes perdem eficacia; reaplicacao a cada 2h e essencial.")}
${q("Pos-sol com aloe vera e indicado para:", ["Substituir o protetor solar", "Acalmar e hidratar a pele apos a exposicao ao sol", "Aumentar o bronzeado", "Servir como repelente"], 1, "Aloe vera tem acao calmante e hidratante, ideal apos exposicao solar.")}
${q("Qual repelente e mais eficaz para areas de mata e fim de tarde?", ["Repelente com DEET, Icaridina ou IR3535", "Repelente natural a base de citronela", "Oleo de cozinha", "Qualquer perfume forte"], 0, "Repelentes com DEET, Icaridina ou IR3535 tem eficacia comprovada contra mosquitos em areas de risco.")}
        ],
        xp: 50,
      },
      {
        id: "sazonal-inverno",`
);

// For sazonal-inverno
c = c.replace(
  `          ),
        ],
        xp: 50,
      },
    ],
  },
];`,
  `          ),
${q("Qual a melhor forma de tratar labios rachados no inverno?", ["Passar saliva para umedecer", "Usar balm com oleo de ricino, lanolina ou vaselina, e evitar lamber os labios", "Passar alcool para secar", "Ignorar, pois melhora sozinho"], 1, "Balm forma barreira protetora; saliva resseca ainda mais os labios.")}
${q("Vitamina C e zinco no inverno sao indicados para:", ["Curar gripe em 24 horas", "Reforco imunologico sazonal como coadjuvantes, sem promessa de prevencao total", "Substituir a vacina da gripe", "Aumentar a temperatura corporal"], 1, "Vitamina C e zinco apoiam a imunidade, mas nao previnem ou curam gripes isoladamente.")}
${q("Umidificador de ar no inverno ajuda porque:", ["Esquenta o ambiente", "Alivia o ressecamento da pele e das vias aereas causado pelo ar seco e aquecimento", "Purifica o ar de virus", "Nao tem beneficio comprovado"], 1, "O ar seco do inverno resseca pele e mucosas; umidificador alivia esses sintomas.")}
${q("Alem de hidratante, qual outro produto e essencial no inverno para cuidados com a pele?", ["Protetor labial (lip balm)", "Autobronzeador", "Oleo de banho perfumado", "Esfoliante diario"], 0, "Lip balm previne e trata labios rachados, um dos problemas mais comuns no inverno.")}
        ],
        xp: 50,
      },
    ],
  },
];`
);

fs.writeFileSync(fp, c, "utf-8");
console.log("Done - all quizzes added successfully");
