import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeButtonFields {
  text: EntryFieldTypes.Symbol;
  url?: EntryFieldTypes.Symbol;
  variant?: EntryFieldTypes.Symbol<
    | "default"
    | "destructive"
    | "ghost"
    | "icon"
    | "link"
    | "outline"
    | "secondary"
    | "with-icon"
  >;
}

export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, "button">;
export type TypeButton<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeButtonSkeleton, Modifiers, Locales>;

export interface TypeCtaButtonsFields {
  id: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  buttons: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeButtonSkeleton>>;
}

export type TypeCtaButtonsSkeleton = EntrySkeletonType<
  TypeCtaButtonsFields,
  "ctaButtons"
>;
export type TypeCtaButtons<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCtaButtonsSkeleton, Modifiers, Locales>;

export interface TypeFooterSectionFields {
  copyright: EntryFieldTypes.Symbol;
  links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeFooterSectionSkeleton = EntrySkeletonType<
  TypeFooterSectionFields,
  "footerSection"
>;
export type TypeFooterSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeFooterSectionSkeleton, Modifiers, Locales>;

export interface TypeHeroComponentFields {
  id: EntryFieldTypes.Symbol;
  heading: EntryFieldTypes.Text;
  subheading?: EntryFieldTypes.Text;
  buttons?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeHeroComponentSkeleton = EntrySkeletonType<
  TypeHeroComponentFields,
  "heroComponent"
>;
export type TypeHeroComponent<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHeroComponentSkeleton, Modifiers, Locales>;

export interface TypePageFields {
  title: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  pageContent?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType>
  >;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePageSkeleton, Modifiers, Locales>;

export interface TypeTextComponentFields {
  id: EntryFieldTypes.Symbol;
  sectionName?: EntryFieldTypes.Symbol;
  heading?: EntryFieldTypes.Text;
  subheading?: EntryFieldTypes.Text;
  body: EntryFieldTypes.RichText;
  additionalComponents?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType>
  >;
}

export type TypeTextComponentSkeleton = EntrySkeletonType<
  TypeTextComponentFields,
  "textComponent"
>;
export type TypeTextComponent<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTextComponentSkeleton, Modifiers, Locales>;
