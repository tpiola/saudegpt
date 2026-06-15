#!/usr/bin/env python3
"""Generate educational product images for the AppFarmácia platform.
Creates clean product card images with brand logos/names for educational use."""

from PIL import Image, ImageDraw, ImageFont
import os
import math

OUTPUT_DIR = "/opt/data/projects/appfarmacia/public/imagens/produtos"
os.makedirs(OUTPUT_DIR, exist_ok=True)

W, H = 400, 400

# Color schemes per brand/category
PRODUCTS = [
    # Dermocosméticos
    ("la-roche-posay-effaclar", "La Roche-Posay\nEffaclar", "#00A3E0", "#FFFFFF"),
    ("la-roche-posay-anthelios", "La Roche-Posay\nAnthelios", "#00A3E0", "#E8F6FF"),
    ("vichy-mineral-89", "Vichy\nMineral 89", "#8B0000", "#FFF0F0"),
    ("vichy-liftactiv", "Vichy\nLiftActiv", "#8B0000", "#FFE8E8"),
    ("vichy-dercos", "Vichy\nDercos", "#8B0000", "#FFF5F5"),
    
    # Medicamentos - EMS
    ("ems-paracetamol", "EMS\nParacetamol 500mg", "#003366", "#E8F0FE"),
    ("ems-ibuprofeno", "EMS\nIbuprofeno 600mg", "#003366", "#E0E8F0"),
    ("ems-amoxicilina", "EMS\nAmoxicilina 500mg", "#003366", "#DCE4F0"),
    ("ems-omeprazol", "EMS\nOmeprazol 20mg", "#003366", "#E8EEF5"),
    
    # Medicamentos - Medley
    ("medley-dipirona", "Medley\nDipirona 500mg/mL", "#009639", "#E8FFE8"),
    ("medley-losartana", "Medley\nLosartana 50mg", "#009639", "#DCF5DC"),
    ("medley-atorvastatina", "Medley\nAtorvastatina 20mg", "#009639", "#E0F5E0"),
    
    # Medicamentos - Neo Química
    ("neo-quimica-dorflex", "Neo Química\nDorflex", "#FF6600", "#FFF0E0"),
    ("neo-quimica-novalgina", "Neo Química\nNovalgina", "#FF6600", "#FFE8D5"),
    ("neo-quimica-torsilax", "Neo Química\nTorsilax", "#FF6600", "#FFF5E8"),
    
    # Medicamentos - Eurofarma
    ("eurofarma-cimegripe", "Eurofarma\nCimegripe", "#0066CC", "#E8F0FF"),
    ("eurofarma-buscopan", "Eurofarma\nBuscopan", "#0066CC", "#E5EDFF"),
    
    # Medicamentos - Aché
    ("ache-resprin", "Aché\nResprin", "#CC0000", "#FFE8E8"),
    ("ache-marevan", "Aché\nMarevan", "#CC0000", "#FFF0F0"),
    
    # Medicamentos - Genéricos
    ("generico-paracetamol", "Genérico\nParacetamol 500mg", "#666666", "#F0F0F0"),
    ("generico-ibuprofeno", "Genérico\nIbuprofeno 600mg", "#666666", "#E8E8E8"),
    ("generico-amoxicilina", "Genérico\nAmoxicilina 500mg", "#666666", "#F5F5F5"),
    
    # Perfumaria
    ("nivea-creme", "Nivea\nCreme Azul", "#003399", "#E0E8FF"),
    ("nivea-protetor-solar", "Nivea\nProtetor Solar", "#003399", "#DCE5FF"),
    ("nivea-hidratante", "Nivea\nHidratante Corporal", "#003399", "#E5EDFF"),
    
    # Infantil
    ("johnsons-baby-shampoo", "Johnson's Baby\nShampoo", "#FF69B4", "#FFF0F5"),
    ("johnsons-baby-powder", "Johnson's Baby\nTalco", "#FF69B4", "#FFE8F0"),
    ("pampers-fralda", "Pampers\nFralda", "#00A650", "#E8FFE8"),
    ("huggies-fralda", "Huggies\nFralda", "#0088CC", "#E8F5FF"),
    
    # Higiene
    ("colgate-creme-dental", "Colgate\nCreme Dental", "#CC0000", "#FFF0F0"),
    ("oral-b-escova", "Oral-B\nEscova Macia", "#0055AA", "#E8F0FF"),
    
    # Suplementos
    ("nestle-suplemento", "Nestlé\nSuplemento Adulto", "#0033AA", "#E8EEFF"),
    ("danone-activia", "Danone\nActivia", "#FFFFFF", "#E8F5E8"),
    
    # Protetores solares
    ("protetor-solar-fps30", "Protetor Solar\nFPS 30", "#FF8800", "#FFF5E8"),
    ("protetor-solar-fps60", "Protetor Solar\nFPS 60", "#FF6600", "#FFF0E0"),
    
    # Marcas farmacêuticas genéricas
    ("marca-ems", "EMS\nFarmacêutica", "#003366", "#E0E8F5"),
    ("marca-medley", "Medley\nFarmacêutica", "#009639", "#E5F5E5"),
    ("marca-neo-quimica", "Neo Química\nFarmacêutica", "#FF6600", "#FFF5E8"),
    ("marca-eurofarma", "Eurofarma\nFarmacêutica", "#0066CC", "#E8F0FF"),
    ("marca-ache", "Aché\nFarmacêutica", "#CC0000", "#FFE8E8"),
    
    # Classe de medicamentos
    ("analgesicos-classe", "Analgésicos\nClasse", "#CC6600", "#FFF5E8"),
    ("anti-inflamatorios-classe", "Anti-inflamatórios\nClasse", "#AA4400", "#FFF0E5"),
    ("antibioticos-classe", "Antibióticos\nClasse", "#880000", "#FFE8E8"),
    ("antialergicos-classe", "Antialérgicos\nClasse", "#4488AA", "#E8F0F5"),
    ("gastro-classe", "Gastrointestinais\nClasse", "#228833", "#E8F5E8"),
]


