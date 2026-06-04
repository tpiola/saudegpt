# 🔍 RELATÓRIO PROFISSIONAL DE AUDITORIA — saudeGPT.com

**Data:** 04/06/2026 | **URL:** https://www.saudegpt.com | **Versão:** e26fc8d
**Ferramentas:** curl, openssl, Python, Browser, análise de código-fonte

---

## 📊 SUMÁRIO EXECUTIVO

| Métrica | Resultado | Status |
|:--|:--:|:--:|
| Páginas funcionando | 23/23 (100%) | ✅ |
| Páginas SSG geradas | 250 | ✅ |
| Aulas totais | 142+ (em 6 trilhas) | ✅ |
| Tempo de resposta | 53ms | ✅ |
| SSL válido | Até 29/Ago/2026 | ✅ |
| HSTS ativo | max-age=63072000 | ✅ |
| Sitemap URLs | 228 | ✅ |
| Google Search Console | Configurado | ✅ |
| JSON-LD Schema | ❌ Ausente | 🔴 |
| Canonical URL | ❌ Ausente | 🔴 |
| "use client" excessivo | 44 componentes | 🟡 |

---

## 🔴 CRÍTICOS (devem ser corrigidos imediatamente)

### C1 — JSON-LD / Schema.org Ausente
**Severidade:** 🔴 Crítico (SEO)
**Local:** Todas as páginas
**Problema:** Nenhum structured data (JSON-LD) é injetado no HTML. Google não reconhece o conteúdo como `Course`, `EducationalOccupationalCredential` ou `Organization`.
**Impacto:** Perde rich snippets nos resultados de busca (estrelas, preço, duração do curso).
**Solução:** O componente `JsonLdCourse` existe em `src/components/json-ld-course.tsx` mas não está sendo renderizado em todas as páginas. Verificar import e renderização no layout.

### C2 — Sitemap Domain Mismatch
**Severidade:** 🔴 Crítico (SEO)
**Local:** `robots.txt` → `sitemap.xml`
**Problema:** Sitemap é servido em `saudegpt.com/sitemap.xml` (sem www) mas o site é acessado via `www.saudegpt.com`. O `getSiteUrl()` retorna `https://saudegpt.com` como fallback.
**Impacto:** Google pode indexar URLs sem www enquanto os usuários acessam com www — split de autoridade.
**Solução:** Adicionar env var `NEXT_PUBLIC_SITE_URL=https://www.saudegpt.com` na Vercel.

### C3 — Sitemap Não Lista Páginas de Aula
**Severidade:** 🔴 Crítico (SEO)
**Local:** `sitemap.ts`
**Problema:** Sitemap contém 228 URLs (todas as páginas SSG), mas a estrutura do Next.js com `generateStaticParams` gera páginas de aula que podem não estar sendo incluídas no sitemap se a função `listarAulas()` não for chamada no sitemap.
**Solução:** Verificar se `sitemap.ts` está iterando TODAS as rotas incluindo aulas.

---

## 🟡 IMPORTANTES (afetam conversão e credibilidade)

### I1 — Paletas de Cores Mistas
**Severidade:** 🟡 Importante (Design)
**Local:** Múltiplos componentes
**Problema:** O projeto tem 3 paletas convivendo:
- **Forest/Green/Orange** (principal, globals.css)
- **Midnight/Emerald/Slate** (ui/button.tsx, ui/card.tsx — do shadcn)
- **Amber/Purple/Yellow** (badge-sistema.tsx, hormonios page)
**Impacto:** Inconsistência visual — botões e cards têm cores diferentes em cada parte do site.
**Solução:** Unificar para Forest/Green/Orange em todos os componentes. Substituir `bg-emerald-500` → `bg-orange-500`, `text-midnight-900` → `text-foreground`.

### I2 — "vendas" em Arquivos de Conteúdo
**Severidade:** 🟡 Importante (Conteúdo)
**Local:** `trilha-novas.ts` (2 ocorrências), `trilha-encantamento.ts` (1 + comentário)
**Problema:** Termo "vendas" aparece em conteúdo e comentários. Política do site é NUNCA falar de vendas — sempre "cuidado" / "encantamento".
**Solução:** Substituir nos textos visíveis: "aumentou as vendas" → "melhorou o atendimento", "51% vendas" → "51% atendimento". Comentários de arquivo são aceitáveis.

### I3 — Manifest WebPWA com Tema Azul
**Severidade:** 🟡 Importante (PWA)
**Local:** `public/manifest.webmanifest`
**Problema:** `theme_color: "#2563eb"` (azul) em vez de forest green. Apenas 1 ícone SVG — Android/iOS não suportam SVG como ícone PWA.
**Solução:** Mudar `theme_color` para `#0d3a32` e gerar PNG 192x192 + 512x512.

### I4 — "use client" em 44 Componentes
**Severidade:** 🟡 Importante (Performance)
**Local:** 44 componentes em `src/components/`
**Problema:** Excessivo uso de `"use client"` impede SSR e aumenta bundle do cliente. Componentes abaixo do fold poderiam ser server components.
**Solução:** Revisar cada componente — apenas os que usam hooks/eventos precisam ser client.

