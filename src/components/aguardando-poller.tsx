"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { lerPerfilAluno } from "@/lib/aluno";
import { salvarStatusLocal } from "@/lib/cadastro-client";

/** Verifica periodicamente se o admin liberou o acesso. */
export function AguardandoPoller() {
  const router = useRouter();

  useEffect(() => {
    const perfil = lerPerfilAluno();
    if (!perfil?.email) return;

    async function checar() {
      const res = await fetch(`/api/cadastros/status?email=${encodeURIComponent(perfil!.email)}`);
      const j = (await res.json()) as { status?: string };
      if (j.status === "aprovado") {
        salvarStatusLocal("aprovado");
        router.replace("/");
      }
    }

    void checar();
    const id = setInterval(checar, 15000);
    return () => clearInterval(id);
  }, [router]);

  return null;
}
