'use client'
import React, { type FC } from 'react'
import { SignOutButton } from '@clerk/nextjs'
import { useToast } from '@/components/ui/use-toast'

const f = '⇒ SignOutLink.tsx (SignOutLink):'

const SignOutLink: FC = () => {
  const { toast } = useToast()
  const handleLogout = () => {
    toast({ description: 'You have been sign out.' })
  }
  return (
    <SignOutButton redirectUrl='/'>
      <button
        className='w-full text-left'
        onClick={handleLogout}
      >
        Logout
      </button>
    </SignOutButton>
  )
}
export default SignOutLink
