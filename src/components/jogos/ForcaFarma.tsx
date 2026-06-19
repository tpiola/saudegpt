"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Confetti } from "@/components/confetti";
import { Botao, Card } from "@/components/ui";
import { Icon } from "@/components/icons";
import { somSucesso, somQuaseLa } from "@/lib/som";
import { addXp } from "@/lib/sov-xp";

/* ─── Dados Inline: 39 palavras temáticas de farmácia ─── */
interface PalavraForca {
  palavra: string;
  dica: string;
  categoria: string;
}

const PALAVRAS_FARMACIA: PalavraForca[] = [
  // 01-08 — Originais
  { palavra: "AMOXICILINA", dica: "Antibiótico penicilínico de amplo espectro", categoria: "Antibiótico" },
  { palavra: "PARACETAMOL", dica: "Analgésico e antitérmico comum", categoria: "Analgésico" },
  { palavra: "IBUPROFENO", dica: "Anti-inflamatório não esteroidal", categoria: "Anti-inflamatório" },
  { palavra: "OMEPRAZOL", dica: "Inibidor de bomba de prótons para refluxo", categoria: "Gastroprotetor" },
  { palavra: "DIPIRONA", dica: "Analgésico e antitérmico de venda livre", categoria: "Analgésico" },
  { palavra: "SERTRALINA", dica: "Antidepressivo ISRS de primeira linha", categoria: "Tarja Preta — Antidepressivo" },
  { palavra: "LOSARTANA", dica: "Anti-hipertensivo bloqueador do receptor AT1", categoria: "Anti-hipertensivo" },
  { palavra: "METFORMINA", dica: "Antidiabético oral biguanida de primeira escolha", categoria: "Antidiabético" },
  // 09-16
  { palavra: "SIMVASTATINA", dica: "Estatina para controle do colesterol", categoria: "Hipolipemiante" },
  { palavra: "AZITROMICINA", dica: "Macrolídeo para infecções respiratórias", categoria: "Antibiótico" },
  { palavra: "PREDNISONA", dica: "Corticosteroide de amplo uso", categoria: "Corticosteroide" },
  { palavra: "DIAZEPAM", dica: "Benzodiazepínico ansiolítico controlado", categoria: "Tarja Preta — Ansiolítico" },
  { palavra: "RANITIDINA", dica: "Antagonista H2 para úlcera gástrica", categoria: "Gastroprotetor" },
  { palavra: "CAPTOPRIL", dica: "IECA para hipertensão e insuficiência cardíaca", categoria: "Anti-hipertensivo" },
  { palavra: "CLONAZEPAM", dica: "Benzodiazepínico de longa duração", categoria: "Tarja Preta — Ansiolítico" },
  { palavra: "FLUOXETINA", dica: "ISRS clássico para depressão e TOC", categoria: "Tarja Preta — Antidepressivo" },
  // 17-24
  { palavra: "NAPROXENO", dica: "AINE com meia-vida longa", categoria: "Anti-inflamatório" },
  { palavra: "HIOSCINA", dica: "Antiespasmódico para cólicas viscerais", categoria: "Antiespasmódico" },
  { palavra: "ENALAPRIL", dica: "IECA amplamente prescrito na hipertensão", categoria: "Anti-hipertensivo" },
  { palavra: "ATORVASTATINA", dica: "Estatina potente para LDL elevado", categoria: "Hipolipemiante" },
  { palavra: "PIROXICAM", dica: "AINE com meia-vida prolongada", categoria: "Anti-inflamatório" },
  { palavra: "GEMFIBROZILA", dica: "Fibrato para triglicerídeos altos", categoria: "Hipolipemiante" },
  { palavra: "HIDROCLOROTIAZIDA", dica: "Diurético tiazídico para hipertensão", categoria: "Diurético" },
  { palavra: "LEVOTIROXINA", dica: "Reposição hormonal para hipotireoidismo", categoria: "Hormônio Tireoidiano" },
  // 25-39 — Novas 15 palavras
  { palavra: "METOPROLOL", dica: "Beta-bloqueador seletivo para hipertensão", categoria: "Anti-hipertensivo" },
  { palavra: "FUROSEMIDA", dica: "Diurético de alça potente para edema", categoria: "Diurético" },
  { palavra: "CIPROFLOXACINO", dica: "Fluoroquinolona de amplo espectro", categoria: "Antibiótico" },
  { palavra: "DOXICICLINA", dica: "Tetraciclina para infecções bacterianas", categoria: "Antibiótico" },
  { palavra: "CLINDAMICINA", dica: "Lincosamida para infecções anaeróbicas", categoria: "Antibiótico" },
  { palavra: "VENLAFAXINA", dica: "Antidepressivo IRSN duplo", categoria: "Tarja Preta — Antidepressivo" },
  { palavra: "LORATADINA", dica: "Anti-histamínico não sedante", categoria: "Antialérgico" },
  { palavra: "ONDANSETRONA", dica: "Antiemético antagonista 5-HT3", categoria: "Antiemético" },
  { palavra: "ESPIRONOLACTONA", dica: "Diurético poupador de potássio", categoria: "Diurético" },
  { palavra: "PROPRANOLOL", dica: "Beta-bloqueador não seletivo", categoria: "Anti-hipertensivo" },
  { palavra: "CARBAMAZEPINA", dica: "Anticonvulsivante estabilizador de humor", categoria: "Tarja Preta — Anticonvulsivante" },
  { palavra: "PREDNISOLONA", dica: "Corticosteroide anti-inflamatório potente", categoria: "Corticosteroide" },
  { palavra: "TRAMADOL", dica: "Analgésico opioide atípico", categoria: "Tarja Preta — Analgésico" },
  { palavra: "NALOXONA", dica: "Antagonista opioide de reversão rápida", categoria: "Antídoto" },
  { palavra: "MIRTAZAPINA", dica: "Antidepressivo noradrenérgico e serotoninérgico", categoria: "Tarja Preta — Antidepressivo" },
];

