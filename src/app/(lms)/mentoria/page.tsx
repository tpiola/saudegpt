"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Star,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Send,
  ThumbsUp,
  Mail,
  Phone,
  Video,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MentoriaCard, type Mentor } from "@/components/mentoria-card";

/* ══════════════════════════════════════════════════════════
   TIPOS
   ══════════════════════════════════════════════════════════ */
interface AgendamentoMentoria {
  id: string;
  mentorId: string;
  mentorNome: string;
  data: string;
  horario: string;
  modalidade: "presencial" | "video" | "telefone";
  assunto: string;
  status: "agendado" | "confirmado" | "realizado" | "cancelado";
  feedback?: {
    rating: number;
    comentario: string;
  };
  createdAt: string;
}

/* ══════════════════════════════════════════════════════════
   MOCK DATA
   ══════════════════════════════════════════════════════════ */
const MENTORES_MOCK: Mentor[] = [
  {
    id: "mentor-1",
    nome: "Dr. Thiago Piola",
    especialidade: "Farmacêutico Clínico • CRF/SP 58.519",
    rating: 4.9,
    bio: "Farmacêutico especializado em atendimento clínico e educação em saúde. Mais de 10 anos de experiência em farmácia comunitária e hospitalar.",
    horarios: ["Seg 14h-18h", "Qua 09h-12h", "Sex 14h-18h"],
  },
  {
    id: "mentor-2",
    nome: "Dra. Camila Oliveira",
    especialidade: "Farmacêutica Hospitalar",
    rating: 4.8,
    bio: "Especialista em farmácia hospitalar e gestão de medicamentos. Atua na coordenação de serviços farmacêuticos em rede hospitalar.",
    horarios: ["Ter 10h-12h", "Qui 14h-17h", "Sáb 09h-11h"],
  },
  {
    id: "mentor-3",
    nome: "Dr. Rafael Santos",
    especialidade: "Farmacêutico Comunitário",
    rating: 4.7,
    bio: "Farmacêutico com foco em atendimento primário e programas de saúde pública. Experiência em gerenciamento de farmácias.",
    horarios: ["Seg 09h-12h", "Qua 14h-18h", "Sex 09h-11h"],
  },
];

const MOCK_HORARIOS_DISPONIVEIS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
];

const STORAGE_KEY = "saudegpt_mentorias";

