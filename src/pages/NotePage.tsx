import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { NoteThumb } from "../components/StudyArt"
import { notes } from "../data/site"

export function NotePage() {
  const { slug } = useParams()
  const note = notes.find((item) => item.slug === slug)
  const index = notes.findIndex((item) => item.slug === slug)

  useEffect(() => {
    document.title = note ? `${note.title} — Gopika` : "Note — Gopika"
  }, [note])

  if (!note) {
    return (
      <main className="mx-auto max-w-3xl px-5 pt-36 pb-24">
        <h1 className="font-serif text-4xl">That note is not on this site.</h1>
        <Link to="/#writing" className="mt-6 inline-flex text-coral-deep">
          Back to notes
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 sm:px-8">
      <Link to="/#writing" className="text-sm text-muted hover:text-ink">
        ← What I'm exploring
      </Link>
      <div className="mt-8 overflow-hidden rounded-[24px]">
        <NoteThumb index={Math.max(index, 0)} />
      </div>
      <p className="eyebrow mt-8">{note.topic}</p>
      <h1 className="display mt-3 text-[clamp(2.4rem,5vw,3.8rem)] text-ink">{note.title}</h1>
      <p className="mt-3 text-sm text-muted">
        Independent note · {note.readingMinutes} min read · not previously published
      </p>
      <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink">
        {note.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  )
}
