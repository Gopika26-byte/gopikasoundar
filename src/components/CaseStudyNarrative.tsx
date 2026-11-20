import type { MouseEvent } from "react"
import { Link } from "react-router-dom"
import type { CaseBlock, CaseNarrative } from "../data/myntraLoop"

function scrollToCaseSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault()
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${id}`)
}

export function CaseStudyNarrative({
  narrative,
  heroSrc,
}: {
  narrative: CaseNarrative
  heroSrc: string
}) {
  return (
    <main className="mx-auto max-w-[1120px] px-5 pt-32 pb-24 sm:px-8">
      <Link to="/#work" className="text-sm text-muted hover:text-ink">
        ← Featured work
      </Link>
      <p className="eyebrow mt-8">{narrative.eyebrow}</p>
      <h1 className="display mt-4 max-w-4xl text-[clamp(2.5rem,5vw,4.2rem)] text-ink">{narrative.title}</h1>
      <p className="mt-3 font-serif text-2xl text-coral-deep">{narrative.project}</p>
      <p className="mt-3 max-w-2xl font-serif text-xl text-ink">{narrative.tagline}</p>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
        {narrative.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        {narrative.meta.map((item) => (
          <div key={item.label} className="surface px-4 py-3">
            <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">{item.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 max-w-3xl rounded-[20px] border border-line bg-white/70 p-5 text-sm leading-relaxed text-ink">
        {narrative.disclosure}
      </p>
      <div className="mt-8 overflow-hidden rounded-[24px] border border-line">
        <img src={heroSrc} alt="" className="h-auto w-full object-cover" />
      </div>

      <div className="mt-12 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-10">
        <nav className="case-toc hidden lg:block" aria-label="Case study contents">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Contents</p>
          <ol className="mt-3 space-y-1.5">
            {narrative.sections.map((section) => (
              <li key={section.id}>
                <a className="case-toc-link" href={`#${section.id}`} onClick={(event) => scrollToCaseSection(event, section.id)}>
                  <span>{section.number}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div>
          <details className="case-toc-mobile mb-8 lg:hidden">
            <summary>Contents</summary>
            <ol>
              {narrative.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} onClick={(event) => scrollToCaseSection(event, section.id)}>
                    {section.number} {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          {narrative.sections.map((section) => (
            <section key={section.id} id={section.id} className="case-section scroll-mt-28">
              <p className="text-sm text-coral-deep">{section.number}</p>
              <h2 className="mt-1 font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-tight text-ink">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4">
                {section.blocks.map((block, index) => (
                  <BlockView key={`${section.id}-${index}`} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

function BlockView({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case "p":
      return <p className="leading-relaxed text-muted">{block.text}</p>
    case "h3":
      return <h3 className="pt-3 font-serif text-2xl leading-snug text-ink">{block.text}</h3>
    case "list":
      return (
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case "quotes":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item) => (
            <blockquote key={item.who} className="surface p-5">
              <p className="text-xs font-semibold tracking-[0.14em] text-coral-deep uppercase">{item.who}</p>
              <p className="mt-3 font-serif text-xl leading-snug text-ink">“{item.text}”</p>
            </blockquote>
          ))}
        </div>
      )
    case "table":
      return (
        <figure>
          <div className="overflow-x-auto rounded-[16px] border border-line">
            <table className="case-table">
              <thead>
                <tr>
                  {block.headers.map((header) => (
                    <th key={header} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")}>
                    {row.map((cell, index) => (
                      <td key={`${cell}-${index}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? <figcaption className="mt-2 text-xs text-muted">{block.caption}</figcaption> : null}
          {block.note ? <figcaption className="mt-2 text-xs text-muted">{block.note}</figcaption> : null}
        </figure>
      )
    case "columns":
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {block.items.map((item) => (
            <article key={item.title} className="surface p-5">
              <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )
    case "callout":
      return <p className="rounded-[20px] bg-peach/50 p-5 text-sm leading-relaxed text-ink">{block.text}</p>
    case "note":
      return <p className="text-sm leading-relaxed text-ink">{block.text}</p>
    case "formula":
      return <p className="rounded-[16px] bg-ivory px-4 py-3 font-serif text-xl leading-snug text-ink">{block.text}</p>
    case "steps":
      return (
        <ol className="space-y-4">
          {block.items.map((item, index) => (
            <li key={item.title} className="grid grid-cols-[2.2rem_minmax(0,1fr)] gap-3">
              <span className="text-sm text-coral-deep">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="font-serif text-xl text-ink">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      )
    case "flow":
      return (
        <ol className="flex flex-wrap items-center gap-2">
          {block.items.map((item, index) => (
            <li key={item} className="flex items-center gap-2">
              <span className="rounded-full bg-ivory px-3 py-1.5 text-sm text-ink">{item}</span>
              {index < block.items.length - 1 ? (
                <span aria-hidden="true" className="text-muted">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      )
  }
}
