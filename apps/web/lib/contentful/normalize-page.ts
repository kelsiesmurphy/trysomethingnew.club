import { HeroComponentType, TextComponentType } from "@/lib/contentful/types";

export interface NormalizedPage {
  title: string;
  slug: string;
  sections: {
    hero?: HeroComponentType;
    newsletter?: TextComponentType;
    // features?: FeaturesComponentType;
    // callToAction?: CallToActionComponentType;
  };
}

export function getText(field: any): string {
  if (typeof field === "string") return field;
  if (field && typeof field === "object") return field["en-GB"] || "";
  return "";
}

function isResolvedEntry(entry: any) {
  return entry && typeof entry === "object" && "fields" in entry;
}

export function normalizeHeroComponent(entry: any): HeroComponentType {
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

export function normalizeTextComponent(entry: any): TextComponentType {
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

export function normalizePage(entry: any): NormalizedPage {
  const { title, slug, pageContent } = entry.fields;

  const sections: NormalizedPage["sections"] = {};

  for (const block of pageContent ?? []) {
    const type = block?.sys?.contentType?.sys?.id;
    const id = getText(block.fields.id);

    switch (type) {
      case "heroComponent":
        if (id === "homepage-hero") {
          sections.hero = normalizeHeroComponent(block);
        }
        break;
      case "textComponent":
        if (id === "homepage-newsletter-cta") {
          sections.newsletter = normalizeTextComponent(block);
        }
        break;
      // Add more as needed
    }
  }

  return {
    title: getText(title),
    slug: getText(slug ?? "/"),
    sections,
  };
}
