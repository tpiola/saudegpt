# Auditoria Completa — SaúdeGPT (saudegpt.com)

> Projeto: `/opt/data/projects/appfarmacia`
> Data: Junho 2026
> 284 páginas SSG, Next.js 16, React 19, TypeScript 6

---

## SUMÁRIO

| Categoria | Críticos | Médios | Baixos | Total |
|-----------|----------|--------|--------|-------|
| Rotas quebradas | 4 | 0 | 1 | 5 |
| Diretórios vazios | 0 | 4 | 0 | 4 |
| Emojis em vez de SVG | 0 | 11 | 6 | 17 |
| Dead code (arquivos não usados) | 0 | 5 | 3 | 8 |
| Erros de TypeScript | 0 | 0 | 0 | 0 |
| Acessibilidade | 1 | 2 | 3 | 6 |
| Imagens quebradas | 0 | 0 | 0 | 0 |
| Conteúdo placeholder | 0 | 1 | 1 | 2 |
| SSG oportunidades | 0 | 0 | 2 | 2 |
| Design system | 0 | 1 | 0 | 1 |
| SEO | 0 | 1 | 3 | 4 |
| Bundle/Lazy loading | 0 | 1 | 2 | 3 |
| Orphan pages | 0 | 0 | 1 | 1 |
| **TOTAL** | **5** | **26** | **22** | **53** |

---

## 1. 🚫 ROTAS QUEBRADAS (404)

### 🔴 CRÍTICO 1.1 — `/api/pagamento/checkout` (empty → 404)
- **Arquivo:** `src/app/api/pagamento/checkout/` (diretório vazio, sem route.ts)
- **Gravidade:** Crítica
- **Problema:** Rota de API vazia sem `route.ts`. Se chamada, retorna 404.
- **Sugestão:** Implementar route.ts ou remover diretório.

### 🔴 CRÍTICO 1.2 — `/api/pagamento/webhook` (empty → 404)
- **Arquivo:** `src/app/api/pagamento/webhook/` (diretório vazio, sem route.ts)
- **Gravidade:** Crítica
- **Sugestão:** Implementar route.ts ou remover diretório.

### 🔴 CRÍTICO 1.3 — `/forum/[categoriaId]` renderizado como Dynamic (ƒ) em vez de SSG
- **Arquivo:** `src/app/(lms)/forum/[categoriaId]/page.tsx` (linha 1: `"use client"`)
- **Gravidade:** Crítica (impacto SEO)
- **Problema:** A página é client-side com `usePerfilAluno()`, impedindo SSG. Conteúdo do fórum é seed estático em `src/content/forum.ts`.
- **Sugestão:** Separar parte de autenticação como client component e tornar o resto SSG com `generateStaticParams`.

### 🔴 CRÍTICO 1.4 — `/forum/[categoriaId]/[postId]` renderizado como Dynamic (ƒ)
- **Arquivo:** `src/app/(lms)/forum/[categoriaId]/[postId]/page.tsx`
- **Gravidade:** Crítica
- **Problema:** Mesmo do item 1.3 — conteúdo seed estático, mas renderizado como dynamic.
- **Sugestão:** SSG com `generateStaticParams`.

### 🟡 MÉDIO 1.5 — `/medicamentos-guia` não referenciado em nenhum menu
- **Arquivo:** `src/app/(lms)/medicamentos-guia/page.tsx` (existe como página)
- **Gravidade:** Média
- **Problema:** Página existe mas não aparece na sidebar (`navegacao-lms.ts`), nem no `navPrincipal` (`site.ts`), nem no footer. Inalcançável por navegação.
- **Sugestão:** Adicionar à navegação LMS ou remover a página.

---

## 2. 📁 DIRETÓRIOS VAZIOS (CAUSAM REDIRECT/404)

### 🟡 MÉDIO 2.1 — `src/app/(auth)/cadastro/`
- **Problema:** Diretório vazio sem page.tsx. Rota `/cadastro` retorna 404.
- **Sugestão:** Adicionar página de cadastro ou remover.

### 🟡 MÉDIO 2.2 — `src/app/(auth)/login/`
- **Problema:** Diretório vazio sem page.tsx. Rota `/login` retorna 404.
- **Sugestão:** Adicionar página de login ou remover.

### 🟡 MÉDIO 2.3 — `src/app/api/pagamento/checkout/`
- **Problema:** Diretório vazio, sem route.ts.
- **Sugestão:** Implementar ou remover.

