export interface Specialist {
  id: number
  name: string
  phone_number: string
  email: string
  description: string
  location: string
  professions: Profession[]
  can_be_called_times: string | null
  region: string
  RegionID: number
  Available: string
  callable: boolean
  Joined: string
  profile_picture: string | null
  reference_pictures: string | null
  PhoneCallbacks: string | null
  rating: string
  drop_off_fee: number
  next_available: string
  highlight: boolean
  visible: boolean
  payed_plan: boolean
  priority: number
}

export interface Profession {
  id: number
  name: string
  aliases: string
}
