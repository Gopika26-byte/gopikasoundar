import { useEffect, useRef, type CSSProperties, type PointerEvent } from "react"
import { ArrowUpRight, FileText } from "lucide-react"
import { prdDocuments, type Tone } from "../data/site"
import { publicPath } from "../lib/publicPath"

type PrdDocument = (typeof prdDocuments)[number]

const accents: Record<Tone, { bar: string; ink: string }> = {
  peach: { bar: "#f07868", ink: "#b84538" },
  lavender: { bar: "#b39bc4", ink: "#5c4e68" },
  sage: { bar: "#7d9a76", ink: "#3d5a46" },
  sunset: { bar: "#efb9b0", ink: "#b84538" },
}

function canTrackPointer() {
  if (typeof window === "undefined") return false
  return (
    window.matchMedia("(min-width: 768px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  )
}

function tiltRange() {
  return window.matchMedia("(min-width: 1024px)").matches ? 6 : 4
}

function liftAmount() {
  return window.matchMedia("(min-width: 1024px)").matches ? -7 : -5
}

export function PrdDocumentCard({ document }: { document: PrdDocument }) {
  const accent = accents[document.tone]
  const rootRef = useRef<HTMLElement>(null)
  const rafRef = useRef(0)
  const returnTimerRef = useRef(0)
  const pendingRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (returnTimerRef.current) window.clearTimeout(returnTimerRef.current)
    }
  }, [])

  const applyTilt = (clientX: number, clientY: number) => {
    const el = rootRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return
    const px = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    const py = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height))
    const max = tiltRange()
    const nx = (px - 0.5) * 2
    const ny = (py - 0.5) * 2
    el.style.setProperty("--prd-rx", `${(-ny * max).toFixed(2)}deg`)
    el.style.setProperty("--prd-ry", `${(nx * max).toFixed(2)}deg`)
    el.style.setProperty("--prd-lift", `${liftAmount()}px`)
    el.style.setProperty("--prd-gx", `${(px * 100).toFixed(1)}%`)
    el.style.setProperty("--prd-gy", `${(py * 100).toFixed(1)}%`)
  }

  const resetTilt = () => {
    const el = rootRef.current
    if (!el) return
    el.style.removeProperty("--prd-rx")
    el.style.removeProperty("--prd-ry")
    el.style.removeProperty("--prd-lift")
    el.style.removeProperty("--prd-gx")
    el.style.removeProperty("--prd-gy")
  }

  const onPointerEnter = (event: PointerEvent<HTMLElement>) => {
    if (!canTrackPointer() || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return
    const el = rootRef.current
    if (!el) return
    if (returnTimerRef.current) window.clearTimeout(returnTimerRef.current)
    el.classList.remove("is-returning")
    el.classList.add("is-tilting")
    applyTilt(event.clientX, event.clientY)
  }

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!canTrackPointer() || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return
    pendingRef.current = { x: event.clientX, y: event.clientY }
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0
      const next = pendingRef.current
      if (next) applyTilt(next.x, next.y)
    })
  }

  const onPointerLeave = () => {
    const el = rootRef.current
    if (!el || !el.classList.contains("is-tilting")) {
      resetTilt()
      return
    }
    el.classList.remove("is-tilting")
    el.classList.add("is-returning")
    resetTilt()
    if (returnTimerRef.current) window.clearTimeout(returnTimerRef.current)
    returnTimerRef.current = window.setTimeout(() => {
      el.classList.remove("is-returning")
    }, 620)
  }

  return (
    <article
      ref={rootRef}
      className="prd-doc h-full"
      style={
        {
          "--prd-accent": accent.bar,
          "--prd-accent-ink": accent.ink,
        } as CSSProperties
      }
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerLeave}
    >
      <div className="prd-doc-scene">
        <div className="prd-doc-tilt">
          <div className="prd-doc-sheet prd-doc-sheet--rear" aria-hidden="true" />
          <div className="prd-doc-sheet prd-doc-sheet--mid" aria-hidden="true" />
          <a
            href={publicPath(document.href)}
            target="_blank"
            rel="noreferrer"
            className="prd-doc-paper"
          >
            <span className="prd-doc-stripe" aria-hidden="true" />
            <span className="prd-doc-glare" aria-hidden="true" />

            <header className="prd-doc-header">
              <div>
                <p className="prd-doc-category">{document.category}</p>
                <p className="prd-doc-type">Independent exercise · PDF</p>
              </div>
              <span className="prd-doc-mark" aria-hidden="true">
                <FileText size={16} strokeWidth={1.6} />
              </span>
            </header>

            <h3 className="prd-doc-title">{document.title}</h3>
            <p className="prd-doc-excerpt">{document.summary}</p>

            <ul className="prd-doc-tags">
              {document.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <footer className="prd-doc-footer">
              <span className="prd-doc-pdf">PDF</span>
              <span className="prd-doc-action">
                View PRD
                <span className="sr-only">, opens {document.filename} in a new tab</span>
                <ArrowUpRight className="prd-doc-arrow" size={16} aria-hidden="true" />
              </span>
            </footer>
          </a>
        </div>
      </div>
    </article>
  )
}
