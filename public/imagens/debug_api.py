#!/usr/bin/env python3
"""Debug OpenAI gpt-image-2 API response."""

import json
import urllib.request

API_KEY_FILE = "/opt..._DIR = "/opt/data/projects/saudegpt-full/public/imagens"

def read_api_key():
    with open(API_KEY_FILE, "r") as f:
        return f.read().strip()

api_key = read_api_key()
print(f"API Key: {api_key[:15]}... ({len(api_key)} chars)")

prompt = "A simple red apple on a white table, photorealistic"
data = json.dumps({
    "model": "gpt-image-2",
    "prompt": prompt,
    "n": 1,
    "size": "1024x1024",
}).encode("utf-8")

req = urllib.request.Request(
    "https://api.openai.com/v1/images/generations",
    data=data,
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    },
    method="POST",
)

try:
    with urllib.request.urlopen(req, timeout=120) as resp:
        raw = resp.read().decode("utf-8")
        print(f"Status: {resp.status}")
        print(f"Response (first 2000 chars): {raw[:2000]}")
        result = json.loads(raw)
        print(f"\nParsed keys: {list(result.keys())}")
        if "data" in result:
            print(f"data type: {type(result['data'])}")
            print(f"data[0] keys: {list(result['data'][0].keys())}")
except Exception as e:
    print(f"Error: {e}")
    if hasattr(e, 'read'):
        body = e.read().decode("utf-8")
        print(f"Error body: {body}")
