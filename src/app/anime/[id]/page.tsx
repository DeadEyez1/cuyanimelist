import Image from 'next/image'
import { getAnimeResponse } from '@/libs/Api'
import VideoPlayer from '@/components/Utils/VideoPlayer'
import CollectionButton from '@/components/AnimeList/CollectionButton'
import authUserSession from '@/libs/auth'
import prisma from '@/libs/prisma'
import CommentInput from '@/components/AnimeList/CommentInput'
import CommentBox from '@/components/AnimeList/CommentBox'

export default async function AnimePage({ params: { id } }: { params: { id: string } }) {
  const anime = await getAnimeResponse(`anime/${id}`)
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({ where: { user_email: user?.email, anime_mal_id: id } })
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl">
          {anime.data.title}
          {' '}
          -
          {' '}
          {anime.data.year}
        </h3>
        { !collection && user
        && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}
      </div>
      <div className="pt-4 px-4 flex gap-2 overflow-x-auto">
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
          <h3>SKOR</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
          <h3>EPISODES</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify">{anime.data.synopsis}</p>

      </div>
      <div className="p-4">
        <h3 className="font-bold text-peach text-2xl mb-4">Komentar Penonton</h3>
        <CommentBox anime_mal_id={id} />
        { user
        && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  )
}
