"use client";

import { Component, type ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./icons";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  /** Mensagem amigável padrão quando não houver fallback customizado. */
  mensagem?: string;
}

interface State {
  erro: Error | null;
}

/**
 * Error boundary reutilizável com fallback amigável em PT-BR.
 * Captura erros de renderização no componente filho e exibe uma mensagem
 * em vez de quebrar a página inteira.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { erro: null };
  }

  static getDerivedStateFromError(erro: Error): State {
    return { erro };
  }

  componentDidCatch(erro: Error, info: { componentStack?: string }) {
    console.error("[ErrorBoundary]", erro.message, info.componentStack);
  }

  render() {
    if (this.state.erro) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-500">
            <Icon name="alert" size={28} />
          </div>
          <h2 className="text-lg font-bold text-foreground">
            {this.props.mensagem ?? "Algo deu errado"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Não se preocupe, seus dados estão salvos.
            {this.state.erro.message.includes("localStorage") ||
            this.state.erro.message.includes("supabase") ||
            this.state.erro.message.includes("auth")
              ? " Faça login novamente para acessar esta página."
              : " Tente recarregar a página."}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                this.setState({ erro: null });
                window.location.reload();
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-green-600 px-5 text-sm font-bold text-white transition hover:bg-gold-500"
            >
              <Icon name="refresh" size={16} /> Recarregar
            </button>
            <Link
              href="/trilhas"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 text-sm font-semibold text-foreground transition hover:border-gold-300"
            >
              Explorar trilhas
            </Link>
          </div>
          {/* Botão para login (quando for erro de autenticação) */}
          {(this.state.erro.message.includes("supabase") ||
            this.state.erro.message.includes("auth") ||
            this.state.erro.message.includes("session")) && (
            <Link
              href="/"
              className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl bg-navy-800 px-5 text-sm font-bold text-white transition hover:bg-navy-600"
            >
              <Icon name="arrow" size={16} /> Fazer login
            </Link>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