### 🟡 MÉDIO 2.4 — `src/app/api/pagamento/webhook/`
- **Problema:** Diretório vazio, sem route.ts.
- **Sugestão:** Implementar ou remover.

### 🟢 BAIXO 2.5 — `src/app/matriculas/`
- **Problema:** Diretório vazio, MAS tem redirect em `next.config.ts:91` para `/`.
- **Sugestão:** OK por enquanto (redirect existe), mas idealmente remover o diretório e manter só o redirect.

---

## 3. 😀 EMOJIS EM VEZ DE SVG ICONS

### 🟡 MÉDIO 3.1 — `ranking-board.tsx:17-18`
```tsx
const CROWN = ["👑", "🥈", "🥉"];
const MEDAL = ["🥇", "🥈", "🥉"];
```
- **Gravidade:** Média
- **Sugestão:** Substituir por SVGs do `lucide-react` ou ícones customizados.

### 🟡 MÉDIO 3.2 — `ranking-board.tsx:131,146,161,193`
- **Arquivo:** `src/components/ranking-board.tsx`
- **Problema:** Emojis `🥈`, `👑`, `🥉` usados como conteúdo.
- **Sugestão:** SVG icons.

### 🟡 MÉDIO 3.3 — `trophy.tsx:82,87`
```tsx
★
🏆 {titulo}
```
- **Arquivo:** `src/components/trophy.tsx`
- **Sugestão:** Substituir por SVG icons.

### 🟡 MÉDIO 3.4 — `gamificacao-visual.tsx` (várias linhas)
- **Arquivo:** `src/components/gamificacao-visual.tsx:38,110,114,139,156,198`
- **Problema:** Emojis `⭐✨💫🌟🔥🎉` usados como recompensas visuais.
- **Sugestão:** Criar componentes SVG animados para cada recompensa.

### 🟡 MÉDIO 3.5 — `prova-modulo.tsx:129,401,485,489`
- **Arquivo:** `src/components/prova-modulo.tsx`
- **Problema:** `❌💡✅` em alertas e indicadores de progresso.
- **Sugestão:** Substituir por SVGs de `lucide-react` (XCircle, Lightbulb, CheckCircle).

### 🟡 MÉDIO 3.6 — `gamificacao-ranking.tsx:17-21,56,70,92,95,131,154-160`
- **Arquivo:** `src/components/gamificacao-ranking.tsx`
- **Problema:** Múltiplos emojis em badges mockados (`🔥⭐🏅📚🥇🥈🥉👑`).
- **Sugestão:** Badges SVG do design system.

### 🟡 MÉDIO 3.7 — `osce-simulador.tsx:202,206,419`
- **Arquivo:** `src/components/osce-simulador.tsx`
- **Problema:** `✅❌💡`
- **Sugestão:** SVGs.

### 🟡 MÉDIO 3.8 — `celebracao-modal.tsx:9-16,128,159,168`
- **Arquivo:** `src/components/celebracao-modal.tsx`
- **Problema:** Emojis em mensagens de celebração (`🚀🔥⚡👑🌟🎯💪🏆🎉🏅`).
- **Sugestão:** SVGs + texto estilizado.

### 🟡 MÉDIO 3.9 — `animacao-insulina.tsx:88,188,394,405`
- **Arquivo:** `src/components/animacao-insulina.tsx`
- **Problema:** `✅❌✕💉🚫`
- **Sugestão:** SVGs.

### 🟡 MÉDIO 3.10 — `badge-sistema.tsx:409`
- **Arquivo:** `src/components/badge-sistema.tsx`
- **Problema:** `✨⭐💫🌟`
- **Sugestão:** SVGs.

### 🟡 MÉDIO 3.11 — `jogo-quiz.tsx:257`
- **Arquivo:** `src/components/jogo-quiz.tsx`
- **Problema:** `✅💡`
- **Sugestão:** SVGs.

### 🟢 BAIXO 3.12 — `trilhas/page.tsx:194-195`
- **Arquivo:** `src/app/(lms)/trilhas/page.tsx`
- **Problema:** `🧑‍⚕️` em badge de "Sempre consulte o farmacêutico".
- **Sugestão:** SVG icon de usuário com cruz.

### 🟢 BAIXO 3.13 — `modulo-completo.tsx:44,65`
- **Arquivo:** `src/components/modulo-completo.tsx`
- **Problema:** `🎉★`
- **Sugestão:** SVGs.

### 🟢 BAIXO 3.14 — `secao-depoimentos.tsx:70`
- **Arquivo:** `src/components/secao-depoimentos.tsx`
- **Problema:** `★` para estrelas.
- **Sugestão:** SVG star icon.

