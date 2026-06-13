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
  const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY || process.env.DEEPSEEK_API_KEY || "";

  if (!apiKey) return getFallbackProductInfo();

  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{
          role: "user",
          content: [
            {
              type: "text",
              text: `Analise este produto de saúde, medicamento, cosmético ou item de perfumaria/higiene.

Retorne APENAS um JSON válido com esta estrutura (sem markdown, sem texto extra):
{
  "nome": "Nome do produto",
  "categoria": "medicamento | cosmetico | perfumaria | higiene | saude | suplemento",
  "para_que_servir": "Descrição completa de para que serve, indicações",
  "modo_de_usar": "Modo de usar, dosagem, frequência",
  "efeitos_colaterais": "Possíveis efeitos colaterais",
  "contra_indicacoes": "Quem não pode usar",
  "interacoes": "Interações medicamentosas"
}

Responda em português brasileiro. Se não identificar, informe com base na aparência.`
            },
            { type: "image_url", image_url: { url: base64, detail: "high" } }
          ]
        }],
        max_tokens: 1000,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      console.error("DeepSeek error:", response.status);
      return getFallbackProductInfo();
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    const cleaned = content.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("analyzeProductImage error:", err);
    return getFallbackProductInfo();
  }
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
