import "dotenv/config"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD_HASH

  if (!email || !password) {
    throw new Error("ADMIN_EMAIL or ADMIN_PASSWORD_HASH missing in .env")
  }

  // Check if admin already exists
  const existing = await prisma.user.findUnique({
    where: { email },
  })

  if (existing) {
    console.log("✅ Admin already exists")
    return
  }

  await prisma.user.create({
    data: {
      email,
      password,
      role: "ADMIN",
    },
  })

  console.log("✅ Admin user created successfully")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