def create_product_image(filename, label, bg_color, text_color, icon_color=None):
    img = Image.new("RGB", (W, H), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to load a font, fall back to default
    font_size = 28
    try:
        # Try multiple font paths
        for path in ["/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
                     "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
                     "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
                     "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"]:
            if os.path.exists(path):
                font_large = ImageFont.truetype(path, 36)
                font_small = ImageFont.truetype(path, 24)
                break
        else:
            font_large = ImageFont.load_default()
            font_small = ImageFont.load_default()
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Draw a pill/medicine icon shape (simple rounded rectangle)
    icon_color_draw = icon_color or text_color
    # Draw rounded rectangle as "pill"
    pill_w, pill_h = 120, 60
    pill_x, pill_y = (W - pill_w) // 2, 60
    draw.rounded_rectangle(
        [pill_x, pill_y, pill_x + pill_w, pill_y + pill_h],
        radius=30, fill=icon_color_draw, outline=None
    )
    # Draw a second pill
    pill_y2 = pill_y + 80
    draw.rounded_rectangle(
        [pill_x + 30, pill_y2, pill_x + pill_w - 30, pill_y2 + 50],
        radius=25, fill=icon_color_draw, outline=None
    )
    
    # Draw label text
    lines = label.split("\n")
    y_start = 220
    for i, line in enumerate(lines):
        try:
            font_use = font_large if i == 0 else font_small
            bbox = draw.textbbox((0, 0), line, font=font_use)
            tw = bbox[2] - bbox[0]
            tx = (W - tw) // 2
            ty = y_start + i * 40
            # Draw text with slight shadow for readability
            draw.text((tx + 1, ty + 1), line, fill=(0, 0, 0, 40), font=font_use)
            draw.text((tx, ty), line, fill=icon_color_draw, font=font_use)
        except:
            pass
    
    # Draw a small "Rx" symbol
    try:
        draw.text((20, 20), "Rx", fill=icon_color_draw, font=font_small)
    except:
        pass
    
    # Bottom info bar
    draw.rectangle([0, H - 40, W, H], fill=icon_color_draw)
    try:
        draw.text((20, H - 35), "Uso educacional", fill=(255, 255, 255), font=font_small)
    except:
        pass
    
    img.save(os.path.join(OUTPUT_DIR, filename))
    print(f"  ✓ {filename}")

# Generate all product images
print(f"Generating {len(PRODUCTS)} product images...")
for name, label, primary, bg in PRODUCTS:
    create_product_image(f"{name}.webp", label, bg, primary, primary)

print(f"\nDone! {len(PRODUCTS)} images created in {OUTPUT_DIR}")

# Also generate brand logo-style images for cosmetics brands
COSMETICS = [
    ("avon-fragrancia", "Avon\nFragrância", "#D4006A", "#FFF0F5"),
    ("natura-ekos", "Natura\nEkos", "#FF6600", "#FFF5E8"),
    ("natura-chronos", "Natura\nChronos", "#8B4513", "#FFF0E8"),
]

print("\nGenerating cosmetics brand images...")
for name, label, primary, bg in COSMETICS:
    create_product_image(f"{name}.webp", label, bg, primary, primary)

print(f"\nTotal: {len(PRODUCTS) + len(COSMETICS)} images created successfully!")
