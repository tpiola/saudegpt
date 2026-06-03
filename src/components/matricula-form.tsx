"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { salvarPerfilAluno } from "@/lib/aluno";
import { registrarCadastro, salvarStatusLocal } from "@/lib/cadastro-client";
import { Botao, Card } from "./ui";
import { Icon } from "./icons";

export function MatriculaForm() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setEnviando(true);
    const apelidoRanking = nome.split(" ")[0];
    const perfil = { nome, email, apelidoRanking };
    salvarPerfilAluno(perfil);
    const reg = await registrarCadastro({ nome, email, apelidoRanking });
    if (!reg.ok) {
      setErro(reg.erro ?? "Não foi possível registrar. Tente novamente.");
      setEnviando(false);
      return;
    }
    if (reg.status) salvarStatusLocal(reg.status);
    router.push(reg.status === "aprovado" ? "/" : "/aguardando-aprovacao");
  }

  return (
    <form className="space-y-4" onSubmit={enviar}>
      <div>
        <label htmlFor="nome-mat" className="text-sm font-medium text-foreground">
          Nome completo
        </label>
        <input
          id="nome-mat"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent-400 focus:ring-1 focus:ring-accent-400/20"
          placeholder="Seu nome completo"
        />
      </div>
      <div>
        <label htmlFor="email-mat" className="text-sm font-medium text-foreground">
          E-mail
        </label>
        <input
          id="email-mat"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent-400 focus:ring-1 focus:ring-accent-400/20"
          placeholder="voce@email.com"
        />
      </div>
      {erro && <p className="text-sm text-rose-600">{erro}</p>}
      <Botao
        type="submit"
        className="w-full"
        iconeFim="arrow"
        disabled={enviando}
      >
        {enviando ? "Enviando..." : "Quero estudar"}
      </Botao>
    </form>
  );
}
