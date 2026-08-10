import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceDetail, serviceDetails } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceDetailSections } from "@/components/sections/services/ServiceDetailSections";
import { CtaBanner } from "@/components/layout/CtaBanner";

type Params = { params: Promise<{ slug: string }> };

/** Slugs match the live site's sitemap — do not rename them. */
export function generateStaticParams() {
  return serviceDetails.map((detail) => ({ slug: detail.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return {};

  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: { canonical: `/services/${detail.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  return (
    <>
      <PageHero
        eyebrow={detail.eyebrow}
        heading={detail.heading}
        headingMeasure={18}
      />
      <ServiceDetailSections detail={detail} />
      <CtaBanner />
    </>
  );
}
