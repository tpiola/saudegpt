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
        background: "#123e36",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ fontSize: 28, opacity: 0.9, marginBottom: 16 }}>SaúdeGPT · Conhecimento que cuida</div>
      <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.15, maxWidth: 900 }}>
        Conhecimento que aproxima. Cuidado que fica.
      </div>
      <div style={{ fontSize: 24, marginTop: 24, opacity: 0.92, maxWidth: 800 }}>
        Trilhas de aprendizado, situações de balcão e cuidado responsável.
      </div>
    </div>,
    { ...size },
  );
}
