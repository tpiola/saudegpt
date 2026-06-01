import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { CadastroRegistro } from "@/lib/cadastro-types";

const ARQUIVO = path.join(process.cwd(), "data", "cadastros.json");

declare global {
  // eslint-disable-next-line no-var
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

export async function listarCadastros(): Promise<CadastroRegistro[]> {
  if (process.env.VERCEL === "1") return [...cacheMemoria()];
  const disco = await lerArquivo();
  globalThis.__fapCadastrosCache = disco;
  return [...disco];
}

export async function salvarCadastros(lista: CadastroRegistro[]): Promise<void> {
  globalThis.__fapCadastrosCache = lista;
  if (process.env.VERCEL !== "1") {
    await gravarArquivo(lista);
  }
}

export async function obterPorEmail(email: string): Promise<CadastroRegistro | undefined> {
  const norm = email.trim().toLowerCase();
  return (await listarCadastros()).find((c) => c.email.toLowerCase() === norm);
}

export async function upsertCadastro(registro: CadastroRegistro): Promise<CadastroRegistro> {
  const lista = await listarCadastros();
  const idx = lista.findIndex((c) => c.email.toLowerCase() === registro.email.toLowerCase());
  if (idx >= 0) lista[idx] = { ...lista[idx], ...registro, id: lista[idx].id };
  else lista.push(registro);
  await salvarCadastros(lista);
  return idx >= 0 ? lista[idx] : registro;
}
