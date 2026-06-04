/* ─── Planos disponíveis ─── */
export interface Plano {
  id: string;
  nome: string;
  slug: string;
  preco: number;       // centavos (BRL)
  precoExibicao: string;
  periodo: string;
  parcelas: number;
  destaque?: string;   // badge: "MAIS POPULAR" | "MAIS ECONÔMICO"
  economia?: string;
}

export const PLANOS: Plano[] = [
  {
    id: "mensal",
    nome: "Mensal",
    slug: "mensal",
    preco: 2990,
    precoExibicao: "R$ 29,90",
    periodo: "/mês",
    parcelas: 1,
  },
  {
    id: "trimestral",
    nome: "Trimestral",
    slug: "trimestral",
    preco: 6990,
    precoExibicao: "R$ 69,90",
    periodo: "/trimestre",
    parcelas: 3,
    destaque: "MAIS POPULAR",
    economia: "≈ R$ 19,90/mês",
  },
  {
    id: "anual",
    nome: "Anual",
    slug: "anual",
    preco: 19990,
    precoExibicao: "R$ 199,90",
    periodo: "/ano",
    parcelas: 12,
    destaque: "MAIS ECONÔMICO",
    economia: "≈ R$ 16,66/mês",
  },
];

/* ─── Stripe dev mode ─── */
const DEV_MODE = !process.env.STRIPE_SECRET_KEY;

export interface SessaoCheckout {
  url: string;
  sessionId: string;
}

/**
 * Cria uma sessão de checkout (dev mode sem Stripe SDK).
 *
 * Em produção, integraria Stripe Checkout Sessions API via fetch
 * usando STRIPE_SECRET_KEY. Em dev, simula o redirect.
 */
export async function criarSessaoCheckout(planoId: string): Promise<SessaoCheckout> {
  const plano = PLANOS.find((p) => p.id === planoId || p.slug === planoId);

  if (!plano) {
    throw new Error(`Plano não encontrado: ${planoId}`);
  }

  if (DEV_MODE) {
    console.log("[pagamento] DEV MODE — simulando checkout");
    console.log(`[pagamento] Plano: ${plano.nome} | Valor: ${plano.precoExibicao}`);

    return {
      url: `/pagamento/sucesso?plano=${plano.slug}&session_id=dev_${plano.slug}_${Date.now()}`,
      sessionId: `cs_dev_${plano.slug}_${Date.now()}`,
    };
  }

  // ─── Produção: chamar Stripe Checkout Session API ───
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  // const session = await stripe.checkout.sessions.create({
  //   mode: "subscription",
  //   payment_method_types: ["card"],
  //   line_items: [{ price_data: { ... }, quantity: 1 }],
  //   success_url: `${origin}/pagamento/sucesso?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${origin}/#planos`,
  // });
  // return { url: session.url!, sessionId: session.id };

  throw new Error("Stripe não configurado. Defina STRIPE_SECRET_KEY no ambiente.");
}

export type StatusWebhook =
  | "checkout.session.completed"
  | "customer.subscription.updated"
  | "customer.subscription.deleted"
  | "invoice.paid"
  | "invoice.payment_failed";

/**
 * Processa evento de webhook do Stripe (dev mode simulado).
 */
export function processarWebhookDev(payload: Record<string, unknown>) {
  const tipo = payload.type as StatusWebhook;
  console.log("[pagamento] Webhook recebido (dev):", tipo);
  console.log("[pagamento] Payload:", JSON.stringify(payload, null, 2));
  return { recebido: true, tipo };
}
