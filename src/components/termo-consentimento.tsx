"use client";

import { useEffect, useState } from "react";
import { usePerfilAluno } from "@/lib/aluno";

const CHAVE_CONSENTIMENTO = "fap-termo-consentimento";

interface TermoRegistro {
  nome: string;
  data: string;
  ip?: string;
  assinaturaDigital: string;
}

export function TermoConsentimento() {
  const { perfil, carregado } = usePerfilAluno();
  const [aceito, setAceito] = useState(true);
  const [assinatura, setAssinatura] = useState("");
  const [liEConcordo, setLiEConcordo] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!carregado) return;
    if (!perfil?.email) {
      setAceito(true); // visitante não precisa
      return;
    }
    const stored = localStorage.getItem(CHAVE_CONSENTIMENTO);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as TermoRegistro;
        if (parsed.nome && parsed.assinaturaDigital) {
          setAceito(true);
          return;
        }
      } catch {
        // inválido, mostra de novo
      }
    }
    // Preenche nome do perfil
    if (perfil?.nome) {
      setAssinatura(perfil.nome);
    }
    setAceito(false);
  }, [carregado, perfil]);

  async function handleAceitar() {
    if (!assinatura.trim()) {
      setErro("Digite seu nome completo para assinar digitalmente.");
      return;
    }
    if (!liEConcordo) {
      setErro("Você precisa ler e concordar com os termos para continuar.");
      return;
    }

    setEnviando(true);
    setErro("");

    const registro: TermoRegistro = {
      nome: perfil?.nome ?? assinatura.trim(),
      data: new Date().toISOString(),
      assinaturaDigital: assinatura.trim(),
    };

    try {
      // Salva no servidor (opcional — fire-and-forget)
      await fetch("/api/termo-consentimento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registro),
      }).catch(() => {}); // falha silenciosa
    } catch {
      // ignora
    }

    localStorage.setItem(CHAVE_CONSENTIMENTO, JSON.stringify(registro));
    setAceito(true);
    setEnviando(false);
  }

  // Se já aceitou ou é visitante, não mostra nada
  if (aceito || !carregado) return null;

  const hoje = new Date().toLocaleDateString("pt-BR");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border/40 bg-surface p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Brilho decorativo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--green-500)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--orange-500)" }}
        />

        {/* Header */}
        <div className="relative mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            Termo de Consentimento e Ciência
          </h1>
          <p className="mt-1 text-sm text-muted">
            Leia atentamente antes de acessar o conteúdo da plataforma
          </p>
        </div>

        {/* Conteúdo do Termo */}
        <div className="relative space-y-5 rounded-xl border border-border/40 bg-surface/50 p-5 sm:p-6 text-sm leading-relaxed">
          {/* LGPD */}
          <div>
            <h2 className="mb-2 flex items-center gap-2 text-base font-bold text-foreground">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-gold-500"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="16" r="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
              Proteção de Dados (LGPD)
            </h2>
            <p className="text-muted">
              Ao utilizar esta plataforma, você autoriza o SaúdeGPT a coletar e armazenar
              seus dados de navegação, progresso acadêmico e desempenho para fins exclusivos
              de melhoria do ensino e acompanhamento pedagógico. Seus dados não serão
              compartilhados com terceiros sem seu consentimento expresso, conforme a
              Lei Geral de Proteção de Dados (Lei 13.709/2018).
            </p>
          </div>

          {/* Disclaimer Formativo */}
          <div>
            <h2 className="mb-2 flex items-center gap-2 text-base font-bold text-foreground">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-orange-500"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
              Natureza do Conteúdo
            </h2>
            <div className="space-y-3 text-muted">
              <p>
                <strong>Esta plataforma tem caráter exclusivamente educacional e teórico.</strong>
                O conteúdo aqui disponibilizado visa complementar a formação de atendentes
                de farmácia com conhecimentos técnicos, científicos e éticos.
              </p>
              <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
                <p className="font-semibold text-orange-600 dark:text-orange-400">
                  ⚠️ Este treinamento NÃO substitui:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                  <li>O treinamento presencial supervisionado por um Farmacêutico responsável;</li>
                  <li>A supervisão direta de um profissional de saúde habilitado;</li>
                  <li>A formação acadêmica exigida para profissionais da saúde;</li>
                  <li>As normas e procedimentos específicos de cada estabelecimento;</li>
                  <li>A consulta a fontes oficiais (ANVISA, CRF, Ministério da Saúde).</li>
                </ul>
              </div>
              <p>
                O atendente de farmácia deve sempre atuar sob supervisão do Farmacêutico
                responsável, respeitando os limites legais da profissão e as normas vigentes.
                Em caso de dúvida sobre qualquer orientação ao cliente, consulte
                o farmacêutico de plantão.
              </p>
            </div>
          </div>

          {/* Responsabilidade */}
          <div>
            <h2 className="mb-2 flex items-center gap-2 text-base font-bold text-foreground">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-gold-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Responsabilidade do Aluno
            </h2>
            <p className="text-muted">
              O aluno declara estar ciente de que o conhecimento adquirido nesta plataforma
              é de natureza teórica e introdutória, e que sua aplicação prática depende
              de supervisão profissional qualificada. O SaúdeGPT não se responsabiliza
              por atos praticados fora do escopo da atuação legal do atendente de farmácia.
            </p>
          </div>
        </div>

        {/* Assinatura Digital */}
        <div className="relative mt-6 rounded-xl border border-border/40 bg-surface/30 p-5 sm:p-6">
          <h3 className="mb-1 text-sm font-bold">Assinatura Digital</h3>
          <p className="mb-4 text-xs text-muted">
            Digite seu nome completo abaixo para assinar digitalmente este termo.
            A assinatura ficará registrada na plataforma com data e hora.
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="assinatura-digital" className="mb-1.5 block text-xs font-medium text-foreground/80">
                Nome completo (igual ao documento)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                </span>
                <input
                  id="assinatura-digital"
                  type="text"
                  value={assinatura}
                  onChange={(e) => { setAssinatura(e.target.value); setErro(""); }}
                  placeholder="Digite seu nome completo"
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/5 border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500/50 transition-all text-sm"
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Canvas de assinatura visual (opcional - só texto por enquanto) */}
            <div className="rounded-lg border border-dashed border-border/60 bg-surface/20 p-4 text-center">
              <p className="text-xs text-muted italic">
                Assinado digitalmente por: <strong className="text-foreground">{assinatura || "———"}</strong>
              </p>
              <p className="mt-1 text-[10px] text-muted">
                Em {hoje} · Válido como declaração de consentimento
              </p>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 rounded-lg border border-border/30 bg-surface/20 p-3 cursor-pointer hover:bg-surface/40 transition-colors">
              <input
                type="checkbox"
                checked={liEConcordo}
                onChange={(e) => { setLiEConcordo(e.target.checked); setErro(""); }}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-gold-600 focus:ring-green-500/40 focus:ring-offset-0"
              />
              <span className="text-xs sm:text-sm leading-relaxed text-muted">
                Li e concordo com os termos acima. Estou ciente de que este treinamento
                é de caráter <strong>teórico e educacional</strong> e <strong>não substitui</strong> o
                treinamento presencial com um Farmacêutico ou outro profissional de saúde habilitado.
              </span>
            </label>
          </div>

          {/* Erro */}
          {erro && (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
              {erro}
            </div>
          )}
        </div>

        {/* Botão */}
        <div className="relative mt-6">
          <button
            onClick={handleAceitar}
            disabled={enviando}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold text-sm shadow-lg shadow-green-500/25 hover:brightness-110 hover:shadow-xl hover:shadow-gold-500/30 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {enviando ? (
              <span className="inline-flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" /></svg>
                Salvando assinatura…
              </span>
            ) : (
              "Assinar e continuar"
            )}
          </button>
          <p className="mt-2 text-center text-[10px] text-muted">
            Ao clicar, você assina digitalmente o termo de consentimento
          </p>
        </div>
      </div>
    </div>
  );
}
