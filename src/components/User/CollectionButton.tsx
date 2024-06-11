'use client'

import { useTransition } from 'react'
import type { ICollection } from '@/lib/types'
import { Button } from '../ui/button'
import { Bookmark, BookmarkMinus } from 'lucide-react'
import { UserCollectionHandler } from '@/lib/db/UserCheck'

interface props extends ICollection {
  exist: boolean
}

export default function CollectionButton({ anime_mal_id, user_email, anime_image, anime_title, exist }: props) {
  const [isPending, startTransition] = useTransition()

  function buttonHandler() {
    const data = { anime_mal_id, user_email, anime_image, anime_title }

    startTransition(() => {
      UserCollectionHandler(data)
    })
  }

  return (
    <>
      {exist
        ? <Button variant="destructive" onClick={buttonHandler} disabled={isPending} className='w-full'>
          <BookmarkMinus strokeWidth={2} className='mr-2 h-4 w-4' /> Remove from Collection
        </Button>
        : <Button variant="default" onClick={buttonHandler} disabled={isPending} className='w-full'>
          <Bookmark strokeWidth={2} className='mr-2 h-4 w-4' /> Add to Collection
        </Button>
      }
    </>
  )
}
