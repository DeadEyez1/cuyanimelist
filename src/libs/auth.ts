import { getServerSession } from 'next-auth'
import type { IUser } from './types'
import GitHubProvider from 'next-auth/providers/github'
import { env } from '@/libs/env'
import { NextAuthOptions } from 'next-auth'

export default async function authUserSession() {
  const session = await getServerSession(authOptions)
  return session?.user as IUser
}
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions