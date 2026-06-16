import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Guia de Medicamentos · Farmácia",
  description:
    "Guia completo e prático sobre medicamentos controlados (Portaria 344/98), antibióticos (RDC 471/2021), agonistas GLP-1 (Ozempic, Wegovy, Mounjaro), armazenamento correto e uso seguro no balcão da farmácia.",
  openGraph: {
    title: "Guia de Medicamentos · Farmácia",
    description:
      "Receituários, controlados, antibióticos, GLP-1 e armazenamento — o guia prático que todo atendente de farmácia precisa ter na ponta dos dedos.",
  },
};

/* ════════════════════════════════════════════
   SEÇÃO 1 — RECEITUÁRIOS E CONTROLADOS
   ════════════════════════════════════════════ */

const receituarios = {
  id: "controlados",
  titulo: "Receituários de Controlados",
  destaque: "Portaria SVS/MS 344/98 — a base legal para medicamentos controlados no Brasil.",
  badges: ["Portaria 344/98", "ANVISA", "Receituário"],
  topicos: [
    {
      titulo: "📘 Receituário Azul (Tipo A)",
      subtitulo: "Para medicamentos da Lista A1 e A2 (entorpecentes e psicotrópicos)",
      texto: `O receituário AZUL é o documento de maior controle na farmácia. Ele é padronizado em todo o Brasil e tem validade de 30 dias a partir da data de emissão.

🔹 Medicamentos que exigem receituário azul:
• Morfina e derivados (analgésicos opioides fortes)
• Metadona (usada em tratamento de dependência química)
• Oxicodona, Fentanil, Petidina
• Ritalina (Metilfenidato) — TDAH
• Anfetaminas

🔹 Regras obrigatórias no balcão:
• Verificar se o receituário é original (não aceita cópia)
• Conferir a identificação do paciente e do prescritor
• Validar o carimbo e a assinatura do médico
• Registrar no SNGPC (Sistema Nacional de Gerenciamento de Produtos Controlados)
• Manter o receituário retido na farmácia por 2 anos
• A quantidade prescrita não pode exceder 30 dias de tratamento

🔹 Atenção! Se houver qualquer rasura, divergência ou data vencida, o medicamento NÃO pode ser dispensado. Encaminhe o cliente ao farmacêutico responsável.`,
      imagem: "/imagens/receituarios.webp",
      curiosidade: "A cor azul do receituário não é por acaso — o azul não aparece em fotocópias coloridas comuns, o que dificulta falsificações. É uma medida de segurança documental!",
    },
    {
      titulo: "📋 Receituário Branco (Tipo B)",
      subtitulo: "Para medicamentos da Lista B1 (psicotrópicos) e retinol",
      texto: `O receituário BRANCO de controle especial é o mais comum no dia a dia da farmácia. Ele segue regras específicas:

🔹 Medicamentos que exigem receituário branco (B1):
• Benzodiazepínicos — Clonazepam (Rivotril), Diazepam, Alprazolam (Frontal), Lorazepam
• Zolpidem (para insônia)
•Codeína e derivados (xaropes para tosse com codeína)

🔹 Outros controlados com receituário branco:
• Anabolizantes esteroides (Lista C5)
• Isotretinoína (Roacutan) — medicamento para acne
• Talidomida
• Finasterida 1mg (para calvície)

🔹 Regras obrigatórias no balcão:
• Validade de 30 dias (para psicotrópicos B1)
• Validade de 60 dias (para retinoides de uso tópico)
• A receita pode ser de qualquer profissional habilitado (médico ou dentista)
• Retenção da 1ª via na farmácia
• Devolução da 2ª via ao paciente (comprovante de atendimento)
• Quantidade máxima: 60 dias de tratamento para psicotrópicos

🔹 No balcão: muitos clientes que usam Rivotril ou Frontal podem ter dúvidas sobre o uso prolongado. Oriente que esses medicamentos causam dependência e não devem ser interrompidos abruptamente.`,
      imagem: "/imagens/receitas.webp",
      curiosidade: "O Brasil é um dos maiores consumidores mundiais de benzodiazepínicos. Estima-se que cerca de 5% da população brasileira adulta faça uso contínuo desses medicamentos — o que reforça a importância da orientação farmacêutica no balcão.",
    },
    {
      titulo: "📄 Notificação de Receita (Antimicrobianos)",
      subtitulo: "RDC 471/2021 — o controle de antibióticos na farmácia",
      texto: `Desde 2010, a ANVISA exige controle especial para antibióticos. A RDC 471/2021 é a norma atual que regulamenta a dispensação:

🔹 Medicamentos controlados por esta RDC:
• Amoxicilina e Amoxicilina + Clavulanato
• Azitromicina
• Cefalexina
• Sulfametoxazol + Trimetoprima
• Nitrofurantoína
• Metronidazol
• E praticamente TODOS os antimicrobianos de uso sistêmico

🔹 O que o atendente precisa conferir no balcão:
• A receita deve ser de um profissional habilitado (médico ou dentista)
• Deve conter dados legíveis do paciente e do prescritor
• O medicamento, dose, posologia e duração do tratamento
• Data e assinatura do prescritor
• Validade de 10 dias a partir da emissão (exceto para receitas de controle especial, que seguem prazos próprios)
• Retenção da 1ª via na farmácia

🔹 Regras importantes:
• A receita NÃO precisa ser de modelo oficial (pode ser receituário comum)
• A dispensação é limitada à quantidade prescrita
• A farmácia deve manter a receita retida por 2 anos
• O paciente tem direito à 2ª via como comprovante

🔹 Atenção: antibióticos NÃO tratam gripes e resfriados (que são virais). O uso inadequado contribui para a resistência bacteriana — um dos maiores problemas de saúde pública do mundo.`,
      imagem: "/imagens/antibioticos.webp",
      curiosidade: "A resistência bacteriana é considerada pela OMS uma das 10 maiores ameaças à saúde global. Estima-se que, se nada for feito, 10 milhões de pessoas poderão morrer por ano até 2050 devido a infecções resistentes a antibióticos.",
    },
  ],
};

