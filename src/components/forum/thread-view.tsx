"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, Botao } from "@/components/ui";
import { Icon } from "@/components/icons";
import { formatDataRelativa } from "@/lib/format-tempo";
import { obterPost, curtirPost, denunciarPost, removerPost } from "@/lib/forum";
import type { ForumPost } from "@/content/forum";
import { ReplyItem } from "./reply-item";
import { ReplyForm } from "./reply-form";

interface ThreadViewProps {
  postId: string;
  autorNome: string;
  autorId: string;
  isAdmin?: boolean;
}

export function ThreadView({ postId, autorNome, autorId, isAdmin }: ThreadViewProps) {
  const [post, setPost] = useState<ForumPost | null>(null);
  const [erro, setErro] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [showReply, setShowReply] = useState(false);

  const carregar = useCallback(() => {
    const p = obterPost(postId);
    if (!p) {
      setErro("Post não encontrado.");
      return;
    }
    setPost(p);
  }, [postId]);

  useEffect(() => {
    carregar();
  }, [carregar, refreshKey]);

  const handleRefresh = () => setRefreshKey((k) => k + 1);

  if (erro) {
    return (
      <Card className="border border-border p-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <Icon name="close" size={32} className="text-muted" />
          <p className="text-sm text-muted">{erro}</p>
          <Botao href="/forum" variante="secondary" tamanho="sm">
            Voltar ao Fórum
          </Botao>
        </div>
      </Card>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
      </div>
    );
  }

  if (post.removido) {
    return (
      <Card className="border border-border p-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <Icon name="shield" size={32} className="text-muted" />
          <p className="text-sm text-muted">Este post foi removido pela moderação.</p>
          <Botao href={`/forum/${post.categoriaId}`} variante="secondary" tamanho="sm">
            Voltar à categoria
          </Botao>
        </div>
      </Card>
    );
  }

  const [curtido, setCurtido] = useState(post.curtidoPor.includes(autorId));
  const [curtidas, setCurtidas] = useState(post.curtidas);
  const [denunciado, setDenunciado] = useState(false);

  const handleCurtir = () => {
    const ok = curtirPost(post.id, autorId);
    if (ok) {
      setCurtido(!curtido);
      setCurtidas((c) => (curtido ? c - 1 : c + 1));
    }
  };

  const handleDenunciar = () => {
    if (denunciado) return;
    denunciarPost(post.id);
    setDenunciado(true);
  };

  const handleRemover = () => {
    removerPost(post.id);
    handleRefresh();
  };

  const replies = post.replies || [];
  const replyCount = replies.length;

  return (
    <div className="space-y-4">
      {/* Post principal */}
      <Card className="border border-border p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-bold leading-tight">{post.titulo}</h1>
            <div className="mt-1 flex items-center gap-2 text-xs text-subtle">
              <span className="font-medium text-foreground">{post.autorNome}</span>
              <span>{formatDataRelativa(post.criadoEm)}</span>
            </div>
            <div className="mt-4 whitespace-pre-wrap text-sm leading-relaxed">{post.conteudo}</div>

            {/* Ações */}
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-3">
              <button
                onClick={handleCurtir}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs transition-colors ${
                  curtido
                    ? "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400"
                    : "text-subtle hover:text-pink-500 hover:bg-surface-2"
                }`}
              >
                <Icon name="heart" size={14} />
                {curtidas}
              </button>
              {!denunciado ? (
                <button
                  onClick={handleDenunciar}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs text-subtle hover:text-red-500 hover:bg-surface-2 transition-colors"
                >
                  <Icon name="shield" size={14} />
                  Denunciar
                </button>
              ) : (
                <span className="text-xs text-red-500">Denunciado</span>
              )}
              {isAdmin && (
                <button
                  onClick={handleRemover}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <Icon name="close" size={14} />
                  Remover post
                </button>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Respostas */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">
            {replyCount} {replyCount === 1 ? "resposta" : "respostas"}
          </h2>
          <Botao
            variante="secondary"
            tamanho="sm"
            icone="message"
            onClick={() => setShowReply(!showReply)}
          >
            Responder
          </Botao>
        </div>

        {showReply && (
          <Card className="border border-border p-4">
            <ReplyForm
              postId={post.id}
              autorNome={autorNome}
              autorId={autorId}
              onSuccess={() => {
                setShowReply(false);
                handleRefresh();
              }}
            />
          </Card>
        )}

        {replies.length === 0 ? (
          <p className="py-4 text-center text-xs text-muted">
            Nenhuma resposta ainda. Seja o primeiro a responder!
          </p>
        ) : (
          replies.map((reply) => (
            <ReplyItem
              key={reply.id}
              reply={reply}
              postId={post.id}
              isAdmin={isAdmin}
              onRefresh={handleRefresh}
              currentUserId={autorId}
            />
          ))
        )}
      </div>
    </div>
  );
}
