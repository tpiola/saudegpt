import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { CadastroRegistro } from "@/lib/cadastro-types";
import {
  cadastrosUsamNotion,
  excluirCadastroNotionPorIdPlataforma,
  listarCadastrosNotion,
  obterPorEmailNotion,
  upsertCadastroNotion,
} from "./notion-cadastros";

const ARQUIVO = path.join(process.cwd(), "data", "cadastros.json");

declare global {
  var __fapCadastrosCache: CadastroRegistro[] | undefined;
}

function cacheMemoria(): CadastroRegistro[] {
  if (!globalThis.__fapCadastrosCache) globalThis.__fapCadastrosCache = [];
  return globalThis.__fapCadastrosCache;
}

async function lerArquivo(): Promise<CadastroRegistro[]> {
  try {
    const bruto = await readFile(ARQUIVO, "utf8");
    return JSON.parse(bruto) as CadastroRegistro[];
  } catch {
    return [];
  }
}

async function gravarArquivo(lista: CadastroRegistro[]) {
  await mkdir(path.dirname(ARQUIVO), { recursive: true });
  await writeFile(ARQUIVO, JSON.stringify(lista, null, 2), "utf8");
}

async function listarLocal(): Promise<CadastroRegistro[]> {
  if (process.env.VERCEL === "1") return [...cacheMemoria()];
  const disco = await lerArquivo();
  globalThis.__fapCadastrosCache = disco;
  return [...disco];
}

async function salvarLocal(lista: CadastroRegistro[]) {
  globalThis.__fapCadastrosCache = lista;
  if (process.env.VERCEL !== "1") {
    await gravarArquivo(lista);
  }
}

export async function listarCadastros(): Promise<CadastroRegistro[]> {
  if (cadastrosUsamNotion()) {
    try {
      return await listarCadastrosNotion();
    } catch (err) {
      console.error("[cadastros] Notion indisponível, usando cache local:", err);
    }
  }
  return listarLocal();
}

export async function salvarCadastros(lista: CadastroRegistro[]): Promise<void> {
  if (cadastrosUsamNotion()) {
    for (const reg of lista) {
      await upsertCadastroNotion(reg);
    }
    return;
  }
  await salvarLocal(lista);
}

export async function obterPorEmail(email: string): Promise<CadastroRegistro | undefined> {
  if (cadastrosUsamNotion()) {
    try {
      const n = await obterPorEmailNotion(email);
      if (n) return n;
    } catch (err) {
      console.error("[cadastros] obterPorEmail Notion:", err);
    }
  }
  const norm = email.trim().toLowerCase();
  return (await listarLocal()).find((c) => c.email.toLowerCase() === norm);
}

export async function upsertCadastro(registro: CadastroRegistro): Promise<CadastroRegistro> {
  if (cadastrosUsamNotion()) {
    try {
      return await upsertCadastroNotion(registro);
    } catch (err) {
      console.error("[cadastros] upsert Notion:", err);
    }
  }

  const lista = await listarLocal();
  const idx = lista.findIndex((c) => c.email.toLowerCase() === registro.email.toLowerCase());
  if (idx >= 0) lista[idx] = { ...lista[idx], ...registro, id: lista[idx].id };
  else lista.push(registro);
  await salvarLocal(lista);
  return idx >= 0 ? lista[idx] : registro;
}

export async function excluirCadastroPorId(id: string): Promise<boolean> {
  if (cadastrosUsamNotion()) {
    try {
      const ok = await excluirCadastroNotionPorIdPlataforma(id);
      if (ok) return true;
    } catch (err) {
      console.error("[cadastros] excluir Notion:", err);
    }
  }

  const lista = await listarLocal();
  const filtrada = lista.filter((c) => c.id !== id);
  if (filtrada.length === lista.length) return false;
  await salvarLocal(filtrada);
  return true;
}
