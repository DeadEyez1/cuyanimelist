import { env } from './env'
import type { IAnimeProps, ICharacter } from './types'

export async function getAnimeResponse(resource: string, query?: string) {
  const data = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch data');
      return res.json()
    })

  return data.data
  // return data.data as IAnimeProps
}

export async function getAnimeCharacter(animeId: string) {
  const data = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/anime/${animeId}/characters`).then(res => res.json())
  return data.data
}
export async function getAnimeRecommendation(animeId: string) {
  const data = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/anime/${animeId}/recommendations`).then(res => res.json())
  return data.data
}

export async function getNestedAnimeResponse(resource: string, objectProperty: string) {
  const data = await getAnimeResponse(resource)
  const mappingData = data.flatMap((items: { [x: string]: any }) => items[objectProperty])
  return shuffle(mappingData)
}

function shuffle([...data]) {
  let index = data.length
  while (index) {
    const random = Math.floor(Math.random() * index--);
    [data[index], data[random]] = [data[random], data[index]]
  }

  const result = data.slice(0, 10)
  return result
}