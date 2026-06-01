# Deploy na Vercel

## Pré-requisitos

1. Repositório conectado à Vercel (GitHub `tpiola/appfarmacia`).
2. Branch de produção: `main` ou merge do PR da feature.

## Variáveis de ambiente

| Variável                        | Obrigatória | Descrição                                   |
| ------------------------------- | ----------- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Sim         | URL pública (ex.: `https://app.vercel.app`) |
| `ADMIN_USER`                    | Não         | Padrão `admin`                              |
| `ADMIN_PASSWORD`                | Não         | Padrão `admin` — altere em produção         |
| `NEXT_PUBLIC_SUPABASE_URL`      | Não         | Sync de progresso na nuvem                  |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Não         | Chave anônima Supabase                      |
| `SUPABASE_SERVICE_ROLE_KEY`     | Não         | API `/api/sync/progress`                    |
| `NOTION_TOKEN`                  | Não         | Comando Diário dinâmico                     |
| `NOTION_PAGE_ID`                | Não         | Página Notion do checklist                  |

## CLI (opcional)

```bash
npx vercel link
npx vercel env pull .env.local
npx vercel deploy --prod
```

## CI

O workflow `.github/workflows/ci.yml` executa `lint`, `typecheck` e `build` em cada push/PR.
