import { PageContentBlock } from "./simplified-types";

export function findComponentById<T extends PageContentBlock["type"]>(
  content: PageContentBlock[],
  id: string,
  type: T
): Extract<PageContentBlock, { type: T }> | undefined {
  return content.find(
    (block): block is Extract<PageContentBlock, { type: T }> =>
      block.type === type && block.id === id
  );
}
