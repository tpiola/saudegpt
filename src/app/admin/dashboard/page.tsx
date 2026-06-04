"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  Users,
  BookOpen,
  Trophy,
  TrendingUp,
  AlertTriangle,
  GraduationCap,
  Clock,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── Tipos ─── */
interface Aluno {
  id: string;
  nome: string;
  email: string;
  progresso: number; // 0-100
  aulasCompletas: number;
  xp: number;
  nivel: number;
  ultimoAcesso: string;
  dataMatricula: string;
  status: "ativo" | "inativo" | "trancado";
}

interface Metricas {
  totalAlunos: number;
  alunosAtivos: number;
  totalAulas: number;
  aulasConcluidas: number;
  xpTotal: number;
  taxaConclusao: number;
  taxaDropOff: number;
  mediaProgresso: number;
}

/* ─── Dados mockados (substituir por Supabase) ─── */
const metricasIniciais: Metricas = {
  totalAlunos: 342,
  alunosAtivos: 218,
  totalAulas: 81,
  aulasConcluidas: 1847,
  xpTotal: 45280,
  taxaConclusao: 68,
  taxaDropOff: 14,
  mediaProgresso: 47,
};

const progressoSemanal = [
  { semana: "Sem 1", concluidas: 145, xp: 3200, dropOff: 8 },
  { semana: "Sem 2", concluidas: 178, xp: 4100, dropOff: 6 },
  { semana: "Sem 3", concluidas: 210, xp: 5300, dropOff: 5 },
  { semana: "Sem 4", concluidas: 195, xp: 4900, dropOff: 7 },
  { semana: "Sem 5", concluidas: 234, xp: 6100, dropOff: 4 },
  { semana: "Sem 6", concluidas: 267, xp: 7200, dropOff: 3 },
  { semana: "Sem 7", concluidas: 298, xp: 8400, dropOff: 3 },
  { semana: "Sem 8", concluidas: 320, xp: 9600, dropOff: 2 },
];

const distribuicaoTrilhas = [
  { nome: "Perfumaria", valor: 35, cor: "#10B981" },
  { nome: "Medicamentos", valor: 28, cor: "#0F172A" },
  { nome: "Operacional", valor: 20, cor: "#6366F1" },
  { nome: "Encantamento", valor: 17, cor: "#F59E0B" },
];

const alunosRecentes: Aluno[] = [
  { id: "1", nome: "Ana Silva", email: "ana@email.com", progresso: 78, aulasCompletas: 42, xp: 8900, nivel: 5, ultimoAcesso: "2026-06-03", dataMatricula: "2026-01-15", status: "ativo" },
  { id: "2", nome: "Carlos Oliveira", email: "carlos@email.com", progresso: 45, aulasCompletas: 28, xp: 5400, nivel: 3, ultimoAcesso: "2026-06-02", dataMatricula: "2026-02-20", status: "ativo" },
  { id: "3", nome: "Marina Santos", email: "marina@email.com", progresso: 92, aulasCompletas: 61, xp: 12500, nivel: 7, ultimoAcesso: "2026-06-03", dataMatricula: "2026-01-10", status: "ativo" },
  { id: "4", nome: "Pedro Costa", email: "pedro@email.com", progresso: 15, aulasCompletas: 8, xp: 1200, nivel: 1, ultimoAcesso: "2026-05-20", dataMatricula: "2026-04-01", status: "inativo" },
  { id: "5", nome: "Juliana Lima", email: "juliana@email.com", progresso: 63, aulasCompletas: 37, xp: 7200, nivel: 4, ultimoAcesso: "2026-06-01", dataMatricula: "2026-02-05", status: "ativo" },
];

