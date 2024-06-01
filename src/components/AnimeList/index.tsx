import Image from 'next/image'
import Link from 'next/link'
import { Layers, Star } from 'lucide-react'
import type { IAnimeProps } from '@/libs/types'

export default function AnimeList({ api }: { api: any }) {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.map((anime: IAnimeProps) =>
      (
        <div
          key={`/${anime.mal_id}`}
          className="group/card hover:scale-105"
        >
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="cursor-pointer">
            <div className="flex justify-center w-auto h-auto">
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={250}
                height={250}
                className="object-cover object-center rounded-lg aspect-[3/4]"
                priority
              />
            </div>
            <div className="flex flex-col px-2 py-1">
              <div className="grid grid-flow-col border-b border-b-lavender">
                <div className="flex gap-2">
                  <Layers size={16} color="red" className="my-0.5" />
                  <h3>{anime.episodes}</h3>
                </div>
                <div className="flex gap-2">
                  <Star size={16} color="yellow" className="my-0.5" />
                  <h3>{anime.score}</h3>
                </div>
                <div className="flex justify-end">
                  <h3>{anime.year}</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <h3 className="font-bold md:text-xl text-md group-hover/card:text-maroon group-hover/card:underline ">{anime.title}</h3>
              </div>
            </div>
          </Link>
        </div>
      ),
      )}
    </div>
  )
}
