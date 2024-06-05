import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string(),
  GITHUB_CLIENT: z.string(),
  GITHUB_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
