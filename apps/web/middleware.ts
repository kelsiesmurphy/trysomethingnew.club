import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isProduction = process.env.NODE_ENV === "production";
  const pathname = request.nextUrl.pathname;

  const isComingSoonPage = pathname.startsWith("/coming-soon");
  const isStaticOrApi =
    pathname.startsWith("/_next") || pathname.startsWith("/api");

  // Show "coming soon" page for all non-static, non-api requests in production
  if (isProduction && !isComingSoonPage && !isStaticOrApi) {
    const url = request.nextUrl.clone();
    url.pathname = "/coming-soon";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
