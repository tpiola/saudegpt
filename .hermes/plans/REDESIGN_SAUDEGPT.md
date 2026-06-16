# PLANO DE REDESIGN COMPLETO — SaúdeGPT

> **Baseado na análise:** `ANALISE_COMPLETA_CONTEUDO.md`, `AUDITORIA_COMPLETA_SAUDEGPT.md`, `AVALIACAO_COMPLETA.md`
> **Data:** 16 de Junho de 2026
> **Stack:** Next.js 16 + React 19 + TypeScript 6 + Tailwind CSS v4 + Framer Motion 12

---

## 📋 SUMÁRIO EXECUTIVO

O redesign cobre **10 áreas prioritárias** em ~28 arquivos específicos. Cada área é uma etapa independente mas sequencial. O prazo estimado é de **5-7 dias de trabalho** de um desenvolvedor full-stack focado.

---

## 🔴 FASE 0 — FUNDAÇÃO (PRÉ-REDESIGN)

### 0.1 Corrigir bugs críticos da auditoria
| Item | Arquivo | Ação |
|------|---------|------|
| CSS `text-bg-gradient-to-r` inválido | `portal-inicio.tsx` | Substituir por `bg-gradient-to-r bg-clip-text text-transparent` |
| Espaçamentos faltando no hero text | `page.tsx` | Corrigir concatenações sem espaço |
| Diretórios vazios (auth, pagamento) | `(auth)/cadastro/`, `(auth)/login/`, `api/pagamento/` | Remover ou implementar |
| Dados mockados no ranking | `gamificacao-ranking.tsx` | Conectar ao perfil real |

**Arquivos:** `src/components/portal-inicio.tsx`, `src/app/page.tsx`, `src/components/gamificacao-ranking.tsx`

---

## 🟠 FASE 1 — DESIGN SYSTEM & TEMA (Mobile-First + Dark/Light)

### 1.1 Expandir o theme provider
**Arquivo:** `src/lib/theme.tsx`
- Adicionar suporte a 3 modos: `light | dark | system`
- Persistir escolha do usuário no localStorage
- Adicionar transições CSS suaves entre temas
- Garantir que o anti-flash script funcione perfeitamente

### 1.2 Refinar o Design System no globals.css
**Arquivo:** `src/app/globals.css`
- Consolidar variáveis CSS duplicadas (há `--color-forest-*` e `--forest-*`)
- Adicionar tokens de spacing (xs, sm, md, lg, xl)
- Adicionar tokens de typography (display, body, caption, small)
- Adicionar variáveis de borderRadius consistentes
- Padronizar nomes: unificar `--color-emerald-*` com `--green-*` (estão sincronizadas mas confusas)
- Criar classes utilitárias `.text-display`, `.text-body`, `.text-caption`
- Garantir contraste WCAG AA mínimo (4.5:1) em todos os modos

### 1.3 Mobile-first refinements
**Arquivo:** `src/app/globals.css` + `src/app/layout.tsx`
- Garantir `safe-area-inset-*` em todos os lugares
- Touch targets mínimos de 44x44px em botões e links
- Melhorar bottom nav (MobileBottomNav) com `padding-bottom: env(safe-area-inset-bottom)`
- Adicionar `overscroll-behavior: none` no body para evitar bounce indesejado

---

## 🟡 FASE 2 — HERO + VIDEO (GSAP ScrollTrigger)

### 2.1 Instalar GSAP
```bash
npm install gsap @gsap/react
```

### 2.2 Criar VideoHero component
**Novo arquivo:** `src/components/video-hero.tsx`
- Componente de hero com vídeo de fundo em loop (mp4 + poster AVIF)
- Fallback de imagem estática para mobile/data saving
- Parallax scroll via `gsap.timeline()` + `ScrollTrigger`
- Typewriter effect (já existe como `TypewriterSubtitulo`, refatorar para usar GSAP)
- Smooth reveal do conteúdo com `ScrollTrigger.matchMedia()`
- Responsivo: em mobile (<768px), usar apenas imagem estática + gradiente

**Arquivo modificado:** `src/components/hero-section.tsx`
- Integrar `VideoHero` no lugar do background estático atual
- Manter partículas flutuantes (`HeroParticles`) mas otimizadas
- Substituir `framer-motion` scroll animations por `gsap ScrollTrigger`

### 2.3 GSAP ScrollTrigger global
**Novo arquivo:** `src/lib/gsap-register.ts`
```ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
```

