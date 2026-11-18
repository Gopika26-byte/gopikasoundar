import type { Tone } from "../data/site"

export const studyTones: Record<Tone, { wash: string; ink: string; accent: string; paper: string }> = {
  peach: { wash: "#F6DDD2", ink: "#8C4A3A", accent: "#F07868", paper: "#FFF9F5" },
  sage: { wash: "#E4EFE0", ink: "#3D5A46", accent: "#8AA884", paper: "#F7FBF6" },
  lavender: { wash: "#E6DFEC", ink: "#5C4E68", accent: "#C4B3D4", paper: "#FBF8FD" },
  sunset: { wash: "#F8E3DC", ink: "#8C4A3A", accent: "#EFB9B0", paper: "#FFF8F5" },
}

const tones = studyTones

export function StudyArt({ tone, slug }: { tone: Tone; slug: string }) {
  const color = tones[tone]
  return (
    <svg viewBox="0 0 360 240" role="img" className="h-full w-full" aria-labelledby={`${slug}-art`}>
      <title id={`${slug}-art`}>Illustrative interface sketch, not a shipped product</title>
      <rect width="360" height="240" fill={color.wash} />
      <rect x="28" y="28" width="304" height="184" rx="16" fill={color.paper} />
      <rect x="44" y="46" width="92" height="8" rx="4" fill={color.accent} />
      <rect x="44" y="64" width="140" height="6" rx="3" fill={color.ink} opacity="0.25" />
      {slug === "financial-planning" && <Planning color={color} />}
      {slug === "creator-ecosystem" && <Marketplace color={color} />}
      {slug === "team-collaboration" && <Board color={color} />}
      <text x="44" y="196" fill={color.ink} fontSize="10" fontFamily="Inter, sans-serif" opacity="0.7">
        Illustrative sketch
      </text>
    </svg>
  )
}

function Planning({ color }: { color: { ink: string; accent: string } }) {
  return (
    <>
      <rect x="44" y="88" width="180" height="72" rx="12" fill="#fff" stroke={color.accent} />
      <text x="58" y="114" fill={color.ink} fontSize="12" fontFamily="Georgia, serif">
        What matters this month?
      </text>
      <rect x="58" y="126" width="110" height="16" rx="8" fill={color.accent} opacity="0.85" />
      <circle cx="268" cy="124" r="28" fill={color.accent} opacity="0.35" />
      <circle cx="268" cy="124" r="14" fill={color.accent} />
    </>
  )
}

function Marketplace({ color }: { color: { ink: string; accent: string } }) {
  return (
    <>
      {[0, 1].map((index) => (
        <g key={index} transform={`translate(${44 + index * 132} 90)`}>
          <rect width="116" height="78" rx="12" fill="#fff" />
          <circle cx="28" cy="28" r="12" fill={color.accent} />
          <rect x="48" y="20" width="52" height="6" rx="3" fill={color.ink} opacity="0.45" />
          <rect x="48" y="32" width="36" height="5" rx="2.5" fill={color.ink} opacity="0.25" />
          <rect x="14" y="52" width="70" height="12" rx="6" fill={color.accent} opacity="0.4" />
        </g>
      ))}
    </>
  )
}

function Board({ color }: { color: { ink: string; accent: string } }) {
  return (
    <>
      {["Now", "Blocked", "Next"].map((label, index) => (
        <g key={label} transform={`translate(${48 + index * 96} 88)`}>
          <text x="0" y="0" fill={color.ink} fontSize="10" fontFamily="Inter, sans-serif">
            {label}
          </text>
          <rect y="10" width="84" height="28" rx="8" fill="#fff" />
          <rect y="44" width="84" height="28" rx="8" fill={index === 1 ? color.accent : "#fff"} opacity={index === 1 ? 0.7 : 1} />
        </g>
      ))}
    </>
  )
}

type ArtColor = { wash: string; ink: string; accent: string; paper: string }

export function StudyShowcase({ tone, slug }: { tone: Tone; slug: string }) {
  const color = tones[tone]
  return (
    <svg
      viewBox="0 0 800 560"
      role="img"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-labelledby={`${slug}-showcase`}
    >
      <title id={`${slug}-showcase`}>Illustrative interface sketch, not a shipped product</title>
      <rect width="800" height="560" fill={color.wash} />
      {slug === "financial-planning" && <PlanningShowcase color={color} />}
      {slug === "creator-ecosystem" && <MarketplaceShowcase color={color} />}
      {slug === "team-collaboration" && <BoardShowcase color={color} />}
      <text x="48" y="536" fill={color.ink} fontSize="12" fontFamily="Inter, sans-serif" opacity="0.48">
        Illustrative sketch
      </text>
    </svg>
  )
}

