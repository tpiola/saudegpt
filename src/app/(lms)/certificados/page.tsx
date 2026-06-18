"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  FileCheck,
  Clock,
  AlertTriangle,
  Download,
  ChevronRight,
  Sparkles,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  RotateCw,
  Printer,
  BookOpen,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CertificadoCard, type Certificado } from "@/components/certificado-card";
import { Carteirinha, baixarCarteirinha } from "@/components/carteirinha";

/* ══════════════════════════════════════════════════════════
   TIPOS
   ══════════════════════════════════════════════════════════ */
interface ProgressoCertificado {
  curso: string;
  progresso: number; // 0-100
  aulasConcluidas: number;
  totalAulas: number;
  cargaHoraria: string;
  icone?: string;
}

const STORAGE_KEY_CERT = "saudegpt_certificados";
const STORAGE_KEY_PROG = "saudegpt_progresso_cert";

/* ══════════════════════════════════════════════════════════
   MOCK DATA
   ══════════════════════════════════════════════════════════ */
const CURSOS_DISPONIVEIS: ProgressoCertificado[] = [
  {
    curso: "Atendimento ao Paciente na Farmácia",
    progresso: 72,
    aulasConcluidas: 18,
    totalAulas: 25,
    cargaHoraria: "40h",
  },
  {
    curso: "Medicamentos Isentos de Prescrição (MIPs)",
    progresso: 45,
    aulasConcluidas: 9,
    totalAulas: 20,
    cargaHoraria: "30h",
  },
  {
    curso: "Saúde da Mulher na Farmácia",
    progresso: 30,
    aulasConcluidas: 6,
    totalAulas: 20,
    cargaHoraria: "30h",
  },
];

