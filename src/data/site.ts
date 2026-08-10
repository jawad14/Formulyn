/**
 * Global site configuration: identity, navigation and contact details.
 * Anything that appears in more than one place lives here.
 */

export type NavLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Formulyn",
  url: "https://formulyn.com.au",
  tagline: "From brief to batch.",
  description:
    "Boutique nutraceutical and cosmetic formulation consultancy. Evidence-led supplement, skincare, and wellness formulations from molecular brief to regulatory-ready product.",
  email: "info@formulyn.com.au",
  location: "Brisbane, Australia",
  locationLong: "Brisbane, Australia · Serving clients globally",
  googleReviewsUrl: "https://www.google.com/search?q=Formulyn+Brisbane",
  availability: "Accepting briefs for Q3",
  copyright: "© 2026 Formulyn. All rights reserved.",
} as const;

/**
 * Primary navigation, in order. The CTA is defined separately below.
 *
 * Contact and the Initiate Brief button both land on /contact — the brief
 * intake form and the contact details live on the same page. The plain link
 * is there for people looking for an address rather than a call to action,
 * which is how the live site does it too.
 */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navCta: NavLink = { label: "Initiate Brief", href: "/contact" };

/**
 * Footer "Practice" column — the nav minus Home and Contact, plus Services.
 * Services is not in the main nav (it would overflow the design's bar) but
 * it and its detail pages are indexed, so the footer carries the link.
 * Contact is omitted here because the adjacent Consultancy column already
 * carries the address, the email and the discovery-call link.
 */
const FOOTER_OMIT = new Set(["/", "/contact"]);

export const footerPracticeLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  ...navLinks.filter((link) => !FOOTER_OMIT.has(link.href)),
];

export const footerBlurb =
  "Research and development consultancy building evidence-led formulations for supplement, skincare, and wellness brands across Australia and beyond.";
