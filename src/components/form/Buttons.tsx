'use client'
import React, { type FC } from 'react'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

import { SignInButton } from '@clerk/nextjs'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

const f = '⇒ Buttons.tsx (Buttons):'

type btnSize = 'sm' | 'lg' | 'default'

type SubmitButtonProps = {
  className?: string
  text?: string
  size?: btnSize
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  className = '',
  text = 'Submit',
  size = 'lg',
}) => {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      className={cn('capitalize ', className)}
      disabled={pending}
      size={size}
    >
      {pending ? (
        <>
          <LoaderCircle className='mr-2 h-2 w-2 animate-spin' />
          <span>Please wait...</span>
        </>
      ) : (
        <>{text}</>
      )}
    </Button>
  )
}

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='cursor-pointer p-2'
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  )
}

type CardSubmitButtonProps = {
  isFavorite: boolean
}
export const CardSubmitButton = ({ isFavorite }: CardSubmitButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className='cursor-pointer p-2'
    >
      {pending ? (
        <>
          <LoaderCircle className='mr-2 h-2 w-2 animate-spin' />
        </>
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  )
}
