import "@workspace/ui/globals.css";
import "../../styles/fonts.css";
import Plausible from "@/lib/plausible";

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
        {children}
      </body>
    </html>
  );
}
