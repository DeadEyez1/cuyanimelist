import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function authUserSession() {
  const session = await getServerSession(authOptions)
  return session?.user
}