# AUDITORIA COMPLETA — SaúdeGPT
**Data:** 19/06/2026  
**Versão do código:** auditoria completa de todas as páginas, componentes, conteúdo e assets

---

## 1. PÁGINAS EXISTENTES vs VAZIAS/PLACEHOLDER

### ✅ Páginas COMPLETAS e COM CONTEÚDO REAL (35 de 42)

| Rota | Status | Tamanho | Conteúdo |
|------|--------|---------|----------|
| `/` (home) | ✅ Completa | 737 linhas | Hero, cursos, depoimentos, CTA, animações |
| `/trilhas` | ✅ Completa | 372 linhas | Grid de 7 trilhas, "Sabia que?" cards, CTA |
| `/trilhas/[id]` | ✅ Completa | 312 linhas | Hero por trilha, módulos, filtro, farmacêutico |
| `/trilhas/[id]/[moduloId]` | ✅ Completa | 288 linhas | Lista de aulas, prova, progresso |
| `/aula/[trilhaId]/[aulaId]` | ✅ Completa | 229 linhas | Breadcrumb, badges, professor, vídeo, quiz, infográficos |
| `/dashboard` | ✅ Completa | 25 linhas | DashboardAlunoLazy (client component robusto) |
| `/desempenho` | ✅ Completa | 17 linhas | Client component de métricas |
| `/jogos` | ✅ Completa | 281 linhas | 9 jogos: tarjas, receitas, sintomas, velocidade, fato/fake, sobrevivência, cenário, stop, forca |
| `/jogos/ranking` | ✅ Completa | 523 linhas | Ranking do jogador com XP, nível, streak, medalhas SVG |
| `/missoes` | ✅ Completa | 77 linhas | Simulador de balcão, missões semanais |
| `/ranking` | ✅ Completa | 80 linhas | RankingBoard + GamificacaoRanking |
| `/prova/[trilhaId]/[moduloId]` | ✅ Completa | — | Provas de módulo |
| `/comando-diario` | ✅ Completa | 64 linhas | Checklist operacional |
| `/diabetes` | ✅ Completa | 398 linhas | Guia completo: tipos, sintomas, medicamentos, balcão |
| `/pressao-arterial` | ✅ Completa | 472 linhas | Guia: SBC 2026, DASH, farmacêutico |
| `/hormonios` | ✅ Completa | 408 linhas | Guia: tireoide, sexuais, insulina, cortisol |
| `/medicamentos-guia` | ✅ Completa | 707 linhas | Controlados, GLP-1, armazenamento, interações |
| `/leitura-rapida` | ✅ Completa | 588 linhas | Framework ABC, exercícios práticos |
| `/saude-mental` | ✅ Completa | 394 linhas | Protocolo ALG, CVV, frases que acolhem |
| `/cuidado-humanizado` | ✅ Completa | 85 linhas | Escuta ativa, empatia, CNV |
| `/literacia-digital` | ✅ Completa | 354 linhas | Apps, dispositivos, e-commerce, LGPD |
| `/curiosidades` | ✅ Completa | 373 linhas | Emagrecimento, pressão, coração |
| `/biblioteca` | ✅ Completa | 116 linhas | Biblioteca regulatória ANVISA |
| `/bulas-receitas` | ✅ Completa | 175 linhas | Metodologia visual, checklist, ANVISA |
| `/bulas` | ✅ Completa (texto descritivo) | 68 linhas | Página informativa (sem consulta integrada) |
| `/forum` | ✅ Completa | 82 linhas | Categorias, stats, novo post |
| `/forum/[categoriaId]` | ✅ Completa | 126 linhas | Posts por categoria |
| `/forum/[categoriaId]/[postId]` | ✅ Completa | 74 linhas | Thread com replies |
| `/osce` | ✅ Completa | 25 linhas | Simulação OSCE |
| `/osce-pratico` | ✅ Completa | — | OSCE prática |
| `/sobre` | ✅ Completa | — | Sobre o curso |
| `/contato` | ✅ Completa | — | Contato |
| `/privacidade` | ✅ Completa | — | Política de privacidade |
| `/termos` | ✅ Completa | — | Termos de uso |
| `/lgpd` | ✅ Completa | — | LGPD |

### ⚠️ Páginas PARCIALMENTE IMPLEMENTADAS (3)

| Rota | Problema |
|------|----------|
| `/mentoria` | MOCK — dados de mentores fixos, localStorage, sem backend real. Calendário funcional mas dados fictícios |
| `/scanner` | Funcional (scanner de código de barras) mas usa `scanner-floating-button.tsx` — verificar se o backend de produtos está ativo |
| `/aguardando-aprovacao` | Página estática de "aguardando aprovação" — correta para o fluxo de cadastro |

