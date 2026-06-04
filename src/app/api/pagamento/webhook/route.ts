import { NextRequest, NextResponse } from "next/server";
import { processarWebhookDev } from "@/lib/pagamento";

/**
 * Webhook do Stripe para receber eventos de pagamento/assinatura.
 *
 * Em dev (sem STRIPE_SECRET_KEY), apenas loga e retorna 200.
 * Em produção, deve validar a assinatura com o Stripe SDK
 * e processar eventos como:
 *   - checkout.session.completed
 *   - customer.subscription.updated
 *   - customer.subscription.deleted
 *   - invoice.paid
 *   - invoice.payment_failed
 */
export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("stripe-signature");

    // Modo dev: sem Stripe SDK
    if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
      const payload = JSON.parse(rawBody);
      const resultado = processarWebhookDev(payload);
      return NextResponse.json(resultado);
    }

    // ─── Produção: validar webhook com Stripe SDK ───
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    // const event = stripe.webhooks.constructEvent(
    //   rawBody,
    //   signature!,
    //   process.env.STRIPE_WEBHOOK_SECRET!,
    // );
    //
    // switch (event.type) {
    //   case "checkout.session.completed": { ... }
    //   case "customer.subscription.updated": { ... }
    //   case "invoice.paid": { ... }
    //   case "invoice.payment_failed": { ... }
    // }
    //
    // return NextResponse.json({ received: true });

    return NextResponse.json(
      { erro: "Stripe webhook não configurado completamente." },
      { status: 500 },
    );
  } catch (error) {
    console.error("[webhook/stripe] Erro:", error);
    return NextResponse.json(
      { erro: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
