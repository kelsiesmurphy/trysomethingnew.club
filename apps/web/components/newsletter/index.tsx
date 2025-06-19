import React from "react";
import { NewsletterForm } from "./newsletter-form";
import { TextComponentType } from "@/lib/contentful/simplified-types";

export default function Newsletter({
  content,
}: {
  content: TextComponentType;
}) {
  return (
    <section className="flex flex-col items-center py-16 md:py-24 gap-6">
      <div className="flex container flex-col items-center text-center gap-5 max-w-3xl">
        <h2 className="font-nord text-3xl md:text-4xl font-medium transition-all">
          {content.heading}
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl transition-all">
          {content.subheading}
        </p>
      </div>
      <NewsletterForm />
    </section>
  );
}
