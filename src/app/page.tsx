import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  HeartHandshake,
  ClipboardCheck,
} from "lucide-react";
import { CampusSummary } from "@/components/campus-summary";
import { niveisCampus } from "@/content/campus";
import { EcosystemHeader } from "@/components/ecosystem-header";
import { EcosystemFooter } from "@/components/ecosystem-footer";
import { ApoioTratamento } from "@/components/apoio-tratamento";
import { trilhas, totalAulas } from "@/content/curriculo";

const entradas = [
  {
    numero: "01",
    titulo: "Aprenda no seu ritmo",
    texto:
      "Trilhas organizadas em módulos, com explicações simples para você construir uma base segura.",
    href: "/trilhas",
    link: "Explorar trilhas",
    foto: "/campus/consulta-digital.webp",
    alt: "Materiais de cuidado e computador em uma mesa de trabalho",
  },
  {
    numero: "02",
    titulo: "Pratique antes do balcão",
    texto:
      "Situações que você reconhece: uma receita, uma dúvida, uma pessoa que precisa ser ouvida.",
    href: "/campus",
    link: "Resolver situações",
    foto: "/imagens/hero_comunicacao.webp",
    alt: "Conversa entre profissionais em uma farmácia",
  },
  {
    numero: "03",
    titulo: "Consulte e confirme",
    texto:
      "Fontes oficiais e materiais de apoio para aprender a conferir informações e reconhecer seus limites.",
    href: "/biblioteca",
    link: "Abrir biblioteca",
    foto: "/imagens/farmacia-balcao.webp",
    alt: "Profissional consultando informações",
  },
];
export default function Home() {
  return (
    <>
      <EcosystemHeader />
      <main id="conteudo-principal" className="eco-home">
        <section className="eco-container eco-hero">
          <div className="eco-hero-copy">
            <p className="eco-kicker">Um ecossistema para quem cuida</p>
            <h1>
              Conhecimento
              <br />
              que aproxima.
              <br />
              <span>Cuidado que fica.</span>
            </h1>
            <p>
              Aprenda saúde com clareza. Transforme situações do dia a dia da
              drogaria em um atendimento mais humano, atento e seguro.
            </p>
            <div className="eco-hero-actions">
              <Link className="eco-button" href="/trilhas/cuidado-no-balcao">
                Iniciar meu aprendizado <ArrowUpRight size={20} />
              </Link>
              <Link className="eco-text-link" href="#ecossistema">
                Conhecer o ecossistema <ArrowRight size={17} />
              </Link>
            </div>
            <div className="eco-hero-caption">
              <span aria-hidden="true" /> Acesso gratuito · No seu ritmo · Para
              a vida real
            </div>
          </div>
          <div className="eco-hero-visual">
            <div className="eco-hero-photo">
              <Image
                src="/imagens/hero_atendimento.webp"
                alt="Farmacêutica acolhendo uma cliente no balcão da farmácia"
                fill
                priority
                sizes="(max-width:800px) 100vw, 52vw"
              />
              <div className="eco-photo-label">
                <span>O cuidado começa</span>
                <strong>com uma boa conversa.</strong>
              </div>
            </div>
            <div className="eco-hero-stamp">
              <HeartHandshake size={30} />
              <span>
                Ouvir. Entender.
                <br />
                <strong>Cuidar melhor.</strong>
              </span>
            </div>
            <div className="eco-orange-bar" aria-hidden="true" />
          </div>
        </section>
        <section className="eco-container">
          <div className="eco-ecosystem-band">
            <h2>
              Seu próximo passo
              <br />
              começa aqui.
            </h2>
            <div>
              <strong>{trilhas.length}</strong>
              <span>trilhas conectadas</span>
            </div>
            <div>
              <strong>{totalAulas()}</strong>
              <span>aulas para explorar</span>
            </div>
            <div>
              <strong>24</strong>
              <span>simulações de atendimento</span>
            </div>
          </div>
        </section>
        <section className="eco-container">
          <CampusSummary />
        </section>
        <section id="ecossistema" className="eco-container eco-section">
          <div className="eco-section-head">
            <div>
              <p className="eco-kicker">Aprender, praticar, consultar</p>
              <h2 className="eco-title">
                Tudo se conecta
                <br />
                ao seu atendimento.
              </h2>
            </div>
            <p>
              Você aprende um conceito, testa uma decisão e encontra apoio para
              aplicar com responsabilidade. Um passo de cada vez.
            </p>
          </div>
          <div className="eco-entry-grid">
            {entradas.map((e) => (
              <article className="eco-entry" key={e.numero}>
                <div className="eco-entry-image">
                  <Image
                    src={e.foto}
                    alt={e.alt}
                    fill
                    sizes="(max-width:800px) 100vw, 33vw"
                  />
                </div>
                <div className="eco-entry-copy">
                  <span className="eco-number">{e.numero}</span>
                  <h3>{e.titulo}</h3>
                  <p>{e.texto}</p>
                  <Link className="eco-text-link" href={e.href}>
                    {e.link}
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="eco-container eco-section">
          <div className="eco-section-head">
            <div>
              <p className="eco-kicker">Uma base sólida. Novos desafios.</p>
              <h2 className="eco-title">
                Cresça em cada
                <br />
                conversa.
              </h2>
            </div>
            <Link href="/campus" className="eco-text-link">
              Escolher meu nível <ArrowUpRight size={20} />
            </Link>
          </div>
          <div className="campus-home-levels">
            {niveisCampus.map((n, i) => (
              <article key={n.id}>
                <span>
                  0{i + 1} · {n.nome}
                </span>
                <h3>{n.titulo}</h3>
                <p>{n.descricao}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="eco-care-section">
          <div className="eco-container eco-care-grid">
            <div className="eco-care-photo">
              <Image
                src="/imagens/card-cuidador-idosos.webp"
                alt="Acolhimento e apoio a uma pessoa idosa"
                fill
                sizes="(max-width:800px) 100vw, 40vw"
              />
            </div>
            <div className="eco-care-copy">
              <p className="eco-kicker">
                O tratamento continua depois da compra
              </p>
              <h2 className="eco-title">
                Uma receita.
                <br />
                Uma pessoa.
                <br />
                Uma rotina inteira.
              </h2>
              <p>
                Ajudar alguém a entender e manter o tratamento também faz parte
                de atender bem. Escute as dificuldades e conecte a pessoa ao
                farmacêutico.
              </p>
              <ApoioTratamento />
            </div>
          </div>
        </section>
        <section className="eco-container eco-section">
          <div className="eco-section-head">
            <div>
              <p className="eco-kicker">Comece pelo que faz diferença hoje</p>
              <h2 className="eco-title">
                Da dúvida à<br />
                boa decisão.
              </h2>
            </div>
            <Link href="/trilhas" className="eco-text-link">
              Ver todas as trilhas <ArrowUpRight size={20} />
            </Link>
          </div>
          <div className="eco-learning-grid">
            {[
              {
                icon: HeartHandshake,
                titulo: "Cuidado no balcão",
                texto:
                  "Nome, escuta, conexão, Apoio ao Tratamento e Na Rotina.",
                href: "/trilhas/cuidado-no-balcao",
                foto: "/imagens/hero_vendas.webp",
              },
              {
                icon: BookOpen,
                titulo: "Medicamentos na prática",
                texto:
                  "Conceitos essenciais e o momento certo de chamar o farmacêutico.",
                href: "/trilhas/medicamentos",
                foto: "/campus/medicamentos-estudo.webp",
              },
              {
                icon: ClipboardCheck,
                titulo: "Praticar e entender",
                texto:
                  "24 conversas, três níveis e retorno explicado para cada decisão.",
                href: "/campus",
                foto: "/imagens/atendimento-avancado.webp",
              },
            ].map((t) => (
              <Link className="eco-learning" key={t.href} href={t.href}>
                <div className="eco-learning-photo">
                  <Image
                    src={t.foto}
                    alt={`Aprendizado: ${t.titulo}`}
                    fill
                    sizes="(max-width:800px) 100vw, 33vw"
                  />
                </div>
                <div>
                  <t.icon size={24} />
                  <h3>{t.titulo}</h3>
                  <p>{t.texto}</p>
                  <span className="eco-text-link">
                    Iniciar <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="eco-container eco-section eco-values">
          <div>
            <p className="eco-kicker">Conhecimento com responsabilidade</p>
            <h2 className="eco-title">
              Saber é bom.
              <br />
              Saber conferir
              <br />é essencial.
            </h2>
          </div>
          <div className="eco-value-list">
            <article>
              <span>01</span>
              <div>
                <h3>Clareza para aprender</h3>
                <p>
                  Termos simples, exemplos reconhecíveis e exercícios com
                  explicação. Entender vem antes de decorar.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Compromisso com os fatos</h3>
                <p>
                  Consulte fontes oficiais e a bula vigente. Se a informação não
                  estiver confirmada, verifique antes de orientar.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>O farmacêutico faz parte da conversa</h3>
                <p>
                  Prescrição, interação, dose, reação ou dúvida clínica: conecte
                  o cliente ao profissional habilitado.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className="eco-container eco-last">
          <div>
            <p className="eco-kicker">
              O próximo atendimento pode ser diferente
            </p>
            <h2>
              Leve mais conhecimento.
              <br />
              Entregue mais cuidado.
            </h2>
          </div>
          <Link className="eco-button" href="/campus">
            Iniciar uma prática <ArrowUpRight size={20} />
          </Link>
        </section>
      </main>
      <EcosystemFooter />
    </>
  );
}
