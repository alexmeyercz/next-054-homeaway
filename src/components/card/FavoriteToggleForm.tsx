'use client'

import React, { type FC } from 'react'
import { usePathname } from 'next/navigation'
import FormContainer from '../form/FormContainer'
import { toggleFavoriteAction } from '@/utils/actions'
import { CardSubmitButton } from '../form/Buttons'

const f = '⇒ FavoriteToggleForm.tsx:'

type FavoriteToggleFormProps = Readonly<{
  propertyId: string
  favoriteId: string | null
}>

const FavoriteToggleForm: FC<FavoriteToggleFormProps> = ({
  favoriteId,
  propertyId,
}) => {
  const pathname = usePathname()
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  })
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  )
}
export default FavoriteToggleForm
