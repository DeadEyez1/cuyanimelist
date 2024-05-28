import { PawPrint } from 'lucide-react'
import Link from 'next/link'
import authUserSession from '@/libs/auth'
import prisma from '@/libs/prisma'
import HeaderDashboard from '@/components/Dashboard/Header'

export default async function userComment() {
  const user = await authUserSession()

  const getComments = await prisma.comment.findMany({ where: { user_email: user?.email } })

  return (
    <div className="grid grid-rows-1 gap-4">
      <HeaderDashboard title="Comments" />
      { getComments.length < 1
      && (
        <div className="min-h-screen max-w-xl mx-auto grid justify-center items-center">
          <div className="justify-center text-center items-center">
            <PawPrint size={64} className="w-full my-3" />
            <h3 className="font-bold text-2xl">Nothing here</h3>
          </div>
        </div>
      ) }
      {getComments.map((comment) => {
        return (
          <div key={comment.id} className="bg-peach text-crust px-4 py-2 mx-4">
            <Link href={`/anime/${comment.anime_mal_id}`} className="font-bold">{comment.anime_title}</Link>
            <p className="italic">{comment.comment}</p>
          </div>
        )
      })}
    </div>
  )
}
