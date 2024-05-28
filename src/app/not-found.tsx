'use client'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="min-h-screen max-w-xl mx-auto  flex justify-center items-center">
      <div className="justify-center text-center items-center">
        <h2 className="text-6xl font-extrabold text-peach">404 Not Found!</h2>
        <p>Button Text</p>
        <button type="button" onClick={() => router.back()} className="text-2xl text-blue transition-all underline">Kembali</button>
      </div>
    </div>
  )
}
