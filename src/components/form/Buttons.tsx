'use client'
import React, { type FC } from 'react'
import { RefreshCcw } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

import { SignInButton } from '@clerk/nextjs'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { LuTrash2, LuPenSquare } from 'react-icons/lu'

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

type IconButtonProps = {
  actionType: 'edit' | 'delete'
}
export const IconButton: FC<IconButtonProps> = ({ actionType }) => {
  const { pending } = useFormStatus()
  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <LuPenSquare />
      case 'delete':
        return <LuTrash2 />
      default:
        const never: never = actionType
        throw new Error(`Invalid action type: ${never}`)
    }
  }
  return (
    <Button
      type='submit'
      size='icon'
      variant='link'
      className='cursor-pointer p-2'
    >
      {pending ? <RefreshCcw className='animate-spin' /> : renderIcon()}
    </Button>
  )
}
