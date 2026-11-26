import { Check, CloudDownload, Copy, ExternalLink, Mail, Phone } from "lucide-react"
import { useEffect, useId, useRef, useState, type ReactNode } from "react"
import { profile, resumeDownloadName } from "../../data/site"
import { copyText } from "../../lib/clipboard"

const FEEDBACK_MS = 1800

function useTransientMessage() {
  const [message, setMessage] = useState("")
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const show = (next: string) => {
    window.clearTimeout(timer.current)
    setMessage(next)
    timer.current = window.setTimeout(() => setMessage(""), FEEDBACK_MS)
  }

  return [message, show] as const
}

type CopyRowProps = {
  icon: ReactNode
  value: string
  copyLabel: string
  copiedMessage: string
}

function CopyRow({ icon, value, copyLabel, copiedMessage }: CopyRowProps) {
  const [message, show] = useTransientMessage()
  const copied = message === copiedMessage

  return (
    <button
      type="button"
      className={`contact-row${message ? " is-confirmed" : ""}`}
      aria-label={`${copyLabel}: ${value}`}
      onClick={async () => show((await copyText(value)) ? copiedMessage : "Couldn't copy. Please select it manually.")}
    >
      <span className="contact-row-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-row-text">
        <span className="contact-row-value">{value}</span>
        <span className="contact-row-feedback" aria-hidden="true">
          {message}
        </span>
      </span>
      <span className="contact-row-action" aria-hidden="true">
        {copied ? <Check size={16} strokeWidth={2.4} /> : <Copy size={16} />}
      </span>
      <span className="sr-only" role="status">
        {message}
      </span>
    </button>
  )
}

function LinkedInRow() {
  return (
    <a className="contact-row" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
      <span className="contact-row-icon contact-row-icon--linkedin" aria-hidden="true">
        <LinkedInGlyph />
      </span>
      <span className="contact-row-text">
        <span className="contact-row-value">Go to LinkedIn profile</span>
      </span>
      <span className="contact-row-action" aria-hidden="true">
        <ExternalLink size={16} />
      </span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

function ResumeDownloadButton() {
  const [message, show] = useTransientMessage()
  const noteId = useId()

  if (profile.resumeHref) {
    return (
      <a className="contact-resume" href={profile.resumeHref} download={resumeDownloadName}>
        Download resume
        <CloudDownload size={17} aria-hidden="true" />
      </a>
    )
  }

  return (
    <>
      <button
        type="button"
        className="contact-resume"
        aria-disabled="true"
        aria-describedby={noteId}
        onClick={() => show("Resume coming soon.")}
      >
        Download resume
        <CloudDownload size={17} aria-hidden="true" />
      </button>
      <p id={noteId} className="contact-resume-note" role="status">
        {message}
      </p>
    </>
  )
}

export function ContactPanelContent() {
  return (
    <>
      <ul className="contact-list">
        <li>
          <CopyRow
            icon={<Mail size={17} />}
            value={profile.email}
            copyLabel="Copy email address"
            copiedMessage="Email copied"
          />
        </li>
        <li>
          <CopyRow
            icon={<Phone size={17} />}
            value={profile.phone}
            copyLabel="Copy phone number"
            copiedMessage="Phone number copied"
          />
        </li>
        <li>
          <LinkedInRow />
        </li>
      </ul>
      <div className="contact-resume-wrap">
        <ResumeDownloadButton />
      </div>
    </>
  )
}

function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17">
      <rect width="24" height="24" rx="4" fill="#0a66c2" />
      <path
        fill="#fff"
        d="M7.6 9.6H5.3V18h2.3V9.6zM6.45 5.5a1.33 1.33 0 1 0 0 2.66 1.33 1.33 0 0 0 0-2.66zM18.7 18h-2.3v-4.1c0-1.1-.4-1.85-1.4-1.85-.75 0-1.2.5-1.4 1-.07.18-.09.42-.09.66V18h-2.3V9.6h2.2v1.15c.3-.47.85-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5V18z"
      />
    </svg>
  )
}
