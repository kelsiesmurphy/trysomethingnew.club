// apps/web/app/coming-soon/page.tsx
export default function ComingSoon() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-center text-black">
      <div>
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p>We’re working hard to bring something amazing. Stay tuned!</p>
      </div>
    </main>
  );
}
export const metadata = {
  title: "Coming Soon",
  description: "We're working hard to bring something amazing. Stay tuned!",
};
