import Image from 'next/image'
import Link from 'next/link'
import authUserSession from '@/libs/auth'

export default async function userDashboard() {
  const user = await authUserSession()
  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold">
        Welcome,
        {user?.name}
      </h3>
      <Image src={user?.image} alt="..." width={250} height={250} />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-peach text-crust font-bold py-3 px-4 text-xl"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-peach text-crust font-bold py-3 px-4 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  )
}
