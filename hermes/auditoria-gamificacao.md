# 🔍 RELATÓRIO DE AUDITORIA — Gamificação & Prática
## saudegpt.com — Páginas Interativas
### Data: 2026-06-09 | Auditor: Hermes Agent

---

## SUMÁRIO EXECUTIVO

| Página | Rota | Usabilidade | Performance | Design | Conteúdo | Quiz | Gamificação |
|--------|------|:-----------:|:-----------:|:------:|:--------:|:----:|:-----------:|
| Game Center | /jogos | ❌ Quebrado | ✅ 0 erros | ✅ Bom | ✅ 9 perg. | ⚠️ Código OK, runtime quebrado | ❌ Sem XP/streak |
| Missões | /missoes | ❌ Quebrado | ✅ 0 erros | ✅ Bom | ✅ 8 missões | ⚠️ Código OK, runtime quebrado | ❌ Sem XP visível |
| Ranking | /ranking | ❌ Quebrado | ✅ 0 erros | ✅ Excelente | ✅ Mock funcional | N/A | ⚠️ Código tem, runtime quebrado |
| OSCE | /osce | ❌ Quebrado | ✅ 0 erros | ✅ Bom | ✅ 1 estação | ⚠️ Código OK, runtime quebrado | ❌ Sem XP |
| Comando Diário | /comando-diario | ⚠️ Parcial | ✅ 0 erros | ✅ Bom | ✅ 21 itens | N/A | ⚠️ Checkbox existe, interação quebrada |
| Curiosidades | /curiosidades | ✅ Leitura | ✅ 0 erros | ✅ Excelente | ✅ Rico | ❌ Sem quiz | ❌ Nenhum |

---

## 1. GAME CENTER — /jogos

### 1.1 Usabilidade
- **Problema crítico**: Os botões de resposta (3 quizzes × 4 opções cada) NÃO TÊM event listeners no runtime. Clicar não produz efeito visual nem feedback.
- **Causa raiz**: O componente `<JogoQuiz>` em `src/components/jogo-quiz.tsx` está marcado como `"use client"` com `useState`, `onClick` e lógica de feedback completa. O HTML correto é servido (perguntas, opções, classe `Questão X de 3`), mas a hidratação React não está ocorrendo — os event listeners não são anexados.
- **UX**: Usuário clica e nada acontece. Frustrante.

### 1.2 Performance
- Console: 0 erros JavaScript
- 0 warnings
- 41 scripts carregados (Next.js + Turbopack chunks)

### 1.3 Design
- Cards com bordas arredondadas (`rounded-xl`)
- Badge "Prática" verde com ícone
- Gradientes sutis, boa tipografia
- Hover states: `hover:border-green-300` nos botões

### 1.4 Conteúdo (Quiz — 3 categorias, 9 questões)
**Leitura de tarjas** (3 questões):
1. Medicamento de tarja preta → Retenção obrigatória ✓
2. MIP/OTC sem tarja → Triagem responsável ✓
3. Tarja vermelha sem retenção → Exige receita, não retém ✓

**Receita sem erro** (3 questões):
1. Receita antibiótico vencida → Não dispensar ✓
2. GLP-1 sem receita → Não dispensar (IN 360/2025) ✓
3. Receita ilegível → Chamar farmacêutico ✓

**Sintoma → conduta** (3 questões):
1. Tosse com catarro → Expectorante/mucolítico ✓
2. Dor no peito idoso → Encaminhamento urgente ✓
3. Antitérmico bebê 2 meses → Não orientar sem farmacêutico ✓

⚠️ **Bug no label**: Todas as 3 questões mostram "Questão 1 de 3" (deveria ser 1/3, 2/3, 3/3) — erro de mapeamento no componente.

### 1.5 Quiz
- Código fonte tem feedback, explicação, pontuação (10pts por acerto)
- **Problema**: Nada funciona no runtime

### 1.6 Gamificação
- ❌ Zero elementos: sem XP, sem streak, sem badges, sem nível, sem animação
- Os 10 pontos por questão não são integrados ao sistema de progresso

---

## 2. MISSÕES — /missoes

