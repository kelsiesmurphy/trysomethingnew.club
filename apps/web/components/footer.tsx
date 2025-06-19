import { Button } from "@workspace/ui/components/button";
import InstagramIcon from "./icons/instagram";
import BlueskyIcon from "./icons/bluesky";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <section className="container max-w-5xl">
      <hr />
      <div className="py-8 text-sm text-muted-foreground flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p>© {new Date().getFullYear()} trysomethingnew.club</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="mailto:trysomethingnew-support@proton.me"
              aria-label="Email us at trysomethingnew-support@proton.me"
            >
              <Mail />
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <Link
              href="https://www.instagram.com/trysomethingnew.club/"
              target="_blank"
              aria-label="Follow Try Something New Club on Instagram"
            >
              <InstagramIcon />
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <Link
              href="https://bsky.app/profile/trysomethingnew.club"
              target="_blank"
              aria-label="Follow Try Something New Club on Bluesky"
            >
              <BlueskyIcon />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
