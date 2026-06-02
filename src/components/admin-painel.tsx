"use client";

import { useCallback, useEffect, useState } from "react";
import type { CadastroRegistro } from "@/lib/cadastro-types";
import { formatarTempoEstudo } from "@/lib/format-tempo";
import { listarAulas } from "@/content/curriculo";
import { NOTION_CADASTROS_LINKS } from "@/lib/notion-cadastros-links";
import { trilhas, totalAulas } from "@/content/curriculo";
import { bibliotecaRegulatoria } from "@/content/biblioteca";
import { Icon } from "./icons";

// ── Helpers ──────────────────────────────────────

function mediaNotas(notas: Record<string, number>) {
  const vals = Object.values(notas);
  if (!vals.length) return null;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

function totalTentativas(t: Record<string, number>) {
  return Object.values(t).reduce((a, b) => a + b, 0);
}

function calcularStreak(dias: string[]): number {
  const hoje = new Date().toISOString().slice(0, 10);
  const set = new Set(dias);
  let streak = 0;
  const d = new Date();
  if (!set.has(hoje)) d.setDate(d.getDate() - 1);
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (!set.has(key)) break;
    streak += 1;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

function ordenarAlunos(
  lista: CadastroRegistro[],
  criterio: string,
): CadastroRegistro[] {
  const copia = [...lista];
  switch (criterio) {
    case "xp":
      return copia.sort((a, b) => (b.progresso.xp ?? 0) - (a.progresso.xp ?? 0));
    case "tempo":
      return copia.sort(
        (a, b) => (b.progresso.tempoEstudoSegundos ?? 0) - (a.progresso.tempoEstudoSegundos ?? 0),
      );
    case "streak":
      return copia.sort(
        (a, b) => calcularStreak(b.progresso.diasEstudo ?? []) - calcularStreak(a.progresso.diasEstudo ?? []),
      );
    case "nota":
      return copia.sort((a, b) => (mediaNotas(b.progresso.notas ?? {}) ?? 0) - (mediaNotas(a.progresso.notas ?? {}) ?? 0));
    case "recente":
    default:
      return copia.sort(
        (a, b) => new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime(),
      );
  }
}

// ── Types ─────────────────────────────────────────

type FiltroStatus = "todos" | "pendente" | "aprovado" | "rejeitado";
type OrdenarPor = "recente" | "xp" | "tempo" | "streak" | "nota";

// ── Componente principal ──────────────────────────

export function AdminPainel() {
  const [usuario, setUsuario] = useState("admin");
  const [senha, setSenha] = useState("");
  const [authHeader, setAuthHeader] = useState<string | null>(null);
  const [erro, setErro] = useState("");
  const [cadastros, setCadastros] = useState<CadastroRegistro[]>([]);
  const [filtro, setFiltro] = useState<FiltroStatus>("todos");
  const [ordenar, setOrdenar] = useState<OrdenarPor>("recente");
  const [carregando, setCarregando] = useState(false);
  const [alunoExpandido, setAlunoExpandido] = useState<string | null>(null);
  const [busca, setBusca] = useState("");

  const totalCurso = listarAulas().length;

  const carregar = useCallback(async (header: string) => {
    setCarregando(true);
    try {
      const res = await fetch("/api/cadastros", { headers: { Authorization: header } });
      if (res.ok) {
        const json = (await res.json()) as { cadastros: CadastroRegistro[] };
        setCadastros(json.cadastros);
      }
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    const salvo = sessionStorage.getItem("fap-admin-auth");
    if (salvo) {
      setAuthHeader(salvo);
      void carregar(salvo);
    }
  }, [carregar]);

  async function entrar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    const res = await fetch("/api/admin/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, senha }),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as { motivo?: string };
      setErro(res.status === 503 && body.motivo ? body.motivo : "Usuário ou senha incorretos.");
      return;
    }
    const header = `Basic ${btoa(`${usuario}:${senha}`)}`;
    sessionStorage.setItem("fap-admin-auth", header);
    setAuthHeader(header);
    await carregar(header);
  }

  async function acao(id: string, acao_tipo: "aprovar" | "rejeitar") {
    if (!authHeader) return;
    await fetch("/api/cadastros", {
      method: "PATCH",
      headers: { Authorization: authHeader, "Content-Type": "application/json" },
      body: JSON.stringify({ id, acao: acao_tipo }),
    });
    await carregar(authHeader);
  }

  async function excluir(id: string) {
    if (!authHeader || !confirm("Excluir este aluno permanentemente?")) return;
    await fetch(`/api/cadastros?id=${id}`, {
      method: "DELETE",
      headers: { Authorization: authHeader },
    });
    await carregar(authHeader);
  }

  function sair() {
    sessionStorage.removeItem("fap-admin-auth");
    setAuthHeader(null);
    setCadastros([]);
    setAlunoExpandido(null);
  }

  // ── Login screen ──
  if (!authHeader) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
        <form onSubmit={entrar} className="w-full max-w-md space-y-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg shadow-blue-500/25">
              <Icon name="shield" size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              Portal do Administrador
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Aprove matrículas, acompanhe progresso, notas e engajamento dos alunos.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Usuário
                </label>
                <input
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  className="mt-1.5 block w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  autoComplete="username"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Senha
                </label>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="mt-1.5 block w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  autoComplete="current-password"
                />
              </div>
              {erro && (
                <p className="rounded-lg bg-rose-500/10 px-3 py-2 text-sm text-rose-300">{erro}</p>
              )}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]"
              >
                Entrar no painel
              </button>
            </div>
          </div>
          <p className="text-center text-xs text-slate-600">
            Credencial padrão: <span className="text-slate-400">admin</span> /{" "}
            <span className="text-slate-400">admin</span>
          </p>
        </form>
      </div>
    );
  }

  // ── Dados processados ──
  const pendentes = cadastros.filter((c) => c.status === "pendente");
  const aprovados = cadastros.filter((c) => c.status === "aprovado");
  const rejeitados = cadastros.filter((c) => c.status === "rejeitado");

  let listaFiltrada =
    filtro === "todos" ? cadastros : cadastros.filter((c) => c.status === filtro);

  if (busca.trim()) {
    const q = busca.toLowerCase();
    listaFiltrada = listaFiltrada.filter(
      (c) => c.nome.toLowerCase().includes(q) || c.email.toLowerCase().includes(q),
    );
  }

  const listaOrdenada = ordenarAlunos(listaFiltrada, ordenar);

  const tempoTotal = cadastros.reduce((s, c) => s + (c.progresso.tempoEstudoSegundos ?? 0), 0);
  const tentativasTotal = cadastros.reduce((s, c) => s + totalTentativas(c.progresso.tentativasQuiz ?? {}), 0);
  const xpTotal = cadastros.reduce((s, c) => s + (c.progresso.xp ?? 0), 0);
  const missoesTotal = cadastros.reduce((s, c) => s + (c.progresso.missoesPontos ?? 0), 0);
  const streakMedio =
    aprovados.length > 0
      ? Math.round(
          aprovados.reduce((s, c) => s + calcularStreak(c.progresso.diasEstudo ?? []), 0) /
            aprovados.length,
        )
      : 0;

  // Top 5 por XP (apenas aprovados)
  const topXp = ordenarAlunos(aprovados, "xp").slice(0, 5);

  // Alunos que precisam de atenção (aprovados mas streak 0, sem progresso)
  const parados = aprovados.filter((c) => {
    const feitas = c.progresso.concluidas?.length ?? 0;
    const streak = calcularStreak(c.progresso.diasEstudo ?? []);
    return feitas === 0 || streak === 0;
  });

  // Alunos com baixo desempenho (nota média < 50)
  const baixoDesempenho = aprovados.filter((c) => {
    const media = mediaNotas(c.progresso.notas ?? {});
    return media != null && media < 50;
  });

  // ═══════════════════════════════════════════════════
  // MAIN DASHBOARD
  // ═══════════════════════════════════════════════════

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg">
              <Icon name="shield" size={18} />
            </span>
            <div>
              <h1 className="text-sm font-bold text-white">Admin</h1>
              <p className="text-[10px] text-slate-500">Centro de inteligência pedagógica</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-slate-500 sm:block">
              {cadastros.length} alunos
            </span>
            <button
              type="button"
              onClick={() => authHeader && carregar(authHeader)}
              disabled={carregando}
              className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 disabled:opacity-50"
            >
              {carregando ? "…" : "Atualizar"}
            </button>
            <button
              type="button"
              onClick={sair}
              className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:bg-rose-600/20 hover:text-rose-300"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* ════════════════════════════════════════════
            STATS CARDS
            ════════════════════════════════════════════ */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {[
            { valor: String(cadastros.length), rotulo: "Alunos", sub: `${pendentes.length} pendentes`, icone: "user" },
            { valor: String(aprovados.length), rotulo: "Aprovados", sub: `${Math.round((aprovados.length / (cadastros.length || 1)) * 100)}% do total`, icone: "check" },
            { valor: formatarTempoEstudo(tempoTotal), rotulo: "Tempo total", sub: "soma de todos", icone: "clock" },
            { valor: String(tentativasTotal), rotulo: "Tentativas quiz", sub: `${totalAulas()} aulas`, icone: "target" },
            { valor: String(xpTotal), rotulo: "XP total", sub: `média ${xpTotal > 0 ? Math.round(xpTotal / (aprovados.length || 1)) : 0}/aluno`, icone: "sparkles" },
            { valor: String(streakMedio), rotulo: "Streak médio", sub: "dias consecutivos", icone: "flame" },
            { valor: String(missoesTotal), rotulo: "Pontos missões", sub: "simulador de balcão", icone: "target" },
            { valor: String(aprovados.filter((c) => (c.progresso.concluidas?.length ?? 0) > 0).length), rotulo: "Ativos", sub: `${aprovados.filter((c) => (c.progresso.concluidas?.length ?? 0) > 0).length}/${aprovados.length} aprovados`, icone: "trending" },
          ].map((k) => (
            <div
              key={k.rotulo}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-slate-700 hover:bg-slate-900"
            >
              <Icon name={k.icone as any} size={18} className="text-cyan-400" />
              <div className="mt-2 text-xl font-bold text-white">{k.valor}</div>
              <div className="text-xs font-medium text-slate-400">{k.rotulo}</div>
              <div className="mt-0.5 text-[10px] text-slate-600">{k.sub}</div>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════
            ROW 2 — TOP ALUNOS + PRECISAM ATENÇÃO
            ════════════════════════════════════════════ */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* ── TOP 5 ── */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-center gap-2">
              <Icon name="award" size={16} className="text-amber-400" />
              <h2 className="text-sm font-bold text-white">Top 5 — Mais XP</h2>
            </div>
            <div className="mt-4 space-y-2">
              {topXp.length === 0 && (
                <p className="text-xs text-slate-500">Nenhum aluno com XP ainda.</p>
              )}
              {topXp.map((c, idx) => {
                const p = c.progresso;
                const feitas = p.concluidas?.length ?? 0;
                const pct = totalCurso ? Math.round((feitas / totalCurso) * 100) : 0;
                return (
                  <div
                    key={c.id}
                    className="flex items-center gap-3 rounded-xl bg-slate-800/60 px-3 py-2.5 transition hover:bg-slate-800"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-[11px] font-bold text-white shadow">
                      {idx + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-white truncate">{c.nome}</div>
                      <div className="text-[10px] text-slate-500">{feitas}/{totalCurso} aulas · {p.xp ?? 0} XP</div>
                    </div>
                    <div className="h-6 w-16 overflow-hidden rounded-full bg-slate-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── PRECISAM ATENÇÃO ── */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-center gap-2">
              <Icon name="sparkles" size={16} className="text-rose-400" />
              <h2 className="text-sm font-bold text-white">Precisam de atenção</h2>
            </div>
            <div className="mt-4 space-y-2">
              {parados.length === 0 && baixoDesempenho.length === 0 && (
                <p className="text-xs text-slate-500">Todos os alunos estão ativos! 🎉</p>
              )}
              {parados.slice(0, 5).map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between rounded-xl bg-slate-800/60 px-3 py-2 transition hover:bg-slate-800"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-white truncate">{c.nome}</div>
                    <div className="text-[10px] text-rose-400">
                      {(c.progresso.concluidas?.length ?? 0) === 0
                        ? "Nunca estudou"
                        : `Streak: ${calcularStreak(c.progresso.diasEstudo ?? [])}d`}
                    </div>
                  </div>
                </div>
              ))}
              {baixoDesempenho.slice(0, 3).map((c) => {
                const media = mediaNotas(c.progresso.notas ?? {});
                return (
                  <div
                    key={`low-${c.id}`}
                    className="flex items-center justify-between rounded-xl bg-slate-800/60 px-3 py-2 transition hover:bg-slate-800"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-white truncate">{c.nome}</div>
                      <div className="text-[10px] text-amber-400">Nota média: {media}%</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            SEÇÃO DE ALUNOS — FILTROS + TABELA
            ════════════════════════════════════════════ */}
        <div className="mt-8">
          {/* Controles: filtros + busca + ordenação */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5">
              {(["todos", "pendente", "aprovado", "rejeitado"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFiltro(f)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    filtro === f
                      ? "bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-400/50"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {f === "todos"
                    ? `Todos (${cadastros.length})`
                    : `${f.charAt(0).toUpperCase() + f.slice(1)} (${cadastros.filter((c) => c.status === f).length})`}
                </button>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar por nome ou email…"
                className="w-48 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />
              <select
                value={ordenar}
                onChange={(e) => setOrdenar(e.target.value as OrdenarPor)}
                className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300 focus:border-blue-500 focus:outline-none"
              >
                <option value="recente">Mais recentes</option>
                <option value="xp">Maior XP</option>
                <option value="tempo">Mais tempo</option>
                <option value="streak">Maior streak</option>
                <option value="nota">Melhor nota</option>
              </select>
            </div>
          </div>

          {/* Tabela */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-[10px] uppercase tracking-wider text-slate-500">
                    <th className="px-4 py-3 font-semibold">Aluno</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Cadastro</th>
                    <th className="px-4 py-3 font-semibold">Progresso</th>
                    <th className="px-4 py-3 font-semibold">Nota média</th>
                    <th className="px-4 py-3 font-semibold">Tempo</th>
                    <th className="px-4 py-3 font-semibold">Streak</th>
                    <th className="px-4 py-3 font-semibold">XP</th>
                    <th className="px-4 py-3 font-semibold">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {listaOrdenada.length === 0 && (
                    <tr>
                      <td colSpan={9} className="px-4 py-12 text-center text-slate-500">
                        Nenhum aluno encontrado.
                      </td>
                    </tr>
                  )}
                  {listaOrdenada.map((c) => {
                    const p = c.progresso;
                    const media = mediaNotas(p.notas ?? {});
                    const feitas = p.concluidas?.length ?? 0;
                    const pct = totalCurso ? Math.round((feitas / totalCurso) * 100) : 0;
                    const tent = totalTentativas(p.tentativasQuiz ?? {});
                    const streak = calcularStreak(p.diasEstudo ?? []);
                    const expandido = alunoExpandido === c.id;

                    return (
                      <Fragment key={c.id}>
                        <tr
                          className="border-b border-slate-800/50 transition hover:bg-white/[0.02] cursor-pointer"
                          onClick={() => setAlunoExpandido(expandido ? null : c.id)}
                        >
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-2.5">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white shadow">
                                {c.nome.charAt(0).toUpperCase()}
                              </span>
                              <div>
                                <div className="text-sm font-semibold text-white">{c.nome}</div>
                                <div className="text-[10px] text-slate-500">{c.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                                c.status === "aprovado"
                                  ? "bg-emerald-500/15 text-emerald-300"
                                  : c.status === "pendente"
                                    ? "bg-amber-500/15 text-amber-200"
                                    : "bg-rose-500/15 text-rose-300"
                              }`}
                            >
                              {c.status}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-xs text-slate-400">
                            {new Date(c.criadoEm).toLocaleDateString("pt-BR")}
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white">
                                {feitas}/{totalCurso}
                              </span>
                              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-700">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5 text-sm text-white">
                            {media != null ? (
                              <span className={media >= 60 ? "text-emerald-300" : "text-amber-300"}>
                                {media}%
                              </span>
                            ) : (
                              <span className="text-slate-600">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3.5 text-sm text-slate-300">
                            {formatarTempoEstudo(p.tempoEstudoSegundos ?? 0)}
                          </td>
                          <td className="px-4 py-3.5">
                            {streak > 0 ? (
                              <span className="inline-flex items-center gap-1 text-sm text-amber-400">
                                <Icon name="flame" size={14} />
                                {streak}
                              </span>
                            ) : (
                              <span className="text-slate-600">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3.5 text-sm text-cyan-300">{p.xp ?? 0}</td>
                          <td className="px-4 py-3.5">
                            <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                              {c.status === "pendente" && (
                                <button
                                  type="button"
                                  onClick={() => acao(c.id, "aprovar")}
                                  className="rounded-lg bg-emerald-600 px-2 py-1 text-[10px] font-bold text-white hover:bg-emerald-500"
                                >
                                  Aprovar
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => excluir(c.id)}
                                className="rounded-lg bg-rose-600/60 px-2 py-1 text-[10px] font-bold text-white hover:bg-rose-500"
                              >
                                Excluir
                              </button>
                            </div>
                          </td>
                        </tr>
                        {/* ── EXPANDED DETAIL ── */}
                        {expandido && (
                          <tr className="bg-slate-800/30">
                            <td colSpan={9} className="px-6 py-5">
                              <AlunoDetalhes
                                cadastro={c}
                                totalCurso={totalCurso}
                                streak={streak}
                                media={media}
                              />
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            DISTRIBUIÇÃO + INTEGRAÇÕES
            ════════════════════════════════════════════ */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Distribuição de progresso */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-bold text-white">Distribuição de progresso</h2>
            <div className="mt-4 space-y-2.5">
              {[
                { label: "0-25%", count: aprovados.filter((c) => (c.progresso.concluidas?.length ?? 0) <= totalCurso * 0.25).length, color: "bg-rose-500" },
                { label: "25-50%", count: aprovados.filter((c) => {
                  const f = c.progresso.concluidas?.length ?? 0;
                  return f > totalCurso * 0.25 && f <= totalCurso * 0.5;
                }).length, color: "bg-amber-500" },
                { label: "50-75%", count: aprovados.filter((c) => {
                  const f = c.progresso.concluidas?.length ?? 0;
                  return f > totalCurso * 0.5 && f <= totalCurso * 0.75;
                }).length, color: "bg-blue-500" },
                { label: "75-100%", count: aprovados.filter((c) => (c.progresso.concluidas?.length ?? 0) > totalCurso * 0.75).length, color: "bg-emerald-500" },
              ].map((b) => {
                const max = Math.max(...[1, ...aprovados.length > 0 ? aprovados.map((c) => (c.progresso.concluidas?.length ?? 0)) : [0]]);
                const pct = max > 0 ? Math.round((b.count / (aprovados.length || 1)) * 100) : 0;
                return (
                  <div key={b.label} className="flex items-center gap-3">
                    <span className="w-14 text-[10px] font-medium text-slate-400">{b.label}</span>
                    <div className="flex-1 h-2 rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full ${b.color}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-6 text-right text-[10px] text-slate-400">{b.count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Currículo */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-bold text-white">Currículo</h2>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Icon name="book" size={14} className="text-cyan-400" />
                {trilhas.length} trilhas · {totalAulas()} aulas
              </li>
              {trilhas.map((t) => {
                const totalModAulas = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
                return (
                  <li key={t.id} className="flex items-center gap-2 ml-4">
                    <span className="h-1 w-1 rounded-full bg-slate-600" />
                    {t.titulo} — {t.modulos.length} módulos, {totalModAulas} aulas
                  </li>
                );
              })}
              <li className="flex items-center gap-2 mt-2">
                <Icon name="shield" size={14} className="text-cyan-400" />
                {bibliotecaRegulatoria.length} normas na biblioteca
              </li>
            </ul>
          </div>

          {/* Integrações */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-bold text-white">Integrações</h2>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Notion — Comando Diário
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <a
                  href={NOTION_CADASTROS_LINKS.databaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline"
                >
                  Banco de alunos no Notion
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Vercel — Deploy contínuo
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Dados locais em <code className="text-cyan-300">data/cadastros.json</code>
              </li>
            </ul>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            FOOTER
            ════════════════════════════════════════════ */}
        <div className="mt-8 border-t border-slate-800 pt-4 text-center text-[10px] text-slate-600">
          Formação para Atendentes Premium de Farmácia · {new Date().getFullYear()} · Criado por Thiago Piola CRF/SP 58.519
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// COMPONENTE — Detalhes do Aluno (expandido)
// ═══════════════════════════════════════════════════

function AlunoDetalhes({
  cadastro,
  totalCurso,
  streak,
  media,
}: {
  cadastro: CadastroRegistro;
  totalCurso: number;
  streak: number;
  media: number | null;
}) {
  const c = cadastro;
  const p = c.progresso;

  // Progresso por trilha
  const progressoTrilhas = trilhas.map((t) => {
    const total = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
    const feitas = (p.concluidas ?? []).filter((ch) => ch.startsWith(`${t.id}/`)).length;
    return { nome: t.titulo, total, feitas, pct: total ? Math.round((feitas / total) * 100) : 0 };
  });

  const aulasFeitas = p.concluidas?.length ?? 0;
  const pctGeral = totalCurso ? Math.round((aulasFeitas / totalCurso) * 100) : 0;
  const tent = totalTentativas(p.tentativasQuiz ?? {});

  return (
    <div className="space-y-5">
      {/* Grid de métricas do aluno */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-xl bg-slate-800/50 px-4 py-3">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Progresso geral</div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-lg font-bold text-white">{pctGeral}%</span>
            <div className="h-2 flex-1 rounded-full bg-slate-700">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${pctGeral}%` }} />
            </div>
          </div>
          <div className="text-xs text-slate-500">{aulasFeitas}/{totalCurso} aulas</div>
        </div>
        <div className="rounded-xl bg-slate-800/50 px-4 py-3">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">XP</div>
          <div className="mt-1 text-lg font-bold text-cyan-300">{p.xp ?? 0}</div>
          <div className="text-xs text-slate-500">Nível {Math.floor((p.xp ?? 0) / 250) + 1}</div>
        </div>
        <div className="rounded-xl bg-slate-800/50 px-4 py-3">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Nota média</div>
          <div className={`mt-1 text-lg font-bold ${media != null && media >= 60 ? "text-emerald-300" : "text-amber-300"}`}>
            {media != null ? `${media}%` : "—"}
          </div>
          <div className="text-xs text-slate-500">{tent} tentativas de quiz</div>
        </div>
        <div className="rounded-xl bg-slate-800/50 px-4 py-3">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Streak</div>
          <div className="mt-1 flex items-center gap-1 text-lg font-bold text-amber-400">
            <Icon name="flame" size={18} />
            {streak} dias
          </div>
          <div className="text-xs text-slate-500">{p.diasEstudo?.length ?? 0} dias no total</div>
        </div>
        <div className="rounded-xl bg-slate-800/50 px-4 py-3">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Missões</div>
          <div className="mt-1 text-lg font-bold text-white">{p.missoesPontos ?? 0}</div>
          <div className="text-xs text-slate-500">pontos no simulador</div>
        </div>
      </div>

      {/* Progresso por trilha */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Progresso por trilha</h3>
        <div className="mt-2 space-y-2">
          {progressoTrilhas.map((t) => (
            <div key={t.nome} className="flex items-center gap-3">
              <span className="w-40 text-xs text-slate-300 truncate">{t.nome}</span>
              <div className="flex-1 h-2 rounded-full bg-slate-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{ width: `${t.pct}%` }}
                />
              </div>
              <span className="w-16 text-right text-xs text-slate-500">
                {t.feitas}/{t.total}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tempo de estudo */}
      <div className="flex flex-wrap gap-4 text-xs text-slate-400">
        <span>
          ⏱ Tempo total: <strong className="text-white">{formatarTempoEstudo(p.tempoEstudoSegundos ?? 0)}</strong>
        </span>
        <span>
          📅 Cadastro: <strong className="text-white">{new Date(c.criadoEm).toLocaleDateString("pt-BR")}</strong>
        </span>
        {c.aprovadoEm && (
          <span>
            ✅ Aprovado em: <strong className="text-white">{new Date(c.aprovadoEm).toLocaleDateString("pt-BR")}</strong>
          </span>
        )}
      </div>
    </div>
  );
}

// Fragment workaround for TS
function Fragment(props: { children: React.ReactNode }) {
  return <>{props.children}</>;
}