### ⚠️ Páginas com dados MOCK (2)

| Rota | Problema |
|------|----------|
| `/jogos/ranking` | Gera 12 nomes mock (Carlos Farmacêutico, Ana Atendente...) com XP aleatório via localStorage |
| `/mentoria` | 3 mentores mock (Dr. Thiago Piola, Dra. Camila Oliveira, Dr. Rafael Santos) com horários fixos |

---

## 2. ESTADO DO DESIGN SYSTEM

### ✅ Design System SÓLIDO em `globals.css`

**Paleta de cores** (Tailwind v4 custom):
- **Deep Forest** (base): forest-50 a forest-950 — tons escuros verdes
- **Emerald Health** (accent): #00C9A7 — saúde, vida
- **Gold Warm** (accent premium): #D4A843 — bem-estar, aconchego
- **Platinum** (neutral): tons cinza premium

**Design tokens** (modo escuro APENAS):
- `--background: #050F0D` (preto esverdeado profundo)
- `--surface: #0A1A17`
- `--surface-glass: rgba(10, 26, 23, 0.88)`
- Borders, shadows, radius completos

**Animações**:
- `float`, `shimmer`, `pulse-soft`, `breathe`, `marquee`
- Scroll bars customizadas
- Grain overlay texturizado
- Card glow com radial gradient
- Glass card com backdrop-blur

**UI Componentes** (`/components/ui.tsx`):
- `Botao` — multi-variante
- `Card` — com hover effects
- `BarraProgresso` — animada
- `Etiqueta` — badges coloridos
- `NivelBadge` — nível da aula

### 🔴 Problemas de Design Encontrados

1. **CSS fragments inline no page.tsx** — estilos de animação e gradientes estão misturados com JSX, dificultando manutenção
2. **Classes Tailwind dinâmicas** (`bg-${card.cor}-100`) em curiosidades/page.tsx — Tailwind NÃO compila classes dinâmicas. Isso é um BUG real: as cores não funcionam em produção
3. **Mix de emojis e SVGs** — inconsistência: algumas páginas usam emoji como ícone, outras usam `<Icon>` ou `lucide-react`
4. **Dois sistemas de ícones concorrentes**: `@/components/icons` (SVG inline) e `lucide-react` (em leitura-rapida, literacia-digital, saude-mental, mentoria)

---

## 3. GAMIFICAÇÃO

### ✅ O QUE FUNCIONA

| Componente | Status | Descrição |
|------------|--------|-----------|
| `GamificacaoRanking` | ✅ Funcional | Mostra nível, XP, barra de progresso |
| `GamificacaoVisual` (XpBar, XpRewardToast, StreakFlame) | ✅ Funcional | Efeitos visuais de XP, streak, partículas |
| `RankingBoard` | ✅ Funcional | Ranking de alunos |
| `Trophy` | ✅ Presente | Componente de troféu |
| `XpBadge` | ✅ Presente | Badge de XP |
| `BadgeSistema` | ✅ Presente | Sistema de badges |
| `LevelUpModal` | ✅ Presente | Modal de level up |
| `XpFloat` | ✅ Presente | XP flutuante |
| `StreakFreeze` | ✅ Presente | Streak freeze |
| `Carteirinha` | ✅ Presente | Carteirinha do aluno |
| `MissoesSemanal` | ✅ Funcional | Missões semanais com progresso |
| XP por aula | ✅ Funcional | Cada aula tem XP configurado em `aula.xp` |
| Barra de progresso | ✅ Funcional | `ProgressProvider` + `ProgressSync` + localStorage |

### ⚠️ O QUE ESTÁ QUEBRADO / INCOMPLETO

1. **Ranking em `/jogos/ranking`**: dados 100% mock (12 nomes fictícios, XP aleatório). **Não integrado a backend real**
2. **Ranking em `/ranking`**: usa `GamificacaoRanking` que tem seção "Ranking em breve!" — contradição com `/jogos/ranking` que já mostra ranking
3. **Mentoria**: agendamento salvo apenas no localStorage — **não há backend**
4. **Streak freeze**: componente existe (`streak-freeze.tsx`) mas integração com progresso é via localStorage apenas

### 🔴 O QUE FALTA

1. Sistema de **badges** com definições e critérios de desbloqueio
2. **Leaderboard global** com dados reais (multi-usuário)
3. **Notificações push** para streaks
4. Integração com **SupaBase** para persistência de XP entre dispositivos

