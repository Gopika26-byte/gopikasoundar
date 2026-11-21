/**
 * Personalize the site here.
 * Leave a field empty rather than inventing an employer, metric, quote, or link.
 * Case studies, lab scenarios, and notes are independent exercises — not employment history.
 */

import { myntraLoopNarrative, type CaseNarrative } from "./myntraLoop"

export const profile = {
  name: "Gopika",
  roleLabel: "Product Manager",
  email: "gopikasoundar096@gmail.com",
  phone: "7338802855",
  linkedin: "https://www.linkedin.com/in/gopika-soundar-4a06a93b6/",
  instagram: "",
  resumeHref: "",
  availability:
    "Open to conversations about B2B SaaS product roles, and to thoughtful collaborations.",
}

export const navItems = [
  { id: "home", label: "Home", section: "home" },
  { id: "about-heading", label: "About Me", section: "about" },
  { id: "work-start", label: "Featured Work", section: "work" },
  { id: "documentation-start", label: "PRDs", section: "documentation" },
  { id: "teardowns-start", label: "Product Teardowns", section: "teardowns" },
  { id: "experience-start", label: "Experience", section: "experience" },
] as const

export const hero = {
  eyebrow: "Product Manager",
  lines: ["Building", "what's next,", "for people."],
  intro:
    "I'm Gopika, an aspiring Product Manager who loves turning customer pain points into meaningful product opportunities through research, data-driven decisions, and thoughtful problem-solving.",
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
  heading: "From Troubleshooting Problems to Building Better Products",
  paragraphs: [
    {
      text: "My journey began as a Technical Support Engineer at Cognizant, working across 100+ applications in the agriculture domain. Investigating recurring issues and collaborating with development teams gave me a firsthand understanding of user pain points and how products perform in real-world situations.",
    },
    {
      text: "Over time, I became more curious about why problems existed and how products could prevent them, rather than simply resolving them.",
      emphasis: "why problems existed and how products could prevent them",
    },
    {
      text: "That curiosity led me to Product Management.",
      variant: "turn" as const,
    },
    {
      text: "I began building that mindset through product management, Generative AI and Agentic AI learning at BITSOM–Masai, alongside hands-on projects, product teardowns, user research and independent case studies.",
    },
    {
      text: "Today, I'm bringing my technical experience and problem-solving mindset into product thinking—focusing on what can be built better and why it matters.",
    },
    {
      text: "My perspective has evolved: from resolving what went wrong to discovering what could be built better.",
      variant: "closing" as const,
    },
  ],
  name: "Gopika",
  designationFrom: "Technical Support Engineer",
  designationInto: "Transitioning into",
  designationTo: "Product Management",
  education: {
    label: "Graduated",
    qualification: "Product Management with Generative & Agentic AI",
    fromLabel: "From",
    institution: "BITSOM (BITS Pilani)",
  },
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
      "An independent product strategy case study exploring how Myntra could turn unused branded clothing into a managed resale experience through outright buyback, transparent valuation, quality inspection and Loop Points.",
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
      "An independent exercise on discovery in a two-sided marketplace: less browsing, clearer signals, and a fairer chance for newer creators.",
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
    category: "B2B platform",
    title: "A Product Discovery Case Study on Trusted-Circle Group Savings",
    summary:
      "An independent exercise on a B2B workflow: helping a cross-functional team see what is blocked, who owns it, and what can wait.",
    tags: ["Execution", "Strategy", "Analytics"],
    tone: "sage",
    problem:
      "Status lives in chats, decks, and memory. Leads add meetings to recover a picture the tool should already hold.",
    context:
      "Practice work on a common B2B collaboration problem. It is not a case study of a company I worked for, and it claims no usage or revenue result.",
    approach: [
      {
        title: "Find the question the meeting is standing in for",
        body: "Usually it is “what changed, what is stuck, and what do you need from me?” The product should answer that before anyone books time.",
      },
      {
        title: "Attach status to the work, not to a person",
        body: "A weekly round-robin update punishes quiet progress. A work item with an owner, a blocker, and a next step is easier to trust.",
      },
      {
        title: "Protect focus",
        body: "Visibility should not become another inbox. Digest the exceptions. Leave the rest alone.",
      },
    ],
    decisions: [
      "One shared board with a plain blocker field, not a new status taxonomy.",
      "A Monday digest of blocked and newly unblocked work.",
      "No requirement to write a narrative update if the work item is current.",
    ],
    measure: [
      {
        metric: "Recurring status meetings cancelled or shortened",
        why: "The point is time returned, not another chart to present.",
      },
      {
        metric: "Share of active work with an owner and next step",
        why: "A board that is mostly blank is not visibility.",
      },
      {
        metric: "Age of open blockers",
        why: "Seeing a blocker only helps if it gets resolved sooner.",
      },
    ],
    assumptions: [
      "Teams avoid the current tool because updating it feels like extra work.",
      "Leads will give up a meeting if the digest is reliable for two weeks.",
      "A smaller set of fields will be kept fresher than a comprehensive one.",
    ],
  },
]

