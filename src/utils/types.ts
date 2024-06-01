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