---

## 4. CONTEÚDO EDUCACIONAL

### ✅ CONTEÚDO REAL (educacional forte)

| Área | Conteúdo | Fontes |
|------|----------|--------|
| **Trilhas** | 7 trilhas, 39+ módulos, 159+ aulas | Dados em `/content/trilha-*.ts` |
| **Diabetes** | Tipos 1 e 2, insulinas, dieta, balcão | Referência OMS, SBD |
| **Pressão Arterial** | SBC 2026, DASH, farmacêutico | **Sociedade Brasileira de Cardiologia 2026** |
| **Hormônios** | Tireoide, sexuais, insulina, cortisol | Medicina baseada em evidência |
| **Medicamentos** | Portaria 344/98, RDC 471/2021, GLP-1 | **ANVISA**, OMS |
| **Leitura Rápida** | Framework ABC, ética, escopo | Psicologia Aplicada |
| **Saúde Mental** | Protocolo ALG, CVV 188 | OMS, Ministério da Saúde |
| **Biblioteca** | Normas ANVISA, Farmácia Popular | **Fontes oficiais** |
| **Literacia Digital** | LGPD, telemedicina, e-commerce | Leis 13.709/2018, 14.510/2022 |

### 📊 Estrutura de Aulas

Cada aula tem:
- `resumoExecutivo` — bullets
- `comparativo` — tabela comparativa
- `simulacao` — fala boa/evitar
- `checklist` — itens práticos
- `quandoChamarFarmaceutico` — segurança
- `errosComuns` — antipadrões
- `quiz` — perguntas com respostas
- `xp` — pontos de experiência

### ✅ DISCLAIMERS DE SEGURANÇA PRESENTES EM TODAS AS PÁGINAS

- "Sempre consulte o(a) farmacêutico(a)"
- "Solicite o segundo visto"
- "Este treinamento não substitui o farmacêutico"
- "Conteúdo educativo"

---

## 5. O QUE ESTÁ FALTANDO

### Páginas prometidas mas não encontradas
- ❌ **Página de perfil do aluno** (`/perfil`) — não encontrada
- ❌ **Página de configurações** (`/configuracoes`)
- ❌ **Página de certificados** (`/certificados`)
- ❌ **Página de notificações** (`/notificacoes`)
- ❌ **Página de busca** (`/busca`)
- ❌ **Página de ajuda** (`/ajuda`)

### Funcionalidades incompletas
- ❌ **Login/autenticação real**: o sistema usa `usePerfilAluno()` que retorna dados mock
- ❌ **Cadastro com backend**: existe `/api/cadastro/route.ts` e `/api/cadastros/` mas parece não integrado
- ❌ **Chat IA**: `chatbot-ia.tsx` + `chat-wrapper.tsx` usam `/api/chat/route.ts` — **verificar se o backend OpenAI está configurado**
- ❌ **Bulas integradas**: `/bulas` é descritiva, sem consulta real à ANVISA
- ❌ **Scanner**: componente existe mas depende de backend
- ❌ **Progresso multi-dispositivo**: apenas localStorage (perde-se ao trocar de navegador)

---

## 6. IMAGENS E MÍDIA

### Estatísticas dos assets em `/public/`

| Tipo | Quantidade | Observação |
|------|------------|------------|
| **Imagens totais** | ~304 arquivos | Mistura de .webp, .jpg, .png |
| **Originais/Próprias** | ~50% | Logos, screenshots da plataforma, professor-avatar |
| **Stock/Unsplash** | ~50% | Imagens de heróis, farmácia, medicamentos |
| **Áudios (narração)** | **10 arquivos** | `.mp3` para narração de aulas |
| **Áudios não encontrados** | ❌ | Os caminhos em `NARRACAO_MAP` (`/audio/narracao-*.mp3`) podem não existir — verificar |

### Problemas com imagens

1. **Imagens duplicadas** em múltiplos formatos: `.webp`, `.jpg`, `.png` do mesmo conteúdo (ex: `trilha_medicamentos.webp` + `trilha_medicamentos.png`, `farmacia-balcao.webp` + `.jpg`)
2. **Imagens de Unsplash** linkadas diretamente em `bulas-receitas/page.tsx` (URL externa não otimizada)
3. **Narrações**: 10 arquivos de áudio, mas `NARRACAO_MAP` tem 7 chaves — algumas narrações podem estar faltando
4. **Imagens sem alt text descritivo** em alguns componentes

---

## 7. CÓDIGO MORTO / COMPONENTES NÃO UTILIZADOS

