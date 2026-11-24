import { Reveal } from "../components/Reveal"
import { about } from "../data/site"
import bitsomLogo from "../assets/bitsom-lockup.png"

function LaptopMark() {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <rect x="8" y="6" width="36" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16h8M16 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 34h48c2 0 3 2 2 3.5H2C1 36 2 34 4 34z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function BulbMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M32 8a16 16 0 0 1 8 29.6V42H24v-4.4A16 16 0 0 1 32 8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M26 46h12M28 50h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M32 16v8M24 22l2 2M40 22l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function LayersMark() {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <path d="M8 16l24-8 24 8-24 8-24-8z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 22l18 6 18-6M14 28l18 6 18-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

const marks = {
  peach: LaptopMark,
  cream: BulbMark,
  lavender: LayersMark,
}

function JourneyPath() {
  return (
    <svg className="journey-path" viewBox="0 0 1200 150" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="journey-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E98C76" />
          <stop offset="48%" stopColor="#EFC56D" />
          <stop offset="100%" stopColor="#B995CE" />
        </linearGradient>
      </defs>
      <path
        className="journey-path-line"
        d="M36 92 C 150 92, 210 36, 330 62 S 500 128, 620 78 S 790 24, 940 66 S 1080 118, 1164 62"
        fill="none"
        stroke="url(#journey-stroke)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="1.5 11"
      />
      <circle cx="168" cy="78" r="8" fill="#fffaf7" stroke="#E98C76" strokeWidth="2.6" />
      <circle cx="600" cy="86" r="8" fill="#fffaf7" stroke="#EFC56D" strokeWidth="2.6" />
      <circle cx="980" cy="58" r="8" fill="#fffaf7" stroke="#B995CE" strokeWidth="2.6" />
    </svg>
  )
}

export function About() {
  const closingStart = about.closing.indexOf(about.closingEmphasis)

  return (
    <section id="about" className="journey-about" aria-labelledby="about-heading">
      <div className="journey-land" aria-hidden="true">
        <span className="journey-hill journey-hill--left" />
        <span className="journey-hill journey-hill--right" />
      </div>

      <div className="journey-about-inner mx-auto max-w-[1120px] px-5 sm:px-8">
        <Reveal>
          <p className="journey-kicker">{about.kicker}</p>
          <h2 id="about-heading" className="display journey-heading">
            {about.headingBefore}{" "}
            <span className="journey-heading-line">{about.headingAfter}</span>
          </h2>
          <p className="journey-lead">{about.lead}</p>
        </Reveal>

        <div className="journey-stage">
          <JourneyPath />
          <span className="journey-flag-pin" aria-hidden="true">
            <svg viewBox="0 0 28 42">
              <path d="M7 3v36" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              <path d="M7 5h16l-4.2 6.2L23 17.4H7" fill="currentColor" />
            </svg>
          </span>
          <div className="journey-milestones">
            {about.milestones.map((milestone, index) => {
              const Mark = marks[milestone.tone]
              return (
                <Reveal key={milestone.step} className="journey-reveal" delay={index * 90}>
                  <article className={`journey-milestone journey-milestone--${milestone.tone}`}>
                    <div className={`journey-mark journey-mark--${milestone.tone}`}>
                      <Mark />
                    </div>
                    <div className="journey-label">
                      <span className="journey-index">{milestone.step}</span>
                      <p>{milestone.eyebrow}</p>
                    </div>
                    <h3 className="display">{milestone.title}</h3>
                    <p className="journey-body">{milestone.body}</p>
                    {"quote" in milestone && milestone.quote ? (
                      <blockquote className="journey-quote">{milestone.quote}</blockquote>
                    ) : null}
                    {milestone.tone === "lavender" ? (
                      <div className="journey-credential">
                        <img
                          src={bitsomLogo}
                          alt="BITSOM, BITS School of Management"
                          width={610}
                          height={942}
                        />
                        <div>
                          <p className="journey-credential-label">{about.education.label}</p>
                          <p className="journey-credential-program">{about.education.qualification}</p>
                          <p className="journey-credential-label">{about.education.fromLabel}</p>
                          <p className="journey-credential-school">{about.education.institution}</p>
                        </div>
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal delay={180}>
          <p className="journey-close">
            {closingStart === -1 ? (
              about.closing
            ) : (
              <>
                {about.closing.slice(0, closingStart)}
                <em>{about.closingEmphasis}</em>
                {about.closing.slice(closingStart + about.closingEmphasis.length)}
              </>
            )}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
