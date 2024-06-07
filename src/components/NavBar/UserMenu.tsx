import { CircleUserRound } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { authUserSession, signIn } from "@/auth";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

// TODO make avatar a bit small
export async function UserMenu() {
  const user = await authUserSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {user && <Avatar className="ring-2">
            <AvatarImage src={user?.image} />
            <AvatarFallback className="bg-primary font-bold">?</AvatarFallback>
          </Avatar>
          }
          <CircleUserRound />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-popover rounded-md m-2 p-2 border" asChild>
        {user
          ? (<div>
            <DropdownMenuLabel className="p-1 rounded">
              <p>Login sebagai:</p>
              <p>{user?.email}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="h-[1px] bg-muted" />
            <Link href="/users/dashboard">
              <DropdownMenuItem className="cursor-pointer hover:bg-muted p-1 rounded">Dashboard</DropdownMenuItem>
            </Link>
            <Link href="/users/dashboard/collection">
              <DropdownMenuItem className="cursor-pointer hover:bg-muted p-1 rounded">Koleksi</DropdownMenuItem>
            </Link>
            <Link href="/users/dashboard/comment">
              <DropdownMenuItem className="cursor-pointer hover:bg-muted p-1 rounded">Komentar</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator className="h-[1px] bg-muted" />
            <Link href="/api/auth/signout">
              <DropdownMenuItem className="cursor-pointer text-destructive hover:bg-muted p-1">Keluar</DropdownMenuItem>
            </Link>
          </div>)
          : (<div>
            <Link href='/api/auth/signin'>
              <DropdownMenuItem className="cursor-pointer" >Log in</DropdownMenuItem>
            </Link>
          </div>)
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}