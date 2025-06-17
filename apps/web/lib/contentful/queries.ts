import { contentfulClient } from "./client";
import { homePageMock } from "@/lib/mocks/homepageMocks";
import { normalizePage } from "@/lib/contentful/normalizePage";
import { Page } from "@/lib/contentful/simplified-types";
import { TypePageSkeleton } from "./types";

export const getPageBySlug = async (slug: string): Promise<Page | null> => {
  const useCMS = process.env.USE_CMS === "true";

  if (!useCMS) {
    console.warn("Using fallback content for slug:", slug);
    return homePageMock;
  }

  try {
    const response = await contentfulClient.getEntries<TypePageSkeleton>({
      content_type: "page",
      "fields.slug": slug,
      include: 10,
    });

    if (!response.items.length || !response.items[0]) return null;

    return normalizePage(response.items[0]);
  } catch (error) {
    console.error(`Error fetching page "${slug}" from Contentful:`, error);
    return null;
  }
};
