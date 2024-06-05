import { getAnimeResponse, getNestedAnimeResponse } from '@/libs/Api'
import Header from '@/components/AnimeList/Header'
import { AnimeCard, AnimeCardHorizontal } from '@/components/AnimeList/AnimeCard'
import { IAnimeProps } from '@/libs/types'

export default async function Home() {
  const topAnime: IAnimeProps[] = await getAnimeResponse('top/anime', 'limit=12')
  const airingAnime: IAnimeProps[] = await getAnimeResponse('top/anime', 'filter=airing&limit=12&type=tv')

  return (
    <section>
      <div className='bg-destructive-foreground xl:flex'>
        <div className=''>
          <Header title="Top Airing Anime" linkTitle="Lihat Semua" linkHref="/populer" />
          <AnimeCard api={airingAnime}></AnimeCard>
        </div>
        <div className=''>
          <Header title="Top Anime" linkHref="/populer" />
          <AnimeCardHorizontal api={topAnime} />
        </div>
      </div>
    </section>
  )
}
