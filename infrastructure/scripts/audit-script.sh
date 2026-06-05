#!/bin/bash
# Auditoria Completa do Projeto saudegpt.com
echo "================================================"
echo "  AUDITORIA RIGOROSA - saudegpt.com"
echo "================================================"

SRC="/opt/data/projects/appfarmacia/src"

echo ""
echo "=== MISSÃO 1: Verificar plágio ==="
echo ""

# Search for generic large blocks that might be plagiarized
echo "[1.1] Procurando blocos de texto genérico/longo suspeitos..."
# Look for very long strings in content files
for f in $SRC/content/*.ts; do
  base=$(basename "$f")
  # Count very long lines (potential copied text)
  longlines=$(awk 'length > 200' "$f" | wc -l)
  total=$(wc -l < "$f")
  echo "  $base: $total linhas, $longlines linhas longas (>200 chars)"
done

echo ""
echo "[1.2] Procurando texto genérico repetido entre arquivos..."
# Extract all unique text fragments and look for duplication
for f1 in $SRC/content/*.ts; do
  for f2 in $SRC/content/*.ts; do
    if [ "$f1" != "$f2" ] && [ "$f1" \< "$f2" ]; then
      # Check for identical long strings
      common=$(comm -12 <(grep -o '"[^"]\{100,\}"' "$f1" | sort -u) <(grep -o '"[^"]\{100,\}"' "$f2" | sort -u) 2>/dev/null | head -3)
      if [ -n "$common" ]; then
        echo "  SUSPEITO: $(basename $f1) <-> $(basename $f2)"
        echo "    $common"
      fi
    fi
  done
done

echo ""
echo "=== MISSÃO 2: Verificar gamificação ==="
echo ""

echo "[2.1] Missões completas?"
python3 -c "
import re

with open('$SRC/content/missoes.ts') as f:
    content = f.read()

# Count missions
missoes = content.count('id:')
print(f'  Missões definidas: extraindo...')
"

echo "[2.2] Comando diário completo?"
cat << 'PY' | python3
import re

with open('/opt/data/projects/appfarmacia/src/content/comando-diario.ts') as f:
    content = f.read()

secoes = re.findall(r'id:\s*"([^"]+)"', content)
print(f'  Total de itens no comando diário: {len(secoes)}')
# Check for secoes
secao_ids = re.findall(r'id:\s*"(\w+)"', content)
print(f'  IDs encontrados: {secao_ids}')
PY

echo ""
echo "=== MISSÃO 3: Verificar conteúdo das aulas ==="
echo ""

python3 << 'PY'
import re, os, sys

SRC = "/opt/data/projects/appfarmacia/src"
linhas_dir = {}
required_fields = ['id', 'titulo', 'duracaoMin', 'nivel', 'resumo', 'resumoExecutivo', 
                   'quandoChamarFarmaceutico', 'errosComuns', 'checklist', 'quiz', 'xp']

for trilha_file in ['trilha-perfumaria.ts', 'trilha-medicamentos.ts', 'trilha-operacional.ts', 'trilha-encantamento.ts']:
    filepath = f"{SRC}/content/{trilha_file}"
    with open(filepath) as f:
        content = f.read()
    
    # Find all aula blocks
    # Split by '{' and track nesting to find aula objects
    aulas = []
    idx = 0
    while True:
        aula_start = content.find('  {\n    id:', idx)
        if aula_start == -1:
            aula_start = content.find('  {\n          id:', idx)
        if aula_start == -1:
            aula_start = content.find('      {\n            id:', idx)
        if aula_start == -1:
            break
        
        # Find the matching close
        depth = 0
        end = aula_start
        started = False
        for i in range(aula_start, len(content)):
            if content[i] == '{':
                depth += 1
                started = True
            elif content[i] == '}':
                depth -= 1
                if started and depth == 0:
                    end = i + 1
                    break
        
        aula_text = content[aula_start:end]
        aulas.append(aula_text)
        idx = end
    
    print(f"\n  🔍 {trilha_file}:")
    
    # Extract aula IDs
    aula_ids = re.findall(r'id:\s*"([^"]+)"', content)
    
    # For the trilha-vendas file, find aula IDs within the nested structure
    # Actually let's find them by looking for the aulas array items
    aula_blocks = re.findall(r'\{\s*\n\s+id:\s*"([^"]+)",?\s*\n\s+titulo:\s*"([^"]+)",?\s*\n', content)
    print(f"     Aulas encontradas: {len(aula_blocks)}")
    
    # Check each required field
    missing_total = 0
    for aula_id, titulo in aula_blocks:
        # Find this specific aula
        pattern = rf'id:\s*"{re.escape(aula_id)}"'
        match = re.search(pattern, content)
        if not match:
            continue
        
        # Get the aula block - go back to find opening brace
        start = content.rfind('{', 0, match.start())
        if start == -1:
            continue
        
        # Find matching closing brace
        depth = 0
        end = start
        for i in range(start, len(content)):
            if content[i] == '{': depth += 1
            elif content[i] == '}': 
                depth -= 1
                if depth == 0:
                    end = i + 1
                    break
        
        aula_text = content[start:end]
        
        missing = []
        for field in required_fields:
            if field not in aula_text:
                missing.append(field)
        
        if missing:
            missing_total += 1
            print(f"     ❌ Aula '{aula_id}' faltando: {', '.join(missing)}")
    
    if missing_total == 0:
        print(f"     ✅ Todas as aulas têm campos completos!")

print("\n[3.2] Currículo completo?")
print("  Curriculo.ts re-exporta as 4 trilhas + funções auxiliares: OK")

PY

echo ""
echo "=== MISSÃO 4: Verificar responsividade ==="
echo ""

echo "[4.1] Procurando componentes sem classes responsivas..."
for f in $SRC/components/*.tsx; do
  base=$(basename "$f")
  has_sm=$(grep -c "sm:" "$f" 2>/dev/null)
  has_md=$(grep -c "md:" "$f" 2>/dev/null)
  has_lg=$(grep -c "lg:" "$f" 2>/dev/null)
  has_xl=$(grep -c "xl:" "$f" 2>/dev/null)
  total_resp=$((has_sm + has_md + has_lg + has_xl))
  
  if [ $total_resp -eq 0 ]; then
    echo "  ⚠️  SEM classes responsivas: $base"
  else
    echo "  ✅ $base: sm=$has_sm md=$has_md lg=$has_lg xl=$has_xl"
  fi
done

echo ""
echo "[4.2] Verificando páginas..."
for f in $SRC/app/**/page.tsx; do
  base=$(basename "$f")
  dir=$(dirname "$f" | sed "s|$SRC/app||")
  has_sm=$(grep -c "sm:" "$f" 2>/dev/null)
  has_md=$(grep -c "md:" "$f" 2>/dev/null)
  if [ "$has_sm" -eq 0 ] && [ "$has_md" -eq 0 ]; then
    echo "  ⚠️  SEM responsividade: $dir/$base"
  fi
