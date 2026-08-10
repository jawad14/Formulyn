/** Content for the home page. */

export const hero = {
  eyebrow: "Methodology · 4 Phases · 8–16 Weeks",
  /** Rendered as two lines, with a gold full stop after the last word. */
  headingLines: ["From brief", "to batch"],
  body: "A fixed-scope, fixed-price protocol. Each phase has one tangible deliverable and a clear go / no-go gate, so you are never committed beyond the next milestone.",
  primaryCta: { label: "Book a 30-min call", href: "/contact" },
  secondaryCta: { label: "The methodology →", href: "/process" },
  image: {
    /* Served from public/ — never hot-link the domain this site replaces. */
    src: "/hero-amber.jpg",
    alt: "Amber botanical tincture in laboratory glass",
  },
  badge: { value: "340+", label: "Reference compounds" },
} as const;

export const heroStats = [
  { value: "5+", label: "Years in R&D" },
  { value: "07", label: "Active categories" },
  { value: "340", label: "Reference compounds" },
  { value: "30 min", label: "Discovery call" },
] as const;

/** Repeated twice in the marquee to make the loop seamless. */
export const marqueeItems = [
  "Supplements",
  "Nutraceuticals",
  "Skincare",
  "Pet Wellness",
  "Functional Foods",
  "Topicals",
  "Liposomal Delivery",
] as const;

export const intro = {
  eyebrow: "What we do",
  heading: "Someone has to care about your product as much as you do",
  lead: "Formulyn is a boutique nutraceutical and cosmetic formulation consultancy, crafting evidence-led supplement, skincare, and wellness formulations, from raw molecular brief to regulatory-ready product, without manufacturing conflicts.",
  body: "Boutique means you are not one of forty accounts. You get the same people from the first call to the final dossier, and they know why every ingredient is in your formula.",
  tags: ["Evidence-led", "Regulatory-ready", "No manufacturing conflicts"],
} as const;

export const manifesto = {
  eyebrow: "Why founders come to us",
  lead: "You have a product in your head that nobody else can make. Most people get told to pick from a catalogue.",
  highlight: "We start with your idea and build the science around it.",
} as const;

export const situationsSection = {
  eyebrow: "How we help",
  heading: "Three situations we're usually called into",
  intro:
    "Different starting points, same outcome: a formula you own, backed by evidence you can defend.",
} as const;

export type Situation = {
  quote: string;
  problem: string;
  response: string;
};

export const situations: Situation[] = [
  {
    quote: `"Every contract manufacturer wants me to use their stock formula."`,
    problem:
      "You end up with a product identical to three competitors and no ownership of the recipe.",
    response:
      "We build your formula independently, then hand over the full dossier so any manufacturer can make it.",
  },
  {
    quote: `"My product works, but the margin and shelf life don't."`,
    problem:
      "Costs climb, stability fails at month nine, and customers notice the texture changing.",
    response:
      "Reformulate around the actives that earn their place, then prove it with accelerated stability data.",
  },
  {
    quote: `"I can't tell whether my claims will survive a regulator."`,
    problem:
      "Dosages are guesswork, the label promises more than the evidence supports, and launch keeps slipping.",
    response:
      "Grade the literature, set defensible dosages, and map the TGA / FDA / EU pathway before anything goes to print.",
  },
];

export const practiceSection = {
  eyebrow: "Practice · 01–03",
  heading: "Molecular rigor",
  intro:
    "Three core mandates, each scoped, costed, and delivered with the same scientific discipline regardless of brand stage.",
} as const;

export type Mandate = {
  index: string;
  title: string;
  body: string;
};

export const mandates: Mandate[] = [
  {
    index: "[01]",
    title: "Custom Formulation",
    body: "Product development from molecular concept to validated, shelf-stable formula.",
  },
  {
    index: "[02]",
    title: "Optimisation & Reformulation",
    body: "Refine efficacy, sensorial profile, cost basis, and regulatory posture without compromising integrity.",
  },
  {
    index: "[03]",
    title: "Dosage Consultancy",
    body: "Precision dosing, synergistic combinations, and safety-threshold review for known ingredient lists.",
  },
];

export const caseStudiesSection = {
  eyebrow: "Case studies · Selected work",
  heading: "Briefs we've taken to batch",
  intro:
    "Client names withheld under NDA. Full dossiers are available on request during discovery.",
} as const;

export type CaseStudy = {
  category: string;
  title: string;
  body: string;
  imageLabel: string;
  metrics: [{ value: string; label: string }, { value: string; label: string }];
};

export const caseStudies: CaseStudy[] = [
  {
    category: "Skincare · EU market",
    title: "A retinol alternative serum that survives 24 months on shelf",
    body: "The client wanted the efficacy of a 0.5% retinol without the irritation profile or the oxidation problem.",
    imageLabel: "Product photo placeholder",
    metrics: [
      { value: "11 wks", label: "Brief to dossier" },
      { value: "24 mo", label: "Stability achieved" },
    ],
  },
  {
    category: "Supplements · TGA listed",
    title: "Cutting a sleep formula from 19 actives to 6",
    body: "The label looked impressive but most ingredients sat well under an effective dose. We rebuilt it around what the evidence supports.",
    imageLabel: "Product photo placeholder",
    metrics: [
      { value: "−31%", label: "Cost per unit" },
      { value: "6", label: "Actives at full dose" },
    ],
  },
  {
    category: "Pet wellness · AU + NZ",
    title: "A joint supplement dogs will actually eat",
    body: "The dose was right, the palatability was not. We reformulated the carrier without diluting the actives.",
    imageLabel: "Product photo placeholder",
    metrics: [
      { value: "92%", label: "Palatability panel" },
      { value: "2", label: "Markets cleared" },
    ],
  },
];

export const testimonialsSection = {
  eyebrow: "Field Notes · Verified Google Reviews",
  heading: "What clients say",
  rating: "5.0",
  reviewCount: "7 curated reviews",
} as const;

export type Testimonial = {
  quote: string;
  attribution: string;
};

/** Verified Google reviews, as published on formulyn.com.au. */
export const testimonials: Testimonial[] = [
  {
    quote: `"Formulyn are masters at what they do. Glad I found them."`,
    attribution: "Murad A (unomed) · Ireland · April 2026",
  },
  {
    quote: `"I have been working with them for the past three months and have received excellent support in formulation as well as compliance with Australian TGA and EU regulations. I would highly recommend their services."`,
    attribution: "Babar K. · March 2026",
  },
  {
    quote: `"The team was professional and communicative throughout the process. They took the time to clearly explain their research findings and how certain ingredients were chosen or excluded, which I found particularly valuable."`,
    attribution: "Fatima M. · UAE · December 2025",
  },
  {
    quote: `"Great formulations. Love the results. And this scientist is great to communicate with."`,
    attribution: "Manahil · January 2026",
  },
  {
    quote: `"She helped me optimise my formula! Great experience."`,
    attribution: "James W. · March 2026",
  },
  {
    quote: `"She is super talented! Loved her formulations!!"`,
    attribution: "Olivia P. · November 2025",
  },
  {
    quote: `"Great experience!!"`,
    attribution: "Washma A. · March 2026",
  },
];
