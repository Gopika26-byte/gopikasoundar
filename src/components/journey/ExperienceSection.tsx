import { experienceRole } from "../../data/credentials"
import { JourneyEntry, JourneyLogo, JourneyMeta, useAccordion } from "./JourneyAccordion"

export function ExperienceSection() {
  const { openId, toggle } = useAccordion()

  return (
    <div className="journey-group">
      <h3 className="journey-group-title">Experience</h3>
      <ul className="journey-list">
        <ExperienceRow open={openId === experienceRole.id} onToggle={toggle} />
      </ul>
    </div>
  )
}

type RowProps = {
  open: boolean
  onToggle: (id: string, trigger: HTMLElement) => void
}

function ExperienceRow({ open, onToggle }: RowProps) {
  const role = experienceRole

  return (
    <JourneyEntry
      id={role.id}
      open={open}
      onToggle={onToggle}
      label={`${role.role} at ${role.company}`}
      summary={
        <>
          <span className="journey-name">
            <span className="journey-name-primary">{role.company}</span>
          </span>
          <JourneyLogo src={role.logo} alt={role.logoAlt} />
          <span className="journey-role">{role.role}</span>
          <span className="journey-desc">{role.shortDescription}</span>
          <JourneyMeta period={role.period} status={role.status} />
        </>
      }
    >
      <ExperienceDetails />
    </JourneyEntry>
  )
}

function ExperienceDetails() {
  const role = experienceRole

  return (
    <div className="journey-details-grid">
      <div className="journey-details-main">
        <h5 className="journey-kicker">Role overview</h5>
        <p className="journey-copy">{role.summary}</p>
        <p className="journey-copy journey-copy--muted">{role.bridge}</p>
        <h5 className="journey-kicker journey-kicker--spaced">Key skills</h5>
        <ul className="journey-tags">
          {role.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>

      <section className="journey-translate" aria-labelledby={`${role.id}-translate`}>
        <h5 id={`${role.id}-translate`} className="journey-translate-title">
          How this experience translates to product
        </h5>
        <p className="journey-translate-sub">Different role. Relevant foundations.</p>
        <p className="journey-translate-head" aria-hidden="true">
          <span>Technical support foundation</span>
          <span>Product management capability</span>
        </p>
        <dl className="journey-translate-list">
          {role.relevance.map((row) => (
            <div key={row.from} className="journey-translate-row">
              <dt>{row.from}</dt>
              <dd>{row.to}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
