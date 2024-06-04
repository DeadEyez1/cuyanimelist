import { getAnimeResponse, getNestedAnimeResponse } from '@/libs/Api'
import Header from '@/components/AnimeList/Header'
import AnimeCard from '@/components/AnimeList/AnimeCard'
import { IAnimeProps } from '@/libs/types'

export default async function Home() {
  const topAnime: IAnimeProps[] = await getAnimeResponse('top/anime', 'limit=12')
  const airingAnime: IAnimeProps[] = await getAnimeResponse('top/anime', 'filter=airing&limit=12')

  return (
    <section>
      <div className='bg-destructive-foreground'>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeCard api={airingAnime}></AnimeCard>
      </div>
    </section>
  )
}
