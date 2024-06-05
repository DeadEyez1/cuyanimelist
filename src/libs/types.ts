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

interface IAnimeDetail {
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
  id: string
  anime_mal_id: string
  user_email: string
  username: string
  anime_title: string
  comment: string
}

export interface IDatabase {
  anime_mal_id: string
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