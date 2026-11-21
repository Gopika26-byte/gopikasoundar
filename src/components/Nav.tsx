import { Menu, X } from "lucide-react"
import { useEffect, useId, useState } from "react"
import { useLocation } from "react-router-dom"
import { navItems, profile } from "../data/site"
import { ContactMenu } from "./contact/ContactMenu"
import { useContactMenu } from "./contact/ContactMenuProvider"
import { Mark } from "./Mark"
import { SectionLink } from "./SectionLink"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { open: contactOpen, close: closeContact } = useContactMenu()
  const [active, setActive] = useState<(typeof navItems)[number]["id"]>("home")
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
      let current: (typeof navItems)[number]["id"] = navItems[0].id
      for (const item of navItems) {
        const node = document.getElementById(item.section)
        if (!node) continue
        const top = node.getBoundingClientRect().top + window.scrollY
        if (top <= line) current = item.id
      }
      setActive(current)
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

  const linkClass = (id: string) =>
    `whitespace-nowrap rounded-lg px-2 py-2 text-sm transition-colors duration-150 xl:px-2.5 ${
      location.pathname === "/" && active === id
        ? "bg-peach/80 text-ink"
        : "text-muted hover:text-ink"
    }`

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
            onNavigate={() => setOpen(false)}
            className="flex items-center gap-2 rounded-lg py-1 pr-2 font-serif text-xl tracking-tight text-ink"
          >
            <Mark />
            {profile.name}
          </SectionLink>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
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
              {navItems.map((item) => (
                <SectionLink
                  key={item.id}
                  id={item.id}
                  onNavigate={() => setOpen(false)}
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
