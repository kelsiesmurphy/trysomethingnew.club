import { ContentfulRichText } from "./contentful-rich-text";
import { TextComponentType } from "@/lib/contentful/types";

export default function AboutUs({ content }: { content: TextComponentType }) {
  return (
    <section className="flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row container gap-6 md:text-lg">
        <div className="flex-1 space-y-3">
          <p className="text-primary font-semibold text-lg md:text-xl transition-all">
            {content.subheading}
          </p>
          <h2 className="font-nord text-3xl md:text-4xl font-medium transition-all max-w-3xl">
            {content.heading}
          </h2>
        </div>
        <div className="max-w-md">
          <ContentfulRichText>{content.body}</ContentfulRichText>
        </div>
      </div>
    </section>
  );
}
