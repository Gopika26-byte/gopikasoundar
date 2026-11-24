import { Reveal } from "../components/Reveal"
import { about } from "../data/site"
import bitsomLogo from "../assets/bitsom-lockup.png"

function LaptopMark() {
  return (
    <svg viewBox="0 0 112 86" role="img" aria-label="Laptop showing code">
      <rect x="22" y="6" width="68" height="48" rx="6" fill="#F6C7B6" />
      <rect x="28" y="12" width="56" height="36" rx="3" fill="#FFF9F6" />
      <path d="M44 24l-7 7 7 7" fill="none" stroke="#E98C76" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M68 24l7 7-7 7" fill="none" stroke="#E98C76" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 22l-6 18" fill="none" stroke="#E98C76" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 58h96l-8 14H16z" fill="#E98C76" />
      <path d="M46 62h20" stroke="#FFF6F2" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}

function BulbMark() {
  return (
    <svg viewBox="0 0 88 96" role="img" aria-label="Lightbulb">
      <path d="M44 6v8M16 26l6 5M72 26l-6 5M10 48h8M70 48h8" stroke="#E7C56A" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M44 16a22 22 0 0 1 12 40.2V64H32v-7.8A22 22 0 0 1 44 16z" fill="#F8E3A4" stroke="#E2B85A" strokeWidth="1.6" />
      <path d="M36 68h16M38 73h12M40 78h8" stroke="#E2B85A" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  )
}

function BooksMark() {
  return (
    <svg viewBox="0 0 96 80" role="img" aria-label="Stack of books">
      <rect x="12" y="52" width="72" height="16" rx="3.5" fill="#CDB6E4" />
      <rect x="16" y="34" width="66" height="16" rx="3.5" fill="#B995CE" />
      <rect x="14" y="16" width="68" height="16" rx="3.5" fill="#E4D4F2" />
      <path d="M22 21h30M22 25h18" stroke="#FFF9F6" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function TargetBriefcase() {
  return (
    <svg viewBox="0 0 220 168" role="img" aria-label="Target with an arrow in the centre and a briefcase">
      <circle cx="86" cy="78" r="58" fill="#F8D5C8" />
      <circle cx="86" cy="78" r="43" fill="#FFF8F5" />
      <circle cx="86" cy="78" r="28" fill="#F0A894" />
      <circle cx="86" cy="78" r="15" fill="#FFF8F5" />
      <circle cx="86" cy="78" r="6" fill="#E98C76" />
      <path d="M158 24 96 72" stroke="#C9846C" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M92 66l18 2-8 14z" fill="#C9846C" />
      <path d="M158 24l-8 16 18 1z" fill="#EFC56D" />
      <path d="M146 14l8 7M164 12l3 9" stroke="#E7C56A" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="112" y="102" width="76" height="46" rx="8" fill="#CDB6E4" />
      <path d="M136 102v-8a14 11 0 0 1 28 0v8" fill="none" stroke="#B995CE" strokeWidth="3.2" />
      <rect x="144" y="118" width="12" height="8" rx="2" fill="#FFF8F5" />
    </svg>
  )
}

const marks = {
  peach: LaptopMark,
  cream: BulbMark,
  lavender: BooksMark,
}

function JourneyPath() {
  return (
    <svg className="journey-path" viewBox="0 0 1100 72" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="journey-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E98C76" />
          <stop offset="48%" stopColor="#EFC56D" />
          <stop offset="100%" stopColor="#B995CE" />
        </linearGradient>
      </defs>
      <path
        className="journey-path-line"
        d="M28 46 C 100 46, 130 26, 184 40 S 340 64, 420 44 S 490 20, 550 38 S 690 62, 780 40 S 850 18, 916 36 S 1000 54, 1072 38"
        fill="none"
        stroke="url(#journey-stroke)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
      <circle cx="184" cy="40" r="8" fill="#fffaf7" stroke="#E98C76" strokeWidth="2.6" />
      <circle cx="550" cy="38" r="8" fill="#fffaf7" stroke="#EFC56D" strokeWidth="2.6" />
      <circle cx="916" cy="36" r="8" fill="#fffaf7" stroke="#B995CE" strokeWidth="2.6" />
    </svg>
  )
}

export function About() {
  return (
    <>
      <section id="about" className="journey-about" aria-labelledby="about-heading">
        <div className="journey-about-inner mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal>
            <div className="journey-kicker-row">
              <p className="journey-about-kicker">{about.kicker}</p>
              <span className="journey-kicker-line" aria-hidden="true" />
            </div>
            <h2 id="about-heading" className="display journey-heading">
              {about.headingBefore}{" "}
              <span className="journey-heading-line">{about.headingAfter}</span>
            </h2>
          </Reveal>

          <div className="journey-stage">
            <div className="journey-milestones">
              {about.milestones.map((milestone, index) => {
                const Mark = marks[milestone.tone]
                return (
                  <Reveal key={milestone.step} className="journey-reveal" delay={index * 90}>
                    <article className={`journey-milestone journey-milestone--${milestone.tone}`}>
                      <div className="journey-copy">
                        <div className="journey-label">
                          <span className="journey-index">{milestone.step}</span>
                          <p>{milestone.eyebrow}</p>
                        </div>
                        <h3 className="display">{milestone.title}</h3>
                        <p className="journey-body">{milestone.body}</p>
                      </div>
                      <div className={`journey-mark journey-mark--${milestone.tone}`}>
                        <Mark />
                      </div>
                      {milestone.tone === "lavender" ? (
                        <div className="journey-credential">
                          <img
                            src={bitsomLogo}
                            alt="BITSOM, BITS School of Management"
                            width={610}
                            height={942}
                          />
                          <span className="journey-credential-rule" aria-hidden="true" />
                          <p className="journey-credential-program">
                            {about.qualification.map((line) => (
                              <span key={line}>{line}</span>
                            ))}
                          </p>
                        </div>
                      ) : null}
                    </article>
                  </Reveal>
                )
              })}
            </div>
            <JourneyPath />
          </div>
        </div>
      </section>

      <section className="journey-goal" aria-labelledby="career-goal-heading">
        <div className="journey-about-inner mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal>
            <div className="journey-goal-panel">
              <div className="journey-goal-art">
                <TargetBriefcase />
              </div>
              <span className="journey-goal-rule" aria-hidden="true" />
              <div className="journey-goal-copy">
                <h2 id="career-goal-heading" className="display">
                  {about.goalHeading}
                </h2>
                <p>{about.goalBody}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
