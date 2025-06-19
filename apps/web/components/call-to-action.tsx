"use client";

import { ContentfulRichText } from "./contentful-rich-text";
import CTAButtons from "./cta-buttons";
// import { CTAContent } from "~/src/types/contentfulTypes";

export default function CallToAction({ content }: { content: CTAContent }) {
	return (
		<section className="flex bg-background items-center flex-wrap gap-16 py-16 md:py-24 container">
			<div className="space-y-6 flex-1">
				<div className="flex-1 space-y-5">
					<h3 className="font-nord font-medium text-2xl md:text-3xl transition-all">
						{content.fields.heading}
					</h3>
					<div className="text-muted-foreground text-lg md:text-xl">
						<ContentfulRichText>
							{content.fields.content}
						</ContentfulRichText>
					</div>
				</div>
			</div>
			<CTAButtons />
		</section>
	);
}
