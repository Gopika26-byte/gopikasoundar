import { useState } from "react"
import { Link } from "react-router-dom"
import { Reveal } from "../components/Reveal"
import { caseStudies, framework } from "../data/site"

export function Framework() {
  const [selected, setSelected] = useState(framework[0].id)
  const current = framework.find((stage) => stage.id === selected) ?? framework[0]
  const index = framework.findIndex((stage) => stage.id === current.id)
  const study = caseStudies.find((item) => item.slug === current.study)

  function move(next: number) {
    const stage = framework[(next + framework.length) % framework.length]
    setSelected(stage.id)
    document.getElementById(`stage-${stage.id}`)?.focus()
  }

  return (
    <section id="approach" className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 md:py-28">
      <Reveal>
        <h2 className="display text-[clamp(2.4rem,4vw,3.6rem)] text-ink">
          How I think about products
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A working sequence I use to slow a problem down. The examples point at exercises on this
          site, not at a methodology I am presenting as past employment.
        </p>
      </Reveal>

      <div className="mt-10">
        <div className="relative">
          <div className="absolute top-5 right-4 left-4 hidden h-px bg-line md:block" aria-hidden="true" />
          <div
            className="absolute top-5 left-4 hidden h-px bg-coral md:block"
            style={{ width: `calc(${(index / (framework.length - 1)) * 100}% - 2rem)` }}
            aria-hidden="true"
          />
          <div
            role="tablist"
            aria-label="Product thinking stages"
            className="flex gap-2 overflow-x-auto pb-2 md:justify-between md:overflow-visible"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault()
                move(index + 1)
              }
              if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault()
                move(index - 1)
              }
            }}
          >
            {framework.map((stage, stageIndex) => {
              const isSelected = stage.id === current.id
              return (
                <button
                  key={stage.id}
                  id={`stage-${stage.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  className="relative flex min-w-[7.5rem] flex-col items-start gap-2 rounded-xl px-1 py-1 text-left md:min-w-0 md:items-center"
                  onClick={() => setSelected(stage.id)}
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full border text-sm ${
                      isSelected
                        ? "border-coral bg-white text-coral-deep"
                        : "border-line bg-ivory text-muted"
                    }`}
                  >
                    {stageIndex + 1}
                  </span>
                  <span className={`text-sm ${isSelected ? "text-ink" : "text-muted"}`}>
                    {stage.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          aria-labelledby={`stage-${current.id}`}
          className="surface mt-6 grid gap-8 p-6 md:grid-cols-2 md:p-8"
        >
          <div>
            <p className="eyebrow">{current.name}</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">{current.question}</h3>
            <p className="mt-4 text-muted">{current.explanation}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink">{current.example}</p>
            {study && (
              <Link
                to={`/work/${study.slug}`}
                className="mt-5 inline-flex text-sm text-coral-deep underline decoration-sunset underline-offset-4"
              >
                Related exercise: {study.title}
              </Link>
            )}
          </div>
          <div className="rounded-2xl bg-ivory p-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              {current.artifact}
            </p>
            <p className="mt-3 font-serif text-2xl leading-snug text-ink">{current.artifactBody}</p>
            <p className="mt-6 text-xs text-muted">A description of the artifact, not a sample from a client.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
