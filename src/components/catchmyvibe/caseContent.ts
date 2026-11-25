export const sections = [
  { id: "introduction", number: "01", label: "Introduction" },
  { id: "summary", number: "02", label: "Executive summary" },
  { id: "problem", number: "03", label: "Problem discovery" },
  { id: "research", number: "04", label: "User research" },
  { id: "decisions", number: "05", label: "Research to decisions" },
  { id: "strategy", number: "06", label: "Strategy" },
  { id: "journey", number: "07", label: "User experience" },
  { id: "architecture", number: "08", label: "AI architecture" },
  { id: "scope", number: "09", label: "MVP scope" },
  { id: "requirements", number: "10", label: "Requirements" },
  { id: "delivery", number: "11", label: "Stack and roadmap" },
  { id: "trust", number: "12", label: "Budget and trust" },
  { id: "measurement", number: "13", label: "Testing and metrics" },
  { id: "launch", number: "14", label: "Go to market" },
  { id: "reflection", number: "15", label: "Reflection" },
] as const

export const facts = [
  { label: "Project type", value: "Capstone group project" },
  { label: "Domain", value: "Travel technology" },
  { label: "Team", value: "4 members" },
  { label: "Planned delivery", value: "16 weeks" },
]

export const frictions = [
  { title: "Repeated searching", body: "Travellers move between search, maps, reviews, booking sites, spreadsheets and group chats." },
  { title: "Decision fatigue", body: "Options for flights, trains, buses, hotels, activities and dining arrive in separate places." },
  { title: "Hard to coordinate", body: "Accommodation, sightseeing and transport have to be matched by hand." },
  { title: "Budget uncertainty", body: "Hidden costs and overruns show up after the pieces are already chosen." },
  { title: "Prices move", body: "Availability and fares can change before the plan is booked." },
  { title: "Low booking confidence", body: "Listings, refunds, support and confirmations are hard to trust across platforms." },
]

export const competitorConcerns = [
  "Package-management issues",
  "Flight-information discrepancies",
  "Hard-to-reach support",
  "Refund delays",
  "Unreliable hotel listings",
  "Cab no-shows",
  "Cashback or refund friction",
]

export const interviews = [
  {
    name: "Pooja",
    age: "25",
    context: "Friend-group travel",
    trip: "Goa with friends",
    time: "4–5 evenings",
    friction: "Switching apps, fear of missing a better deal, and budget overruns.",
  },
  {
    name: "Nirupama",
    age: "31",
    context: "Couple travel",
    trip: "Kerala as a couple",
    time: "Nearly a week",
    friction: "Matching hotels with sightseeing, and too many choices.",
  },
  {
    name: "Bhavani",
    age: "28",
    context: "Family travel with parents",
    trip: "A trip with parents",
    time: "3–4 days",
    friction: "Managing different needs, including comfort and accessibility.",
  },
  {
    name: "Sailesh",
    age: "22",
    context: "Solo backpacking",
    trip: "Himachal",
    time: "6 days",
    friction: "Finding affordable stays, and comparing the same options again.",
  },
  {
    name: "Krithika",
    age: "35",
    context: "Family travel",
    trip: "Dubai with family",
    time: "2 weeks",
    friction: "Managing bookings and coordinating family schedules.",
  },
]

export const trace = [
  { friction: "Too many sites and repeated comparisons", response: "Conversation-first trip intake and a unified planning workspace." },
  { friction: "Budget uncertainty and overspend", response: "Category-level budget calculation and budget optimisation." },
  { friction: "Options that do not fit the trip", response: "Recommendations based on dates, preferences, location, group and travel style." },
  { friction: "Plans that change after the first decisions", response: "Conversational edits, impact analysis and partial replanning." },
  { friction: "Doubt about prices and bookings", response: "Source attribution, provider revalidation and deterministic validation." },
  { friction: "Questions that continue after booking", response: "Saved trips, a dashboard and a post-booking AI Concierge." },
]

export const audiences = [
  {
    label: "Primary",
    body: "Tech-savvy young professionals, 22–40, including solo travellers and couples who want personalised planning without the workload.",
  },
  {
    label: "Secondary",
    body: "Families, friends and group travellers, business travellers extending a work trip, and international tourists.",
  },
]

