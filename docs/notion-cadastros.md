# Cadastros no Notion

Os alunos matriculados na plataforma podem ser gravados automaticamente em um banco de dados Notion.

## Estrutura criada no workspace

| Recurso                           | URL                                                    |
| --------------------------------- | ------------------------------------------------------ |
| Página hub                        | https://www.notion.so/3728a2530044816fafe5de9ac4d903dc |
| Banco **Alunos — Matrículas EAD** | https://www.notion.so/e0b1a3dde89f47fbbe4c86fa7dfe9532 |

A página fica dentro de **Comando Diário — Operação Thiago Piola**.

## Variáveis na Vercel

```env
NOTION_TOKEN=secret_...
NOTION_CADASTROS_DATABASE_ID=e0b1a3dde89f47fbbe4c86fa7dfe9532
```

Opcional (referência da página hub):

```env
NOTION_CADASTROS_PAGE_ID=3728a2530044816fafe5de9ac4d903dc
```

## Integração Notion

1. Em https://www.notion.so/my-integrations crie uma integração **Interna**.
2. Conecte a integração à página **Cadastros — Plataforma Atendentes Premium** (menu ⋯ → Conectar a).
3. Cole o token em `NOTION_TOKEN`.

## Colunas do banco

- **Nome**, **Email**, **Apelido**, **Status** (pendente / aprovado / rejeitado)
- **Criado em**, **Aprovado em**
- **XP**, **Tempo estudo min**, **Aulas concluidas**, **Nota media**, **Tentativas quiz**
- **ID plataforma**, **Progresso JSON** (snapshot completo)

## Fluxo

1. Aluno se matricula em `/matriculas` → linha criada no Notion com status `pendente`.
2. Aluno estuda → `/api/cadastros/sync` atualiza métricas na mesma linha.
3. Admin aprova em `/admin` ou altera **Status** direto no Notion.

Se `NOTION_TOKEN` ou `NOTION_CADASTROS_DATABASE_ID` não estiverem definidos, o sistema usa `data/cadastros.json` (fallback local).
