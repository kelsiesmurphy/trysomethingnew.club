import { createClient, EntrySkeletonType } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export async function getEntryByType<T extends EntrySkeletonType>(
  contentType: string
): Promise<T["fields"] | null> {
  try {
    const entries = await client.getEntries<T>({
      content_type: contentType,
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const entry = entries.items[0];
    if (!entry) return null;
    return entry.fields;
  } catch (error) {
    console.error(`Error fetching entry of type ${contentType}:`, error);
    return null;
  }
}