### 2.4 Atualizar animações de scroll
**Arquivo:** `src/components/animacoes.tsx`
- Adicionar hook `useGsapReveal()` que usa GSAP + ScrollTrigger
- Manter `ScrollReveal` como fallback para reduced motion
- Adicionar `useGsapCounter()` para contadores animados (XP, streaks, etc.)

---

## 🟢 FASE 3 — GAMIFICAÇÃO / DOPAMINE-DRIVEN DESIGN

### 3.1 Sistema de Streaks visual
**Novo arquivo:** `src/components/gamificacao-streak.tsx`
- Visual de "chamas" (🔥) com contagem de dias consecutivos
- Barra de progresso semanal (7 dias)
- Efeito visual ao completar dia (confete SVG, animação)
- Micro-tip: "Você está em uma streak de X dias! 🎯"

**Arquivo modificado:** `src/app/page.tsx` (seção GamificacaoSection)
- Substituir dados mockados por dados reais (ou fallback visual)
- Adicionar animação de contagem de XP

### 3.2 Micro-leagues / Competição
**Novo arquivo:** `src/components/micro-league.tsx`
- Cards de "liga semanal" com top 5 alunos
- Barra de progresso mostrando posição do usuário
- Timer de countdown mostrando quando a liga reinicia
- Design similar a Duolingo leagues

### 3.3 XP Celebration System
**Arquivo existente:** `src/components/celebracao-xp.tsx`
- Adicionar animação de partículas no gain de XP
- Som de conquista (opcional)
- Badge animado ao subir de nível
- Confete com canvas/partículas

### 3.4 Gamificação na Homepage
**Arquivo modificado:** `src/app/page.tsx`
- Substituir stats fixos por dados reais ou animados
- Seção "Micro-league" preview
- Streak visual card
- Badges desbloqueados preview

---

## 🔵 FASE 4 — ZERO BLANK SPACES

### 4.1 Auditoria de seções vazias
**Arquivos a verificar:**
- `src/app/(auth)/cadastro/` — Implementar página de cadastro
- `src/app/(auth)/login/` — Implementar página de login
- `src/app/api/pagamento/checkout/` — Implementar ou remover
- `src/app/api/pagamento/webhook/` — Implementar ou remover
- `src/styles/` — Remover ou mover conteúdo

### 4.2 Preencher todos os placeholders
- `gamificacao-ranking.tsx` — Substituir dados mockados por dados reais do Supabase ou fallback visual
- `page.tsx` (GamificacaoSection) — Substituir "Nível 5", "1.250 XP" por dados reais
- Todas as seções da homepage devem ter conteúdo real

### 4.3 Skeleton Loading States
**Novo arquivo:** `src/components/skeleton.tsx`
- Skeleton cards para trilhas
- Skeleton para dashboard stats
- Skeleton para ranking
- Garantir que nenhum espaço fique vazio durante carregamento

---

## 🟣 FASE 5 — CLINICAL COPILOT (UPGRADE DO CHAT)

### 5.1 Refatorar ChatBotIA
**Arquivo:** `src/components/chatbot-ia.tsx`
- Renomear para `ClinicalCopilot` (internamente)
- Adicionar quick actions:
  - "Buscar bula" → integração com API de bulas
  - "Calcular dosagem" → calculadora simples (apenas educacional)
  - "Verificar interação" → base de interações medicamentosas
  - "Protocolo ANVISA" → busca em biblioteca regulatória
- Adicionar sugestões contextuais baseadas na trilha atual do aluno
- Melhorar o streaming de resposta com typing indicator aprimorado
- Adicionar suporte a voice input (Web Speech API)
- VoiceOver das respostas (TTS com fallback)

### 5.2 Melhorar system prompt
**Arquivo:** `src/app/api/chat/route.ts`
- Expandir system prompt com:
  - Fontes atualizadas (ANVISA RDC 44/2009, OMS, MS, Cochrane)
  - Regras de segurança reforçadas (sem diagnóstico, sem prescrição)
  - Contexto do aluno (trilha atual, progresso)
  - Tom: acolhedor, técnico, educativo
- Adicionar RAG simples usando o conteúdo das aulas como contexto

### 5.3 Chat Log + Analytics
**Arquivo:** `src/components/chat-log-viewer.tsx`
- Dashboard de uso do chat para o administrador
- Perguntas frequentes analytics
- Taxa de resolução (respostas aceitas)

---

## 🟤 FASE 6 — DIRECTOR DASHBOARD

