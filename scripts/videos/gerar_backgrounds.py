#!/usr/bin/env python3
"""
Gera backgrounds gradientes para os vídeos educacionais do SaúdeGPT.
Usa Pillow para criar imagens 1080x1920 com gradientes.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
import math

OUTPUT_DIR = "/opt/data/projects/appfarmacia/public/images/backgrounds"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_gradient(width, height, color1, color2, vertical=True):
    """Create a gradient image from color1 to color2."""
    img = Image.new('RGB', (width, height))
    pixels = img.load()
    
    r1, g1, b1 = hex_to_rgb(color1)
    r2, g2, b2 = hex_to_rgb(color2)
    
    for i in range(height if vertical else width):
        ratio = i / (height if vertical else width)
        r = int(r1 + (r2 - r1) * ratio)
        g = int(g1 + (g2 - g1) * ratio)
        b = int(b1 + (b2 - b1) * ratio)
        
        if vertical:
            for j in range(width):
                pixels[j, i] = (r, g, b)
        else:
            for j in range(height):
                pixels[i, j] = (r, g, b)
    
    return img

def create_radial_gradient(width, height, center_color, edge_color):
    """Create a radial gradient image."""
    img = Image.new('RGB', (width, height))
    pixels = img.load()
    
    cr, cg, cb = hex_to_rgb(center_color)
    er, eg, eb = hex_to_rgb(edge_color)
    
    cx, cy = width // 2, height // 2
    max_dist = math.sqrt(cx**2 + cy**2)
    
    for y in range(height):
        for x in range(width):
            dist = math.sqrt((x - cx)**2 + (y - cy)**2)
            ratio = min(dist / max_dist, 1.0)
            r = int(cr + (er - cr) * ratio)
            g = int(cg + (eg - cg) * ratio)
            b = int(cb + (eb - cb) * ratio)
            pixels[x, y] = (r, g, b)
    
    return img

# Background configurations
BACKGROUNDS = [
    {
        "name": "bg_interacoes",
        "type": "radial",
        "center": "#2d6a4f",
        "edge": "#1a4d2e",
        "desc": "Verde escuro saúde - Interações Medicamentosas"
    },
    {
        "name": "bg_genericos",
        "type": "gradient",
        "color1": "#0a1628",
        "color2": "#1a2744",
        "desc": "Azul escuro - Genérico vs Referência"
    },
    {
        "name": "bg_atendimento",
        "type": "gradient",
        "color1": "#2d1b00",
        "color2": "#1a0f00",
        "desc": "Marrom/terra - Atendimento"
    },
    {
        "name": "bg_card_interacoes",
        "type": "gradient",
        "color1": "#1b4332",
        "color2": "#2d6a4f",
        "desc": "Card verde - Interações"
    },
    {
        "name": "bg_card_genericos",
        "type": "gradient",
        "color1": "#1a2744",
        "color2": "#2d4a7a",
        "desc": "Card azul - Genéricos"
    },
    {
        "name": "bg_card_atendimento",
        "type": "gradient",
        "color1": "#3d2b10",
        "color2": "#5c3d1a",
        "desc": "Card marrom - Atendimento"
    }
]

print("="*60)
print("Gerando backgrounds gradientes para os vídeos")
print("="*60)

for bg in BACKGROUNDS:
    filepath = os.path.join(OUTPUT_DIR, f"{bg['name']}.jpg")
    
    if bg["type"] == "radial":
        img = create_radial_gradient(1080, 1920, bg["center"], bg["edge"])
    else:
        img = create_gradient(1080, 1920, bg["color1"], bg["color2"])
    
    # Save with high quality
    img.save(filepath, "JPEG", quality=92)
    size_kb = os.path.getsize(filepath) / 1024
    print(f"  ✅ {bg['name']}.jpg ({size_kb:.1f} KB) - {bg['desc']}")

print(f"\n✅ Backgrounds salvos em: {OUTPUT_DIR}")
