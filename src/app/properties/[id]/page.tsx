import FavoriteToggleButton from '@/components/card/FavoriteToggleButton'
import BreadCrumbs from '@/components/properties/BreadCrumbs'
import ShareButton from '@/components/properties/ShareButton'
import { fetchPropertyDetails } from '@/utils/actions'
import { paths } from '@/utils/paths'
import { redirect } from 'next/navigation'
import React, { type FC } from 'react'

const f = '⇒ page.tsx:'

type PropertyDetailPageProps = {
  params: {
    id: string
  }
}

const PropertyDetailPage: FC<PropertyDetailPageProps> = async ({ params }) => {
  const property = await fetchPropertyDetails(params.id)
  if (!property) {
    return redirect(paths.home())
  }
  const { baths, bedrooms, beds, guests } = property
  const details = {
    baths,
    bedrooms,
    beds,
    guests,
  }
  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className='mt-4 flex items-center justify-between'>
        <h1>{property.name}</h1>
        <div className='flex items-center gap-x-4'>
          <ShareButton
            name={property.name}
            propertyId={property.id}
          />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
    </section>
  )
}
export default PropertyDetailPage
