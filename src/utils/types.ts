export type actionFunction = (
  prevState: any,
  formData: FormData,
) => Promise<{ message: string }>

export type PropertyCardProps = {
  image: string
  id: string
  name: string
  tagline: string
  country: string
  price: number
}

export type SearchParamsType = {
  category?: string
  search?: string
}

export type RatingCountType = {
  rating: number
  count: number
}

export type DateRangeSelect = {
  startDate: Date
  endDate: Date
  key: string
}
export type Booking = {
  checkIn: Date
  checkOut: Date
}

export type RentalType = {
  id: string
  name: string
  tagline: string
  category: string
  image: string
  country: string
  description: string
  price: number
  guests: number
  bedrooms: number
  beds: number
  baths: number
  amenities: string
  createdAt: Date
  updatedAt: Date
  profileId: string
}
