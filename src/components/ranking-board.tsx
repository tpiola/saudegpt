"use client";

import { useState } from "react";
import { useProgresso } from "@/lib/progress";
import { usePerfilAluno } from "@/lib/aluno";
import { lerRanking, registrarNoRanking, type EntradaRanking } from "@/lib/ranking";
import { Botao, Card, Etiqueta, BarraProgresso } from "./ui";
import { Icon } from "./icons";

function listaRankingInicial(): EntradaRanking[] {
  if (typeof window === "undefined") return [];
  return lerRanking();
}

const CROWN = ["👑", "🥈", "🥉"];
const MEDAL = ["🥇", "🥈", "🥉"];

export function RankingBoard() {
  const { xp, nivel, xpProximoNivel, carregado } = useProgresso();
  const { perfil } = usePerfilAluno();
  const [lista, setLista] = useState<EntradaRanking[]>(listaRankingInicial);
  const [optIn, setOptIn] = useState(false);

  const estaParticipando = lista.some(
    (e) => e.apelido === (perfil?.apelidoRanking ?? perfil?.nome?.split(" ")[0] ?? "Aluno"),
  );

  function participar() {
    const apelido = perfil?.apelidoRanking ?? perfil?.nome?.split(" ")[0] ?? "Aluno";
    registrarNoRanking(apelido, xp);
    setLista(lerRanking());
    setOptIn(true);
  }

  if (!carregado) return null;

  const top3 = lista.slice(0, 3);
  const resto = lista.slice(3);

  return (
    <div className="space-y-8">
      {/* ── Opt-in Card ── */}
      {!estaParticipando && (
        <Card className="border-l-4 border-l-green-400">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Icon name="award" size={20} className="text-green-600" />
                <h2 className="text-lg font-bold">Ranking saudável</h2>
              </div>
              <p className="mt-1 text-sm text-muted">
                Participe por apelido — sem expor seu e-mail. Dados ficam neste navegador.
              </p>
            </div>
            <Botao onClick={participar} icone="trending" tamanho="lg" className="shrink-0">
              Entrar com {xp} XP
            </Botao>
          </div>
        </Card>
      )}

      {estaParticipando && (
        <Card className="border-l-4 border-l-green-400 bg-green-50/40 dark:bg-green-900/20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
                <Icon name="check" size={20} />
              </span>
              <div>
                <span className="text-sm font-bold text-green-700 dark:text-green-300">
                  Você está no ranking
                </span>
                <p className="text-xs text-muted">
                  {xp} XP · Nível {nivel} · faltam {xpProximoNivel} XP para o próximo nível
                </p>
              </div>
            </div>
            <BarraProgresso
              pct={Math.round((xp % 250) / 250 * 100)}
              className="max-w-[200px]"
              height={6}
            />
          </div>
        </Card>
      )}

      {/* ── Podium ── */}
      {top3.length >= 2 && (
        <div className="rank-podium">
          {/* 2º lugar (esquerda) */}
          {top3[1] && (
            <div className="rank-podium-item">
              <div className="relative">
                <span className="rank-podium-crown">🥈</span>
                <div className="rank-podium-avatar silver">
                  {top3[1].apelido.charAt(0).toUpperCase()}
                </div>
              </div>
              <span className="rank-podium-name">{top3[1].apelido}</span>
              <span className="rank-podium-xp">{top3[1].xp} XP</span>
              <div className="rank-podium-bar silver" />
            </div>
          )}

          {/* 1º lugar (centro, maior) */}
          {top3[0] && (
            <div className="rank-podium-item">
              <div className="relative">
                <span className="rank-podium-crown">👑</span>
                <div className="rank-podium-avatar gold">
                  {top3[0].apelido.charAt(0).toUpperCase()}
                </div>
              </div>
              <span className="rank-podium-name">{top3[0].apelido}</span>
              <span className="rank-podium-xp">{top3[0].xp} XP</span>
              <div className="rank-podium-bar gold" />
            </div>
          )}

          {/* 3º lugar (direita) */}
          {top3[2] && (
            <div className="rank-podium-item">
              <div className="relative">
                <span className="rank-podium-crown">🥉</span>
                <div className="rank-podium-avatar bronze">
                  {top3[2].apelido.charAt(0).toUpperCase()}
                </div>
              </div>
              <span className="rank-podium-name">{top3[2].apelido}</span>
              <span className="rank-podium-xp">{top3[2].xp} XP</span>
              <div className="rank-podium-bar bronze" />
            </div>
          )}
        </div>
      )}

      {/* ── Lista completa ── */}
      <div className="space-y-2">
        {/* Header - escondido em mobile, visível em desktop */}
        <div className="hidden sm:grid sm:grid-cols-[40px_1fr_100px_80px] gap-3 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-subtle">
          <span>#</span>
          <span>Apelido</span>
          <span className="text-right">XP</span>
          <span className="text-right">Nível</span>
        </div>

        {top3.map((e, i) => (
          <div key={`${e.apelido}-${e.data}`}>
            {/* Desktop */}
            <div className={`hidden sm:grid sm:grid-cols-[40px_1fr_100px_80px] gap-3 items-center rounded-xl p-3 transition-all ${`rank-entry-glow-${i + 1}`}`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold bg-gradient-to-r from-green-500 to-green-600 text-white">
                {MEDAL[i]}
              </span>
              <span className="flex items-center gap-2 font-semibold">
                {e.apelido}
                {i === 0 && <span className="text-xs text-orange-500">👑</span>}
              </span>
              <span className="text-right font-bold text-green-600 dark:text-green-400">{e.xp} XP</span>
              <span className="text-right text-xs text-subtle">Nível {Math.floor(e.xp / 250) + 1}</span>
            </div>
            {/* Mobile */}
            <div className="rank-mobile-row sm:hidden rounded-xl p-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                {i + 1}
              </span>
              <span className="font-semibold text-sm truncate">{e.apelido}</span>
              <span className="font-bold text-green-600 dark:text-green-400 text-sm">{e.xp}</span>
            </div>
          </div>
        ))}

        {resto.map((e, i) => {
          const pos = i + 4;
          const nivelEst = Math.floor(e.xp / 250) + 1;
          return (
            <div key={`${e.apelido}-${e.data}`}>
              {/* Desktop */}
              <div className="hidden sm:grid sm:grid-cols-[40px_1fr_100px_80px] gap-3 items-center rounded-xl p-3 hover:bg-surface-2 transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold bg-surface-2 text-muted">
                  {pos}
                </span>
                <span className="font-semibold">{e.apelido}</span>
                <span className="text-right font-bold text-green-600 dark:text-green-400">{e.xp} XP</span>
                <span className="text-right text-xs text-subtle">Nível {nivelEst}</span>
              </div>
              {/* Mobile */}
              <div className="rank-mobile-row sm:hidden rounded-xl p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold bg-surface-2 text-muted">
                  {pos}
                </span>
                <span className="font-semibold text-sm truncate">{e.apelido}</span>
                <span className="font-bold text-green-600 dark:text-green-400 text-sm">{e.xp}</span>
              </div>
            </div>
          );
        })}

        {lista.length === 0 && (
          <Card className="py-8 text-center">
            <Icon name="award" size={40} className="mx-auto text-subtle opacity-30" />
            <p className="mt-3 text-sm text-subtle">
              Ninguém no ranking ainda. Seja o primeiro!
            </p>
          </Card>
        )}
      </div>

      {/* ── Nível de XP próprio ── */}
      {estaParticipando && (
        <Card className="border-l-4 border-l-orange-400">
          <div className="flex items-center gap-4">
            <div className="xp-level-badge">{nivel}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">Nível {nivel}</span>
                <span className="text-xs text-muted">{xp} / {nivel * 250} XP</span>
              </div>
              <BarraProgresso pct={Math.round((xp % 250) / 250 * 100)} className="mt-2" height={8} />
              <p className="mt-1 text-xs text-subtle">
                Faltam {xpProximoNivel} XP para o nível {nivel + 1}
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
