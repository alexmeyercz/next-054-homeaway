import React, { type FC } from 'react'
import { Button } from '@/components/ui/button'
import { FaHeart } from 'react-icons/fa'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '@/components/form/Buttons'

const f = '⇒ FavoriteToggleButton.tsx:'

type FavoriteToggleButtonProps = Readonly<{
  propertyId: string
}>

const FavoriteToggleButton: FC<FavoriteToggleButtonProps> = ({
  propertyId,
}) => {
  const { userId } = auth()
  if (!userId) {
    return <CardSignInButton />
  }
  return (
    <Button
      size='icon'
      variant='outline'
      className='cursor-pointer p-2'
    >
      <FaHeart />
    </Button>
  )
}
export default FavoriteToggleButton