/* ─── Boneco em CSS Puro (divs animadas) ─── */
const PARTES_CSS = [
  // 0 — Cabeça
  { name: "Cabeça", emoji: "😵", css: "top-[0px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full" },
  // 1 — Tronco
  { name: "Corpo", emoji: "👕", css: "top-[40px] left-1/2 -translate-x-1/2 w-3 h-14 rounded-md" },
  // 2 — Braço esquerdo
  { name: "Braço E.", emoji: "💪", css: "top-[44px] right-1/2 mr-[4px] w-10 h-2.5 rounded-full origin-right -rotate-[35deg]" },
  // 3 — Braço direito
  { name: "Braço D.", emoji: "💪", css: "top-[44px] left-1/2 ml-[4px] w-10 h-2.5 rounded-full origin-left rotate-[35deg]" },
  // 4 — Perna esquerda
  { name: "Perna E.", emoji: "🦵", css: "top-[82px] right-1/2 mr-[2px] w-3 h-12 rounded-md origin-top -rotate-[20deg]" },
  // 5 — Perna direita
  { name: "Perna D.", emoji: "🦵", css: "top-[82px] left-1/2 ml-[2px] w-3 h-12 rounded-md origin-top rotate-[20deg]" },
];

/* ─── Partículas douradas ─── */
function GoldParticles({ x, y }: { x: number; y: number }) {
  const particles = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div
      className="pointer-events-none absolute z-50"
      style={{ left: x, top: y }}
    >
      {particles.map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{
            opacity: 0,
            x: (Math.random() - 0.5) * 80,
            y: -Math.random() * 60 - 20,
            scale: 0,
          }}
          transition={{ duration: 0.6 + Math.random() * 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="absolute h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_6px_rgba(212,168,67,0.8)]"
        />
      ))}
    </div>
  );
}

