import { ArrowRight, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

const CASE_STUDY_NOTION =
  "https://app.notion.com/p/Turning-Pre-Loved-Fashion-into-Future-Loyalty-Myntra-L-P-416160f99a8880628615ea13381d7173?source=copy_link"

export function MyntraLoopCard() {
  return (
    <article className="myntra-card">
      <div className="myntra-card-copy">
        <p className="myntra-card-kicker">B2C PRODUCT · FASHION · CIRCULAR COMMERCE</p>
        <p className="myntra-card-status">Independent product strategy & management case study</p>
        <h3 className="myntra-card-title">Turning Pre-Loved Fashion into Future Loyalty — Myntra Loop</h3>
        <p className="myntra-card-summary">
          Buy back unused branded clothing and resell it, with clear valuation and Loop Points.
        </p>
        <div className="myntra-card-panel">
          <h4>Project Overview</h4>
          <p>
            A circular fashion buyback program by Myntra that helps users declutter their wardrobes, earn Loop
            Points instantly, and enjoy a more sustainable and rewarding fashion experience.
          </p>
        </div>
        <div className="myntra-card-actions">
          <Link className="myntra-btn myntra-btn--fill" to="/work/myntra-loop">
            View Overview
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a className="myntra-btn myntra-btn--line" href={CASE_STUDY_NOTION} target="_blank" rel="noopener noreferrer">
            Read Detailed Case Study
            <ExternalLink size={15} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="myntra-card-stage" aria-hidden="true">
        <span className="myntra-blob myntra-blob--back" />
        <span className="myntra-blob myntra-blob--front" />
        <span className="myntra-sparks">
          <i />
          <i />
          <i />
        </span>
        <div className="myntra-phone">
          <div className="myntra-phone-screen">
            <div className="myntra-status">
              <span>9:41</span>
              <span className="myntra-status-marks" />
            </div>
            <div className="myntra-brand">
              <MyntraMark />
              <span>Myntra</span>
            </div>
            <p className="myntra-loop-word">
              <span>L</span>
              <LoopMark />
              <span>P</span>
            </p>
            <p className="myntra-loop-line">
              Give your clothes
              <br />
              a second life.
            </p>
            <GarmentStack />
            <ul className="myntra-loop-rows">
              <li>
                <HangerIcon />
                <span>Sell to Myntra</span>
                <Chevron />
              </li>
              <li>
                <StarIcon />
                <span>Earn Loop Points</span>
                <Chevron />
              </li>
              <li>
                <LeafIcon />
                <span>Shop Sustainably</span>
                <Chevron />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

function MyntraMark() {
  return (
    <svg className="myntra-mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="myntra-mark-fill" x1="4" y1="4" x2="28" y2="28">
          <stop offset="0" stopColor="#ff4d78" />
          <stop offset="1" stopColor="#ff8a3d" />
        </linearGradient>
      </defs>
      <path
        fill="url(#myntra-mark-fill)"
        d="M6 25V9.5l5.2 8.2L16 8l4.8 9.7L26 9.5V25h-4.2v-8.2L16 24.2l-5.8-7.4V25H6z"
      />
    </svg>
  )
}

function LoopMark() {
  return (
    <svg className="myntra-loop-mark" viewBox="0 0 64 36" aria-hidden="true">
      <defs>
        <linearGradient id="myntra-loop-fill" x1="0" y1="18" x2="64" y2="18">
          <stop offset="0" stopColor="#ff4d8d" />
          <stop offset="0.48" stopColor="#ff7a3c" />
          <stop offset="1" stopColor="#7a4dff" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="url(#myntra-loop-fill)"
        strokeWidth="7"
        strokeLinecap="round"
        d="M18 18c0-6 4.2-10 9.2-10 3.6 0 6.2 2 8.8 6.2C38.6 10 41.2 8 44.8 8 50 8 54 12 54 18s-4 10-9.2 10c-3.6 0-6.2-2-8.8-6.2C33.4 26 30.8 28 27.2 28 22 28 18 24 18 18z"
      />
    </svg>
  )
}

function GarmentStack() {
  return (
    <div className="myntra-stack">
      <span className="myntra-fold myntra-fold--sand" />
      <span className="myntra-fold myntra-fold--rose" />
      <span className="myntra-fold myntra-fold--olive" />
      <span className="myntra-tag">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="none"
            stroke="#2f6b45"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 8.5A5.5 5.5 0 0 1 16.8 7M17 15.5A5.5 5.5 0 0 1 7.2 17"
          />
          <path fill="#2f6b45" d="M15.2 5.2l2.6 1.2-.4 2.2h-2.2zM8.8 18.8l-2.6-1.2.4-2.2h2.2z" />
        </svg>
      </span>
    </div>
  )
}

function HangerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="#e45b86"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.2a1.6 1.6 0 1 0-1.5-2.2M9.2 9.2 4.8 13.2c-.6.5-.2 1.4.6 1.4h13.2c.8 0 1.2-.9.6-1.4l-4.4-4"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#e2b23a" d="m12 4.2 1.9 4.3 4.7.5-3.5 3.2.9 4.6L12 14.6 7.9 16.8l1-4.6L5.4 9l4.7-.5z" />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#3f9a62"
        d="M18.5 5.2c-5.2.2-9.2 2.4-11.2 6.2-1.2 2.3-1.4 4.6-.6 6.6 2.2-.2 4.2-1.2 6.2-3.2 3.2-3.2 4.8-6.6 5.6-9.6z"
      />
      <path fill="none" stroke="#edf8f0" strokeWidth="1.2" strokeLinecap="round" d="M9.2 16.2c2-2 4.2-4.4 6.4-7.4" />
    </svg>
  )
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="#c4b2a6" strokeWidth="1.8" strokeLinecap="round" d="m9 7 5 5-5 5" />
    </svg>
  )
}
