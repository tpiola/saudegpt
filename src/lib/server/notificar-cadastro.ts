// Notificação de novo cadastro para o coordenador (best-effort).
// Usa Resend quando RESEND_API_KEY está configurada; caso contrário, não bloqueia o fluxo.
const DESTINO = "contato@thiagopiola.com.br";

// Campos vêm de formulário público — escapar antes de interpolar no HTML do e-mail.
function esc(v: string): string {
  return v
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function notificarNovoCadastro(dados: {
  nome: string;
  email: string;
  whatsapp?: string;
}): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "SaúdeGPT <onboarding@resend.dev>",
        to: [DESTINO],
        subject: `🎓 Novo cadastro aguardando aprovação — ${dados.nome.replace(/[\r\n]/g, " ")}`,
        html: `
          <h2 style="color:#16a34a">Novo aluno aguardando aprovação</h2>
          <p><b>Nome:</b> ${esc(dados.nome)}</p>
          <p><b>E-mail:</b> ${esc(dados.email)}</p>
          <p><b>WhatsApp:</b> ${esc(dados.whatsapp || "não informado")}</p>
          <p>Aprove ou rejeite no <a href="https://www.saudegpt.com/admin">Painel do Diretor</a>.</p>
        `,
      }),
    });
  } catch (err) {
    console.error("[cadastro] falha ao notificar por e-mail:", err);
  }
}