/* ─── Letras do alfabeto ─── */
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/* ─── Props ─── */
interface ForcaFarmaProps {
  onVoltar?: () => void;
}

/* ─── Componente Principal ─── */
export function ForcaFarma({ onVoltar }: ForcaFarmaProps) {
  const [palavraIdx, setPalavraIdx] = useState(0);
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<Set<string>>(new Set());
  const [erros, setErros] = useState(0);
  const [jogoAtivo, setJogoAtivo] = useState(true);
  const [vitoria, setVitoria] = useState(false);
  const [score, setScore] = useState(0);
  const [celebrar, setCelebrar] = useState(false);
  const [pulsoLetra, setPulsoLetra] = useState<string | null>(null);
  const [ultimaParte, setUltimaParte] = useState<number | null>(null);
  const [tempoRestante, setTempoRestante] = useState(60);
  const [timerAtivo, setTimerAtivo] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [totalAcertos, setTotalAcertos] = useState(0);
  const [totalPartidas, setTotalPartidas] = useState(0);
  const [goldParticles, setGoldParticles] = useState<{ x: number; y: number; id: number }[]>([]);
  const goldIdRef = useRef(0);
  const forcaRef = useRef<HTMLDivElement>(null);

  const palavraAtual = PALAVRAS_FARMACIA[palavraIdx];
  const letrasPalavra = palavraAtual.palavra.split("");
  const letrasUnicas = [...new Set(letrasPalavra)];

  // Checar se venceu
  const venceu = jogoAtivo && letrasUnicas.every((l) => letrasAdivinhadas.has(l));
  const perdeu = jogoAtivo && erros >= 6;

  /* ─── Timer ─── */
  useEffect(() => {
    if (!timerAtivo || !jogoAtivo || venceu || perdeu) return;
    if (tempoRestante <= 0) {
      setErros(6);
      setJogoAtivo(false);
      setTimerAtivo(false);
      return;
    }
    const id = setInterval(() => {
      setTempoRestante((t) => Math.max(0, t - 1));
    }, 1000);
    timerRef.current = id;
    return () => clearInterval(id);
  }, [timerAtivo, jogoAtivo, venceu, perdeu, tempoRestante]);

  /* ─── Vitória / Derrota ─── */
  useEffect(() => {
    if (venceu) {
      const pts = Math.max(10, 100 - erros * 10) + (timerAtivo ? Math.max(0, Math.floor(tempoRestante / 2)) : 0);
      setScore((s) => s + pts);
      setVitoria(true);
      setJogoAtivo(false);
      setCelebrar(true);
      setTotalAcertos((a) => a + 1);
      setTimerAtivo(false);
      if (timerRef.current) clearInterval(timerRef.current);
      somSucesso();
      // XP ao vencer
      const acertosLetras = letrasUnicas.length;
      addXp(50 as any, 'game_complete' as any);
      addXp((10 * acertosLetras) as any, 'game_question' as any);
    }
    if (perdeu) {
      setVitoria(false);
      setJogoAtivo(false);
      setTimerAtivo(false);
      if (timerRef.current) clearInterval(timerRef.current);
      somQuaseLa();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venceu, perdeu]);

  /* ─── Tocar letra ─── */
  function tentarLetra(letra: string) {
    if (!jogoAtivo || letrasAdivinhadas.has(letra) || perdeu || vitoria) return;

    setLetrasAdivinhadas((prev) => new Set(prev).add(letra));
    setPulsoLetra(letra);

    if (letrasPalavra.includes(letra)) {
      // Acertou! — Spawn gold particles
      if (forcaRef.current) {
        const rect = forcaRef.current.getBoundingClientRect();
        const parent = forcaRef.current.parentElement?.getBoundingClientRect();
        if (parent) {
          const id = ++goldIdRef.current;
          setGoldParticles((prev) => [...prev.slice(-4), { x: rect.left - parent.left + rect.width / 2, y: rect.top - parent.top + 20, id }]);
          setTimeout(() => {
            setGoldParticles((prev) => prev.filter((p) => p.id !== id));
          }, 1000);
        }
      }
      setTimeout(() => setPulsoLetra(null), 600);
    } else {
      // Errou
      const novaParte = erros;
      setUltimaParte(novaParte);
      setErros((e) => e + 1);
      setTimeout(() => setUltimaParte(null), 800);
    }
  }

  /* ─── Reiniciar ─── */
  function reiniciar(manterScore = true) {
    const novaIdx = Math.floor(Math.random() * PALAVRAS_FARMACIA.length);
    setPalavraIdx(novaIdx);
    setLetrasAdivinhadas(new Set());
    setErros(0);
    setJogoAtivo(true);
    setVitoria(false);
    setCelebrar(false);
    setPulsoLetra(null);
    setUltimaParte(null);
    setGoldParticles([]);
    if (!manterScore) setScore(0);
    setTotalPartidas((p) => p + 1);
    setTempoRestante(60);
    setTimerAtivo(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  /* ─── Alternar Timer ─── */
  function toggleTimer() {
    setTimerAtivo((t) => !t);
    if (!timerAtivo) {
      setTempoRestante(60);
    }
  }

  /* ─── Boneco CSS ─── */
  const partesVisiveis = jogoAtivo ? Math.min(erros, 6) : 6;

  return (
    <Card className="relative overflow-hidden border-navy-800/80 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 shadow-[0_0_60px_-12px_rgba(212,168,67,0.12)]">
      <Confetti ativo={celebrar} duracao={4000} />

      {/* Gold particles */}
      <AnimatePresence>
        {goldParticles.map((p) => (
          <GoldParticles key={String(p.id)} x={p.x} y={p.y} />
        ))}
      </AnimatePresence>

      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -inset-1">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-gold-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 space-y-5">
        {/* ─── Header: Score + Timer ─── */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-gold-400">{score}</span>
            <span className="text-[10px] uppercase tracking-widest text-gold-400/60">pts</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Timer toggle */}
            <button
              type="button"
              onClick={toggleTimer}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-all ${
                timerAtivo
                  ? "bg-gold-500/20 text-gold-300 ring-1 ring-gold-400/30"
                  : "bg-navy-800/60 text-navy-400 hover:text-navy-300"
              }`}
            >
              <Icon name="clock" size={12} />
              {timerAtivo ? `${tempoRestante}s` : "Timer"}
            </button>

            <button
              type="button"
              onClick={() => reiniciar(false)}
              className="flex items-center gap-1.5 rounded-full bg-navy-800/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-400 transition-all hover:text-gold-400"
            >
              <Icon name="refresh" size={12} />
              Novo
            </button>
          </div>
        </div>

        {/* ─── Barra de Timer ─── */}
        <AnimatePresence>
          {timerAtivo && jogoAtivo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-navy-800">
                <motion.div
                  className={`h-full rounded-full transition-all ${
                    tempoRestante <= 10 ? "bg-red-500" : tempoRestante <= 25 ? "bg-gold-500" : "bg-emerald-500"
                  }`}
                  animate={{ width: `${(tempoRestante / 60) * 100}%` }}
                  transition={{ duration: 0.3, ease: "linear" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Categoria / Dica ─── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-300 ring-1 ring-gold-400/20">
            {palavraAtual.categoria}
          </span>
          <span className="text-[11px] leading-relaxed text-navy-300">
            💡 {palavraAtual.dica}
          </span>
        </motion.div>

        {/* ─── Grid do jogo: Forca CSS + Palavra ─── */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
          {/* Forca CSS Puro */}
          <div className="relative shrink-0" ref={forcaRef}>
            <div className="relative h-44 w-36 sm:h-52 sm:w-44">
              {/* Estrutura fixa da forca */}
              <div className="absolute bottom-0 left-[15px] right-[15px] h-[3px] rounded-full bg-navy-600" />
              <div className="absolute bottom-0 left-[30px] top-0 w-[3px] rounded-full bg-navy-600" />
              <div className="absolute left-[30px] right-[15px] top-0 h-[3px] rounded-full bg-navy-600" />
              <div className="absolute left-[30px] top-0 h-[16px] w-[3px] rounded-full bg-navy-600" />

              {/* Corda */}
              <div className="absolute left-[90px] top-[16px] h-[8px] w-[2px] rounded-full bg-navy-500" />

              {/* Partes do boneco em CSS */}
              {(() => {
                const items: React.ReactNode[] = [];
                // Cabeça (índice 0)
                const cabVis = partesVisiveis > 0;
                const cabAp = ultimaParte === 0 && erros <= 6;
                items.push(
                  <motion.div
                    key="cabeca"
                    initial={cabAp ? { scale: 0 } : false}
                    animate={cabAp ? { scale: 1 } : cabVis ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className={`absolute top-[24px] left-1/2 -translate-x-1/2 z-10 ${
                      cabAp ? "text-red-400" : cabVis ? "text-gold-400" : "text-navy-900"
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-full border-[3px] border-current bg-navy-800/60 flex items-center justify-center text-xs`}>
                      {/* Rosto expressivo baseado no estado do jogo */}
                      {vitoria ? (
                        <span className="text-emerald-300">😄</span>
                      ) : erros >= 6 ? (
                        <span className="text-red-400">😵</span>
                      ) : erros >= 4 ? (
                        <span className="text-orange-300">😰</span>
                      ) : erros >= 2 ? (
                        <span className="text-gold-300">😅</span>
                      ) : (
                        <span className="text-emerald-300">🙂</span>
                      )}
                    </div>
                  </motion.div>
                );
                // Tronco (índice 1)
                const tronVis = partesVisiveis > 1;
                const tronAp = ultimaParte === 1 && erros <= 6;
                items.push(
                  <motion.div
                    key="tronco"
                    initial={tronAp ? { scaleY: 0 } : false}
                    animate={tronAp ? { scaleY: 1 } : tronVis ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                    className={`absolute top-[57px] left-1/2 -translate-x-1/2 z-10 origin-top ${
                      tronAp ? "text-red-400" : tronVis ? "text-gold-400" : "text-navy-900"
                    }`}
                  >
                    <div className={`w-[5px] h-[36px] rounded-md border-[3px] border-current bg-navy-800/60`} />
                  </motion.div>
                );
                // Braço esquerdo (índice 2)
                const bEVis = partesVisiveis > 2;
                const bEAp = ultimaParte === 2 && erros <= 6;
                items.push(
                  <motion.div
                    key="bracoE"
                    initial={bEAp ? { rotate: 0, scale: 0 } : false}
                    animate={bEAp ? { rotate: -35, scale: 1 } : bEVis ? { rotate: -35, scale: 1 } : { rotate: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className={`absolute top-[60px] right-1/2 mr-[-2px] z-10 origin-right ${
                      bEAp ? "text-red-400" : bEVis ? "text-gold-400" : "text-navy-900"
                    }`}
                  >
                    <div className={`w-[32px] h-[4px] rounded-full border-[3px] border-current bg-navy-800/60`} />
                  </motion.div>
                );
                // Braço direito (índice 3)
                const bDVis = partesVisiveis > 3;
                const bDAp = ultimaParte === 3 && erros <= 6;
                items.push(
                  <motion.div
                    key="bracoD"
                    initial={bDAp ? { rotate: 0, scale: 0 } : false}
                    animate={bDAp ? { rotate: 35, scale: 1 } : bDVis ? { rotate: 35, scale: 1 } : { rotate: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className={`absolute top-[60px] left-1/2 ml-[-2px] z-10 origin-left ${
                      bDAp ? "text-red-400" : bDVis ? "text-gold-400" : "text-navy-900"
                    }`}
                  >
                    <div className={`w-[32px] h-[4px] rounded-full border-[3px] border-current bg-navy-800/60`} />
                  </motion.div>
                );
                // Perna esquerda (índice 4)
                const pEVis = partesVisiveis > 4;
                const pEAp = ultimaParte === 4 && erros <= 6;
                items.push(
                  <motion.div
                    key="pernaE"
                    initial={pEAp ? { rotate: 0, scale: 0 } : false}
                    animate={pEAp ? { rotate: -20, scale: 1 } : pEVis ? { rotate: -20, scale: 1 } : { rotate: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className={`absolute top-[93px] right-1/2 mr-[1px] z-10 origin-top ${
                      pEAp ? "text-red-400" : pEVis ? "text-gold-400" : "text-navy-900"
                    }`}
                  >
                    <div className={`w-[4px] h-[28px] rounded-md border-[3px] border-current bg-navy-800/60`} />
                  </motion.div>
                );
                // Perna direita (índice 5)
                const pDVis = partesVisiveis > 5;
                const pDAp = ultimaParte === 5 && erros <= 6;
                items.push(
                  <motion.div
                    key="pernaD"
                    initial={pDAp ? { rotate: 0, scale: 0 } : false}
                    animate={pDAp ? { rotate: 20, scale: 1 } : pDVis ? { rotate: 20, scale: 1 } : { rotate: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className={`absolute top-[93px] left-1/2 ml-[1px] z-10 origin-top ${
                      pDAp ? "text-red-400" : pDVis ? "text-gold-400" : "text-navy-900"
                    }`}
                  >
                    <div className={`w-[4px] h-[28px] rounded-md border-[3px] border-current bg-navy-800/60`} />
                  </motion.div>
                );
                return items;
              })()}

              {/* Label da última parte errada */}
              <AnimatePresence>
                {ultimaParte != null && ultimaParte < erros && jogoAtivo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[10px] font-bold text-red-400"
                  >
                    {PARTES_CSS[ultimaParte].emoji} {PARTES_CSS[ultimaParte].name}!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Palavra revelada */}
          <div className="flex flex-col items-center gap-2">
            {/* Letras */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {letrasPalavra.map((letra, i) => {
                const revelada = letrasAdivinhadas.has(letra) || !jogoAtivo;
                const acertouAgora = pulsoLetra === letra && letrasPalavra.includes(letra);
                return (
                  <motion.div
                    key={`${i}-${letra}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: acertouAgora ? [1, 1.3, 1] : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: i * 0.03,
                      scale: acertouAgora ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } : { duration: 0.3 },
                    }}
                    className={`flex h-9 w-7 items-center justify-center rounded-lg border text-sm font-extrabold transition-all duration-300 sm:h-11 sm:w-9 sm:text-base ${
                      revelada
                        ? acertouAgora
                          ? "border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]"
                          : vitoria || !jogoAtivo
                            ? "border-gold-400/40 bg-gold-500/15 text-gold-300"
                            : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                        : "border-navy-700 bg-navy-800/80 text-transparent"
                    }`}
                  >
                    {revelada ? letra : ""}
                  </motion.div>
                );
              })}
            </div>

            {/* Contador de erros */}
            <div className="mt-1 flex items-center gap-4 text-[11px] text-navy-400">
              <span>
                Erros: {erros}/6
              </span>
              {jogoAtivo && (
                <span className="text-navy-500">
                  {palavraAtual.palavra.length} letras
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ─── Teclado Virtual A-Z ─── */}
        {jogoAtivo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-1.5"
          >
            {ALFABETO.map((letra) => {
              const usada = letrasAdivinhadas.has(letra);
              const acertou = usada && letrasPalavra.includes(letra);
              const errou = usada && !letrasPalavra.includes(letra);
              return (
                <motion.button
                  key={letra}
                  type="button"
                  disabled={usada || !jogoAtivo}
                  onClick={() => tentarLetra(letra)}
                  whileHover={!usada ? { scale: 1.1 } : {}}
                  whileTap={!usada ? { scale: 0.9 } : {}}
                  className={`flex h-9 w-8 items-center justify-center rounded-lg text-xs font-bold transition-all sm:h-10 sm:w-9 sm:text-sm ${
                    acertou
                      ? "cursor-default bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-400/30"
                      : errou
                        ? "cursor-default bg-red-500/15 text-red-400/50 ring-1 ring-red-500/20 line-through"
                        : "cursor-pointer bg-navy-800/80 text-navy-200 ring-1 ring-navy-700/50 hover:border-gold-400/30 hover:bg-navy-700/60 hover:text-gold-300 hover:ring-gold-400/20"
                  }`}
                >
                  {letra}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ─── Tela de Resultado ─── */}
        <AnimatePresence>
          {!jogoAtivo && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="space-y-4 rounded-xl border p-5 text-center"
            >
              {vitoria ? (
                <>
                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/25"
                    style={{ animation: "trophy-glow 2s ease-in-out infinite" }}
                  >
                    <Icon name="award" size={28} className="text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-extrabold text-gold-300"
                    style={{ animation: "gold-shimmer 3s linear infinite" }}
                  >
                    🎉 Vitória! 🎉
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-2 text-lg"
                    style={{ animation: "xp-jump 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both" }}
                  >
                    <span>🎊</span><span>✨</span><span>🎉</span><span>💫</span><span>🎊</span>
                  </motion.div>
                  <p className="text-sm text-navy-300">
                    Você acertou <strong className="text-gold-400">{palavraAtual.palavra}</strong>
                  </p>
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.5 }}
                    className="text-2xl font-extrabold"
                    style={{ color: "#D4A843", animation: "joy-glow 2s ease-in-out infinite" }}
                  >
                    +{Math.max(10, 100 - (perdeu ? 6 : erros) * 10) + (timerAtivo ? Math.max(0, Math.floor(tempoRestante / 2)) : 0)} pts
                  </motion.p>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 ring-1 ring-red-500/20"
                  >
                    <span className="text-2xl">💀</span>
                  </motion.div>
                  <h3 className="text-xl font-extrabold text-red-400">
                    Derrota!
                  </h3>
                  <p className="text-sm text-navy-300">
                    A palavra era:{" "}
                    <strong className="text-gold-400">{palavraAtual.palavra}</strong>
                  </p>
                  <p className="text-xs text-navy-500 italic">
                    {palavraAtual.dica} ({palavraAtual.categoria})
                  </p>
                </>
              )}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-gold-400">{score}</div>
                  <div className="text-[10px] text-navy-400 uppercase tracking-wider">Score</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-400">{totalAcertos}</div>
                  <div className="text-[10px] text-navy-400 uppercase tracking-wider">Acertos</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-navy-200">{totalPartidas + 1}</div>
                  <div className="text-[10px] text-navy-400 uppercase tracking-wider">Partidas</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Botao
                  className="flex-1"
                  onClick={() => reiniciar(true)}
                  icone="refresh"
                  tamanho="md"
                >
                  Próxima palavra
                </Botao>
                <Botao
                  className="flex-1"
                  onClick={() => reiniciar(false)}
                  variante="secondary"
                  tamanho="md"
                  icone="repeat"
                >
                  Zerar score
                </Botao>
              </div>

              {onVoltar && (
                <button
                  type="button"
                  onClick={onVoltar}
                  className="w-full text-center text-xs font-medium text-navy-400 transition-colors hover:text-navy-300"
                >
                  ← Voltar aos jogos
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Footer: instruções ─── */}
        {jogoAtivo && (
          <div className="text-center text-[10px] text-navy-500">
            Clique nas letras para adivinhar a palavra. {timerAtivo ? `Você tem ${tempoRestante}s.` : "Timer desligado."}
          </div>
        )}
      </div>
    </Card>
  );
}
