'use client';

export default function DiabetesDiagram() {
  return (
    <figure className="w-full max-w-md mx-auto my-8">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto"
        role="img"
        aria-label="Diagrama conceitual do diabetes: comparação entre glicose entrando na célula com insulina (normal) e sem insulina (resistência insulínica ou diabetes)"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definições */}
        <defs>
          <linearGradient id="glucoseDot" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--orange-400, #f49b44)" />
            <stop offset="100%" stopColor="var(--orange-500, #d66e0f)" />
          </linearGradient>
          <linearGradient id="cellGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--green-400, #5cb364)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--forest-400, #4ca15d)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="cellGradClosed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--orange-400, #f49b44)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--orange-500, #d66e0f)" stopOpacity="0.05" />
          </linearGradient>
          <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--green-500, #4ca15d)" />
          </marker>
          <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--orange-500, #d66e0f)" />
          </marker>
        </defs>

        {/* Fundo */}
        <rect x="0" y="0" width="400" height="300" rx="16" fill="var(--surface-2, #f5f7f6)" />

        {/* ══════ LADO ESQUERDO: CÉLULA NORMAL (COM INSULINA) ══════ */}
        <g transform="translate(20, 20)">
          <text
            x="80" y="18"
            fontSize="9"
            fontWeight="700"
            fill="var(--green-500, #4ca15d)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            ✓ Com Insulina (normal)
          </text>

          {/* Célula */}
          <ellipse cx="80" cy="95" rx="70" ry="55" fill="url(#cellGrad)" stroke="var(--green-400, #5cb364)" strokeWidth="2" />
          {/* Núcleo da célula */}
          <ellipse cx="80" cy="95" rx="22" ry="18" fill="var(--green-400, #5cb364)" opacity="0.2" />
          <text x="80" y="99" fontSize="7" fill="var(--muted, #4a4a4a)" textAnchor="middle" fontFamily="var(--font-body, Inter, sans-serif)">
            Núcleo
          </text>

          {/* Proteínas de membrana (portas abertas) */}
          <rect x="80" y="38" width="2" height="14" rx="1" fill="var(--green-500, #4ca15d)" opacity="0.8" />
          <rect x="80" y="140" width="2" height="14" rx="1" fill="var(--green-500, #4ca15d)" opacity="0.8" />

          {/* Glicose entrando (partículas douradas) */}
          <circle cx="25" cy="55" r="5" fill="url(#glucoseDot)" opacity="0.8" />
          <circle cx="35" cy="80" r="5" fill="url(#glucoseDot)" opacity="0.8" />
          <circle cx="20" cy="105" r="5" fill="url(#glucoseDot)" opacity="0.8" />
          <circle cx="30" cy="130" r="5" fill="url(#glucoseDot)" opacity="0.8" />

          {/* Setas de entrada */}
          <line x1="35" y1="55" x2="72" y2="48" stroke="var(--green-500, #4ca15d)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" strokeDasharray="3 2" />
          <line x1="40" y1="80" x2="75" y2="80" stroke="var(--green-500, #4ca15d)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" strokeDasharray="3 2" />
          <line x1="35" y1="105" x2="72" y2="110" stroke="var(--green-500, #4ca15d)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" strokeDasharray="3 2" />
          <line x1="40" y1="130" x2="75" y2="135" stroke="var(--green-500, #4ca15d)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" strokeDasharray="3 2" />

          {/* Partículas de glicose já dentro */}
          <circle cx="70" cy="60" r="4" fill="url(#glucoseDot)" opacity="0.5" />
          <circle cx="95" cy="75" r="4" fill="url(#glucoseDot)" opacity="0.5" />
          <circle cx="85" cy="110" r="4" fill="url(#glucoseDot)" opacity="0.5" />

          {/* Label: Glicose */}
          <text
            x="10" y="18"
            fontSize="7"
            fill="var(--muted, #4a4a4a)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Glicose
          </text>

          {/* Ícone insulina */}
          <g transform="translate(120, 60)">
            <circle cx="0" cy="0" r="8" fill="var(--green-500, #4ca15d)" opacity="0.2" />
            <text x="0" y="3" fontSize="7" fill="var(--green-600, #3d844b)" textAnchor="middle" fontFamily="var(--font-body, Inter, sans-serif)">
              I
            </text>
          </g>
          <text
            x="132" y="63"
            fontSize="6"
            fill="var(--green-500, #4ca15d)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Insulina
          </text>
          {/* Seta da insulina abrindo a porta */}
          <line x1="120" y1="72" x2="85" y2="42" stroke="var(--green-500, #4ca15d)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

          {/* Resultado */}
          <text
            x="80" y="170"
            fontSize="7"
            fill="var(--green-500, #4ca15d)"
            textAnchor="middle"
            fontWeight="600"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            ✅ Glicose entra na célula
          </text>
        </g>

        {/* ══════ LADO DIREITO: CÉLULA SEM INSULINA (DIABETES) ══════ */}
        <g transform="translate(210, 20)">
          <text
            x="80" y="18"
            fontSize="9"
            fontWeight="700"
            fill="var(--orange-500, #d66e0f)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            ✗ Sem Insulina (Diabetes)
          </text>

          {/* Célula */}
          <ellipse cx="80" cy="95" rx="70" ry="55" fill="url(#cellGradClosed)" stroke="var(--orange-400, #f49b44)" strokeWidth="2" />
          {/* Núcleo */}
          <ellipse cx="80" cy="95" rx="22" ry="18" fill="var(--orange-400, #f49b44)" opacity="0.15" />
          <text x="80" y="99" fontSize="7" fill="var(--muted, #4a4a4a)" textAnchor="middle" fontFamily="var(--font-body, Inter, sans-serif)">
            Núcleo
          </text>

          {/* Portas FECHADAS (X) */}
          <line x1="77" y1="38" x2="85" y2="50" stroke="var(--orange-500, #d66e0f)" strokeWidth="2" strokeLinecap="round" />
          <line x1="85" y1="38" x2="77" y2="50" stroke="var(--orange-500, #d66e0f)" strokeWidth="2" strokeLinecap="round" />
          <line x1="77" y1="140" x2="85" y2="152" stroke="var(--orange-500, #d66e0f)" strokeWidth="2" strokeLinecap="round" />
          <line x1="85" y1="140" x2="77" y2="152" stroke="var(--orange-500, #d66e0f)" strokeWidth="2" strokeLinecap="round" />

          {/* Glicose ACUMULADA FORA (muitas partículas) */}
          <circle cx="15" cy="40" r="5" fill="url(#glucoseDot)" opacity="0.9" />
          <circle cx="30" cy="50" r="5" fill="url(#glucoseDot)" opacity="0.9" />
          <circle cx="10" cy="70" r="5" fill="url(#glucoseDot)" opacity="0.9" />
          <circle cx="20" cy="85" r="5" fill="url(#glucoseDot)" opacity="0.9" />
          <circle cx="8" cy="100" r="5" fill="url(#glucoseDot)" opacity="0.9" />
          <circle cx="25" cy="115" r="5" fill="url(#glucoseDot)" opacity="0.9" />
          <circle cx="15" cy="135" r="5" fill="url(#glucoseDot)" opacity="0.9" />
          <circle cx="30" cy="145" r="5" fill="url(#glucoseDot)" opacity="0.9" />

          {/* Setas bloqueadas */}
          <line x1="30" y1="55" x2="70" y2="48" stroke="var(--orange-500, #d66e0f)" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
          <line x1="30" y1="85" x2="70" y2="85" stroke="var(--orange-500, #d66e0f)" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
          <line x1="30" y1="115" x2="70" y2="120" stroke="var(--orange-500, #d66e0f)" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
          {/* X de bloqueio */}
          <text x="48" y="60" fontSize="12" fill="var(--orange-500, #d66e0f)" textAnchor="middle" fontWeight="700">✕</text>
          <text x="48" y="90" fontSize="12" fill="var(--orange-500, #d66e0f)" textAnchor="middle" fontWeight="700">✕</text>
          <text x="48" y="126" fontSize="12" fill="var(--orange-500, #d66e0f)" textAnchor="middle" fontWeight="700">✕</text>

          {/* Sem glicose dentro */}
          <circle cx="80" cy="60" r="4" fill="var(--muted, #4a4a4a)" opacity="0.15" />

          {/* Resultado */}
          <text
            x="80" y="170"
            fontSize="7"
            fill="var(--orange-500, #d66e0f)"
            textAnchor="middle"
            fontWeight="600"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            ❌ Glicose acumulada no sangue
          </text>
        </g>

        {/* ── TÍTULO ── */}
        <text
          x="200" y="8"
          fontSize="10"
          fontWeight="700"
          fill="var(--foreground, #212121)"
          textAnchor="middle"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          Diabetes — como a insulina funciona
        </text>

        {/* ── LEGENDA INFERIOR ── */}
        <g transform="translate(20, 268)">
          <circle cx="4" cy="4" r="4" fill="url(#glucoseDot)" />
          <text
            x="14" y="8"
            fontSize="8"
            fill="var(--muted, #4a4a4a)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Glicose (açúcar)
          </text>
        </g>
        <g transform="translate(200, 268)">
          <circle cx="4" cy="4" r="4" fill="var(--green-500, #4ca15d)" opacity="0.3" stroke="var(--green-500, #4ca15d)" strokeWidth="1.5" />
          <text
            x="14" y="8"
            fontSize="8"
            fill="var(--muted, #4a4a4a)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Célula (precisa de insulina)
          </text>
        </g>
      </svg>
      <figcaption className="mt-3 text-xs text-center text-muted leading-relaxed px-4">
        <strong className="text-foreground">Insulina: a chave que abre a célula para a glicose.</strong> À esquerda, com insulina presente, 
        a glicose entra na célula e é usada como energia. À direita, sem insulina ou com resistência insulínica, 
        a <strong className="text-orange-600 dark:text-orange-400">glicose se acumula no sangue</strong> — é o que acontece no diabetes.
      </figcaption>
    </figure>
  );
}
