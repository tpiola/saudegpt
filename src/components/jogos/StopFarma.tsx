"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/icons";
import { Card, Botao, BarraProgresso } from "@/components/ui";
import { Confetti } from "@/components/confetti";
import { addXp } from "@/lib/sov-xp";
import { somQuaseLa } from "@/lib/som";

/* ─── Constantes ─── */

const LETRAS = "ABCDEFGHIJLMNOPQRSTUVXZ".split(""); // A-Z excluindo K,W,Y (23 letras)
const TEMPO_TOTAL = 45; // segundos
const CAMPOS = [
  { key: "medicamento", label: "Medicamento Marca", emoji: "💊" },
  { key: "principio", label: "Princípio Ativo", emoji: "🧪" },
  { key: "indicacoes", label: "Indicações", emoji: "🩺" },
  { key: "efeito", label: "Efeito Colateral", emoji: "⚠️" },
  { key: "contra", label: "Contraindicação", emoji: "🚫" },
  { key: "interacao", label: "Interação Medicamentosa", emoji: "⚡" },
  { key: "cronico", label: "Crônico/Agudo", emoji: "📋" },
  { key: "forma", label: "Forma Farmacêutica", emoji: "💧" },
  { key: "classe", label: "Classe Terapêutica", emoji: "🏷️" },
  { key: "curiosidade", label: "Curiosidade", emoji: "💡" },
] as const;

/* ─── Exemplos inline por letra ─── */

interface ExemplosLetra {
  medicamento: string;
  principio: string;
  indicacoes: string;
  efeito: string;
  contra: string;
  interacao: string;
  cronico: string;
  forma: string;
  classe: string;
  curiosidade: string;
}

