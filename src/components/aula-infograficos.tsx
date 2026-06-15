"use client";

import { Icon, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════
   AulaInfograficos
   Componentes visuais SVG para cada seção da aula
   ═══════════════════════════════════════════════════ */

/* ─── Ícone decorativo de seção ─── */
function SecaoIcon({ icon, color = "emerald" }: { icon: IconName; color?: string }) {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    green: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  };
  return (
    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors[color] || colors.emerald}`}>
      <Icon name={icon} size={20} />
    </span>
  );
}

/* ─── Cabeçalho de Seção ─── */
function SecaoHeader({ icon, titulo, color = "emerald" }: { icon: IconName; titulo: string; color?: string }) {
  return (
    <div className="flex items-center gap-3">
      <SecaoIcon icon={icon} color={color} />
      <h2 className="text-lg font-bold text-foreground">{titulo}</h2>
    </div>
  );
}

/* ─── 1. Resumo Executivo — lista com ícones ─── */
export function InfograficoResumo({ itens }: { itens: string[] }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-5 dark:border-emerald-900/30 dark:from-emerald-900/10 dark:to-forest-800/50">
      <SecaoHeader icon="book" titulo="Resumo executivo" />
      <div className="mt-4 space-y-3">
        {itens.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 5 5 9-11" />
              </svg>
            </span>
            <p className="text-sm leading-relaxed text-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 2. Comparativo — cards lado a lado ─── */
interface ComparativoItem {
  nome: string;
  quando: string;
}

export function InfograficoComparativo({ titulo, itens }: { titulo: string; itens: ComparativoItem[] }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-5 dark:border-blue-900/30 dark:from-blue-900/10 dark:to-forest-800/50">
      <SecaoHeader icon="chart" titulo={titulo} color="blue" />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {itens.map((it) => (
          <div
            key={it.nome}
            className="group relative overflow-hidden rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-blue-900/20 dark:bg-forest-800/50"
          >
            <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-blue-500/0 via-transparent to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-500/[0.03] group-hover:to-blue-500/[0.03] group-hover:opacity-100" />
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <p className="text-sm font-bold text-blue-700 dark:text-blue-300">{it.nome}</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">{it.quando}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 3. Simulação de Atendimento — diálogo ─── */
export function InfograficoSimulacao({
  cliente,
  falaBoa,
  falaEvitar,
}: {
  cliente: string;
  falaBoa: string;
  falaEvitar: string;
}) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50/80 to-white p-5 dark:border-purple-900/30 dark:from-purple-900/10 dark:to-forest-800/50">
      <SecaoHeader icon="user" titulo="Simulação de atendimento" color="purple" />

      {/* Contexto do cliente */}
      <div className="mt-4 flex items-start gap-3 rounded-xl border border-purple-200/50 bg-purple-50/50 p-4 dark:border-purple-800/30 dark:bg-purple-900/10">
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <p className="text-sm italic text-muted">&ldquo;{cliente}&rdquo;</p>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {/* Conduta recomendada */}
        <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-50/30 p-4 dark:border-emerald-800/30 dark:from-emerald-900/20 dark:to-forest-800/30">
          <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-700 dark:text-emerald-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 5 5 9-11" />
            </svg>
            Conduta recomendada
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{falaBoa}</p>
        </div>

        {/* Evite */}
        <div className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-50/30 p-4 dark:border-orange-800/30 dark:from-orange-900/20 dark:to-forest-800/30">
          <div className="flex items-center gap-1.5 text-sm font-bold text-orange-700 dark:text-orange-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 6l12 12" />
              <path d="M18 6 6 18" />
            </svg>
            Evite
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{falaEvitar}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── 4. Checklist de Bolso ─── */
export function InfograficoChecklist({ itens }: { itens: string[] }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-5 dark:border-emerald-900/30 dark:from-emerald-900/10 dark:to-forest-800/50">
      <SecaoHeader icon="clipboard" titulo="Checklist de bolso" />
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {itens.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 rounded-lg border border-emerald-100 bg-white px-3 py-2.5 text-sm shadow-sm dark:border-emerald-900/20 dark:bg-forest-800/50"
          >
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 5 5 9-11" />
              </svg>
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 5. Quando Chamar o Farmacêutico ─── */
export function InfograficoChamarFarmaceutico({ itens }: { itens: string[] }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/80 to-white p-5 dark:border-orange-900/30 dark:from-orange-900/10 dark:to-forest-800/50">
      <SecaoHeader icon="alert" titulo="Quando chamar o farmacêutico" color="orange" />
      <div className="mt-4 space-y-2.5">
        {itens.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <p className="text-sm leading-relaxed text-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 6. Erros Comuns ─── */
export function InfograficoErros({ itens }: { itens: string[] }) {
  return (
    <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-white p-5 dark:border-red-900/30 dark:from-red-900/10 dark:to-forest-800/50">
      <SecaoHeader icon="ban" titulo="Erros que não posso cometer" color="orange" />
      <div className="mt-4 space-y-2.5">
        {itens.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </span>
            <p className="text-sm leading-relaxed text-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 7. Dica 4 Ps — SVG-based ─── */
const DICAS_4PS = [
  {
    p: "Prevenção",
    icone: "shield" as IconName,
    cor: "emerald",
    texto: "Antes de indicar qualquer coisa, pergunte-se: o que essa pessoa pode fazer HOJE para evitar o problema amanhã?",
  },
  {
    p: "Parâmetros",
    icone: "ruler" as IconName,
    cor: "blue",
    texto: "Números orientam, não diagnosticam. Conheça os valores de referência do tema desta aula — e encaminhe quando estiverem fora.",
  },
  {
    p: "Problemas",
    icone: "alert" as IconName,
    cor: "orange",
    texto: "Todo tema de saúde tem sinais de alerta. Saber reconhecê-los é o que separa orientar de arriscar — na dúvida, escalone ao farmacêutico.",
  },
  {
    p: "Promoção",
    icone: "sparkles" as IconName,
    cor: "purple",
    texto: "O atendimento não termina na entrega: feche promovendo saúde — um hábito, um acompanhamento, um retorno agendado.",
  },
];

export function InfograficoDica4Ps({ semente }: { semente: string }) {
  const idx = [...semente].reduce((n, c) => n + c.charCodeAt(0), 0) % DICAS_4PS.length;
  const d = DICAS_4PS[idx];
  const corMap: Record<string, string> = {
    emerald: "border-emerald-500/25 bg-emerald-500/[0.06]",
    blue: "border-blue-500/25 bg-blue-500/[0.06]",
    orange: "border-orange-500/25 bg-orange-500/[0.06]",
    purple: "border-purple-500/25 bg-purple-500/[0.06]",
  };
  const corTextMap: Record<string, string> = {
    emerald: "text-emerald-600 dark:text-emerald-400",
    blue: "text-blue-600 dark:text-blue-400",
    orange: "text-orange-600 dark:text-orange-400",
    purple: "text-purple-600 dark:text-purple-400",
  };

  return (
    <div className={`flex items-start gap-3 rounded-2xl border ${corMap[d.cor]} p-4`}>
      <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-xl ${corMap[d.cor]} ${corTextMap[d.cor]}`}>
        <Icon name={d.icone} size={18} />
      </span>
      <div>
        <p className={`text-[11px] font-bold uppercase tracking-[0.1em] ${corTextMap[d.cor]}`}>
          Dica 4 Ps &middot; {d.p}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed text-muted">{d.texto}</p>
        <p className="mt-1.5 text-[10px] text-muted/70">
          Fontes: ANVISA &middot; OMS &middot; Ministério da Saúde &middot; conteúdo revisado por farmacêutico (CRF/SP 58.519)
        </p>
      </div>
    </div>
  );
}

/* ─── 8. Banner Mensagem do Farmacêutico ─── */
export function InfograficoMensagemFarmaceutico() {
  return (
    <div className="grid gap-4 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-5 dark:border-orange-900/30 dark:from-orange-900/10 dark:to-forest-800/50 sm:grid-cols-3">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300">
          <Icon name="shield" size={16} />
        </span>
        <p className="text-xs leading-relaxed text-muted">
          <strong className="text-forest-700 dark:text-white">Sempre consulte</strong> o(a) farmacêutico(a) para orientação personalizada sobre medicamentos.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300">
          <Icon name="clipboard" size={16} />
        </span>
        <p className="text-xs leading-relaxed text-muted">
          <strong className="text-forest-700 dark:text-white">Solicite o segundo visto</strong> do farmacêutico(a) para prescrições.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300">
          <Icon name="book" size={16} />
        </span>
        <p className="text-xs leading-relaxed text-muted">
          <strong className="text-forest-700 dark:text-white">Anote corretamente</strong> as informações na etiqueta de posologia.
        </p>
      </div>
    </div>
  );
}
