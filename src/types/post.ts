export interface Post {
  id: number | string
  name: string
  image: string
  body: string
  photoUser: string
  likes: number
  timesShared: number
  createdAt: Date | string
  comments: Comment[]
  alsoLikedTo?: {
    id: string | number
    src: string
    name: string
  }[]
}

export interface Comment {
  id: string | number
  title: string
  src: string
  message: string
  likes: number
}
