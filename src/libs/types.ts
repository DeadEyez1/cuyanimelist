export interface IAnimeProps {
  mal_id: number
  images: IAnimeImages
  trailer: {
    youtube_id: string
  }
  title: string
  type: string
  episodes: number
  rating: string
  score: number
  rank: number
  synopsis: string
  year: number
  genres: IAnimeGenres[]
}

interface IAnimeImages {
  jpg: {
    image_url: string
    small_image_url: string
    large_image_url: string
  }
  webp: {
    image_url: string
    small_image_url: string
    large_image_url: string
  }
}

interface IAnimeGenres {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface IUser {
  name: string
  email: string
  image: string
}

export interface IComment {
  anime_mal_id: string
  user_email: string
  username: string
  anime_title: string
}

export interface IDatabase {
  anime_mal_id: string
  user_email: string
  anime_image: string
  anime_title: string
}