### 📁 `src/components/__unused__/` (6 componentes)

| Arquivo | Linhas | Problema |
|---------|--------|----------|
| `GuiaGPT.tsx` | 143 linhas | Chat IA completo, mas substituído por `ChatWrapper` (via layout) |
| `WhatsAppFloat.tsx` | 33 linhas | Botão WhatsApp flutuante — **não importado em nenhum layout** |
| `banner-patrocinio.tsx` | 67 linhas | Banner de patrocínio — **não utilizado** |
| `secao-cta-final.tsx` | — | Seção CTA — **não utilizada** (substituída por CTAs inline) |
| `secao-estatisticas.tsx` | 52 linhas | Seção de estatísticas — **não utilizada** (substituída por AnimatedCounter na home) |
| `section-video.tsx` | 35 linhas | Fundo de vídeo — **não utilizado** |
| `whatsapp-button.tsx` | — | Versão alternativa do WhatsAppFloat |

### Outros códigos potencialmente mortos

| Arquivo | Problema |
|---------|----------|
| `src/app/page.backup.tsx` | Backup da home page — **não usado** |
| `src/lib/sov-xp.ts` | Módulo de som/XP — verificar se ainda é usado |
| `src/lib/som.ts` | Módulo de som — verificar uso |
| `src/lib/streak-freeze.ts` | Lógica de streak freeze — existe mas integração é parcial |
| `src/lib/spaced-repetition.ts` | Lógica de spaced repetition — **não integrada às aulas** |

---

## 8. ESTADO DA ÉTICA

### ✅ Conteúdo ÉTICO e RESPONSÁVEL

1. **Disclaimers de segurança** presentes em TODAS as páginas educacionais
2. **Menções a autoridades**: ANVISA, SBC, OMS, CRF, Leis Federais
3. **Não há depoimentos falsos** — a home page usa dados institucionais reais (CRF/SP 58.519)
4. **Não há conteúdo inventado** — todo conteúdo de saúde é referenciável
5. **Escopo profissional respeitado**: "não substitui o farmacêutico" é repetido consistentemente
6. **LGPD** mencionada e explicada na página de literacia digital

### ⚠️ Problemas Éticos LEVES

1. **Dados mock no ranking**: nomes como "Carlos Farmacêutico", "Ana Atendente" com XP aleatório — parecem dados reais para o usuário desatento
2. **Mentoria mock**: Dr. Thiago Piola é real (CRF/SP 58.519), mas os outros mentores (Camila Oliveira, Rafael Santos) são fictícios — pode ser enganoso
3. **"Novo" badge no sidebar** (`/missoes`) — não há data de quando foi adicionado, pode ficar desatualizado
4. **Estatísticas na home**: "159 aulas" — verificar se corresponde ao real (o valor pode estar hardcoded)
5. **Audio paths**: se os 10 arquivos mp3 não existirem de fato (apenas o caminho foi mapeado), o VoiceOverPlayer quebra silenciosamente

---

## RESUMO EXECUTIVO

### Pontos Fortes
- **Plataforma extremamente completa**: 35+ páginas com conteúdo educacional real e bem escrito
- **Design system premium**: dark mode consistente, animações, paleta de cores
- **Conteúdo médico responsável**: disclaimers, fontes oficiais, escopo profissional
- **Gamificação robusta**: XP, níveis, streaks, badges, 9 jogos educativos
- **Código organizado**: componentes reutilizáveis, conteúdo separado em `/content/`

### Pontos Críticos
1. **Sem autenticação real**: `usePerfilAluno()` retorna dados mock
2. **Ranking e mentoria com dados fictícios**: pode enganar usuários
3. **Classes Tailwind dinâmicas quebradas**: `bg-${var}` não funciona no Tailwind v4
4. **Progresso apenas localStorage**: sem persistência cross-device
5. **10 arquivos de áudio de narração**: verificar se existem fisicamente
6. **Chat IA**: depende de API key OpenAI não verificada

### Recomendações Imediatas
1. Substituir dados mock do ranking por dados reais (ou mostrar "Ranking em breve")
2. Corrigir classes Tailwind dinâmicas em curiosidades/page.tsx
3. Remover ou arquivar `src/app/page.backup.tsx`
4. Verificar existência dos 10 arquivos mp3 em `/public/audio/`
5. Integrar progresso com Supabase para persistência real
6. Unificar sistema de ícones (remover dependência de lucide-react)

---

*Auditoria gerada automaticamente em 19/06/2026 — leitura de 42 páginas, 150+ componentes, 304 assets*
