import type { IAnimeProps } from '@/libs/types'
import { Card, CardFooter, CardImage, CardTitle } from '../ui/card'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Car, Clock2, Layers, Tv } from 'lucide-react'
import Image from 'next/image'

// TODO add link to genre
export default function AnimeCard({ api }: { api: IAnimeProps[] }) {
  return (
    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 px-4'>
      {api.map((anime) => {
        return (
          <HoverCard>
            <HoverCardContent side='right' align='start' className='w-80 bg-background/80 backdrop-blur'>
              <div className='text-sm'>
                <p className='text-2xl font-semibold text-primary'>{anime.title}</p>
                <p className=' py-3'>{anime.synopsis.substring(0, 350)} ...</p>
                <p>Genre: {anime.genres.length > 1 ? anime.genres
                  .map<React.ReactNode>(genre => <span className='opacity-70 hover:opacity-100' key={genre.mal_id}>{genre.name}</span>)
                  .reduce((prev, curr) => [prev, ', ', curr])
                  : <span>??</span>}
                </p>

                <p>Tahun: {anime.aired.string}</p>
                <p>Rating: {anime.rating}</p>
                <p>Status: {anime.status}</p>
              </div>
            </HoverCardContent>
            <Card className='group/card hover:scale-105 hover:ease-in-out hover:transition-transform'>
              <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
                <HoverCardTrigger asChild>
                  <Image
                    src={anime.images.webp.image_url}
                    alt="..."
                    width={250}
                    height={250}
                    className="object-cover object-center rounded-lg aspect-[3/4]"
                    priority
                  />
                </HoverCardTrigger>
                <CardTitle className='md:text-xl text-md group-hover/card:text-primary group-hover/card:underline px-2 py-1 truncate ...'>
                  {anime.title}
                </CardTitle>
                <CardFooter className='opacity-60 md:text-sm text-[12px] truncate gap-1'>
                  <div className='flex items-center justify-center gap-1.5'>
                    <Clock2 className='size-4 mb-0.5' />
                    <p>{anime.duration.split("per ep")}</p>
                    {anime.type === "Movie"
                      ? <>
                        <Tv className='size-4 mb-0.5'></Tv>
                        <p>{anime.type}</p>
                      </>
                      : <>
                        <Layers className='size-4 mb-0.5' />
                        <p>{anime.episodes ? anime.episodes : "??"}</p>
                        <Tv className='size-4 mb-1'></Tv>
                        <p>{anime.type}</p>
                      </>
                    }
                  </div>
                </CardFooter>
              </Link>
            </Card>
          </HoverCard>
        )
      }
      )}
    </div>
  )
}


/* 
<div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 px-4'>
      {api.map(anime => {
        return (
          <HoverCard>
            <Card className='group/card hover:scale-105 hover:ease-in-out hover:transition-transform'>
              <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
                <HoverCardTrigger>
                  <CardImage
                    src={anime.images.webp.large_image_url}
                    alt={anime.images.jpg.large_image_url}
                    className='object-cover object-center rounded-lg aspect-[3/4]'
                  />
                </HoverCardTrigger>
                <CardTitle className='md:text-xl text-md group-hover/card:text-primary group-hover/card:underline px-2 py-1 truncate ...'>
                  {anime.title}
                </CardTitle>
                <CardFooter className='opacity-60 md:text-sm text-[12px] truncate gap-1'>
                  <div className='flex items-center justify-center gap-1.5'>
                    <Clock2 className='size-4 mb-0.5' />
                    <p>{anime.duration.split("per ep")}</p>
                    {anime.type === "Movie"
                      ? <>
                        <Tv className='size-4 mb-0.5'></Tv>
                        <p>{anime.type}</p>
                      </>
                      : <>
                        <Layers className='size-4 mb-0.5' />
                        <p>{anime.episodes ? anime.episodes : "??"}</p>
                        <Tv className='size-4 mb-1'></Tv>
                        <p>{anime.type}</p>
                      </>
                    }
                  </div>
                </CardFooter>
              </Link>
              <HoverCardContent side='right' align='start' className='w-80 backdrop-blur'>
                <div className='text-sm'>
                  <p className='text-2xl font-semibold text-primary'>{anime.title}</p>
                  <p className=' py-3'>{anime.synopsis.substring(0, 350)} ...</p>
                  <p>Genre: {anime.genres
                    .map<React.ReactNode>(genre => { return genre ? <span className='opacity-70 hover:opacity-100' key={genre.mal_id}>{genre.name}</span> : null })
                    // .reduce((prev, curr) => [prev, ', ', curr])
                  }</p>
                  <p>Tahun: {anime.aired.string}</p>
                  <p>Rating: {anime.rating}</p>
                  <p>Status: {anime.status}</p>
                </div>
              </HoverCardContent>
            </Card>
          </HoverCard>
        )
      })}
    </div >
*/
