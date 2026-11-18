import { useEffect, useState } from "react"

export const heroRotatingPhrases = [
  "for people.",
  "for products.",
  "for businesses.",
  "for better experiences.",
  "for meaningful impact.",
] as const

const HOLD_MS = 2800
const OUT_MS = 400
const GAP_MS = 120

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function RotatingHeroText() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"in" | "out">("in")
  const [reduceMotion, setReduceMotion] = useState(prefersReducedMotion)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduceMotion(media.matches)
    onChange()
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const timers: number[] = []
    let cancelled = false
    let current = 0

    const schedule = () => {
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return
          setPhase("out")
          timers.push(
            window.setTimeout(() => {
              if (cancelled) return
              current = (current + 1) % heroRotatingPhrases.length
              setIndex(current)
              setPhase("in")
              schedule()
            }, OUT_MS + GAP_MS),
          )
        }, HOLD_MS),
      )
    }

    schedule()
    return () => {
      cancelled = true
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [reduceMotion])

  const visibleIndex = reduceMotion ? 0 : index

  return (
    <span className="hero-rotator" aria-live="polite" aria-atomic="true">
      <span className="hero-rotator-sizer" aria-hidden="true">
        {heroRotatingPhrases.map((phrase) => (
          <span key={phrase}>{phrase}</span>
        ))}
      </span>
      {heroRotatingPhrases.map((phrase, phraseIndex) => {
        const isCurrent = phraseIndex === visibleIndex
        const stateClass = isCurrent ? (reduceMotion || phase === "in" ? " is-in" : " is-out") : ""
        return (
          <span
            key={phrase}
            className={`hero-rotator-phrase${stateClass}`}
            aria-hidden={isCurrent ? undefined : true}
          >
            {phrase}
          </span>
        )
      })}
    </span>
  )
}
