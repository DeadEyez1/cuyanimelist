'use client'
import { useEffect, useState } from 'react'
import { getAnimeResponse } from '@/libs/Api'
import HeaderMenu from '@/components/Utils/HeaderMenu'
import Pagination from '@/components/Utils/Pagination'
import { AnimeCard } from '@/components/AnimeList/AnimeCard'

export default function Populer() {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState<any>([])
  async function fetchData() {
    const populerAnime = await getAnimeResponse('top/anime', `page=${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      <HeaderMenu title={`ANIME POPULER #${page}`} />
      <AnimeCard api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  )
}
