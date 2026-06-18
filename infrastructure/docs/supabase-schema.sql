-- ═══════════════════════════════════════════════════════════════
-- Schema completo — Supabase (SQL Editor)
-- Healthy Learning OS — SaúdeGPT
-- ═══════════════════════════════════════════════════════════════

-- ═══════════════════════════════════════════════════════════════
-- 1. TABELA alunos — ficha cadastral completa
-- ═══════════════════════════════════════════════════════════════

create table if not exists alunos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  -- Identificação
  nome text not null default '',
  email text unique not null,
  whatsapp text default '',
  cpf text default '',
  rg text default '',
  endereco text default '',
  -- Documentos
  selfie_url text default '',
  -- Perfil educacional
  motivacao text default '',
  objetivo text default '',
  horas_dia numeric default 0,
  dias_disponiveis text default '',  -- JSON array: ["seg","ter","qua","qui","sex","sab"]
  -- Dados do progresso
  nivel_atual int default 1,
  xp_total int default 0,
  current_streak int default 0,
  best_streak int default 0,
  progresso jsonb default '{}',
  badges_unlocked text[] default '{}'
);

-- Trigger para updated_at
create or replace function trigger_set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_updated_at on alunos;
create trigger set_updated_at
  before update on alunos
  for each row execute function trigger_set_updated_at();

-- Indexes
create index if not exists idx_alunos_email on alunos(email);
create index if not exists idx_alunos_status on alunos(status);

-- ═══════════════════════════════════════════════════════════════
-- 2. TABELA matriculas — approval workflow
-- ═══════════════════════════════════════════════════════════════

create table if not exists matriculas (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  aluno_id uuid not null references alunos(id) on delete cascade,
  status text not null default 'pendente' check (status in ('pendente','aprovado','rejeitado')),
  aprovado_por text default '',
  aprovado_em timestamptz,
  motivo_rejeicao text default '',
  -- Campos complementares
  plano_escolhido text default '',
  pagamento_confirmado boolean default false,
  data_matricula timestamptz not null default now()
);

drop trigger if exists set_updated_at on matriculas;
create trigger set_updated_at
  before update on matriculas
  for each row execute function trigger_set_updated_at();

create index if not exists idx_matriculas_aluno_id on matriculas(aluno_id);
create index if not exists idx_matriculas_status on matriculas(status);

-- ═══════════════════════════════════════════════════════════════
-- 3. TABELA horarios_estudo — grade semanal do aluno
-- ═══════════════════════════════════════════════════════════════

create table if not exists horarios_estudo (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  aluno_id uuid not null references alunos(id) on delete cascade,
  dia_semana int not null check (dia_semana between 0 and 6),  -- 0=domingo, 1=segunda...
  hora_inicio time not null,
  hora_fim time not null,
  google_event_id text default '',
  ativo boolean default true
);

create index if not exists idx_horarios_estudo_aluno on horarios_estudo(aluno_id);

-- ═══════════════════════════════════════════════════════════════
-- 4. TABELA progresso_aluno (expandida)
-- ═══════════════════════════════════════════════════════════════

create table if not exists progresso_aluno (
  user_id uuid primary key references auth.users (id) on delete cascade,
  dados jsonb not null default '{}',
  aulas_concluidas int default 0,
  total_aulas int default 0,
  percentual numeric default 0,
  ultima_aula text default '',
  tempo_total_segundos bigint default 0,
  dias_estudo jsonb default '[]',
  streak_atual int default 0,
  xp_acumulado int default 0,
  nivel int default 1,
  atualizado_em timestamptz not null default now()
);

create index if not exists idx_progresso_aluno_atualizado on progresso_aluno(atualizado_em);

-- ═══════════════════════════════════════════════════════════════
-- 5. ROW LEVEL SECURITY — Policies
-- ═══════════════════════════════════════════════════════════════

-- ── alunos ──
alter table alunos enable row level security;

-- Admin pode ver todos os alunos
create policy "Admin le todos alunos"
  on alunos for select
  using (auth.jwt() ->> 'role' = 'admin');

-- Admin pode atualizar alunos
create policy "Admin atualiza alunos"
  on alunos for update
  using (auth.jwt() ->> 'role' = 'admin');

-- Aluno pode ver próprio registro
create policy "Aluno le proprio registro"
  on alunos for select
  using (auth.uid() = id);

-- Aluno pode inserir próprio registro (cadastro)
create policy "Aluno insere proprio registro"
  on alunos for insert
  with check (auth.uid() = id);

-- ── matriculas ──
alter table matriculas enable row level security;

-- Admin vê todas
create policy "Admin le todas matriculas"
  on matriculas for select
  using (auth.jwt() ->> 'role' = 'admin');

-- Admin atualiza status
create policy "Admin atualiza matriculas"
  on matriculas for update
  using (auth.jwt() ->> 'role' = 'admin');

-- Aluno vê própria matrícula
create policy "Aluno le propria matricula"
  on matriculas for select
  using (auth.uid() = aluno_id);

-- ── horarios_estudo ──
alter table horarios_estudo enable row level security;

-- Admin pode ver todos
create policy "Admin le todos horarios"
  on horarios_estudo for select
  using (auth.jwt() ->> 'role' = 'admin');

-- Aluno vê/gerencia próprios horários
create policy "Aluno gerencia proprios horarios"
  on horarios_estudo for all
  using (auth.uid() = aluno_id);

-- ── progresso_aluno ──
alter table progresso_aluno enable row level security;

create policy "Usuario le proprio progresso"
  on progresso_aluno for select
  using (auth.uid() = user_id);

create policy "Usuario grava proprio progresso"
  on progresso_aluno for insert
  with check (auth.uid() = user_id);

create policy "Usuario atualiza proprio progresso"
  on progresso_aluno for update
  using (auth.uid() = user_id);

-- Admin pode ler todos progressos
create policy "Admin le todos progressos"
  on progresso_aluno for select
  using (auth.jwt() ->> 'role' = 'admin');

-- ═══════════════════════════════════════════════════════════════
-- TABELAS AUXILIARES (já existentes)
-- ═══════════════════════════════════════════════════════════════

create table if not exists comando_diario_aluno (
  user_id uuid primary key references auth.users (id) on delete cascade,
  concluidos jsonb not null default '[]',
  atualizado_em timestamptz not null default now()
);

alter table comando_diario_aluno enable row level security;

create policy "Usuario le proprio comando diario"
  on comando_diario_aluno for select
  using (auth.uid() = user_id);

create policy "Usuario grava proprio comando diario"
  on comando_diario_aluno for all
  using (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════════
-- FUNCTION: atualizar_aluno_status
-- ═══════════════════════════════════════════════════════════════

create or replace function aprovar_matricula(
  p_matricula_id uuid,
  p_aprovado_por text default ''
) returns void as $$
begin
  update matriculas
  set status = 'aprovado',
      aprovado_por = p_aprovado_por,
      aprovado_em = now(),
      updated_at = now()
  where id = p_matricula_id;
end;
$$ language plpgsql security definer;

create or replace function rejeitar_matricula(
  p_matricula_id uuid,
  p_motivo text default ''
) returns void as $$
begin
  update matriculas
  set status = 'rejeitado',
      motivo_rejeicao = p_motivo,
      updated_at = now()
  where id = p_matricula_id;
end;
$$ language plpgsql security definer;
