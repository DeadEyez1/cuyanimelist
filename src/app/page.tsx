import { getAnimeResponse } from '@/lib/Api'
import Header from '@/components/AnimeList/Header'
import { AnimeCard, AnimeCardHorizontal } from '@/components/AnimeList/AnimeCard'
import { IAnimeProps } from '@/lib/types'
import AnimeCarousel from '@/components/AnimeList/AnimeCarousel'

export default async function Home() {
  const topAnime: IAnimeProps[] = await getAnimeResponse('top/anime', 'limit=12')
  const airingAnime: IAnimeProps[] = await getAnimeResponse('top/anime', 'filter=airing&limit=12&type=tv&sfw')
  const airingNow: IAnimeProps[] = await getAnimeResponse('seasons/now', 'sfw&limit=10')
  const upcomingAnime: IAnimeProps[] = await getAnimeResponse('seasons/upcoming', 'sfw&limit=12&type=tv')

  return (
    <div className='bg-destructive-foreground'>
      <div className='flex justify-center pt-4 px-4'>
        <AnimeCarousel api={airingNow} />
      </div>
      <div className='bg-destructive-foreground xl:flex'>
        <section>
          <div className=''>
            <Header title="Top Airing Anime" linkTitle="View More" linkHref="/populer" />
            <AnimeCard api={airingAnime}></AnimeCard>
          </div>
          <div className=''>
            <Header title="Upcoming Anime" />
            <AnimeCard api={upcomingAnime}></AnimeCard>
          </div>
        </section>
        <section className=''>
          <Header title="Top Anime" />
          <AnimeCardHorizontal api={topAnime} />
        </section>
      </div>
    </div>
  )
}
