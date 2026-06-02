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
            q(
              "Qual a sequência correta para um barbear sem irritação?",
              [
                "Barbear a seco, aplicar álcool depois.",
                "Amolecer o pelo com água morna, barbear no sentido do fio, hidratar.",
                "Passar lâmina várias vezes no mesmo local.",
                "Usar água gelada durante o barbear.",
              ],
              1,
              "A sequência ideal reduz atrito: amolecer o pelo, barbear no sentido do fio e hidratar em seguida.",
            ),
            q(
              "Cliente com barba longa quer manter o fio macio e disciplinado. Qual produto sugerir?",
              [
                "Espuma de barbear comum.",
                "Óleo ou balm para barba.",
                "Álcool pós-barba.",
                "Sabonete antibacteriano.",
              ],
              1,
              "Óleo e balm hidratam os fios longos, evitando ressecamento e pontas duplas.",
            ),
            q(
              "Quando o atendente deve chamar o farmacêutico no caso de irritação pós-barba?",
              [
                "Sempre, em qualquer vermelhidão.",
                "Quando há pus, dor intensa ou lesões que não cicatrizam.",
                "Apenas se o cliente pedir.",
                "Nunca, pois é responsabilidade do atendente resolver.",
              ],
              1,
              "Lesões com pus ou dor intensa podem indicar infecção (foliculite) e exigem avaliação farmacêutica.",
            ),
            q(
              "Qual o principal causador de irritação durante o barbear?",
              [
                "Lâmina cega.",
                "Atrito.",
                "Sabonete errado.",
                "Água quente demais.",
              ],
              1,
              "O atrito é a principal causa de irritação; lâmina nova e gel de barbear reduzem o atrito.",
            ),
            q(
              "Cliente com foliculite após barbear. Qual a primeira orientação?",
              [
                "Passar álcool.",
                "Parar de barbear e procurar avaliação farmacêutica.",
                "Usar lâmina mais velha.",
                "Aplicar creme dental.",
              ],
              1,
              "Foliculite é inflamação dos folículos; requer avaliação profissional para conduta adequada.",
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
          simulacao: {
            cliente: "Cliente de 30 anos com sensibilidade ao escovar os dentes. Usa escova de cerdas duras porque 'acha que limpa melhor'. Gengiva sangra às vezes.",
            falaBoa: "Entendo que você queira uma limpeza eficiente, mas a escova de cerdas duras pode estar causando retração gengival e aumentando a sensibilidade. O ideal é usar cerdas macias — elas limpam bem sem agredir a gengiva. Sobre o sangramento, pode ser gengivite. Sugiro um creme dental dessensibilizante e agendar uma avaliação odontológica. Se o sangramento persistir, nosso farmacêutico pode orientar melhor.",
            falaEvitar: "Troca para esta escova elétrica que resolve tudo.",
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
            q(
              "Qual tipo de enxaguante é indicado para gengiva inflamada por curto período?",
              [
                "Enxaguante com álcool.",
                "Enxaguante com clorexidina (uso temporário).",
                "Enxaguante sem flúor.",
                "Enxaguante caseiro com sal.",
              ],
              1,
              "Clorexidina é eficaz contra placa bacteriana, mas o uso deve ser temporário para evitar manchas nos dentes.",
            ),
            q(
              "Cliente com aparelho ortodôntico precisa de qual item extra na rotina de higiene?",
              [
                "Escova de dentes elétrica.",
                "Escova interdental ou fio próprio para aparelho.",
                "Enxaguante bucal com álcool.",
                "Clareador dental.",
              ],
              1,
              "Aparelhos dificultam a limpeza entre os dentes; escova interdental e fio próprio são essenciais.",
            ),
            q(
              "Qual a função principal do flúor nos cremes dentais?",
              [
                "Clarear os dentes.",
                "Prevenir cáries.",
                "Fortalecer a gengiva.",
                "Eliminar o mau hálito.",
              ],
              1,
              "O flúor remineraliza o esmalte dental e previne a formação de cáries.",
            ),
            q(
              "Cliente com mau hálito persistente pergunta qual enxaguante usar. Qual a melhor conduta?",
              [
                "Indicar o enxaguante mais forte.",
                "Sugerir enxaguante e reforçar escovação da língua, mas orientar avaliação odontológica se persistir.",
                "Dizer que é normal.",
                "Recomendar fio dental apenas.",
              ],
              1,
              "Mau hálito persistente pode ter várias causas; enxaguante não substitui escovação da língua e avaliação profissional.",
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
          comparativo: {
            titulo: "Tipo de sabonete x Indicação",
            itens: [
              { nome: "Hidratante/glicerinado", quando: "Pele seca e sensível; uso diário." },
              { nome: "Antibacteriano", quando: "Uso restrito (mãos, axilas); não para o corpo todo." },
              { nome: "Esfoliante", quando: "Uso pontual (1-2x/semana); remove células mortas." },
              { nome: "Íntimo", quando: "pH específico para região genital; não substituir por sabonete comum." },
            ],
          },
          simulacao: {
            cliente: "Cliente com pele seca e descamando nos braços, quer 'um sabonete que limpe bem'. Usa sabonete antibacteriano todos os dias.",
            falaBoa: "Percebo que sua pele está bastante ressecada. O sabonete antibacteriano é muito agressivo para uso diário no corpo todo — ele remove a oleosidade protetora da pele. Sugiro trocar para um sabonete hidratante ou glicerinado, que limpa sem agredir. Depois do banho, um hidratante corporal também vai ajudar muito. Vou te mostrar as opções que temos.",
            falaEvitar: "Esse antibacteriano é o melhor, continua usando.",
          },
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
            q(
              "Sabonete antibacteriano pode ser indicado para uso diário:",
              [
                "No corpo inteiro, todos os dias.",
                "Apenas em áreas restritas como mãos, quando necessário.",
                "Nunca deve ser usado.",
                "Só no rosto.",
              ],
              1,
              "O uso contínuo no corpo inteiro resseca e desequilibra a microbiota natural da pele.",
            ),
            q(
              "Qual a frequência recomendada para sabonete esfoliante?",
              [
                "Diariamente.",
                "1 a 2 vezes por semana.",
                "Uma vez por mês.",
                "Nunca, faz mal à pele.",
              ],
              1,
              "Esfoliação excessiva remove a barreira protetora; o ideal é uso pontual, 1-2x na semana.",
            ),
            q(
              "Qual a principal diferença entre sabonete íntimo e sabonete comum?",
              [
                "Preço.",
                "pH ajustado para a região genital.",
                "Cheiro.",
                "Cor.",
              ],
              1,
              "O sabonete íntimo tem pH específico (ácido) para não desequilibrar a flora da região genital.",
            ),
            q(
              "Cliente pergunta se pode usar sabonete esfoliante no rosto todos os dias. O que orientar?",
              [
                "Pode usar diariamente.",
                "Não é indicado para uso diário; esfoliar 1-2x/semana no máximo.",
                "Só pode usar no corpo.",
                "Use duas vezes ao dia para melhores resultados.",
              ],
              1,
              "Esfoliação diária agride a barreira cutânea; a frequência ideal é 1-2x por semana.",
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
          comparativo: {
            titulo: "Acessório x Indicação",
            itens: [
              { nome: "Bucha vegetal", quando: "Esfoliação suave; trocar a cada 30 dias." },
              { nome: "Esponja sintética", quando: "Uso diário; secar bem após o banho." },
              { nome: "Escova de cabo longo", quando: "Idosos, gestantes e pessoas com mobilidade reduzida." },
              { nome: "Luvas esfoliantes", quando: "Esfoliação semanal; não usar em pele irritada." },
            ],
          },
          simulacao: {
            cliente: "Senhora de 65 anos, reclama que sente coceira nas costas depois do banho. Usa a mesma bucha vegetal há meses.",
            falaBoa: "Essa coceira pode estar relacionada à bucha vegetal que está sendo usada há muito tempo — elas acumulam fungos e bactérias com o tempo. O ideal é trocar a bucha a cada mês e deixá-la secar bem após o banho. Para as costas, posso sugerir uma escova de cabo longo que também facilita o alcance. Se a coceira não passar, vale o farmacêutico dar uma olhada.",
            falaEvitar: "É só alergia, passa qualquer pomada.",
          },
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
            q(
              "Qual acessório é mais indicado para idosos com dificuldade de alcançar as costas?",
              [
                "Bucha vegetal pequena.",
                "Escova de cabo longo.",
                "Luva esfoliante.",
                "Esponja redonda.",
              ],
              1,
              "A escova de cabo longo facilita o alcance de áreas como costas e pés sem esforço.",
            ),
            q(
              "Com que frequência recomenda-se trocar a bucha vegetal?",
              [
                "A cada 6 meses.",
                "A cada 30 dias.",
                "Só quando rasgar.",
                "Uma vez por ano.",
              ],
              1,
              "Buchas vegetais acumulam rapidamente fungos e bactérias; a troca mensal é recomendada.",
            ),
            q(
              "Qual a melhor forma de higienizar uma bucha de banho?",
              [
                "Deixar secar ao sol e trocar regularmente.",
                "Lavar com água sanitária toda semana.",
                "Colocar na máquina de lavar.",
                "Não precisa higienizar.",
              ],
              0,
              "A secagem ao sol ajuda a eliminar microrganismos, e a troca regular evita acúmulo.",
            ),
            q(
              "Para quem tem pele sensível, qual acessório de banho é mais adequado?",
              [
                "Bucha vegetal.",
                "Esponja sintética macia.",
                "Luva esfoliante grossa.",
                "Escova de cerdas duras.",
              ],
              1,
              "Esponja sintética macia é mais suave para peles sensíveis; evita irritação.",
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
          comparativo: {
            titulo: "Opções de proteção íntima",
            itens: [
              { nome: "Absorvente descartável", quando: "Prático, diversos fluxos disponíveis." },
              { nome: "Absorvente reutilizável", quando: "Ecológico, lavável, menor custo a longo prazo." },
              { nome: "Coletor menstrual", quando: "Maior capacidade, até 12h de proteção." },
              { nome: "Calcinha absorvente", quando: "Conforto, uso como proteção principal ou secundária." },
            ],
          },
          simulacao: {
            cliente: "Adolescente na primeira menstruação, entra acompanhada da mãe. Mãe pede 'o absorvente mais forte porque a filha está perdendo muito sangue'. Menina parece envergonhada.",
            falaBoa: "É normal ficar um pouco perdida no começo, e estamos aqui para ajudar. Vamos conversar sobre o fluxo dela — o ideal é escolher a absorção certa para não ter desconforto. Posso mostrar opções para o dia e para a noite, e explico como usar cada uma. Se o fluxo for realmente muito intenso, vale conversar com o farmacêutico também. Querem ver juntas as opções?",
            falaEvitar: "Compra este noturno gigante que qualquer fluxo segura.",
          },
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
            q(
              "Cliente pergunta sobre coletor menstrual pela primeira vez. Qual a melhor abordagem?",
              [
                "Dizer que é complicado e não recomendar.",
                "Explicar as vantagens, o modo de uso e sanitização, sem pressionar.",
                "Oferecer só o modelo mais caro.",
                "Ignorar a pergunta.",
              ],
              1,
              "O atendente deve informar com clareza, respeitando o tempo e a decisão da cliente.",
            ),
            q(
              "Quando um item de higiene íntima exige encaminhamento ao farmacêutico?",
              [
                "Sempre que a cliente pedir orientação.",
                "Se houver odor forte, coceira persistente ou suspeita de infecção.",
                "Nunca, pois é só um item de higiene.",
                "Apenas se a cliente pedir explicitamente.",
              ],
              1,
              "Sintomas como odor, coceira e desconforto podem indicar infecção e precisam de avaliação profissional.",
            ),
            q(
              "Qual a principal vantagem do coletor menstrual em relação ao absorvente descartável?",
              [
                "Mais barato.",
                "Maior capacidade e até 12h de proteção.",
                "Mais perfumado.",
                "Mais fácil de encontrar.",
              ],
              1,
              "O coletor menstrual tem capacidade maior que absorventes, permitindo até 12h de uso contínuo.",
            ),
            q(
              "Ao atender uma cliente em busca de absorventes, qual postura NÃO é adequada?",
              [
                "Perguntar discretamente sobre o fluxo.",
                "Fazer comentários sobre o corpo da cliente.",
                "Mostrar diferentes opções disponíveis.",
                "Responder dúvidas com naturalidade.",
              ],
              1,
              "Comentários sobre o corpo são inapropriados; o atendimento deve ser respeitoso e discreto.",
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
          simulacao: {
            cliente: "Cliente reclama que transpira muito nas axilas e já tentou várias marcas de desodorante, mas nada resolve. A pele das axilas está irritada.",
            falaBoa: "Entendo, isso deve ser bem desconfortável. Uma informação importante: desodorante combate o odor, mas não reduz o suor. Para quem sua muito, o antitranspirante é mais indicado — ele contém sais de alumínio que reduzem a transpiração. Como sua pele está irritada, sugiro um antitranspirante sem álcool e sem perfume. Se o suor excessivo atrapalhar suas atividades diárias, pode ser hiperidrose; nesse caso, vale conversar com o farmacêutico.",
            falaEvitar: "Compra esse antitranspirante forte que para o suor na hora.",
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
            q(
              "Para pele sensível nas axilas, o ideal é recomendar:",
              [
                "Antitranspirante alcoólico.",
                "Versão sem álcool e sem perfume.",
                "Desodorante aerossol comum.",
                "Qualquer marca, desde que seja desodorante.",
              ],
              1,
              "Versões sem álcool e sem perfume reduzem o risco de irritação em peles sensíveis.",
            ),
            q(
              "Quando o suor excessivo pode indicar hiperidrose e exigir encaminhamento?",
              [
                "Quando a pessoa sua depois de malhar.",
                "Quando o suor excessivo atrapalha atividades diárias e não melhora com antitranspirante.",
                "Sempre que o cliente reclamar de suor.",
                "Nunca, pois suor é normal.",
              ],
              1,
              "Hiperidrose é uma condição que interfere na qualidade de vida e pode precisar de tratamento médico.",
            ),
            q(
              "Qual formato de desodorante costuma ter menos álcool e ser mais indicado para pele sensível?",
              [
                "Aerossol.",
                "Roll-on ou creme.",
                "Stick.",
                "Todos têm a mesma quantidade de álcool.",
              ],
              1,
              "Roll-ons e cremes geralmente têm menos álcool que aerossóis, sendo melhores para peles sensíveis.",
            ),
            q(
              "Cliente pergunta por que o antitranspirante mancha a roupa. O que explicar?",
              [
                "É porque o produto está vencido.",
                "Ocorre pela combinação dos sais de alumínio com o suor; usar versão transparente ou secar bem antes de vestir.",
                "Só mancha se for aerossol.",
                "Não tem explicação.",
              ],
              1,
              "Sais de alumínio reagem com componentes do suor, podendo causar manchas; versões transparentes minimizam isso.",
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
            q(
              "Para pele oleosa, qual textura de protetor solar é mais adequada?",
              [
                "Creme hidratante rico.",
                "Gel, oil-free ou toque seco.",
                "Protetor em óleo.",
                "Loção corporal comum.",
              ],
              1,
              "Texturas oil-free e toque seco não obstruem os poros e controlam o brilho.",
            ),
            q(
              "Cliente com manchas no rosto pergunta qual protetor solar indicar. O atendente deve:",
              [
                "Indicar qualquer protetor FPS 15.",
                "Orientar protetor com cor ou antioxidantes e FPS 50, e sugerir acompanhamento dermatológico.",
                "Dizer que protetor não trata manchas.",
                "Indicar clareador sem proteção.",
              ],
              1,
              "Protetor com cor oferece proteção contra luz visível, benéfico para melasma; FPS alto é essencial.",
            ),
            q(
              "Em quanto tempo o protetor solar deve ser reaplicado em exposição direta ao sol?",
              [
                "A cada 30 minutos.",
                "A cada 2 horas ou após mergulhar/suar muito.",
                "Apenas uma vez ao dia.",
                "Não precisa reaplicar se for resistente à água.",
              ],
              1,
              "Mesmo protetores resistentes à água perdem eficácia; reaplicar a cada 2h é essencial.",
            ),
            q(
              "Cliente com pele acneica quer saber se protetor solar piora a acne. Qual a orientação correta?",
              [
                "Protetor solar sempre piora a acne.",
                "Protetor oil-free e não comedogênico protege sem obstruir os poros.",
                "Melhor não usar protetor.",
                "Usar apenas hidratante com FPS.",
              ],
              1,
              "Protetores oil-free e não comedogênicos são formulados para não obstruir poros, sendo seguros para pele acneica.",
            ),
            q(
              "Além do FPS, o que mais considerar ao recomendar um protetor solar?",
              [
                "Apenas o preço.",
                "Tipo de pele, textura, resistência à água e presença de antioxidantes.",
                "Só a marca.",
                "A cor da embalagem.",
              ],
              1,
              "A escolha do protetor deve considerar o tipo de pele, a textura adequada e a presença de ativos extras como antioxidantes.",
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
          comparativo: {
            titulo: "Tipo de base x Tipo de pele",
            itens: [
              { nome: "Base líquida oil-free", quando: "Pele oleosa/mista; acabamento matte." },
              { nome: "Base em pó", quando: "Pele oleosa; cobertura leve a média." },
              { nome: "Base cremosa", quando: "Pele seca; acabamento hidratante." },
              { nome: "BB Cream / CC Cream", quando: "Cobertura leve + protetor solar; dia a dia." },
            ],
          },
          simulacao: {
            cliente: "Cliente jovem com acne ativa pergunta 'qual base não vai piorar minhas espinhas'. Já usou uma base oleosa que obstruiu os poros.",
            falaBoa: "Ótima pergunta! Para pele acneica, o ideal é uma base oil-free e não comedogênica — ou seja, que não obstrui os poros. Também sugiro aplicar um primer oil-free antes e, principalmente, remover toda a maquiagem no fim do dia com um demaquilante suave. Quer testar algumas opções? Posso aplicar um pouco na mandíbula para ver o tom e a textura.",
            falaEvitar: "Toda base é igual, leva qualquer uma.",
          },
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
            q(
              "Onde testar o tom da base para maior precisão?",
              [
                "No dorso da mão.",
                "Na mandíbula ou lateral do rosto.",
                "Na testa.",
                "No braço.",
              ],
              1,
              "O tom deve ser testado na mandíbula, onde a cor do rosto e pescoço se encontram.",
            ),
            q(
              "Qual o maior erro ao vender maquiagem para pele acneica?",
              [
                "Indicar produtos não comedogênicos.",
                "Não orientar a remoção completa da maquiagem ao final do dia.",
                "Sugerir uso de primer.",
                "Recomendar protetor solar antes da base.",
              ],
              1,
              "Dormir com maquiagem obstrui os poros e agrava a acne; a remoção é essencial.",
            ),
            q(
              "O que significa um produto de maquiagem ser 'não comedogênico'?",
              [
                "Que não tem cheiro.",
                "Que não obstrui os poros.",
                "Que é importado.",
                "Que tem FPS.",
              ],
              1,
              "Não comedogênico significa que o produto foi formulado para não obstruir os poros, reduzindo o risco de acne.",
            ),
            q(
              "Cliente quer uma base de cobertura leve com proteção solar para o dia a dia. Qual formato sugerir?",
              [
                "Base líquida oil-free.",
                "BB Cream ou CC Cream.",
                "Base em bastão.",
                "Pó compacto.",
              ],
              1,
              "BB Cream e CC Cream oferecem cobertura leve combinada com proteção solar, ideais para o dia a dia.",
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
          comparativo: {
            titulo: "Problema x Solução para unhas",
            itens: [
              { nome: "Unhas fracas/quebradiças", quando: "Base fortalecedora com queratina ou cálcio." },
              { nome: "Unhas descamando", quando: "Hidratação com óleo de cutícula + base tratamento." },
              { nome: "Unhas amareladas", quando: "Base antifúngica se houver suspeita de micose." },
              { nome: "Cutículas ressecadas", quando: "Óleo hidratante diário; não remover cutícula por completo." },
            ],
          },
          simulacao: {
            cliente: "Cliente reclama que as unhas estão 'descamando e quebrando'. Faz unha toda semana e usa removedor com acetona.",
            falaBoa: "Isso é bem comum! A acetona resseca muito a unha e a cutícula. Sugiro trocar para um removedor sem acetona e usar uma base fortalecedora, como as que têm queratina. Também é bom hidratar as cutículas com óleo todos os dias. Se a descamação vier acompanhada de manchas ou alteração na cor da unha, pode ser micose — nesse caso, vale o farmacêutico avaliar.",
            falaEvitar: "É só esmalte fraco, compra um mais caro.",
          },
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
            q(
              "Removedor de esmalte sem acetona é preferível porque:",
              [
                "Remove mais rápido.",
                "Resseca menos a unha e a cutícula.",
                "É mais barato.",
                "Tem mais cheiro.",
              ],
              1,
              "A acetona desidrata a queratina da unha; versões sem acetona são mais suaves.",
            ),
            q(
              "Quando suspeitar de micose ungueal e encaminhar ao farmacêutico?",
              [
                "Sempre que a unha estiver fraca.",
                "Quando houver alteração de cor, espessamento ou deformação da unha.",
                "Nunca, pois unhas não têm doenças.",
                "Apenas se o cliente reclamar de dor.",
              ],
              1,
              "Micose ungueal altera cor, forma e textura da unha; requer diagnóstico e tratamento específico.",
            ),
            q(
              "Qual a recomendação sobre o corte das cutículas?",
              [
                "Remover completamente sempre.",
                "Não remover por completo; empurrar suavemente e hidratar.",
                "Cortar o máximo possível.",
                "Não tem problema cortar tudo.",
              ],
              1,
              "A cutícula protege a unha contra infecções; o ideal é empurrá-la suavemente e hidratar, não remover por completo.",
            ),
            q(
              "Cliente com unhas amareladas e espessadas pode estar com:",
              [
                "Falta de vitamina.",
                "Esmalte escuro demais.",
                "Possível micose ungueal; encaminhar ao farmacêutico.",
                "Alergia a removedor.",
              ],
              2,
              "Unhas amareladas e espessadas são sinais clássicos de micose ungueal e exigem avaliação profissional.",
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
            q(
              "O ácido hialurônico é indicado principalmente para:",
              [
                "Esfoliar a pele",
                "Hidratação e manutenção do viço",
                "Clarear manchas",
                "Controlar oleosidade",
              ],
              1,
              "O ácido hialurônico é um poderoso umectante que retém água na pele, proporcionando hidratação e viço.",
            ),
            q(
              "Por que a vitamina C é recomendada para uso pela manhã?",
              [
                "Porque clareia mais rápido com o sol",
                "Por sua ação antioxidante que protege contra radicais livres",
                "Porque não funciona à noite",
                "Porque mancha se usar à noite",
              ],
              1,
              "A vitamina C é antioxidante e potencializa a fotoproteção, sendo ideal para uso diurno.",
            ),
            q(
              "Ao introduzir um retinóide para um cliente iniciante, o atendente deve:",
              [
                "Indicar uso diário desde o primeiro dia",
                "Orientar introdução gradual, uso noturno e fotoproteção obrigatória de dia",
                "Recomendar uso junto com ácidos",
                "Dizer que não precisa de protetor solar",
              ],
              1,
              "Retinóides exigem adaptação da pele; uso gradual e fotoproteção são essenciais para evitar irritação.",
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
          simulacao: {
            cliente: "Cliente reclama de caspa no couro cabeludo e usa o mesmo shampoo anticaspa há meses, mas diz que não está mais fazendo efeito.",
            falaBoa: "Entendo sua frustração. O shampoo anticaspa pode perder eficácia com o uso contínuo — uma estratégia é alternar com um shampoo suave ou específico para uso frequente. Também é importante aplicar o shampoo diretamente no couro cabeludo e deixar agir por alguns minutos antes de enxaguar. Se a descamação for intensa ou houver vermelhidão, vale conversar com o farmacêutico.",
            falaEvitar: "Compra este mais forte que resolve.",
          },
          errosComuns: ["Indicar anticaspa para o comprimento do fio."],
          quiz: [
            q(
              "Cabelo quebradiço normalmente precisa de:",
              ["Hidratação apenas", "Reconstrução (proteínas)", "Mais shampoo", "Coloração"],
              1,
              "Quebra costuma indicar falta de massa/proteína: reconstrução.",
            ),
            q(
              "Shampoo anticaspa deve ser aplicado:",
              [
                "Apenas no comprimento do fio",
                "Diretamente no couro cabeludo, massageando",
                "Só uma vez por mês",
                "Depois do condicionador",
              ],
              1,
              "O shampoo anticaspa age no couro cabeludo, não no fio; deve ser aplicado diretamente na raiz.",
            ),
            q(
              "Qual a diferença entre hidratação e nutrição capilar?",
              [
                "São a mesma coisa",
                "Hidratação repõe água/umidade; nutrição repõe óleos/lipídios",
                "Nutrição é para cabelo oleoso",
                "Hidratação é para cabelo cacheado",
              ],
              1,
              "Hidratação repõe água e umidade, nutrição repõe lipídios e óleos — ambas são complementares.",
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
          comparativo: {
            titulo: "Volume de água oxigenada x Resultado",
            itens: [
              { nome: "Volume 10 (3%)", quando: "Tom sobre tom, sem clarear; cobertura de fios brancos." },
              { nome: "Volume 20 (6%)", quando: "Clareamento leve a médio; mais usado em colorações." },
              { nome: "Volume 30 (9%)", quando: "Clareamento mais intenso; exige cuidado com o fio." },
              { nome: "Volume 40 (12%)", quando: "Alto clareamento; só para profissionais experientes." },
            ],
          },
          simulacao: {
            cliente: "Cliente quer pintar o cabelo em casa pela primeira vez e pergunta se precisa fazer algum teste antes.",
            falaBoa: "Ótimo que você perguntou! Sim, o recomendado é fazer o teste de toque 48 horas antes para verificar se há alergia ao PPD ou outros componentes da tintura. Aplique uma pequena quantidade atrás da orelha ou no antebraço e observe se aparece coceira, vermelhidão ou inchaço. Além disso, sugiro fazer o teste de mecha em um fio para ver o resultado da cor antes de aplicar em todo o cabelo.",
            falaEvitar: "Não precisa de teste, é seguro.",
          },
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
            q(
              "O que o volume da água oxigenada (10, 20, 30, 40) determina na coloração?",
              [
                "A cor final",
                "A capacidade de clareamento do cabelo",
                "O cheiro do produto",
                "O tempo de validade",
              ],
              1,
              "Quanto maior o volume, maior o poder de clareamento; volumes mais altos exigem mais cuidado.",
            ),
            q(
              "Após a coloração, qual cuidado é essencial para manter a cor por mais tempo?",
              [
                "Lavar o cabelo todos os dias com shampoo anticaspa",
                "Usar shampoo e condicionador específicos para cabelos coloridos",
                "Expor o cabelo ao sol",
                "Usar água bem quente",
              ],
              1,
              "Produtos específicos para cabelos coloridos têm pH ajustado e protegem a cor por mais tempo.",
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
          simulacao: {
            cliente: "Cliente jovem quer comprar o primeiro perfume e não sabe por onde começar. Diz que 'não gosta de perfume muito doce nem muito forte'.",
            falaBoa: "Que legal, escolher o primeiro perfume é especial! Vamos começar pelo que você gosta. Pela sua descrição, sugiro experimentar algo da família cítrica ou aromática — são mais frescos e versáteis para o dia a dia. Vou te mostrar algumas opções e você pode sentir na pele, ok? Aplique no pulso e espere alguns minutos para sentir a evolução da fragrância.",
            falaEvitar: "Esse aqui é o mais caro, leva ele.",
          },
          errosComuns: ["Vaporizar perfume direto no cliente sem permissão."],
          quiz: [
            q(
              "Qual tende a fixar mais?",
              ["Eau de Cologne", "Eau de Toilette", "Eau de Parfum", "Água perfumada"],
              2,
              "Eau de Parfum tem maior concentração e, em geral, maior fixação.",
            ),
            q(
              "Por que é recomendado sentir o perfume na pele e esperar alguns minutos?",
              [
                "Porque o cheiro muda com o calor do corpo; as notas de saída evaporam e revelam o aroma real",
                "Porque demora a agir",
                "Porque o papel não serve para testar",
                "Porque o perfume estraga rápido",
              ],
              0,
              "O perfume tem notas de saída, coração e fundo; esperar alguns minutos na pele revela a verdadeira fragrância.",
            ),
            q(
              "Uma cliente quer um perfume para usar no trabalho, com fixação moderada. Qual sugerir?",
              [
                "Eau de Cologne",
                "Eau de Toilette",
                "Eau de Parfum",
                "Perfume sólido",
              ],
              1,
              "Eau de Toilette tem fixação média e presença moderada, ideal para o dia a dia profissional.",
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
          comparativo: {
            titulo: "Faixa etária x Cuidado com a pele",
            itens: [
              { nome: "Recém-nascido (0-6 meses)", quando: "Produtos neutros, sem fragrância, hipoalergênicos; água filtrada para banho." },
              { nome: "Bebê (6-24 meses)", quando: "Loção hidratante suave, shampoo sem lágrimas, protetor solar físico." },
              { nome: "Criança (2+ anos)", quando: "Produtos divertidos, mas ainda suaves; protetor solar infantil." },
            ],
          },
          simulacao: {
            cliente: "Mãe de primeira viagem, aflita, quer saber qual o melhor sabonete para o bebê de 3 meses que está com a pele ressecada.",
            falaBoa: "Calma, é normal ficar preocupada! Para bebês dessa idade o ideal é usar sabonete líquido neutro, sem perfume e com pH fisiológico. Como a pele do bebê é mais fina e sensível, produtos suaves ajudam a não ressecar ainda mais. Também sugiro um hidratante específico para bebês, hipoalergênico, passado após o banho. Se o ressecamento persistir ou houver vermelhidão, vale o farmacêutico avaliar.",
            falaEvitar: "Qualquer sabonete serve para bebê.",
          },
          errosComuns: ["Indicar produto adulto perfumado para bebê."],
          quiz: [
            q(
              "Produtos para bebês devem ser, preferencialmente:",
              ["Bem perfumados", "Hipoalergênicos e sem álcool", "Os mais baratos", "De adulto"],
              1,
              "A pele do bebê é sensível: hipoalergênicos e sem álcool são mais seguros.",
            ),
            q(
              "Qual a principal característica que um protetor solar infantil deve ter?",
              [
                "FPS 15",
                "FPS 30+ com filtro físico",
                "Ser bem perfumado",
                "Ser oil-free",
              ],
              1,
              "Protetores com filtro físico e FPS 30+ são mais seguros para a pele sensível das crianças.",
            ),
            q(
              "Por que shampoos infantis são formulados 'sem lágrimas'?",
              [
                "Para não irritar os olhos da criança",
                "Para conservar a embalagem",
                "Para limpar melhor",
                "Para não espumar",
              ],
              0,
              "A fórmula 'sem lágrimas' tem pH neutro e não irrita os olhos, proporcionando mais segurança e conforto.",
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
          comparativo: {
            titulo: "Tipo de termômetro x Indicação",
            itens: [
              { nome: "Termômetro digital axilar", quando: "Prático e seguro para todas as idades." },
              { nome: "Termômetro infravermelho (testa)", quando: "Leitura rápida, ideal para crianças que não ficam paradas." },
              { nome: "Termômetro de mercúrio", quando: "Não recomendar; quebradiço e tóxico." },
            ],
          },
          simulacao: {
            cliente: "Pai de primeira viagem confuso entre várias marcas de mamadeira. Não sabe qual escolher.",
            falaBoa: "Entendo, são muitas opções! O mais importante é escolher uma mamadeira adequada para a idade do bebê — o bico tem furos que controlam o fluxo. Para recém-nascidos, o bico de fluxo lento é o ideal. Também sugiro as de silicone ou vidro, que não soltam substâncias. E lembre-se de esterilizar antes do primeiro uso e após cada mamada nos primeiros meses. Quer ver as opções que temos? Posso te ajudar a escolher.",
            falaEvitar: "Compra a mais cara que é a melhor.",
          },
          errosComuns: ["Indicar bico de fase errada para a idade."],
          quiz: [
            q(
              "Bicos e mamadeiras são escolhidos principalmente por:",
              ["Cor", "Fase/idade do bebê", "Marca mais cara", "Tamanho da embalagem"],
              1,
              "A escolha segue a fase/idade, garantindo fluxo e segurança adequados.",
            ),
            q(
              "Qual a forma correta de esterilizar mamadeiras em casa?",
              [
                "Lavar só com água",
                "Ferver em água por 5-10 minutos ou usar esterilizador próprio",
                "Colocar no micro-ondas sem água",
                "Lavar na máquina de lavar louça sem programa especial",
              ],
              1,
              "Ferver por 5-10 minutos é o método caseiro mais eficaz para esterilização de mamadeiras e bicos.",
            ),
            q(
              "Qual a vantagem do termômetro infravermelho (de testa) em relação ao digital axilar?",
              [
                "É mais barato",
                "Leitura rápida sem contato, ideal para crianças inquietas",
                "É mais preciso",
                "Funciona sem pilha",
              ],
              1,
              "O termômetro infravermelho faz a leitura em segundos sem necessidade de contato prolongado.",
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
          comparativo: {
            titulo: "Tipo de fralda x Ocasião",
            itens: [
              { nome: "Fralda descartável comum", quando: "Dia a dia, boa absorção." },
              { nome: "Fralda noturna", quando: "Maior absorção para a noite; evita vazamentos." },
              { nome: "Fralda de pano/reutilizável", quando: "Ecológica, menor custo a longo prazo." },
              { nome: "Calça de treinamento", quando: "Transição do desfralde; a criança consegue puxar para baixo." },
            ],
          },
          simulacao: {
            cliente: "Mãe aflita com assadura forte no bebê de 8 meses. Já tentou várias pomadas e nada resolve.",
            falaBoa: "Calma, vamos ver isso juntas. Quando a assadura é persistente, o primeiro passo é garantir que a pomada de barreira com óxido de zinco esteja sendo aplicada em camada generosa a cada troca. Também é importante deixar o bebê sem fralda por alguns minutos ao longo do dia para a pele respirar. Lenços umedecidos sem álcool e sem perfume são essenciais. Se a assadura tiver bolhas, sangramento ou se o bebê estiver com febre, preciso encaminhar ao farmacêutico para avaliação.",
            falaEvitar: "Passa essa pomada milagrosa que resolve tudo.",
          },
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
            q(
              "Qual a principal função do óxido de zinco nas pomadas de assadura?",
              [
                "Hidratar a pele",
                "Criar uma barreira protetora contra umidade e atrito",
                "Antibacteriano",
                "Perfumar",
              ],
              1,
              "O óxido de zinco forma uma barreira protetora que isola a pele do contato com urina e fezes.",
            ),
            q(
              "Ao escolher fraldas, o principal critério deve ser:",
              [
                "A marca mais famosa",
                "O peso da criança e a absorção necessária",
                "A cor da embalagem",
                "O preço mais baixo",
              ],
              1,
              "O peso da criança define o tamanho da fralda, e a absorção deve ser adequada ao período de uso (dia/noite).",
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
