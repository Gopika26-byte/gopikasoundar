/**
 * Personalize the site here.
 * Leave a field empty rather than inventing an employer, metric, quote, or link.
 * Case studies, lab scenarios, and notes are independent exercises — not employment history.
 */

import { publicPath } from "../lib/publicPath"
import { myntraLoopNarrative, type CaseNarrative } from "./myntraLoop"

export const resumeDownloadName = "Gopika_Soundar_Product_Manager_Resume.pdf"

export const profile = {
  name: "Gopika",
  roleLabel: "Product Manager",
  email: "gopikasoundar096@gmail.com",
  phone: "7338802855",
  linkedin: "https://www.linkedin.com/in/gopika-soundar-4a06a93b6/",
  instagram: "",
  resumeHref: publicPath(`/${resumeDownloadName}`),
  availability:
    "Open to conversations about B2B SaaS product roles, and to thoughtful collaborations.",
}

export const workNavItems = [
  { id: "work-start", label: "Case Study", section: "work" },
  { id: "documentation-start", label: "PRD", section: "documentation" },
  { id: "teardowns-start", label: "Product Teardowns", section: "teardowns" },
] as const

export const navItems = [
  { id: "home", label: "Home", section: "home" },
  { id: "about-heading", label: "About", section: "about" },
  { id: "experience-start", label: "Experience", section: "experience" },
] as const

/** Sections walked in page order. Work's three sections share one highlight. */
export const navSpy = [
  { section: "home", highlight: "home" },
  { section: "about", highlight: "about-heading" },
  { section: "work", highlight: "work" },
  { section: "documentation", highlight: "work" },
  { section: "teardowns", highlight: "work" },
  { section: "experience", highlight: "experience-start" },
] as const

export const hero = {
  eyebrow: "Product Manager",
  lines: ["Building", "what's next,", "for people."],
  intro:
    "I'm Gopika. I have a habit of questioning confusing buttons, investigating frustrating user journeys, and wondering, 'Could we make this better?' I turn those little curiosities into meaningful product ideas using research, data, and a whole lot of problem-solving.",
  capabilities: [
    { title: "Product Strategy & Execution.", icon: "compass" as const },
    { title: "User-Centric Problem Solving.", icon: "heart" as const },
    { title: "Impact-Driven Thinking.", icon: "target" as const },
  ],
}

export const prdDocuments = [
  {
    slug: "myntra-loop",
    category: "Resale & Loyalty Product PRD",
    title: "Turning pre-loved fashion into future loyalty.",
    summary:
      "A Myntra-managed resale experience that connects customers with unused fashion to a trusted pre-owned marketplace. Covers garment eligibility, transparent buyback valuation, doorstep pickup, quality inspection, Loop Points and resale operations.",
    tags: ["Seller & Buyer Journeys", "Valuation & Buyback Logic", "Inspection & Resale Lifecycle"],
    tone: "peach" as const,
    href: "https://app.notion.com/p/Product-Requirements-Document-PRD-414160f99a8880d3b149d53b02cec22c?source=copy_link",
  },
  {
    slug: "catchmyvibe",
    category: "AI-Native Travel Platform PRD",
    title: "From a travel vibe to a bookable itinerary.",
    summary:
      "An AI-native, multi-agent travel planning platform that transforms natural-language trip requests into personalised, budget-fit itineraries. Covers conversational intent capture, agent orchestration, real-time planning progress, provider-backed recommendations, budget optimisation and end-to-end booking.",
    tags: ["Multi-Agent Orchestration", "Itinerary & Budget Engine", "Booking & Concierge Flow"],
    tone: "lavender" as const,
    href: "https://app.notion.com/p/Product-Requirements-Document-3a7160f99a8880c68f77e40f49819d4e?source=copy_link",
  },
]

/**
 * Medium writing. Leave url empty until the real article exists.
 * Do not point a card at the Medium homepage.
 * readingTime only when you know it. coverSrc only for a real article image.
 * profileUrl is Gopika's Medium profile. The profile link is hidden until it is set.
 */
export const mediumProfileUrl = ""