### 6.1 Admin Dashboard completo
**Arquivo:** `src/app/(lms)/admin/dashboard/page.tsx`
- Métricas agregadas:
  - Total de alunos
  - Alunos ativos (últimos 7/30 dias)
  - Taxa de conclusão geral
  - XP total distribuído
  - Streaks ativas
- Gráficos (recharts já instalado):
  - Novos cadastros (últimos 30 dias) — área chart
  - Distribuição por trilha — pie/bar chart
  - Engajamento diário — line chart
- Export CSV de relatórios
- Filtro por período (7d, 30d, 90d, all)

### 6.2 CRM de alunos
**Arquivo:** `src/components/admin-crm.tsx`
- Tabela com todos os alunos cadastrados
- Status: ativo, streak, último acesso, progresso
- Ações: enviar notificação, resetar progresso
- Busca e filtros

### 6.3 Analytics API
**Novo arquivo:** `src/app/api/admin/stats/route.ts`
- Endpoint que retorna métricas agregadas
- Cache com revalidation a cada 5 minutos
- Protegido por verificação de admin

---

## ⚪ FASE 7 — CRÉDITOS & LOGOS

### 7.1 Atualizar footer com créditos
**Arquivo:** `src/components/SiteFooter.tsx`
- "Criado pelo Farmacêutico **Thiago B. G. Piola** — CRF/SP 58.519"
- "Em parceria com **Rei das Vendas**"
- Logos: R icon + "REI DAS VENDAS" com link
- Link para thiagopiola.com.br

### 7.2 Criar componente de créditos
**Novo arquivo:** `src/components/creditos.tsx`
- Badge "Criado por farmacêutico" com ícone de pílula + chapéu
- Selo CRF/SP 58.519
- Versão mobile-friendly
- Pode ser usado em múltiplos lugares (homepage, footer, about)

### 7.3 Logo "R" Icon + REI DAS VENDAS
**Novo arquivo:** `src/components/logo-rei-das-vendas.tsx`
- SVG do "R" estilizado
- Texto "REI DAS VENDAS" ao lado
- Duas variantes: light/dark
- Tamanhos: sm (24px), md (32px), lg (48px)

### 7.4 Atualizar site config
**Arquivo:** `src/lib/site.ts`
- Garantir que `site.assinatura` seja exibido corretamente
- Adicionar `site.criadoPor` com nome completo do farmacêutico
- Adicionar `site.parceiros` com Rei das Vendas

---

## 🟢 FASE 8 — ANVISA RDC 44/2009 & CONTEÚDO REGULATÓRIO

### 8.1 Selo de conformidade
**Novo arquivo:** `src/components/selo-anvisa.tsx`
- Badge visual: "Conteúdo alinhado à RDC 44/2009"
- Tooltip explicativo sobre a resolução
- Exibir no footer e nas páginas de conteúdo de medicamentos

### 8.2 Disclaimer de saúde
**Arquivo:** `src/app/globals.css` + `src/components/footer.tsx`
- "Este conteúdo é educativo e não substitui consulta médica. Em caso de emergência, ligue 192."
- Texto visível em todas as páginas (footer)
- Destaque visual com ícone de alerta

### 8.3 Anti-empurroterapia
**Nova seção:** Na homepage e nas trilhas
- Conteúdo educativo sobre **atendimento responsável**
- "Atendente de farmácia acolhe, orienta e encaminha — não empurra produto"
- Badge "Anti-empurroterapia ✅"
- Baseado no código de ética farmacêutica e RDC 44/2009

---

## 🔵 FASE 9 — SEO, PERFORMANCE & ACESSIBILIDADE

### 9.1 Performance
- Substituir `framer-motion` onde GSAP pode ser mais leve
- Lazy loading de `recharts` no dashboard admin
- Dynamic imports para componentes pesados (chat, scanner, jogos)
- Otimizar fontes (Inter + DM Sans já carregadas, verificar subset)
- Adicionar `loading="lazy"` em imagens abaixo da dobra

### 9.2 SEO
- Atualizar sitemap com todas as páginas dinâmicas
- Adicionar meta tags `article:published_time` para conteúdo
- Melhorar Schema.org com `hasCourseInstance` e `educationalCredentialAwarded`
- Adicionar `breadcrumbList` schema nas páginas internas

### 9.3 Acessibilidade
- Adicionar `aria-labels` em todos os botões de ação
- Garantir contraste WCAG AA (ratio ≥ 4.5:1)
- Skip link funcional (já existe, verificar)
- Foco visível em todos os elementos interativos
- Suporte a `prefers-reduced-motion` (já existe parcialmente)
- Testar com axe-core

