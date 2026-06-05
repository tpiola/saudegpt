# Deploy na Vercel

## Repositório canônico

**Único repositório oficial:** https://github.com/tpiola/appfarmacia  

Branch de produção: `main`. Não use forks ou cópias antigas do projeto — conecte só este repo na Vercel.

## Pré-requisitos

1. Repositório conectado à Vercel (GitHub `tpiola/appfarmacia`).
2. Merge do PR da branch `cursor/plataforma-atendentes-premium-farmacia-a09d` em `main` para produção atualizada.
3. Região recomendada: **gru1** (já em `vercel.json`).

## Variáveis de ambiente (produção)

| Variável                        | Obrigatória | Descrição                                                     |
| ------------------------------- | ----------- | ------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | **Sim**     | URL canônica (ex.: `https://appfarmacia-thiagoso.vercel.app`) |
| `NOTION_TOKEN`                  | **Sim\***   | Integração Notion com acesso ao banco de cadastros            |
| `NOTION_CADASTROS_DATABASE_ID`  | **Sim\***   | Banco «Alunos — Matrículas EAD»                               |
| `ADMIN_USER`                    | **Sim**     | Usuário admin (não use `admin` em produção)                   |
| `ADMIN_PASSWORD`                | **Sim**     | Senha forte (não use `admin` em produção)                     |
| `NOTION_PAGE_ID`                | Não         | Comando Diário dinâmico                                       |
| `NOTION_CADASTROS_PAGE_ID`      | Não         | Página pai do banco (documentação)                            |
| `NEXT_PUBLIC_SUPABASE_URL`      | Não         | Sync de progresso na nuvem                                    |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Não         | Chave anônima Supabase                                        |
| `SUPABASE_SERVICE_ROLE_KEY`     | Não         | API `/api/sync/progress`                                      |

\*Na Vercel, cadastros **sem** Notion ficam só em memória por instância (dados perdidos no cold start). Em produção, configure Notion. Veja `docs/notion-cadastros.md`.

## Segurança

- Em `VERCEL_ENV=production`, o painel `/admin` e as APIs admin retornam **503** se `ADMIN_USER`/`ADMIN_PASSWORD` ainda forem o padrão `admin`/`admin`.
- Preview e desenvolvimento local continuam com `admin`/`admin` para testes.
- Conecte a integração Notion à página e ao banco no workspace (compartilhar com a integração).

## Checklist de lançamento (nota 9.9)

- [ ] `npm run validate` passa (lint + typecheck + build)
- [ ] `npm run test:e2e` passa no CI
- [ ] `NEXT_PUBLIC_SITE_URL` = URL de produção
- [ ] `NOTION_TOKEN` + `NOTION_CADASTROS_DATABASE_ID` na Vercel
- [ ] `ADMIN_USER` / `ADMIN_PASSWORD` alterados
- [ ] Merge em `main` e deploy Production **Ready**
- [ ] Teste: matrícula → aprovação no Notion/admin → dashboard liberado
- [ ] Teste: `/sitemap.xml` e `/robots.txt` com URL correta

## CLI (opcional)

```bash
npx vercel link
npx vercel env pull .env.local
npx vercel deploy --prod
```

## CI

O workflow `.github/workflows/ci.yml` executa `lint`, `typecheck`, `build` e `test:e2e` em cada push/PR nas branches `main` e `cursor/**`.

## URLs de referência

| Ambiente         | URL                                     |
| ---------------- | --------------------------------------- |
| Produção (main)  | https://appfarmacia-thiagoso.vercel.app |
| Preview (branch) | Gerada pela Vercel a cada push          |
