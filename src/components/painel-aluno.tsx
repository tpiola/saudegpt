"use client";

import Link from "next/link";
import { listarAulas, trilhas } from "@/content/curriculo";
import { chaveAula, useProgresso } from "@/lib/progress";
import { AnelProgresso, BarraProgresso, Botao, Card, Etiqueta } from "./ui";
import { Icon, type IconName } from "./icons";
import { ContinuarBotao } from "./continuar";

export function PainelAluno() {
  const prog = useProgresso();
  const todas = listarAulas();

  if (!prog.carregado) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="h-40 animate-pulse rounded-2xl bg-surface-2" />
      </div>
    );
  }

  const totalCurso = todas.length;
  const concluidasCount = prog.concluidas.length;
  const pctGeral = totalCurso ? Math.round((concluidasCount / totalCurso) * 100) : 0;

  // Próxima aula recomendada: primeira ainda não concluída na ordem global.
  const recomendada = todas.find((i) => !prog.estaConcluida(i.trilha.id, i.aula.id)) ?? null;

  // Badges: uma por trilha concluída + marcos de XP.
  const badgesTrilha = trilhas
    .map((t) => ({ trilha: t, p: prog.progressoTrilha(t.id) }))
    .filter((x) => x.p.total > 0 && x.p.feitas === x.p.total);

  const notas = Object.entries(prog.notas);
  const mediaNotas = notas.length
    ? Math.round(notas.reduce((s, [, v]) => s + v, 0) / notas.length)
    : null;

  const favoritas = prog.favoritas
    .map((chave) => todas.find((i) => chaveAula(i.trilha.id, i.aula.id) === chave))
    .filter(Boolean)
    .slice(0, 6);

  const stats: { icone: IconName; rotulo: string; valor: string }[] = [
    {
      icone: "check",
      rotulo: "Aulas concluídas",
      valor: `${concluidasCount}/${totalCurso}`,
    },
    { icone: "sparkles", rotulo: "XP total", valor: `${prog.xp}` },
    {
      icone: "target",
      rotulo: "Pontos em missões",
      valor: `${prog.missoesPontos}`,
    },
    {
      icone: "award",
      rotulo: "Nota média",
      valor: mediaNotas != null ? `${mediaNotas}%` : "—",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Cabeçalho com nível e continuidade */}
      <Card className="overflow-hidden">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative">
              <AnelProgresso pct={pctGeral} tamanho={104} legenda="curso" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Etiqueta tom="brand">
                  <Icon name="trending" size={12} /> Nível {prog.nivel}
                </Etiqueta>
                <span className="text-sm text-subtle">faltam {prog.xpProximoNivel} XP</span>
              </div>
              <h1 className="mt-2 text-2xl font-bold">Olá, futuro Atendente Premium</h1>
              <p className="text-muted">
                Continue sua jornada de saúde, atendimento e performance.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col">
            <ContinuarBotao />
            {recomendada && (
              <Botao
                href={`/aula/${recomendada.trilha.id}/${recomendada.aula.id}`}
                variante="secondary"
                iconeFim="arrow"
              >
                Recomendada: {recomendada.aula.titulo.slice(0, 22)}
                {recomendada.aula.titulo.length > 22 ? "…" : ""}
              </Botao>
            )}
          </div>
        </div>
      </Card>

      {/* Estatísticas */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.rotulo} className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/40">
              <Icon name={s.icone} size={20} />
            </span>
            <div>
              <div className="text-xl font-bold">{s.valor}</div>
              <div className="text-xs text-subtle">{s.rotulo}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Progresso por trilha */}
      <div className="mt-10">
        <h2 className="text-lg font-bold">Progresso por trilha</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {trilhas.map((t) => {
            const p = prog.progressoTrilha(t.id);
            return (
              <Card key={t.id}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand text-white">
                      <Icon name={t.icone as IconName} size={20} />
                    </span>
                    <div>
                      <div className="text-sm font-bold">{t.titulo}</div>
                      <div className="text-xs text-subtle">
                        {p.feitas} de {p.total} aulas
                      </div>
                    </div>
                  </div>
                  <Link href={`/trilhas/${t.id}`} className="text-sm font-semibold text-brand-600">
                    Abrir
                  </Link>
                </div>
                <BarraProgresso pct={p.pct} className="mt-4" />
              </Card>
            );
          })}
        </div>
      </div>

      {/* Conquistas */}
      <div className="mt-10">
        <h2 className="text-lg font-bold">Conquistas</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {concluidasCount >= 1 && <Badge icone="play" titulo="Primeiros passos" />}
          {prog.xp >= 250 && <Badge icone="sparkles" titulo="Nível 2 alcançado" />}
          {prog.missoesPontos >= 30 && <Badge icone="target" titulo="Missões de balcão" />}
          {badgesTrilha.map((b) => (
            <Badge key={b.trilha.id} icone="award" titulo={`Trilha ${b.trilha.numero} concluída`} />
          ))}
          {concluidasCount === 0 && (
            <p className="text-sm text-subtle">Conclua aulas e missões para desbloquear badges.</p>
          )}
        </div>
      </div>

      {/* Favoritas */}
      {favoritas.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-bold">Favoritas</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {favoritas.map(
              (f) =>
                f && (
                  <Link
                    key={chaveAula(f.trilha.id, f.aula.id)}
                    href={`/aula/${f.trilha.id}/${f.aula.id}`}
                  >
                    <Card className="flex items-center gap-3 p-4 transition-all hover:border-brand-400">
                      <Icon name="heart" size={16} className="flex-none text-rose-500" />
                      <span className="truncate text-sm font-medium">{f.aula.titulo}</span>
                    </Card>
                  </Link>
                ),
            )}
          </div>
        </div>
      )}

      <div className="mt-12 border-t border-border pt-6">
        <button
          type="button"
          onClick={() => {
            if (confirm("Tem certeza que deseja zerar todo o seu progresso?")) prog.resetar();
          }}
          className="text-sm text-subtle hover:text-rose-500"
        >
          Zerar progresso
        </button>
      </div>
    </div>
  );
}

function Badge({ icone, titulo }: { icone: IconName; titulo: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand text-white">
        <Icon name={icone} size={16} />
      </span>
      <span className="text-sm font-semibold">{titulo}</span>
    </div>
  );
}
