import Link from 'next/link'
import InputSearch from './inputSearch'
import UserActionButton from './UserActionButton'

export default function Navbar() {
  return (
    <header className="bg-crust">
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-4">
        <Link href="/" className="font-bold text-xl">CuyAnimeList</Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  )
}
