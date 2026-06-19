import type { Metadata } from "next";
import {
  Brain,
  Heart,
  Eye,
  MessageCircle,
  ShieldCheck,
  BookOpen,
  ClipboardCheck,
  Lightbulb,
  Users,
  AlertTriangle,
  ArrowRight,
  Star,
  CheckCircle2,
  FileText,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leitura Rápida do Paciente | SaúdeGPT — Formação para Atendentes de Farmácia",
  description:
    "Módulo Avançado: aprenda a avaliar em 30-90 segundos o estado cognitivo, emocional e de saúde do cliente no balcão da farmácia. Framework ABC, ética no atendimento e sinais de alerta.",
  openGraph: {
    title: "Leitura Rápida do Paciente | SaúdeGPT",
    description:
      "Framework ABC para atendentes de farmácia: identifique padrões de pensamento, emoções e sinais de doença no balcão.",
  },
};

/* ─── Componentes auxiliares ─── */

function Badge({ children, color = "emerald" }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    gold: "border-gold-500/20 bg-gold-500/10 text-gold-700 dark:text-gold-300",
    navy: "border-navy-500/20 bg-navy-500/10 text-navy-700 dark:text-navy-300",
    pink: "border-pink-500/20 bg-pink-500/10 text-pink-700 dark:text-pink-300",
    amber: "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${colors[color] || colors.emerald}`}
    >
      {children}
    </span>
  );
}

function Card({
  icon,
  title,
  children,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 dark:bg-gold-500/20">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}

function CtaBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gold-500/20 bg-gradient-to-br from-gold-500/5 to-transparent p-6 dark:from-gold-500/10">
      {children}
    </div>
  );
}

