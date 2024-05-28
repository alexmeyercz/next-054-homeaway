import { Skeleton } from '@/components/ui/skeleton'
import React, { type FC } from 'react'

const f = '⇒ loading.tsx (LoadingProperties):'

const LoadingProperties: FC = () => {
  return <Skeleton className='h-[300px] w-full rounded md:h-[500px]' />
}
export default LoadingProperties
