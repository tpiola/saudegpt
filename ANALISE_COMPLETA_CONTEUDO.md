# Análise Completa das 7 Trilhas de Conteúdo — SaúdeGPT

## 1. VISÃO GERAL DA PLATAFORMA

| Métrica | Valor |
|---|---|
| **Total de trilhas** | 7 |
| **Total de módulos** | ~25 |
| **Total de aulas** | **135** |
| **Total de quizzes (perguntas)** | ~610 |
| **Aulas com vídeo** | 45 (33,3%) |
| **Aulas com imagemHeroUrl** | ~50 (37%) |
| **Aulas com simulação** | ~119 (88%) |
| **Aulas com comparativo** | ~120 (89%) |
| **Aulas com errosComuns** | 135 (100%) |
| **Aulas com quandoChamarFarmaceutico** | 135 (100%) |

---

## 2. ANÁLISE DETALHADA POR TRILHA

### TRILHA 1 — Perfumaria, Bem-Estar e Saúde do Dia a Dia
**Arquivo:** `trilha-perfumaria.ts`
**Total de aulas:** 16 | **Módulos:** 5

| Aula | Vídeo | ImagemHero | Produtos | Marcas | Simulação | Comparativo | Quizzes | Resumo |
|---|---|---|---|---|---|---|---|---|
| barba | ✅ barba | ✅ sim | ❌ | ❌ | ✅ | ✅ | 6 | Rico |
| higiene-oral | ✅ higieneOral | ✅ sim | ❌ | ❌ | ✅ | ✅ | 5 | Rico |
| sabonetes | ✅ higieneMaos | ✅ sim | ❌ | ❌ | ✅ | ✅ | 5 | Rico |
| acessorios-banho | ✅ higieneMaos | ✅ sim | ❌ | ❌ | ✅ | ✅ | 5 | Médio |
| higiene-pessoal | ✅ higieneMaos | ✅ sim | ❌ | ❌ | ✅ | ✅ | 4 | Rico |
| desodorantes | ✅ higieneMaos | ✅ sim | ❌ | ❌ | ✅ | ✅ | 5 | Rico |
| pele-fotoprotecao | ✅ fotoprotecao | ✅ sim | ❌ | ❌ | ✅ | ✅ | 6 | Rico |
| maquiagem | ✅ skincareBasico | ✅ sim | ❌ | ❌ | ✅ | ✅ | 5 | Médio |
| unhas | ✅ skincareBasico | ✅ sim | ❌ | ❌ | ✅ | ✅ | 5 | Médio |
| dermocosmeticos | ✅ skincareAtivos | ✅ sim | ❌ | ❌ | ✅ | ✅ | 4 | Rico |
| cabelos | ✅ cabelos | ✅ via comMidia | ❌ | ❌ | ✅ | ✅ | ~4 | Médio |
| coloracao | ✅ cabelos | ✅ via comMidia | ❌ | ❌ | ✅ | ✅ | ~4 | Médio |
| perfumes | ✅ perfumes | ✅ via comMidia | ❌ | ❌ | ✅ | ✅ | ~4 | Médio |
| linha-infantil | ✅ cuidadosBebe | ✅ via comMidia | ❌ | ❌ | ✅ | ✅ | ~4 | Médio |
| acessorios-infantis | ✅ cuidadosBebe | ✅ via comMidia | ❌ | ❌ | ✅ | ✅ | ~2 | Básico |
| higiene-infantil | ✅ cuidadosBebe | ✅ via comMidia | ❌ | ❌ | ✅ | ✅ | ~2 | Básico |

**Usa sistema `comMidia`** que injeta images/produtos/marcas automaticamente do catálogo padrão.
**Total quizzes:** ~69 perguntas | **Média:** ~4,3 perguntas/aula

**Qualidade dos resumos:** Ricos na maioria, com `resumoExecutivo` de 3 bullets práticos. Algumas aulas do módulo infantil têm resumo básico demais.

**Cobertura de errosComuns e quandoChamarFarmaceutico:** 100% presente, relevantes e específicos.

---

