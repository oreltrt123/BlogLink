import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname, search } = url
  const hostname = request.headers.get("host") || ""

  // Check if the request is for the blog subdomain
  const isBlogDomain = hostname.startsWith("blog.")

  // If it's the blog subdomain but doesn't start with /blog
  if (isBlogDomain && !pathname.startsWith("/blog")) {
    // Rewrite to the /blog path
    url.pathname = `/blog${pathname === "/" ? "" : pathname}`
    return NextResponse.rewrite(url)
  }

  // If it's the main domain but starts with /blog
  if (!isBlogDomain && pathname.startsWith("/blog")) {
    // For development environment, allow /blog path on main domain
    if (process.env.NODE_ENV === "development") {
      return NextResponse.next()
    }

    // In production, redirect to the blog subdomain
    const blogUrl = new URL(pathname + search, `https://blog.${hostname}`)
    return NextResponse.redirect(blogUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except for assets, api routes, and _next
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
}
