"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { IAnimeProps, IUser } from "@/lib/types";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from "../ui/button";
import Link from "next/link";

export default function AnimeCarousel({ api }: { api: IAnimeProps[] }) {
  const [carouselApi, setcarouselApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true
      }}
    >
      <CarouselContent>
        {api.map((anime) => {
          return (
            <CarouselItem key={anime.mal_id}>
              <Link href={`/anime/${anime.mal_id}`}>
                <Card className="flex relative h-60">
                  {!!anime.trailer.images.large_image_url &&
                    <Image
                      src={anime.trailer.images.large_image_url}
                      alt={anime.title}
                      className='object-cover brightness-50'
                      fill
                      priority
                    />
                  }
                  <div className="z-10 flex bg-background/80 w-screen overflow-clip text-balance">
                    <Image
                      src={anime.images.webp.large_image_url}
                      alt={anime.title}
                      width={180}
                      height={280}
                      className='rounded-xl object-cover object-center aspect-[9/14] m-2 md:block hidden'
                    />
                    <CardContent className="flex md:px-6 px-2 items-end md:pb-4 pb-2">
                      <div className="flex-1">
                        <p className="bg-foreground text-xs md:text-base text-background font-bold px-2 w-fit">AIRING</p>
                        <CardTitle className="md:text-2xl text-lg text-primary">{anime.title}</CardTitle>
                        <p className="line-clamp-3 md:text-sm text-xs">{anime.synopsis}</p>
                        <div className="flex gap-1 overflow-hidden">
                          {anime.demographics.map((demo) => {
                            return (<Badge key={demo.mal_id} className="bg-destructive">{demo.name}</Badge>)
                          })}
                          {anime.genres.map((genre) => {
                            return (<Badge key={genre.mal_id} className="">{genre.name}</Badge>)
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <div className="flex items-center justify-between">
        <div>
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselDots />
      </div>
    </Carousel>
  )
}
