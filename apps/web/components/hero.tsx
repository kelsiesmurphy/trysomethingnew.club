import { HeroComponentType } from "@/lib/contentful/simplified-types";
import Image from "next/image";
import CTAButtons from "./cta-buttons";

export default function Hero({ content }: { content: HeroComponentType }) {
  return (
    <section className="flex container flex-col pt-12 md:pt-24 pb-10 gap-8">
      <div className="max-w-5xl flex flex-col gap-8">
        <h1 className="text-4xl md:text-6xl font-medium transition-all">
          {content.heading}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl transition-all max-w-2xl">
          {content.subheading}
        </p>
        <CTAButtons content={content.buttons} />
      </div>
      <div className="overflow-hidden w-full object-cover">
        <Image
          priority
          src={`https:${content.image?.url}`}
          height={516}
          width={1400}
          className="object-cover overflow-hidden rounded-lg"
          alt={content.image?.description || "Hero image"}
        />
      </div>
    </section>
  );
}
