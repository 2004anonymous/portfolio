import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all projects
export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(projects);
}

// POST new project
export async function POST(req: Request) {
  const body = await req.json();
  const project = await prisma.project.create({
    data: {
      title: body.title,
      description: body.description,
      link: body.link,
    },
  });
  return NextResponse.json(project);
}
