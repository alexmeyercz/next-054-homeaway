import LoadingCards from '@/components/card/LoadingCards'
import React, { type FC } from 'react'

const f = '⇒ loading.tsx:'

type LoadingFavoritesProps = {}

const LoadingFavorites: FC<LoadingFavoritesProps> = () => {
  return <LoadingCards />
}
export default LoadingFavorites
