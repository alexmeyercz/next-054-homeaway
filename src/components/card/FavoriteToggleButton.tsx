import React, { type FC } from 'react'
import { Button } from '@/components/ui/button'
import { FaHeart } from 'react-icons/fa'

const f = '⇒ FavoriteToggleButton.tsx:'

type FavoriteToggleButtonProps = Readonly<{
  propertyId: string
}>

const FavoriteToggleButton: FC<FavoriteToggleButtonProps> = ({
  propertyId,
}) => {
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