export const mediumArticles = [
  {
    id: "article-1",
    category: "Product thinking",
    title:
      "From Fixing Tickets to Finding Product Opportunities: A Support Engineer's Perspective",
    description:
      "How recurring customer issues can reveal opportunities to improve product experiences. Exploring how support insights, root-cause investigation and contextual guidance can help solve user problems closer to where they occur.",
    url: "https://medium.com/@gopikasoundar096/from-fixing-tickets-to-finding-product-opportunities-a-support-engineers-perspective-eb40f8f34e6e?sharedUserId=gopikasoundar096",
    readingTime: "6 min read",
    published: "Medium · October 22, 2026",
    coverSrc: "",
    tone: "peach" as const,
  },
  {
    id: "article-2",
    category: "Product discovery & prioritization",
    title: "I Thought Generating Ideas Was Hard. Then I Had to Prioritize Them.",
    description:
      "Building CatchMyVibe taught me that great product decisions aren't about building every exciting idea. They're about understanding user needs, making deliberate trade-offs and prioritising the right features to deliver core value through a focused MVP.",
    url: "https://medium.com/@gopikasoundar096/i-thought-generating-ideas-was-hard-then-i-had-to-prioritize-them-259717196205?sharedUserId=gopikasoundar096",
    readingTime: "7 min read",
    published: "Medium · October 22, 2026",
    coverSrc: "",
    tone: "lavender" as const,
  },
]

export const about = {
  kicker: "My journey",
  headingBefore: "From Troubleshooting Problems",
  headingAfter: "to Building Better Products.",
  milestones: [
    {
      step: "01",
      eyebrow: "Where I started",
      title: "Seeing products up close.",
      body: "At Cognizant, I work as a Technical Support Engineer, supporting 100+ applications in the crop science domain. Troubleshooting recurring issues has given me a firsthand understanding of real user pain points.",
      tone: "peach" as const,
    },
    {
      step: "02",
      eyebrow: "The shift",
      title: "Curiosity beyond the fix.",
      body: "I became more interested in why problems happened — and how better product decisions could prevent them.",
      tone: "cream" as const,
    },
    {
      step: "03",
      eyebrow: "Building the foundation",
      title: "Learning by doing.",
      body: "I built my product foundation through BITSOM–Masai learning in Product Management, Generative AI and Agentic AI, applying it through case studies, user research and product projects.",
      tone: "lavender" as const,
    },
  ],
  qualification: ["Product Management", "with Generative &", "Agentic AI"],
  goalHeading: "Looking for Product Manager Roles.",
  goalBody:
    "Ready to bring my technical experience, customer empathy and product mindset to a Product Manager role.",
}

export type Tone = "peach" | "sage" | "lavender" | "sunset"

