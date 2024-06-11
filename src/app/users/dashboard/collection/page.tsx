import Image from 'next/image'
import Link from 'next/link'
import HeaderDashboard from '@/components/Dashboard/Header'
import { authUserSession } from '@/auth'
import prisma from '@/lib/prisma'
import { ICollection } from '@/lib/types'
import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { SquareArrowOutUpRight } from 'lucide-react'
import CollectionButton from '@/components/User/CollectionButton'

export default async function userCollection() {
  const user = await authUserSession()
  const collection = await prisma.collection.findMany({ where: { user_email: user?.email } }).then((res: unknown) => res as ICollection[])

  return (
    <section>
      <HeaderDashboard title="My Collection" />
      <Separator />
      <div className="container grid lg:grid-cols-5 grid-cols-2 gap-4 mt-4">
        {collection.map((collect: ICollection) => {
          return (
            <Card key={collect.anime_mal_id} className='overflow-hidden group/card hover:scale-105 hover:ease-in-out hover:transition'>
              <div className='relative'>
                {collect.anime_image &&
                  <Image
                    src={collect.anime_image}
                    alt='...'
                    width={405}
                    height={630}
                    className='rounded object-cover object-center aspect-[3/4]'
                  />
                }
                <div className='flex items-center flex-col absolute inset-0 justify-center p-4 gap-4 opacity-0 group-hover/card:opacity-100  group-hover/card:bg-background/50'>
                  <Link href={`/anime/${collect.anime_mal_id}`}>
                    <Button variant="ghost" size="icon">
                      <SquareArrowOutUpRight />
                    </Button>
                  </Link>
                  <CollectionButton exist={true} anime_mal_id={collect.anime_mal_id} user_email={collect.user_email} anime_image={collect.anime_image} anime_title={collect.anime_title} />
                </div>
              </div>
              <CardTitle className='p-2 md:text-base truncate group-hover/hover:text-ellipsis text-sm group-hover/card:text-primary group-hover/card:underline'>{collect.anime_title}</CardTitle>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
