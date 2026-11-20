import type { Tone } from "../data/site"

const tones: Record<Tone, { wash: string; ink: string; accent: string; paper: string }> = {
  peach: { wash: "#F6DDD2", ink: "#8C4A3A", accent: "#F07868", paper: "#FFF9F5" },
  sage: { wash: "#E4EFE0", ink: "#3D5A46", accent: "#8AA884", paper: "#F7FBF6" },
  lavender: { wash: "#E6DFEC", ink: "#5C4E68", accent: "#C4B3D4", paper: "#FBF8FD" },
  sunset: { wash: "#F8E3DC", ink: "#8C4A3A", accent: "#EFB9B0", paper: "#FFF8F5" },
}

export function TeardownArt({ slug, tone }: { slug: string; tone: Tone }) {
  const color = tones[tone]
  return (
    <svg viewBox="0 0 360 240" role="img" className="h-full w-full" aria-labelledby={`${slug}-teardown-art`}>
      <title id={`${slug}-teardown-art`}>Illustrative sketch for an independent product analysis</title>
      <rect width="360" height="240" fill={color.wash} />
      <rect x="28" y="28" width="304" height="184" rx="16" fill={color.paper} />
      {slug === "swiggy-instamart" && <VisibilitySketch color={color} />}
      {slug === "zepto-support" && <SupportSketch color={color} />}
      {slug === "phonepe-account-recovery" && <RecoverySketch color={color} />}
      <text x="44" y="196" fill={color.ink} fontSize="10" fontFamily="Inter, sans-serif" opacity="0.7">
        Independent sketch
      </text>
    </svg>
  )
}

function VisibilitySketch({ color }: { color: { ink: string; accent: string } }) {
  return (
    <>
      <rect x="118" y="40" width="124" height="148" rx="16" fill="#fff" />
      <rect x="156" y="50" width="48" height="5" rx="2.5" fill={color.ink} opacity="0.18" />
      <text x="140" y="84" fill={color.ink} fontSize="15" fontFamily="Inter, sans-serif">
        10 min
      </text>
      <rect x="136" y="96" width="88" height="6" rx="3" fill={color.ink} opacity="0.14" />
      <rect x="136" y="96" width="54" height="6" rx="3" fill={color.accent} />
      <circle cx="148" cy="124" r="5" fill={color.accent} />
      <rect x="160" y="121" width="62" height="6" rx="3" fill={color.ink} opacity="0.25" />
      <rect x="136" y="142" width="88" height="22" rx="8" fill={color.accent} opacity="0.28" />
    </>
  )
}

function SupportSketch({ color }: { color: { ink: string; accent: string } }) {
  return (
    <>
      <rect x="44" y="48" width="150" height="64" rx="12" fill="#fff" />
      <rect x="56" y="62" width="72" height="7" rx="3" fill={color.accent} />
      <rect x="56" y="78" width="110" height="6" rx="3" fill={color.ink} opacity="0.25" />
      <rect x="56" y="92" width="48" height="8" rx="4" fill={color.accent} opacity="0.45" />
      <rect x="210" y="56" width="96" height="72" rx="14" fill="#fff" />
      <circle cx="232" cy="80" r="8" fill={color.accent} opacity="0.8" />
      <rect x="246" y="74" width="46" height="6" rx="3" fill={color.ink} opacity="0.3" />
      <rect x="222" y="98" width="70" height="14" rx="7" fill={color.accent} opacity="0.35" />
    </>
  )
}

function RecoverySketch({ color }: { color: { ink: string; accent: string } }) {
  return (
    <>
      <rect x="148" y="44" width="64" height="112" rx="12" fill="#fff" />
      <rect x="160" y="58" width="40" height="6" rx="3" fill={color.accent} />
      {[0, 1, 2].map((step) => (
        <g key={step} transform={`translate(160 ${74 + step * 18})`}>
          <circle cx="5" cy="5" r="4" fill={step === 1 ? color.accent : "#fff"} stroke={color.accent} />
          <rect x="14" y="2" width={step === 2 ? 22 : 30} height="6" rx="3" fill={color.ink} opacity="0.25" />
        </g>
      ))}
      <rect x="44" y="78" width="86" height="36" rx="10" fill="#fff" />
      <rect x="230" y="78" width="86" height="36" rx="10" fill="#fff" />
      <text x="58" y="100" fill={color.ink} fontSize="9" fontFamily="Inter, sans-serif">
        Verify
      </text>
      <text x="248" y="100" fill={color.ink} fontSize="9" fontFamily="Inter, sans-serif">
        Next
      </text>
    </>
  )
}
