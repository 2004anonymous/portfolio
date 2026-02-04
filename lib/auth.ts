import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

export function verifyAdmin(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value
  if (!token) return null

  try {
    return jwt.verify(token, process.env.JWT_SECRET!)
  } catch {
    return null
  }
}
