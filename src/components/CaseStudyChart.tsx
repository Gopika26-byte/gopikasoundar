import type { CaseBlock } from "../data/myntraLoop"

const kindLabel = {
  research: "Exploratory research finding",
  hypothesis: "Preliminary hypothesis",
  illustrative: "Illustrative assumption",
} as const

export function CaseStudyBars({ block }: { block: Extract<CaseBlock, { type: "bars" }> }) {
  return (
    <figure className="case-chart">
      <figcaption>
        <span className={`case-kind case-kind--${block.kind}`}>{kindLabel[block.kind]}</span>
        <span className="case-chart-title">{block.title}</span>
      </figcaption>
      <ul className="case-bar-list">
        {block.items.map((item) => (
          <li key={item.name}>
            <div className="case-bar-meta">
              <span>{item.name}</span>
              <span>{item.display}</span>
            </div>
            <div className="case-bar-track" aria-hidden="true">
              <div
                className={item.highlight ? "case-bar-fill case-bar-fill--highlight" : "case-bar-fill"}
                style={{ width: `${Math.min(100, (item.value / block.max) * 100)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      {block.note ? <p className="case-chart-note">{block.note}</p> : null}
    </figure>
  )
}

export function CaseStudyStack({ block }: { block: Extract<CaseBlock, { type: "stack" }> }) {
  const total = block.parts.reduce((sum, part) => sum + part.value, 0)
  return (
    <figure className="case-chart">
      <figcaption>
        <span className={`case-kind case-kind--${block.kind}`}>{kindLabel[block.kind]}</span>
        <span className="case-chart-title">{block.title}</span>
      </figcaption>
      <div className="case-stack" aria-hidden="true">
        {block.parts.map((part) => (
          <span key={part.name} style={{ width: `${(part.value / total) * 100}%` }} />
        ))}
      </div>
      <ul className="case-stack-legend">
        {block.parts.map((part) => (
          <li key={part.name}>
            <span>{part.name}</span>
            <span>{part.display}</span>
          </li>
        ))}
      </ul>
      <p className="case-chart-note">{block.totalLabel}</p>
      {block.note ? <p className="case-chart-note">{block.note}</p> : null}
    </figure>
  )
}
