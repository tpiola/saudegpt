"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Confetti } from "@/components/confetti";
import { Botao, Card } from "@/components/ui";
import { Icon } from "@/components/icons";
import { somSucesso, somQuaseLa } from "@/lib/som";

/* ─── Dados Inline: 24 palavras temáticas de farmácia ─── */
interface PalavraForca {
  palavra: string;
  dica: string;
  categoria: string;
}

const PALAVRAS_FARMACIA: PalavraForca[] = [
  { palavra: "AMOXICILINA", dica: "Antibiótico penicilínico de amplo espectro", categoria: "Antibiótico" },
  { palavra: "PARACETAMOL", dica: "Analgésico e antitérmico comum", categoria: "Analgésico" },
  { palavra: "IBUPROFENO", dica: "Anti-inflamatório não esteroidal", categoria: "Anti-inflamatório" },
  { palavra: "OMEPRAZOL", dica: "Inibidor de bomba de prótons para refluxo", categoria: "Gastroprotetor" },
  { palavra: "DIPIRONA", dica: "Analgésico e antitérmico de venda livre", categoria: "Analgésico" },
  { palavra: "SERTRALINA", dica: "Antidepressivo ISRS de primeira linha", categoria: "Tarja Preta — Antidepressivo" },
  { palavra: "LOSARTANA", dica: "Anti-hipertensivo bloqueador do receptor AT1", categoria: "Anti-hipertensivo" },
  { palavra: "METFORMINA", dica: "Antidiabético oral biguanida de primeira escolha", categoria: "Antidiabético" },
  { palavra: "SIMVASTATINA", dica: "Estatina para controle do colesterol", categoria: "Hipolipemiante" },
  { palavra: "AZITROMICINA", dica: "Macrolídeo para infecções respiratórias", categoria: "Antibiótico" },
  { palavra: "PREDNISONA", dica: "Corticosteroide de amplo uso", categoria: "Corticosteroide" },
  { palavra: "DIAZEPAM", dica: "Benzodiazepínico ansiolítico controlado", categoria: "Tarja Preta — Ansiolítico" },
  { palavra: "RANITIDINA", dica: "Antagonista H2 para úlcera gástrica", categoria: "Gastroprotetor" },
  { palavra: "CAPTOPRIL", dica: "IECA para hipertensão e insuficiência cardíaca", categoria: "Anti-hipertensivo" },
  { palavra: "CLONAZEPAM", dica: "Benzodiazepínico de longa duração", categoria: "Tarja Preta — Ansiolítico" },
  { palavra: "FLUOXETINA", dica: "ISRS clássico para depressão e TOC", categoria: "Tarja Preta — Antidepressivo" },
  { palavra: "NAPROXENO", dica: "AINE com meia-vida longa", categoria: "Anti-inflamatório" },
  { palavra: "HIOSCINA", dica: "Antiespasmódico para cólicas viscerais", categoria: "Antiespasmódico" },
  { palavra: "ENALAPRIL", dica: "IECA amplamente prescrito na hipertensão", categoria: "Anti-hipertensivo" },
  { palavra: "ATORVASTATINA", dica: "Estatina potente para LDL elevado", categoria: "Hipolipemiante" },
  { palavra: "PIROXICAM", dica: "AINE com meia-vida prolongada", categoria: "Anti-inflamatório" },
  { palavra: "GEMFIBROZILA", dica: "Fibrato para triglicerídeos altos", categoria: "Hipolipemiante" },
  { palavra: "HIDROCLOROTIAZIDA", dica: "Diurético tiazídico para hipertensão", categoria: "Diurético" },
  { palavra: "LEVOTIROXINA", dica: "Reposição hormonal para hipotireoidismo", categoria: "Hormônio Tireoidiano" },
];

