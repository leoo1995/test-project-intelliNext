export type AuthUser = {
  id: string
  firstName: string
  lastName: string
  title: string
  location: Location
  joined: Date
  description: string
  email: string
  website: string
  profilePhoto: string
  backgroundPhoto: string
}
export type Location ={
  city: string
  country: string
}