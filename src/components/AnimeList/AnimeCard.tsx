import type { IAnimeImages, IAnimeProps, ICharacter, IEpisodes } from '@/lib/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Clock2, Layers, Star, Tv } from 'lucide-react'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button, buttonVariants } from '../ui/button'

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
                <p>Rating: {anime.rating ? anime.rating : "?"}</p>
                <p>Status: {anime.status}</p>
              </div>
            </HoverCardContent>
            <Card className='group/card hover:scale-105 transition-all duration-300'>
              <Link href={`/anime/${anime.mal_id}`}>
                <HoverCardTrigger asChild>
                  <div className='flex overflow-hidden justify-center rounded-lg'>
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
                <section className='flex px-3 pt-1 justify-between opacity-60 md:text-sm text-[12px] truncate gap-1'>
                  <div className='flex items-center gap-1.5 text-xs'>
                    <Star className='size-3' />
                    <p>{anime.score ? anime.score : "?"}</p>
                  </div>
                  <div className='text-xs font-bold'>
                    <p>{anime.rating ? anime.rating.split(" ")[0] : "?"}</p>
                  </div>
                </section>
                <CardTitle className='md:text-base text-sm group-hover/card:text-primary group-hover/card:underline px-2 pb-1 line-clamp-2'>
                  {anime.title}
                </CardTitle>
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
                  <div className='overflow-hidden rounded m-2'>
                    <Image
                      src={anime.images.webp.image_url}
                      alt={"..."}
                      width={50}
                      height={50}
                      className="object-cover object-center aspect-square"
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
    <div className='flex gap-4 flex-col'>
      <section>
        <h3 className='text-xl font-bold'>Main Character</h3>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 px-4'>
          {api.filter((role) => role.role === "Main").map((char) => {
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
      </section>
      <section>
        <h3 className='text-xl font-bold'>Other Character</h3>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 px-4'>
          {api.filter((role) => role.role !== "Main").map((char) => {
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
      </section>
    </div>
  )
}

interface IAnimeRecommendation {
  entry: {
    mal_id: number
    url: string
    images: IAnimeImages
    title: string
  }
}

export function AnimeRecommendation({ api }: { api: IAnimeRecommendation[] }) {
  return (
    <div>
      <Separator />
      <h3 className='text-xl font-bold p-2'>Recommendation:</h3>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 px-4'>
        {api.slice(0, 10).map((anime) => {
          return (
            <div className='bg-background flex rounded-lg items-center' key={anime.entry.mal_id}>
              <Image
                src={anime.entry.images.jpg.image_url}
                alt='...'
                width={50}
                height={50}
                className="object-cover aspect-square m-2 rounded object-top"
              />
              <h3 className='font-bold text-center'>{anime.entry.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function AnimeDetailCard({ anime, character }: { anime: IAnimeProps, character: ICharacter[] }) {
  return (
    <Card className='lg:w-80'>
      <CardHeader className='p-4'>
        <CardTitle>Anime Details</CardTitle>
      </CardHeader>
      <CardContent className='px-4 space-y-2'>
        <div>
          <ul className='flex-wrap [&>li]:flex [&>li]:space-x-2 [&>li>strong]:min-w-16 [&>li>p]:text-balance text-sm'>
            <li><strong>English</strong><p>{anime.title_english}</p></li>
            <li><strong>Japanese</strong><p>{anime.title_japanese}</p></li>
            <li><strong>Type</strong><p>{anime.type}</p></li>
            <li><strong>Rating</strong><p>{anime.rating}</p></li>
            <li><strong>Score</strong><p>{anime.score}</p></li>
            <li><strong>Aired</strong><p>{anime.aired.string}</p></li>
            <li><strong>Status</strong><p>{anime.status}</p></li>
            {anime.type != "Movie" &&
              <li><strong>Episodes</strong><p>{!anime.episodes ? "???" : anime.episodes}</p></li>
            }
            <li><strong>Duration</strong><p>{anime.duration}</p></li>
            <li><strong>Genres</strong>
              <p>{anime.genres.length > 1 ? anime.genres
                .map<React.ReactNode>(genre => <span key={genre.mal_id} className='opacity-70 hover:opacity-100 hover:cursor-pointer'>{genre.name}</span>)
                .reduce((prev, curr) => [prev, ', ', curr])
                : "???"
              }</p>
            </li>
            <li><strong>Studio</strong>{anime.studios ? anime.studios
              .map<React.ReactNode>(studio => <p className='opacity-70 hover:opacity-100' key={studio.mal_id}>{studio.name}</p>)
              : <p>???</p>}
            </li>
            <li><strong>Producers</strong>
              <p>{anime.producers.length > 1 ? anime.producers
                .map<React.ReactNode>((prod) => <span className='opacity-70 hover:opacity-100 hover:cursor-pointer' key={prod.mal_id}>{prod.name}</span>)
                .reduce((prev, curr) => [prev, ', ', curr])
                : "???"}
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Separator />
          <div className='flex gap-2 [&>button]:flex [&>button]:flex-col py-2'>
            {character.slice(0, 4).map((char) => {
              return (
                <TooltipProvider key={char.character.mal_id}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={char.character.images.webp.image_url}
                        alt={char.character.name}
                        width={50}
                        height={80}
                        className='rounded object-cover'
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{char.character.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </div>
          <Link href="#character" className='opacity-70 text-sm font-light hover:opacity-100 hover:underline'>See All Character</Link>
        </div>
      </CardContent>
    </Card>
  )
}

export function EpisodCard({ api }: { api: IEpisodes }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {api.data.map((eps) => {
        return (
          <Card key={eps.mal_id}>
            <CardHeader>
              <h3>Episodes {eps.mal_id}</h3>
              <p>{eps.title}</p>
            </CardHeader>
          </Card>
        )
      })}
    </div>
  )
}