/**
 * Serviço de Bulas + Scanner Avançado
 * Busca informações estendidas de medicamentos/produtos via APIs públicas,
 * ANVISA e DeepSeek Vision.
 */

export interface ProductInfo {
  nome: string;
  categoria: string;
  para_que_servir: string;
  modo_de_usar: string;
  efeitos_colaterais: string;
  contra_indicacoes: string;
  interacoes: string;
}

export interface ProductInfoExtended extends ProductInfo {
  quatro_p_saude: string;
  alimentacao: string;
  idade_minima: string;
  alergias: string;
  interacoes_alimentos: string;
  ean: string;
}

// ---------------------------------------------------------------------------
// 1. Busca por código de barras (EAN) via De Olho na Farmácia
// ---------------------------------------------------------------------------

export async function searchByBarcode(ean: string): Promise<{
  encontrado: boolean;
  produto?: string;
  fabricante?: string;
  preco_maximo?: number;
  categoria?: string;
  dados_brutos?: Record<string, unknown>;
}> {
  try {
    const eanLimpo = ean.replace(/\D/g, "");
    if (eanLimpo.length < 8) {
      return { encontrado: false };
    }

    const response = await fetch(
      `https://deolhonafarmacia.com.br/api/v1/consulta/ean/${eanLimpo}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!response.ok) {
      // Tenta uma API alternativa
      return searchBarcodeOpenSource(eanLimpo);
    }

    const data: Record<string, unknown> = await response.json();

    return {
      encontrado: true,
      produto: String(data?.produto ?? data?.nome ?? ""),
      fabricante: String(data?.fabricante ?? data?.laboratorio ?? ""),
      preco_maximo: Number(data?.preco_maximo ?? data?.precoMaximo ?? 0) || undefined,
      categoria: String(data?.categoria ?? ""),
      dados_brutos: data,
    };
  } catch {
    return searchBarcodeOpenSource(ean.replace(/\D/g, ""));
  }
}

async function searchBarcodeOpenSource(
  ean: string,
): Promise<{
  encontrado: boolean;
  produto?: string;
  fabricante?: string;
  preco_maximo?: number;
  categoria?: string;
  dados_brutos?: Record<string, unknown>;
}> {
  // Tenta a API aberta do Open Food Facts (também inclui medicamentos no Brasil)
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${ean}.json`,
      { signal: AbortSignal.timeout(8_000) },
    );
    if (!response.ok) return { encontrado: false };

    const data = (await response.json()) as Record<string, unknown>;
    if (!data || (data as { status?: number }).status !== 1) {
      return { encontrado: false };
    }

    const product = (data as { product?: Record<string, unknown> }).product ?? {};

    return {
      encontrado: true,
      produto: String(product?.product_name ?? product?.generic_name ?? ""),
      fabricante: String(product?.brands ?? ""),
      categoria: String(product?.categories ?? ""),
      dados_brutos: data as Record<string, unknown>,
    };
  } catch {
    return { encontrado: false };
  }
}

// ---------------------------------------------------------------------------
// 2. Busca de bula no site da ANVISA via web scraping leve
// ---------------------------------------------------------------------------

export async function searchAnvisaBula(
  nome: string,
): Promise<{
  encontrado: boolean;
  url?: string;
  texto_parcial?: string;
}> {
  try {
    const termo = encodeURIComponent(nome.trim());
    const response = await fetch(
      `https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/bulas?search=${termo}`,
      {
        headers: {
          Accept: "text/html,application/xhtml+xml",
          "User-Agent":
            "Mozilla/5.0 (compatible; HermesBot/1.0; +https://saudegpt.com)",
        },
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!response.ok) {
      return { encontrado: false };
    }

    const html = await response.text();

    // Extrai o primeiro link de bula PDF
    const linkMatch = html.match(
      /href="([^"]+\.(?:pdf|PDF)[^"]*bul[ai][^"]*)"/,
    );
    const url = linkMatch
      ? linkMatch[1].startsWith("http")
        ? linkMatch[1]
        : `https://www.gov.br${linkMatch[1]}`
      : "";

    // Tenta capturar um trecho da descrição
    const descMatch = html.match(
      /<p class="teaser"[^>]*>([\s\S]{0,500}?)<\/p>/i,
    );

    return {
      encontrado: !!url,
      url: url || undefined,
      texto_parcial: descMatch
        ? descMatch[1].replace(/<[^>]+>/g, "").trim()
        : undefined,
    };
  } catch {
    return { encontrado: false };
  }
}

