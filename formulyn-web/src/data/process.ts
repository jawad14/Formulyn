/** Content for the /process page. */

export const processHero = {
  eyebrow: "Methodology · Phase 01–04",
  heading: "The process",
  body: "A four-phase protocol that keeps your formulation, IP, and supply decisions independent.",
} as const;

/**
 * The timeline bar above the phase grid. `flex` is the proportional width of
 * each segment and `color` its token, matching the phase durations below.
 */
export const timeline = [
  { flex: 2, color: "var(--c-gold)", label: "W 1–2" },
  { flex: 4, color: "var(--c-gold-mid)", label: "W 3–6" },
  { flex: 8, color: "var(--c-gold-pale)", label: "W 7–14" },
  { flex: 2, color: "var(--c-ink-solid)", label: "W 15–16" },
] as const;

export type Phase = {
  number: string;
  weeks: string;
  title: string;
  body: string;
  deliverables: string[];
};

export const phases: Phase[] = [
  {
    number: "01",
    weeks: "Week 1–2",
    title: "Discovery",
    body: "Strategic intake, market positioning, target claims, regulatory scope (TGA/FDA/EU), and exclusion criteria. Deliverable: signed brief and feasibility memo.",
    deliverables: [
      "Stakeholder workshop",
      "Competitive landscape audit",
      "Regulatory pathway map",
      "Feasibility memorandum",
    ],
  },
  {
    number: "02",
    weeks: "Week 3–6",
    title: "Synthesis",
    body: "Ingredient long-list, evidence grading, dosage modelling, sensory architecture, and a draft formulation matrix with rationale per actives slot.",
    deliverables: [
      "Literature review (PubMed / Cochrane)",
      "Bioavailability modelling",
      "Draft formulation matrix",
      "Ingredient sourcing shortlist",
    ],
  },
  {
    number: "03",
    weeks: "Week 7–14",
    title: "Validation",
    body: "Bench-prep, stability cycling, micro and sensory panels, accelerated aging, and where applicable, in-vivo or clinical pilot coordination.",
    deliverables: [
      "Accelerated stability (3 / 6 / 12 mo)",
      "Sensory & rheology panels",
      "Microbiological challenge (if topical)",
      "Pilot batch protocol",
    ],
  },
  {
    number: "04",
    weeks: "Week 15–16",
    title: "Handover",
    body: "A complete, manufacturer-agnostic dossier: formula, batch records, COA templates, regulatory file, and IP assignment in your name.",
    deliverables: [
      "Master formula & batch records",
      "Specification sheets & COA templates",
      "Regulatory dossier (market-specific)",
      "Full IP transfer",
    ],
  },
];