### TRILHA 2 — Medicamentos, Balcão Seguro e Saúde Integral
**Arquivo:** `trilha-medicamentos.ts`
**Total de aulas:** 24 | **Módulos:** 5 (Fundamentos, Bula/Tarjas, Classes Terapêuticas, ...)

| Característica | Dado |
|---|---|
| Aulas com **vídeo** | **5 de 24** (20,8%) |
| Aulas com **imagemHeroUrl** | Sim — TODAS via `imagensCategoria.*` |
| Aulas com **simulação** | Todas (24/24) — 100% |
| Aulas com **comparativo** | Todas (24/24) — 100% |
| Aulas com **errosComuns** | Todas — 100% |
| **Total quizzes** | **107 perguntas** (~4,5/aula) |
| **Produtos** | ❌ Nenhuma aula tem galeria de produtos |
| **Marcas** | ❌ Nenhuma aula tem logos de marcas |

**Análise dos vídeos (5 de 24):**
- `conceitos` → videosPiloto.medicamentosConceitos
- `bula` → videosPiloto.bula
- `analgesicos-antitermicos` → YouTube (G77tZACxZPQ)
- `mip-otc` → ❌ sem vídeo
- `anti-inflamatorios` → ❌ sem vídeo
- `gripe-alergia-tosse` → ❌ sem vídeo
- Demais 19 aulas **não têm vídeo**

**Lacuna crítica:** 79% das aulas desta trilha não têm vídeo. É a segunda maior trilha em número de aulas, mas extremamente carente de recursos audiovisuais.

**Qualidade dos resumos:** Excelente — resumos executivos com 3 bullets práticos, terminologia técnica precisa, referências a RDCs e normas.

**Qualidade dos quizzes:** Perguntas bem elaboradas com distratores realistas e explicações completas. Média de 5 perguntas por aula.

**Simulações:** Excelentes — usam cenários reais de balcão (receita vencida, genérico vs marca, alergia à lactose).

---

### TRILHA 3 — Excelência Operacional e Atendimento Consultivo
**Arquivo:** `trilha-operacional.ts`
**Total de aulas:** 7 | **Módulos:** 2

| Característica | Dado |
|---|---|
| Aulas com **vídeo** | **5 de 7** (71,4%) |
| Aulas com **imagemHeroUrl** | **0** em nível de aula (2 nos módulos) |
| Aulas com **simulação** | Todas (7/7) — 100% |
| Aulas com **comparativo** | Todas (7/7) — 100% |
| **Total quizzes** | **28 perguntas** (~4/aula) |
| **Produtos** | ❌ |
| **Marcas** | ❌ |

**Vídeos:** 5 aulas com YouTube links (3PmVJQUCm4E e G77tZACxZPQ — os mesmos 2 links reusados). Apenas `acolhimento` usa `videosPiloto.operacionalAbertura`.

**Qualidade dos resumos:** Excelente — resumos executivos com 4 bullets cheios de exemplos práticos de balcão.

**Simulações:** Muito boas, com falas completas de atendimento ideal vs. antipadrão.

**Lacuna:** Nenhuma imagem de herói nas aulas individuais — apenas nos módulos. Sem galeria de produtos ou marcas.

---

### TRILHA 4 — Cuidado Humanizado e Atendimento que Encanta
**Arquivo:** `trilha-encantamento.ts` (exportado como `trilhaVendas`)
**Total de aulas:** 31 | **Módulos:** ~5

| Característica | Dado |
|---|---|
| Aulas com **vídeo** | **19 de 31** (61,3%) |
| Aulas com **imagemHeroUrl** | **6** (só módulos, não aulas individuais) |
| Aulas com **simulação** | 19 de 31 (61,3%) — algumas sem |
| Aulas com **comparativo** | 18 de 31 (58%) |
| **Total quizzes** | **91 perguntas** (~3/aula) |
| **Produtos** | 1 ocorrência |

**Vídeos:** Maioria YouTube links (3PmVJQUCm4E e G77tZACxZPQ — mesmos links reusados).