export type CaseStudy = {
  slug: string
  category: string
  title: string
  summary: string
  tags: string[]
  tone: Tone
  status?: string
  narrative?: CaseNarrative
  problem: string
  context: string
  approach: { title: string; body: string }[]
  decisions: string[]
  measure: { metric: string; why: string }[]
  assumptions: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "myntra-loop",
    category: "B2C product · Fashion · Circular commerce",
    title: "Turning Pre-Loved Fashion into Future Loyalty — Myntra Loop",
    summary:
      "Buy back unused branded clothing and resell it, with clear valuation and Loop Points.",
    tags: ["Product Strategy", "User Research", "Business Model Design"],
    tone: "peach",
    status: "Independent product strategy & management case study",
    narrative: myntraLoopNarrative,
    problem:
      "Customers who stop wearing clothes in usable condition lack a convenient way to recover value, while people who would buy branded pre-owned fashion hesitate over hygiene, condition and reliability.",
    context:
      "An independent product concept. It is not an official Myntra assignment, and it does not claim that Myntra adopted the proposal.",
    approach: [
      {
        title: "Research both sides",
        body: "An exploratory survey of 100 people and 10 interviews, plus two operator conversations, before defining the product.",
      },
      {
        title: "Choose a managed buyback",
        body: "Myntra would purchase eligible garments outright, inspect them, and resell them, rather than leaving customers to run a peer-to-peer listing.",
      },
      {
        title: "Price from the economics",
        body: "The minimum guaranteed value comes from the lowest accepted condition grade, not from an arbitrary incentive.",
      },
    ],
    decisions: [
      "Outright buyback instead of consignment or a peer-to-peer marketplace.",
      "Start with branded women's kurta sets.",
      "Acquire inventory only as buyer demand is demonstrated.",
    ],
    measure: [
      {
        metric: "Contribution per acquired garment",
        why: "Sold-garment profit does not capture unsold stock, rejections, or returns.",
      },
      {
        metric: "Successfully resold garments",
        why: "The operating outcome is garments that are both purchased from sellers and sold to buyers.",
      },
      {
        metric: "Inspection and sell-through",
        why: "A pilot has to show that collected garments can be prepared and actually resold.",
      },
    ],
    assumptions: [
      "Eligible customers will submit Myntra-purchased garments.",
      "Buyers will purchase pre-owned garments when condition is visible.",
      "The full cohort can produce a sustainable contribution. These are assumptions to test, not results.",
    ],
  },
  {
    slug: "creator-ecosystem",
    category: "Marketplace",
    title: "CatchMyVibe - Multi-Agent Travel Planning System",
    summary:
      "Less browsing and clearer signals in a two-sided marketplace, with a fairer start for newer creators.",
    tags: ["Growth", "User Research", "Go-to-Market"],
    tone: "lavender",
    problem:
      "Marketplaces often sort by popularity. Buyers cannot tell who is relevant. Newer creators cannot earn the proof the ranking asks for.",
    context:
      "A thinking exercise about marketplace friction. It does not describe a live marketplace, a growth result, or a team I managed.",
    approach: [
      {
        title: "Separate the two jobs",
        body: "A buyer wants a confident shortlist. A creator wants a fair first impression. One ranking rarely serves both.",
      },
      {
        title: "Replace vague badges with evidence",
        body: "Show the kind of work, who it is for, and a recent outcome the creator can stand behind — not a star average alone.",
      },
      {
        title: "Design the empty state",
        body: "New creators need a path to a first piece of proof that does not depend on already being famous.",
      },
    ],
    decisions: [
      "Search that starts with the buyer’s goal, then filters by style and availability.",
      "A “new and relevant” shelf with an explanation, so it does not look like an ad.",
      "No public ranking that a creator cannot understand or influence.",
    ],
    measure: [
      {
        metric: "Search-to-inquiry rate",
        why: "Are people confident enough to start a conversation?",
      },
      {
        metric: "Share of inquiries to newer creators",
        why: "A healthier marketplace is not only the same names getting all the work.",
      },
      {
        metric: "Time to a shortlist of three",
        why: "Less wandering is a kindness if the three are actually relevant.",
      },
    ],
    assumptions: [
      "Buyers stall because relevance is unclear, not because there are too few creators.",
      "Creators will share specific proof if the prompt is concrete.",
      "A explained shelf for newer creators will not feel like a penalty to established ones.",
    ],
  },
  {
    slug: "team-collaboration",
    category: "Product discovery",
    title: "A Product Discovery Case Study on Trusted-Circle Group Savings",
    summary:
      "Exploring a group-savings opportunity for Slice to enable trusted, transparent and hassle-free saving circles.",
    tags: ["User Research", "Problem Validation", "Product Strategy"],
    tone: "peach",
    status: "Independent exercise",
    problem:
      "The opening question was whether removing host commission and auction discounts would change behaviour enough to give people a reason to choose Slice.",
    context:
      "An independent product discovery exercise about a possible Slice group-savings feature. It was not an official Slice initiative, and it did not become a launched product.",
    approach: [
      {
        title: "Ask people who already use chit arrangements",
        body: "An exploratory survey of 30 people with experience in informal chit arrangements among known groups.",
      },
      {
        title: "Read public reviews of organised chit funds",
        body: "Public reviews of Shriram Chits and Kapil Chits, treated as reported experiences rather than verified facts.",
      },
      {
        title: "Ask people who have never joined a group",
        body: "A second exploratory survey of 50+ people, plus six to seven personal conversations.",
      },
    ],
    decisions: [
      "The no-bidding, commission-free differentiator was not sufficiently validated.",
      "The proposed feature did not, by itself, address reliability, trust, transparency or accountability.",
      "Pause the original feature. Do not proceed to development at this stage.",
    ],
    measure: [
      {
        metric: "No adoption result",
        why: "Stated interest was not treated as proof that people would join or contribute real money.",
      },
      {
        metric: "No business outcome",
        why: "Possible effects on acquisition, retention and engagement stayed hypotheses.",
      },
    ],
    assumptions: [
      "Host commission and auction discounts might be important enough problems to change behaviour.",
      "Removing them might give people a reason to choose Slice.",
      "Those assumptions needed research before any feature was designed.",
    ],
  },
]

