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

function StudyScene() {
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label="Graduation cap on a stack of books">
      <path d="M156 78c10-16 24-14 20 2-2 8-10 12-12 20h-10c3-8-6-12 2-22z" fill="#C9D7B8" />
      <rect x="162" y="100" width="14" height="10" rx="2" fill="#E7C4A8" />
      <rect x="36" y="104" width="112" height="22" rx="4" fill="#E4D4F2" />
      <rect x="44" y="82" width="104" height="22" rx="4" fill="#CDB6E4" />
      <rect x="40" y="60" width="108" height="22" rx="4" fill="#F3E7FA" />
      <path d="M96 28l48 16-48 16-48-16z" fill="#B995CE" />
      <path d="M96 44v22" stroke="#8E6EAE" strokeWidth="2" strokeLinecap="round" />
      <circle cx="96" cy="68" r="3" fill="#EFC56D" />
      <path d="M140 46c8 10 6 20-2 24" fill="none" stroke="#EFC56D" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="136" cy="72" r="2.4" fill="#EFC56D" />
    </svg>
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
          <div className="foundation-panel">
            <Sparkles />
            <aside className="foundation-side">
              <h3 className="display foundation-aside-title">
                A blend of Technology, Depth and Product Thinking
              </h3>
              <p className="foundation-aside-copy">
                My academic journey has given me a strong foundation in technology, problem-solving and product
                thinking.
              </p>
              <div className="foundation-scene">
                <StudyScene />
              </div>
            </aside>
            <div className="foundation-main">
              <article className="foundation-qual">
                <div>
                  <h3>Product Management with Generative & Agentic AI</h3>
                  <div className="foundation-pills">
                    <p className="foundation-pill">
                      <CalendarIcon />
                      Jan 2026 – Nov 2026
                    </p>
                    <p className="foundation-pill foundation-pill--done">
                      <span aria-hidden="true">✓</span>
                      Completed in November 2026
                    </p>
                  </div>
                  <p className="foundation-qual-copy">
                    A hands-on, industry-focused program on product management with GenAI and Agentic AI.
                  </p>
                </div>
                <div className="foundation-brand foundation-brand--stack">
                  <img src={bitsomLogo} alt="BITSOM, BITS School of Management" />
                  <p>Learning Partner</p>
                  <img src={masaiLogo} alt="MASAI School" />
                </div>
              </article>
              <article className="foundation-qual">
                <div>
                  <h3>Master of Computer Science (PG)</h3>
                  <p className="foundation-pill">
                    <CalendarIcon />
                    2022 – 2024
                  </p>
                  <p className="foundation-qual-copy">
                    Deepened my technical expertise and problem-solving skills with a focus on real-world
                    applications.
                  </p>
                </div>
                <div className="foundation-brand">
                  <img src={annaLogo} alt="Anna University" />
                </div>
              </article>
              <article className="foundation-qual">
                <div>
                  <h3>Bachelor's Degree (UG)</h3>
                  <p className="foundation-pill">
                    <CalendarIcon />
                    2018 – 2021
                  </p>
                  <p className="foundation-qual-copy">
                    Built a strong foundation in computer science and core technology concepts.
                  </p>
                </div>
                <div className="foundation-brand foundation-brand--srm">
                  <img src={srmLogo} alt="SRM Institute of Science and Technology" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
