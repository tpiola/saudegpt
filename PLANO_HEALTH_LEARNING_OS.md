# PLANO DE RECONSTRUÇÃO — SaúdeGPT Health Learning OS

## MISSÃO
Transformar a plataforma SaúdeGPT em um Health Learning OS de padrão mundial — referência brasileira em formação de atendentes de farmácia, com experiência mobile-first, aprendizagem acelerada, gamificação profissional, analytics pedagógico e IA segura.

## PILARES
1. **Home cinematográfica** — mobile-first, hipnotizante, extremamente clara
2. **Trilhas de aprendizagem** — 10 trilhas obrigatórias com mapa visual
3. **Aulas estruturadas** — 12 elementos fixos por aula
4. **Simuladores interativos** — 10+ cenários de balcão
5. **OSCE digital** — avaliação prática com rubrica
6. **Dashboard do aluno** — progresso, XP, badges, streak
7. **Painel do diretor** — governança pedagógica completa
8. **Relatórios** — individual, turma, conteúdo
9. **Robô de suporte** — seguro, anti-jailbreak, base aprovada
10. **WhatsApp** — dúvidas, alertas, lembretes
11. **Gamificação** — XP, níveis, badges, missões
12. **Biblioteca regulatória** — ANVISA, legislação, bulário

## STACK ATUAL
Next.js 16.2.7, React 19.2.7, Framer Motion 12, Recharts, Supabase, Radix UI, Tailwind, HLS.js, Sharp

## ARQUIVOS PARA CRIAR/MODIFICAR

### HOME (src/app/page.tsx)
Hero premium → Mini-simulador → Trilhas → Como funciona → Gamificação → Depoimentos → CTA

### TRILHAS (src/app/trilhas/*)
10 trilhas: Perfumaria, Medicamentos, Operação, Atendimento Humanizado, Fundamentos, OSCE, Serviços Farm, Vendas, Legislação, Comunicação

### AULAS (src/app/aulas/*)
Cada aula: Caso real → Objetivo → Vídeo → Resumo → Conceitos → Exemplo Balcão → O que dizer → Quiz → Simulação → Checklist → Próximo passo

### DASHBOARDS
- src/app/dashboard/aluno/ — Painel do aluno
- src/app/dashboard/diretor/ — Command Center
- src/app/dashboard/farmaceutico/ — Revisão técnica
- src/app/relatorios/* — PDF e planilha

### ROBÔ SUPORTE (src/components/chat-ai.tsx)
Nome: "Guia SaúdeGPT"
Funções: tirar dúvidas, explicar aulas, recomendar revisão, explicar erros
REGRAS: nunca diagnosticar, nunca prescrever, nunca inventar, base aprovada, fallback "não sei"

### COMPONENTES
- SiteHeader (nav: Home | Trilhas | Simulados | Dashboard | Suporte | WhatsApp)
- SiteFooter (LGPD, contato, redes)
- CookieConsent (LGPD)
- WhatsAppFloat
- GamificationEngine (XP, badges, streak)
- ProgressMap (visual trilha)
- Quiz (perguntas intercaladas, feedback imediato)
- SimuladorBalcao (cenário interativo)
- OsceDigital (avaliação por rubrica)
- VideoPlayer (HLS, poster, legendas)
- ProfessorAvatar (pulse glow + voz)
- VoiceOverPlayer (narração)

### DESIGN TOKENS
- Cores: verde saúde + branco + azul confiança
- Mobile-first: dvh, touch targets 44px+, grid adaptável
- Modo claro/escuro
- Animações: scroll-reveal, microinterações, transições suaves
- Performance: LCP < 2s, peso < 1.2MB, Lighthouse ≥ 95

## REGRAS
- Zero placeholder, zero conteúdo falso
- Português do Brasil correto (acentos)
- Conteúdo de saúde referenciado (ANVISA, OMS, MS)
- Responsivo: celular, tablet, desktop
- LGPD: cookie consent + política
- Robô seguro: anti-jailbreak, base aprovada, nunca diagnostica/prescreve
- Gamificação com propósito (não vício)

Execute TUDO agora. Faça commit e push.