/* ════════════════════════════════════════════
   SEÇÃO 2 — AGONISTAS GLP-1
   ════════════════════════════════════════════ */

const glp1 = {
  id: "glp1",
  titulo: "Agonistas GLP-1 — Ozempic, Wegovy, Mounjaro",
  destaque: "A nova geração de medicamentos para diabetes tipo 2 e perda de peso — o que todo atendente precisa saber.",
  badges: ["GLP-1", "Diabetes", "Obesidade"],
  topicos: [
    {
      titulo: "💉 O que são os agonistas GLP-1?",
      subtitulo: "Uma classe revolucionária de medicamentos",
      texto: `Os agonistas do receptor GLP-1 (peptídeo semelhante ao glucagon-1) são medicamentos injetáveis que imitam um hormônio natural do nosso corpo. Eles agem em múltiplas frentes:

🔹 Como funcionam?
• Estimulam o pâncreas a liberar mais insulina quando a glicose está alta
• Reduzem a produção de glucagon (que aumenta a glicose)
• Retardam o esvaziamento do estômago — você se sente cheio por mais tempo
• Atuam no cérebro, reduzindo o apetite e a vontade de comer

🔹 Principais medicamentos disponíveis no Brasil:
• OZEMPIC (semaglutida) — aprovado para diabetes tipo 2, 1x por semana
• WEGOVY (semaglutida) — mesma substância, dose maior, aprovado para obesidade, 1x por semana
• MOUNJARO (tirzepatida) — agonista duplo GLP-1 + GIP, mais potente, 1x por semana
• TRULICITY (dulaglutida) — diabetes tipo 2, 1x por semana
• VICTOZA (liraglutida) — diabetes tipo 2, uso diário
• SAXENDA (liraglutida) — obesidade, uso diário`,
      imagem: "/imagens/glp1.webp",
      curiosidade: "O Ozempic ficou tão famoso que virou assunto de novela e de redes sociais. Mas atenção: ele é um medicamento de uso contínuo para diabetes tipo 2. O Wegovy, com dose maior, foi aprovado especificamente para obesidade. Ambos exigem receita e acompanhamento médico!",
    },
    {
      titulo: "🧊 Armazenamento e Aplicação",
      subtitulo: "Cuidados essenciais com os injetáveis GLP-1",
      texto: `Os GLP-1 são medicamentos biológicos (proteínas) e, por isso, são muito sensíveis à temperatura. O armazenamento correto é CRÍTICO para a eficácia do tratamento.

🔹 Armazenamento na farmácia (antes da dispensação):
• Manter na geladeira entre 2°C e 8°C
• NUNCA congelar (se congelar, perde o efeito)
• Proteger da luz
• Verificar a data de validade antes de dispensar

🔹 Orientações ao cliente no balcão:
• Manter na geladeira até o primeiro uso
• Após aberto: pode ficar em temperatura ambiente (até 30°C) por até 30 dias (Ozempic/Wegovy) ou 28 dias (Mounjaro)
• NUNCA usar se o líquido estiver turvo, descolorido ou com partículas
• Aplicar 1 vez por semana, sempre no mesmo dia da semana
• Locais de aplicação: abdômen (preferencial), coxa ou braço
• Rotacionar os locais de aplicação para evitar nódulos
• A agulha é descartável — usar uma nova a cada aplicação

🔹 Efeitos colaterais comuns:
• Náusea (muito comum nas primeiras semanas)
• Vômito, diarreia ou constipação
• Perda de apetite
• Dor de cabeça
• A dose é iniciada baixa e aumentada gradualmente para minimizar os efeitos

🔹 Atenção: Orientar o cliente a procurar o médico se tiver:
• Dor abdominal intensa (pode ser pancreatite)
• Vômitos persistentes
• Alterações na visão
• Reações alérgicas`,
      imagem: "/imagens/injetaveis.webp",
      curiosidade: "A semaglutida (Ozempic/Wegovy) é uma versão sintética de um hormônio encontrado na saliva do monstro-de-gila, um lagarto venenoso do Arizona! A natureza inspirou uma das maiores revoluções farmacológicas da história.",
    },
  ],
};

