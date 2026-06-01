"use client";

import { useEffect, useRef } from "react";
import { lerPerfilAluno } from "@/lib/aluno";
import { montarSnapshotProgresso, sincronizarProgressoComServidor } from "@/lib/cadastro-client";
import { useProgresso } from "@/lib/progress";
import { sincronizarProgressoNuvem } from "@/lib/supabase/auth-client";

/** Sincroniza progresso com o servidor para o painel administrativo. */
export function ProgressSync() {
  const prog = useProgresso();
  const ultimo = useRef<string>("");

  useEffect(() => {
    if (!prog.carregado) return;
    const perfil = lerPerfilAluno();
    if (!perfil?.email) return;

    const snapshot = montarSnapshotProgresso({
      concluidas: prog.concluidas,
      xp: prog.xp,
      notas: prog.notas,
      tentativasQuiz: prog.tentativasQuiz,
      tempoEstudoSegundos: prog.tempoEstudoSegundos,
      diasEstudo: prog.diasEstudo,
      missoesPontos: prog.missoesPontos,
    });

    const chave = JSON.stringify(snapshot);
    if (chave === ultimo.current) return;
    ultimo.current = chave;

    void sincronizarProgressoComServidor(perfil.email, snapshot);
    void sincronizarProgressoNuvem(snapshot);
  }, [prog]);

  return null;
}
