import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import phone from "../../assets/catchmyvibe-phone.png"
import "./caseStudy.css"
import {
  agentGroups,
  audiences,
  competitorConcerns,
  deterministicNodes,
  differentiators,
  epics,
  facts,
  frictions,
  futureScope,
  interviews,
  journey,
  launchStages,
  launchTargets,
  metricGroups,
  moscow,
  risks,
  roadmap,
  roles,
  sections,
  stack,
  targets,
  tests,
  trace,
} from "./caseContent"

export function CatchMyVibeCaseStudy() {
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
      "CatchMyVibe is a four-person capstone case study for a conversational, multi-agent travel planner. Targets on this page are proposed, not achieved results.",
    )
    return () => {
      if (created) meta?.remove()
      else if (previous) meta?.setAttribute("content", previous)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640)
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
    <main className="cmv-study">
      <div className="cmv-study-bar">
        <Link to="/#work">Back to portfolio</Link>
        <a href="#introduction">CatchMyVibe</a>
      </div>

      <header className="cmv-hero" id="introduction">
        <div>
          <p className="cmv-kicker">Capstone group project · Travel technology · AI agents</p>
          <p className="cmv-project">CatchMyVibe</p>
          <h1>Multi-Agent Travel Planning System</h1>
          <p className="cmv-tagline">Tell me the vibe. I’ll build the trip.</p>
          <p className="cmv-lead">
            A conversational travel-planning concept that brings research, recommendations, itinerary creation,
            budget optimisation and booking preparation into one coordinated experience.
          </p>
          <dl className="cmv-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="cmv-note">
            The product role in the four-person plan covers vision, roadmap, stakeholder communication, sprint
            planning, user stories and testing coordination. This page is written from that product perspective.
            CatchMyVibe is a group capstone, not a product one person built alone.
          </p>
        </div>
        <img
          src={phone}
          width={464}
          height={560}
          alt="CatchMyVibe phone: plan a trip with a team of AI agents, then review Plan My Trip, Book and Manage, Optimise My Budget, and Get Local Recommendations."
        />
      </header>

      <div className="cmv-layout">
        <nav className="cmv-toc" aria-label="Case study sections">
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

        <div className="cmv-body">
          <section id="summary">
            <p className="cmv-num">02</p>
            <h2>One conversation, then a plan the traveller can inspect.</h2>
            <p>
              CatchMyVibe explores how a conversational, multi-agent system could simplify end-to-end travel
              planning. Destination research, transport, accommodation, activities, dining, the itinerary and the
              budget sit in one guided experience.
            </p>
            <p>
              Planning usually means switching between search engines, booking platforms, maps, reviews,
              spreadsheets and group chats. The proposed experience starts with a natural-language request. It
              extracts intent, asks only for missing essentials, coordinates specialist agents, builds a day-wise
              itinerary, calculates and validates the budget, and lets the traveller review and edit before a booking
              workflow.
            </p>
            <blockquote>
              Replace fragmented, form-heavy travel planning with one conversation that produces a personalised,
              budget-aware itinerary users can inspect, edit and approve.
            </blockquote>
            <p className="cmv-note">
              This is a product concept and a capstone MVP. Planned capabilities and targets are kept separate
              from verified production outcomes.
            </p>
          </section>

          <section id="problem">
            <p className="cmv-num">03</p>
            <h2>Travel planning is fragmented long before the trip begins.</h2>
            <p>
              The core problem is the effort of researching, comparing and coordinating a trip across many
              services. Travellers use separate platforms for flights, trains, buses, hotels, activities, restaurants,
              weather and local transport, then combine the information themselves.
            </p>
            <div className="cmv-cards">
              {frictions.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <h3 className="cmv-sub">What the competitor review recorded</h3>
            <p>
              The initial review looked at MakeMyTrip, Goibibo and Agoda. The submission recorded these
              concerns. They are the issues in the project research, not a fresh audit of those platforms, and the
              source does not assign each issue to one brand.
            </p>
            <ul className="cmv-pills">
              {competitorConcerns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="cmv-jobs">
              <p>
                <strong>Functional job.</strong> Discover, compare, customise and book relevant travel options in one
                place.
              </p>
              <p>
                <strong>Emotional job.</strong> Reduce stress and feel confident that the choice fits the needs and the
                budget.
              </p>
              <p>
                <strong>Personal job.</strong> “I want to plan a great trip without wasting time” and “I want control
                without doing all the work.”
              </p>
            </div>
            <p className="cmv-statement">
              How can travel planning be simplified by a multi-agent system that can handle research, bookings,
              budget optimisation and contextual recommendations?
            </p>
          </section>

          <section id="research">
            <p className="cmv-num">04</p>
            <h2>Understanding different traveller contexts.</h2>
            <p>
              Five semi-structured interviews covered distinct ways of travelling. People described a recent trip,
              the tools they used, how long planning took, where it snagged, and what would make an AI-assisted
              plan feel trustworthy.
            </p>
            <div className="cmv-research">
              {interviews.map((person) => (
                <article key={person.name}>
                  <span className="cmv-avatar" aria-hidden="true">
                    {person.name.slice(0, 1)}
                  </span>
                  <p className="cmv-context">{person.context}</p>
                  <h3>
                    {person.name} <span>{person.age}</span>
                  </h3>
                  <p>{person.trip}</p>
                  <p>
                    <strong>Planning time.</strong> {person.time}
                  </p>
                  <p>{person.friction}</p>
                </article>
              ))}
            </div>
            <div className="cmv-cards cmv-cards--two">
              <article>
                <h3>The same burden, different priorities</h3>
                <p>
                  People used a mix of Google, YouTube, Maps, MakeMyTrip, Booking.com, Excel, WhatsApp,
                  Instagram, Airbnb, Skyscanner, IRCTC, Hostelworld, Reddit and email. Plans lived in Docs, sheets,
                  chats, notes and email threads.
                </p>
                <p>
                  All five interviews included comparison, coordination or information-management effort. What
                  mattered most changed with the trip: a friend group, a couple, parents, a solo backpacker, or a
                  family abroad.
                </p>
              </article>
              <article className="cmv-limit">
                <h3>Research boundary</h3>
                <p>
                  Five interviews are directional qualitative evidence. They are not a statistically representative
                  picture of the travel market. The source has individual interview notes. It does not report a
                  quantified survey sample or validated market-wide percentages.
                </p>
              </article>
            </div>
          </section>

          <section id="decisions">
            <p className="cmv-num">05</p>
            <h2>The opportunity was not simply more recommendations. It was less coordination.</h2>
            <p>
              Participants were interested in AI recommendations when they could review, edit or approve them.
              The itinerary is therefore a draft, not an irreversible decision.
            </p>
            <ol className="cmv-trace">
              {trace.map((item) => (
                <li key={item.friction}>
                  <p>{item.friction}</p>
                  <span aria-hidden="true">→</span>
                  <p>{item.response}</p>
                </li>
              ))}
            </ol>
            <blockquote>
              AI should do the research and coordination; the traveller should retain control over the plan and the
              final booking decision.
            </blockquote>
          </section>

          <section id="strategy">
            <p className="cmv-num">06</p>
            <h2>The trip planner in the group — without the planning workload.</h2>
            <p>
              The customer line in the project is: “That one ‘Trip Planner’ person in every gang — it’s your time to
              relax.” The brand line is shorter: “Tell me the vibe. I’ll build the trip.”
            </p>
            <p>
              CatchMyVibe is for travellers who know the feeling they want and do not want to do all the research.
              A short conversation becomes an itinerary that can be inspected, changed and budgeted.
            </p>
            <div className="cmv-cards cmv-cards--two">
              {audiences.map((item) => (
                <article key={item.label}>
                  <p className="cmv-context">{item.label} audience</p>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <article className="cmv-promise">
              <p className="cmv-context">Core promise</p>
              <p>
                A real, bookable plan that fits the budget, with transparent prices and availability rather than
                invented confirmations.
              </p>
            </article>
            <ul className="cmv-pills">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Traditional platforms often hand over separate options to compare. CatchMyVibe aims to coordinate
              that work. The tone is warm, capable, calm and straight-talking: a well-travelled friend, not a
              hype-driven sales assistant. Ask one friendly question at a time, explain a change clearly, and be
              honest when information needs attention.
            </p>
          </section>

          <section id="journey">
            <p className="cmv-num">07</p>
            <h2>From one sentence to a plan the traveller can own.</h2>
            <p className="cmv-prompt">“Plan a 5-day Goa trip from Chennai for 4 people under ₹50,000.”</p>
            <p>
              From that sentence the system looks for origin, destination, dates, traveller count, budget and
              interests. It asks a follow-up only when an essential detail is missing.
            </p>
            <ol className="cmv-journey">
              {journey.map((step) => (
                <li key={step.n}>
                  <span>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
            <article className="cmv-promise">
              <p className="cmv-context">Impact analysis</p>
              <p>
                When one part of the plan changes, Impact Analysis identifies which components need to run
                again. The whole itinerary is not rebuilt by default.
              </p>
            </article>
          </section>

          <section id="architecture">
            <p className="cmv-num">08</p>
            <h2>Use language models for reasoning. Use deterministic logic for money and rules.</h2>
            <p>
              Specialist agents interpret intent, organise options, compose recommendations and explain the
              plan. Deterministic nodes own exact calculations, validation rules and itinerary structure. The source
              specifies 15 specialist agents, including separate Flight, Train and Bus agents, and four deterministic
              nodes.
            </p>
            <div className="cmv-arch-legend">
              <span className="is-agent">AI specialist agent</span>
              <span className="is-rule">Deterministic node</span>
            </div>
            <div className="cmv-arch">
              <p className="cmv-arch-io">Traveller input, in ordinary language</p>
              {agentGroups.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map(([name, body]) => (
                      <li key={name}>
                        <strong>{name}</strong>
                        <span>{body}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="is-rule">
                <h3>Deterministic nodes</h3>
                <ul>
                  {deterministicNodes.map(([name, body]) => (
                    <li key={name}>
                      <strong>{name}</strong>
                      <span>{body}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="cmv-arch-io">A reviewable itinerary, then the traveller’s decision</p>
            </div>
            <p>
              The design does not ask a language model to invent fares, availability or booking status. Prices and
              hard constraints are meant to come from deterministic logic and provider-backed information.
            </p>
          </section>

          <section id="scope">
            <p className="cmv-num">09</p>
            <h2>Prove the core planning loop before expanding the travel ecosystem.</h2>
            <p>
              MoSCoW keeps itinerary generation, budget optimisation, transport and accommodation
              recommendations, and one planning place in the MVP. Those are the jobs the interviews made
              painful. Weather alerts, group tools and a local-guide marketplace can wait.
            </p>
            <div className="cmv-moscow">
              {moscow.map((group) => (
                <article key={group.priority} className={`is-${group.tone}`}>
                  <h3>{group.priority}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <h3 className="cmv-sub">Future, not MVP</h3>
            <ul className="cmv-pills">
              {futureScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="cmv-note">
              The MVP also includes progressive itinerary updates, trip context, partial replanning, undo and
              version history, traveller details, booking references, partial booking failure handling, saved trips and
              a post-booking Concierge. Booking in the MVP is a simulation with mock providers.
            </p>
          </section>

          <section id="requirements">
            <p className="cmv-num">10</p>
            <h2>Requirements the traveller can test.</h2>
            <p>
              The backlog is organised as epics and user stories, with priority, story points and acceptance
              criteria. The highest-priority stories are about creating a trip, generating a reviewable itinerary,
              keeping the budget visible, allowing edits, and refusing false booking information.
            </p>
            <div className="cmv-epics">
              {epics.map((group) => (
                <details key={group.epic}>
                  <summary>{group.epic}</summary>
                  <ul>
                    {group.stories.map(([title, meta, criteria]) => (
                      <li key={title}>
                        <strong>{title}</strong>
                        <span>{meta}</span>
                        <p>{criteria}</p>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
            <div className="cmv-cards cmv-cards--two">
              <article>
                <h3>What has to be true</h3>
                <p>
                  A P0 story: “As a traveller, I want to describe my trip naturally so that I don’t need lengthy forms.”
                  Acceptance includes extracting origin, destination, dates, travellers, budget and interests.
                </p>
                <p>A P0 trust requirement: the AI must not invent provider information, prices or bookings.</p>
              </article>
              <article>
                <h3>When something goes wrong</h3>
                <p>
                  One failed planning component should not erase the trip. A price increase needs approval. A
                  sold-out item needs an alternative. A partial booking failure needs a refund or a replacement, and
                  payment success is not the same thing as a booking confirmation.
                </p>
              </article>
            </div>
          </section>

          <section id="delivery">
            <p className="cmv-num">11</p>
            <h2>A planned 16-week build, with four roles.</h2>
            <p>
              The proposed stack keeps product design, the conversation, agent orchestration, backend logic,
              the budget and validation engines, product management and quality assurance with the team.
              Payment gateways, live travel inventory, cloud infrastructure, security audits and legal advice are
              external, non-core services.
            </p>
            <div className="cmv-stack">
              {stack.map(([layer, tech, purpose]) => (
                <article key={layer}>
                  <h3>{layer}</h3>
                  <p>{tech}</p>
                  <p>{purpose}</p>
                </article>
              ))}
            </div>
            <ol className="cmv-road">
              {roadmap.map(([weeks, title, body]) => (
                <li key={weeks}>
                  <span>Weeks {weeks}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <div className="cmv-cards">
              {roles.map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <p className="cmv-note">
              Agile Scrum, in two-week sprints, is the planned method because the AI behaviour and the backlog
              were expected to change with feedback. The 16-week timeline is a planned schedule. It is not a
              measured production delivery, and it is not a claim that one person shipped the product.
            </p>
          </section>

          <section id="trust">
            <p className="cmv-num">12</p>
            <h2>Recommendations can be generative. Money and rules cannot.</h2>
            <div className="cmv-split">
              <article>
                <p className="cmv-context">Language model</p>
                <ul>
                  <li>Read the request and ask for what is missing.</li>
                  <li>Organise options and explain why something fits.</li>
                  <li>Draft the day-by-day narrative of the plan.</li>
                  <li>Answer questions after booking, from the confirmed trip.</li>
                </ul>
              </article>
              <article className="is-rule">
                <p className="cmv-context">Deterministic logic</p>
                <ul>
                  <li>Category totals, taxes, fees and a buffer, as exact figures.</li>
                  <li>Feasibility, timing, opening hours and pace.</li>
                  <li>A recheck of price and availability before confirmation.</li>
                  <li>No invented fares, availability or booking confirmations.</li>
                </ul>
              </article>
            </div>
            <p>
              Budget optimisation may swap or trim selections so the plan fits what the traveller stated. The
              traveller still approves the plan, and any price change, before a booking is treated as final.
            </p>
          </section>

          <section id="measurement">
            <p className="cmv-num">13</p>
            <h2>Trustworthiness is a product requirement, not a polish item.</h2>
            <div className="cmv-cards">
              {tests.map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <h3 className="cmv-sub">Proposed readiness targets</h3>
            <p className="cmv-note">These are targets in the plan. The source does not show them as achieved results.</p>
            <ul className="cmv-metrics">
              {targets.map(([label, value]) => (
                <li key={label}>
                  <span>Proposed</span>
                  <strong>{value}</strong>
                  <p>{label}</p>
                </li>
              ))}
            </ul>
            <div className="cmv-cards">
              {metricGroups.map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <h3 className="cmv-sub">Risks and the planned control</h3>
            <ol className="cmv-trace">
              {risks.map(([risk, control]) => (
                <li key={risk}>
                  <p>{risk}</p>
                  <span aria-hidden="true">→</span>
                  <p>{control}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="launch">
            <p className="cmv-num">14</p>
            <h2>Build trust before scaling acquisition.</h2>
            <p>
              Owned channels in the plan are the website, web app, blog, email, social and the AI Concierge.
              Earned channels are reviews, referrals, travel blogs, PR and Product Hunt. Paid channels are search,
              social, retargeting and influencers. Fulfilment depends on travel providers and payment partners.
            </p>
            <ol className="cmv-road">
              {launchStages.map(([title, when, body]) => (
                <li key={title}>
                  <span>{when}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <div className="cmv-cards cmv-cards--two">
              <article>
                <h3>Primary growth loop</h3>
                <p>
                  A shareable AI itinerary goes out through WhatsApp or social channels. Someone can view the
                  plan and create their own.
                </p>
              </article>
              <article>
                <h3>Collaborative loop</h3>
                <p>
                  Companions can be invited to vote on hotels, suggest activities, approve a budget, edit the
                  itinerary and split expenses.
                </p>
              </article>
            </div>
            <p>
              Retention levers in the plan: saved trips, preference-based recommendations, loyalty credits, smart
              re-engagement and continued Concierge support.
            </p>
            <h3 className="cmv-sub">First-90-day figures are launch targets</h3>
            <ul className="cmv-metrics">
              {launchTargets.map(([label, value]) => (
                <li key={label}>
                  <span>Planned target</span>
                  <strong>{value}</strong>
                  <p>{label}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="reflection">
            <p className="cmv-num">15</p>
            <h2>The product challenge is orchestration with trust and user control.</h2>
            <p>
              The case study holds customer discovery, product strategy, an AI-native experience, requirements,
              prioritisation, system thinking, a delivery plan, measurement and a go-to-market plan in one place.
              The central decision is to make a complex workflow feel simple without hiding the complexity or
              taking the decision away from the traveller.
            </p>
            <div className="cmv-cards">
              <article>
                <h3>Why validation is separate from the model</h3>
                <p>
                  A convincing itinerary is not enough if the price, timing, availability or booking status cannot be
                  relied on. Exact money and hard rules stay outside the language model.
                </p>
              </article>
              <article>
                <h3>Why the traveller keeps control</h3>
                <p>
                  The interviews supported recommendations that can be reviewed, edited and approved. The
                  plan is a draft until the traveller says otherwise.
                </p>
              </article>
              <article>
                <h3>Why context changes the answer</h3>
                <p>
                  A good stay for a backpacker can be the wrong stay for a family travelling with parents. Budget,
                  group, place, pace and interests have to travel together.
                </p>
              </article>
            </div>
            <article className="cmv-limit">
              <h3>What remains to validate</h3>
              <p>
                The source does not establish measured usability results, production booking performance, live
                provider integrations, achieved conversion or retention, or product-market fit. Those are open
                validation questions, not accomplishments.
              </p>
            </article>
            <p className="cmv-close">Tell me the vibe. I’ll build the trip.</p>
          </section>
        </div>
      </div>

      {showTop ? (
        <a className="cmv-top" href="#introduction">
          Back to top
        </a>
      ) : null}
    </main>
  )
}
