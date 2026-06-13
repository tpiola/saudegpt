/**
 * Scanner de Produto
 *
 * Agora redireciona para o serviço estendido em bulas.ts
 * mantendo compatibilidade com código legado.
 */

export {
  // Interfaces
  type ProductInfo,
  type ProductInfoExtended,
  // Funções de busca
  searchByBarcode,
  searchAnvisaBula,
  searchDrogaRaia,
  enhancedAnalyzeProductImage,
  analyzeProductImage,
} from "@/lib/bulas";
