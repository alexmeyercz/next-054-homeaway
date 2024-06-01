'use client'
import React, { useEffect, type FC } from 'react'
import { useProperty } from '@/utils/store'
import ConfirmBooking from './ConfirmBooking'
import BookingForm from './BookingForm'
import { useState } from 'react'
import { type DateRange } from 'react-day-picker'
import { defaultSelected, generateBlockedPeriods } from '@/utils/calendar'
import { Calendar } from '../ui/calendar'

const f = '⇒ BookingCalendar.tsx:'

type BookingCalendarProps = {}

const BookingCalendar: FC<BookingCalendarProps> = () => {
  const currentDate = new Date()
  const [range, setRange] = React.useState<DateRange | undefined>(
    defaultSelected,
  )
  const bookings = useProperty((state) => state.bookings)
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  })
  console.log(f, 'bookings →', bookings)
  useEffect(() => {
    useProperty.setState({ range })
  }, [range])
  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
      disabled={blockedPeriods}
    />
  )
}
export default BookingCalendar
