"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";

export function AdminLoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const res = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
      });

      if (!res.ok) {
        setErro("Credenciais inválidas. Tente novamente.");
        setCarregando(false);
        return;
      }

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("fap-admin-token", data.token);
      }
      router.push("/admin/dashboard");
    } catch {
      setErro("Erro de conexão. Verifique sua internet.");
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[100px]" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/[0.02] blur-[150px]" />
      </div>

      <div className="relative w-full max-w-[420px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl mb-4 shadow-lg shadow-green-500/25">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-4 9 4-9 4-9-4Z" /><path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-foreground">Painel do Administrador</h1>
          <p className="text-sm text-muted mt-1">Acesso restrito à coordenação</p>
        </div>

        {/* Form Card */}
        <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-xl p-8 shadow-2xl">
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-green-500/[0.03] via-transparent to-transparent pointer-events-none" />

          <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-5">
            <div>
              <label htmlFor="admin-user" className="block text-sm font-medium text-foreground/80 mb-1.5">
                Usuário
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </span>
                <input
                  id="admin-user"
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  placeholder="admin"
                  autoComplete="username"
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/5 border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/50 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="admin-pass" className="block text-sm font-medium text-foreground/80 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="16" r="1" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </span>
                <input
                  id="admin-pass"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••"
                  autoComplete="current-password"
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/5 border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/50 transition-all text-sm"
                />
              </div>
            </div>

            {erro && (
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" />
                </svg>
                {erro}
              </div>
            )}

            <button
              type="submit"
              disabled={carregando}
              className="w-full h-11 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-sm shadow-lg shadow-green-500/25 hover:brightness-110 hover:shadow-xl hover:shadow-green-500/30 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {carregando ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" /></svg>
                  Verificando…
                </span>
              ) : (
                "Entrar no painel"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-[11px] text-muted">
            {site.assinatura}
          </p>
          <a href="/" className="inline-flex items-center gap-1 text-xs text-green-500 hover:text-green-400 transition-colors mt-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M19 12H5"/><path d="m12 5-7 7 7 7"/></svg>
            Voltar para o curso
          </a>
        </div>
      </div>
    </div>
  );
}
