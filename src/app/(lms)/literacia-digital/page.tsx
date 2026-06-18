"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Globe,
  Headphones,
  Shield,
  Search,
  QrCode,
  CreditCard,
} from "lucide-react";
import { ScrollReveal } from "@/components/lms-shell";
import { Card } from "@/components/ui";

/* ── Content Data ── */

const sections = [
  {
    icon: Smartphone,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    title: "Apps de Saúde Essenciais",
    text: "O atendente de farmácia moderno precisa conhecer os aplicativos que os clientes usam no dia a dia. O Meu SUS Digital (antigo ConecteSUS) permite acesso a histórico vacinal, exames e receitas. O e-SUS APS é usado nas UBS para registro de atendimentos. Apps de redes de farmácia (Drogasil, Pague Menos, etc.) oferecem programas de fidelidade e descontos. Conhecer essas ferramentas ajuda a orientar o cliente com segurança.",
    topicos: [
      "Meu SUS Digital — histórico clínico, vacinas e receitas",
      "Daf — Portal de Medicamentos do SUS (acesso a protocolos)",
      "Anvisa Alerta — notificações de recall e interdição",
      "App de redes — programas de fidelidade e tele-entrega",
      "Calculadoras clínicas — IMC, clearance renal, qSOFA",
    ],
  },
  {
    icon: Monitor,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    title: "Dispositivos de Monitoramento",
    text: "A farmácia é o local ideal para aferição de parâmetros de saúde. Saiba orientar o cliente sobre o uso correto de cada equipamento: glicosímetro (medição de glicemia capilar), medidor de pressão arterial (esfigmomanômetro digital), termômetros infravermelhos, oxímetros de pulso e balanças bioimpedância. A calibração e o uso correto evitam erros de medição que podem levar a decisões erradas de tratamento.",
    topicos: [
      "Glicosímetro — punção na lateral da ponta do dedo, menos dolorida",
      "Medidor de Pressão — braço apoiado na altura do coração, sem falar durante a medição",
      "Oxímetro — unha sem esmalte, mão aquecida para leitura fiel",
      "Termômetro infravermelho — 3 a 5 cm da testa, sem contato direto",
      "Balanças — medir sempre no mesmo horário e com roupas leves",
    ],
  },
  {
    icon: Globe,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    title: "E-commerce Farmacêutico",
    text: "As vendas online de medicamentos isentos de prescrição (MIPs) e produtos de higiene crescem exponencialmente. A Anvisa regula o comércio eletrônico de medicamentos pela RDC 570/2021. A farmácia online deve ter autorização da Anvisa, endereço físico visível e farmacêutico responsável identificado. Oriente o cliente a verificar o selo 'Farmácia Autorizada' no site e jamais comprar medicamentos de fontes não oficiais.",
    topicos: [
      "Verifique o selo 'Farmácia Autorizada' da Anvisa no site",
      "Medicamentos controlados NÃO podem ser vendidos online (com exceção de remédios de notificação)",
      "Desconfie de descontos excessivos — falsificações são mais comuns online",
      "Produtos ilegais: anabolizantes, medicamentos sem registro, 'fórmulas milagrosas'",
      "A orientação do farmacêutico deve ser acessível no ambiente virtual",
    ],
  },
  {
    icon: Headphones,
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    title: "Teleatendimento e Telemedicina",
    text: "A telemedicina foi regulamentada no Brasil pela Lei 14.510/2022 e pela Resolução CFM 2.314/2022, permitindo consultas médicas por videoconferência. Na farmácia, o teleatendimento pode ser um serviço de valor agregado: o cliente conversa com um farmacêutico ou médico à distância na própria farmácia. Orientações sobre uso de medicamentos, dúvidas de posologia e acompanhamento de tratamentos crônicos são os serviços mais procurados.",
    topicos: [
      "Plataformas regulares: Consulta Remota, Dr. Consulta, Alice",
      "Farmácia pode ofertar teleconsultas em sala reservada com privacidade",
      "Resolução CFM 2.314/2022 exige consentimento do paciente e registro do atendimento",
      "Telefarmacia: acompanhamento farmacoterapêutico remoto regulamentado",
      "A qualidade da conexão e a privacidade do ambiente são requisitos legais",
    ],
  },
  {
    icon: Shield,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-200 dark:border-rose-800",
    title: "Proteção de Dados do Paciente (LGPD)",
    text: "A Lei Geral de Proteção de Dados (Lei 13.709/2018) estabelece regras rigorosas para coleta, uso e compartilhamento de dados pessoais dos clientes. Na farmácia, isso inclui nome, CPF, endereço, histórico de compras e medicamentos. O consentimento deve ser livre, informado e inequívoco. O cliente tem direito de acessar, corrigir e solicitar a exclusão de seus dados a qualquer momento.",
    topicos: [
      "Consentimento — colete apenas o necessário e explique o uso",
      "Base legal — dados de saúde exigem consentimento específico",
      "Direitos do titular — acesso, correção, exclusão e portabilidade",
      "Segurança — sistema com criptografia e acesso restrito por perfil",
      "ANPD — Autoridade Nacional pode multar em até 2% do faturamento",
    ],
  },
];

/* ── Animation Variants ── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ── Page Component ── */

