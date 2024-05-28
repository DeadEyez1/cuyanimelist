'use client'
import { CircleArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function HeaderDashboard({ title }: { title: string }) {
  const router = useRouter()
  function handleBack(event: { preventDefault: () => void }) {
    event.preventDefault()
    router.back()
  }
  return (
    <div className="flex justify-between items-center mx-4 my-2">
      <button type="button" onClick={handleBack}>
        <CircleArrowLeft size={32} />
      </button>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  )
}
