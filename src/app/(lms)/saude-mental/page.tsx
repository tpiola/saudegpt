"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  MessageCircle,
  Users,
  AlertTriangle,
  BookOpen,
  Phone,
} from "lucide-react";
import { ScrollReveal } from "@/components/lms-shell";
import { Card } from "@/components/ui";

/* ── Content Data ── */

const heroCards = [
  {
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-200 dark:border-rose-800",
    title: "O que é Saúde Mental?",
    text: "Saúde mental é o estado de bem-estar emocional, psicológico e social que permite ao indivíduo lidar com os desafios da vida, desenvolver suas habilidades, aprender e trabalhar bem, e contribuir com a comunidade. Na farmácia, o atendente é muitas vezes o primeiro ponto de contato — e um olhar atento pode fazer toda a diferença.",
  },
  {
    icon: Shield,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    title: "Primeiros Socorros em Saúde Mental",
    text: "Assim como os primeiros socorros físicos, os primeiros socorros em saúde mental são ações imediatas para oferecer apoio a alguém em sofrimento. O protocolo ALG (Avaliar, Escutar, Guiar) é recomendado: avalie sinais de crise, escute sem julgamentos e guie a pessoa aos recursos adequados.",
  },
  {
    icon: MessageCircle,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    title: "Acolhimento na Ansiedade",
    text: "A ansiedade é a condição de saúde mental mais prevalente no Brasil, afetando 9,3% da população. Na farmácia, o acolhimento começa com a escuta ativa: mantenha contato visual, valide o sentimento ('é compreensível se sentir assim'), evite frases como 'fica calmo' ou 'não é nada', e respire junto com o cliente se perceber aceleração.",
  },
  {
    icon: Users,
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    title: "Depressão — Como Ajudar",
    text: "A depressão não é 'tristeza passageira' — é um transtorno que afeta o humor, o sono, o apetite e a energia. No balcão: pergunte 'como posso ajudar hoje?', ouça com paciência, evite dar conselhos simplistas ('é só pensar positivo'), incentive a busca por ajuda profissional e jamais minimize o sofrimento relatado.",
  },
  {
    icon: BookOpen,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    title: "Técnicas de Comunicação",
    text: "Para temas sensíveis, use a comunicação empática: valide emoções ('percebo que isso te preocupa'), perguntas abertas ('como você tem se sentido?'), silêncio acolhedor (não interrompa pausas), linguagem simples (evite termos técnicos), e devolutiva acolhedora ('obrigado por compartilhar').",
  },
  {
    icon: AlertTriangle,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-800",
    title: "Sinais de Alerta",
    text: "Fique atento a: isolamento social repentino, falas sobre morte ou desesperança, alterações extremas de humor, abandono da aparência pessoal, doação de pertences, consumo excessivo de álcool ou medicamentos. Ao identificar, não deixe a pessoa sozinha e acione o CVV (188) ou SAMU (192).",
  },
];

const protocolos = [
  {
    passo: "01",
    titulo: "Avaliar",
    descricao:
      "Observe sinais de risco: agitação extrema, choro inconsolável, desorientação, falas sobre morte. Verifique se há risco imediato.",
  },
  {
    passo: "02",
    titulo: "Escutar",
    descricao:
      "Ofereça presença genuína. Sente-se ao lado da pessoa se possível. Use contato visual suave. Não julgue, não interrompa, não ofereça soluções rápidas.",
  },
  {
    passo: "03",
    titulo: "Guiar",
    descricao:
      "Pergunte se já buscou ajuda. Informe sobre o CVV (188), CAPS mais próximo, ou psicólogo da rede. Em crise grave, não hesite em acionar emergência.",
  },
];

const encaminhamento = [
  {
    nome: "CVV — Centro de Valorização da Vida",
    contato: "Ligue 188 (24h, gratuito)",
    descricao:
      "Atendimento emocional sigiloso e gratuito. Também atende por chat e e-mail no site www.cvv.org.br.",
  },
  {
    nome: "CAPS — Centro de Atenção Psicossocial",
    contato: "Busque o CAPS mais próximo da sua região",
    descricao:
      "Unidade do SUS especializada em saúde mental. Oferece atendimento multiprofissional gratuito. Ideal para encaminhamento de casos moderados a graves.",
  },
  {
    nome: "UPA 24h / Pronto-Socorro",
    contato: "Emergência: SAMU 192",
    descricao:
      "Em casos de surto psicótico, ideação suicida ativa ou intoxicação, o atendimento deve ser de urgência. Não hesite em chamar o SAMU.",
  },
];

