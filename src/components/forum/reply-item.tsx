"use client";

import { useState } from "react";
import { Card, Botao } from "@/components/ui";
import { Icon } from "@/components/icons";
import { formatDataRelativa } from "@/lib/format-tempo";
import { curtirReply, denunciarReply, removerReply } from "@/lib/forum";
import type { ForumReply } from "@/content/forum";

interface ReplyItemProps {
  reply: ForumReply;
  postId: string;
  isAdmin?: boolean;
  onRefresh: () => void;
  currentUserId: string;
}

export function ReplyItem({ reply, postId, isAdmin, onRefresh, currentUserId }: ReplyItemProps) {
  const [curtido, setCurtido] = useState(reply.curtidoPor.includes(currentUserId));
  const [curtidas, setCurtidas] = useState(reply.curtidas);
  const [denunciado, setDenunciado] = useState(false);
  const [removido, setRemovido] = useState(reply.removido);

  if (removido) {
    return (
      <Card className="border border-border/40 p-3 opacity-60">
        <p className="text-xs italic text-muted">🗑️ Resposta removida pela moderação.</p>
      </Card>
    );
  }

  const handleCurtir = () => {
    const ok = curtirReply(postId, reply.id, currentUserId);
    if (ok) {
      setCurtido(!curtido);
      setCurtidas((c) => (curtido ? c - 1 : c + 1));
    }
  };

  const handleDenunciar = () => {
    if (denunciado) return;
    denunciarReply(postId, reply.id);
    setDenunciado(true);
  };

  const handleRemover = () => {
    removerReply(postId, reply.id);
    setRemovido(true);
    onRefresh();
  };

  return (
    <Card className="border border-border/50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs text-subtle">
            <span className="font-semibold text-foreground">{reply.autorNome}</span>
            <span>{formatDataRelativa(reply.criadoEm)}</span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed">{reply.conteudo}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={handleCurtir}
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs transition-colors ${
                curtido
                  ? "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400"
                  : "text-subtle hover:text-pink-500 hover:bg-surface-2"
              }`}
            >
              <Icon name="heart" size={12} />
              {curtidas}
            </button>
            {!denunciado ? (
              <button
                onClick={handleDenunciar}
                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs text-subtle hover:text-red-500 hover:bg-surface-2 transition-colors"
              >
                <Icon name="shield" size={12} />
                Denunciar
              </button>
            ) : (
              <span className="text-xs text-red-500">Denunciado</span>
            )}
            {isAdmin && (
              <button
                onClick={handleRemover}
                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <Icon name="close" size={12} />
                Remover
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
