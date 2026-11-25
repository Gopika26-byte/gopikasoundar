import { ArrowRight, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import phone from "../assets/trusted-circle-phone.png"

const CASE_STUDY_NOTION =
  "https://app.notion.com/p/A-Product-Discovery-Case-Study-on-Trusted-Circle-Group-Savings-417160f99a888038ad74c3a350f3e739?source=copy_link"

const tags = ["User Research", "Problem Validation", "Product Strategy"]

export function TrustedCircleCard() {
  return (
    <article className="myntra-card tc-card">
      <div className="myntra-card-copy">
        <p className="myntra-card-kicker">PRODUCT DISCOVERY · FINTECH (SLICE) · GROUP SAVINGS</p>
        <p className="myntra-card-status">Independent exercise</p>
        <h3 className="myntra-card-title">A Product Discovery Case Study on Trusted-Circle Group Savings</h3>
        <p className="myntra-card-summary">
          Exploring a group-savings opportunity for Slice to enable trusted, transparent and hassle-free saving
          circles.
        </p>
        <ul className="tc-tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p className="tc-decision">
          <strong>Product decision:</strong> Not to proceed with the feature (for now).
        </p>
        <div className="myntra-card-panel">
          <h4>Project Focus</h4>
          <p>
            An independent product discovery exercise to evaluate a potential group-savings opportunity for Slice
            through user research, competitive analysis, problem validation and business assessment. The research
            challenged my initial assumptions, ultimately leading me to recommend not proceeding with the proposed
            feature.
          </p>
        </div>
        <div className="myntra-card-actions">
          <Link className="myntra-btn myntra-btn--fill" to="/work/team-collaboration">
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
          width={458}
          height={548}
          alt="Slice phone for Trusted-Circle Group Savings, with a shared jar, circle progress, and a next payout."
        />
      </div>
    </article>
  )
}
