import { useCallback, useRef, useState, type PointerEvent } from "react"
import { ToolPill } from "../components/ToolPill"
import { tools } from "../data/tools"

export function ToolsMarquee() {
  const [paused, setPaused] = useState(false)
  const heldPointers = useRef(new Set<number>())

  const pause = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return
    heldPointers.current.add(event.pointerId)
    try {
      event.currentTarget.setPointerCapture(event.pointerId)
    } catch {
      // Capture can fail if the pointer is already gone; pause anyway.
    }
    setPaused(true)
  }, [])

  const resume = useCallback((event: PointerEvent<HTMLDivElement>) => {
    heldPointers.current.delete(event.pointerId)
    if (heldPointers.current.size === 0) setPaused(false)
  }, [])

  return (
    <section
      className={`tools-marquee${paused ? " is-paused" : ""}`}
      aria-labelledby="tools-heading"
    >
      <h2 id="tools-heading" className="tools-marquee-title">
        Everyday Toolkit
      </h2>
      <div className="tools-marquee-viewport">
        <div className="tools-marquee-track">
          {[false, true].map((duplicate) => (
            <ul
              key={duplicate ? "duplicate" : "primary"}
              className="tools-marquee-sequence"
              aria-hidden={duplicate || undefined}
            >
              {tools.map((tool) => (
                <li key={tool.id}>
                  <ToolPill
                    name={tool.name}
                    src={tool.src}
                    onPointerDown={pause}
                    onPointerUp={resume}
                    onPointerCancel={resume}
                    onLostPointerCapture={resume}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
