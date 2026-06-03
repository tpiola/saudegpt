import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.nome;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 64,
        background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 45%, #1fb6c9 100%)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ fontSize: 28, opacity: 0.9, marginBottom: 16 }}>Plataforma-escola</div>
      <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.15, maxWidth: 900 }}>
        Atendentes de Farmácia
      </div>
      <div style={{ fontSize: 24, marginTop: 24, opacity: 0.92, maxWidth: 800 }}>
        Saúde integral, balcão seguro e formação do iniciante ao avançado
      </div>
    </div>,
    { ...size },
  );
}
