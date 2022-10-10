export interface Post {
  id: number
  name: string
  image: string
  body: string
  photoUser: string
  likes: number
  timesShared: number
  createdAt: Date
  comments: Comment[]
  alsoLikedTo: {
    id: string
    src: string
    name: string
  }[]
}

export interface Comment {
  id: number
  title: string
  src: string
  message: string
  likes: number
}