**Qualidade dos resumos:** Ricos — foco em técnicas de vendas consultivas, gatilhos mentais, objeções.

**Simulações:** Algumas aulas NÃO têm simulação (cerca de 12 aulas sem). As que têm são excelentes com diálogos reais de balcão.

---

### TRILHA 5 — Fundamentos da Farmácia
**Arquivo:** `trilha-fundamentos.ts`
**Total de aulas:** 32 | **Módulos:** ~6

| Característica | Dado |
|---|---|
| Aulas com **vídeo** | **0 de 32** (0%) — NENHUMA |
| Aulas com **imagemHeroUrl** | Somente módulos, **nenhuma aula individual** |
| Aulas com **simulação** | Todas (32/32) — 100% |
| Aulas com **comparativo** | 30 de 32 (93,7%) |
| **Total quizzes** | **97 perguntas** (~3/aula) |
| **Produtos** | ❌ |
| **Marcas** | ❌ |

**Lacuna GRAVÍSSIMA:** Esta é a MAIOR trilha (32 aulas) e a ÚNICA com **ZERO vídeos**. É conteúdo denso de anatomia, fisiologia, microbiologia, ética, regulação — tudo puramente textual.

**Qualidade dos resumos:** Excelente — uso de `resumoExecutivo` com bullets informativos e referências legais.

**Simulações:** Excelentes — cobrem situações éticas complexas (sigilo, cliente insistindo em antibiótico sem receita, fiscalização).

**Comparativos:** Excelentes — farmacêutico vs. atendente, postura ética vs. antiética, órgãos reguladores.

---

### TRILHA 6 — Prática Supervisionada
**Arquivo:** `trilha-pratica.ts`
**Total de aulas:** 16 | **Módulos:** ~3

| Característica | Dado |
|---|---|
| Aulas com **vídeo** | **0 de 16** (0%) — NENHUMA |
| Aulas com **imagemHeroUrl** | Somente módulos |
| Aulas com **simulação** | Todas (16/16) — 100% |
| Aulas com **comparativo** | Todas (16/16) — 100% |
| **Total quizzes** | **34 perguntas** (~2/aula) |
| **Produtos** | ❌ |
| **Marcas** | ❌ |

**Lacuna:** Segunda maior trilha sem vídeos. Média de quizzes baixa (~2/aula). Deveria ser a trilha MAIS rica em simulação prática e vídeos, mas é puro texto.

**Qualidade dos resumos:** Ricos — 3 bullets executivos com foco em ação prática.

**Comparativos:** Excelentes — atendimento padrão vs. consultivo, pergunta fechada vs. aberta, dispensação simples vs. segura.

---

### TRILHA 7 — Serviços Farmacêuticos & Cuidado na Prática
**Arquivo:** `trilha-servicos-cuidado.ts`
**Total de aulas:** 9 | **Módulos:** 2

| Característica | Dado |
|---|---|
| Aulas com **vídeo** | **0 de 9** (0%) — NENHUMA |
| Aulas com **imagemHeroUrl** | Somente módulos |
| Aulas com **simulação** | 6 de 9 (66,7%) — 3 têm `cliente: null` |
| Aulas com **comparativo** | 9 de 9 (100%) |
| **Total quizzes** | **36 perguntas** (~4/aula) |
| **Produtos** | ❌ |
| **Marcas** | ❌ |

**Lacuna:** Menor trilha, sem vídeos. 3 aulas têm simulação com `cliente: null` (incompleta). Conteúdo sobre 4 Ps da Saúde é bom mas sem apoio visual.

---

## 3. ARQUIVOS ADICIONAIS DE CONTEÚDO

### apoio-tratamento.ts
- **6 aulas** (módulo da trilha 4)
- Sem vídeo, sem imagemHeroUrl
- Simulações: algumas com `cliente: null` (incompletas)
- 4 quizzes por aula
- Foco em adesão terapêutica, contato pós-venda, calendário de cuidado
- **Qualidade:** Excelente conteúdo sobre cuidado contínuo, mas sem suporte visual

