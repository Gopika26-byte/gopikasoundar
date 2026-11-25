export const sections = [
  { id: "overview", number: "01", label: "Overview" },
  { id: "idea", number: "02", label: "Idea" },
  { id: "research", number: "03", label: "Research" },
  { id: "findings", number: "04", label: "Findings" },
  { id: "newcomers", number: "05", label: "New savers" },
  { id: "synthesis", number: "06", label: "Synthesis" },
  { id: "reframing", number: "07", label: "Reframing" },
  { id: "business", number: "08", label: "Business" },
  { id: "decision", number: "09", label: "Decision" },
  { id: "learnings", number: "10", label: "Learnings" },
] as const

export const decisionPath = ["Initial idea", "Research", "Evidence challenged it", "Did not proceed"]

export const facts = [
  { label: "Product context", value: "Slice" },
  { label: "Role", value: "Independent product discovery" },
  { label: "Focus", value: "Research, validation and strategy" },
  { label: "Outcome", value: "Did not proceed" },
]

export const assumptions = [
  {
    title: "Was the cost the problem?",
    body: "Whether host commission and auction discounts were among the most important problems for chit participants.",
  },
  {
    title: "Would removing them change behaviour?",
    body: "Whether taking those elements away would provide enough value for people to act differently.",
  },
  {
    title: "Would it make Slice the choice?",
    body: "Whether the model would give people a compelling reason to choose Slice over arrangements they already had.",
  },
]

export const researchPhases = [
  {
    figure: "30",
    title: "Informal chit participants",
    body: "People with experience in traditional chit arrangements among known groups.",
    aim: "Participation, motivations, communication, deductions, trust, payouts and interest in a digital alternative.",
  },
  {
    figure: "Reviews",
    title: "Shriram Chits and Kapil Chits",
    body: "Public reviews of two organised chit-fund companies.",
    aim: "Whether reported issues extended beyond auction discounts and organiser commissions.",
  },
  {
    figure: "50+",
    title: "People new to group savings",
    body: "Respondents who had never joined a chit fund or group-savings arrangement.",
    aim: "Current savings habits, goals, difficulty saving regularly, and concerns about joining a group.",
  },
  {
    figure: "6–7",
    title: "Personal conversations",
    body: "A small set of conversations used to compare survey themes with individual experiences.",
    aim: "Directional depth. Not treated as representative of all chit participants.",
  },
]

export const participantThemes = [
  { title: "Lump-sum access", body: "Access to a lump sum was an important reason people took part." },
  { title: "Trust", body: "Trust in the organiser and among members mattered." },
  { title: "Deductions", body: "Concern about deductions and payout calculations varied." },
  { title: "Reliability", body: "Delayed contributions and uncertainty about payout timing were worth investigating." },
  { title: "Coordination", body: "WhatsApp, phone calls and personal communication were commonly used to manage the group." },
  { title: "Transparency", body: "Shared records, clear payout schedules and understandable calculations looked potentially useful." },
]

export const reviewThemes = [
  "Payout delays and uncertainty after documentation.",
  "Questions about deductions or payout calculations.",
  "Administrative friction.",
  "Difficulty getting a timely customer-service response.",
  "Allegations of unfair practices or mishandling, which were not independently verified.",
]

export const saverObservations = [
  { title: "Familiar ways to save", body: "Bank accounts, recurring and fixed deposits, investments, gold and cash already served important needs." },
  { title: "Trust and control", body: "People worried about losing money, missed contributions, delayed payouts, disagreements and whom to trust." },
  { title: "Independent saving", body: "Some preferred to save on their own. Group participation would not suit everyone." },
  { title: "Useful, not proven", body: "Reminders, contribution tracking, payout schedules and clear distribution rules were considered potentially useful." },
  { title: "Mixed commission appeal", body: "Some found removing a host commission attractive. Others were unsure, said it would change little, or still had concerns about joining." },
]

export const initialAssumptions = ["Host commission", "Auction discounts"]

export const emergingPriorities = [
  { title: "Reliability and payout certainty", body: "Confidence that contributions and payouts happen as agreed." },
  { title: "Trust and accountability", body: "Confidence in the people involved, and clarity when someone misses a contribution." },
  { title: "Financial transparency", body: "Understandable contributions, deductions, payout calculations and rules." },
  { title: "Contribution coordination", body: "Visibility of payment status, upcoming contributions and changes in the group." },
]

export const hypotheses = [
  { title: "Acquisition", body: "Group invitations might introduce the app to potential new users." },
  { title: "Retention", body: "Recurring contribution schedules might give members a reason to return." },
  { title: "Engagement", body: "Members might open the app to check records, payment status and payout schedules." },
  { title: "Differentiation", body: "A transparent group-savings experience might be a new use case if existing options left a validated need unmet." },
]

export const feasibility = [
  "Missed contributions",
  "Member defaults and disputes",
  "Payout management",
  "Financial responsibility",
  "Legal and regulatory assessment",
  "Operational safeguards",
]

export const reasons = [
  {
    title: "The differentiator was not validated",
    body: "Host commission was not consistently a major concern. Bidding was not necessarily the main reason people were dissatisfied.",
  },
  {
    title: "The feature did not solve the bigger problems",
    body: "Reliability, trust, contribution discipline and transparent calculations needed more attention. Removing bidding and commission would not fix missed contributions, payout uncertainty or disputes.",
  },
  {
    title: "The business case stayed uncertain",
    body: "Possible acquisition, retention and engagement benefits had not been shown as meaningful incremental value for Slice.",
  },
  {
    title: "The risks were unresolved",
    body: "Missed contributions, disputes, payout management, financial responsibility, and legal or regulatory feasibility still needed assessment.",
  },
]

export const nextSteps = [
  "Interview a broader range of people, including satisfied participants and people who ran into specific problems.",
  "Find out how often problems occur, how severe they are, and which workarounds people already use.",
  "Decide whether reliability, transparency, coordination or another issue is the most important unmet need.",
  "Compare possible solutions with existing alternatives and with Slice's priorities.",
  "Validate a revised concept with users before committing to an MVP.",
  "Assess legal, operational and financial feasibility before considering real-money functionality.",
]

export const learnings = [
  "Start with a testable problem hypothesis, not an assumed feature.",
  "Use more than one source of evidence, and respect what each source cannot prove.",
  "Stated interest is not the same as adoption or a willingness to commit real money.",
  "A feature can sound appealing without solving the problem that matters.",
  "Customer value has to sit beside business impact, operational responsibility and risk.",
  "Be willing to change direction when the evidence challenges the original assumption.",
]