/* ── Animation Variants ── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function SaudeMentalPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* ═══ HERO ═══ */}
      <ScrollReveal>
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 sm:p-12">
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_60%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold text-rose-300 backdrop-blur-sm">
              <Heart size={12} className="text-rose-400" />
              Gente que cuida de gente
            </span>
            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Saúde Mental
              <span className="block text-lg font-normal text-white/60 sm:text-xl">
                na Prática da Farmácia
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              A farmácia é, muitas vezes, o primeiro lugar onde uma pessoa em
              sofrimento busca acolhimento. Saber ouvir, reconhecer sinais de
              alerta e encaminhar corretamente salva vidas. Este módulo prepara
              você para ser um ponto de apoio seguro e humanizado.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                <Heart size={10} /> Acolhimento
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                <Shield size={10} /> Primeiros Socorros
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                <Users size={10} /> Rede de Apoio
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══ CARDS INFORMATIVOS ═══ */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {heroCards.map((card, idx) => (
          <motion.div key={card.title} variants={itemVariants}>
            <Card className="group relative h-full overflow-hidden border border-border/60 bg-surface/90 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/30 hover:shadow-lg hover:shadow-gold-400/5">
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="p-6">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${card.bg} ${card.border} border`}
                >
                  <card.icon size={24} className={card.color} />
                </div>
                <h3 className="text-base font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* ═══ PROTOCOLO ALG ═══ */}
      <ScrollReveal>
        <section className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-lg">
              <Shield size={20} />
            </span>
            <div>
              <h2 className="text-xl font-extrabold">
                Protocolo ALG — Primeiros Socorros em Saúde Mental
              </h2>
              <p className="text-sm text-muted-foreground">
                Avaliar · Escutar · Guiar — o passo a passo para situações
                sensíveis no balcão
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {protocolos.map((p, idx) => (
              <motion.div
                key={p.passo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.4 }}
                className="relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-gold-400/30 hover:shadow-md"
              >
                {/* Number */}
                <span className="absolute -right-4 -top-4 text-[5rem] font-black leading-none text-gold-400/10 select-none">
                  {p.passo}
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 text-sm font-bold text-gold-600 dark:text-gold-400">
                  {p.passo}
                </span>
                <h3 className="mt-4 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ REDE DE APOIO ═══ */}
      <ScrollReveal>
        <section className="mt-16">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <Phone size={12} />
              Encaminhamento responsável
            </span>
            <h2 className="mt-3 text-xl font-extrabold">
              Rede de Apoio e Encaminhamento
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Saiba para onde orientar quando o acolhimento na farmácia não é
              suficiente
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {encaminhamento.map((item, idx) => (
              <motion.div
                key={item.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.4 }}
                className="rounded-xl border border-border bg-gradient-to-br from-surface to-surface-2/50 p-6"
              >
                <h3 className="text-sm font-bold">{item.nome}</h3>
                <p className="mt-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {item.contato}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.descricao}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Destaque CVV */}
          <Card className="mt-6 border-l-4 border-l-rose-500 bg-gradient-to-r from-rose-50/50 to-transparent dark:from-rose-950/20">
            <div className="flex items-start gap-4 p-5">
              <Heart
                size={24}
                className="mt-0.5 flex-none text-rose-500"
                fill="currentColor"
              />
              <div>
                <p className="font-bold text-rose-700 dark:text-rose-300">
                  Lembre-se: você não é terapeuta, mas pode ser a ponte.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  O papel do atendente de farmácia é acolher com respeito,
                  reconhecer os próprios limites e encaminhar para profissionais
                  qualificados. Um gesto de escuta pode ser o primeiro passo
                  para alguém buscar a ajuda que precisa.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </ScrollReveal>

      {/* ═══ DICAS PRÁTICAS ═══ */}
      <ScrollReveal>
        <section className="mt-16">
          <div className="mb-6">
            <h2 className="text-xl font-extrabold">
              💬 Frases que Acolhem × Frases que Afastam
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pequenas mudanças na comunicação transformam o atendimento
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* O que fazer */}
            <Card className="border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50/30 to-transparent dark:from-emerald-950/10">
              <div className="p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  ✅ Faça
                </span>
                <ul className="mt-4 space-y-3">
                  {[
                    '"Estou aqui para ouvir você."',
                    '"Isso que você está sentindo é compreensível."',
                    '"Você não está sozinho(a)."',
                    '"Que bom que você veio falar sobre isso."',
                    '"Existem profissionais que podem ajudar."',
                  ].map((frase) => (
                    <li
                      key={frase}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 flex-none text-emerald-500 text-lg leading-none">
                        ✓
                      </span>
                      <em>{frase}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* O que evitar */}
            <Card className="border-l-4 border-l-rose-500 bg-gradient-to-r from-rose-50/30 to-transparent dark:from-rose-950/10">
              <div className="p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
                  ❌ Evite
                </span>
                <ul className="mt-4 space-y-3">
                  {[
                    '"Fica calmo, não é nada."',
                    '"Isso é falta de Deus/fé."',
                    '"Já pensou em fazer exercício?"',
                    '"Tem gente em situação pior."',
                    '"Isso é frescura / falta de vergonha."',
                  ].map((frase) => (
                    <li
                      key={frase}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 flex-none text-rose-500 text-lg leading-none">
                        ✗
                      </span>
                      <em>{frase}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ FOOTER DISCLAIMER ═══ */}
      <div className="mt-16 rounded-xl border border-border/60 bg-surface-2/60 p-5 text-xs leading-relaxed text-subtle">
        <p className="font-semibold text-foreground">⚠️ Atenção</p>
        <p className="mt-1">
          Este conteúdo é educativo e tem como objetivo capacitar atendentes de
          farmácia para o acolhimento inicial. Em nenhuma circunstância substitui
          avaliação de profissionais de saúde mental (psicólogos, psiquiatras,
          assistentes sociais). Em caso de crise, acione imediatamente o CVV
          (188) ou SAMU (192).
        </p>
      </div>
    </div>
  );
}
