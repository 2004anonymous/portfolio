// Import the generated Prisma client directly from the local output folder.
// The project uses a custom generator output (lib/generated/prisma), so
// importing from "@prisma/client" fails at build time when the package
// expects the generated client in node_modules. Importing directly
// ensures the generated client is used.
import { PrismaClient } from "./generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