/* ════════════════════════════════════════════
   SEÇÃO 3 — ARMAZENAMENTO DE MEDICAMENTOS
   ════════════════════════════════════════════ */

const armazenamento = {
  id: "armazenamento",
  titulo: "Armazenamento Correto de Medicamentos",
  destaque: "Temperatura, luz e umidade — os três inimigos dos medicamentos. Saiba como orientar seus clientes.",
  badges: ["Armazenamento", "Segurança", "Conservação"],
  topicos: [
    {
      titulo: "🌡️ Temperatura — o fator mais crítico",
      subtitulo: "Medicamentos não podem passar calor nem frio extremos",
      texto: `A temperatura inadequada é a principal causa de perda da eficácia dos medicamentos. Cada tipo tem suas exigências:

🔹 Temperatura ambiente (15°C a 30°C):
• A maioria dos comprimidos, cápsulas e drágeas
• Xaropes e suspensões (desde que não indicado outro armazenamento)
• Pomadas e cremes dermatológicos
• Cole calcários

⚠️ Cuidados com calor:
• NUNCA deixar medicamentos no carro — o interior pode passar de 60°C!
• Longe do fogão, forno e micro-ondas
• Em janelas ou locais que peguem sol direto
• Em cima da TV ou geladeira (locais que esquentam)

🔹 Geladeira (2°C a 8°C):
• Insulinas (não congelar!)
• Agonistas GLP-1 (Ozempic, Wegovy, Mounjaro) — antes de abrir
• Colírios (alguns, verificar bula)
• Probióticos
• Certos antibióticos líquidos (reconstituídos)
• Vacinas

🔹 Congelamento é PROIBIDO para praticamente todos os medicamentos. Se congelar, descarte e não use.

🔹 Dica para o cliente: compre um termômetro de geladeira para garantir que o compartimento de medicamentos está entre 2°C e 8°C.`,
      imagem: "/imagens/medicamento-prateleira.webp",
      curiosidade: "Estima-se que até 30% dos medicamentos armazenados em casa estejam em condições inadequadas de temperatura. O lugar mais comum de erro? O banheiro! O vapor do chuveiro e a variação de temperatura aceleram a degradação dos remédios.",
    },
    {
      titulo: "☀️ Luz — a degradação silenciosa",
      subtitulo: "Proteja os medicamentos da luz direta",
      texto: `Muitos medicamentos são fotossensíveis — a luz altera sua estrutura química e reduz a eficácia.

🔹 Por que a luz é perigosa?
• A radiação UV quebra as moléculas do princípio ativo
• O medicamento pode perder potência ou formar substâncias tóxicas
• As embalagens âmbar (marrom) protegem contra a luz — NUNCA retire o remédio da embalagem original!

🔹 Medicamentos mais sensíveis à luz:
• Nitroprussiato de sódio
• Nitrofurantoína
• Amoxicilina + Clavulanato
• Vitamina B12 (injetável)
• Anfotericina B
• Doxiciclina e outras tetraciclinas
• Soluções oftálmicas (colírios)

🔹 Orientações ao cliente:
• Guardar medicamentos em armário fechado (longe da luz)
• Não deixar comprimidos em cima da mesa ou balcão
• Manter na embalagem original (não transferir para potes genéricos)
• Blisters abertos podem ser guardados em pote opaco com tampa
• Colírios: fechar bem após usar e proteger da luz

🔹 No balcão: se o cliente reclama que o medicamento "não está fazendo efeito", pergunte como ele está armazenando. Pode ser um problema de conservação!`,
      imagem: "/imagens/principio-ativo.webp",
      curiosidade: "As embalagens âmbar não são por acaso — o vidro marrom/bloqueia comprimentos de onda entre 290-450 nm (UV e luz azul), que são justamente os que mais degradam princípios ativos. É uma tecnologia simples, mas incrivelmente eficaz!",
    },
    {
      titulo: "💧 Umidade — o inimigo invisível",
      subtitulo: "Banheiro e cozinha são os piores lugares para guardar remédios",
      texto: `A umidade acelera a degradação dos medicamentos e pode favorecer a contaminação por fungos e bactérias.

🔹 Problemas causados pela umidade:
• Comprimidos efervescentes perdem o gás
• Cápsulas moles grudam umas nas outras
• Pó para reconstituição forma grumos
• Adesivos transdérmicos perdem adesividade
• Pomadas e cremes podem contaminar-se com fungos
• A bula pode ficar ilegível (o papel úmido rasga)

🔹 Locais proibidos para armazenar medicamentos:
• 🚫 BANHEIRO (o pior lugar! — vapor, calor e umidade)
• 🚫 COZINHA perto do fogão (calor, vapor, gordura)
• 🚫 Janelas (luz solar direta)
• 🚫 Próximo à máquina de lavar (umidade constante)

🔹 Melhores lugares para guardar medicamentos:
• ✅ Quarto: gaveta ou armário alto (fora do alcance de crianças)
• ✅ Sala: armário fechado, em local fresco e seco
• ✅ Geladeira: somente os que exigem refrigeração, na prateleira do meio (não na porta!)

🔹 Dica importante: o silica gel (aquele saquinho que vem em algumas embalagens) ajuda a controlar a umidade. Não jogue fora!`,
      imagem: "/imagens/farmacia-balcao.webp",
      curiosidade: "O banheiro é o pior lugar da casa para guardar medicamentos, mas uma pesquisa mostrou que 40% das pessoas guardam remédios no armário do banheiro! O ciclo banho-vapor-secagem faz a temperatura e umidade variarem drasticamente várias vezes ao dia.",
    },
  ],
};

