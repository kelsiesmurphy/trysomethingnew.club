import { TextComponentType } from "@/lib/contentful/types";
import { ContentfulRichText } from "./contentful-rich-text";
import CTAButtons from "./cta-buttons";

export default function CallToAction({
  content,
}: {
  content: TextComponentType;
}) {
  return (
    <section className="flex items-center flex-wrap gap-16 py-16 md:py-24 container">
      <div className="space-y-6 flex-1">
        <div className="flex-1 space-y-5">
          <h3 className="font-nord font-medium text-2xl md:text-3xl transition-all">
            {content.heading}
          </h3>
          <div className="text-muted-foreground text-lg md:text-xl">
            <ContentfulRichText>{content.body}</ContentfulRichText>
          </div>
        </div>
      </div>
      <CTAButtons content={content.additionalComponents} />
    </section>
  );
}