const EXEMPLOS: Record<string, ExemplosLetra> = {
  A: {
    medicamento: "AAS (Ácido Acetilsalicílico)",
    principio: "Ácido Acetilsalicílico",
    indicacoes: "Febre, dor leve a moderada, anti-inflamatório",
    efeito: "Irritação gástrica, sangramento",
    contra: "Úlcera péptica ativa, hemofilia",
    interacao: "Anticoagulantes (risco de sangramento)",
    cronico: "Agudo (uso pontual) ou Crônico (baixa dose cardio)",
    forma: "Comprimido, efervescente",
    classe: "AINE (Anti-inflamatório não esteroidal)",
    curiosidade: "AAS em baixa dose é usado como antiagregante plaquetário"
  },
  B: {
    medicamento: "Buscopan (Butilbrometo de Escopolamina)",
    principio: "Butilbrometo de Escopolamina",
    indicacoes: "Cólicas abdominais, síndrome do intestino irritável",
    efeito: "Boca seca, constipação, visão turva",
    contra: "Glaucoma, hipertrofia prostática",
    interacao: "Antidepressivos tricíclicos (potencializam efeitos)",
    cronico: "Agudo (cólicas) ou Crônico (SII)",
    forma: "Comprimido, injetável, gotas",
    classe: "Antiespasmódico anticolinérgico",
    curiosidade: "Buscopan não corta a dor — ele relaxa o espasmo muscular liso"
  },
  C: {
    medicamento: "Captopril",
    principio: "Captopril",
    indicacoes: "Hipertensão arterial, insuficiência cardíaca",
    efeito: "Tosse seca, hipercalemia, angioedema",
    contra: "Gestação, estenose de artéria renal",
    interacao: "Diuréticos poupadores de K+ (risco de hipercalemia)",
    cronico: "Crônico (uso contínuo para HAS/IC)",
    forma: "Comprimido",
    classe: "IECA (Inibidor da Enzima Conversora de Angiotensina)",
    curiosidade: "O captopril foi o primeiro IECA desenvolvido, inspirado no veneno da jararaca"
  },
  D: {
    medicamento: "Dipirona (Metamizol)",
    principio: "Dipirona Sódica",
    indicacoes: "Febre alta, dor moderada a intensa",
    efeito: "Agranulocitose (rara), hipotensão em adm. IV rápida",
    contra: "Discrasias sanguíneas, deficiência de G6PD",
    interacao: "Metotrexato (toxicidade aumentada)",
    cronico: "Agudo (febre/dor pontual)",
    forma: "Comprimido, gotas, injetável, supositório",
    classe: "Analgésico não-opioide / Antitérmico",
    curiosidade: "A dipirona é proibida em vários países (EUA, Reino Unido) pelo risco de agranulocitose"
  },
  E: {
    medicamento: "Enalapril",
    principio: "Maleato de Enalapril",
    indicacoes: "Hipertensão, insuficiência cardíaca",
    efeito: "Tosse, tontura, hipercalemia",
    contra: "Gestação, histórico de angioedema",
    interacao: "Anti-inflamatórios (reduzem efeito anti-hipertensivo)",
    cronico: "Crônico (uso diário contínuo)",
    forma: "Comprimido",
    classe: "IECA",
    curiosidade: "Enalapril é um pró-fármaco ativado no fígado em enalaprilato"
  },
  F: {
    medicamento: "Fluoxetina (Prozac)",
    principio: "Cloridrato de Fluoxetina",
    indicacoes: "Depressão, TOC, bulimia, TPM",
    efeito: "Náusea, insônia, disfunção sexual",
    contra: "Uso com IMAOs, mania",
    interacao: "IMAOs (risco de síndrome serotoninérgica)",
    cronico: "Crônico (>6 meses de tratamento)",
    forma: "Cápsula, comprimido, solução oral",
    classe: "ISRS (Inibidor Seletivo de Recaptação de Serotonina)",
    curiosidade: "Fluoxetina tem meia-vida longa (4-6 dias) — isso reduz risco de crise de abstinência"
  },
  G: {
    medicamento: "Glifage (Metformina)",
    principio: "Cloridrato de Metformina",
    indicacoes: "Diabetes mellitus tipo 2",
    efeito: "Náusea, diarreia, gosto metálico",
    contra: "Insuficiência renal grave, acidose metabólica",
    interacao: "Contraste iodado (risco de acidose lática)",
    cronico: "Crônico (diabetes tipo 2)",
    forma: "Comprimido, comprimido de liberação prolongada (XR)",
    classe: "Biguanida (antidiabético oral)",
    curiosidade: "Metformina é derivada da Galega officinalis, planta usada na Idade Média para diabetes"
  },
  H: {
    medicamento: "Hidroclorotiazida",
    principio: "Hidroclorotiazida",
    indicacoes: "Hipertensão, edema, insuficiência cardíaca",
    efeito: "Hipocalemia, hiperuricemia, hiperglicemia",
    contra: "Anúria, hipocalemia grave",
    interacao: "Digitálicos (risco de arritmia por hipocalemia)",
    cronico: "Crônico (anti-hipertensivo diário)",
    forma: "Comprimido",
    classe: "Diurético tiazídico",
    curiosidade: "HCTZ foi um dos primeiros anti-hipertensivos orais eficazes"
  },
  I: {
    medicamento: "Ibuprofeno (Advil, Alivium)",
    principio: "Ibuprofeno",
    indicacoes: "Dor, febre, inflamação",
    efeito: "Irritação gástrica, sangramento gastrointestinal",
    contra: "Asma sensível a AINEs, úlcera ativa",
    interacao: "AAS (reduz efeito antiagregante do AAS)",
    cronico: "Agudo (uso por curto período) ou Crônico (artrite)",
    forma: "Comprimido, gel, xarope infantil",
    classe: "AINE (Anti-inflamatório não esteroidal)",
    curiosidade: "Ibuprofeno tem efeito anti-inflamatório maior que dipirona, mas menor que diclofenaco"
  },
  L: {
    medicamento: "Losartana (Aradois, Cozaar)",
    principio: "Losartana Potássica",
    indicacoes: "Hipertensão, nefropatia diabética, IC",
    efeito: "Tontura, hipotensão, hipercalemia",
    contra: "Gestação, estenose de artéria renal bilateral",
    interacao: "Anti-inflamatórios (reduzem eficácia), suplementos de K+",
    cronico: "Crônico (uso diário contínuo)",
    forma: "Comprimido",
    classe: "BRA (Bloqueador do Receptor de Angiotensina II)",
    curiosidade: "Losartana é um dos anti-hipertensivos mais prescritos do mundo"
  },
  M: {
    medicamento: "Morfina",
    principio: "Sulfato de Morfina",
    indicacoes: "Dor intensa (câncer, pós-operatório, IAM)",
    efeito: "Depressão respiratória, constipação, náusea, dependência",
    contra: "Insuficiência respiratória, obstrução intestinal",
    interacao: "Benzodiazepínicos (depressão respiratória adicional)",
    cronico: "Crônico (dor oncológica) ou Agudo (pós-operatório)",
    forma: "Comprimido, injetável, solução oral, adesivo",
    classe: "Opioide agonista mu",
    curiosidade: "Morfina é o padrão ouro da OMS para dor moderada a intensa"
  },
  N: {
    medicamento: "Nimesulida (Nisulid, Scaflan)",
    principio: "Nimesulida",
    indicacoes: "Dor aguda, inflamação, dismenorreia",
    efeito: "Hepatotoxicidade, lesão gástrica",
    contra: "Insuficiência hepática, alcoolismo",
    interacao: "Anticoagulantes (risco de sangramento)",
    cronico: "Agudo (uso ≤5 dias por risco hepático)",
    forma: "Comprimido, gotas, gel, supositório",
    classe: "AINE (Inibidor seletivo de COX-2)",
    curiosidade: "Nimesulida é proibida em vários países europeus pelo risco de hepatite fulminante"
  },
  O: {
    medicamento: "Omeprazol (Losec, Gasec)",
    principio: "Omeprazol",
    indicacoes: "DRGE, úlcera péptica, erradicação de H. pylori",
    efeito: "Cefaleia, diarreia, deficiência de B12 (uso prolongado)",
    contra: "Uso concomitante com clopidogrel (interação)",
    interacao: "Clopidogrel (reduz eficácia), antifúngicos azólicos",
    cronico: "Crônico (DRGE, esofagite) ou Agudo (úlcera)",
    forma: "Cápsula, comprimido, injetável",
    classe: "IBP (Inibidor da Bomba de Prótons)",
    curiosidade: "Omeprazol é um dos medicamentos mais vendidos do mundo"
  },
  P: {
    medicamento: "Paracetamol (Tylenol)",
    principio: "Paracetamol",
    indicacoes: "Febre, dor leve a moderada",
    efeito: "Hepatotoxicidade (em overdose)",
    contra: "Insuficiência hepática grave",
    interacao: "Álcool (aumenta hepatotoxicidade)",
    cronico: "Agudo (uso sintomático)",
    forma: "Comprimido, gotas, supositório, efervescente",
    classe: "Analgésico e antitérmico",
    curiosidade: "Paracetamol não tem efeito anti-inflamatório — age no SNC, não na periferia"
  },
  Q: {
    medicamento: "Quetiapina (Seroquel)",
    principio: "Quetiapina",
    indicacoes: "Esquizofrenia, transtorno bipolar, depressão refratária",
    efeito: "Sedação, ganho de peso, síndrome metabólica",
    contra: "Hipersensibilidade, demência em idosos (AVC)",
    interacao: "Cetoconazol (aumenta níveis de quetiapina)",
    cronico: "Crônico (transtornos psiquiátricos)",
    forma: "Comprimido, comprimido de liberação prolongada (XR)",
    classe: "Antipsicótico atípico",
    curiosidade: "Quetiapina em baixas doses (25-50mg) é usada como hipnótico off-label"
  },
  R: {
    medicamento: "Rivotril (Clonazepam)",
    principio: "Clonazepam",
    indicacoes: "Ansiedade, transtorno do pânico, epilepsia, insônia",
    efeito: "Sedação, tolerância, dependência, ataxia",
    contra: "Miastenia gravis, insuficiência respiratória",
    interacao: "Álcool (depressão respiratória grave)",
    cronico: "Crônico (ansiedade) mas evitado por dependência",
    forma: "Comprimido, gotas, injetável",
    classe: "Benzodiazepínico",
    curiosidade: "Clonazepam é o benzodiazepínico de meia-vida intermediária (18-50h)"
  },
  S: {
    medicamento: "Sinvastatina (Zocor)",
    principio: "Sinvastatina",
    indicacoes: "Hipercolesterolemia, prevenção cardiovascular",
    efeito: "Mialgia, rabdomiólise, aumento de transaminases",
    contra: "Insuficiência hepática, gestação",
    interacao: "Suco de toranja (aumenta risco de toxicidade muscular)",
    cronico: "Crônico (dislipidemia, prevenção continuada)",
    forma: "Comprimido",
    classe: "Estatina (Inibidor de HMG-CoA Redutase)",
    curiosidade: "Sinvastatina é derivada de um fungo (Aspergillus terreus)"
  },
  T: {
    medicamento: "Torsilax (Ciclobenzaprina + Dipirona + Cafeína)",
    principio: "Ciclobenzaprina + Dipirona + Cafeína",
    indicacoes: "Dor muscular, contraturas, lombalgia",
    efeito: "Sonolência, boca seca, tontura",
    contra: "Glaucoma, hipertireoidismo, arritmias",
    interacao: "IMAOs (hipertensão grave)",
    cronico: "Agudo (dor muscular por curto período)",
    forma: "Comprimido, gotas",
    classe: "Relaxante muscular + analgésico",
    curiosidade: "Torsilax é um dos medicamentos genéricos mais vendidos no Brasil"
  },
  U: {
    medicamento: "Ultracet (Tramadol + Paracetamol)",
    principio: "Cloridrato de Tramadol + Paracetamol",
    indicacoes: "Dor moderada a intensa",
    efeito: "Náusea, tontura, constipação, risco de convulsão",
    contra: "Epilepsia não controlada, uso de IMAOs",
    interacao: "Antidepressivos (risco de síndrome serotoninérgica)",
    cronico: "Agudo (dor) ou Crônico (dor oncológica moderada)",
    forma: "Comprimido, injetável",
    classe: "Opioide fraco + analgésico",
    curiosidade: "Tramadol é um opioide atípico que também inibe recaptação de serotonina e noradrenalina"
  },
  V: {
    medicamento: "Venvanse (Lisdexanfetamina)",
    principio: "Dimesilato de Lisdexanfetamina",
    indicacoes: "TDAH, compulsão alimentar moderada a grave",
    efeito: "Insônia, redução de apetite, taquicardia",
    contra: "Doença cardiovascular grave, abuso de substâncias",
    interacao: "IMAOs (crise hipertensiva)",
    cronico: "Crônico (TDAH, uso contínuo)",
    forma: "Cápsula (ingerir inteira)",
    classe: "Estimulante do SNC (anfetamina)",
    curiosidade: "Venvanse é um pró-fármaco — só é ativado após metabolização no sangue"
  },
  X: {
    medicamento: "Xarelto (Rivaroxabana)",
    principio: "Rivaroxabana",
    indicacoes: "Prevenção de AVC em FA, tromboembolismo venoso",
    efeito: "Sangramento, equimoses",
    contra: "Hemorragia ativa, insuficiência renal grave",
    interacao: "Cetoconazol, rifampicina (metabolismo CYP3A4)",
    cronico: "Crônico (anticoagulação contínua)",
    forma: "Comprimido",
    classe: "Anticoagulante oral direto (Inibidor do Fator Xa)",
    curiosidade: "Xarelto não precisa de monitoramento de INR ao contrário da varfarina"
  },
  Z: {
    medicamento: "Zolpidem (Stilnox)",
    principio: "Tartarato de Zolpidem",
    indicacoes: "Insônia de curta duração",
    efeito: "Sonambulismo, amnésia anterógrada, dependência",
    contra: "Insônia crônica não diagnosticada, miastenia gravis",
    interacao: "Álcool (potencializa sedação e parassonias)",
    cronico: "Agudo (uso ≤4 semanas para evitar dependência)",
    forma: "Comprimido, sublingual",
    classe: "Hipnótico não-benzodiazepínico (Z-drug)",
    curiosidade: "Zolpidem age nos receptores GABA-A subtipo 1 (alfa-1), diferente dos benzodiazepínicos"
  }
};

