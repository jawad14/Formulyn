/**
 * Copy and demo knowledge for the chat assistant.
 *
 * The Q&A below powers the DEMO provider only. Once the real API is wired up
 * (see src/lib/chat/provider.ts) these entries stop being used for answering,
 * but `suggestions` and the UI copy still come from here.
 */

export const chatUi = {
  launcherLabel: "Ask a question",
  launcherAriaLabel: "Open chat",
  title: "Formulyn assistant",
  subtitle: "Formulation questions, answered",
  closeLabel: "Close chat",
  placeholder: "Ask about process, timelines, categories…",
  sendLabel: "Send",
  briefCta: "Start a brief",
  disclaimer:
    "General guidance only. Anything specific to your formula is scoped on a call.",
} as const;

export const greeting =
  "Hello. I can answer questions about how we work — the four-phase process, timelines, categories, IP and regulatory pathways. What are you working on?";

/** Tappable starter prompts shown under the greeting. */
export const suggestions = [
  "How long does it take?",
  "What does it cost?",
  "Who owns the formula?",
  "Do you manufacture?",
] as const;

/** ---- Lead capture ------------------------------------------------- */

export const leadFlow = {
  intro:
    "Happy to get this in front of the team. Three quick questions — you can stop at any point.",
  name: "First, what's your name?",
  email: "Thanks. What's the best email to reach you on?",
  brief: "And in a sentence — what are you trying to make?",
  invalidEmail: "That doesn't look like an email address. Mind checking it?",
  success:
    "Got it — thank you. We'll be in touch within one business day. If you'd rather book a time directly, the discovery call link is on the contact page.",
  failure:
    "Something went wrong sending that through. Email info@formulyn.com.au and it'll reach the same place.",
} as const;

/** ---- Demo knowledge base ------------------------------------------ */

export type DemoAnswer = {
  /** Lower-case keywords; more matches wins. */
  keywords: string[];
  answer: string;
};

export const demoAnswers: DemoAnswer[] = [
  {
    keywords: ["how long", "timeline", "time", "weeks", "duration", "fast"],
    answer:
      "Most projects run 8–16 weeks across four phases: Discovery (weeks 1–2), Synthesis (3–6), Validation (7–14) and Handover (15–16). Validation is the variable one — stability and panel work set the pace.",
  },
  {
    keywords: ["cost", "price", "pricing", "budget", "quote", "expensive"],
    answer:
      "Fixed scope, fixed price, quoted per phase. Each phase ends at a go / no-go gate, so you're never committed beyond the next milestone. Exact numbers depend on category and regulatory scope — that's what the 30-minute discovery call is for.",
  },
  {
    keywords: ["ip", "own", "ownership", "rights", "patent", "formula mine"],
    answer:
      "The IP is yours from day one, and assignment is written in at phase one rather than negotiated at the end. You leave with a manufacturer-agnostic dossier: master formula, batch records, spec sheets, COA templates and the regulatory file.",
  },
  {
    keywords: ["manufacture", "manufacturing", "factory", "produce", "moq"],
    answer:
      "No — and deliberately so. We're an R&D consultancy with no factory to fill and no minimum order to protect, so there's no reason to steer you toward an ingredient we happen to hold. Take the finished dossier to any manufacturer; if they underperform, take it to the next one.",
  },
  {
    keywords: [
      "categories",
      "industries",
      "what do you make",
      "products",
      "sectors",
    ],
    answer:
      "Seven active categories: supplements, nutraceuticals, skincare, pet wellness, functional foods, topicals and liposomal delivery. Each has its own regulatory pathway and stability profile.",
  },
  {
    keywords: [
      "regulatory",
      "tga",
      "fda",
      "eu",
      "compliance",
      "claims",
      "label",
      "legal",
    ],
    answer:
      "We map the TGA / FDA / EU pathway during Discovery and grade the literature before any claim reaches artwork. The distinction that catches most brands out is “clinically studied” versus “clinically proven” — one describes the ingredient, the other promises an outcome.",
  },
  {
    keywords: ["stability", "shelf life", "shelf", "expiry", "degradation"],
    answer:
      "Accelerated stability at 3, 6 and 12 months, plus microbiological challenge testing where the product is topical. Accelerated data is directional, not conclusive — real-time results still matter, which is why month nine is where a lot of formulas quietly fail.",
  },
  {
    keywords: [
      "liposomal",
      "encapsulation",
      "bioavailability",
      "absorption",
      "delivery",
    ],
    answer:
      "Liposomal delivery is one of our seven categories. What matters is whether the data supports the claim: particle size distribution and entrapment efficiency, measured — not an encapsulation claim asserted on the label.",
  },
  {
    keywords: ["process", "phases", "how do you work", "methodology", "steps"],
    answer:
      "Four phases. Discovery sets the brief, target claims and regulatory scope. Synthesis grades the evidence and builds the formulation matrix. Validation runs bench prep, stability and sensory panels. Handover gives you the full dossier and the IP.",
  },
  {
    keywords: ["reformulate", "existing", "improve", "fix", "margin", "cost down"],
    answer:
      "Reformulation is one of our three core mandates. The usual pattern is a long ingredient list where most actives sit under an effective dose — we rebuild around the ones that earn their place, then prove it with stability data.",
  },
  {
    keywords: ["skincare", "serum", "cream", "emulsion", "retinol", "topical"],
    answer:
      "Skincare and topicals are core categories — emulsions and serums balanced for efficacy, texture and preservation. The hard part is usually holding all three at once alongside a preservative system that survives challenge testing.",
  },
  {
    keywords: ["supplement", "capsule", "powder", "tablet", "dose", "dosage"],
    answer:
      "Supplements and nutraceuticals, with dosages set to survive scrutiny rather than to look impressive on a label. Dosage consultancy is also available standalone if you already have an ingredient list.",
  },
  {
    keywords: ["pet", "dog", "cat", "animal", "palatability"],
    answer:
      "Pet wellness is an active category — species-appropriate dosing plus palatability that survives real feeding. Getting the dose right is usually easier than getting it eaten.",
  },
  {
    keywords: ["where", "location", "based", "australia", "brisbane", "remote"],
    answer:
      "We're based in Brisbane, Australia and work with clients globally. Discovery runs remotely, so timezone hasn't been a blocker.",
  },
  {
    keywords: ["contact", "call", "book", "talk", "speak", "email", "meeting"],
    answer:
      "Start with a 30-minute discovery call — no commitment and no NDA needed at first contact. You can also email info@formulyn.com.au.",
  },
  {
    keywords: ["nda", "confidential", "secret", "protect"],
    answer:
      "No NDA is required for a first conversation; we can sign one before anything sensitive changes hands. Client names on our case studies stay withheld under NDA as a matter of course.",
  },
];

/** Shown when nothing matches — never invents an answer. */
export const fallbackAnswer =
  "I don't have a confident answer to that one. It's a good question for the 30-minute discovery call, where someone from the team can give you a proper response — or email info@formulyn.com.au.";