/* ══════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════ */
function carregarAgendamentos(): AgendamentoMentoria[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function salvarAgendamentos(lista: AgendamentoMentoria[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

function gerarId() {
  return `ment-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function formatarDataBR(data: Date): string {
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/* ══════════════════════════════════════════════════════════
   CALENDÁRIO INTERATIVO
   ══════════════════════════════════════════════════════════ */
function CalendarioInterativo({
  selectedDate,
  onSelectDate,
}: {
  selectedDate: Date | null;
  onSelectDate: (d: Date) => void;
}) {
  const hoje = new Date();
  const [ano, setAno] = useState(hoje.getFullYear());
  const [mes, setMes] = useState(hoje.getMonth());

  const diasNoMes = new Date(ano, mes + 1, 0).getDate();
  const primeiroDia = new Date(ano, mes, 1).getDay(); // 0=domingo
  const nomeMes = new Date(ano, mes).toLocaleDateString("pt-BR", {
    month: "long",
  });

  const navegar = (dir: number) => {
    const novaData = new Date(ano, mes + dir, 1);
    setAno(novaData.getFullYear());
    setMes(novaData.getMonth());
  };

  const isDateDisabled = (d: Date) => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    // Desabilitar domingos e dias passados
    if (d < hoje) return true;
    if (d.getDay() === 0) return true;
    return false;
  };

  const isSelected = (d: Date) => {
    if (!selectedDate) return false;
    return (
      d.getDate() === selectedDate.getDate() &&
      d.getMonth() === selectedDate.getMonth() &&
      d.getFullYear() === selectedDate.getFullYear()
    );
  };

  const dias: (Date | null)[] = [];
  for (let i = 0; i < primeiroDia; i++) {
    dias.push(null);
  }
  for (let d = 1; d <= diasNoMes; d++) {
    dias.push(new Date(ano, mes, d));
  }

  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
      {/* Header do mês */}
      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={() => navegar(-1)}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Mês anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-xs font-semibold capitalize text-white/70">
          {nomeMes} {ano}
        </span>
        <button
          onClick={() => navegar(1)}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Próximo mês"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Dias da semana */}
      <div className="mb-1 grid grid-cols-7 gap-0.5">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d) => (
          <div
            key={d}
            className="py-1 text-center text-[9px] font-medium uppercase tracking-wider text-white/30"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Grid de dias */}
      <div className="grid grid-cols-7 gap-0.5">
        {dias.map((d, i) => {
          if (!d) {
            return <div key={`empty-${i}`} className="h-8" />;
          }
          const disabled = isDateDisabled(d);
          const selected = isSelected(d);
          return (
            <button
              key={d.toISOString()}
              disabled={disabled}
              onClick={() => onSelectDate(d)}
              className={cn(
                "flex h-8 items-center justify-center rounded-lg text-xs font-medium transition-all",
                selected
                  ? "bg-gold-500 text-white shadow-sm"
                  : disabled
                    ? "cursor-not-allowed text-white/10"
                    : "text-white/50 hover:bg-white/5 hover:text-white",
              )}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   FORMULÁRIO DE SOLICITAÇÃO
   ══════════════════════════════════════════════════════════ */
function FormularioAgendamento({
  mentor,
  onSuccess,
  onCancel,
}: {
  mentor: Mentor;
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [modalidade, setModalidade] = useState<"presencial" | "video" | "telefone">("video");
  const [assunto, setAssunto] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !assunto.trim()) return;

    setSubmitting(true);
    const agendamentos = carregarAgendamentos();
    const novo: AgendamentoMentoria = {
      id: gerarId(),
      mentorId: mentor.id,
      mentorNome: mentor.nome,
      data: selectedDate.toISOString(),
      horario: selectedTime,
      modalidade,
      assunto: assunto.trim(),
      status: "agendado",
      createdAt: new Date().toISOString(),
    };
    agendamentos.unshift(novo);
    salvarAgendamentos(agendamentos);
    setTimeout(() => {
      setSubmitting(false);
      onSuccess();
    }, 400);
  };

  const canSubmit = selectedDate && selectedTime && assunto.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5 rounded-2xl border border-gold-400/10 bg-navy-800/50 p-5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10">
          <Calendar className="h-5 w-5 text-gold-400" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">
            Agendar com {mentor.nome}
          </h3>
          <p className="text-xs text-white/40">
            Escolha data, horário e assunto
          </p>
        </div>
      </div>

      {/* Calendário */}
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-white/50">
          <Calendar className="h-3.5 w-3.5" />
          Data da mentoria
        </label>
        <CalendarioInterativo
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>

      {/* Horários */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-white/50">
            <Clock className="h-3.5 w-3.5" />
            Horário
          </label>
          <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-5">
            {MOCK_HORARIOS_DISPONIVEIS.map((h) => (
              <button
                key={h}
                onClick={() => setSelectedTime(h)}
                className={cn(
                  "rounded-lg border px-2 py-1.5 text-[10px] font-medium transition-all",
                  selectedTime === h
                    ? "border-gold-400 bg-gold-500/20 text-gold-300"
                    : "border-white/5 bg-white/[0.03] text-white/50 hover:border-white/10 hover:text-white",
                )}
              >
                {h}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Modalidade */}
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-white/50">
          <Video className="h-3.5 w-3.5" />
          Modalidade
        </label>
        <div className="flex gap-2">
          {([
            { key: "video", label: "Vídeo", icon: Video },
            { key: "presencial", label: "Presencial", icon: MapPin },
            { key: "telefone", label: "Telefone", icon: Phone },
          ] as const).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setModalidade(key)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-medium transition-all",
                modalidade === key
                  ? "border-gold-400 bg-gold-500/20 text-gold-300"
                  : "border-white/5 bg-white/[0.03] text-white/50 hover:border-white/10 hover:text-white",
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Assunto */}
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-white/50">
          <MessageSquare className="h-3.5 w-3.5" />
          Assunto
        </label>
        <textarea
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          placeholder="Descreva brevemente o que gostaria de discutir..."
          rows={3}
          className="w-full resize-none rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-xs text-white/70 placeholder:text-white/20 focus:border-gold-400/40 focus:outline-none"
        />
      </div>

      {/* Ações */}
      <div className="flex items-center gap-2">
        <Button
          variant="default"
          size="sm"
          className="flex-1 gap-1.5 text-xs"
          disabled={!canSubmit || submitting}
          onClick={handleSubmit}
        >
          {submitting ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <Send className="h-3.5 w-3.5" />
          )}
          {submitting ? "Agendando..." : "Solicitar mentoria"}
        </Button>
        <Button
          variant="outline-white"
          size="sm"
          className="text-xs"
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   HISTÓRICO DE MENTORIAS
   ══════════════════════════════════════════════════════════ */
function HistoricoMentorias({
  agendamentos,
  onRefresh,
}: {
  agendamentos: AgendamentoMentoria[];
  onRefresh: () => void;
}) {
  const [feedbackAberto, setFeedbackAberto] = useState<string | null>(null);
  const [ratingTemp, setRatingTemp] = useState(0);
  const [comentarioTemp, setComentarioTemp] = useState("");

  const handleSubmitFeedback = (id: string) => {
    if (ratingTemp === 0) return;
    const lista = carregarAgendamentos();
    const idx = lista.findIndex((a) => a.id === id);
    if (idx === -1) return;
    lista[idx].feedback = { rating: ratingTemp, comentario: comentarioTemp };
    lista[idx].status = "realizado";
    salvarAgendamentos(lista);
    setFeedbackAberto(null);
    setRatingTemp(0);
    setComentarioTemp("");
    onRefresh();
  };

  const statusLabel = (s: string) => {
    switch (s) {
      case "agendado":
        return { label: "Pendente", color: "text-gold-400 border-gold-500/30 bg-gold-500/10" };
      case "confirmado":
        return { label: "Confirmado", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" };
      case "realizado":
        return { label: "Realizado", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" };
      case "cancelado":
        return { label: "Cancelado", color: "text-red-400 border-red-500/30 bg-red-500/10" };
      default:
        return { label: s, color: "" };
    }
  };

  const modalidadeIcon = (m: string) => {
    switch (m) {
      case "video":
        return Video;
      case "presencial":
        return MapPin;
      case "telefone":
        return Phone;
      default:
        return Video;
    }
  };

  if (agendamentos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Calendar className="mb-3 h-10 w-10 text-white/10" />
        <p className="text-sm font-medium text-white/30">
          Nenhuma mentoria agendada
        </p>
        <p className="mt-1 text-xs text-white/20">
          Solicite sua primeira mentoria com um farmacêutico
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {agendamentos.map((a) => {
        const statusInfo = statusLabel(a.status);
        const ModalidadeIcon = modalidadeIcon(a.modalidade);
        const dataFormatada = formatarDataBR(new Date(a.data));
        const podeAvaliar =
          a.status === "agendado" || a.status === "confirmado";
        const jaAvaliado = a.feedback !== undefined;

        return (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-white/10"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10">
                  <User className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {a.mentorNome}
                  </p>
                  <p className="text-xs text-white/40">
                    {dataFormatada} às {a.horario}
                  </p>
                </div>
              </div>
              <span
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider",
                  statusInfo.color,
                )}
              >
                {statusInfo.label}
              </span>
            </div>

            {/* Detalhes */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                <ModalidadeIcon className="h-3 w-3 text-white/30" />
                <span className="text-[10px] text-white/40 capitalize">
                  {a.modalidade}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3 text-white/30" />
                <span className="text-[10px] text-white/40 line-clamp-1">
                  {a.assunto}
                </span>
              </div>
            </div>

            {/* Feedback já dado */}
            {jaAvaliado && (
              <div className="mt-3 rounded-lg border border-gold-400/10 bg-gold-500/5 p-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: a.feedback!.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                {a.feedback!.comentario && (
                  <p className="mt-1 text-[10px] leading-relaxed text-white/40">
                    {a.feedback!.comentario}
                  </p>
                )}
              </div>
            )}

            {/* Botão avaliar */}
            {podeAvaliar && !jaAvaliado && (
              <div className="mt-3">
                {feedbackAberto === a.id ? (
                  <div className="space-y-3 rounded-lg border border-gold-400/10 bg-gold-500/5 p-3">
                    <p className="text-[10px] font-medium text-gold-300">
                      Avalie sua mentoria
                    </p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((r) => (
                        <button
                          key={r}
                          onClick={() => setRatingTemp(r)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={cn(
                              "h-5 w-5",
                              r <= ratingTemp
                                ? "fill-gold-400 text-gold-400"
                                : "text-white/20",
                            )}
                          />
                        </button>
                      ))}
                    </div>
                    <textarea
                      value={comentarioTemp}
                      onChange={(e) => setComentarioTemp(e.target.value)}
                      placeholder="Deixe seu comentário (opcional)..."
                      rows={2}
                      className="w-full resize-none rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-white/60 placeholder:text-white/15 focus:border-gold-400/40 focus:outline-none"
                    />
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="gap-1.5 text-[10px]"
                        disabled={ratingTemp === 0}
                        onClick={() => handleSubmitFeedback(a.id)}
                      >
                        <ThumbsUp className="h-3 w-3" />
                        Enviar feedback
                      </Button>
                      <Button
                        variant="outline-white"
                        size="sm"
                        className="text-[10px]"
                        onClick={() => setFeedbackAberto(null)}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="outline-white"
                    size="sm"
                    className="gap-1.5 text-[10px]"
                    onClick={() => setFeedbackAberto(a.id)}
                  >
                    <Star className="h-3 w-3" />
                    Avaliar mentoria
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ══════════════════════════════════════════════════════════ */
export default function MentoriaPage() {
  const [agendamentos, setAgendamentos] = useState<AgendamentoMentoria[]>([]);
  const [carregado, setCarregado] = useState(false);
  const [mentorSelecionado, setMentorSelecionado] = useState<Mentor | null>(null);
  const [aba, setAba] = useState<"mentores" | "historico">("mentores");

  const refresh = useCallback(() => {
    setAgendamentos(carregarAgendamentos());
    setCarregado(true);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const handleSuccess = () => {
    setMentorSelecionado(null);
    refresh();
    setAba("historico");
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
              <Sparkles className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold text-white">Mentoria</h1>
          </div>
          <p className="mt-1 text-sm text-white/40">
            Conecte-se com farmacêuticos especialistas para orientação personalizada
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: User, label: "Mentores", value: MENTORES_MOCK.length.toString() },
          { icon: Calendar, label: "Mentorias", value: agendamentos.length.toString() },
          { icon: Star, label: "Média", value: "4.8" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center"
          >
            <stat.icon className="mx-auto h-4 w-4 text-gold-400" />
            <p className="mt-1.5 text-lg font-bold text-white">{stat.value}</p>
            <p className="text-[10px] font-medium text-white/30">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Abas */}
      <div className="flex gap-1 rounded-xl border border-white/5 bg-white/[0.03] p-1">
        {[
          { key: "mentores" as const, label: "Mentores disponíveis", icon: User },
          { key: "historico" as const, label: "Histórico", icon: Calendar },
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
        {aba === "mentores" ? (
          <motion.div
            key="mentores"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Lista de mentores */}
            {mentorSelecionado ? (
              <FormularioAgendamento
                mentor={mentorSelecionado}
                onSuccess={handleSuccess}
                onCancel={() => setMentorSelecionado(null)}
              />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {MENTORES_MOCK.map((mentor) => (
                  <MentoriaCard
                    key={mentor.id}
                    mentor={mentor}
                    onAgendar={() => setMentorSelecionado(mentor)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="historico"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white/70">
                {agendamentos.length} mentoria{agendamentos.length !== 1 ? "s" : ""}
              </h2>
              {agendamentos.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-[10px] text-white/30"
                  onClick={() => {
                    salvarAgendamentos([]);
                    refresh();
                  }}
                >
                  Limpar histórico
                </Button>
              )}
            </div>
            <HistoricoMentorias
              agendamentos={agendamentos}
              onRefresh={refresh}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
