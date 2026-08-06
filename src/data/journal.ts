/** Content for the /journal page. */

export const journalHero = {
  eyebrow: "Journal · Notes from the bench",
  heading: "What we're learning",
  body: "Formulation science, regulatory changes, and the unglamorous decisions that decide whether a product works.",
} as const;

export type FeaturedPost = {
  eyebrow: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  imageLabel: string[];
};

export const featuredPost: FeaturedPost = {
  eyebrow: "Featured · Regulatory",
  title: `Why "clinically studied" and "clinically proven" are not the same sentence`,
  excerpt:
    "A single word separates a defensible label from a compliance problem. This is how we grade evidence before a claim reaches artwork.",
  date: "July 2026",
  readingTime: "8 min read",
  imageLabel: ["Image placeholder", "Feature article"],
};

export type Post = {
  category: string;
  title: string;
  excerpt: string;
  meta: string;
  imageLabel: string;
};

export const posts: Post[] = [
  {
    category: "Stability",
    title: "The month-nine problem: what accelerated testing misses",
    excerpt:
      "Real-time data still matters. A short guide to reading a stability curve honestly.",
    meta: "June 2026 · 6 min read",
    imageLabel: "Image placeholder",
  },
  {
    category: "Bioavailability",
    title: "Liposomal claims, and what the encapsulation data has to show",
    excerpt:
      "Particle size distribution, entrapment efficiency, and which tests are worth paying for.",
    meta: "June 2026 · 7 min read",
    imageLabel: "Image placeholder",
  },
  {
    category: "Sourcing",
    title: "Owning your formula: why IP assignment belongs in phase one",
    excerpt:
      "The contracts founders sign early are usually the ones that limit them later.",
    meta: "May 2026 · 5 min read",
    imageLabel: "Image placeholder",
  },
];

export const newsletter = {
  heading: "Bench notes, monthly",
  body: "One email a month on formulation science and regulatory change. No product pitches.",
  placeholder: "you@company.com",
  submitLabel: "Subscribe",
} as const;
