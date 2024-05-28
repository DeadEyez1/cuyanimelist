import { env } from './env'

export async function getAnimeResponse(resource: string, query?: string) {
  const data = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  return await response(data)
}

export async function getNestedAnimeResponse(resource: string, objectProperty: string) {
  const data = await getAnimeResponse(resource)
  const mappingData = data.data.flatMap((items: { [x: string]: any }) => items[objectProperty])
  return shuffle(mappingData)
}

function shuffle([...data]) {
  let index = data.length
  while (index) {
    const random = Math.floor(Math.random() * index--);
    [data[index], data[random]] = [data[random], data[index]]
  }

  const result = { data: data.slice(0, 10) }
  return result
}

async function response(data: Response) {
  const anime = await data.json()
  return anime
}
