import { ArrowRight } from "lucide-react"
import { Reveal } from "../components/Reveal"
import { about } from "../data/site"
import bitsomLogo from "../assets/bitsom-lockup.png"
import portrait from "../assets/gopika-portrait.png"

type ParagraphVariant = "body" | "turn" | "closing"

function NoteParagraph({
  text,
  emphasis,
  variant = "body",
}: {
  text: string
  emphasis?: string
  variant?: ParagraphVariant
}) {
  const className = `note-p note-p--${variant}`
  if (!emphasis || !text.includes(emphasis)) {
    return <p className={className}>{text}</p>
  }

  const start = text.indexOf(emphasis)
  return (
    <p className={className}>
      {text.slice(0, start)}
      <em>{emphasis}</em>
      {text.slice(start + emphasis.length)}
    </p>
  )
}

function BinderClip() {
  return (
    <span className="note-clip" aria-hidden="true">
      <span className="note-clip-wire" />
      <span className="note-clip-body" />
    </span>
  )
}

export function About() {
  const lastIndex = about.paragraphs.length - 1
  const variantFor = (index: number): ParagraphVariant =>
    index === lastIndex ? "closing" : index === 3 ? "turn" : "body"

  return (
    <section id="about" className="about-note-section" aria-labelledby="about-heading">
      <div className="about-note-inner mx-auto max-w-[1120px] px-5 sm:px-8">
        <Reveal className="note-heading-wrap">
          <h2 id="about-heading" className="display about-heading">
            {about.heading}
          </h2>
        </Reveal>

        <Reveal className="note-reveal">
          <div className="note-stage">
            <div className="note-sheet-back" aria-hidden="true" />

            <article className="note-paper">
              <BinderClip />

              <figure className="note-photo">
                <span className="note-photo-tape" aria-hidden="true" />
                <img
                  src={portrait}
                  alt="Illustrated portrait of Gopika lying in a meadow, working on a laptop and wearing green headphones."
                  width={800}
                  height={838}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className="note-story">
                {about.paragraphs.map((paragraph, index) => (
                  <NoteParagraph
                    key={paragraph}
                    text={paragraph}
                    emphasis={index === 2 ? about.emphasis : undefined}
                    variant={variantFor(index)}
                  />
                ))}
              </div>

              <footer className="note-footer">
                <div className="note-identity">
                  <p className="note-name">{about.name}</p>
                  <ol className="note-track">
                    <li className="note-track-step">
                      <span className="note-track-dot" aria-hidden="true" />
                      <span>{about.designationFrom}</span>
                    </li>
                    <li className="note-track-link">
                      <ArrowRight size={14} strokeWidth={1.7} aria-hidden="true" />
                      <span className="note-hand">{about.designationInto}</span>
                    </li>
                    <li className="note-track-step note-track-step--to">
                      <span className="note-track-dot" aria-hidden="true" />
                      <span>{about.designationTo}</span>
                    </li>
                  </ol>
                </div>

                <div className="note-credential">
                  <img
                    className="note-credential-logo"
                    src={bitsomLogo}
                    alt="BITSOM, BITS School of Management"
                    width={610}
                    height={942}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="note-hand note-credential-label">{about.education.label}</p>
                    <p className="note-credential-program">{about.education.qualification}</p>
                    <p className="note-hand note-credential-label note-credential-from">
                      {about.education.fromLabel}
                    </p>
                    <p className="note-credential-school">{about.education.institution}</p>
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
