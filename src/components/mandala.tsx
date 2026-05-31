import { mandalaAneis, mandalaCentro } from "@/content/mandala";

// Mandala pedagógica de saúde integral em SVG: centro + 4 anéis concêntricos.
const RAIOS = [70, 116, 162, 208];
const CORES = ["#1d4ed8", "#2563eb", "#1fb6c9", "#0fa3a3"];

export function Mandala() {
  const tamanho = 460;
  const c = tamanho / 2;

  return (
    <div className="mx-auto w-full max-w-[460px]">
      <svg viewBox={`0 0 ${tamanho} ${tamanho}`} className="h-auto w-full" role="img" aria-label="Mandala pedagógica de saúde integral">
        {/* Anéis decorativos */}
        {RAIOS.map((r, i) => (
          <circle
            key={r}
            cx={c}
            cy={c}
            r={r}
            fill="none"
            stroke={CORES[i]}
            strokeOpacity={0.18}
            strokeWidth={1.5}
          />
        ))}

        {/* Itens distribuídos em cada anel */}
        {mandalaAneis.map((anel, idx) => {
          const r = RAIOS[idx];
          return anel.itens.map((item, j) => {
            const ang = (j / anel.itens.length) * Math.PI * 2 - Math.PI / 2;
            const x = c + r * Math.cos(ang);
            const y = c + r * Math.sin(ang);
            return (
              <g key={`${anel.nivel}-${item}`}>
                <circle cx={x} cy={y} r={4} fill={CORES[idx]} />
                <text
                  x={x}
                  y={y - 9}
                  textAnchor="middle"
                  className="fill-foreground"
                  style={{ fontSize: 9.5, fontWeight: 600 }}
                >
                  {item}
                </text>
              </g>
            );
          });
        })}

        {/* Centro: a pessoa */}
        <circle cx={c} cy={c} r={40} fill="url(#mandala-centro)" />
        <text x={c} y={c - 2} textAnchor="middle" className="fill-white" style={{ fontSize: 11, fontWeight: 700 }}>
          {mandalaCentro.split(" ")[0]}
        </text>
        <text x={c} y={c + 12} textAnchor="middle" className="fill-white" style={{ fontSize: 11, fontWeight: 700 }}>
          {mandalaCentro.split(" ").slice(1).join(" ")}
        </text>
        <defs>
          <radialGradient id="mandala-centro">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#16285f" />
          </radialGradient>
        </defs>
      </svg>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted">
        {mandalaAneis.map((anel, i) => (
          <div key={anel.nivel} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: CORES[i] }} />
            <span className="font-medium text-foreground">Anel {anel.nivel}:</span> {anel.titulo}
          </div>
        ))}
      </div>
    </div>
  );
}
