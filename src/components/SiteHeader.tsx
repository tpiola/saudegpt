"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoSaudeGPT } from "./logo-saudegpt";

const links = [
  { href: "/", label: "Home" },
  { href: "/trilhas", label: "Trilhas" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/suporte", label: "Suporte" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoSaudeGPT variant="dark" size="sm" />
          </Link>
          <div className="hidden sm:block h-6 w-px bg-navy-100" />
        </div>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-navy-50 text-navy-800"
                  : "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-navy-200 hover:bg-navy-50 transition-colors min-touch"
            onClick={() => setAberto(!aberto)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          >
            {aberto ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {aberto && (
        <div className="md:hidden border-t border-navy-100 bg-white shadow-lg">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setAberto(false)}
                className={`block px-3 py-3 rounded-lg text-sm font-medium min-h-[48px] transition-colors ${
                  pathname === link.href
                    ? "bg-navy-50 text-navy-800"
                    : "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
