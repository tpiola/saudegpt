import type { Metadata } from "next";
import { PraticaBalcao } from "@/components/pratica-balcao";
import { fontesPratica } from "@/content/pratica-balcao";
export const metadata: Metadata = {
  title: "Praticar no balcão",
  description:
    "12 situações de drogaria com decisões, explicações e exemplos de conversa. Apoio ao Tratamento e Na Rotina.",
};
export default function Page() {
  return (
    <div className="eco-container eco-section">
      <p className="eco-kicker">Aprendizado que vira atitude</p>
      <h1 className="eco-title">
        Treine aqui.
        <br />
        Cuide melhor lá fora.
      </h1>
      <p className="eco-lead">
        Situações do dia a dia, sem complicar. Escolha uma resposta, entenda a
        decisão e leve a conversa para o balcão.
      </p>
      <PraticaBalcao />
      <div className="eco-sources">
        <h2>De onde vem o conhecimento</h2>
        <p>
          Referências consultadas em 21/10/2026. Os exercícios traduzem
          princípios de segurança para situações simuladas; siga o protocolo
          vigente da sua unidade.
        </p>
        {fontesPratica.map((f) => (
          <a key={f.url} href={f.url} target="_blank" rel="noopener noreferrer">
            {f.nome} ↗
          </a>
        ))}
      </div>
    </div>
  );
}
