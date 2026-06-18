"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { lerIdCadastro, lerStatusLocal, salvarStatusLocal } from "@/lib/cadastro-client";
import {
  Save,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Upload,
  User,
} from "lucide-react";

export default function FichaCadastralPage() {
  const router = useRouter();
  const [salvando, setSalvando] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [erro, setErro] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  // Campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [endereco, setEndereco] = useState("");
  const [motivacao, setMotivacao] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [horasDia, setHorasDia] = useState("1");
  const [diasDisponiveis, setDiasDisponiveis] = useState<string[]>([
    "seg", "ter", "qua", "qui", "sex",
  ]);
  const [selfieUrl, setSelfieUrl] = useState("");

  const DIAS_OPCOES = [
    { id: "dom", label: "Dom" },
    { id: "seg", label: "Seg" },
    { id: "ter", label: "Ter" },
    { id: "qua", label: "Qua" },
    { id: "qui", label: "Qui" },
    { id: "sex", label: "Sex" },
    { id: "sab", label: "Sáb" },
  ];

  useEffect(() => {
    const s = lerStatusLocal();
    setStatus(s);
    if (s === "aprovado") {
      router.replace("/dashboard");
    }
    // Carrega dados salvos do localStorage
    try {
      const saved = localStorage.getItem("fap-ficha-dados");
      if (saved) {
        const data = JSON.parse(saved);
        setNome(data.nome || "");
        setEmail(data.email || "");
        setWhatsapp(data.whatsapp || "");
        setCpf(data.cpf || "");
        setRg(data.rg || "");
        setEndereco(data.endereco || "");
        setMotivacao(data.motivacao || "");
        setObjetivo(data.objetivo || "");
        setHorasDia(data.horasDia || "1");
        setDiasDisponiveis(data.diasDisponiveis || ["seg", "ter", "qua", "qui", "sex"]);
        setSelfieUrl(data.selfieUrl || "");
      }
    } catch {}
  }, [router]);

  const toggleDia = (dia: string) => {
    setDiasDisponiveis((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia],
    );
  };

  const handleSalvar = useCallback(async () => {
    setSalvando(true);
    setErro("");
    setSalvo(false);

    const dados = {
      nome: nome.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      cpf: cpf.trim(),
      rg: rg.trim(),
      endereco: endereco.trim(),
      motivacao: motivacao.trim(),
      objetivo: objetivo.trim(),
      horasDia,
      diasDisponiveis,
      selfieUrl,
    };

    // Validação básica
    if (!dados.nome || !dados.email) {
      setErro("Nome e e-mail são obrigatórios.");
      setSalvando(false);
      return;
    }

    try {
      // Salva localmente (fallback)
      localStorage.setItem("fap-ficha-dados", JSON.stringify(dados));
      localStorage.setItem("fap-ficha-completa", "true");

      // Se Supabase estiver configurado, tenta salvar na nuvem
      try {
        const res = await fetch("/api/cadastros/ficha", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        });
        if (!res.ok) {
          console.warn("[ficha] Supabase indisponível, dados salvos localmente.");
        }
      } catch {
        console.warn("[ficha] Erro ao sincronizar com servidor, dados salvos localmente.");
      }

      setSalvo(true);
      setTimeout(() => {
        // Redireciona para aguardar aprovação
        router.push("/aguardando-aprovacao");
      }, 1500);
    } catch {
      setErro("Erro ao salvar. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  }, [nome, email, whatsapp, cpf, rg, endereco, motivacao, objetivo, horasDia, diasDisponiveis, selfieUrl, router]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
      >
        <ArrowLeft size={14} />
        Voltar
      </button>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          Ficha Cadastral
        </h1>
        <p className="mt-1 text-sm text-muted">
          Preencha seus dados para completar sua matrícula.
        </p>
      </div>

      {erro && (
        <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          <AlertCircle size={16} />
          {erro}
        </div>
      )}

      {salvo && (
        <div className="mb-6 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600">
          <CheckCircle2 size={16} />
          Dados salvos com sucesso! Redirecionando...
        </div>
      )}

      <div className="space-y-6 rounded-2xl border border-border bg-surface p-6">
        {/* Identificação */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
            <User size={15} className="text-gold-600" />
            Identificação
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                Nome completo *
              </label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                E-mail *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                WhatsApp
              </label>
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                CPF
              </label>
              <input
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
                placeholder="000.000.000-00"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                RG
              </label>
              <input
                value={rg}
                onChange={(e) => setRg(e.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
                placeholder="00.000.000-0"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-xs font-medium text-muted">
              Endereço
            </label>
            <input
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
              placeholder="Rua, número, bairro, cidade - UF"
            />
          </div>
        </div>

        {/* Perfil Educacional */}
        <div className="border-t border-border pt-6">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
            <CheckCircle2 size={15} className="text-gold-600" />
            Perfil Educacional
          </h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                O que te motivou a fazer este curso?
              </label>
              <textarea
                value={motivacao}
                onChange={(e) => setMotivacao(e.target.value)}
                className="h-20 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
                placeholder="Conte um pouco sobre sua motivação..."
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                Qual seu objetivo profissional?
              </label>
              <textarea
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                className="h-20 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
                placeholder="O que você espera alcançar?"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted">
                  Horas disponíveis por dia
                </label>
                <select
                  value={horasDia}
                  onChange={(e) => setHorasDia(e.target.value)}
                  className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground focus:border-gold-500/50 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 8].map((h) => (
                    <option key={h} value={h}>
                      {h} hora{h > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted">
                  Dias disponíveis para estudo
                </label>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {DIAS_OPCOES.map((dia) => (
                    <button
                      key={dia.id}
                      onClick={() => toggleDia(dia.id)}
                      className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium transition ${
                        diasDisponiveis.includes(dia.id)
                          ? "border-gold-500 bg-gold-500/15 text-gold-600"
                          : "border-border text-muted hover:border-gold-500/30"
                      }`}
                    >
                      {dia.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selfie / Foto */}
        <div className="border-t border-border pt-6">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
            <Upload size={15} className="text-gold-600" />
            Foto (Selfie)
          </h2>
          <p className="mb-3 text-xs text-muted">
            Faça o upload de uma selfie ou foto de identificação (opcional).
          </p>
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2">
              {selfieUrl ? (
                <img
                  src={selfieUrl}
                  alt="Selfie"
                  className="h-full w-full object-cover"
                />
              ) : (
                <User size={28} className="text-muted/40" />
              )}
            </div>
            <input
              type="text"
              value={selfieUrl}
              onChange={(e) => setSelfieUrl(e.target.value)}
              className="h-10 flex-1 rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted/50 focus:border-gold-500/50 focus:outline-none"
              placeholder="URL da foto (ou faça upload)"
            />
          </div>
        </div>

        {/* Botão Salvar */}
        <div className="border-t border-border pt-6">
          <button
            onClick={handleSalvar}
            disabled={salvando || salvo}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-50"
          >
            <Save size={16} />
            {salvando ? "Salvando..." : "Salvar Ficha Cadastral"}
          </button>
          <p className="mt-2 text-center text-[11px] text-muted">
            Seus dados estão seguros e serão usados apenas para sua matrícula.
          </p>
        </div>
      </div>
    </div>
  );
}
