import Image from "next/image";
import Link from "next/link";
import { getTrilha } from "@/content/curriculo";
import { fotoTrilha } from "@/lib/ecossistema";
import { EcosystemHeader } from "./ecosystem-header";
import { EcosystemFooter } from "./ecosystem-footer";
import { ApoioTratamento } from "./apoio-tratamento";
export function VerticalLearning({ trilhaId }: { trilhaId: string }) {
  const t = getTrilha(trilhaId);
  if (!t) return null;
  return (
    <>
      <EcosystemHeader />
      <main id="conteudo-principal">
        <div className="eco-container eco-section">
          <p className="eco-kicker">Conhecimento em saúde para a drogaria</p>
          <div className="eco-track-hero">
            <div>
              <h1 className="eco-title">{t.titulo}</h1>
              <p className="eco-lead">{t.descricao}</p>
              <Link className="eco-button" href={`/trilhas/${t.id}`}>
                Iniciar →
              </Link>
            </div>
            <div className="eco-track-photo">
              <Image
                src={fotoTrilha(t.id)}
                alt={`Aprender: ${t.titulo}`}
                fill
                priority
                sizes="(max-width:800px) 100vw, 40vw"
              />
            </div>
          </div>
          <h2 className="eco-title">O que você vai aprender</h2>
          <p className="eco-lead">
            {t.modulos.length} módulos de conteúdo educativo. O aprendizado não
            habilita ao exercício de outra profissão: acolha, reconheça
            necessidades e encaminhe aos profissionais responsáveis.
          </p>
          <div className="eco-modules">
            {t.modulos.map((m, i) => (
              <article className="eco-module" key={m.id}>
                <p className="eco-kicker">Módulo {i + 1}</p>
                <h2>{m.titulo}</h2>
                <p className="eco-lead">{m.descricao}</p>
                <Link
                  className="eco-text-link"
                  href={`/trilhas/${t.id}/${m.id}`}
                >
                  Iniciar módulo →
                </Link>
              </article>
            ))}
          </div>
          <ApoioTratamento />
        </div>
      </main>
      <EcosystemFooter />
    </>
  );
}
