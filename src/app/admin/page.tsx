import { adminBloqueadoPorCredencialPadrao, MENSAGEM_ADMIN_BLOQUEADO } from "@/lib/server/admin-auth";
import { AdminLoginPage } from "@/components/admin-login";

export const metadata = {
  title: "Admin · Treinamento Atendente",
};

export default function AdminPage() {
  if (adminBloqueadoPorCredencialPadrao()) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          </div>
          <h1 className="text-xl font-bold text-amber-300">Painel bloqueado</h1>
          <p className="mt-2 text-sm text-muted">{MENSAGEM_ADMIN_BLOQUEADO}</p>
          <a href="/" className="mt-4 inline-flex items-center gap-1 text-sm text-brand-500 hover:text-brand-400">
            ← Voltar ao início
          </a>
        </div>
      </div>
    );
  }

  return <AdminLoginPage />;
}
