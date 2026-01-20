import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendResponse, sendError } from "@/types/response";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (email !== process.env.ADMIN_EMAIL) {
      return sendError("Unauthorized", 401);
    }

    const admin = await prisma.user.findUnique({ where: { email } });

    if (!admin || admin.role !== "ADMIN") {
      return sendError("Unauthorized", 401);
    }

    if (!admin.password) {
      return sendError("Invalid credentials", 401);
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return sendError("Invalid credentials", 401);
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" },
    );

    return sendResponse({token}, "Login successful", true, 200, [
      {
        name: "admin_token",
        value: token,
        options: {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60 * 24,
        },
      },
    ]);
  } catch (error: any) {
    return sendError(error.message || "Something went wrong", 500);
  }
}
