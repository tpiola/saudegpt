import type { Metadata } from "next";
import Link from "next/link";
import { AguardandoPoller } from "@/components/aguardando-poller";
import { Card } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Aguardando aprovação",
  description: "Seu cadastro está em análise pela coordenação.",
};

export default function AguardandoAprovacaoPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:py-24">
      <AguardandoPoller />
      <Card className="relative overflow-hidden text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(400px 200px at 50% 0%, rgba(37,99,235,0.35), transparent 70%)",
          }}
        />
        <div className="relative">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-white">
            <Icon name="clock" size={32} />
          </span>
          <h1 className="mt-6 text-2xl font-extrabold">Cadastro em análise</h1>
          <p className="mt-3 text-muted">
            Sua matrícula foi recebida. O administrador do curso irá liberar seu acesso em breve.
            Você receberá acesso ao painel e trilhas assim que for aprovado.
          </p>
          <p className="mt-4 text-sm text-subtle">
            Dica: mantenha esta página aberta ou volte mais tarde — ao aprovar, acesse{" "}
            <Link href="/" className="font-semibold text-gold-600">
              Meu painel
            </Link>
            .
          </p>
        </div>
      </Card>
    </div>
  );
}
