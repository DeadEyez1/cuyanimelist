import Image from 'next/image'
import Link from 'next/link'
import HeaderDashboard from '@/components/Dashboard/Header'
import authUserSession from '@/libs/auth'
import prisma from '@/libs/prisma'
import { IDatabase } from '@/libs/types'

export default async function userCollection() {
  const user = await authUserSession()
  const collection = await prisma.collection.findMany({ where: { user_email: user?.email } }).then((res: unknown) => res as IDatabase[])
  return (
    <section className="mt-4 w-full px-4">
      <HeaderDashboard title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map(async (collect: IDatabase) => {
          return (
            <Link key={collect.anime_mal_id} href={`/anime/${collect.anime_mal_id}`} className="relative border-2 border-peach">
              <Image src={collect.anime_image!} alt="..." width={350} height={350} className="w-full" />
              <div key={collect.anime_mal_id} className="absolute flex items-center justify-center bottom-0 w-full text-xl text-center bg-peach text-crust">
                <h3>{collect.anime_title}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
