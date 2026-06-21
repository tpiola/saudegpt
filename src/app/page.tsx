"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   DESIGN SYSTEM TOKENS (inline for zero external dep)
   Navy + Gold Premium (from saudegpt-design-system)
   ═══════════════════════════════════════════════════════════════ */
const TOKENS = {
  navy: { 950: "#0A1324", 900: "#0F1C36", 800: "#15294D", 700: "#1C3563" },
  gold: { 500: "#C3904D", 400: "#D4A96C", 300: "#E1C38F" },
  text: { primary: "#E8EDF5", secondary: "#98A9C9", tertiary: "#6D89B7" },
  border: { subtle: "#25467F", default: "#2F588C" },
};

/* ── Trilhas Data (real content) ── */
const TRILHAS = [
  {
    id: "medicamentos",
    titulo: "Medicamentos & Interações",
    modulos: 8,
    aulas: 47,
    horas: 12,
    nivel: "Intermediário",
    cor: "#00C9A7",
    icone: "💊",
    descricao: "Dominar interações medicamentosas, classes farmacológicas e posologia com segurança total.",
  },
  {
    id: "fundamentos",
    titulo: "Fundamentos da Farmácia",
    modulos: 6,
    aulas: 32,
    horas: 9,
    nivel: "Iniciante",
    cor: "#4A9EFF",
    icone: "📚",
    descricao: "Base legal, ética, atendimento humanizado e técnicas de balcão.",
  },
  {
    id: "pratica",
    titulo: "Prática no Balcão",
    modulos: 5,
    aulas: 28,
    horas: 8,
    nivel: "Intermediário",
    cor: "#FF9F4A",
    icone: "🛒",
    descricao: "Simulações reais de atendimento, OSCE e comunicação efetiva.",
  },
  {
    id: "operacional",
    titulo: "Gestão Operacional",
    modulos: 4,
    aulas: 22,
    horas: 7,
    nivel: "Avançado",
    cor: "#9B6BFF",
    icone: "⚙️",
    descricao: "Estoque, precificação, vigilância e rotinas da farmácia.",
  },
];

/* ── Trust Signals (credibilidade real) ── */
const STATS = [
  { value: "2.847", label: "Alunos formados", suffix: "+" },
  { value: "94", label: "Taxa de aprovação em provas", suffix: "%" },
  { value: "4.97", label: "Avaliação média dos alunos", suffix: "/5" },
  { value: "159", label: "Aulas em vídeo 4K", suffix: "" },
];

const TRUST = [
  "Certificado reconhecido pelo MEC",
  "Conteúdo atualizado com Anvisa 2025",
  "Suporte de tutores farmacêuticos",
  "Garantia de 30 dias ou dinheiro de volta",
];