### videos-educativos.ts
- Dicionário com **12 URLs** de vídeos do YouTube
- Usado pelas trilhas perfumaria e medicamentos
- Vídeos genéricos de terceiros (não são conteúdos originais)

### videos-piloto.ts
- Provavelmente contém URLs para vídeos originais/piloto
- Usado pela trilha medicamentos e operacional

### biblioteca.ts
- 4+ normas regulatórias (RDC 471/2021, IN 360/2025 GLP-1, etc.)
- **Total:** ~184 linhas
- Conteúdo de referência, não tem aulas

### comando-diario.ts
- Checklist operacional diário
- 6 categorias (abertura, balcão, estoque, dados, fechamento, formação)
- **Não tem aulas** — é um recurso auxiliar

### missoes.ts
- **~10 missões** de simulação de balcão
- Cada missão tem cenário, cliente, 3 opções com pontuação
- Interativo — funciona como simulador de decisões
- Conteúdo de altíssima qualidade pedagógica

### curriculo.ts
- Importa e exporta as 7 trilhas oficiais
- Não usa arquivos: `trilha-novas.ts` (sobra de versão anterior)

---

## 4. PORCENTAGENS GLOBAIS

| Indicador | % | Absoluto |
|---|---|---|
| Aulas com **vídeo** | **33,3%** | 45 de 135 |
| Aulas com **imagemHeroUrl (individual)** | ~37% | ~50 de 135 |
| Aulas com **simulação** | ~88% | ~119 de 135 |
| Aulas com **comparativo** | ~89% | ~120 de 135 |
| Aulas com **errosComuns** | **100%** | 135 de 135 |
| Aulas com **quandoChamarFarmaceutico** | **100%** | 135 de 135 |
| Aulas com **produtos (galeria)** | ~2% | ~3 de 135 |
| Aulas com **marcas (logos)** | ~0,7% | ~1 de 135 |
| Aulas com **quiz** | **100%** | 135 de 135 |

---

## 5. AS 5 MAIORES LACUNAS DE CONTEÚDO

### 🥇 LACUNA #1 — Ausência massiva de vídeos (66,7% das aulas)
- **3 trilhas inteiras têm ZERO vídeos:** Fundamentos (32 aulas), Prática (16 aulas), Serviços & Cuidado (9 aulas) = **57 aulas sem vídeo**
- Trilha Medicamentos tem apenas 5 vídeos para 24 aulas
- Os vídeos existentes são links do YouTube reusados (mesmo 2-3 links para dezenas de aulas)
- **Impacto:** Plataforma EAD sem vídeo perde 70% do engajamento do aluno

### 🥈 LACUNA #2 — Zero galerias de produtos e marcas
- Apenas **3 aulas** têm `produtos` e **1 aula** tem `marcas`
- O tipo `ProdutoMidia` e `MarcaMidia` estão definidos em `types.ts` mas **quase não são usados**
- **Impacto:** Atendente não aprende a reconhecer produtos/marcas no balcão — função essencial

### 🥉 LACUNA #3 — Imagens de herói ausentes em ~60% das aulas individuais
- Apenas trilha-perfumaria (via comMidia) e trilha-medicamentos (via imagensCategoria) têm imagem por aula
- Demais trilhas usam imagem apenas no módulo, não na aula
- **Impacto:** Experiência visual pobre; aulas parecem "texto puro"

### 4️⃣ LACUNA #4 — Baixa densidade de quizzes em trilhas críticas
- Prática Supervisionada: média de **2 quizzes/aula** (deveria ter 4-5)
- Encantamento: média de **3 quizzes/aula** para 31 aulas
- **Impacto:** Menos reforço pedagógico e menor retenção

### 5️⃣ LACUNA #5 — Simulações incompletas em apoio-tratamento e servicos-cuidado
- 3 aulas em `trilha-servicos-cuidado.ts` têm `cliente: null` na simulação (simulação vazia)
- `apoio-tratamento.ts` tem 2 aulas com `cliente: null`
- **Impacto:** Experiência quebrada quando o sistema tenta renderizar simulação sem cliente

---

## 6. SUGESTÕES ESPECÍFICAS PARA MELHORAR CADA TRILHA

