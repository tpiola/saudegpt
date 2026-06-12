"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  AlertTriangle,
  Award,
  BookOpen,
  Clock,
  Download,
  Flame,
  Heart,
  Lightbulb,
  LogOut,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Trophy,
  Medal,
  FileSpreadsheet,
  Users,
  X,
} from "lucide-react";
import { listarAulas, trilhas } from "@/content/curriculo";
import type { CadastroRegistro } from "@/lib/cadastro-types";
import { calcularStreak } from "@/lib/progress-extended";
import { formatarTempoEstudo } from "@/lib/format-tempo";
import { cn } from "@/lib/utils";

/* ════════════════════════════════════════════════════════════
   MÉTRICAS DERIVADAS — transforma o snapshot bruto do aluno em
   indicadores de gestão (tempo, tentativas, erros, interesses).
   ════════════════════════════════════════════════════════════ */

const XP_NIVEL = 250;

interface AlunoMetricas {
  cad: CadastroRegistro;
  concluidas: number;
  pct: number;
  nivel: number;
  tempoSegundos: number;
  tentativas: number;
  tentativasExtras: number; // tentativas além da 1ª por aula (proxy de erros)
  quizzesAbaixo60: number;
  notaMedia: number | null;
  streak: number;
  diasAtivos: number;
  ultimoAcesso?: string;
  diasSemEstudar: number | null;
  trilhaFavoritaTitulo: string | null;
  favoritasTitulos: string[];
  ondeParouTitulo: string | null;
  recomendacoes: string[];
  pontosFortes: string[];
}

const mapaAulas = new Map(
  listarAulas().map((i) => [`${i.trilha.id}/${i.aula.id}`, i]),
);
const totalAulasCurso = listarAulas().length;

function diasDesde(iso?: string): number | null {
  if (!iso) return null;
  const dif = Date.now() - new Date(iso).getTime();
  if (Number.isNaN(dif)) return null;
  return Math.max(0, Math.floor(dif / 86_400_000));
}

function calcularMetricas(cad: CadastroRegistro): AlunoMetricas {
  const p = cad.progresso ?? {
    concluidas: [],
    xp: 0,
    notas: {},
    tentativasQuiz: {},
    tempoEstudoSegundos: 0,
    diasEstudo: [],
    missoesPontos: 0,
  };

  const concluidas = p.concluidas?.length ?? 0;
  const notas = Object.values(p.notas ?? {});
  const tentativasPorAula = Object.values(p.tentativasQuiz ?? {});
  const tentativas = tentativasPorAula.reduce((a, b) => a + b, 0);
  const tentativasExtras = tentativasPorAula.reduce((a, b) => a + Math.max(0, b - 1), 0);
  const quizzesAbaixo60 = notas.filter((n) => n < 60).length;
  const notaMedia = notas.length
    ? Math.round(notas.reduce((a, b) => a + b, 0) / notas.length)
    : null;
  const { streak } = calcularStreak(p.diasEstudo ?? []);
  const diasSemEstudar = diasDesde(p.ultimaSincronizacao);

  // Trilha com mais aulas concluídas = principal interesse demonstrado.
  const porTrilha = new Map<string, number>();
  for (const chave of p.concluidas ?? []) {
    const trilhaId = chave.split("/")[0];
    porTrilha.set(trilhaId, (porTrilha.get(trilhaId) ?? 0) + 1);
  }
  let trilhaFavoritaTitulo: string | null = null;
  let max = 0;
  for (const [tid, qtd] of porTrilha) {
    if (qtd > max) {
      max = qtd;
      trilhaFavoritaTitulo = trilhas.find((t) => t.id === tid)?.titulo ?? tid;
    }
  }

  const favoritasTitulos = (p.favoritas ?? [])
    .map((chave) => mapaAulas.get(chave)?.aula.titulo)
    .filter((t): t is string => Boolean(t));

  const ondeParou = p.ultima ? mapaAulas.get(`${p.ultima.trilhaId}/${p.ultima.aulaId}`) : undefined;

  // Recomendações pedagógicas automáticas (regras transparentes).
  const recomendacoes: string[] = [];
  const pontosFortes: string[] = [];
  if (notaMedia != null && notaMedia >= 85) {
    pontosFortes.push(`Excelente taxa de acerto nos quizzes (${notaMedia}%).`);
  }
  if (streak >= 5) pontosFortes.push(`Constância exemplar: ${streak} dias seguidos de estudo.`);
  if (concluidas >= totalAulasCurso * 0.5) {
    pontosFortes.push("Já concluiu mais da metade do curso.");
  }
  if (trilhaFavoritaTitulo) {
    pontosFortes.push(`Maior engajamento na trilha "${trilhaFavoritaTitulo}".`);
  }
  if (quizzesAbaixo60 > 0) {
    recomendacoes.push(
      `Revisar ${quizzesAbaixo60} aula(s) com nota abaixo de 60% — sugerir o modo revisão.`,
    );
  }
  if (tentativasExtras >= 5) {
    recomendacoes.push(
      "Muitas tentativas repetidas nos quizzes — vale um acompanhamento individual sobre os temas com dificuldade.",
    );
  }
  if (diasSemEstudar != null && diasSemEstudar >= 7) {
    recomendacoes.push(
      `Sem atividade há ${diasSemEstudar} dias — enviar mensagem de reengajamento.`,
    );
  }
  if ((p.tempoEstudoSegundos ?? 0) < 600 && concluidas > 3) {
    recomendacoes.push(
      "Tempo de estudo baixo para o número de aulas concluídas — verificar se está apenas 'passando' as aulas.",
    );
  }
  if (recomendacoes.length === 0) {
    recomendacoes.push("Ritmo saudável — manter incentivo e reconhecer o progresso.");
  }

  return {
    cad,
    concluidas,
    pct: totalAulasCurso ? Math.round((concluidas / totalAulasCurso) * 100) : 0,
    nivel: Math.floor((p.xp ?? 0) / XP_NIVEL) + 1,
    tempoSegundos: p.tempoEstudoSegundos ?? 0,
    tentativas,
    tentativasExtras,
    quizzesAbaixo60,
    notaMedia,
    streak,
    diasAtivos: p.diasEstudo?.length ?? 0,
    ultimoAcesso: p.ultimaSincronizacao,
    diasSemEstudar,
    trilhaFavoritaTitulo,
    favoritasTitulos,
    ondeParouTitulo: ondeParou ? ondeParou.aula.titulo : null,
    recomendacoes,
    pontosFortes,
  };
}

