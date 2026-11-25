import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { CatchMyVibeCaseStudy } from "../components/catchmyvibe/CatchMyVibeCaseStudy"
import { CaseStudyNarrative } from "../components/CaseStudyNarrative"
import { StudyArt } from "../components/StudyArt"
import { caseStudies } from "../data/site"

export function CaseStudyPage() {
  const { slug } = useParams()
  const study = caseStudies.find((item) => item.slug === slug)

  useEffect(() => {
    document.title = study ? `${study.title} — Gopika` : "Exercise — Gopika"
  }, [study])

  if (!study) {
    return (
      <main className="mx-auto max-w-3xl px-5 pt-36 pb-24">
        <h1 className="font-serif text-4xl">That exercise is not on this site.</h1>
        <Link to="/#work" className="mt-6 inline-flex text-coral-deep">
          Back to featured work
        </Link>
      </main>
    )
  }

  if (study.slug === "creator-ecosystem") {
    return <CatchMyVibeCaseStudy />
  }

  if (study.narrative) {
    return <CaseStudyNarrative narrative={study.narrative} />
  }

  return (
    <main className="mx-auto max-w-[1120px] px-5 pt-32 pb-24 sm:px-8">
      <Link to="/#work" className="text-sm text-muted hover:text-ink">
        ← Featured work
      </Link>
      <p className="eyebrow mt-8">{study.category}</p>
      <p className="mt-2 text-sm text-coral-deep">Independent exercise — not a shipped product or a job</p>
      <h1 className="display mt-4 max-w-3xl text-[clamp(2.6rem,5vw,4.4rem)] text-ink">{study.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{study.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-white px-3 py-1 text-xs text-ink">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-10 overflow-hidden rounded-[24px] border border-line">
        <StudyArt tone={study.tone} slug={study.slug} />
      </div>
      <p className="mt-2 text-xs text-muted">Illustrative sketch for this exercise. Not a product screenshot.</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-3xl">The problem</h2>
          <p className="mt-3 text-muted">{study.problem}</p>
          <p className="mt-3 text-muted">{study.context}</p>
          <h2 className="mt-10 font-serif text-3xl">How I would approach it</h2>
          <ol className="mt-4 space-y-5">
            {study.approach.map((step, index) => (
              <li key={step.title}>
                <p className="text-sm text-coral-deep">0{index + 1}</p>
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <aside className="surface h-fit p-6">
          <h2 className="font-serif text-2xl">Decisions I would hold</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            {study.decisions.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-3xl">How I would know</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Measures I would watch. These are not results. No baseline from a real product is claimed.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {study.measure.map((item) => (
            <article key={item.metric} className="surface p-5">
              <h3 className="font-serif text-2xl leading-tight">{item.metric}</h3>
              <p className="mt-2 text-sm text-muted">{item.why}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-[20px] bg-peach/50 p-6">
        <h2 className="font-serif text-2xl">Assumptions that would have to hold</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {study.assumptions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
