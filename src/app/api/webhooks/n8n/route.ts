import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook para integração com n8n.
 * Endpoint: POST /api/webhooks/n8n
 *
 * Eventos suportados:
 * - aluno.cadastrado   → quando um aluno se matricula
 * - aula.concluida     → quando um aluno completa uma aula
 * - progresso.atualizado → quando o progresso é sincronizado
 */

type WebhookEvent =
  | { tipo: "aluno.cadastrado"; dados: { id: string; nome: string; email: string; dataMatricula: string } }
  | { tipo: "aula.concluida"; dados: { alunoId: string; aulaId: string; trilhaId: string; xp: number } }
  | { tipo: "progresso.atualizado"; dados: { alunoId: string; progresso: number; xpTotal: number; nivel: number } };

export async function POST(request: NextRequest) {
  try {
    const body: WebhookEvent = await request.json();
    const { tipo, dados } = body;

    // Validar autenticação
    const authHeader = request.headers.get("authorization");
    const secret = process.env.N8N_WEBHOOK_SECRET;

    if (secret && authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ erro: "Não autorizado" }, { status: 401 });
    }

    // Processar evento
    switch (tipo) {
      case "aluno.cadastrado": {
        console.log(`[n8n] Novo aluno: ${dados.nome} (${dados.email})`);
        // Disparar automação: email de boas-vindas, criar registro no CRM, etc.
        break;
      }

      case "aula.concluida": {
        console.log(`[n8n] Aula concluída: ${dados.aulaId} pelo aluno ${dados.alunoId}`);
        // Disparar automação: atualizar XP, verificar badges, notificar progresso
        break;
      }

      case "progresso.atualizado": {
        console.log(`[n8n] Progresso: ${dados.alunoId} → ${dados.progresso}% (Nv. ${dados.nivel})`);
        // Disparar automação: verificar milestones, enviar incentivo
        break;
      }

      default:
        return NextResponse.json(
          { erro: `Evento desconhecido: ${tipo}` },
          { status: 400 }
        );
    }

    return NextResponse.json({
      status: "ok",
      evento: tipo,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[n8n] Erro no webhook:", error);
    return NextResponse.json(
      { erro: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: "ok",
    webhook: "n8n integration",
    versao: "1.0.0",
  });
}
