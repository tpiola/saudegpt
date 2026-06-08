# AUDITORIA — SaúdeGPT (appfarmacia)

> Gerada em 2026-06-07 · Commit `49413e6`

---

## Arquitetura

| Aspecto | Status |
|---|---|
| **App Router** | ✅ Next.js 16 App Router |
| **Route Groups** | ✅ `(lms)/` com sidebar, `/` sem sidebar (SSR puro) |
| **Server Components** | ✅ Homepage (`page.tsx`) é server component |
| **Client Components** | ~15 componentes marcados `"use client"` (hero-video, animações, quiz, cadastro, etc.) |
| **Estado de gamificação** | Local (React state) + Supabase (via supabase-js) |
| **Estilo** | Tailwind CSS 4 + CSS custom properties |
| **Deploy** | Vercel (projeto `thiagoso/saudegpt-com`) |

## Hospedagem de mídia

| Tipo | Onde | Problema |
|---|---|---|
| **Vídeos** | `assets.mixkit.co` CDN externo | Sem HLS, sem poster, sem lazy-load adequado. 8 vídeos no pool hero. |
| **Imagens** | `images.unsplash.com` | AVIF/WebP configurado, mas `sizes` pode estar ausente em alguns next/image |
| **Fontes** | `next/font` self-hosted | ✅ Swap, subset latino |

## Tutor IA

| Aspecto | Status |
|---|---|
| **Endpoint** | `POST /api/chat` (rota dinâmica) |
| **Modelo** | DeepSeek V4 Flash (via `DEEPSEEK_API_KEY`) |
| **Streaming** | Não verificado — provavelmente não (revisar) |
| **RAG** | ❌ Não implementado — tutor responde da memória do modelo, não indexa as 142 aulas |
| **Rate-limit** | Não verificado — potencial risco de custo |
| **Memória do aluno** | ❌ Não implementado |

## Dívida técnica

1. **Hero-video**: `"use client"` com 3 `useEffect` — poderia ser simplificado com `IntersectionObserver` nativo e menos re-renders
2. **Animacoes.tsx**: Componentes `ScrollReveal` e `FadeUp` — verificar se causam CLS
3. **Page.tsx**: 786 linhas — poderia ser quebrada em seções (HeroSection, GameCenterSection, FeedSection, etc.)
4. **globals.css**: 1885 linhas — contém ~800 linhas de estilos de componentes que poderiam ser Tailwind classes ou módulos CSS
5. **Middleware**: usa `middleware.ts` (deprecated) — Next.js 16 recomenda `proxy` no lugar

## Segurança

| Risco | Gravidade | Ação |
|---|---|---|
| CSP configurado | ✅ Baixo | `script-src 'unsafe-inline'` aceitável para Next.js |
| Chave DeepSeek no Vercel env | ✅ OK | Verificar se não vaza em client-side |
| Rate-limit no `/api/chat` | ⚠️ Médio | Implementar rate-limit para evitar abuso de custo |
| Prompt injection no tutor | ⚠️ Médio | Validar se há sanitização das mensagens do usuário |

## Cobertura de testes

| Tipo | Status |
|---|---|
| Unitários (vitest) | ❌ Nenhum |
| E2E (Playwright) | Playwright configurado, `e2e/` diretório existe, mas provavelmente vazio |
| Acessibilidade (axe) | ❌ Não configurado |
| Lighthouse CI | ❌ Não configurado |

## Pontos fortes

- SSR puro na homepage (conteúdo no HTML, não shell vazio)
- Route groups bem definidos
- Tailwind 4 com design system via `@theme`
- Fontes self-hosted (sem Google Fonts externo)
- AVIF/WebP configurado
- Security headers configurados (CSP, HSTS, etc.)
- Viewport-fit=cover + safe-area-inset
- Touch targets ≥ 44px
- overflow-x-hidden no html + body
- 250 SSG pages sem erros
