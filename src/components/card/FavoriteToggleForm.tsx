import React, { type FC } from 'react'

const f = '⇒ FavoriteToggleForm.tsx:'

type FavoriteToggleFormProps = Readonly<{
  favoriteId: string | null
  propertyId: string
}>

const FavoriteToggleForm: FC<FavoriteToggleFormProps> = ({
  favoriteId,
  propertyId,
}) => {
  return (
    <div>
      <h1>FavoriteToggleForm</h1>
    </div>
  )
}
export default FavoriteToggleForm
