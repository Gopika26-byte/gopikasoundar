import { useLocation, useNavigate } from "react-router-dom"
import type { ReactNode } from "react"
import { publicPath } from "../lib/publicPath"

type Props = {
  id: string
  className?: string
  children: ReactNode
  onNavigate?: () => void
  role?: string
}

export function scrollToSection(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const behavior = reduce ? "auto" : "smooth"
  if (id === "home") {
    window.scrollTo({ top: 0, behavior })
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior })
  }
  window.history.replaceState(null, "", `#${id}`)
}

export function SectionLink({ id, className, children, onNavigate, role }: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <a
      href={publicPath(`/#${id}`)}
      className={className}
      role={role}
      onClick={(event) => {
        event.preventDefault()
        onNavigate?.()
        if (location.pathname === "/") {
          scrollToSection(id)
        } else {
          navigate(`/#${id}`)
        }
      }}
    >
      {children}
    </a>
  )
}