### 🟢 BAIXO 3.15 — `chat-log-viewer.tsx:218` | `termo-consentimento.tsx:152`
- **Arquivo:** `src/components/chat-log-viewer.tsx`, `src/components/termo-consentimento.tsx`
- **Problema:** `⚠️`
- **Sugestão:** SVG alert icon.

### 🟢 BAIXO 3.16 — `simulador.tsx:194` | `trilha-nivel-filtro.tsx:209`
- **Arquivo:** `src/components/simulador.tsx`, `src/components/trilha-nivel-filtro.tsx`
- **Problema:** `💡🎬`
- **Sugestão:** SVGs.

### 🟢 BAIXO 3.17 — `forum/post-card.tsx:18` | `forum/reply-item.tsx:27`
- **Arquivo:** `src/components/forum/post-card.tsx`, `src/components/forum/reply-item.tsx`
- **Problema:** `⚠️🗑️`
- **Sugestão:** SVGs.

---

## 4. 🗑️ DEAD CODE — ARQUIVOS NÃO UTILIZADOS

### 🟡 MÉDIO 4.1 — `src/components/secao-cta-final.tsx`
- **Problema:** Não importado em nenhum arquivo do projeto.

### 🟡 MÉDIO 4.2 — `src/components/section-video.tsx`
- **Problema:** Não importado em nenhum arquivo.

### 🟡 MÉDIO 4.3 — `src/components/secao-depoimentos.tsx`
- **Problema:** Não importado (prova-social.tsx é usado em seu lugar).

### 🟡 MÉDIO 4.4 — `src/components/secao-estatisticas.tsx`
- **Problema:** Não importado em nenhum arquivo.

### 🟡 MÉDIO 4.5 — `src/components/GuiaGPT.tsx`
- **Problema:** Componente não importado.

### 🟢 BAIXO 4.6 — `src/components/WhatsAppFloat.tsx`
- **Problema:** Componente não importado (whatsapp-button.tsx também existe).

### 🟢 BAIXO 4.7 — `src/components/banner-patrocinio.tsx`
- **Problema:** Não importado.

### 🟢 BAIXO 4.8 — `src/components/whatsapp-button.tsx`
- **Problema:** Não importado (redundante com WhatsAppFloat.tsx).

---

## 5. ✅ ERROS DE TYPESCRIPT

- **Status:** NENHUM erro de TypeScript (`tsc --noEmit` → 0 erros)
- **Parabéns!** Configuração `strict: true` em `tsconfig.json` e código limpo.

---

## 6. 📦 DEPENDÊNCIAS

- **Problemas detectados:** Nenhum crítico.
- **Notas:**
  - Next.js 16.2.7, React 19.2.7, TypeScript 6.0.3 — tudo recente.
  - `@supabase/supabase-js` ^2.108.0 — ok.
  - `framer-motion` ^12.40.0 — ok.
  - Overrides para `tar`, `undici`, `esbuild`, `path-to-regexp`, etc. — boa prática de segurança.
  - Dependência `sharp` ^0.34.5 incluída (ideal para Next.js images).
- **Sugestão:** Rodar `npx npm-check-updates` periodicamente para manter-se atualizado.

---

## 7. ♿ ACESSIBILIDADE

### 🔴 CRÍTICO 7.1 — `portal-inicio.tsx:37,149` — alt="" em imagens decorativas
- **Arquivo:** `src/components/portal-inicio.tsx`
- **Problema:** Duas imagens com `alt=""`. Embora decorativas seja aceitável, o conteúdo visual é parte da identidade da página.
- **Sugestão:** Adicionar `alt` descritivo ou usar `aria-hidden="true"` no container.

### 🟡 MÉDIO 7.2 — Faltam aria-labels em botões de ação
- **Arquivo:** Múltiplos componentes (gamificacao-ranking.tsx, simulador.tsx, provo-modulo.tsx)
- **Problema:** Botões de ação semaria-label ou aria-describedby.
- **Sugestão:** Revisar todos os `button` e `<a>` sem texto visível.

### 🟡 MÉDIO 7.3 — Contraste de cores insuficiente em alguns textos
- **Arquivo:** `portal-inicio.tsx:275` — cor `rgba(255,255,255,0.25)` para texto
- **Problema:** Textos com opacidade muito baixa (`0.15`, `0.25`) podem falhar no contraste WCAG AA.
- **Sugestão:** Garantir ratio de contraste ≥ 4.5:1.

