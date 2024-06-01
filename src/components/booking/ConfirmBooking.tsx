'use client'
import { useProperty } from '@/utils/store'
import { useAuth, SignInButton } from '@clerk/nextjs'
import React, { type FC } from 'react'
import { Button } from '../ui/button'
import FormContainer from '../form/FormContainer'
import { SubmitButton } from '../form/Buttons'
import { createBookingAction } from '@/utils/actions'

const f = '⇒ ConfirmBooking.tsx:'

type ConfirmBookingProps = {}

const ConfirmBooking: FC<ConfirmBookingProps> = () => {
  const { userId } = useAuth()
  const { propertyId, range } = useProperty((state) => state)
  const checkIn = range?.from as Date
  const checkOut = range?.to as Date
  if (!userId) {
    return (
      <SignInButton>
        <Button
          type='button'
          className='w-full'
        >
          Sign In To Complete Booking
        </Button>
      </SignInButton>
    )
  }
  const createBooking = createBookingAction.bind(null, {
    propertyId,
    checkIn,
    checkOut,
  })
  return (
    <section>
      <FormContainer action={createBooking}>
        <SubmitButton
          text='Reserve'
          className='w-full'
        />
      </FormContainer>
    </section>
  )
}
export default ConfirmBooking
