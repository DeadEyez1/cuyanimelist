import { getAnimeResponse, getNestedAnimeResponse } from '@/libs/Api'
import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'

export default async function Home() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=10')
  const recommendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry')

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime}></AnimeList>
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime}></AnimeList>
      </section>
    </>
  )
}
