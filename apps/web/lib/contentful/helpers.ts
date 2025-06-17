import { Entry, EntrySkeletonType } from "contentful";

export function isEntry<T extends EntrySkeletonType>(
  item: unknown
): item is Entry<T> {
  return typeof item === "object" && item !== null && "fields" in item;
}