export const differentiators = [
  "Conversational planning",
  "Multi-agent orchestration",
  "Personalised itineraries",
  "Budget optimisation and validation",
  "Booking preparation and an AI Concierge",
]

export const journey = [
  { n: "01", title: "Describe", body: "The traveller explains the trip in their own words." },
  { n: "02", title: "Clarify", body: "Intent extraction structures the request and asks only for missing essentials." },
  { n: "03", title: "Research", body: "Specialist agents look at transport, stays, weather, activities and dining." },
  { n: "04", title: "Compose", body: "The system assembles a day-by-day itinerary with estimated costs." },
  { n: "05", title: "Optimise and validate", body: "Budget and rule engines check totals, feasibility, timing and constraints." },
  { n: "06", title: "Review and edit", body: "The traveller reviews the plan and changes it in conversation." },
  { n: "07", title: "Book", body: "The booking workspace revalidates price and availability. The MVP uses mock providers." },
  { n: "08", title: "Continue", body: "The saved trip and AI Concierge stay available after booking." },
]

export const agentGroups = [
  {
    title: "Understand the request",
    kind: "agent" as const,
    items: [
      ["Travel Intent", "Extracts structured trip details and asks for missing essentials."],
      ["Destination Intelligence", "Resolves destinations, airports, stations and viable transport modes."],
    ],
  },
  {
    title: "Research in parallel",
    kind: "agent" as const,
    items: [
      ["Weather", "Checks forecast context for the dates and destination."],
      ["Flight, Train and Bus", "Each mode is a separate specialist agent."],
      ["Transport Coordination", "Selects a sensible way to travel across modes."],
      ["Hotel, Activity and Restaurant", "Finds stays, things to do and dining. These are separate agents."],
    ],
  },
  {
    title: "Compose and explain",
    kind: "agent" as const,
    items: [
      ["Itinerary", "Composes the day-by-day plan."],
      ["Budget Optimisation", "Swaps or trims selections to fit the stated budget."],
      ["Impact Analysis", "Decides which agents must rerun after an edit."],
      ["Concierge / Explainer", "Answers post-booking questions and explains recommendations."],
    ],
  },
]

export const deterministicNodes = [
  ["Budget Engine", "Exact decimal totals, category breakdown, taxes, fees and buffer."],
  ["Validation Engine", "Rule checks with severity levels."],
  ["Itinerary Composer / Recompose", "Timings, opening hours, pace and local travel structure."],
  ["Finalize", "Closes the planning run."],
]

export const moscow = [
  {
    priority: "Must have",
    tone: "must",
    items: [
      "Conversational AI planner, intent extraction and clarification",
      "Destination, transport, hotel, activity and restaurant recommendations",
      "Day-wise itinerary and a unified trip dashboard",
      "Budget calculation, optimisation and itinerary validation",
      "Conversational editing, mock-provider booking, and a price and availability recheck",
      "Trust and error recovery",
    ],
  },
  {
    priority: "Should have",
    tone: "should",
    items: ["Weather and travel alerts", "Group coordination", "Expense splitting", "Explainable recommendations"],
  },
  {
    priority: "Could have",
    tone: "could",
    items: ["Local guide marketplace", "Photography booking", "Rental vehicles"],
  },
  {
    priority: "Won't have in the MVP",
    tone: "wont",
    items: [
      "Medical tourism support",
      "e-SIM integration",
      "Voice-based assistant",
      "Carbon-footprint tracker",
      "Predictive price alerts",
    ],
  },
]

export const futureScope = [
  "Live flight, hotel and activity booking APIs",
  "Real-time pricing",
  "Payment-gateway integration",
  "Premium and collaborative capabilities beyond the MVP list",
]

