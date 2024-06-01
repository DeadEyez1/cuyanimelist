'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

// TODO make search autocomplete something like that
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
      <Input
        placeholder="Cari Anime..."
        className="w-full rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      >
      </Input>
      <Button variant="ghost" size="icon" className="absolute end-0 top-0" onClick={handleSearch}>
        <Search />
      </Button>

    </div>
  )
}
