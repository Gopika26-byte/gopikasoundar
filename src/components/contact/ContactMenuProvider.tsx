import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"

export type ContactAnchor = "nav" | "hero"

type ContactMenuContextValue = {
  open: boolean
  anchor: ContactAnchor
  panelId: string
  toggle: (anchor: ContactAnchor) => void
  close: () => void
  setAnchorNode: (anchor: ContactAnchor, node: HTMLElement | null) => void
  anchorNode: (anchor: ContactAnchor) => HTMLElement | null
  isTriggerTarget: (target: Node) => boolean
}

const ContactMenuContext = createContext<ContactMenuContextValue | null>(null)

export function ContactMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState<ContactAnchor>("nav")
  const panelId = useId()
  const nodes = useRef(new Map<ContactAnchor, HTMLElement | null>())
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const toggle = useCallback(
    (next: ContactAnchor) => {
      setAnchor(next)
      setOpen(!(open && anchor === next))
    },
    [open, anchor],
  )

  const close = useCallback(() => setOpen(false), [])

  const setAnchorNode = useCallback((key: ContactAnchor, node: HTMLElement | null) => {
    nodes.current.set(key, node)
  }, [])

  const anchorNode = useCallback((key: ContactAnchor) => nodes.current.get(key) ?? null, [])

  const isTriggerTarget = useCallback(
    (target: Node) => [...nodes.current.values()].some((node) => node?.contains(target)),
    [],
  )

  const value = useMemo(
    () => ({ open, anchor, panelId, toggle, close, setAnchorNode, anchorNode, isTriggerTarget }),
    [open, anchor, panelId, toggle, close, setAnchorNode, anchorNode, isTriggerTarget],
  )

  return <ContactMenuContext.Provider value={value}>{children}</ContactMenuContext.Provider>
}

export function useContactMenu() {
  const value = useContext(ContactMenuContext)
  if (!value) throw new Error("useContactMenu must be used within ContactMenuProvider")
  return value
}
