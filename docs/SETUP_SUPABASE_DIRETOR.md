# Supabase na VPS — Área do Diretor
## Setup para gerenciamento de alunos, progresso e gamificação

---

## 1. Criar Projeto Supabase (Cloud — recomendado)

### Opção A: Supabase Cloud (gratuito até 500MB)
1. Acesse https://supabase.com e faça login
2. Clique em **New project**
3. Nome: `saudegpt-prod`
4. Database Password: **anote com segurança**
5. Region: **South America (São Paulo)** — `sa-southeast-1`
6. Aguarde criar (~2 min)

### Opção B: Self-hosted na VPS Hostinger
```bash
# Conectar na VPS
ssh root@195.200.2.101

# Instalar Docker (se não tiver)
curl -fsSL https://get.docker.com | sh

# Clonar Supabase self-hosted
git clone --depth=1 https://github.com/supabase/supabase
cd supabase/docker
cp .env.example .env

# Editar .env com senhas seguras
nano .env
# Mude POSTGRES_PASSWORD, JWT_SECRET, ANON_KEY, SERVICE_ROLE_KEY

# Iniciar
docker compose up -d
```

---

## 2. Tabelas SQL — Executar no SQL Editor

Abra o SQL Editor do Supabase e execute:

```sql
-- ============================================
-- Tabela: profiles (alunos)
-- ============================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  avatar TEXT,
  cargo_farmacia TEXT,
  data_cadastro TIMESTAMPTZ DEFAULT NOW(),
  nivel_atual INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Tabela: enrollments (matrículas em trilhas)
-- ============================================
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  trilha_id TEXT NOT NULL,
  data_inicio TIMESTAMPTZ DEFAULT NOW(),
  progresso_geral DECIMAL(5,2) DEFAULT 0,
  certificado_url TEXT,
  UNIQUE(aluno_id, trilha_id)
);

-- ============================================
-- Tabela: module_progress (progresso por módulo)
-- ============================================
CREATE TABLE module_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  modulo_id TEXT NOT NULL,
  status TEXT DEFAULT 'pendente' CHECK (status IN ('pendente', 'em_andamento', 'concluido')),
  xp_ganho INT DEFAULT 0,
  tempo_estudo INT DEFAULT 0, -- em minutos
  ultima_atividade TIMESTAMPTZ,
  UNIQUE(aluno_id, modulo_id)
);

-- ============================================
-- Tabela: gamification (XP, streaks, badges)
-- ============================================
CREATE TABLE gamification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  xp_total INT DEFAULT 0,
  level INT DEFAULT 1,
  current_streak INT DEFAULT 0,
  best_streak INT DEFAULT 0,
  badges_unlocked TEXT[] DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Tabela: quiz_results (resultados de quizzes)
-- ============================================
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  score DECIMAL(5,2),
  tentativas INT DEFAULT 1,
  feedback_ia TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Tabela: support_interactions (chat com IA)
-- ============================================
CREATE TABLE support_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  mensagem TEXT NOT NULL,
  resposta_deepseek TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- RLS (Row Level Security)
-- ============================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE gamification ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_interactions ENABLE ROW LEVEL SECURITY;

-- Aluno vê apenas seus próprios dados
CREATE POLICY "aluno_see_own" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "aluno_see_own_enrollments" ON enrollments FOR ALL USING (auth.uid() = aluno_id);
CREATE POLICY "aluno_see_own_progress" ON module_progress FOR ALL USING (auth.uid() = aluno_id);
CREATE POLICY "aluno_see_own_gamification" ON gamification FOR ALL USING (auth.uid() = aluno_id);
CREATE POLICY "aluno_see_own_quizzes" ON quiz_results FOR ALL USING (auth.uid() = aluno_id);
CREATE POLICY "aluno_see_own_chat" ON support_interactions FOR ALL USING (auth.uid() = aluno_id);

-- Admin vê tudo
CREATE POLICY "admin_see_all" ON profiles FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "admin_see_all_enrollments" ON enrollments FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "admin_see_all_progress" ON module_progress FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "admin_see_all_gamification" ON gamification FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "admin_see_all_quizzes" ON quiz_results FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "admin_see_all_chat" ON support_interactions FOR ALL USING (auth.role() = 'service_role');
```

---

## 3. Configurar Variáveis no Vercel

No Vercel → Project → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxxxx
```

---

## 4. Acessar Área do Diretor

1. Vá para **https://saudegpt.com/admin**
2. Login: `admin`
3. Senha: `102030`

O dashboard do diretor mostra:
- Total de alunos cadastrados
- Matrículas por trilha
- Progresso médio da turma
- XP total da plataforma
- Alunos ativos nos últimos 7 dias
- Ranking geral

---

## 5. Backup Diário Automático

```sql
-- No Supabase Dashboard → Database → Backups
-- Ativar "Daily backups" (retenção 7 dias)

-- Ou via script na VPS:
-- 0 3 * * * pg_dump postgresql://... > /backups/saudegpt-$(date +\%Y-\%m-\%d).sql
```
