"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { salvarPerfilAluno } from "@/lib/aluno";
import { registrarCadastro, salvarStatusLocal } from "@/lib/cadastro-client";
import { tentarCadastroSupabase } from "@/lib/supabase/auth-client";
import { Botao, Card } from "./ui";
import { Icon } from "./icons";

export function MatriculaForm() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [apelido, setApelido] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    const perfil = {
      nome,
      email,
      apelidoRanking: apelido || nome.split(" ")[0],
    };
    salvarPerfilAluno(perfil);
    const reg = await registrarCadastro({
      nome,
      email,
      apelidoRanking: apelido || nome.split(" ")[0],
    });
    if (!reg.ok) {
      setErro(reg.erro ?? "Não foi possível registrar. Tente novamente.");
      return;
    }
    if (reg.status) salvarStatusLocal(reg.status);
    if (senha.length >= 6) {
      const r = await tentarCadastroSupabase(email, senha);
      if (r.erro) setErro(r.erro);
    }
    router.push(reg.status === "aprovado" ? "/" : "/aguardando-aprovacao");
  }

  return (
    <Card>
      <h2 className="text-lg font-bold">Crie seu acesso</h2>
      <p className="mt-1 text-sm text-muted">
        Cadastro com aprovação do administrador. Após enviar, aguarde a liberação do acesso.
      </p>
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
          <label htmlFor="apelido" className="text-sm font-medium">
            Apelido no ranking (opcional)
          </label>
          <input
            id="apelido"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-strong bg-surface px-4 py-2.5 text-sm outline-none focus:border-brand-400"
            placeholder="Como aparecer no ranking"
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
        <div>
          <label htmlFor="senha" className="text-sm font-medium">
            Senha (opcional — nuvem Supabase)
          </label>
          <input
            id="senha"
            type="password"
            minLength={6}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-strong bg-surface px-4 py-2.5 text-sm outline-none focus:border-brand-400"
            placeholder="Mín. 6 caracteres se usar conta na nuvem"
          />
        </div>
        {erro && <p className="text-sm text-rose-600">{erro}</p>}
        <Botao type="submit" className="w-full" iconeFim="arrow">
          Começar a estudar
        </Botao>
        <p className="flex items-center gap-1.5 text-xs text-subtle">
          <Icon name="shield" size={13} /> Progresso local por padrão. Senha opcional sincroniza na
          nuvem quando Supabase estiver configurado.
        </p>
      </form>
    </Card>
  );
}
