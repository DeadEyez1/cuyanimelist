import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { ChevronRight } from 'lucide-react'

export default function Header({ title, linkHref, linkTitle }: { title: string, linkHref?: string, linkTitle?: string }) {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ?
        <Button variant="secondary" asChild>
          <Link href={linkHref}>
            <p>{linkTitle}</p>
            <ChevronRight className='size-4' />
          </Link>
        </Button>
        : <h3>{linkTitle}</h3>
      }
    </div>
  )
}
