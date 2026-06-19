#!/usr/bin/env python3
"""Generate the Leitura Rapida do Paciente module content using GPT-4o."""
import json
import os
import sys
from openai import OpenAI

# Read token
with open('/opt/data/tokens/openai-token') as f:
    token = f.read().strip()

client = OpenAI(api_key=token)

system_prompt = """Você é um especialista em formação de atendentes de farmácia, farmacêutico clínico e pedagogo.
Você cria conteúdo educacional premium, baseado em evidências (ANVISA, OMS, Ministério da Saúde, SciELO),
para o SaúdeGPT — a plataforma de formação de atendentes de farmácia mais avançada do Brasil.

Gere conteúdo em português do Brasil, claro, direto e aplicável ao balcão da farmácia.
Nunca dê diagnósticos. Sempre reforce o limite de atuação do atendente e a importância de encaminhar ao farmacêutico."""

prompt = """Gere o conteúdo COMPLETO do módulo "Leitura Rápida do Paciente" para atendentes de farmácia.

TÍTULO: Leitura Rápida do Paciente
SUBTÍTULO: Identifique estados emocionais e adapte sua comunicação no balcão em 30 segundos

Formato de saída: JSON válido com a estrutura abaixo. Use APENAS português do Brasil.
Seja detalhado, rico em exemplos práticos de balcão. Cada seção deve ter conteúdo substancial.

O JSON deve seguir esta estrutura exata:

{
  "objetivo": "string com 2-3 parágrafos explicando o objetivo do módulo",
  "principiosEticos": {
    "introducao": "string sobre escopo do atendente",
    "frasaObrigatoria": "Com base no que você me conta, recomendo que o farmacêutico avalie pessoalmente",
    "diretrizes": ["array de 5-7 strings com diretrizes éticas"]
  },
  "frameworkABC": {
    "introducao": "string explicando o framework ABC adaptado para farmácia",
    "afeto": {
      "titulo": "A — Afeto (Estado Emocional)",
      "descricao": "string explicando como avaliar o estado emocional do paciente",
      "sinais": ["array de 4-6 sinais observáveis"],
      "comoResponder": ["array de 4-6 estratégias de resposta"]
    },
    "comportamento": {
      "titulo": "B — Comportamento (Ações e Atitudes)",
      "descricao": "string explicando como observar comportamentos",
      "sinais": ["array de 4-6 sinais observáveis"],
      "comoResponder": ["array de 4-6 estratégias de resposta"]
    },
    "cognicao": {
      "titulo": "C — Cognição (Pensamentos e Crenças)",
      "descricao": "string explicando como identificar padrões de pensamento",
      "sinais": ["array de 4-6 sinais observáveis"],
      "comoResponder": ["array de 4-6 estratégias de resposta"]
    }
  },
  "padroesPensamento": [
    {
      "titulo": "Medo do desconhecido",
      "descricao": "string detalhada",
      "sinaisBalcao": ["array de 3-4 frases que o cliente pode dizer"],
      "comoResponder": ["array de 3-4 passos de resposta"],
      "oQueDizer": "string com exemplo de fala do atendente",
      "oQueEvitar": "string com exemplo do que NÃO dizer"
    },
    {
      "titulo": "Negação / Minimização",
      "descricao": "string detalhada",
      "sinaisBalcao": ["array de 3-4 frases"],
      "comoResponder": ["array de 3-4 passos"],
      "oQueDizer": "string",
      "oQueEvitar": "string"
    },
    {
      "titulo": "Sobrecarga de Informação",
      "descricao": "string detalhada",
      "sinaisBalcao": ["array de 3-4 frases"],
      "comoResponder": ["array de 3-4 passos"],
      "oQueDizer": "string",
      "oQueEvitar": "string"
    },
    {
      "titulo": "Baixo Letramento em Saúde / Crenças Culturais",
      "descricao": "string detalhada",
      "sinaisBalcao": ["array de 3-4 frases"],
      "comoResponder": ["array de 3-4 passos"],
      "oQueDizer": "string",
      "oQueEvitar": "string"
    }
  ],
  "exerciciosPraticos": [
    {
      "titulo": "string",
      "contexto": "string descrevendo o cenário",
      "falaCliente": "string com o que o cliente diz",
      "pergunta": "string com o que o atendente deve analisar",
      "respostaEsperada": "string com a conduta ideal",
      "oQueObservar": "string com pontos do framework ABC"
    },
    {
      "titulo": "string",
      "contexto": "string",
      "falaCliente": "string",
      "pergunta": "string",
      "respostaEsperada": "string",
      "oQueObservar": "string"
    },
    {
      "titulo": "string",
      "contexto": "string",
      "falaCliente": "string",
      "pergunta": "string",
      "respostaEsperada": "string",
      "oQueObservar": "string"
    }
  ],
  "checklist": {
    "titulo": "Checklist Rápido (30 segundos) para usar no Balcão",
    "passos": ["array de 6-8 itens do checklist"]
  },
  "referencias": {
    "titulo": "Referências Curriculares",
    "itens": [
      {
        "area": "Técnico em Farmácia",
        "descricao": "string com referência"
      },
      {
        "area": "Psicologia Aplicada à Saúde",
        "descricao": "string com referência"
      },
      {
        "area": "Legislação e Ética (CRF)",
        "descricao": "string com referência"
      }
    ]
  }
}
"""

try:
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt}
        ],
        response_format={"type": "json_object"},
        temperature=0.7,
        max_tokens=8000,
    )

    content = response.choices[0].message.content
    data = json.loads(content)

    # Save the raw JSON for verification
    with open('/opt/data/projects/saudegpt-full/scripts/leitura-rapida-content.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("SUCCESS: Content generated and saved.")
    print(f"Sections: {list(data.keys())}")

except Exception as e:
    print(f"ERROR: {e}", file=sys.stderr)
    sys.exit(1)
