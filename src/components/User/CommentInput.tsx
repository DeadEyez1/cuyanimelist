'use client'

import { useState, useTransition } from 'react'
import type { IComment } from '@/lib/types'
import { Textarea } from '../ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { PostComment } from '@/lib/db/UserComments'
import { toast } from '../ui/use-toast'

interface props extends IComment {
  anime_mal_id: number
  anime_title: string
  username: string
  user_email: string
  image: string
  userId: string
}

export default function CommentInput({ anime_mal_id, user_email, username, anime_title, image, userId }: props) {
  const [comment, setComment] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  };
  async function handlePosting(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const data = { anime_mal_id, anime_title, user_email, comment, username, userId }

    startTransition(async () => {
      const response = await PostComment(data)
      if (response?.error) {
        toast({ description: response.error })
        return;
      }

      toast({ description: response.success })
      setComment('')
    })
  }

  return (
    <div className="flex items-start gap-4">
      <Avatar className="w-10 h-10 border">
        <AvatarImage src={image} alt={username} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <Textarea
          placeholder="Write your comment ..."
          className="mb-2 rounded-md"
          value={comment}
          onChange={handleInput}
        />
        <Button onClick={handlePosting} disabled={isPending}>Submit</Button>
      </div>
    </div>
  )
}
