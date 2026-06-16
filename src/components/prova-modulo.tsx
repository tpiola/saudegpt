"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { QuizQuestao } from "@/content/types";
import { Botao, Card, BarraProgresso } from "./ui";
import { Icon } from "./icons";
import { Confete } from "./confete";
import { ModuloCompleto } from "./modulo-completo";

function embaralhar<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const OPCOES_LABEL = ["A", "B", "C", "D", "E"];

// ── Animação das alternativas (entrada gradual em stagger) ──
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1 },
};

// ── Indicador de progresso com bolinhas numeradas ──
function ProgressoBolinhas({
  total,
  atual,
  respondidas,
}: {
  total: number;
  atual: number;
  respondidas: Set<number>;
}) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => {
            document
              .getElementById(`questao-${i}`)
              ?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-200
            ${
              i === atual
                ? "scale-110 bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-md"
                : respondidas.has(i)
                  ? "bg-gold-100 text-gold-700 dark:bg-green-900/40 dark:text-gold-300"
                  : "bg-surface-2 text-muted hover:bg-surface-3"
            }`}
          aria-label={`Ir para questão ${i + 1}`}
        >
          {respondidas.has(i) ? (
            <Icon name="check" size={12} />
          ) : (
            i + 1
          )}
        </button>
      ))}
    </div>
  );
}

export function ProvaModulo({
  tituloModulo,
  questoes,
  trilhaId,
  moduloId,
}: {
  tituloModulo: string;
  questoes: (QuizQuestao & { aulaTitulo: string })[];
  trilhaId: string;
  moduloId: string;
}) {
  // Seleciona e embaralha 20 questões (ou todas se tiver menos)
  const [seed, setSeed] = useState(0);
  const selecionadas = useMemo(
    () => embaralhar(questoes).slice(0, 20),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questoes, seed],
  );

  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [enviado, setEnviado] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(1200); // 20 min = 1200s
  const [tempoAcabou, setTempoAcabou] = useState(false);
  const [mostrarCelebracao, setMostrarCelebracao] = useState(false);
  const [questaoAtual, setQuestaoAtual] = useState(0);

  const tempoFormatado = `${Math.floor(tempoRestante / 60)}:${String(tempoRestante % 60).padStart(2, "0")}`;
  const porcentagemTempo = (tempoRestante / 1200) * 100;
  const tempoCritico = tempoRestante <= 120; // 2 min

  // Timer regressivo
  useEffect(() => {
    if (enviado || tempoAcabou) return;
    const interval = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTempoAcabou(true);
          setEnviado(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [enviado, tempoAcabou]);

  // Anti-cópia: desabilita botão direito na prova
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      e.preventDefault();
      alert("❌ Ação bloqueada durante a prova. Foco no conteúdo!");
    };
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  // Anti-cópia: blur quando perde foco
  useEffect(() => {
    const handler = () => {
      if (!enviado) {
        setRespostas({}); // Limpa respostas se tentar sair da página
      }
    };
    window.addEventListener("blur", handler);
    return () => window.removeEventListener("blur", handler);
  }, [enviado]);

  const acertos = selecionadas.reduce(
    (n, q, i) => (respostas[i] === q.correta ? n + 1 : n),
    0,
  );
  const nota = selecionadas.length
    ? Math.round((acertos / selecionadas.length) * 100)
    : 0;
  const aprovado = nota >= 80;
  const totalRespondidas = selecionadas.filter((_, i) => respostas[i] != null).length;
  const todasRespondidas = selecionadas.every((_, i) => respostas[i] != null);

  // Conjunto de índices respondidos para o progresso
  const respondidasSet = useMemo(
    () => new Set(selecionadas.map((_, i) => i).filter((i) => respostas[i] != null)),
    [respostas, selecionadas],
  );

  function enviarProva() {
    setEnviado(true);
    if (aprovado) {
      setMostrarCelebracao(true);
      window.setTimeout(() => setMostrarCelebracao(false), 6000);
    }
  }

  // Rastreia qual questão está visível no scroll
  useEffect(() => {
    if (enviado) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-qidx"));
            if (!isNaN(idx)) setQuestaoAtual(idx);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    const els = document.querySelectorAll("[data-qidx]");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enviado, selecionadas.length]);

  const treinarNovamente = useCallback(() => {
    setEnviado(false);
    setRespostas({});
    setTempoRestante(1200);
    setTempoAcabou(false);
    setMostrarCelebracao(false);
    setQuestaoAtual(0);
    setSeed((s) => s + 1); // re-embaralha
  }, []);

  if (!selecionadas.length) {
    return (
      <Card>
        <p className="text-muted">Este módulo ainda não tem questões suficientes para a prova.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Confete ativo={mostrarCelebracao} origemX={0.5} origemY={0.2} />
      <ModuloCompleto
        moduloTitulo={tituloModulo}
        xpGanho={selecionadas.length * 15}
        notaMedia={nota}
        ativo={mostrarCelebracao}
        onFechar={() => setMostrarCelebracao(false)}
      />

      {/* ── Header da prova com timer e progresso ── */}
      <Card
        className={`sticky top-16 z-40 ${
          tempoCritico && !enviado ? "border-orange-400" : ""
        }`}
      >
        <div className="flex flex-col gap-3">
          {/* Linha superior: título + timer */}
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-bold truncate">Prova: {tituloModulo}</h2>
              <p className="text-xs text-muted">
                {selecionadas.length} questões · Mínimo: <strong className="text-gold-500">80%</strong>
              </p>
            </div>
            {!enviado && (
              <div className="flex items-center gap-2 shrink-0">
                <div className="h-2 w-14 overflow-hidden rounded-full bg-surface-2 sm:w-20">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      tempoCritico
                        ? "bg-orange-500"
                        : "bg-gradient-to-r from-gold-500 to-gold-600"
                    }`}
                    style={{ width: `${porcentagemTempo}%` }}
                  />
                </div>
                <span
                  className={`font-mono text-sm font-bold ${
                    tempoCritico
                      ? "text-orange-500 animate-pulse"
                      : "text-foreground"
                  }`}
                >
                  ⏱ {tempoFormatado}
                </span>
              </div>
            )}
          </div>

          {/* Barra de progresso horizontal com bolinhas */}
          {!enviado && (
            <div className="flex items-center gap-3">
              <ProgressoBolinhas
                total={selecionadas.length}
                atual={questaoAtual}
                respondidas={respondidasSet}
              />
              <span className="shrink-0 text-[11px] text-subtle font-medium">
                {totalRespondidas}/{selecionadas.length}
              </span>
            </div>
          )}

          {/* Barra de progresso linear */}
          {!enviado && (
            <BarraProgresso
              pct={(totalRespondidas / selecionadas.length) * 100}
              height={4}
            />
          )}
        </div>
      </Card>

      {/* ── Questões ── */}
      <AnimatePresence mode="popLayout">
        {selecionadas.map((q, i) => (
          <motion.div
            key={`${trilhaId}-${moduloId}-${i}`}
            id={`questao-${i}`}
            data-qidx={i}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
          >
            <Card className={enviado ? "" : "scroll-mt-32"}>
              {/* Enunciado */}
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-[12px] font-bold text-white shadow-sm">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-gold-600 dark:text-gold-400">
                    {q.aulaTitulo}
                  </p>
                  <p className="mt-1 text-base font-semibold leading-snug">
                    {q.pergunta}
                  </p>
                </div>
              </div>

              {/* Alternativas com animação */}
              <motion.div
                className="mt-4 flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {q.opcoes.map((op, j) => {
                  const selecionada = respostas[i] === j;
                  const correta = j === q.correta;
                  let estilo =
                    "border-border hover:border-gold-300 hover:bg-gold-50/30 dark:hover:bg-gold-900/10";

                  if (enviado) {
                    if (correta)
                      estilo =
                        "border-gold-400 bg-gold-50/60 dark:bg-gold-900/20 ring-1 ring-gold-400/30";
                    else if (selecionada)
                      estilo =
                        "border-orange-400 bg-orange-50/60 dark:bg-orange-900/20 ring-1 ring-orange-400/30";
                    else estilo = "border-border opacity-50";
                  } else if (selecionada) {
                    estilo =
                      "border-gold-400 bg-gold-50/60 dark:bg-gold-900/25 ring-1 ring-gold-400/30";
                  }

                  return (
                    <motion.button
                      key={j}
                      type="button"
                      disabled={enviado}
                      onClick={() =>
                        setRespostas((r) => ({ ...r, [i]: j }))
                      }
                      variants={itemVariants}
                      whileHover={enviado ? {} : { scale: 1.01 }}
                      whileTap={enviado ? {} : { scale: 0.98 }}
                      className={`flex min-h-[3rem] items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${estilo}`}
                    >
                      {/* Círculo da letra */}
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[12px] font-bold transition-all ${
                          selecionada || (enviado && correta)
                            ? "border-transparent bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-sm"
                            : enviado && selecionada && !correta
                              ? "border-transparent bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm"
                              : "border-border-strong text-subtle"
                        }`}
                      >
                        {OPCOES_LABEL[j]}
                      </span>

                      {/* Texto da opção */}
                      <span className="flex-1 break-words leading-snug">
                        {op}
                      </span>

                      {/* Ícone de feedback */}
                      {enviado && (selecionada || correta) && (
                        <motion.span
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          className="shrink-0"
                        >
                          <Icon
                            name={correta ? "check" : "close"}
                            size={20}
                            className={
                              correta ? "text-gold-500" : "text-orange-500"
                            }
                          />
                        </motion.span>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Feedback pós-resposta */}
              {enviado && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 space-y-2"
                >
                  <div className="rounded-xl border border-gold-400/20 bg-gradient-to-br from-gold-500/10 to-gold-400/5 px-4 py-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-base dark:bg-green-900/40">
                        💡
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          O que diz a ciência
                        </p>
                        <p className="mt-1 text-sm text-muted leading-relaxed">
                          {q.explicacao}
                        </p>
                        {/* Dica / Para saber mais */}
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium">
                          <span className="inline-flex items-center gap-1 text-gold-600 dark:text-gold-400">
                            <Icon name="book" size={12} />
                            Fonte: ANVISA · OMS · MS
                          </span>
                          <span className="text-gold-400/40 hidden sm:inline">|</span>
                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(q.pergunta + " " + "ANVISA farmácia")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 underline underline-offset-2"
                          >
                            <Icon name="sparkles" size={12} />
                            Para saber mais
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── Ações finais ── */}
      {!enviado ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            {totalRespondidas} de {selecionadas.length} respondidas
            {tempoAcabou && " · Tempo esgotado!"}
          </p>
          <Botao
            onClick={enviarProva}
            disabled={!todasRespondidas && !tempoAcabou}
            iconeFim="arrow"
            tamanho="lg"
            className={
              tempoCritico
                ? "animate-pulse-soft min-h-12 min-w-12"
                : "min-h-12 min-w-12"
            }
          >
            {tempoAcabou ? "Ver resultado" : "Enviar prova"}
          </Botao>
        </div>
      ) : (
        <Card
          className={`${
            aprovado ? "border-gold-300" : "border-orange-300"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg ${
                aprovado
                  ? "bg-gradient-to-r from-gold-500 to-gold-600"
                  : "bg-gradient-to-br from-orange-400 to-orange-600"
              }`}
            >
              <Icon
                name={aprovado ? "award" : "target"}
                size={28}
                className="text-white"
              />
            </motion.span>
            <div>
              <div className="text-2xl font-extrabold">
                {nota}% de acerto
                {aprovado && (
                  <span className="ml-2 text-gold-500">✅ Aprovado!</span>
                )}
                {!aprovado && enviado && (
                  <span className="ml-2 text-orange-500">
                    ❌ Não atingiu 80%
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted">
                {aprovado
                  ? "Parabéns! Você demonstrou domínio do conteúdo deste módulo."
                  : `Você acertou ${acertos} de ${selecionadas.length}. Revise as aulas do módulo e tente novamente.`}
              </p>
              {!aprovado && (
                <p className="mt-2 text-sm font-semibold text-orange-500">
                  Faltaram{" "}
                  {Math.ceil(selecionadas.length * 0.8 - acertos)} acertos para
                  atingir 80%
                </p>
              )}
            </div>
          </div>

          {/* Botões de ação no resultado */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {/* Treinar de novo — sempre visível, re-embaralha */}
            <Botao
              onClick={treinarNovamente}
              variante="secondary"
              icone="repeat"
              tamanho="lg"
              className="min-h-12 min-w-12"
            >
              Treinar de novo
            </Botao>
            <Botao
              href={`/trilhas/${trilhaId}`}
              variante={aprovado ? "primary" : "ghost"}
              iconeFim="arrow"
              tamanho="lg"
              className="min-h-12 min-w-12"
            >
              Voltar para trilha
            </Botao>
          </div>
        </Card>
      )}
    </div>
  );
}
