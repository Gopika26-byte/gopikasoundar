import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import phone from "../assets/catchmyvibe-phone.png"

const CASE_STUDY_NOTION =
  "https://app.notion.com/p/CatchMyVibe-Multi-Agent-Travel-Planning-System-3a7160f99a888051830ce87a1a759ecc?source=copy_link"

const PRIORITISATION_NOTE =
  "https://medium.com/@gopikasoundar096/i-thought-generating-ideas-was-hard-then-i-had-to-prioritize-them-259717196205?sharedUserId=gopikasoundar096"

const problems = [
  "Agent conflicts",
  "Real-time data access",
  "User trust and transparency",
  "Budget overrun",
  "Personalisation gap",
  "Group travel coordination",
]

const actions = [
  {
    title: "Plan My Trip",
    body: "A traveller describes the trip in ordinary language. The planning agents turn that request into a personalised, budget-fit itinerary.",
  },
  {
    title: "Book & Manage",
    body: "Booking stays inside the same flow, so the traveller is not sent back across separate sites to finish what the plan already decided.",
  },
  {
    title: "Optimise My Budget",
    body: "Budget is part of the planning conversation. The case study treats overrun, hidden fees and conflicting prices as problems the budget agent has to surface.",
  },
  {
    title: "Get Local Recommendations",
    body: "Contextual recommendations include a local guide, so the trip can include the place itself and not only the reservation.",
  },
]

export function CatchMyVibeOverview() {
  return (
    <main className="mx-auto max-w-[1120px] px-5 pt-32 pb-24 sm:px-8">
      <Link to="/#work" className="text-sm text-muted hover:text-ink">
        ← Featured work
      </Link>
      <p className="eyebrow mt-8">Capstone group project · Travel · AI agents</p>
      <p className="mt-2 text-sm font-semibold text-[#6d5194]">
        End-to-end product experience & product strategy case study
      </p>
      <h1 className="display mt-4 max-w-4xl text-[clamp(2.5rem,5vw,4.2rem)] text-ink">
        CatchMyVibe: Multi-Agent Travel Planning System
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        AI-powered travel planning with specialised agents for research, bookings, budget optimisation and
        contextual recommendations.
      </p>

      <div className="mt-10 overflow-hidden rounded-[28px] border border-line bg-[#fff9f4]">
        <img
          src={phone}
          alt="CatchMyVibe phone showing a mountain trip and the four planning actions."
          width={464}
          height={560}
          className="mx-auto block w-full max-w-[26rem]"
        />
      </div>

      <div className="mt-12 max-w-3xl space-y-12">
        <section>
          <h2 className="font-serif text-3xl text-ink">The project</h2>
          <p className="mt-3 leading-relaxed text-muted">
            CatchMyVibe is a capstone group project for an AI-native travel platform. A traveller describes the
            kind of trip they want, and the system turns that request into a personalised, budget-fit itinerary.
            The product scope covers conversational intent capture, agent orchestration, real-time planning
            progress, provider-backed recommendations, budget optimisation and end-to-end booking.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-ink">Problem statement</h2>
          <p className="mt-3 leading-relaxed text-ink">
            How can the process of travel planning be simplified by designing a multi-agent system that can handle
            research, bookings, budget optimisation and contextual recommendations?
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Planning today is split across booking sites such as MakeMyTrip, Ixigo, Goibibo and Agoda. Travellers
            search again, sign in again, and compare options that do not share one view of price, availability or
            what happens when a plan changes. The case study names the pressures that come with that:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {problems.map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-white/70 px-4 py-3 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-ink">Who it is for</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Travellers who currently assemble a trip by hand, and people planning that trip together. They are
            comparing a large set of options, trying to stay inside a budget, and looking for advice that fits the
            actual dates and place.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-ink">Product solution</h2>
          <p className="mt-3 leading-relaxed text-muted">
            A multi-agent travel platform that simplifies trip planning by orchestrating specialised AI agents for
            research, bookings, budget optimisation and personalised, real-time recommendations. The aim is to
            shorten the search, make the reasoning visible, and keep the booking attached to the plan.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Recommendations are meant to use current conditions. In the case study, a beach request during monsoon
            season is the example: the agent raises a heads-up instead of offering the destination as if the
            weather were irrelevant.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-ink">How the agents work together</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Research, booking, budget and local context are separate jobs, coordinated as one plan. The traveller
            can see planning progress while the agents work. Recommendations stay tied to providers, so a
            suggestion can be followed through to a booking rather than left as an ungrounded list.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-ink">What the experience includes</h2>
          <ol className="mt-4 space-y-5">
            {actions.map((action, index) => (
              <li key={action.title}>
                <p className="text-sm font-semibold text-[#6d5194]">0{index + 1}</p>
                <h3 className="font-serif text-2xl text-ink">{action.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{action.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-ink">Product decisions</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
            <li className="border-t border-line pt-3">
              Keep research, booking and changes in one planning flow, instead of sending the traveller across a
              new site for each part of the trip.
            </li>
            <li className="border-t border-line pt-3">
              Show the reason behind a recommendation, using what is true at the time of planning.
            </li>
            <li className="border-t border-line pt-3">
              Let the trip start from a budget and a vibe, not only from a named destination.
            </li>
            <li className="border-t border-line pt-3">
              Treat local guidance as part of the trip, alongside the reservation.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            The case study also explored a wider set of ideas, including group expense splitting, local
            photographers, shared stays, self-drive rentals, travel eSIMs and support for medical-tourism
            documents. The product shown here stays with the four planning actions. The prioritisation behind that
            focus is written up in{" "}
            <a className="font-semibold text-[#6d5194] underline" href={PRIORITISATION_NOTE} target="_blank" rel="noopener noreferrer">
              I Thought Generating Ideas Was Hard. Then I Had to Prioritize Them.
            </a>
          </p>
        </section>
      </div>

      <a
        className="myntra-btn myntra-btn--line mt-12"
        href={CASE_STUDY_NOTION}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Detailed Case Study
        <ExternalLink size={15} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </main>
  )
}
