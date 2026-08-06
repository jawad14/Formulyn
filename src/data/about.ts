/** Content for the /about page. */

export const aboutHero = {
  eyebrow: "About · Brisbane, Australia",
  heading: "An independent lab, on your side of the table",
} as const;

export const aboutBody = {
  lead: "Formulyn exists because good ideas keep getting flattened into someone else's stock formula.",
  paragraphs: [
    "We are a research and development consultancy, not a manufacturer. That distinction matters: we have no factory to fill, no minimum order to protect, and no reason to steer you toward an ingredient we happen to have in stock.",
    "What you get at the end is a dossier in your name: the formula, the evidence, the batch records, and the regulatory file. Take it to any manufacturer in the world. If they don't perform, take it to the next one.",
  ],
} as const;

export type Principle = {
  label: string;
  title: string;
};

export const principles: Principle[] = [
  { label: "Principle 01", title: "Evidence before claims" },
  { label: "Principle 02", title: "Fixed scope, fixed price" },
  { label: "Principle 03", title: "The IP is yours from day one" },
  { label: "Principle 04", title: "Manufacturer-agnostic, always" },
];
