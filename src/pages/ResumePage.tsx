import { useEffect } from "react"
import { Link } from "react-router-dom"
import { profile, roles } from "../data/site"

export function ResumePage() {
  useEffect(() => {
    document.title = "Résumé — Gopika"
    if (profile.resumeHref) window.location.replace(profile.resumeHref)
  }, [])

  return (
    <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 sm:px-8">
      <Link to="/#contact" className="text-sm text-muted hover:text-ink">
        ← Back
      </Link>
      <p className="eyebrow mt-8">Résumé</p>
      <h1 className="display mt-3 text-5xl text-ink">{profile.name}</h1>
      <p className="mt-4 text-muted">
        A résumé file has not been added. This page is a placeholder so the link is honest. Drop a
        PDF into the project and point <span className="text-ink">resumeHref</span> at it in the
        site content.
      </p>
      <div className="mt-8 space-y-4">
        {roles.map((role) => (
          <article key={role.id} className="rounded-[20px] border border-dashed border-line p-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-coral-deep uppercase">Placeholder</p>
            <h2 className="mt-2 font-serif text-2xl">
              {role.title} · {role.company}
            </h2>
            <p className="text-sm text-muted">{role.dates}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        No employers, dates, or achievements are invented here.
      </p>
    </main>
  )
}
