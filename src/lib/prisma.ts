import { PrismaClient } from "@prisma/client";
import { Pool } from '@neondatabase/serverless'
import { PrismaNeon } from "@prisma/adapter-neon";
import { env } from "./env";

const prismaClientSingleton = () => {
  const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL }) // TODO Validate later
  const adapter = new PrismaNeon(neon)
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;