function PlanningShowcase({ color }: { color: ArtColor }) {
  return (
    <>
      <circle cx="670" cy="150" r="128" fill={color.accent} opacity="0.2" />
      <circle cx="724" cy="430" r="86" fill={color.accent} opacity="0.12" />
      <rect x="64" y="64" width="488" height="412" rx="28" fill={color.paper} />
      <rect x="64" y="64" width="488" height="52" rx="28" fill="#fff" />
      <rect x="64" y="90" width="488" height="26" fill="#fff" />
      <circle cx="100" cy="90" r="6" fill={color.accent} opacity="0.7" />
      <circle cx="122" cy="90" r="6" fill={color.ink} opacity="0.16" />
      <circle cx="144" cy="90" r="6" fill={color.ink} opacity="0.1" />
      <rect x="96" y="140" width="88" height="7" rx="3.5" fill={color.accent} />
      <rect x="96" y="162" width="168" height="6" rx="3" fill={color.ink} opacity="0.16" />
      <text x="96" y="232" fill={color.ink} fontSize="30" fontFamily="Georgia, 'Iowan Old Style', serif">
        What matters this month?
      </text>
      <rect x="96" y="258" width="300" height="8" rx="4" fill={color.ink} opacity="0.1" />
      <rect x="96" y="278" width="220" height="8" rx="4" fill={color.ink} opacity="0.07" />
      <rect x="96" y="328" width="236" height="52" rx="16" fill={color.accent} />
      <rect x="118" y="348" width="148" height="12" rx="6" fill="#fff" opacity="0.92" />
      <circle cx="636" cy="292" r="78" fill={color.paper} />
      <circle cx="636" cy="292" r="50" fill={color.accent} opacity="0.38" />
      <circle cx="636" cy="292" r="24" fill={color.accent} />
    </>
  )
}

function MarketplaceShowcase({ color }: { color: ArtColor }) {
  return (
    <>
      <circle cx="120" cy="460" r="90" fill={color.accent} opacity="0.12" />
      <rect x="72" y="64" width="656" height="58" rx="18" fill={color.paper} />
      <circle cx="108" cy="93" r="11" fill="none" stroke={color.ink} strokeWidth="2.2" opacity="0.28" />
      <path d="M116 101l8 8" stroke={color.ink} strokeWidth="2.2" opacity="0.28" strokeLinecap="round" />
      <rect x="136" y="88" width="168" height="10" rx="5" fill={color.ink} opacity="0.12" />
      <rect x="620" y="80" width="80" height="26" rx="13" fill={color.accent} opacity="0.28" />
      {[0, 1].map((index) => (
        <g key={index} transform={`translate(${72 + index * 328} 150)`}>
          <rect width="300" height="318" rx="26" fill={color.paper} />
          <circle cx="60" cy="62" r="30" fill={color.accent} opacity={index === 0 ? 0.9 : 0.55} />
          <rect x="106" y="46" width="132" height="12" rx="6" fill={color.ink} opacity="0.32" />
          <rect x="106" y="68" width="88" height="8" rx="4" fill={color.ink} opacity="0.14" />
          <rect x="28" y="118" width="244" height="112" rx="18" fill={color.wash} />
          <rect x="48" y="148" width="120" height="10" rx="5" fill={color.ink} opacity="0.12" />
          <rect x="48" y="168" width="84" height="8" rx="4" fill={color.ink} opacity="0.08" />
          <rect x="28" y="254" width="108" height="32" rx="16" fill={color.accent} opacity="0.32" />
        </g>
      ))}
    </>
  )
}

function BoardShowcase({ color }: { color: ArtColor }) {
  const columns = ["Now", "Blocked", "Next"]
  return (
    <>
      <rect x="48" y="56" width="704" height="444" rx="28" fill={color.paper} />
      {columns.map((label, index) => (
        <g key={label} transform={`translate(${80 + index * 224} 92)`}>
          <text x="8" y="0" fill={color.ink} fontSize="15" fontFamily="Inter, sans-serif" fontWeight="600">
            {label}
          </text>
          <rect x="8" y="14" width="36" height="4" rx="2" fill={index === 1 ? color.accent : color.ink} opacity={index === 1 ? 0.8 : 0.18} />
          <rect y="40" width="200" height="84" rx="16" fill="#fff" />
          <rect x="16" y="58" width="118" height="8" rx="4" fill={color.ink} opacity="0.16" />
          <rect x="16" y="76" width="78" height="7" rx="3.5" fill={color.ink} opacity="0.08" />
          <rect y="140" width="200" height="84" rx="16" fill={index === 1 ? color.accent : "#fff"} opacity={index === 1 ? 0.55 : 1} />
          <rect x="16" y="158" width="108" height="8" rx="4" fill={color.ink} opacity={index === 1 ? 0.28 : 0.16} />
          <rect x="16" y="176" width="70" height="7" rx="3.5" fill={color.ink} opacity="0.1" />
          <rect y="240" width="200" height="84" rx="16" fill="#fff" />
          <rect x="16" y="258" width="96" height="8" rx="4" fill={color.ink} opacity="0.12" />
          <rect x="16" y="276" width="64" height="7" rx="3.5" fill={color.ink} opacity="0.08" />
        </g>
      ))}
    </>
  )
}

export function NoteThumb({ index }: { index: number }) {
  const palettes = [
    ["#F6DDD2", "#F07868", "#C8D8C1"],
    ["#E6DFEC", "#EFB9B0", "#F6DDD2"],
    ["#E4EFE0", "#F07868", "#EFB9B0"],
  ]
  const [wash, a, b] = palettes[index % palettes.length]
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" fill={wash} />
      <circle cx="470" cy="150" r="78" fill={a} opacity="0.85" />
      <circle cx="180" cy="230" r="54" fill={b} />
      <rect x="72" y="78" width="180" height="12" rx="6" fill="#25231F" opacity="0.2" />
      <rect x="72" y="104" width="120" height="8" rx="4" fill="#25231F" opacity="0.12" />
      <path d="M80 250c40-40 80-20 120-50" fill="none" stroke="#25231F" strokeWidth="2" opacity="0.25" />
    </svg>
  )
}
