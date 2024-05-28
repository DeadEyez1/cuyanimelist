export default function HeaderMenu({ title }: { title: string }) {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl font-bold">{title}</h3>
      </div>
    </div>
  )
}
