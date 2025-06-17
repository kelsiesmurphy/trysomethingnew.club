import Link from "next/link";
import NavigationItems from "./navigation-items";
import { MobileNavigation } from "./mobile-navigation";
import WordMark from "@workspace/ui/components/branding/wordmark";

export default function Header() {
  return (
    <header className="gap-4 flex container justify-between items-center py-6">
      <Link href="/" className="outline-brand">
        <WordMark height={64} />
      </Link>
      <nav className="hidden md:flex gap-2">
        <NavigationItems />
      </nav>
      <MobileNavigation />
    </header>
  );
}