// ---------------------------------------------------------------------------
// 3. Busca em sites de farmácias
// ---------------------------------------------------------------------------

export async function searchDrogaRaia(
  nome: string,
): Promise<{
  encontrado: boolean;
  url?: string;
  preco?: number;
  bula_url?: string;
  principio_ativo?: string;
}> {
  try {
    const termo = encodeURIComponent(nome.trim());
    const response = await fetch(
      `https://www.drogaraia.com.br/api/catalog_system/pub/products/search/${termo}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; HermesBot/1.0; +https://saudegpt.com)",
        },
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!response.ok) {
      return searchDrogaRaiaFallback(nome);
    }

    const data = (await response.json()) as Record<string, unknown>[];

    if (!data || data.length === 0) {
      return searchDrogaRaiaFallback(nome);
    }

    const first = data[0] as Record<string, unknown> | undefined;
    const productName = String(
      first?.productName ?? first?.name ?? "",
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawItems = first?.items as any;
    const items: Array<Record<string, unknown>> = Array.isArray(rawItems) ? rawItems : [];
    const firstItem: Record<string, unknown> | undefined = items[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawSellers = firstItem?.sellers as any;
    const sellers: Array<Record<string, unknown>> = Array.isArray(rawSellers) ? rawSellers : [];
    const commertialOffer: Record<string, unknown> | undefined = sellers[0]?.commertialOffer as Record<string, unknown> | undefined;
    const price = commertialOffer?.Price as number | undefined;

    // Tenta extrair link da bula
    const bulaMatch = JSON.stringify(first).match(
      /https?:\/\/[^"']+bul[ai][^"']+\.(?:pdf|PDF)/i,
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawProperties = first?.properties as any;
    const properties: Array<Record<string, unknown>> = Array.isArray(rawProperties) ? rawProperties : [];
    const principioProp = properties.find(
      (p: Record<string, unknown>) =>
        String(p.name).toLowerCase().includes("principio"),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawValues = principioProp?.values as any;
    const principioValues: string[] = Array.isArray(rawValues) ? rawValues : [];
    const principioAtivo = String(principioValues[0] ?? "");

    return {
      encontrado: true,
      url: `https://www.drogaraia.com.br/${productName.replace(/\s+/g, "-").toLowerCase()}/p`,
      preco: price,
      bula_url: bulaMatch?.[0],
      principio_ativo: principioAtivo || undefined,
    };
  } catch {
    return searchDrogaRaiaFallback(nome);
  }
}

