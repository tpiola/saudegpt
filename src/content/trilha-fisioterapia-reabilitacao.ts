import type { Trilha } from "./types";
import { q } from "./_helpers";
import { imagensCategoria } from "./midia-catalogo";

// ─────────────────────────────────────────────────────────────
// TRILHA — Orientação em Reabilitação e Produtos Ortopédicos
// Curso para profissionais de saúde (NÃO forma fisioterapeuta)
// 12 Módulos — 600h | Referência: COFFITO
// ─────────────────────────────────────────────────────────────
export const trilhaFisioterapiaReabilitacao: Trilha = {
  id: "fisioterapia-reabilitacao",
  numero: 1,
  titulo: "Orientação em Reabilitação e Produtos Ortopédicos",
  subtitulo: "Profissionais de Saúde — Módulo I",
  descricao:
    "Capacitação para orientar sobre produtos ortopédicos, correlatos e auxiliares de reabilitação. Identificação de necessidades, venda consultiva e encaminhamento correto ao fisioterapeuta. Este curso NÃO forma fisioterapeuta.",
  nivelFaixa: "Do iniciante ao intermediário",
  icone: "activity",
  modulos: [
    // ═══════════════ MÓDULO 1 — Anatomia e Fisiologia Musculoesquelética (60h) ═══════════════
    {
      id: "fisio-anatomia",
      titulo: "Fundamentos da Anatomia e Fisiologia Musculoesquelética",
      descricao:
        "Estudo detalhado do sistema musculoesquelético, biomecânica básica e fisiologia do movimento. Base essencial para compreender as indicações dos produtos ortopédicos.",
      imagemHeroUrl: imagensCategoria.cosmeticos,
      aulas: [
        {
          id: "fisio-anatomia-aula",
          titulo: "Anatomia e Fisiologia Musculoesquelética: dos Ossos ao Movimento",
          duracaoMin: 30,
          nivel: "basico",
          imagemHeroUrl: imagensCategoria.cosmeticos,
          resumo:
            "Sistema esquelético, muscular, biomecânica articular, fisiologia do movimento, processos de cicatrização tecidual e envelhecimento musculoesquelético.",
          resumoExecutivo: [
            "Ligamentos conectam osso a osso (estabilidade); tendões conectam músculo a osso (transmissão de força).",
            "A cartilagem articular reduz atrito e absorve impacto — sua degeneração leva à artrose.",
            "Sarcopenia é a perda progressiva de massa e força muscular associada ao envelhecimento.",
            "O processo de cicatrização tecidual difere entre osso (6-12 semanas), ligamento (meses) e cartilagem (limitada).",
          ],
          simulacao: {
            cliente:
              "Cliente de 68 anos: 'Meu joelho dói quando ando muito. Quero uma joelheira bem apertada para segurar tudo no lugar.'",
            falaBoa:
              "Entendo seu desconforto. Antes de escolhermos a joelheira, preciso entender melhor: a dor é na frente do joelho, atrás, ou nas laterais? Piora ao subir ou descer escadas? Você já consultou um ortopedista ou fisioterapeuta sobre isso? [...] Essa dor na frente do joelho, que piora ao descer escadas, pode ser relacionada à articulação entre a patela e o fêmur. A joelheira pode ajudar, mas existem diferentes tipos. Para escolher a mais adequada, o ideal é que você consulte um fisioterapeuta ou ortopedista. Posso te mostrar as opções e você leva essas informações para a consulta?",
            falaEvitar:
              "É artrose, leva essa joelheira aqui. Usa o dia todo que resolve.",
          },
          checklist: [
            "Diferenciar ligamento (osso-osso) de tendão (músculo-osso).",
            "Explicar a função da cartilagem articular e o que é artrose.",
            "Reconhecer sinais de sarcopenia em idosos.",
            "Saber que entorse = lesão ligamentar; distensão = lesão muscular/tendínea.",
            "Encaminhar ao fisioterapeuta ou ortopedista para diagnóstico.",
          ],
          quandoChamarFarmaceutico: [
            "Cliente com dor articular persistente sem diagnóstico.",
            "Suspeita de fratura ou lesão ligamentar grave.",
          ],
          errosComuns: [
            "Diagnosticar ('você tem artrose') sem avaliação profissional.",
            "Recomendar órtese sem entender o tipo de lesão.",
            "Confundir sarcopenia com osteoporose.",
          ],
          quiz: [
            q("Qual estrutura conecta osso a osso e estabiliza articulações?", ["Tendão", "Ligamento", "Músculo", "Cartilagem"], 1, "Ligamentos conectam osso a osso, proporcionando estabilidade articular. Tendões conectam músculo a osso."),
            q("O que é sarcopenia?", ["Perda de massa óssea", "Perda progressiva de massa e força muscular associada ao envelhecimento", "Inflamação articular", "Degeneração de cartilagem"], 1, "Sarcopenia é a perda progressiva de massa, força e função muscular, comum no envelhecimento."),
            q("Qual a função da cartilagem articular?", ["Produzir líquido sinovial", "Reduzir atrito entre superfícies ósseas e absorver impacto", "Conectar músculo a osso", "Produzir células sanguíneas"], 1, "A cartilagem articular reveste as extremidades ósseas, reduzindo atrito e distribuindo cargas durante o movimento."),
            q("Qual a diferença entre entorse e distensão?", ["São a mesma coisa", "Entorse é lesão de ligamento; distensão é lesão de músculo ou tendão", "Entorse é fratura, distensão é luxação", "Não sei"], 1, "Entorse = estiramento/ruptura de ligamentos. Distensão = estiramento/ruptura de fibras musculares ou tendões."),
            q("Qual nutriente é mais crítico para prevenção de osteoporose em idosos?", ["Vitamina C", "Cálcio + Vitamina D", "Ferro", "Proteínas (apenas)"], 1, "Cálcio é o principal mineral ósseo, e a vitamina D é essencial para sua absorção intestinal."),
          ],
          xp: 70,
        },
      ],
    },
    // ═══════════════ MÓDULOS 2-12 (estrutura, conteúdo completo em desenvolvimento) ═══════════════
    {
      id: "fisio-patologias",
      titulo: "Patologias Ortopédicas Mais Comuns",
      descricao: "Lombalgias, cervicalgias, tendinites, artroses, lesões esportivas e pós-operatórios — identificação e encaminhamento.",
      imagemHeroUrl: imagensCategoria.dermocosmetico,
      aulas: [{ id: "fisio-patologias-aula", titulo: "Patologias Ortopédicas: da Coluna ao Pé", duracaoMin: 30, nivel: "intermediario", imagemHeroUrl: imagensCategoria.dermocosmetico, resumo: "Hérnias de disco, síndrome do túnel do carpo, artrose, fascite plantar e mais.", resumoExecutivo: ["Conteúdo em desenvolvimento."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")], xp: 0 }],
    },
    {
      id: "fisio-produtos",
      titulo: "Produtos Ortopédicos e Correlatos: Classificação e Indicações",
      descricao: "Catálogo completo: órteses, próteses, auxiliares de marcha, meias compressivas e produtos para prevenção de úlceras por pressão.",
      imagemHeroUrl: imagensCategoria.sono,
      aulas: [{ id: "fisio-produtos-aula", titulo: "Guia de Produtos Ortopédicos", duracaoMin: 30, nivel: "intermediario", imagemHeroUrl: imagensCategoria.sono, resumo: "Órteses de MMSS, MMII, coluna, auxiliares de marcha, meias compressivas.", resumoExecutivo: ["Conteúdo em desenvolvimento."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Conteúdo em desenvolvimento.")], xp: 0 }],
    },
    {
      id: "fisio-ergonomia", titulo: "Ergonomia e Prevenção de Lesões Ocupacionais", descricao: "NR-17, LER/DORT, postura correta e produtos ergonômicos.", imagemHeroUrl: imagensCategoria.cleanBeauty, aulas: [{ id: "fisio-ergonomia-aula", titulo: "Ergonomia no Trabalho", duracaoMin: 20, nivel: "basico", imagemHeroUrl: imagensCategoria.cleanBeauty, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }],
    },
    {
      id: "fisio-pos-operatorio", titulo: "Reabilitação Pós-Cirúrgica Ortopédica", descricao: "Próteses de quadril/joelho, LCA, artroscopias e fases da reabilitação.", imagemHeroUrl: imagensCategoria.sustentabilidade, aulas: [{ id: "fisio-posop-aula", titulo: "Pós-Operatório Ortopédico", duracaoMin: 25, nivel: "avancado", imagemHeroUrl: imagensCategoria.sustentabilidade, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }],
    },
    {
      id: "fisio-respiratoria", titulo: "Fisioterapia Respiratória Básica", descricao: "DPOC, asma, inaladores, nebulizadores e oxímetros — uso correto.", imagemHeroUrl: imagensCategoria.pes, aulas: [{ id: "fisio-respiratoria-aula", titulo: "Dispositivos Respiratórios", duracaoMin: 20, nivel: "basico", imagemHeroUrl: imagensCategoria.pes, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }],
    },
    { id: "fisio-neurologia", titulo: "Neurologia e Reabilitação Neurológica", descricao: "AVC, Parkinson, esclerose múltipla, lesões medulares e produtos de apoio.", imagemHeroUrl: imagensCategoria.cosmeticos, aulas: [{ id: "fisio-neuro-aula", titulo: "Reabilitação Neurológica", duracaoMin: 25, nivel: "avancado", imagemHeroUrl: imagensCategoria.cosmeticos, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }] },
    { id: "fisio-geriatria", titulo: "Fisioterapia Geriátrica e Prevenção de Quedas", descricao: "Fragilidade, adaptação domiciliar, barras de apoio e exercícios de equilíbrio.", imagemHeroUrl: imagensCategoria.dermocosmetico, aulas: [{ id: "fisio-geriatria-aula", titulo: "Prevenção de Quedas no Idoso", duracaoMin: 25, nivel: "intermediario", imagemHeroUrl: imagensCategoria.dermocosmetico, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }] },
    { id: "fisio-esportiva", titulo: "Fisioterapia Esportiva Básica", descricao: "Entorses, distensões, protocolo RICE, tapes e retorno ao esporte.", imagemHeroUrl: imagensCategoria.proteinas, aulas: [{ id: "fisio-esportiva-aula", titulo: "Lesões Esportivas e RICE", duracaoMin: 20, nivel: "intermediario", imagemHeroUrl: imagensCategoria.proteinas, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }] },
    { id: "fisio-legislacao", titulo: "Legislação, Ética e Limites Profissionais", descricao: "Lei 6.316/1975, COFFITO, limites do atendente e responsabilidade civil.", imagemHeroUrl: imagensCategoria.sono, aulas: [{ id: "fisio-legislacao-aula", titulo: "Ética e Limites Legais", duracaoMin: 20, nivel: "basico", imagemHeroUrl: imagensCategoria.sono, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }] },
    { id: "fisio-atendimento", titulo: "Atendimento Humanizado e Comunicação Terapêutica", descricao: "Escuta ativa, empatia com pacientes com dor crônica e motivação para adesão.", imagemHeroUrl: imagensCategoria.cleanBeauty, aulas: [{ id: "fisio-atendimento-aula", titulo: "Comunicação em Reabilitação", duracaoMin: 20, nivel: "intermediario", imagemHeroUrl: imagensCategoria.cleanBeauty, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }] },
    { id: "fisio-tecnologia", titulo: "Tecnologia e Inovação em Reabilitação", descricao: "Órteses 3D, realidade virtual, tele-reabilitação, wearables e tendências.", imagemHeroUrl: imagensCategoria.sustentabilidade, aulas: [{ id: "fisio-tecnologia-aula", titulo: "Inovação em Reabilitação", duracaoMin: 20, nivel: "avancado", imagemHeroUrl: imagensCategoria.sustentabilidade, resumo: "Conteúdo em desenvolvimento.", resumoExecutivo: ["Em breve."], checklist: ["Em breve."], quandoChamarFarmaceutico: ["Em breve."], errosComuns: ["Em breve."], quiz: [q("Placeholder", ["A", "B", "C", "D"], 0, "Em desenvolvimento.")], xp: 0 }] },
  ],
};
