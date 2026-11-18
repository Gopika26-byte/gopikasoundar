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
  intro: string
  disclaimer: string
  sections: TeardownSection[]
}

export const teardowns: Teardown[] = [
  {
    slug: "zepto-support",
    category: "Customer experience",
    product: "Zepto",
    title: "A UX teardown of Zepto's customer support and complaint resolution experience",
    summary:
      "Exploring how customers navigate support and complaint resolution, where friction can emerge during an issue, and how the experience could become more transparent, reassuring, and effortless.",
    tags: ["Customer Experience", "Support Journey", "UX Analysis"],
    tone: "peach",
    cta: "Explore Teardown",
    intro:
      "This is an independent reading of a quick-commerce support job, with Zepto as the product in view. It is not an audit, not a recorded usability study, and not affiliated with Zepto. Where I have not sat with their current screens, the notes are hypotheses to check, not findings I am claiming as fact.",
    disclaimer: "Independent analysis. Not affiliated with Zepto. No private data and no claimed support metrics.",
    sections: [
      {
        heading: "Why this moment matters",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "In quick commerce the promise is measured in minutes. A missing item, a wrong item, or a bag that never arrives is not a later inconvenience. It is the order.",
              "Support is part of the product. If the path from “something is wrong” to “I know what happens next” is slow or vague, the speed of delivery does not survive the complaint.",
            ],
          },
        ],
      },
      {
        heading: "The job",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "A customer who already paid needs to name the problem, see a resolution they can understand, and know whether it is pending, approved, or finished. They should not have to retell an order the app already has.",
            ],
          },
        ],
      },
      {
        heading: "The journey I would walk",
        blocks: [
          {
            kind: "list",
            intro: "These are the steps in the job, not a recording of a specific Zepto session.",
            items: [
              "Notice the issue on a live or just-delivered order.",
              "Find help from that order, not from a general help home.",
              "Describe the problem in the customer’s words.",
              "See what can actually be done: replace, refund, or neither, and why.",
              "Watch the resolution move, instead of waiting on a single “we’re on it.”",
              "Reach a close: money returned, item replaced, or a clear no.",
            ],
          },
        ],
      },
      {
        heading: "Hypotheses, not claimed findings",
        blocks: [
          {
            kind: "notes",
            items: [
              {
                label: "Discoverability",
                body: "Help that lives far from the item makes people hunt while the order is still the emotional center. I would check whether support starts on the order and on the specific item.",
              },
              {
                label: "Clarity",
                body: "Reason lists often use internal categories. I would check whether a person can say “the milk was missing” without guessing which label the company prefers.",
              },
              {
                label: "Transparency",
                body: "A ticket that does not say what was decided, or when, creates a second contact. I would look for a visible state: received, reviewing, resolved, and what “resolved” changed.",
              },
              {
                label: "Reassurance",
                body: "Refund and replacement are different promises. I would check that the screen says which one is happening, not a generic apology.",
              },
              {
                label: "Effort",
                body: "Asking for the order number, the items, and photos the app could already attach is friction. I would see what the customer still has to type.",
              },
            ],
          },
        ],
      },
      {
        heading: "What I would change first",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Start from the order. One reason, in plain language. A resolution that names the outcome. A status the customer can reopen without starting over.",
              "I would not begin with a new help center. The order is already the context.",
            ],
          },
        ],
      },
      {
        heading: "A resolution path",
        blocks: [
          {
            kind: "list",
            items: [
              "The order shows “Something wrong?” on the items that can still be disputed.",
              "The customer picks the item and a plain reason. The order details are already attached.",
              "The next screen says the outcome in one sentence, or says what is still being checked and by when.",
              "The same order later shows the state. Closing the app does not hide it.",
            ],
          },
        ],
      },
      {
        heading: "Proposed measures",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "These are measures I would define before treating any change as a success. They are not Zepto’s numbers and not results I am reporting.",
            ],
          },
          {
            kind: "list",
            items: [
              "Time from opening the order issue to a stated outcome.",
              "Share of issues completed without a second contact.",
              "Repeat contacts about the same order.",
              "A short rating only after the outcome is visible, not after the first message.",
            ],
          },
        ],
      },
      {
        heading: "Takeaway",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Speed creates a support problem that generic help cannot carry. The product already knows the order. The experience should use that, and it should say what happens next.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "phonepe-account-recovery",
    category: "Trust and account experience",
    product: "PhonePe",
    title: "Rethinking PhonePe's account recovery experience",
    summary:
      "Examining how users recover access to their accounts, the moments where trust and clarity matter most, and opportunities to make recovery more intuitive and reassuring.",
    tags: ["Account Recovery", "Trust", "UX Analysis"],
    tone: "lavender",
    cta: "Explore Teardown",
    intro:
      "This is an independent look at account recovery as a product problem, with PhonePe as the product in view. It is not a security review, not a claim of a flaw, and not affiliated with PhonePe. I am not publishing private account details or a step I have not verified on a current build.",
    disclaimer:
      "Independent analysis. Not affiliated with PhonePe. No security vulnerability is claimed. No recovery metrics are reported.",
    sections: [
      {
        heading: "Why recovery is a product",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "A payments account is not a casual login. Losing access means losing the way a person pays, receives, and proves who they are in the app. The recovery flow has to be strict and still understandable.",
              "Trust here is not a softer password screen. It is the person knowing which account they are recovering, why a step failed, and what they can do next without guessing.",
            ],
          },
        ],
      },
      {
        heading: "The job",
        blocks: [
          {
            kind: "list",
            intro: "The path I would hold the live product against. This is the job, not a transcript of PhonePe’s current screens.",
            items: [
              "Realize they cannot get in, and find recovery without already being signed in.",
              "Identify the right account.",
              "Complete the checks the product requires.",
              "Understand a failure: wrong detail, locked step, or a wait.",
              "See the next allowed action.",
              "Land back in the account, or get a clear stop.",
            ],
          },
        ],
      },
      {
        heading: "What I would examine",
        blocks: [
          {
            kind: "notes",
            items: [
              {
                label: "Discoverability",
                body: "Recovery often hides behind “login trouble.” I would check whether a locked-out person can find it from the signed-out screen in one obvious step.",
              },
              {
                label: "Which account",
                body: "People have more than one number or email in memory. I would look for a confirmation of which account is being recovered before the hard checks begin.",
              },
              {
                label: "Failed steps",
                body: "A red error that only says “try again” teaches nothing. I would look for a reason they can act on, without the screen revealing a way around the check.",
              },
              {
                label: "Waiting",
                body: "Some checks are not instant. I would see whether the product says that a wait is expected, and where the person can look later.",
              },
              {
                label: "Reassurance",
                body: "Security copy that only says “for your protection” can feel like a wall. I would look for one sentence on what the check is protecting and what success looks like.",
              },
            ],
          },
        ],
      },
      {
        heading: "A boundary",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Making recovery clearer is not the same as making it easier to pass. I would not recommend fewer checks. I would recommend that every check explains itself, and that a failure does not dump the person at the start with no memory of how far they got.",
            ],
          },
        ],
      },
      {
        heading: "A recovery path I would test",
        blocks: [
          {
            kind: "list",
            items: [
              "Signed-out screen: one entry, “Can’t access your account?”",
              "Confirm the account with a masked hint before verification starts.",
              "Show the steps up front, including any step that may take time.",
              "On failure, stay on that step, say what was wrong, and keep the earlier confirmations.",
              "On success, say that access is restored and what, if anything, was limited for a short time.",
            ],
          },
        ],
      },
      {
        heading: "Proposed measures",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Proposed only. These are not PhonePe’s figures.",
            ],
          },
          {
            kind: "list",
            items: [
              "Share of recovery attempts that finish.",
              "Time from the first recovery screen to access, or to a clear stop.",
              "Drop-off at each step.",
              "Support contacts that are only “I can’t get in.”",
              "Share of attempts that pass verification on the first try, read beside drop-off so speed is not mistaken for weaker checks.",
            ],
          },
        ],
      },
      {
        heading: "Takeaway",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Account recovery is a trust product. The person should leave every step knowing whether they are closer to access, what failed, and what they are allowed to do next. Clarity is not a weaker lock.",
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
