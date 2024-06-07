import { z } from 'zod'
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    GITHUB_CLIENT: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    POSTGRES_PRISMA_URL: z.string().url()
  },
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string()
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    GITHUB_CLIENT: process.env.GITHUB_CLIENT,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL
  }
})
