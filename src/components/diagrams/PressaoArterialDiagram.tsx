'use client';

export default function PressaoArterialDiagram() {
  return (
    <figure className="w-full max-w-md mx-auto my-8">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto"
        role="img"
        aria-label="Diagrama conceitual da pressão arterial: coração bombeando sangue nas artérias, mostrando pressão sistólica (contração) e diastólica (relaxamento)"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definições */}
        <defs>
          <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--orange-400, #f59e0b)" />
            <stop offset="100%" stopColor="var(--orange-500, #d66e0f)" />
          </linearGradient>
          <linearGradient id="arteryGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--orange-400, #f59e0b)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--orange-400, #f59e0b)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--orange-400, #f59e0b)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="bloodFlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--orange-500, #d66e0f)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--orange-500, #d66e0f)" stopOpacity="0.2" />
          </linearGradient>
          <marker id="arrowOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--orange-500, #d66e0f)" />
          </marker>
          <marker id="arrowMuted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--muted, #4a4a4a)" />
          </marker>
        </defs>

        {/* Fundo sutil */}
        <rect x="0" y="0" width="400" height="300" rx="16" fill="var(--surface-2, #f5f7f6)" />

        {/* ── ARTÉRIA PRINCIPAL (tubo horizontal) ── */}
        <path
          d="M210,100 C260,80 300,80 370,90"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 3"
          opacity="0.4"
        />
        <path
          d="M210,170 C260,190 300,190 370,180"
          stroke="var(--muted, #4a4a4a)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 3"
          opacity="0.4"
        />
        {/* Parede da artéria */}
        <path
          d="M180,100 C210,85 250,82 300,85 C340,88 360,85 380,90"
          stroke="var(--foreground, #212121)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M180,170 C210,185 250,188 300,185 C340,182 360,185 380,180"
          stroke="var(--foreground, #212121)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Preenchimento da artéria */}
        <path
          d="M180,100 C210,85 250,82 300,85 C340,88 360,85 380,90 L380,180 C360,185 340,188 300,185 C250,188 210,185 180,170 Z"
          fill="url(#arteryGrad)"
          opacity="0.3"
        />

        {/* Ondas de pulso (pressão pulsátil) */}
        <path
          d="M190,135 C200,110 215,110 225,135 C235,160 250,160 260,135 C270,110 285,110 295,135 C305,160 320,160 330,135 C340,110 355,110 365,135"
          stroke="url(#bloodFlow)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* ── CORAÇÃO ── */}
        <g transform="translate(95, 105)">
          {/* Silhueta do coração (estilizado) */}
          <path
            d="M0,30 C0,10 15,-10 30,-10 C45,-10 50,0 50,15 C50,0 55,-10 70,-10 C85,-10 100,10 100,30 C100,55 80,75 50,95 C20,75 0,55 0,30 Z"
            fill="url(#heartGrad)"
            opacity="0.9"
          />
          {/* Detalhe interno */}
          <path
            d="M30,25 C30,15 40,5 50,10 C55,12 55,18 50,22 C45,26 40,24 35,28 Z"
            fill="var(--surface, #ffffff)"
            opacity="0.3"
          />
          <path
            d="M60,20 C65,12 75,10 78,18 C80,24 75,28 70,26 C65,24 62,26 60,20 Z"
            fill="var(--surface, #ffffff)"
            opacity="0.3"
          />
          {/* Seta de saída do sangue */}
          <line
            x1="95" y1="25" x2="130" y2="25"
            stroke="var(--orange-500, #d66e0f)"
            strokeWidth="2.5"
            markerEnd="url(#arrowOrange)"
            strokeLinecap="round"
          />
          {/* Texto "Sangue" na seta */}
          <text
            x="110" y="18"
            fontSize="8"
            fill="var(--orange-500, #d66e0f)"
            textAnchor="middle"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Sangue
          </text>
        </g>

        {/* ── INDICADOR SISTÓLICA ── */}
        <g transform="translate(270, 50)">
          <rect x="-2" y="0" width="4" height="30" rx="2" fill="var(--orange-500, #d66e0f)" opacity="0.8" />
          <text
            x="20" y="12"
            fontSize="9"
            fontWeight="700"
            fill="var(--orange-500, #d66e0f)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            SISTÓLICA
          </text>
          <text
            x="20" y="24"
            fontSize="8"
            fill="var(--muted, #4a4a4a)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Coração contrai
          </text>
        </g>

        {/* ── INDICADOR DIASTÓLICA ── */}
        <g transform="translate(270, 220)">
          <rect x="-2" y="0" width="4" height="30" rx="2" fill="var(--green-400, #5cb364)" opacity="0.8" />
          <text
            x="20" y="12"
            fontSize="9"
            fontWeight="700"
            fill="var(--green-400, #5cb364)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            DIASTÓLICA
          </text>
          <text
            x="20" y="24"
            fontSize="8"
            fill="var(--muted, #4a4a4a)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Coração relaxa
          </text>
        </g>

        {/* ── LEGENDA superior ── */}
        <text
          x="200" y="30"
          fontSize="11"
          fontWeight="700"
          fill="var(--foreground, #212121)"
          textAnchor="middle"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          Pressão Arterial — conceito visual
        </text>
        <text
          x="200" y="48"
          fontSize="8"
          fill="var(--muted, #4a4a4a)"
          textAnchor="middle"
          fontFamily="var(--font-body, Inter, sans-serif)"
        >
          Força do sangue contra as paredes das artérias
        </text>

        {/* ── RÓTULOS: Pressão máxima / mínima ── */}
        <g transform="translate(40, 260)">
          <circle cx="4" cy="4" r="4" fill="var(--orange-400, #f59e0b)" />
          <text
            x="14" y="8"
            fontSize="9"
            fill="var(--foreground, #212121)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Pressão Máxima (sistólica)
          </text>
        </g>
        <g transform="translate(40, 278)">
          <circle cx="4" cy="4" r="4" fill="var(--green-400, #5cb364)" />
          <text
            x="14" y="8"
            fontSize="9"
            fill="var(--foreground, #212121)"
            fontFamily="var(--font-body, Inter, sans-serif)"
          >
            Pressão Mínima (diastólica)
          </text>
        </g>
      </svg>
      <figcaption className="mt-3 text-xs text-center text-muted leading-relaxed px-4">
        <strong className="text-foreground">Como funciona a pressão arterial?</strong> O coração bombeia sangue sob pressão para as artérias. 
        A <strong className="text-orange-600 dark:text-orange-400">pressão sistólica</strong> (máxima) ocorre quando o coração se contrai. 
        A <strong className="text-green-600 dark:text-green-400">pressão diastólica</strong> (mínima) ocorre quando ele relaxa entre as batidas.
      </figcaption>
    </figure>
  );
}
