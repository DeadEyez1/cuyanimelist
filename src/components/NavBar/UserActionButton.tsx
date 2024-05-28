import Link from 'next/link'
import authUserSession from '@/libs/auth'

export default async function UserActionButton() {
  const user = await authUserSession()
  const actionLabel = user ? 'Sign Out' : 'Sign In'
  const actionUrl = user ? '/api/auth/signout' : '/api/auth/signin'

  return (
    <div className="flex justify-between gap-2">
      {user
        ? <Link href="/users/dashboard" className="py-1">DASHBOARD</Link>
        : null}
      <Link href={actionUrl} className="bg-peach text-crust py-1 px-12 inline-block">{actionLabel}</Link>
    </div>
  )
}
