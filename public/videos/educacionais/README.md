# Vídeos Educacionais - SaúdeGPT

3 vídeos educacionais curtos criados para o SaúdeGPT sobre temas essenciais de farmácia.

## Vídeos Criados

| # | Vídeo | Duração | Draft ID | Tema |
|---|-------|---------|----------|------|
| 1 | **Interações Medicamentosas** | ~28s | `dfd_cat_1781514937_75c7df05` | Alerta sobre AAS + anti-inflamatório |
| 2 | **Genérico vs Referência** | ~27s | `dfd_cat_1781514939_beb6738b` | Mesmo princípio ativo, economia |
| 3 | **Dica de Balcão - Cliente Difícil** | ~26s | `dfd_cat_1781514941_ca937745` | Ritalina sem receita |

## Tecnologia

- **API**: VectCut (CapCut API) rodando em `http://localhost:9001`
- **Narração**: edge-tts com voz `pt-BR-AntonioNeural` (masculino, amigável)
- **Backgrounds**: Gradientes gerados com Pillow (1080x1920)
- **Formato**: Drafts do CapCut (.draft) — exportáveis para MP4 via CapCut desktop

## Estrutura de Arquivos

```
public/
├── audio/narracao/
│   ├── narracao_interacoes.mp3     (27s)
│   ├── narracao_genericos.mp3      (27s)
│   └── narracao_atendimento.mp3    (26s)
├── images/backgrounds/
│   ├── bg_interacoes.jpg           (verde escuro radial)
│   ├── bg_genericos.jpg            (azul escuro gradiente)
│   └── bg_atendimento.jpg          (marrom gradiente)
├── videos/
│   └── educacionais/               (destino para MP4s exportados)
└── videos-draft/                   (drafts .draft salvos)

scripts/videos/
├── criar_videos_educacionais.py    # Script v1 (sem backgrounds)
├── criar_videos_v2.py              # Script v2 (com backgrounds + animações)
└── gerar_backgrounds.py            # Gera gradientes com Pillow
```

## Como Abrir os Drafts

Cada draft tem uma URL no formato:
```
https://www.capcutapi.top/draft/downloader?=<draft_id>
```

Para exportar para MP4:
1. Abra o CapCut desktop
2. Importe o draft pelo ID
3. Exporte como MP4 (1080x1920)
4. Salve em `public/videos/educacionais/`

## Como Regenerar

```bash
# 1. Gerar backgrounds
python3 scripts/videos/gerar_backgrounds.py

# 2. Criar drafts (requer API rodando)
python3 scripts/videos/criar_videos_v2.py
```

## Narração

Voz: **Antonio Neural** (pt-BR) — Microsoft Edge TTS
- Tom amigável e positivo
- Ideal para conteúdo educacional de saúde
- Geração via `edge-tts --voice pt-BR-AntonioNeural`
