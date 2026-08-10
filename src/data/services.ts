/**
 * Content for /services and its detail pages.
 *
 * These URLs exist on the live site and are in its sitemap, so the slugs
 * here must not change — renaming one drops an indexed page.
 */

export const servicesHero = {
  eyebrow: "Services · Four Mandates",
  heading: "Practice disciplines",
  body: "Fixed scope, fixed price, quoted per mandate. Each ends at a go / no-go gate, so you are never committed beyond the next milestone.",
} as const;

export type Mandate = {
  index: string;
  title: string;
  tagline: string;
  body: string;
  /** Detail page, where one exists. */
  href?: string;
};

export const mandates: Mandate[] = [
  {
    index: "[01]",
    title: "Launch-Ready Formula Development",
    tagline: "From concept to compliant formula.",
    body: "Complete product development: ingredient research, literature review, dosage optimisation, stability testing, manufacturing recommendations, and regulatory alignment for TGA / ARTG, EU CPNP and multi-market standards. Built for new brands and first-time founders.",
    href: "/services/formulation-development",
  },
  {
    index: "[02]",
    title: "Formulation Optimisation & Reformulation",
    tagline: "Refine an existing product without compromising integrity.",
    body: "Cost optimisation, sensory improvement, bioavailability enhancement, stability work, and compliance reformulation for brands who already have a product and need it to perform better.",
  },
  {
    index: "[03]",
    title: "Expert Formula Consultation",
    tagline: "Precision guidance for founders who need direction, not a full build.",
    body: "Ingredient and dosage review, synergistic analysis, safety assessment, efficacy-based dosing, regulatory review, and market positioning for brands with a formula that needs an expert read.",
  },
  {
    index: "[04]",
    title: "Custom Project",
    tagline: "Bespoke engagements scoped to your exact brief.",
    body: "Complex, multi-product briefs spanning formulation, compliance and manufacturer vetting — scoped and priced up front.",
  },
];

