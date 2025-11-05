import { NextRequest, NextResponse } from "next/server";

export async function POST(params:NextRequest) {
    return NextResponse.json({message: "Admin login route"})
}