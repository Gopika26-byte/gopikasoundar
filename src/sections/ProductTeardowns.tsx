import { ArrowUpRight, Award, X } from "lucide-react"
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react"
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
    alt: "Swiggy delivery partner beside a phone showing an arrival in 10 minutes and the delivery route.",
  },
  "zepto-support": {
    src: zeptoVisual,
    alt: "Zepto grocery bag beside a phone listing missing item, wrong item, and quality issue support options.",
  },
}

const teardownLogos: Record<string, { src: string; alt: string }> = {
  "swiggy-instamart": { src: swiggyLogo, alt: "Swiggy" },
  "zepto-support": { src: zeptoLogo, alt: "Zepto" },
}

type Preview = {
  slug: string
  src: string
  alt: string
}

export function ProductTeardowns() {
  const [preview, setPreview] = useState<Preview | null>(null)

  return (
    <section id="teardowns" className="bg-white/40" aria-labelledby="teardowns-heading">
      <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal id="teardowns-start">
          <div className="teardown-kicker">
            <p>Product teardowns</p>
            <span aria-hidden="true" />
          </div>
          <h2 id="teardowns-heading" className="display mt-3 text-[clamp(2.4rem,4vw,3.5rem)] text-ink">
            Looking closer. <em>Thinking deeper.</em>
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            Every product has a story behind its decisions. I enjoy exploring those decisions,
            uncovering moments of friction, and thinking about how everyday experiences could work a
            little better.
          </p>
        </Reveal>

        <div className="doc-grid">
          {teardowns.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80} className="h-full">
              <TeardownCard item={item} onPreview={setPreview} />
            </Reveal>
          ))}
        </div>
      </div>
      <TeardownLightbox preview={preview} onClose={() => setPreview(null)} />
    </section>
  )
}

function TeardownScene({ slug, src, alt }: { slug: string; src: string; alt: string }) {
  const logo = teardownLogos[slug]
  return (
    <span className="teardown-scene">
      <img className="teardown-photo" src={src} alt={alt} width={1152} height={864} />
      {logo ? <img className={`teardown-brand teardown-brand--${slug}`} src={logo.src} alt="" /> : null}
    </span>
  )
}

function TeardownCard({ item, onPreview }: { item: Teardown; onPreview: (preview: Preview) => void }) {
  const visual = teardownVisuals[item.slug]
  const destination = item.href ?? teardownPath(item.slug)

  return (
    <article className={`teardown-card teardown-card--${item.tone} surface flex h-full flex-col overflow-hidden`}>
      {visual ? (
        <button
          type="button"
          className="teardown-visual"
          aria-label={`View larger image: ${visual.alt}`}
          onClick={() => onPreview({ slug: item.slug, src: visual.src, alt: visual.alt })}
        >
          <TeardownScene slug={item.slug} src={visual.src} alt="" />
        </button>
      ) : null}
      <div className="teardown-body">
        <p className="teardown-category">{item.category}</p>
        <h3>{item.title}</h3>
        <p className="teardown-summary">{item.summary}</p>
        {item.recognition ? (
          <p className="teardown-banner">
            <Award size={16} strokeWidth={1.75} aria-hidden="true" />
            {item.recognition.label}
          </p>
        ) : null}
        <ul className="teardown-tags">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <TeardownLink to={destination} external={Boolean(item.href)} className="teardown-explore">
          {item.cta}
          {item.href ? <span className="sr-only">, opens in a new tab</span> : null}
          <span className="teardown-explore-arrow">
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </TeardownLink>
      </div>
    </article>
  )
}

function TeardownLightbox({ preview, onClose }: { preview: Preview | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (preview && !dialog.open) dialog.showModal()
    if (!preview && dialog.open) dialog.close()
    if (preview) closeRef.current?.focus()
  }, [preview])

  return (
    <dialog
      ref={dialogRef}
      className="teardown-lightbox"
      aria-label={preview ? `Enlarged image: ${preview.alt}` : "Image preview"}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {preview ? (
        <div className="teardown-lightbox-frame">
          <TeardownScene slug={preview.slug} src={preview.src} alt={preview.alt} />
          <button ref={closeRef} type="button" className="teardown-lightbox-close" onClick={onClose}>
            <span className="sr-only">Close image preview</span>
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </dialog>
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
