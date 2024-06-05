import { AnimeCard } from '@/components/AnimeList/AnimeCard'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse } from '@/libs/Api'

export default async function Search({ params }: { params: { keyword: string } }) {
  const decodeKeyword = decodeURI(params.keyword)
  const searchAnime = await getAnimeResponse('anime', `q=${decodeKeyword}`)

  return (
    <div>
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}`} />
        <AnimeCard api={searchAnime}></AnimeCard>
      </section>
    </div>
  )
}
