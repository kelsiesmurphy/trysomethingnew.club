import { Button } from "@workspace/ui/components/button";

export default function SkipToContent() {
  return (
    <Button asChild className="absolute top-6 left-4">
      <a href="#main-content" className="sr-only focus-visible:not-sr-only">
        Skip to Content
      </a>
    </Button>
  );
}
