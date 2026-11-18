import { ArrowUpRight } from "lucide-react"
import type { CSSProperties } from "react"
import { Link } from "react-router-dom"
import type { Tone } from "../data/site"
import { StudyShowcase, studyTones } from "./StudyArt"

type CaseStudyShowcaseProps = {
  category: string
  status: string
  title: string
  description: string
  tags: string[]
  tone: Tone
  slug: string
  href: string
  visualSrc?: string
}

export function CaseStudyShowcase({
  category,
  status,
  title,
  description,
  tags,
  tone,
  slug,
  href,
  visualSrc,
}: CaseStudyShowcaseProps) {
  const palette = studyTones[tone]
  const titleId = `${slug}-title`

  return (
    <Link
      to={href}
      className={`case-showcase case-showcase--${tone}${visualSrc ? " case-showcase--photo" : ""}`}
      style={{ "--case-wash": palette.wash, "--case-accent": palette.accent } as CSSProperties}
      aria-labelledby={titleId}
    >
      <div className="case-showcase-copy">
        <div className="case-showcase-lead">
          <p className="case-showcase-category">{category}</p>
          <p className="case-showcase-status">{status}</p>
          <h3 id={titleId} className="case-showcase-title">
            {title}
          </h3>
          <p className="case-showcase-description">{description}</p>
        </div>
        <div className="case-showcase-meta">
          <ul className="case-showcase-tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span className="case-showcase-cta">
            Read the case study
            <span className="case-showcase-arrow" aria-hidden="true">
              <ArrowUpRight size={16} />
            </span>
          </span>
        </div>
      </div>
      <div className="case-showcase-visual" aria-hidden="true">
        <div className="case-showcase-visual-inner">
          {visualSrc ? (
            <img className={`case-showcase-photo case-showcase-photo--${slug}`} src={visualSrc} alt="" />
          ) : (
            <StudyShowcase tone={tone} slug={slug} />
          )}
        </div>
      </div>
    </Link>
  )
}
