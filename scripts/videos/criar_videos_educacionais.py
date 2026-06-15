#!/usr/bin/env python3
"""
Cria 3 vídeos educacionais curtos para o SaúdeGPT usando a VectCut API (CapCut).
Temas: Interações Medicamentosas, Genéricos vs Referência, Atendimento ao Cliente
"""

import requests
import json
import os
import time
import sys

API_BASE = "http://localhost:9001"
AUDIO_DIR = "/opt/data/projects/appfarmacia/public/audio/narracao"
DRAFT_DIR = "/opt/data/projects/appfarmacia/public/videos-draft"
OUTPUT_DIR = "/opt/data/projects/appfarmacia/public/videos/educacionais"

# ============================================================
# BACKGROUND COLORS
# ============================================================
BG_GREEN = "#1a4d2e"      # Verde escuro saúde
BG_DARK = "#0a1628"       # Azul escuro
BG_WARM = "#2d1b00"      # Marrom/terra

# Narration segments with timing (seconds)
VIDEOS = [
    {
        "id": "interacoes",
        "title": "Interações Medicamentosas",
        "audio_file": os.path.join(AUDIO_DIR, "narracao_interacoes.mp3"),
        "duration": 28,
        "bg_color": BG_GREEN,
        "scenes": [
            {
                "start": 0.0,
                "end": 6.0,
                "text": "Você sabia?\nAAS + Anti-inflamatório\n= Risco de Sangramento",
                "subtitle": "CUIDADO: Interações Medicamentosas"
            },
            {
                "start": 6.0,
                "end": 12.0,
                "text": "Anti-inflamatórios como\nibuprofeno com AAS\naumentam risco GI",
                "subtitle": "Sangramentos gastrointestinais"
            },
            {
                "start": 12.0,
                "end": 18.0,
                "text": "Sempre pergunte ao\nfarmacêutico antes de\ncombinar remédios",
                "subtitle": "Oriente-se sempre"
            },
            {
                "start": 18.0,
                "end": 24.0,
                "text": "Informe seu médico sobre\nTODOS os medicamentos\nque você usa",
                "subtitle": "Comunique-se"
            },
            {
                "start": 24.0,
                "end": 28.0,
                "text": "SaúdeGPT\nInformação que salva vidas",
                "subtitle": "saudegpt.com"
            }
        ]
    },
    {
        "id": "genericos",
        "title": "Genérico vs Referência",
        "audio_file": os.path.join(AUDIO_DIR, "narracao_genericos.mp3"),
        "duration": 27,
        "bg_color": BG_DARK,
        "scenes": [
            {
                "start": 0.0,
                "end": 6.0,
                "text": "Referência ou Genérico?\nQual escolher?",
                "subtitle": "A dúvida do balcão"
            },
            {
                "start": 6.0,
                "end": 12.0,
                "text": "MESMO princípio ativo!\nMESMA eficácia!",
                "subtitle": "São equivalentes"
            },
            {
                "start": 12.0,
                "end": 18.0,
                "text": "Até 60% mais barato\nAprovado pela ANVISA",
                "subtitle": "Genérico: economia com qualidade"
            },
            {
                "start": 18.0,
                "end": 22.0,
                "text": "Diferença?\nApenas nome e preço",
                "subtitle": "Exija a opção genérica"
            },
            {
                "start": 22.0,
                "end": 27.0,
                "text": "SaúdeGPT\nInformação que salva vidas",
                "subtitle": "saudegpt.com"
            }
        ]
    },
    {
        "id": "atendimento",
        "title": "Dica de Balcão - Cliente Difícil",
        "audio_file": os.path.join(AUDIO_DIR, "narracao_atendimento.mp3"),
        "duration": 26,
        "bg_color": BG_WARM,
        "scenes": [
            {
                "start": 0.0,
                "end": 5.0,
                "text": "Cliente pede Ritalina\nsem receita. E agora?",
                "subtitle": "Situação delicada"
            },
            {
                "start": 5.0,
                "end": 10.0,
                "text": "Ritalina (metilfenidato)\né medicamento controlado",
                "subtitle": "Substância controlada"
            },
            {
                "start": 10.0,
                "end": 16.0,
                "text": "Exija receita médica\namarela (tipo A)",
                "subtitle": "Receita obrigatória"
            },
            {
                "start": 16.0,
                "end": 21.0,
                "text": "Explique educadamente:\né para proteger o paciente",
                "subtitle": "Discurso profissional"
            },
            {
                "start": 21.0,
                "end": 26.0,
                "text": "SaúdeGPT\nInformação que salva vidas",
                "subtitle": "saudegpt.com"
            }
        ]
    }
]


def api_post(endpoint, data):
    """Call an API endpoint and return the result."""
    url = f"{API_BASE}{endpoint}"
    try:
        resp = requests.post(url, json=data, timeout=60)
        return resp.json()
    except Exception as e:
        print(f"  [ERROR] API call to {endpoint} failed: {e}")
        return {"success": False, "error": str(e)}


def create_draft(width=1080, height=1920):
    """Create a new draft and return draft_id."""
    print(f"  Creating draft ({width}x{height})...")
    result = api_post("/create_draft", {"width": width, "height": height})
    if result.get("success"):
        draft_id = result["output"]["draft_id"]
        draft_url = result["output"].get("draft_url", "")
        print(f"  Draft created: {draft_id}")
        return draft_id
    else:
        print(f"  [ERROR] Failed to create draft: {result.get('error')}")
        return None


def add_audio(draft_id, audio_path, start=0.0, volume=1.0):
    """Add narration audio track."""
    print(f"  Adding audio track: {os.path.basename(audio_path)}")
    result = api_post("/add_audio", {
        "draft_id": draft_id,
        "audio_url": audio_path,
        "start": start,
        "volume": volume
    })
    if result.get("success"):
        print(f"  Audio added successfully")
        return True
    else:
        print(f"  [WARN] Failed to add audio: {result.get('error')}")
        return False