### 2.1 Usabilidade
- **Problema crítico**: Mesmo problema do Game Center — botões sem interação no runtime
- Cards de estatística mostram "8 missões", "3 níveis" — visualmente bonitos mas estáticos
- Componente `<Simulador>` em `src/components/simulador.tsx` tem `"use client"`, `useState`, `onClick` — mas não hidrata

### 2.2 Conteúdo
- 8 missões de atendimento com níveis de dificuldade
- Inclui: Cliente com rinite, Mãe primeira viagem, Pele sensível, Genérico vs similar, Receita com retenção, Enjoo caneta injetável, Idoso esquecimento
- Cada missão tem 2-3 opções com pontuação variável (0-10pts)
- Feedbacks explicativos por opção

### 2.3 Gamificação
- ❌ XP não visível na página (código chama `adicionarPontosMissao` mas não reflete na UI)
- ❌ Nenhum badge, streak ou nível visível na página
- "Total de pontos em missões: 0" — barra de progresso em 0% (nunca muda)
- Código tem `useProgresso()` e `adicionarPontosMissao` — mas não hidrata

---

## 3. RANKING — /ranking

### 3.1 Usabilidade
- **Problema crítico**: Botão "Entrar com 0 XP" não funciona — nenhum clique registrado
- Componente `<RankingBoard>` com `"use client"`, `useState`, `localStorage` — mas não hidrata
- Mock de 8 alunos com níveis, XP e badges mostrado como server-rendered, sem interação

### 3.2 Design ✅ **Melhor página visualmente**
- Hero com gradiente `from-forest-500 to-green-600`
- Badges flutuantes: "🔒 Privacidade total", "🎮 Baseado em XP", "🌱 Saudável"
- Podium visual (🥇🥈🥉) com avatar circular
- Tabela responsiva (desktop grid, mobile lista)
- Barras de progresso e nível do aluno

### 3.3 Conteúdo
- Mock de 8 alunos com dados realistas
- Sistema de badges: 🔥 Ofensiva, ⭐ Destaque, 🏅 Quiz perfeito, 📚 Leitor assíduo
- Níveis de 1 a 8 (250 XP por nível)

### 3.4 Gamificação (no código)
- ✅ XP tracking com `useProgresso()`
- ✅ Níveis calculados (XP / 250)
- ✅ Badges mockados
- ✅ Animação `XpFloat` para ganho de XP
- ✅ Lógica de opt-in com `localStorage`
- ✅ Geração de lista ordenada por XP

### ⚠️ Problema
- Nada funciona no runtime — server-rendered sem hidratação

---

## 4. OSCE — /osce

### 4.1 Usabilidade
- **Problema crítico**: Botões sem interação, mesmo padrão
- Componente `<OsceSimulador>` com `"use client"`, `useState`, `onClick` — não hidrata
- Apenas 1 estação visível na página (cliente com rinite)

### 4.2 Código fonte
- 3 estações de OSCE, reaproveita dados de missões
- Sistema de pontuação por estação
- Feedback textual com explicação
- Resultado final com percentual

### 4.3 Gamificação
- ❌ Sem XP, sem badges, sem conexão com ranking
- Notas são locais ao componente, não persistem

---

## 5. COMANDO DIÁRIO — /comando-diario

### 5.1 Usabilidade
- **Parcialmente funcional**: 21 checkboxes renderizados com `<input type="checkbox">`
- Clicar nos checkboxes via UI **não altera estado** (permanecem `checked=false`)
- **Programaticamente** via JS: `checkbox.checked = true` funciona, mas o progresso "0 de 21 itens" não atualiza
- Botão "Reiniciar dia" também não funcional

### 5.2 Conteúdo ✅ **Mais completo**
- 21 itens divididos em 5 seções:
  - **Início do turno** (4 itens): Abertura, PVPS, controlados, alinhamento
  - **Durante o atendimento** (5 itens): Acolhimento, escuta, orientação, cross-sell ético, checagem
  - **Organização e segurança** (3 itens): Gôndolas, sazonais, rupturas
  - **Olhar para o resultado** (3 itens): Ticket médio, recompra, Power BI
  - **Formação do dia** (5+ itens): Microlições, trilha, OSCE, curiosidades, pontuação

