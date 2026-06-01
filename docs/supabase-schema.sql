-- Schema sugerido para sync de progresso (Supabase SQL Editor)

create table if not exists progresso_aluno (
  user_id uuid primary key references auth.users (id) on delete cascade,
  dados jsonb not null default '{}',
  atualizado_em timestamptz not null default now()
);

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
