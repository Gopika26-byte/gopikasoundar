import { ArrowUpRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import type { MouseEvent, ReactNode } from "react"
import { TeardownArt } from "../components/TeardownArt"
import { Reveal } from "../components/Reveal"
import { PORTFOLIO_SCROLL_KEY, teardownPath, teardowns, type PortfolioNavState } from "../data/teardowns"
import { publicPath } from "../lib/publicPath"

export function ProductTeardowns() {
  return (
    <section id="teardowns" className="bg-white/40" aria-labelledby="teardowns-heading">
      <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">Product teardowns</p>
          <h2 id="teardowns-heading" className="display mt-3 text-[clamp(2.4rem,4vw,3.5rem)] text-ink">
            Looking closer. Thinking deeper.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Every product has a story behind its decisions. I enjoy exploring those decisions,
            uncovering moments of friction, and thinking about how everyday experiences could work a
            little better.
          </p>
        </Reveal>

        <div className="doc-grid">
          {teardowns.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80} className="h-full">
              <article className="group surface flex h-full flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-raise">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="h-full w-full transition duration-300 group-hover:scale-[1.03]">
                    <TeardownArt slug={item.slug} tone={item.tone} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-muted uppercase">
                    {item.category}
                  </p>
                  <p className="mt-1 text-xs text-coral-deep">{item.product} · Independent analysis</p>
                  <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-ink">
                    <TeardownLink to={teardownPath(item.slug)} className="rounded-sm">
                      {item.title}
                    </TeardownLink>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-ivory px-2.5 py-1 text-xs text-ink">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <TeardownLink
                    to={teardownPath(item.slug)}
                    className="group mt-auto inline-flex items-center gap-3 pt-5 text-sm text-ink"
                  >
                    {item.cta}
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </TeardownLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeardownLink({
  to,
  className,
  children,
}: {
  to: string
  className?: string
  children: ReactNode
}) {
  const navigate = useNavigate()

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    const portfolioScroll = window.scrollY
    sessionStorage.setItem(PORTFOLIO_SCROLL_KEY, String(portfolioScroll))
    const state: PortfolioNavState = { fromPortfolio: true, portfolioScroll }
    navigate(to, { state })
  }

  return (
    <a href={publicPath(to)} className={className} onClick={onClick}>
      {children}
    </a>
  )
}
