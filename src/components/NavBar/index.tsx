import Link from 'next/link'
import InputSearch from './inputSearch'
import { ThemeToggle } from './ThemeSwitch'
import { UserMenu } from './UserMenu'

export default function Navbar() {
  return (
    <header className="">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4">
        <Link href="/" className="font-bold text-xl">CuyAnimeList</Link>
        <div className='flex gap-2'>
          <InputSearch />
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
