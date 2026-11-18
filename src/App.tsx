import { useEffect, useRef } from "react"
import { BrowserRouter, Route, Routes, useLocation, useNavigationType } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Nav } from "./components/Nav"
import type { PortfolioNavState } from "./data/teardowns"
import { CaseStudyPage } from "./pages/CaseStudyPage"
import { Home } from "./pages/Home"
import { NotePage } from "./pages/NotePage"
import { ResumePage } from "./pages/ResumePage"
import { TeardownPage } from "./pages/TeardownPage"

function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const positions = useRef(new Map<string, number>())

  useEffect(() => {
    const key = location.key
    const onScroll = () => {
      positions.current.set(key, window.scrollY)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.key])

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const state = location.state as PortfolioNavState | null

    if (navigationType === "POP") {
      const saved = positions.current.get(location.key)
      if (typeof saved === "number") {
        window.scrollTo(0, saved)
        return
      }
    }

    if (location.pathname === "/" && typeof state?.restoreScroll === "number") {
      window.scrollTo(0, state.restoreScroll)
      return
    }

    if (location.hash) {
      const id = location.hash.slice(1)
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
      }, 40)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo(0, 0)
  }, [location, navigationType])

  return null
}

function Shell() {
  const { pathname } = useLocation()
  const showSiteFooter = pathname !== "/"

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Nav />
      <ScrollManager />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/notes/:slug" element={<NotePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/product-teardowns/:slug" element={<TeardownPage />} />
          <Route
            path="*"
            element={
              <main className="mx-auto max-w-3xl px-5 pt-36 pb-24">
                <h1 className="font-serif text-4xl">This page is not part of the site.</h1>
              </main>
            }
          />
        </Routes>
      </div>
      {showSiteFooter ? <Footer /> : null}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
