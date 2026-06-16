'use client';

export default function HormoniosDiagram() {
  return (
    <figure className="w-full max-w-md mx-auto my-8">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto"
        role="img"
        aria-label="Diagrama conceitual do eixo hipotálamo-hipófise: o hipotálamo comanda a hipófise, que controla glândulas como tireoide, suprarrenais e gônadas"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definições */}
        <defs>
          <linearGradient id="brainGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--forest-400, #4ca15d)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--forest-500, #0d3a32)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="hypothalamusGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--orange-400, #f59e0b)" />
            <stop offset="100%" stopColor="var(--orange-500, #d66e0f)" />
          </linearGradient>
          <linearGradient id="pituitaryGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--green-400, #5cb364)" />
            <stop offset="100%" stopColor="var(--green-500, #4ca15d)" />
          </linearGradient>
          <linearGradient id="thyroidGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--emerald-400, #34d399)" />
            <stop offset="100%" stopColor="var(--emerald-500, #10b981)" />
          </linearGradient>
          <linearGradient id="adrenalGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--orange-300, #f8b773)" />
            <stop offset="100%" stopColor="var(--orange-400, #f59e0b)" />
          </linearGradient>
          <linearGradient id="gonadGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--green-300, #85c88b)" />
            <stop offset="100%" stopColor="var(--green-400, #5cb364)" />
          </linearGradient>
          <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L5,10 L10,0 Z" fill="var(--muted, #4a4a4a)" />
          </marker>
          <marker id="arrowUp" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,10 L5,0 L10,10 Z" fill="var(--muted, #4a4a4a)" />
          </marker>
        </defs>

        {/* Fundo */}
        <rect x="0" y="0" width="400" height="300" rx="16" fill="var(--surface-2, #f5f7f6)" />

        {/* Título */}
        <text
          x="200" y="22"
          fontSize="11"
          fontWeight="700"
          fill="var(--foreground, #212121)"
          textAnchor="middle"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          Eixo Hipotálamo-Hipófise
        </text>
        <text
          x="200" y="38"
          fontSize="8"
          fill="var(--muted, #4a4a4a)"
          textAnchor="middle"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          O comando central do sistema endócrino
        </text>

        {/* ── NÍVEL 1: HIPOTÁLAMO (cérebro) ── */}
        <g transform="translate(200, 55)">
          {/* Silhueta do cérebro */}
          <path
            d="M-55,-8 C-55,-28 -35,-35 -20,-30 C-10,-27 0,-30 10,-28 C25,-25 40,-28 50,-18 C58,-10 55,5 45,10 C35,15 25,10 15,12 C5,14 -5,12 -15,10 C-30,8 -45,12 -50,-2 Z"
            fill="url(#brainGrad)"
            stroke="var(--forest-400, #4ca15d)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <text
            x="0" y="6"
            fontSize="7"
            fill="var(--forest-500, #0d3a32)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
            className="dark:fill-green-400"
          >
            Cérebro
          </text>

          {/* Hipotálamo (destaque laranja) */}
          <ellipse cx="-15" cy="-5" rx="18" ry="10" fill="url(#hypothalamusGrad)" opacity="0.85" />
          <text
            x="-15" y="-3"
            fontSize="6"
            fontWeight="700"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Hipotálamo
          </text>
          <text
            x="-15" y="5"
            fontSize="5"
            fill="rgba(255,255,255,0.7)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Comando central
          </text>
        </g>

        {/* Seta: Hipotálamo → Hipófise */}
        <line
          x1="185" y1="78"
          x2="185" y2="105"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="1.5"
          markerEnd="url(#arrowDown)"
          strokeDasharray="3 2"
        />
        <text
          x="175" y="93"
          fontSize="5"
          fill="var(--muted, #4a4a4a)"
          textAnchor="end"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          CRH / TRH / GnRH
        </text>

        {/* ── NÍVEL 2: HIPÓFISE ── */}
        <g transform="translate(200, 115)">
          <ellipse cx="0" cy="0" rx="22" ry="14" fill="url(#pituitaryGrad)" opacity="0.85" />
          <text
            x="0" y="-2"
            fontSize="7"
            fontWeight="700"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Hipófise
          </text>
          <text
            x="0" y="7"
            fontSize="5"
            fill="rgba(255,255,255,0.7)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Glândula-mestra
          </text>
        </g>

        {/* Três setas saindo da hipófise para as glândulas */}
        {/* Seta 1: Hipófise → Tireoide (esquerda) */}
        <path
          d="M185,130 C150,140 130,155 130,175"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="1.2"
          fill="none"
          markerEnd="url(#arrowDown)"
          strokeDasharray="3 2"
        />
        <text
          x="140" y="148"
          fontSize="5"
          fill="var(--muted, #4a4a4a)"
          textAnchor="middle"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          TSH
        </text>

        {/* Seta 2: Hipófise → Suprarrenais (centro) */}
        <line
          x1="200" y1="130"
          x2="200" y2="180"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="1.2"
          markerEnd="url(#arrowDown)"
          strokeDasharray="3 2"
        />
        <text
          x="210" y="158"
          fontSize="5"
          fill="var(--muted, #4a4a4a)"
          textAnchor="start"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          ACTH
        </text>

        {/* Seta 3: Hipófise → Gônadas (direita) */}
        <path
          d="M215,130 C250,140 270,155 270,175"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="1.2"
          fill="none"
          markerEnd="url(#arrowDown)"
          strokeDasharray="3 2"
        />
        <text
          x="255" y="148"
          fontSize="5"
          fill="var(--muted, #4a4a4a)"
          textAnchor="middle"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          FSH / LH
        </text>

        {/* ── NÍVEL 3: GLÂNDULAS ALVO ── */}

        {/* Tireoide (esquerda) */}
        <g transform="translate(110, 188)">
          <ellipse cx="0" cy="0" rx="25" ry="14" fill="url(#thyroidGrad)" opacity="0.3" stroke="var(--emerald-500, #10b981)" strokeWidth="1.5" />
          {/* Forma de borboleta */}
          <path
            d="M-12,0 C-20,-8 -18,-14 -8,-10 C-2,-7 0,-2 0,0 C0,-2 2,-7 8,-10 C18,-14 20,-8 12,0 Z"
            fill="url(#thyroidGrad)"
            opacity="0.7"
          />
          <text
            x="0" y="-14"
            fontSize="7"
            fontWeight="600"
            fill="var(--emerald-600, #059669)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Tireoide
          </text>
          <text
            x="0" y="4"
            fontSize="5"
            fill="var(--muted, #4a4a4a)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            T3 / T4
          </text>
        </g>

        {/* Suprarrenais (centro) */}
        <g transform="translate(200, 195)">
          <ellipse cx="0" cy="0" rx="25" ry="14" fill="url(#adrenalGrad)" opacity="0.3" stroke="var(--orange-400, #f59e0b)" strokeWidth="1.5" />
          <ellipse cx="0" cy="0" rx="12" ry="8" fill="url(#adrenalGrad)" opacity="0.7" />
          <text
            x="0" y="-16"
            fontSize="7"
            fontWeight="600"
            fill="var(--orange-500, #d66e0f)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Suprarrenais
          </text>
          <text
            x="0" y="3"
            fontSize="5"
            fill="var(--muted, #4a4a4a)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Cortisol
          </text>
        </g>

        {/* Gônadas (direita) */}
        <g transform="translate(290, 188)">
          <ellipse cx="0" cy="0" rx="25" ry="14" fill="url(#gonadGrad)" opacity="0.3" stroke="var(--green-400, #5cb364)" strokeWidth="1.5" />
          <ellipse cx="0" cy="0" rx="12" ry="8" fill="url(#gonadGrad)" opacity="0.7" />
          <text
            x="0" y="-16"
            fontSize="7"
            fontWeight="600"
            fill="var(--green-500, #4ca15d)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Gônadas
          </text>
          <text
            x="0" y="3"
            fontSize="5"
            fill="var(--muted, #4a4a4a)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Estrogênio / Testo.
          </text>
        </g>

        {/* ── SETAS DE FEEDBACK NEGATIVO (retorno) ── */}
        {/* Feedback da tireoide */}
        <path
          d="M100,175 C80,145 120,110 170,95"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowUp)"
          strokeDasharray="2 3"
          opacity="0.4"
        />
        {/* Feedback das suprarrenais */}
        <path
          d="M195,180 C190,160 185,140 190,120"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowUp)"
          strokeDasharray="2 3"
          opacity="0.4"
        />
        {/* Feedback das gônadas */}
        <path
          d="M300,175 C320,145 280,110 230,95"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowUp)"
          strokeDasharray="2 3"
          opacity="0.4"
        />

        {/* Legenda feedback */}
        <text
          x="345" y="80"
          fontSize="5"
          fill="var(--muted, #4a4a4a)"
          textAnchor="middle"
          fontFamily="var(--font-body, Inter, sans-serif)"
          opacity="0.5"
        >
          ← Feedback negativo
        </text>

        {/* ── LEGENDA INFERIOR ── */}
        <g transform="translate(20, 270)">
          <rect x="0" y="0" width="70" height="20" rx="6" fill="url(#hypothalamusGrad)" opacity="0.8" />
          <text
            x="35" y="13"
            fontSize="6"
            fontWeight="600"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Comando
          </text>
        </g>
        <g transform="translate(100, 270)">
          <rect x="0" y="0" width="70" height="20" rx="6" fill="url(#pituitaryGrad)" opacity="0.8" />
          <text
            x="35" y="13"
            fontSize="6"
            fontWeight="600"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Glândula-mestra
          </text>
        </g>
        <g transform="translate(180, 270)">
          <rect x="0" y="0" width="90" height="20" rx="6" fill="var(--emerald-500, #10b981)" opacity="0.7" />
          <text
            x="45" y="13"
            fontSize="6"
            fontWeight="600"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Glândulas alvo
          </text>
        </g>
        <g transform="translate(280, 270)">
          <rect x="0" y="0" width="100" height="20" rx="6" fill="none" stroke="var(--muted, #4a4a4a)" strokeWidth="1" strokeDasharray="2 2" />
          <text
            x="50" y="13"
            fontSize="6"
            fill="var(--muted, #4a4a4a)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Feedback (↻ regulação)
          </text>
        </g>
      </svg>
      <figcaption className="mt-3 text-xs text-center text-muted leading-relaxed px-4">
        <strong className="text-foreground">Eixo Hipotálamo-Hipófise: a hierarquia hormonal.</strong> O <strong className="text-orange-600 dark:text-orange-400">hipotálamo</strong> 
        (no cérebro) envia ordens à <strong className="text-gold-600 dark:text-gold-400">hipófise</strong> (glândula-mestra), que libera hormônios 
        estimulando glândulas como tireoide, suprarrenais e gônadas. Setas tracejadas representam o feedback negativo — o sistema se autorregula.
      </figcaption>
    </figure>
  );
}
