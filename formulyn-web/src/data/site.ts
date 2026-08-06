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

/** Primary navigation, in order. The CTA is defined separately below. */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export const navCta: NavLink = { label: "Initiate Brief", href: "/contact" };

/** Footer "Practice" column — the nav minus Home. */
export const footerPracticeLinks: NavLink[] = navLinks.filter(
  (link) => link.href !== "/",
);

export const footerBlurb =
  "Research and development consultancy building evidence-led formulations for supplement, skincare, and wellness brands across Australia and beyond.";
