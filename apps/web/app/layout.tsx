import "@workspace/ui/globals.css";
import "../styles/fonts.css";
import { Providers } from "@/components/providers";
import Plausible from "@/lib/plausible";
import DevTools from "@workspace/ui/components/dev-tools";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Plausible />
      </head>
      <body className="font-publica antialiased selection:bg-primary selection:text-white min-h-screen bg-[url('/background-grid.svg')] bg-top bg-no-repeat bg-fixed">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === "development" && <DevTools />}
      </body>
    </html>
  );
}
