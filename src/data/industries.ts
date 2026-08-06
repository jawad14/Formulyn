/** Content for the /industries page. */

export const industriesHero = {
  eyebrow: "Industries · 07 Active Categories",
  heading: "Where our formulas end up",
  body: "Seven categories, one standard of evidence. Each has its own regulatory pathway, stability profile, and sensory expectations.",
} as const;

export type Industry = {
  index: string;
  title: string;
  body: string;
};

export const industries: Industry[] = [
  {
    index: "[01]",
    title: "Supplements",
    body: "Capsules, powders, and sachets with dosages that hold up to scrutiny.",
  },
  {
    index: "[02]",
    title: "Nutraceuticals",
    body: "Clinically-positioned actives with graded evidence behind every claim.",
  },
  {
    index: "[03]",
    title: "Skincare",
    body: "Emulsions and serums balanced for efficacy, texture, and preservation.",
  },
  {
    index: "[04]",
    title: "Pet Wellness",
    body: "Species-appropriate dosing and palatability that survives real feeding.",
  },
  {
    index: "[05]",
    title: "Functional Foods",
    body: "Actives delivered at dose without wrecking taste or mouthfeel.",
  },
  {
    index: "[06]",
    title: "Topicals",
    body: "Penetration, stability, and microbiological safety, all at once.",
  },
  {
    index: "[07]",
    title: "Liposomal Delivery",
    body: "Encapsulation systems built for bioavailability you can measure.",
  },
];

/** The inverted final tile that closes the grid. */
export const industriesCta = {
  index: "[ + ]",
  title: "Something else?",
  body: "If it can be formulated and defended with evidence, bring it to the call.",
  cta: { label: "Start a brief →", href: "/contact" },
} as const;
