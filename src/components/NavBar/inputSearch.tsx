'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export default function InputSearch() {
  const router = useRouter()
  const searchRef = useRef<HTMLInputElement>(null)

  function handleSearch(event: any) {
    const keyword = searchRef.current?.value

    if (!keyword || keyword.trim() === '')
      return
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault()
      return router.push(`/search/${keyword}`)
    }
  }

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime..."
        className="p-2 w-full rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />

      <button type="submit" className="absolute top-2 end-2" onClick={handleSearch}>
        <Search size={24} color="blue" />
      </button>
    </div>
  )
}