export default function LiteraciaDigitalPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* ═══ HERO ═══ */}
      <ScrollReveal>
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 sm:p-12">
          {/* Tech pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-sm">
              <Smartphone size={12} className="text-emerald-400" />
              Tecnologia e cuidado
            </span>
            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Literacia Digital
              <span className="block text-lg font-normal text-white/60 sm:text-xl">
                para Atendentes de Farmácia
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              A tecnologia transformou a farmácia. Aplicativos, dispositivos de
              monitoramento, telemedicina e e-commerce fazem parte do dia a dia
              do atendente. Saber orientar o cliente sobre essas ferramentas com
              segurança e ética é uma competência essencial.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                <Smartphone size={10} /> Apps de Saúde
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                <Monitor size={10} /> Dispositivos
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                <Shield size={10} /> LGPD
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                <Globe size={10} /> E-commerce
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══ SEÇÕES PRINCIPAIS ═══ */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-8"
      >
        {sections.map((sec) => (
          <motion.div key={sec.title} variants={itemVariants}>
            <Card className="group relative overflow-hidden border border-border/60 bg-surface/90 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/30 hover:shadow-lg hover:shadow-gold-400/5">
              {/* Subtil accent line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl ${sec.bg} ${sec.border} border shadow-sm transition-transform duration-300 group-hover:scale-105`}
                  >
                    <sec.icon size={28} className={sec.color} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-extrabold">{sec.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {sec.text}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {sec.topicos.map((t) => (
                        <li
                          key={t}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <span
                            className={`mt-0.5 flex-none text-xs ${sec.color}`}
                          >
                            ▸
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* ═══ DIREITOS LGPD (Destaque) ═══ */}
      <ScrollReveal>
        <section className="mt-16">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
              <Shield size={12} />
              Lei 13.709/2018
            </span>
            <h2 className="mt-3 text-xl font-extrabold">
              LGPD na Farmácia — Direitos do Paciente
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              O que todo atendente precisa saber sobre proteção de dados
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Search,
                label: "Direito de Acesso",
                desc: "O cliente pode solicitar todos os dados que a farmácia armazena sobre ele.",
              },
              {
                icon: QrCode,
                label: "Correção de Dados",
                desc: "Dados incorretos ou desatualizados devem ser corrigidos imediatamente.",
              },
              {
                icon: CreditCard,
                label: "Exclusão de Dados",
                desc: "O cliente pode solicitar a exclusão de seus dados a qualquer momento (com exceções legais).",
              },
              {
                icon: Shield,
                label: "Consentimento Explícito",
                desc: "Dados de saúde exigem autorização clara e específica do titular.",
              },
              {
                icon: Globe,
                label: "Portabilidade",
                desc: "O cliente tem direito de levar seus dados para outra empresa em formato digital.",
              },
              {
                icon: Headphones,
                label: "Canal de Atendimento",
                desc: "A farmácia deve ter um canal para o cliente exercer seus direitos (DPO).",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-gold-400/30 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-500 dark:bg-rose-950/30 dark:text-rose-400">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-3 text-sm font-bold">{item.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <Card className="mt-6 border-l-4 border-l-rose-500 bg-gradient-to-r from-rose-50/30 to-transparent dark:from-rose-950/10">
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                ⚠️ Atenção — Multas ANPD
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                A Autoridade Nacional de Proteção de Dados (ANPD) pode aplicar
                multas de até 2% do faturamento da empresa (limitado a R$ 50
                milhões por infração). O vazamento de dados de saúde é
                considerado infração grave e pode gerar sanções administrativas,
                judiciais e danos reputacionais irreparáveis. Todo cuidado é
                pouco.
              </p>
            </div>
          </Card>
        </section>
      </ScrollReveal>

      {/* ═══ CHECKLIST ═══ */}
      <ScrollReveal>
        <section className="mt-16">
          <div className="mb-6">
            <h2 className="text-xl font-extrabold">
              ✅ Checklist Digital do Atendente
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              O que você precisa saber para atender na farmácia do século XXI
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Conheço o app Meu SUS Digital e sei orientar o cliente",
              "Sei explicar o uso correto de glicosímetro e medidor de pressão",
              "Oriento o cliente a verificar o selo 'Farmácia Autorizada' da Anvisa",
              "Entendo que medicamentos controlados não podem ser vendidos online",
              "Respeito a privacidade em teleatendimentos (ambiente fechado)",
              "Não compartilho dados de clientes sem consentimento explícito",
              "Sei informar os direitos LGPD do paciente",
              "Reconheço sinais de fraude em e-commerce (preços muito baixos)",
              "Registro corretamente os atendimentos no sistema da farmácia",
              "Atualizo-me sobre novas tecnologias e regulamentações",
            ].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
                className="flex items-start gap-3 rounded-lg border border-border/60 bg-surface/80 p-3 text-sm text-muted-foreground transition-all duration-200 hover:border-emerald-400/30 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/10"
              >
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px] text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                  ✓
                </span>
                {item}
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ FOOTER DISCLAIMER ═══ */}
      <div className="mt-16 rounded-xl border border-border/60 bg-surface-2/60 p-5 text-xs leading-relaxed text-subtle">
        <p className="font-semibold text-foreground">📋 Nota Técnica</p>
        <p className="mt-1">
          Este conteúdo é atualizado conforme as legislações vigentes (RDC
          570/2021, Lei 14.510/2022, Resolução CFM 2.314/2022, Lei 13.709/2018).
          Consulte sempre os canais oficiais (Anvisa, CFM, ANPD) para
          regulamentações atualizadas. As tecnologias e apps mencionados são
        </p>
      </div>
    </div>
  );
}
