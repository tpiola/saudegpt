"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  RotateCcw,
  Award,
  BookOpen,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { casosCampus, memoriaCampus, niveisCampus } from "@/content/campus";
import type { Nivel } from "@/content/types";
import {
  CAMPUS_EMPTY,
  lerCampus,
  normalizarCampus,
  pontosCampus,
  salvarCampus,
  type CampusProgress,
} from "@/lib/campus-progress";
export function CampusBoard() {
  const [progresso, setProgresso] = useState<CampusProgress>(CAMPUS_EMPTY),
    [pronto, setPronto] = useState(false);
  const [modo, setModo] = useState<"simular" | "revisar">("simular"),
    [nivel, setNivel] = useState<Nivel>("basico"),
    [casoId, setCasoId] = useState(casosCampus[0].id),
    [passo, setPasso] = useState(0),
    [resposta, setResposta] = useState<number | null>(null),
    [conferido, setConferido] = useState(false),
    [finalizado, setFinalizado] = useState(false),
    [ganho, setGanho] = useState(0),
    [soRevisao, setSoRevisao] = useState(false),
    [cartao, setCartao] = useState(0),
    [virado, setVirado] = useState(false);
  useEffect(() => {
    setProgresso(lerCampus());
    setPronto(true);
  }, []);
  const caso = casosCampus.find((c) => c.id === casoId) ?? casosCampus[0],
    etapa = caso.etapas[passo],
    acertou = resposta === etapa.correta;
  const lista = casosCampus.filter(
    (c) =>
      c.nivel === nivel && (!soRevisao || progresso.revisar.includes(c.id)),
  );
  const feitosNivel = casosCampus.filter(
    (c) => c.nivel === nivel && progresso.concluidos.includes(c.id),
  ).length;
  const totalNivel = casosCampus.filter((c) => c.nivel === nivel).length;
  function gravar(p: CampusProgress) {
    const seguro = normalizarCampus(p);
    setProgresso(seguro);
    salvarCampus(seguro);
  }
  function abrir(id: string) {
    const c = casosCampus.find((c) => c.id === id);
    if (!c) return;
    setCasoId(id);
    setNivel(c.nivel);
    setPasso(0);
    setResposta(null);
    setConferido(false);
    setFinalizado(false);
    setGanho(0);
  }
  function trocarNivel(n: Nivel) {
    setSoRevisao(false);
    abrir(
      (casosCampus.find(
        (c) => c.nivel === n && !progresso.concluidos.includes(c.id),
      ) ?? casosCampus.find((c) => c.nivel === n))!.id,
    );
  }
  function conferir() {
    if (resposta === null) return;
    setConferido(true);
    if (!acertou)
      gravar({ ...progresso, revisar: [...progresso.revisar, caso.id] });
  }
  function avancar() {
    if (!conferido || !acertou) return;
    if (passo + 1 < caso.etapas.length) {
      setPasso(passo + 1);
      setResposta(null);
      setConferido(false);
      return;
    }
    const novo = !progresso.concluidos.includes(caso.id);
    setGanho(
      novo
        ? caso.nivel === "basico"
          ? 30
          : caso.nivel === "intermediario"
            ? 45
            : 60
        : 0,
    );
    gravar({
      ...progresso,
      concluidos: [...progresso.concluidos, caso.id],
      revisar: progresso.revisar.filter((id) => id !== caso.id),
    });
    setFinalizado(true);
  }
  const proximo =
    casosCampus.find(
      (c) =>
        c.nivel === nivel &&
        !progresso.concluidos.includes(c.id) &&
        c.id !== caso.id,
    ) ??
    casosCampus.find(
      (c) => !progresso.concluidos.includes(c.id) && c.id !== caso.id,
    );
  return (
    <div className="campus-board">
      <section className="campus-score" aria-label="Seu progresso">
        <div>
          <span>Seu percurso</span>
          <strong>
            {pronto ? progresso.concluidos.length : "—"}
            <small> / {casosCampus.length} casos</small>
          </strong>
        </div>
        <div>
          <span>Experiência conquistada</span>
          <strong>
            {pronto ? pontosCampus(progresso) : "—"}
            <small> XP</small>
          </strong>
        </div>
        <div>
          <span>Para retomar</span>
          <strong>
            {pronto ? progresso.revisar.length : "—"}
            <small> casos</small>
          </strong>
        </div>
        <div className="campus-total-progress">
          <span>Uma decisão por vez.</span>
          <progress
            aria-label="Progresso no campus"
            max={casosCampus.length}
            value={progresso.concluidos.length}
          />
          <small>Volte quando fizer sentido para sua rotina.</small>
        </div>
      </section>
      <div className="campus-mode" role="group" aria-label="Escolher atividade">
        <button
          aria-pressed={modo === "simular"}
          onClick={() => setModo("simular")}
        >
          <MessageCircle size={18} /> Simulações de atendimento
        </button>
        <button
          aria-pressed={modo === "revisar"}
          onClick={() => setModo("revisar")}
        >
          <BookOpen size={18} /> Cartões de revisão
        </button>
      </div>
      {modo === "simular" ? (
        <>
          <div
            className="campus-levels"
            role="group"
            aria-label="Nível de aprendizado"
          >
            {niveisCampus.map((n, i) => (
              <button
                key={n.id}
                aria-pressed={nivel === n.id}
                onClick={() => trocarNivel(n.id)}
              >
                <span>
                  0{i + 1} · {n.nome}
                </span>
                <strong>{n.titulo}</strong>
                <small>{n.descricao}</small>
              </button>
            ))}
          </div>
          <div className="campus-lab">
            <aside className="campus-case-list" aria-label="Escolher simulação">
              <div className="campus-list-head">
                <h2>Seu laboratório</h2>
                <span>
                  {feitosNivel}/{totalNivel}
                </span>
              </div>
              <label className="campus-review-filter">
                <input
                  type="checkbox"
                  checked={soRevisao}
                  onChange={(e) => {
                    setSoRevisao(e.target.checked);
                    if (e.target.checked) {
                      const primeiro = casosCampus.find(
                        (c) =>
                          c.nivel === nivel && progresso.revisar.includes(c.id),
                      );
                      if (primeiro) abrir(primeiro.id);
                    }
                  }}
                />{" "}
                Mostrar só o que preciso rever
              </label>
              {lista.length ? (
                lista.map((c, i) => (
                  <button
                    key={c.id}
                    aria-pressed={casoId === c.id}
                    onClick={() => abrir(c.id)}
                  >
                    <span className="campus-case-number">
                      {progresso.concluidos.includes(c.id) ? (
                        <Check size={15} />
                      ) : (
                        String(i + 1).padStart(2, "0")
                      )}
                    </span>
                    <span>
                      {c.titulo}
                      <small>
                        {c.minutos} min · {c.etapas.length}{" "}
                        {c.etapas.length === 1 ? "decisão" : "decisões"}
                      </small>
                    </span>
                    <ChevronRight size={15} />
                  </button>
                ))
              ) : (
                <p role="status" className="campus-empty">
                  Nenhum caso pendente de revisão neste nível. Escolha outro
                  nível ou mostre todos.
                </p>
              )}
            </aside>
            <section
              className="campus-stage"
              aria-label="Simulação em andamento"
            >
              {finalizado ? (
                <div className="campus-finish" role="status">
                  <span className="campus-earned">
                    <Award size={28} />
                  </span>
                  <p className="eco-kicker">Caso concluído</p>
                  <h2>
                    Você conectou
                    <br />
                    conhecimento e cuidado.
                  </h2>
                  <p>{caso.fechamento}</p>
                  <strong className="campus-xp">
                    {ganho
                      ? `+${ganho} XP conquistados`
                      : "Conteúdo revisado. Seu progresso foi preservado."}
                  </strong>
                  <p className="campus-small">
                    {ganho
                      ? "Os pontos contam uma vez por caso. Você pode voltar para treinar sempre que quiser."
                      : "Revisar fortalece o aprendizado, sem duplicar pontos."}
                  </p>
                  <div className="eco-case-actions">
                    {proximo ? (
                      <button
                        className="eco-button"
                        onClick={() => abrir(proximo.id)}
                      >
                        Iniciar próximo caso <ArrowRight size={17} />
                      </button>
                    ) : (
                      <button
                        className="eco-button"
                        onClick={() => setModo("revisar")}
                      >
                        Revisar conceitos <ArrowRight size={17} />
                      </button>
                    )}
                    <button
                      className="eco-text-link"
                      onClick={() => abrir(caso.id)}
                    >
                      <RotateCcw size={15} /> Refazer conversa
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="campus-stage-top">
                    <span>{caso.tema}</span>
                    <span>
                      Etapa {passo + 1} de {caso.etapas.length}
                    </span>
                  </div>
                  <h2>{caso.titulo}</h2>
                  <p className="campus-objective">{caso.objetivo}</p>
                  <div
                    className="campus-turn-progress"
                    aria-label={`Etapa ${passo + 1} de ${caso.etapas.length}`}
                  >
                    {caso.etapas.map((_, i) => (
                      <span className={i <= passo ? "is-active" : ""} key={i} />
                    ))}
                  </div>
                  <div className="campus-client">
                    <span>Cliente / situação</span>
                    <p>“{etapa.cliente}”</p>
                  </div>
                  <fieldset key={`${caso.id}-${passo}`}>
                    <legend>{etapa.pergunta}</legend>
                    <div className="eco-case-options">
                      {etapa.opcoes.map((op, i) => (
                        <label
                          key={op}
                          className={`eco-case-option ${conferido && i === etapa.correta ? "is-correct" : ""} ${resposta === i ? "is-selected" : ""}`}
                        >
                          <input
                            type="radio"
                            name={`decisao-${caso.id}-${passo}`}
                            checked={resposta === i}
                            disabled={conferido}
                            onChange={() => setResposta(i)}
                          />
                          <span>{op}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  {conferido && (
                    <div
                      role="status"
                      className={`eco-case-feedback ${acertou ? "campus-feedback-success" : ""}`}
                    >
                      <h3>
                        {acertou
                          ? "Boa decisão. Entenda o motivo."
                          : "Vale revisar este ponto."}
                      </h3>
                      <p>{etapa.explicacao}</p>
                      <div className="campus-speech">
                        <strong>Uma forma de falar</strong>
                        <p>“{etapa.fala}”</p>
                      </div>
                    </div>
                  )}
                  <div className="eco-case-actions">
                    {!conferido ? (
                      <button
                        className="eco-button"
                        disabled={!pronto || resposta === null}
                        onClick={conferir}
                      >
                        Conferir decisão <ArrowRight size={17} />
                      </button>
                    ) : acertou ? (
                      <button className="eco-button" onClick={avancar}>
                        {passo + 1 === caso.etapas.length
                          ? "Concluir caso"
                          : "Continuar conversa"}{" "}
                        <ArrowRight size={17} />
                      </button>
                    ) : (
                      <button
                        className="eco-button"
                        onClick={() => {
                          setResposta(null);
                          setConferido(false);
                        }}
                      >
                        <RotateCcw size={17} /> Tentar outra resposta
                      </button>
                    )}
                  </div>
                  <p className="campus-small">
                    Situação fictícia para treinamento. Não insira dados de
                    clientes. O encaminhamento clínico cabe ao farmacêutico e à
                    equipe habilitada.
                  </p>
                </>
              )}
            </section>
          </div>
        </>
      ) : (
        <section className="campus-memory" aria-label="Cartões de revisão">
          <div>
            <p className="eco-kicker">Lembrar, explicar, aplicar</p>
            <h2>
              Um conceito.
              <br />
              Uma explicação sua.
            </h2>
            <p>
              Leia a pergunta e pense em como explicaria a um colega. Depois,
              abra a resposta e compare.
            </p>
            <span>
              {progresso.cartoes.length} de {memoriaCampus.length} cartões
              revisados
            </span>
          </div>
          <div className="campus-memory-card">
            <span>
              Cartão {cartao + 1} / {memoriaCampus.length}
            </span>
            <h3>{memoriaCampus[cartao].pergunta}</h3>
            <button
              className="eco-text-link"
              aria-expanded={virado}
              aria-controls="campus-card-answer"
              onClick={() => setVirado(!virado)}
            >
              {virado ? "Ocultar explicação" : "Revelar explicação"}{" "}
              <ChevronRight size={17} />
            </button>
            {virado && (
              <div id="campus-card-answer" className="campus-memory-answer">
                <p>{memoriaCampus[cartao].resposta}</p>
                <button
                  className="eco-button"
                  onClick={() => {
                    gravar({
                      ...progresso,
                      cartoes: [...progresso.cartoes, memoriaCampus[cartao].id],
                    });
                    setCartao((cartao + 1) % memoriaCampus.length);
                    setVirado(false);
                  }}
                >
                  Marcar como revisado <Check size={16} />
                </button>
              </div>
            )}
            <div className="campus-card-controls">
              <button
                onClick={() => {
                  setCartao(
                    (cartao - 1 + memoriaCampus.length) % memoriaCampus.length,
                  );
                  setVirado(false);
                }}
              >
                ← Anterior
              </button>
              <button
                onClick={() => {
                  setCartao((cartao + 1) % memoriaCampus.length);
                  setVirado(false);
                }}
              >
                Próximo →
              </button>
            </div>
          </div>
        </section>
      )}
      <section className="campus-achievements" aria-label="Suas conquistas">
        <h2>Competências que você está construindo</h2>
        <div>
          {niveisCampus.map((n) => {
            const casos = casosCampus.filter((c) => c.nivel === n.id),
              total = casos.filter((c) =>
                progresso.concluidos.includes(c.id),
              ).length,
              completo = total === casos.length;
            return (
              <article className={completo ? "is-earned" : ""} key={n.id}>
                <ShieldCheck size={24} />
                <div>
                  <h3>{n.conquista}</h3>
                  <p>
                    {completo
                      ? "Conquista alcançada"
                      : `${total} de ${casos.length} casos concluídos`}{" "}
                    · {n.nome}
                  </p>
                </div>
                {completo && <Check size={18} />}
              </article>
            );
          })}
        </div>
        <p className="campus-small">
          Conquistas de estudo, sem equivalência a título profissional. Seu
          progresso fica salvo neste navegador e não é sincronizado entre
          dispositivos.
        </p>
      </section>
      <div className="campus-next-reading">
        <BookOpen size={24} />
        <div>
          <h2>Quer aprofundar o raciocínio?</h2>
          <p>
            As aulas conectam cada decisão às explicações e aos exercícios do
            módulo.
          </p>
        </div>
        <Link
          className="eco-text-link"
          href="/trilhas/atendimento-profissional"
        >
          Abrir a trilha completa <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}