async function searchDrogaRaiaFallback(
  nome: string,
): Promise<{
  encontrado: boolean;
  url?: string;
  preco?: number;
  bula_url?: string;
  principio_ativo?: string;
}> {
  try {
    const termo = encodeURIComponent(nome.trim());
    const response = await fetch(
      `https://www.drogaraia.com.br/busca?q=${termo}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; HermesBot/1.0; +https://saudegpt.com)",
        },
        signal: AbortSignal.timeout(8_000),
      },
    );

    if (!response.ok) return { encontrado: false };

    return {
      encontrado: true,
      url: response.url || undefined,
    };
  } catch {
    return { encontrado: false };
  }
}

// ---------------------------------------------------------------------------
// 4. Análise de imagem com DeepSeek Vision (prompt enriquecido)
// ---------------------------------------------------------------------------

export async function enhancedAnalyzeProductImage(
  image: File,
): Promise<ProductInfoExtended> {
  const base64 = await fileToBase64(image);
  const apiKey =
    process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY ||
    process.env.DEEPSEEK_API_KEY ||
    "";

  if (!apiKey) return getFallbackProductInfoExtended();

  try {
    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: `Analise EXTENSIVAMENTE este produto de saúde, medicamento, cosmético ou item de perfumaria/higiene.

Retorne APENAS um JSON válido com esta estrutura EXATA (sem markdown, sem texto extra, sem comentários):

{
  "nome": "Nome completo do produto",
  "categoria": "medicamento | cosmetico | perfumaria | higiene | saude | suplemento",
  "para_que_servir": "Descrição completa de para que serve, indicações terapêuticas principais",
  "modo_de_usar": "Modo de usar, dosagem, frequência, horário recomendado",
  "efeitos_colaterais": "Lista detalhada de possíveis efeitos colaterais e reações adversas",
  "contra_indicacoes": "Quem não pode usar, restrições por idade, condições preexistentes",
  "interacoes": "Interações medicamentosas com outros fármacos, álcool, etc",
  "quatro_p_saude": "Prevenção: ...\\nParâmetros: ...\\nProblemas: ...\\nPromoção: ...",
  "alimentacao": "Pode tomar com estômago cheio | Melhor em jejum | Indiferente",
  "idade_minima": "Idade mínima recomendada (ex: 'A partir de 12 anos', 'Uso adulto', 'A partir de 2 anos')",
  "alergias": "Sintomas de alergia: principais reações alérgicas e componentes que podem causar alergia",
  "interacoes_alimentos": "Interage com: alimentos, bebidas ou suplementos que interferem na absorção ou eficácia",
  "ean": "Código de barras EAN se visível na embalagem, ou deixe vazio"
}

REGRAS IMPORTANTES:
- Campo "alimentacao" deve ser EXATAMENTE uma das três opções: "Pode tomar com estômago cheio", "Melhor em jejum" ou "Indiferente"
- Campo "quatro_p_saude" deve conter os 4 Ps separados por \\n conforme exemplo
- Responda em português brasileiro com linguagem clara e acessível a atendentes de farmácia
- Se não identificar o produto exato, informe com base na aparência e categoria mais provável
- Para "idade_minima", informe a faixa etária adequada mesmo que aproximada
- Para "alergias", destaque os componentes alergênicos mais comuns da categoria do produto`,
                },
                {
                  type: "image_url",
                  image_url: { url: base64, detail: "high" },
                },
              ],
            },
          ],
          max_tokens: 1500,
          temperature: 0.2,
        }),
      },
    );

    if (!response.ok) {
      console.error("DeepSeek error:", response.status);
      return getFallbackProductInfoExtended();
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    const cleaned = content
      .replace(/```json\s*/g, "")
      .replace(/```\s*/g, "")
      .trim();
    return JSON.parse(cleaned) as ProductInfoExtended;
  } catch (err) {
    console.error("enhancedAnalyzeProductImage error:", err);
    return getFallbackProductInfoExtended();
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ---------------------------------------------------------------------------
// Fallback
// ---------------------------------------------------------------------------

function getFallbackProductInfoExtended(): ProductInfoExtended {
  return {
    nome: "Produto de Saúde",
    categoria: "saude",
    para_que_servir:
      "Consulte um profissional de saúde para obter informações específicas sobre este produto.",
    modo_de_usar:
      "Sempre siga as instruções do fabricante e/ou prescrição médica.",
    efeitos_colaterais:
      "Podem ocorrer reações individuais. Consulte um farmacêutico.",
    contra_indicacoes:
      "Consulte um profissional de saúde antes de usar.",
    interacoes: "Informe seu médico sobre todos os medicamentos que usa.",
    quatro_p_saude:
      "Prevenção: Consulte profissional de saúde\nParâmetros: Consulte profissional de saúde\nProblemas: Consulte profissional de saúde\nPromoção: Consulte profissional de saúde",
    alimentacao: "Indiferente",
    idade_minima: "Uso adulto (consulte bula)",
    alergias:
      "Sintomas de alergia: consulte um farmacêutico para verificar componentes alergênicos.",
    interacoes_alimentos:
      "Interage com: consulte a bula ou um profissional de saúde.",
    ean: "",
  };
}

// ---------------------------------------------------------------------------
// Re-export da função original analyzeProductImage como alias
// (mantém compatibilidade com código legado que importa de scanner.ts)
// ---------------------------------------------------------------------------

/** @deprecated Use enhancedAnalyzeProductImage para análise completa */
export const analyzeProductImage =
  enhancedAnalyzeProductImage as unknown as (
    image: File,
  ) => Promise<ProductInfo>;
