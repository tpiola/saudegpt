     1|"use client";
     2|
     3|import Link from "next/link";
     4|import { usePathname } from "next/navigation";
     5|import { useState, useEffect } from "react";
     6|import { navPrincipal } from "@/lib/site";
     7|import { Icon } from "./icons";
     8|import { ThemeToggle } from "./theme-toggle";
     9|import { Botao } from "./ui";
    10|
    11|export function Header() {
    12|  const pathname = usePathname();
    13|  const [aberto, setAberto] = useState(false);
    14|
    15|  // Fecha o menu ao navegar
    16|  useEffect(() => {
    17|    setAberto(false);
    18|  }, [pathname]);
    19|
    20|  function ativo(href: string) {
    21|    return pathname === href || pathname.startsWith(`${href}/`);
    22|  }
    23|
    24|  return (
    25|    <header className="sticky top-0 z-40 border-b border-border glass">
    26|      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 lg:px-8">
    27|        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 sm:flex-initial" onClick={() => setAberto(false)}>
    28|          <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--forest-600),var(--brand-600))] text-white shadow-md shadow-forest-500/25">
    29|            <Icon name="shield" size={18} />
    30|          </span>
    31|          <span className="hidden flex-col leading-tight sm:flex min-w-0">
    32|            <span className="truncate text-sm font-bold tracking-tight">Atendentes Premium</span>
    33|            <span className="text-[11px] text-subtle">Formação em Farmácia</span>
    34|          </span>
    35|        </Link>
    36|
    37|        <nav className="hidden items-center gap-1 lg:flex">
    38|          {navPrincipal.map((item) => (
    39|            <Link
    40|              key={item.href}
    41|              href={item.href}
    42|              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    43|                ativo(item.href)
    44|                  ? "text-forest-600 bg-forest-50 dark:bg-forest-900/40"
    45|                  : "text-muted hover:text-foreground"
    46|              }`}
    47|            >
    48|              {item.label}
    49|            </Link>
    50|          ))}
    51|        </nav>
    52|
    53|        <div className="flex items-center gap-1.5 sm:gap-2">
    54|          <ThemeToggle />
    55|<<<<<<< HEAD
    56|          <Botao href="/matriculas" tamanho="sm" className="hidden sm:inline-flex">
    57|            Acessar
    58|=======
    59|          <Botao href="/" tamanho="sm" className="hidden sm:inline-flex">
    60|            Matricular
    61|>>>>>>> 04633e0 (feat: matrícula vira raiz (/) e Portal do Aluno vai para /dashboard)
    62|          </Botao>
    63|          <button
    64|            type="button"
    65|            className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-border-strong text-muted lg:hidden"
    66|            onClick={() => setAberto((v) => !v)}
    67|            aria-label="Abrir menu"
    68|            aria-expanded={aberto}
    69|          >
    70|            <Icon name={aberto ? "close" : "menu"} size={18} />
    71|          </button>
    72|        </div>
    73|      </div>
    74|
    75|      {/* Mobile menu com animação de altura */}
    76|      <div
    77|        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
    78|          aberto ? "max-h-96 border-t border-border" : "max-h-0"
    79|        }`}
    80|      >
    81|        <div className="bg-surface">
    82|          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-3 py-3 sm:px-4">
    83|            {navPrincipal.map((item) => (
    84|              <Link
    85|                key={item.href}
    86|                href={item.href}
    87|                onClick={() => setAberto(false)}
    88|                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
    89|                  ativo(item.href)
    90|                    ? "text-forest-600 bg-forest-50 dark:bg-forest-900/40"
    91|                    : "text-muted"
    92|                }`}
    93|              >
    94|                {item.label}
    95|              </Link>
    96|            ))}
    97|            <Botao href="/" className="mt-2" onClick={() => setAberto(false)}>
    98|              Fazer matrícula
    99|            </Botao>
   100|          </nav>
   101|        </div>
   102|      </div>
   103|    </header>
   104|  );
   105|}
   106|