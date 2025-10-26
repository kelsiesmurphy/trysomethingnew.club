import { getNormalizedPageBySlug } from "./queries";
import { homePageMock } from "../mocks/homepageMocks";
import { Page } from "./types";

export async function getPageContent(slug: string): Promise<Page> {
  const useCMS = process.env.NEXT_PUBLIC_USE_CMS === "true";

  if (useCMS) {
    const page = await getNormalizedPageBySlug(slug);
    if (page) return page;
    console.warn("CMS returned null, using mock for:", slug);
  } else {
    console.warn("CMS disabled, using mock for:", slug);
  }

  // Fallback to mocks
  return homePageMock;
}
