import { create } from 'zustand'
import { type Booking } from './types'
import { type DateRange } from 'react-day-picker'
// Define the state's shape
type PropertyState = {
  propertyId: string
  price: number
  bookings: Booking[]
  range: DateRange | undefined
}

export const useProperty = create<PropertyState>(() => {
  return {
    propertyId: '',
    price: 0,
    bookings: [],
    range: undefined,
  }
})
