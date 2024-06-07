import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar'
import { ThemeProvider } from '@/components/Utils/Theme'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'


const inter = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CuyAnimeList',
  description: 'Website Anime indonesia',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <Toaster />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
