import prisma from '@/libs/prisma'

export default async function CommentBox({ anime_mal_id }: { anime_mal_id: string }) {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } })
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((comments) => {
        return (
          <div key={comments.id} className="bg-flamingo text-crust p-3">
            <p className="font-bold">{comments.username}</p>
            <p>{comments.comment}</p>
          </div>
        )
      })}
    </div>
  )
}
