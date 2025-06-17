// types/content.ts

export interface Button {
  id: string;
  text: string;
  url?: string;
  variant?:
    | "default"
    | "destructive"
    | "ghost"
    | "icon"
    | "link"
    | "outline"
    | "secondary"
    | "with-icon";
}

export interface ImageAsset {
  title: string;
  description?: string;
  url: string;
  width?: number;
  height?: number;
}

export interface HeroComponent {
  type: "heroComponent";
  id?: string;
  heading: string;
  subheading?: string;
  buttons?: Button[];
  image?: ImageAsset;
}

export interface TextComponent {
  type: "textComponent";
  id: string;
  sectionName?: string;
  heading?: string;
  subheading?: string;
  body: unknown; // You can use Contentful's RichText type here if needed
  additionalComponents?: Button[];
}

export type PageContentBlock = HeroComponent | TextComponent;

export interface Page {
  title: string;
  slug: string;
  pageContent: PageContentBlock[];
}