/* ════════════════════════════════════════════════════════════
   INSIGHTS AGREGADOS — onde a PLATAFORMA pode melhorar.
   ════════════════════════════════════════════════════════════ */

interface InsightAula {
  chave: string;
  titulo: string;
  trilha: string;
  notaMedia: number | null;
  tentativasMedia: number;
  alunos: number;
}

function insightsPlataforma(metricas: AlunoMetricas[]): InsightAula[] {
  const agregado = new Map<string, { somaNotas: number; nNotas: number; somaTent: number; nTent: number }>();
  for (const m of metricas) {
    const p = m.cad.progresso;
    for (const [chave, nota] of Object.entries(p?.notas ?? {})) {
      const item = agregado.get(chave) ?? { somaNotas: 0, nNotas: 0, somaTent: 0, nTent: 0 };
      item.somaNotas += nota;
      item.nNotas += 1;
      agregado.set(chave, item);
    }
    for (const [chave, t] of Object.entries(p?.tentativasQuiz ?? {})) {
      const item = agregado.get(chave) ?? { somaNotas: 0, nNotas: 0, somaTent: 0, nTent: 0 };
      item.somaTent += t;
      item.nTent += 1;
      agregado.set(chave, item);
    }
  }

  const lista: InsightAula[] = [];
  for (const [chave, v] of agregado) {
    const aula = mapaAulas.get(chave);
    if (!aula) continue;
    const notaMedia = v.nNotas ? Math.round(v.somaNotas / v.nNotas) : null;
    const tentativasMedia = v.nTent ? v.somaTent / v.nTent : 0;
    // Só entra no radar de melhoria se houver sinal de dificuldade real.
    if ((notaMedia != null && notaMedia < 75) || tentativasMedia > 1.5) {
      lista.push({
        chave,
        titulo: aula.aula.titulo,
        trilha: aula.trilha.titulo,
        notaMedia,
        tentativasMedia: Math.round(tentativasMedia * 10) / 10,
        alunos: Math.max(v.nNotas, v.nTent),
      });
    }
  }
  return lista
    .sort((a, b) => (a.notaMedia ?? 100) - (b.notaMedia ?? 100))
    .slice(0, 8);
}

/* ════════════════════════════════════════════════════════════
   MAPA DE CALOR — 12 semanas de atividade, estilo GitHub.
   ════════════════════════════════════════════════════════════ */

