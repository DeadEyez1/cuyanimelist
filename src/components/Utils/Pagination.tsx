export default function Pagination({ page, lastPage, setPage }: { page: number, lastPage: number, setPage: any }) {
  function handlePrevPage() {
    setPage((prevState: number) => prevState - 1)
    scrollTop()
  }
  function handleNextPage() {
    setPage((prevState: number) => prevState + 1)
    scrollTop()
  }

  function scrollTop() {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <div className="flex justify-center items-center text-xl py-4 px-2 gap-4">
      { page <= 1
        ? null
        : <button type="button" onClick={handlePrevPage} className="transition-all hover:text-peach">PREV</button>}
      {/* TODO Fix formatter. Still don't know how this Rules work */}
      <p>
        {page}
        {' '}
        of
        {' '}
        {lastPage}
      </p>
      { page >= lastPage
        ? null
        : <button type="button" onClick={handleNextPage} className="transition-all hover:text-peach">NEXT</button>}
    </div>
  )
}
