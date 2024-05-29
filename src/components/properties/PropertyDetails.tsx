import React, { type FC } from 'react'
import { formatQuantity } from '@/utils/format'

const f = '⇒ PropertyDetails.tsx:'

type PropertyDetailsProps = {
  details: {
    bedrooms: number
    baths: number
    guests: number
    beds: number
  }
}

const PropertyDetails: FC<PropertyDetailsProps> = ({ details }) => {
  const { bedrooms, baths, guests, beds } = details
  return (
    <p className='text-md font-light'>
      <span>{formatQuantity(bedrooms, 'bedroom')} &middot;</span>
      <span>{formatQuantity(baths, 'bath')} &middot;</span>
      <span>{formatQuantity(guests, 'guest')} &middot;</span>
      <span>{formatQuantity(beds, 'bed')}</span>
    </p>
  )
}
export default PropertyDetails
