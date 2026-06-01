"use client";

import { useEffect, useState } from "react";
import { useProgresso } from "@/lib/progress";
import { usePerfilAluno } from "@/lib/aluno";
import { lerRanking, registrarNoRanking, type EntradaRanking } from "@/lib/ranking";
import { Botao, Card, Etiqueta } from "./ui";
import { Icon } from "./icons";

export function RankingBoard() {
  const { xp, carregado } = useProgresso();
  const { perfil } = usePerfilAluno();
  const [lista, setLista] = useState<EntradaRanking[]>([]);
  const [optIn, setOptIn] = useState(false);

  useEffect(() => {
    setLista(lerRanking());
  }, []);

  function participar() {
    const apelido = perfil?.apelidoRanking ?? perfil?.nome?.split(" ")[0] ?? "Aluno";
    registrarNoRanking(apelido, xp);
    setLista(lerRanking());
    setOptIn(true);
  }

  if (!carregado) return null;

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-bold">Ranking saudável (opt-in)</h2>
        <p className="mt-2 text-sm text-muted">
          Participação voluntária por apelido — sem expor e-mail. Dados ficam neste navegador.
        </p>
        {!optIn && (
          <Botao className="mt-4" onClick={participar} icone="award">
            Entrar no ranking com meu XP ({xp})
          </Botao>
        )}
        {optIn && (
          <Etiqueta tom="success" className="mt-4">
            <Icon name="check" size={12} /> Você está no ranking
          </Etiqueta>
        )}
      </Card>

      <ol className="space-y-2">
        {lista.map((e, i) => (
          <li key={`${e.apelido}-${e.data}`}>
            <Card className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold ${
                    i < 3 ? "gradient-brand text-white" : "bg-surface-2 text-muted"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="font-semibold">{e.apelido}</span>
              </div>
              <span className="font-bold text-brand-600">{e.xp} XP</span>
            </Card>
          </li>
        ))}
        {lista.length === 0 && (
          <p className="text-center text-sm text-subtle">
            Ninguém no ranking ainda. Seja o primeiro!
          </p>
        )}
      </ol>
    </div>
  );
}
