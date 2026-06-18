"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, AlertCircle, Mail, CheckCircle2 } from "lucide-react";
import { lerStatusLocal } from "@/lib/cadastro-client";

export default function AguardandoAprovacaoPage() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const s = lerStatusLocal();
    setStatus(s);
    if (s === "aprovado") {
      router.replace("/dashboard");
    }
  }, [router]);

  if (status === "aprovado") {
    return null; // redirecionando
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-surface p-8 text-center shadow-lg">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10">
          <Clock size={40} className="text-amber-500" />
        </div>

        <h1 className="mb-2 text-2xl font-bold text-foreground">
          Matrícula em Análise
        </h1>

        <p className="mb-6 text-sm leading-relaxed text-muted">
          Sua matrícula foi recebida com sucesso e está aguardando aprovação da coordenação.
          Você receberá um e-mail assim que for aprovado(a).
        </p>

        <div className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-left">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-600">
            <AlertCircle size={16} />
            O que esperar?
          </div>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-amber-500" />
              <span>A análise pode levar até 48 horas úteis</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-amber-500" />
              <span>Você receberá um e-mail de confirmação</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-amber-500" />
              <span>Após aprovado, todas as trilhas serão liberadas</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted">
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>Dúvidas? Fale conosco</span>
          </div>
          <a
            href="mailto:suporte@saudegpt.com.br"
            className="font-medium text-gold-600 hover:text-gold-500 transition-colors"
          >
            suporte@saudegpt.com.br
          </a>
        </div>

        <button
          onClick={() => {
            setStatus(lerStatusLocal());
            if (lerStatusLocal() === "aprovado") {
              router.replace("/dashboard");
            }
          }}
          className="mt-6 inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface-2 px-5 text-sm font-medium text-foreground transition hover:border-amber-500/50"
        >
          <Clock size={14} />
          Verificar status
        </button>
      </div>
    </div>
  );
}
