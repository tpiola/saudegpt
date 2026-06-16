import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como tratamos dados na plataforma de formação Atendentes.",
};

export default function PrivacidadePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold">Política de privacidade</h1>
      <p className="text-muted mt-4">
        {site.nome} — conteúdo educativo operado com foco em conformidade com a LGPD.
      </p>
      <h2 className="text-xl font-semibold mt-8">Dados que coletamos</h2>
      <ul className="list-disc pl-6 text-muted space-y-2">
        <li>
          <strong>Modo demo (padrão):</strong> nome e e-mail informados na matrícula ficam apenas no
          navegador (localStorage). Progresso, checklist do comando diário e ranking opt-in também
          são locais.
        </li>
        <li>
          <strong>Modo nuvem (opcional):</strong> se Supabase estiver configurado, progresso pode
          ser sincronizado com conta autenticada por e-mail.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-8">Finalidade</h2>
      <p className="text-muted">
        Personalizar a experiência de estudo, gamificação e continuidade de aprendizado. Não
        vendemos dados a terceiros.
      </p>
      <h2 className="text-xl font-semibold mt-8">Seus direitos</h2>
      <p className="text-muted">
        Você pode zerar o progresso no painel ou limpar os dados do site nas configurações do
        navegador. Para dúvidas: contato via{" "}
        <a href="https://www.thiagopiola.com.br" className="text-gold-600">
          thiagopiola.com.br
        </a>
        .
      </p>
      <p className="text-sm text-subtle mt-8">{site.assinatura}</p>
    </article>
  );
}
