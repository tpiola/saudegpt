#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# gerar-narracao.sh
# Gera narrações pt-BR usando edge-tts (voz Antonio Neural)
# para as 5 trilhas do SaúdeGPT.
#
# Uso: bash gerar-narracao.sh
# Requer: edge-tts (pip install edge-tts)
# ═══════════════════════════════════════════════════════════════

set -euo pipefail

# ─── Config ──────────────────────────────────────────────────
OUTPUT_DIR="$(cd "$(dirname "$0")/../public/audio" && pwd)"
VOZ="pt-BR-AntonioNeural"
VERBOSE=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --voz) VOZ="$2"; shift 2 ;;
    --output-dir) OUTPUT_DIR="$2"; shift 2 ;;
    --verbose|-v) VERBOSE=true; shift ;;
    --help|-h) echo "Uso: $0 [--voz VOZ] [--output-dir DIR] [--verbose]"; exit 0 ;;
    *) echo "Desconhecido: $1"; exit 1 ;;
  esac
done

mkdir -p "$OUTPUT_DIR"

# ─── Narrações ───────────────────────────────────────────────
# Formato: id|arquivo|texto (mínimo 300 caracteres para ~60s de narração)
NARRACOES=(
  "fundamentos-boasvindas|narracao-fundamentos-boasvindas.mp3|Bem-vindo à formação SaúdeGPT! Aqui você vai aprender tudo sobre atendimento em farmácia. Este é o ponto de partida da sua jornada para se tornar um profissional de excelência no balcão da farmácia. Vamos começar pelos fundamentos: o que é uma farmácia, quais os tipos de estabelecimento, a diferença entre farmácia e drogaria, e o papel de cada profissional na equipe. Você vai entender a estrutura organizacional, a importância da documentação, e como funciona a cadeia do medicamento desde a indústria até o paciente. Prepare-se para uma formação completa que vai transformar sua carreira na área farmacêutica."
  "medicamentos-intro|narracao-medicamentos-intro.mp3|Os medicamentos são a principal razão pela qual os clientes entram em uma farmácia. Nesta trilha, você vai aprender a classificar os medicamentos entre referência, genérico e similar, entender a diferença entre MIPs e medicamentos controlados, e dominar as principais categorias terapêuticas: analgésicos, anti-inflamatórios, antibióticos, antihipertensivos, antidiabéticos, e muito mais. Vamos abordar também os cuidados com a dispensação, a interpretação de receitas, os prazos de validade, o armazenamento correto e as orientações que você deve passar ao paciente para garantir o uso seguro e eficaz de cada medicamento."
  "encantamento-atendimento|narracao-encantamento-atendimento.mp3|O atendimento é a alma do negócio farmacêutico. Nesta trilha de encantamento, você vai aprender as técnicas de atendimento que transformam clientes em fãs da sua farmácia. Vamos abordar a comunicação assertiva, a escuta ativa, a linguagem corporal adequada, e como fazer a abordagem correta no balcão. Você vai dominar o método dos 4 Ps da Saúde: Prevenção, Parâmetros, Problemas e Promoção. Além disso, vamos trabalhar a gestão de objeções, o fechamento da venda consultiva, o pós-atendimento e como criar uma experiência memorável que faz o cliente voltar sempre."
  "perfumaria-cosmeticos|narracao-perfumaria-cosmeticos.mp3|Dermocosméticos e perfumaria representam uma grande oportunidade de crescimento para a farmácia. Nesta trilha, você vai aprender sobre as principais categorias: skincare, cuidados com os cabelos, maquiagem, perfumaria fina, protetores solares, e produtos para higiene pessoal. Vamos abordar os ativos cosméticos mais importantes, como ácido hialurônico, retinol, vitamina C, niacinamida, e como fazer a recomendação certa para cada tipo de pele. Você também vai entender as tendências do mercado de beleza, a venda cruzada com medicamentos e como fidelizar clientes na área de perfumaria."
  "operacional-rotina|narracao-operacional-rotina.mp3|A rotina operacional de uma farmácia envolve múltiplas atividades que vão além do atendimento ao cliente. Nesta trilha, você vai aprender sobre a gestão de estoque, o controle de validade, a organização do layout, a precificação, e as normas da ANVISA para o funcionamento da farmácia. Vamos abordar também a importância da limpeza e conservação do ambiente, o descarte correto de medicamentos vencidos, a gestão de fornecedores, e as rotinas de abertura e fechamento do estabelecimento. Você vai sair preparado para manter a farmácia organizada, segura e em conformidade com todas as exigências legais."
)

# ─── Geração ─────────────────────────────────────────────────
echo "═══════════════════════════════════════════════"
echo "  GERAÇÃO DE NARRAÇÕES — SAÚDEGPT"
echo "  Voz: $VOZ"
echo "  Output: $OUTPUT_DIR"
echo "═══════════════════════════════════════════════"
echo ""

SUCCESS=0
FAIL=0

for entry in "${NARRACOES[@]}"; do
  IFS='|' read -r id filename text <<< "$entry"
  OUTPUT_PATH="$OUTPUT_DIR/$filename"

  echo ""
  echo "───────────────────────────────────────────"
  echo "  [$id] → $filename"
  echo "  Texto: ${#text} caracteres"
  echo "───────────────────────────────────────────"

  # Estimar duração (~10 chars/s para pt-BR)
  DURACAO_ESTIMADA=$(( ${#text} / 10 ))
  echo "  Duração estimada: ~${DURACAO_ESTIMADA}s"

  if $VERBOSE; then
    echo "  Texto: ${text:0:80}..."
  fi

  if [ -f "$OUTPUT_PATH" ]; then
    echo "  ⚠  Arquivo já existe. Pulando..."
    SUCCESS=$((SUCCESS + 1))
    continue
  fi

  echo "  Gerando áudio..."
  if edge-tts --voice "$VOZ" --text "$text" --write-media "$OUTPUT_PATH" 2>/dev/null; then
    # Verificar que foi criado
    if [ -f "$OUTPUT_PATH" ]; then
      SIZE_BYTES=$(stat --format=%s "$OUTPUT_PATH" 2>/dev/null || stat -f%z "$OUTPUT_PATH" 2>/dev/null)
      SIZE_KB=$(( SIZE_BYTES / 1024 ))
      echo "  ✔  OK — ${SIZE_KB}KB"
      SUCCESS=$((SUCCESS + 1))
    else
      echo "  ✘  Arquivo não foi criado"
      FAIL=$((FAIL + 1))
    fi
  else
    echo "  ✘  Falha edge-tts"
    FAIL=$((FAIL + 1))
  fi
done

# ─── Sumário ─────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════"
echo "  RESUMO"
echo "═══════════════════════════════════════════════"
echo "  Sucesso: $SUCCESS"
echo "  Falhas:  $FAIL"
echo ""
echo "  Arquivos em: $OUTPUT_DIR"
echo ""

if [ -d "$OUTPUT_DIR" ]; then
  ls -lh "$OUTPUT_DIR"/*.mp3 2>/dev/null | while read -r line; do
    echo "    $line"
  done
fi

echo ""
exit $FAIL