export type ServiceDetail = {
  slug: string;
  eyebrow: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  includesHeading: string;
  includes: { title: string; body: string }[];
  processHeading: string;
  process: { step: string; title: string; body: string }[];
  audience: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "formulation-development",
    eyebrow: "Service · Formulation Development",
    heading: "Custom nutraceutical & cosmetic formulation development",
    metaTitle: "Custom Nutraceutical & Cosmetic Formulation Development",
    metaDescription:
      "Custom supplement and skincare formulations built from the ground up — grounded in biochemistry, aligned with Australian regulatory standards, and designed to work.",
    lead: "Your product idea deserves more than a generic formula off a manufacturer's shelf. We develop custom formulations built from the ground up — grounded in biochemistry, aligned with Australian regulatory standards, and designed to actually work.",
    includesHeading: "What the engagement includes",
    includes: [
      {
        title: "Ingredient selection & rationale",
        body: "Evidence-based active selection with dose justification for every slot in the formula.",
      },
      {
        title: "Excipient & base design",
        body: "Capsules, tablets, powders, gummies, liquids and topicals — the base engineered for the format.",
      },
      {
        title: "Compatibility & stability",
        body: "Interaction screening before the pilot batch, not after the first customer complaint.",
      },
      {
        title: "Regulatory format alignment",
        body: "Built to TGA Listed Medicine and ARTG requirements from the first draft.",
      },
      {
        title: "Halal-certified pathways",
        body: "Ingredient screening for halal and plant-based product lines.",
      },
      {
        title: "Phase 1 formulation dossier",
        body: "A client-owned document you can hand to any manufacturer.",
      },
    ],
    processHeading: "How it runs",
    process: [
      {
        step: "01",
        title: "Discovery call",
        body: "Thirty minutes to scope the brief, the market and the regulatory pathway.",
      },
      {
        step: "02",
        title: "Formulation",
        body: "Literature review, dosage modelling and draft matrix, delivered as a dossier.",
      },
      {
        step: "03",
        title: "Manufacturer briefing",
        body: "The dossier goes to your manufacturer with a structured technical brief.",
      },
      {
        step: "04",
        title: "Ongoing support",
        body: "Sampling and iteration until the batch matches the brief.",
      },
    ],
    audience:
      "For founders, brand managers and entrepreneurs developing a custom product — particularly halal or plant-based lines.",
  },
  {
    slug: "regulatory-compliance",
    eyebrow: "Service · Regulatory Compliance",
    heading: "Regulatory compliance & multi-market registration",
    metaTitle: "Regulatory Compliance & Multi-Market Product Registration",
    metaDescription:
      "TGA, EU CPNP, UK SCPN, GCC/SFDA and Southeast Asian registration pathways for supplement and cosmetic brands, with dossier preparation and claim scoping.",
    lead: "Regulatory compliance is the difference between a product that sells and a product that sits in a warehouse. We map the pathway before anything goes to print.",
    includesHeading: "Markets we cover",
    includes: [
      {
        title: "Australia — TGA",
        body: "Therapeutic Goods Administration listing and ARTG pathways.",
      },
      {
        title: "European Union — CPNP",
        body: "Cosmetic Products Notification Portal submissions.",
      },
      {
        title: "United Kingdom — SCPN",
        body: "Submit Cosmetic Product Notification for the post-Brexit UK market.",
      },
      {
        title: "GCC — SFDA",
        body: "Saudi Arabia, UAE, Kuwait, Bahrain, Qatar and Oman.",
      },
      {
        title: "Southeast Asia",
        body: "Malaysia, Indonesia and Singapore.",
      },
      {
        title: "Multi-market packages",
        body: "One coordinated strategy across several jurisdictions at once.",
      },
    ],
    processHeading: "What you receive",
    process: [
      {
        step: "01",
        title: "Ingredient review",
        body: "Market-specific screening against each regulator's permitted list.",
      },
      {
        step: "02",
        title: "Pathway recommendation",
        body: "The route to market, with the evidence each regulator will ask for.",
      },
      {
        step: "03",
        title: "Label & claim scoping",
        body: "Compliance review of the label, and claims graded against the literature.",
      },
      {
        step: "04",
        title: "Dossier & submission",
        body: "Documentation prepared and lodged through the relevant portal.",
      },
    ],
    audience:
      "For Australian brands planning to export, international brands entering Australia, and founders launching across several markets at once.",
  },
  {
    slug: "manufacturer-sourcing",
    eyebrow: "Service · Manufacturer Sourcing",
    heading: "Manufacturer sourcing & GMP clearance navigation",
    metaTitle: "Supplement & Cosmetic Manufacturer Sourcing and GMP Clearance",
    metaDescription:
      "Independent manufacturer shortlisting, TGA GMP clearance verification, capability matching and quote review for supplement and cosmetic brands.",
    lead: "Finding the right manufacturer is one of the hardest parts of bringing a product to market — and one of the most consequential. We take the guesswork out of it by vetting partners for TGA GMP clearance, capability fit and minimum-order viability.",
    includesHeading: "What the engagement includes",
    includes: [
      {
        title: "Identification & shortlisting",
        body: "Two to three vetted manufacturers matched to your format and volume.",
      },
      {
        title: "TGA GMP clearance verification",
        body: "Clearance confirmed before you send anyone your formula.",
      },
      {
        title: "Capability matching",
        body: "Format, volume and certification checked against what each plant can actually run.",
      },
      {
        title: "Technical briefing package",
        body: "Your dossier sent out with a structured brief, so quotes are comparable.",
      },
      {
        title: "Quote facilitation",
        body: "Quotes gathered and normalised into a like-for-like comparison.",
      },
      {
        title: "China manufacturing guidance",
        body: "For brands weighing offshore production, with the compliance trade-offs made explicit.",
      },
    ],
    processHeading: "How it runs",
    process: [
      {
        step: "01",
        title: "Discovery call",
        body: "Format, volume targets, budget and timeline.",
      },
      {
        step: "02",
        title: "Manufacturer shortlist",
        body: "Two to three suitable manufacturers identified and vetted.",
      },
      {
        step: "03",
        title: "Technical brief",
        body: "The formulation dossier goes out with a structured briefing.",
      },
      {
        step: "04",
        title: "Quote review",
        body: "Quotes compared side by side so the decision is an informed one.",
      },
    ],
    audience:
      "For founders who need a manufacturer identified, brands wanting an independent review of their current one, and anyone needing a TGA-compliant alternative at short notice.",
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((detail) => detail.slug === slug);
}
