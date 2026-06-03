"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { lerPerfilAluno } from "@/lib/aluno";
import { lerStatusLocal, salvarStatusLocal } from "@/lib/cadastro-client";
import { Card } from "./ui";
import { Icon } from "./icons";

type Status = "pendente" | "aprovado" | "rejeitado" | null;

function statusLocalInicial(): Status | "carregando" {
  if (typeof window === "undefined") return "carregando";
  const local = lerStatusLocal();
  if (local === "aprovado") return "aprovado";
  if (local === "rejeitado") return "rejeitado";
  return "carregando";
}

export function CadastroGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status | "carregando">(statusLocalInicial);

  useEffect(() => {
    const perfil = lerPerfilAluno();
    if (!perfil?.email) {
      router.replace("/");
      return;
    }

    const local = lerStatusLocal();
    if (local === "pendente") {
      router.replace("/aguardando-aprovacao");
      return;
    }
    if (local === "aprovado" || local === "rejeitado") return;

    fetch(`/api/cadastros/status?email=${encodeURIComponent(perfil.email)}`)
      .then((r) => r.json())
      .then((j: { status?: Status }) => {
        if (!j.status) {
          router.replace("/");
          return;
        }
        if (j.status === "pendente") router.replace("/aguardando-aprovacao");
        else if (j.status === "rejeitado") setStatus("rejeitado");
        else {
          salvarStatusLocal("aprovado");
          setStatus("aprovado");
        }
      })
      .catch(() => router.replace("/aguardando-aprovacao"));
  }, [router]);

  if (status === "carregando") {
    return (
      <div className="mx-auto max-w-lg px-4 py-24">
        <div className="h-32 animate-pulse rounded-2xl bg-surface-2" />
      </div>
    );
  }

  if (status === "rejeitado") {
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <Card className="text-center">
          <Icon name="shield" size={40} className="mx-auto text-rose-500" />
          <h1 className="mt-4 text-xl font-bold">Acesso não liberado</h1>
          <p className="mt-2 text-sm text-muted">
            Seu cadastro não foi aprovado. Entre em contato com a coordenação do curso.
          </p>
        </Card>
      </div>
    );
  }

  if (status !== "aprovado") return null;

  return <>{children}</>;
}
