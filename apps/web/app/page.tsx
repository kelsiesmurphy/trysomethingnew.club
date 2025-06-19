import { getPageBySlug } from "@/lib/contentful/queries";
import { findComponentById } from "@/lib/contentful/helpers";
import Hero from "@/components/hero";
import Events from "@/components/events";
import Newsletter from "@/components/newsletter";
import CMSError from "@/components/cms-error";

export default async function Page() {
  const page = await getPageBySlug("/");

  if (!page) {
    return <CMSError />;
  }

  const heroEntry = findComponentById(
    page.pageContent,
    "homepage-hero",
    "heroComponent"
  );

  const newsletterEntry = findComponentById(
    page.pageContent,
    "homepage-newsletter-cta",
    "textComponent"
  );

  return (
    <div className="flex flex-col min-h-svh">
      {heroEntry && <Hero content={heroEntry} />}
      <Events />
      {/* <Features
        content={{ fields: featuresContent, contentTypeId: "features" }}
      />
      <CallToAction
        content={{ fields: ctaContent, contentTypeId: "callToAction" }}
      /> */}
      {newsletterEntry && <Newsletter content={newsletterEntry} />}
    </div>
  );
}
