import type { Trilha } from "./types";
import { q } from "./_helpers";

// Trilha Prática Supervisionada — estágio virtual, simulação de balcão e certificação.
export const trilhaPratica: Trilha = {
  id: "pratica",
  numero: 6,
  titulo: "Prática Supervisionada",
  subtitulo: "Atendente III",
  descricao:
    "Estágio virtual, simulação realista de balcão e certificação. Aplique na prática tudo o que aprendeu — do acolhimento ao fechamento, incluindo situações de emergência, prescrições irregulares e cross-sell ético.",
  nivelFaixa: "Do intermediário ao avançado",
  icone: "stethoscope",
  modulos: [
    // ── Módulo 1 ──────────────────────────────────────────────────────────
    {
      id: "estagio-virtual",
      titulo: "Estágio Virtual",
      descricao:
        "Rotina completa de balcão em ambiente simulado: triagem, dispensação segura, receituário, perfumaria e medicamentos.",
      aulas: [
        // ── Aula 1: Rotina de Balcão ──
        {
          id: "rotina-balcao",
          titulo: "Rotina de Balcão",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Organização do posto de trabalho, acolhimento inicial e fluxo de atendimento no balcão da farmácia.",
          resumoExecutivo: [
            "Mantenha o balcão limpo, com material de apoio (caneta, receituário, carimbo) ao alcance.",
            "Cumprimente o cliente com contato visual, sorriso e postura aberta nos primeiros segundos.",
            "Escute ativamente antes de oferecer qualquer produto — a necessidade verdadeira vem da fala do cliente.",
          ],
          comparativo: {
            titulo: "Atendimento Padrão vs. Atendimento Consultivo",
            itens: [
              {
                nome: "Padrão",
                quando: "Cliente já sabe o que quer; basta agilidade na entrega.",
              },
              {
                nome: "Consultivo",
                quando:
                  "Cliente tem dúvida, relato sintoma ou pede sugestão; exige escuta ativa.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente entra na farmácia com ar de dúvida, olhando as prateleiras sem rumo.",
            falaBoa:
              "Bom dia! Seja bem-vindo. Estou aqui se precisar de ajuda. O que está procurando hoje?",
            falaEvitar:
              "Pois não, o que vai levar? (com tom de pressa, sem acolhimento)",
          },
          checklist: [
            "Organizar balcão e validar materiais de apoio.",
            "Cumprimentar com contato visual nos primeiros 3 segundos.",
            "Pergunta aberta: 'Como posso ajudar?' em vez de 'Vai levar o quê?'.",
            "Anotar pontos-chave da queixa do cliente.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente relata reação adversa a medicamento.",
            "Solicitação de informação sobre posologia ou contraindicação.",
            "Cliente em estado de confusão ou desorientação.",
          ],
          errosComuns: [
            "Ignorar o cliente por estar arrumando prateleiras.",
            "Usar tom mecânico: 'Pois não, senhoria' sem olhar nos olhos.",
            "Oferecer produto antes de ouvir a queixa completa.",
          ],
          quiz: [
            q(
              "Qual a primeira ação ao iniciar o expediente no balcão?",
              [
                "Ligar o sistema e verificar o estoque.",
                "Organizar o posto com caneta, receituário e carimbo.",
                "Ler as notícias do dia no celular.",
                "Esperar o primeiro cliente chegar para se preparar.",
              ],
              1,
              "A organização prévia do posto garante agilidade e profissionalismo no primeiro atendimento.",
            ),
            q(
              "Qual a melhor abordagem para um cliente que entra com ar de dúvida?",
              [
                "Perguntar 'Vai levar o quê?' diretamente.",
                "Ignorar e deixar ele se virar.",
                "Cumprimentar e perguntar 'Como posso ajudar?'.",
                "Começar mostrando produtos em promoção.",
              ],
              2,
              "A pergunta aberta acolhe e convida o cliente a expressar sua real necessidade.",
            ),
          ],
          xp: 60,
        },

        // ── Aula 2: Triagem de Cliente ──
        {
          id: "triagem-cliente",
          titulo: "Triagem de Cliente",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Técnicas de escuta ativa para identificar sintomas, histórico e necessidades reais do cliente antes de recomendar.",
          resumoExecutivo: [
            "Perguntas abertas ('O que está sentindo?') revelam mais que perguntas fechadas ('É dor?').",
            "Mapeie há quanto tempo, intensidade e se já tomou algo — são os três pilares da triagem rápida.",
            "Nunca sugira um remédio antes de entender o quadro completo; você não é médico e o farmacêutico é o responsável técnico.",
          ],
          comparativo: {
            titulo: "Pergunta Fechada vs. Aberta na Triagem",
            itens: [
              {
                nome: "Pergunta fechada",
                quando:
                  "Já há suspeita forte e precisa confirmar um ponto específico.",
              },
              {
                nome: "Pergunta aberta",
                quando:
                  "Cliente chega com queixa vaga; quer entender o contexto completo.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Senhora de 50 anos: 'Estou com uma dor de cabeça que não passa, já tomei paracetamol mas voltou.'",
            falaBoa:
              "Entendo. Essa dor começou hoje? O senhor pode descrever melhor — é latejante, aperto ou pontada? Já tomou alguma outra medicação? Essas informações ajudam a entender o que pode ser.",
            falaEvitar:
              "Toma esse Dorflex que passa. (sem investigar histórico ou contraindicações)",
          },
          checklist: [
            "Perguntar 'Há quanto tempo?' para avaliar urgência.",
            "Perguntar 'Já tomou algo?' para evitar duplicidade ou overdose.",
            "Perguntar 'Tem alergia a algum medicamento?' como segurança.",
            "Anotar os sintomas principais para repassar ao farmacêutico se necessário.",
          ],
          quandoChamarFarmaceutico: [
            "Dor intensa, súbita ou com outros sintomas (febre, vômito).",
            "Uso contínuo de medicação que pode interagir.",
            "Cliente grávida ou amamentando com queixa.",
            "Criança com menos de 12 anos com sintomas.",
          ],
          errosComuns: [
            "Pular a triagem e ir direto para a sugestão de produto.",
            "Usar linguagem técnica que o cliente não entende.",
            "Ignorar o histórico de alergias do cliente.",
          ],
          quiz: [
            q(
              "Qual a tríade da triagem rápida no balcão?",
              [
                "Nome, endereço e telefone.",
                "Há quanto tempo, intensidade e o que já tomou.",
                "Cor, peso e altura do cliente.",
                "Marca preferida, preço e forma de pagamento.",
              ],
              1,
              "Tempo, intensidade e medicação prévia são os três pilares para avaliar urgência e evitar riscos.",
            ),
            q(
              "Cliente chega com 'dor nas costas'. Qual a melhor pergunta inicial?",
              [
                "Você quer um relaxante muscular?",
                "Pode me contar como é essa dor e quando começou?",
                "Vou te dar um ibuprofeno que é ótimo.",
                "Isso é normal, não precisa se preocupar.",
              ],
              1,
              "Pergunta aberta convida o cliente a detalhar o quadro, permitindo uma triagem mais precisa.",
            ),
          ],
          xp: 70,
        },

        // ── Aula 3: Dispensação Segura ──
        {
          id: "dispensacao-segura",
          titulo: "Dispensação Segura",
          duracaoMin: 15,
          nivel: "intermediario",
          resumo:
            "Protocolo de checagem dos 7 Certos na dispensação: paciente, medicamento, dose, horário, via, forma e registro.",
          resumoExecutivo: [
            "Confirme o nome completo do paciente na receita e pergunte o nome para o cliente (não presuma).",
            "Verifique a validade, integridade da embalagem e lote do medicamento antes de entregar.",
            "Oriente sobre horários, interações com alimentos e o que fazer em caso de esquecimento de dose.",
          ],
          comparativo: {
            titulo: "Dispensação Simples vs. Dispensação Segura",
            itens: [
              {
                nome: "Simples",
                quando:
                  "MIP (medicamento isento de prescrição) com cliente bem orientado.",
              },
              {
                nome: "Segura (7 Certos)",
                quando:
                  "Medicamento sob prescrição, primeiro uso, polifarmácia ou idoso.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Idoso chega com receita de losartana 50mg: 'Meu médico passou esse aqui, mas não entendi bem como tomar.'",
            falaBoa:
              "Claro, deixa eu ver a receita com o senhor. É um comprimido por dia, de preferência no mesmo horário, pode ser pela manhã. Ele controla a pressão, então não pode pular dias. Se esquecer, toma assim que lembrar, mas se já estiver perto do próximo horário, pula a dose esquecida.",
            falaEvitar:
              "É só tomar um comprimido por dia, está na bula. (sem verificar entendimento ou interações)",
          },
          checklist: [
            "Confirmar nome do paciente na receita x nome declarado.",
            "Validar data da receita (validade da prescrição).",
            "Verificar integridade e validade do medicamento.",
            "Explicar posologia em linguagem clara e simples.",
            "Perguntar se o cliente tem dúvidas antes de finalizar.",
          ],
          quandoChamarFarmaceutico: [
            "Receita com medicamento controlado (tarja preta) que o atendente não pode dispensar sozinho.",
            "Dúvida sobre interação medicamentosa com outros remédios que o cliente já toma.",
            "Cliente analfabeto ou com dificuldade de compreensão que precise de orientação reforçada.",
          ],
          errosComuns: [
            "Entregar medicamento sem conferir o nome do paciente.",
            "Ignorar prazo de validade da receita.",
            "Usar termos técnicos como 'posologia' sem explicar.",
            "Não perguntar se o cliente já usa outros medicamentos.",
          ],
          quiz: [
            q(
              "Quantos 'Certos' compõem o protocolo de dispensação segura?",
              ["3", "5", "7", "10"],
              2,
              "Os 7 Certos são: paciente, medicamento, dose, horário, via, forma farmacêutica e registro.",
            ),
            q(
              "Ao dispensar um medicamento novo para um idoso, qual a conduta essencial?",
              [
                "Entregar e desejar melhoras.",
                "Explicar a posologia de forma clara e perguntar se entendeu.",
                "Pedir para ele ligar para o médico se tiver dúvidas.",
                "Entregar a bula e dizer 'está tudo aqui'.",
              ],
              1,
              "Idosos podem ter dificuldade com informações escritas pequenas; a orientação verbal clara é fundamental para adesão e segurança.",
            ),
          ],
          xp: 80,
        },

        // ── Aula 4: Receituário na Prática ──
        {
          id: "receituario-pratica",
          titulo: "Receituário na Prática",
          duracaoMin: 15,
          nivel: "intermediario",
          resumo:
            "Leitura e interpretação de receitas simples e controladas: identificação de itens, validade, carimbo do médico e itens obrigatórios.",
          resumoExecutivo: [
            "Toda receita precisa ter: nome do paciente, medicamento, concentração, posologia, data e assinatura/carimbo do médico.",
            "Receitas de controlados (B1) valem 30 dias; antibióticos, 10 dias; receitas simples, 90 dias (salvo prazo maior prescrito).",
            "Itens ilegíveis ou ausência de carimbo invalidam a receita — não dispense e oriente o paciente a retornar ao médico.",
          ],
          comparativo: {
            titulo: "Receita Simples vs. Receita Controlada",
            itens: [
              {
                nome: "Receita Simples (Branca)",
                quando:
                  "Medicamentos de tarja vermelha sem retenção; vale até 90 dias.",
              },
              {
                nome: "Receita Controlada (B1/Azul)",
                quando:
                  "Medicamentos de tarja preta (psicotrópicos); vale 30 dias, retém a 1ª via.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Jovem com receita manuscrita: 'Peguei essa receita com o médico do posto, mas não consigo ler o nome do remédio.'",
            falaBoa:
              "Deixa eu dar uma olhada. Realmente está difícil ler aqui. Vou verificar com o farmacêutico se conseguimos identificar pelo contexto. Se não for possível, infelizmente não podemos dispensar — mas você pode voltar ao posto e pedir ao médico para reescrever de forma legível.",
            falaEvitar:
              "Acho que é amoxicilina, leva essa mesma. (supondo o medicamento sem confirmação)",
          },
          checklist: [
            "Identificar nome do paciente e medicamento prescrito.",
            "Conferir data da prescrição e validade conforme tipo de receita.",
            "Verificar presença de carimbo e assinatura do médico.",
            "Confirmar concentração e posologia antes de separar o medicamento.",
            "Receitas controladas: reter 1ª via e registrar no SNGPC.",
          ],
          quandoChamarFarmaceutico: [
            "Receita com rasuras, data vencida ou carimbo ausente.",
            "Dispensação de medicamento controlado (tarja preta).",
            "Dúvida sobre equivalência ou substituição de medicamento prescrito.",
          ],
          errosComuns: [
            "Dispensar medicamento com receita ilegível 'chutando' o que está escrito.",
            "Aceitar foto da receita para medicamento controlado (exige via física).",
            "Ignorar prazo de validade por 'pena' do cliente.",
          ],
          quiz: [
            q(
              "Qual o prazo de validade de uma receita de antibiótico?",
              ["30 dias", "10 dias", "90 dias", "60 dias"],
              1,
              "Receitas de antibióticos valem 10 dias a partir da emissão, conforme RDC 20/2011.",
            ),
            q(
              "O que fazer se a receita estiver sem carimbo do médico?",
              [
                "Dispensar mesmo assim, o que importa é a assinatura.",
                "Não dispensar e orientar o cliente a voltar ao médico.",
                "Carimbar você mesmo com o nome da farmácia.",
                "Aceitar se o cliente disser que conhece o médico.",
              ],
              1,
              "Sem carimbo não é possível validar o CRM do prescritor — a dispensação é proibida.",
            ),
          ],
          xp: 80,
        },

        // ── Aula 5: Perfumaria na Prática ──
        {
          id: "perfumaria-pratica",
          titulo: "Perfumaria na Prática",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Recomendação consultiva de perfumes, hidratantes e cosméticos: famílias olfativas, tipos de pele e argumentação técnica.",
          resumoExecutivo: [
            "As principais famílias olfativas são: floral, cítrica, amadeirada, oriental e fougère — cada uma combina com um perfil e ocasião.",
            "Para hidratantes, identifique o tipo de pele (seca, oleosa, mista ou sensível) antes de recomendar a textura (creme, loção, gel).",
            "No balcão, nunca force uma marca — ouça a preferência do cliente e ofereça opções dentro do orçamento dele.",
          ],
          comparativo: {
            titulo: "Eau de Toilette vs. Eau de Parfum vs. Perfume",
            itens: [
              {
                nome: "Eau de Toilette (EDT)",
                quando:
                  "Uso diário, clima quente, quem prefere fragrância mais leve; dura 3-4h.",
              },
              {
                nome: "Eau de Parfum (EDP)",
                quando:
                  "Ocasiões especiais, clima ameno, maior fixação; dura 6-8h.",
              },
              {
                nome: "Perfume (Extrait)",
                quando:
                  "Eventos noturnos, alta concentração de óleos; fixação acima de 8h.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Moça de 25 anos: 'Quero um perfume que dure o dia todo, mas não seja muito forte. Vou usá-lo no trabalho.'",
            falaBoa:
              "Entendi! Perfumes cítricos ou florais suaves Eau de Parfum costumam ter boa fixação sem serem marcantes. Deixa eu te mostrar algumas opções nessa linha que podem funcionar bem no dia a dia do escritório.",
            falaEvitar:
              "Esse perfume aqui é o mais caro e o melhor. Leva ele. (sem considerar preferência ou ocasião)",
          },
          checklist: [
            "Perguntar ocasião de uso (dia a dia, evento, trabalho, noite).",
            "Identificar preferência olfativa (floral, amadeirado, cítrico).",
            "Oferecer amostra ou borrifada no papel para teste.",
            "Explicar diferença entre EDT e EDP conforme necessidade de fixação.",
            "Respeitar o orçamento declarado pelo cliente.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com alergia ou irritação na pele ao usar perfumes.",
            "Dúvida sobre composição de fragrância para cliente gestante.",
            "Reação adversa a cosmético (vermelhidão, coceira, descamação).",
          ],
          errosComuns: [
            "Insistir em perfume caro quando o cliente pediu algo acessível.",
            "Ignorar que o cliente pode ter alergia a determinadas notas.",
            "Sugerir EDT para quem quer alta fixação, sem explicar a diferença.",
          ],
          quiz: [
            q(
              "Qual a diferença principal entre Eau de Toilette e Eau de Parfum?",
              [
                "A cor do frasco.",
                "A concentração de óleos essenciais e tempo de fixação.",
                "O país de origem.",
                "O tipo de borrifador.",
              ],
              1,
              "EDP tem maior concentração de óleos (15-20%) que EDT (5-15%), resultando em maior fixação.",
            ),
            q(
              "Cliente pede 'um hidratante que não fique pegajoso'. Qual textura recomendar?",
              [
                "Creme hidratante denso.",
                "Loção ou gel hidratante oil-free.",
                "Óleo corporal.",
                "Balm hidratante.",
              ],
              1,
              "Loções e géis oil-free têm toque seco e são absorvidos rapidamente, ideais para quem não gosta de sensação pegajosa.",
            ),
          ],
          xp: 65,
        },

        // ── Aula 6: Medicamentos na Prática ──
        {
          id: "medicamentos-pratica",
          titulo: "Medicamentos na Prática",
          duracaoMin: 15,
          nivel: "avancado",
          resumo:
            "Orientações práticas sobre as principais classes de medicamentos de balcão: anti-inflamatórios, analgésicos, antigripais e antiácidos.",
          resumoExecutivo: [
            "Anti-inflamatórios (ibuprofeno, naproxeno, cetoprofeno) agem na inflamação e dor; contraindicados para úlcera, asma e hipertensos não controlados.",
            "Analgésicos (paracetamol, dipirona) são para dor sem inflamação; paracetamol é mais seguro para hipertensos mas tóxico ao fígado em altas doses.",
            "Antigripais combinados podem conter múltiplos princípios ativos — cuidado com duplicidade se o cliente já toma outro remédio com o mesmo componente.",
          ],
          comparativo: {
            titulo: "Analgésico vs. Anti-inflamatório vs. Relaxante Muscular",
            itens: [
              {
                nome: "Analgésico (Paracetamol, Dipirona)",
                quando:
                  "Dor leve a moderada sem inflamação evidente (dor de cabeça tensional, cólica leve).",
              },
              {
                nome: "Anti-inflamatório (Ibuprofeno, Cetoprofeno)",
                quando:
                  "Dor com inflamação (dor de garganta, contusão, dor muscular inflamatória).",
              },
              {
                nome: "Relaxante Muscular (Ciclobenzaprina, Torsilax)",
                quando:
                  "Contratura muscular, torcicolo, lombalgia aguda com espasmo.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Senhor de 60 anos: 'Estou com dor no joelho, já tomei paracetamol mas não melhorou. Será que preciso de algo mais forte?'",
            falaBoa:
              "Entendo. Se o paracetamol não melhorou, pode ser uma dor inflamatória. Mas antes de sugerir algo, o senhor tem pressão alta, problema no estômago ou toma algum remédio contínuo? Anti-inflamatórios não são indicados em alguns casos. Vou chamar o farmacêutico para avaliar melhor.",
            falaEvitar:
              "Toma esse ibuprofeno que é mais forte. (sem perguntar sobre comorbidades ou medicações em uso)",
          },
          checklist: [
            "Perguntar sobre comorbidades (hipertensão, diabetes, úlcera, asma).",
            "Listar medicações contínuas do cliente para evitar interações.",
            "Identificar se a dor é inflamatória ou não para guiar a recomendação.",
            "Explicar horário de tomada e se deve ser com ou sem alimento.",
            "Orientar tempo máximo de uso sem reavaliação médica (3-5 dias).",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com contraindicação clara a anti-inflamatórios (úlcera, asma, insuficiência renal).",
            "Uso contínuo de anticoagulante, AAS ou corticoides.",
            "Dose acima do recomendado para automedicação.",
            "Dor persistente por mais de 5 dias.",
          ],
          errosComuns: [
            "Recomendar anti-inflamatório para cliente com úlcera gástrica sem questionar.",
            "Ignorar que paracetamol já está presente em outros medicamentos que o cliente toma.",
            "Sugerir 'o mais forte' sem avaliar as contraindicações individuais.",
          ],
          quiz: [
            q(
              "Qual a principal contraindicação do ibuprofeno?",
              [
                "Diabetes tipo 2.",
                "Histórico de úlcera gástrica ou gastrite.",
                "Hipotireoidismo.",
                "Asma leve controlada.",
              ],
              1,
              "Anti-inflamatórios não esteroidais (AINEs) como ibuprofeno são contraindicados em úlcera péptica ativa e gastrite erosiva.",
            ),
            q(
              "Cliente idoso com dor no joelho já toma AAS. Por que isso é relevante?",
              [
                "Não é relevante, AAS não interfere.",
                "AAS é anti-inflamatório e junto com outro AINE aumenta risco de sangramento gástrico.",
                "AAS potencializa o efeito do anti-inflamatório, melhorando o resultado.",
                "AAS anula o efeito do anti-inflamatório.",
              ],
              1,
              "A combinação de AINEs com AAS eleva significativamente o risco de hemorragia digestiva, especialmente em idosos.",
            ),
          ],
          xp: 85,
        },
      ],
    },

    // ── Módulo 2 ──────────────────────────────────────────────────────────
    {
      id: "simulacao-balcao",
      titulo: "Simulação de Balcão",
      descricao:
        "Situações reais do dia a dia no balcão: atendimento completo, cliente difícil, emergência, prescrição irregular e cross-sell ético.",
      aulas: [
        // ── Aula 7: Atendimento Completo ──
        {
          id: "atendimento-completo",
          titulo: "Atendimento Completo",
          duracaoMin: 20,
          nivel: "avancado",
          resumo:
            "Simulação de atendimento completo do início ao fim: acolhimento, triagem, recomendação, dispensação e fechamento com fidelização.",
          resumoExecutivo: [
            "O atendimento completo segue o ciclo: Acolher → Triar → Recomendar → Dispensar → Orientar → Fidelizar.",
            "Cada etapa tem um objetivo específico; pular etapas reduz a qualidade e a segurança do atendimento.",
            "O fechamento deve incluir um convite para retorno e, quando pertinente, o cadastro no programa de fidelidade.",
          ],
          comparativo: {
            titulo: "Atendimento Rápido vs. Atendimento Completo",
            itens: [
              {
                nome: "Rápido (transacional)",
                quando:
                  "Cliente com pressa que já sabe exatamente o que quer; fila grande.",
              },
              {
                nome: "Completo (consultivo)",
                quando:
                  "Cliente com dúvida, queixa de saúde ou primeira vez na farmácia.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Pai de primeira viagem: 'Minha filha de 2 anos está com febre e tosse há dois dias. O que posso dar?'",
            falaBoa:
              "Vamos com calma. Primeiro, qual a temperatura que você mediu? Ela está vomitando ou teve diarreia? Para febre infantil, o recomendado é paracetamol ou ibuprofeno na dose certa para o peso dela. Mas como é uma criança pequena, vou chamar o farmacêutico para garantir a orientação correta. Vou trazer um antitérmico infantil enquanto isso.",
            falaEvitar:
              "Dá Nessehaler e antitérmico que melhora. (sem perguntar peso, idade exata ou outros sintomas)",
          },
          checklist: [
            "Acolher com calma e contato visual.",
            "Triar: sintomas, tempo, intensidade, medicações já usadas.",
            "Identificar se o caso pode ser resolvido no balcão ou precisa do farmacêutico.",
            "Recomendar com explicação clara do porquê da escolha.",
            "Orientar posologia, horários e sinais de alerta.",
            "Convidar para retornar se não houver melhora em até 48h.",
          ],
          quandoChamarFarmaceutico: [
            "Crianças com menos de 6 anos com sintomas que não melhoram.",
            "Febre alta (>39°C) persistente por mais de 48h.",
            "Cliente idoso com múltiplas comorbidades e polifarmácia.",
            "Qualquer caso de criança ou gestante com febre.",
          ],
          errosComuns: [
            "Recomendar para criança sem saber o peso exato.",
            "Ignorar que xaropes e antitérmicos podem ter o mesmo princípio ativo.",
            "Não orientar sinais de alerta que merecem pronto-socorro.",
          ],
          quiz: [
            q(
              "Qual a primeira etapa do ciclo de atendimento completo?",
              [
                "Recomendar o medicamento.",
                "Acolher o cliente.",
                "Dispensar o produto.",
                "Fidelizar o cliente.",
              ],
              1,
              "O acolhimento é a base de todo atendimento consultivo — sem ele, o cliente não se sente seguro para compartilhar suas necessidades.",
            ),
            q(
              "Ao atender uma criança com febre, qual informação é indispensável?",
              [
                "O nome completo da mãe.",
                "O peso exato da criança.",
                "A marca do termômetro usado.",
                "O plano de saúde da família.",
              ],
              1,
              "A dose de antitérmicos infantis é calculada com base no peso, não na idade. Sem o peso, não se pode recomendar a dose segura.",
            ),
          ],
          xp: 100,
        },

        // ── Aula 8: Cliente Difícil ──
        {
          id: "cliente-dificil",
          titulo: "Cliente Difícil",
          duracaoMin: 15,
          nivel: "avancado",
          resumo:
            "Técnicas de comunicação não violenta para lidar com cliente irritado, impaciente ou agressivo no balcão da farmácia.",
          resumoExecutivo: [
            "Nunca reaja à agressividade com agressividade — a pessoa está brava com a situação, não com você.",
            "Use a técnica do 'acolhimento da queixa': escute sem interromper, mostre que entendeu e proponha uma solução.",
            "Estabeleça limites claros: 'Estou aqui para ajudar, mas preciso que fale com calma para eu entender melhor.'",
          ],
          comparativo: {
            titulo: "Reatividade vs. Acolhimento",
            itens: [
              {
                nome: "Reatividade",
                quando:
                  "Cliente está agressivo e você responde no mesmo tom; a situação escala.",
              },
              {
                nome: "Acolhimento",
                quando:
                  "Cliente está alterado mas você mantém a calma, escuta e oferece solução.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Homem visivelmente irritado: 'Já estou esperando há 15 minutos! Ninguém me atende, essa farmácia é um deserto! Vou reclamar no SAC!'",
            falaBoa:
              "Senhor, peço desculpas pela demora. O senhor tem toda razão em ficar incomodado. Vou priorizar seu atendimento agora. O que o senhor precisa hoje? (tom calmo e postura aberta)",
            falaEvitar:
              "Calma, senhor. Fica bravo não, que piora. Tem outros clientes também. (tom de deboche ou confronto)",
          },
          checklist: [
            "Respirar fundo antes de responder.",
            "Pedir desculpas pela situação (não necessariamente pela culpa).",
            "Usar tom de voz baixo e calmo.",
            "Oferecer solução prática imediata.",
            "Se a agressividade persistir, chamar o gerente ou farmacêutico.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente faz ameaças ou usa linguagem ofensiva grave.",
            "Cliente questiona a conduta técnica do atendente sobre medicamentos.",
            "Cliente solicita falar com o responsável técnico.",
            "Situação de escalada que o atendente não consegue controlar.",
          ],
          errosComuns: [
            "Revidar com ironia ou sarcasmo.",
            "Ignorar o cliente e continuar fazendo outra tarefa.",
            "Chamar segurança antes de tentar o acolhimento.",
            "Falar 'se acalma' — isso sempre piora a situação.",
          ],
          quiz: [
            q(
              "Qual a primeira atitude ao lidar com um cliente irritado?",
              [
                "Explicar que ele está errado.",
                "Chamar o gerente imediatamente.",
                "Respirar fundo, ouvir sem interromper e acolher a queixa.",
                "Ignorar e esperar ele se acalmar sozinho.",
              ],
              2,
              "Acolher a queixa sem interromper desarma a tensão e mostra que você se importa com o problema do cliente.",
            ),
            q(
              "Por que dizer 'se acalma' para um cliente irritado é contraproducente?",
              [
                "Porque ele vai se acalmar mais rápido.",
                "Porque soa como ordem ou desrespeito ao sentimento dele.",
                "Porque é uma frase muito longa.",
                "Porque só o gerente pode pedir calma.",
              ],
              1,
              "'Se acalma' invalida o sentimento do cliente e geralmente tem efeito contrário, aumentando a irritação.",
            ),
          ],
          xp: 90,
        },

        // ── Aula 9: Emergência no Balcão ──
        {
          id: "emergencia-balcao",
          titulo: "Emergência no Balcão",
          duracaoMin: 15,
          nivel: "avancado",
          resumo:
            "Identificação de sinais de emergência no balcão: reação alérgica, desmaio, convulsão e engasgo — quando e como agir.",
          resumoExecutivo: [
            "Os sinais de anafilaxia são: inchaço súbito nos lábios/pescoço, dificuldade para respirar e queda de pressão — acione o SAMU (192) imediatamente.",
            "Em caso de desmaio: deite a pessoa de lado (posição de recuperação), afrouxe roupas e chame ajuda. Nunca dê nada para beber.",
            "Você não é profissional de emergência: seu papel é reconhecer o sinal, chamar socorro e manter a cena segura até a chegada do resgate.",
          ],
          comparativo: {
            titulo: "Urgência vs. Emergência no Balcão",
            itens: [
              {
                nome: "Urgência",
                quando:
                  "Pressão alta sem sintomas graves, corte superficial, mal-estar leve — pode aguardar atendimento.",
              },
              {
                nome: "Emergência",
                quando:
                  "Anafilaxia, convulsão, desmaio súbito, engasgo com cianose — necessidade de intervenção imediata e SAMU.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente começa a coçar os olhos e o pescoço após tomar um anti-inflamatório no balcão: 'Estou me sentindo estranho, minha garganta está fechando.'",
            falaBoa:
              "Imediatamente: 'Você está tendo uma reação alérgica grave. Vou chamar o SAMU agora. Senta aqui, vou ficar com você. Alguém traz a caneta de adrenalina se tivermos!' (grita para outro funcionário chamar 192 enquanto mantém contato com o cliente)",
            falaEvitar:
              "Deve ser só nervosismo, senta aqui um pouco que passa. (subestimar sinais de anafilaxia)",
          },
          checklist: [
            "Reconhecer sinais de emergência: dificuldade respiratória, inchaço facial, perda de consciência.",
            "Acionar SAMU (192) imediatamente sem hesitar.",
            "Manter o cliente em posição segura (deitado de lado se inconsciente).",
            "Solicitar ajuda de outros funcionários para desobstruir área e buscar kit de emergência.",
            "Não administrar nada por via oral enquanto aguarda socorro.",
          ],
          quandoChamarFarmaceutico: [
            "Emergências o farmacêutico também deve ser acionado, mas o SAMU tem prioridade.",
            "Qualquer reação adversa a medicamento no momento da dispensação.",
            "Farmacêutico pode administrar adrenalina se houver protocolo da farmácia.",
          ],
          errosComuns: [
            "Achar que 'não é nada grave' e não chamar socorro a tempo.",
            "Dar água para a pessoa desmaiada (risco de aspiração).",
            "Tentar fazer a pessoa vomitar em caso de engasgo (manobra de Heimlich é a correta).",
            "Deixar o cliente sozinho enquanto espera o socorro.",
          ],
          quiz: [
            q(
              "Qual o primeiro sinal de anafilaxia que deve acionar o alarme?",
              [
                "Dor de cabeça leve.",
                "Espirros isolados.",
                "Inchaço nos lábios e/ou dificuldade para respirar.",
                "Tontura passageira.",
              ],
              2,
              "Inchaço súbito em face/lábios/pescoço associado a dificuldade respiratória é sinal clássico de anafilaxia e exige SAMU imediato.",
            ),
            q(
              "O que fazer se um cliente desmaiar no balcão?",
              [
                "Dar água para ele beber quando acordar.",
                "Deitar de lado (posição de recuperação) e chamar socorro.",
                "Jogar água fria no rosto.",
                "Sacudir a pessoa para acordá-la.",
              ],
              1,
              "Posição de recuperação (de lado) mantém vias aéreas livres e previne aspiração em caso de vômito, enquanto o socorro é chamado.",
            ),
          ],
          xp: 95,
        },

        // ── Aula 10: Prescrição Irregular ──
        {
          id: "prescricao-irregular",
          titulo: "Prescrição Irregular",
          duracaoMin: 15,
          nivel: "avancado",
          resumo:
            "Identificação de irregularidades em receitas: rasuras, prazo vencido, ausência de carimbo, itens controlados sem notificação e falsificações suspeitas.",
          resumoExecutivo: [
            "Rasuras invalidam a receita — a legislação não permite dispensar com correções manuais não rubricadas pelo prescritor.",
            "Receitas com carimbo ilegível, CRM faltando dígitos ou data futura são bandeiras vermelhas.",
            "Em caso de suspeita de falsificação, mantenha a receita, avise o farmacêutico e, se confirmado, registre a ocorrência.",
          ],
          comparativo: {
            titulo: "Irregularidade Sanável vs. Insanável",
            itens: [
              {
                nome: "Sanável (com farmacêutico)",
                quando:
                  "Falta data, horário de tomada incompleto ou posologia genérica — o farmacêutico pode contatar o prescritor.",
              },
              {
                nome: "Insanável",
                quando:
                  "Rasura sem rubrica, carimbo ausente, data vencida, suspeita de falsificação — não pode ser dispensada.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Receita de clonazepam 2mg com data de dois meses atrás, levemente rasurada na dosagem: 'O médico disse que era para eu tomar dois comprimidos agora, mas na receita está meio apagado.'",
            falaBoa:
              "Percebo que esta receita tem alguns pontos que precisamos verificar. A data já venceu há dois meses e há uma rasura na dosagem. Infelizmente não posso dispensar assim. Você precisa voltar ao médico para reavaliar e emitir uma nova receita válida, combinado?",
            falaEvitar:
              "Ah, uma rasura pequena não tem problema, levo assim mesmo. (ignorar a legislação)",
          },
          checklist: [
            "Verificar data de emissão e validade conforme o tipo da receita.",
            "Inspecionar rasuras e se estão rubricadas pelo médico.",
            "Conferir carimbo legível com CRM e especialidade.",
            "Validar nome do paciente e medicamento prescrito.",
            "Em caso de suspeita, chamar farmacêutico sem alertar o cliente.",
          ],
          quandoChamarFarmaceutico: [
            "Qualquer irregularidade na receita — a decisão final é do farmacêutico.",
            "Suspeita de falsificação (papel, fonte, timbre diferentes do padrão).",
            "Receita controlada com indícios de adulteração.",
            "Cliente insistindo para dispensar mesmo com irregularidades.",
          ],
          errosComuns: [
            "Aceitar receita vencida 'porque o cliente disse que o médico autorizou por telefone'.",
            "Ignorar rasuras para não 'perder a venda'.",
            "Dispensar controlado com receita simples (branca) em vez da azul (B1).",
          ],
          quiz: [
            q(
              "Uma receita com rasura pode ser dispensada?",
              [
                "Sim, se a rasura for pequena.",
                "Sim, se o cliente explicar o que estava escrito.",
                "Não, a menos que o médico rubrique a rasura.",
                "Sim, se o farmacêutico autorizar verbalmente.",
              ],
              2,
              "Rasuras só são aceitas se rubricadas pelo prescritor. Caso contrário, a receita é inválida.",
            ),
            q(
              "Qual a principal bandeira vermelha de falsificação em receitas controladas?",
              [
                "Letra bonita e legível.",
                "Receita em papel timbrado diferente do habitualmente usado na região.",
                "Medicamento de baixo custo.",
                "Receita com data do dia anterior.",
              ],
              1,
              "Diferenças no padrão do papel, timbre, fonte ou carimbo podem indicar falsificação e devem ser investigadas pelo farmacêutico.",
            ),
          ],
          xp: 90,
        },

        // ── Aula 11: Cross-Sell Ético ──
        {
          id: "cross-sell-etico",
          titulo: "Cross-Sell Ético",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Técnicas de recomendação complementar com foco na necessidade real do cliente, sem empurrar produtos desnecessários.",
          resumoExecutivo: [
            "Cross-sell ético é oferecer algo que complemente o tratamento ou melhore a experiência — nunca algo que o cliente não precisa.",
            "Exemplos éticos: ao vender antigripal, sugerir soro fisiológico e vitamina C; ao vender fralda geriátrica, sugerir pomada para assaduras.",
            "A pergunta mágica do cross-sell: 'Para melhorar o resultado do seu tratamento, posso sugerir algo adicional?'",
          ],
          comparativo: {
            titulo: "Cross-Sell Predatório vs. Ético",
            itens: [
              {
                nome: "Predatório",
                quando:
                  "Forçar produtos caros ou desnecessários para bater meta; cliente se sente enganado.",
              },
              {
                nome: "Ético",
                quando:
                  "Oferecer complemento útil que agregue valor ao tratamento ou ao bem-estar do cliente.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Comprou uma caixa de antigripal e está indo embora: 'É só isso mesmo, obrigado.'",
            falaBoa:
              "Só mais uma coisa: como você está gripado, posso sugerir um soro fisiológico para lavar o nariz e uma vitamina C para dar aquela força no sistema imunológico. Não é obrigatório, mas pode ajudar na recuperação. O que acha?",
            falaEvitar:
              "Olha, leva também esse xarope caro e esse probiótico — vai sair tudo mais saudável. (oferta agressiva sem conexão com a real necessidade)",
          },
          checklist: [
            "Identificar uma necessidade complementar real à compra principal.",
            "Apresentar a sugestão como opção, não como imposição.",
            "Explicar o benefício do produto complementar.",
            "Respeitar o 'não' do cliente sem insistir.",
            "Manter o tom consultivo, não de vendedor agressivo.",
          ],
          quandoChamarFarmaceutico: [
            "Dúvida se o complemento sugerido pode interagir com medicação principal.",
            "Cliente com múltiplas condições de saúde — avaliar se a sugestão é segura.",
            "Cliente questiona se realmente precisa do complemento.",
          ],
          errosComuns: [
            "Sugerir itens caros sem explicar o benefício real.",
            "Insistir após o cliente dizer não.",
            "Indicar complemento que não tem relação com a necessidade do cliente.",
            "Usar frases manipulativas: 'Você não vai querer ficar doente de novo, né?'",
          ],
          quiz: [
            q(
              "O que diferencia cross-sell ético de cross-sell predatório?",
              [
                "O preço do produto sugerido.",
                "A intenção de atender uma necessidade real versus forçar uma venda desnecessária.",
                "A marca do produto.",
                "O horário do atendimento.",
              ],
              1,
              "Cross-sell ético agrega valor ao tratamento do cliente; o predatório visa apenas o valor da venda, ignorando a real necessidade.",
            ),
            q(
              "Cliente compra protetor solar. Qual seria um cross-sell ético?",
              [
                "Um perfume importado de R$ 400.",
                "Um pós-sol calmante ou um hidratante facial com antioxidante.",
                "Um antibiótico.",
                "Um suplemento para ganho de massa muscular.",
              ],
              1,
              "Pós-sol e hidratante facial complementam o cuidado com a pele exposta ao sol — cross-sell ético e relevante.",
            ),
          ],
          xp: 70,
        },
      ],
    },

    // ── Módulo 3 ──────────────────────────────────────────────────────────
    {
      id: "projetos-certificacao",
      titulo: "Projetos e Certificação",
      descricao:
        "Portfólio de projetos, estudo de caso integrado, revisão geral, simulado final e certificação da trilha.",
      aulas: [
        // ── Aula 12: Portfólio de Projetos ──
        {
          id: "portfolio-projetos",
          titulo: "Portfólio de Projetos",
          duracaoMin: 12,
          nivel: "intermediario",
          resumo:
            "Como documentar projetos práticos realizados durante a trilha para compor o portfólio profissional do atendente de farmácia.",
          resumoExecutivo: [
            "Seu portfólio deve incluir: casos de atendimento, projetos de melhoria no balcão e certificados parciais.",
            "Cada projeto deve ter: contexto, ação realizada, resultado e aprendizado — a estrutura CAR (Contexto-Ação-Resultado).",
            "Portfólios bem documentados são diferenciais em processos seletivos e avaliações de desempenho.",
          ],
          comparativo: {
            titulo: "Currículo vs. Portfólio",
            itens: [
              {
                nome: "Currículo",
                quando:
                  "Lista de experiências e formações; mostra o que você fez.",
              },
              {
                nome: "Portfólio",
                quando:
                  "Evidências e resultados de projetos; mostra como você fez e o que aprendeu.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Potencial empregador: 'Me conte um momento em que você fez a diferença no atendimento.'",
            falaBoa:
              "Sim, em uma ocasião uma cliente idosa chegou confusa com a receita de anticoagulante. Usei o protocolo de dispensação segura, expliquei em linguagem simples, desenhei os horários e chamei o farmacêutico para reforçar. A cliente voltou uma semana depois agradecendo — estava tomando corretamente e o exame de INR já estava na meta.",
            falaEvitar:
              "Eu sempre atendo bem. (sem exemplo concreto ou resultado mensurável)",
          },
          checklist: [
            "Selecionar 3-5 casos ou projetos mais significativos da trilha.",
            "Estruturar cada um com Contexto, Ação e Resultado.",
            "Incluir dados objetivos quando possível (ex: 'reduziu em 30% o tempo de espera').",
            "Revisar a escrita com clareza e profissionalismo.",
            "Manter o portfólio atualizado a cada novo aprendizado.",
          ],
          quandoChamarFarmaceutico: [
            "N/A — esta aula é sobre organização profissional; o farmacêutico pode revisar portfólios técnicos se solicitado.",
          ],
          errosComuns: [
            "Portfólio muito genérico, sem exemplos concretos.",
            "Focar apenas em resultados de venda sem mencionar qualidade do atendimento.",
            "Não revisar erros de português e formatação.",
          ],
          quiz: [
            q(
              "Qual a estrutura recomendada para descrever um projeto no portfólio?",
              [
                "Título, data e assinatura.",
                "Contexto, Ação e Resultado (CAR).",
                "Orçamento, prazo e equipe.",
                "Nome do cliente, valor da venda e desconto dado.",
              ],
              1,
              "A estrutura CAR (Contexto-Ação-Resultado) é a mais eficaz para demonstrar competências de forma objetiva.",
            ),
            q(
              "Qual o principal benefício de um portfólio bem elaborado?",
              [
                "Substituir o diploma de farmácia.",
                "Ser um diferencial competitivo em processos seletivos.",
                "Garantir aumento salarial automático.",
                "Evitar entrevistas de emprego.",
              ],
              1,
              "Portfólios com evidências concretas mostram na prática suas competências, destacando você de outros candidatos.",
            ),
          ],
          xp: 65,
        },

        // ── Aula 13: Estudo de Caso ──
        {
          id: "estudo-caso",
          titulo: "Estudo de Caso",
          duracaoMin: 20,
          nivel: "avancado",
          resumo:
            "Análise aprofundada de um caso real de farmácia: cliente polimedicado com dúvidas, interação medicamentosa e abordagem multidisciplinar.",
          resumoExecutivo: [
            "Casos complexos exigem olhar sistêmico: não é só 'qual remédio vender', mas entender o contexto: comorbidades, medicamentos em uso, adesão e fatores socioeconômicos.",
            "O farmacêutico é o líder técnico, mas o atendente é o olho clínico no balcão — muitas vezes você identifica o problema primeiro.",
            "Documentar o caso gera aprendizado e pode virar protocolo para toda a equipe.",
          ],
          comparativo: {
            titulo: "Caso Simples vs. Caso Complexo",
            itens: [
              {
                nome: "Caso simples",
                quando:
                  "Cliente jovem, saudável, com queixa única e sem medicação contínua.",
              },
              {
                nome: "Caso complexo",
                quando:
                  "Idoso polimedicado (>5 remédios), múltiplas comorbidades, dúvida sobre adesão ou interação.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Senhora de 72 anos com sacola cheia de remédios: 'Moça, meu médico passou esse novo aqui mas já tomo uns 4 comprimidos por dia. Será que pode misturar tudo? Não aguento mais tomar tanta coisa.'",
            falaBoa:
              "Entendo, dona Maria. Vamos com calma — vou pegar um papel e a gente lista todos os medicamentos que a senhora toma. Depois chamo o farmacêutico para revisar se esse novo remédio interage com os outros. Também posso ver se algum deles pode ser tomado no mesmo horário para facilitar a rotina. A senhora tem sentido algum efeito diferente?",
            falaEvitar:
              "Pode tomar tudo junto sim, só separar os horários. (sem revisar interações ou ouvir as preocupações da cliente)",
          },
          checklist: [
            "Listar todos os medicamentos que o cliente usa (nome, dose, horário).",
            "Identificar possíveis duplicidades ou interações.",
            "Avaliar a adesão do cliente ao tratamento (toma todos os dias? Sabe para que serve cada um?).",
            "Chamar o farmacêutico para revisão final.",
            "Oferecer soluções práticas: organizador de remédios, alarme no celular, cartão de horários.",
          ],
          quandoChamarFarmaceutico: [
            "Sempre em casos de polimedicados (5+ medicamentos).",
            "Suspeita de interação medicamentosa grave.",
            "Cliente relata efeitos colaterais que podem estar relacionados a novos medicamentos.",
            "Dificuldade de adesão ao tratamento por questões de esquecimento ou confusão.",
          ],
          errosComuns: [
            "Não perguntar sobre todos os remédios que o cliente toma — apenas os que comprou ali.",
            "Subestimar o impacto emocional da polifarmácia no idoso.",
            "Não encaminhar ao farmacêutico por achar que 'já resolveu'.",
          ],
          quiz: [
            q(
              "O que significa 'polimedicado'?",
              [
                "Cliente que toma medicamento uma vez por dia.",
                "Cliente que usa 5 ou mais medicamentos regularmente.",
                "Cliente que só compra genéricos.",
                "Cliente que toma chás junto com remédios.",
              ],
              1,
              "Polimedicado é o paciente em uso de múltiplos medicamentos (≥5), comum em idosos e que exige atenção redobrada do farmacêutico.",
            ),
            q(
              "Qual o primeiro passo ao atender um cliente polimedicado?",
              [
                "Vender o remédio mais caro da lista.",
                "Fazer uma lista completa de todos os medicamentos que ele toma.",
                "Pedir para ele escolher os dois mais importantes.",
                "Dizer que não há problema em misturar tudo.",
              ],
              1,
              "O primeiro passo é mapear todo o arsenal terapêutico do cliente para avaliar interações, duplicidades e adesão.",
            ),
          ],
          xp: 100,
        },

        // ── Aula 14: Revisão Geral ──
        {
          id: "revisao-geral",
          titulo: "Revisão Geral",
          duracaoMin: 15,
          nivel: "intermediario",
          resumo:
            "Revisão integrada dos principais conceitos das duas trilhas anteriores: atendimento consultivo, legislação básica, dispensação e cross-sell ético.",
          resumoExecutivo: [
            "Atendimento consultivo: acolher → triar → recomendar → dispensar → orientar → fidelizar — o ciclo completo.",
            "Legislação básica: validade de receitas (10 dias antibiótico, 30 dias controlado, 90 dias simples), carimbo obrigatório, proibição de dispensar com rasura.",
            "Cross-sell ético: complemento com base em necessidade real, não em meta de venda.",
          ],
          comparativo: {
            titulo: "Revisão Passiva vs. Revisão Ativa",
            itens: [
              {
                nome: "Revisão Passiva (relendo anotações)",
                quando:
                  "Primeiro contato com o material; ler para reconhecer conceitos.",
              },
              {
                nome: "Revisão Ativa (respondendo questões)",
                quando:
                  "Já estudou uma vez; responder perguntas sem consultar o material fixa o aprendizado.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Cliente que já foi atendido antes: 'Lembra de mim? Você me ajudou com a pressão na semana passada. Hoje vim pegar a receita do meu neto.'",
            falaBoa:
              "Claro que lembro da senhora! Que bom vê-la de volta. Como está a pressão? E sobre a receita do seu neto, pode me mostrar? Assim já confiro tudo certinho para a senhora.",
            falaEvitar:
              "Não lembro não, aqui passa muita gente. (perder a oportunidade de fidelizar)",
          },
          checklist: [
            "Revisar o ciclo completo de atendimento consultivo.",
            "Refrescar prazos de validade de receitas (10/30/90 dias).",
            "Relembrar os 7 Certos da dispensação segura.",
            "Praticar mentalmente situações de emergência no balcão.",
            "Revisar técnicas de cross-sell ético.",
          ],
          quandoChamarFarmaceutico: [
            "Dúvida na revisão que envolva legislação específica ou conduta técnica.",
            "N/A — aula de revisão; o farmacêutico pode ser consultado para tirar dúvidas.",
          ],
          errosComuns: [
            "Apenas reler passivamente sem responder questões práticas.",
            "Pular a revisão achando que 'já sabe tudo'.",
            "Não anotar dúvidas para esclarecer com o farmacêutico.",
          ],
          quiz: [
            q(
              "Qual a validade de uma receita de medicamento controlado (tarja preta)?",
              ["10 dias", "30 dias", "60 dias", "90 dias"],
              1,
              "Receitas de medicamentos controlados (Lista B1/azul) têm validade de 30 dias a partir da emissão.",
            ),
            q(
              "O que significa a sigla CAR na estrutura de portfólio?",
              [
                "Cliente, Atendimento, Retorno.",
                "Contexto, Ação, Resultado.",
                "Custo, Avaliação, Risco.",
                "Controle, Aderência, Revisão.",
              ],
              1,
              "CAR = Contexto, Ação, Resultado — metodologia para estruturar exemplos e cases no portfólio profissional.",
            ),
          ],
          xp: 70,
        },

        // ── Aula 15: Simulado Final ──
        {
          id: "simulado-final",
          titulo: "Simulado Final",
          duracaoMin: 20,
          nivel: "avancado",
          resumo:
            "Simulado completo com 10 questões integradoras cobrando todos os módulos da trilha — atendimento, legislação, emergência e ética profissional.",
          resumoExecutivo: [
            "O simulado recredencia os conteúdos de forma integrada, como aparecerão no dia a dia do balcão.",
            "Responda sem consultar material para testar seu conhecimento real.",
            "Cada erro é oportunidade de aprendizado — revise a explicação de cada questão após o simulado.",
          ],
          comparativo: {
            titulo: "Estudo Tradicional vs. Simulado",
            itens: [
              {
                nome: "Estudo Tradicional",
                quando:
                  "Aprendendo um tópico novo, precisa de leitura e exemplos.",
              },
              {
                nome: "Simulado",
                quando:
                  "Já estudou todo o conteúdo; testa retenção e identificação de lacunas.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Simulação de balcão completo: 'Bom dia! Minha esposa está com suspeita de dengue — febre alta, dor no corpo e manchas. Ela já está no médico, mas me pediu para comprar algo para baixar a febre.'",
            falaBoa:
              "Bom dia! Em casos de suspeita de dengue, um alerta importante: não pode usar anti-inflamatórios (ibuprofeno, AAS), pois aumentam o risco de hemorragia. O recomendado é paracetamol ou dipirona para febre e dor. Mas como ela já está no médico, o ideal é aguardar o diagnóstico e a prescrição. Vou separar o paracetamol se precisar, mas reforço que ela deve seguir a orientação médica.",
            falaEvitar:
              "Compra ibuprofeno que é bom para febre e dor. (ignorar a contraindicação em suspeita de dengue)",
          },
          checklist: [
            "Responder cada questão analisando todas as alternativas antes de escolher.",
            "Gerenciar o tempo: 20 minutos para o simulado completo.",
            "Revisar as respostas antes de finalizar (se o sistema permitir).",
            "Anotar as questões que errou para revisar os temas depois.",
          ],
          quandoChamarFarmaceutico: [
            "N/A — o simulado é uma ferramenta de autoavaliação; após o resultado, o farmacêutico pode ajudar a revisar dúvidas.",
          ],
          errosComuns: [
            "Responder rápido demais sem ler todas as opções.",
            "Não revisar as respostas antes de finalizar.",
            "Ficar frustrado com erros em vez de usá-los como aprendizado.",
          ],
          quiz: [
            q(
              "Em suspeita de dengue, qual medicamento é contraindicado para febre?",
              [
                "Paracetamol.",
                "Dipirona.",
                "Ibuprofeno e AAS.",
                "Nenhum, todos podem ser usados.",
              ],
              2,
              "Anti-inflamatórios (AINEs) como ibuprofeno e AAS aumentam risco de sangramento na dengue. O recomendado é paracetamol ou dipirona.",
            ),
            q(
              "Cliente pede medicamento controlado sem receita. Qual a conduta correta?",
              [
                "Vender sem receita, é melhor que ele compre na concorrência.",
                "Explicar que a venda é proibida e orientar a obter a receita médica.",
                "Vender só metade da cartela sem receita.",
                "Pedir o CPF e vender sem problemas.",
              ],
              1,
              "A venda de medicamentos controlados sem receita é crime previsto na Lei 11.343/2006. A orientação correta é informar o cliente e recusar a venda.",
            ),
            q(
              "Qual a frequência ideal para revisar os conhecimentos da trilha?",
              [
                "Nunca mais após a certificação.",
                "Revisão ativa a cada 15-30 dias para fixação de longo prazo.",
                "Só na véspera de uma avaliação.",
                "Uma vez por ano.",
              ],
              1,
              "A revisão espaçada (15-30 dias) é a técnica mais eficaz para transferir o conhecimento da memória de curto prazo para a de longo prazo.",
            ),
            q(
              "Durante o atendimento, o cliente pergunta 'qual remédio é bom para emagrecer?'. Qual a melhor resposta?",
              [
                "Orlistate é excelente, leva esse.",
                "Não existem remédios milagrosos para emagrecer sem acompanhamento médico. Vou chamar o farmacêutico para orientar.",
                "Chá verde e termogênicos são naturais, pode levar.",
                "Só parar de comer carboidrato que resolve.",
              ],
              1,
              "Medicamentos para emagrecer exigem prescrição e acompanhamento. O atendente nunca deve recomendar sem o farmacêutico.",
            ),
          ],
          xp: 100,
        },

        // ── Aula 16: Certificação ──
        {
          id: "certificacao",
          titulo: "Certificação",
          duracaoMin: 10,
          nivel: "basico",
          resumo:
            "Etapa final da trilha: instruções para obter o certificado de conclusão, revisão dos critérios e próximos passos na carreira.",
          resumoExecutivo: [
            "Para obter o certificado: complete todas as 16 aulas com pelo menos 70% de acertos no quiz final de cada módulo.",
            "O certificado nominal será gerado automaticamente e pode ser compartilhado no LinkedIn e em processos seletivos.",
            "Após a certificação, você está apto(a) para aplicar os protocolos de atendimento consultivo, dispensação segura e cross-sell ético no balcão.",
          ],
          comparativo: {
            titulo: "Certificado da Trilha x Certificação Profissional",
            itens: [
              {
                nome: "Certificado da Trilha",
                quando:
                  "Comprova conclusão do curso prático interno; válido para a farmácia e redes conveniadas.",
              },
              {
                nome: "Certificação Profissional (CRF/ABRADIFAR)",
                quando:
                  "Certificação externa e regulamentada; exigida para cargos de responsabilidade técnica.",
              },
            ],
          },
          simulacao: {
            cliente:
              "Gerente da farmácia: 'Parabéns pela certificação! Quero ver você aplicando o que aprendeu no dia a dia. Qual protocolo você vai começar a implementar amanhã?'",
            falaBoa:
              "Muito obrigado! Vou começar implementando o ciclo completo de atendimento consultivo — do acolhimento à fidelização. Também vou revisar os 7 Certos da dispensação com a equipe. Meu objetivo é reduzir o tempo médio de atendimento sem perder a qualidade consultiva.",
            falaEvitar:
              "Vou continuar fazendo o que eu sempre fiz. (sem demonstrar aplicação dos aprendizados)",
          },
          checklist: [
            "Verificar se todas as aulas foram concluídas.",
            "Confirmar que a média de acertos nos quizzes é ≥ 70%.",
            "Baixar o certificado e conferir nome e dados.",
            "Compartilhar no LinkedIn marcando a farmácia.",
            "Definir próximos passos: cursos complementares, certificação externa ou mentoria.",
          ],
          quandoChamarFarmaceutico: [
            "Dúvida sobre a validade do certificado ou próximos passos na carreira.",
          ],
          errosComuns: [
            "Pular aulas e tentar a certificação incompleto.",
            "Não conferir o nome no certificado.",
            "Esquecer de compartilhar o certificado nas redes profissionais.",
          ],
          quiz: [
            q(
              "Qual a nota mínima necessária para obter a certificação?",
              ["50%", "60%", "70%", "90%"],
              2,
              "A média mínima exigida é 70% de acertos nos quizzes modulares para obter o certificado da trilha.",
            ),
            q(
              "Após a certificação, qual o próximo passo recomendado na carreira de atendente de farmácia?",
              [
                "Parar de estudar, já atingiu o máximo.",
                "Considerar cursos de auxiliar de farmácia ou técnico em farmácia para avançar na carreira.",
                "Pedir demissão e abrir a própria farmácia.",
                "Fazer apenas os mesmos cursos novamente.",
              ],
              1,
              "A certificação da trilha é uma conquista importante, mas cursos técnicos complementares abrem portas para cargos de maior responsabilidade.",
            ),
          ],
          xp: 50,
        },
      ],
    },
  ],
};
