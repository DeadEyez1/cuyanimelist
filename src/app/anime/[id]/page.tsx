import Image from 'next/image'
import { getAnimeResponse } from '@/libs/Api'
import VideoPlayer from '@/components/Utils/VideoPlayer'
import CollectionButton from '@/components/AnimeList/CollectionButton'
import authUserSession from '@/libs/auth'
import prisma from '@/libs/prisma'
import CommentInput from '@/components/AnimeList/CommentInput'
import CommentBox from '@/components/AnimeList/CommentBox'
import type { IAnimeProps, IUser } from '@/libs/types'

export default async function AnimePage({ params: { id } }: { params: { id: string } }) {
  const anime: IAnimeProps = await getAnimeResponse(`anime/${id}`)
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({ where: { user_email: user?.email, anime_mal_id: id } })
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl">
          {anime.title}
          {' '}
          -
          {' '}
          {anime.year}
        </h3>
        {!collection && user
          && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.images.webp.image_url} anime_title={anime.title} />}
      </div>
      <div className="pt-4 px-4 flex gap-2 overflow-x-auto">
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
          <h3>PERINGKAT</h3>
          <p>{anime.rank}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
          <h3>SKOR</h3>
          <p>{anime.score}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-b-peach">
          <h3>EPISODES</h3>
          <p>{anime.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap">
        <Image
          src={anime.images.webp.image_url}
          alt={anime.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify">{anime.synopsis}</p>

      </div>
      <div className="p-4">
        <h3 className="font-bold text-peach text-2xl mb-4">Komentar Penonton</h3>
        <CommentBox anime_mal_id={id} />
        {user
          && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.title} />}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.trailer.youtube_id} />
      </div>
    </>
  )
}
