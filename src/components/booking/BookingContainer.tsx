'use client'
import React, { type FC } from 'react'
import { useProperty } from '@/utils/store'
import ConfirmBooking from './ConfirmBooking'
import BookingForm from './BookingForm'

const f = '⇒ BookingContainer.tsx:'

type BookingContainerProps = {}

const BookingContainer: FC<BookingContainerProps> = () => {
  const { range } = useProperty((state) => state)
  if (!range || !range.from || !range.to) {
    return null
  }
  if (range.to.getTime() === range.from.getTime()) {
    return null
  }

  return (
    <div className='w-full'>
      <BookingForm />
      <ConfirmBooking />
    </div>
  )
}
export default BookingContainer
