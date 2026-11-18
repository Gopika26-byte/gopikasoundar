import { X } from "lucide-react"
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from "react"
import { createPortal } from "react-dom"
import { ContactPanelContent } from "./ContactPanelContent"
import { useContactMenu } from "./ContactMenuProvider"

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
const POPOVER_GAP = 18
const POPOVER_MARGIN = 16

function placePopover(panel: HTMLElement, anchor: HTMLElement) {
  const rect = anchor.getBoundingClientRect()
  const width = panel.offsetWidth
  const height = panel.offsetHeight
  const alignEnd = rect.left + rect.width / 2 > window.innerWidth / 2
  let left = alignEnd ? rect.right - width : rect.left
  left = Math.max(POPOVER_MARGIN, Math.min(left, window.innerWidth - width - POPOVER_MARGIN))

  let top = rect.bottom + POPOVER_GAP
  let place: "below" | "above" = "below"
  if (top + height > window.innerHeight - POPOVER_MARGIN && rect.top - POPOVER_GAP - height >= POPOVER_MARGIN) {
    top = rect.top - POPOVER_GAP - height
    place = "above"
  }

  panel.style.left = `${left}px`
  panel.style.top = `${top}px`
  panel.dataset.align = alignEnd ? "end" : "start"
  panel.dataset.place = place
}

export function ContactMenu() {
  const { open, anchor, panelId, toggle, close: closeMenu, setAnchorNode, anchorNode, isTriggerTarget } =
    useContactMenu()
  const panelRef = useRef<HTMLDivElement>(null)
  const isSheet = useMediaQuery(SHEET_QUERY)
  const present = usePresence(open)
  const titleId = useId()
  const state = open ? "open" : "closed"
  const navExpanded = open && anchor === "nav"
  const registerNav = useCallback(
    (node: HTMLButtonElement | null) => setAnchorNode("nav", node),
    [setAnchorNode],
  )

  const close = useCallback(
    (restoreFocus: boolean) => {
      closeMenu()
      if (restoreFocus) anchorNode(anchor)?.focus({ preventScroll: true })
    },
    [anchor, anchorNode, closeMenu],
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
      if (panelRef.current?.contains(target) || isTriggerTarget(target)) return
      close(isSheet)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [open, anchor, isSheet, close, isTriggerTarget])

  useLayoutEffect(() => {
    if (!open || isSheet) return
    const panel = panelRef.current
    const trigger = anchorNode(anchor)
    if (!panel || !trigger) return

    const place = () => placePopover(panel, trigger)
    place()
    window.addEventListener("scroll", place, true)
    window.addEventListener("resize", place)
    return () => {
      window.removeEventListener("scroll", place, true)
      window.removeEventListener("resize", place)
    }
  }, [open, anchor, isSheet, anchorNode])

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
        ref={registerNav}
        type="button"
        className="btn btn-primary !min-h-10 !px-3.5 !py-2 text-sm"
        aria-haspopup="dialog"
        aria-expanded={navExpanded}
        aria-controls={navExpanded ? panelId : undefined}
        onClick={() => toggle("nav")}
      >
        Contact Me
      </button>

      {present &&
        createPortal(
          isSheet ? (
            <ContactSheet
              panelRef={panelRef}
              panelId={panelId}
              titleId={titleId}
              state={state}
              onClose={() => close(true)}
            />
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
          ),
          document.body,
        )}
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
