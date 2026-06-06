import { useId } from "react"
import { themeOf } from "../lib/themes"

/**
 * Capa de PDF desenhada em SVG (sem imagem externa).
 * Recebe `cover` (tipo de motivo) e `color` (tema).
 */
export default function CoverArt({ cover = "abc", color = "coral", className = "" }) {
  const t = themeOf(color)
  const uid = useId().replace(/:/g, "")
  const gradId = `g-${uid}`
  const softId = `s-${uid}`

  return (
    <svg
      viewBox="0 0 320 400"
      className={className}
      role="img"
      aria-label="Capa do material pedagógico"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={t.from} />
          <stop offset="1" stopColor={t.to} />
        </linearGradient>
        <linearGradient id={softId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#fdf3ec" />
        </linearGradient>
      </defs>

      {/* Fundo */}
      <rect width="320" height="400" fill={`url(#${gradId})`} />

      {/* Confete decorativo atrás da folha */}
      <g opacity="0.9">
        <circle cx="40" cy="60" r="10" fill={t.accent} />
        <circle cx="286" cy="92" r="7" fill="#ffffff" opacity="0.7" />
        <path d="M280 300l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill={t.accent} />
        <circle cx="36" cy="332" r="8" fill="#ffffff" opacity="0.6" />
        <path d="M300 340l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Sombra da folha */}
      <rect x="52" y="56" width="216" height="300" rx="18" fill="#000000" opacity="0.12" />

      {/* Folha branca */}
      <rect x="48" y="48" width="216" height="300" rx="18" fill={`url(#${softId})`} />

      {/* Cabeçalho da folha (faux) */}
      <rect x="70" y="74" width="92" height="12" rx="6" fill={t.from} opacity="0.85" />
      <rect x="70" y="94" width="60" height="8" rx="4" fill="#e7e1da" />

      {/* Motivo central */}
      <g transform="translate(156 210)" textAnchor="middle">
        <Motif cover={cover} t={t} />
      </g>

      {/* Linhas de conteúdo (rodapé da folha) */}
      <g>
        <rect x="70" y="300" width="174" height="9" rx="4.5" fill="#ece6df" />
        <rect x="70" y="316" width="140" height="9" rx="4.5" fill="#ece6df" />
        <rect x="70" y="332" width="96" height="9" rx="4.5" fill="#f0c9bf" opacity="0.8" />
      </g>

      {/* Canto dobrado */}
      <path d="M238 48h26v26z" fill="#000000" opacity="0.08" />
    </svg>
  )
}

function Motif({ cover, t }) {
  switch (cover) {
    case "math":
      return (
        <g>
          <text y="6" fontFamily="Fredoka, sans-serif" fontWeight="600" fontSize="86" fill={t.deep} textAnchor="middle">
            123
          </text>
          <text y="64" fontFamily="Fredoka, sans-serif" fontWeight="600" fontSize="40" fill={t.to} textAnchor="middle">
            + − ×
          </text>
        </g>
      )
    case "party":
      return (
        <g>
          {/* Balões */}
          <ellipse cx="-34" cy="-18" rx="26" ry="32" fill={t.from} />
          <ellipse cx="32" cy="-6" rx="22" ry="28" fill={t.accent} />
          <path d="M-34 14v34M32 22v26" stroke={t.deep} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M-8 56l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill={t.to} />
          <circle cx="-58" cy="46" r="6" fill={t.accent} />
          <circle cx="56" cy="60" r="5" fill={t.from} />
        </g>
      )
    case "shapes":
      return (
        <g>
          <circle cx="-34" cy="-20" r="26" fill={t.from} />
          <rect x="6" y="-44" width="46" height="46" rx="8" fill={t.accent} transform="rotate(12 29 -21)" />
          <path d="M-2 56l-30-52h60z" fill={t.to} opacity="0.92" />
          <path d="M-66 30h132" stroke={t.deep} strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" opacity="0.5" />
        </g>
      )
    case "puzzle":
      return (
        <g fontFamily="Fredoka, sans-serif" textAnchor="middle">
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => {
              const x = -56 + c * 56
              const y = -56 + r * 56
              const letters = ["S", "O", "L", "M", "A", "R", "C", "É", "U"]
              const hot = (r === 0 && c === 0) || (r === 1 && c === 1) || (r === 2 && c === 2)
              return (
                <g key={`${r}-${c}`}>
                  <rect x={x - 22} y={y - 22} width="44" height="44" rx="9" fill={hot ? t.from : "#f3ede6"} />
                  <text x={x} y={y + 9} fontSize="26" fontWeight="600" fill={hot ? "#ffffff" : t.deep}>
                    {letters[r * 3 + c]}
                  </text>
                </g>
              )
            })
          )}
        </g>
      )
    case "globe":
      return (
        <g>
          <circle cx="0" cy="-4" r="50" fill={t.from} />
          <ellipse cx="0" cy="-4" rx="20" ry="50" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.7" />
          <path d="M-50 -4h100M-44 -28h88M-44 20h88" stroke="#ffffff" strokeWidth="3" opacity="0.7" fill="none" />
          <path d="M-26 -22c10 4 6 16 16 16M14 6c8-2 10 10 18 8" stroke={t.deep} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.55" />
          <g transform="translate(30 -54)">
            <rect x="-26" y="-20" width="60" height="34" rx="12" fill={t.accent} />
            <path d="M-6 14l-4 12 14-10z" fill={t.accent} />
            <text x="4" y="3" fontFamily="Fredoka, sans-serif" fontSize="20" fontWeight="600" fill={t.deep} textAnchor="middle">
              Hi!
            </text>
          </g>
        </g>
      )
    case "abc":
    default:
      return (
        <g>
          <text y="8" fontFamily="Fredoka, sans-serif" fontWeight="600" fontSize="92" fill={t.deep} textAnchor="middle">
            ABC
          </text>
          <g transform="translate(46 30) rotate(40)">
            <rect x="-6" y="-30" width="12" height="50" rx="4" fill={t.accent} />
            <path d="M-6 20h12l-6 12z" fill={t.deep} />
            <rect x="-6" y="-34" width="12" height="8" rx="3" fill={t.to} />
          </g>
        </g>
      )
  }
}
