export default function DevTools() {
  console.log("Rendering DevTools");
  return (
    <div className="fixed bottom-16 right-5 z-50 flex size-9 items-center justify-center rounded-full bg-foreground p-3 font-mono text-xs text-background">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
