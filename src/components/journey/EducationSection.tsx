import { Plus } from "lucide-react"
import { annaUniversity, productProgram } from "../../data/credentials"
import { JourneyEntry, JourneyLogo, JourneyMeta, useAccordion } from "./JourneyAccordion"

type RowProps = {
  open: boolean
  onToggle: (id: string, trigger: HTMLElement) => void
}

export function EducationSection() {
  const { openId, toggle } = useAccordion()

  return (
    <div className="journey-group">
      <h3 className="journey-group-title">Education</h3>
      <ul className="journey-list">
        <EducationRow open={openId === annaUniversity.id} onToggle={toggle} />
        <ProgramRow open={openId === productProgram.id} onToggle={toggle} />
      </ul>
    </div>
  )
}

function EducationRow({ open, onToggle }: RowProps) {
  const school = annaUniversity

  return (
    <JourneyEntry
      id={school.id}
      open={open}
      onToggle={onToggle}
      variant="compact"
      label={`${school.degree}, ${school.institution}`}
      summary={
        <>
          <span className="journey-name">
            <span className="journey-name-primary">{school.institution}</span>
          </span>
          <JourneyLogo src={school.logo} alt={school.logoAlt} />
          <span className="journey-role">{school.degree}</span>
          <JourneyMeta period={school.period} />
        </>
      }
    >
      <EducationDetails />
    </JourneyEntry>
  )
}

function EducationDetails() {
  return (
    <div className="journey-details-single">
      <h5 className="journey-kicker">Academic foundation</h5>
      <p className="journey-copy">{annaUniversity.description}</p>
    </div>
  )
}

function ProgramRow({ open, onToggle }: RowProps) {
  const program = productProgram

  return (
    <JourneyEntry
      id={program.id}
      open={open}
      onToggle={onToggle}
      variant="featured"
      label={`${program.title}, ${program.school}, ${program.association}`}
      summary={
        <>
          <span className="journey-name">
            <span className="journey-name-primary">{program.association}</span>
            <span className="journey-name-sub">{program.school}</span>
          </span>
          <JourneyLogo src={program.schoolLogo} alt={program.schoolLogoAlt} tall />
          <span className="journey-role journey-role--program">{program.title}</span>
          <span className="journey-partner">
            <Plus size={13} strokeWidth={1.75} className="journey-partner-plus" aria-hidden="true" />
            <img className="journey-partner-logo" src={program.partnerLogo} alt={program.partnerLogoAlt} loading="lazy" />
            <span>
              <span className="journey-partner-name">{program.partner}</span>
              <span className="journey-partner-role"> — {program.partnerRole}</span>
            </span>
          </span>
          <JourneyMeta period={program.period} status={program.status} />
        </>
      }
    >
      <ProgramDetails />
    </JourneyEntry>
  )
}

function ProgramDetails() {
  const program = productProgram

  return (
    <div className="journey-details-grid">
      <div className="journey-details-main">
        <h5 className="journey-kicker">Program overview</h5>
        <p className="journey-copy">{program.description}</p>
        <h5 className="journey-kicker journey-kicker--spaced">Key learning areas</h5>
        <ul className="journey-tags">
          {program.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>

      <div className="journey-program-side">
        <ProgramInstitutionGroup />
        <dl className="journey-facts">
          <div>
            <dt>Duration</dt>
            <dd>{program.period}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd className="journey-facts-status">{program.status}</dd>
          </div>
        </dl>
        <p className="journey-note">{program.clarification}</p>
      </div>
    </div>
  )
}

function ProgramInstitutionGroup() {
  const program = productProgram

  return (
    <section className="journey-institutions" aria-labelledby={`${program.id}-institutions`}>
      <h5 id={`${program.id}-institutions`} className="journey-kicker">
        Institutions & learning partnership
      </h5>
      <ol className="journey-tiers">
        <li className="journey-tier journey-tier--association">
          <span className="journey-tier-name">{program.association}</span>
          <span className="journey-tier-role">Institutional association</span>
        </li>
        <li className="journey-tier journey-tier--school">
          <img src={program.schoolLogo} alt="" className="journey-tier-logo journey-tier-logo--tall" />
          <span>
            <span className="journey-tier-name">{program.school}</span>
            <span className="journey-tier-role">School delivering the program</span>
          </span>
        </li>
        <li className="journey-tier journey-tier--partner">
          <img src={program.partnerLogo} alt="" className="journey-tier-logo" />
          <span>
            <span className="journey-tier-name">{program.partner}</span>
            <span className="journey-tier-role">{program.partnerRole}</span>
          </span>
        </li>
      </ol>
      <p className="journey-copy journey-copy--small">{program.delivery}</p>
    </section>
  )
}