/* ─── Helpers ─── */

function letraAleatoria(): string {
  return LETRAS[Math.floor(Math.random() * LETRAS.length)];
}

function gerarPlaceholder(campoKey: string, letra: string): string {
  const ex = EXEMPLOS[letra];
  if (!ex) return `Ex: algo com ${letra}...`;
  return `Ex: ${ex[campoKey as keyof ExemplosLetra] || `${letra}...`}`;
}

/* ─── Barra de Timer Animada (verde → laranja → vermelho) ─── */

function BarraTimer({ pct }: { pct: number }) {
  const urgente = pct < 20;
  const alerta = pct < 45 && !urgente;
  const cor = urgente
    ? "from-red-500 to-red-600"
    : alerta
      ? "from-gold-400 to-gold-500"
      : "from-emerald-400 to-emerald-500";

  const sombra = urgente
    ? "shadow-[0_0_20px_rgba(239,68,68,0.4)]"
    : alerta
      ? "shadow-[0_0_16px_rgba(212,168,67,0.3)]"
      : "shadow-[0_0_12px_rgba(52,211,153,0.2)]";

  return (
    <div className="w-full overflow-hidden rounded-full bg-navy-800/50 h-3 relative" role="progressbar"
      aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${cor} ${sombra} transition-all`}
        style={{ width: `${Math.min(pct, 100)}%` }}
        animate={urgente ? { scale: [1, 1.02, 1] } : {}}
        transition={urgente ? { repeat: Infinity, duration: 0.6, ease: "easeInOut" } : {}}
      />
    </div>
  );
}

/* ─── Campo de Input Premium ─── */

function CampoStop({
  label,
  emoji,
  placeholder,
  valor,
  onChange,
  index,
}: {
  label: string;
  emoji: string;
  placeholder: string;
  valor: string;
  onChange: (v: string) => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04, type: "spring", stiffness: 200, damping: 22 }}
      className="group relative"
    >
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gold-400/80 uppercase tracking-wider">
        <span className="text-base">{emoji}</span>
        {label}
      </label>
      <input
        type="text"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-700/60 bg-navy-900/80 px-4 py-3 text-sm text-foreground
          placeholder:text-navy-400/50
          transition-all duration-300
          focus:border-gold-400/60 focus:bg-navy-800/90 focus:outline-none focus:shadow-[0_0_20px_rgba(212,168,67,0.15)] focus:ring-2 focus:ring-gold-400/20
          hover:border-navy-600/80
          group-hover:border-navy-600/80"
      />
    </motion.div>
  );
}

/* ─── Componente Principal ─── */

export function StopFarma() {
  const [letra, setLetra] = useState(letraAleatoria());
  const [tempo, setTempo] = useState(TEMPO_TOTAL);
  const [ativo, setAtivo] = useState(true);
  const [fim, setFim] = useState(false);
  const [celebrar, setCelebrar] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [valores, setValores] = useState<Record<string, string>>({});
  const [jogou, setJogou] = useState(false);

  /* Inicializar/resetar campos */
  function resetarCampos() {
    const init: Record<string, string> = {};
    CAMPOS.forEach((c) => { init[c.key] = ""; });
    setValores(init);
  }

  /* Primeira carga */
  useEffect(() => {
    resetarCampos();
  }, []);

  /* Timer 100ms */
  useEffect(() => {
    if (!ativo || fim) return;
    setTempo(TEMPO_TOTAL);
    timerRef.current = setInterval(() => {
      setTempo((t) => {
        if (t <= 0.1) return 0;
        return parseFloat((t - 0.1).toFixed(1));
      });
    }, 100);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [ativo, fim, letra]);

  /* Tick sonoro <10s */
  const ultimoTick = useRef<number>(-1);
  useEffect(() => {
    if (!ativo || fim || tempo <= 0) return;
    const segInt = Math.floor(tempo);
    if (tempo < 10 && segInt !== ultimoTick.current) {
      ultimoTick.current = segInt;
      somQuaseLa();
    }
  }, [tempo, ativo, fim]);

  /* Tempo esgotou */
  useEffect(() => {
    if (tempo <= 0 && ativo && !fim) {
      setAtivo(false);
      setFim(true);
      setJogou(true);
    }
  }, [tempo, ativo, fim]);

  const pctTempo = (tempo / TEMPO_TOTAL) * 100;
  const timerUrgente = tempo < 10;

  function handleEnviar() {
    if (timerRef.current) clearInterval(timerRef.current);
    setAtivo(false);
    setFim(true);
    setJogou(true);
    const preenchidos = CAMPOS.filter((c) => valores[c.key]?.trim().length > 0).length;
    if (preenchidos >= 7) setCelebrar(true);
    // XP: base + bônus por acertos
    addXp(50 as any, 'game_complete' as any);
    addXp((10 * preenchidos) as any, 'game_question' as any);
  }

  function handleReiniciar() {
    if (timerRef.current) clearInterval(timerRef.current);
    setLetra(letraAleatoria());
    setTempo(TEMPO_TOTAL);
    setAtivo(true);
    setFim(false);
    setCelebrar(false);
    setJogou(false);
    resetarCampos();
  }

  function atualizarValor(key: string, v: string) {
    setValores((prev) => ({ ...prev, [key]: v }));
  }

  const preenchidos = CAMPOS.filter((c) => valores[c.key]?.trim().length > 0).length;

  /* ─── Tela de Resultado ─── */
  if (fim && jogou) {
    const pctScore = Math.round((preenchidos / CAMPOS.length) * 100);
    const notas = [
      { min: 10, texto: "Farmacêutico Master! 🏆", icone: "award" as const },
      { min: 7, texto: "Quase Perfeito! 🥇", icone: "star" as const },
      { min: 5, texto: "Bom Conhecimento! 🥈", icone: "trending" as const },
      { min: 3, texto: "Precisa Estudar Mais! 📚", icone: "book" as const },
      { min: 0, texto: "Continue Tentando! 💪", icone: "target" as const },
    ];
    const nota = notas.find((n) => preenchidos >= n.min) ?? notas[notas.length - 1];

    return (
      <Card className="relative overflow-hidden">
        <Confetti ativo={celebrar} duracao={4000} />

        {/* Background glow */}
        <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.06)_0%,transparent_70%)]" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          className="relative z-10 flex flex-col items-center gap-4 text-center"
        >
          {/* Ícone de resultado */}
          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.15 }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-xl
              bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600"
          >
            <Icon name={nota.icone} size={34} className="text-white" />
          </motion.span>

          <div>
            <h3 className="text-xl font-bold">StopFarma — Resultado</h3>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.35 }}
              className="mt-2 text-3xl font-extrabold text-gold-400"
            >
              {preenchidos}/{CAMPOS.length}
            </motion.p>
            <p className="mt-1 text-sm text-muted">{nota.texto}</p>
          </div>

          {/* Score bar */}
          <div className="w-full max-w-xs">
            <BarraTimer pct={pctScore} />
            <p className="mt-1 text-xs text-muted">{pctScore}% de aproveitamento</p>
          </div>
        </motion.div>

        {/* Grid de campos preenchidos vs vazios — stagger spring reveal */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
          }}
          className="mt-6 space-y-1.5"
        >
          {CAMPOS.map((campo, i) => {
            const preenchido = valores[campo.key]?.trim().length > 0;
            return (
              <motion.div
                key={campo.key}
                variants={{
                  hidden: { opacity: 0, x: -30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 200, damping: 20 },
                  },
                }}
                className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm ${
                  preenchido
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-red-500/20 bg-red-500/5"
                }`}
              >
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.1 + i * 0.04 }}
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs ${
                    preenchido
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  <Icon name={preenchido ? "check" : "close"} size={14} />
                </motion.span>
                <span className="font-medium min-w-[120px] text-xs text-muted">{campo.emoji} {campo.label}</span>
                <span className="flex-1 truncate text-right text-xs">
                  {preenchido ? (
                    <span className="text-emerald-400">{valores[campo.key]}</span>
                  ) : (
                    <span className="text-red-400/60 italic">Vazio</span>
                  )}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 18 }}
          className="mt-6 rounded-xl border border-gold-400/20 bg-gold-500/5 p-4"
        >
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-bold text-gold-400">{preenchidos}</div>
              <div className="text-xs text-muted">Preenchidos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">{CAMPOS.length - preenchidos}</div>
              <div className="text-xs text-muted">Vazios</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold-400">{pctScore}%</div>
              <div className="text-xs text-muted">Score</div>
            </div>
          </div>
        </motion.div>

        <Botao
          className="mt-6 w-full"
          onClick={handleReiniciar}
          icone="repeat"
          tamanho="lg"
        >
          Jogar de novo
        </Botao>
      </Card>
    );
  }

  /* ─── Tela de Jogo ─── */
  return (
    <Card className="relative overflow-hidden border-gold-400/10">
      <Confetti ativo={celebrar} duracao={2000} />

      {/* Background glamour */}
      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.04)_0%,transparent_70%)]" />

      {/* Header: Letra + Timer */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        {/* Letra sorteada */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl
            bg-gradient-to-br from-gold-500/20 to-gold-600/10
            border border-gold-400/30 shadow-[0_0_30px_rgba(212,168,67,0.15)]"
        >
          <span className="text-3xl font-extrabold text-gold-400">{letra}</span>
        </motion.div>

        {/* Timer */}
        <div className="flex-1 max-w-[200px]">
          <BarraTimer pct={pctTempo} />
          <motion.div
            animate={timerUrgente ? { scale: [1, 1.06, 1] } : {}}
            transition={timerUrgente ? { repeat: Infinity, duration: 0.5, ease: "easeInOut" } : {}}
            className={`mt-1 text-right text-sm font-bold tabular-nums ${
              timerUrgente ? "text-red-400" : tempo < 20 ? "text-gold-400" : "text-emerald-400"
            }`}
          >
            {tempo.toFixed(1)}s
          </motion.div>
        </div>

        <div className="text-xs text-muted text-right">
          <div className="font-bold text-gold-400">{preenchidos}/{CAMPOS.length}</div>
          <div>preenchidos</div>
        </div>
      </div>

      {/* Labels informativas */}
      <div className="relative z-10 mt-3">
        <p className="text-xs text-muted">
          Letra sorteada: <strong className="text-gold-400">{letra}</strong>
          {" · "}Preencha cada campo com um termo farmacêutico começando com <strong className="text-gold-400">{letra}</strong>
        </p>
      </div>

      {/* Campos de input */}
      <div className="relative z-10 mt-5 space-y-4">
        {CAMPOS.map((campo, i) => (
          <CampoStop
            key={campo.key}
            label={campo.label}
            emoji={campo.emoji}
            placeholder={gerarPlaceholder(campo.key, letra)}
            valor={valores[campo.key] ?? ""}
            onChange={(v) => atualizarValor(campo.key, v)}
            index={i}
          />
        ))}
      </div>

      {/* Botões */}
      <div className="relative z-10 mt-6 flex gap-3">
        <Botao
          className="flex-1"
          onClick={handleEnviar}
          icone="check"
          tamanho="lg"
        >
          Enviar ({preenchidos}/{CAMPOS.length})
        </Botao>
        <Botao
          variante="secondary"
          onClick={handleReiniciar}
          icone="repeat"
          tamanho="lg"
          className="min-w-[56px]"
        >
          <span className="sr-only">Reiniciar</span>
        </Botao>
      </div>
    </Card>
  );
}
