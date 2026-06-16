"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageSquare, Search, RefreshCw, ChevronDown, ChevronUp, Clock, User } from "lucide-react";

interface ChatEntry {
  id?: string;
  created_at?: string;
  timestamp?: string;
  aluno: string;
  pergunta: string;
  resposta: string;
  turno: number;
}

export function ChatLogViewer() {
  const [conversas, setConversas] = useState<Record<string, ChatEntry[]>>({});
  const [total, setTotal] = useState(0);
  const [alunos, setAlunos] = useState(0);
  const [database, setDatabase] = useState("");
  const [busca, setBusca] = useState("");
  const [expandido, setExpandido] = useState<Record<string, boolean>>({});
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const buscar = useCallback(async (aluno?: string) => {
    setCarregando(true);
    setErro("");
    try {
      const params = aluno ? `?aluno=${encodeURIComponent(aluno)}` : "";
      const res = await fetch(`/api/chat/log${params}`, {
        headers: {
          Authorization: `Basic ${btoa("admin:102030")}`,
        },
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      setConversas(data.conversas || {});
      setTotal(data.total || 0);
      setAlunos(data.alunos || 0);
      setDatabase(data.database || "");
    } catch (err) {
      setErro("Erro ao carregar conversas");
      console.error(err);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    buscar();
  }, [buscar]);

  function toggleAluno(nome: string) {
    setExpandido((prev) => ({ ...prev, [nome]: !prev[nome] }));
  }

  function formatarData(iso?: string) {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      return d.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-white">
            <MessageSquare className="h-5 w-5 text-gold-400" />
            Conversas do Chat
          </h2>
          <p className="mt-1 text-sm text-white/50">
            {total > 0
              ? `${total} mensagens de ${alunos} alunos`
              : "Nenhuma conversa registrada"}
            {database === "supabase" && (
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-gold-500/10 px-2 py-0.5 text-[11px] text-gold-400">
                Supabase
              </span>
            )}
            {database === "memoria" && (
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-400">
                Memória volátil
              </span>
            )}
          </p>
        </div>
        <button
          onClick={() => buscar(busca)}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-2 text-sm text-white/60 transition hover:border-white/40 hover:text-white"
          disabled={carregando}
        >
          <RefreshCw className={`h-3.5 w-3.5 ${carregando ? "animate-spin" : ""}`} />
          Atualizar
        </button>
      </div>

      {/* Busca */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
        <input
          type="text"
          placeholder="Buscar por nome do aluno..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscar(busca)}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/30 transition focus:border-emerald-500/40 focus:outline-none"
        />
      </div>

      {/* Erro */}
      {erro && (
        <div className="mb-4 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {erro}
        </div>
      )}

      {/* Loading */}
      {carregando && (
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-2 text-sm text-white/40">
            <RefreshCw className="h-4 w-4 animate-spin" />
            Carregando conversas...
          </div>
        </div>
      )}

      {/* Lista de alunos */}
      {!carregando && !erro && Object.keys(conversas).length === 0 && (
        <div className="rounded-xl border border-dashed border-white/10 py-12 text-center">
          <MessageSquare className="mx-auto h-8 w-8 text-white/20" />
          <p className="mt-3 text-sm text-white/30">
            {database === "memoria"
              ? "Configure o Supabase para persistir as conversas"
              : "Nenhuma conversa encontrada"}
          </p>
        </div>
      )}

      {/* Conversas agrupadas por aluno */}
      <div className="space-y-3">
        {Object.entries(conversas).map(([aluno, msgs]) => (
          <div
            key={aluno}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-white/20"
          >
            {/* Header do aluno */}
            <button
              onClick={() => toggleAluno(aluno)}
              className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-white/[0.02]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 text-gold-400">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{aluno}</p>
                  <p className="text-xs text-white/40">
                    {msgs.length} mensagem{msgs.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              {expandido[aluno] ? (
                <ChevronUp className="h-4 w-4 text-white/30" />
              ) : (
                <ChevronDown className="h-4 w-4 text-white/30" />
              )}
            </button>

            {/* Mensagens do aluno */}
            {expandido[aluno] && (
              <div className="border-t border-white/5 px-4 py-3 space-y-3 max-h-[400px] overflow-y-auto">
                {msgs.map((msg, i) => (
                  <div key={msg.id || i} className="rounded-lg bg-white/[0.03] p-3">
                    <div className="flex items-center gap-2 text-[11px] text-white/30 mb-2">
                      <Clock className="h-3 w-3" />
                      {formatarData(msg.created_at || msg.timestamp)}
                      <span className="text-white/20">|</span>
                      Turno {msg.turno || i + 1}
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg bg-gold-500/5 px-3 py-2">
                        <p className="text-[11px] font-semibold text-gold-400/70 uppercase tracking-wider mb-1">
                          Aluno perguntou
                        </p>
                        <p className="text-sm text-white/80">{msg.pergunta}</p>
                      </div>
                      <div className="rounded-lg bg-white/5 px-3 py-2">
                        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-1">
                          Assistente respondeu
                        </p>
                        <p className="text-sm text-white/70 leading-relaxed">{msg.resposta}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Aviso de memória */}
      {database === "memoria" && Object.keys(conversas).length > 0 && (
        <div className="mt-4 rounded-xl bg-amber-500/5 px-4 py-3 text-xs text-amber-400/70">
          ⚠️ Dados em memória volátil. Configure o Supabase seguindo o guia em{" "}
          <code className="text-amber-300">docs/SETUP_SUPABASE.md</code>
        </div>
      )}
    </div>
  );
}
