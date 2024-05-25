'use client'
import React, { type FC } from 'react'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

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
