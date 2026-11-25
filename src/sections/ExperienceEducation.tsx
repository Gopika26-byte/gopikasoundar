import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Reveal } from "../components/Reveal"
import annaLogo from "../assets/anna-university.png"
import bitsomLogo from "../assets/bitsom.jpg"
import masaiLogo from "../assets/masai.png"
import srmLogo from "../assets/srm-ramapuram.png"

const duties = [
  {
    title: "Lead and mentor a team",
    body: "Guide and support L2 engineers, set priorities, and ensure timely resolution of customer issues.",
  },
  {
    title: "Bridge customers and product teams",
    body: "Conduct regular calls with customers, product specialists and development teams to understand root causes, align on solutions and drive faster resolutions.",
  },
  {
    title: "Perform in-depth analysis & troubleshooting",
    body: "Analyse incidents, identify patterns, and resolve complex issues using technical expertise and structured problem-solving.",
  },
  {
    title: "Identify and drive permanent fixes",
    body: "Spot recurring issues, share insights with product and development teams, and contribute to long-term improvements in system stability and user experience.",
  },
  {
    title: "Own support operations as a track lead",
    body: "Monitor issue progress, coordinate cross-functional activities, and ensure clear communication and on-time delivery.",
  },
]

const skills = [
  "Leadership",
  "Depth Analysis",
  "Stakeholder Management",
  "Cross-Functional Collaboration",
  "Problem Solving",
]

function Sparkles() {
  return (
    <svg className="foundation-spark" viewBox="0 0 72 48" aria-hidden="true">
      <path d="M58 6l1.4 4.2L64 12l-4.6 1.6L58 18l-1.4-4.4L52 12l4.6-1.8z" fill="#EFC56D" />
      <path d="M46 16l.8 2.4 2.4.8-2.4.8L46 22.4l-.8-2.4-2.4-.8 2.4-.8z" fill="#B995CE" />
      <path d="M66 24l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" fill="#E8B4C8" />
    </svg>
  )
}

