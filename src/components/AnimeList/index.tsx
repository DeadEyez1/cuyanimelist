import Image from 'next/image'
import Link from 'next/link'

export default function AnimeList({ api }: { api: any }) {
  return (
    <div className="group grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime: any) => (
        <div
          key={`/${anime.mal_id}`}
          className="box bg-mantle hover:bg-crust rounded-xl drop-shadow border border-mantle overflow-hidden transition-all hover:scale-105 hover:border-overlay0 hover:shadow hover:shadow-blue"
        >
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="cursor-pointer">
            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover" priority />
            <h3 className="font-bold md:text-xl text-md text-center p-2">{anime.title}</h3>
          </Link>
        </div>
      ),
      )}
    </div>
  )
}
