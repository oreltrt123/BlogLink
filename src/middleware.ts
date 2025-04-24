import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url
  const hostname = request.headers.get("host") || ""

  // Check if we're on Vercel
  const isVercelProduction = hostname.includes("vercel.app") || !hostname.includes("localhost")

  // For Vercel deployment without custom domains, we'll use path-based routing
  if (isVercelProduction) {
    // If trying to access a blog subdomain that doesn't exist, redirect to path-based
    if (hostname.startsWith("blog.")) {
      // Extract the base domain
      const baseDomain = hostname.replace("blog.", "")
      return NextResponse.redirect(new URL(`/blog${pathname === "/" ? "" : pathname}`, `https://${baseDomain}`))
    }

    // Allow direct access to /blog paths on the main domain
    if (pathname.startsWith("/blog")) {
      return NextResponse.next()
    }
  } else {
    // Local development behavior - same as before
    const isBlogDomain = hostname.startsWith("blog.")

    // If it's the blog subdomain but doesn't start with /blog
    if (isBlogDomain && !pathname.startsWith("/blog")) {
      url.pathname = `/blog${pathname === "/" ? "" : pathname}`
      return NextResponse.rewrite(url)
    }

    // If it's the main domain but starts with /blog
    if (!isBlogDomain && pathname.startsWith("/blog")) {
      // For development environment, allow /blog path on main domain
      return NextResponse.next()
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except for assets, api routes, and _next
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
}