export const epics = [
  {
    epic: "Onboarding and account",
    stories: [
      ["Create an account", "P0 · 5 points", "Register with name, email and password so trips are saved. Account created, duplicate email shows an error, password masked."],
      ["Sign in and stay signed in", "P0 · 5 points", "Log in and remain authenticated. Successful login opens the dashboard. Expired sessions are handled."],
    ],
  },
  {
    epic: "Conversational intent",
    stories: [
      ["Describe a trip in one sentence", "P0 · 8 points", "No lengthy form. Extract origin, destination, dates, travellers, budget and interests."],
      ["Ask only for missing details", "P0 · 5 points", "Only missing information is requested. No hallucinated values."],
      ["Understand relative dates", "P1 · 5 points", "Phrases such as “next month” become actual travel dates."],
      ["Handle unsupported destinations", "P0 · 3 points", "A friendly error is shown and the editable trip is retained."],
    ],
  },
  {
    epic: "Progressive planning",
    stories: [
      ["Watch the trip assemble", "P0 · 8 points", "Live progress updates for every planning stage."],
      ["Ready for review", "P0 · 3 points", "Status changes to Ready for Review when the itinerary is complete."],
      ["Recover from a planning failure", "P0 · 8 points", "If one component fails, partial results or a friendly error are shown. Planning is not fully blocked."],
    ],
  },
  {
    epic: "Understanding the itinerary",
    stories: [
      ["View the day-by-day plan", "P0 · 5 points", "Activities are chronological, with realistic timing."],
      ["View transport, hotels and dining", "P0 · 5 points", "Recommendations are complete and prices are displayed."],
      ["Trust the pricing", "P0 · 5 points", "Prices include provider metadata. Only provider-verified pricing is shown."],
    ],
  },
  {
    epic: "Budget",
    stories: [
      ["Budget summary", "P0 · 3 points", "Compare the traveller’s budget with the estimated cost, with a visual indicator."],
      ["Budget breakdown", "P1 · 3 points", "Expandable transport, hotel, food and activity costs."],
      ["Budget optimisation", "P0 · 8 points", "Recommendations are adjusted until the plan fits the budget."],
    ],
  },
  {
    epic: "Conversational edits",
    stories: [
      ["Modify the plan in plain language", "P0 · 8 points", "Only the affected itinerary components are regenerated."],
      ["Edit trip details", "P0 · 5 points", "Destination, dates and budget changes flow through the itinerary."],
      ["Undo a change", "P1 · 5 points", "The previous version is restored."],
      ["See a change summary", "P1 · 3 points", "A concise summary shows what changed."],
    ],
  },
  {
    epic: "Booking, revalidation and failure",
    stories: [
      ["Explore alternatives", "P1 · 5 points", "Comparable hotels, transport and activities are shown with pricing before booking."],
      ["Open the booking workspace", "P0 · 3 points", "Booking opens from the Ready state."],
      ["Add traveller profiles", "P0 · 5 points", "Profiles can be created and assigned."],
      ["Show missing booking details", "P0 · 3 points", "Missing fields are highlighted before review."],
      ["Revalidate before payment", "P0 · 8 points", "The latest price and availability are confirmed."],
      ["Approve a price change", "P0 · 3 points", "An increase requires explicit confirmation."],
      ["Replace a sold-out item", "P0 · 5 points", "Alternatives are offered when something is unavailable."],
      ["Pay the confirmed amount", "P0 · 5 points", "The payment amount matches the revalidated cost. In the MVP this flow is simulated with mock providers."],
      ["Book each service", "P0 · 8 points", "Each provider confirmation is separate."],
      ["Show booking references", "P0 · 3 points", "Booking IDs appear after confirmation."],
      ["Handle a partial booking failure", "P0 · 8 points", "A failed booking leads to a refund or an alternative, not a silent success."],
    ],
  },
  {
    epic: "After booking, and trust",
    stories: [
      ["Ask about the trip", "P1 · 8 points", "The Concierge answers from the confirmed itinerary."],
      ["View and reopen saved trips", "P0", "Trips are listed and a selected trip loads."],
      ["Rename, delete or start a new trip", "P1 / P0", "Rename persists, delete removes the trip, and a new composer can open."],
      ["Prevent hallucinated data", "P0 · 5 points", "The AI does not invent prices or bookings."],
      ["Work on a phone", "P0 · 5 points", "Layouts respond across devices."],
      ["Support accessibility", "P0", "Keyboard navigation, text alternatives and screen-reader support, against WCAG requirements in the backlog."],
    ],
  },
]

export const stack = [
  ["Frontend", "React 19, Vite, TypeScript, Tailwind CSS", "The responsive planning interface."],
  ["Backend", "FastAPI", "APIs and orchestration services."],
  ["Data", "PostgreSQL", "Users, trips, itineraries and booking records."],
  ["Real-time and cache", "Redis", "Caching and progressive event updates."],
  ["Generative AI", "Google Gemini", "Understanding and generating language."],
  ["Agent orchestration", "LangGraph", "Specialist agents and workflow state."],
]

