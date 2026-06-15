#!/usr/bin/env python3
"""
Cria 3 vídeos educacionais para o SaúdeGPT usando a VectCut API (CapCut).
Versão 2 - Com backgrounds gradientes gerados por Pillow.

Uso:
  python3 scripts/videos/criar_videos_v2.py

Requer: VectCut API rodando em http://localhost:9001
"""

import requests
import json
import os
import time
import sys

API_BASE = "http://localhost:9001"
AUDIO_DIR = "/opt/data/projects/appfarmacia/public/audio/narracao"
BG_DIR = "/opt/data/projects/appfarmacia/public/images/backgrounds"
DRAFT_DIR = "/opt/data/projects/appfarmacia/public/videos-draft"
OUTPUT_DIR = "/opt/data/projects/appfarmacia/public/videos/educacionais"
os.makedirs(DRAFT_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

def endpoint(path):
    return f"{API_BASE}{path}"

def api_post(path, data, timeout=120):
    try:
        r = requests.post(endpoint(path), json=data, timeout=timeout)
        return r.json()
    except Exception as e:
        print(f"    [ERRO] {path}: {e}")
        return {"success": False, "error": str(e)}

def ok(r):
    return r.get("success", False)

# ============================================================
# CONFIGURAÇÃO DOS 3 VÍDEOS
# ============================================================
VIDEOS = [
    {
        "id": "interacoes",
        "title": "Interações Medicamentosas",
        "audio": os.path.join(AUDIO_DIR, "narracao_interacoes.mp3"),
        "duration": 28.0,
        "bg_image": os.path.join(BG_DIR, "bg_interacoes.jpg"),
        "card_bg": os.path.join(BG_DIR, "bg_card_interacoes.jpg"),
        "scenes": [
            {"t": 0.0,  "text": "Você sabia?", "sub": "Interações Medicamentosas"},
            {"t": 3.5,  "text": "AAS + Anti-inflamatório\n= Risco de Sangramento", "sub": "Cuidado! Combinação perigosa"},
            {"t": 8.0,  "text": "Ibuprofeno + AAS\naumentam risco de\nsangramento gastrointestinal", "sub": "Efeito adverso grave"},
            {"t": 13.5, "text": "Sempre consulte o\nfarmacêutico antes de\ncombinar medicamentos", "sub": "Oriente-se"},
            {"t": 19.0, "text": "Informe seu médico sobre\nTODOS os medicamentos\nque você usa", "sub": "Transparência salva vidas"},
            {"t": 24.0, "text": "SaúdeGPT\nInformação que salva vidas", "sub": "saudegpt.com"},
        ]
    },
    {
        "id": "genericos",
        "title": "Genérico vs Referência",
        "audio": os.path.join(AUDIO_DIR, "narracao_genericos.mp3"),
        "duration": 27.0,
        "bg_image": os.path.join(BG_DIR, "bg_genericos.jpg"),
        "card_bg": os.path.join(BG_DIR, "bg_card_genericos.jpg"),
        "scenes": [
            {"t": 0.0,  "text": "Referência ou Genérico?", "sub": "Qual escolher?"},
            {"t": 4.0,  "text": "Mesmo princípio ativo\nMesma eficácia\nMesma segurança", "sub": "São equivalentes terapêuticos"},
            {"t": 9.0,  "text": "Até 60% mais barato\nAprovado pela ANVISA", "sub": "Qualidade com economia"},
            {"t": 14.0, "text": "Diferença?\nApenas nome e preço", "sub": "Exija a opção genérica"},
            {"t": 19.0, "text": "Economize sem\ncomprometer a saúde", "sub": "Escolha inteligente"},
            {"t": 23.0, "text": "SaúdeGPT\nInformação que salva vidas", "sub": "saudegpt.com"},
        ]
    },
    {
        "id": "atendimento",
        "title": "Dica de Balcão - Cliente Difícil",
        "audio": os.path.join(AUDIO_DIR, "narracao_atendimento.mp3"),
        "duration": 26.0,
        "bg_image": os.path.join(BG_DIR, "bg_atendimento.jpg"),
        "card_bg": os.path.join(BG_DIR, "bg_card_atendimento.jpg"),
        "scenes": [
            {"t": 0.0,  "text": "Cliente pede Ritalina\nsem receita. E agora?", "sub": "Situação delicada"},
            {"t": 4.5,  "text": "Ritalina (metilfenidato)\né medicamento controlado", "sub": "Substância sujeita a controle especial"},
            {"t": 9.5,  "text": "Exija receita médica\namarela (tipo A)", "sub": "Receita obrigatória por lei"},
            {"t": 14.5, "text": "Explique educadamente:\né para proteger o paciente", "sub": "Postura profissional"},
            {"t": 19.5, "text": "Sua postura faz\ntoda a diferença", "sub": "Seja ético e acolhedor"},
            {"t": 22.5, "text": "SaúdeGPT\nInformação que salva vidas", "sub": "saudegpt.com"},
        ]
    }
]

def create_draft():
    r = api_post("/create_draft", {"width": 1080, "height": 1920})
    if ok(r):
        did = r["output"]["draft_id"]
        print(f"  ✅ Draft criado: {did}")
        return did
    print(f"  ❌ Falha ao criar draft: {r.get('error')}")
    return None

def add_image_bg(draft_id, image_path, start, end):
    r = api_post("/add_image", {
        "draft_id": draft_id,
        "image_url": image_path,
        "start": start,
        "end": end,
        "scale_x": 1.0,
        "scale_y": 1.0,
        "track_name": "background"
    })
    return ok(r)

def add_audio(draft_id, audio_path, start=0.0, volume=1.0):
    r = api_post("/add_audio", {
        "draft_id": draft_id,
        "audio_url": audio_path,
        "start": start,
        "volume": volume,
        "track_name": "audio_narration"
    })
    return ok(r)

def add_text_overlay(draft_id, text, start, end, font_size=11, 
                     font_color="#FFFFFF", bg_color="#000000",
                     bg_alpha=0.65, transform_y=0, transform_x=0,
                     intro=None, outro=None):
    payload = {
        "draft_id": draft_id,
        "text": text,
        "start": start,
        "end": end,
        "font_size": font_size,
        "font_color": font_color,
        "background_color": bg_color,
        "background_alpha": bg_alpha,
        "background_round_radius": 0.03,
        "transform_y": transform_y,
        "transform_x": transform_x,
        "track_name": "text_main",
        "shadow_enabled": True,
        "shadow_color": "#000000",
        "shadow_alpha": 0.5,
        "shadow_distance": 3.0,
    }
    if intro:
        payload["intro_animation"] = intro
        payload["intro_duration"] = 0.4
    if outro:
        payload["outro_animation"] = outro
        payload["outro_duration"] = 0.3
    r = api_post("/add_text", payload)
    return ok(r)

def add_subtitle_text(draft_id, text, start, end, transform_y=35):
    r = api_post("/add_text", {
        "draft_id": draft_id,
        "text": text,
        "start": start,
        "end": end,
        "font_size": 5.5,
        "font_color": "#CCCCCC",
        "background_color": "#000000",
        "background_alpha": 0.35,
        "background_round_radius": 0.015,
        "transform_y": transform_y,
        "track_name": "text_subtitle"
    })
    return ok(r)

def save_draft(draft_id):
    r = api_post("/save_draft", {
        "draft_id": draft_id,
        "draft_folder": os.path.join(DRAFT_DIR, f"saudegpt_{draft_id}")
    })
    return r

def get_draft_url(draft_id):
    r = api_post("/generate_draft_url", {"draft_id": draft_id})
    if ok(r):
        return r["output"].get("draft_url", "")
    return None

def build_video(v):
    print(f"\n{'='*55}")
    print(f"🎬 {v['title']}")
    print(f"{'='*55}")

    draft_id = create_draft()
    if not draft_id:
        return None

    dur = v["duration"]
    
    # 1. Background image (full duration)
    if os.path.exists(v["bg_image"]):
        print(f"  📷 Adicionando background...")
        add_image_bg(draft_id, v["bg_image"], 0.0, dur)
    else:
        print(f"  ⚠ Background não encontrado: {v['bg_image']}")

    # 2. Narration audio
    if os.path.exists(v["audio"]):
        print(f"  🔊 Adicionando narração (Antonio Neural pt-BR)...")
        add_audio(draft_id, v["audio"], 0.0, 1.0)
    else:
        print(f"  ⚠ Áudio não encontrado: {v['audio']}")

    # 3. Scene cards with text
    n = len(v["scenes"])
    for i, scene in enumerate(v["scenes"]):
        t_start = scene["t"]
        # Each scene lasts until the next one starts (or until end)
        if i < n - 1:
            t_end = v["scenes"][i + 1]["t"]
        else:
            t_end = dur

        text = scene["text"]
        sub = scene.get("sub", "")
        
        # Intro/outro animations
        intro = "fade_in" if i > 0 else None
        outro = "fade_out" if i < n - 1 else None

        print(f"  🏷 Cena {i+1}: \"{text.split(chr(10))[0]}\" ({t_start}s-{t_end}s)")

        # Main text
        add_text_overlay(
            draft_id, text, t_start, t_end,
            font_size=12,
            font_color="#FFFFFF",
            bg_color="#000000",
            bg_alpha=0.55,
            transform_y=-6,
            intro=intro,
            outro=outro
        )

        # Subtitle at bottom
        if sub:
            add_subtitle_text(draft_id, sub, t_start, t_end, transform_y=35)

    # 4. Save draft
    print(f"  💾 Salvando draft...")
    save_result = save_draft(draft_id)
    
    # 5. Get URL
    draft_url = get_draft_url(draft_id)
    
    info = {
        "draft_id": draft_id,
        "draft_url": draft_url,
        "title": v["title"],
        "duration": dur,
        "id": v["id"]
    }
    print(f"  ✅ Finalizado! URL: {draft_url or 'N/A'}")
    return info


def main():
    print("="*55)
    print("🧪 SaúdeGPT - Criação de Vídeos Educacionais v2")
    print("   VectCut API + edge-tts (Antonio Neural pt-BR)")
    print(f"   {len(VIDEOS)} vídeos a serem criados")
    print("="*55)

    results = []
    for v in VIDEOS:
        info = build_video(v)
        results.append(info)
        time.sleep(1.5)

    # Summary
    print(f"\n{'='*55}")
    print("📊 RESUMO FINAL")
    print(f"{'='*55}")
    for r in results:
        if r:
            print(f"\n✅ {r['title']}")
            print(f"   ID:      {r['draft_id']}")
            print(f"   Duração: {r['duration']:.0f}s")
            print(f"   URL:     {r['draft_url']}")
        else:
            print(f"\n❌ Falha na criação")

    print(f"\n📁 Scripts:     /opt/data/projects/appfarmacia/scripts/videos/")
    print(f"📁 Áudios:      /opt/data/projects/appfarmacia/public/audio/narracao/")
    print(f"📁 Backgrounds: /opt/data/projects/appfarmacia/public/images/backgrounds/")
    print(f"📁 Drafts:      /opt/data/projects/appfarmacia/public/videos-draft/")

if __name__ == "__main__":
    main()