def add_text(draft_id, text, start, end, font_size=10, font_color="#FFFFFF",
             bg_color="#000000", bg_alpha=0.6, transform_y=0,
             intro_animation=None, outro_animation=None):
    """Add a text overlay."""
    payload = {
        "draft_id": draft_id,
        "text": text,
        "start": start,
        "end": end,
        "font_size": font_size,
        "font_color": font_color,
        "background_color": bg_color,
        "background_alpha": bg_alpha,
        "transform_y": transform_y,
        "track_name": "text_main"
    }
    if intro_animation:
        payload["intro_animation"] = intro_animation
        payload["intro_duration"] = 0.5
    if outro_animation:
        payload["outro_animation"] = outro_animation
        payload["outro_duration"] = 0.5

    result = api_post("/add_text", payload)
    return result.get("success", False)


def add_image(draft_id, image_url, start, end, scale_x=1, scale_y=1):
    """Add a background image."""
    payload = {
        "draft_id": draft_id,
        "image_url": image_url,
        "start": start,
        "end": end,
        "scale_x": scale_x,
        "scale_y": scale_y,
        "track_name": "image_main"
    }
    result = api_post("/add_image", payload)
    return result.get("success", False)


def save_draft(draft_id):
    """Save/export the draft."""
    print(f"  Saving draft {draft_id}...")
    result = api_post("/save_draft", {
        "draft_id": draft_id,
        "draft_folder": os.path.join(DRAFT_DIR, f"saudegpt_{draft_id}")
    })
    if result.get("success"):
        print(f"  Draft saved successfully!")
        return result.get("output", {})
    else:
        print(f"  [WARN] Failed to save draft: {result.get('error')}")
        return None


def query_draft_status(task_id):
    """Query export task status."""
    result = api_post("/query_draft_status", {"task_id": task_id})
    return result.get("output", {})


def generate_draft_url(draft_id):
    """Get the CapCut preview URL for the draft."""
    result = api_post("/generate_draft_url", {"draft_id": draft_id})
    if result.get("success"):
        return result["output"].get("draft_url", "")
    return None


def create_scene_image(api_base, video_id, scene_idx, text, bg_color):
    """
    Use a simple approach: since we can't easily create gradient images server-side,
    we'll use the add_text API with background_color to simulate cards.
    The dark background is handled by adding a full-screen colored image.
    """
    # We'll generate a solid color background image using a data URL approach
    # For simplicity, we skip image generation and use text with dark background
    pass


def build_video(video_config):
    """Build a complete video using the VectCut API."""
    print(f"\n{'='*60}")
    print(f"VIDEO: {video_config['title']}")
    print(f"{'='*60}")

    draft_id = create_draft()
    if not draft_id:
        return None

    # 1. Add narration audio
    audio_path = video_config["audio_file"]
    if os.path.exists(audio_path):
        add_audio(draft_id, audio_path, start=0.0, volume=1.0)
    else:
        print(f"  [WARN] Audio file not found: {audio_path}")

    # 2. Add scenes as text cards with transitions
    total_scenes = len(video_config["scenes"])
    for i, scene in enumerate(video_config["scenes"]):
        start = scene["start"]
        end = scene["end"]
        text = scene["text"]
        subtitle = scene.get("subtitle", "")

        # Main text - larger, centered
        intro = "fade_in" if i > 0 else None
        outro = "fade_out" if i < total_scenes - 1 else None
        
        add_text(
            draft_id=draft_id,
            text=text,
            start=start,
            end=end,
            font_size=12,
            font_color="#FFFFFF",
            bg_color=video_config["bg_color"],
            bg_alpha=0.85,
            transform_y=-8,
            intro_animation=intro,
            outro_animation=outro
        )

        # Subtitle text - smaller, at bottom
        if subtitle:
            add_text(
                draft_id=draft_id,
                text=subtitle,
                start=start,
                end=end,
                font_size=6,
                font_color="#AAAAAA",
                bg_color="#000000",
                bg_alpha=0.4,
                transform_y=35,
                intro_animation=None,
                outro_animation=outro
            )

    # 3. Save draft
    save_result = save_draft(draft_id)
    
    # 4. Get draft URL
    draft_url = generate_draft_url(draft_id)
    
    return {
        "draft_id": draft_id,
        "draft_url": draft_url,
        "save_result": save_result,
        "video_config": video_config
    }


def main():
    print("="*60)
    print("SaúdeGPT - Criação de Vídeos Educacionais")
    print("Usando VectCut API (CapCut) + edge-tts (Antonio Neural pt-BR)")
    print("="*60)

    results = []
    for video in VIDEOS:
        result = build_video(video)
        results.append(result)
        time.sleep(1)  # Small delay between videos

    # Summary
    print(f"\n{'='*60}")
    print("RESUMO DOS VÍDEOS CRIADOS")
    print(f"{'='*60}")
    for r in results:
        if r:
            vc = r["video_config"]
            print(f"\n✅ {vc['title']}")
            print(f"   Draft ID: {r['draft_id']}")
            print(f"   Duração: {vc['duration']}s")
            print(f"   URL: {r['draft_url'] or 'N/A'}")
        else:
            print(f"\n❌ {r}")

    print(f"\n📁 Scripts salvos em: /opt/data/projects/appfarmacia/scripts/videos/")
    print(f"📁 Áudios em: /opt/data/projects/appfarmacia/public/audio/narracao/")
    print(f"📁 Drafts em: {DRAFT_DIR}")
    print(f"📁 Vídeos em: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
