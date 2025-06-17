import "@workspace/ui/globals.css";
import "../styles/fonts.css";
import { Providers } from "@/components/providers";
import Plausible from "@/lib/plausible";
import DevTools from "@workspace/ui/components/dev-tools";
import SkipToContent from "@/components/skip-to-content";
import Header from "@/components/header/header";
import LenisWrapper from "@/components/lenis-wrapper";

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
      <body className="font-publica antialiased px-4 selection:bg-primary selection:text-white min-h-screen bg-[url('/background-grid.svg')] bg-top bg-no-repeat bg-fixed">
        <SkipToContent />
        <main className="flex flex-col items-center">
          <LenisWrapper>
            <Header />
            <Providers>
              <div id="main-content">{children}</div>
            </Providers>
          </LenisWrapper>
        </main>
        {process.env.NODE_ENV === "development" && <DevTools />}
      </body>
    </html>
  );
}
