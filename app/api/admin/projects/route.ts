import { verifyAdmin } from "@/lib/auth";
import { sendResponse } from "@/types/response";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const admin = verifyAdmin(req);
  if (!admin) {
    return sendResponse(null, "Unauthorized", false, 401);
  }
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);

  const skip = (page - 1) * limit;

  const [projects, total] = await Promise.all([
    prisma.project.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.project.count(),
  ]);
  
  const resData = {
    projects,
    pagination: {
      page,
      limit,
      total,
    totalPages: Math.ceil(total / limit)}
  }
  return sendResponse(resData, "Projects fetched successfully", true, 200);
}

export async function POST(req: NextRequest) {
  const admin = verifyAdmin(req)
  if (!admin) return sendResponse(null, "Unauthorized", false, 401)

  const body = await req.json()

  const project = await prisma.project.create({
    data: {
      name: body.name,
      type: body.type,
      description: body.description,
      poster: body.poster,
      link: body.link,
      githubLink: body.githubLink,
      tag: body.tag,
      published: body.published ?? false,
    },
  })

  return sendResponse(project, "Project created", true, 201)
}