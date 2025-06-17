import CMSError from "@/components/cms-error";
import { getPageBySlug } from "@/lib/contentful/queries";
import Hero from "@/components/hero";

import type {
  TypePageSkeleton,
  TypeHeroComponentSkeleton,
} from "@/lib/contentful/types";
import type { Entry } from "contentful";
import { isEntry } from "@/lib/contentful/helpers";

export default async function Page() {
  const pageContent = (await getPageBySlug("/")) as Entry<TypePageSkeleton>;

  if (!pageContent || !Array.isArray(pageContent.fields.pageContent)) {
    return <CMSError />;
  }

  const heroEntry = pageContent.fields.pageContent.find(
    (component): component is Entry<TypeHeroComponentSkeleton> =>
      isEntry<TypeHeroComponentSkeleton>(component) &&
      component.fields.id === "homepage-hero"
  );

  if (!heroEntry) {
    return <CMSError />;
  }

  return (
    <div className="flex flex-col min-h-svh">
      <Hero content={heroEntry.fields} />
    </div>
  );
}
