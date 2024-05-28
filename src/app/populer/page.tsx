'use client'
import { useEffect, useState } from 'react'
import { getAnimeResponse } from '@/libs/Api'
import HeaderMenu from '@/components/Utils/HeaderMenu'
import Pagination from '@/components/Utils/Pagination'
import AnimeList from '@/components/AnimeList'

export default function Populer() {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState<any>([])
  async function fetchData() {
    const populerAnime = await getAnimeResponse('top/anime', `page=${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`ANIME POPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  )
}