function MapaCalor({ dias }: { dias: string[] }) {
  const set = new Set(dias);
  const hoje = new Date();
  const semanas: { data: string; ativo: boolean }[][] = [];
  // Alinha a grade para terminar no sábado da semana atual.
  const fim = new Date(hoje);
  fim.setDate(fim.getDate() + (6 - fim.getDay()));
  for (let s = 11; s >= 0; s -= 1) {
    const coluna: { data: string; ativo: boolean }[] = [];
    for (let d = 0; d < 7; d += 1) {
      const dt = new Date(fim);
      dt.setDate(fim.getDate() - s * 7 - (6 - d));
      const iso = dt.toISOString().slice(0, 10);
      coluna.push({ data: iso, ativo: set.has(iso) });
    }
    semanas.push(coluna);
  }
  return (
    <div className="flex gap-[3px]" role="img" aria-label="Mapa de calor de dias de estudo (últimas 12 semanas)">
      {semanas.map((coluna, i) => (
        <div key={i} className="flex flex-col gap-[3px]">
          {coluna.map((dia) => (
            <div
              key={dia.data}
              title={`${dia.data}${dia.ativo ? " — estudou" : ""}`}
              className={cn(
                "h-3 w-3 rounded-[3px]",
                dia.ativo ? "bg-green-500" : "bg-foreground/[0.08]",
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   RELATÓRIO PDF — janela de impressão com layout profissional.
   ════════════════════════════════════════════════════════════ */

function gerarRelatorioPdf(m: AlunoMetricas) {
  const dataRel = new Date().toLocaleDateString("pt-BR");
  const ultimoAcesso = m.ultimoAcesso
    ? new Date(m.ultimoAcesso).toLocaleString("pt-BR")
    : "sem registro";
  const linhaTrilhas = trilhas
    .map((t) => {
      const total = t.modulos.reduce((n, mod) => n + mod.aulas.length, 0);
      const feitas = (m.cad.progresso?.concluidas ?? []).filter((c) =>
        c.startsWith(`${t.id}/`),
      ).length;
      const pct = total ? Math.round((feitas / total) * 100) : 0;
      return `<tr><td>${t.titulo}</td><td style="text-align:center">${feitas}/${total}</td><td style="text-align:center">${pct}%</td></tr>`;
    })
    .join("");
  const fortes = m.pontosFortes.length
    ? m.pontosFortes.map((p) => `<li>${p}</li>`).join("")
    : "<li>Aluno em fase inicial — ainda sem destaques registrados.</li>";
  const melhorias = m.recomendacoes.map((r) => `<li>${r}</li>`).join("");

  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>Relatório — ${m.cad.nome}</title>
<style>
  body{font-family:Arial,Helvetica,sans-serif;color:#10241b;margin:32px;line-height:1.5}
  h1{font-size:20px;border-bottom:3px solid #16a34a;padding-bottom:8px;margin-bottom:2px}
  .sub{color:#56705f;font-size:12px;margin-bottom:20px}
  h2{font-size:14px;color:#16a34a;margin:22px 0 8px;text-transform:uppercase;letter-spacing:.06em}
  table{width:100%;border-collapse:collapse;font-size:12px}
  td,th{border:1px solid #d8e5dc;padding:6px 10px;text-align:left}
  th{background:#f0f7f2}
  .grid{display:flex;gap:10px;flex-wrap:wrap;margin-top:8px}
  .kpi{flex:1;min-width:120px;border:1px solid #d8e5dc;border-radius:10px;padding:10px}
  .kpi b{display:block;font-size:18px;color:#16a34a}
  .kpi span{font-size:10px;color:#56705f;text-transform:uppercase;letter-spacing:.05em}
  ul{margin:6px 0;padding-left:18px;font-size:12px}
  .rodape{margin-top:28px;font-size:10px;color:#56705f;border-top:1px solid #d8e5dc;padding-top:10px}
</style></head><body>
<h1>Relatório Individual do Aluno — SaúdeGPT</h1>
<div class="sub">Gerado em ${dataRel} · Painel do Diretor</div>

<h2>Identificação</h2>
<table>
  <tr><th>Nome</th><td>${m.cad.nome}</td><th>E-mail</th><td>${m.cad.email}</td></tr>
  <tr><th>Status</th><td>${m.cad.status}</td><th>Último acesso</th><td>${ultimoAcesso}</td></tr>
</table>

<h2>Indicadores gerais</h2>
<div class="grid">
  <div class="kpi"><b>${m.pct}%</b><span>Progresso do curso</span></div>
  <div class="kpi"><b>${m.concluidas}/${totalAulasCurso}</b><span>Aulas concluídas</span></div>
  <div class="kpi"><b>${m.cad.progresso?.xp ?? 0}</b><span>XP · Nível ${m.nivel}</span></div>
  <div class="kpi"><b>${formatarTempoEstudo(m.tempoSegundos)}</b><span>Tempo na plataforma</span></div>
  <div class="kpi"><b>${m.tentativas}</b><span>Tentativas de quiz</span></div>
  <div class="kpi"><b>${m.notaMedia != null ? `${m.notaMedia}%` : "—"}</b><span>Taxa de acerto média</span></div>
  <div class="kpi"><b>${m.tentativasExtras}</b><span>Retentativas (erros)</span></div>
  <div class="kpi"><b>${m.diasAtivos}</b><span>Dias ativos · streak ${m.streak}</span></div>
</div>

<h2>Progresso por trilha</h2>
<table><tr><th>Trilha</th><th style="text-align:center">Aulas</th><th style="text-align:center">%</th></tr>${linhaTrilhas}</table>

<h2>Interesses demonstrados</h2>
<ul>
  <li>Trilha com maior engajamento: <b>${m.trilhaFavoritaTitulo ?? "ainda não definido"}</b></li>
  <li>Aulas favoritas: ${m.favoritasTitulos.length ? m.favoritasTitulos.join("; ") : "nenhuma marcada"}</li>
  <li>Onde parou: ${m.ondeParouTitulo ?? "—"}</li>
</ul>

<h2>O que está muito bom</h2>
<ul>${fortes}</ul>

<h2>O que pode melhorar — plano sugerido</h2>
<ul>${melhorias}</ul>

<div class="rodape">
  Relatório educacional gerado automaticamente pela plataforma SaúdeGPT a partir dos dados de uso do aluno.
  Conteúdo revisado por farmacêutico; não substitui avaliação individual presencial.
</div>
<script>window.onload=function(){window.print()}</script>
</body></html>`;

  const win = window.open("", "_blank", "width=900,height=700");
  if (!win) return;
  win.document.write(html);
  win.document.close();
}

/* ════════════════════════════════════════════════════════════
   COMPONENTES DE UI
   ════════════════════════════════════════════════════════════ */

function Kpi({
  icon: Icon,
  label,
  valor,
  detalhe,
  cor = "green",
}: {
  icon: React.ElementType;
  label: string;
  valor: string;
  detalhe?: string;
  cor?: "green" | "blue" | "orange" | "red";
}) {
  const cores = {
    green: "text-green-600 bg-green-500/10",
    blue: "text-blue-600 bg-blue-500/10",
    orange: "text-orange-600 bg-orange-500/10",
    red: "text-red-600 bg-red-500/10",
  };
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center gap-3">
        <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", cores[cor])}>
          <Icon size={18} />
        </span>
        <div>
          <p className="text-[11px] uppercase tracking-[0.08em] text-muted">{label}</p>
          <p className="text-xl font-bold text-foreground leading-tight">{valor}</p>
          {detalhe && <p className="text-[11px] text-muted">{detalhe}</p>}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: CadastroRegistro["status"] }) {
  const estilos: Record<string, string> = {
    aprovado: "bg-green-500/15 text-green-600",
    pendente: "bg-orange-500/15 text-orange-600",
    rejeitado: "bg-red-500/15 text-red-500",
  };
  return (
    <span className={cn("rounded-full px-2.5 py-0.5 text-[11px] font-semibold", estilos[status])}>
      {status}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL — CRM do Diretor
   ════════════════════════════════════════════════════════════ */

type Ordenacao = "recente" | "progresso" | "xp" | "tempo" | "tentativas" | "nota";

export function AdminCrm() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [pronto, setPronto] = useState(false);
  const [cadastros, setCadastros] = useState<CadastroRegistro[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [busca, setBusca] = useState("");
  const [ordenar, setOrdenar] = useState<Ordenacao>("recente");
  const [selecionado, setSelecionado] = useState<AlunoMetricas | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("fap-admin-token");
    if (!t) {
      router.replace("/admin");
      return;
    }
    setToken(t);
    setPronto(true);
  }, [router]);

  const carregar = useCallback(async () => {
    if (!token) return;
    setCarregando(true);
    setErro("");
    try {
      const res = await fetch("/api/cadastros", {
        headers: { Authorization: `Basic ${token}` },
      });
      if (res.status === 401) {
        localStorage.removeItem("fap-admin-token");
        router.replace("/admin");
        return;
      }
      if (!res.ok) {
        setErro("Não foi possível carregar os dados dos alunos.");
        return;
      }
      const json = (await res.json()) as { cadastros: CadastroRegistro[] };
      setCadastros(json.cadastros ?? []);
    } catch {
      setErro("Erro de conexão ao carregar os alunos.");
    } finally {
      setCarregando(false);
    }
  }, [token, router]);

  useEffect(() => {
    if (pronto && token) void carregar();
  }, [pronto, token, carregar]);

  async function acaoCadastro(id: string, acao: "aprovar" | "rejeitar") {
    if (!token) return;
    await fetch("/api/cadastros", {
      method: "PATCH",
      headers: { Authorization: `Basic ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ id, acao }),
    });
    void carregar();
  }

  function sair() {
    localStorage.removeItem("fap-admin-token");
    window.location.href = "/admin";
  }

  const metricas = useMemo(() => cadastros.map(calcularMetricas), [cadastros]);

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    const base = q
      ? metricas.filter(
          (m) =>
            m.cad.nome.toLowerCase().includes(q) || m.cad.email.toLowerCase().includes(q),
        )
      : [...metricas];
    switch (ordenar) {
      case "progresso":
        return base.sort((a, b) => b.pct - a.pct);
      case "xp":
        return base.sort((a, b) => (b.cad.progresso?.xp ?? 0) - (a.cad.progresso?.xp ?? 0));
      case "tempo":
        return base.sort((a, b) => b.tempoSegundos - a.tempoSegundos);
      case "tentativas":
        return base.sort((a, b) => b.tentativas - a.tentativas);
      case "nota":
        return base.sort((a, b) => (b.notaMedia ?? -1) - (a.notaMedia ?? -1));
      default:
        return base.sort(
          (a, b) => new Date(b.cad.criadoEm).getTime() - new Date(a.cad.criadoEm).getTime(),
        );
    }
  }, [metricas, busca, ordenar]);

  /* ── KPIs e gráficos agregados ── */
  const kpis = useMemo(() => {
    const ativos7 = metricas.filter(
      (m) => m.diasSemEstudar != null && m.diasSemEstudar <= 7,
    ).length;
    const tempoTotal = metricas.reduce((a, m) => a + m.tempoSegundos, 0);
    const xpTotal = metricas.reduce((a, m) => a + (m.cad.progresso?.xp ?? 0), 0);
    const notas = metricas.map((m) => m.notaMedia).filter((n): n is number => n != null);
    const notaGeral = notas.length
      ? Math.round(notas.reduce((a, b) => a + b, 0) / notas.length)
      : null;
    const emRisco = metricas.filter(
      (m) => (m.diasSemEstudar ?? 0) >= 7 || m.quizzesAbaixo60 >= 2,
    ).length;

    // Score da Equipe — métricas agregadas
    const totalAlunos = metricas.length || 1;
    const streakMedio = Math.round(
      metricas.reduce((a, m) => a + m.streak, 0) / totalAlunos,
    );
    const mediaEngajamento = metricas.length
      ? Math.round(
          metricas.reduce((a, m) => a + (m.diasAtivos / 84) * 100, 0) / metricas.length,
        )
      : 0;
    const concluidos50 = metricas.filter((m) => m.pct >= 50).length;
    const taxaConclusao = Math.round((concluidos50 / totalAlunos) * 100);
    const xpMedio = Math.round(xpTotal / totalAlunos);
    const totalAulasFeitas = metricas.reduce((a, m) => a + m.concluidas, 0);

    return { ativos7, tempoTotal, xpTotal, notaGeral, emRisco, streakMedio, mediaEngajamento, taxaConclusao, xpMedio, totalAulasFeitas, totalAlunos };
  }, [metricas]);

  const atividade14d = useMemo(() => {
    const dias: { dia: string; alunos: number }[] = [];
    for (let i = 13; i >= 0; i -= 1) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const iso = d.toISOString().slice(0, 10);
      const alunos = metricas.filter((m) =>
        (m.cad.progresso?.diasEstudo ?? []).includes(iso),
      ).length;
      dias.push({ dia: iso.slice(5), alunos });
    }
    return dias;
  }, [metricas]);

  const porTrilha = useMemo(
    () =>
      trilhas.map((t) => {
        const total = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
        const feitas = metricas.reduce(
          (a, m) =>
            a +
            (m.cad.progresso?.concluidas ?? []).filter((c) => c.startsWith(`${t.id}/`)).length,
          0,
        );
        return { nome: t.titulo.split(" ")[0], conclusoes: feitas, capacidade: total };
      }),
    [metricas],
  );

  const insights = useMemo(() => insightsPlataforma(metricas), [metricas]);
  const pendentes = metricas.filter((m) => m.cad.status === "pendente");

  // Top 5 rankings
  const topXp = useMemo(
    () => [...metricas].sort((a, b) => (b.cad.progresso?.xp ?? 0) - (a.cad.progresso?.xp ?? 0)).slice(0, 5),
    [metricas],
  );
  const topNotas = useMemo(
    () =>
      [...metricas]
        .filter((m) => m.notaMedia != null)
        .sort((a, b) => (b.notaMedia ?? 0) - (a.notaMedia ?? 0))
        .slice(0, 5),
    [metricas],
  );

  // Insight da Semana — análise textual automática
  const insightSemana = useMemo(() => {
    if (metricas.length === 0) return "Nenhum dado disponível para gerar o Insight da Semana.";
    const partes: string[] = [];
    const total = metricas.length;

    // Conclusões recentes (últimas aulas no progresso de cada aluno)
    const totalConclusoes = kpis.totalAulasFeitas;
    if (totalConclusoes > 0) {
      partes.push(`Nesta semana, ${totalConclusoes} aulas foram concluídas no total.`);
    }

    // Desempenho geral
    if (kpis.notaGeral != null) {
      if (kpis.notaGeral >= 85) {
        partes.push(`A nota média geral é de ${kpis.notaGeral}% — excelente desempenho da turma!`);
      } else if (kpis.notaGeral >= 70) {
        partes.push(`A nota média geral é de ${kpis.notaGeral}% — bom desempenho, com margem para melhoria.`);
      } else {
        partes.push(`A nota média geral é de ${kpis.notaGeral}% — vale reforçar os conteúdos com dificuldade.`);
      }
    }

    // Trilhas com mais atividade
    const trilhaAtiva = [...porTrilha].sort((a, b) => b.conclusoes - a.conclusoes);
    if (trilhaAtiva.length > 0 && trilhaAtiva[0].conclusoes > 0) {
      partes.push(`A trilha mais estudada foi "${trilhaAtiva[0].nome}", com ${trilhaAtiva[0].conclusoes} aulas concluídas.`);
    }

    // Engajamento
    if (kpis.streakMedio > 0) {
      partes.push(`O streak médio da equipe é de ${kpis.streakMedio} dias — ${kpis.streakMedio >= 3 ? "ótima constância!" : "incentive os alunos a estudarem diariamente."}`);
    }

    // Taxa de conclusão
    if (kpis.taxaConclusao > 0) {
      partes.push(`${kpis.taxaConclusao}% dos alunos já concluíram mais da metade do curso.`);
    }

    // Alunos em risco
    if (kpis.emRisco > 0) {
      partes.push(`${kpis.emRisco} aluno(s) estão em risco de desengajamento — considere um acompanhamento personalizado.`);
    }

    if (partes.length === 0) {
      return "Os alunos estão começando sua jornada. Acompanhe o progresso nos próximos dias.";
    }

    return partes.join(" ");
  }, [metricas, kpis, porTrilha]);

  // Export CSV
  function exportarCSV() {
    const linhas: string[] = [];
    // Cabeçalho
    const cabecalho = [
      "Nome",
      "Email",
      "Status",
      "Aulas Concluídas",
      "Progresso (%)",
      "XP Total",
      "Nível",
      "Nota Média",
      "Streak (dias)",
      "Dias Ativos",
      "Tempo de Estudo (min)",
      "Tentativas de Quiz",
      "Trilha Favorita",
      "Último Acesso",
    ];
    linhas.push(cabecalho.map((c) => `"${c}"`).join(","));

    for (const m of metricas) {
      const linha = [
        m.cad.nome,
        m.cad.email,
        m.cad.status,
        m.concluidas,
        m.pct,
        m.cad.progresso?.xp ?? 0,
        m.nivel,
        m.notaMedia != null ? m.notaMedia : "",
        m.streak,
        m.diasAtivos,
        Math.round(m.tempoSegundos / 60),
        m.tentativas,
        m.trilhaFavoritaTitulo ?? "",
        m.ultimoAcesso ?? "",
      ];
      linhas.push(linha.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","));
    }

    const blob = new Blob([linhas.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `relatorio-alunos-saudegpt-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  if (!pronto) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-green-500" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Cabeçalho */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Painel do Diretor</h1>
          <p className="text-sm text-muted">
            Visão completa dos alunos — tempo, desempenho, interesses e plano de ação.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportarCSV()}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:border-green-500/50"
            title="Exportar dados dos alunos em CSV"
          >
            <FileSpreadsheet size={15} className="text-green-600" />
            Exportar CSV
          </button>
          <button
            onClick={() => void carregar()}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:border-green-500/50"
          >
            <RefreshCw size={15} className={carregando ? "animate-spin" : ""} />
            Atualizar
          </button>
          <button
            onClick={sair}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-red-500 transition hover:border-red-500/50"
          >
            <LogOut size={15} />
            Sair
          </button>
        </div>
      </div>

      {erro && (
        <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {erro}
        </div>
      )}

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Kpi icon={Users} label="Alunos" valor={String(metricas.length)} detalhe={`${pendentes.length} aguardando aprovação`} />
        <Kpi icon={Activity} label="Ativos (7 dias)" valor={String(kpis.ativos7)} cor="blue" />
        <Kpi icon={Clock} label="Tempo total de estudo" valor={formatarTempoEstudo(kpis.tempoTotal)} cor="orange" />
        <Kpi icon={Award} label="Taxa de acerto geral" valor={kpis.notaGeral != null ? `${kpis.notaGeral}%` : "—"} />
        <Kpi icon={AlertTriangle} label="Alunos em risco" valor={String(kpis.emRisco)} detalhe="inativos 7d+ ou notas baixas" cor="red" />
      </div>

      {/* Score da Equipe */}
      <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-green-50 to-emerald-50 bg-surface p-5 dark:from-green-950/20 dark:to-emerald-950/10">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
          <Trophy size={16} className="text-amber-500" />
          Score da Equipe
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl bg-white/70 p-4 text-center dark:bg-black/20">
            <div className="text-2xl font-extrabold text-green-600">{kpis.mediaEngajamento}%</div>
            <div className="mt-1 text-[11px] font-semibold text-muted uppercase tracking-wide">Engajamento Médio</div>
          </div>
          <div className="rounded-xl bg-white/70 p-4 text-center dark:bg-black/20">
            <div className="text-2xl font-extrabold text-blue-600">{kpis.notaGeral != null ? `${kpis.notaGeral}%` : "—"}</div>
            <div className="mt-1 text-[11px] font-semibold text-muted uppercase tracking-wide">Nota Média</div>
          </div>
          <div className="rounded-xl bg-white/70 p-4 text-center dark:bg-black/20">
            <div className="text-2xl font-extrabold text-amber-500">{kpis.xpTotal}</div>
            <div className="mt-1 text-[11px] font-semibold text-muted uppercase tracking-wide">XP Total</div>
            <div className="text-[10px] text-muted">média {kpis.xpMedio}/aluno</div>
          </div>
          <div className="rounded-xl bg-white/70 p-4 text-center dark:bg-black/20">
            <div className="text-2xl font-extrabold text-orange-500">{kpis.streakMedio}</div>
            <div className="mt-1 text-[11px] font-semibold text-muted uppercase tracking-wide">Streak Médio (dias)</div>
          </div>
          <div className="rounded-xl bg-white/70 p-4 text-center dark:bg-black/20">
            <div className="text-2xl font-extrabold text-purple-600">{kpis.taxaConclusao}%</div>
            <div className="mt-1 text-[11px] font-semibold text-muted uppercase tracking-wide">Taxa de Conclusão (&gt;50%)</div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
            <TrendingUp size={15} className="text-green-600" />
            Alunos estudando por dia (14 dias)
          </h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={atividade14d}>
                <defs>
                  <linearGradient id="gradAtiv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#16a34a" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#16a34a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />
                <XAxis dataKey="dia" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} fontSize={10} tickLine={false} axisLine={false} width={26} />
                <Tooltip />
                <Area type="monotone" dataKey="alunos" stroke="#16a34a" strokeWidth={2} fill="url(#gradAtiv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
            <BookOpen size={15} className="text-green-600" />
            Aulas concluídas por trilha (todos os alunos)
          </h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={porTrilha}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />
                <XAxis dataKey="nome" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} fontSize={10} tickLine={false} axisLine={false} width={26} />
                <Tooltip />
                <Bar dataKey="conclusoes" fill="#16a34a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Melhoria da plataforma */}
      <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
        <h2 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Lightbulb size={15} className="text-orange-500" />
          Onde a plataforma pode melhorar
        </h2>
        <p className="mb-4 text-xs text-muted">
          Aulas com nota média baixa ou muitas retentativas entre todos os alunos — candidatas a
          revisão de conteúdo, novos exemplos ou vídeo complementar.
        </p>
        {insights.length === 0 ? (
          <p className="text-sm text-muted">
            Nenhum gargalo identificado até agora — os quizzes estão com bom desempenho geral.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-[11px] uppercase tracking-wide text-muted">
                  <th className="py-2 pr-4">Aula</th>
                  <th className="py-2 pr-4">Trilha</th>
                  <th className="py-2 pr-4 text-center">Nota média</th>
                  <th className="py-2 pr-4 text-center">Tentativas/aluno</th>
                  <th className="py-2 text-center">Alunos</th>
                </tr>
              </thead>
              <tbody>
                {insights.map((i) => (
                  <tr key={i.chave} className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">{i.titulo}</td>
                    <td className="py-2 pr-4 text-muted">{i.trilha}</td>
                    <td className={cn("py-2 pr-4 text-center font-semibold", (i.notaMedia ?? 100) < 60 ? "text-red-500" : "text-orange-500")}>
                      {i.notaMedia != null ? `${i.notaMedia}%` : "—"}
                    </td>
                    <td className="py-2 pr-4 text-center">{i.tentativasMedia}</td>
                    <td className="py-2 text-center">{i.alunos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Insight da Semana */}
      <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-amber-50 to-orange-50 bg-surface p-5 dark:from-amber-950/15 dark:to-orange-950/10">
        <h2 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Lightbulb size={16} className="text-amber-500" />
          Insight da Semana
        </h2>
        <p className="text-sm leading-relaxed text-foreground">
          {insightSemana}
        </p>
      </div>

      {/* Top 5 Rankings */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
            <Medal size={16} className="text-amber-500" />
            Top 5 — Maior XP
          </h2>
          {topXp.length === 0 ? (
            <p className="text-sm text-muted">Nenhum dado disponível.</p>
          ) : (
            <div className="space-y-2">
              {topXp.map((m, i) => (
                <div
                  key={m.cad.id}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 p-3"
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    i === 0
                      ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30"
                      : i === 1
                        ? "bg-slate-100 text-slate-500 dark:bg-slate-800/40"
                        : i === 2
                          ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30"
                          : "bg-surface-3 text-muted"
                  }`}>
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{m.cad.nome}</p>
                    <p className="text-[11px] text-muted">Nível {m.nivel}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-extrabold text-amber-500">{m.cad.progresso?.xp ?? 0}</p>
                    <p className="text-[10px] text-muted">XP</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
            <Award size={16} className="text-blue-500" />
            Top 5 — Melhor Nota Média
          </h2>
          {topNotas.length === 0 ? (
            <p className="text-sm text-muted">Nenhum dado disponível.</p>
          ) : (
            <div className="space-y-2">
              {topNotas.map((m, i) => (
                <div
                  key={m.cad.id}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 p-3"
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    i === 0
                      ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30"
                      : i === 1
                        ? "bg-slate-100 text-slate-500 dark:bg-slate-800/40"
                        : i === 2
                          ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30"
                          : "bg-surface-3 text-muted"
                  }`}>
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{m.cad.nome}</p>
                    <p className="text-[11px] text-muted">{m.concluidas} aulas concluídas</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-extrabold text-blue-500">{m.notaMedia}%</p>
                    <p className="text-[10px] text-muted">média</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tabela CRM de alunos */}
      <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Users size={15} className="text-green-600" />
            Alunos ({filtrados.length})
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar por nome ou e-mail"
                className="h-9 w-56 rounded-xl border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted/60 focus:border-green-500/50 focus:outline-none"
              />
            </div>
            <select
              value={ordenar}
              onChange={(e) => setOrdenar(e.target.value as Ordenacao)}
              className="h-9 rounded-xl border border-border bg-background px-3 text-sm text-foreground focus:border-green-500/50 focus:outline-none"
              aria-label="Ordenar alunos"
            >
              <option value="recente">Mais recentes</option>
              <option value="progresso">Maior progresso</option>
              <option value="xp">Mais XP</option>
              <option value="tempo">Mais tempo de estudo</option>
              <option value="tentativas">Mais tentativas</option>
              <option value="nota">Melhor nota</option>
            </select>
          </div>
        </div>

        {carregando ? (
          <div className="flex justify-center py-10">
            <div className="h-7 w-7 animate-spin rounded-full border-b-2 border-t-2 border-green-500" />
          </div>
        ) : filtrados.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted">
            Nenhum aluno encontrado. Os dados aparecem aqui assim que os alunos se cadastram e
            estudam na plataforma.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-[11px] uppercase tracking-wide text-muted">
                  <th className="py-2 pr-4">Aluno</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 pr-4 text-center">Progresso</th>
                  <th className="py-2 pr-4 text-center">Nível · XP</th>
                  <th className="py-2 pr-4 text-center">Tempo</th>
                  <th className="py-2 pr-4 text-center">Tentativas</th>
                  <th className="py-2 pr-4 text-center">Acerto</th>
                  <th className="py-2 pr-4 text-center">Streak</th>
                  <th className="py-2 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filtrados.map((m) => (
                  <tr
                    key={m.cad.id}
                    className="cursor-pointer border-b border-border/50 transition hover:bg-green-500/[0.04]"
                    onClick={() => setSelecionado(m)}
                  >
                    <td className="py-3 pr-4">
                      <p className="font-semibold text-foreground">{m.cad.nome}</p>
                      <p className="text-xs text-muted">{m.cad.email}</p>
                    </td>
                    <td className="py-3 pr-4">
                      <StatusBadge status={m.cad.status} />
                    </td>
                    <td className="py-3 pr-4">
                      <div className="mx-auto w-24">
                        <div className="h-2 overflow-hidden rounded-full bg-foreground/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-600"
                            style={{ width: `${m.pct}%` }}
                          />
                        </div>
                        <p className="mt-1 text-center text-[11px] text-muted">
                          {m.pct}% · {m.concluidas} aulas
                        </p>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-center">
                      <span className="font-semibold text-foreground">Nv {m.nivel}</span>
                      <span className="block text-[11px] text-muted">{m.cad.progresso?.xp ?? 0} XP</span>
                    </td>
                    <td className="py-3 pr-4 text-center text-foreground">
                      {formatarTempoEstudo(m.tempoSegundos)}
                    </td>
                    <td className="py-3 pr-4 text-center">
                      <span className="text-foreground">{m.tentativas}</span>
                      {m.tentativasExtras > 0 && (
                        <span className="block text-[11px] text-orange-500">
                          {m.tentativasExtras} retentativas
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-center">
                      <span
                        className={cn(
                          "font-semibold",
                          m.notaMedia == null
                            ? "text-muted"
                            : m.notaMedia >= 80
                              ? "text-green-600"
                              : m.notaMedia >= 60
                                ? "text-orange-500"
                                : "text-red-500",
                        )}
                      >
                        {m.notaMedia != null ? `${m.notaMedia}%` : "—"}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-center">
                      <span className="inline-flex items-center gap-1 text-foreground">
                        <Flame size={13} className="text-orange-500" />
                        {m.streak}
                      </span>
                    </td>
                    <td className="py-3 text-right" onClick={(e) => e.stopPropagation()}>
                      {m.cad.status === "pendente" ? (
                        <span className="inline-flex gap-1">
                          <button
                            onClick={() => void acaoCadastro(m.cad.id, "aprovar")}
                            className="rounded-lg bg-green-500/15 px-2.5 py-1 text-[11px] font-semibold text-green-600 transition hover:bg-green-500/25"
                          >
                            Aprovar
                          </button>
                          <button
                            onClick={() => void acaoCadastro(m.cad.id, "rejeitar")}
                            className="rounded-lg bg-red-500/15 px-2.5 py-1 text-[11px] font-semibold text-red-500 transition hover:bg-red-500/25"
                          >
                            Rejeitar
                          </button>
                        </span>
                      ) : (
                        <button
                          onClick={() => gerarRelatorioPdf(m)}
                          className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1 text-[11px] font-semibold text-foreground transition hover:border-green-500/50"
                          title="Gerar relatório em PDF"
                        >
                          <Download size={12} />
                          PDF
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Drawer de detalhe do aluno */}
      {selecionado && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-6"
          onClick={() => setSelecionado(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes de ${selecionado.cad.nome}`}
        >
          <div
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-surface p-6 sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">{selecionado.cad.nome}</h3>
                <p className="text-sm text-muted">{selecionado.cad.email}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <StatusBadge status={selecionado.cad.status} />
                  <span className="text-[11px] text-muted">
                    último acesso:{" "}
                    {selecionado.ultimoAcesso
                      ? new Date(selecionado.ultimoAcesso).toLocaleString("pt-BR")
                      : "sem registro"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => gerarRelatorioPdf(selecionado)}
                  className="inline-flex h-9 items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-4 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  <Download size={14} />
                  Relatório PDF
                </button>
                <button
                  onClick={() => setSelecionado(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted transition hover:text-foreground"
                  aria-label="Fechar"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              <Kpi icon={Target} label="Progresso" valor={`${selecionado.pct}%`} detalhe={`${selecionado.concluidas}/${totalAulasCurso} aulas`} />
              <Kpi icon={Clock} label="Tempo" valor={formatarTempoEstudo(selecionado.tempoSegundos)} cor="orange" />
              <Kpi icon={Activity} label="Tentativas" valor={String(selecionado.tentativas)} detalhe={`${selecionado.tentativasExtras} retentativas`} cor="blue" />
              <Kpi
                icon={Award}
                label="Acerto médio"
                valor={selecionado.notaMedia != null ? `${selecionado.notaMedia}%` : "—"}
                detalhe={`${selecionado.quizzesAbaixo60} quiz(es) < 60%`}
              />
            </div>

            <div className="mt-5 rounded-2xl border border-border p-4">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
                <Flame size={14} className="text-orange-500" />
                Mapa de calor — últimas 12 semanas ({selecionado.diasAtivos} dias ativos,
                streak de {selecionado.streak})
              </h4>
              <MapaCalor dias={selecionado.cad.progresso?.diasEstudo ?? []} />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-4">
                <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                  <Heart size={14} className="text-red-400" />
                  Interesses demonstrados
                </h4>
                <ul className="space-y-1.5 text-sm text-muted">
                  <li>
                    <span className="text-foreground">Trilha preferida:</span>{" "}
                    {selecionado.trilhaFavoritaTitulo ?? "ainda explorando"}
                  </li>
                  <li>
                    <span className="text-foreground">Aulas favoritas:</span>{" "}
                    {selecionado.favoritasTitulos.length
                      ? selecionado.favoritasTitulos.slice(0, 4).join("; ")
                      : "nenhuma marcada"}
                  </li>
                  <li>
                    <span className="text-foreground">Onde parou:</span>{" "}
                    {selecionado.ondeParouTitulo ?? "—"}
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border p-4">
                <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                  <Award size={14} className="text-green-600" />
                  O que está muito bom
                </h4>
                {selecionado.pontosFortes.length ? (
                  <ul className="list-disc space-y-1 pl-4 text-sm text-muted">
                    {selecionado.pontosFortes.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted">Fase inicial — destaques aparecem com o uso.</p>
                )}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-orange-500/30 bg-orange-500/[0.06] p-4">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                <Lightbulb size={14} className="text-orange-500" />
                O que pode melhorar — plano sugerido
              </h4>
              <ul className="list-disc space-y-1 pl-4 text-sm text-muted">
                {selecionado.recomendacoes.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <p className="mt-8 text-center text-[11px] text-muted">
        Dados sincronizados automaticamente quando o aluno estuda conectado. Indicadores
        educacionais — uso restrito à coordenação (LGPD).
      </p>
    </div>
  );
}
