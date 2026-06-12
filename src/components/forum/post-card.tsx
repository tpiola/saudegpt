"use client";

import Link from "next/link";
import { Card, Botao } from "@/components/ui";
import { Icon } from "@/components/icons";
import type { ForumPost } from "@/content/forum";
import { formatDataRelativa } from "@/lib/format-tempo";

interface PostCardProps {
  post: ForumPost;
  categoriaId: string;
}

export function PostCard({ post, categoriaId }: PostCardProps) {
  if (post.removido) {
    return (
      <Card className="border border-border/50 p-4 opacity-60">
        <p className="text-sm italic text-muted">⚠️ Post removido pela moderação.</p>
      </Card>
    );
  }

  const replyCount = post.replies?.length || 0;

  return (
    <Link href={`/forum/${categoriaId}/${post.id}`} className="group block">
      <Card className="border border-border p-4 transition-all duration-200 hover:border-orange-400 hover:shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold leading-tight group-hover:text-orange-600 transition-colors">
              {post.titulo}
            </h3>
            <p className="mt-1 text-xs text-muted line-clamp-2 leading-relaxed">
              {post.conteudo}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-subtle">
              <span className="font-medium">{post.autorNome}</span>
              <span>{formatDataRelativa(post.criadoEm)}</span>
              <span className="flex items-center gap-1">
                <Icon name="heart" size={12} />
                {post.curtidas}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="message" size={12} />
                {replyCount} {replyCount === 1 ? "resposta" : "respostas"}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
