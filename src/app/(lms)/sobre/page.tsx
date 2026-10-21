import type { Metadata } from "next";
import Link from "next/link";
import { EcosystemHeader } from "@/components/ecosystem-header";
import { ApoioTratamento } from "@/components/apoio-tratamento";
import { fontesPratica } from "@/content/pratica-balcao";
export const metadata: Metadata = {
  title: "Sobre o SaúdeGPT",
  description:
    "Um ecossistema de aprendizado em saúde para a rotina da drogaria.",
};
export default function Page() {
  return (
    <>
      <EcosystemHeader />
      <div className="eco-container eco-section">
        <p className="eco-kicker">Sobre o SaúdeGPT</p>
        <h1 className="eco-title">
          Aprender para
          <br />
          atender melhor.
        </h1>
        <p className="eco-lead">
          Um ambiente gratuito para quem trabalha em drogaria e quer aprender a
          acolher, entender necessidades e apoiar o uso seguro de medicamentos.
        </p>
        <div className="eco-modules">
          <article className="eco-module">
            <h2>Como aprender por aqui</h2>
            <p className="eco-lead">
              Escolha uma trilha, leia as aulas e responda aos exercícios.
              Depois, pratique situações de balcão e confira as explicações.
              Revise o que ainda não ficou claro e converse com o farmacêutico
              da sua unidade.
            </p>
            <Link className="eco-text-link" href="/trilhas">
              Iniciar →
            </Link>
          </article>
          <article className="eco-module">
            <h2>O cuidado tem limites claros</h2>
            <p className="eco-lead">
              O conteúdo é educativo. Não substitui graduação, habilitação
              profissional, avaliação clínica nem o protocolo da unidade. O
              atendente acolhe e identifica dúvidas; o farmacêutico avalia a
              prescrição e realiza as orientações individualizadas dentro de
              suas atribuições.
            </p>
          </article>
          <article className="eco-module">
            <h2>Verdade, clareza e respeito</h2>
            <p className="eco-lead">
              Verifique informações em fontes oficiais, não prometa resultados e
              respeite as escolhas e a privacidade de cada pessoa. O SaúdeGPT é
              independente e não é uma plataforma oficial da RD Saúde.
            </p>
          </article>
        </div>
        <ApoioTratamento />
        <div className="eco-sources">
          <h2>Fontes para continuar aprendendo</h2>
          {fontesPratica.map((f) => (
            <a
              key={f.url}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {f.nome} ↗
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
