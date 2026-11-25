import { ArrowRight, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import phone from "../assets/catchmyvibe-phone.png"

const CASE_STUDY_NOTION =
  "https://app.notion.com/p/CatchMyVibe-Multi-Agent-Travel-Planning-System-3a7160f99a888051830ce87a1a759ecc?source=copy_link"

export function CatchMyVibeCard() {
  return (
    <article className="myntra-card cmv-card">
      <div className="myntra-card-copy">
        <p className="myntra-card-kicker">CAPSTONE GROUP PROJECT · TRAVEL · AI AGENTS</p>
        <p className="myntra-card-status">End-to-end product experience & product strategy case study</p>
        <h3 className="myntra-card-title">CatchMyVibe: Multi-Agent Travel Planning System</h3>
        <p className="myntra-card-summary">
          AI-powered travel planning with specialised agents for research, bookings, budget optimisation and
          contextual recommendations.
        </p>
        <div className="myntra-card-panel">
          <h4>Project Overview</h4>
          <p>
            A multi-agent travel platform that simplifies trip planning by orchestrating specialised AI agents for
            research, bookings, budget optimisation and personalised, real-time recommendations.
          </p>
        </div>
        <div className="myntra-card-actions">
          <Link className="myntra-btn myntra-btn--fill" to="/work/creator-ecosystem">
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
          width={464}
          height={560}
          alt="CatchMyVibe phone showing a mountain trip, Plan My Trip, Book and Manage, Optimise My Budget, and Get Local Recommendations."
        />
      </div>
    </article>
  )
}
