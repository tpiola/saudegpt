"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
type Item = {
  id: string;
  titulo: string;
  descricao: string;
  foto: string;
  modulos: number;
  aulas: number;
};
export function TrilhasCatalogo({ itens }: { itens: Item[] }) {
  const [busca, setBusca] = useState("");
  const normalizar = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const filtrados = itens.filter((t) =>
    normalizar(`${t.titulo} ${t.descricao}`).includes(normalizar(busca)),
  );
  return (
    <>
      <label className="eco-search">
        <Search size={20} />
        <span className="sr-only">Buscar uma trilha</span>
        <input
          type="search"
          placeholder="O que você quer aprender hoje?"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </label>
      <p className="eco-result" aria-live="polite">
        {filtrados.length} trilhas para explorar
      </p>
      <div className="eco-course-grid">
        {filtrados.map((t) => (
          <article className="eco-course" key={t.id}>
            <div className="eco-course-photo">
              <Image
                src={t.foto}
                alt={`Tema: ${t.titulo}`}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1100px) 50vw, 33vw"
              />
              <span>
                {t.modulos} módulos · {t.aulas} aulas
              </span>
            </div>
            <div className="eco-course-body">
              <h3>{t.titulo}</h3>
              <p>{t.descricao}</p>
              <Link
                href={`/trilhas/${t.id}`}
                className="eco-text-link"
                aria-label={`Iniciar: ${t.titulo}`}
              >
                Iniciar <ArrowUpRight size={20} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      {filtrados.length === 0 && (
        <div className="eco-empty">
          <h3>Nenhuma trilha com esse termo.</h3>
          <p>Tente buscar por atendimento, medicamentos ou cuidado.</p>
          <button className="eco-button" onClick={() => setBusca("")}>
            Ver todas as trilhas
          </button>
        </div>
      )}
    </>
  );
}
