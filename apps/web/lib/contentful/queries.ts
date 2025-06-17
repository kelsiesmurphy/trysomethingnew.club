import { Entry } from "contentful";
import { contentfulClient } from "./client";
import { homePageMock } from "../mocks/homepageMocks";
import { TypePageSkeleton } from "./types";

export const getPageBySlug = async (
  slug: string
): Promise<Entry<TypePageSkeleton> | null> => {
  const useCMS = process.env.USE_CMS === "true";

  if (!useCMS) {
    console.warn("Using fallback content for slug:", slug);
    return { fields: homePageMock } as unknown as Entry<TypePageSkeleton>;
  }

  try {
    const response = await contentfulClient.getEntries<TypePageSkeleton>({
      content_type: "page",
      "fields.slug": slug,
      limit: 1,
      include: 10,
    });

    if (!response.items.length) return null;

    return response.items[0] ?? null;
  } catch (error) {
    console.error(`Error fetching page "${slug}" from Contentful:`, error);
    return null;
  }
};
