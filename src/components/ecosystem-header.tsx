"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function EcosystemHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="eco-header">
      <div className="eco-container eco-header-row">
        <Link className="eco-logo" href="/" aria-label="SaúdeGPT — início">
          <span className="eco-symbol" aria-hidden="true">
            s<span>+</span>
          </span>
          <span>
            saúde<span className="eco-logo-gpt">gpt</span>
            <small>conhecimento que cuida</small>
          </span>
        </Link>
        <nav className="eco-desktop-nav" aria-label="Navegação principal">
          <Link href="/trilhas">Aprender</Link>
          <Link href="/praticar">Praticar</Link>
          <Link href="/biblioteca">Consultar</Link>
          <Link href="/dashboard">Meu aprendizado</Link>
        </nav>
        <div className="eco-header-actions">
          <Link
            href="/trilhas/cuidado-no-balcao"
            className="eco-button eco-button-small"
          >
            Iniciar <ArrowUpRight size={16} />
          </Link>
          <button
            className="eco-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="eco-menu-mobile"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="eco-menu-mobile"
          className="eco-mobile-nav"
          aria-label="Menu mobile"
        >
          {[
            ["Aprender", "/trilhas"],
            ["Praticar", "/praticar"],
            ["Consultar", "/biblioteca"],
            ["Meu aprendizado", "/dashboard"],
          ].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
