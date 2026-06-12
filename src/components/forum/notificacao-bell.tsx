"use client";

import { useState, useEffect, useCallback } from "react";
import { Icon } from "@/components/icons";
import { listarNotificacoes, notificacoesNaoLidas, marcarNotificacaoLida, marcarTodasNotificacoesLidas } from "@/lib/forum";
import type { ReplyNotificacao } from "@/lib/forum";
import Link from "next/link";

export function NotificacaoBell() {
  const [aberto, setAberto] = useState(false);
  const [naoLidas, setNaoLidas] = useState(0);
  const [notificacoes, setNotificacoes] = useState<ReplyNotificacao[]>([]);

  const atualizar = useCallback(() => {
    setNaoLidas(notificacoesNaoLidas());
    setNotificacoes(listarNotificacoes());
  }, []);

  useEffect(() => {
    atualizar();
    // Polling simples a cada 10s
    const interval = setInterval(atualizar, 10_000);
    return () => clearInterval(interval);
  }, [atualizar]);

  const handleMarcarLida = (id: string) => {
    marcarNotificacaoLida(id);
    atualizar();
  };

  const handleMarcarTodas = () => {
    marcarTodasNotificacoesLidas();
    atualizar();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setAberto(!aberto)}
        className="relative flex items-center justify-center rounded-full p-2 text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
        aria-label="Notificações"
      >
        <Icon name="message" size={18} />
        {naoLidas > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white leading-none">
            {naoLidas > 9 ? "9+" : naoLidas}
          </span>
        )}
      </button>

      {aberto && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setAberto(false)} />
          <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border border-border bg-surface shadow-lg">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-sm font-semibold">Notificações</span>
              {naoLidas > 0 && (
                <button
                  onClick={handleMarcarTodas}
                  className="text-xs text-orange-600 hover:text-orange-700 transition-colors"
                >
                  Marcar todas lidas
                </button>
              )}
            </div>

            <div className="max-h-64 overflow-y-auto">
              {notificacoes.length === 0 ? (
                <p className="p-4 text-center text-xs text-muted">Nenhuma notificação.</p>
              ) : (
                <ul className="divide-y divide-border">
                  {notificacoes.map((n) => (
                    <li key={n.id} className={`${n.lida ? "opacity-60" : ""}`}>
                      <Link
                        href={`/forum/${n.categoriaId}/${n.postId}`}
                        onClick={() => {
                          handleMarcarLida(n.id);
                          setAberto(false);
                        }}
                        className="block px-4 py-3 hover:bg-surface-2 transition-colors"
                      >
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 mt-0.5 text-orange-500">
                            <Icon name="message" size={14} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs leading-tight">
                              <span className="font-medium">{n.de}</span> respondeu em{" "}
                              <span className="font-medium">{n.postTitulo}</span>
                            </p>
                            <p className="mt-0.5 text-[11px] text-muted truncate">
                              {n.conteudoPreview}...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
