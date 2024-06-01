import type { IAnimeProps } from '@/libs/types'

export default function AnimeCard({ api }: any) {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.map((anime: IAnimeProps) => (
        <div
          key={anime.mal_id}
          className="box bg-mantle"
        >

        </div>
      ))}
    </div>
  )
}
