import { getServerSession } from 'next-auth'
import type { IUser } from './types'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function authUserSession() {
  const session = await getServerSession(authOptions)
  return session?.user as IUser
}
