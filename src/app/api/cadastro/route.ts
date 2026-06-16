import { NextResponse } from "next/server";

/**
 * POST /api/cadastro
 *
 * Recebe { nome, email, whatsapp } do formulário gratuito da homepage.
 *
 * ─── Comportamento ───
 * - DEV (process.env.NODE_ENV === "development"): apenas loga no console
 *   e salva em arquivo JSON temporário. Retorna { ok: true }.
 * - PROD: enviar e-mail para sentinelasaudeambiental@gmail.com via SMTP/Resend.
 *   (implementar conforme provedor escolhido)
 */

export async function POST(request: Request) {
  let body: { nome?: string; email?: string; whatsapp?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, erro: "JSON inválido no corpo da requisição." },
      { status: 400 },
    );
  }

  const { nome, email, whatsapp } = body;

  // ── Validação de campos obrigatórios ──
  const erros: string[] = [];

  const nomeVal = nome?.trim() ?? "";
  const emailVal = email?.trim().toLowerCase() ?? "";
  const whatsappVal = whatsapp?.trim() ?? "";

  if (!nomeVal) erros.push("Nome completo é obrigatório.");
  if (!emailVal) erros.push("E-mail é obrigatório.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    erros.push("E-mail inválido.");
  }
  if (!whatsappVal) erros.push("WhatsApp é obrigatório.");
  else if (!/^[\d\s()+-]{8,20}$/.test(whatsappVal)) {
    erros.push("WhatsApp inválido. Informe um número com DDD.");
  }

  if (erros.length > 0) {
    return NextResponse.json(
      { ok: false, erro: erros.join(" ") },
      { status: 400 },
    );
  }

  const dados = {
    nome: nomeVal,
    email: emailVal,
    whatsapp: whatsappVal,
    criadoEm: new Date().toISOString(),
  };

  // ── Modo DEV: log + salvar em arquivo JSON ──
  if (process.env.NODE_ENV === "development") {
    console.log("[CADASTRO GRATUITO]", JSON.stringify(dados, null, 2));

    // Salvar em arquivo JSON temporário (acumulativo)
    try {
      const fs = await import("fs");
      const path = await import("path");
      const tmpDir = path.join(process.cwd(), "tmp");
      if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
      const arquivo = path.join(tmpDir, "cadastros-gratuitos.json");

      let registros: typeof dados[] = [];
      if (fs.existsSync(arquivo)) {
        const conteudo = fs.readFileSync(arquivo, "utf-8");
        try {
          registros = JSON.parse(conteudo);
        } catch {
          registros = [];
        }
      }
      registros.push(dados);
      fs.writeFileSync(arquivo, JSON.stringify(registros, null, 2));
    } catch (err) {
      console.warn("[CADASTRO GRATUITO] Não foi possível salvar em arquivo:", err);
    }

    return NextResponse.json({ ok: true });
  }

  // ── Modo PROD: enviar e-mail ──
  const smtpProvider = process.env.RESEND_API_KEY ? "Resend" : "nenhum (SMTP não configurado)";
  console.log("[CADASTRO GRATUITO]", JSON.stringify({ ...dados, smtpProvider }, null, 2));
  // TODO: Integrar com Resend ou provedor SMTP quando configurado.
  // Apenas logamos o cadastro por enquanto — os dados não se perdem.

  return NextResponse.json({ ok: true });
}
