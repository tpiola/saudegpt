# Verticais do SaúdeGPT

As verticais de Nutrição, Fisioterapia e Psicologia pertencem ao produto SaúdeGPT e não devem ser mantidas como aplicações independentes enquanto compartilham autenticação, gamificação, tutor, analytics e design system.

## Decisão de arquitetura

O repositório `saudegpt` é a fonte única de runtime, infraestrutura e deploy. As especialidades devem entrar como configuração e conteúdo dentro da mesma aplicação.

Os repositórios antigos permanecem arquivados apenas para preservar o histórico:

- `tpiola/saudegpt-nutricao`
- `tpiola/saudegpt-fisioterapia`
- `tpiola/saudegpt-psicologia`

## Modelo recomendado

```text
src/
  verticals/
    farmacia/
    nutricao/
    fisioterapia/
    psicologia/
```

Cada vertical deve definir somente o que muda:

- nome, slug e identidade visual;
- órgão profissional de referência;
- trilhas, módulos e conteúdos;
- regras específicas de avaliação;
- prompts e contexto do tutor;
- páginas públicas e metadados.

Auth, componentes, gamificação, analytics, billing, banco e infraestrutura permanecem compartilhados.

## Verticais

### Farmácia

Vertical atual e principal do produto.

### Nutrição

- referência profissional: CRN;
- conteúdo e trilhas específicos de Nutrição;
- mesma infraestrutura do SaúdeGPT.

### Fisioterapia

- referência profissional: CREFITO;
- conteúdo e trilhas específicos de Fisioterapia e Terapia Ocupacional;
- mesma infraestrutura do SaúdeGPT.

### Psicologia

- referência profissional: CRP;
- conteúdo e trilhas específicos de Psicologia;
- mesma infraestrutura do SaúdeGPT.

## Regra de deploy

Somente o repositório `saudegpt` deve estar conectado à Vercel. A seleção de vertical deve ocorrer por rota, configuração, tenant ou domínio associado ao mesmo projeto, evitando builds e bases de código duplicadas.

## Biblioteca `saudegpt-core`

O repositório `saudegpt-core` permanece experimental. Antes de incorporá-lo, seus componentes e tipos devem ser avaliados contra a stack atual do SaúdeGPT, porque o protótipo foi criado com versões anteriores de Next.js e React.

Não publicar `saudegpt-core` como aplicação.