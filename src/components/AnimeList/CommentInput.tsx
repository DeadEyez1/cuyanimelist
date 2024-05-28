'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Comment {
  anime_mal_id: string
  user_email: string
  username: string
  anime_title: string
}

export default function CommentInput({ anime_mal_id, user_email, username, anime_title }: Comment) {
  const [comment, setComment] = useState('')
  const [isCreated, setIsCreated] = useState(false)

  const router = useRouter()

  function handleInput(event: any) {
    setComment(event.target.value)
  }

  async function handlePosting(event: any) {
    event.preventDefault()
    const data = { anime_mal_id, user_email, comment, username, anime_title }
    if (comment.length >= 3) {
      const response = await fetch('/api/v1/comments', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      const postComment = await response.json()
      if (postComment.isCreated) {
        setIsCreated(true)
        setComment('')
        router.refresh()
      }
    }
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {isCreated && <p>Komentar terkirim...</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        placeholder="Tulis komentar..."
        className="h-12 text-crust"
      />
      <button type="button" disabled={comment.length < 3} onClick={handlePosting} className="w-52 py-2 px-3 bg-peach text-crust disabled:opacity-50">Post Komentar</button>
    </div>
  )
}
