import NextAuth from 'next-auth/next'
import githubAuth from 'next-auth/providers/github'
import { env } from '@/libs/env'

export const authOptions = {
  providers: [
    githubAuth({
      clientId: env.GITHUB_CLIENT,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
}

export const handlers = NextAuth(authOptions)

export { handlers as GET, handlers as POST }
