import type { MouseEvent } from "react"
import { Link } from "react-router-dom"
import phone from "../assets/myntra-loop-phone.png"
import { CaseStudyBars, CaseStudyStack } from "./CaseStudyChart"
import type { CaseBlock, CaseNarrative } from "../data/myntraLoop"
import "./loopStudy.css"

function scrollToCaseSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault()
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${id}`)
}

export function CaseStudyNarrative({ narrative }: { narrative: CaseNarrative }) {
  return (
    <main className="loop-study">
      <div className="loop-bar">
        <Link to="/#work">← Featured work</Link>
      </div>
      <header className="loop-hero">
        <div>
          <p className="loop-kicker">{narrative.eyebrow}</p>
          <h1>{narrative.title}</h1>
          <p className="loop-project">{narrative.project}</p>
          <p className="loop-tagline">{narrative.tagline}</p>
          <div className="loop-intro">
            {narrative.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="loop-facts">
            {narrative.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="loop-note">{narrative.disclosure}</p>
        </div>
        <img
          className="loop-phone"
          src={phone}
          width={384}
          height={560}
          alt="Myntra Loop phone showing folded garments, Sell to Myntra, Earn Loop Points, and Shop Sustainably."
        />
      </header>

      <div className="loop-layout">
        <nav className="case-toc" aria-label="Case study contents">
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
          <details className="case-toc-mobile">
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
            <section
              key={section.id}
              id={section.id}
              className={section.emphasis ? "case-section case-section--emphasis scroll-mt-28" : "case-section scroll-mt-28"}
            >
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
        <ul className="case-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case "quotes":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item) => (
            <blockquote key={item.who} className="case-quote">
              <p>{item.who}</p>
              <p>“{item.text}”</p>
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
        <div className="case-columns">
          {block.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )
    case "callout":
      return <p className="case-callout">{block.text}</p>
    case "note":
      return <p className="case-note">{block.text}</p>
    case "formula":
      return <p className="case-formula">{block.text}</p>
    case "steps":
      return (
        <ol className="case-steps">
          {block.items.map((item, index) => (
            <li key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="font-serif text-xl text-ink">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      )
    case "bars":
      return <CaseStudyBars block={block} />
    case "stack":
      return <CaseStudyStack block={block} />
    case "flow":
      return (
        <ol className="case-flow">
          {block.items.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      )
  }
}