export const roadmap = [
  ["1–2", "Discovery and planning", "Requirements, research, competitor review, MVP definition, PRD and roadmap."],
  ["3–4", "UX and UI", "Wireframes, user flows, design system and an interactive prototype."],
  ["5–10", "Development", "Frontend, backend, database, AI agents and APIs."],
  ["11–13", "Integration and testing", "End-to-end integration, QA and user acceptance testing."],
  ["14–16", "Deployment and launch", "Deployment, fixes, documentation, demo and feedback."],
]

export const roles = [
  ["Product management", "Product vision, roadmap, stakeholder communication, sprint planning, user stories and testing coordination. During a launch, this role also covers KPI tracking and feedback prioritisation."],
  ["Full-stack development", "React frontend, FastAPI backend, PostgreSQL, API integration and deployment."],
  ["AI engineering", "Gemini, LangGraph, specialist agents, prompt engineering and itinerary generation."],
  ["UI, UX and QA", "User research, wireframes, Figma, usability testing, functional testing and user acceptance testing."],
]

export const tests = [
  ["Unit", "Budget calculations, itinerary generation, intent extraction and validation logic."],
  ["Integration", "Agents, backend APIs, database and frontend working together."],
  ["System", "The path from trip creation through itinerary generation to booking confirmation."],
  ["Functional", "Planning, hotel recommendations, budget optimisation, editing and the booking workflow."],
  ["Usability", "People creating a trip, changing the itinerary and completing a booking."],
  ["User acceptance", "A pilot across solo, couple, family, business and friend-group contexts."],
  ["Performance", "AI response time, itinerary generation speed, concurrent use and API latency."],
  ["Security", "Authentication, authorisation, payment security, encryption and privacy."],
]

export const targets = [
  ["Itinerary generation", "Under 10 seconds"],
  ["Most actions", "Under 2 seconds"],
  ["Functional test pass rate", "Above 95%"],
  ["Open critical bugs", "Zero"],
  ["Booking success", "Above 99%"],
  ["UAT satisfaction", "Above 4.5 / 5"],
  ["System availability", "Above 99.9%"],
]

export const metricGroups = [
  ["Product", "Time to plan, steps to booking, drop-off rate."],
  ["Experience", "NPS, satisfaction, repeat bookings and retention."],
  ["AI quality", "Recommendation accuracy, AI itinerary adoption and savings achieved."],
  ["Business", "Booking conversion, revenue per booking, customer lifetime value, acquisition and active users."],
]

export const risks = [
  ["AI inaccuracies", "Deterministic validation and prompt iteration."],
  ["Provider or API failures", "Retries, fallbacks, and mock providers before live APIs."],
  ["Budget errors", "An exact calculation engine, not an estimated sentence from the model."],
  ["Privacy", "Consent, collecting only what planning needs, and security controls."],
  ["Booking changes", "Revalidate before payment and ask for explicit approval."],
  ["A 16-week team of four", "MoSCoW, so the core planning loop comes before the wider travel ecosystem."],
]

export const launchStages = [
  ["Preparation", "T–8 to T–6 weeks", "Finish the MVP, end-to-end and security testing, AI response checks, research, pricing and launch assets."],
  ["Private alpha", "T–4 weeks", "Invite friends, family, product managers, frequent travellers, AI enthusiasts and travel bloggers. Find bugs and refine the experience."],
  ["Closed beta", "T–2 weeks", "Invite a planned 500–1,000 waitlist users. Test onboarding, activation, retention, booking intent and satisfaction."],
  ["Public launch", "Open registration", "Publish the product site, demo and FAQ. Enable the planned planner and booking experience. Run PR and digital campaigns."],
  ["First 90 days", "After launch", "Fix critical bugs, improve recommendations and onboarding, expand providers, and strengthen retention."],
]

export const launchTargets = [
  ["Website visitors", "50,000+"],
  ["Sign-ups", "10,000"],
  ["Itineraries created", "5,000"],
  ["Booking conversion", "8–10%"],
  ["Completed bookings", "500+"],
]
