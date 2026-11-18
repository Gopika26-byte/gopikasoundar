import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { TeardownArt } from "../components/TeardownArt"
import {
  PORTFOLIO_SCROLL_KEY,
  teardownBySlug,
  teardownPath,
  teardowns,
  type PortfolioNavState,
  type Teardown,
  type TeardownBlock,
} from "../data/teardowns"

export function TeardownPage() {
  const { slug } = useParams()
  const teardown = teardownBySlug(slug)

  useEffect(() => {
    document.title = teardown ? `${teardown.product} — Gopika` : "Teardown — Gopika"
  }, [teardown])

  if (!teardown) {
    return (
      <main className="mx-auto max-w-3xl px-5 pt-36 pb-24">
        <h1 className="font-serif text-4xl">That teardown is not on this site.</h1>
        <Link to="/#teardowns" className="mt-6 inline-flex text-coral-deep">
          Back to teardowns
        </Link>
      </main>
    )
  }

  const index = teardowns.findIndex((item) => item.slug === teardown.slug)
  const previous = index > 0 ? teardowns[index - 1] : undefined
  const next = index < teardowns.length - 1 ? teardowns[index + 1] : undefined

  return (
    <main className="mx-auto max-w-[1120px] px-5 pt-32 pb-24 sm:px-8">
      <BackToTeardowns />
      <p className="eyebrow mt-8">{teardown.category}</p>
      <p className="mt-2 text-sm text-coral-deep">{teardown.product}</p>
      <h1 className="display mt-4 max-w-3xl text-[clamp(2.4rem,4.6vw,4rem)] text-ink">{teardown.title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{teardown.intro}</p>
      <p className="mt-4 max-w-2xl text-sm text-ink">{teardown.disclaimer}</p>

      <div className="mt-10 overflow-hidden rounded-[24px] border border-line">
        <div className="aspect-[16/8]">
          <TeardownArt slug={teardown.slug} tone={teardown.tone} />
        </div>
      </div>
      <p className="mt-2 text-xs text-muted">Illustrative sketch. Not a product screenshot and not an official interface.</p>

      <div className="mt-12 max-w-2xl space-y-12">
        {teardown.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-3xl text-ink">{section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.blocks.map((block, blockIndex) => (
                <BlockView key={`${section.heading}-${blockIndex}`} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <TeardownFooter previous={previous} next={next} />
    </main>
  )
}

function BlockView({ block }: { block: TeardownBlock }) {
  if (block.kind === "text") {
    return (
      <div className="space-y-3">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  if (block.kind === "list") {
    return (
      <div>
        {block.intro ? <p className="mb-3 leading-relaxed text-muted">{block.intro}</p> : null}
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="border-t border-line pt-3 text-sm leading-relaxed text-ink">
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (block.kind === "notes") {
    return (
      <div className="space-y-4">
        {block.items.map((item) => (
          <article key={item.label} className="rounded-2xl bg-ivory px-4 py-4">
            <h3 className="text-sm font-semibold tracking-wide text-coral-deep">{item.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">{item.body}</p>
          </article>
        ))}
      </div>
    )
  }

  return (
    <p className="rounded-2xl border border-dashed border-[#d9cfc3] bg-white px-4 py-4 text-sm leading-relaxed text-muted">
      {block.text}
    </p>
  )
}

function BackToTeardowns({ className = "" }: { className?: string }) {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as PortfolioNavState | null

  function onClick() {
    if (state?.fromPortfolio && !state.viaTeardownNav) {
      navigate(-1)
      return
    }
    const stored = sessionStorage.getItem(PORTFOLIO_SCROLL_KEY)
    const scroll = typeof state?.portfolioScroll === "number" ? state.portfolioScroll : stored ? Number(stored) : undefined
    if (state?.fromPortfolio && typeof scroll === "number" && !Number.isNaN(scroll)) {
      navigate("/", { state: { restoreScroll: scroll } satisfies PortfolioNavState })
      return
    }
    navigate("/#teardowns")
  }

  return (
    <button type="button" onClick={onClick} className={`text-sm text-muted hover:text-ink ${className}`}>
      ← Back to Teardowns
    </button>
  )
}

function TeardownFooter({
  previous,
  next,
}: {
  previous?: Teardown
  next?: Teardown
}) {
  return (
    <nav aria-label="More teardowns" className="mt-16 border-t border-line pt-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? <SiblingLink direction="previous" item={previous} /> : <span />}
        {next ? <SiblingLink direction="next" item={next} /> : null}
      </div>
      <div className="mt-8">
        <BackToTeardowns />
      </div>
    </nav>
  )
}

function SiblingLink({
  direction,
  item,
}: {
  direction: "previous" | "next"
  item: Teardown
}) {
  const location = useLocation()
  const state = (location.state as PortfolioNavState | null) ?? {}
  const nextState: PortfolioNavState = {
    fromPortfolio: state.fromPortfolio,
    portfolioScroll: state.portfolioScroll,
    viaTeardownNav: true,
  }

  return (
    <Link
      to={teardownPath(item.slug)}
      state={nextState}
      className={`surface flex items-center gap-3 p-4 ${direction === "next" ? "sm:flex-row-reverse sm:text-right" : ""}`}
      aria-label={`${direction === "next" ? "Next" : "Previous"} teardown: ${item.product}, ${item.title}`}
    >
      {direction === "previous" ? <ArrowLeft size={16} aria-hidden="true" /> : null}
      <span>
        <span className="block text-xs tracking-[0.14em] text-muted uppercase">
          {direction === "next" ? "Next" : "Previous"}
        </span>
        <span className="mt-1 block font-serif text-xl text-ink">{item.product}</span>
      </span>
      {direction === "next" ? <ArrowRight size={16} aria-hidden="true" /> : null}
    </Link>
  )
}
