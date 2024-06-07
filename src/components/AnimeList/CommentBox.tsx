import prisma from '@/lib/prisma'
import { IComment } from '@/lib/types'

export default async function CommentBox({ anime_mal_id }: { anime_mal_id: number }) {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } }).then((res: unknown) => res as IComment[])
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((comments: IComment) => {
        return (
          <div key={comments.id} className="bg-background text-crust p-3">
            <p className="font-bold">{comments.username}</p>
            <p>{comments.comment}</p>
          </div>
        )
      })}
    </div>
  )
}
