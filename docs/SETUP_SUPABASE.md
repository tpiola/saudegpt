# 🚀 Setup Supabase — SaúdeGPT
## Guia passo-a-passo para ativar banco de dados

---

## 1. Criar Projeto (2 minutos)

1. Acesse https://supabase.com
2. Clique **"Start your project"** (GitHub login)
3. Preencha:
   - **Organization**: (crie uma ou use existente)
   - **Name**: `saudegpt-prod`
   - **Database Password**: **anote com segurança!**
   - **Region**: `South America (São Paulo)` — essencial para latência baixa
   - **Pricing Plan**: **Free** (500MB de banco, 50.000 linhas)
4. Aguarde ~1 min para criar

## 2. Pegar as Chaves de API

No dashboard do Supabase:

1. **Project Settings** (⚙️) → **API**
2. Copie esses 2 valores:

```
Project URL: https://xxxxxxxxxxxxxx.supabase.co
Anon Public Key: eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...
```

## 3. Configurar no Vercel

```bash
# Via Vercel Dashboard:
# Project → Settings → Environment Variables

NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...
```

**Ou via CLI:**
```bash
cd /opt/data/projects/appfarmacia
npx vercel env add NEXT_PUBLIC_SUPABASE_URL production
# Cole a URL do Supabase

npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
# Cole a Anon Key

npx vercel env add SUPABASE_SERVICE_ROLE_KEY production
# Cole a Service Role Key (Settings → API → service_role key)
```

Depois faça redeploy:
```bash
npx vercel --prod
```

## 4. Executar Migration SQL

No Supabase Dashboard:
1. Vá em **SQL Editor** (ícone de banco de dados)
2. Cole o SQL abaixo e clique **"Run"**

```sql
-- Tabela de conversas do chat
CREATE TABLE IF NOT EXISTS support_interactions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  aluno TEXT NOT NULL DEFAULT 'anonimo',
  pergunta TEXT NOT NULL,
  resposta TEXT NOT NULL,
  turno INT DEFAULT 1
);

-- Índices para busca rápida
CREATE INDEX IF NOT EXISTS idx_support_aluno ON support_interactions(aluno);
CREATE INDEX IF NOT EXISTS idx_support_created ON support_interactions(created_at DESC);

-- RLS: admin vê tudo
ALTER TABLE support_interactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admin_all" ON support_interactions
  FOR ALL USING (auth.role() = 'service_role');
```

## 5. Verificar

Após configurar, teste:

```bash
# Enviar uma mensagem (o chat já vai salvar automaticamente)
curl -X POST https://saudegpt.com/api/chat/log \
  -H "Content-Type: application/json" \
  -d '{"aluno":"Teste","pergunta":"Ola","resposta":"Oi","turno":1}'

# Ver histórico (admin)
curl https://saudegpt.com/api/chat/log \
  -H "Authorization: Basic $(echo -n 'admin:102030' | base64)"
```

Se o retorno mostrar `"database": "supabase"`, está funcionando! ✅

---

## Tabelas Opcionais (para área do Diretor)

Execute no SQL Editor para ter o CRM completo:

```sql
-- Tabela: profiles (alunos)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  avatar TEXT,
  cargo_farmacia TEXT,
  data_cadastro TIMESTAMPTZ DEFAULT NOW(),
  nivel_atual INT DEFAULT 1
);

-- Tabela: enrollments (matrículas)
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  trilha_id TEXT NOT NULL,
  data_inicio TIMESTAMPTZ DEFAULT NOW(),
  progresso_geral DECIMAL(5,2) DEFAULT 0,
  certificado_url TEXT,
  UNIQUE(aluno_id, trilha_id)
);

-- Tabela: module_progress
CREATE TABLE IF NOT EXISTS module_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  modulo_id TEXT NOT NULL,
  status TEXT DEFAULT 'pendente' CHECK (status IN ('pendente','em_andamento','concluido')),
  xp_ganho INT DEFAULT 0,
  tempo_estudo INT DEFAULT 0,
  ultima_atividade TIMESTAMPTZ,
  UNIQUE(aluno_id, modulo_id)
);

-- Tabela: gamification
CREATE TABLE IF NOT EXISTS gamification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  xp_total INT DEFAULT 0,
  level INT DEFAULT 1,
  current_streak INT DEFAULT 0,
  best_streak INT DEFAULT 0,
  badges_unlocked TEXT[] DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: quiz_results
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  score DECIMAL(5,2),
  tentativas INT DEFAULT 1,
  feedback_ia TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Backup Automático

No Supabase Dashboard:
- **Database** → **Backups** → Ativar "Daily backups"
- Retenção: 7 dias (Free) ou configure pg_dump na VPS

---

## Próximos Passos

Após configurar:
1. [ ] Criar projeto no Supabase Cloud
2. [ ] Copiar URL e Anon Key
3. [ ] Adicionar no Vercel (env vars)
4. [ ] Executar migration SQL
5. [ ] Redeploy: `npx vercel --prod`
6. [ ] Testar: `curl https://saudegpt.com/api/chat/log`
7. [ ] Ver admin dashboard em `/admin`