### 🟢 BAIXO 7.4 — `hero-section.tsx:63` — `aria-hidden` sem `aria-label`
- **Arquivo:** `src/components/hero-section.tsx`
- **Problema:** Partículas decorativas com `aria-hidden` — ok, mas sem fallback textual.

### 🟢 BAIXO 7.5 — Emojis como conteúdo sem role="img" ou aria-label
- **Arquivo:** Múltiplos (ver seção 3)
- **Problema:** Leitores de tela podem interpretar emojis incorretamente.
- **Sugestão:** Usar `<span role="img" aria-label="descrição">emoji</span>` ou substituir por SVGs.

### 🟢 BAIXO 7.6 — Skip link existe mas pode não ser visível em foco
- **Arquivo:** `src/app/layout.tsx:148-153`
- **Problema:** Skip link "Pular para o conteúdo" usa `sr-only focus:not-sr-only` — correto, mas precisa verificar funcionamento real.

---

## 8. 🖼️ IMAGENS QUEBRADAS

- **Status:** NENHUMA imagem quebrada detectada no build.
- **Observação:** Todas as imagens em `/public/` têm pares `.jpg`/`.webp`. Build bem-sucedido com 284 páginas SSG.
- 42 imagens de produtos em `public/imagens/produtos/` — boas práticas.

---

## 9. 📝 CONTEÚDO PLACEHOLDER

### 🟡 MÉDIO 9.1 — `gamificacao-ranking.tsx` — Dados mockados
- **Arquivo:** `src/components/gamificacao-ranking.tsx:17-21`
- **Problema:** Ranking usa dados mockados fixos (`"Ana Beatriz"`, `"Carlos Eduardo"`, etc.) com XP e badges inventados.
- **Sugestão:** Substituir por dados reais do Supabase ou localStorage do aluno.

### 🟢 BAIXO 9.2 — Dashboard stats placeholder
- **Arquivo:** `src/app/page.tsx:153-156`
- **Problema:** Valores fixos: "Nível 5", "1.250 XP", "7 dias", "8/12 badges".
- **Sugestão:** Conectar ao perfil real do aluno via `usePerfilAluno()`.

---

## 10. ⚡ OPORTUNIDADES DE SSG

### 🟢 BAIXO 10.1 — `/forum/[categoriaId]` poderia ser SSG
- **Arquivo:** `src/app/(lms)/forum/[categoriaId]/page.tsx`
- **Problema:** Usa `"use client"` por causa de `usePerfilAluno()`, mas conteúdo é estático.
- **Sugestão:** Criar Server Component wrapper com SSG + client component de autenticação.

### 🟢 BAIXO 10.2 — `/forum/[categoriaId]/[postId]` poderia ser SSG
- **Arquivo:** `src/app/(lms)/forum/[categoriaId]/[postId]/page.tsx`
- **Problema:** Mesmo do item 10.1.
- **Sugestão:** SSG com dados seed + client component para interatividade.

---

## 11. 🎨 DESIGN SYSTEM — INCONSISTÊNCIAS

### 🟡 MÉDIO 11.1 — `text-bg-gradient-to-r` (classe inválida no Tailwind v4)
- **Arquivo:** `src/components/portal-inicio.tsx:370,453,494,574,666`
- **Problema:** `text-bg-gradient-to-r from-green-500 to-green-600` — esta classe **não existe** no Tailwind CSS v4. O efeito de gradiente em texto requer `bg-gradient-to-r bg-clip-text text-transparent`.
- **Impacto:** O gradiente não é aplicado — o texto fica verde sólido.
- **Sugestão:** Substituir por:
  ```tsx
  <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
  ```

### 🟢 BAIXO 11.2 — Cores hardcoded vs CSS variables
- **Arquivo:** `portal-inicio.tsx` (uso extensivo de `style={{ color: "rgba(...)" }}`)
- **Problema:** Vários estilos inline usam cores fixas em vez das variáveis CSS do design system (`--color-forest-500`, `--color-emerald-500`, etc.).
- **Sugestão:** Usar classes Tailwind ou variáveis CSS para consistência.

### 🟢 BAIXO 11.3 — Sombras com `rgba(16, 185, 129, ...)` hardcoded
- **Arquivo:** `src/app/globals.css:153-159`
- **Problema:** Shadows usam valor RGB do emerald fixo. Consistente, mas sem fallback.
- **Sugestão:** Usar `var()` para as cores.

---

## 12. 🔍 SEO — FALTA DE META TAGS