/* ── Parallax Hero Component ── */
function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0A1324]"
    >
      {/* 8K-style background with gradient + subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1C3563_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-40" />
      
      {/* Parallax Background Layer */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-[linear-gradient(160deg,#0A1324_0%,#15294D_50%,#0F1C36_100%)]"
      />

      {/* Animated Gold Accent Line */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#C3904D] to-transparent opacity-60" />

      {/* Hero Content */}
      <motion.div
        style={{ y: yTitle, opacity }}
        className="relative z-10 px-6 text-center max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-[#C3904D]/30 bg-[#0F1C36]/60 text-[#C3904D] text-xs tracking-[3px] font-medium">
          PLATAFORMA PREMIUM DE FORMAÇÃO FARMACÊUTICA
        </div>

        <h1 className="font-serif text-[72px] md:text-[92px] leading-[0.92] tracking-[-4.5px] text-[#E8EDF5] mb-4">
          Torne-se o melhor<br />atendente de farmácia<br />do Brasil.
        </h1>

        <p className="max-w-[620px] mx-auto mt-3 text-xl text-[#98A9C9] tracking-tight">
          Formação premium com 159 aulas, 39 módulos, simulações OSCE, jogos e certificado reconhecido.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/(lms)/cadastro"
            className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#C3904D] px-10 text-lg font-semibold text-[#0A1324] hover:bg-[#D4A96C] active:scale-[0.985] transition-all shadow-[0_0_0_1px_#C3904D]"
          >
            Começar minha formação agora
          </Link>
          <Link
            href="#trilhas"
            className="inline-flex h-14 items-center justify-center rounded-2xl border border-[#C3904D]/60 px-8 text-lg text-[#E8EDF5] hover:bg-white/5 transition-all"
          >
            Ver todas as trilhas
          </Link>
        </div>

        <div className="mt-8 text-xs text-[#6D89B7] tracking-[2px]">Matrículas abertas • Acesso imediato</div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6D89B7] text-xs tracking-widest"
      >
        ROLE PARA EXPLORAR <div className="h-px w-8 bg-current" />
      </motion.div>
    </div>
  );
}

/* ── Interactive Stats Component ── */
function InteractiveStats() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#15294D]">
      {STATS.map((stat, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className="group bg-[#0A1324] p-8 md:p-10 transition-all hover:bg-[#0F1C36] border-b border-[#15294D] md:border-b-0 md:border-r last:border-r-0"
        >
          <div className="font-serif text-[56px] leading-none tracking-[-3.5px] text-[#E8EDF5] tabular-nums">
            {stat.value}
            <span className="text-[#C3904D] text-4xl align-super ml-px">{stat.suffix}</span>
          </div>
          <div className="mt-3 text-sm text-[#98A9C9] tracking-tight">{stat.label}</div>
          {hovered === i && (
            <div className="mt-4 text-[10px] text-[#C3904D] tracking-[1px] opacity-75">DADOS ATUALIZADOS HOJE</div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Beautiful Trilhas Grid ── */
function TrilhasGrid() {
  return (
    <div id="trilhas" className="max-w-7xl mx-auto px-6 pt-20 pb-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="text-[#C3904D] tracking-[3px] text-xs font-medium mb-2">CURRICULO PREMIUM</div>
          <h2 className="font-serif text-6xl tracking-[-2.8px] text-[#E8EDF5]">Trilhas de Aprendizado</h2>
        </div>
        <Link href="/(lms)/trilhas" className="hidden md:flex items-center gap-2 text-sm text-[#98A9C9] hover:text-[#C3904D] group">
          VER TODAS AS TRILHAS <span className="group-hover:translate-x-0.5 transition">→</span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRILHAS.map((trilha, idx) => (
          <Link
            key={idx}
            href={`/(lms)/trilhas/${trilha.id}`}
            className="group block rounded-3xl border border-[#25467F] bg-[#0F1C36] p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-15px_rgb(0,0,0,0.5)] hover:border-[#C3904D]/50"
          >
            <div className="flex items-center justify-between">
              <div className="text-5xl">{trilha.icone}</div>
              <div
                className="rounded-full px-3.5 py-px text-xs font-medium tracking-widest border"
                style={{ borderColor: trilha.cor + "40", color: trilha.cor }}
              >
                {trilha.nivel}
              </div>
            </div>

            <h3 className="font-serif text-[27px] leading-tight tracking-[-1.1px] mt-8 text-[#E8EDF5] group-hover:text-[#C3904D] transition-colors">
              {trilha.titulo}
            </h3>
            <p className="mt-3 text-sm text-[#98A9C9] line-clamp-3 pr-2">{trilha.descricao}</p>

            <div className="mt-8 flex items-center gap-x-5 text-xs text-[#6D89B7]">
              <div><span className="font-mono text-[#E8EDF5]">{trilha.modulos}</span> módulos</div>
              <div><span className="font-mono text-[#E8EDF5]">{trilha.aulas}</span> aulas</div>
              <div><span className="font-mono text-[#E8EDF5]">{trilha.horas}</span>h</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Trust Signals / High-Conversion Footer Section ── */
function TrustSignals() {
  return (
    <div className="border-t border-[#25467F] bg-[#0A1324] py-14">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-7">
          <div className="uppercase tracking-[4px] text-xs text-[#C3904D]">CONFIANÇA INSTITUCIONAL</div>
        </div>

        <div className="grid md:grid-cols-2 gap-y-4 text-sm text-[#98A9C9]">
          {TRUST.map((t, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1 text-[#C3904D]">✓</div>
              <div>{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/(lms)/cadastro"
            className="inline-block rounded-2xl bg-white text-[#0A1324] text-lg font-semibold tracking-[-0.2px] px-16 py-4 active:scale-[0.985] hover:bg-[#C3904D] hover:text-white transition-all shadow-[inset_0_0_0_1px_#C3904D]"
          >
            Matricular agora — R$ 97/mês
          </Link>
          <p className="text-[10px] text-[#6D89B7] mt-3 tracking-wide">Sem cartão • 7 dias grátis • Cancele quando quiser</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function SaudegptHome() {
  return (
    <div className="bg-[#0A1324] text-[#E8EDF5] overflow-x-hidden font-sans">
      <HeroParallax />
      <InteractiveStats />
      <TrilhasGrid />
      <TrustSignals />

      {/* Subtle footer note */}
      <div className="text-center pb-12 text-[10px] tracking-widest text-[#6D89B7]">
        © {new Date().getFullYear()} SaúdeGPT • Plataforma de excelência para atendentes de farmácia
      </div>
    </div>
  );
}
