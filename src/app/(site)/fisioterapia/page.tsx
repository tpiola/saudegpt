'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const topicos = [
  { titulo: "Fundamentos da Fisioterapia", desc: "Princípios básicos da fisioterapia para o contexto farmacêutico." },
  { titulo: "Equipamentos Ortopédicos na Farmácia", desc: "Orientação sobre órteses, coletes e produtos de apoio." },
  { titulo: "Lesões Comuns e Cuidados", desc: "Identificação e primeiros cuidados para lesões musculoesqueléticas." },
  { titulo: "Reabilitação Básica", desc: "Noções de reabilitação para auxiliar pacientes em recuperação." },
  { titulo: "Produtos para Bem-Estar Físico", desc: "Recomendação de produtos que promovem saúde e conforto físico." },
  { titulo: "Prevenção de Quedas", desc: "Estratégias preventivas para idosos e pacientes com mobilidade reduzida." },
];

const beneficios = [
  { icone: "🦴", titulo: "Base Sólida", desc: "Entenda os fundamentos essenciais da fisioterapia para a farmácia." },
  { icone: "🛒", titulo: "Produtos Certos", desc: "Saiba recomendar equipamentos ortopédicos com segurança." },
  { icone: "🎓", titulo: "Certificado Reconhecido", desc: "Certificado digital válido em todo território nacional." },
  { icone: "⏱️", titulo: "Curso 100% Online", desc: "Estude no seu ritmo, com acesso vitalício ao conteúdo." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

export default function FisioterapiaPage() {
  return (
    <div className="min-h-dvh bg-[#050F0D] text-[#EDF0EC]">
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative px-4 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold-500/8 blur-[150px]" />
            <div className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400/80"
            >
              Curso Completo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent"
            >
              Fisioterapia e Bem-Estar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#A0B0A8] sm:text-lg"
            >
              Entenda os fundamentos da fisioterapia e como orientar pacientes sobre cuidados
              musculoesqueléticos, equipamentos ortopédicos e reabilitação básica no contexto da farmácia.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="/#matricula"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-8 py-3 text-base font-extrabold text-[#042f29] shadow-lg shadow-emerald-500/10 transition-all hover:bg-white/90 hover:shadow-emerald-500/20 hover:scale-[1.03] active:scale-[0.98]"
              >
                Quero me matricular
              </a>
            </motion.div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...fadeUp}
              className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold-400/80"
            >
              Benefícios
            </motion.h2>
            <motion.h3
              {...fadeUp}
              className="mb-12 text-center text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Por que fazer este curso?
            </motion.h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {beneficios.map((b, i) => (
                <motion.div
                  key={b.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-gold-500/25 hover:bg-white/[0.07]"
                >
                  <span className="inline-block text-3xl">{b.icone}</span>
                  <h4 className="mt-4 text-lg font-bold text-white">{b.titulo}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#A0B0A8]">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              {...fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400/80"
            >
              Público-Alvo
            </motion.h2>
            <motion.h3
              {...fadeUp}
              className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Para quem é este curso?
            </motion.h3>
            <motion.div {...fadeUp} className="grid gap-4 sm:grid-cols-2 text-left">
              {[
                "Atendentes e balconistas de farmácia",
                "Profissionais que vendem equipamentos ortopédicos",
                "Farmacêuticos que desejam expandir seus conhecimentos",
                "Estudantes de fisioterapia e áreas da saúde",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-0.5 shrink-0 text-gold-400">✓</span>
                  <span className="text-[#A0B0A8]">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Conteúdo Programático */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              {...fadeUp}
              className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold-400/80"
            >
              Grade Curricular
            </motion.h2>
            <motion.h3
              {...fadeUp}
              className="mb-12 text-center text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Conteúdo Programático
            </motion.h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topicos.map((t, i) => (
                <motion.div
                  key={t.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:border-gold-500/25 hover:bg-white/[0.07]"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/20 text-sm font-bold text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-base font-bold text-white">{t.titulo}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#A0B0A8]">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selo + CTA Final */}
        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block rounded-2xl border border-gold-500/20 bg-gold-500/5 px-6 py-4 backdrop-blur"
            >
              <p className="text-sm font-semibold text-gold-400/90">
                Criado pelo Farmacêutico Thiago Piola — CRF/SP 58.519
              </p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Expanda sua capacidade de atendimento
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-4 max-w-xl text-base text-[#A0B0A8]"
            >
              Aprenda a orientar sobre fisioterapia e bem-estar com segurança e confiança.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="/#matricula"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-8 py-3 text-base font-extrabold text-[#042f29] shadow-lg shadow-emerald-500/10 transition-all hover:bg-white/90 hover:shadow-emerald-500/20 hover:scale-[1.03] active:scale-[0.98]"
              >
                Quero me matricular
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
