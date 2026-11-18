import { Check, Copy, Download } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import farewellImage from "../assets/farewell-meadow.jpg"
import { profile } from "../data/site"
import { copyText } from "../lib/clipboard"

const FEEDBACK_MS = 1800

export function FarewellSection() {
  return (
    <footer id="contact" className="site-end">
      <section className="farewell relative isolate overflow-hidden bg-ivory" aria-labelledby="farewell-heading">
        <div className="farewell-art">
          <img
            src={farewellImage}
            width={1280}
            height={720}
            alt="Illustration of Gopika lying in a meadow with headphones, smiling at a laptop, wildflowers in the grass around her."
          />
        </div>

        <div className="farewell-copy">
          <FarewellContent />
        </div>
      </section>
      <CreditStrip />
    </footer>
  )
}

function FarewellContent() {
  return (
    <div className="farewell-content">
      <p className="load-in font-sans text-[clamp(1.8rem,3vw,2.4rem)] font-medium tracking-tight text-coral">
        Adiós, Amigos!
      </p>
      <h2
        id="farewell-heading"
        className="load-in mt-2 font-sans text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.05] font-semibold tracking-tight text-ink [animation-delay:80ms]"
      >
        This was Gopika.
      </h2>
      <FarewellActions />
      <ul className="load-in farewell-contacts [animation-delay:220ms]">
        <ContactCopyRow value={profile.email} label="email address" copiedMessage="Email copied!" />
        <ContactCopyRow value={profile.phone} label="phone number" copiedMessage="Phone number copied!" />
      </ul>
    </div>
  )
}

function FarewellActions() {
  return (
    <div className="load-in mt-8 flex flex-wrap items-center gap-3 [animation-delay:160ms]">
      {profile.resumeHref ? (
        <a className="btn btn-secondary" href={profile.resumeHref} download>
          <Download size={16} aria-hidden="true" />
          Resume
        </a>
      ) : (
        <Link className="btn btn-secondary" to="/resume">
          <Download size={16} aria-hidden="true" />
          Resume
        </Link>
      )}
      <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
        LinkedIn
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  )
}

type ContactCopyRowProps = {
  value: string
  label: string
  copiedMessage: string
}

function ContactCopyRow({ value, label, copiedMessage }: ContactCopyRowProps) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle")
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    window.clearTimeout(timer.current)
    setState((await copyText(value)) ? "copied" : "failed")
    timer.current = window.setTimeout(() => setState("idle"), FEEDBACK_MS)
  }

  const message = state === "copied" ? copiedMessage : state === "failed" ? "Couldn't copy" : ""

  return (
    <li className="farewell-contact">
      <span className="farewell-contact-value">{value}</span>
      <button
        type="button"
        className={`farewell-copy-btn${state === "copied" ? " is-copied" : ""}`}
        aria-label={`Copy ${label}`}
        onClick={copy}
      >
        {state === "copied" ? (
          <Check size={16} strokeWidth={2.4} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
        <span className={`farewell-copy-tip${message ? " is-visible" : ""}`} aria-hidden="true">
          {message}
        </span>
      </button>
      <span className="sr-only" role="status">
        {message}
      </span>
    </li>
  )
}

function CreditStrip() {
  return (
    <div className="credit-strip">
      <p>Made with ♥ by Gopika | Using Cursor and Chatgpt</p>
    </div>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 9H4v11h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20z"
      />
    </svg>
  )
}
