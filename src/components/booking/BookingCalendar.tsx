'use client'
import React, { useEffect, useState, type FC } from 'react'
import { useProperty } from '@/utils/store'
import { type DateRange } from 'react-day-picker'
import {
  defaultSelected,
  generateBlockedPeriods,
  generateDateRange,
  generateDisabledDates,
} from '@/utils/calendar'
import { Calendar } from '@/components/ui/calendar'
import { useToast } from '@/components/ui/use-toast'

const f = '⇒ BookingCalendar.tsx:'

type BookingCalendarProps = {}

const BookingCalendar: FC<BookingCalendarProps> = () => {
  const currentDate = new Date()

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  const bookings = useProperty((state) => state.bookings)
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  })
  console.log(f, 'blockedPeriods →', blockedPeriods)
  const { toast } = useToast()
  const unavailableDates = generateDisabledDates(blockedPeriods)

  useEffect(() => {
    const selectedRange = generateDateRange(range)
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected)
        toast({
          description: 'Some dates are booked. Please select again.',
        })
        return true
      }
      return false
    })
    useProperty.setState({ range })
  }, [range])

  console.log(f, 'unavailableDates →', unavailableDates)

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
