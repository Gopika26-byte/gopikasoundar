import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import illustration from "../../assets/trusted-circle-savings.jpg"
import "./caseStudy.css"
import {
  assumptions,
  decisionPath,
  emergingPriorities,
  facts,
  feasibility,
  hypotheses,
  initialAssumptions,
  learnings,
  nextSteps,
  participantThemes,
  reasons,
  researchPhases,
  reviewThemes,
  saverObservations,
  sections,
} from "./caseContent"

export function TrustedCircleCaseStudy() {
  const [active, setActive] = useState<string>(sections[0].id)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let meta = document.querySelector('meta[name="description"]')
    let created = false
    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("name", "description")
      document.head.appendChild(meta)
      created = true
    }
    const previous = meta.getAttribute("content")
    meta.setAttribute(
      "content",
      "An independent product discovery study for a Slice group-savings idea. The research challenged the original hypothesis, and the decision was not to proceed.",
    )
    return () => {
      if (created) meta?.remove()
      else if (previous) meta?.setAttribute("content", previous)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="tc-study">
      <div className="tc-bar">
        <Link to="/#work">Back to portfolio</Link>
      </div>

      <header className="tc-hero" id="overview">
        <div>
          <p className="tc-kicker">Independent product discovery · Slice · Group savings</p>
          <h1>A Product Discovery Case Study on Trusted-Circle Group Savings</h1>
          <p className="tc-lead">
            An independent exploration of whether friends, relatives or colleagues could coordinate contributions
            and receive a pooled amount on an agreed schedule, without competitive bidding or a separate host
            commission.
          </p>
          <ol className="tc-path" aria-label="Decision path">
            {decisionPath.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="tc-callout">
            Not every promising idea deserves to become a product. My research challenged the original hypothesis,
            and I decided not to proceed with the proposed group-savings feature.
          </p>
          <p className="tc-lead">
            The no-bidding, no-separate-commission concept was not validated strongly enough to justify moving
            into development. This was not an official Slice initiative, and it did not become a launched product.
          </p>
          <dl className="tc-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img
          src={illustration}
          width={1024}
          height={960}
          alt="Illustration of a group savings jar, trusted members, a contribution plan, and a card that says pause, not to build for now."
        />
      </header>

      <div className="tc-layout">
        <nav className="tc-toc" aria-label="Case study sections">
          <p>On this page</p>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} aria-current={active === section.id ? "true" : undefined}>
                  <span>{section.number}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div>
          <details className="tc-toc-mobile">
            <summary>On this page</summary>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    {section.number} {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          <section id="idea">
            <p className="tc-num">02</p>
            <h2>Where the idea began</h2>
            <p>
              The idea started in a conversation with my mother about her experience with traditional chit funds:
              monthly auctions, member payouts and the organiser's commission.
            </p>
            <p>
              That raised a question. Could people who already trusted one another save together without
              auction-related discounts or a separate host commission?
            </p>
            <blockquote>
              A trusted-circle group-savings arrangement without competitive bidding or a separate host commission
              could offer a more attractive alternative to traditional chit funds and create a differentiated
              opportunity for Slice.
            </blockquote>
            <p>The imagined experience let a known group coordinate contributions, agree a payout schedule and track savings.</p>
            <h3>Three assumptions that had to be tested</h3>
            <div className="tc-cards tc-cards-3">
              {assumptions.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <p className="tc-note">
              The objective was not to defend the first idea. It was to find out whether a genuine unmet need
              existed, whether this alternative addressed it, and whether that could matter for customers and for
              Slice.
            </p>
          </section>

          <section id="research">
            <p className="tc-num">03</p>
            <h2>How the opportunity was explored</h2>
            <p>
              Three research activities, plus a small set of personal conversations. All of it was exploratory and
              non-representative.
            </p>
            <ol className="tc-journey">
              {researchPhases.map((phase, index) => (
                <li key={phase.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{phase.figure}</strong>
                  <h3>{phase.title}</h3>
                  <p>{phase.body}</p>
                  <p>{phase.aim}</p>
                </li>
              ))}
            </ol>
            <p className="tc-note">
              These activities surfaced questions and patterns for further validation. They did not establish
              market-wide prevalence or observed adoption.
            </p>
          </section>

          <section id="findings">
            <p className="tc-num">04</p>
            <h2>What existing participants reported</h2>
            <p>The 30-response survey was exploratory. These are themes, not market estimates.</p>
            <div className="tc-cards tc-cards-3">
              {participantThemes.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <h3>What public reviews added</h3>
            <p>
              Reviews of Shriram Chits and Kapil Chits widened the view beyond informal groups. Some reviewers
              described:
            </p>
            <ul className="tc-points">
              {reviewThemes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="tc-note">
              Public reviews are reported experiences and allegations, not independently verified facts. They also
              cannot be generalised automatically to informal groups of friends, relatives or colleagues.
            </p>
          </section>

          <section id="newcomers">
            <p className="tc-num">05</p>
            <h2>People who had never saved in a group</h2>
            <p>
              A second survey asked 50+ respondents who had never joined a chit fund or group-savings arrangement
              how they save, what they are saving for, and what would worry them about a group.
            </p>
            <div className="tc-cards tc-cards-3">
              {saverObservations.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <blockquote>
              People already have familiar ways to save. A new group-savings product needs to offer a compelling
              reason to change existing behaviour.
            </blockquote>
            <p className="tc-note">
              Stated interest is not proof of adoption, and it is not proof that someone would contribute real
              money.
            </p>
          </section>

          <section id="synthesis">
            <p className="tc-num">06</p>
            <h2>The assumption shifted</h2>
            <p>
              Set beside the surveys and the reviews, the six to seven conversations made the opening assumptions
              less convincing. Host commission was not consistently described as a major pain. Some people saw it
              as a small amount in exchange for the organiser's work. Bidding could reduce what a member received,
              but some also saw it as an accepted way to decide who got the pool that month.
            </p>
            <div className="tc-shift">
              <article>
                <h3>Where I started</h3>
                <ul>
                  {initialAssumptions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>What the evidence pointed to</h3>
                <ul>
                  {emergingPriorities.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}.</strong> {item.body}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <blockquote>
              Removing commission or bidding might simplify one aspect of the financial arrangement, but it would
              not automatically resolve deeper concerns around reliability, trust, transparency and accountability.
            </blockquote>
            <p className="tc-note">
              These were directional observations. The study does not claim that every participant shared them, or
              that they represent the market.
            </p>
          </section>

          <section id="reframing">
            <p className="tc-num">07</p>
            <h2>The problem was reframed</h2>
            <div className="tc-shift">
              <article>
                <h3>Initial framing</h3>
                <p>Reduce the cost of participating in chit funds.</p>
              </article>
              <article>
                <h3>Reframed problem</h3>
                <p>
                  How might people who save together gain greater confidence in the reliability, transparency and
                  management of their savings arrangement?
                </p>
              </article>
            </div>
            <p>
              Shared records, reminders and payout schedules could improve visibility. A digital platform could not,
              by itself, guarantee that every member would contribute on time or that a promised payout would be
              available.
            </p>
            <p>
              Existing chit arrangements, personal savings methods, and informal coordination through messaging
              apps or other tools could already meet some of those needs.
            </p>
            <blockquote>
              Would the proposed feature solve a sufficiently important problem to change user behaviour, or would
              it simply provide another way to organise group savings?
            </blockquote>
            <p className="tc-note">
              The evidence did not establish a compelling reason for users to switch, or a defensible competitive
              advantage for Slice.
            </p>
          </section>

          <section id="business">
            <p className="tc-num">08</p>
            <h2>Possible value, unresolved feasibility</h2>
            <p>These are hypotheses for Slice. They are not proven outcomes.</p>
            <div className="tc-split">
              <div>
                <h3>Hypotheses</h3>
                <div className="tc-cards">
                  {hypotheses.map((item) => (
                    <article key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <h3>Still unresolved</h3>
                <ul className="tc-points">
                  {feasibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  A real-money arrangement needs rules a user interface cannot supply. The exercise did not show how
                  many people would adopt the feature, whether retention would improve, or whether any benefit would
                  outweigh the cost and risk of operating it.
                </p>
              </div>
            </div>
          </section>

          <section id="decision" className="tc-decision-section">
            <p className="tc-num">09</p>
            <h2>Why I decided not to take this feature forward</h2>
            <div className="tc-cards tc-cards-2">
              {reasons.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <p className="tc-verdict">Decision: Pause the original feature. Do not proceed to development at this stage.</p>
            <p>
              This is not a conclusion that group savings has no market opportunity. It is a decision that the
              evidence did not justify investing in this particular solution at this stage.
            </p>
            <blockquote>
              I chose to pause the original feature rather than proceed to development. The research had identified
              broader concerns, but it had not established that removing host commission and auction-based bidding
              would address the most important unmet need.
            </blockquote>
            <p className="tc-note">
              The outcome was a reasoned product decision. It was not a launched feature, an MVP or a validated
              business model.
            </p>
          </section>

          <section id="learnings">
            <p className="tc-num">10</p>
            <h2>What I would do next, and what I learned</h2>
            <p>
              If the problem space were explored further, the next step would not be feature development. Organised
              chit-fund companies and informal trusted groups would also need to stay distinct.
            </p>
            <ol className="tc-steps">
              {nextSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
            <h3>What this changed in how I do discovery</h3>
            <ul className="tc-points">
              {learnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <blockquote>
              The goal of discovery is not to prove that an idea is worth building. It is to determine whether a
              meaningful user problem exists, whether a proposed solution addresses it, and whether the opportunity
              justifies investment.
            </blockquote>
          </section>
        </div>
      </div>

      {showTop ? (
        <a className="tc-top" href="#overview">
          Back to top
        </a>
      ) : null}
    </main>
  )
}
