import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade (LGPD)",
  description:
    "Política de Privacidade da plataforma SaúdeGPT em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

export default function LgpdPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold">Política de Privacidade — LGPD</h1>
      <p className="text-muted mt-4">
        Esta política descreve como {site.nome} trata os dados pessoais dos
        usuários, em conformidade com a Lei nº 13.709/2018 (LGPD).
      </p>

      <h2 className="text-xl font-semibold mt-8">1. Dados que coletamos</h2>
      <ul className="list-disc pl-6 text-muted space-y-2">
        <li>
          <strong>Modo demo (padrão):</strong> nome e e-mail informados na
          matrícula ficam apenas no navegador (localStorage). Nenhum dado é
          enviado a servidores.
        </li>
        <li>
          <strong>Modo nuvem (opcional):</strong> se Supabase estiver
          configurado, o progresso pode ser sincronizado com conta autenticada
          por e-mail.
        </li>
        <li>
          <strong>Dados de navegação:</strong> coletamos estatísticas anônimas
          de uso para melhoria da plataforma (Vercel Analytics e Speed
          Insights).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">2. Finalidade do tratamento</h2>
      <p className="text-muted">
        Personalizar a experiência de estudo, gamificação e continuidade de
        aprendizado. Não utilizamos dados para tomada de decisões automatizadas
        nem para perfilamento comercial.
      </p>

      <h2 className="text-xl font-semibold mt-8">3. Compartilhamento</h2>
      <p className="text-muted">
        Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros
        para fins de marketing. Dados podem ser processados por prestadores de
        serviço essenciais ao funcionamento da plataforma (hospedagem Vercel,
        banco Supabase), sempre sob contrato de confidencialidade.
      </p>

      <h2 className="text-xl font-semibold mt-8">4. Seus direitos (LGPD)</h2>
      <p className="text-muted">
        Você pode, a qualquer momento:
      </p>
      <ul className="list-disc pl-6 text-muted space-y-1">
        <li>Solicitar confirmação da existência de tratamento de dados;</li>
        <li>Solicitar correção, anonimização ou eliminação dos dados;</li>
        <li>Revogar o consentimento a qualquer momento;</li>
        <li>Solicitar portabilidade dos dados a outro fornecedor.</li>
      </ul>
      <p className="text-muted mt-2">
        Para exercer seus direitos, entre em contato via{" "}
        <a
          href="https://www.thiagopiola.com.br"
          className="text-gold-600"
        >
          thiagopiola.com.br
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8">5. Responsável</h2>
      <p className="text-muted">
        {site.assinatura}. O encarregado pelo tratamento de dados (DPO) pode
        ser contatado pelo mesmo canal acima.
      </p>

      <p className="text-sm text-subtle mt-8">{site.assinatura}</p>
    </article>
  );
}
