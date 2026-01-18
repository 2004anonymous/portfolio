import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all projects
export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(projects);
}
