import { ChevronDown } from "lucide-react"
import { useCallback, useRef, useState, type ReactNode, type Ref } from "react"

const ANCHOR_MS = 460

function keepInPlace(element: HTMLElement) {
  const startTop = element.getBoundingClientRect().top
  const until = performance.now() + ANCHOR_MS

  const step = () => {
    const drift = element.getBoundingClientRect().top - startTop
    if (Math.abs(drift) > 0.5) window.scrollTo({ top: window.scrollY + drift, behavior: "instant" })
    if (performance.now() < until) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function useAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = useCallback((id: string, trigger: HTMLElement) => {
    keepInPlace(trigger)
    setOpenId((current) => (current === id ? null : id))
  }, [])

  return { openId, toggle }
}

type JourneyEntryProps = {
  id: string
  open: boolean
  onToggle: (id: string, trigger: HTMLElement) => void
  label: string
  summary: ReactNode
  children: ReactNode
  variant?: "featured" | "compact"
}

export function JourneyEntry({ id, open, onToggle, label, summary, children, variant }: JourneyEntryProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelId = `${id}-details`
  const triggerId = `${id}-trigger`

  return (
    <li className={`journey-entry${variant ? ` journey-entry--${variant}` : ""}${open ? " is-open" : ""}`}>
      <h4 className="journey-entry-heading">
        <AccordionTrigger
          ref={triggerRef}
          id={triggerId}
          controls={panelId}
          open={open}
          label={label}
          onClick={() => triggerRef.current && onToggle(id, triggerRef.current)}
        >
          {summary}
        </AccordionTrigger>
      </h4>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="journey-panel"
        inert={!open}
      >
        <div className="journey-panel-clip">
          <div className="journey-details">{children}</div>
        </div>
      </div>
    </li>
  )
}

type AccordionTriggerProps = {
  ref: Ref<HTMLButtonElement>
  id: string
  controls: string
  open: boolean
  label: string
  onClick: () => void
  children: ReactNode
}

export function AccordionTrigger({ ref, id, controls, open, label, onClick, children }: AccordionTriggerProps) {
  return (
    <button
      ref={ref}
      id={id}
      type="button"
      className="journey-row"
      aria-expanded={open}
      aria-controls={controls}
      onClick={onClick}
    >
      {children}
      <span className="journey-chevron" aria-hidden="true">
        <ChevronDown size={18} strokeWidth={1.75} />
      </span>
      <span className="sr-only">{open ? `Hide details about ${label}` : `Show details about ${label}`}</span>
    </button>
  )
}

export function JourneyLogo({ src, alt, tall }: { src: string; alt: string; tall?: boolean }) {
  return (
    <span className={`journey-logo${tall ? " journey-logo--tall" : ""}`}>
      <img src={src} alt={alt} loading="lazy" />
    </span>
  )
}

export function JourneyMeta({ period, status }: { period: string; status?: string }) {
  return (
    <span className="journey-meta">
      <span className="journey-period">{period}</span>
      {status ? (
        <span className="journey-status">
          <span className="journey-status-dot" aria-hidden="true" />
          {status}
        </span>
      ) : null}
    </span>
  )
}
