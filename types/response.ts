import { NextResponse } from "next/server";
import { ApiResponse } from "@/types/common";

export function sendResponse<T = any>(
  data?: T,
  message?: string,
  success: boolean = true,
  status: number = 200,
  cookies?: {
    name: string;
    value: string;
    options?: Parameters<NextResponse["cookies"]["set"]>[2];
  }[],
) {
  const body: ApiResponse<T> = { success, data, message };
  const response = NextResponse.json(body, { status });
  
  if (cookies) {
    cookies.forEach((cookie) => {
      response.cookies.set(cookie.name, cookie.value, cookie.options);
    });
  }

  return response;
}

export function sendError(message: string, status: number = 400) {
  return NextResponse.json<ApiResponse<null>>(
    { success: false, message },
    { status },
  );
}
