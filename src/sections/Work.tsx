import { Link } from "react-router-dom"
import { Reveal } from "../components/Reveal"
import { CaseStudyShowcase } from "../components/CaseStudyShowcase"
import { ViewProjectCursor } from "../components/ViewProjectCursor"
import catchMyVibeVisual from "../assets/catchmyvibe-banner.jpg"
import myntraLoopCard from "../assets/myntra-loop-card.jpg"
import trustedCircleVisual from "../assets/trusted-circle-savings.jpg"
import { caseStudies } from "../data/site"

const caseStudyVisuals: Record<string, string> = {
  "creator-ecosystem": catchMyVibeVisual,
  "team-collaboration": trustedCircleVisual,
}

function MyntraLoopCard() {
  return (
    <Link to="/work/myntra-loop" className="case-showcase case-showcase--banner">
      <img
        src={myntraLoopCard}
        width={1024}
        height={576}
        alt="Turning Pre-Loved Fashion into Future Loyalty — Myntra Loop. Buy back unused branded clothing and resell it, with clear valuation and Loop Points."
      />
    </Link>
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
