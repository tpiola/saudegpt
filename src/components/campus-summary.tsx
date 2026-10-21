"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { casosCampus } from "@/content/campus";
import {
  CAMPUS_EMPTY,
  CAMPUS_EVENT,
  lerCampus,
  pontosCampus,
} from "@/lib/campus-progress";
export function CampusSummary() {
  const [p, setP] = useState(CAMPUS_EMPTY),
    [ready, setReady] = useState(false);
  useEffect(() => {
    const sync = () => {
      setP(lerCampus());
      setReady(true);
    };
    sync();
    window.addEventListener(CAMPUS_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CAMPUS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const proximo = casosCampus.find((c) => !p.concluidos.includes(c.id));
  return (
    <section className="campus-summary">
      <div>
        <p className="eco-kicker">Seu campus de aprendizagem</p>
        <h2>
          {proximo
            ? "Seu próximo passo tem contexto."
            : "Você concluiu todos os casos. Continue revisando."}
        </h2>
        <p>
          {proximo
            ? `${proximo.titulo} · ${proximo.minutos} min de prática`
            : `${casosCampus.length} situações para revisitar e discutir com a equipe.`}
        </p>
      </div>
      <div className="campus-summary-score">
        <strong>
          {ready ? pontosCampus(p) : "—"}
          <span> XP</span>
        </strong>
        <p>
          {ready ? p.concluidos.length : "—"} de {casosCampus.length} casos
          concluídos
        </p>
        <Link className="eco-button" href="/campus">
          {p.concluidos.length ? "Continuar no campus" : "Iniciar no campus"}{" "}
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
