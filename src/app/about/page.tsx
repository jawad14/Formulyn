import type { Metadata } from "next";
import { aboutBody, aboutHero } from "@/data/about";
import { PageHero } from "@/components/ui/PageHero";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { CtaBanner } from "@/components/layout/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description: aboutBody.lead,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        heading={aboutHero.heading}
        headingMeasure={18}
      />
      <AboutSection />
      <CtaBanner />
    </>
  );
}
