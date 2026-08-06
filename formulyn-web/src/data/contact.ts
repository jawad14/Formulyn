/** Content for the /contact page and the closing CTA banner. */

export const contactHero = {
  eyebrow: "Next step",
  heading: "Begin with a 30-minute discovery call",
  body: "No commitment, no NDA required at first contact. We'll scope what's possible.",
} as const;

export const briefForm = {
  eyebrow: "Initiate a brief",
  submitLabel: "Send brief →",
  fields: [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    {
      name: "category",
      type: "text",
      placeholder: "Category (e.g. skincare, supplements)",
    },
  ],
  message: {
    name: "message",
    placeholder: "What are you trying to make?",
    rows: 4,
  },
} as const;

/** The gold CTA banner shown at the foot of every page except /contact. */
export const ctaBanner = {
  eyebrow: "Next step",
  heading: "Begin with a 30-minute discovery call",
  body: "No commitment, no NDA required at first contact. We'll scope what's possible.",
  cta: { label: "Book the call →", href: "/contact" },
} as const;
