# Formação para Atendentes Premium de Farmácia

Plataforma-escola (LMS) premium para formar atendentes de drogaria e perfumaria — do
iniciante absoluto ao nível avançado — com foco em saúde integral, atendimento
humanizado, vendas consultivas, segurança sanitária, adesão ao tratamento e evolução
de carreira até a graduação em Farmácia.

> Criado pelo Farmacêutico Thiago B. G. Piola, CRF/SP 58.519.

## Visão geral

- **Estética**: design system próprio "Azul Clínico Premium", modo claro/escuro, acessível e responsivo.
- **Pedagogia**: perfumaria primeiro, medicamentos depois; microlições de 3 a 8 min; cada módulo em três profundidades (básico, intermediário, avançado).
- **Gamificação**: XP, níveis, badges, missões de balcão e botão dominante **"Continuar de onde parei"** (progresso salvo localmente).
- **Atualização regulatória**: RDC 471/2021 (antimicrobianos), GLP-1 (IN 360/2025), Farmácia Popular 2025, Boas Práticas, atribuições do CFF e mais.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) com tokens de design próprios
- Persistência de progresso no `localStorage` (sem backend obrigatório para o MVP)

## Arquitetura de páginas

| Rota | Descrição |
| --- | --- |
| `/` | Landing cinematográfica + mandala pedagógica |
| `/matriculas` | Matrícula/cadastro |
| `/dashboard` | Painel do aluno (progresso, continuidade, recomendações, conquistas, notas) |
| `/trilhas` | Biblioteca de trilhas |
| `/trilhas/[trilhaId]` | Módulos e aulas da trilha |
| `/aula/[trilhaId]/[aulaId]` | Aula com vídeo, blocos, simulação, checklist e quiz |
| `/missoes` | Simulador de balcão (missões pontuadas) |
| `/biblioteca` | Biblioteca regulatória "viva" |
| `/indicadores` | Hub Power BI para atendentes |

## Currículo

1. **Perfumaria, Bem-Estar e Saúde do Dia a Dia** (Atendente Premium I)
2. **Medicamentos, Balcão Seguro e Saúde Integral** (Atendente Premium II)
3. **Excelência Operacional e Vendas Consultivas**
4. **Carreira, Farmácia e Leitura de Dados (Power BI)**

O conteúdo vive em `src/content/` e é facilmente editável (trilhas, módulos, aulas,
quizzes, biblioteca regulatória, missões e indicadores), funcionando como base para um
futuro CMS headless.

## Desenvolvimento

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de produção
npm run lint   # verificação de lint
```

## Observações

Conteúdo educativo de apoio. Não substitui a orientação do farmacêutico ou do médico.
A interpretação das normas deve ser confirmada nas fontes oficiais (Anvisa, Ministério
da Saúde e CFF). Tokens visuais exatos do site de referência e o framework "4P's" devem
ser validados em iteração futura.

---

Patrocinado por https://www.thiagopiola.com.br e https://www.reidasvendas.com.br
