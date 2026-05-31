"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Botao, Card } from "./ui";
import { Icon } from "./icons";

// Formulário de matrícula/cadastro (demo): salva o nome localmente e leva ao painel.
export function MatriculaForm() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    try {
      localStorage.setItem("fap-aluno", JSON.stringify({ nome, email }));
    } catch {
      // ignora
    }
    router.push("/dashboard");
  }

  return (
    <Card>
      <h2 className="text-lg font-bold">Crie seu acesso</h2>
      <p className="mt-1 text-sm text-muted">Cadastro rápido para começar a estudar agora.</p>
      <form className="mt-5 space-y-4" onSubmit={enviar}>
        <div>
          <label htmlFor="nome" className="text-sm font-medium">
            Nome completo
          </label>
          <input
            id="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-strong bg-surface px-4 py-2.5 text-sm outline-none focus:border-brand-400"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-strong bg-surface px-4 py-2.5 text-sm outline-none focus:border-brand-400"
            placeholder="voce@email.com"
          />
        </div>
        <Botao type="submit" className="w-full" iconeFim="arrow">
          Começar a estudar
        </Botao>
        <p className="flex items-center gap-1.5 text-xs text-subtle">
          <Icon name="shield" size={13} /> Seus dados ficam apenas neste dispositivo (demo, em
          conformidade com a LGPD).
        </p>
      </form>
    </Card>
  );
}
