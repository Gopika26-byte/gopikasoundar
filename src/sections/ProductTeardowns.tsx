import { ArrowUpRight, Award } from "lucide-react"
import type { MouseEvent, ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import swiggyLogo from "../assets/swiggy-logo.svg"
import swiggyVisual from "../assets/swiggy-teardown.jpg"
import zeptoLogo from "../assets/zepto-logo.svg"
import zeptoVisual from "../assets/zepto-teardown.jpg"
import { Reveal } from "../components/Reveal"
import { PORTFOLIO_SCROLL_KEY, teardownPath, teardowns, type PortfolioNavState, type Teardown } from "../data/teardowns"
import { publicPath } from "../lib/publicPath"

const teardownVisuals: Record<string, { src: string; alt: string }> = {
  "swiggy-instamart": {
    src: swiggyVisual,
    alt: "Swiggy delivery partner beside a phone showing a 10 minute delivery ETA and route.",
  },
  "zepto-support": {
    src: zeptoVisual,
    alt: "Purple grocery bag beside a phone showing missing item, refund status, and complaint options.",
  },
}

const teardownLogos: Record<string, { src: string; alt: string }> = {
  "swiggy-instamart": { src: swiggyLogo, alt: "Swiggy" },
  "zepto-support": { src: zeptoLogo, alt: "Zepto" },
}

export function ProductTeardowns() {
  return (
    <section id="teardowns" className="bg-white/40" aria-labelledby="teardowns-heading">
      <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal id="teardowns-start">
          <p className="eyebrow">Product teardowns</p>
          <h2 id="teardowns-heading" className="display mt-3 text-[clamp(2.4rem,4vw,3.5rem)] text-ink">
            Looking closer. <em>Thinking deeper.</em>
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
              <TeardownCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeardownCard({ item }: { item: Teardown }) {
  const logo = teardownLogos[item.slug]
  const visual = teardownVisuals[item.slug]
  const destination = item.href ?? teardownPath(item.slug)

  return (
    <article className={`teardown-card teardown-card--${item.tone} surface flex h-full flex-col overflow-hidden`}>
      <div className="teardown-visual relative aspect-[4/3] overflow-hidden">
        {visual ? <img className="teardown-photo" src={visual.src} alt={visual.alt} /> : null}
        {logo ? <img className={`teardown-logo teardown-logo--${item.slug}`} src={logo.src} alt={logo.alt} /> : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-muted uppercase">{item.category}</p>
        <h3 className="mt-2 font-serif text-[1.55rem] leading-tight text-ink">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
        <ul className="teardown-tags">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="teardown-actions">
          {item.recognition ? (
            <p className="teardown-ack">
              <Award size={15} strokeWidth={1.75} aria-hidden="true" />
              {item.recognition.label}
            </p>
          ) : null}
          <TeardownLink
            to={destination}
            external={Boolean(item.href)}
            className="teardown-explore"
          >
            {item.cta}
            {item.href ? <span className="sr-only">, opens in a new tab</span> : null}
            <ArrowUpRight className="teardown-explore-arrow" size={16} aria-hidden="true" />
          </TeardownLink>
        </div>
      </div>
    </article>
  )
}

function TeardownLink({
  to,
  external = false,
  className,
  children,
}: {
  to: string
  external?: boolean
  className?: string
  children: ReactNode
}) {
  const navigate = useNavigate()

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (external) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    const portfolioScroll = window.scrollY
    sessionStorage.setItem(PORTFOLIO_SCROLL_KEY, String(portfolioScroll))
    const state: PortfolioNavState = { fromPortfolio: true, portfolioScroll }
    navigate(to, { state })
  }

  if (external) {
    return (
      <a href={to} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <a href={publicPath(to)} className={className} onClick={onClick}>
      {children}
    </a>
  )
}
