import React, { type FC } from 'react'
import { Button } from '@/components/ui/button'
import { FaHeart } from 'react-icons/fa'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '@/components/form/Buttons'
import { fetchFavoriteId } from '@/utils/actions'
import FavoriteToggleForm from './FavoriteToggleForm'

const f = '⇒ FavoriteToggleButton.tsx:'

type FavoriteToggleButtonProps = Readonly<{
  propertyId: string
}>

const FavoriteToggleButton: FC<FavoriteToggleButtonProps> = async ({
  propertyId,
}) => {
  const { userId } = auth()

  if (!userId) {
    return <CardSignInButton />
  }
  const favoriteId = await fetchFavoriteId({ propertyId })
  return (
    <FavoriteToggleForm
      favoriteId={favoriteId}
      propertyId={propertyId}
    />
  )
}
export default FavoriteToggleButton
