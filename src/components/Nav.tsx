import { ChevronDown, File, FileText, Layers, Menu, X } from "lucide-react"
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import { useLocation } from "react-router-dom"
import { navItems, navSpy, profile, workNavItems } from "../data/site"
import { ContactMenu } from "./contact/ContactMenu"
import { useContactMenu } from "./contact/ContactMenuProvider"
import { Mark } from "./Mark"
import { SectionLink } from "./SectionLink"

const workIcons = {
  "work-start": FileText,
  "documentation-start": File,
  "teardowns-start": Layers,
} as const

type Highlight = (typeof navSpy)[number]["highlight"]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { open: contactOpen, close: closeContact } = useContactMenu()
  const [active, setActive] = useState<Highlight>("home")
  const [activeSection, setActiveSection] = useState<string>("home")
  const location = useLocation()
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== "/") return
    const updateActive = () => {
      const line = window.scrollY + (document.querySelector("nav")?.getBoundingClientRect().bottom ?? 96) + 24
      let current = navSpy[0]
      for (const item of navSpy) {
        const node = document.getElementById(item.section)
        if (!node) continue
        const top = node.getBoundingClientRect().top + window.scrollY
        if (top <= line) current = item
      }
      setActive(current.highlight)
      setActiveSection(current.section)
    }
    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    return () => window.removeEventListener("scroll", updateActive)
  }, [location.pathname])

  useEffect(() => {
    if (contactOpen) setOpen(false)
  }, [contactOpen])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const linkClass = (id: string, extra = "") =>
    `whitespace-nowrap rounded-lg px-2 py-2 text-sm transition-colors duration-150 xl:px-2.5 ${extra} ${
      location.pathname === "/" && active === id
        ? "bg-peach/80 text-ink"
        : "text-muted hover:text-ink"
    }`

  const closeMenus = () => setOpen(false)

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`pointer-events-auto w-full rounded-2xl transition-all duration-300 ease-out ${
          scrolled ? "glass-strong max-w-[1180px]" : "glass max-w-[1080px]"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4">
          <SectionLink
            id="home"
            onNavigate={closeMenus}
            className="flex items-center gap-2 rounded-lg py-1 pr-2 font-serif text-xl tracking-tight text-ink"
          >
            <Mark />
            {profile.name}
          </SectionLink>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.slice(0, 2).map((item) => (
              <SectionLink key={item.id} id={item.id} className={linkClass(item.id)}>
                {item.label}
              </SectionLink>
            ))}
            <WorkMenu active={active === "work"} activeSection={activeSection} variant="bar" />
            {navItems.slice(2).map((item) => (
              <SectionLink key={item.id} id={item.id} className={linkClass(item.id)}>
                {item.label}
              </SectionLink>
            ))}
          </div>

          <div className="relative flex items-center gap-2">
            <ContactMenu />
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/70 text-ink lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => {
                setOpen((value) => !value)
                closeContact()
              }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div id={menuId} className="border-t border-line/80 px-3 py-3 lg:hidden">
            <div className="flex flex-col">
              {navItems.slice(0, 2).map((item) => (
                <SectionLink
                  key={item.id}
                  id={item.id}
                  onNavigate={closeMenus}
                  className={`${linkClass(item.id)} px-3 py-3 text-base`}
                >
                  {item.label}
                </SectionLink>
              ))}
              <WorkMenu
                active={active === "work"}
                activeSection={activeSection}
                variant="sheet"
                onNavigate={closeMenus}
              />
              {navItems.slice(2).map((item) => (
                <SectionLink
                  key={item.id}
                  id={item.id}
                  onNavigate={closeMenus}
                  className={`${linkClass(item.id)} px-3 py-3 text-base`}
                >
                  {item.label}
                </SectionLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

function WorkMenu({
  active,
  activeSection,
  variant,
  onNavigate,
}: {
  active: boolean
  activeSection: string
  variant: "bar" | "sheet"
  onNavigate?: () => void
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const pendingFocus = useRef<"first" | "last" | null>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return
      event.stopPropagation()
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener("pointerdown", onPointer)
    document.addEventListener("keydown", onKey, true)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      document.removeEventListener("keydown", onKey, true)
    }
  }, [open])

  useEffect(() => {
    if (!open || !pendingFocus.current) return
    const items = rootRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]')
    if (!items?.length) return
    const item = pendingFocus.current === "last" ? items[items.length - 1] : items[0]
    pendingFocus.current = null
    item.focus()
  }, [open])

  const onMenuKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const items = [...event.currentTarget.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]')]
    const index = items.indexOf(document.activeElement as HTMLAnchorElement)
    if (index < 0) return
    if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Home" || event.key === "End") {
      event.preventDefault()
    }
    if (event.key === "ArrowDown") items[(index + 1) % items.length]?.focus()
    if (event.key === "ArrowUp") items[(index - 1 + items.length) % items.length]?.focus()
    if (event.key === "Home") items[0]?.focus()
    if (event.key === "End") items[items.length - 1]?.focus()
  }

  const tone = active || open ? "bg-peach/80 text-ink" : "text-muted hover:text-ink"
  const shape =
    variant === "sheet"
      ? "w-full justify-between px-3 py-3 text-base"
      : "px-2 py-2 text-sm xl:px-2.5"

  const focusItem = (direction: "first" | "last") => {
    const items = rootRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]')
    if (!items?.length) return
    ;(direction === "last" ? items[items.length - 1] : items[0]).focus()
  }

  const onButtonKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return
    event.preventDefault()
    const direction = event.key === "ArrowDown" ? "first" : "last"
    if (open) {
      focusItem(direction)
      return
    }
    pendingFocus.current = direction
    setOpen(true)
  }

  return (
    <div ref={rootRef} className={variant === "bar" ? "nav-work" : "nav-work nav-work--sheet"}>
      <button
        ref={buttonRef}
        type="button"
        className={`nav-work-toggle whitespace-nowrap rounded-lg transition-colors duration-150 ${shape} ${tone}`}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onButtonKey}
      >
        Work
        <ChevronDown aria-hidden="true" size={15} strokeWidth={2} className={open ? "nav-work-chevron is-open" : "nav-work-chevron"} />
      </button>
      <div
        id={menuId}
        role="menu"
        aria-label="Work"
        aria-hidden={!open}
        inert={!open}
        className={open ? "nav-work-menu is-open" : "nav-work-menu"}
        onKeyDown={onMenuKey}
      >
        <div className="nav-work-menu-inner">
          {workNavItems.map((item) => {
            const Icon = workIcons[item.id]
            const current = activeSection === item.section
            return (
              <SectionLink
                key={item.id}
                id={item.id}
                role="menuitem"
                onNavigate={() => {
                  setOpen(false)
                  onNavigate?.()
                }}
                className={`nav-work-item${current ? " is-current" : ""}`}
              >
                <Icon aria-hidden="true" size={16} strokeWidth={1.75} />
                {item.label}
              </SectionLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}
