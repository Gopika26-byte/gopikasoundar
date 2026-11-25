import { Link } from "react-router-dom"
import { Reveal } from "../components/Reveal"
import { CaseStudyShowcase } from "../components/CaseStudyShowcase"
import { ViewProjectCursor } from "../components/ViewProjectCursor"
import catchMyVibeVisual from "../assets/catchmyvibe-banner.jpg"
import myntraLoopCard from "../assets/myntra-loop-card.jpg"
import trustedCircleVisual from "../assets/trusted-circle-savings.jpg"
import { caseStudies, prdDocuments } from "../data/site"

const caseStudyVisuals: Record<string, string> = {
  "creator-ecosystem": catchMyVibeVisual,
  "team-collaboration": trustedCircleVisual,
}

function MyntraLoopCard() {
  const notion = prdDocuments.find((document) => document.slug === "myntra-loop")?.href ?? ""

  return (
    <div className="case-showcase case-showcase--banner">
      <Link
        to="/work/myntra-loop"
        className="myntra-card-open"
        aria-label="View Overview of Turning Pre-Loved Fashion into Future Loyalty — Myntra Loop"
      >
        <img src={myntraLoopCard} width={1024} height={576} alt="" />
      </Link>
      <a
        className="myntra-card-notion"
        href={notion}
        target="_blank"
        rel="noopener noreferrer"
        data-no-view-cursor=""
      >
        Read Detailed Case Study
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="bg-white/40">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">Featured work</p>
          <h2 className="display mt-3 text-[clamp(2.4rem,4vw,3.5rem)] text-ink">
            From problems to progress.
          </h2>
        </Reveal>

        <div id="work-start" className="work-showcases">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 90}>
              {study.slug === "myntra-loop" ? (
                <MyntraLoopCard />
              ) : (
                <CaseStudyShowcase
                  category={study.category}
                  status={study.status ?? "Independent exercise"}
                  title={study.title}
                  description={study.summary}
                  tags={study.tags}
                  tone={study.tone}
                  slug={study.slug}
                  href={`/work/${study.slug}`}
                  visualSrc={caseStudyVisuals[study.slug]}
                />
              )}
            </Reveal>
          ))}
        </div>
        <ViewProjectCursor target=".case-showcase" />
      </div>
    </section>
  )
}
