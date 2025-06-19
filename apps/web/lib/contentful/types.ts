export interface ButtonType {
  id: string;
  text: string;
  url?: string;
  variant?:
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline"
    | "secondary";
  icon?: ImageAssetType;
}

export interface ImageAssetType {
  title: string;
  description?: string;
  url: string;
  width?: number;
  height?: number;
}

export interface HeroComponentType {
  type: "heroComponent";
  id?: string;
  heading: string;
  subheading?: string;
  buttons?: ButtonType[];
  image?: ImageAssetType;
}

export interface TextComponentType {
  type: "textComponent";
  id: string;
  sectionName?: string;
  heading?: string;
  subheading?: string;
  body: unknown;
  additionalComponents?: ButtonType[];
}

export type PageContentBlock = HeroComponentType | TextComponentType;

export interface Page {
  title: string;
  slug: string;
  sections: {
    hero?: HeroComponentType;
    newsletter?: TextComponentType;
  };
}
