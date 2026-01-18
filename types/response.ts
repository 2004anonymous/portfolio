import { NextResponse } from "next/server";
import { ApiResponse } from "@/types/common";

export function sendResponse<T = any>(
  data?: T,
  message?: string,
  success: boolean = true,
  status: number = 200
) {
  const body: ApiResponse<T> = { success, data, message };
  return NextResponse.json(body, { status });
}

export function sendError(message: string, status: number = 400) {
  return NextResponse.json<ApiResponse<null>>({ success: false, message }, { status });
}
