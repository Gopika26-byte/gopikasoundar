import annaUniversityLogo from "../assets/anna-university.png"
import bitsomLogo from "../assets/bitsom-lockup.png"
import cognizantLogo from "../assets/cognizant.webp"
import masaiLogo from "../assets/masai.png"

export const experienceRole = {
  id: "cognizant",
  company: "Cognizant",
  role: "Technical Support Lead",
  period: "2021 — Present",
  status: "Currently working",
  logo: cognizantLogo,
  logoAlt: "Cognizant logo",
  shortDescription:
    "Working across 100+ applications in the agriculture domain, investigating technical issues, identifying recurring challenges and coordinating with development teams to improve service quality and customer outcomes.",
  summary:
    "As a Technical Support Lead at Cognizant, I work at the intersection of technology, customer experience, and operational problem-solving. My role involves understanding complex issues, coordinating with cross-functional teams, identifying recurring challenges, and driving solutions that improve service quality and customer outcomes.",
  bridge:
    "These experiences have strengthened capabilities that closely align with product management — understanding user pain points, prioritizing issues, communicating with stakeholders, translating problems into actionable solutions, and balancing customer needs with technical constraints.",
  themes: [
    "Problem analysis",
    "Customer experience",
    "Stakeholder collaboration",
    "Cross-functional coordination",
    "Prioritization",
    "Technical problem-solving",
    "Operational improvement",
  ],
  relevance: [
    { from: "Problem analysis", to: "Problem discovery" },
    { from: "Customer issues", to: "Understanding user pain points" },
    { from: "Issue prioritization", to: "Prioritization and trade-offs" },
    { from: "Cross-functional coordination", to: "Stakeholder alignment" },
    { from: "Technical understanding", to: "Working with engineering" },
    { from: "Resolution ownership", to: "Execution and follow-through" },
  ],
}

export const annaUniversity = {
  id: "anna-university",
  institution: "Anna University",
  degree: "Master of Computer Science",
  period: "2019 — 2021",
  logo: annaUniversityLogo,
  logoAlt: "Anna University logo",
  description:
    "Advanced academic training in computer science, building a foundation in technical concepts, analytical thinking, and structured problem-solving.",
}

export const productProgram = {
  id: "bits-pilani-program",
  association: "BITS Pilani",
  school: "BITS School of Management",
  schoolLogo: bitsomLogo,
  schoolLogoAlt: "BITSOM, BITS School of Management logo",
  partner: "MASAI School",
  partnerRole: "Learning partner",
  partnerLogo: masaiLogo,
  partnerLogoAlt: "MASAI School logo",
  title: "Product Management with Generative & Agentic AI",
  period: "January 2026 — November 2026",
  status: "Completed in November 2026",
  delivery:
    "A joint learning program delivered through BITS School of Management (BITS Pilani), with MASAI School as the learning partner.",
  clarification:
    "This is a completed professional learning program, not a master's degree. MASAI School is a learning partner, not a university.",
  description:
    "A specialized program focused on modern product management, with an emphasis on Generative AI and Agentic AI. It strengthened my understanding of product discovery, product strategy, AI-enabled product opportunities, and the evolving role of AI in building and delivering products.",
  themes: ["Product discovery", "Product strategy", "AI product thinking"],
}
