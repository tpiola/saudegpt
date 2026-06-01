# Formação para Atendentes Premium de Farmácia

Repositório oficial: **https://github.com/tpiola/appfarmacia**

Plataforma EAD premium para formar atendentes de drogaria e perfumaria — higiene,
bem-estar, dermocosméticos, infantil, nutrição e medicamentos com balcão seguro.

> Criado pelo Farmacêutico Thiago B. G. Piola, CRF/SP 58.519.

## Produção

| Ambiente | URL |
| --- | --- |
| Site (branch `main`) | https://appfarmacia-thiagoso.vercel.app |
| Preview (PRs) | Gerado pela Vercel em cada push |

Deploy: conecte este repositório na Vercel. Detalhes em `docs/DEPLOY.md`.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Progresso local + sync opcional (Notion / admin)

## Desenvolvimento

```bash
npm ci
npm run dev
npm run validate   # lint + typecheck + build
npm run test:e2e
```

## Estrutura principal

- `/` — Portal de estudos (painel do aluno ou catálogo)
- `/trilhas` — Currículo completo
- `/aula/...` — Aulas com vídeo, vitrine de produtos, quiz e XP
- `/matriculas` — Cadastro (sync com Notion se configurado)
- `/admin` — Coordenação (aprovação de alunos)

Conteúdo pedagógico em `src/content/`.

## Notion (matrículas e métricas)

Configure `NOTION_TOKEN` e `NOTION_CADASTROS_DATABASE_ID`. Aprovação de alunos pode ser feita no Notion (coluna **Status** = `aprovado`) ou no painel `/admin`. Ver `docs/notion-cadastros.md`.

---

Patrocínio: https://www.thiagopiola.com.br · https://www.reidasvendas.com.br
