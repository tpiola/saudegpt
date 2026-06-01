"use client";

import { useCallback, useEffect, useState } from "react";
import type { CadastroRegistro } from "@/lib/cadastro-types";
import { formatarTempoEstudo } from "@/lib/format-tempo";
import { listarAulas } from "@/content/curriculo";
import { NOTION_CADASTROS_LINKS } from "@/lib/notion-cadastros-links";
import { trilhas, totalAulas } from "@/content/curriculo";
import { bibliotecaRegulatoria } from "@/content/biblioteca";
import { Icon } from "./icons";

function mediaNotas(notas: Record<string, number>) {
  const vals = Object.values(notas);
  if (!vals.length) return null;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

function totalTentativas(t: Record<string, number>) {
  return Object.values(t).reduce((a, b) => a + b, 0);
}

export function AdminPainel() {
  const [usuario, setUsuario] = useState("admin");
  const [senha, setSenha] = useState("");
  const [authHeader, setAuthHeader] = useState<string | null>(null);
  const [erro, setErro] = useState("");
  const [cadastros, setCadastros] = useState<CadastroRegistro[]>([]);
  const [filtro, setFiltro] = useState<"todos" | "pendente" | "aprovado" | "rejeitado">("todos");
  const [carregando, setCarregando] = useState(false);

  const carregar = useCallback(async (header: string) => {
    setCarregando(true);
    const res = await fetch("/api/cadastros", { headers: { Authorization: header } });
    setCarregando(false);
    if (!res.ok) return;
    const json = (await res.json()) as { cadastros: CadastroRegistro[] };
    setCadastros(json.cadastros);
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
      if (res.status === 503 && body.motivo) {
        setErro(body.motivo);
      } else {
        setErro("Usuário ou senha incorretos. Padrão em dev: admin / admin");
      }
      return;
    }
    const header = `Basic ${btoa(`${usuario}:${senha}`)}`;
    sessionStorage.setItem("fap-admin-auth", header);
    setAuthHeader(header);
    await carregar(header);
  }

  async function acao(id: string, acao: "aprovar" | "rejeitar") {
    if (!authHeader) return;
    await fetch("/api/cadastros", {
      method: "PATCH",
      headers: { Authorization: authHeader, "Content-Type": "application/json" },
      body: JSON.stringify({ id, acao }),
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
  }

  if (!authHeader) {
    return (
      <div className="admin-shell flex min-h-[70vh] items-center justify-center px-4">
        <form onSubmit={entrar} className="admin-glass w-full max-w-md space-y-5 rounded-3xl p-8">
          <div className="text-center">
            <span className="admin-badge">Coordenação acadêmica</span>
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
              Portal do administrador
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Aprove matrículas, acompanhe tempo de estudo, notas e tentativas.
            </p>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Usuário
            </label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="admin-input mt-1.5"
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
              className="admin-input mt-1.5"
              placeholder="admin"
              autoComplete="current-password"
            />
          </div>
          {erro && <p className="text-sm text-rose-400">{erro}</p>}
          <button type="submit" className="admin-btn-primary w-full">
            Entrar no painel
          </button>
          <p className="text-center text-xs text-slate-500">
            Credencial padrão: <strong className="text-slate-300">admin</strong> /{" "}
            <strong className="text-slate-300">admin</strong> (altere via ADMIN_USER e
            ADMIN_PASSWORD no servidor).
          </p>
        </form>
      </div>
    );
  }

  const pendentes = cadastros.filter((c) => c.status === "pendente");
  const aprovados = cadastros.filter((c) => c.status === "aprovado");
  const lista = filtro === "todos" ? cadastros : cadastros.filter((c) => c.status === filtro);

  const tempoTotal = cadastros.reduce((s, c) => s + (c.progresso.tempoEstudoSegundos ?? 0), 0);
  const tentativasTotal = cadastros.reduce(
    (s, c) => s + totalTentativas(c.progresso.tentativasQuiz ?? {}),
    0,
  );
  const totalCurso = listarAulas().length;

  return (
    <div className="admin-shell min-h-screen pb-16">
      <div className="admin-hero relative overflow-hidden px-4 py-10 sm:px-8">
        <div className="admin-hero-glow" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="admin-badge">Universidade corporativa · Farmácia</span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Centro de inteligência pedagógica
            </h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Visão executiva de matrículas, tempo de estudo, desempenho em quizzes e progresso
              curricular — design premium para formar os melhores atendentes do Brasil.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => authHeader && carregar(authHeader)}
              className="admin-btn-secondary"
            >
              {carregando ? "Atualizando…" : "Atualizar dados"}
            </button>
            <button type="button" onClick={sair} className="admin-btn-ghost">
              Sair
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              rotulo: "Alunos cadastrados",
              valor: String(cadastros.length),
              sub: `${pendentes.length} aguardando aprovação`,
              icone: "user" as const,
            },
            {
              rotulo: "Aprovados",
              valor: String(aprovados.length),
              sub: "com acesso liberado",
              icone: "check" as const,
            },
            {
              rotulo: "Tempo total de estudo",
              valor: formatarTempoEstudo(tempoTotal),
              sub: "soma de todos os alunos",
              icone: "clock" as const,
            },
            {
              rotulo: "Tentativas em quizzes",
              valor: String(tentativasTotal),
              sub: `${totalAulas()} aulas no curso`,
              icone: "target" as const,
            },
          ].map((k) => (
            <div key={k.rotulo} className="admin-stat-card">
              <Icon name={k.icone} size={22} className="text-cyan-300" />
              <div className="mt-3 text-2xl font-bold text-white">{k.valor}</div>
              <div className="text-sm font-medium text-slate-200">{k.rotulo}</div>
              <div className="text-xs text-slate-500">{k.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {(["todos", "pendente", "aprovado", "rejeitado"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                filtro === f
                  ? "bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-400/50"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {f === "todos" ? "Todos" : f.charAt(0).toUpperCase() + f.slice(1)}
              {f === "pendente" && pendentes.length > 0 && (
                <span className="ml-1.5 rounded-full bg-amber-500 px-1.5 text-xs text-black">
                  {pendentes.length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                  <th className="px-4 py-3">Aluno</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Tempo de estudo</th>
                  <th className="px-4 py-3">Aulas</th>
                  <th className="px-4 py-3">Nota média</th>
                  <th className="px-4 py-3">Tentativas</th>
                  <th className="px-4 py-3">XP</th>
                  <th className="px-4 py-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {lista.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center text-slate-500">
                      Nenhum cadastro neste filtro. Novos alunos aparecem após matrícula em
                      /matriculas.
                    </td>
                  </tr>
                )}
                {lista.map((c) => {
                  const p = c.progresso;
                  const media = mediaNotas(p.notas ?? {});
                  const aulasFeitas = p.concluidas?.length ?? 0;
                  const pct = totalCurso ? Math.round((aulasFeitas / totalCurso) * 100) : 0;
                  const tent = totalTentativas(p.tentativasQuiz ?? {});
                  return (
                    <tr key={c.id} className="border-b border-white/5 transition hover:bg-white/5">
                      <td className="px-4 py-4">
                        <div className="font-semibold text-white">{c.nome}</div>
                        <div className="text-xs text-slate-500">{c.email}</div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                            c.status === "aprovado"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : c.status === "pendente"
                                ? "bg-amber-500/20 text-amber-200"
                                : "bg-rose-500/20 text-rose-300"
                          }`}
                        >
                          {c.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-slate-200">
                        {formatarTempoEstudo(p.tempoEstudoSegundos ?? 0)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-white">
                          {aulasFeitas}/{totalCurso}
                        </div>
                        <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-slate-700">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </td>
                      <td className="px-4 py-4 text-white">{media != null ? `${media}%` : "—"}</td>
                      <td className="px-4 py-4 text-slate-200">{tent || "—"}</td>
                      <td className="px-4 py-4 text-cyan-200">{p.xp ?? 0}</td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          {c.status === "pendente" && (
                            <button
                              type="button"
                              onClick={() => acao(c.id, "aprovar")}
                              className="rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-emerald-500"
                            >
                              Aprovar
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => excluir(c.id)}
                            className="rounded-lg bg-rose-600/80 px-2.5 py-1 text-xs font-bold text-white hover:bg-rose-500"
                          >
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="admin-glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white">Currículo publicado</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-400">
              <li>
                {trilhas.length} trilhas · {totalAulas()} aulas · {bibliotecaRegulatoria.length}{" "}
                normas
              </li>
              <li>Edite conteúdo em src/content/ ou conecte Supabase/Notion.</li>
            </ul>
          </div>
          <div className="admin-glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white">Integrações</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-400">
              <li>NOTION_TOKEN → Comando Diário</li>
              <li>
                Cadastros no Notion:{" "}
                <a
                  href={NOTION_CADASTROS_LINKS.databaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline"
                >
                  abrir banco de alunos
                </a>
              </li>
              <li>Supabase → auth e sync na nuvem</li>
              <li>VERCEL → deploy contínuo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
