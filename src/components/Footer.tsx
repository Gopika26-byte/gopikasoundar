import { Link } from "react-router-dom"
import { profile } from "../data/site"
import { SectionLink } from "./SectionLink"

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl text-ink">{profile.name}</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Product manager, moving toward B2B SaaS. Warm work, clear decisions.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink">
          {profile.linkedin ? (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          ) : (
            <SectionLink id="contact" className="text-muted">
              LinkedIn — add link
            </SectionLink>
          )}
          {profile.email ? (
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          ) : (
            <SectionLink id="contact" className="text-muted">
              Email — add address
            </SectionLink>
          )}
          {profile.resumeHref ? (
            <a href={profile.resumeHref}>Résumé</a>
          ) : (
            <Link to="/resume">Résumé</Link>
          )}
          <SectionLink id="work">Work</SectionLink>
          <SectionLink id="writing">Writing</SectionLink>
        </div>
      </div>
      <div className="mx-auto max-w-[1120px] px-5 pb-8 text-xs text-muted sm:px-8">
        © {year} {profile.name}. Independent exercises on this site are practice, not claimed
        employment.
      </div>
    </footer>
  )
}