### I5 — Glass-premium Classes Customizadas
**Severidade:** 🟡 Importante (Manutenibilidade)
**Local:** `src/app/page.tsx` (10 ocorrências)
**Problema:** Classes CSS customizadas (`glass-premium`, `gradient-border-wrap`) usadas na home page que não estão definidas em `globals.css` — são herdadas de estilos anteriores.
**Solução:** Ou definir em globals.css, ou substituir por classes Tailwind padrão.

---

## 🔵 SUGESTÕES DE MELHORIA

### S1 — Adicionar Canonical URL
**Severidade:** 🔵 Sugestão (SEO)
**Problema:** Nenhum `<link rel="canonical">` presente no HTML.
**Solução:** Adicionar via `metadata` no `layout.tsx`: `alternates: { canonical: getSiteUrl() }`.

### S2 — Google Search Console
**Severidade:** 🔵 Sugestão (SEO)
**Problema:** Código de verificação comentado no layout.tsx.
**Solução:** Descomentar e adicionar o código real do Search Console.

### S3 — Skeleton Loading na Home
**Severidade:** 🔵 Sugestão (UX)
**Problema:** A home page usa um componente `"use client"` que pode mostrar skeleton para novos visitantes.
**Solução:** Renderizar conteúdo de marketing imediatamente (SSR) e fazer auth check em background.

### S4 — Badges com Cores Fora da Paleta
**Severidade:** 🔵 Sugestão (Design)
**Local:** `badge-sistema.tsx`
**Problema:** Badges usam amber/purple/yellow — cores que não existem no design system.
**Solução:** Substituir por forest/green/orange com variações de opacidade.

---

## ✅ PONTOS FORTES (manter)

### T1 — SSL e Segurança
- ✅ Certificado Let's Encrypt válido até 29/08/2026
- ✅ HSTS ativo (max-age=63072000)
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ Referrer-Policy configurada

### T2 — Performance
- ✅ Response time: 53ms (excelente)
- ✅ Vercel CDN edge caching (gru1 - Brasil)
- ✅ Cache-Control headers configurados
- ✅ SSG para 250 páginas estáticas

### T3 — Cobertura de Conteúdo
- ✅ 6 trilhas com 142+ aulas
- ✅ 23 páginas funcionando (100% 200 OK)
- ✅ Dashboard, Chatbot, Pagamento implementados
- ✅ Gamificação (XP, badges, streak, ranking)

### T4 — SEO Básico
- ✅ Viewport meta configurado
- ✅ Open Graph tags (title, description, image)
- ✅ Twitter card (summary_large_image)
- ✅ Sitemap.xml com 228 URLs
- ✅ Robots.txt configurado
- ✅ Meta description presente

### T5 — Acessibilidade
- ✅ Skip link (Pular para o conteúdo)
- ✅ ARIA labels em elementos interativos
- ✅ Alt text em todas as imagens (0 sem alt)
- ✅ Role="tablist" em filtros

---

## 📋 AÇÕES PRIORIZADAS

| # | Ação | Prioridade | Esforço | Impacto |
|:--|:--|:--:|:--:|:--:|
| 1 | Adicionar JSON-LD Schema (JsonLdCourse) | 🔴 Crítica | 15min | SEO |
| 2 | Corrigir Sitemap domain para www | 🔴 Crítica | 5min | SEO |
| 3 | Adicionar canonical URL | 🔴 Crítica | 5min | SEO |
| 4 | Unificar paletas de cores | 🟡 Alta | 2h | Design |
| 5 | Substituir "vendas" no conteúdo | 🟡 Alta | 30min | Conteúdo |
| 6 | Corrigir manifest PWA (cor + PNG) | 🟡 Alta | 30min | PWA |
| 7 | Revisar "use client" excessivo | 🟡 Média | 2h | Performance |
| 8 | Adicionar Google Search Console | 🔵 Média | 10min | SEO |

---

## 💻 DIAGNÓSTICO TÉCNICO

```
SSL:        Let's Encrypt YR2 → www.saudegpt.com (valido ate Aug 2026) ✅
HTTP:       200, Server: Vercel, Cache: HIT ✅
Response:   53ms (CDN edge - gru1 Brasil) ✅
Page Size:  118KB (HTML) ✅
Sitemap:    228 URLs, dominio: saudegpt.com ⚠️ (sem www)
Manifest:   theme_color #2563eb (azul) ⚠️ (deveria ser forest)
JSON-LD:    Ausente ❌
Canonical:  Ausente ❌
GSC:        Configurado mas comentado ⚠️
Alt texts:  100% presente ✅
"use client": 44 componentes ⚠️
Cores:      3 paletas diferentes ⚠️
Páginas 404: 0 ✅
```

---

*Relatório gerado automaticamente por Hermes Agent usando skills: site-audit, dogfood, educational-platform-audit.*
