import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

  const token = req.cookies.get("admin_token")

  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    console.log("No token found, redirecting to /")
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next();
}

// Config to specify which routes middleware applies to
export const config = {
  matcher: ["/api/admin/:path*", "/admin/:path*"],
};
