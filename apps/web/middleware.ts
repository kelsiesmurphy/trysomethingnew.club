import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isProduction = process.env.NODE_ENV === "production";
  const showComingSoon = process.env.NEXT_PUBLIC_SHOW_COMING_SOON === "true";

  const pathname = request.nextUrl.pathname;
  const isComingSoonPage = pathname.startsWith("/coming-soon");
  const isStaticOrApi =
    pathname.startsWith("/_next") || pathname.startsWith("/api");

  if (isProduction && showComingSoon && !isComingSoonPage && !isStaticOrApi) {
    const url = request.nextUrl.clone();
    url.pathname = "/coming-soon";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