function gerarQrDataUrl(): string {
  // Gera um QR Code SVG simples (placeholder visual)
  const size = 100;
  const cells = 21;
  const cellSize = size / cells;
  const matrix: boolean[][] = Array.from({ length: cells }, () =>
    Array.from({ length: cells }, () => Math.random() > 0.6),
  );

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
  svg += `<rect width="${size}" height="${size}" fill="white" rx="4"/>`;
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      if (matrix[r][c]) {
        svg += `<rect x="${c * cellSize}" y="${r * cellSize}" width="${cellSize}" height="${cellSize}" fill="#1a1a2e" rx="1"/>`;
      }
    }
  }
  svg += `</svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function gerarCertificadosMock(): Certificado[] {
  const hoje = new Date();
  const emissao1 = new Date(hoje.getFullYear() - 1, 5, 15);
  const val1 = new Date(emissao1);
  val1.setFullYear(val1.getFullYear() + 2);

  const emissao2 = new Date(hoje.getFullYear(), 0, 10);
  const val2 = new Date(emissao2);
  val2.setFullYear(val2.getFullYear() + 2);

  const emissao3 = new Date(hoje.getFullYear() - 2, 8, 1);
  const val3 = new Date(emissao3);
  val3.setFullYear(val3.getFullYear() + 2);

  return [
    {
      id: "cert-1",
      curso: "Formação para Atendentes de Farmácia",
      dataEmissao: emissao1.toLocaleDateString("pt-BR"),
      dataValidade: val1.toLocaleDateString("pt-BR"),
      cargaHoraria: "120h",
      status: "reciclagem" as const,
      descricao: "Certificação completa da formação básica para atendentes de farmácia.",
      qrCodeUrl: gerarQrDataUrl(),
    },
    {
      id: "cert-2",
      curso: "Atenção Farmacêutica em Diabetes",
      dataEmissao: emissao2.toLocaleDateString("pt-BR"),
      dataValidade: val2.toLocaleDateString("pt-BR"),
      cargaHoraria: "60h",
      status: "valido" as const,
      descricao: "Especialização em cuidado de pacientes com diabetes mellitus.",
      qrCodeUrl: gerarQrDataUrl(),
    },
    {
      id: "cert-3",
      curso: "Fitoterapia Aplicada à Farmácia",
      dataEmissao: emissao3.toLocaleDateString("pt-BR"),
      dataValidade: val3.toLocaleDateString("pt-BR"),
      cargaHoraria: "80h",
      status: "expirado" as const,
      descricao: "Conhecimento em plantas medicinais e fitoterápicos no balcão.",
    },
  ];
}

/* ══════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════ */
function carregarCertificados(): Certificado[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY_CERT);
    return data ? JSON.parse(data) : gerarCertificadosMock();
  } catch {
    return gerarCertificadosMock();
  }
}

function salvarCertificados(lista: Certificado[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_CERT, JSON.stringify(lista));
}

function carregarProgresso(): ProgressoCertificado[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY_PROG);
    return data ? JSON.parse(data) : CURSOS_DISPONIVEIS;
  } catch {
    return CURSOS_DISPONIVEIS;
  }
}

/* ══════════════════════════════════════════════════════════
   COMPONENTE: Progresso para próximos certificados
   ══════════════════════════════════════════════════════════ */
function ProgressoCertificados({
  cursos,
}: {
  cursos: ProgressoCertificado[];
}) {
  return (
    <div className="space-y-3">
      {cursos.map((curso) => (
        <motion.div
          key={curso.curso}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-white/10"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10">
                <BookOpen className="h-4 w-4 text-gold-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {curso.curso}
                </p>
                <p className="mt-0.5 text-[10px] text-white/30">
                  {curso.aulasConcluidas}/{curso.totalAulas} aulas •{" "}
                  {curso.cargaHoraria}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[9px] font-bold",
                curso.progresso >= 80
                  ? "text-emerald-400"
                  : curso.progresso >= 50
                    ? "text-gold-400"
                    : "text-white/30",
              )}
            >
              {curso.progresso}%
            </span>
          </div>

          {/* Barra de progresso */}
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${curso.progresso}%` }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
              className={cn(
                "h-full rounded-full",
                curso.progresso >= 80
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                  : curso.progresso >= 50
                    ? "bg-gradient-to-r from-gold-500 to-gold-400"
                    : "bg-gradient-to-r from-navy-500 to-navy-400",
              )}
            />
          </div>

          {/* Próximo marco */}
          <div className="mt-2 flex items-center gap-1.5">
            <TrendingUp className="h-3 w-3 text-gold-400/60" />
            <span className="text-[9px] text-white/30">
              {curso.progresso < 100
                ? `Faltam ${curso.totalAulas - curso.aulasConcluidas} aulas para concluir`
                : "Curso concluído! Aguardando certificado."}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   COMPONENTE: Badge de reciclagem
   ══════════════════════════════════════════════════════════ */
