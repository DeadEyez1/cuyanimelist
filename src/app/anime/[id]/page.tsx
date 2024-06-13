import { authUserSession } from "@/auth"
import { AnimeCharacter, AnimeDetailCard, EpisodCard } from "@/components/AnimeList/AnimeCard"
import CollectionButton from "@/components/User/CollectionButton"
import CommentBox from "@/components/User/CommentBox"
import CommentInput from "@/components/User/CommentInput"
import VideoPlayer from "@/components/Utils/VideoPlayer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAnimeCharacter, getAnimeOther, getAnimeRecommendation, getAnimeResponse } from "@/lib/Api"
import prisma from "@/lib/prisma"
import { IAnimeProps, ICharacter, ICollection, IEpisodes } from "@/lib/types"
import { CirclePlay } from "lucide-react"
import Image from "next/image"

type IPrisma = typeof prisma
export default async function AnimePages({ params: { id } }: { params: { id: string } }) {
  const mainAnimeCharacter: ICharacter[] = await getAnimeCharacter(id)
    .then(data => data.filter((role: ICharacter) => role.role === "Main"))
  const animeCharacter: ICharacter[] = await getAnimeCharacter(id)
  const recommendationAnime = await getAnimeRecommendation(id)
  const anime: IAnimeProps = await getAnimeResponse(`anime/${id}`)
  const animeEpisodes = await getAnimeOther(id, "episodes")
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({ where: { user_email: user?.email, anime_mal_id: parseInt(id) } })
    .then((data: unknown) => { if (!data) { return false } return true })

  return (
    <div className="bg-destructive-foreground">
      <section>
        {/* Anime detail section */}
        <div className="flex flex-col lg:flex-row">
          <Dialog>
            <div className="flex flex-col flex-none gap-2 p-4 items-center">
              <Image
                src={anime.images.webp.large_image_url}
                alt={anime.title}
                width={270}
                height={420}
                className='rounded-xl object-cover object-center aspect-[9/14]'
              />
              <DialogTrigger asChild>
                <Button variant="secondary" size="icon" className='w-full'>
                  <CirclePlay className='mr-2 h-4 w-4' />
                  <p>Watch Trailer</p>
                </Button>
              </DialogTrigger>
              <DialogContent className='min-w-max'>
                <VideoPlayer videoId={anime.trailer.youtube_id} />
              </DialogContent>
              {user &&
                <CollectionButton exist={collection} anime_mal_id={anime.mal_id} user_email={user?.email} anime_image={anime.images.webp.image_url} anime_title={anime.title} />
              }
            </div>
          </Dialog>
          <section className="p-4 w-full">
            <h3 className="text-3xl font-bold text-primary">{anime.title}</h3>
            <Tabs defaultValue="summary">
              <TabsList>
                <TabsTrigger id="summary" value="summary">Summary</TabsTrigger>
                <TabsTrigger id="character" value="character">Character</TabsTrigger>
                <TabsTrigger id="episodes" value="episodes">Episodes</TabsTrigger>
              </TabsList>
              <TabsContent value="summary" className="flex flex-col lg:flex-row">
                <p className="w-full">{anime.synopsis}</p>
                <div className="p-4 justify-end">
                  <AnimeDetailCard anime={anime} character={animeCharacter} />
                </div>
              </TabsContent>
              <TabsContent value="character">
                <AnimeCharacter api={animeCharacter} />
              </TabsContent>
              <TabsContent value="episodes">
                <EpisodCard api={animeEpisodes} />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </section>
      <section>
        {/* Comment Section */}
        <div className="py-5">
          <Separator />
          <div className="container p-4 space-y-4">
            <h3 className="font-bold text-peach text-2xl">Comments</h3>
            {user
              && <CommentInput username={user.name} user_email={user.email} image={user.image} anime_mal_id={anime.mal_id} anime_title={anime.title} userId={user.id} />
            }
          </div>
          <CommentBox anime_mal_id={parseInt(id)} />
        </div>
      </section>
    </div>
  )
}