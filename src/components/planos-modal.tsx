"use client";

import { useState, useCallback } from "react";
import { PLANOS, type Plano } from "@/lib/pagamento";
import { Icon } from "./icons";

interface PlanosModalProps {
  aberto: boolean;
  onFechar: () => void;
}

/* ─── Ícones para cada plano ─── */
const iconePlano: Record<string, string> = {
  mensal: "📅",
  trimestral: "📆",
  anual: "🌟",
};

/* ─── Cor de destaque para cada badge ─── */
const corDestaque: Record<string, string> = {
  "MAIS POPULAR":
    "border-orange-400/40 bg-orange-500/15 text-orange-300 shadow-[0_0_20px_rgba(214,110,15,0.15)]",
  "MAIS ECONÔMICO":
    "border-green-400/40 bg-green-500/15 text-green-300 shadow-[0_0_20px_rgba(76,161,93,0.15)]",
};

function CardPlano({
  plano,
  onSelecionar,
  carregando,
}: {
  plano: Plano;
  onSelecionar: (id: string) => Promise<void>;
  carregando: boolean;
}) {
  const estaCarregando = carregando;

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-colored ${
        plano.destaque
          ? "border-orange-400/30 bg-gradient-to-b from-orange-500/8 to-forest-500/5 shadow-[0_0_40px_rgba(214,110,15,0.08)] ring-1 ring-orange-400/20"
          : "border-border/40 bg-gradient-to-b from-background via-forest-50/10 to-background ring-1 ring-white/5"
      }`}
    >
      {/* Imagem decorativa de fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Badge de destaque */}
      {plano.destaque && (
        <div className="relative z-10 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${corDestaque[plano.destaque] ?? ""}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            {plano.destaque}
          </span>
        </div>
      )}

      {/* Ícone + Nome */}
      <div className="relative z-10 flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-orange-400/10 text-2xl ring-1 ring-green-400/20 group-hover:ring-orange-400/30 transition-all duration-300">
          {iconePlano[plano.id] ?? "💳"}
        </span>
        <div>
          <h3 className="text-lg font-bold text-foreground">{plano.nome}</h3>
          {plano.economia && (
            <p className="text-xs text-green-500 font-medium">{plano.economia}</p>
          )}
        </div>
      </div>

      {/* Preço */}
      <div className="relative z-10 mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-black tabular-nums text-foreground">
          {plano.precoExibicao}
        </span>
        <span className="text-sm text-muted">{plano.periodo}</span>
      </div>

      {/* Benefícios */}
      <ul className="relative z-10 mt-6 space-y-3 border-t border-border/30 pt-6">
        <Beneficio>Acesso completo a todas as trilhas</Beneficio>
        <Beneficio>Quizzes e simulações</Beneficio>
        <Beneficio>Certificado ao finalizar</Beneficio>
        <Beneficio>
          {plano.id === "anual" ? "Economia de ~44% no ano" : plano.id === "trimestral" ? "Economia de ~33% no trimestre" : "Sem fidelidade"}
        </Beneficio>
      </ul>

      {/* CTA */}
      <div className="relative z-10 mt-auto pt-6">
        <button
          type="button"
          disabled={estaCarregando}
          onClick={() => onSelecionar(plano.id)}
          className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all duration-300 ${
            plano.destaque
              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_4px_24px_rgba(214,110,15,0.3)] hover:shadow-[0_8px_32px_rgba(214,110,15,0.45)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
              : "border-2 border-green-500/30 bg-green-500/10 text-foreground hover:bg-green-500/20 hover:border-green-500/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
          }`}
        >
          {estaCarregando ? (
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Redirecionando…
            </span>
          ) : (
            `Assinar ${plano.nome}`
          )}
        </button>
      </div>
    </div>
  );
}

function Beneficio({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-muted">
      <svg
        className="h-4 w-4 shrink-0 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      {children}
    </li>
  );
}

export function PlanosModal({ aberto, onFechar }: PlanosModalProps) {
  const [carregando, setCarregando] = useState<string | null>(null);

  const handleSelecionar = useCallback(
    async (planoId: string) => {
      setCarregando(planoId);
      try {
        const res = await fetch("/api/pagamento/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ planoId }),
        });
        const data = await res.json();

        if (!res.ok || !data.url) {
          console.error("[pagamento] Erro no checkout:", data.erro);
          alert(data.erro ?? "Erro ao iniciar pagamento. Tente novamente.");
          return;
        }

        // Redireciona para o Stripe (ou página de sucesso em dev)
        window.location.href = data.url;
      } catch (err) {
        console.error("[pagamento] Erro de rede:", err);
        alert("Erro de conexão. Tente novamente.");
      } finally {
        setCarregando(null);
      }
    },
    [],
  );

  if (!aberto) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Escolha seu plano"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onFechar}
      />

      {/* Modal */}
      <div className="relative z-10 mx-auto w-full max-w-5xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-orange-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(214,110,15,0.7)]" />
            Investimento
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">
            Escolha seu plano
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Acesso completo a todo conteúdo por {PLANOS.length} opções de
            pagamento
          </p>
        </div>

        {/* Grid de planos */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLANOS.map((plano) => (
            <CardPlano
              key={plano.id}
              plano={plano}
              onSelecionar={handleSelecionar}
              carregando={carregando === plano.id}
            />
          ))}
        </div>

        {/* Segurança */}
        <div className="mt-6 text-center">
          <p className="flex items-center justify-center gap-2 text-xs text-white/30">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            Pagamento 100% seguro via Stripe · Dados criptografados
          </p>
        </div>

        {/* Fechar */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onFechar}
            className="text-xs text-white/30 transition-colors hover:text-white/60"
          >
            Continuar navegando
          </button>
        </div>
      </div>
    </div>
  );
}
