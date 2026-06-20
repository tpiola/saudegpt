# SaúdeGPT Monorepo — Setup Guide

Este repositório unifica todos os módulos do ecossistema SaúdeGPT em um único monorepo.

## Estrutura

```
saudegpt/
├── apps/
│   ├── psicologia/     ← saudegpt-psicologia
│   ├── nutricao/       ← saudegpt-nutricao
│   └── fisioterapia/   ← saudegpt-fisioterapia
└── packages/
    └── core/           ← saudegpt-core
```

## Completar a Migração (GitHub Actions)

Para finalizar a migração automática dos repositórios privados, é necessário:

### 1. Criar um Personal Access Token (PAT)

1. Acesse: https://github.com/settings/tokens/new
2. Nome: `MERGE_TOKEN_SAUDEGPT`
3. Scopes necessários: ✅ `repo` (full access)
4. Expiration: 30 days (suficiente para a migração)
5. Clique em "Generate token" e **copie o token**

### 2. Adicionar o Token como Secret

1. Acesse: https://github.com/tpiola/saudegpt/settings/secrets/actions/new
2. Name: `MERGE_TOKEN`
3. Value: cole o token gerado
4. Clique em "Add secret"

### 3. Atualizar o Workflow

Edite `.github/workflows/merge-repos.yml` e substitua:
```yaml
token: ${{ secrets.GITHUB_TOKEN }}
```
por:
```yaml
token: ${{ secrets.MERGE_TOKEN }}
```
(nas linhas de checkout dos repos saudegpt-psicologia, nutricao, fisioterapia e core)

### 4. Executar o Workflow

1. Acesse: https://github.com/tpiola/saudegpt/actions/workflows/merge-repos.yml
2. Clique em "Run workflow"
3. Confirme na branch `main`

## Status da Migração

| Módulo | Status |
|--------|--------|
| apps/psicologia | ✅ Criado manualmente |
| apps/nutricao | 🔄 Parcial (package.json, next.config.mjs, src/app/layout.tsx, src/app/page.tsx) |
| apps/fisioterapia | ❌ Aguardando workflow |
| packages/core | ❌ Aguardando workflow |

## Vercel

Após a migração completa, as configurações da Vercel precisam ser atualizadas:
- Os projetos `saudegpt-psicologia`, `saudegpt-nutricao`, `saudegpt-fisioterapia` devem
  apontar para o novo repositório `saudegpt` com os respectivos `rootDir`.
