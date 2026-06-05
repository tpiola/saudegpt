# Design tokens — Azul Clínico Premium

Fonte de verdade: `src/app/globals.css` e `@theme inline` (Tailwind v4).

## Superfícies

| Token          | Claro     | Escuro    |
| -------------- | --------- | --------- |
| `--background` | `#f5f8fc` | `#060b16` |
| `--surface`    | `#ffffff` | `#0d1626` |
| `--surface-2`  | `#eef3fb` | `#111e33` |

## Marca

| Token           | Uso                   |
| --------------- | --------------------- |
| `--brand-500`   | Ações primárias       |
| `--brand-600`   | Hover / links         |
| `--accent-cyan` | Gradiente e destaques |

## Utilitários CSS

- `.bg-clinical` — fundo com gradientes radiais
- `.gradient-brand` — botões e badges
- `.glass` — cartões translúcidos
- `.card` — superfície padrão

## Tipografia

- Família: Plus Jakarta Sans (`--font-sans-humanist`)

## Acessibilidade

- Foco: `box-shadow: var(--ring)`
- Movimento reduzido: `@media (prefers-reduced-motion: reduce)`