/* ─── Stat Card ─── */
function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  color = "emerald",
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  trend?: string;
  color?: "emerald" | "blue" | "amber" | "rose";
}) {
  const colors = {
    emerald: "from-emerald-500/10 to-emerald-500/5 border-emerald-200/50 text-emerald-600",
    blue: "from-midnight-500/10 to-midnight-500/5 border-midnight-200/50 text-midnight-600",
    amber: "from-amber-500/10 to-amber-500/5 border-amber-200/50 text-amber-600",
    rose: "from-rose-500/10 to-rose-500/5 border-rose-200/50 text-rose-600",
  };

  return (
    <div className={cn("rounded-2xl border bg-gradient-to-br p-6", colors[color])}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-70">{label}</p>
          <p className="mt-1 text-3xl font-bold tracking-tight">{value}</p>
          {trend && (
            <p className="mt-1 text-xs font-medium text-emerald-500">{trend}</p>
          )}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm shadow-sm">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

/* ─── Custom Tooltip ─── */
function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload) return null;
  return (
    <div className="rounded-xl border border-midnight-200 bg-white p-4 shadow-lg backdrop-blur-md">
      <p className="text-sm font-semibold text-midnight-800">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-sm text-midnight-500" style={{ color: p.color }}>
          {p.name}: <span className="font-semibold">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

/* ─── Página Principal ─── */
export default function AdminDashboardPage() {
  const [metricas] = useState<Metricas>(metricasIniciais);
  const [alunos] = useState<Aluno[]>(alunosRecentes);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-midnight-200/50 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-midnight-900 text-white shadow-md">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-midnight-900">Admin</h1>
              <p className="text-xs text-midnight-400">Dashboard da Formação</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <span className="text-sm text-midnight-400">Online</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* ═══ STATS ROW ═══ */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Users}
            label="Total de Alunos"
            value={String(metricas.totalAlunos)}
            trend="+12% este mês"
            color="emerald"
          />
          <StatCard
            icon={Activity}
            label="Alunos Ativos"
            value={String(metricas.alunosAtivos)}
            trend={`${Math.round((metricas.alunosAtivos / metricas.totalAlunos) * 100)}% de engajamento`}
            color="blue"
          />
          <StatCard
            icon={BookOpen}
            label="Aulas Concluídas"
            value={String(metricas.aulasConcluidas)}
            trend={`${metricas.taxaConclusao}% de conclusão`}
            color="amber"
          />
          <StatCard
            icon={Trophy}
            label="XP Total"
            value={`${(metricas.xpTotal / 1000).toFixed(1)}K`}
            trend="Gamificação ativa"
            color="emerald"
          />
        </div>

        {/* ═══ GRÁFICOS ═══ */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Progresso Semanal */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                  Progresso Semanal
                </CardTitle>
                <span className="text-xs font-medium text-midnight-400">
                  Últimas 8 semanas
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={progressoSemanal}>
                    <defs>
                      <linearGradient id="colorAulas" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis
                      dataKey="semana"
                      tick={{ fontSize: 12, fill: "#94A3B8" }}
                      axisLine={{ stroke: "#E2E8F0" }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#94A3B8" }}
                      axisLine={{ stroke: "#E2E8F0" }}
                    />
                    <Tooltip content={<ChartTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="concluidas"
                      stroke="#10B981"
                      strokeWidth={2}
                      fill="url(#colorAulas)"
                      name="Aulas concluídas"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* XP Acumulado */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  XP Acumulado
                </CardTitle>
                <span className="text-xs font-medium text-midnight-400">
                  Gamificação
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={progressoSemanal}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis
                      dataKey="semana"
                      tick={{ fontSize: 12, fill: "#94A3B8" }}
                      axisLine={{ stroke: "#E2E8F0" }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#94A3B8" }}
                      axisLine={{ stroke: "#E2E8F0" }}
                    />
                    <Tooltip content={<ChartTooltip />} />
                    <Bar
                      dataKey="xp"
                      fill="#10B981"
                      radius={[8, 8, 0, 0]}
                      name="XP"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Drop-off Rate */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-rose-500" />
                  Taxa de Drop-off
                </CardTitle>
                <span className="text-xs font-medium text-midnight-400">
                  {metricas.taxaDropOff}% média
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressoSemanal}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis
                      dataKey="semana"
                      tick={{ fontSize: 12, fill: "#94A3B8" }}
                      axisLine={{ stroke: "#E2E8F0" }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#94A3B8" }}
                      axisLine={{ stroke: "#E2E8F0" }}
                      domain={[0, 15]}
                    />
                    <Tooltip content={<ChartTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="dropOff"
                      stroke="#F43F5E"
                      strokeWidth={2}
                      dot={{ fill: "#F43F5E", r: 4 }}
                      name="Drop-off (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Distribuição por Trilha */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-midnight-500" />
                  Distribuição por Trilha
                </CardTitle>
                <span className="text-xs font-medium text-midnight-400">
                  % de alunos
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex h-[260px] items-center gap-6">
                <div className="h-full w-1/2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={distribuicaoTrilhas}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="valor"
                        stroke="none"
                      >
                        {distribuicaoTrilhas.map((entry, i) => (
                          <Cell key={i} fill={entry.cor} />
                        ))}
                      </Pie>
                      <Tooltip content={<ChartTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex w-1/2 flex-col gap-3">
                  {distribuicaoTrilhas.map((t) => (
                    <div key={t.nome} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: t.cor }}
                        />
                        <span className="text-sm text-midnight-600">{t.nome}</span>
                      </div>
                      <span className="text-sm font-semibold text-midnight-800">
                        {t.valor}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ═══ TABELA DE ALUNOS ═══ */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-midnight-500" />
                Alunos Cadastrados
              </CardTitle>
              <Button variant="outline" size="sm">
                Exportar CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-xl border border-midnight-200/50">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-midnight-200/50 bg-midnight-50/50">
                    <th className="px-4 py-3 font-semibold text-midnight-600">Nome</th>
                    <th className="px-4 py-3 font-semibold text-midnight-600">Email</th>
                    <th className="px-4 py-3 font-semibold text-midnight-600">Progresso</th>
                    <th className="px-4 py-3 font-semibold text-midnight-600">Aulas</th>
                    <th className="px-4 py-3 font-semibold text-midnight-600">XP</th>
                    <th className="px-4 py-3 font-semibold text-midnight-600">Nível</th>
                    <th className="px-4 py-3 font-semibold text-midnight-600">Status</th>
                    <th className="px-4 py-3 font-semibold text-midnight-600">Último acesso</th>
                  </tr>
                </thead>
                <tbody>
                  {alunos.map((aluno) => (
                    <tr
                      key={aluno.id}
                      className="border-b border-midnight-100/50 transition-colors hover:bg-midnight-50/50"
                    >
                      <td className="px-4 py-3 font-medium text-midnight-800">
                        {aluno.nome}
                      </td>
                      <td className="px-4 py-3 text-midnight-400">{aluno.email}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-20 overflow-hidden rounded-full bg-midnight-100">
                            <div
                              className="h-full rounded-full bg-emerald-500 transition-all"
                              style={{ width: `${aluno.progresso}%` }}
                            />
                          </div>
                          <span className="text-xs text-midnight-400">
                            {aluno.progresso}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-midnight-600">
                        {aluno.aulasCompletas}
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-semibold text-emerald-600">
                          {aluno.xp.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center rounded-full bg-midnight-100 px-2.5 py-0.5 text-xs font-semibold text-midnight-700">
                          Lv. {aluno.nivel}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                            aluno.status === "ativo"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-700"
                          )}
                        >
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              aluno.status === "ativo"
                                ? "bg-emerald-500"
                                : "bg-rose-500"
                            )}
                          />
                          {aluno.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-midnight-400">
                        {aluno.ultimoAcesso}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
