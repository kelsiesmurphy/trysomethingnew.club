import { contentfulClient } from "./client";
import { homePageMock } from "@/lib/mocks/homepageMocks";
import { normalizePage } from "@/lib/contentful/normalize-page";
import { Page } from "@/lib/contentful/types";

export const getNormalizedPageBySlug = async (
  slug: string
): Promise<Page | null> => {
  const useCMS = process.env.NEXT_PUBLIC_USE_CMS === "true";

  if (!useCMS) {
    console.warn("Using fallback content for slug:", slug);
    return homePageMock;
  }

  try {
    const response = await contentfulClient.getEntries({
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
