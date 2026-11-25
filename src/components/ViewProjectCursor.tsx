import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)"
const ACTIVE_CLASS = "has-view-cursor"

type ViewProjectCursorProps = {
  target: string
  label?: string
}

export function ViewProjectCursor({ target, label = "View project" }: ViewProjectCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const media = window.matchMedia(FINE_POINTER_QUERY)
    const root = document.documentElement
    let frame = 0
    let x = 0
    let y = 0
    let hasPointer = false
    let teardown: (() => void) | null = null

    const paint = () => {
      frame = 0
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const setVisible = (visible: boolean) => {
      if (visible && !cursor.classList.contains("is-visible")) {
        cancelAnimationFrame(frame)
        paint()
      }
      cursor.classList.toggle("is-visible", visible)
    }

    const isOverTarget = (node: EventTarget | null) =>
      node instanceof Element &&
      node.closest(target) !== null &&
      node.closest("[data-no-view-cursor]") === null

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        setVisible(false)
        return
      }
      x = event.clientX
      y = event.clientY
      hasPointer = true
      setVisible(isOverTarget(event.target))
      if (!frame) frame = requestAnimationFrame(paint)
    }

    const onScroll = () => {
      if (hasPointer) setVisible(isOverTarget(document.elementFromPoint(x, y)))
    }

    const hide = () => {
      hasPointer = false
      setVisible(false)
    }

    const enable = () => {
      root.classList.add(ACTIVE_CLASS)
      document.addEventListener("pointermove", onPointerMove, { passive: true })
      window.addEventListener("scroll", onScroll, { passive: true })
      root.addEventListener("pointerleave", hide)
      window.addEventListener("blur", hide)

      return () => {
        root.classList.remove(ACTIVE_CLASS)
        document.removeEventListener("pointermove", onPointerMove)
        window.removeEventListener("scroll", onScroll)
        root.removeEventListener("pointerleave", hide)
        window.removeEventListener("blur", hide)
        cancelAnimationFrame(frame)
        frame = 0
        hide()
      }
    }

    const sync = () => {
      teardown?.()
      teardown = media.matches ? enable() : null
    }

    sync()
    media.addEventListener("change", sync)

    return () => {
      media.removeEventListener("change", sync)
      teardown?.()
    }
  }, [target])

  return createPortal(
    <div ref={cursorRef} className="view-cursor" aria-hidden="true">
      <span className="view-cursor-pill">
        <span className="view-cursor-dot" />
        {label}
      </span>
    </div>,
    document.body,
  )
}