function DeskScene() {
  return (
    <svg viewBox="0 0 240 148" role="img" aria-label="Laptop, notebook, plant and coffee">
      <rect x="18" y="78" width="46" height="36" rx="4" fill="#F6D7C8" />
      <path d="M26 88h30M26 96h22M26 104h26" stroke="#E98C76" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M148 86c8-18 22-18 22-2 0 10-8 14-11 22h-8c2-8-8-12-3-20z" fill="#C9D7B8" />
      <rect x="154" y="108" width="16" height="12" rx="2" fill="#E7C4A8" />
      <rect x="62" y="36" width="92" height="62" rx="6" fill="#F6C7B6" />
      <rect x="70" y="44" width="76" height="46" rx="3" fill="#FFF9F6" />
      <path d="M92 60l-8 8 8 8" fill="none" stroke="#E98C76" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M124 60l8 8-8 8" fill="none" stroke="#E98C76" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M114 56l-7 20" fill="none" stroke="#E98C76" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M48 100h124l-10 16H58z" fill="#E98C76" />
      <rect x="186" y="72" width="28" height="22" rx="4" fill="#E7B7C4" />
      <path d="M214 78h6a8 8 0 0 1 0 12h-6" fill="none" stroke="#E98C76" strokeWidth="1.8" />
      <path d="M194 66c2-6 6-6 4 0M204 64c2-7 6-6 4 1" fill="none" stroke="#E8C4A4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const academicCards = [
  {
    id: "srm",
    tone: "peach",
    title: "Bachelor's Degree (UG)",
    dates: "2018 – 2021",
    copy: "Built a strong foundation in computer science and core technology concepts.",
  },
  {
    id: "anna",
    tone: "lavender",
    title: "Master of Computer Science (PG)",
    dates: "2022 – 2024",
    copy: "Deepened my technical expertise and problem-solving skills with a focus on real-world applications.",
  },
  {
    id: "bitsom",
    tone: "peach",
    title: "Product Management with Generative & Agentic AI",
    dates: "Jan 2026 – Nov 2026",
    status: "Completed",
    copy: "A hands-on, industry-focused program on product management with GenAI and Agentic AI.",
  },
] as const

function AcademicCards() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="edu-grid">
      {academicCards.map((card) => {
        const open = openId === card.id
        const panelId = `education-${card.id}`
        return (
          <article key={card.id} className={`edu-card edu-card--${card.tone}${open ? " is-open" : ""}`}>
            <h3 className="edu-card-heading">
              <button
                type="button"
                className="edu-card-toggle"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId((current) => (current === card.id ? null : card.id))}
              >
                {card.id === "srm" ? (
                  <span className="edu-logo edu-logo--srm">
                    <img src={srmLogo} alt="SRM Institute of Science and Technology" />
                  </span>
                ) : null}
                {card.id === "anna" ? (
                  <span className="edu-logo">
                    <img src={annaLogo} alt="Anna University" />
                  </span>
                ) : null}
                {card.id === "bitsom" ? (
                  <span className="edu-logo edu-logo--pair">
                    <img src={bitsomLogo} alt="BITSOM, BITS School of Management" />
                    <span className="edu-logo-rule" aria-hidden="true" />
                    <img src={masaiLogo} alt="MASAI School" />
                  </span>
                ) : null}
                <span className="edu-title">{card.title}</span>
                <span className="edu-foot">
                  <span className="edu-date">
                    <CalendarIcon />
                    {card.dates}
                  </span>
                  {"status" in card ? (
                    <span className="edu-done">
                      <span aria-hidden="true">✓</span>
                      {card.status}
                    </span>
                  ) : null}
                </span>
                <span className="edu-arrow" aria-hidden="true">
                  <ChevronDown size={15} strokeWidth={1.75} />
                </span>
                <span id={panelId} className="edu-detail" role="region" aria-hidden={!open}>
                  <span className="edu-detail-inner">{card.copy}</span>
                </span>
              </button>
            </h3>
          </article>
        )
      })}
    </div>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2" y="3" width="12" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 6.5h12M5 2v2.5M11 2v2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function ExperienceEducationSection() {
  return (
    <section id="experience" className="foundation" aria-labelledby="experience-heading">
      <div className="foundation-inner mx-auto max-w-[1120px] px-5 sm:px-8">
        <Reveal id="experience-start">
          <div className="foundation-block">
            <div className="foundation-kicker">
              <p>Experience</p>
              <span />
            </div>
            <h2 id="experience-heading" className="display foundation-heading">
              What I Do Currently
            </h2>
            <div className="foundation-panel">
              <Sparkles />
              <aside className="foundation-side">
                <h3 className="display foundation-company">Cognizant</h3>
                <p className="foundation-tagline">Technology solutions for a healthier tomorrow.</p>
                <div className="foundation-scene">
                  <DeskScene />
                </div>
                <div className="foundation-role-meta">
                  <CalendarIcon />
                  <div>
                    <p className="foundation-role-name">Technical Support Engineer</p>
                    <p className="foundation-role-dates">2021 – Present</p>
                    <p className="foundation-role-status">
                      <span />
                      Currently working
                    </p>
                  </div>
                </div>
              </aside>
              <div className="foundation-main">
                <h3 className="display foundation-role-title">Technical Support Engineer</h3>
                <p className="foundation-intro">
                  Supporting 100+ applications in the agriculture domain, I work at the intersection of
                  customers, product and development teams to solve complex issues and improve service quality.
                </p>
                <ul className="foundation-duties">
                  {duties.map((duty) => (
                    <li key={duty.title}>
                      <h4>{duty.title}</h4>
                      <p>{duty.body}</p>
                    </li>
                  ))}
                </ul>
                <div className="foundation-skills">
                  <p>
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M8 1.5l.8 2.4 2.5.4-1.9 1.6.6 2.4L8 7.2 5.9 8.3l.6-2.4L4.7 4.3l2.5-.4z" fill="currentColor" />
                    </svg>
                    Key skills
                  </p>
                  <ul>
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="foundation-block foundation-block--education" id="education">
          <div className="foundation-kicker">
            <p>Education</p>
            <span />
          </div>
          <h2 className="display foundation-heading">My Academic Foundation</h2>
          <AcademicCards />
        </div>
      </div>
    </section>
  )
}
