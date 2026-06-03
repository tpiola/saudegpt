"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import type { QuizQuestao } from "@/content/types";
import { Botao, Card } from "./ui";
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
  const selecionadas = useMemo(
    () => embaralhar(questoes).slice(0, 20),
    [questoes],
  );

  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [enviado, setEnviado] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(1200); // 20 min = 1200s
  const [tempoAcabou, setTempoAcabou] = useState(false);
  const [mostrarCelebracao, setMostrarCelebracao] = useState(false);

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

  function enviarProva() {
    setEnviado(true);
    if (aprovado) {
      setMostrarCelebracao(true);
      window.setTimeout(() => setMostrarCelebracao(false), 6000);
    }
  }

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

      {/* ── Header da prova com timer ── */}
      <Card className={`sticky top-16 z-40 ${tempoCritico && !enviado ? "border-orange-400" : ""}`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold">Prova: {tituloModulo}</h2>
            <p className="text-sm text-muted">
              {selecionadas.length} questões · Nota mínima: <strong className="text-green-500">80%</strong> · Nível intermediário/avançado
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Timer */}
            {!enviado && (
              <div className="flex items-center gap-2">
                <div className="h-2 w-16 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      tempoCritico ? "bg-orange-500" : "bg-gradient-to-r from-green-500 to-green-600"
                    }`}
                    style={{ width: `${porcentagemTempo}%` }}
                  />
                </div>
                <span
                  className={`font-mono text-sm font-bold ${
                    tempoCritico ? "text-orange-500 animate-pulse" : "text-foreground"
                  }`}
                >
                  ⏱ {tempoFormatado}
                </span>
              </div>
            )}
            {/* Progresso de respostas */}
            <span className="text-xs text-subtle">
              {totalRespondidas}/{selecionadas.length} respondidas
            </span>
          </div>
        </div>
      </Card>

      {/* ── Questões ── */}
      {selecionadas.map((q, i) => (
        <Card key={`${trilhaId}-${moduloId}-${i}`} className={enviado ? "" : "scroll-mt-28"}>
          <div className="flex items-start gap-2">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-[11px] font-bold text-white">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-green-600">{q.aulaTitulo}</p>
              <p className="mt-1 font-semibold">{q.pergunta}</p>
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            {q.opcoes.map((op, j) => {
              const selecionada = respostas[i] === j;
              const correta = j === q.correta;
              let estilo = "border-border hover:border-green-300";

              if (enviado) {
                if (correta) estilo = "border-green-400 bg-green-50/50 dark:bg-green-900/15";
                else if (selecionada) estilo = "border-orange-400 bg-orange-50/50 dark:bg-orange-900/15";
                else estilo = "border-border opacity-50";
              } else if (selecionada) {
                estilo = "border-green-400 bg-green-50/50 dark:bg-green-900/25";
              }

              return (
                <button
                  key={j}
                  type="button"
                  disabled={enviado}
                  onClick={() =>
                    setRespostas((r) => ({ ...r, [i]: j }))
                  }
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${estilo}`}
                >
                  <span
                    className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border text-[11px] font-bold ${
                      selecionada || (enviado && correta)
                        ? "border-transparent bg-gradient-to-r from-green-500 to-green-600 text-white"
                        : "border-border-strong text-subtle"
                    }`}
                  >
                    {OPCOES_LABEL[j]}
                  </span>
                  <span>{op}</span>
                  {enviado && (selecionada || correta) && (
                    <Icon
                      name={correta ? "check" : "close"}
                      size={16}
                      className={`ml-auto ${
                        correta ? "text-green-500" : "text-orange-500"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {enviado && (
            <div className="mt-3 rounded-lg bg-surface-2 px-4 py-3">
              <p className="text-sm text-muted">
                <Icon name="sparkles" size={14} className="mr-1 inline text-green-600" />
                {q.explicacao}
              </p>
            </div>
          )}
        </Card>
      ))}

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
            className={tempoCritico ? "animate-pulse-soft" : ""}
          >
            {tempoAcabou ? "Ver resultado" : "Enviar prova"}
          </Botao>
        </div>
      ) : (
        <Card className={`${aprovado ? "border-green-300" : "border-orange-300"}`}>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <span
              className={`flex h-16 w-16 flex-none items-center justify-center rounded-2xl shadow-lg ${
                aprovado
                  ? "bg-gradient-to-r from-green-500 to-green-600"
                  : "bg-gradient-to-br from-orange-400 to-orange-600"
              }`}
            >
              <Icon name={aprovado ? "award" : "target"} size={28} className="text-white" />
            </span>
            <div>
              <div className="text-2xl font-extrabold">
                {nota}% de acerto
                {aprovado && (
                  <span className="ml-2 text-green-500">✅ Aprovado!</span>
                )}
                {!aprovado && enviado && (
                  <span className="ml-2 text-orange-500">❌ Não atingiu 80%</span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted">
                {aprovado
                  ? "Parabéns! Você demonstrou domínio do conteúdo deste módulo."
                  : `Você acertou ${acertos} de ${selecionadas.length}. Revise as aulas do módulo e tente novamente.`}
              </p>
              {!aprovado && (
                <p className="mt-2 text-sm font-semibold text-orange-500">
                  Faltaram {Math.ceil(selecionadas.length * 0.8 - acertos)} acertos para atingir 80%
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {!aprovado && (
              <Botao
                onClick={() => {
                  setEnviado(false);
                  setRespostas({});
                  setTempoRestante(1200);
                  setTempoAcabou(false);
                }}
                variante="secondary"
                icone="target"
              >
                Tentar novamente
              </Botao>
            )}
            <Botao
              href={`/trilhas/${trilhaId}`}
              variante={aprovado ? "primary" : "ghost"}
              iconeFim="arrow"
            >
              Voltar para trilha
            </Botao>
          </div>
        </Card>
      )}
    </div>
  );
}
