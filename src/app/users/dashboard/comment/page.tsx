import { PawPrint, SquareArrowOutUpRight, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { authUserSession } from '@/auth'
import prisma from '@/lib/prisma'
import HeaderDashboard from '@/components/Dashboard/Header'
import { IComment } from '@/lib/types'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { Button } from '@/components/ui/button'
dayjs.extend(relativeTime)

export default async function userComment() {
  const user = await authUserSession()

  const getComments = await prisma.comment.findMany({ where: { user_email: user?.email } }).then((res: unknown) => res as IComment[])

  return (
    <div className="bg-destructive-foreground">
      <HeaderDashboard title="My Comments" />
      <div className='flex flex-col py-4'>
        {getComments.length < 1
          && (
            <div className="min-h-screen max-w-xl mx-auto grid justify-center items-center">
              <div className="justify-center text-center items-center">
                <PawPrint size={64} className="w-full my-3" />
                <h3 className="font-bold text-2xl">Nothing here</h3>
              </div>
            </div>
          )}
        {getComments.map((comment: IComment) => {
          return (
            <div key={comment.id} className="bg-peach text-crust px-4 py-2 mx-4">
              <Card>
                <CardHeader className='py-4'>
                  <Link href={`/anime/${comment.anime_mal_id}`}>
                    <CardTitle className='text-primary'>{comment.anime_title}</CardTitle>
                  </Link>
                  <CardDescription>{dayjs(comment.createdAt).fromNow()}</CardDescription>

                </CardHeader>
                <CardContent className='pb-2'>
                  <blockquote className='border-l-2 pl-6 italic'>{comment.comment}</blockquote>
                </CardContent>
                <CardFooter className='justify-end'>
                  <Button variant="destructive" size="tiny" className='group/button gap-2 transition-colors'>
                    <Trash2 className='size-4' />
                    <p>Delete comment</p>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}
