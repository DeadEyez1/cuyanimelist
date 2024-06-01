"use client"

import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <Button variant='ghost' size='icon' disabled><Moon /></Button>

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light"
        ? <Moon />
        : <Sun />
      }
    </Button>
  )
}