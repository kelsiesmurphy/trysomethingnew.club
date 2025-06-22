import Hero from "@/components/hero";
import Events from "@/components/events";
import Newsletter from "@/components/newsletter";
import CMSError from "@/components/cms-error";
import { getPageContent } from "@/lib/contentful/get-page-content";
import CallToAction from "@/components/call-to-action";
import AboutUs from "@/components/about-us";

export default async function Page() {
  const page = await getPageContent("/");

  if (!page) {
    return <CMSError />;
  }

  return (
    <div className="flex flex-col min-h-svh">
      {page.sections.hero && <Hero content={page.sections.hero} />}
      {page.sections.aboutUs && <AboutUs content={page.sections.aboutUs} />}
      <Events />
      {/* <Features
        content={{ fields: featuresContent, contentTypeId: "features" }}
      /> */}
      {page.sections.callToAction && (
        <CallToAction content={page.sections.callToAction} />
      )}
      {page.sections.newsletter && (
        <Newsletter content={page.sections.newsletter} />
      )}
    </div>
  );
}
