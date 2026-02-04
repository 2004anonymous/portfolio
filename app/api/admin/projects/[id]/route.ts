import { prisma } from "@/lib/prisma"
import { verifyAdmin } from "@/lib/auth"
import { sendResponse } from "@/types/response"
import { NextRequest } from "next/server"

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const {id} = await context.params
  const admin = verifyAdmin(req)
  if (!admin) return sendResponse(null, "Unauthorized", false, 401)

  const project = await prisma.project.findUnique({
    where: { id: Number(id) },
  })

  if (!project) {
    return sendResponse(null, "Project not found", false, 404)
  }

  return sendResponse(project)
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const {id} = await context.params
  const admin = verifyAdmin(req)
  if (!admin) return sendResponse(null, "Unauthorized", false, 401)

  const body = await req.json()

  const project = await prisma.project.update({
    where: { id: Number(id) },
    data: {
      name: body.name,
      type: body.type,
      description: body.description,
      poster: body.poster,
      link: body.link,
      githubLink: body.githubLink,
      tag: body.tag,
      published: body.published,
    },
  })

  return sendResponse(project, "Project updated")
}

export async function DELETE(
  req :  NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const {id} = await context.params
  const admin = verifyAdmin(req)
  if (!admin) return sendResponse(null, "Unauthorized", false, 401)

  await prisma.project.delete({
    where: { id: Number(id) },
  })

  return sendResponse(null, "Project deleted")
}
