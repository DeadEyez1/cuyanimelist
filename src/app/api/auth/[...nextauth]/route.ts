import NextAuth, { getServerSession } from 'next-auth/next'
import { authOptions } from '@/libs/auth'


export const handlers = NextAuth(authOptions)

export { handlers as GET, handlers as POST }