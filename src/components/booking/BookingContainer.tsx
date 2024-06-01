'use client'
import React, { type FC } from 'react'
import { useProperty } from '@/utils/store'
import ConfirmBooking from './ConfirmBooking'
import BookingForm from './BookingForm'

const f = '⇒ BookingContainer.tsx:'

type BookingContainerProps = {}

const BookingContainer: FC<BookingContainerProps> = () => {
  const state = useProperty((state) => state)
  console.log(f, 'state →', state)
  return (
    <div className='w-full'>
      <BookingForm />
      <ConfirmBooking />
    </div>
  )
}
export default BookingContainer
