import { cn } from '@/lib/utils'
import React, { type FC } from 'react'
import { FaStar } from 'react-icons/fa'

const f = '⇒ PropertyRating.tsx:'

type PropertyRatingProps = Readonly<{
  propertyId: string
  inPage: boolean
}>

const PropertyRating: FC<PropertyRatingProps> = ({ propertyId, inPage }) => {
  const rating = 4.7
  const count = 100
  const className = cn(
    'flex gap-1 items-center',
    inPage ? 'text-md' : 'text-xs',
  )
  const countText = count > 1 ? 'reviews' : 'review'
  const countValue = `(${count}) ${inPage ? countText : ''}`
  return (
    <span className={className}>
      <FaStar className='h-3 w-3' /> {rating} {countValue}
    </span>
  )
}
export default PropertyRating
