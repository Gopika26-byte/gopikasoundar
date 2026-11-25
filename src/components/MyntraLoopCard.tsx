import { ArrowRight, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import phone from "../assets/myntra-loop-phone.png"

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

      <div className="myntra-card-stage">
        <img
          className="myntra-card-phone"
          src={phone}
          width={384}
          height={560}
          alt="Myntra Loop phone showing folded garments, Sell to Myntra, Earn Loop Points, and Shop Sustainably."
        />
      </div>
    </article>
  )
}
