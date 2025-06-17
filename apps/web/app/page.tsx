// app/page.tsx or wherever this is

import CMSError from "@/components/cms-error";
import { getPageBySlug } from "@/lib/contentful/queries";
import Hero from "@/components/hero";
import { PageContentBlock } from "@/lib/contentful/simplified-types";
import { findComponentById } from "@/lib/contentful/helpers";

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

  return (
    <div className="flex flex-col min-h-svh">
      {heroEntry && <Hero content={heroEntry} />}
    </div>
  );
}
