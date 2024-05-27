import React, { type FC } from 'react'
import Image, { type ImageProps } from 'next/image'
import Link, { type LinkProps } from 'next/link'
import CountryFlagAndName from '@/components/card/CountryFlagAndName'
import PropertyRating from '@/components/card/PropertyRating'
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton'
import { PropertyCardProps } from '@/utils/types'
import { formatCurrency } from '@/utils/format'

const f = '⇒ PropertyCard.tsx:'

type PropertyCardComponentProps = Readonly<{
  property: PropertyCardProps
}>

const PropertyCard: FC<PropertyCardComponentProps> = ({ property }) => {
  const { id: propertyId, image, name, tagline, country, price } = property
  const linkProps: LinkProps = { href: `/property/${propertyId}` }
  const imageProps: Omit<ImageProps, 'alt'> = {
    src: image,
    fill: true,
    sizes: '(max-width: 768px) 100vw, 50vw',
    className:
      'transform rounded-md object-cover transition-transform duration-500 group-hover:scale-110',
  }
  return (
    <article className='group relative'>
      <Link {...linkProps}>
        <div className='relative mb-2 h-[300px] overflow-hidden rounded-md'>
          <Image
            {...imageProps}
            alt={name}
          />
          {name}
        </div>
        <div className='flex items-center justify-between'>
          <h3>{name.substring(0, 30)}</h3>
          {/* property rating */}
          <PropertyRating
            propertyId={propertyId}
            inPage={false}
          />
        </div>
        <p className='mt-1 text-sm text-muted-foreground'>
          {tagline.substring(0, 40)}
        </p>
        <div className='mt-1 flex items-center justify-between'>
          <p className='mt-1 text-sm'>
            <span>{formatCurrency(price)} night</span>
          </p>
          {/* country and flag */}
          <CountryFlagAndName countryCode={country} />
        </div>
      </Link>
      <div className='z-5 absolute right-5 top-5'>
        {/* favorite toggle button */}
        <FavoriteToggleButton propertyId={propertyId} />
      </div>
    </article>
  )
}
export default PropertyCard
