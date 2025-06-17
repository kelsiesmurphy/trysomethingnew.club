export default function CMSError() {
  return (
    <div className="flex-1 flex justify-center py-24">
      <div className="space-y-6 text-center">
        <h1 className="font-bold text-2xl">Error loading content</h1>
        <p className="text-muted-foreground">
          There was an error whilst loading the content across the site. Please
          try again later.
        </p>
      </div>
    </div>
  );
}
