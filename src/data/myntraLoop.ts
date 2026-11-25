export type CaseBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quotes"; items: { who: string; text: string }[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][]; note?: string }
  | { type: "columns"; items: { title: string; points: string[] }[] }
  | { type: "callout"; text: string }
  | { type: "note"; text: string }
  | { type: "formula"; text: string }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "flow"; items: string[] }
  | {
      type: "bars"
      title: string
      kind: "research" | "hypothesis" | "illustrative"
      max: number
      items: { name: string; value: number; display: string; highlight?: boolean }[]
      note?: string
    }
  | {
      type: "stack"
      title: string
      kind: "illustrative"
      totalLabel: string
      parts: { name: string; value: number; display: string }[]
      note?: string
    }

export type CaseSection = {
  id: string
  number: string
  label: string
  heading: string
  emphasis?: boolean
  blocks: CaseBlock[]
}

export type CaseNarrative = {
  eyebrow: string
  title: string
  project: string
  tagline: string
  intro: string[]
  meta: { label: string; value: string }[]
  disclosure: string
  sections: CaseSection[]
}

export const myntraLoopNarrative: CaseNarrative = {
  eyebrow: "Independent product strategy & management case study",
  title: "Turning Pre-Loved Fashion into Future Loyalty",
  project: "Myntra Loop",
  tagline: "Buy on Myntra. Wear it. Pass it back. Give fashion another life.",
  intro: [
    "Fashion commerce traditionally focuses on helping customers discover and purchase new products. But what happens when customers stop using the clothes they already own?",
    "Myntra Loop explores an opportunity to extend the customer relationship beyond the first purchase through a centrally managed buyback and resale experience.",
    "By enabling customers to sell eligible garments back to Myntra in exchange for Loop Points, the concept connects convenient selling with trustworthy pre-owned shopping.",
  ],
  meta: [
    { label: "Product", value: "Myntra Loop" },
    { label: "Category", value: "Fashion | Circular Commerce | Managed Resale" },
    { label: "Business model", value: "Myntra-managed outright buyback and resale" },
    { label: "Initial MVP category", value: "Branded Women's Kurta Sets" },
    {
      label: "Role",
      value: "Product Strategy, Research, Problem Discovery, Product Definition and Business Model Design",
    },
  ],
  disclosure:
    "Myntra Loop is an independent product concept developed as a product management case study. It is not an officially commissioned, approved or implemented Myntra initiative.",
  sections: [
    {
      id: "executive-summary",
      number: "01",
      label: "Executive Summary",
      heading: "Extending the Customer Relationship Beyond the First Purchase",
      blocks: [
        {
          type: "p",
          text: "Fashion commerce traditionally focuses on helping customers discover and purchase new products. However, the relationship with a garment does not necessarily end after its first purchase.",
        },
        {
          type: "p",
          text: "Many customers have clothes in their wardrobes that they no longer wear but that remain in usable condition.",
        },
        {
          type: "p",
          text: "Some keep these garments indefinitely, while others donate or discard them. Customers who consider selling often face friction in finding buyers, determining prices and managing the selling process.",
        },
        {
          type: "p",
          text: "At the same time, potential buyers are interested in affordable branded fashion but hesitate because of concerns about hygiene, garment condition and purchase reliability.",
        },
        {
          type: "p",
          text: "This creates an opportunity for Myntra to explore a managed resale experience connecting both sides of the customer journey.",
        },
        { type: "h3", text: "The proposed solution: Myntra Loop" },
        {
          type: "p",
          text: "Myntra Loop is a centrally managed buyback and resale experience that allows existing Myntra customers to sell eligible garments back to Myntra in exchange for Loop Points.",
        },
        {
          type: "p",
          text: "Myntra purchases garments that pass predefined physical inspection criteria, prepares them for resale and makes them available to other customers through a dedicated pre-owned shopping experience.",
        },
        { type: "h3", text: "Strategic proposition" },
        {
          type: "columns",
          items: [
            {
              title: "Sellers",
              points: [
                "Convenient garment selling.",
                "Transparent purchase valuation.",
                "Doorstep collection.",
                "Immediate Loop Points.",
              ],
            },
            {
              title: "Buyers",
              points: [
                "Affordable branded fashion.",
                "Quality-checked garments.",
                "Actual garment photographs.",
                "Condition transparency.",
              ],
            },
            {
              title: "Myntra",
              points: [
                "Additional customer engagement.",
                "Potential resale revenue.",
                "Potential repeat purchases.",
                "Extended garment lifecycle.",
              ],
            },
          ],
        },
        { type: "h3", text: "Central product decision" },
        {
          type: "p",
          text: "Rather than creating another peer-to-peer marketplace, I proposed an outright buyback model in which Myntra owns the complete resale lifecycle.",
        },
        {
          type: "p",
          text: "However, this model introduces inventory ownership, upfront acquisition costs and unsold-stock risk.",
        },
        {
          type: "p",
          text: "To address this, I developed an economics-first valuation framework that determines the maximum economically viable purchase price before communicating a minimum guaranteed value to sellers.",
        },
        { type: "h3", text: "Recommendation" },
        {
          type: "callout",
          text: "Proceed with a controlled MVP pilot, beginning with branded women's kurta sets, and expand only after validating customer demand, operational feasibility and full-cohort unit economics.",
        },
      ],
    },
    {
      id: "problem-discovery",
      number: "02",
      label: "Problem Discovery",
      heading: "What Happens to Clothes When Customers No Longer Use Them?",
      blocks: [
        {
          type: "quotes",
          items: [
            {
              who: "The potential seller",
              text: "I have clothes in good condition that I no longer use, but selling them feels like too much effort. I don't know where to start or how much they are worth.",
            },
            {
              who: "The potential buyer",
              text: "I would consider buying branded pre-owned clothing at a better price, but I am not confident about its hygiene, quality or actual condition.",
            },
          ],
        },
        { type: "h3", text: "Seller-side problem: Unused value remains locked in wardrobes" },
        {
          type: "p",
          text: "Customers may have garments that are still usable but no longer fit their lifestyle, preferences or needs.",
        },
        {
          type: "p",
          text: "Converting those garments into value requires:",
        },
        {
          type: "list",
          items: [
            "Finding an appropriate resale platform.",
            "Creating product listings.",
            "Determining a reasonable selling price.",
            "Finding interested buyers.",
            "Coordinating delivery.",
            "Managing negotiations and transactions.",
          ],
        },
        {
          type: "callout",
          text: "Customers lack a convenient and transparent way to recover value from unused garments without independently managing the resale process.",
        },
        { type: "h3", text: "Buyer-side problem: Uncertainty prevents purchase confidence" },
        {
          type: "p",
          text: "Potential buyers may be attracted to affordable branded clothing but face concerns about:",
        },
        {
          type: "list",
          items: [
            "Hygiene and cleaning.",
            "Visible stains and fabric damage.",
            "Wear and tear.",
            "Accurate sizing.",
            "Seller reliability.",
            "Returns and refunds.",
          ],
        },
        {
          type: "callout",
          text: "Customers lack sufficient garment-level information and purchase assurance to confidently evaluate pre-owned clothing online.",
        },
        { type: "h3", text: "Opportunity statement" },
        {
          type: "p",
          text: "Can Myntra make selling unused clothing more convenient while making pre-owned fashion more trustworthy and accessible?",
        },
        {
          type: "p",
          text: "This became the central problem statement guiding Myntra Loop.",
        },
      ],
    },
    {
      id: "research",
      number: "03",
      label: "Research & Discovery",
      heading: "Understanding Both Sides Before Defining the Solution",
      blocks: [
        {
          type: "p",
          text: "I used quantitative and qualitative research before defining the product.",
        },
        { type: "h3", text: "Research methodology" },
        {
          type: "table",
          headers: ["Method", "Sample", "Objective"],
          rows: [
            ["Exploratory survey", "100 respondents", "Identify behavioural patterns, motivations and barriers"],
            ["Customer interviews", "10 participants", "Understand customer experiences and unmet needs"],
            ["Industry interviews", "2 operators", "Understand operational and commercial realities"],
          ],
        },
        { type: "h3", text: "Customer interview segmentation" },
        {
          type: "table",
          headers: ["Participant segment", "Participants"],
          rows: [
            ["Existing pre-owned buyers", "2"],
            ["Potential pre-owned buyers", "2"],
            ["Existing pre-owned sellers", "2"],
            ["Potential sellers", "2"],
            ["Pre-owned fashion non-adopter", "1"],
            ["Concept-resistant thrift enthusiast", "1"],
            ["Total", "10"],
          ],
        },
        {
          type: "p",
          text: "The interviews deliberately included existing participants and non-adopters to understand both positive experiences and resistance.",
        },
        { type: "h3", text: "Survey topics" },
        {
          type: "list",
          items: [
            "Ownership of unused clothing.",
            "Existing disposal and selling behaviour.",
            "Barriers to selling.",
            "Interest in buying pre-owned fashion.",
            "Buyer concerns around hygiene and quality.",
            "Preferred trust-building measures.",
            "Interest in a platform-managed experience.",
          ],
        },
        { type: "h3", text: "Industry stakeholder interviews" },
        {
          type: "p",
          text: "I spoke with two pre-owned fashion store operators to understand:",
        },
        {
          type: "list",
          items: [
            "Garment sourcing and selection.",
            "Purchase valuation.",
            "Physical inspection and grading.",
            "Cleaning and preparation.",
            "Inventory turnover.",
            "Unsold stock management.",
          ],
        },
        { type: "h3", text: "Research limitation" },
        {
          type: "note",
          text: "This was exploratory research, not a representative study of the Indian fashion market. The two operator discussions are individual stakeholder inputs, not industry-wide benchmarks.",
        },
      ],
    },
    {
      id: "insights",
      number: "04",
      label: "Research Insights",
      heading: "What the Research Revealed",
      blocks: [
        {
          type: "p",
          text: "Exploratory survey. Sample size: 100 respondents.",
        },
        { type: "h3", text: "Survey findings" },
        {
          type: "table",
          headers: ["Finding", "Respondents"],
          rows: [
            ["Have at least one unused garment", "93"],
            ["Have considered selling but never tried", "45"],
            ["Do not know where to sell", "46"],
            ["Find it difficult to find buyers", "33"],
            ["Interested in buying pre-owned fashion through a trusted platform", "55"],
            ["Interested in both buying and selling", "46"],
          ],
        },
        {
          type: "bars",
          title: "Unused clothing ownership",
          kind: "research",
          max: 100,
          items: [{ name: "Have at least one unused garment", value: 93, display: "93 of 100" }],
          note: "Exploratory survey of 100 respondents.",
        },
        {
          type: "bars",
          title: "Seller-side barriers",
          kind: "research",
          max: 100,
          items: [
            { name: "Do not know where to sell", value: 46, display: "46" },
            { name: "Find it difficult to find buyers", value: 33, display: "33" },
            { name: "Have considered selling but never tried", value: 45, display: "45" },
          ],
          note: "Respondents out of 100. These findings are not mutually exclusive.",
        },
        { type: "h3", text: "Buyer concerns" },
        {
          type: "table",
          caption: "Multiple-selection responses are not necessarily mutually exclusive.",
          headers: ["Concern", "Responses"],
          rows: [
            ["Hygiene", "58"],
            ["Stains or damage", "49"],
            ["Wear and tear", "43"],
            ["Preferred trust-building measure: Platform quality inspection", "52"],
          ],
        },
        {
          type: "bars",
          title: "Buyer concerns",
          kind: "research",
          max: 100,
          items: [
            { name: "Hygiene", value: 58, display: "58" },
            { name: "Stains or damage", value: 49, display: "49" },
            { name: "Wear and tear", value: 43, display: "43" },
            { name: "Prefer platform quality inspection", value: 52, display: "52" },
          ],
          note: "Multiple-selection responses are not necessarily mutually exclusive.",
        },
        { type: "h3", text: "Insight 1 — Unused clothing represents a potential supply opportunity" },
        {
          type: "p",
          text: "93 respondents reported having unused garments. However, selling was not an established behaviour for most respondents.",
        },
        { type: "callout", text: "Product implication: Reduce the effort required to discover and initiate selling." },
        { type: "h3", text: "Insight 2 — Convenience alone is not enough" },
        {
          type: "p",
          text: "Potential sellers also want clarity about the value they can recover before committing time to the process.",
        },
        { type: "callout", text: "Product implication: Combine doorstep pickup with transparent indicative valuation." },
        { type: "h3", text: "Insight 3 — Buyer trust requires evidence" },
        {
          type: "p",
          text: "Customers need actual garment photographs, accurate descriptions and visible condition information.",
        },
        {
          type: "callout",
          text: "Product implication: Introduce garment-level inspection, condition grading and defect disclosure.",
        },
        { type: "h3", text: "Insight 4 — Affordable branded fashion is an important motivation" },
        { type: "p", text: "Customers see value in accessing branded clothing at lower prices." },
        {
          type: "callout",
          text: "Product implication: Focus on quality-assured garments with meaningful resale potential.",
        },
        { type: "h3", text: "Insight 5 — Every accepted garment creates operational obligations" },
        {
          type: "p",
          text: "Inspection, cleaning, storage, logistics and unsold inventory affect the economics.",
        },
        {
          type: "callout",
          text: "Product implication: Start with a focused category and validate full-lifecycle costs.",
        },
        { type: "h3", text: "Insight 6 — Brand credibility alone cannot guarantee trust" },
        {
          type: "p",
          text: "An established platform may encourage adoption, but some experienced thrift shoppers remain sceptical of large fashion platforms.",
        },
        {
          type: "callout",
          text: "Product implication: Demonstrate quality and transparency through actual operating practices.",
        },
        { type: "h3", text: "Research synthesis" },
        {
          type: "p",
          text: "The opportunity lies at the intersection of seller convenience, buyer confidence, and operational and commercial discipline.",
        },
      ],
    },
    {
      id: "customer-strategy",
      number: "05",
      label: "Customer Strategy",
      heading: "Two Customer Groups, Two Different Problems",
      blocks: [
        { type: "h3", text: "Supply-side: Sellers" },
        {
          type: "p",
          text: "Fashion shoppers who own unused garments and want to recover value without independently creating listings, finding buyers or managing transactions.",
        },
        {
          type: "list",
          items: ["Convenience.", "Valuation transparency.", "Predictable purchase experience."],
        },
        { type: "h3", text: "Demand-side: Buyers" },
        {
          type: "p",
          text: "Value-conscious shoppers interested in branded pre-owned clothing at affordable prices.",
        },
        {
          type: "list",
          items: ["Garment-level transparency.", "Hygiene assurance.", "Reliable purchase protection."],
        },
        { type: "h3", text: "Customer interest overlap" },
        {
          type: "table",
          headers: ["Customer interest", "Respondents"],
          rows: [
            ["Both buying and selling", "46"],
            ["Selling only", "12"],
            ["Buying only", "8"],
            ["Neither activity", "34"],
          ],
        },
        {
          type: "p",
          text: "Some customers may participate on both sides, but sellers and buyers must still be treated as distinct acquisition segments.",
        },
        { type: "h3", text: "Strategic decision: Demand-led acquisition" },
        {
          type: "p",
          text: "Because Myntra owns garments after purchasing them, seller participation alone cannot determine product success.",
        },
        {
          type: "p",
          text: "Acquiring more garments without sufficient buyer demand creates inventory and working-capital risk.",
        },
        {
          type: "list",
          items: [
            "Validate buyer interest in the selected category.",
            "Understand the supply of eligible garments.",
            "Acquire inventory selectively.",
            "Monitor actual sell-through.",
            "Expand seller acquisition according to demonstrated demand.",
          ],
        },
        {
          type: "callout",
          text: "Optimise for economically viable garments successfully resold, not simply the number of garments collected.",
        },
      ],
    },
    {
      id: "category",
      number: "06",
      label: "Category Selection",
      heading: "Why Start with Branded Women's Kurta Sets?",
      blocks: [
        {
          type: "p",
          text: "A focused category is preferable to launching across multiple apparel categories.",
        },
        { type: "h3", text: "Category evaluation framework" },
        {
          type: "table",
          headers: ["Evaluation criterion", "Weight"],
          rows: [
            ["Buyer demand", "25%"],
            ["Seller supply", "20%"],
            ["Resale value potential", "20%"],
            ["Inspection simplicity", "10%"],
            ["Preparation effort", "10%"],
            ["Inventory turnover", "15%"],
            ["Total", "100%"],
          ],
        },
        { type: "h3", text: "Preliminary category assessment" },
        {
          type: "table",
          headers: ["Category", "Weighted score"],
          rows: [
            ["Western tops", "4.10"],
            ["Branded kurta sets", "4.06"],
            ["Jeans", "4.03"],
            ["Dresses", "3.97"],
          ],
        },
        {
          type: "bars",
          title: "Preliminary category evaluation",
          kind: "hypothesis",
          max: 4.1,
          items: [
            { name: "Western tops", value: 4.1, display: "4.10" },
            { name: "Branded kurta sets", value: 4.06, display: "4.06", highlight: true },
            { name: "Jeans", value: 4.03, display: "4.03" },
            { name: "Dresses", value: 3.97, display: "3.97" },
          ],
          note: "Preliminary product-management hypotheses, not measured category-level market demand.",
        },
        {
          type: "p",
          text: "The scores are close. Western tops score marginally higher, but I selected branded women's kurta sets based on their strategic fit with the proposed proposition.",
        },
        { type: "h3", text: "Why branded kurta sets?" },
        {
          type: "list",
          items: [
            "Branded or occasion-oriented kurta sets may be worn less frequently while remaining in good condition.",
            "They can represent a relatively higher original purchase investment, potentially increasing sellers' motivation to recover value.",
            "Buyers could access good-condition branded ethnic wear at more accessible prices.",
            "A focused category allows category-specific inspection, cleaning, grading and preparation standards.",
          ],
        },
        { type: "h3", text: "Initial category scope" },
        {
          type: "columns",
          items: [
            {
              title: "Included",
              points: [
                "Branded women's kurta sets.",
                "Matching kurta, bottom and dupatta components wherever applicable.",
                "Garments in good condition with sufficient remaining usable life.",
              ],
            },
            {
              title: "Excluded",
              points: [
                "Basic everyday-wear kurtis.",
                "Unbranded or low-value daily-wear garments.",
                "Heavily damaged garments.",
                "Garments with significant stains or damaged embellishments.",
                "Incomplete sets where missing components affect resale suitability.",
              ],
            },
          ],
        },
        {
          type: "note",
          text: "Category scores are preliminary product-management hypotheses, not measured category-level market demand. The selected category requires pilot validation.",
        },
      ],
    },
    {
      id: "product-strategy",
      number: "07",
      label: "Product Strategy",
      heading: "Why a Managed Outright Buyback Model?",
      blocks: [
        { type: "h3", text: "Three models considered" },
        {
          type: "table",
          headers: ["Model", "How it works", "Key trade-off"],
          rows: [
            [
              "Outright buyback",
              "Myntra purchases garments outright",
              "Greater control, but inventory and capital risk",
            ],
            [
              "Consignment",
              "Myntra sells on behalf of customers",
              "Lower upfront acquisition risk, but more complex seller settlement",
            ],
            [
              "Managed marketplace",
              "Myntra manages discovery, inspection and transactions",
              "Less inventory ownership, but different quality-control challenges",
            ],
          ],
        },
        { type: "h3", text: "Final decision: Outright buyback" },
        {
          type: "p",
          text: "I proposed a platform-owned buyback model rather than peer-to-peer resale.",
        },
        {
          type: "p",
          text: "In a peer-to-peer model, customers remain responsible for listing, pricing, negotiating and coordinating transactions.",
        },
        {
          type: "p",
          text: "Myntra Loop removes this responsibility. Customers submit eligible garments, Myntra collects and inspects them, and qualifying garments are purchased outright.",
        },
        { type: "h3", text: "Why this model?" },
        {
          type: "steps",
          items: [
            {
              title: "Convenience-led participation",
              body: "Customers can recover value without becoming independent sellers.",
            },
            {
              title: "Platform-controlled trust",
              body: "Myntra can establish standardised inspection, condition grading, preparation and fulfilment.",
            },
            {
              title: "Reward certainty",
              body: "Sellers receive Loop Points immediately after successful purchase.",
            },
          ],
        },
        { type: "h3", text: "The trade-off" },
        {
          type: "p",
          text: "Myntra assumes:",
        },
        {
          type: "list",
          items: [
            "Inventory ownership.",
            "Upfront reward costs.",
            "Reverse-logistics expenses.",
            "Inspection and preparation costs.",
            "Storage and fulfilment costs.",
            "Unsold inventory risk.",
          ],
        },
        { type: "p", text: "This makes economic discipline essential." },
      ],
    },
    {
      id: "business-model",
      number: "08",
      label: "Business Model",
      heading: "From Unused Garments to Renewed Customer Value",
      blocks: [
        {
          type: "columns",
          items: [
            {
              title: "Sellers",
              points: [
                "Existing Myntra customers submit eligible garments and receive Loop Points when Myntra successfully purchases them.",
              ],
            },
            {
              title: "Myntra",
              points: [
                "Myntra manages valuation, collection, inspection, purchase, preparation, inventory, listing and fulfilment.",
              ],
            },
            {
              title: "Buyers",
              points: [
                "Customers discover and purchase quality-checked pre-owned garments through the Myntra shopping experience.",
              ],
            },
          ],
        },
        { type: "h3", text: "End-to-end business flow" },
        {
          type: "flow",
          items: [
            "Garment sourcing",
            "Indicative valuation",
            "Seller agreement",
            "Doorstep collection",
            "Physical inspection",
            "Purchase or rejection",
            "Preparation",
            "Inventory management",
            "Product listing",
            "Buyer purchase",
            "Order fulfilment",
          ],
        },
        { type: "h3", text: "Seller proposition" },
        {
          type: "list",
          items: [
            "Only previously purchased Myntra garments are eligible.",
            "Delivery must have occurred within the previous two years.",
            "Customers select eligible garments from purchase history.",
            "An indicative purchase-value range is displayed before pickup.",
            "Customers acknowledge the purchase commitment.",
            "Myntra collects the garments.",
            "Accepted garments are purchased outright.",
            "Loop Points are credited immediately after purchase.",
          ],
        },
        { type: "h3", text: "Buyer proposition" },
        {
          type: "list",
          items: [
            "Dedicated pre-owned collection.",
            "Individual garment photographs.",
            "Condition grades.",
            "Visible defect information.",
            "Size and measurement details.",
            "Cleaning and preparation information.",
            "Transparent selling price.",
            "Clear return and refund information.",
          ],
        },
        { type: "h3", text: "Reward mechanism" },
        { type: "formula", text: "1 Loop Point = ₹1" },
        {
          type: "p",
          text: "For example, if Myntra purchases a kurta set for ₹250, the seller receives 250 Loop Points.",
        },
        {
          type: "note",
          text: "The reward mechanism is proposed. Redemption rules, expiry and refund treatment require further business validation.",
        },
        { type: "h3", text: "Potential business value" },
        {
          type: "list",
          items: [
            "Additional customer engagement.",
            "Potential repeat purchases.",
            "Additional resale revenue opportunity.",
            "More accessible branded fashion.",
            "Extended garment lifecycles.",
          ],
        },
        { type: "note", text: "These are hypotheses, not proven outcomes." },
      ],
    },
    {
      id: "valuation",
      number: "09",
      label: "Economics-First Valuation",
      heading: "Protecting Both Customer Trust and Business Viability",
      emphasis: true,
      blocks: [
        {
          type: "p",
          text: "Myntra promises sellers a minimum purchase value before pickup. However, Myntra assumes the financial risk once it purchases a garment.",
        },
        {
          type: "p",
          text: "If the minimum guaranteed reward exceeds the garment's expected resale value after attributable expenses, the transaction could generate a loss.",
        },
        { type: "h3", text: "Proposed solution" },
        {
          type: "p",
          text: "An economics-first valuation framework calculates the maximum economically viable purchase price before communicating an offer.",
        },
        { type: "h3", text: "Valuation formula" },
        {
          type: "formula",
          text: "Maximum Viable Acquisition Price = Expected Net Resale Revenue − Operating Costs − Risk Provisions − Target Contribution",
        },
        { type: "h3", text: "Valuation inputs" },
        {
          type: "list",
          items: [
            "Original selling price.",
            "Brand and product category.",
            "Current resale market prices.",
            "Demand and expected sell-through.",
            "Estimated garment condition and age.",
            "Expected markdowns and returns.",
            "Pickup, inspection, preparation, storage and fulfilment costs.",
            "Target contribution.",
          ],
        },
        { type: "h3", text: "Illustrative valuation example" },
        {
          type: "p",
          text: "Assume Myntra estimates ₹800 in net resale revenue for an excellent-condition kurta set.",
        },
        {
          type: "table",
          headers: ["Component", "Amount"],
          rows: [
            ["Expected net resale revenue", "₹800"],
            ["Pickup and logistics", "₹50"],
            ["Inspection and processing", "₹60"],
            ["Storage and fulfilment", "₹40"],
            ["Target contribution", "₹200"],
            ["Maximum viable acquisition price", "₹450"],
          ],
          note: "₹800 − (₹50 + ₹60 + ₹40) − ₹200 = ₹450. All figures in this section are illustrative assumptions.",
        },
        {
          type: "stack",
          title: "How the ₹800 illustrative resale revenue is allocated",
          kind: "illustrative",
          totalLabel: "Expected net resale revenue ₹800",
          parts: [
            { name: "Maximum viable acquisition price", value: 450, display: "₹450" },
            { name: "Operating costs", value: 150, display: "₹150" },
            { name: "Target contribution", value: 200, display: "₹200" },
          ],
          note: "Operating costs are ₹50 + ₹60 + ₹40. Illustrative assumption, not Myntra financial data.",
        },
        { type: "h3", text: "Condition-based valuation" },
        {
          type: "table",
          headers: [
            "Condition",
            "Expected net resale revenue",
            "Operating costs and risk provisions",
            "Target contribution",
            "Maximum purchase value",
          ],
          rows: [
            ["Excellent", "₹800", "₹150", "₹200", "₹450"],
            ["Good", "₹750", "₹150", "₹200", "₹400"],
            ["Acceptable", "₹700", "₹150", "₹200", "₹350"],
          ],
          note: "All figures are illustrative assumptions.",
        },
        { type: "h3", text: "Minimum guarantee decision" },
        {
          type: "p",
          text: "The lowest accepted condition grade supports a purchase value of ₹350. Therefore, Myntra communicates an indicative purchase-value range of ₹350–₹450.",
        },
        {
          type: "list",
          items: ["Minimum guaranteed value: ₹350.", "Maximum possible value: ₹450."],
        },
        {
          type: "callout",
          text: "The minimum guarantee is not an arbitrary customer incentive. It is a commercial commitment derived from the economics of the lowest condition grade Myntra agrees to accept.",
        },
        {
          type: "p",
          text: "If a garment cannot support an attractive seller reward while preserving the required contribution, it should not enter the acquisition programme.",
        },
      ],
    },
    {
      id: "journeys",
      number: "10",
      label: "Customer Journeys",
      heading: "Designing for Convenience, Transparency and Trust",
      blocks: [
        { type: "h3", text: "Seller journey" },
        {
          type: "steps",
          items: [
            { title: "Discover", body: "Customer accesses Myntra Loop through the Myntra app." },
            { title: "Identify", body: "System retrieves previous Myntra purchases and checks eligibility." },
            { title: "Select", body: "Customer selects eligible branded kurta sets." },
            {
              title: "Understand value",
              body: "Myntra displays an indicative purchase-value range and minimum guarantee.",
            },
            { title: "Agree", body: "Customer acknowledges purchase conditions and inspection requirements." },
            { title: "Schedule", body: "Customer selects a doorstep pickup slot." },
            { title: "Inspect", body: "Myntra physically evaluates each garment." },
            {
              title: "Purchase",
              body: "Garments that pass inspection are purchased at the agreed condition-based value.",
            },
            { title: "Reward", body: "Corresponding Loop Points are credited immediately after successful purchase." },
          ],
        },
        { type: "h3", text: "Buyer journey" },
        {
          type: "steps",
          items: [
            { title: "Discover", body: "Customer enters the Myntra Loop pre-owned collection." },
            {
              title: "Evaluate",
              body: "Customer views individual garment photographs, condition grades, measurements and disclosed defects.",
            },
            {
              title: "Build confidence",
              body: "Listing communicates cleaning and preparation information and applicable purchase protection.",
            },
            { title: "Purchase", body: "Customer completes checkout through Myntra." },
            {
              title: "Receive support",
              body: "Customer can access order tracking and applicable return/refund support.",
            },
          ],
        },
        { type: "h3", text: "Internal operations journey" },
        {
          type: "flow",
          items: [
            "Garment collection",
            "Inspection",
            "Condition grading",
            "Purchase or rejection",
            "Cleaning and preparation",
            "Photography",
            "Inventory record",
            "Product listing",
            "Order fulfilment",
          ],
        },
        { type: "h3", text: "Key UX principles" },
        {
          type: "list",
          items: [
            "Eligibility should be automatic.",
            "Commercial valuation must be established before pickup.",
            "Physical inspection should determine quality acceptance, not trigger commercial repricing.",
            "Garment information should be specific and transparent.",
            "Purchase protection should be clearly communicated.",
          ],
        },
      ],
    },
    {
      id: "mvp",
      number: "11",
      label: "MVP & Product Scope",
      heading: "Start Focused. Validate the Complete Resale Lifecycle.",
      blocks: [
        {
          type: "p",
          text: "The MVP must validate whether Myntra can connect convenient selling with trustworthy pre-owned shopping while managing the complete resale lifecycle commercially.",
        },
        { type: "h3", text: "Seller MVP" },
        {
          type: "table",
          headers: ["Capability", "MVP requirement"],
          rows: [
            ["Entry point", "Dedicated Myntra Loop experience"],
            ["Purchase history", "Retrieve previous Myntra purchases"],
            ["Eligibility", "Automatic two-year delivery-date verification"],
            ["Selection", "Individual and multiple-garment submission"],
            ["Valuation", "Indicative purchase-value range"],
            ["Agreement", "Seller acknowledgement of purchase conditions"],
            ["Pickup", "Doorstep collection scheduling"],
            ["Inspection", "Individual garment inspection"],
            ["Purchase", "Purchase or rejection decision"],
            ["Rewards", "Immediate Loop Points credit after purchase"],
          ],
        },
        { type: "h3", text: "Buyer MVP" },
        {
          type: "table",
          headers: ["Capability", "MVP requirement"],
          rows: [
            ["Discovery", "Dedicated pre-owned collection"],
            ["Browsing", "Basic category and product filters"],
            ["Product details", "Actual garment photographs"],
            ["Quality information", "Condition grade and defect disclosure"],
            ["Measurements", "Size and garment measurements"],
            ["Hygiene", "Cleaning and preparation information"],
            ["Checkout", "Existing Myntra shopping experience"],
            ["Support", "Order tracking and applicable return/refund process"],
          ],
        },
        { type: "h3", text: "Operations MVP" },
        {
          type: "list",
          items: [
            "Selling-request management.",
            "Pickup coordination.",
            "Inspection and grading records.",
            "Purchase and rejection processing.",
            "Rejected-garment returns.",
            "Loop Points transaction processing.",
            "Individual inventory management.",
            "Product listing management.",
            "Order fulfilment coordination.",
          ],
        },
        { type: "h3", text: "Out of scope" },
        {
          type: "list",
          items: [
            "Peer-to-peer resale.",
            "External-platform submissions.",
            "Community features.",
            "Advanced recommendations.",
            "Loyalty gamification.",
            "Advanced seller analytics.",
            "Detailed sustainability dashboard.",
          ],
        },
        { type: "h3", text: "Three connected workstreams" },
        {
          type: "steps",
          items: [
            {
              title: "Workstream 1: Seller-to-purchase workflow",
              body: "Validate seller participation and purchase completion.",
            },
            {
              title: "Workstream 2: Buyer discovery and purchase",
              body: "Validate demand and buyer confidence.",
            },
            {
              title: "Workstream 3: Operations and inventory",
              body: "Validate the ability to manage garments from collection to resale.",
            },
          ],
        },
        {
          type: "p",
          text: "These workstreams are interconnected. Seller acquisition cannot be validated independently of inspection and purchase processing, while buyer demand cannot be validated without available, prepared inventory.",
        },
      ],
    },
    {
      id: "unit-economics",
      number: "12",
      label: "Unit Economics",
      heading: "Resale Volume Does Not Automatically Mean Profitability",
      blocks: [
        {
          type: "p",
          text: "This is a separate illustrative transaction example from the valuation illustration above.",
        },
        {
          type: "table",
          headers: ["Component", "Amount"],
          rows: [
            ["Resale selling price", "₹600"],
            ["Seller purchase value", "₹250"],
            ["Collection cost", "₹30"],
            ["Inspection cost", "₹20"],
            ["Cleaning and preparation", "₹50"],
            ["Storage and handling", "₹15"],
            ["Packaging and fulfilment", "₹45"],
            ["Total costs", "₹410"],
            ["Contribution before other overheads", "₹190"],
          ],
          note: "₹600 − ₹410 = ₹190. These are illustrative assumptions, not actual Myntra cost data or validated financial projections.",
        },
        {
          type: "stack",
          title: "Illustrative ₹600 resale transaction",
          kind: "illustrative",
          totalLabel: "Resale selling price ₹600",
          parts: [
            { name: "Total costs", value: 410, display: "₹410" },
            { name: "Contribution before other overheads", value: 190, display: "₹190" },
          ],
          note: "Separate from the valuation example above. Illustrative assumption, not a financial result.",
        },
        {
          type: "p",
          text: "Sold-garment economics are insufficient. The complete model must account for:",
        },
        {
          type: "list",
          items: [
            "Garments collected but rejected.",
            "Collection and rejected-garment return costs.",
            "Accepted garments that remain unsold.",
            "Discounts required to clear ageing inventory.",
            "Inventory write-offs.",
            "Buyer returns and refunds.",
            "Customer support costs.",
          ],
        },
        { type: "h3", text: "Two important financial measures" },
        {
          type: "steps",
          items: [
            {
              title: "Contribution per sold garment",
              body: "Net resale revenue minus attributable garment-level costs.",
            },
            {
              title: "Contribution per acquired garment",
              body: "Total attributable contribution generated by an acquired-garment cohort divided by the number of garments purchased in that cohort.",
            },
          ],
        },
        {
          type: "callout",
          text: "Myntra Loop should optimise for sustainable full-cohort contribution, not just positive contribution on individual successful sales.",
        },
      ],
    },
    {
      id: "metrics",
      number: "13",
      label: "Metrics & Measurement",
      heading: "Measuring the Entire Product Lifecycle",
      blocks: [
        { type: "h3", text: "Primary business metric" },
        { type: "formula", text: "Contribution per Acquired Garment" },
        {
          type: "p",
          text: "Total attributable contribution generated by an acquired-garment cohort divided by the number of garments purchased in that cohort. This captures the economics of sold and unsold inventory.",
        },
        { type: "h3", text: "Primary operating outcome" },
        { type: "formula", text: "Successfully Resold Garments" },
        {
          type: "p",
          text: "Number of individual garments purchased from sellers through Myntra Loop that are subsequently sold to buyers during a defined period.",
        },
        { type: "h3", text: "Supporting metrics" },
        {
          type: "table",
          headers: ["Area", "Metrics"],
          rows: [
            ["Seller funnel", "Loop discovery, eligibility, submission completion"],
            ["Valuation", "Valuation-to-submission conversion, offer acceptance"],
            ["Collection", "Pickup success rate, pickup cost"],
            ["Inspection", "Inspection pass and rejection rates"],
            ["Buyer funnel", "Collection visits, product views, add-to-bag, purchase conversion"],
            ["Buyer trust", "Condition complaints, hygiene complaints, return rate"],
            ["Operations", "Inspection turnaround, time to listing, preparation cost"],
            ["Inventory", "Sell-through, ageing, markdowns, write-offs"],
            ["Finance", "Contribution per sold and acquired garment"],
            ["Loyalty", "Points redemption, repeat purchase, incremental retention"],
          ],
        },
        { type: "h3", text: "Measuring incremental retention" },
        {
          type: "p",
          text: "Loop Points redemption does not automatically prove that Myntra Loop improves retention.",
        },
        {
          type: "p",
          text: "To evaluate this, compare Loop sellers with an appropriate group of similar eligible customers who did not participate. Where feasible, use a controlled experiment or carefully constructed comparison group. Account for prior purchase frequency and other relevant customer differences.",
        },
        { type: "h3", text: "Measurement principles" },
        {
          type: "list",
          items: [
            "Track every garment through a unique identifier.",
            "Separate seller-level and garment-level metrics.",
            "Record rejection and return reasons.",
            "Compare cohorts over equivalent observation periods.",
            "Establish baselines before defining numerical success thresholds.",
            "Do not attribute retention improvements to Loop Points without credible evidence.",
          ],
        },
      ],
    },
    {
      id: "experiments",
      number: "14",
      label: "Experiments & Validation",
      heading: "Validate the Riskiest Assumptions Before Scaling",
      blocks: [
        {
          type: "table",
          headers: ["Hypothesis", "What needs validation"],
          rows: [
            ["H1", "Customers will submit eligible garments"],
            ["H2", "Indicative pricing improves confidence"],
            ["H3", "Doorstep pickup reduces effort"],
            ["H4", "Buyers will purchase through Myntra"],
            ["H5", "Transparency improves buyer confidence"],
            ["H6", "Loop Points encourage repeat purchases"],
            ["H7", "The model can achieve sustainable contribution"],
          ],
        },
        { type: "h3", text: "Six-stage roadmap" },
        {
          type: "steps",
          items: [
            {
              title: "Stage 1 — Concept validation",
              body: "Test seller and buyer prototypes. Learning: initial willingness and experience concerns.",
            },
            {
              title: "Stage 2 — Seller experience",
              body: "Test eligibility, indicative valuation and pickup journeys. Learning: seller confidence and submission friction.",
            },
            {
              title: "Stage 3 — Buyer experience",
              body: "Test product detail pages, condition grading and trust features. Learning: buyer confidence and purchase intent.",
            },
            {
              title: "Stage 4 — Operational pilot",
              body: "Collect a limited number of garments and validate inspection, preparation and inventory processes. Learning: operational reliability and actual processing costs.",
            },
            {
              title: "Stage 5 — Transaction pilot",
              body: "Launch a limited pre-owned collection and observe actual buyer transactions. Learning: buyer demand, conversion and sell-through.",
            },
            {
              title: "Stage 6 — Commercial and retention evaluation",
              body: "Evaluate contribution, inventory ageing, Loop Points and repeat purchases. Learning: long-term business viability.",
            },
          ],
        },
        { type: "h3", text: "Critical experiment: Valuation accuracy" },
        {
          type: "p",
          text: "For every acquired garment, compare:",
        },
        {
          type: "list",
          items: [
            "Predicted resale price.",
            "Realised resale price.",
            "Acquisition value.",
            "Actual operating costs.",
            "Contribution after relevant adjustments.",
          ],
        },
        {
          type: "p",
          text: "Valuation accuracy can be assessed using Mean Absolute Error (MAE) and Mean Absolute Percentage Error (MAPE), where data permits. Evaluate these alongside contribution economics.",
        },
      ],
    },
    {
      id: "risks",
      number: "15",
      label: "Risks & Decision Gates",
      heading: "What Could Make Myntra Loop Fail?",
      blocks: [
        {
          type: "table",
          headers: ["Risk", "Potential impact", "Proposed mitigation"],
          rows: [
            ["Low seller participation", "Insufficient eligible supply", "Test seller journey and valuation"],
            ["Low buyer adoption", "Unsold inventory", "Validate buyer demand before expanding acquisition"],
            ["Unattractive valuation", "Seller abandonment", "Test purchase-value ranges"],
            [
              "High rejection rate",
              "Collection costs without acquired inventory",
              "Improve eligibility and inspection criteria",
            ],
            ["Hygiene concerns", "Lower buyer confidence", "Transparent preparation information"],
            ["High logistics costs", "Reduced contribution", "Evaluate reverse-logistics economics"],
            ["Slow-moving inventory", "Capital tied up in stock", "Monitor ageing and sell-through"],
            ["Incorrect valuation", "Acquisition losses", "Compare predicted and realised resale prices"],
            ["Low points redemption", "Weak reward engagement", "Monitor redemption and repeat behaviour"],
            [
              "Low incremental retention",
              "Reward cost without additional value",
              "Use an appropriate comparison group",
            ],
            [
              "Fraud or garment substitution",
              "Financial losses",
              "Verify original purchase and product identity",
            ],
            [
              "Unverified sustainability impact",
              "Unsupported claims",
              "Measure actual garment reuse and environmental impact",
            ],
          ],
        },
        { type: "h3", text: "Critical assumptions requiring early validation" },
        {
          type: "list",
          items: [
            "Customers will submit eligible Myntra-purchased garments.",
            "Buyers will complete purchases of pre-owned garments.",
            "Indicative purchase values will be attractive to sellers and economically viable.",
            "Myntra can manage collection, inspection and preparation efficiently.",
            "The full resale lifecycle can generate sustainable contribution.",
            "Loop Points will lead to incremental purchases.",
            "Successful resale will create measurable garment reuse and environmental value.",
          ],
        },
        { type: "h3", text: "Four decision gates" },
        {
          type: "steps",
          items: [
            {
              title: "Gate 1 — Customer desirability",
              body: "Evaluate seller willingness, buyer willingness and comprehension of the purchase-value commitment.",
            },
            {
              title: "Gate 2 — Operational feasibility",
              body: "Evaluate pickup reliability, inspection consistency, preparation costs and inventory processes.",
            },
            {
              title: "Gate 3 — Commercial viability",
              body: "Evaluate realised resale prices, contribution per acquired garment, sell-through and unsold inventory.",
            },
            {
              title: "Gate 4 — Retention impact",
              body: "Evaluate Loop Points redemption and incremental repeat purchase behaviour.",
            },
          ],
        },
        {
          type: "callout",
          text: "A positive result in one area cannot compensate for a fundamental failure in another. Strong seller participation is insufficient if acquired garments are not selling.",
        },
      ],
    },
    {
      id: "recommendation",
      number: "16",
      label: "Final Recommendation",
      heading: "Proceed with a Controlled MVP Pilot",
      blocks: [
        {
          type: "p",
          text: "Based on the exploratory survey, customer interviews, industry stakeholder discussions and proposed product strategy, Myntra Loop presents a promising opportunity worth validating further.",
        },
        {
          type: "p",
          text: "However, the research does not establish actual transaction demand, incremental retention, profitable unit economics or measurable environmental impact.",
        },
        {
          type: "p",
          text: "I would therefore recommend a controlled MVP pilot rather than an immediate large-scale launch.",
        },
        { type: "h3", text: "Phase 1 — Seller-side validation" },
        {
          type: "p",
          text: "Objective: Validate whether eligible customers are willing to submit garments.",
        },
        {
          type: "list",
          items: [
            "Test the seller journey.",
            "Validate purchase-history eligibility.",
            "Test indicative purchase-value communication.",
            "Enable limited doorstep pickup.",
            "Record inspection outcomes.",
            "Measure purchase completion and Loop Points credit accuracy.",
          ],
        },
        { type: "h3", text: "Phase 2 — Buyer-side validation" },
        {
          type: "p",
          text: "Objective: Validate whether customers are willing to purchase pre-owned garments.",
        },
        {
          type: "list",
          items: [
            "Launch a limited pre-owned collection.",
            "Display actual garment photographs.",
            "Introduce consistent condition grading.",
            "Communicate cleaning and preparation.",
            "Provide clear return and refund information.",
            "Monitor actual buyer transactions.",
          ],
        },
        { type: "h3", text: "Phase 3 — Business, sustainability and retention validation" },
        {
          type: "p",
          text: "Objective: Evaluate whether the complete model creates sustainable business value.",
        },
        {
          type: "list",
          items: [
            "Track acquisition and processing costs.",
            "Monitor realised resale prices and inventory ageing.",
            "Measure successfully resold garments.",
            "Track Loop Points redemption.",
            "Compare repeat purchase behaviour against an appropriate baseline.",
            "Evaluate contribution per acquired garment.",
            "Establish a baseline for garment reuse and environmental impact.",
          ],
        },
        { type: "h3", text: "Four strategic priorities" },
        {
          type: "steps",
          items: [
            {
              title: "Make selling convenient",
              body: "Enable existing Myntra customers to identify eligible garments, understand their indicative purchase value, schedule pickup and receive Loop Points after successful purchase.",
            },
            {
              title: "Make buying trustworthy",
              body: "Provide actual garment photographs, consistent condition grading, quality inspection, transparent cleaning information and clear purchase protection.",
            },
            {
              title: "Make resale commercially viable",
              body: "Establish disciplined garment sourcing, inspection, preparation, inventory management and resale processes.",
            },
            {
              title: "Make sustainability measurable",
              body: "Measure successful garment reuse and evaluate the environmental impact of the complete resale process rather than assuming that every resale transaction automatically creates a positive environmental outcome.",
            },
          ],
        },
        { type: "h3", text: "My final product decision" },
        {
          type: "p",
          text: "Myntra Loop should begin with a focused category and controlled customer base.",
        },
        {
          type: "p",
          text: "Expansion should depend on evidence of seller participation, actual buyer demand, operational reliability, reliable valuation performance, sustainable full-cohort contribution and incremental customer value.",
        },
        {
          type: "callout",
          text: "The goal is not simply to create another resale channel. It is to explore how a fashion platform can create value beyond the initial purchase.",
        },
      ],
    },
    {
      id: "closing",
      number: "17",
      label: "Closing Vision",
      heading: "Fashion Shouldn't End With the First Purchase.",
      emphasis: true,
      blocks: [
        {
          type: "p",
          text: "Myntra Loop is a managed way for clothes a customer no longer wears to find a new owner.",
        },
        {
          type: "columns",
          items: [
            {
              title: "Sellers",
              points: ["Pass back eligible garments and recover value."],
            },
            {
              title: "Buyers",
              points: ["Discover clothes that are new to them."],
            },
            {
              title: "Myntra",
              points: ["Stay in the relationship after the first purchase."],
            },
          ],
        },
        {
          type: "callout",
          text: "Buy on Myntra. Wear it. Pass it back. Give fashion another life.",
        },
        {
          type: "note",
          text: "Independent portfolio concept. Not implemented, approved or validated by Myntra. Financial examples are illustrative, and the research is exploratory.",
        },
      ],
    },
  ],
}