export const framework = [
  {
    id: "discover",
    name: "Discover",
    question: "What problem are we solving?",
    explanation:
      "I try to separate the complaint people repeat from the situation that causes it. A feature request is a clue, not a brief.",
    artifact: "Problem notes",
    artifactBody:
      "Who is stuck, what they do today, what it costs them, and what we are explicitly not solving yet.",
    example:
      "In the planning exercise, the repeated request was “more dashboards.” The stall was the first screen asking for a whole financial life.",
    study: "",
  },
  {
    id: "define",
    name: "Define",
    question: "Who experiences it, and why does it matter?",
    explanation:
      "I name the person, the moment, and the consequence of leaving it alone — for them and for the business.",
    artifact: "Problem statement",
    artifactBody:
      "When [person] tries to [job], they hit [friction], which leads to [consequence].",
    example:
      "In the marketplace exercise, buyers and newer creators feel the same ranking in opposite ways. One definition would have hidden that.",
    study: "creator-ecosystem",
  },
  {
    id: "prioritize",
    name: "Prioritize",
    question: "Why should we solve this now?",
    explanation:
      "I compare pain, reach, effort, confidence, and what the company is actually trying to win this quarter. A score is a conversation starter.",
    artifact: "Priority notes",
    artifactBody:
      "A short list with the bet, the cost of waiting, and what would make us reverse the call.",
    example:
      "Three plausible requests, and a reason to do one of them first. The score is only there to make the assumption visible.",
    study: "",
  },
  {
    id: "shape",
    name: "Shape",
    question: "What is the smallest valuable solution?",
    explanation:
      "I look for the thinnest version that lets a real person finish the job, and I write down what we are leaving out.",
    artifact: "Solution sketch",
    artifactBody:
      "The one flow, the empty state, and the boundaries — including what support and legal need to know.",
    example:
      "The planning exercise keeps the first visit to a single decision, and says so on the screen.",
    study: "",
  },
  {
    id: "deliver",
    name: "Deliver",
    question: "How do we bring it to customers?",
    explanation:
      "I want a release a team can explain: who it is for, how we will know it is safe, and what we will watch in the first week.",
    artifact: "Release outline",
    artifactBody:
      "Audience, rollout, owner, support notes, and the one question we hope to answer after launch.",
    example:
      "For the collaboration exercise I would ship the blocker field and the Monday digest before any new reporting suite.",
    study: "team-collaboration",
  },
  {
    id: "measure",
    name: "Measure",
    question: "Did the solution make a difference?",
    explanation:
      "I pick a metric tied to the problem, a baseline, and a decision the number is allowed to change. Vanity stays off the page.",
    artifact: "Success notes",
    artifactBody:
      "Metric, baseline, segment, time window, and what we will do if it does not move.",
    example:
      "Each exercise on this site ends with measures I would watch — not with results I am claiming.",
    study: "",
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
