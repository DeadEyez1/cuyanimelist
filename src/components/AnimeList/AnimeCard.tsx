import type { IAnimeImages, IAnimeProps, ICharacter } from '@/lib/types'
import { Card, CardFooter, CardTitle } from '../ui/card'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Clock2, Layers, Tv } from 'lucide-react'
import Image from 'next/image'
import { Separator } from '../ui/separator'

// TODO add link to genre
export function AnimeCard({ api }: { api: IAnimeProps[] }) {
  return (
    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 px-4'>
      {api.map((anime) => {
        return (
          <HoverCard key={anime.mal_id} >
            <HoverCardContent side='right' align='start' className='w-80 bg-background/80 backdrop-blur'>
              <div className='text-sm'>
                <p className='text-2xl font-semibold text-primary'>{anime.title}</p>
                <p className=' py-3'>{anime.synopsis && anime.synopsis.substring(0, 350)} ...</p>
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
            <Card className='group/card hover:scale-105 hover:ease-in-out hover:transition size-auto aspect-[3/4]'>
              <Link href={`/anime/${anime.mal_id}`}>
                <HoverCardTrigger asChild>
                  <div className='overflow-hidden rounded-lg'>
                    <Image
                      src={anime.images.webp.large_image_url}
                      alt={anime.images.jpg.large_image_url}
                      width={250}
                      height={250}
                      className="object-cover object-center aspect-[3/4] group-hover/card:scale-110 ease-in-out duration-300"
                      priority
                    />
                  </div>
                </HoverCardTrigger>
                <CardTitle className='md:text-base text-sm group-hover/card:text-primary group-hover/card:underline px-2 py-1 truncate group-hover/card:text-clip'>
                  {anime.title}
                </CardTitle>
                <CardFooter className='opacity-60 md:text-sm text-[12px] truncate gap-1'>
                  <div className='flex items-center justify-center gap-1.5 text-xs'>
                    <Clock2 className='size-3' />
                    <p>{anime.duration.split("per ep")}</p>
                    {anime.type === "Movie"
                      ? <>
                        <Tv className='size-3'></Tv>
                        <p>{anime.type}</p>
                      </>
                      : <>
                        <Layers className='size-3' />
                        <p>{anime.episodes ? anime.episodes : "??"}</p>
                        <Tv className='size-3'></Tv>
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

export function AnimeCardHorizontal({ api }: { api: IAnimeProps[] }) {
  return (
    <div className='grid gap-4 px-4'>
      {api.map((anime, index) => {
        return (
          <HoverCard key={anime.mal_id} >
            <HoverCardContent side='left' align='start' className='w-80 bg-background/80 backdrop-blur '>
              <div className='text-sm'>
                <p className='text-2xl font-semibold text-primary'>{anime.title}</p>
                <p className=' py-3'>{anime.synopsis && anime.synopsis.substring(0, 350)} ...</p>
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
            <Link href={`/anime/${anime.mal_id}`}>
              <HoverCardTrigger asChild>
                <div className='group/card bg-background flex items-center rounded hover:scale-105 ease-in-out transition-all hover:text-primary gap-2 will-change-transform h-16 w-full '>
                  <div className='ml-2'>
                    <p className='text-center text-3xl font-bold size-9'>{index + 1}</p>
                  </div>
                  <div className='overflow-hidden rounded m-2 aspect-square'>
                    <Image
                      src={anime.images.webp.image_url}
                      alt={anime.images.jpg.image_url}
                      width={50}
                      height={50}
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  <p className='font-bold text-lg mr-2 truncate ...'>{anime.title.substring(0, 27)}</p>
                </div>
              </HoverCardTrigger>
            </Link>
          </HoverCard>
        )
      })}
    </div>
  )
}

export function AnimeCharacter({ api }: { api: ICharacter[] }) {
  return (
    <>
      <Separator />
      <h3 className='text-xl font-bold p-2'>Main Characters:</h3>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 px-4'>
        {api.map((char) => {
          return (
            <div className='bg-background flex rounded-lg items-center' key={char.character.mal_id}>
              <Image
                src={char.character.images.jpg.image_url}
                alt='...'
                width={50}
                height={50}
                className="object-cover aspect-square m-2 rounded object-top"
              />
              <h3 className='font-bold text-center'>{char.character.name}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

interface IAnimeRecommendation {
  mal_id: number
  url: string
  images: IAnimeImages
  title: string
}

export function AnimeRecommendation({ api }: { api: IAnimeRecommendation[] }) {
  return (
    <div>
      {api.map((anime) => {
        return (
          <div key={anime.mal_id} className='group/card bg-background flex items-center rounded hover:scale-105 ease-in-out transition-all hover:text-primary gap-2 will-change-transform h-16 w-full '>
            <div className='overflow-hidden rounded m-2 aspect-square'>
              <Image
                src={anime.images.webp.image_url}
                alt={anime.images.jpg.image_url}
                width={50}
                height={50}
                className="object-cover object-center"
                priority
              />
            </div>
            <p className='font-bold text-lg mr-2 truncate ...'>{anime.title.substring(0, 27)}</p>
          </div>
        )
      })}
    </div>
  )
}