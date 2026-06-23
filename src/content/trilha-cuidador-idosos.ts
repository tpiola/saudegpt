import type { Trilha } from "./types";
import { q } from "./_helpers";
import { imagensCategoria } from "./midia-catalogo";

// ─────────────────────────────────────────────────────────────
// TRILHA — Cuidador de Idosos
// Curso: Formação Completa para Cuidador de Pessoas Idosas
// Registro: CBO 5162-10 | Carga: 160h | 15 Módulos
// ─────────────────────────────────────────────────────────────
export const trilhaCuidadorIdosos: Trilha = {
  id: "cuidador-idosos",
  numero: 1,
  titulo: "Cuidador de Idosos",
  subtitulo: "Formação Completa — CBO 5162-10",
  descricao:
    "Capacitação integral para o cuidado da pessoa idosa: do envelhecimento biológico à prática assistencial diária. Fundamentado nas diretrizes da OMS, Estatuto do Idoso e Política Nacional de Saúde da Pessoa Idosa.",
  nivelFaixa: "Do iniciante ao intermediário",
  icone: "heart",
  modulos: [
    // ═══════════════════════════════════════════════════════
    // MÓDULO 1 — Envelhecimento Humano: Aspectos Biológicos, Psicológicos e Sociais
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-envelhecimento",
      titulo: "Envelhecimento Humano: Aspectos Biológicos, Psicológicos e Sociais",
      descricao:
        "Compreenda o processo de envelhecimento nas dimensões biológica (senescência e senilidade), psicológica (saúde mental e cognição) e social (isolamento, viuvez e políticas públicas). Base: OMS, Estatuto do Idoso e PNSPI.",
      imagemHeroUrl: imagensCategoria.sono,
      aulas: [
        {
          id: "cuidador-envelhecimento-aula",
          titulo: "Envelhecimento Humano: Biologia, Psicologia e Sociedade",
          duracaoMin: 25,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.sono,
          resumo:
            "Aula completa sobre o envelhecimento humano: conceitos de senescência e senilidade segundo a OMS, alterações sensoriais como presbiacusia, capacidade funcional, estilo de vida versus genética e diferenciação entre esquecimento normal e demência.",
          resumoExecutivo: [
            "A OMS define envelhecimento ativo como o processo de otimizar oportunidades de saúde, participação e segurança para melhorar a qualidade de vida.",
            "Senescência é o envelhecimento fisiológico normal; senilidade é o envelhecimento com patologias associadas.",
            "A presbiacusia (perda auditiva relacionada à idade) afeta 1 em cada 3 pessoas acima de 65 anos e impacta comunicação e isolamento social.",
            "A capacidade funcional é o indicador mais relevante da saúde do idoso — mais importante que diagnósticos isolados.",
            "Estilo de vida responde por cerca de 60% da qualidade do envelhecimento; a genética, por aproximadamente 25%.",
            "Esquecimento normal (CCL típico) preserva funcionalidade; demência compromete progressivamente atividades da vida diária.",
          ],
          comparativo: {
            titulo: "Envelhecimento Normal vs Patológico",
            itens: [
              { nome: "Senescência", quando: "Envelhecimento fisiológico, sem doenças incapacitantes. Lentidão de processos, mas com independência preservada." },
              { nome: "Senilidade", quando: "Envelhecimento com doenças crônicas e/ou degenerativas. Comprometimento da autonomia e capacidade funcional." },
              { nome: "Esquecimento Normal", quando: "Esquece onde pôs a chave, mas lembra depois. Não interfere nas atividades da vida diária." },
              { nome: "Demência", quando: "Esquece para que serve a chave. Compromete progressivamente AVDs, linguagem, orientação e julgamento." },
              { nome: "Estilo de Vida", quando: "Alimentação, atividade física, sono, vínculos sociais e estímulo cognitivo — cerca de 60% do envelhecimento saudável." },
              { nome: "Genética", quando: "Fator predisponente, mas não determinante — cerca de 25% da longevidade com qualidade de vida." },
            ],
          },
          simulacao: {
            cliente:
              "Dona Maria, 78 anos, viúva há 3 meses. Mora sozinha. A filha relata: 'Ela não quer mais sair de casa, chora com frequência, diz que não sente mais vontade de fazer nada. O que eu faço?'",
            falaBoa:
              "Entendo a preocupação. O luto na terceira idade pode evoluir para depressão se não houver acolhimento. O ideal é: 1) não minimizar a dor — ouvir sem frases como 'a senhora precisa superar'; 2) estimular pequenas saídas — começar com 5 minutos no portão, depois uma volta na praça; 3) manter horários de sono e alimentação para evitar privação que agrava o humor; 4) envolver a Dona Maria em grupos de convivência — centros de referência do idoso (CRAS) são gratuitos; 5) consultar o geriatra para avaliação — luto prolongado (>2 meses com perda funcional) requer avaliação profissional. Vamos agendar uma consulta para ela?",
            falaEvitar:
              "Ah, isso é frescura de velho! Manda ela reagir logo, deixar de manha. Toma aqui um ansiolítico que resolve rapidinho. Nem precisa ir ao médico.",
          },
          checklist: [
            "Compreender a diferença entre senescência (fisiológico) e senilidade (patológico).",
            "Identificar a presbiacusia como fator de isolamento social e saber adaptar a comunicação.",
            "Avaliar a capacidade funcional do idoso (AVDs básicas e instrumentais) como indicador prioritário de saúde.",
            "Diferenciar esquecimento normal da idade (CCL) de sinais de demência (Alzheimer, vascular, Lewy).",
            "Reconhecer que estilo de vida (60%) supera genética (25%) na qualidade do envelhecimento.",
            "Aplicar a escuta ativa e o acolhimento diante de luto e sintomas depressivos na terceira idade.",
            "Conhecer a Política Nacional de Saúde da Pessoa Idosa (PNSPI) e os recursos da rede SUS (UBS, CRAS, NASF).",
            "Saber encaminhar para geriatra e equipe multidisciplinar quando houver suspeita de depressão ou demência.",
          ],
          quandoChamarFarmaceutico: [
            "Idoso em uso de múltiplos medicamentos (polifarmácia — 5 ou mais fármacos).",
            "Suspeita de interação medicamentosa causando confusão mental ou sonolência.",
            "Idoso com sinais de intoxicação medicamentosa (queda, tontura, bradicardia).",
          ],
          errosComuns: [
            "Atribuir toda perda de memória do idoso à 'idade' sem investigar causas reversíveis (desidratação, infecção urinária, hipotireoidismo).",
            "Ignorar a presbiacusia e falar com o idoso sem contato visual, de costas ou em ambientes ruidosos.",
            "Confundir tristeza reativa (luto) com depressão maior e medicar sem avaliação médica.",
            "Desconsiderar a capacidade funcional como indicador principal de saúde do idoso.",
            "Achar que genética manda no envelhecimento — estilo de vida é mais determinante.",
          ],
          quiz: [
            q(
              "Segundo a OMS, qual é o indicador mais relevante da saúde da pessoa idosa?",
              [
                "Número de doenças diagnosticadas.",
                "Quantidade de medicamentos em uso.",
                "Capacidade funcional — autonomia nas atividades da vida diária.",
                "Idade cronológica acima de 80 anos.",
              ],
              2,
              "A capacidade funcional é o indicador mais importante da saúde do idoso, pois reflete autonomia e independência reais, mais relevantes que diagnósticos isolados.",
            ),
            q(
              "O que é presbiacusia e qual seu impacto no cuidado do idoso?",
              [
                "Perda de visão relacionada à idade, que exige óculos bifocais.",
                "Perda auditiva natural do envelhecimento, que pode levar ao isolamento social e dificuldades de comunicação.",
                "Diminuição do paladar, que reduz o apetite e causa desnutrição.",
                "Perda de massa muscular, que compromete a mobilidade.",
              ],
              1,
              "Presbiacusia é a perda auditiva progressiva relacionada à idade (≥65 anos), afetando ~30% dos idosos. Impacta a comunicação e favorece o isolamento social. O cuidador deve falar de frente, articular bem e reduzir ruído ambiente.",
            ),
            q(
              "Qual a diferença fundamental entre esquecimento normal do envelhecimento e demência?",
              [
                "Não há diferença — todo esquecimento em idoso é sinal de Alzheimer.",
                "Esquecimento normal: esquece onde pôs algo, mas lembra depois; demência: esquece para que serve o objeto e perde funcionalidade progressivamente.",
                "Demência é sempre genética; esquecimento normal é causado por estresse.",
                "Esquecimento normal só acontece antes dos 70 anos; demência, depois dos 80.",
              ],
              1,
              "No esquecimento normal (CCL), a pessoa esquece fatos, mas preserva a funcionalidade e pode lembrar depois. Na demência, há comprometimento progressivo da memória, linguagem, orientação, julgamento e das AVDs — afetando a independência.",
            ),
            q(
              "O que mais influencia a qualidade do envelhecimento — estilo de vida ou genética?",
              [
                "A genética é responsável por aproximadamente 80% da qualidade do envelhecimento.",
                "Ambos têm o mesmo peso — 50% cada.",
                "O estilo de vida responde por cerca de 60% da qualidade do envelhecimento, superando a influência genética (~25%).",
                "Apenas fatores externos, como poluição e acesso à saúde, determinam o envelhecimento.",
              ],
              2,
              "Estudos longitudinais mostram que o estilo de vida (alimentação, atividade física, vínculos sociais, sono e estímulo cognitivo) responde por ~60% da qualidade do envelhecimento, enquanto a genética contribui com ~25%.",
            ),
            q(
              "Dona Maria, 78 anos, viúva há 3 meses, chora com frequência e não quer sair de casa. Qual a conduta mais adequada do cuidador?",
              [
                "Dizer que ela precisa superar — todo mundo perde alguém — e deixá-la sozinha para 'se recompor'.",
                "Oferecer um calmante natural para ajudar a dormir e aguardar a tristeza passar sozinha.",
                "Acolher o sofrimento, estimular pequenas saídas diárias, manter rotina de sono e alimentação, sugerir grupos de convivência e encaminhar ao geriatra se o luto for prolongado.",
                "Levá-la imediatamente ao psiquiatra — qualquer tristeza em idoso é depressão grave e exige internação.",
              ],
              2,
              "O luto em idosos é comum, mas quando prolongado (>2 meses com perda funcional) pode evoluir para depressão. O cuidador deve acolher sem minimizar, estimular gradativamente a socialização, manter rotinas e encaminhar ao geriatra para avaliação adequada.",
            ),
          ],
          xp: 150,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 2 — Higiene, Conforto e Cuidados Pessoais
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-higiene",
      titulo: "Higiene, Conforto e Cuidados Pessoais",
      descricao:
        "Técnicas seguras de banho no leito, higiene oral, troca de fraldas, prevenção de úlceras por pressão e mudança de decúbito. Conforto como fundamento do cuidado humanizado.",
      imagemHeroUrl: imagensCategoria.cosmeticos,
      aulas: [
        {
          id: "cuidador-higiene-aula",
          titulo: "Banho no Leito, Higiene Oral, Troca de Fraldas e Prevenção de Lesões por Pressão",
          duracaoMin: 30,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.cosmeticos,
          resumo:
            "Aula prática sobre os pilares da higiene do idoso dependente: banho no leito seguro, higiene oral completa, troca de fraldas com técnica correta, prevenção e identificação precoce de úlceras por pressão (LPP) e mudança de decúbito protocolada.",
          resumoExecutivo: [
            "Banho no leito: preparar o ambiente (temperatura, privacidade), reunir todo o material antes de iniciar, lavar por segmentos — cabeça → tronco → membros → região íntima. Secar bem, especialmente dobras cutâneas.",
            "Higiene oral: usar escova macia, creme dental e fio dental. Em idosos edêntulos, higienizar gengivas e língua com gaze úmida. Associar enxaguatório bucal sem álcool. Previne pneumonia aspirativa.",
            "Troca de fraldas: posicionar o idoso em decúbito lateral, remover a fralda usada de trás para frente, higienizar períneo com água e sabão neutro, secar bem, aplicar creme barreira. Jamais puxar a fralda usada por baixo sem lateralizar.",
            "Úlceras por pressão (LPP): são lesões isquêmicas em proeminências ósseas por compressão prolongada. Estágio I: eritema que não branqueia; Estágio II: bolha ou abrasão; Estágio III: perda total da pele; Estágio IV: exposição óssea/tendínea.",
            "Mudança de decúbito: deve ser realizada a cada 2 horas. Posições: dorsal → lateral direita → dorsal → lateral esquerda → sentado (se possível). Usar coxins e almofadas para alívio de pressão em calcâneos, sacro e trocânteres.",
            "Principais pontos de pressão: sacro, calcâneos, trocânteres, occipital, escápulas e cotovelos. Inspecionar a pele nessas áreas em toda troca de decúbito.",
          ],
          comparativo: {
            titulo: "Estágios da Lesão por Pressão (LPP)",
            itens: [
              { nome: "Estágio I", quando: "Eritema que não branqueia — pele íntegra, vermelhidão persistente. Atenção: em pele escura, observar calor, edema e endurecimento." },
              { nome: "Estágio II", quando: "Perda parcial da pele — bolha intacta ou rompida, abrasão superficial. Leito da ferida róseo, sem esfacelo." },
              { nome: "Estágio III", quando: "Perda total da pele — tecido adiposo visível. Pode haver esfacelo e tunelização. Sem exposição óssea." },
              { nome: "Estágio IV", quando: "Perda total com exposição de osso, tendão ou músculo. Esfacelo e escara podem estar presentes. Risco de osteomielite." },
              { nome: "Não Classificável", quando: "Lesão coberta por esfacelo ou escara amarela/marrom. Estágio só pode ser determinado após desbridamento." },
              { nome: "Prevenção", quando: "Mudança de decúbito a cada 2h, colchão piramidal/viscoelástico, hidratação da pele, superfícies de alívio em calcâneos e sacro." },
            ],
          },
          simulacao: {
            cliente:
              "Seu João, 85 anos, acamado há 15 dias após fratura de fêmur. A cuidadora nota vermelhidão na região sacral que não some quando pressiona. A filha pergunta: 'É grave? O que podemos fazer?'",
            falaBoa:
              "A vermelhidão que não branqueia na região sacral é um sinal de alerta — corresponde ao Estágio I da Lesão por Pressão. É reversível se agirmos rápido. Vamos adotar estas medidas: 1) Mudança de decúbito rigorosa a cada 2 horas, alternando lateral direita, lateral esquerda e dorsal (evitar apoiar sobre o sacro); 2) Usar coxins e almofadas para aliviar a pressão nos calcâneos e trocânteres; 3) Manter a pele limpa, seca e hidratada — aplicar creme barreira após cada higienização; 4) Não massagear a área avermelhada — isso pode agravar a lesão tecidual; 5) Avaliar a aquisição de colchão piramidal ou viscoelástico para redistribuir a pressão. Vou notificar a enfermeira responsável para avaliação e documentação da lesão. O início precoce do protocolo evita que evolua para úlcera aberta.",
            falaEvitar:
              "Isso aí não é nada, não! É só massagear bem forte que a vermelhidão some. Pode deixar ele deitado de costas a noite inteira que não vai dar problema. Coloca álcool na região que resolve rapidinho.",
          },
          checklist: [
            "Preparar o ambiente e o material antes do banho no leito — temperatura da água, privacidade, toalhas limpas.",
            "Realizar a sequência correta: cabeça → tronco → membros → genitália — trocando a água quando necessário.",
            "Secar rigorosamente todas as dobras cutâneas (axilas, virilhas, região inframamária, interdigital) para prevenir micoses.",
            "Executar higiene oral completa com escova macia, creme dental e fio dental — mesmo em idosos edêntulos.",
            "Realizar troca de fraldas com lateralização — jamais puxar a fralda usada por baixo do idoso.",
            "Identificar os 6 principais pontos de pressão do corpo: sacro, calcâneos, trocânteres, occipital, escápulas, cotovelos.",
            "Diferenciar os estágios I, II, III e IV da LPP e saber intervir precocemente.",
            "Executar mudança de decúbito a cada 2 horas e registrar o horário das mudanças.",
            "Aplicar creme barreira após cada troca de fralda e inspecionar a pele das proeminências ósseas.",
          ],
          quandoChamarFarmaceutico: [
            "Idoso fazendo uso de antibiótico — alteração da microbiota pode causar diarreia e dermatite perineal.",
            "Lesão por pressão com sinais de infecção (exsudato purulento, odor, calor local) — necessidade de coberturas especiais.",
            "Idoso com polifarmácia e múltiplas comorbidades — avaliação de interações medicamentosas.",
          ],
          errosComuns: [
            "Massagear a área de vermelhidão por pressão — isso rompe capilares e agrava a lesão isquêmica.",
            "Puxar a fralda usada por baixo do idoso acamado — causa fricção e cisalhamento na pele sacral.",
            "Negligenciar a higiene oral em idosos edêntulos — o acúmulo de biofilme aumenta o risco de pneumonia aspirativa.",
            "Deixar dobras cutâneas úmidas após o banho — favorece dermatite e infecções fúngicas.",
            "Usar álcool ou soluções irritantes na pele do idoso — resseca e lesa a barreira cutânea.",
            "Não registrar a mudança de decúbito — perde-se o controle e o idoso pode ficar horas na mesma posição.",
          ],
          quiz: [
            q(
              "Qual é a primeira conduta ao identificar vermelhidão que não branqueia na região sacral de um idoso acamado?",
              [
                "Massagear vigorosamente a região para estimular a circulação.",
                "Aplicar álcool 70% para desinfetar e aguardar.",
                "Iniciar mudança de decúbito a cada 2 horas, aliviar a pressão na área e notificar a enfermeira — é Lesão por Pressão Estágio I.",
                "Cobrir com curativo oclusivo e continuar a rotina normalmente.",
              ],
              2,
              "O eritema que não branqueia é LPP Estágio I. A conduta imediata é aliviar a pressão (mudança de decúbito a cada 2h), proteger a área e notificar a equipe. Massagear ou usar álcool agrava a lesão tecidual.",
            ),
            q(
              "Qual é a frequência recomendada para mudança de decúbito em idosos acamados com risco de LPP?",
              [
                "A cada 8 horas — no início de cada plantão.",
                "A cada 4 horas — manhã, tarde, noite.",
                "A cada 2 horas — protocolo padrão baseado em evidências.",
                "Uma vez ao dia — durante o banho.",
              ],
              2,
              "A mudança de decúbito deve ser realizada a cada 2 horas, alternando as posições (dorsal, lateral direita, lateral esquerda). Este intervalo é baseado em estudos de isquemia tecidual — após 2h de pressão contínua, inicia-se dano celular.",
            ),
            q(
              "Por que a higiene oral é essencial mesmo em idosos edêntulos (sem dentes)?",
              [
                "Não é necessária — sem dentes, não há risco de infecção.",
                "Apenas para melhorar o hálito e o conforto social.",
                "Previne pneumonia aspirativa, pois o biofilme oral é reservatório de patógenos respiratórios que podem ser aspirados.",
                "Serve apenas para hidratar a mucosa oral e evitar ressecamento.",
              ],
              2,
              "Estudos comprovam que a higiene oral reduz em até 40% o risco de pneumonia aspirativa em idosos institucionalizados. O biofilme acumulado na cavidade oral contém patógenos respiratórios que, quando aspirados, causam pneumonia.",
            ),
            q(
              "Qual a técnica correta para trocar a fralda de um idoso acamado?",
              [
                "Puxar a fralda usada por baixo do idoso em posição dorsal — é mais rápido e não incomoda.",
                "Lateralizar o idoso, remover a fralda usada, higienizar o períneo com água e sabão, secar, aplicar creme barreira e colocar a fralda limpa.",
                "Usar lenço umedecido com álcool e trocar a fralda uma vez ao dia para economizar material.",
                "Colocar a fralda limpa por cima da suja e depois remover a de baixo.",
              ],
              1,
              "A técnica correta é lateralizar o idoso, remover a fralda de trás para frente, higienizar com água e sabão neutro, secar completamente e aplicar creme barreira. Puxar a fralda por baixo causa fricção e cisalhamento que predispõem a LPP.",
            ),
            q(
              "Quais são os principais pontos de pressão que devem ser inspecionados em idosos acamados durante cada mudança de decúbito?",
              [
                "Apenas a região sacral e os joelhos.",
                "Sacro, calcâneos, trocânteres, occipital, escápulas e cotovelos.",
                "Apenas as costas e os ombros.",
                "Mãos, pés e rosto do idoso.",
              ],
              1,
              "As seis principais áreas de pressão são: sacro, calcâneos, trocânteres maiores, região occipital, escápulas e cotovelos. Durante cada mudança de decúbito, essas áreas devem ser inspecionadas visualmente e por palpação para detectar precocemente LPP.",
            ),
          ],
          xp: 180,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 3 — Mobilidade e Prevenção de Quedas
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-mobilidade",
      titulo: "Mobilidade e Prevenção de Quedas",
      descricao:
        "Técnicas de transferência segura (cama-cadeira, cadeira-sanitário), uso de dispositivos auxiliares (andador, bengala, muleta), adaptação ambiental e prevenção de quedas no ambiente domiciliar.",
      imagemHeroUrl: imagensCategoria.pes,
      aulas: [
        {
          id: "cuidador-mobilidade-aula",
          titulo: "Mobilidade Segura e Prevenção de Quedas no Idoso",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.pes,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas com técnicas de transferência, órteses e adaptação domiciliar.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 4 — Nutrição e Hidratação no Idoso
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-nutricao",
      titulo: "Nutrição e Hidratação no Idoso",
      descricao:
        "Necessidades nutricionais específicas do idoso, desidratação e seus riscos, disfagia (dificuldade de deglutição), consistência alimentar e técnicas de auxílio na alimentação.",
      imagemHeroUrl: imagensCategoria.cleanBeauty,
      aulas: [
        {
          id: "cuidador-nutricao-aula",
          titulo: "Nutrição, Hidratação e Disfagia na Pessoa Idosa",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.cleanBeauty,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre necessidades nutricionais, prevenção de desidratação e manejo da disfagia.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 5 — Administração de Medicamentos
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-medicamentos",
      titulo: "Administração de Medicamentos no Idoso",
      descricao:
        "Polifarmácia no idoso, vias de administração (oral, tópica, subcutânea), horários e organização de medicações, identificação de reações adversas, interações medicamentosas e adesão ao tratamento.",
      imagemHeroUrl: imagensCategoria.desodorantes,
      aulas: [
        {
          id: "cuidador-medicamentos-aula",
          titulo: "Polifarmácia, Adesão e Segurança Medicamentosa no Idoso",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.desodorantes,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre administração segura de medicamentos no idoso.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 6 — Cuidados com Lesões e Curativos
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-curativos",
      titulo: "Cuidados com Lesões e Curativos",
      descricao:
        "Tipos de feridas, assepsia das mãos e do ambiente, técnica limpa de curativo, coberturas especiais para LPP, identificação de sinais de infecção e encaminhamento à equipe de enfermagem.",
      imagemHeroUrl: imagensCategoria.dermocosmetico,
      aulas: [
        {
          id: "cuidador-curativos-aula",
          titulo: "Curativos e Cuidados com Feridas no Idoso",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.dermocosmetico,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre técnica de curativos, tipos de coberturas e prevenção de infecção.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 7 — Comunicação com o Idoso e a Família
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-comunicacao",
      titulo: "Comunicação com o Idoso e a Família",
      descricao:
        "Técnicas de comunicação empática com o idoso (presbiacusia, afasia, demência), comunicação não violenta, manejo de comportamentos difíceis, orientação à família e registro de intercorrências.",
      imagemHeroUrl: imagensCategoria.shampoo,
      aulas: [
        {
          id: "cuidador-comunicacao-aula",
          titulo: "Comunicação Empática e Efetiva com o Idoso e Familiares",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.shampoo,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre comunicação com idosos com déficits sensoriais e comportamentos desafiadores.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 8 — Doenças Crônicas e Cuidados Paliativos
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-cronicos",
      titulo: "Doenças Crônicas e Cuidados Paliativos",
      descricao:
        "Principais doenças crônicas do idoso (HAS, DM, DPOC, ICC, AVC), controle de sintomas, princípios dos cuidados paliativos, conforto e dignidade na terminalidade.",
      imagemHeroUrl: imagensCategoria.sustentabilidade,
      aulas: [
        {
          id: "cuidador-cronicos-aula",
          titulo: "Doenças Crônicas e Princípios dos Cuidados Paliativos no Idoso",
          duracaoMin: 20,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.sustentabilidade,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre manejo de condições crônicas e cuidados paliativos.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 9 — Saúde Mental e Estimulação Cognitiva
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-saude-mental",
      titulo: "Saúde Mental e Estimulação Cognitiva",
      descricao:
        "Depressão, ansiedade e demências (Alzheimer, vascular, Lewy), estimulação cognitiva com atividades lúdicas, musicoterapia, reminiscência e orientação à realidade.",
      imagemHeroUrl: imagensCategoria.barba,
      aulas: [
        {
          id: "cuidador-saude-mental-aula",
          titulo: "Saúde Mental, Demências e Estimulação Cognitiva no Idoso",
          duracaoMin: 20,
          nivel: "intermediario",
          imagemHeroUrl: imagensCategoria.barba,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre saúde mental, depressão, demências e técnicas de estimulação cognitiva.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 10 — Cuidados com a Pele do Idoso
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-pele",
      titulo: "Cuidados com a Pele do Idoso",
      descricao:
        "Características da pele senil (fragilidade, ressecamento, diminuição do colágeno), hidratação cutânea, prevenção de dermatites, cuidados com estomas e cateteres.",
      imagemHeroUrl: imagensCategoria.cabelos,
      aulas: [
        {
          id: "cuidador-pele-aula",
          titulo: "Pele Senil: Hidratação, Prevenção de Dermatites e Cuidados Especiais",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.cabelos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre cuidados com a pele do idoso e prevenção de dermatites.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 11 — Atividades de Vida Diária (AVDs)
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-avds",
      titulo: "Atividades de Vida Diária (AVDs)",
      descricao:
        "Avaliação e auxílio nas AVDs básicas (alimentação, vestuário, banho, transferência) e instrumentais (compras, finanças, medicamentos). Graus de dependência (Katz, Lawton) e planos de cuidado.",
      imagemHeroUrl: imagensCategoria.cosmeticos,
      aulas: [
        {
          id: "cuidador-avds-aula",
          titulo: "Escalas de Avaliação Funcional e Apoio nas AVDs",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.cosmeticos,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre avaliação funcional e apoio nas atividades da vida diária.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 12 — Primeiros Socorros para Idosos
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-primeiros-socorros",
      titulo: "Primeiros Socorros para Idosos",
      descricao:
        "Quedas, fraturas, engasgo (manobra de Heimlich adaptada), suspeita de AVC (protocolo SAMU), crise hipoglicêmica, convulsões e parada cardiorrespiratória no idoso.",
      imagemHeroUrl: imagensCategoria.sono,
      aulas: [
        {
          id: "cuidador-primeiros-socorros-aula",
          titulo: "Emergências Comuns no Idoso: Quedas, Engasgo e AVC",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.sono,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre primeiros socorros específicos para a população idosa.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 13 — Aspectos Legais e Éticos do Cuidado ao Idoso
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-legal",
      titulo: "Aspectos Legais e Éticos do Cuidado ao Idoso",
      descricao:
        "Estatuto do Idoso (Lei 10.741/2003), direitos da pessoa idosa, sigilo profissional, limites da atuação do cuidador, prevenção de violência patrimonial e psicológica, notificação de maus-tratos.",
      imagemHeroUrl: imagensCategoria.cleanBeauty,
      aulas: [
        {
          id: "cuidador-legal-aula",
          titulo: "Estatuto do Idoso, Ética e Deveres Legais do Cuidador",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.cleanBeauty,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre legislação, ética e prevenção de violência contra o idoso.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 14 — Cuidados com o Cuidador
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-autocuidado",
      titulo: "Cuidados com o Cuidador",
      descricao:
        "Síndrome de burnout do cuidador, estresse crônico, importância do autocuidado, ergonomia na movimentação do idoso (proteção da coluna), grupos de apoio e saúde mental do profissional.",
      imagemHeroUrl: imagensCategoria.sustentabilidade,
      aulas: [
        {
          id: "cuidador-autocuidado-aula",
          titulo: "Autocuidado, Ergonomia e Prevenção do Burnout do Cuidador",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.sustentabilidade,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre saúde ocupacional e qualidade de vida do cuidador.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // MÓDULO 15 — Tecnologia Assistiva e Adaptações Domiciliares
    // ═══════════════════════════════════════════════════════
    {
      id: "cuidador-tecnologia",
      titulo: "Tecnologia Assistiva e Adaptações Domiciliares",
      descricao:
        "Dispositivos de tecnologia assistiva (cadeira de rodas, cama hospitalar, elevador de transferência), adaptação ambiental (barras, iluminação, piso antiderrapante), casa segura para o idoso.",
      imagemHeroUrl: imagensCategoria.pes,
      aulas: [
        {
          id: "cuidador-tecnologia-aula",
          titulo: "Adaptação Domiciliar e Tecnologia Assistiva para o Idoso",
          duracaoMin: 20,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.pes,
          resumo: "Conteúdo em desenvolvimento — este módulo receberá aulas completas sobre órteses, próteses, adaptações ambientais e dispositivos de auxílio.",
          resumoExecutivo: ["Conteúdo em desenvolvimento.", "Este módulo receberá aulas completas em breve."],
          checklist: ["Em breve."],
          quandoChamarFarmaceutico: ["Em breve."],
          errosComuns: ["Em breve."],
          quiz: [q("Placeholder — aguardando conteúdo.", ["A", "B", "C", "D"], 0, "Conteúdo do quiz será adicionado.")],
          xp: 0,
        },
      ],
    },
  ],
};
