import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { useMemo } from "react";

export function ContentfulRichText({ children }: { children: Document }) {
	const richText = useMemo(
		() => documentToReactComponents(children),
		[children],
	);

	return (
		<article className="flex-1 text-muted-foreground transition-all">
			{richText}
		</article>
	);
}
