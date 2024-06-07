import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./lib/prisma"
import GitHubProvider from "next-auth/providers/github";
import { Adapter } from "next-auth/adapters";
import { IUser } from "./lib/types";
import { env } from "./lib/env";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT,
      clientSecret: env.GITHUB_SECRET
    })
  ],
})

export async function authUserSession() {
  const session = await auth()
  return session?.user as IUser
}