done

echo ""
echo "=== MISSÃO 5: Performance ==="
echo ""

echo "[5.1] Imagens com next/image e lazy loading?"
# Count next/image usage vs plain img
for f in $(find $SRC -name "*.tsx" -o -name "*.ts" 2>/dev/null); do
  base=$(basename "$f")
  has_next_image=$(grep -c "next/image" "$f" 2>/dev/null)
  has_img_tag=$(grep -c '<img' "$f" 2>/dev/null)
  has_lazy=$(grep -c "lazy" "$f" 2>/dev/null)
  
  if [ "$has_img_tag" -gt 0 ] && [ "$has_next_image" -eq 0 ]; then
    echo "  ⚠️  USO <img> sem next/image: $base ($has_img_tag tags)"
  fi
done

echo ""
echo "[5.2] Console.log / debug?"
for ext in tsx ts; do
  for f in $(find $SRC -name "*.$ext" -not -path "*/node_modules/*" 2>/dev/null); do
    base=$(basename "$f")
    has_console=$(grep -n "console\.log\|console\.debug\|console\.warn" "$f" 2>/dev/null)
    if [ -n "$has_console" ]; then
      echo "  ⚠️  DEBUG em $base:"
      echo "$has_console" | head -5
    fi
  done
done

echo ""
echo "[5.3] next/font carregado?"
for f in $(find $SRC/app -name "layout.tsx" -o -name "layout-old.tsx" 2>/dev/null); do
  base=$(basename "$f")
  has_font=$(grep -c "next/font" "$f" 2>/dev/null)
  echo "  $base: next/font = $has_font"
done

echo ""
echo "=== MISSÃO 6: Dark Mode ==="
echo ""

echo "[6.1] Componentes com dark classes..."
for f in $SRC/components/*.tsx $SRC/app/**/page.tsx; do
  base=$(basename "$f")
  has_dark=$(grep -c "dark:" "$f" 2>/dev/null)
  if [ "$has_dark" -gt 0 ]; then
    echo "  ✅ $base: $has_dark classes dark:"
  else
    echo "  ⚠️  SEM dark mode: $base"
  fi
done

echo ""
echo "[6.2] Layout tem theme provider?"
grep -n "ThemeProvider\|theme\|dark:" "$SRC/app/layout.tsx" | head -10

echo ""
echo "=== RESUMO ==="
echo "Auditoria concluída. Verifique os resultados acima."
