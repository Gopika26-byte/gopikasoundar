import type { Tone } from "../data/site"

const tones: Record<Tone, { wash: string; ink: string; accent: string; paper: string }> = {
  peach: { wash: "#F6DDD2", ink: "#8C4A3A", accent: "#F07868", paper: "#FFF9F5" },
  sage: { wash: "#E4EFE0", ink: "#3D5A46", accent: "#8AA884", paper: "#F7FBF6" },
  lavender: { wash: "#E6DFEC", ink: "#5C4E68", accent: "#C4B3D4", paper: "#FBF8FD" },
  sunset: { wash: "#F8E3DC", ink: "#8C4A3A", accent: "#EFB9B0", paper: "#FFF8F5" },
}

export function MediumCover({ id, tone, coverSrc }: { id: string; tone: Tone; coverSrc: string }) {
  if (coverSrc) {
    return <img src={coverSrc} alt="" className="h-full w-full object-cover" />
  }

  const color = tones[tone]
  return (
    <svg viewBox="0 0 360 240" className="h-full w-full" role="img" aria-labelledby={`${id}-cover`}>
      <title id={`${id}-cover`}>Editorial cover placeholder, not an article screenshot</title>
      <rect width="360" height="240" fill={color.wash} />
      <circle cx="250" cy="86" r="46" fill={color.accent} opacity="0.55" />
      <rect x="40" y="58" width="150" height="10" rx="5" fill={color.ink} opacity="0.18" />
      <rect x="40" y="80" width="110" height="8" rx="4" fill={color.paper} />
      <rect x="40" y="148" width="180" height="6" rx="3" fill={color.ink} opacity="0.15" />
      <rect x="40" y="162" width="140" height="6" rx="3" fill={color.ink} opacity="0.1" />
      <text x="40" y="204" fill={color.ink} fontSize="10" fontFamily="Inter, sans-serif" opacity="0.65">
        Cover to add
      </text>
    </svg>
  )
}
