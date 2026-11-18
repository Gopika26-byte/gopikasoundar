import { Reveal } from "../components/Reveal"
import { CaseStudyShowcase } from "../components/CaseStudyShowcase"
import { ViewProjectCursor } from "../components/ViewProjectCursor"
import catchMyVibeVisual from "../assets/catchmyvibe-banner.jpg"
import myntraLoopVisual from "../assets/myntra-loop.jpg"
import trustedCircleVisual from "../assets/trusted-circle-savings.jpg"
import { caseStudies } from "../data/site"

const caseStudyVisuals: Record<string, string> = {
  "financial-planning": myntraLoopVisual,
  "creator-ecosystem": catchMyVibeVisual,
  "team-collaboration": trustedCircleVisual,
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

        <div className="work-showcases">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 90}>
              <CaseStudyShowcase
                category={study.category}
                status="Independent exercise"
                title={study.title}
                description={study.summary}
                tags={study.tags}
                tone={study.tone}
                slug={study.slug}
                href={`/work/${study.slug}`}
                visualSrc={caseStudyVisuals[study.slug]}
              />
            </Reveal>
          ))}
        </div>
        <ViewProjectCursor target=".case-showcase" />
      </div>
    </section>
  )
}
