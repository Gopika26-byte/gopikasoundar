import { useEffect, useRef, useState, type ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
