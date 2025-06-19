"use client";

import { ContentfulRichText } from "../contentful-rich-text";
import Image from "next/image";
import { useState } from "react";
import { FeaturesContent } from "~/src/types/contentfulTypes";

export default function FeatureTabs({ content }: { content: FeaturesContent }) {
	const [selectedTab, setSelectedTab] = useState(0);
	return (
		<section className="flex flex-col items-center gap-16">
			<div className="space-y-6 flex-1 container">
				<div className="flex-1 space-y-3">
					<h3 className="font-nord font-medium text-2xl md:text-3xl transition-all">
						{content.fields.subheading}
					</h3>
					<p className="text-muted-foreground text-lg md:text-xl transition-all">
						{content.fields.subheadingDescription}
					</p>
				</div>
			</div>
			<div className="flex-1 flex flex-wrap justify-center items-center gap-16 container">
				<ul className="flex-1 min-w-[280px]">
					{content.fields.featureTab &&
						content.fields.featureTab.map(
							(tab: any, index: number) => {
								const tabData = tab.fields;
								return (
									<li key={index}>
										<button
											onClick={() =>
												setSelectedTab(index)
											}
											className={`outline-brand py-4 pl-6 space-y-2 text-left border-l-4 ${selectedTab === index && "border-primary"} transition-colors w-full`}
										>
											<h4 className="text-lg md:text-xl font-semibold">
												{tabData.heading}
											</h4>
											<ContentfulRichText>
												{tabData.content}
											</ContentfulRichText>
										</button>
									</li>
								);
							},
						)}
				</ul>
				<div className="aspect-[594/426] ">
					<Image
						width="592"
						height="426"
						src={
							"https:" +
							content.fields.featureTab?.[selectedTab]?.fields
								?.image?.fields?.file?.url
						}
						alt={
							content.fields.featureTab?.[selectedTab]?.fields
								?.image?.fields?.description
						}
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