---

## 🟣 FASE 10 — RESPONSIVIDADE & POLISH

### 10.1 Touch optimization
- Garantir que todos os botões tenham `min-height: 44px`, `min-width: 44px`
- Bottom nav com safe area padding
- Carrosséis touch-friendly
- Sheet/modal full-screen em mobile para chat

### 10.2 PWA improvements
- Melhorar manifest (ícones em todos os tamanhos)
- Service worker com cache de páginas estáticas
- Offline fallback page
- Add to home screen prompt

### 10.3 Micro-interações
- Hover magnético em cards (já existe `magnetic-hover` no CSS)
- Loading states com shimmer (já existe `animate-shimmer`)
- Transições de página suaves (View Transitions API)
- Toast notifications para conquistas

---

## 📊 MAPA DE ARQUIVOS

### Arquivos a criar (12):
```
src/components/video-hero.tsx          # Hero com vídeo + GSAP
src/lib/gsap-register.ts              # GSAP + ScrollTrigger registration
src/components/gamificacao-streak.tsx  # Streak visual component
src/components/micro-league.tsx        # Micro-leagues/competição
src/components/skeleton.tsx            # Skeleton loading states
src/components/creditos.tsx            # Créditos do farmacêutico
src/components/logo-rei-das-vendas.tsx # Logo R + REI DAS VENDAS
src/components/selo-anvisa.tsx         # Selo RDC 44/2009
src/app/api/admin/stats/route.ts       # Admin analytics API
src/components/admin-dashboard.tsx     # Dashboard do diretor
src/data/mock-league.ts                # Dados mock para micro-leagues (fallback)
src/hooks/use-gsap-reveal.ts           # Hook GSAP reveal
```

### Arquivos a modificar (16+):
```
src/lib/theme.tsx                      # Expand theme system
src/app/globals.css                    # Refactor design tokens
src/components/hero-section.tsx        # Integrar VideoHero
src/app/page.tsx                       # Update homepage sections
src/app/layout.tsx                     # Mobile refinements
src/components/SiteHeader.tsx          # Header refinements
src/components/SiteFooter.tsx          # Atualizar créditos
src/components/chat-wrapper.tsx        # Rename/update
src/components/chatbot-ia.tsx          # Clinical Copilot upgrade
src/app/api/chat/route.ts              # Melhorar system prompt
src/components/animacoes.tsx           # Add GSAP hooks
src/lib/site.ts                        # Add credit info
src/app/(lms)/admin/dashboard/page.tsx # Admin dashboard
src/components/admin-crm.tsx           # CRM improvements
src/components/mobile-bottom-nav.tsx   # Safe area + polish
src/components/theme-toggle.tsx        # Theme mode selector
```

### Arquivos a instalar:
```
gsap @gsap/react          # Animações premium
```

---

## 📅 ORDEM DE EXECUÇÃO (PRIORIDADE)

| Fase | Etapa | Estimativa | Depende de |
|------|-------|-----------|------------|
| 0 | Bug fixes críticos | 0.5 dia | — |
| 1 | Design System + Tema | 1 dia | Fase 0 |
| 2 | Hero + GSAP Video | 1 dia | Fase 1 |
| 3 | Gamificação | 1 dia | Fase 1 |
| 4 | Zero Blank Spaces | 0.5 dia | Fase 0 |
| 5 | Clinical Copilot | 1 dia | Fase 1 |
| 6 | Director Dashboard | 1 dia | Fase 4 |
| 7 | Créditos & Logos | 0.5 dia | — |
| 8 | ANVISA & Regulatório | 0.5 dia | — |
| 9 | SEO & Performance | 0.5 dia | Fase 1 |
| 10 | Responsividade & Polish | 0.5 dia | Fase 1 |

**Total estimado:** ~7 dias de trabalho

---

## ✅ CRITÉRIOS DE ACEITAÇÃO

Ao final de cada fase, verificar:
1. ✅ Build passa sem erros (`npm run build`)
2. ✅ Zero warnings no TypeScript
3. ✅ Lighthouse Mobile ≥ 90
4. ✅ Responsivo (mobile, tablet, desktop) — sem overflow horizontal
5. ✅ Dark/Light mode funcionando sem FOUC
6. ✅ Sem dados mockados visíveis (usar dados reais ou fallback visual)
7. ✅ Conteúdo alinhado com ANVISA RDC 44/2009
8. ✅ Créditos do farmacêutico visíveis
