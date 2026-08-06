import type { Metadata } from "next";
import { industriesHero } from "@/data/industries";
import { PageHero } from "@/components/ui/PageHero";
import { IndustryGrid } from "@/components/sections/industries/IndustryGrid";
import { CtaBanner } from "@/components/layout/CtaBanner";

export const metadata: Metadata = {
  title: "Industries",
  description: industriesHero.body,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow={industriesHero.eyebrow}
        heading={industriesHero.heading}
        body={industriesHero.body}
        headingMeasure={16}
      />
      <IndustryGrid />
      <CtaBanner />
    </>
  );
}
