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

function isResolvedEntry(entry: any) {
  return entry && typeof entry === "object" && "fields" in entry;
}

export function normalizeHeroComponent(entry: any): PageContentBlock {
  const { id, heading, subheading, buttons, image } = entry.fields;

  return {
    type: "heroComponent",
    id: getText(id),
    heading: getText(heading),
    subheading: subheading ? getText(subheading) : undefined,
    buttons: (buttons ?? []).flatMap((btn: any) => {
      if (!btn.fields?.buttons) return [];

      return btn.fields.buttons.map((button: any) => ({
        id: getText(button.fields.id),
        text: getText(button.fields.text),
        url: button.fields.url ? getText(button.fields.url) : undefined,
        icon:
          button.fields.icon && isResolvedEntry(button.fields.icon)
            ? {
                title: getText(button.fields.icon.fields.title),
                description: getText(button.fields.icon.fields.description),
                url: button.fields.icon.fields.file.url,
                width: button.fields.icon.fields.file.details.image?.width,
                height: button.fields.icon.fields.file.details.image?.height,
              }
            : undefined,
        variant: button.fields.variant
          ? getText(button.fields.variant)
          : undefined,
      }));
    }),
    image:
      image && isResolvedEntry(image)
        ? {
            title: getText(image.fields.title),
            description: getText(image.fields.description),
            url: image.fields.file.url,
            width: image.fields.file.details.image?.width,
            height: image.fields.file.details.image?.height,
          }
        : undefined,
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
    additionalComponents: (additionalComponents ?? [])
      .filter(isResolvedEntry)
      .map(
        (btn: { fields: { id: any; text: any; url: any; variant: any } }) => ({
          id: getText(btn.fields.id),
          text: getText(btn.fields.text),
          url: btn.fields.url ? getText(btn.fields.url) : undefined,
          variant: btn.fields.variant ? getText(btn.fields.variant) : undefined,
        })
      ),
  };
}
