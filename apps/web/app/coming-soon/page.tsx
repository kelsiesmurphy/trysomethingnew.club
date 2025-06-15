import WordMark from "@workspace/ui/components/branding/wordmark";

// apps/web/app/coming-soon/page.tsx
export default function ComingSoon() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-center text-black">
      <div className="flex flex-col gap-4 px-4 justify-center pb-24">
        <WordMark height={100} />
        <p>We’re working hard to bring you something amazing. Stay tuned!</p>
      </div>
    </main>
  );
}
export const metadata = {
  title: "Coming Soon",
  description: "We're working hard to bring something amazing. Stay tuned!",
};
