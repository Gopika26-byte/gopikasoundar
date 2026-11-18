import { X } from "lucide-react"
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from "react"
import { createPortal } from "react-dom"
import { ContactPanelContent } from "./ContactPanelContent"

const SHEET_QUERY = "(max-width: 639.98px)"
const EXIT_MS = 220
const SWIPE_CLOSE_PX = 90
const SWIPE_CLOSE_VELOCITY = 0.6

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (notify) => {
      const media = window.matchMedia(query)
      media.addEventListener("change", notify)
      return () => media.removeEventListener("change", notify)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

function usePresence(open: boolean) {
  const [mounted, setMounted] = useState(open)
  if (open && !mounted) setMounted(true)

  useEffect(() => {
    if (open) return
    const timer = window.setTimeout(() => setMounted(false), EXIT_MS)
    return () => window.clearTimeout(timer)
  }, [open])

  return open || mounted
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

type ContactMenuProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactMenu({ open, onOpenChange }: ContactMenuProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const isSheet = useMediaQuery(SHEET_QUERY)
  const present = usePresence(open)
  const panelId = useId()
  const titleId = useId()
  const state = open ? "open" : "closed"

  const close = useCallback(
    (restoreFocus: boolean) => {
      onOpenChange(false)
      if (restoreFocus) triggerRef.current?.focus({ preventScroll: true })
    },
    [onOpenChange],
  )

  useEffect(() => {
    if (!open) return
    panelRef.current?.focus({ preventScroll: true })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      event.preventDefault()
      close(true)
    }
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (panelRef.current?.contains(target) || triggerRef.current?.contains(target)) return
      close(isSheet)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [open, isSheet, close])

  useEffect(() => {
    if (!open || !isSheet) return
    const { body, documentElement: root } = document
    const previous = [body.style.overflow, root.style.overflow]
    body.style.overflow = "hidden"
    root.style.overflow = "hidden"
    return () => {
      body.style.overflow = previous[0]
      root.style.overflow = previous[1]
    }
  }, [open, isSheet])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="btn btn-primary !min-h-10 !px-3.5 !py-2 text-sm"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={present ? panelId : undefined}
        onClick={() => onOpenChange(!open)}
      >
        Contact Me
      </button>

      {present &&
        (isSheet ? (
          createPortal(
            <ContactSheet
              panelRef={panelRef}
              panelId={panelId}
              titleId={titleId}
              state={state}
              onClose={() => close(true)}
            />,
            document.body,
          )
        ) : (
          <div
            ref={panelRef}
            id={panelId}
            className="contact-popover"
            data-state={state}
            role="dialog"
            aria-label="Contact Gopika"
            tabIndex={-1}
          >
            <ContactPanelContent />
          </div>
        ))}
    </>
  )
}

type ContactSheetProps = {
  panelRef: RefObject<HTMLDivElement | null>
  panelId: string
  titleId: string
  state: "open" | "closed"
  onClose: () => void
}

function ContactSheet({ panelRef, panelId, titleId, state, onClose }: ContactSheetProps) {
  const drag = useRef<{ startY: number; startTime: number; offset: number } | null>(null)

  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !panelRef.current) return
    const items = [...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)]
    if (items.length === 0) return
    const first = items[0]
    const last = items[items.length - 1]
    const active = document.activeElement
    if (event.shiftKey && (active === first || active === panelRef.current)) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && active === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const onDragStart = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as Element).closest("button")) return
    event.currentTarget.setPointerCapture(event.pointerId)
    drag.current = { startY: event.clientY, startTime: performance.now(), offset: 0 }
    panelRef.current?.classList.add("is-dragging")
  }

  const onDragMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current || !panelRef.current) return
    drag.current.offset = Math.max(0, event.clientY - drag.current.startY)
    panelRef.current.style.transform = `translateY(${drag.current.offset}px)`
  }

  const onDragEnd = () => {
    const sheet = panelRef.current
    if (!drag.current || !sheet) return
    const { offset, startTime } = drag.current
    drag.current = null
    sheet.classList.remove("is-dragging")
    const velocity = offset / Math.max(1, performance.now() - startTime)
    if (offset > SWIPE_CLOSE_PX || (offset > 24 && velocity > SWIPE_CLOSE_VELOCITY)) {
      onClose()
    } else {
      sheet.style.transform = ""
    }
  }

  return (
    <div className="contact-sheet-layer" data-state={state}>
      <div className="contact-sheet-overlay" aria-hidden="true" />
      <div
        ref={panelRef}
        id={panelId}
        className="contact-sheet"
        data-state={state}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onKeyDown={trapFocus}
      >
        <div
          className="contact-sheet-grab"
          onPointerDown={onDragStart}
          onPointerMove={onDragMove}
          onPointerUp={onDragEnd}
          onPointerCancel={onDragEnd}
        >
          <span className="contact-sheet-handle" aria-hidden="true" />
          <div className="contact-sheet-header">
            <div>
              <h2 id={titleId} className="contact-sheet-title">
                Get in touch
              </h2>
              <p className="contact-sheet-subtitle">Let's connect and build something meaningful.</p>
            </div>
            <button type="button" className="contact-sheet-close" aria-label="Close" onClick={onClose}>
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
        <ContactPanelContent />
      </div>
    </div>
  )
}
