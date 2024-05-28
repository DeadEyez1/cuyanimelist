'use client'

import { useState } from 'react'

interface Database {
  anime_mal_id: string
  user_email: string
  anime_image: string
  anime_title: string
}

export default function CollectionButton({ anime_mal_id, user_email, anime_image, anime_title }: Database) {
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

  return (
    <>
      {isCreated
        ? <p>Berhasil ditambah kekoleksi</p>
        : <button type="button" onClick={handleCollection} className="px-2 py-1 bg-peach text-crust font-bold">Add to Collection</button>}
    </>
  )
}
