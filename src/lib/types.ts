import { z } from "zod"

export interface IAnimeProps {
  mal_id: number
  images: IAnimeImages
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
    images: {
      image_url: string
      small_image_url: string
      medium_image_url: string
      large_image_url: string
      maximum_image_url: string
    }
  }
  title: string
  title_english: string
  title_japanese: string
  type: string
  episodes: number
  status: string
  duration: string
  rating: string
  score: number
  rank: number
  synopsis: string
  year: number
  genres: IAnimeDetail[]
  aired: IAired
  producers: IAnimeDetail[]
  studios: IAnimeDetail[]
  demographics: IAnimeDetail[]
}

export interface IAnimeImages {
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

interface IAnimeDetail {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface IUser {
  id: string
  name: string
  email: string
  image: string
}

export interface IComment {
  id?: number
  username?: string
  anime_mal_id?: number
  anime_title?: string
  comment?: string
  User?: IUser
  createdAt?: string
}

export interface ICollection {
  anime_mal_id: number
  user_email: string
  anime_image: string | null
  anime_title: string
}

interface IAired {
  from: string
  to: string
  prop: {
    from: {
      date: number
      month: number
      year: number
    }
    to: {
      date: number
      month: number
      year: number
    }
  }
  string: string
}

export interface ICharacter {
  character: {
    mal_id: number
    images: IAnimeImages
    name: string
  }
  role: string
}

export interface IEpisodes {
  pagination: {
    last_visible_page: number
    has_next_page: boolean
  }
  data: [{
    mal_id: number
    title: string
    title_japanese: string
    title_romanji: string
    aired: string
    filler: boolean
    recap: boolean
  }]
}

interface IEpisodeDetail {
  title_japanese: string
  title_romanji: string
  duration: number
  aired: string
  filler: boolean
  recap: boolean
  synopsis: string
}

export const commentSchema = z.object({
  userId: z.string(),
  username: z.string(),
  user_email: z.string().email(),
  anime_mal_id: z.number(),
  anime_title: z.string(),
  comment: z.string()
    .min(3, { message: "Comment must be at least 3 Characters!." })
    .max(1000, { message: "Your comment is too long, no one gonna read it. Max character 1000." }),
})