function ReciclagemBadge() {
  return (
    <div className="rounded-xl border border-gold-500/15 bg-gradient-to-r from-gold-500/5 to-transparent p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/20">
          <RotateCw className="h-4 w-4 text-gold-400" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gold-300">
            Reciclagem disponível
          </p>
          <p className="mt-0.5 text-[10px] leading-relaxed text-white/40">
            Mantenha seus certificados ativos realizando a reciclagem periódica.
            A reciclagem garante que seu conhecimento esteja sempre atualizado
            com as melhores práticas e regulamentações.
          </p>
          <Button
            variant="default"
            size="sm"
            className="mt-3 gap-1.5 text-[10px]"
          >
            <RotateCw className="h-3 w-3" />
            Ver cursos de reciclagem
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ══════════════════════════════════════════════════════════ */
export default function CertificadosPage() {
  const [certificados, setCertificados] = useState<Certificado[]>([]);
  const [cursosProgresso, setCursosProgresso] = useState<ProgressoCertificado[]>([]);
  const [carregado, setCarregado] = useState(false);
  const [aba, setAba] = useState<"certificados" | "progresso">("certificados");
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");

  const refresh = useCallback(() => {
    setCertificados(carregarCertificados());
    setCursosProgresso(carregarProgresso());
    setCarregado(true);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const handleDownload = (id: string) => {
    const cert = certificados.find((c) => c.id === id);
    if (!cert) return;
    // Reutiliza a função de download da carteirinha
    // Preenche dados temporários no DOM para captura
    const nomeAluno = localStorage.getItem("saudegpt_aluno_nome") ?? "Aluno SaúdeGPT";
    baixarCarteirinha();
  };

  const handleImprimir = (id: string) => {
    window.print();
  };

  const handleRenovar = (id: string) => {
    const lista = carregarCertificados();
    const idx = lista.findIndex((c) => c.id === id);
    if (idx === -1) return;
    const hoje = new Date();
    const novaValidade = new Date(hoje);
    novaValidade.setFullYear(novaValidade.getFullYear() + 2);
    lista[idx].dataEmissao = hoje.toLocaleDateString("pt-BR");
    lista[idx].dataValidade = novaValidade.toLocaleDateString("pt-BR");
    lista[idx].status = "valido";
    lista[idx].qrCodeUrl = gerarQrDataUrl();
    salvarCertificados(lista);
    refresh();
  };

  const certificadosFiltrados = certificados.filter((c) => {
    if (filtroStatus === "todos") return true;
    return c.status === filtroStatus;
  });

  const stats = {
    validos: certificados.filter((c) => c.status === "valido").length,
    reciclagem: certificados.filter((c) => c.status === "reciclagem").length,
    expirados: certificados.filter((c) => c.status === "expirado").length,
    total: certificados.length,
  };

  if (!carregado) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg">
              <Award className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold text-white">Certificados</h1>
          </div>
          <p className="mt-1 text-sm text-white/40">
            Acompanhe suas certificações, validades e reciclagens
          </p>
        </div>
      </motion.div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { icon: Award, label: "Total", value: stats.total.toString(), color: "text-white" },
          { icon: ShieldCheck, label: "Válidos", value: stats.validos.toString(), color: "text-emerald-400" },
          { icon: AlertTriangle, label: "Reciclagem", value: stats.reciclagem.toString(), color: "text-gold-400" },
          { icon: AlertCircle, label: "Expirados", value: stats.expirados.toString(), color: "text-red-400" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center"
          >
            <stat.icon className={cn("mx-auto h-4 w-4", stat.color)} />
            <p className="mt-1.5 text-lg font-bold text-white">{stat.value}</p>
            <p className="text-[10px] font-medium text-white/30">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Badge de reciclagem */}
      {stats.reciclagem > 0 && <ReciclagemBadge />}

      {/* Abas */}
      <div className="flex gap-1 rounded-xl border border-white/5 bg-white/[0.03] p-1">
        {[
          { key: "certificados" as const, label: "Meus certificados", icon: Award },
          { key: "progresso" as const, label: "Progresso", icon: TrendingUp },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setAba(key)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all",
              aba === key
                ? "bg-gold-500/20 text-gold-300 shadow-sm"
                : "text-white/40 hover:text-white/60",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {aba === "certificados" ? (
          <motion.div
            key="certificados"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Filtro de status */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: "todos", label: "Todos" },
                { key: "valido", label: "Válidos" },
                { key: "reciclagem", label: "Reciclagem" },
                { key: "expirado", label: "Expirados" },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFiltroStatus(f.key)}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-[10px] font-medium transition-all",
                    filtroStatus === f.key
                      ? "border-gold-400 bg-gold-500/20 text-gold-300"
                      : "border-white/5 bg-white/[0.03] text-white/40 hover:border-white/10 hover:text-white/60",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Lista de certificados */}
            {certificadosFiltrados.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Award className="mb-3 h-12 w-12 text-white/10" />
                <p className="text-sm font-medium text-white/30">
                  Nenhum certificado encontrado
                </p>
                <p className="mt-1 text-xs text-white/20">
                  Complete cursos para obter suas certificações
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {certificadosFiltrados.map((cert) => (
                  <CertificadoCard
                    key={cert.id}
                    certificado={cert}
                    onDownload={handleDownload}
                    onImprimir={handleImprimir}
                    onRenovar={handleRenovar}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="progresso"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white/70">
                Próximas certificações
              </h2>
              <span className="text-[10px] text-white/30">
                {cursosProgresso.filter((c) => c.progresso >= 100).length} de{" "}
                {cursosProgresso.length} concluídos
              </span>
            </div>
            <ProgressoCertificados cursos={cursosProgresso} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