/* ════════════════════════════════════════════
   SEÇÃO 4 — USO CORRETO DE MEDICAMENTOS
   ════════════════════════════════════════════ */

const usoCorreto = {
  id: "uso-correto",
  titulo: "Uso Correto de Medicamentos",
  destaque: "Orientações práticas que todo atendente deve passar no balcão para garantir a eficácia e segurança do tratamento.",
  badges: ["Posologia", "Segurança", "Orientação"],
  topicos: [
    {
      titulo: "⏰ Horários e Posologia",
      subtitulo: "Tomar na hora certa faz toda diferença",
      texto: `Um dos maiores desafios dos pacientes é seguir o horário correto dos medicamentos. Veja as orientações para repassar no balcão:

🔹 A cada 8 horas (3x ao dia) — antibióticos, anti-inflamatórios:
• O ideal é tomar nos horários: 6h, 14h e 22h (ou: café, almoço e jantar)
• O intervalo é de 8 horas, não de 6h ou 12h!
• Manter o nível constante no sangue é essencial para a eficácia

🔹 A cada 12 horas (2x ao dia):
• Exemplo: 8h e 20h
• Mantém o nível do medicamento estável no sangue

🔹 1x ao dia:
• Escolher um horário fixo (ex: sempre ao acordar ou sempre ao jantar)
• Para pressão: de manhã (alguns médicos preferem à noite — seguir orientação)
• Para colesterol: geralmente à noite

🔹 Em jejum (1h antes ou 2h depois de comer):
• Levotiroxina (Puran T4) — tomar em jejum, 30 min antes do café
• Alguns antibióticos — verificar bula
• Bisfosfonatos (osteoporose) — em jejum, com água, aguardar 30 min

🔹 Durante as refeições:
• Metformina (diabetes) — durante ou logo após refeições para evitar enjoo
• Anti-inflamatórios — com comida para proteger o estômago
• Alguns antifúngicos

🔹 Dica de ouro para o cliente: usar alarme no celular para não esquecer os horários.`,
      imagem: "/imagens/bula.webp",
      curiosidade: "O horário mais esquecido pelos pacientes é o da noite (a cada 8h). Muita gente toma às 7h e 15h, mas esquece às 23h. Isso quebra o ciclo e reduz a eficácia, especialmente de antibióticos!",
    },
    {
      titulo: "💊 Interações Medicamentosas",
      subtitulo: "O que NÃO pode ser tomado junto",
      texto: `As interações entre medicamentos podem reduzir a eficácia ou causar efeitos perigosos. No balcão, você é a última barreira antes do paciente tomar algo errado.

🔹 Interações que todo atendente precisa conhecer:

1. Anticoncepcional + Antibiótico (Rifampicina) — reduz eficácia
2. Anti-inflamatórios (ibuprofeno, diclofenaco, nimesulida) + Anticoagulantes — risco de sangramento
3. Anti-inflamatórios + Remédio para pressão — pode reduzir o efeito do anti-hipertensivo
4. Corticoides + Anti-inflamatórios — risco aumentado de úlcera gástrica
5. Levotiroxina + Cálcio/Ferro/Antiácidos — tomar com 4h de diferença
6. Álcool + Benzodiazepínicos (Rivotril, Frontal) — potencialização perigosa
7. Álcool + Paracetamol — risco de lesão hepática
8. Suco de toranja/grapefruit + Estatinas (colesterol) — risco de toxicidade
9. Fitoterápico Erva-de-São-João + Anticoncepcional — reduz eficácia
10. Antiácidos + Antifúngicos/antibioticos — tomar com 2h de diferença

🔹 No balcão: SEMPRE pergunte ao cliente: "Quais outros remédios você está tomando?". Mesmo quem já usa há meses pode estar iniciando um novo tratamento.`,
      imagem: "/imagens/medicamentos.webp",
      curiosidade: "O suco de toranja (grapefruit) é um dos maiores causadores de interações medicamentosas. Ele inibe uma enzima do fígado responsável por metabolizar mais de 50 medicamentos diferentes, fazendo com que a concentração do remédio no sangue atinja níveis tóxicos!",
    },
    {
      titulo: "🧪 Tarjas e Classificação ANVISA",
      subtitulo: "Entenda a diferença entre MIP, tarja vermelha e tarja preta",
      texto: `Saber classificar os medicamentos pela tarja é fundamental para o atendimento no balcão:

🔹 Medicamentos ISENTOS DE PRESCRIÇÃO (MIP) — Tarja Verde:
• Podem ser vendidos sem receita médica
• Exemplos: dipirona, paracetamol, ibuprofeno (doses baixas), loratadina, simeticona
• O atendente pode orientar e sugerir (dentro dos limites legais)
• Atenção: mesmo sem receita, é importante perguntar sobre outros medicamentos em uso

🔹 Medicamentos TARJA VERMELHA:
• Exigem receita médica (retenção ou não, conforme o caso)
• Antimicrobianos (RDC 471) — receita retida
• Anti-inflamatórios de dose alta
• Anticoncepcionais
• A receita pode ser comum (não precisa de modelo especial)

🔹 Medicamentos TARJA PRETA:
• Exigem receita de controle especial (B1) ou notificação de receita (A)
• Maior potencial de dependência ou risco
• Exemplos: Rivotril, Frontal, Ritalina, Zolpidem
• Receita retida na farmácia sempre

🔹 Medicamentos RETINÓIDES:
• Isotretinoína (Roacutan) — exige termo de consentimento e receita especial
• Controle rigoroso devido ao risco de malformações fetais
• Exige acompanhamento médico com exames de sangue regulares

🔹 Importante: no Brasil, a farmácia é um estabelecimento de saúde (Lei 13.021/2014). O atendente pode orientar, mas a responsabilidade técnica é do farmacêutico.`,
      imagem: "/imagens/tarjas.webp",
      curiosidade: "A dipirona (metamizol) é um dos analgésicos mais vendidos no Brasil, mas é proibida em mais de 30 países (incluindo EUA, Reino Unido e Japão) devido ao risco raro de agranulocitose — uma queda drástica dos glóbulos brancos. Isso mostra como a regulamentação varia no mundo!",
    },
  ],
};

