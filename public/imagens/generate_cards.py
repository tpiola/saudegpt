#!/usr/bin/env python3
"""Generate 5 ultra-realistic course card images via OpenAI gpt-image-2 API."""

import json, os, sys, time, base64, io, urllib.request

API_KEY_FILE = "/opt/data/tokens/openai-key"
OUTPUT_DIR = "/opt/data/projects/saudegpt-full/public/imagens"
API_URL = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-2"
SIZE = "1024x1024"

BASE_STYLE = (
    "Real documentary photo, diverse Brazilian people, natural window light, "
    "authentic expressions, natural skin texture, photorealistic, "
    "real photograph style, natural imperfections, no AI look, 8K, "
    "professional photography, shallow depth of field"
)

PROMPTS = {
    "card-farmacia": (
        f"Brazilian pharmacy attendant in white coat behind a modern pharmacy counter, "
        f"smiling naturally while helping a customer, shelves with medicine boxes in background, "
        f"{BASE_STYLE}"
    ),
    "card-nutricao": (
        f"Brazilian nutritionist professional in white coat standing beside a table full of "
        f"fresh colorful fruits and vegetables, daylight from window, natural smile, "
        f"{BASE_STYLE}"
    ),
    "card-reabilitacao": (
        f"Brazilian physiotherapist professional explaining orthopedic products to a patient, "
        f"showing a knee brace at a clinic reception desk, warm lighting, "
        f"{BASE_STYLE}"
    ),
    "card-saude-mental": (
        f"Brazilian psychologist in a cozy welcoming consultation room with soft armchairs, "
        f"warm ambient lighting, plants, calm atmosphere, professional yet approachable, "
        f"{BASE_STYLE}"
    ),
    "card-cuidador-idosos": (
        f"Brazilian elderly caregiver professional with a smiling elderly person in a bright "
        f"sunlit room, natural interaction, caring expression, home care setting, "
        f"{BASE_STYLE}"
    ),
}


def read_api_key():
    with open(API_KEY_FILE, "r") as f:
        return f.read().strip()


def generate_image(api_key, prompt, max_retries=3):
    data = json.dumps({"model": MODEL, "prompt": prompt, "n": 1, "size": SIZE}).encode()
    req = urllib.request.Request(
        API_URL, data=data,
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        method="POST",
    )
    for attempt in range(max_retries):
        try:
            with urllib.request.urlopen(req, timeout=180) as resp:
                result = json.loads(resp.read().decode())
                b64 = result["data"][0]["b64_json"]
                print(f"  Generated! b64 length: {len(b64)} chars")
                return base64.b64decode(b64)
        except Exception as e:
            print(f"  Attempt {attempt+1}/{max_retries}: {e}")
            if attempt < max_retries - 1:
                time.sleep(5)
    raise RuntimeError("All retries exhausted")


def save_as_webp(image_bytes, output_path):
    from PIL import Image
    img = Image.open(io.BytesIO(image_bytes))
    img = img.convert("RGB")
    img.save(output_path, "WEBP", quality=92)
    size_kb = os.path.getsize(output_path) / 1024
    print(f"  Saved: {output_path} ({img.size[0]}x{img.size[1]}, {size_kb:.1f} KB)")


def main():
    api_key = read_api_key()
    print(f"API Key: {len(api_key)} chars | Output: {OUTPUT_DIR}")
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    for idx, (name, prompt) in enumerate(PROMPTS.items(), 1):
        print(f"\n[{idx}/5] {name} (prompt: {len(prompt)} chars)")
        image_bytes = generate_image(api_key, prompt)
        save_as_webp(image_bytes, os.path.join(OUTPUT_DIR, f"{name}.webp"))
        print(f"  OK")

    print(f"\n{'='*50}\nAll 5 images done!\n{'='*50}")


if __name__ == "__main__":
    main()
