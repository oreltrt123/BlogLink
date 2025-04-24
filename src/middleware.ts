import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // For Vercel deployments, we'll just use path-based routing
  // No need to redirect or rewrite for blog paths
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except for assets, api routes, and _next
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
}
