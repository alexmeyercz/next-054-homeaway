'use client'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { type DateRange } from 'react-day-picker'
import React, { type FC } from 'react'

const f = '⇒ BookingCalendar.tsx:'

type BookingCalendarProps = {}

const BookingCalendar: FC<BookingCalendarProps> = () => {
  const currentDate = new Date()
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  }
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
    />
  )
}
export default BookingCalendar
