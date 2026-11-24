import type { Tone } from "./site"

export const PORTFOLIO_SCROLL_KEY = "gopika-portfolio-scroll"

export type PortfolioNavState = {
  fromPortfolio?: boolean
  portfolioScroll?: number
  viaTeardownNav?: boolean
  restoreScroll?: number
}

export type TeardownBlock =
  | { kind: "text"; paragraphs: string[] }
  | { kind: "list"; intro?: string; items: string[] }
  | { kind: "notes"; items: { label: string; body: string }[] }
  | { kind: "placeholder"; text: string }

export type TeardownSection = {
  heading: string
  blocks: TeardownBlock[]
}

export type Teardown = {
  slug: string
  category: string
  product: string
  title: string
  summary: string
  tags: string[]
  tone: Tone
  cta: string
  href?: string
  recognition?: {
    label: string
    detail: string
  }
  insight?: {
    observation: string
    opportunity: string
  }
  intro: string
  disclaimer: string
  sections: TeardownSection[]
}

export const teardowns: Teardown[] = [
  {
    slug: "swiggy-instamart",
    category: "Product discovery",
    product: "Swiggy Instamart",
    title: "The 10-Minute Visibility Gap",
    summary:
      "What started as an everyday observation about delivery visibility became a public product conversation. My perspective received acknowledgement from a Swiggy product leader, opening up an interesting exploration of recipient uncertainty and ETA-first communication.",
    tags: ["Product Discovery", "Product Strategy", "User Experience"],
    tone: "peach",
    cta: "Explore Teardown",
    href: "https://app.notion.com/p/THE-10-MINUTE-VISIBILITY-GAP-40d160f99a8880aea212c35fc3ddfacb?source=copy_link",
    recognition: {
      label: "A product observation that reached Swiggy's product team",
      detail: "Publicly acknowledged by a Swiggy product leader.",
    },
    insight: {
      observation:
        "Delivery visibility is not just about tracking an order. It is also about reducing uncertainty for the person receiving it.",
      opportunity:
        "Explore clearer recipient communication and ETA-first updates to make delivery expectations more transparent.",
    },
    intro:
      "An independent product teardown of the difference between delivery visibility in Swiggy Food and Swiggy Instamart. It is not an official Swiggy assignment. A public response from a Swiggy product leader acknowledged the observation. That response is not evidence that Swiggy changed the product, and it is not evidence that Swiggy adopted the ETA-first direction explored here.",
    disclaimer:
      "Independent analysis. Not affiliated with Swiggy. No claim that a public post caused a product change, and no claim that the proposed ETA-first direction was adopted.",
    sections: [
      {
        heading: "The observation",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The starting point was an everyday difference in delivery visibility between Swiggy Food and Swiggy Instamart. Food made progress easier to see. Instamart left the person receiving the order with less to go on.",
            ],
          },
        ],
      },
      {
        heading: "The problem",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The underlying problem was recipient uncertainty: not knowing how the delivery was progressing, or when it was likely to arrive.",
            ],
          },
        ],
      },
      {
        heading: "Three hypotheses",
        blocks: [
          {
            kind: "list",
            intro: "The exploration held three possible explanations open, rather than treating the gap as a missing feature.",
            items: [
              "Delivery speed versus feature investment.",
              "Technology and architecture differences.",
              "Privacy versus convenience.",
            ],
          },
        ],
      },
      {
        heading: "Directions considered",
        blocks: [
          {
            kind: "list",
            items: [
              "Contextual delivery communication.",
              "ETA-first communication.",
              "Permission-based shared tracking.",
            ],
          },
          {
            kind: "text",
            paragraphs: [
              "The recommended direction was ETA-first communication. This is a recommendation from an independent teardown, not a change Swiggy is reported to have shipped.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "zepto-support",
    category: "Customer experience",
    product: "Zepto",
    title: "A UX Teardown of Zepto's Customer Support & Complaint Resolution Experience",
    summary:
      "A firsthand teardown backed by 40 customer reviews, uncovering friction in automated complaint assessment, resolution flexibility and refund visibility, with recommendations to make support clearer and more customer-centric.",
    tags: ["Complaint Resolution", "Support Journey", "UX Audit"],
    tone: "lavender",
    cta: "Explore Teardown",
    href: "https://app.notion.com/p/A-UX-Teardown-of-Zepto-s-Customer-Support-Complaint-Resolution-Experience-40c160f99a8880af81b6d6d9a5adf3d0?source=copy_link",
    insight: {
      observation:
        "Customers can experience friction when automated complaint assessment does not clearly explain the issue or the next steps available to them.",
      opportunity:
        "Explore clearer support discovery, transparent complaint assessment and more flexible resolution options.",
    },
    intro:
      "An independent teardown of Zepto's customer support and complaint resolution experience. It draws on 40 publicly available customer reviews, a firsthand pass through the Zepto app, an actual complaint submission and resolution journey, and a competitive look at Blinkit and Swiggy Instamart. The proposed improvements are recommendations, not changes Zepto is reported to have implemented, and the interface concepts are not existing Zepto screens.",
    disclaimer:
      "Independent analysis. Not affiliated with Zepto. No claim that the proposed improvements shipped, that Zepto never offers replacements, or that the recommendations were validated through experiments.",
    sections: [
      {
        heading: "How this was explored",
        blocks: [
          {
            kind: "list",
            items: [
              "Analysis of 40 publicly available customer reviews.",
              "Firsthand exploration of the Zepto application.",
              "An actual complaint submission and resolution journey.",
              "Competitive exploration of Blinkit and Swiggy Instamart.",
            ],
          },
        ],
      },
      {
        heading: "Findings",
        blocks: [
          {
            kind: "notes",
            items: [
              {
                label: "Automated assessment",
                body: "Lack of clarity during automated complaint assessment.",
              },
              {
                label: "Resolution flexibility",
                body: "Limited resolution flexibility in the tested flow. This is a reading of that flow, not a claim that Zepto never offers replacements.",
              },
              {
                label: "Refund visibility",
                body: "Greater visibility was needed into post-resolution refund status.",
              },
            ],
          },
        ],
      },
      {
        heading: "Proposed improvements",
        blocks: [
          {
            kind: "list",
            intro:
              "These are independent recommendations. They are not existing Zepto interfaces, and they have not been validated through experiments.",
            items: [
              "Transparent Complaint Assessment.",
              "Flexible Resolution — Replace or Refund.",
              "Clear Refund Status & Progress Tracking.",
            ],
          },
        ],
      },
      {
        heading: "What I would do first",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The prioritisation decision was to address Transparent Complaint Assessment first. In the firsthand journey, the initial automated assessment was inconclusive, while a subsequent priority review approved a ₹25 refund.",
            ],
          },
        ],
      },
    ],
  },
]

export function teardownPath(slug: string) {
  return `/product-teardowns/${slug}`
}

export function teardownBySlug(slug: string | undefined) {
  return teardowns.find((item) => item.slug === slug)
}
