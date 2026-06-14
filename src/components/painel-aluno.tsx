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
import { lerRanking } from "@/lib/ranking";
import { useEffect, useState } from "react";

export function PainelAluno() {
  const prog = useProgresso();
  const { perfil, carregado: perfilOk } = usePerfilAluno();
  const todas = listarAulas();
  const [minhaPosicao, setMinhaPosicao] = useState<number | null>(null);
  const [totalRanking, setTotalRanking] = useState(0);

  useEffect(() => {
    const ranking = lerRanking();
    setTotalRanking(ranking.length);
    const apelido = perfil?.apelidoRanking ?? perfil?.nome?.split(" ")[0] ?? "Aluno";
    const idx = ranking.findIndex((e) => e.apelido === apelido);
    setMinhaPosicao(idx >= 0 ? idx + 1 : null);
  }, [perfil]);

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

  // Marcos de XP
  const xpPctNivel = Math.round(((prog.xp % 250) / 250) * 100);
  const marcosBadges: { icone: IconName; label: string; ativo: boolean }[] = [
    { icone: "graduation", label: "Primeira aula", ativo: concluidasCount >= 1 },
    { icone: "star", label: "Nível 2", ativo: prog.xp >= 250 },
    { icone: "star", label: "Nível 3", ativo: prog.xp >= 500 },
    { icone: "star", label: "Nível 5", ativo: prog.xp >= 1000 },
    { icone: "award", label: "Nível 10", ativo: prog.xp >= 2250 },
    { icone: "flame", label: "Streak 7 dias", ativo: prog.streak >= 7 },
    { icone: "book", label: "10 aulas", ativo: concluidasCount >= 10 },
    { icone: "target", label: "Missões 30pts", ativo: prog.missoesPontos >= 30 },
  ];

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
                  <Etiqueta tom="green">
                    <Icon name="trending" size={12} /> Nível {prog.nivel}
                  </Etiqueta>
                  <Etiqueta tom="orange">
                    <Icon name="sparkles" size={12} /> {prog.xp} XP
                  </Etiqueta>
                  <span className="text-sm text-white/70">
                    faltam {prog.xpProximoNivel} XP
                  </span>
                </div>
                <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl text-white">
                  Olá{perfilOk && primeiroNome ? `, ${primeiroNome}` : ", futuro Atendente"}
                </h1>
                <p className="mt-1 max-w-xl text-white/60 leading-relaxed">
                  Continue sua jornada de saúde, atendimento e performance.
                  {prog.estudouHoje
                    ? <> Você já estudou hoje. <Icon name="flame" size={14} className="inline" /></>
                    : " Marque uma aula para manter a sequência."}
                </p>
                {/* Level XP bar */}
                <div className="mt-3 max-w-[280px]">
                  <div className="flex items-center justify-between text-[11px] text-white/60 mb-1">
                    <span>Progresso Nv. {prog.nivel}</span>
                    <span>{prog.xp % 250} / 250 XP</span>
                  </div>
                  <BarraProgresso pct={xpPctNivel} height={6} className="[&>div]:bg-white/30 [&>div]:[&>div]:bg-gradient-to-r [&>div]:[&>div]:from-orange-400 [&>div]:[&>div]:to-green-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col">
              <ContinuarBotao />
              {recomendada && (
                <Botao
                  href={`/aula/${recomendada.trilha.id}/${recomendada.aula.id}`}
                  variante="secondary"
                  iconeFim="arrow"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
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

      {/* ── Nível e Ranking (Gamificação) ── */}
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        {/* Card de Nível */}
        <Card className="p-6 border-l-4 border-l-green-400">
          <div className="flex items-start gap-4">
            <div className="xp-level-badge shrink-0">{prog.nivel}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold">Nível {prog.nivel}</h3>
              <p className="text-sm text-muted mt-1">
                {prog.xp} XP total · faltam {prog.xpProximoNivel} XP para nível {prog.nivel + 1}
              </p>
              <BarraProgresso pct={xpPctNivel} className="mt-3" height={8} />
              <div className="mt-2 flex items-center gap-4 text-xs text-subtle">
                <span className="flex items-center gap-1">
                  <Icon name="flame" size={12} className="text-orange-500" /> Streak: {prog.streak} dias
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="award" size={12} className="text-green-500" /> {badgesTrilha.length + (prog.xp >= 250 ? 1 : 0) + (concluidasCount >= 1 ? 1 : 0) + (concluidasCount >= 10 ? 1 : 0) + (prog.missoesPontos >= 30 ? 1 : 0)} badges
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Card de Ranking */}
        <Link href="/ranking" className="block group">
          <Card className="p-6 border-l-4 border-l-orange-400 transition-all group-hover:shadow-md">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 text-2xl ring-1 ring-orange-400/20">
                <Icon name="award" size={24} className="text-orange-500" />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold group-hover:text-orange-500 transition-colors">
                  Ranking de estudos
                </h3>
                <p className="text-sm text-muted mt-1">
                  {minhaPosicao != null
                    ? `Sua posição: #${minhaPosicao} de ${totalRanking} participantes`
                    : "Participe do ranking para aparecer aqui"}
                </p>
                {minhaPosicao != null && (
                  <div className="mt-2 flex items-center gap-2">
                    <BarraProgresso
                      pct={Math.max(0, Math.round(((totalRanking - minhaPosicao + 1) / totalRanking) * 100))}
                      height={5}
                      className="max-w-[120px]"
                    />
                    <span className="text-xs text-subtle">
                      Top {Math.round((minhaPosicao / totalRanking) * 100)}%
                    </span>
                  </div>
                )}
                <div className="mt-2 text-xs font-medium text-orange-500 group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  Ver ranking completo →
                </div>
              </div>
            </div>
          </Card>
        </Link>
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
                    <div className="text-lg font-bold text-orange-500">
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
          const concluida = p.total > 0 && p.feitas === p.total;
          return (
            <Card key={t.id} variante="elevated" className={concluida ? "border-l-4 border-l-green-400" : ""}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${concluida ? "bg-gradient-to-r from-green-500 to-green-600" : "bg-gradient-to-r from-forest-500 to-green-500"} text-white`}>
                    <Icon name={t.icone as IconName} size={20} />
                  </span>
                  <div>
                    <div className="text-sm font-bold">{t.titulo}</div>
                    <div className="text-xs text-subtle flex items-center gap-1.5">
                      {p.feitas} de {p.total} aulas
                      {concluida && <span className="text-green-600 font-semibold">✓ Concluída</span>}
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

      {/* ── Conquistas / Badges ── */}
      <TituloSecao
        sobre="Conquistas"
        titulo="Badges e marcos"
        descricao="Cada badge representa um marco alcançado na sua jornada."
        icone="award"
      />
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
        {marcosBadges.map((m) => (
          <div
            key={m.label}
            className={`flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-all ${
              m.ativo
                ? "bg-gradient-to-b from-green-50 to-green-50/50 border border-green-200 dark:from-green-900/30 dark:to-green-900/20 dark:border-green-800"
                : "bg-surface-2 border border-border opacity-50 dark:bg-surface-3"
            }`}
          >
            <span className={`text-2xl flex items-center justify-center ${m.ativo ? "" : "grayscale"}`}>
              <Icon name={m.icone} size={22} />
            </span>
            <span className={`text-[11px] font-semibold leading-tight ${m.ativo ? "text-green-700 dark:text-green-300" : "text-subtle"}`}>
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Badges de trilha concluída */}
      {badgesTrilha.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {badgesTrilha.map((b) => (
            <Etiqueta key={b.trilha.id} tom="green">
              <Icon name="award" size={12} /> Trilha {b.trilha.numero} concluída
            </Etiqueta>
          ))}
        </div>
      )}

      {concluidasCount === 0 && (
        <p className="text-sm text-subtle mt-4 px-2">
          Conclua aulas e missões para desbloquear badges.
        </p>
      )}

      <DividerGlow className="my-10" />

      {/* ── Missões ── */}
      <div className="grid gap-6 lg:grid-cols-2 mb-10">
        <Link href="/missoes" className="block group">
          <Card className="p-6 border-l-4 border-l-green-400 transition-all group-hover:shadow-md">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/10 text-2xl ring-1 ring-green-400/20">
                <Icon name="target" size={24} className="text-green-500" />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold group-hover:text-green-500 transition-colors">
                  Missões de balcão
                </h3>
                <p className="text-sm text-muted mt-1">
                  Casos reais de atendimento para testar seus conhecimentos
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-sm font-bold text-green-600">{prog.missoesPontos}</span>
                  <span className="text-xs text-subtle">pontos em missões</span>
                </div>
                {prog.missoesPontos > 0 && (
                  <div className="mt-2 flex items-center gap-1">
                    <BarraProgresso pct={Math.min(100, (prog.missoesPontos / 100) * 100)} height={5} className="max-w-[120px]" />
                    <span className="text-xs text-subtle">{prog.missoesPontos}/100 pts</span>
                  </div>
                )}
                <div className="mt-2 text-xs font-medium text-green-500 group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  Ir para missões →
                </div>
              </div>
            </div>
          </Card>
        </Link>

        {/* Streak Card */}
        <Card className="p-6 border-l-4 border-l-orange-400">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 text-2xl ring-1 ring-orange-400/20">
              {prog.estudouHoje ? <Icon name="flame" size={24} className="text-orange-500" /> : <Icon name="clock" size={24} className="text-orange-500" />}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold">
                {prog.estudouHoje ? "Sequência ativa!" : "Hora de estudar"}
              </h3>
              <p className="text-sm text-muted mt-1">
                {prog.estudouHoje
                  ? `Você está em uma sequência de ${prog.streak} dias. Continue assim!`
                  : "Estude hoje para não perder sua sequência."}
              </p>
              <div className="mt-3 flex items-center gap-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                      i < prog.streak
                        ? "bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-md"
                        : "bg-surface-2 text-subtle dark:bg-surface-3"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
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
                      className="flex items-center gap-3 p-4 transition-all group-hover:border-orange-300"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500 dark:bg-orange-900/30">
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
            ? "✓ Estudo registrado hoje 🔥"
            : "— Nenhum estudo registrado hoje"}
        </p>
        <button
          type="button"
          onClick={() => {
            if (confirm("Tem certeza que deseja zerar todo o seu progresso?"))
              prog.resetar();
          }}
          className="text-xs text-subtle underline-offset-2 hover:text-orange-500 underline transition-colors"
        >
          Zerar progresso
        </button>
      </div>
    </div>
  );
}
