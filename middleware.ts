import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.headers.get("authorization");

  if (token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

// Config to specify which routes middleware applies to
export const config = {
  matcher: ["/api/admin/:path*", "/admin/:path*"],
};
