import prisma from '@/lib/prisma'
import { IComment } from '@/lib/types'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { PawPrint } from 'lucide-react'
dayjs.extend(relativeTime)

export default async function CommentBox({ anime_mal_id }: { anime_mal_id: number }) {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
    include: { User: true }
  }).then((res: unknown) => res as IComment[])
  return (
    <div className="container flex flex-col gap-2">
      {comments.length >= 1 ? comments.map((comments: IComment) => {
        return (
          <Card key={comments.id}>
            <CardHeader className='flex flex-row gap-4 p-3 items-center space-y-0'>
              <Avatar className='ring-2 w-10 h-10'>
                <AvatarImage src={comments?.User?.image} alt={comments.username} />
                <AvatarFallback>{comments.username?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className='text-lg text-primary'>{comments.username}</CardTitle>
                <CardDescription className='opacity-75'>{dayjs(comments.createdAt).fromNow()}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className='py-2 px-4'>
              <p>{comments.comment}</p>
            </CardContent>
          </Card>
        )
      })
        :
        <div className='container flex flex-col gap-4 w-full items-center'>
          <PawPrint size={40} className='opacity-80' />
          <h3>Wow, such empty!</h3>
        </div>
      }
    </div>
  )
}
