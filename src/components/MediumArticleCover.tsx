import { ArrowUpRight } from "lucide-react"
import type { CSSProperties } from "react"
import mediumLogo from "../assets/medium-logo.png"
import type { Tone } from "../data/site"

const washes: Record<Tone, string> = {
  peach: "#f6ddd2",
  sage: "#c8d8c1",
  lavender: "#e6dfec",
  sunset: "#efb9b0",
}

type MediumArticleCoverProps = {
  number: number
  total: number
  category: string
  title: string
  description: string
  author: string
  href: string
  tone: Tone
}

export function MediumArticleCover({
  number,
  total,
  category,
  title,
  description,
  author,
  href,
  tone,
}: MediumArticleCoverProps) {
  const linked = href.length > 0
  const issue = `${String(number).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
  const titleId = `medium-article-${number}-title`
  const style = { "--medium-wash": washes[tone] } as CSSProperties

  const inner = (
    <>
      <div className="medium-cover-masthead">
        <img src={mediumLogo} alt="Medium" width={220} height={36} />
      </div>
      <p className="medium-cover-issue">{issue}</p>
      <p className="medium-cover-category">{category}</p>
      <h3 id={titleId} className="medium-cover-title">
        {title}
      </h3>
      <p className="medium-cover-description">{description}</p>
      <p className="medium-cover-byline">By {author}</p>
      <span className="medium-cover-action">
        Read article
        <ArrowUpRight size={16} aria-hidden="true" />
        {linked ? <span className="sr-only">, opens in a new tab</span> : null}
      </span>
      {linked ? null : <p className="medium-cover-note">Medium link not added yet.</p>}
    </>
  )

  if (!linked) {
    return (
      <article className="medium-cover" style={style} aria-labelledby={titleId}>
        {inner}
      </article>
    )
  }

  return (
    <a
      className="medium-cover medium-cover-link"
      style={style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby={titleId}
    >
      {inner}
    </a>
  )
}
