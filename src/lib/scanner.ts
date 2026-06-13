export interface ProductInfo {
  nome: string;
  categoria: string;
  para_que_servir: string;
  modo_de_usar: string;
  efeitos_colaterais: string;
  contra_indicacoes: string;
  interacoes: string;
}

export async function analyzeProductImage(image: File): Promise<ProductInfo> {
  const base64 = await fileToBase64(image);
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY || ""}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: [{ type: "text", text: `Analise este produto. Retorne JSON: {"nome","categoria","para_que_servir","modo_de_usar","efeitos_colaterais","contra_indicacoes","interacoes"}. PT-BR.` }, { type: "image_url", image_url: { url: base64, detail: "high" } }] }],
      max_tokens: 1000, temperature: 0.3,
    }),
  });
  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || "";
  try { return JSON.parse(content.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim()); }
  catch { return getFallbackProductInfo(); }
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getFallbackProductInfo(): ProductInfo {
  return {
    nome: "Produto de Saúde",
    categoria: "saude",
    para_que_servir: "Consulte um profissional de saúde para obter informações específicas sobre este produto.",
    modo_de_usar: "Sempre siga as instruções do fabricante e/ou prescrição médica.",
    efeitos_colaterais: "Podem ocorrer reações individuais. Consulte um farmacêutico.",
    contra_indicacoes: "Consulte um profissional de saúde antes de usar.",
    interacoes: "Informe seu médico sobre todos os medicamentos que usa.",
  };
}
