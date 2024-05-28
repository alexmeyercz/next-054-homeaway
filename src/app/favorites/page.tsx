import EmptyList from '@/components/home/EmptyList'
import PropertiesList from '@/components/home/PropertiesList'
import { fetchFavorites } from '@/utils/actions'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (FavoritesPage):'

const FavoritesPage: FC = async () => {
  const favorites = await fetchFavorites()
  if (favorites.length === 0) {
    return <EmptyList />
  }
  return <PropertiesList properties={favorites} />
}
export default FavoritesPage
