
export default function HeroCurveLine() {
  return (
    <svg
      className="pointer-events-none absolute left-0 bottom-0 w-full h-[220px] opacity-90"
      viewBox="0 0 1440 220"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="curveGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8E23E2">
            <animate attributeName="stop-color" values="#8E23E2;#CF2576;#FFD000;#8E23E2" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#CF2576">
            <animate attributeName="stop-color" values="#CF2576;#FFD000;#8E23E2;#CF2576" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FFD000">
            <animate attributeName="stop-color" values="#FFD000;#8E23E2;#CF2576;#FFD000" dur="6s" repeatCount="indefinite" />
          </stop>

          {/* gradient position shift (makes it feel like moving light) */}
          <animate
            attributeName="x1"
            values="0;1440;0"
            dur="7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="1440;0;1440"
            dur="7s"
            repeatCount="indefinite"
          />
        </linearGradient>

        {/* soft glow */}
        <filter id="curveGlow" x="-30%" y="-200%" width="160%" height="500%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 0.8 0"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* glow stroke behind */}
      <path
        d="M-40 40 C 260 200, 520 240, 820 210 C 1120 180, 1290 120, 1480 60"
        stroke="url(#curveGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
        filter="url(#curveGlow)"
      />

      {/* main crisp stroke */}
      <path
        d="M-40 40 C 260 200, 520 240, 820 210 C 1120 180, 1290 120, 1480 60"
        stroke="url(#curveGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  )
}
