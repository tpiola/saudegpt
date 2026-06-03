"use client";

import Link from "next/link";
import { listarAulas, trilhas } from "@/content/curriculo";
import { chaveAula, useProgresso } from "@/lib/progress";
import {
  AnelProgresso,
  BarraProgresso,
  Botao,
  Card,
  Etiqueta,
  StatCard,
  TituloSecao,
  Skeleton,
  DividerGlow,
} from "./ui";
import { Icon, type IconName } from "./icons";
import { ContinuarBotao } from "./continuar";
import { usePerfilAluno } from "@/lib/aluno";
import { formatarTempoEstudo } from "@/lib/format-tempo";

export function PainelAluno() {
  const prog = useProgresso();
  const { perfil, carregado: perfilOk } = usePerfilAluno();
  const todas = listarAulas();

  if (!prog.carregado) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <Skeleton className="h-48 rounded-2xl" />
        <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-20 rounded-xl" />
          ))}
        </div>
        <Skeleton className="mt-10 h-36 rounded-2xl" />
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

  const tentativasTotal = Object.values(prog.tentativasQuiz ?? {}).reduce((a, b) => a + b, 0);

  const stats: { icone: IconName; rotulo: string; valor: string }[] = [
    {
      icone: "check",
      rotulo: "Aulas concluídas",
      valor: `${concluidasCount}/${totalCurso}`,
    },
    {
      icone: "clock",
      rotulo: "Tempo de estudo",
      valor: formatarTempoEstudo(prog.tempoEstudoSegundos ?? 0),
    },
    { icone: "sparkles", rotulo: "XP total", valor: `${prog.xp}` },
    {
      icone: "target",
      rotulo: "Tentativas em quiz",
      valor: `${tentativasTotal}`,
    },
    {
      icone: "award",
      rotulo: "Nota média",
      valor: mediaNotas != null ? `${mediaNotas}%` : "—",
    },
    {
      icone: "flame",
      rotulo: "Sequência",
      valor: `${prog.streak} dia${prog.streak !== 1 ? "s" : ""}`,
    },
  ];

  const revisao = prog.aulasParaRevisao();
  const primeiroNome = perfil?.nome?.split(" ")[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* ── Hero Card ── */}
      <Card variante="glass" className="overflow-hidden">
          <div className="relative rounded-2xl bg-[linear-gradient(135deg,var(--forest-600),var(--green-600)_60%,var(--orange-600))] p-6 sm:p-8">
          {/* Brilho decorativo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
          />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <AnelProgresso pct={pctGeral} tamanho={120} legenda="curso" stroke={7} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Etiqueta tom="brand">
                    <Icon name="trending" size={12} /> Nível {prog.nivel}
                  </Etiqueta>
                  <Etiqueta tom="premium">
                    <Icon name="sparkles" size={12} /> {prog.xp} XP
                  </Etiqueta>
                  <span className="text-sm text-subtle">
                    faltam {prog.xpProximoNivel} XP
                  </span>
                </div>
                <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Olá{perfilOk && primeiroNome ? `, ${primeiroNome}` : ", futuro Atendente"}
                </h1>
                <p className="mt-1 max-w-xl text-muted leading-relaxed">
                  Continue sua jornada de saúde, atendimento e performance.
                  {prog.estudouHoje
                    ? " Você já estudou hoje."
                    : " Marque uma aula para manter a sequência."}
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
        </div>
      </Card>

      {/* ── Stats Grid ── */}
      <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map((s) => (
          <StatCard key={s.rotulo} icone={s.icone} valor={s.valor} rotulo={s.rotulo} />
        ))}
      </div>

      <DividerGlow className="my-10" />

      {/* ── Revisão Espaçada ── */}
      {revisao.length > 0 && (
        <>
          <TituloSecao
            sobre="Reforço"
            titulo="Revisão espaçada"
            descricao="Aulas com nota abaixo de 60% no quiz — vale reforçar."
            icone="book"
          />
          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 md:gap-5 md:grid-cols-2">
            {revisao.slice(0, 6).map((i) => (
              <Link
                key={chaveAula(i.trilha.id, i.aula.id)}
                href={`/aula/${i.trilha.id}/${i.aula.id}`}
                className="group block"
              >
                <Card
                  variante="elevated"
                  className="flex items-center justify-between gap-3 p-4 transition-all group-hover:border-green-400"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Etiqueta tom="danger">
                        <Icon name="target" size={10} />
                        Revisar
                      </Etiqueta>
                      <span className="truncate text-xs text-muted">
                        {i.trilha.titulo}
                      </span>
                    </div>
                    <div className="mt-1 truncate font-semibold">{i.aula.titulo}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-lg font-bold text-amber-500">
                      {prog.notas[chaveAula(i.trilha.id, i.aula.id)]}%
                    </div>
                    <div className="text-xs text-subtle">nota</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <DividerGlow className="my-10" />
        </>
      )}

      {/* ── Progresso por Trilha ── */}
      <TituloSecao
        sobre="Trilhas"
        titulo="Progresso por trilha"
        descricao="Acompanhe seu avanço em cada módulo do curso."
        icone="graduation"
      />
      <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 md:gap-8 md:grid-cols-2">
        {trilhas.map((t) => {
          const p = prog.progressoTrilha(t.id);
          return (
            <Card key={t.id} variante="elevated">
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
                <Link
                  href={`/trilhas/${t.id}`}
                  className="text-sm font-semibold text-green-600 hover:text-green-500 transition-colors"
                >
                  Abrir
                </Link>
              </div>
              <BarraProgresso pct={p.pct} className="mt-4" height={8} />
            </Card>
          );
        })}
      </div>

      <DividerGlow className="my-10" />

      {/* ── Conquistas ── */}
      <TituloSecao
        sobre="Conquistas"
        titulo="Badges e marcos"
        descricao="Cada badge representa um marco alcançado na sua jornada."
        icone="award"
      />
      <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 md:gap-5">
        {concluidasCount >= 1 && (
          <div className="bg-green-50 text-green-700 border border-green-200 flex items-center gap-2 rounded-xl px-4 py-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand text-white">
              <Icon name="play" size={16} />
            </span>
            <span className="text-sm font-semibold">Primeiros passos</span>
          </div>
        )}
        {prog.xp >= 250 && (
          <div className="bg-green-50 text-green-700 border border-green-200 flex items-center gap-2 rounded-xl px-4 py-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand text-white">
              <Icon name="sparkles" size={16} />
            </span>
            <span className="text-sm font-semibold">Nível 2 alcançado</span>
          </div>
        )}
        {prog.missoesPontos >= 30 && (
          <div className="bg-green-50 text-green-700 border border-green-200 flex items-center gap-2 rounded-xl px-4 py-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand text-white">
              <Icon name="target" size={16} />
            </span>
            <span className="text-sm font-semibold">Missões de balcão</span>
          </div>
        )}
        {badgesTrilha.map((b) => (
          <div
            key={b.trilha.id}
            className="bg-green-50 text-green-700 border border-green-200 flex items-center gap-2 rounded-xl px-4 py-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand text-white">
              <Icon name="award" size={16} />
            </span>
            <span className="text-sm font-semibold">
              Trilha {b.trilha.numero} concluída
            </span>
          </div>
        ))}
        {concluidasCount === 0 && (
          <p className="text-sm text-subtle px-2">
            Conclua aulas e missões para desbloquear badges.
          </p>
        )}
      </div>

      <DividerGlow className="my-10" />

      {/* ── Favoritas ── */}
      {favoritas.length > 0 && (
        <>
          <TituloSecao
            sobre="Preferidas"
            titulo="Aulas favoritas"
            descricao="Suas aulas marcadas para acesso rápido."
            icone="heart"
          />
          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 md:gap-5 md:grid-cols-3 lg:grid-cols-3">
            {favoritas.map(
              (f) =>
                f && (
                  <Link
                    key={chaveAula(f.trilha.id, f.aula.id)}
                    href={`/aula/${f.trilha.id}/${f.aula.id}`}
                    className="group block"
                  >
                    <Card
                      variante="elevated"
                      className="flex items-center gap-3 p-4 transition-all group-hover:border-rose-300"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500 dark:bg-rose-900/30">
                        <Icon name="heart" size={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium">
                          {f.aula.titulo}
                        </div>
                        <div className="truncate text-xs text-muted">
                          {f.trilha.titulo}
                        </div>
                      </div>
                    </Card>
                  </Link>
                ),
            )}
          </div>
          <DividerGlow className="my-10" />
        </>
      )}

      {/* ── Reset ── */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted">
          {prog.estudouHoje
            ? "✓ Estudo registrado hoje"
            : "— Nenhum estudo registrado hoje"}
        </p>
        <button
          type="button"
          onClick={() => {
            if (confirm("Tem certeza que deseja zerar todo o seu progresso?"))
              prog.resetar();
          }}
          className="text-xs text-subtle underline-offset-2 hover:text-rose-500 underline transition-colors"
        >
          Zerar progresso
        </button>
      </div>
    </div>
  );
}
