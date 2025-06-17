import { Page, PageContentBlock } from "@/lib/contentful/simplified-types";

// Utility to safely extract text from localized or plain strings
export function getText(field: any): string {
  if (typeof field === "string") return field;
  if (field && typeof field === "object") return field["en-GB"] || "";
  return "";
}

export function normalizePage(entry: any): Page {
  const { title, slug, pageContent } = entry.fields;

  return {
    title: getText(title),
    slug: getText(slug ?? "/"),
    pageContent: (pageContent ?? []).map((block: any): PageContentBlock => {
      const contentType = block?.sys?.contentType?.sys?.id;

      switch (contentType) {
        case "heroComponent":
          return normalizeHeroComponent(block);
        case "textComponent":
          return normalizeTextComponent(block);
        default:
          console.warn("Unknown component type:", contentType);
          return {
            type: "textComponent",
            id: "unknown",
            body: { nodeType: "document", content: [] },
          };
      }
    }),
  };
}

export function normalizeHeroComponent(entry: any): PageContentBlock {
  const { id, heading, subheading, buttons, image } = entry.fields;

  return {
    type: "heroComponent",
    id: getText(id),
    heading: getText(heading),
    subheading: subheading ? getText(subheading) : undefined,
    buttons: (buttons ?? []).map((btn: any) => ({
      id: getText(btn.fields.id),
      text: getText(btn.fields.text),
      url: btn.fields.url ? getText(btn.fields.url) : undefined,
      variant: btn.fields.variant ? getText(btn.fields.variant) : undefined,
    })),
    image: image && {
      title: getText(image.fields.title),
      description: getText(image.fields.description),
      url: image.fields.file?.url ?? "",
      width: image.fields.file?.details?.image?.width ?? undefined,
      height: image.fields.file?.details?.image?.height ?? undefined,
    },
  };
}

export function normalizeTextComponent(entry: any): PageContentBlock {
  const { id, sectionName, heading, subheading, body, additionalComponents } =
    entry.fields;

  return {
    type: "textComponent",
    id: getText(id),
    sectionName: getText(sectionName),
    heading,
    subheading,
    body,
    additionalComponents: (additionalComponents ?? []).map((btn: any) => ({
      id: getText(btn.fields.id),
      text: getText(btn.fields.text),
      url: btn.fields.url ? getText(btn.fields.url) : undefined,
      variant: btn.fields.variant ? getText(btn.fields.variant) : undefined,
    })),
  };
}
