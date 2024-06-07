import Image from 'next/image'
import { getAnimeCharacter, getAnimeRecommendation, getAnimeResponse } from '@/lib/Api'
import CollectionButton from '@/components/AnimeList/CollectionButton'
import prisma from '@/lib/prisma'
import CommentInput from '@/components/AnimeList/CommentInput'
import CommentBox from '@/components/AnimeList/CommentBox'
import type { IAnimeProps, ICharacter, ICollection, IUser } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import VideoPlayer from '@/components/Utils/VideoPlayer'
import { CirclePlay, } from 'lucide-react'
import { AnimeCharacter, AnimeRecommendation } from '@/components/AnimeList/AnimeCard'
import { authUserSession } from '@/auth'
import { Separator } from '@/components/ui/separator'

export default async function tempAnimePage({ params: { id } }: { params: { id: string } }) {
  const animeCharacter: ICharacter[] = await getAnimeCharacter(id)
    .then(data => data.filter((role: ICharacter) => role.role === "Main"))
  const recommendationAnime = await getAnimeRecommendation(id)
  const anime: IAnimeProps = await getAnimeResponse(`anime/${id}`)
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({ where: { user_email: user?.email, anime_mal_id: parseInt(id) } })
    .then((data) => { if (!data) { return false } return true })

  return (
    <div className='bg-destructive-foreground flex flex-col gap-4'>
      <section className='xl:flex'>
        <div className='container gap-4'>
          <Dialog>
            <div className='flex flex-col gap-2'>
              <Image
                src={anime.images.webp.large_image_url}
                alt={anime.images.jpg.large_image_url}
                width={250}
                height={250}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                className='rounded-xl'
              />
              <DialogTrigger asChild>
                <Button variant="secondary" size="icon" className='w-full focus-visible:outline-none'>
                  <CirclePlay className='mr-2 h-4 w-4' />
                  <p>Watch Trailer</p>
                </Button>
              </DialogTrigger>
              <div className='text-sm'>
                <p>Type: {anime.type}</p>
                <p>Rating: {anime.rating}</p>
                <p>Date aired: {anime.aired.string}</p>
                <p>Status: {anime.status}</p>
                <p>Episodes: {!anime.episodes ? "???" : anime.episodes}</p>
                <p>Duration: {anime.duration.split("per ep")}</p>
                <p>Studios: {anime.studios
                  .map<React.ReactNode>(studios => <span className='opacity-70 hover:opacity-100' key={studios.mal_id}>{studios.name}</span>)
                  .reduce((prev, curr) => [prev, ', ', curr])}
                </p>
                <p>Producers: {anime.producers
                  .map<React.ReactNode>(producers => <span className='opacity-70 hover:opacity-100' key={producers.mal_id}>{producers.name}</span>)
                  .reduce((prev, curr) => [prev, ', ', curr])}
                </p>
              </div>
            </div>
            <DialogContent className='min-w-max'>
              <VideoPlayer videoId={anime.trailer.youtube_id} />
            </DialogContent>
          </Dialog>
        </div>
        <div className='p-4'>
          <div className='lg:w-fit w-full'>
            <h3 className='text-4xl font-bold pb-2'>{anime.title}</h3>
            {user &&
              <CollectionButton
                anime_mal_id={anime.mal_id}
                user_email={user?.email}
                anime_image={anime.images.webp.image_url}
                anime_title={anime.title}
                exist={collection}
              />
            }
          </div>
          <p className='py-2'>{anime.synopsis}</p>
          <div className='gap-2 flex pt-4'>
            {anime.genres.map((genre) => {
              return (
                <Badge key={genre.mal_id}>{genre.name}</Badge>
              )
            })}
          </div>
          <div className='py-4'>
            <AnimeCharacter api={animeCharacter} />
          </div>
        </div>
      </section>
      <section>
        <div>
          <Separator className='' />
          <div className="p-4">
            <h3 className="font-bold text-peach text-2xl mb-4">Comments</h3>
            {user
              && <CommentInput username={user.name} user_email={user.email} image={user.image} anime_mal_id={anime.mal_id} anime_title={anime.title} />
            }
          </div>
          <CommentBox anime_mal_id={parseInt(id)} />
        </div>
        <div>
          <AnimeRecommendation api={recommendationAnime} />
        </div>
      </section>
    </div>
  )
}



// async function AnimePage({ params: { id } }: { params: { id: string } }) {
//   const anime: IAnimeProps = await getAnimeResponse(`anime/${id}`)
//   const user = await authUserSession()
//   const collection = await prisma.collection.findFirst({ where: { user_email: user?.email, anime_mal_id: id } })
//   return (
//     <>
//       <div className="pt-4 px-4">
//         <h3 className="text-2xl">
//           {anime.title}
//           {' '}
//           -
//           {' '}
//           {anime.year}
//         </h3>
//         {!collection && user
//           && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.images.webp.image_url} anime_title={anime.title} />}
//       </div>
//       <div className="pt-4 px-4 flex gap-2 overflow-x-auto">
//         <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
//           <h3>PERINGKAT</h3>
//           <p>{anime.rank}</p>
//         </div>
//         <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
//           <h3>SKOR</h3>
//           <p>{anime.score}</p>
//         </div>
//         <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
//           <h3>EPISODES</h3>
//           <p>{anime.episodes}</p>
//         </div>
//       </div>
//       <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap">
//         <Image
//           src={anime.images.webp.image_url}
//           alt={anime.images.jpg.image_url}
//           width={250}
//           height={250}
//           className="w-full rounded object-cover"
//         />
//         <p className="text-justify">{anime.synopsis}</p>

//       </div>
//       <div className="p-4">
//         <h3 className="font-bold text-peach text-2xl mb-4">Komentar Penonton</h3>
//         <CommentBox anime_mal_id={id} />
//         {user
//           && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.title} />}
//       </div>
//       <div>
//         <VideoPlayer youtubeId={anime.trailer.youtube_id} />
//       </div>
//     </>
//   )
// }