/* ════════════════════════════════════════════
   COMPONENTE DE SEÇÃO REUTILIZÁVEL
   ════════════════════════════════════════════ */

function SecaoConteudo({
  bloco,
  idx,
}: {
  bloco: typeof receituarios;
  idx: number;
}) {
  return (
    <section
      id={bloco.id}
      className={`relative py-20 sm:py-28 ${idx % 2 === 0 ? "bg-surface" : "bg-surface-2"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {bloco.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500/10 to-gold-500/10 px-3 py-1 text-[11px] font-semibold text-gold-700 dark:text-gold-300 dark:from-gold-900/20 dark:to-gold-900/20"
                >
                  {b}
                </span>
              ))}
            </div>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-navy-700 dark:text-white">
              {bloco.titulo}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-orange-600 font-medium dark:text-orange-400">
              {bloco.destaque}
            </p>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-orange-400 to-transparent" />
          </div>
        </FadeUp>

        <div className="mt-12 space-y-16">
          {bloco.topicos.map((topico, tIdx) => (
            <FadeUp key={tIdx} delay={tIdx * 80}>
              <article className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-start">
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-bold text-navy-700 dark:text-white/90">
                    {topico.titulo}
                  </h3>
                  <p className="text-sm text-subtle mt-1 mb-5">
                    {topico.subtitulo}
                  </p>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted [&_strong]:text-foreground [&_strong]:dark:text-white/90">
                    {topico.texto.split("\n\n").map((par, pIdx) => (
                      <p key={pIdx}>{par}</p>
                    ))}
                  </div>

                  {topico.curiosidade && (
                    <div className="mt-6 rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50 to-white p-5 dark:from-orange-900/10 dark:to-navy-800">
                      <div className="flex gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg dark:bg-orange-900/30">
                          <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-orange-500 mb-1">
                            Sabia que?
                          </p>
                          <p className="text-sm leading-relaxed text-muted dark:text-white/70">
                            {topico.curiosidade}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={topico.imagem}
                      alt={`Ilustração: ${topico.titulo}`}
                      width={600}
                      height={450}
                      className="w-full h-auto aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ════════════════════════════════════════════ */

const secoes = [receituarios, glp1, armazenamento, usoCorreto];

function BadgeControlados() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/10 px-3 py-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 dark:from-blue-900/20 dark:to-blue-800/10">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      ANVISA
    </div>
  );
}

export default function MedicamentosGuiaPage() {
  const stats = [
    { value: "8", label: "tópicos" },
    { value: "4", label: "seções" },
    { value: "ANVISA", label: "referências" },
  ];

  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-navy-800">
        <Image
          src="/imagens/hero_medicamentos.webp"
          alt="Medicamentos organizados em prateleira de farmácia"
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-navy-700/80 via-navy-600/50 to-blue-500/20" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <FadeUp>
            <div className="max-w-3xl">
              <BadgeControlados />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/20 px-3 py-1 text-[11px] font-semibold text-gold-300 ml-2">
                Guia prático
              </span>

              <h1 className="mt-5 text-[clamp(2rem,5vw,3.8rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
                <span className="text-white">Guia de Medicamentos</span>
                <br />
                <span className="text-white/70 font-light">para Atendentes de Farmácia</span>
              </h1>

              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
                Tudo sobre <span className="text-white/80 font-medium">receituários, controlados, antibióticos, GLP-1, armazenamento e uso seguro</span> — direto ao ponto para o dia a dia no balcão.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-orange-400 tabular-nums">
                      {s.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-white/40 font-medium">
                      {s.label}
                    </span>
                    <span className="hidden sm:block w-px h-4 bg-white/10 last:hidden" />
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {secoes.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all"
                  >
                    {s.titulo}
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">Explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTEÚDO PRINCIPAL
          ════════════════════════════════════════════ */}
      {secoes.map((bloco, idx) => (
        <SecaoConteudo key={bloco.id} bloco={bloco} idx={idx} />
      ))}

      {/* ════════════════════════════════════════════
          SEÇÃO — DICAS PRÁTICAS DIÁRIAS
          ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-surface overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                cor: "emerald", titulo: "Dica do dia",
                texto: "Sempre confira a <strong>data de validade</strong> e o <strong>lote</strong> do medicamento antes de dispensar. Um medicamento vencido perde eficácia e pode fazer mal."
              },
              {
                cor: "orange", titulo: "No balcão",
                texto: "Se o cliente pedir um medicamento controlado sem receita, <strong>oriente com educação</strong>: explique que a legislação exige prescrição para proteger a saúde dele."
              },
              {
                cor: "emerald", titulo: "Segurança",
                texto: "Medicamentos com nomes ou embalagens parecidas (look-alike, sound-alike) são causa comum de erro de dispensação. <strong>Leia o rótulo duas vezes</strong> antes de entregar."
              },
            ].map((card, i) => (
              <FadeUp key={card.titulo} delay={i * 80}>
                <div className={`rounded-2xl border border-${card.cor}-100 bg-gradient-to-br from-${card.cor}-50 to-white p-6 dark:from-${card.cor}-900/10 dark:to-navy-500`}>
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-${card.cor}-100 text-${card.cor}-600 dark:bg-${card.cor}-900/30`}>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    </span>
                    <h3 className="text-sm font-bold text-navy-700 dark:text-white">{card.titulo}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted" dangerouslySetInnerHTML={{ __html: card.texto }} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO — O FARMACÊUTICO RECOMENDA
          ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-navy-800 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-[11px] font-semibold text-orange-300 mb-6">
                Farmacêutico responsável
              </div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.02em] text-white">
                O farmacêutico recomenda
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                Este guia foi elaborado com base nas normas da ANVISA, resoluções do Conselho Federal de Farmácia (CFF) e nas boas práticas de dispensação. Conteúdo educativo — não substitui a consulta ao farmacêutico ou médico.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/bulas-receitas"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm hover:bg-white/15 hover:text-white transition-all"
                >
                  Bulas e receitas →
                </Link>
                <Link
                  href="/biblioteca"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm hover:bg-white/15 hover:text-white transition-all"
                >
                  Biblioteca regulatória →
                </Link>
                <Link
                  href="/jogos"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm hover:bg-white/15 hover:text-white transition-all"
                >
                  Jogos de balcão →
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO — REFERÊNCIAS OFICIAIS
          ════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 bg-surface-2 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-subtle mb-4">
                Referências oficiais
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "ANVISA — Bulário Eletrônico", href: "https://www.gov.br/anvisa/pt-br/sistemas/bulario-eletronico" },
                  { label: "Portaria 344/98 (Controlados)", href: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/controlados" },
                  { label: "RDC 471/2021 (Antimicrobianos)", href: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/antibioticos" },
                  { label: "CFF — Conselho Federal de Farmácia", href: "https://www.cff.org.br/" },
                  { label: "OMS — Resistência Antimicrobiana", href: "https://www.who.int/health-topics/antimicrobial-resistance" },
                ].map((ref) => (
                  <a
                    key={ref.label}
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-medium text-subtle hover:text-orange-500 hover:border-orange-300 transition-all"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    {ref.label}
                  </a>
                ))}
              </div>
              <p className="mt-6 text-[11px] text-subtle">
                Conteúdo atualizado em junho de 2026. Consulte sempre as fontes oficiais para versões mais recentes.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
