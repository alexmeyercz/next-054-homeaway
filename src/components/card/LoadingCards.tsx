import { Skeleton } from '@/components/ui/skeleton'
import React, { type FC } from 'react'

const f = '⇒ LoadingCards.tsx:'

const SkeletonCard: FC = () => {
  return (
    <div>
      <Skeleton className='h-[300px] rounded-md' />
      <Skeleton className='mt-2 h-4 w-3/4' />
      <Skeleton className='mt-2 h-4 w-1/2' />
    </div>
  )
}

const LoadingCards: FC = () => {
  return (
    <div className='mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}

export default LoadingCards