function StepCard({
  number,
  title,
  children,
  color = "gold",
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  color?: string;
}) {
  const dotColor =
    color === "gold"
      ? "bg-gold-500 text-white"
      : color === "emerald"
        ? "bg-emerald-500 text-white"
        : "bg-navy-500 text-white";
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${dotColor}`}
        >
          {number}
        </div>
        <div className="mt-1 h-full w-px bg-border" />
      </div>
      <div className="pb-6">
        <h4 className="font-bold text-foreground">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

/* ─── Página Principal ─── */

export default function LeituraRapidaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      {/* ── Header ── */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2">
          <Badge color="emerald">Módulo Avançado</Badge>
          <Badge color="gold">Atendimento Humanizado</Badge>
          <Badge color="navy">Ética e Responsabilidade</Badge>
        </div>
        <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
          <span className="block text-gold-500 dark:text-gold-400">
            Leitura Rápida do Paciente
          </span>
          <span className="mt-1 block text-lg font-normal text-muted-foreground sm:text-xl">
            Pensamento, Emoções e Sinais de Doença no Atendimento
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Desenvolvido para elevar o atendimento em farmácia a nota 10 em elegância, ética e
          responsabilidade educacional. Alinhado aos currículos de Técnico em Farmácia (Psicologia
          Aplicada, Comunicação em Saúde) e diretrizes CRF.
        </p>
      </div>

      {/* ── Objetivo ── */}
      <section className="mb-12">
        <Card
          icon={<Target className="h-5 w-5" />}
          title="Objetivo do Módulo"
          className="border-gold-500/10"
        >
          <p>
            Capacitar o atendente a avaliar em <strong>30 a 90 segundos</strong> o estado
            cognitivo, emocional e de saúde do cliente no balcão, identificando padrões de
            pensamento típicos em situações de doença e sinais que exijam encaminhamento imediato
            ao farmacêutico ou serviço de emergência.
          </p>
          <p className="mt-3">
            Foco exclusivo em <strong>educação responsável</strong> no atendimento humanizado, sem
            invadir escopo profissional. Material denso, prático e ético para fixação rápida e
            aplicação imediata.
          </p>
        </Card>
      </section>

      {/* ── Princípios Éticos ── */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
          <ShieldCheck className="h-5 w-5 text-emerald-500" />
          Princípios Éticos e Responsabilidade
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Base de todo o módulo. Cada interação no balcão deve ser guiada por ética, respeito ao
          escopo profissional e compromisso com a segurança do paciente.
        </p>

        <div className="mb-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 dark:bg-emerald-500/10">
          <h3 className="flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">
            <AlertTriangle className="h-4 w-4" />
            Escopo estrito do atendente de farmácia
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              <strong>Acolher</strong>, educar em saúde geral, promover adesão e autocuidado
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              Identificar necessidade de <strong>avaliação profissional</strong>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              <strong>Nunca</strong> diagnosticar, prescrever, indicar tratamento específico ou
              minimizar sintomas
            </li>
          </ul>
        </div>

        <CtaBox>
          <div className="flex items-start gap-3">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
            <div>
              <p className="text-sm font-bold text-foreground">Frase padrão obrigatória:</p>
              <p className="mt-1 text-base font-semibold italic text-gold-600 dark:text-gold-400">
                &ldquo;Com base no que você me conta, recomendo que o farmacêutico avalie
                pessoalmente para orientação segura.&rdquo;
              </p>
            </div>
          </div>
        </CtaBox>
      </section>

      {/* ── Framework ABC ── */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
          <Brain className="h-5 w-5 text-gold-500" />
          Framework Rápido: ABC Adaptado
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Use o modelo ABC para fazer a leitura do cliente em <strong>60 a 90 segundos</strong> no
          balcão. Observe os três pilares simultaneamente:
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card
            icon={<Heart className="h-5 w-5" />}
            title="A — Afeto / Emoção"
            className="border-pink-500/10"
          >
            <ul className="space-y-1.5">
              <li>• Ansioso (voz acelerada, suor)?</li>
              <li>• Irritado?</li>
              <li>• Resignado ou negação (&ldquo;não é nada&rdquo;)?</li>
              <li>• Medo visível nos olhos?</li>
            </ul>
          </Card>

          <Card
            icon={<Users className="h-5 w-5" />}
            title="B — Comportamento"
            className="border-amber-500/10"
          >
            <ul className="space-y-1.5">
              <li>• Agitado?</li>
              <li>• Evita contato visual?</li>
              <li>• Braços cruzados (defesa)?</li>
              <li>• Inclinado para frente (urgência)?</li>
              <li>• Hesitante ao falar?</li>
            </ul>
          </Card>

          <Card
            icon={<Lightbulb className="h-5 w-5" />}
            title="C — Cognição / Pensamento"
            className="border-navy-500/10"
          >
            <ul className="space-y-1.5">
              <li>• Perguntas repetidas (dúvida)?</li>
              <li>• Confusão sobre posologia?</li>
              <li>• Crenças erradas (&ldquo;antibiótico cura tudo&rdquo;)?</li>
              <li>• Sobrecarga (&ldquo;não entendi nada&rdquo;)?</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* ── Padrões de Pensamento ── */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
          <Eye className="h-5 w-5 text-gold-500" />
          Padrões de Pensamento em Doença
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Identifique o padrão e responda em <strong>1 minuto</strong> com a abordagem correta:
        </p>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Medo do desconhecido</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Voz calma. Informação em 3 pontos simples. Validar a emoção:
                </p>
                <p className="mt-2 text-sm font-medium italic text-gold-600 dark:text-gold-400">
                  &ldquo;Entendo que isso assusta. Vamos focar no que fazer agora.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Negação ou minimização</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Não confrontar. Educar com fatos gentis + pergunta:
                </p>
                <p className="mt-2 text-sm font-medium italic text-gold-600 dark:text-gold-400">
                  &ldquo;Muitos pensam que passa sozinho, mas quando X acontece é sinal para
                  checar.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-500/10 text-navy-500">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Sobrecarga de informação</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Priorizar. Uma mensagem de cada vez:
                </p>
                <p className="mt-2 text-sm font-medium italic text-gold-600 dark:text-gold-400">
                  &ldquo;O mais importante agora é Y. O resto a gente conversa depois.&rdquo;
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Usar analogias simples. Mostrar (embalagem, demonstração) em vez de só falar.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  Baixo letramento em saúde ou crenças culturais
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Respeitar, usar exemplos do dia a dia. Mostrar (embalagem, demonstração) em vez de
                  só falar. Envolver familiar se presente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exercício Prático ── */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
          <ClipboardCheck className="h-5 w-5 text-emerald-500" />
          Exercício Prático
        </h2>

        <div className="space-y-6">
          {/* Cenário 1 */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-white">
                1
              </span>
              <h3 className="font-bold text-foreground">
                Cliente com tosse persistente há 10 dias
            </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Senhor de 58 anos, tosse seca há 10 dias. Diz que &ldquo;é só alergia&rdquo; mas
              evita contato visual e fala rápido. Pergunta 3 vezes sobre o mesmo xarope.
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-border bg-background p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Pergunta para reflexão:
              </p>
              <p className="mt-1 text-sm text-foreground">
                Quais sinais do framework ABC você identifica? Qual a abordagem correta?
              </p>
            </div>
          </div>

          {/* Cenário 2 */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-white">
                2
              </span>
              <h3 className="font-bold text-foreground">
                Cliente com dor de cabeça frequente
            </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Moça de 34 anos, compra analgésico toda semana. Hoje está irritada, fala que &ldquo;não
              adianta, já tomei tudo&rdquo;. Tem as mãos trêmulas.
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-border bg-background p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Pergunta para reflexão:
              </p>
              <p className="mt-1 text-sm text-foreground">
                Como aplicar o princípio ético do encaminhamento ao farmacêutico neste caso?
              </p>
            </div>
          </div>

          {/* Cenário 3 */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-white">
                3
              </span>
              <h3 className="font-bold text-foreground">
                Mãe com receita de antibiótico para o filho
            </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Mãe de 24 anos, primeira vez. Está confusa com a posologia, diz que &ldquo;não
              entendeu nada do que o médico falou&rdquo;. Olhar perdido, aperta a receita na mão.
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-border bg-background p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Pergunta para reflexão:
              </p>
              <p className="mt-1 text-sm text-foreground">
                Qual padrão de pensamento em doença se aplica? Como usar a comunicação em 3 pontos
                simples?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Checklist Rápido 30s ── */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
          <ClipboardCheck className="h-5 w-5 text-gold-500" />
          Checklist Rápido — 30 Segundos no Balcão
        </h2>

        <div className="rounded-2xl border-2 border-gold-500/20 bg-gradient-to-br from-gold-500/[0.04] to-transparent p-6 dark:from-gold-500/[0.08]">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Acolhi o cliente com contato visual?", emoji: "👁️" },
              { label: "Observei tom de voz e linguagem corporal?", emoji: "🧘" },
              { label: "Identifiquei sinais de ansiedade ou medo?", emoji: "💓" },
              { label: "Escutei sem interromper?", emoji: "👂" },
              { label: "Usei linguagem clara e simples?", emoji: "💬" },
              { label: "Verifiquei se há sinais de alerta?", emoji: "⚠️" },
              { label: "Perguntei sobre outros medicamentos?", emoji: "💊" },
              { label: "Ofereci encaminhamento ao farmacêutico?", emoji: "🩺" },
            ].map((item) => (
              <label
                key={item.label}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-surface p-3 text-sm transition-colors hover:border-gold-500/30 has-checked:border-gold-500 has-checked:bg-gold-500/5"
              >
                <input type="checkbox" className="h-4 w-4 accent-gold-500" />
                <span className="text-foreground">{item.label}</span>
              </label>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            ✅ Ao final, se um ou mais itens não foram atendidos, repense a abordagem.
          </p>
        </div>
      </section>

      {/* ── Fluxo de Decisão ── */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
          <ArrowRight className="h-5 w-5 text-emerald-500" />
          Fluxo de Decisão no Atendimento
        </h2>

        <div className="space-y-0">
          <StepCard number="1" title="Chegada do cliente" color="emerald">
            Acolha com contato visual e saudação ativa. Observe postura, tom de voz e expressão
            facial.
          </StepCard>
          <StepCard number="2" title="Escuta ativa (30s)" color="gold">
            Deixe o cliente falar sem interromper. Identifique o motivo da vinda. Aplique o ABC:
            Afeto, Comportamento, Cognição.
          </StepCard>
          <StepCard number="3" title="Avaliação rápida (30s)" color="navy">
            Há sinais de alerta? (falta de ar, dor no peito, febre alta, confusão mental) →{" "}
            <strong className="text-gold-500">Encaminhamento imediato</strong>.
          </StepCard>
          <StepCard number="4" title="Educação em saúde" color="emerald">
            Informação clara em 3 pontos. Use frases curtas. Mostre o produto. Verifique
            compreensão.
          </StepCard>
          <StepCard number="5" title="Encaminhamento ou finalização" color="gold">
            Se necessário: &ldquo;Com base no que você me conta, recomendo que o farmacêutico
            avalie pessoalmente.&rdquo; Se não: finalize com pergunta de checagem.
          </StepCard>
        </div>
      </section>

      {/* ── Alinhamento Curricular ── */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
          <BookOpen className="h-5 w-5 text-navy-500" />
          Alinhamento Curricular
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-5 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/10 text-navy-500">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold text-foreground">Psicologia Aplicada à Farmácia</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Compreensão do comportamento do paciente, comunicação empática e escuta ativa no
              balcão.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold text-foreground">Comunicação em Saúde</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Técnicas de comunicação clara, redução de barreiras de letramento e abordagem
              empática.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold text-foreground">Diretrizes CRF</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Respeito ao escopo profissional, ética no atendimento e responsabilidade educacional.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="mb-12">
        <CtaBox>
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start sm:gap-4">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 sm:mb-0">
              <Star className="h-7 w-7 text-gold-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Lembre-se: segurança primeiro
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Comunicação clara reduz erros de medicação, melhora adesão e resultados em saúde.
                Priorize sempre a segurança sobre a venda ou agilidade.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="h-3 w-3" />
                  Nunca diagnosticar
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-700 dark:text-gold-300">
                  <CheckCircle2 className="h-3 w-3" />
                  Sempre encaminhar
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-500/20 bg-navy-500/10 px-3 py-1 text-xs font-semibold text-navy-700 dark:text-navy-300">
                  <CheckCircle2 className="h-3 w-3" />
                  Educação responsável
                </span>
              </div>
            </div>
          </div>
        </CtaBox>
      </section>

      {/* ── Footer do módulo ── */}
      <div className="border-t border-border pt-6 text-center">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <FileText className="h-3.5 w-3.5" />
          <span>
            SaúdeGPT — Formação para Atendentes de Farmácia | Módulo alinhado às diretrizes CRF/SP
          </span>
        </div>
      </div>
    </div>
  );
}
