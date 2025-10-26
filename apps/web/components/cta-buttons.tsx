import { ButtonType } from "@/lib/contentful/types";
import { Button } from "@workspace/ui/components/button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/contentful/get-image-url";

export default async function CTAButtons({
  content,
}: {
  content?: ButtonType[];
}) {
  return (
    <div className="flex flex-col w-full sm:w-min sm:flex-row gap-4">
      {content?.map((buttonContent: ButtonType) => (
        <Button
          variant={buttonContent.variant}
          size="lg"
          asChild
          key={buttonContent.id}
        >
          <Link href={buttonContent.url || "#"}>
            {buttonContent.icon && (
              <Image
                priority
                src={
                  buttonContent.icon?.url
                    ? getImageUrl(buttonContent.icon?.url)
                    : ""
                }
                height={16}
                width={16}
                alt={buttonContent.icon?.title || "Button image"}
              />
            )}
            {buttonContent.text}
          </Link>
        </Button>
      ))}
    </div>
  );
}
