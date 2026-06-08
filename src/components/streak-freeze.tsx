"use client";

import { useState, useEffect } from "react";
import {
  carregarFreezes,
  freezeUsadoHoje,
  usarFreeze,
} from "@/lib/streak-freeze";
import { Icon } from "./icons";

export function StreakFreezeDisplay() {
  const [state, setState] = useState<{
    disponiveis: number;
    usadosHoje: boolean;
  }>({ disponiveis: 0, usadosHoje: false });
  const [ativando, setAtivando] = useState(false);
  const [feedback, setFeedback] = useState<"success" | "fail" | null>(null);

  useEffect(() => {
    const s = carregarFreezes();
    setState({
      disponiveis: s.disponiveis,
      usadosHoje: freezeUsadoHoje(),
    });
  }, []);

  const handleUsarFreeze = () => {
    if (state.usadosHoje || state.disponiveis <= 0) return;
    setAtivando(true);
    const ok = usarFreeze();
    if (ok) {
      setState((p) => ({ disponiveis: p.disponiveis - 1, usadosHoje: true }));
      setFeedback("success");
    } else {
      setFeedback("fail");
    }
    setTimeout(() => {
      setAtivando(false);
      setFeedback(null);
    }, 2000);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🧊</span>
          <div>
            <div className="text-sm font-bold text-white">Streak Freeze</div>
            <div className="text-[10px] text-white/50">
              {state.disponiveis} disponíve{state.disponiveis === 1 ? "l" : "is"}
            </div>
          </div>
        </div>
        <button
          onClick={handleUsarFreeze}
          disabled={state.usadosHoje || state.disponiveis <= 0 || ativando}
          className={`rounded-xl px-3 py-2 text-[11px] font-semibold transition-all min-h-[44px] inline-flex items-center gap-1.5 ${
            state.usadosHoje
              ? "bg-green-500/20 text-green-300 cursor-default"
              : state.disponiveis > 0
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
              : "bg-white/5 text-white/30 cursor-not-allowed"
          }`}
        >
          {feedback === "success" ? (
            <>✅ Ativado!</>
          ) : state.usadosHoje ? (
            "Protegido"
          ) : state.disponiveis > 0 ? (
            <>
              <Icon name="zap" size={12} />
              Usar freeze
            </>
          ) : (
            "Sem freezes"
          )}
        </button>
      </div>

      {/* Visual dos freezes */}
      <div className="flex gap-1.5">
        {Array.from({ length: 7 }, (_, i) => (
          <div
            key={i}
            className={`flex-1 h-2 rounded-full transition-all duration-500 ${
              i < state.disponiveis
                ? "bg-gradient-to-r from-blue-400 to-cyan-400 shadow-sm shadow-blue-400/30"
                : state.usadosHoje && i === 0
                ? "bg-green-400/50"
                : "bg-white/10"
            }`}
          />
        ))}
      </div>

      <p className="mt-2 text-[10px] text-white/30 leading-relaxed">
        Ganhe 1 freeze a cada 7 dias de streak. O freeze protege sua
        sequência por 1 dia sem estudar.
      </p>
    </div>
  );
}
