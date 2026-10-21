import type { Metadata } from "next";
import Image from "next/image";
import { CampusBoard } from "@/components/campus-board";
import { fontesPratica } from "@/content/pratica-balcao";
export const metadata: Metadata = {
  title: "Campus de aprendizagem",
  description:
    "24 simulações, 48 decisões e 12 cartões de revisão. Do primeiro acolhimento a situações complexas de atendimento profissional.",
  alternates: { canonical: "https://saudegpt.com/campus" },
};
export default function Page() {
  return (
    <div className="eco-container eco-section">
      <header className="campus-intro">
        <div>
          <p className="eco-kicker">Escola de Saúde - Franca J</p>
          <h1 className="eco-title">
            Seu conhecimento.
            <br />
            Em movimento.
          </h1>
          <p className="eco-lead">
            Aprenda o essencial. Treine uma conversa. Entenda sua decisão. Aqui,
            cada etapa aproxima o estudo de um atendimento mais humano e
            profissional.
          </p>
          <div className="campus-intro-facts">
            <span>24 situações</span>
            <span>48 decisões</span>
            <span>3 níveis de aprendizado</span>
          </div>
        </div>
        <div className="campus-intro-photo">
          <Image
            src="/campus/cuidado-cotidiano.webp"
            alt="Medicamentos e materiais de cuidado sobre uma superfície amarela"
            fill
            priority
            sizes="(max-width:800px) 100vw, 38vw"
          />
        </div>
      </header>
      <CampusBoard />
      <details className="campus-source-details">
        <summary>Consultar fontes e critérios do conteúdo</summary>
        <p>
          Conteúdo educativo original. Referências técnicas consultadas em
          21/10/2026. Situações simuladas não representam diagnóstico ou
          prescrição. Use o protocolo vigente da unidade e peça a avaliação do
          farmacêutico nas questões clínicas.
        </p>
        {fontesPratica.map((f) => (
          <a href={f.url} key={f.url} target="_blank" rel="noopener noreferrer">
            {f.nome} ↗
          </a>
        ))}
      </details>
    </div>
  );
}