### 🟡 MÉDIO 12.1 — Páginas sem `description` ou `title` específico
- **Verificado:** Todas as 30+ páginas têm `metadata` exportado com `title` e `description` — **bom**.
- **Arquivo:** `src/app/(lms)/admin/page.tsx` — verificar se tem meta tags.

### 🟢 BAIXO 12.2 — Sitemap não inclui `/medicamentos-guia`
- **Arquivo:** `src/app/sitemap.ts`
- **Problema:** `/medicamentos-guia` não consta no sitemap (também não está na navegação).
- **Sugestão:** Adicionar ao sitemap ou remover página.

### 🟢 BAIXO 12.3 — Sitemap não inclui `/diabetes`, `/hormonios`, `/pressao-arterial`
- **Arquivo:** `src/app/sitemap.ts`
- **Problema:** Essas páginas existem mas não estão no sitemap.
- **Sugestão:** Adicionar ao ESTATICAS no sitemap.ts.

### 🟢 BAIXO 12.4 — Sitemap não inclui `/osc`, `/suporte`, `/forum`, `/scanner`
- **Arquivo:** `src/app/sitemap.ts`
- **Problema:** Múltiplas páginas faltando no sitemap.
- **Sugestão:** Revisar o array ESTATICAS e incluir todas as rotas públicas.

---

## 13. 📦 LAZY LOADING

### 🟡 MÉDIO 13.1 — `chat-wrapper.tsx` carregado em TODAS as páginas
- **Arquivo:** `src/app/layout.tsx:166`
- **Problema:** `ChatWrapper` é importado estaticamente no layout raiz e renderizado em TODAS as 284+ páginas, mesmo quando o usuário não interage.
- **Sugestão:** Usar `next/dynamic` com `ssr: false` para lazy loading do chat.

### 🟢 BAIXO 13.2 — `framer-motion` importado estaticamente
- **Arquivo:** `src/components/hero-section.tsx` e outros
- **Problema:** `framer-motion` é um pacote pesado (~30KB gzip). Vários componentes o importam diretamente.
- **Sugestão:** Usar `next/dynamic` para componentes que usam framer-motion.

### 🟢 BAIXO 13.3 — `recharts` provavelmente pesado
- **Arquivo:** `package.json:35` — `recharts: ^3.8.1`
- **Problema:** `recharts` é uma das maiores bibliotecas de gráficos (~100KB+). Verificar se é usado em páginas que poderiam ser mais leves.
- **Sugestão:** Considerar substituir por SVG nativo ou `lightweight-charts`.

---

## 14. 🧭 ROTAS NO MENU QUE PODEM DAR 404

### ✅ ROTA OK — `/trilhas/encantamento`
- **Arquivo:** `src/lib/navegacao-lms.ts:52` (sidebar)
- **Status:** ✅ Funciona. A trilha `encantamento` existe em `src/content/trilha-encantamento.ts` com `id: "encantamento"`.

### ✅ ROTA OK — `/dashboard` (SiteHeader)
- **Status:** ✅ Funciona.

### ✅ ROTA OK — Todas as rotas do `navPrincipal` e `secoesNavLms` existem.

---

## 15. RESUMO DE AÇÕES PRIORITÁRIAS

### 🔴 Fazer imediatamente:
1. Implementar ou remover `api/pagamento/checkout/` e `api/pagamento/webhook/`
2. Corrigir `text-bg-gradient-to-r` → `bg-gradient-to-r bg-clip-text text-transparent` em `portal-inicio.tsx` (5 ocorrências)
3. Adicionar lazy loading (`next/dynamic`) no `ChatWrapper` no layout raiz
4. Adicionar `alt` descritivo nas imagens do `portal-inicio.tsx`

### 🟡 Fazer em seguida:
5. Substituir emojis por SVGs nos componentes de gamificação (ranking-board, gamificacao-visual, celebracao-modal, etc.)
6. Adicionar páginas faltantes ao sitemap
7. Adicionar `/medicamentos-guia` à navegação
8. Implementar SSG para páginas do fórum
9. Remover arquivos não utilizados (secao-cta-final, section-video, secao-depoimentos, secao-estatisticas, GuiaGPT, WhatsAppFloat, banner-patrocinio, whatsapp-button)

### 🟢 Fazer quando possível:
10. Substituir dados mockados do ranking por dados reais
11. Conectar dashboard a dados reais do aluno
12. Adicionar aria-labels em todos os botões sem texto
13. Melhorar contraste em textos com opacidade < 0.4
14. Remover diretórios vazios (auth/cadastro, auth/login)
