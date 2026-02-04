import { prisma } from "@/lib/prisma"
import { sendResponse } from "@/types/response"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get("page") ?? 1)
  const limit = Number(searchParams.get("limit") ?? 6)

  const skip = (page - 1) * limit

  const [projects, total] = await Promise.all([
    prisma.project.findMany({
      where: { published: false },
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        description: true,
        link: true,
        githubLink: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    }),
    prisma.project.count({ where: { published: false } }),
  ])
  const resData = {
      projects,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    }

  return sendResponse(resData, "Projects fetched successfully", true, 200)
}
