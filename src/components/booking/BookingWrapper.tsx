'use client'
import React, { useEffect, type FC } from 'react'
import { useProperty } from '@/utils/store'
import { Booking } from '@/utils/types'
import BookingCalendar from './BookingCalendar'
import BookingContainer from './BookingContainer'

const f = '⇒ BookingWrapper.tsx:'

type BookingWrapperProps = {
  propertyId: string
  price: number
  bookings: Booking[]
}

const BookingWrapper: FC<BookingWrapperProps> = ({
  propertyId,
  price,
  bookings,
}) => {
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      bookings,
    })
  }, [])
  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  )
}
export default BookingWrapper