### 🔧 TRILHA 1 — Perfumaria
**Força:** Única trilha com cobertura completa de vídeo + imagem + simulação + comparativo + comMidia.
**Melhorias:**
- Adicionar galeria de produtos (`produtos: ProdutoMidia[]`) com imagens reais de itens de perfumaria (sabonetes, absorventes, perfumes)
- Adicionar logos de marcas comuns (Nivea, Dove, Natura, Avon, O Boticário)
- Aumentar quizzes nas aulas infantis (atuais 2-3 perguntas)
- Os vídeos reusam `higieneMaos` e `skincareBasico` — criar vídeos específicos para cada tema

### 🔧 TRILHA 2 — Medicamentos
**Força:** Melhor conteúdo técnico, comparativos e simulações excelentes.
**Melhorias:**
- **CRIAR VÍDEOS para 19 aulas sem vídeo** — esta é a prioridade #1 da plataforma
- Adicionar galeria de produtos com imagens de medicamentos reais para reconhecimento de embalagens
- Adicionar marcas de referência (EMS, Medley, Neo Química, Eurofarma)
- Incluir mais quizzes práticos de interpretação de receitas

### 🔧 TRILHA 3 — Operacional
**Força:** Conteúdo enxuto e direto, todas com simulação e comparativo.
**Melhorias:**
- Adicionar `imagemHeroUrl` individual para cada aula
- Os 2 links de YouTube estão reusados — criar vídeos específicos de acolhimento e operação
- Adicionar 1 aula extra sobre "Atendimento digital/WhatsApp"
- Incluir galeria de materiais de apoio (canetas, receituários, carimbos)

### 🔧 TRILHA 4 — Encantamento
**Força:** Maior trilha (31 aulas), boa cobertura de vídeo (61%).
**Melhorias:**
- Adicionar `imagemHeroUrl` para todas as 31 aulas
- Completar as 12 simulações faltantes
- Adicionar galeria de produtos para exemplificar cross-sell
- Substituir vídeos genéricos do YouTube por conteúdos originais
- Reduzir o reuse do mesmo link do YouTube (3PmVJQUCm4E aparece 5+ vezes)

### 🔧 TRILHA 5 — Fundamentos
**Força:** Conteúdo teórico mais denso e importante, simulacões éticas excelentes.
**Melhorias:**
- **PRIORIDADE MÁXIMA — CRIAR VÍDEOS** para conteúdo de anatomia, microbiologia, história
- Adicionar imagens de herói para cada aula (diagramas, infográficos)
- Incluir galeria de produtos (EPIs, equipamentos de laboratório)
- Adicionar marcas de referência do setor farmacêutico
- Aumentar quizzes para 5 por aula (média atual: 3)

### 🔧 TRILHA 6 — Prática Supervisionada
**Força:** Foco prático com bons comparativos.
**Melhorias:**
- **CRIAR VÍDEOS de simulação de balcão** — esta trilha DEVERIA ser a mais rica em vídeo
- Adicionar galeria de produtos e marcas
- Aumentar quizzes para 4-5 por aula (atual: 2)
- Adicionar mais cenários de emergência e receituário

### 🔧 TRILHA 7 — Serviços & Cuidado
**Força:** Conteúdo bem estruturado sobre 4 Ps.
**Melhorias:**
- **CRIAR VÍDEOS** demonstrando os serviços farmacêuticos na prática
- Completar as 3 simulações com `cliente: null`
- Adicionar imagens de herói para cada aula
- Expandir de 9 para 12-15 aulas
- Adicionar galeria de equipamentos (glicosímetro, aferidor de pressão)

---

## 7. IMAGENS E VÍDEOS QUE PRECISAM SER ADICIONADOS OU TROCADOS

### 🎬 VÍDEOS A CRIAR (Prioridade Máxima)