export const roles = [
  {
    id: "role-1",
    placeholder: true,
    company: "Company name",
    title: "Role title",
    dates: "Start — End",
    points: [
      "Replace with one thing you actually delivered.",
      "Replace with how you worked with the people around it.",
    ],
  },
  {
    id: "role-2",
    placeholder: true,
    company: "Company name",
    title: "Role title",
    dates: "Start — End",
    points: [
      "Replace with a workflow, launch, or stakeholder situation that was real.",
      "Link a case study only if the work is truly related.",
    ],
  },
]

export const notes = [
  {
    slug: "fit-without-a-dashboard",
    title: "What I look for before I use the words “product-market fit”",
    description:
      "A note on the signs I would want in conversations and behavior, before anyone draws a growth chart.",
    topic: "Product-market fit",
    readingMinutes: 3,
    paragraphs: [
      "I am careful with “product-market fit.” The phrase is often used as a mood. I would rather name the evidence that would change how a team spends the next quarter.",
      "The first sign I trust is repetition without prompting. Different customers, who do not know each other, describe the same painful moment in their own words. If we have to remind them of the problem, we are still selling the problem.",
      "The second sign is behavior that costs them something. They invite a colleague, replace a spreadsheet, or ask their manager for budget. A kind interview is weaker than a small, inconvenient action.",
      "The third is a boundary. Fit is also knowing who the product is not for yet. When every request is accepted, the team learns nothing about the center of the problem.",
      "None of this requires a large dataset. It does require notes we are willing to be wrong about, and a metric chosen after the pattern is clear — not before.",
    ],
  },
  {
    slug: "prioritization-is-a-conversation",
    title: "A score is not a decision",
    description:
      "Why I treat prioritization frameworks as a way to surface assumptions, especially on a B2B team with uneven evidence.",
    topic: "Prioritization",
    readingMinutes: 3,
    paragraphs: [
      "Scoring frameworks are useful because they force a team to look at the same factors. They are easy to misuse as a machine that produces a winner.",
      "On a B2B product the inputs are uneven. One row is a renewal conversation. Another is a support theme. Another is a hunch from someone who sat with users last month. Putting them on one 1-to-5 scale hides that difference unless we say it out loud.",
      "I would rather write the assumption under each score. “Effort is a 2 if we reuse the invite flow. It is a 4 if billing has to change.” The number matters less than the condition.",
      "A good priority discussion ends with a sentence: we are doing this now because of this evidence, we are not doing that yet, and this is what would change our minds. The framework can help the team get to that sentence. It should not replace it.",
    ],
  },
  {
    slug: "first-week-of-b2b-onboarding",
    title: "The first week of a B2B product is a product",
    description:
      "Onboarding is not a tour of the interface. It is the period when a team decides whether the tool belongs in their week.",
    topic: "Customer onboarding",
    readingMinutes: 3,
    paragraphs: [
      "Consumer onboarding can be a single person’s aha. B2B onboarding is often a small group trying to look competent in front of each other. That changes the design.",
      "The admin is rarely the daily user. If the first week only delights the person who signed the trial, the team that has to live in the tool may never arrive.",
      "I look for one shared action that proves the product fits their existing week: a project, a customer, a report they already owe someone. Tours and empty states that explain menus do not create that moment.",
      "I also look for the quiet failure. An invite that expires, a permission no one understands, a second user who lands somewhere blank. Those moments rarely show up in a feature list. They show up in a trial that goes cold without a complaint.",
      "If I were measuring that week, I would watch time-to-second-user and whether that person did the shared action. Logins are a weak proxy for belonging.",
    ],
  },
]
