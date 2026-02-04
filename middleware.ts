import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

  const token = req.cookies.get("admin_token")
  const { pathname } = req.nextUrl

   // Allow login route
  if (pathname === "/secure_auth") {
    return NextResponse.next()
  }

  // Protect admin pages & APIs
  if (!token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

// Config to specify which routes middleware applies to
export const config = {
  matcher: ["/api/admin/:path*", "/admin/:path*"],
};