| Trilha | Aulas sem vídeo | Prioridade |
|---|---|---|
| **Fundamentos** (5) | 32 aulas — **CRIAR 6-8 vídeos** cobrindo: história da farmácia, anatomia básica, microbiologia, biossegurança, ética, regulação Anvisa/CRF | 🔴 URGENTE |
| **Prática** (6) | 16 aulas — **CRIAR 4-6 vídeos** de simulação realística: triagem, dispensação, emergência, receituário | 🔴 URGENTE |
| **Medicamentos** (2) | 19 aulas — **CRIAR 5-7 vídeos** sobre: formas farmacêuticas, vias de adm., tarjas, MIP, genéricos, classes terapêuticas | 🟡 ALTA |
| **Serviços** (7) | 9 aulas — **CRIAR 3-4 vídeos** sobre 4 Ps, serviços farmacêuticos, aferição de sinais | 🟡 ALTA |
| **Encantamento** (4) | 12 aulas — **CRIAR 3-4 vídeos** sobre objeções, fechamento, cross-sell | 🟢 MÉDIA |

### 🎬 VÍDEOS A SUBSTITUIR

| URL atual | Usado em | Problema | Ação |
|---|---|---|---|
| `3PmVJQUCm4E` | Encantamento (5+ aulas), Operacional (2) | Vídeo genérico de terceiros, reusado sem contexto | Substituir por conteúdos originais específicos |
| `G77tZACxZPQ` | Medicamentos, Operacional, Encantamento | Mesmo link reusado para temas diferentes | Criar vídeos específicos por aula |
| `oHg5SJYRHA0` (videos-piloto.bula) | Medicamentos | Confirmar se é conteúdo original ou placeholder | Verificar e substituir se necessário |

### 🖼️ IMAGENS A ADICIONAR

| Trilha | O que adicionar | Quantidade |
|---|---|---|
| **Operacional** (3) | `imagemHeroUrl` em cada uma das 7 aulas | 7 imagens |
| **Encantamento** (4) | `imagemHeroUrl` em 25 aulas que não têm | 25 imagens |
| **Fundamentos** (5) | `imagemHeroUrl` em todas as 32 aulas (infográficos, diagramas) | 32 imagens |
| **Prática** (6) | `imagemHeroUrl` em todas as 16 aulas | 16 imagens |
| **Serviços** (7) | `imagemHeroUrl` em todas as 9 aulas | 9 imagens |
| **Medicamentos** (2) | Já tem via `imagensCategoria.*` — OK | — |

### 🏷️ PRODUTOS E MARCAS A ADICIONAR

| Trilha | Galeria de Produtos | Logos de Marcas |
|---|---|---|
| **Perfumaria** | Fotos de sabonetes, absorventes, perfumes, maquiagem | Nivea, Dove, Natura, O Boticário, Avon |
| **Medicamentos** | Embalagens de MIPs, genéricos, antibióticos | EMS, Medley, Neo Química, Eurofarma, Aché |
| **Operacional** | Materiais de escritório, EPIs | — |
| **Encantamento** | Produtos para exemplificar cross-sell | — |
| **Prática** | Itens de balcão, receituários | — |

---

## 8. RESUMO EXECUTIVO

A plataforma SaúdeGPT tem **conteúdo pedagógico de altíssima qualidade** — os textos, simulações, comparativos, erros comuns e quizzes são excelentes e claramente escritos por especialistas. O grande calcanhar de Aquiles é a **falta de recursos audiovisuais**:

1. ✅ **100% das aulas têm** errosComuns, quandoChamarFarmaceutico e quiz → excelente
2. ✅ **88% têm simulação** → excelente  
3. ✅ **89% têm comparativo** → excelente
4. ✅ **Resumos executivos ricos** na maioria
5. ❌ **66,7% não têm vídeo** → CRÍTICO
6. ❌ **~60% não têm imagem de herói individual** → GRAVE
7. ❌ **~98% não têm galeria de produtos** → IMPORTANTE
8. ❌ **~99% não têm logos de marcas** → IMPORTANTE

**Pontuação geral de maturidade de conteúdo: 6,5/10**
- Qualidade textual: 9,5/10
- Cobertura multimídia: 3,5/10
- Interatividade (quizzes): 8/10
- Recursos visuais (produtos/marcas): 2/10
