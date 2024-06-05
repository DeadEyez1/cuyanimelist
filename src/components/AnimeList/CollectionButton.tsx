'use client'

import { useState } from 'react'
import type { IDatabase } from '@/libs/types'
import { Button } from '../ui/button'
import { Bookmark, BookmarkMinus } from 'lucide-react'

export default function CollectionButton({ anime_mal_id, user_email, anime_image, anime_title }: IDatabase) {
  const [isCreated, setIsCreated] = useState(false)

  async function handleCollection(event: any) {
    event.preventDefault()
    const data = { anime_mal_id, user_email, anime_image, anime_title }
    const response = await fetch('/api/v1/collections', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    const collection = await response.json()
    if (collection.isCreated)
      setIsCreated(true)
  }

  async function deleteCollection(event: any) {
    event.preventDefault()
    const data = { anime_mal_id, user_email, anime_image, anime_title }
    const response = await fetch('/api/v1/collections', {
      method: 'DELETE',
      body: JSON.stringify(data),
    })
    const collection = await response.json()
    if (collection.isDeleted)
      setIsCreated(false)
  }

  return (
    <>
      {isCreated
        ? <Button variant="destructive" onClick={deleteCollection}>
          <BookmarkMinus strokeWidth={2} className='mr-2 h-4 w-4' /> Remove from Collection
        </Button>
        // : <button type="button" onClick={handleCollection} className="px-2 py-1 bg-peach text-crust font-bold">Add to Collection</button>}
        : <Button variant="default" onClick={handleCollection}>
          <Bookmark strokeWidth={2} className='mr-2 h-4 w-4' /> Add to Collection
        </Button>
      }
    </>
  )
}
