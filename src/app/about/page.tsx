import type { Metadata } from "next";
import { aboutBody, aboutHero, founder } from "@/data/about";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { PrinciplesSection } from "@/components/sections/about/PrinciplesSection";
import { FounderSection } from "@/components/sections/about/FounderSection";
import { CtaBanner } from "@/components/layout/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description: aboutBody.lead,
  alternates: { canonical: "/about" },
};

/**
 * `sameAs` on the founder ties this page's person to the same real person as
 * the LinkedIn profile, rather than leaving a search engine to guess.
 */
const organisationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressCountry: "AU",
  },
  founder: {
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    sameAs: [founder.linkedin],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationLd) }}
      />
      <PageHero
        eyebrow={aboutHero.eyebrow}
        heading={aboutHero.heading}
        headingMeasure={18}
      />
      <AboutSection />
      <PrinciplesSection />
      <FounderSection />
      <CtaBanner />
    </>
  );
}
