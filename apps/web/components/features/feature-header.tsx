import { FeaturesContent } from "~/src/types/contentfulTypes";
import { ContentfulRichText } from "../contentful-rich-text";

export default function FeatureHeader({
	content,
}: {
	content: FeaturesContent;
}) {
	return (
		<section className="flex flex-col items-center gap-6">
			<div className="flex flex-col md:flex-row container gap-6 md:text-lg">
				<div className="flex-1 space-y-3">
					<p className="text-primary font-semibold text-lg md:text-xl transition-all">
						{content.fields.preheading}
					</p>
					<h2 className="font-nord text-3xl md:text-4xl font-medium transition-all max-w-3xl">
						{content.fields.heading}
					</h2>
				</div>
				<div className="max-w-md">
					<ContentfulRichText>
						{content.fields.featureContent}
					</ContentfulRichText>
				</div>
			</div>
		</section>
	);
}
