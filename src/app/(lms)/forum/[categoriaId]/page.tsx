"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Botao, Card } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { obterCategoria, listarPosts } from "@/lib/forum";
import { categoriasForum } from "@/content/forum";
import { PostCard, NovoPostForm } from "@/components/forum";
import { usePerfilAluno } from "@/lib/aluno";
import type { ForumCategoria } from "@/content/forum";

export default function CategoriaPage() {
  const params = useParams();
  const categoriaId = params.categoriaId as string;
  const { perfil, carregado } = usePerfilAluno();
  const [showNewPost, setShowNewPost] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const categoria = categoriasForum.find((c) => c.id === categoriaId) ?? null;

  const [posts, setPosts] = useState<ReturnType<typeof listarPosts>>([]);

  useEffect(() => {
    if (categoriaId) {
      setPosts(listarPosts(categoriaId));
    }
  }, [categoriaId, refreshKey]);

  const autorNome = perfil?.nome ?? "Visitante";
  const autorId = perfil?.email ?? "visitante";

  // Se a categoria não existe
  if (!categoria) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Icon name="close" size={40} className="mx-auto text-muted" />
        <h1 className="mt-4 text-lg font-bold">Categoria não encontrada</h1>
        <p className="mt-2 text-sm text-muted">
          A categoria que você procura não existe ou foi removida.
        </p>
        <Botao href="/forum" variante="primary" tamanho="sm" className="mt-6">
          Voltar ao Fórum
        </Botao>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6 sm:px-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted">
        <Link href="/forum" className="hover:text-orange-600 transition-colors">
          Fórum
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{categoria.nome}</span>
      </nav>

      {/* Header da categoria */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-2 ${categoria.cor}`}
          >
            <Icon name={categoria.icone as IconName} size={24} />
          </span>
          <div>
            <h1 className="text-lg font-bold">{categoria.nome}</h1>
            <p className="mt-1 text-sm text-muted">{categoria.descricao}</p>
            <span className="mt-1 inline-block text-xs text-subtle">
              {posts.length} {posts.length === 1 ? "post" : "posts"}
            </span>
          </div>
        </div>
        <Botao
          variante="primary"
          tamanho="sm"
          icone="message"
          onClick={() => setShowNewPost(!showNewPost)}
        >
          Novo post
        </Botao>
      </div>

      {/* Novo post */}
      {showNewPost && (
        <NovoPostForm
          autorNome={autorNome}
          autorId={autorId}
          onSuccess={() => {
            setShowNewPost(false);
            setRefreshKey((k) => k + 1);
          }}
          onCancel={() => setShowNewPost(false)}
        />
      )}

      {/* Lista de posts */}
      <div className="space-y-3">
        {posts.length === 0 ? (
          <Card className="border border-border p-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Icon name="message" size={32} className="text-muted" />
              <p className="text-sm text-muted">
                Nenhum post nesta categoria ainda.
              </p>
              <Botao
                variante="secondary"
                tamanho="sm"
                onClick={() => setShowNewPost(true)}
              >
                Seja o primeiro a postar!
              </Botao>
            </div>
          </Card>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} categoriaId={categoriaId} />
          ))
        )}
      </div>
    </div>
  );
}
