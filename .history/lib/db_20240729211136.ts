import { Prisma, PrismaClient } from "@prisma/client";

declare global {
  var prisma: Prisma | P;
}