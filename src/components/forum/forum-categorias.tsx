"use client";

import Link from "next/link";
import { Card } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { categoriasForum } from "@/content/forum";
import { postsPorCategoriaCount, totalPosts, totalReplies, obterPostsRecentes } from "@/lib/forum";
import { useState, useEffect } from "react";

/** Grid de categorias do fórum. */
export function ForumCategoriasGrid() {
  const categorias = [...categoriasForum].sort((a, b) => a.ordem - b.ordem);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categorias.map((cat) => (
        <ForumCategoriaCard key={cat.id} categoria={cat} />
      ))}
    </div>
  );
}

function ForumCategoriaCard({ categoria }: { categoria: (typeof categoriasForum)[number] }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(postsPorCategoriaCount(categoria.id));
  }, [categoria.id]);

  return (
    <Link href={`/forum/${categoria.id}`} className="group block">
      <Card className="relative overflow-hidden border border-border p-5 transition-all duration-200 hover:border-orange-400 hover:shadow-md hover:-translate-y-0.5">
        <div className="flex items-start gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-2 ${categoria.cor}`}
          >
            <Icon name={categoria.icone as IconName} size={24} />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold leading-tight group-hover:text-orange-600 transition-colors">
              {categoria.nome}
            </h3>
            <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-2">
              {categoria.descricao}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-subtle">
              <Icon name="message" size={12} />
              {count} {count === 1 ? "post" : "posts"}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

/** Stats gerais do fórum. */
export function ForumStats() {
  const [stats, setStats] = useState({ posts: 0, replies: 0 });

  useEffect(() => {
    setStats({ posts: totalPosts(), replies: totalReplies() });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 text-sm">
      <div className="flex items-center gap-1.5 text-muted">
        <Icon name="message" size={16} />
        <span>{stats.posts} posts</span>
      </div>
      <div className="flex items-center gap-1.5 text-muted">
        <Icon name="message" size={16} />
        <span>{stats.replies} respostas</span>
      </div>
    </div>
  );
}

/** Sidebar com posts recentes. */
export function ForumSidebar() {
  const [recentes, setRecentes] = useState<{ id: string; titulo: string; categoriaId: string }[]>([]);

  useEffect(() => {
    const posts = obterPostsRecentes(5);
    setRecentes(posts.map((p) => ({ id: p.id, titulo: p.titulo, categoriaId: p.categoriaId })));
  }, []);

  if (recentes.length === 0) return null;

  return (
    <Card className="p-4">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-subtle">Posts Recentes</h4>
      <ul className="space-y-2">
        {recentes.map((post) => (
          <li key={post.id}>
            <Link
              href={`/forum/${post.categoriaId}/${post.id}`}
              className="block text-sm text-muted hover:text-orange-600 transition-colors line-clamp-1"
            >
              {post.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