### 5.3 Gamificação
- ❌ Progresso não salva nem atualiza
- ❌ Sem XP, sem badges, sem conexão com gamificação
- ❌ Não reinicia automaticamente (menciona "reinicia a cada novo dia" mas sem lógica)

---

## 6. CURIOSIDADES — /curiosidades

### 6.1 Usabilidade
- ✅ Página puramente informativa — funciona perfeitamente como leitura
- Navegação por âncoras (#emagrecimento-saudavel, #pressao-arterial, #saude-coracao)
- Links clicáveis no topo para cada seção
- Hero com imagem de fundo e gradiente

### 6.2 Design ✅ **Excelente**
- Hero com `min-h-[75vh]`, gradiente `from-forest-500/80`, pattern-grid
- Seções alternando `bg-surface` e `bg-surface-2`
- Cards com gradientes e border-radius
- Imagens Unsplash com hover zoom (`scale-105`)
- Seção "O farmacêutico recomenda" com 3 cards coloridos
- CTA final verde escuro

### 6.3 Conteúdo ✅ **Rico**
- 3 blocos: Emagrecimento, Pressão Arterial, Saúde do Coração
- 6 artigos no total (2 por bloco)
- Conteúdo referenciado (SBC, OMS)
- Dicas práticas para o balcão da farmácia
- "Sabia que?" com curiosidades em cada artigo

### 6.4 Quiz & Gamificação
- ❌ Sem quiz, sem interatividade, sem gamificação
- (Aceitável — é página de conteúdo)

---

## DIAGNÓSTICO CRÍTICO — Causa Raiz

**Todas as páginas interativas compartilham o mesmo problema:**

1. ✅ **Código fonte está correto** — Todos os componentes usam `"use client"`, têm `useState`, `onClick`, lógica de feedback, pontuação e gamificação
2. ❌ **Hidratação React não está ocorrendo no runtime** — O HTML server-rendered aparece corretamente, mas o JavaScript client-side não está sendo executado para anexar event listeners
3. 🔴 **Possíveis causas**:
   - Usuário não está logado/matriculado → site bloqueia hidratação até login
   - Erro na configuração do Next.js (dynamic imports sem SSR, suspense boundaries)
   - Bundle de JS não está sendo servido corretamente (erro 404 nos chunks?)
   - Vercel/edge runtime com problema de hidratação

### Recomendação Imediata
1. Verificar se a hidratação requer login (matrícula)
2. Testar com usuário logado
3. Verificar console do navegador com "Preserve log" para capturar erros de carregamento de JS
4. Verificar se `next.config.js` tem `output: 'export'` (SSG) que quebra `"use client"` com `useState`

---

## ESTATÍSTICAS GERAIS

| Métrica | Valor |
|---------|-------|
| Páginas auditadas | 6 |
| Erros de console | 0 (em todas) |
| Componentes client-side | 5 (todos quebrados) |
| Questões de quiz totais | 9 (jogos) + 8 (missões) = 17 |
| Itens de checklist | 21 |
| Artigos de curiosidades | 6 |
| Elementos gamificação no código | XP, nível, badges, streak, barra progresso |
| Elementos gamificação no runtime | 0 |

---

## MATRIZ DE PRIORIDADES

| Prioridade | Item | Impacto |
|:----------:|------|---------|
| 🔴 P0 | Hidratação React quebrada em TODAS as páginas | Bloqueia toda interatividade |
| 🟡 P1 | Label "Questão X de N" mostra "1 de 3" para todas | UX confuso |
| 🟡 P1 | Progresso do Comando Diário não atualiza | Quebra utilidade da página |
| 🟢 P2 | Jogos não integram XP ao sistema de progresso | Gamificação incompleta |
| 🟢 P2 | Ranking só tem alunos mock (não reais) | Sem valor competitivo real |
| 🔵 P3 | Curiosidades sem quiz ou gamificação | Oportunidade de engajamento |

---

*Relatório gerado por Hermes Agent — Nous Research*
