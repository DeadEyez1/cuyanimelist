import Link from 'next/link'
import InputSearch from './inputSearch'
import { ThemeToggle } from './ThemeSwitch'
import { UserMenu } from './UserMenu'

export default function Navbar() {
  return (
    <nav className="md:sticky top-0 z-50 bg-background/80 backdrop-blur">
      <div className="flex md:flex-row flex-col justify-between md:items-center px-4 py-2">
        <Link href="/" className="font-bold text-xl">CuyAnimeList</Link>
        <div className='flex gap-2'>
          <InputSearch />
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </nav>
  )
}
