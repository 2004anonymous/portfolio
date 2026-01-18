// lib/scripts/hashAdminPassword.ts
import "dotenv/config"
import bcrypt from "bcryptjs"

async function main() {
  const password = process.env.ADMIN_PASSWORD

  if (!password) {
    throw new Error("ADMIN_PASSWORD is not set in .env")
  }

  const hash = await bcrypt.hash(password, 10)
  console.log(hash)
}

main()
