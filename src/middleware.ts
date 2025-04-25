import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const hostname = request.headers.get("host") || "";

  const isLocalhost = hostname === "localhost" || hostname.startsWith("localhost:");
  const isVercel = hostname.includes("vercel.app");

  if (isVercel) {
    if (hostname.startsWith("blog.")) {
      const baseDomain = hostname.replace("blog.", "");
      return NextResponse.redirect(
        new URL(`/blog${pathname.replace(/^\/$/, "")}`, `https://${baseDomain}`)
      );
    }

    if (pathname.startsWith("/blog")) {
      return NextResponse.next();
    }
  } else if (isLocalhost) {
    const isBlogDomain = hostname.startsWith("blog.");

    if (isBlogDomain && !pathname.startsWith("/blog")) {
      url.pathname = `/blog${pathname.replace(/^\/$/, "")}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