/* ─── Hangman SVG: 6 partes do boneco (0 = cabeca, 1 = corpo, 2 = bracoE, 3 = bracoD, 4 = pernaE, 5 = pernaD) ─── */
const PARTES_FORCA = [
  // 0 — Cabeça
  <circle key="cabeca" cx="100" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="3" />,
  // 1 — Corpo
  <line key="corpo" x1="100" y1="56" x2="100" y2="105" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />,
  // 2 — Braço esquerdo
  <line key="bracoE" x1="100" y1="67" x2="75" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />,
  // 3 — Braço direito
  <line key="bracoD" x1="100" y1="67" x2="125" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />,
  // 4 — Perna esquerda
  <line key="pernaE" x1="100" y1="105" x2="78" y2="135" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />,
  // 5 — Perna direita
  <line key="pernaD" x1="100" y1="105" x2="122" y2="135" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />,
];

/* ─── Partes do boneco com nomes descritivos ─── */
const PARTES_NOMES = ["Cabeça", "Corpo", "Braço E.", "Braço D.", "Perna E.", "Perna D."];

/* ─── Letras do alfabeto ─── */
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/* ─── Emojis para cada parte ─── */
const PARTE_EMOJI: Record<string, string> = {
  "Cabeça": "😵",
  "Corpo": "👕",
  "Braço E.": "💪",
  "Braço D.": "💪",
  "Perna E.": "🦵",
  "Perna D.": "🦵",
};

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
      // Tempo esgotado = derrota
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

    // Iniciar timer na primeira jogada
    if (timerAtivo && !timerRef.current && jogoAtivo) {
      // Timer já iniciado
    }

    if (letrasPalavra.includes(letra)) {
      // Acertou!
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

  /* ─── Forca SVG ─── */
  const partesVisiveis = jogoAtivo ? Math.min(erros, 6) : 6;

  return (
    <Card className="relative overflow-hidden border-navy-800/80 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 shadow-[0_0_60px_-12px_rgba(212,168,67,0.12)]">
      <Confetti ativo={celebrar} duracao={4000} />

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

        {/* ─── Grid do jogo: Forca + Palavra ─── */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
          {/* Forca SVG */}
          <div className="relative shrink-0">
            <svg
              viewBox="0 0 160 150"
              className="h-36 w-36 sm:h-44 sm:w-44"
              aria-label="Boneco da forca"
            >
              {/* Forca fixa */}
              <line x1="20" y1="145" x2="120" y2="145" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="100" y1="10" x2="100" y2="145" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="30" y1="10" x2="100" y2="10" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="30" y1="10" x2="30" y2="24" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

              {/* Partes do boneco com animação */}
              {PARTES_FORCA.map((parte, i) => {
                const visivel = partesVisiveis > i;
                const estaAparecendo = ultimaParte === i && erros <= 6;
                return (
                  <g
                    key={i}
                    className={`transition-opacity duration-500 ${
                      visivel ? "opacity-100" : "opacity-0"
                    } ${estaAparecendo ? "text-red-400" : "text-gold-400"}`}
                  >
                    {estaAparecendo && (
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 12 }}
                      >
                        {parte}
                      </motion.g>
                    )}
                    {!estaAparecendo && visivel && parte}
                  </g>
                );
              })}
            </svg>

            {/* Label da última parte errada */}
            <AnimatePresence>
              {ultimaParte != null && ultimaParte < erros && jogoAtivo && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[10px] font-bold text-red-400"
                >
                  {PARTE_EMOJI[PARTES_NOMES[ultimaParte]]} {PARTES_NOMES[ultimaParte]}!
                </motion.div>
              )}
            </AnimatePresence>
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
                      scale: acertouAgora ? { duration: 0.4, ease: "easeOut" } : { duration: 0.3 },
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
                  >
                    <Icon name="award" size={28} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-extrabold text-gold-300">
                    🎉 Vitória!
                  </h3>
                  <p className="text-sm text-navy-300">
                    Você acertou <strong className="text-gold-400">{palavraAtual.palavra}</strong>
                  </p>
                  <p className="text-2xl font-extrabold text-gold-400">
                    +{Math.max(10, 100 - (perdeu ? 6 : erros) * 10) + (timerAtivo ? Math.max(0, Math.floor(tempoRestante / 2)) : 0)} pts
                  </p>
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
